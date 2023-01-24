import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import { Link } from 'react-router-dom'; 

export default function ProjectCard(props) {
    const imagePlacement=props.imagePlacement; 
    const cardStyling = { 
        display: 'flex', 
        backgroundColor: "#AAC4FF", 
        borderRadius: "20px", 
        padding: "30px", 
        border: "none", 
        boxShadow: "none"
    }; 
    const cardMediaStyling = {
        width: "600px", 
        borderRadius: "20px"
    }
    const Placement= imagePlacement === "right" ? (
        <Card sx={cardStyling}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize: "20px", fontWeight: 700}}>
                        {props.projectData.name}
                    </Typography>
                    <Typography variant="body2" color="white" sx={{fontSize: "14px", fontWeight: 700}}>
                        {props.projectData.description}
                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                // height="400"
                sx={cardMediaStyling}
                image={props.projectData.image}
                alt="project image"
                />
                
        </Card>
    ) : (
        <Card sx={cardStyling}>
                <CardMedia
                component="img"
                // height="400"
                sx={cardMediaStyling}
                image={props.projectData.image}
                alt="project image"
                />
                <CardContent sx={{paddingLeft: "30px"}}>
                <Typography gutterBottom variant="h5" component="div" color="white" sx={{fontSize: "20px", fontWeight: 700}}>
                    {props.projectData.name}
                </Typography>
                <Typography variant="body2" color="white" sx={{fontSize: "14px", fontWeight: 700}}>
                    {props.projectData.description}
                </Typography>
                </CardContent>
        </Card>
    )
    return (
        <Grid item xs={12}>
            <Link to={props.projectData.link} style={{textDecoration: "none"}}>
                {Placement}
            </Link>
        </Grid>
    )
}