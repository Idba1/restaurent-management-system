import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;
