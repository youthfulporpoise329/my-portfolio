import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectNavBar from './ProjectNavBar'; 
import Storyboard from './Storyboard.js'; 
import QuestionResponses from './QuestionResponses.js'; 

function PersonasAndStoryboard() {
    return (
        <Box>
            <ProjectNavBar/>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '75px'}}>
                <Box class="PersonasAndStoryboard" sx={{ width: '100%', padding: '70px 300px 0'}}>
                    <Typography variant='h4' gutterBottom>Personas and Storyboard: ATM Interface</Typography>
                    <Typography variant='h5' gutterBottom>Background</Typography>
                        <Typography gutterBottom>
                            This project was the first assignment in my UI/UX course at Brown. 
                            We were instructed to chose a publicly-accessible interface and observe members of the public interacting with it. 
                            I chose an ATM interface located in Brown's student center. 
                            I then interviewed users using a set of carefully constructed questions designed to probe them about their experience in using the ATM interface and hopefully to elicit any complaints they had about its design. 
                            My findings from these observations and interviews are summarized below. 
                            Based on these findings, I created two fictional personas, Mani-Pedi Michela and DeFi Dylan, which I believe are representative of the real users I interviewed. 
                            I also storyboarded DeFi Dylan's interactions with the ATM interface. 
                            <br/>
                            <br/>
                        </Typography>
                    <Typography variant='h5'>Interface Overview</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Box sx={{ width: '78%', padding: '20px 20px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <img src="/images/atm-interface.png" alt="ATM interface sketch" width="500px" max-height="auto"/>
                                <Typography gutterBottom>
                                    The user is prompted to insert their card and then is asked to choose from a number of banking services they&#39;d like to access, 
                                    such as cash withdrawal or checking their account balance. This interface is automating a number of basic financial services which 
                                    don&#39;t require face-to-face interaction with a bank teller,thereby allowing the bank to serve more customers, as the ATMs only 
                                    require servicing from a human periodically, and they can be placed in locations that are more convenient to the customers, allowing 
                                    them to skip a trip to the bank. Once you insert your card and choose what function you want to do, you use the numerical buttons 
                                    and the buttons on the interface screen to enter info, then you are given the cash you requested (if you are making a withdrawal), 
                                    as well as a receipt.
                                </Typography>
                            </Box>
                        </Box>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>Observations of Real Users</Typography>
                        <Typography variant='h6' gutterBottom>User 1</Typography>
                        <Typography gutterBottom>
                            This user is using the ATM machine to check their balance and to make a withdrawal. 
                            I noticed the user getting frustrated that the screen interface buttons weren&#39;t particularly responsive to touch. 
                            The user also expressed frustration that the way the interface was set up caused them to almost accidentally confirm when they had entered the incorrect amount. 
                            They also were irritated about the ATM fee that they incurred during the transaction due to the fact that they do not bank with the bank that owns the ATM. 
                        </Typography>
                        <Typography variant='h6' gutterBottom>User 2</Typography>
                        <Typography gutterBottom>
                            The user is using the ATM machine to make a withdrawal. 
                            I noticed they repeatedly tried to use the contactless card reader 
                            instead of inserting their card (which I did confirm was contactless-enabled), 
                            but either the card reader was broken or their card was not compatible with the ATM reader 
                            (perhaps because it was not a Bank of America-issued card). 
                            The user paused for a significant period of time when it asked them 
                            what type of account they wanted to withdraw from (checking or savings), 
                            perhaps indicating that they didn’t know their account type. 
                            The user was hoping to withdraw $35 to purchase their GCB membership, 
                            however, the ATM would only let her withdraw cash in $10 increments, 
                            which she found annoying. 
                        </Typography>
                        <Typography variant='h6' gutterBottom>User 3</Typography>
                        <Typography gutterBottom>
                            The user is using the ATM machine to make a withdrawal. 
                            I noticed again that the user was getting frustrated that 
                            the screen interface buttons aren’t particularly responsive to touch. 
                            Additionally, this user did accidentally press the wrong button for the 
                            amount she wanted to withdraw, and she actually did accidentally confirm 
                            the transaction before she could correct her mistake. 
                            She expressed frustration that she wished the machine made it clearer 
                            that she was about to confirm the transaction and the amount she 
                            was going to be withdrawing. Perhaps she was in a rush and did not fully 
                            read all of the prompts. 
                        </Typography>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>User Interview Responses</Typography>
                        <Typography gutterBottom>The observed users were asked the following questions in order to gauge their experience with the interface. Their answers are summarized below.</Typography>
                        <QuestionResponses/>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>Fictional Personas</Typography>
                        <Typography gutterBottom>
                            Mani-Pedi Michela and DeFi Dylan are two fictional personas I created based off of the traits and actions of the real users I observed.
                        </Typography>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <img src="/images/michela.png" alt="ATM interface sketch" width="600px" max-height="auto"/>
                            <img src="/images/dylan.png" alt="ATM interface sketch" width="600px" max-height="auto"/>
                        </Box>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>Storyboard</Typography> 
                </Box>
                <Box sx={{ width: '100%'}}>
                    <Storyboard/>
                </Box>
                <Box class="PersonasAndStoryboard" sx={{ width: '100%', padding: '70px 300px 0'}}>
                        <br/>
                        <br/>
                    <Typography variant='h5'gutterBottom>Reflection</Typography> 
                    <Typography gutterBottom>I gained: 
                            <ul className="reflection">
                                <li>
                                    Experience crafting good questions that would help both myself and the user evaluate the interface on usability criteria, that were (hopefully) not leading questions but were neutral and unbiased.  
                                </li>
                                <li>
                                    The chance to overcome my fear of speaking to strangers. 
                                </li>
                                <li>
                                    Practice summarizing my findings from user interviews, and synthesizing these three different real-life users into two fictional personas, and then aggregating their experiences into a single storyboard that was representative of their collective interactions. 
                                </li>
                                <li>
                                    An introduction to one type of usability testing. 
                                </li>
                                <li>
                                    My first exposure to using HTML and CSS to create a simple webpage (for my class submission). 
                                </li>
                            </ul>
                    </Typography>
                </Box>
            </Box>
            
        </Box>
        
    ); 
}
export default PersonasAndStoryboard; 