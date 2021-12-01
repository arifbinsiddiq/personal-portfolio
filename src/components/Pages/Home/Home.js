import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MyProjects from '../MyProjects/MyProjects';
import MySkills from '../MySkills/MySkills';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;