import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Books = () => {

     const {storedBooks, wishlist, setWishlist} = useContext(BookContext);
    return (
        <div className='container mx-uto'>
            Read List : {storedBooks.length}
            Wish List: {wishlist.length}
           <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Read list:{storedBooks.length}</h2>
      <ListedRead
    </TabPanel>
    <TabPanel>
      <h2> Wish List: {wishlist.length}</h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default Books;