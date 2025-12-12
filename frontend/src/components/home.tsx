import { useEffect, useState } from "react";

type HomeProps = {
  scrollToSection: (id: string) => void;
};

export default function HomePage({}: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-3xl 3xl p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Hello! I'm Vincent.
        </h1>

        <TypingTitles />
      </div>
    </div>
  );
}

function TypingTitles() {
  const titles = [
    "Data Scientist",
    "Software Engineer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "Web Developer",
  ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const handler = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handler);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <div className="text-white text-3xl font-bold h-10">
      {text}|
    </div>
  );
}
