import React from 'react';

const cards = [
  { label: 'Localização', value: 'Brasil', sub: 'Disponível para remoto' },
  { label: 'Foco atual', value: 'Java + Spring Boot', sub: 'APIs REST & microsserviços' },
  { label: 'GitHub', value: 'Marcelotih', sub: 'github.com/Marcelotih' },
  { label: 'Instagram', value: '@whoisaugustoo', sub: 'instagram.com/whoisaugustoo' },
];

export default function AboutScreen() {
  return (
    <div className="section">
      <div className="section-tag">// sobre mim</div>
      <h2 className="section-title">Quem sou eu</h2>
      <p className="about-body">
        Sou o Marcelo Augusto, desenvolvedor backend e front focado em Java e Spring Boot e react.
        Gosto de criar sistemas, fazer projetos e treinar enquanto da tempo, eu odeio cafe e acho q deveria ser exterminado da terra.
      </p>
      <div className="about-grid">
        {cards.map((card, i) => (
          <div key={i} className="about-card">
            <div className="about-card-label">{card.label}</div>
            <div className="about-card-value">{card.value}</div>
            <div className="about-card-sub">{card.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}