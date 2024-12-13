

const MenuItem = ({item}) => {
    const {name, image, price}= item;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>{price}</p>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default MenuItem;