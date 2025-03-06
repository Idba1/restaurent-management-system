import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from '../Home/PopularMenu';
import MenuItem from '../Shared/MenuItem';
import SectionTitle from '../../Components/SectionTitle';


const Menu = () => {


    return (
        <div>
            <Helmet>
                <title>Debug And Dine | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} ></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
        </div>
    );
};

export default Menu;