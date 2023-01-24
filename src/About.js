import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <Box id="About" sx={{ width: '100%', padding: '70px 20px 0'}}>
          <Typography variant='h4' gutterBottom>About</Typography>
          <Typography variant='h6' gutterBottom>Recent Brown Graduate | UI/UX Designer | Technology Equities Analyst | Art History Enthusiast  </Typography>
          <Typography variant='body1' gutterBottom>
            I'm a recent graduate of Brown University with a concentration in Math-Computer Science. 
            My interests lie in the intersection of technology and finance, and in the new year I'll be moving to San Francisco to join BlackRock as an Equities 
            Analyst covering global tech. I'm passionate about raising awareness about how to mobilize 
            capital markets for sustainable development, and for the past two years I've led efforts to 
            recruit over 30 speakers to participate in Brown's annual Future of Sustainable Investing 
            Conference. My other professional experience includes Investment Banking at Bank of America 
            and coding machine learning algorithms for signal processing at a small defense contractor. <br/> <br/>
            Outside of all that, I enjoy skiing in the winter, playing golf and tennis in the summer, 
            and visiting art museums and galleries all year round. I'm an avid distance cyclist and I 
            spent three months mountaineering in Patagonia on gap year.
          </Typography>
        </Box>
    ); 
}
export default About; 