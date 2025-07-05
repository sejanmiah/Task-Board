import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroSection from './HeroSection';
import TaskBoard from './Task/TaskBoard';



const App = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
      <Footer></Footer>
    </div>
  );
};

export default App;