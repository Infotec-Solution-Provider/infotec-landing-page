import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme, Avatar, Rating, Stack } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import logoCliente5 from '../assets/Imagem5.png';
import logoCliente6 from '../assets/Imagem6.png';

const CustomerCarousel = () => {
  const theme = useTheme();

  const customers = [
    {
      name: 'Oxford Porcelanas S.A.',
      comment: 'Implantamos o SGR (InPulse), há 06 anos atrás, um sistema ideal para o nosso Televendas. Onde conseguimos colocar o maior número de informações, compras, históricos, as ligações ficam todas gravadas, contribuindo para o sucesso, segurança e agilidade na operação diariamente. É ótimo também na geração de relatórios, pois conseguimos gerar com muita rapidez e precisão.',
      avatar: logoCliente6,
      role: 'Televendas',
      rating: 5,
    },
    {
      name: 'Karsten S.A.',
      comment: 'O sistema é bastante completo, e as customizações efetuadas na última atualização deixou o sistema bem mais prático e versátil atendendo melhor a nossa necessidade. As configurações são práticas e ajustáveis o que nos permite fazer alterações conforme a necessidade, bem como gerar relatórios que auxiliam na gestão e no melhoramento da eficiência da operação.',
      avatar: logoCliente5,
      role: 'Gestão de Vendas',
      rating: 5,
    },
  ];

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(73, 108, 163, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={5} data-aos="fade-right">
            <Box sx={{ position: 'relative' }}>
              <FormatQuote 
                sx={{ 
                  fontSize: 120, 
                  color: 'rgba(73, 108, 163, 0.2)',
                  position: 'absolute',
                  top: -40,
                  left: -20,
                }}
              />
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 800, 
                  mb: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                O QUE FALAM SOBRE A{' '}
                <Box component="span" sx={{ color: theme.palette.primary.main }}>
                  INFOTEC
                </Box>
              </Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#25D366', mb: 3 }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  lineHeight: 1.8,
                }}
              >
                Veja o que nossos clientes têm a dizer sobre nossos serviços e como transformamos suas operações de vendas.
              </Typography>
            </Box>
          </Grid>

          {/* Testimonials Section */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {customers.map((customer, index) => (
                <Grid item xs={12} key={index}>
                  <Card 
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                    sx={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 1.5,
                      position: 'relative',
                      overflow: 'visible',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0px 20px 40px rgba(0,0,0,0.3)',
                        border: `1px solid ${theme.palette.primary.main}`,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" spacing={3} alignItems="flex-start">
                        {/* Avatar */}
                        <Box
                          sx={{
                            position: 'relative',
                          }}
                        >
                          <Box
                            sx={{
                              width: 100,
                              height: 100,
                              borderRadius: '50%',
                              overflow: 'hidden',
                              border: '4px solid rgba(255,255,255,0.2)',
                              bgcolor: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              p: 1,
                            }}
                          >
                            <img 
                              src={customer.avatar} 
                              alt={customer.name} 
                              style={{ 
                                width: '100%', 
                                height: 'auto', 
                                objectFit: 'contain' 
                              }} 
                            />
                          </Box>
                        </Box>

                        {/* Content */}
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: 'white', 
                              fontWeight: 700,
                              mb: 0.5,
                            }}
                          >
                            {customer.name}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: theme.palette.primary.light,
                              mb: 2,
                            }}
                          >
                            {customer.role}
                          </Typography>
                          <Rating 
                            value={customer.rating} 
                            readOnly 
                            sx={{ 
                              mb: 2,
                              '& .MuiRating-iconFilled': {
                                color: '#25D366',
                              }
                            }} 
                          />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              lineHeight: 1.8,
                              fontStyle: 'italic',
                              position: 'relative',
                              pl: 3,
                              '&::before': {
                                content: '"\\201C"',
                                position: 'absolute',
                                left: 0,
                                top: -5,
                                fontSize: '2rem',
                                color: theme.palette.primary.main,
                              }
                            }}
                          >
                            {customer.comment}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box 
          sx={{ 
            mt: 8, 
            textAlign: 'center',
            p: 6,
            borderRadius: 1.5,
            background: 'linear-gradient(135deg, rgba(73, 108, 163, 0.2) 0%, rgba(37, 211, 102, 0.1) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
          data-aos="zoom-in"
        >
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
            Pronto para transformar sua operação?
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
            Junte-se a centenas de empresas que já confiam na Infotec
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerCarousel;
