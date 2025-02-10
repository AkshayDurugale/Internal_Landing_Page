import React from "react";
import "./FeaturesSection.css"; 

const features = [
  {
    id: "01",
    title: "User-Friendly Interface",
    description: "Our platform offers seamless task management to boost your efficiency.",
    icon: "🔗",  
  },
  {
    id: "02",
    title: "Collaborate & Share Effortlessly",
    description: "Invite team members to work together and achieve your goals faster.",
    icon: "✈️",  
  },
  {
    id: "03",
    title: "Effortless Collaboration",
    description: "Invite team members to work together and achieve your goals faster.",
    icon: "💡",  
  },
  {
    id: "04",
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
    icon: "📋",  
  },
];

const FeaturesSection = () => {
  return (
    <div className="container features-section text-center">
      <h1 className="section-title">
        Transform Your Productivity with Our <br /> Innovative To-Do List Features
      </h1>
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div className="col-md-3 feature-card" key={index}>
            <div className="feature-box">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <span className="feature-number">{feature.id}</span>
                <h5 className="feature-title">{feature.title}</h5>
                <div className="feature-underline"></div>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
