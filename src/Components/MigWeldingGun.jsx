import React from 'react';
import { motion } from 'framer-motion';

const MigWeldingGun = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#222' }}>
      {/* Welding Gun */}
      <motion.div
        style={{
          width: '30px',
          height: '100px',
          background: '#333',
          borderRadius: '10px',
          position: 'relative',
        }}
        animate={{ x: [-10, 10, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Gun Tip */}
        <motion.div
          style={{
            width: '10px',
            height: '10px',
            background: 'orange',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '-5px',
            left: '10px',
          }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Welding Line */}
      <motion.div
        style={{
          width: '300px',
          height: '5px',
          background: '#555',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: '#ffcc00',
            width: '0%',
          }}
          animate={{ width: '100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Sparks */}
      <motion.div
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          bottom: 'calc(50% + 15px)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: '5px',
              height: '5px',
              background: 'yellow',
              borderRadius: '50%',
              position: 'absolute',
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * -50],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 0.5 + 0.5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MigWeldingGun;
