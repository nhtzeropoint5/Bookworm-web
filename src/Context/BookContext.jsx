import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {


     const [storedBooks, setStoredBooks] = useState([]);
     const handleMarkasRead = (currentBook) =>{
        const ExistsBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if(ExistsBook){
            toast.success("Book exists");
        }
        else
        {
            setStoredBooks([ ...storedBooks, currentBook]);
            console.log("print");
        }

    }

    const data = {
        storedBooks, setStoredBooks, handleMarkasRead,
    }

    return <BookContext.Provider value={data}>
        {
            children
        }
    </BookContext.Provider>

};

export default BookProvider;