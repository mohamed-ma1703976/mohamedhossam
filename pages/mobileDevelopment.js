import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton, styled } from '@mui/material';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

const projectData = [
  {
    title: 'Dlni',
    description: 'Dlni is a mobile companion for exploring the vibrant shopping scene of Qatar! This innovative app is designed to enhance your tourism experience by providing a comprehensive guide to the malls and stores. Discover the best shopping destinations, exclusive discounts, and enticing offers right at your fingertips.',
    image: 'https://i.ibb.co/V396Gc1/LogoD.png',
    github: 'https://foodie-hub-ebon.vercel.app/' 

  },
  {
    title: 'Rayig',
    description: 'Raiyg is a cutting-edge smartwatch and phone application tailored to enhance the mental health support system for students in schools. This app stands out by offering a seamless and discreet method for students to monitor their mental health, understand their emotional well-being, and recognize patterns in their mood and stress levels.',
    image: 'https://i.ibb.co/KKwqSSW/Black-Yellow-Minimalist-Brain-Logo.png',
    github: 'https://quastrocon.wordpress.com/' 

  },
  {
    title: 'EduShare',
    description: 'web & mobile platform aimed at providing free, comprehensive educational support to address educational inequality. By leveraging the internet, EduShare reaches audiences in remote or challenging circumstances, promoting educational equality with features like curated online courses, personalized instructor chats, informative blogs, and interactive events.',
    image: 'https://i.ibb.co/T0JdkvK/Edu-Share-Logo.png', 
    github: 'https://edu-share.vercel.app' 
  },
  {
    title: 'Masar',
    description: 'Masar is a cutting-edge application designed to revolutionize the way we monitor road conditions and interact with traffic authorities. it serves as a critical bridge between the community and traffic police, enabling users to report road emergencies, accidents, and hazardous conditions in real-time.',
    image: 'https://i.ibb.co/TY6BDTB/Masar.png',
    github: 'https://masar.vercel.app/' 

  },
  {
    title: 'Monqz',
    description: 'Monqz is an app designed for swimmers and sailors, offering real-time sea conditions, weather forecasts, and safety information. It highlights swimmable areas and warns of potential dangers, making it essential for safe and informed marine activities.',
    image: 'https://i.ibb.co/dryWTdp/logo-1.png',
    github: 'https://monqz-api.vercel.app/' 
  },
  {
    title: 'Busalert',
    description: 'BusAlert enhances school bus safety by using facial recognition and machine learning to monitor student entry and exit. It provides real-time tracking for parents and schools, ensuring a secure and efficient commute. ',
    image: 'https://i.ibb.co/9ZH2jwj/Untitled-design-13.png',
    github: 'https://quastrocon.wordpress.com/' 

  },
  {
    title: 'Organizer',
    description: 'Organizer is an app that smoothens school dismissals by alerting parents via a smartwatch and mobile app when their child leaves school. This system aims to reduce congestion by timing parent arrivals, ensuring a safer and more efficient pick-up process.',
    image: 'https://i.ibb.co/gvNnFdD/Untitled-design-14.png',
    github: 'https://quastrocon.wordpress.com/' 

  },
  {
    title: 'Eye Manager',
    description: 'Eye Manager combines smart glasses with a phone app to monitor eye health, offering real-time insights and advice to prevent dryness and strain. It provides guidance, exercises, and access to eye care services, making it a comprehensive tool for maintaining ocular wellness. ',
    image: 'https://i.ibb.co/RHsLg5k/Untitled-design-15.png',
    github: 'https://quastrocon.wordpress.com/' 

  },
];
const CustomIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  '&:hover': {
    transform: 'scale(1.2)',
  },
  transition: 'transform 0.2s ease-in-out',
}));

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const MobileDevelopmentPage = () => {
  return (
    <>
      <Head>
        <title>Mobile Development Projects</title>
        <link rel="icon" href="https://i.ibb.co/gtXtT7v/My-logo-removebg-preview.png" />
      </Head>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(45deg, #000428 30%, #204377 90%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'Roboto, sans-serif',
          padding: '100px',
        }}
      >
        <NavBar />
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {projectData.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card
                  sx={{
                    width: '100%', // Responsive width
                    height: 480,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: 'auto',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)', // CSS-based hover effect for shadow
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 194, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#333' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                    <IconButton aria-label="github" href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="download" href={project.apk} target="_blank" rel="noopener noreferrer">
                      <DownloadForOfflineIcon />
                    </IconButton>
                    <IconButton aria-label="gallery" href={project.gallery} target="_blank" rel="noopener noreferrer">
                      <PhotoLibraryIcon />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MobileDevelopmentPage;