import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import './index.css';

const Card3D = ({ children, delay = 0, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
    style={{
      background: gradient,
      padding: '2rem',
      borderRadius: '20px',
      transformStyle: 'preserve-3d',
      perspective: '1000px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
    }}
  >
    {children}
  </motion.div>
);

const Portfolio = () => {
  const cards = [
    { title: 'Web Development', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', delay: 0.2 },
    { title: 'UI/UX Design', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', delay: 0.4 },
    { title: 'Mobile Apps', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', delay: 0.6 },
    { title: 'Blockchain', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', delay: 0.8 }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', padding: '2rem' }}>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', marginBottom: '4rem' }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PORTFOLIO</h1>
        <button style={{ background: '#fff', color: '#000', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Contact</button>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '6rem' }}
      >
        <h2 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>MODERN PORTFOLIO</h2>
        <p style={{ fontSize: '1.25rem', color: '#888' }}>Creating amazing digital experiences with cutting-edge technology</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', marginBottom: '4rem' }}>
        {cards.map((card, i) => (
          <Card3D key={i} delay={card.delay} gradient={card.gradient}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{card.title}</h3>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.8)' }}>Innovative solutions for modern challenges</p>
          </Card3D>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ textAlign: 'center', padding: '4rem 2rem' }}
      >
        <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Let's Build Something Amazing</h3>
        <button style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: '#fff', border: 'none', padding: '1rem 3rem', borderRadius: '50px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>Get Started</button>
      </motion.div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Portfolio />);
