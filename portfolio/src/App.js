import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
// import Divider from './components/Divider';
import HomeworkCards from './components/hwCards';
// import DividerTwo from './components/DividerTwo'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
   <div>
     <Navbar/>
     <Jumbotron/>
     <AboutMe/>
     <Cards/>
     <HomeworkCards/>
     {/* <DividerTwo/> */}
     <Contact/>
     <Footer/>
   </div>
   
  )
}
export default App;
