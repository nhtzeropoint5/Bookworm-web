import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {


     const [storedBooks, setStoredBooks] = useState([]);
     const [wishlist, setWishlist] = useState([]);
     const handleMarkasRead = (currentBook) =>{
        const ExistsBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if(ExistsBook){
            toast.warning("Book exists");
        }
        else
        {
            setStoredBooks([ ...storedBooks, currentBook]);
            toast.success("Book added to list");
        }

    }
      const handleWishlist = (currentBook) =>{
        const ExistsBook = wishlist.find(book => book.bookId === currentBook.bookId);
        
        const readList = storedBooks.find(book => book.bookId === currentBook.bookId);

        if(readList){
            toast.error('You have already read the book');
            return;
        }
        
        
        if(ExistsBook){
            toast.warning("Book is already on wishlist");
        }
        else
        {
            setWishlist([ ...wishlist, currentBook]);
            toast.success("Book added to wishlist");
        }

    }

    const data = {
        storedBooks, setStoredBooks, handleMarkasRead, handleWishlist, wishlist, setWishlist
    }

    return <BookContext.Provider value={data}>
        {
            children
        }
    </BookContext.Provider>

};

export default BookProvider;