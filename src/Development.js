import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProjectNavBar from './ProjectNavBar'; 
import { borderRadius } from '@mui/system';

function Development() {
    return (
        <Box>
            <ProjectNavBar/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '75px'}}>
                <Box id="PersonasAndStoryboard" sx={{ width: '1200px', padding: '70px 20px 0'}}>
                    <Typography variant='h4' gutterBottom>Development: Bakery Website</Typography>
                    <Typography variant='h5' gutterBottom>Background</Typography>
                        <Typography gutterBottom>
                            For the last project in my UI/UX class at Brown, we were tasked with creating an interactive interface using React components that tied to an internal data state.
                            The project required us to use list-based interface for which we could implement sorting and filtering functions which would work in any combination with each other. 
                            The user of the interface needed to be able to add and remove items from the list to an aggregator section, which detailed the items that had been added to the aggregator and displayed some aggregated property.
                        </Typography>
                    <br/>
                    <br/>
                    <Typography variant='h5' gutterBottom>My Bakery</Typography>
                        <Typography gutterBottom>
                            I chose to implement a page of a simple bakery website used for online ordering. 
                            Each item sold in my bakery was classified as either a bread, cake, pastry, or pie, and was flagged with dietary restrictions such as gluten-free, nut-free, and dairy-free. 
                            These items could then be filtered by type and by dietary restriction, and these filters could be combined (so, for example, a user could chose to display only gluten-free pastries). 
                            I also implemented the ability to sort the items in my bakery by alphabetical order of their names, by numerical order by their price, or by their type (showing all breads, then all cakes, then pastries, then pies). 
                            This sorting functionality also works on its own or in combination with any of the filter options. 
                            Lastly, the user is able to add items from my bakery to a cart, which will display the total cost of all the items in the cart, as well as a list of items in the cart next to the quantity of each item. 
                            Items can be removed from the cart using remove buttons next to each cart item, which decrease the quantity of that item by one, or remove the item from the cart entirely if there is only one of that item remaining. 
                            A link to my deployed bakery website can be found <a href="https://youthfulporpoise329.github.io/development/" target="_blank">here</a>!
                            <br/>
                            <br/>
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px'}}>
                            <img src="/images/bakery.png" alt="my bakery website" width="100%"/>
                            <div style={{width: '100%', borderBottom: '1px solid #e2e2e2'}}></div>
                            <img src="/images/aggregator.svg" alt="bakery cart aggregator" width="60%"/>
                            <div style={{width: '100%', borderBottom: '1px solid #e2e2e2'}}></div>
                            <img src="/images/filter-info.svg" alt="bakery sort/filter function" width="100%"/>
                        </Box>
                    <Typography variant='h5' gutterBottom>Reflection</Typography>
                        <Typography gutterBottom>I gained: 
                            <ul className="reflection">
                                <li>
                                    Invaluable experience in using Javascript and React.js to create apps and webpages. 
                                </li>
                                <li>
                                    The realization that using MaterialUI components can infinitely speed up the development process. 
                                </li>
                                <li>
                                    Knowledge about how React's internal states can be updated asynchronously through the front end. 
                                </li>
                            </ul>
                        </Typography>
                </Box>
            </Box>
        </Box>
        
    ); 
}
export default Development; 