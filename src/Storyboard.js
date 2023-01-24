import * as React from 'react';
import storyboardData from "./assets/storyboard-data.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import StoryboardCard from './StoryboardCard.js'; 
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

function Storyboard() {
    return (
        <Box id="Storyboard" sx={{ width: '100%', padding: '0 20px 0'}}>
            {/* <Typography variant='h4' gutterBottom>Projects</Typography> */}
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
                {storyboardData.map(data => (
                    <StoryboardCard storyboardData={data} key={data.image}/>
                ))}
                {/* <StoryboardCard storyboardData={storyboardData[0]}/>
                <StoryboardCard storyboardData={storyboardData[1]}/>
                <StoryboardCard storyboardData={storyboardData[2]}/>
                <StoryboardCard storyboardData={storyboardData[3]}/>
                <StoryboardCard storyboardData={storyboardData[4]}/>
                <StoryboardCard storyboardData={storyboardData[5]}/>
                <StoryboardCard storyboardData={storyboardData[6]}/>
                <StoryboardCard storyboardData={storyboardData[7]}/>
                <StoryboardCard storyboardData={storyboardData[8]}/>
                <StoryboardCard storyboardData={storyboardData[9]}/> */}
            </div>
        </Box>    
    ); 
}
export default Storyboard; 