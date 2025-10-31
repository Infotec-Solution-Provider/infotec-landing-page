import React from 'react';
import { Grid, Typography, Box, useTheme } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

const StatisticCard = ({ value, label, icon }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'relative',
        p: 4,
        textAlign: 'center',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          right: 0,
          top: '20%',
          height: '60%',
          width: '1px',
          background: 'linear-gradient(180deg, transparent, rgba(37, 211, 102, 0.3), transparent)',
        },
        '&:last-child::after': {
          display: 'none',
        }
      }}
    >
      {icon && (
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
          {icon}
        </Box>
      )}
      <Typography 
        variant="h2" 
        sx={{
          fontWeight: 800,
          color: '#25D366',
          mb: 1,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontFamily: '"Inter", "Roboto", sans-serif',
        }}
      >
        {value}
      </Typography>
      <Typography 
        variant="body1" 
        sx={{
          color: 'rgba(255,255,255,0.9)',
          fontWeight: 500,
          fontSize: { xs: '0.95rem', md: '1.1rem' },
          lineHeight: 1.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const StatisticsSection = () => {
  const theme = useTheme();

  const stats = [
    { value: '+200', label: 'Projetos Implantados' },
    { value: '+3 mil', label: 'Pessoas Treinadas e Selecionadas' },
    { value: '+1 mil', label: 'Treinamentos Executados' },
  ];

  return (
    <Box 
      sx={{ 
        my: 8,
        p: { xs: 4, md: 6 },
        borderRadius: 4,
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #0a2540 100%)`,
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 211, 102, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-50%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(73, 108, 163, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }
      }}
      data-aos="fade-up"
    >
      <Grid 
        container 
        spacing={0}
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {stats.map((stat, index) => (
          <Grid 
            item 
            xs={12} 
            md={4} 
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <StatisticCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatisticsSection;
