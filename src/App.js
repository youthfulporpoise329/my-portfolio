import './App.css';
import Home from './Home.js'; 
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import PersonasAndStoryboard from './PersonasAndStoryboard';
import ResponsiveRedesign from './ResponsiveRedesign'; 
import IterativeDesign from './IterativeDesign'; 
import Development from './Development'; 
import CssBaseline from '@mui/material/CssBaseline';

// projectData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });

function App() {
  return (
    <div className="App" style={{backgroundColor: "#EEF1FF", fontFamily: "'Raleway', sans-serif"}}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="personas-and-storyboard" element={<PersonasAndStoryboard/>}/>
          <Route path="responsive-redesign" element={<ResponsiveRedesign/>}/>
          <Route path="iterative-design-and-evaluation" element={<IterativeDesign/>}/>
          <Route path="development" element={<Development/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc'}} />
//       </Container>
//     </React.Fragment>
//   );
// }
