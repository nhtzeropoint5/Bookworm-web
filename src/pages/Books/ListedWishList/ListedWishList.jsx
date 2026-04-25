import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookContext';
import Book from '../Book';

const ListedWishList = ({sortingType}) => {
     const {storedBooks, wishlist, setWishlist} = useContext(BookContext);

     
          const [filteredwishList, setFilteredwishList] = useState([]);
     
              useEffect(()=>{
             if(sortingType){
                 if(sortingType === 'pages'){
                     const sortedData = [...wishlist].sort((a,b) => a.totalPages - b.totalPages);
                     setFilteredwishList(sortedData);
                 }
                 else if(sortingType === 'rating'){
                               const sortedData = [...wishlist].sort((a,b) => a.rating - b.rating);
                     setFilteredwishList(sortedData);
                 }
             }
     
          },[sortingType, wishlist]
         )
         
    
    if(wishlist.length == 0){
        return <div className='h-[50vh] bg-gray-300 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No Data Found</h2>
        </div>
    }
    
    
     return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                wishlist.map((book,index)=> <Book key={index} book={book}></Book>)
            }
        </div>
    );
};

export default ListedWishList;