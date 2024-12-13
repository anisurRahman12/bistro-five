import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import CoverImg from '../../../src/assets/home/banner.jpg';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={CoverImg} title={'Menu Order'}></Cover>
        </div>
    );
};

export default Menu;