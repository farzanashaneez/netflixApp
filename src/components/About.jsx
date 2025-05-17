import React from "react";

const About = () => {
  const questions = [
    "What Is Netflix?",
    "How much does it cost",
    "where can i watch?",
    "How do i cancel",
    "Is netflix good for kids",
    "What can I watch on netflix",
  ];
  return (
    <div className="mx-9">
      <h1 className="font-nsans-bold sm:text-4xl p-4 capitalize">
        Frequently Asked Questions
      </h1>
      {questions.map((quest) => (
        <div className="relative flex h-20 bg-gray-500/30 m-2 items-center ">
          <p className="font-nsans-light sm:text-2xl p-4 capitalize">{quest}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
