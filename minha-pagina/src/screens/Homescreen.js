import React from 'react';
import { colors, radius } from '../theme';
import profile from '../assets/profile.jpg'; 

export default function HomeScreen({ setActiveTab }) {
  
const handleNavigate = (tabName) => {
    if (setActiveTab) {
      if (tabName === 'Contact') {
        setActiveTab('contact');
      } else if (tabName === 'Stack') {
        setActiveTab('stack');   
      } else {
        setActiveTab(tabName);
      }
    }
  };

  return (
    <div style={styles.hero}>
      <div style={styles.heroLeft}>
        <div style={styles.photoRing}>
          <div style={styles.photoWrap}>
            <img src={profile} alt="Marcelo Augusto" style={styles.profileImg} />
          </div>
        </div>
        <div style={styles.availDot} />
      </div>

      <div style={styles.heroRight}>
        <div style={styles.eyebrow}>Olá, mundo!</div>
        <h1 style={styles.heroName}>Marcelo<br />Augusto</h1>
        <div style={styles.heroRole}>
          Backend Developer & Front Developer
          <span style={styles.cursor} />
        </div>
        <p style={styles.heroDesc}>
         Roubo sistemas e tambem construo alguns
        </p>
        <div style={styles.heroBtns}>
          <button style={styles.btnPrimary} onClick={() => handleNavigate('Contact')}>
            Fale comigo
          </button>
          <button style={styles.btnGhost} onClick={() => handleNavigate('Stack')}>
            Ver stack →
          </button>
        </div>
        <div style={styles.heroStats}>
          <div>
            <div style={styles.statNum}>Java e React</div>
            <div style={styles.statLabel}>principal</div>
          </div>
          <div>
            <div style={styles.statNum}>Spring</div>
            <div style={styles.statLabel}>framework</div>
          </div>
          <div>
            <div style={styles.statNum}>APIs</div>
            <div style={styles.statLabel}>foco</div>
          </div>
          <div>
            <div style={styles.statNum}>MySQL</div>
            <div style={styles.statLabel}>meta de trabalhar na branet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    padding: '40px 24px',
    maxWidth: '1000px',
    margin: '0 auto',
    color: colors.textPrimary,
    boxSizing: 'border-box',
  },
  heroLeft: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoRing: {
    padding: '8px',
    borderRadius: '50%',
    border: `2px dashed ${colors.accent}`,
  },
  photoWrap: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: colors.bgCard,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  availDot: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: colors.green,
    border: `3px solid ${colors.bg}`,
  },
  heroRight: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  eyebrow: {
    fontFamily: 'Courier New, monospace',
    fontSize: '14px',
    color: colors.accent,
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  heroName: {
    fontSize: '48px',
    fontWeight: '800',
    color: colors.textTitle,
    lineHeight: '1.1',
    margin: '0 0 12px 0',
  },
  heroRole: {
    fontSize: '20px',
    color: colors.textSecondary,
    fontWeight: '500',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  cursor: {
    width: '3px',
    height: '20px',
    backgroundColor: colors.accent,
  },
  heroDesc: {
    fontSize: '15px',
    color: colors.textMuted,
    lineHeight: '1.6',
    margin: '0 0 28px 0',
    maxWidth: '500px',
  },
  heroBtns: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    marginBottom: '40px',
  },
  btnPrimary: {
    backgroundColor: colors.accent,
    color: colors.textWhite,
    border: 'none',
    borderRadius: radius.md,
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  btnGhost: {
    backgroundColor: 'transparent',
    color: colors.textPrimary,
    border: `1px solid ${colors.border}`,
    borderRadius: radius.md,
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  heroStats: {
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
    borderTop: `1px solid ${colors.border}`,
    paddingTop: '24px',
  },
  statNum: {
    fontSize: '18px',
    fontWeight: '700',
    color: colors.textTitle,
  },
  statLabel: {
    fontSize: '12px',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '2px',
  },
};