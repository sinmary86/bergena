import React from 'react';
import NavigationBar from '../components/Navbar';
import MainSection from '../components/MainSection';
import ContactIcons from '../components/ContactIcons';
import ScrollDownArrow from '../components/ScrollDownArrow';
import '../styles/Startseite.css';

const HomePage = () => {
  return (
    <div>
    <div id="startseite" className="homepage">
 
      <NavigationBar />

    
        <div>
          <ContactIcons />
          <MainSection />
          <ScrollDownArrow />
        </div>
    

    </div>
    </div>
  );
};

export default HomePage;
