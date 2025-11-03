import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const CounterAnimation = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let isMounted = true;
    const startTime = Date.now();
    const endNumber = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(endNumber * progress);

      if (isMounted) {
        setCount(currentCount);
      }

      if (progress === 1) {
        clearInterval(timer);
        if (isMounted) {
          setCount(endNumber);
        }
      }
    }, 16); // ~60fps

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [hasStarted, end, duration]);

  const getDisplayValue = () => {
    const displayCount = count.toLocaleString('pt-BR');
    return displayCount;
  };

  return (
    <Typography
      ref={setRef}
      variant="h2"
      sx={{
        color: '#25D366',
        fontWeight: 800,
        mb: 1,
        fontSize: { xs: '2.5rem', md: '3.5rem' },
        fontFamily: '"Inter", "Roboto", sans-serif',
        transition: 'all 0.3s ease',
      }}
    >
      {prefix}{getDisplayValue()}{suffix}
    </Typography>
  );
};

export default CounterAnimation;
