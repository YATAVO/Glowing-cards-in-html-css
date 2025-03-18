import React from "react";

const cards = [
  { title: "Soon", description: "Coming soon", link: "#" },
  { title: "Product", description: "Product description", link: "./picer.html" },
  { title: "Soon", description: "Coming soon", link: "#" },
];

const Card = ({ title, description, link }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>Glowing Cards</h1>
      <div className="container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
