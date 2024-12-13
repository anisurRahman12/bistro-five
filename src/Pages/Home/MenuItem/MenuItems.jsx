import { useEffect, useState } from "react";
import MenuItem from "../../../Components/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const MenuItems = () => {
    const [menu]= useMenu();
    const populer = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu]= useState();
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         const famousItem = data.filter(item=> item.category ==='salad')
    //         setMenu(famousItem)
    //     })
    // },[])
    return (
        <div>
            <div className="grid md:grid-cols-3">
                {
                   populer?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuItems;