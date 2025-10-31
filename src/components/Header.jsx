import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme, Chip, Stack } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  TrendingUp, 
  People, 
  Phone, 
  Assessment, 
  WhatsApp, 
  Speed,
  CheckCircle,
  Star
} from '@mui/icons-material';
import StatisticsSection from './StatisticCard';

import imgDetail2 from '../assets/01.jpg';
import imgLogo1 from '../assets/logo_infotec.png';
import imgLogo2 from '../assets/Logo Inpulse - Negativo Horizontal Fundo Transparente.png';
import imgLogo3 from '../assets/logo.png';
import imgmokup from '../assets/mokup2.png';
import imgmokup3 from '../assets/imgmokup2.jpg';
import celular_inpulse from '../assets/celular_inpulse.png';

import logoCliente1 from '../assets/Imagem1.jpg';
import logoCliente3 from '../assets/Imagem3.png';
import logoCliente4 from '../assets/Imagem4.jpg';
import logoCliente5 from '../assets/Imagem5.png';
import logoCliente6 from '../assets/Imagem6.png';
import logoCliente7 from '../assets/exatron.jpeg';
import logoCliente8 from '../assets/Imagem8.jpg';
import logoCliente9 from '../assets/kappesberg.png';
import logoCliente10 from '../assets/xalingo.png';
import logoCliente11 from '../assets/brilia.png';
import logoCliente12 from '../assets/herc.jpeg';

