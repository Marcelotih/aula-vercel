import React from 'react';

const sections = [
  {
    title: 'backend',
    items: [
      { name: 'Java', cat: 'Linguagem' },
      { name: 'Spring Boot', cat: 'Framework' },
      { name: 'Spring MVC', cat: 'Web' },
      { name: 'Spring Security', cat: 'Auth' },
      { name: 'Maven', cat: 'Build' },
    ],
  },
  {
    title: 'banco de dados e versionamento',
    items: [
      { name: 'MySQL', cat: 'Banco' },
      { name: 'Git', cat: 'Versionamento' },
      { name: 'GitHub', cat: 'Repositório' },
    ],
  },
   {
    title: 'front-end',
    items: [
      { name: 'React', cat: 'Framework' },
      { name: 'JavaScript', cat: 'Linguagem' },
      { name: 'HTML/CSS', cat: 'Web' },
    ],
  },
];


export default function StackScreen() {
  return (
    <div className="section">
      <div className="section-tag">// skills</div>
      <h2 className="section-title">Minha Stack</h2>

      {sections.map((section, si) => (
        <div key={si}>
          <div className="stack-section-label">
            <span>{section.title}</span>
          </div>
          <div className="stack-grid">
            {section.items.map((tech, ti) => (
              <div key={ti} className="stack-pill">
                <div className="stack-pill-name">{tech.name}</div>
                <div className="stack-pill-cat">{tech.cat}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}