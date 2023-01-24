import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar.js'; 
import About from './About.js'; 
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import Container from '@mui/material/Container';

function Home() {
    return (
        <Box>
            <Navbar />
            <Container style={{marginTop: '75px'}}>
                <Box sx={{ width: '100%'}}>
                <About />
                <Projects />
                <Contact/>
                </Box>
            </Container>
            <footer>
                <p>
                Copyright &copy;2022
                </p>
            </footer>
        </Box>
    ); 
}
export default Home; 