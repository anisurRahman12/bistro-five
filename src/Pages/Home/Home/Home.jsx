import { Helmet } from "react-helmet";
import Featured from "../Featured/Featured";
import MenuItems from "../MenuItem/MenuItems";
import Parallex from "../Parallex/Parallex";
import PopulerItem from "../PopulerItem/PopulerItem";
import Textimonials from "../Testimonials/Textimonials";


const Home = () => {
    return (
        <div>
               <Helmet>
        <title>Bistro | Home</title>
        
      </Helmet>
            <Featured></Featured>
            <PopulerItem></PopulerItem>
            <MenuItems></MenuItems>
            <Parallex></Parallex>
            <Textimonials></Textimonials>
        </div>
    );
};

export default Home;