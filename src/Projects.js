import * as React from 'react';
import projectData from "./assets/project-data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import ProjectCard from './ProjectCard.js'; 
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

function Projects() {
    return (
        <Box id="Projects" sx={{ width: '100%', padding: '70px 20px 0'}}>
            <Typography variant='h4' gutterBottom>Projects</Typography>
            <Grid container rowSpacing={4}>
                <ProjectCard projectData={projectData[0]}/>
                <ProjectCard projectData={projectData[1]} imagePlacement="right"/>
                <ProjectCard projectData={projectData[2]}/>
                <ProjectCard projectData={projectData[3]} imagePlacement="right"/>
            </Grid>
        </Box>    
    ); 
}
export default Projects; 


