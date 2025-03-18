import React from "react";
import "./cards.css"; // Подключаем стили

const cards = [
  { title: "Soon", description: "Coming soon", link: "#" },
  { title: "Product", description: "Product description", link: "./picer.html" },
  { title: "Soon", description: "Coming soon", link: "#" },
];

const Card = ({ title, description, link }) => (
  <div className="box">
    <h1>{title}</h1>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Link
    </a>
  </div>
);

const App = () => (
  <div className="app">
    <h1>Glowing Cards</h1>
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  </div>
);

export default App;
