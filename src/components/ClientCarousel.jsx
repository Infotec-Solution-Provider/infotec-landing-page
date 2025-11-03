import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const ClientCarousel = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setItemsPerView(1);
      } else if (window.innerWidth < 960) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, logos.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [maxIndex]);

  const visibleLogos = logos.slice(currentIndex, currentIndex + itemsPerView);
  const fillCount = itemsPerView - visibleLogos.length;
  const filledLogos = [
    ...visibleLogos,
    ...logos.slice(0, fillCount),
  ];

  return (
    <Box sx={{ position: 'relative', mb: 8 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
        }}
      >
        {/* Botão Anterior */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: { xs: -40, md: -80 },
            zIndex: 10,
            color: '#496ca3',
            bgcolor: 'rgba(73, 108, 163, 0.05)',
            '&:hover': {
              bgcolor: 'rgba(73, 108, 163, 0.15)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ChevronLeft sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Carrossel */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2,
          }}
        >
          {filledLogos.map((logo, index) => (
            <Box
              key={`${currentIndex}-${index}`}
              data-aos="fade-in"
              sx={{
                width: { xs: '100%', sm: '40%', md: '15%' },
                aspectRatio: '1',
                minWidth: { xs: '100%', sm: '40%', md: '15%' },
                bgcolor: 'white',
                borderRadius: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2.5,
                transition: 'all 0.4s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(73, 108, 163, 0.15)',
                  borderColor: '#496ca3',
                  borderWidth: '2px',
                }
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
              />
            </Box>
          ))}
        </Box>

        {/* Botão Próximo */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: { xs: -40, md: -80 },
            zIndex: 10,
            color: '#496ca3',
            bgcolor: 'rgba(73, 108, 163, 0.05)',
            '&:hover': {
              bgcolor: 'rgba(73, 108, 163, 0.15)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ChevronRight sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>

      {/* Indicadores de Paginação */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1.5,
          mt: 4,
        }}
      >
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: currentIndex === index ? 28 : 8,
              height: 8,
              borderRadius: 1,
              bgcolor: currentIndex === index ? '#496ca3' : 'rgba(73, 108, 163, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#496ca3',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ClientCarousel;
