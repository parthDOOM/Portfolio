import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DynamicGreeting.css';

interface DynamicGreetingProps {
  className?: string;
}

const DynamicGreeting: React.FC<DynamicGreetingProps> = ({ className = '' }) => {
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      let greetingText = '';
      let greetingEmoji = '';
      let period = '';

      if (hour >= 5 && hour < 12) {
        greetingText = 'Good Morning';
        greetingEmoji = '🌅';
        period = 'morning';
      } else if (hour >= 12 && hour < 17) {
        greetingText = 'Good Afternoon';
        greetingEmoji = '☀️';
        period = 'afternoon';
      } else if (hour >= 17 && hour < 21) {
        greetingText = 'Good Evening';
        greetingEmoji = '🌆';
        period = 'evening';
      } else {
        greetingText = 'Good Night';
        greetingEmoji = '🌙';
        period = 'night';
      }

      setGreeting(greetingText);
      setEmoji(greetingEmoji);
      setTimeOfDay(period);
    };

    updateGreeting();
    
    // Update every minute to handle time changes
    const interval = setInterval(updateGreeting, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className={`dynamic-greeting ${timeOfDay} ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <motion.span 
        className="greeting-emoji"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: 0.3 
        }}
      >
        {emoji}
      </motion.span>
      <span className="greeting-text">{greeting}!</span>
    </motion.div>
  );
};

export default DynamicGreeting;