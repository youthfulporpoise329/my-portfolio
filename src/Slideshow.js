import 'react-slideshow-image/dist/styles.css'; 
import * as React from 'react';
import { Slide } from 'react-slideshow-image';

const Slideshow = () => {
    const images = [
        // "/images/Desktop-LoFi-Prototype.png",
        // "/images/Tablet-LoFi-Prototype.png",
        // "/images/Phone-LoFi-Prototype.png",
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    const slideStyling = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '350px'
    }
    
    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})`, ...slideStyling}}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})`, ...slideStyling}}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})`, ...slideStyling}}>
                </div>
            </div>
        </Slide>
    );
};

export default Slideshow;

