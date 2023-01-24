import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link'; 

function Contact() {
    return (
        <Box id="Contact" sx={{ width: '100%', padding: '70px 20px 0'}}>
          <Typography variant='h4' gutterBottom>Contact</Typography>
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <Link href="https://www.linkedin.com/feed/">
                <LinkedInIcon sx={{color: "#B1B2FF"}}/>
            </Link>
            <Link href="https://www.instagram.com/">
                <InstagramIcon sx={{color: "#B1B2FF"}}/>
            </Link>
            <Link href="https://www.facebook.com/">
                <FacebookIcon sx={{color: "#B1B2FF"}}/>
            </Link>
          </Box>
        </Box>
    ); 
}
export default Contact; 