import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import CoverImg from '../../../src/assets/home/banner.jpg';
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg';
import saladImg from '../../../src/assets/menu/salad-bg.jpg';
import soupImg from '../../../src/assets/menu/soup-bg.jpg';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
       const [menu]=useMenu();
       const desserts = menu.filter(item => item.category === 'dessert');
       const pizza = menu.filter(item => item.category === 'pizza');
       const offered = menu.filter(item => item.category === 'offered');
       const salad = menu.filter(item => item.category === 'salad');
       const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={CoverImg} title={'Menu Order'}></Cover>
            {/* main cover */}
            <SectionTitle heading={'order now'} subHeading={'Welcome'}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;