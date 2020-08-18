import React from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Divider from './components/Divider';
import HomeworkCards from './components/hwCards'


function App() {
  return (
   <div>
     <Navbar/>
     <Jumbotron/>
     <Cards/>
     <Divider/>
     <HomeworkCards/>
   </div>
   
  )
}
export default App;
