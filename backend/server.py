# Directory: /backend
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import boto3
from botocore.exceptions import ClientError

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# AWS SES configuration
AWS_REGION = os.getenv('AWS_REGION', 'us-east-1')
SES_SENDER_EMAIL = os.getenv('SES_SENDER_EMAIL')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')

# Initialize SES client
# When running on EC2 with IAM role, boto3 automatically uses the role
# When running locally, it will look for credentials in environment or ~/.aws/credentials
ses_client = boto3.client('ses', region_name=AWS_REGION)

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    """
    Simple health check endpoint to verify backend is running
    """
    return jsonify({
        'status': 'ok',
        'message': 'Backend is running'
    }), 200

# Contact form email endpoint
@app.route('/api/email/send', methods=['POST'])
def send_email():
    """
    Endpoint to handle contact form submissions and send emails via AWS SES
    Expects JSON with: name, email, message
    """
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate required fields
        if not data or not all(k in data for k in ('name', 'email', 'message')):
            return jsonify({
                'success': False,
                'error': 'Missing required fields: name, email, and message are required'
            }), 400
        
        # Extract form data
        name = data['name']
        email = data['email']
        message = data['message']
        
        # Validate SES configuration
        if not all([SES_SENDER_EMAIL, RECIPIENT_EMAIL]):
            print("Error: AWS SES configuration is incomplete")
            return jsonify({
                'success': False,
                'error': 'Email service is not configured'
            }), 500
        
        # Email body - plain text
        body_text = f"""
New contact form submission:

Name: {name}
Email: {email}

Message:
{message}

---
This message was sent from your portfolio contact form.
Reply to: {email}
        """
        
        # Email body - HTML
        body_html = f"""
        <html>
        <head></head>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
            <hr>
            <p><em>This message was sent from your portfolio contact form.</em></p>
            <p>Reply to: {email}</p>
        </body>
        </html>
        """
        
        # Send email via AWS SES
        print(f"Sending email via SES to {RECIPIENT_EMAIL}")
        response = ses_client.send_email(
            Source=SES_SENDER_EMAIL,
            Destination={
                'ToAddresses': [RECIPIENT_EMAIL]
            },
            Message={
                'Subject': {
                    'Data': f'New Contact Form Message from {name}',
                    'Charset': 'UTF-8'
                },
                'Body': {
                    'Text': {
                        'Data': body_text,
                        'Charset': 'UTF-8'
                    },
                    'Html': {
                        'Data': body_html,
                        'Charset': 'UTF-8'
                    }
                }
            },
            ReplyToAddresses=[email]
        )
        
        print(f"Email sent successfully via SES. MessageId: {response['MessageId']}")
        
        return jsonify({
            'success': True,
            'message': 'Email sent successfully',
            'messageId': response['MessageId']
        }), 200
        
    except ClientError as e:
        error_code = e.response['Error']['Code']
        error_message = e.response['Error']['Message']
        print(f"SES Error [{error_code}]: {error_message}")
        
        return jsonify({
            'success': False,
            'error': f'Failed to send email: {error_message}'
        }), 500
        
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'Failed to send email'
        }), 500

# Run the application
if __name__ == '__main__':
    port = int(os.getenv('PORT', 3000))
    debug_mode = os.getenv('FLASK_ENV', 'development') == 'development'
    
    print(f"Starting Flask server on port {port}")
    print(f"Debug mode: {debug_mode}")
    print(f"Email provider: AWS SES with IAM Role")
    
    app.run(
        host='0.0.0.0',
        port=port,
        debug=debug_mode
    )