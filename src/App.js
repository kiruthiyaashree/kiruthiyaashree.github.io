import About from "./components/About";
import Home from "./components/Home";
import "@fontsource/poppins";
import Resume from "./components/Resume";
import Demo from "./components/Demo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  const icons = [
    {
      id: 1,
      text: 'Home',
      element: <HomeOutlinedIcon />,
      path: '/',
    },
    {
      id: 2,
      text: 'About',
      element: <InfoIcon />,
      path: '/about',
    },
    {
      id: 3,
      text: 'Projects',
      element: <LayersIcon />,
      path: '/projects',
    },
    {
      id: 4,
      text: 'Contact',
      element: <ConnectWithoutContactIcon />,
      path: '/contact',
    },
  ];
  return (
   <Router>
      <div className="">
   
        <div>
          <div className='sidebar flex justify-start fixed top-[20rem] left-2'>
      <div className='w-fit p-2 rounded-full'>
        {icons.map((icon) => (
          <Link key={icon.id} to={icon.path} className='no-underline'>
            <button className='px-3 py-3 my-3 flex bg-gray-100 hover:bg-teal-300/50 shadow-2xl border-black rounded-full relative group'>
              {icon.element}
              <span className='px-2 font-semibold hidden group-hover:inline-block'>
                {icon.text}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Resume />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <br />
        <br />
        <br />
        <div>
          <About />
        </div>
        <br />
        <br />
        <br />
        <div>
          <Resume />
        </div>

        <br />
        <br />
        <br />
        <div>
          <Demo />
        </div>

        <br />
        <br />
        <br />
        <div>
          <ContactForm />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;