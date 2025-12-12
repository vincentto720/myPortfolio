import { FaMobileAlt, FaSpotify, FaBrain } from "react-icons/fa";

export const projects = [
  {
    title: "Visionary",
    subtitle: "iOS / Android App",
    icon: <FaMobileAlt size={32} />,
    description:
      "Visionary is a real-time image recognition application built using Optical Character Recognition (OCR) and Object-Relational Mapping (ORM). Designed as a senior project, our 5-person team created an app capable of extracting information from images and converting it into structured data.",
    features: [
      {
        title: "OCR Integration",
        description: "Implemented accurate text extraction from real-time images using OCR pipelines.",
      },
      {
        title: "ORM-Based Data Processing",
        description:
          "Replaced raw SQL queries with Python ORM code to improve efficiency, security, and maintainability.",
      },
    ],
    tech: ["Python", "TypeScript", "Django", "React Native", "PostgreSQL", "OCR", "ORM"],
    demoUrl: "https://www.cs.csub.edu/seniorexpo/2025/CMPS/Visionary/poster.pdf", // Add demo URL here
    githubUrl: "", 
  },
  {
    title: "Walkmen",
    subtitle: "Full-Stack Web App",
    icon: <FaSpotify size={32} />,
    description:
      "Walkmen is a Spotify-integrated web application that allows users to store, analyze, and visualize Spotify playlist data. Built with OAuth authentication, PHP, SQL, JavaScript, and cosine similarity algorithms, the project focuses heavily on data integrity and optimized database design.",
    features: [
      {
        title: "Spotify API + OAuth",
        description: "Implemented secure Spotify OAuth login and data retrieval using the official API.",
      },
      {
        title: "Database Normalization to 4NF",
        description:
          "Achieved Fourth Normal Form by removing multivalued dependencies and optimizing relational structures.",
      },
    ],
    tech: ["PHP", "JavaScript", "PostsgreSQL", "Spotify API", "OAuth"],
    demoUrl: "",
    githubUrl: "", 
  },
  {
    title: "Neural Networks Classifier",
    subtitle: "Machine Learning Project",
    icon: <FaBrain size={32} />,
    description:
      "Built a neural network to predict credit scores using cleaned and preprocessed data. Achieved a final accuracy of 73%, improving significantly over the baseline model. Used Pandas for data processing, visualization libraries for heatmaps, and Keras to train and evaluate the model.",
    features: [
      {
        title: "Data Cleaning + Visualization",
        description:
          "Cleaned missing values (Forward/Backward Fill), produced heat maps, and prepared structured input features.",
      },
      {
        title: "Keras Neural Network Model",
        description: "Tuned layers, optimized loss, and achieved 0.60 loss with improved accuracy.",
      },
    ],
    tech: ["Python", "Keras", "Pandas", "Neural Networks", "Data Visualization"],
    demoUrl: "",
    githubUrl: "", 
  },
];