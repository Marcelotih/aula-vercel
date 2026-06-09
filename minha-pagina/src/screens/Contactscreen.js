import React, { useState, useEffect } from 'react';
import { colors, spacing, radius } from '../theme';

const links = [
  {
    label: 'GitHub',
    value: 'github.com/Marcelotih',
    url: 'https://github.com/Marcelotih',
    icon: '{ }',
  },
  {
    label: 'Instagram',
    value: '@whoisaugustoo',
    url: 'https://www.instagram.com/whoisaugustoo/',
    icon: '◎',
  },
];

function LinkCard({ label, value, url, icon }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <div
        style={{
          ...styles.linkCard,
          transform: isPressed ? 'scale(0.97)' : 'scale(1)',
          transition: 'transform 0.15s ease',
        }}
      >
        <div style={styles.iconBox}>
          <span style={styles.iconText}>{icon}</span>
        </div>
        <div style={styles.linkInfo}>
          <span style={styles.linkLabel}>{label}</span>
          <span style={styles.linkValue}>{value}</span>
        </div>
        <span style={styles.arrow}>↗</span>
      </div>
    </a>
  );
}

export default function ContactScreen() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div
          style={{
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <p style={styles.tag}> contato</p>
          <h1 style={styles.title}>Vamos conversar</h1>

          <div style={styles.card}>
            <div style={styles.availBadge}>
              <div style={styles.availDot} />
              <span style={styles.availText}>Disponível para projetos</span>
            </div>

            <p style={styles.intro}>
              Quer colaborar em algum projeto, tem uma oportunidade ou só quer trocar
              uma ideia sobre Java e backend? Me manda uma mensagem!
            </p>

            <div style={styles.linksWrap}>
              {links.map((link, i) => (
                <LinkCard key={i} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.bg,
    boxSizing: 'border-box',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    paddingTop: '60px',
    paddingBottom: '40px',
    boxSizing: 'border-box',
  },
  tag: {
    fontFamily: 'Courier New, Courier, monospace',
    fontSize: '11px',
    color: colors.accent,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: '6px',
    marginTop: 0,
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    color: colors.textTitle,
    letterSpacing: '-1px',
    marginBottom: '20px',
    marginTop: 0,
  },
  card: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.accentBorder}`,
    borderRadius: radius.xl,
    padding: '22px',
    boxSizing: 'border-box',
  },
  availBadge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '7px',
    backgroundColor: colors.greenSoft,
    border: `1px solid ${colors.greenBorder}`,
    borderRadius: radius.full,
    paddingLeft: '13px',
    paddingRight: '13px',
    paddingTop: '5px',
    paddingBottom: '5px',
    alignSelf: 'flex-start',
    marginBottom: '16px',
    width: 'fit-content',
  },
  availDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: colors.green,
  },
  availText: {
    fontSize: '12px',
    color: colors.green,
    fontWeight: '500',
  },
  intro: {
    fontSize: '14px',
    color: colors.textSecondary,
    lineHeight: '22px',
    marginBottom: '20px',
    marginTop: 0,
  },
  linksWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  linkCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '14px',
    backgroundColor: 'rgba(108,99,255,0.07)',
    border: '1px solid rgba(108,99,255,0.12)',
    borderRadius: radius.lg,
    padding: '14px',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  iconBox: {
    width: '36px',
    height: '36px',
    borderRadius: radius.md,
    backgroundColor: 'rgba(108,99,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  iconText: {
    fontSize: '14px',
    color: colors.accent,
    fontWeight: '600',
  },
  linkInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  linkLabel: {
    fontSize: '10px',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '2px',
  },
  linkValue: {
    fontSize: '13px',
    color: colors.textPrimary,
    fontWeight: '500',
  },
  arrow: {
    fontSize: '16px',
    color: colors.accent,
  },
};