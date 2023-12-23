import About from "./components/About";
import Home from "./components/Home";
import "@fontsource/poppins";
import Resume from "./components/Resume";
import Demo from "./components/Demo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import {Link,Element} from 'react-scroll';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import './App.css';

function App() {
  const icons = [
    {
      id: 1,
      text: 'Home',
      element: <HomeOutlinedIcon />,
      targetId:'home-section',
    },
    {
      id: 2,
      text: 'About',
      element: <InfoIcon />,
      targetId:'about-section',
    },
    {
      id: 3,
      text: 'Bio Details',
      element: <LayersIcon />,
      targetId:'resume-section',
    },
    {
      id: 4,
      text: 'Projects',
      element: <LayersIcon />,
      targetId:'project-section',
    },
    {
      id: 5,
      text: 'Contact',
      element: <ConnectWithoutContactIcon />,
      targetId:'contact-section',
    },
  ];

  return (
      <div className="">
   {/* sidebar begins */}
        <div>
          <div className='sidebar flex justify-start fixed top-[20rem] left-2'>
      <div className='w-fit p-2 rounded-full'>
        {icons.map((icon) => (
          <Link
          key={icon.id}
          to={icon.targetId}
          smooth={true}
          duration={500}
          className="no-underline"
          spy={true}>
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
   {/* sidebar ends */}
          <Element name="home-section">
           <Home/>
          </Element>
        </div>
        <br />
        <br />
        <br />
        <Element name="about-section">
          <About />
        </Element>
        <br />
        <br />
        <br />
        <Element name="resume-section">
          <Resume />
        </Element>

        <br />
        <br />
        <br />
        <Element name="projects-section">
          <Demo />
        </Element>

        <br />
        <br />
        <br />
        <Element name="contact-section">
          <ContactForm />
        </Element>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
  );
}

export default App;