import React from 'react';
import { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedWishList from './ListedWishList/ListedWishList';
import ListedReadList from './ListedReadList/ListedReadList';


const Books = () => {

     const {storedBooks, wishlist, setWishlist} = useContext(BookContext);


       const [sortingType, setSortingType] = useState('');


    return (
        <div className='container mx-auto'>

<div className='flex flex-col items-center gap-3 my-3'>
            {/* <p> Read List : {storedBooks.length}</p>
           <p> Wish List: {wishlist.length}</p> */}
          <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
          Sort: {sortingType}
          </button>

          <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
            <li onClick={()=>setSortingType('pages')}><a>Sort-by-pages</a></li>
            <li onClick={()=>setSortingType('rating')}><a>Sort-by-rating</a></li>
          </ul></div>


           <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2>Read list:{storedBooks.length}</h2>
            <ListedReadList sortingType={sortingType}></ListedReadList>
          </TabPanel>
          <TabPanel>
            <h2> Wish List: {wishlist.length}</h2>
            <ListedWishList sortingType={sortingType}></ListedWishList>
          </TabPanel>
        </Tabs>                  
        </div>
    );
};

export default Books;