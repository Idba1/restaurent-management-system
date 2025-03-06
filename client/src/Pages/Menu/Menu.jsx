import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from '../Home/PopularMenu';


const Menu = () => {

    return (
        <div>
            <Helmet>
                <title>Debug And Dine | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"OUR MENU"} ></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={"OUR MENU"} ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;