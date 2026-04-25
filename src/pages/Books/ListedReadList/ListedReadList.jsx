import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../Context/BookContext';
import Book from '../Book';

const ListedReadList = ({sortingType}) => {

    
     const {storedBooks, wishlist, setWishlist} = useContext(BookContext);

     const [filteredReadList, setFilteredReadList] = useState([]);

         useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages);
                setFilteredReadList(sortedData);
            }
            else if(sortingType === 'rating'){
                          const sortedData = [...storedBooks].sort((a,b) => a.rating - b.rating);
                setFilteredReadList(sortedData);
            }
        }

     },[sortingType, storedBooks]
    )
    




        
        if(storedBooks.length == 0){
            return <div className='h-[50vh] bg-gray-300 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No Data Found</h2>
            </div>
        }
        

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                storedBooks.map((book,index)=> <Book key={index} book={book}></Book>)
            }
        </div>
    );
};

export default ListedReadList;