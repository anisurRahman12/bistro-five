import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// npm install --save react-tabs
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad','soup','dessert', 'drinks', 'pizza'];
    const {category}= useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex]= useState(initialIndex);
    const [menu]= useMenu();
    
    console.log(category);
    const desserts = menu.filter(item => item.category === 'dessert');
       const pizza = menu.filter(item => item.category === 'pizza');
       const drinks = menu.filter(item => item.category === 'drinks');
       const salad = menu.filter(item => item.category === 'salad');
       const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Cover img={orderImg} title={'order now'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Pizza</Tab>
                </TabList>
                <TabPanel>
                <OrderTab items={salad}></OrderTab>
                </TabPanel>
                {/* soup */}
                <TabPanel>
                  <OrderTab items={soup}></OrderTab>
                </TabPanel>
                {/* dessert */}
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                {/* drinks */}
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                {/* pizza */}
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;