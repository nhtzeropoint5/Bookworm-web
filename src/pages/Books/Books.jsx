import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {

     const {storedBooks, setStoredBooks, handleMarkasRead} = useContext(BookContext);
    return (
        <div>
            Books is books is bubby onek porashuna kore taai bubbies porua chhele
            
        </div>
    );
};

export default Books;