import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './DynamicGreeting.css';

interface DynamicGreetingProps {
  className?: string;
}

const DynamicGreeting: React.FC<DynamicGreetingProps> = ({ className = '' }) => {
  const [greeting, setGreeting] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      let greetingText = '';
      let period = '';

      if (hour >= 5 && hour < 12) {
        greetingText = 'Good Morning';
        period = 'morning';
      } else if (hour >= 12 && hour < 17) {
        greetingText = 'Good Afternoon';
        period = 'afternoon';
      } else if (hour >= 17 && hour < 21) {
        greetingText = 'Good Evening';
        period = 'evening';
      } else {
        greetingText = 'Good Night';
        period = 'night';
      }

      setGreeting(greetingText);
      setTimeOfDay(period);
    };

    updateGreeting();

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
      <span className="greeting-dot" />
      <span className="greeting-text">{greeting}!</span>
    </motion.div>
  );
};

export default DynamicGreeting;
