import React from 'react';
import { 
  Box, 
  Container,
  Grid,
  Stack, 
  Typography,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import { 
  Facebook, 
  Instagram, 
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #496ca3 0%, #25D366 50%, #496ca3 100%)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Sobre */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#25D366',
              }}
            >
              Infotec Solution Provider
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)',
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Pioneiros em CRM especializado para indústrias com mais de 15 anos de experiência transformando operações de vendas.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component={Link}
                href="https://www.instagram.com/infotec_solutionp/"
                target="_blank"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    bgcolor: '#E4405F',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.facebook.com/infotecsolutionrs"
                target="_blank"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    bgcolor: '#1877F2',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.linkedin.com/company/infotecsolution-provider/"
                target="_blank"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': {
                    bgcolor: '#0A66C2',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>

          {/* Contato */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#25D366',
              }}
            >
              Contato
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOn sx={{ color: '#25D366', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  São Leopoldo, Rio Grande do Sul, Brasil
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ color: '#25D366' }} />
                <Link 
                  href="tel:+555135903197" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#25D366',
                    }
                  }}
                >
                  (51) 3590-3197
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <WhatsApp sx={{ color: '#25D366' }} />
                <Link 
                  href="https://api.whatsapp.com/send?phone=555131346499" 
                  target="_blank"
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#25D366',
                    }
                  }}
                >
                  (51) 3134-6499
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ color: '#25D366' }} />
                <Link 
                  href="mailto:gerencia@infotecrs.inf.br" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#25D366',
                    }
                  }}
                >
                  gerencia@infotecrs.inf.br
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Links Rápidos */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                color: '#25D366',
              }}
            >
              Nossos Serviços
            </Typography>
            <Stack spacing={1.5}>
              {[
                'CRM InPulse',
                'Integração WhatsApp',
                'Consultoria Especializada',
                'Treinamento de Equipes',
                'Implantação de Processos',
                'Suporte Técnico',
              ].map((item, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#25D366',
                      paddingLeft: 1,
                    }
                  }}
                >
                  • {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.6)',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              © {new Date().getFullYear()} Infotec Solution Provider. Todos os direitos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent={{ xs: 'center', md: 'flex-end' }}
            >
              <Link
                href="#"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: '#25D366',
                  }
                }}
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: '#25D366',
                  }
                }}
              >
                Termos de Uso
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 211, 102, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Footer;
