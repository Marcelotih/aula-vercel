import React, { useState } from 'react';
import { colors } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import StackScreen from '../screens/StackScreen';
import ContactScreen from '../screens/ContactScreen';

function TabButton({ label, focused, onClick }) {
  return (
    <button onClick={onClick} style={styles.tabButton}>
      <div style={styles.iconWrap}>
        <span
          style={{
            ...styles.label,
            ...(focused ? styles.labelActive : {}),
          }}
        >
          {label}
        </span>
        {focused && <div style={styles.dot} />}
      </div>
    </button>
  );
}

export default function AppNavigator() {
  const [activeTab, setActiveTab] = useState('Home');

  // Define qual tela renderizar com base no estado
 const renderScreen = () => {
  switch (activeTab) {
    case 'Home':
      // Passamos a função setActiveTab como propriedade aqui:
      return <HomeScreen setActiveTab={setActiveTab} />;
    case 'About':
      return <AboutScreen setActiveTab={setActiveTab} />;
    case 'Stack':
      return <StackScreen setActiveTab={setActiveTab} />;
    case 'Contact':
      return <ContactScreen setActiveTab={setActiveTab} />;
    default:
      return <HomeScreen setActiveTab={setActiveTab} />;
  }
};

  return (
    <div style={styles.container}>
      {/* Área do conteúdo da tela atual */}
      <main style={styles.content}>
        {renderScreen()}
      </main>

      {/* Barra de Navegação Inferior (Tab Bar) */}
      <nav style={styles.tabBar}>
        <TabButton
          label="início"
          focused={activeTab === 'Home'}
          onClick={() => setActiveTab('Home')}
        />
        <TabButton
          label="sobre"
          focused={activeTab === 'About'}
          onClick={() => setActiveTab('About')}
        />
        <TabButton
          label="stack"
          focused={activeTab === 'Stack'}
          onClick={() => setActiveTab('Stack')}
        />
        <TabButton
          label="contato"
          focused={activeTab === 'Contact'}
          onClick={() => setActiveTab('Contact')}
        />
      </nav>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: colors.bg,
    boxSizing: 'border-box',
  },
  content: {
    flex: 1,
    paddingBottom: '80px', // Garante que a TabBar não cubra o fim do conteúdo
    boxSizing: 'border-box',
  },
  tabBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(8,8,16,0.97)',
    backdropFilter: 'blur(10px)', // Efeito de desfoque moderno no fundo (opcional)
    borderTop: '1px solid rgba(108,99,255,0.18)',
    height: '64px',
    boxSizing: 'border-box',
    zIndex: 1000, // Garante que fique sempre acima do conteúdo
  },
  tabButton: {
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: 0,
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  label: {
    fontSize: '12px',
    color: colors.textMuted,
    fontWeight: '400',
    letterSpacing: '0.2px',
    transition: 'color 0.2s ease, font-weight 0.2s ease',
  },
  labelActive: {
    color: colors.accent,
    fontWeight: '500',
  },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: colors.accent,
  },
};