const Header = () => {
    const theme = useTheme();

    const logos = [
        { src: logoCliente1, alt: "Cliente 1" },
        { src: logoCliente3, alt: "Cliente 3" },
        { src: logoCliente4, alt: "Cliente 4" },
        { src: logoCliente5, alt: "Cliente 5" },
        { src: logoCliente6, alt: "Cliente 6" },
        { src: logoCliente7, alt: "Cliente 7" },
        { src: logoCliente8, alt: "Cliente 8" },
        { src: logoCliente9, alt: "Cliente 9" },
        { src: logoCliente10, alt: "Cliente 10" },
        { src: logoCliente11, alt: "Cliente 11" },
        { src: logoCliente12, alt: "Cliente 12" },
    ];

    const features = [
        { icon: <TrendingUp sx={{ fontSize: 40 }} />, title: 'Produtividade', desc: 'Mais controle e eficiência para sua equipe' },
        { icon: <People sx={{ fontSize: 40 }} />, title: 'Gestão de Carteira', desc: 'Visão total da operação com clientes ativos' },
        { icon: <Phone sx={{ fontSize: 40 }} />, title: 'Gravação de Chamadas', desc: 'Todas as conversas registradas e acessíveis' },
        { icon: <Assessment sx={{ fontSize: 40 }} />, title: 'Relatórios Inteligentes', desc: 'Gestão em diversos formatos' },
        { icon: <WhatsApp sx={{ fontSize: 40 }} />, title: 'Integração WhatsApp', desc: 'Comunicação centralizada e eficiente' },
        { icon: <Speed sx={{ fontSize: 40 }} />, title: 'Agenda Automática', desc: 'Inteligente e integrada ao sistema' },
    ];

    const whatsappFeatures = [
        'Único número de WhatsApp',
        'Usuários ilimitados',
        'Personalização por setor',
        'Dashboard em tempo real',
        'Cadastro personalizado',
        'Mensagens prontas',
        'Atendimento simultâneo',
    ];

    const consultoriaFeatures = [
        'Implantação ou reestruturação do canal de vendas',
        'Planejamento detalhado com cronograma',
        'Sugestões de metas e KPIs',
        'Gerenciamento de processo seletivo',
        'Treinamentos completos para equipe',
        'Implantação de indicadores',
        'Campanhas motivacionais',
        'Monitorias de qualidade',
        'Auxílio na infraestrutura',
    ];

    useEffect(() => {
        AOS.init({ 
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <Box
                sx={{
                    background: `linear-gradient(135deg, rgba(73, 108, 163, 0.95) 0%, rgba(30, 67, 100, 0.95) 100%), url(${imgDetail2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    minHeight: '90vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        pointerEvents: 'none',
                    }
                }}
            >
                {/* Logo Section */}
                <Container maxWidth="lg" sx={{ position: 'absolute', top: 30, left: 0, right: 0, zIndex: 10 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 2, sm: 3 },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        data-aos="fade-down"
                    >
                        <img 
                            src={imgLogo1} 
                            alt="Logo Infotec" 
                            style={{ 
                                height: '50px',
                                maxWidth: '45%',
                                objectFit: 'contain'
                            }} 
                        />
                        <img 
                            src={imgLogo2} 
                            alt="Logo InPulse" 
                            style={{ 
                                height: '50px',
                                maxWidth: '45%',
                                objectFit: 'contain'
                            }} 
                        />
                    </Box>
                </Container>

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, mt: 8 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={7} data-aos="fade-right">
                            <Typography
                                variant='h1'
                                sx={{
                                    fontWeight: 800,
                                    color: '#fff',
                                    mb: 3,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                }}
                            >
                                Bem-vindo à <span style={{ color: '#25D366' }}>Infotec!</span>
                            </Typography>
                            <Typography 
                                variant='h5' 
                                sx={{ 
                                    color: 'rgba(255,255,255,0.95)', 
                                    mb: 4,
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                }}
                            >
                                Aumente a performance da sua equipe de vendas e melhore o atendimento dos seus clientes
                            </Typography>
                    
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                                <Button 
                                    variant="contained" 
                                    size="large"
                                    startIcon={<WhatsApp />}
                                    href="https://api.whatsapp.com/send?phone=555131346499"
                                    target="_blank"
                                    sx={{
                                        bgcolor: '#25D366',
                                        color: 'white',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            bgcolor: '#1aa850',
                                        }
                                    }}
                                >
                                    Fale Conosco
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="large"
                                    sx={{
                                        borderColor: 'white',
                                        color: 'white',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            borderColor: '#25D366',
                                            bgcolor: 'rgba(37, 211, 102, 0.1)',
                                        }
                                    }}
                                >
                                    Saiba Mais
                                </Button>
                            </Stack>

                            <Stack 
                                direction="row" 
                                spacing={2} 
                                flexWrap="wrap" 
                                sx={{ 
                                    gap: 2,
                                    '& > *': {
                                        flex: { xs: '1 1 100%', sm: '0 1 auto' }
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CheckCircle sx={{ color: '#25D366', fontSize: 20 }} />
                                    <Typography sx={{ color: 'white', fontSize: '0.95rem' }}>CRM Especializado</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CheckCircle sx={{ color: '#25D366', fontSize: 20 }} />
                                    <Typography sx={{ color: 'white', fontSize: '0.95rem' }}>Consultoria Completa</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CheckCircle sx={{ color: '#25D366', fontSize: 20 }} />
                                    <Typography sx={{ color: 'white', fontSize: '0.95rem' }}>Suporte Dedicado</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>

                {/* Decorative Wave */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: '100px',
                        background: 'white',
                        clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
                    }}
                />
            </Box>

            {/* QUEM SOMOS SECTION */}
            <Box 
                sx={{ 
                    bgcolor: '#f8f9fa',
                    py: 12,
                }}
            >
                <Container maxWidth="lg">
                    {/* Título */}
                    <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography 
                            variant='h2' 
                            sx={{ 
                                fontWeight: 800, 
                                color: theme.palette.primary.main,
                                mb: 3,
                            }}
                        >
                            Quem Somos
                        </Typography>
                        <Box sx={{ width: 100, height: 5, bgcolor: '#25D366', margin: '0 auto', borderRadius: 1.5 }} />
                    </Box>

                    {/* Card Principal com Texto */}
                    <Card 
                        sx={{ 
                            p: 6, 
                            mb: 6, 
                            borderRadius: 1.5,
                            border: '2px solid transparent',
                            transition: 'all 0.4s ease',
                            '&:hover': {
                                borderColor: theme.palette.primary.main,
                                boxShadow: '0 20px 40px rgba(73, 108, 163, 0.15)',
                            }
                        }}
                        data-aos="fade-up"
                    >
                        <Grid container spacing={6} alignItems="center">
                            {/* Texto Principal */}
                            <Grid item xs={12} md={8}>
                                <Typography
                                    variant='h5'
                                    sx={{
                                        color: theme.palette.text.primary,
                                        lineHeight: 1.8,
                                        mb: 3,
                                        fontWeight: 400,
                                    }}
                                >
                                    Somos{' '}
                                    <Box 
                                        component="span" 
                                        sx={{ 
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            fontWeight: 800,
                                            fontSize: '1.15em',
                                        }}
                                    >
                                        pioneiros
                                    </Box>{' '}
                                    no desenvolvimento de um sistema CRM sob medida para operações de vendas em indústrias.
                                </Typography>

                                <Typography
                                    variant='h5'
                                    sx={{
                                        color: theme.palette.text.primary,
                                        lineHeight: 1.8,
                                        mb: 3,
                                        fontWeight: 400,
                                    }}
                                >
                                    Somos a{' '}
                                    <Box 
                                        component="span" 
                                        sx={{ 
                                            background: 'linear-gradient(135deg, #25D366 0%, #1aa850 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            fontWeight: 800,
                                            fontSize: '1.15em',
                                        }}
                                    >
                                        única
                                    </Box>{' '}
                                    com consultoria especializada na implantação deste setor.
                                </Typography>

                                <Typography
                                    variant='body1'
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.8,
                                        fontWeight: 400,
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    Nossa metodologia foi desenvolvida e aperfeiçoada em{' '}
                                    <Box 
                                        component="span" 
                                        sx={{ 
                                            color: theme.palette.primary.main,
                                            fontWeight: 700,
                                        }}
                                    >
                                        mais de 15 anos de atuação
                                    </Box>.
                                </Typography>
                            </Grid>

                            {/* Badge 15+ Anos */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        p: 5,
                                        borderRadius: 1.5,
                                        background: 'linear-gradient(135deg, rgba(73, 108, 163, 0.08) 0%, rgba(37, 211, 102, 0.08) 100%)',
                                        textAlign: 'center',
                                        border: '2px solid',
                                        borderColor: 'rgba(73, 108, 163, 0.2)',
                                    }}
                                >
                                    <Typography 
                                        variant='h1' 
                                        sx={{ 
                                            fontSize: '5rem', 
                                            fontWeight: 900,
                                            color: theme.palette.primary.main,
                                            mb: 1,
                                            lineHeight: 1,
                                        }}
                                    >
                                        15+
                                    </Typography>
                                    <Typography 
                                        variant='h6' 
                                        sx={{ 
                                            color: theme.palette.text.primary,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Anos de Excelência
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>

                    {/* Cards de Diferenciais */}
                    <Grid container spacing={4} sx={{ mb: 6 }}>
                        {[
                            {
                                icon: '🎯',
                                title: 'Especialização',
                                desc: 'CRM desenvolvido especificamente para operações de vendas em indústrias'
                            },
                            {
                                icon: '💼',
                                title: 'Consultoria Única',
                                desc: 'A única empresa com consultoria especializada na implantação do setor'
                            },
                            {
                                icon: '📈',
                                title: 'Metodologia Comprovada',
                                desc: 'Mais de 15 anos aperfeiçoando processos e estratégias'
                            },
                        ].map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    sx={{
                                        height: '100%',
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: 1.5,
                                        border: '2px solid transparent',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            borderColor: theme.palette.primary.main,
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(73, 108, 163, 0.15)',
                                        }
                                    }}
                                >
                                    <Typography sx={{ fontSize: '4rem', mb: 3 }}>
                                        {item.icon}
                                    </Typography>
                                    <Typography 
                                        variant='h5' 
                                        sx={{ 
                                            fontWeight: 700, 
                                            color: theme.palette.primary.main,
                                            mb: 2,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography 
                                        variant='body1' 
                                        sx={{ 
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Card 
                        sx={{ 
                            textAlign: 'center', 
                            mt: 6,
                            p: 6,
                            borderRadius: 1.5,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                            boxShadow: '0 20px 60px rgba(73, 108, 163, 0.25)',
                        }}
                        data-aos="zoom-in"
                    >
                        <Typography 
                            variant='h3' 
                            sx={{ 
                                color: 'white', 
                                fontWeight: 800,
                                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                            }}
                        >
                            É a entrega do sistema aliado à estratégia do seu negócio!
                        </Typography>
                    </Card>
                </Container>
            </Box>

            {/* FEATURES SECTION - IN.PULSE */}
            <Box sx={{ bgcolor: 'white', py: 12 }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant='h2' sx={{ fontWeight: 800, color: theme.palette.primary.main, mb: 3 }}>
                            Soluções sob medida
                        </Typography>
                        <Box sx={{ width: 100, height: 5, bgcolor: '#25D366', margin: '0 auto', borderRadius: 1.5, mb: 3 }} />
                        <Typography variant='h5' sx={{ color: theme.palette.text.secondary, maxWidth: 800, margin: '0 auto', lineHeight: 1.8 }}>
                            O In.Pulse foi criado para facilitar o atendimento e a venda aos seus clientes. Sua equipe fazendo ligações diretamente do CRM com a solução integrada à telefonia.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card 
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    sx={{
                                        height: '100%',
                                        textAlign: 'center',
                                        p: 4,
                                        borderRadius: 1.5,
                                        border: '2px solid transparent',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            borderColor: theme.palette.primary.main,
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(73, 108, 163, 0.15)',
                                        }
                                    }}
                                >
                                    <Box sx={{ 
                                        display: 'inline-flex', 
                                        p: 2.5, 
                                        borderRadius: '50%', 
                                        bgcolor: 'rgba(73, 108, 163, 0.1)',
                                        color: theme.palette.primary.main,
                                        mb: 3,
                                    }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: theme.palette.primary.main }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.7 }}>
                                        {feature.desc}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ mt: 8, textAlign: 'center' }} data-aos="zoom-in">
                        <Card
                            sx={{
                                p: 5,
                                borderRadius: 1.5,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                boxShadow: '0 20px 60px rgba(73, 108, 163, 0.25)',
                            }}
                        >
                            <Typography variant='h4' sx={{ fontWeight: 800, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                                Um sistema robusto, fácil de utilizar e eficiente!
                            </Typography>
                        </Card>
                    </Box>
                </Container>
            </Box>

            {/* WHATSAPP INTEGRATION SECTION */}
            <Box 
                sx={{ 
                    bgcolor: '#f8f9fa',
                    py: 12,
                }}
            >
                <Container maxWidth="lg">
                    {/* Título da Seção */}
                    <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 8 }}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <img src={imgLogo3} alt="WhatsApp Integration" style={{ height: 60 }} />
                            <Typography 
                                variant='h2' 
                                sx={{ 
                                    fontWeight: 800, 
                                    color: theme.palette.primary.main,
                                }}
                            >
                                Integração WhatsApp
                            </Typography>
                        </Box>
                        <Box sx={{ width: 100, height: 5, bgcolor: '#25D366', margin: '0 auto', borderRadius: 1.5 }} />
                    </Box>

                    <Grid container spacing={6} alignItems="center" justifyContent="center">
                        {/* Card Principal - Centralizado */}
                        <Grid item xs={12} md={10} data-aos="fade-up">
                            <Card
                                sx={{
                                    p: 6,
                                    borderRadius: 1.5,
                                    border: '2px solid transparent',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                    transition: 'all 0.4s ease',
                                    '&:hover': {
                                        borderColor: '#25D366',
                                        boxShadow: '0 20px 60px rgba(37, 211, 102, 0.15)',
                                        transform: 'translateY(-8px)',
                                    }
                                }}
                            >
                                {/* Título e Descrição */}
                                <Box sx={{ textAlign: 'center', mb: 5 }}>
                                    <Typography 
                                        variant='h4' 
                                        sx={{ 
                                            color: theme.palette.text.primary, 
                                            mb: 2, 
                                            fontWeight: 700,
                                        }}
                                    >
                                        Gerencie de forma{' '}
                                        <Box component="span" sx={{ color: '#25D366' }}>eficiente</Box>{' '}
                                        o relacionamento com seus clientes
                                    </Typography>
                                    
                                    <Typography 
                                        variant='body1' 
                                        sx={{ 
                                            color: theme.palette.text.secondary, 
                                            lineHeight: 1.8,
                                            fontSize: '1.1rem',
                                            maxWidth: 700,
                                            margin: '0 auto',
                                        }}
                                    >
                                        Integração direta com o aplicativo de mensagens instantâneas. Centralize a comunicação e simplifique suas operações.
                                    </Typography>
                                </Box>

                                {/* Lista de Recursos em Grid */}
                                <Grid container spacing={3}>
                                    {whatsappFeatures.map((feature, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Box 
                                                sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center',
                                                    p: 2,
                                                    borderRadius: 1.5,
                                                    bgcolor: 'rgba(37, 211, 102, 0.05)',
                                                    border: '1px solid rgba(37, 211, 102, 0.1)',
                                                    height: '100%',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(37, 211, 102, 0.1)',
                                                        transform: 'translateX(8px)',
                                                        borderColor: '#25D366',
                                                    }
                                                }}
                                                data-aos="fade-up"
                                                data-aos-delay={index * 50}
                                            >
                                                <CheckCircle 
                                                    sx={{ 
                                                        color: '#25D366',
                                                        mr: 2,
                                                        fontSize: 20,
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <Typography 
                                                    variant="body1"
                                                    sx={{ 
                                                        color: theme.palette.text.primary,
                                                        fontWeight: 500,
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CONSULTORIA SECTION */}
            <Box 
                sx={{ 
                    bgcolor: 'white', 
                    py: 12,
                }}
            >
                <Container maxWidth="lg">
                    <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant='h2' sx={{ fontWeight: 800, color: theme.palette.primary.main, mb: 3 }}>
                            Consultoria Especializada
                        </Typography>
                        <Box sx={{ width: 100, height: 5, bgcolor: '#25D366', margin: '0 auto', borderRadius: 1.5, mb: 3 }} />
                        <Typography variant='h6' sx={{ color: theme.palette.text.secondary, maxWidth: 900, margin: '0 auto', lineHeight: 1.8 }}>
                            Ao longo de toda trajetória implantando operações de vendas na indústria, uma metodologia cada vez mais clara foi se desenhando e aprimorando.
                        </Typography>
                    </Box>

                    {/* Card Introdutório */}
                    <Card
                        sx={{
                            p: 5,
                            mb: 6,
                            borderRadius: 1.5,
                            textAlign: 'center',
                            background: `linear-gradient(135deg, rgba(73, 108, 163, 0.05) 0%, rgba(37, 211, 102, 0.05) 100%)`,
                            border: '2px solid',
                            borderColor: 'rgba(73, 108, 163, 0.1)',
                        }}
                        data-aos="fade-up"
                    >
                        <Typography variant='h4' sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 2 }}>
                            Nossa Metodologia
                        </Typography>
                        <Typography variant='h6' sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, maxWidth: 800, margin: '0 auto' }}>
                            Três pilares fundamentais que garantem o sucesso da sua operação
                        </Typography>
                    </Card>

                    {/* Metodologia em Cards */}
                    <Grid container spacing={4} sx={{ mb: 6 }}>
                        {[
                            {
                                icon: '👥',
                                title: 'PESSOAS',
                                color: '#496ca3',
                                features: [
                                    'Gerenciamento de processo seletivo',
                                    'Treinamentos completos para equipe',
                                    'Campanhas motivacionais',
                                    'Monitorias de qualidade'
                                ]
                            },
                            {
                                icon: '⚙️',
                                title: 'PROCESSOS',
                                color: '#25D366',
                                features: [
                                    'Implantação ou reestruturação do canal',
                                    'Planejamento detalhado com cronograma',
                                    'Sugestões de metas e KPIs',
                                    'Implantação de indicadores'
                                ]
                            },
                            {
                                icon: '🏗️',
                                title: 'INFRAESTRUTURA',
                                color: '#ff6b35',
                                features: [
                                    'Auxílio na montagem da infraestrutura',
                                    'Integração de sistemas',
                                    'Suporte técnico especializado',
                                    'Otimização de recursos'
                                ]
                            }
                        ].map((pillar, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: 1.5,
                                        border: '2px solid transparent',
                                        transition: 'all 0.4s ease',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '6px',
                                            background: pillar.color,
                                        },
                                        '&:hover': {
                                            borderColor: pillar.color,
                                            transform: 'translateY(-12px)',
                                            boxShadow: `0 20px 40px ${pillar.color}30`,
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        {/* Ícone e Título */}
                                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                                            <Typography 
                                                sx={{ 
                                                    fontSize: '4rem',
                                                    mb: 2,
                                                    display: 'block',
                                                }}
                                            >
                                                {pillar.icon}
                                            </Typography>
                                            <Typography 
                                                variant='h5' 
                                                sx={{ 
                                                    fontWeight: 800,
                                                    color: pillar.color,
                                                    letterSpacing: '1px',
                                                    mb: 2,
                                                }}
                                            >
                                                {pillar.title}
                                            </Typography>
                                            <Box 
                                                sx={{ 
                                                    width: 60, 
                                                    height: 4, 
                                                    bgcolor: pillar.color,
                                                    margin: '0 auto',
                                                    borderRadius: 1.5,
                                                    opacity: 0.6,
                                                }} 
                                            />
                                        </Box>

                                        {/* Lista de Features */}
                                        <Box sx={{ mt: 3 }}>
                                            {pillar.features.map((feature, idx) => (
                                                <Box 
                                                    key={idx}
                                                    sx={{ 
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        mb: 2,
                                                        pl: 1,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 8,
                                                            height: 8,
                                                            borderRadius: '50%',
                                                            bgcolor: pillar.color,
                                                            mt: 1,
                                                            mr: 2,
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <Typography 
                                                        variant="body1"
                                                        sx={{ 
                                                            color: theme.palette.text.secondary,
                                                            lineHeight: 1.7,
                                                        }}
                                                    >
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Imagem de Transformação */}
                    <Box sx={{ mt: 6 }} data-aos="fade-up">
                        <Card
                            sx={{
                                backgroundImage: `linear-gradient(rgba(73, 108, 163, 0.92), rgba(30, 67, 100, 0.92)), url(${imgmokup3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: 400,
                                borderRadius: 1.5,
                                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 6,
                                border: '2px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography 
                                    variant='h2' 
                                    sx={{ 
                                        color: 'white', 
                                        fontWeight: 800, 
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                        mb: 2,
                                    }}
                                >
                                    Transforme seu negócio
                                </Typography>
                                <Typography 
                                    variant='h5' 
                                    sx={{ 
                                        color: 'rgba(255,255,255,0.95)', 
                                        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                                        fontWeight: 500,
                                    }}
                                >
                                    Metodologia completa para o sucesso da sua operação
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </Container>
            </Box>

            {/* CLIENTS SECTION */}
            <Box
                sx={{
                    bgcolor: '#f8f9fa',
                    py: 12,
                }}
            >
                <Container maxWidth="lg">
                    <Box data-aos="fade-up" sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant='h2' sx={{ fontWeight: 800, color: theme.palette.primary.main, mb: 3 }}>
                            Nossos Clientes
                        </Typography>
                        <Box sx={{ width: 100, height: 5, bgcolor: '#25D366', margin: '0 auto', borderRadius: 1.5, mb: 3 }} />
                        <Typography variant='h5' sx={{ color: theme.palette.text.secondary, maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}>
                            Empresas que <Box component="span" sx={{ color: '#25D366', fontWeight: 700 }}>potencializaram</Box> seus canais de vendas
                        </Typography>
                    </Box>

                    {/* Grid de Logos */}
                    <Box sx={{ mb: 8 }}>
                        <Grid container spacing={4} justifyContent="center">
                            {logos.map((logo, index) => (
                                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                                    <Box
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 50}
                                        sx={{
                                            width: '100%',
                                            aspectRatio: '1',
                                            bgcolor: 'white',
                                            borderRadius: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: 2.5,
                                            transition: 'all 0.4s ease',
                                            cursor: 'pointer',
                                            border: '2px solid transparent',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 20px 40px rgba(73, 108, 163, 0.15)',
                                                borderColor: theme.palette.primary.main,
                                            }
                                        }}
                                    >
                                        <img src={logo.src} alt={logo.alt} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Card de Estatísticas */}
                    <Box data-aos="fade-up">
                        <Card
                            sx={{
                                p: 6,
                                borderRadius: 1.5,
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                boxShadow: '0 20px 60px rgba(73, 108, 163, 0.25)',
                            }}
                        >
                            <Typography 
                                variant='h4' 
                                sx={{ 
                                    color: 'white', 
                                    fontWeight: 700, 
                                    textAlign: 'center', 
                                    mb: 5,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                                }}
                            >
                                Resultados Comprovados
                            </Typography>
                            
                            <Grid container spacing={6} justifyContent="center">
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant='h2' sx={{ color: '#25D366', fontWeight: 800, mb: 1 }}>+200</Typography>
                                        <Typography variant='h6' sx={{ color: 'white', fontWeight: 600 }}>Projetos Implantados</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant='h2' sx={{ color: '#25D366', fontWeight: 800, mb: 1 }}>+5.000</Typography>
                                        <Typography variant='h6' sx={{ color: 'white', fontWeight: 600 }}>Pessoas Treinadas</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant='h2' sx={{ color: '#25D366', fontWeight: 800, mb: 1 }}>+700</Typography>
                                        <Typography variant='h6' sx={{ color: 'white', fontWeight: 600 }}>Treinamentos Executados</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;
