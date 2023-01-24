import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectNavBar from './ProjectNavBar'; 
import './ResponsiveRedesign.css';
import Slideshow from './Slideshow.js';

function ResponsiveRedesign() {
    return (
        <Box>
            <ProjectNavBar/>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '75px'}}>
                <Box sx={{ width: '100%', padding: '70px 300px 0'}}>
                    <Typography variant='h4' gutterBottom>Responsive Redesign: Buckskill Tennis Club</Typography>
                    <Typography variant='h5' gutterBottom>Background</Typography>
                    <Typography gutterBottom>
                        As part of an assignment for my UI/UX class at Brown, I was tasked with redesigning a website that I felt was outdated or not user-friendly, and I chose the website of Buckskill Tennis Club.
                        I first analyzed the problems with the existing interface using the ten usability heuristics we'd learned in class. I also generated a WebAIM Wave Report for the site in order to evaluate how accessible it was. 
                        Once I had a better sense of some of the problems with the existing interface, I created low-fidelity wireframes in Balsamiq to illustrate the rough layout of my redesigned site. 
                        Working off these wireframes, I used Figma to create high-fidelity prototypes and a visual design style guide. 
                        I used both sets of mockups when I finally built out the redesigned page using HTML and CSS. The link to my redesigned website can be found <a href="https://youthfulporpoise329.github.io/assign2-responsive-redesign/" target="_blank">here</a>!
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5'gutterBottom>Original Interface</Typography>
                        <div>
                            <img src="/images/original-interface.png" alt="Buckskill original interface" width="100%" style={{borderRadius: '20px'}}/>
                        </div>
                        <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Typography gutterBottom sx={{maxWidth: '90%', textAlign: 'center'}}>
                                The "Lessons" page of the Buckskill Tennis Club leads you to 
                                believe that you can book a lesson online, despite this functionality 
                                not being enabled, confusing the user. It has a daily schedule on the 
                                side and an age-specific schedule (e.g. a schedule of just junior 
                                clinics, for example) on the bottom of each sub-page. Visually, the 
                                website incorporates several different fonts and colors and generally looks dated. 
                            </Typography>
                        </Box>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>Evaluation of Existing Interface</Typography>
                    <Typography variant='h6' gutterBottom>Usability</Typography>
                    <Typography gutterBottom>
                    <ul>
                        <li class="outer-list"><Typography>Visibility of System Status</Typography>
                            <ul>
                                <li class="inner-list">
                                        Pages that are loading provide no indication to 
                                        the user that they are doing so, causing the user 
                                        to believe that the website did not register their 
                                        click and potentially try to repeat the same action 
                                        multiple times. 
                                </li>
                            </ul>    
                        </li>
                        <li class="outer-list"> Consistency and Standards
                            <ul>
                                <li class="inner-list">
                                        Language used does not match convention or user 
                                        expectations &mdash; for example, the page titled &quot;Buy Online&quot; 
                                        enables you to purchase packs of private lessons, 
                                        clinics, or memberships, however, it doesn&apos;t enable you 
                                        to actually book them on the website but instead requires 
                                        you to call the club. I initially thought this page was an 
                                        online store for club-branded apparel and other tennis equipment. 
                                </li>
                            </ul>    
                        </li>
                        <li class="outer-list"> Flexibility and Efficiency of Use
                            <ul>
                                <li class="inner-list">
                                        Redundancy of information &mdash; nearly every 
                                        page has a side bar with a mini schedule 
                                        (despite having a dedicated schedule page and 
                                        schedules on each of the sub-pages for the different 
                                        types of clinics), enabling booking from almost every page, etc.`
                                </li>
                                <li class="inner-list">
                                        Many of the buttons on the page just look like regular text 
                                        until you hover over them, creating confusion. 
                                </li>
                            </ul>    
                        </li>
                        <li class="outer-list">Aesthetic and Minimalist Design
                            <ul>
                                <li class="inner-list">
                                        Buckskill&apos;s website makes use of at least two different fonts. 
                                        There are many different levels of headers, differentiated by font size, 
                                        font color, font weighting, highlighting/banners, etc. This unclear 
                                        hierarchy creates many sections which are constantly competing for the user&apos;s attention.
                                </li>
                                <li class="inner-list">
                                        The website contains much extraneous information. 
                                </li>
                            </ul>    
                        </li>
                    </ul>
                    </Typography>
                    <Typography variant='h6' gutterBottom>Accessibility</Typography>
                        <Typography gutterBottom>
                            The WebAIM Wave Report showed that the page as a 
                            whole was missing a language, did not have page 
                            regions or ARIA landmarks, and lacked a first level 
                            heading. It also showed that images were missing 
                            alternative text. There were three redundant links, 
                            as the three sub-pages under the Facilities tab all 
                            linked to the same page. There was also one empty 
                            link and one broken link. 
                        </Typography>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>LoFi Wireframes</Typography>
                        <Typography gutterBottom>
                        Below are my three low-fidelity wireframes for Buckskill's redesigned website, for a desktop, tablet, and phone screen, respectively.
                        </Typography>
                </Box>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', gap: '20px', padding: '0 150px 0'}}>
                            <img src="/images/Desktop-LoFi-Prototype.png" alt="desktop lofi prototype" style={{width: '50%'}}/>
                            <img src="/images/Tablet-LoFi-Prototype.png" alt="tablet lofi prototype" style={{width: '30%'}}/>
                            <img src="/images/Phone-LoFi-Prototype.png" alt="phone lofi prototype" style={{width: '20%'}}/>
                            {/* <Slideshow/> */}
                        </Box>
                <Box sx={{ width: '100%', padding: '70px 300px 0'}}>
                    <br/>
                    <br/>
                    <Typography variant='h5'gutterBottom>Visual Design Style Guide</Typography>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <img src="/images/style-guide.svg" alt="visual design style guide"/>
                    </Box>
                    <br/>
                    <br/>
                    <Typography variant='h5' gutterBottom>HiFi Prototypes</Typography>
                    <Typography gutterBottom>Below are my three high-fidelity prototypes for Buckskill's redesigned website.</Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
                        <img src="/images/desktop-prototype.svg" alt="desktop hifi prototype" width="1400px" height="auto"/>
                        <br/>
                        <img src="/images/tablet-prototype.svg" alt="tablet hifi prototype" width="1100px" height="auto"/>
                        <br/>
                        <img src="/images/phone-prototype.svg" alt="phone hifi prototype" width="900px" height="auto"/>
                    </Box>
                    <Typography variant='h5' gutterBottom>Reflection</Typography>
                    <Typography gutterBottom> I gained: 
                        <ul className="reflection">
                            <li>
                                Experience evaluating a website on usability criteria and using the WebAIM Wave Report to evaluate the accessibility of the website. 
                            </li>
                            <li>
                                Exposure to software such as Balsamiq and Figma in creating low-fidelity wireframes and high-fidelity prototypes (and the valuable firsthan lesson that the low-fidelity mockups should be rough outlines of the site layout, and the bulk of your time should be spent in designing the hifi prototypes!). 
                            </li>
                            <li>
                                Training in applying visual design principles in constructing the layout of a website. 
                            </li>
                            <li>
                                Skills in website development in HTML and CSS. 
                            </li>
                            <li>
                                Practice in considering how an interface will look on multiple different screen shapes and sizes, depending on the device the user is viewing it on. 
                            </li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Box>
    ); 
}
export default ResponsiveRedesign; 