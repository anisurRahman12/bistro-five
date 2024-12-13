import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({items,img, title}) => {
    return (
        <div>
             {title && <Cover img={img} title={title}></Cover>}
             <div className="grid md:grid-cols-3">
                {
                   items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;