import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import DebugAndDine from './DebugAndDine';
import CallUs from './CallUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <DebugAndDine></DebugAndDine>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;
