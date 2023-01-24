import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectNavBar from './ProjectNavBar'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './IterativeDesign.css';

function IterativeDesign() {
    return (
        <Box>
            <ProjectNavBar/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '75px'}}>
                <Box sx={{ width: '1200px', padding: '70px 20px 0'}}>
                    <Typography variant='h4' gutterBottom>Iterative Design and Evaluation: Ozone Video Editing Software</Typography>
                    <Typography variant='h5' gutterBottom>Background</Typography>
                        <Typography gutterBottom>
                            This goal of this project was to design an interactive interface for an emerging startup. 
                            The project consisted of four major parts: (1) sketching ideas of the interface, (2) creating 
                            an interactive, high-fidelity prototype, (3) conducting user testing on a final, revised 
                            prototype, and (4) contacting the start up. I completed this project as part of my UI/UI class at Brown in a group with three other students. 
                            The project aimed to give us exposure to the process of iterating upon an original design, and incorporating the feedback we received into 
                            our finished version. Thus, we participated in a group critique in which we received comments from our classmates on their experience
                            in interacting with our original prototype. We also submitted the prototype along with detailed instructions to complete various tasksin our interface
                            to UserTesting.com, and received video feedback of users practicing the "think-aloud" technique in trying to complete the instructions. 
                            <br/>
                            <br/>
                            Our group chose Ozone, a startup that Y-Combinator describes as “the world’s first fully collaborative video editor in the cloud,” for our interface. 
                            The product will allow you to upload and edit high quality footage with other people. 
                            The company describes it as “Figma for video.” They also claim that the editor will work even without a good wifi connection or powerful computer.
                        </Typography>
                        <br/>
                        <br/>
                    <Typography variant='h5' gutterBottom>Ideation and Sketching</Typography>
                        <Typography gutterBottom>
                            With these goals in mind, we generally wanted to design this app with all the features present in other video editors 
                            that we were already familiar with. We also had to come up with some new features that make it clear how collaboration will work.
                        </Typography>
                        <Typography variant='h6' gutterBottom>Sketches</Typography>
                            <Typography gutterBottom>
                                We got together as a group and each brainstormed rough sketches for multiple different pages of our interface. Below are the ideas we came up with. 
                            </Typography>
                            <div style={{display: 'flex', justifyContent: 'space-between', gap: '20px', paddingTop: '20px'}}>
                                <img src="/images/isabelle1.png" width="370px" max-height="auto"/>
                                <img src="/images/isabelle2.png" width="370px" max-height="auto"/>
                                <img src="/images/isabelle3.png" width="370px" max-height="auto"/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                                <img src="/images/jared1.png" width="370px" max-height="auto"/>
                                <img src="/images/jared2.png" width="370px" max-height="auto"/>
                                <img src="/images/jared3.png" width="370px" max-height="auto"/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                                <img src="/images/jesse1.png" width="370px" max-height="auto"/>
                                <img src="/images/jesse2.png" width="370px" max-height="auto"/>
                                <img src="/images/jesse3.png" width="370px" max-height="auto"/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                                <img src="/images/jackson1.png" width="275px" max-height="auto"/>
                                <img src="/images/jackson2.png" width="275px" max-height="auto"/>
                                <img src="/images/jackson3.png" width="275px" max-height="auto"/>
                                <img src="/images/jackson4.png" width="275px" max-height="auto"/>
                            </div>
                    <br/>
                    <br/>
                    <Typography variant='h5' gutterBottom>High-Fidelity Prototyping</Typography>
                        <Typography variant='h6' gutterBottom>Prototype Design Choices</Typography>
                            <Typography gutterBottom>
                                Because Ozone is a collaborative video editing software, we needed to think about special features to include in our design. 
                                We decided to include a share button, similar to many Google products. It was also challenging to think about how collaborative 
                                video editing would actually work. One idea we came up with was the concept of a “lock.” Essentially, if a user locks a video 
                                or audio file, it prevents other users from editing it at the same time. This helps eliminate potential issues with contiguous 
                                editing. Also, the idea was that users would not have to take time to download and update files unless they are unlocked. 
                                This would hopefully make the workflow smoother, since each user wouldn’t have to constantly refresh the project after any edit is made.
                            </Typography>
                        <Typography variant='h6' gutterBottom>Studio Feedback</Typography>
                            <Typography gutterBottom>
                                During the group critique with our classmates, we recieved feedback which was critical to revising our prototype. Below is the most important feedback we recieved:
                                <ul>
                                    <li>
                                        Aesthetic theme not consistent. 
                                    </li>
                                    <li>
                                        Misalignment of elements between different screens. 
                                    </li>
                                    <li>
                                        Unclear functionality of buttons such as FaceTime and chat buttons. 
                                    </li>
                                    <li>
                                        Users not sure what a “lock” is or how to start one. 
                                    </li>
                                    <li>
                                        Button mismapping and deadends. 
                                    </li>
                                </ul>
                                Using this feedback, we edited our prototype to its current version.
                            </Typography>
                        <Typography variant='h6' gutterBottom>Final Design</Typography>
                        <Typography>
                            The link to our final prototype can be found <a href="https://www.figma.com/proto/TmwRYkB11cuZDeqfwrMfty/Ozone-Hi-fi-Prototype?node-id=40%3A1989&scaling=scale-down&page-id=0%3A1&starting-point-node-id=40%3A1989" target="_blank">here</a>!
                        </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' gutterBottom>User Testing</Typography>
                        <Typography variant='h6' gutterBottom>Instructions</Typography>
                            <Typography gutterBottom>
                                We provided users on UserTesting.com with the following instructions and tasks to complete during their interaction with our interface:
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <Card sx={{width: '80%', display: 'flex', backgroundColor: "#AAC4FF", borderRadius: "20px", padding: "15px 30px 0 15px", border: "none", boxShadow: "none"}}>
                                    <CardContent sx={{paddingLeft: "30px"}}>
                                        <Typography variant="body2" color="white" sx={{fontSize: "14px", fontWeight: 700}}>
                                            <span>Notes to User Tester:</span>
                                            <br/>
                                            Hello! Ozone is a video editing tool that enables collaboration, similar to Figma or Google Docs. 
                                            Our interface is not a website — it is a prototype of a website made using Figma. It has limited 
                                            functionality, most of the buttons do not work. With this in mind, please complete the following 
                                            tasks to the best of your ability and then answer the post-testing questionnaire. We encourage you 
                                            to think aloud as you complete the tasks. Thank you!
                                            <br/>
                                            <br/>
                                            <span>Task List:</span>
                                            <ol className='user-instructions'>
                                                <li>
                                                    Login to the website.
                                                </li>
                                                <li>
                                                    Create a new project. 
                                                </li>
                                                <li>
                                                    Open the chat. 
                                                </li>
                                                <li>
                                                    Close the chat. 
                                                </li>
                                                <li>
                                                    Open the video chat. 
                                                </li>
                                                <li>
                                                    Close the video chat.
                                                </li>
                                                <li>
                                                    Enter full-screen mode.
                                                </li>
                                                <li>
                                                    Exit full-screen mode.
                                                </li>
                                                <li>
                                                    Navigate to the "Main Audio Theme" folder. 
                                                </li>
                                            </ol>
                                            <span>User Questions:</span>
                                            <ul className='user-instructions'>
                                                <li>
                                                    What features would you expect to have in a “collaborative video editing software?”
                                                </li>
                                                <li>
                                                    Was there any confusion about how to navigate the prototype, given our instructions?
                                                </li>
                                                <li>
                                                    What does the lock feature do? How would you expect it to be used?
                                                </li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        <br/>
                        <Typography variant='h6' gutterBottom>Results and Analysis</Typography>
                        <Typography gutterBottom>
                            <ul>
                                <li>
                                    One user did successfully create a new project by choosing the “Choose From Library” option. However, they did not 
                                    realize they had created a project, likely because we did not actually build out the screen for choosing a video 
                                    clip from their library due to the limits of the scope of the project. We could have improved this section of our 
                                    interface by only enabling the user to create a new project by clicking the “Create New Project” button, rather than 
                                    having both the “Choose From Library” and “Upload Clip” buttons link to the main editing screen. The user also 
                                    suggested that we include some sort of notification letting them know that they had successfully created a new project.
                                </li>
                                <li>
                                    One user had difficulty opening the chat and video chat functions. This was because they were accidentally zoomed 
                                    in on the prototype, and could only view a part of the screen, therefore the buttons for those two functions 
                                    (located on the bottom left) were not visible. This was more of an error of the prototyping software rather than 
                                    our fault, however we could have been more careful before submitting the link to ensure that the “Fit to Screen” mode was selected.
                                </li>
                                <li>
                                    One user also expected the chat function to be available from the profile home page (where the projects are located). 
                                    However, this was a conscious design choice on our part to only locate it within the main editing page, because the 
                                    idea was that you can hop on a video call with the people you are collaborating with on a specific project. She didn’t 
                                    seem to understand she was looking at a screen grab from a video chat. This could have been remedied by adding captions 
                                    identifying each of the speakers beneath their videos.
                                </li>
                                <li>
                                    A couple of users were confused by the task to enter full screen mode, thinking they were supposed to enter the 
                                    website into full screen, rather than put the video clip into full screen mode. We could have worded our task 
                                    more clearly, e.g. “put the video clip in full screen mode.”
                                </li>
                                <li>
                                    One user criticized the Main Audio Theme folder, claiming that although it makes sense to click on it to open 
                                    it, the UX wasn’t immediately intuitive. She did not like how big the icons were. This could have been improved 
                                    by having the Main Audio Theme and other folders be dropdowns within the same side bar, rather than having them 
                                    open another container.
                                </li>
                                <li>
                                    Despite only having a brief description of how the locking function worked, all users intuitively knew what 
                                    the purpose of the locking function would be.
                                </li>
                                <li>
                                    Overall, despite these small bugs, the users collectively found our UX easy to use, intuitive, clear, and 
                                    user-friendly. All other tasks we asked the users to complete besides those mentioned above went smoothly and quickly 
                                    for all users. One user compared it to another existing video editing software she’d used, saying it held up very well in comparison.
                                </li>
                            </ul>
                        </Typography>
                    <br/>
                    <br/>    
                    <Typography variant='h5' gutterBottom>Reflection</Typography>
                    <Typography gutterBottom>I gained: 
                            <ul className="reflection">
                                <li>
                                    An improved ability to collaborate and cooperate with team members while working on a group project. 
                                </li>
                                <li>
                                    Facility with Figma software from making numerous pages and iterating on multiple versions of those pages. 
                                </li>
                                <li>
                                    Practice in receiving constructive criticism and listening to users describe their experiences, rather than trying to explain our design choices in response. 
                                </li>
                                <li>
                                    Experience in noticing and describing UI/UX issues when I was participating in the group critique session as a tester for other groups. 
                                </li>
                                <li>
                                    Understanding of UserTesting.com, as well as knowledge of the "think-aloud" technique. 
                                </li>
                            </ul>
                    </Typography>
                </Box>
            </Box>
        </Box>
    ); 
}
export default IterativeDesign; 