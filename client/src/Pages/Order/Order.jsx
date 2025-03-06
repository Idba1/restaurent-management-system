import { Helmet } from 'react-helmet-async';
import orderCoverImg from '../../assets/home/slide1.jpg'
import Cover from '../Shared/Cover';


const Order = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
        </div>
    );
};

export default Order;