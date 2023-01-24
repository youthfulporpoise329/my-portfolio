import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './QuestionResponses.css';

export default function QuestionResponses() {
    return (
        <Box sx={{ width: '100%'}}>
            <Typography>
                <ol>
                    <li className="question">What is the task you are trying to accomplish by using the atm machine 
                        (e.g. withdrawal, check balance, deposit a check)? 
                        What prompted you to come to the atm machine 
                        (as opposed to online check deposit, using a credit card instead of cash, for example)? 
                        <ul>
                            <li className="response">
                                All three users I interviewed wanted to make a withdrawal. 
                                Two users mentioned they needed cash for a specific purpose, 
                                such as frequenting a business that only accepted cash or tipping a service worker. 
                                No users mentioned they were withdrawing cash because they needed to have some around more generally. 
                            </li>
                            <li className="response">
                                One of the three users was also interested in checking their balance. 
                            </li>
                        </ul>
                    </li>
                    <li className="question">How frequently do you use atm machines in general, or this one in particular?
                        <ul>
                            <li className="response">
                                Two out of the three users interviewed responded that they rarely use ATM machines in general, 
                                as they don’t really have a need for cash.  
                            </li>
                            <li className="response">
                                One user responded that they visit ATM machines whenever they are required to 
                                because they are frequenting a business that is cash only. 
                            </li>
                        </ul>
                    </li>
                    <li className="question">Were you able to complete the task you set out to accomplish by coming to the atm machine? 
                        <ul>
                            <li className="response">
                                All users were able to withdraw money (and check their balance where applicable). 
                            </li>  
                            <li className="response">
                                One user reported not being able to accomplish the task they set out to, 
                                because they weren’t able to withdraw the exact amount they needed due to the ATM requiring withdrawals in $20 increments. 
                            </li>
                        </ul>
                    </li>
                    <li className="question">What parts of your interaction with the atm interface were frustrating? 
                        <ul>
                            <li className="response"> 
                                Two users reported being frustrated with the contactless card reader on the machine. 
                                Between the three users, they tried a physical BofA contactless card, 
                                the mobile version of a BofA contactless card using Apple Pay, 
                                and a contactless card associated with another bank, 
                                and none of the three users had success. 
                            </li>
                            <li className="response">
                                One user reported frustration with the fact that they could only withdraw cash in $20 increments. 
                            </li>
                            <li className="response">
                                Another user was frustrated because they had accidentally withdrawn an incorrect amount. 
                                They said this was because the interface did not have a confirm button, 
                                so they didn’t know where they were in the process of getting money. 
                            </li>
                        </ul>   
                    </li>
                    <li className="question">At any point were you unsure of how to proceed? 
                        <ul>
                            <li className="response">
                                One user reported confusion due to the buttons on the screen being unresponsive to their touch 
                                (or the interface being slow to respond), making them unsure of how to proceed. 
                            </li>
                            <li className="response">
                                Another user reported confusion associated with the contactless card not working. 
                            </li>
                        </ul>
                    </li>
                    <li className="question">What could have been improved about your overall experience or your interaction with the interface? 
                        <ul>
                            <li className="response">
                                For the user who wanted to both check their balance and make a withdrawal, 
                                they reported that the experience could have been improved had they not had to re-insert their card for each separate function. 
                            </li>
                            <li className="response">
                                Multiple users reported that they wished they had been able to take out cash in smaller increments. 
                            </li>
                            <li className="response">
                                Multiple users also would have liked the interface to have included clearer instructions for how to user the contactless card reader. 
                            </li>
                            <li className="response">
                                The user who accidentally withdrew the incorrect amount would have liked the 
                                interface to have been clearer about when the transaction was going to be confirmed. 
                            </li>
                        </ul>
                    </li>
                    <li className="question">Would you use the atm machine again? 
                        <ul>
                            <li className="response">
                                All users reported that they would use the ATM machine again. 
                            </li>
                        </ul>
                    </li>
                </ol>
            </Typography>
        </Box>
    ); 
}