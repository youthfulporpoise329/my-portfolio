import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import { Link } from 'react-router-dom'; 

export default function StoryboardCard(props) {
    const imagePlacement=props.imagePlacement; 
    const cardStyling = { 
        display: 'flex', 
        backgroundColor: "#AAC4FF", 
        borderRadius: "20px", 
        padding: "30px", 
        border: "none", 
        boxShadow: "none",
        width: "600px"
    }; 
    const cardMediaStyling = {
        width: "300px", 
        height: "240px",
        borderRadius: "20px"
    }
    const Placement= imagePlacement === "right" ? (
        <Card sx={cardStyling}>
                <CardContent>
                    <Typography variant="body2" color="white" sx={{fontSize: "14px", fontWeight: 700}}>
                        {props.storyboardData.description}
                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                sx={cardMediaStyling}
                image={props.storyboardData.image}
                alt="storyboard image"
                />
                
        </Card>
    ) : (
        <Card sx={cardStyling}>
                <CardMedia
                component="img"
                sx={cardMediaStyling}
                image={props.storyboardData.image}
                alt="project image"
                />
                <CardContent sx={{paddingLeft: "30px"}}>
                <Typography variant="body2" color="white" sx={{fontSize: "14px", fontWeight: 700}}>
                    {props.storyboardData.description}
                </Typography>
                </CardContent>
        </Card>
    )
    return (
        <Grid item xs={12}>
            <Link to={props.storyboardData.link} style={{textDecoration: "none"}}>
                {Placement}
            </Link>
        </Grid>
    )
}