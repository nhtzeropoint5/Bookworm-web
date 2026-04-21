import React, { use } from 'react';
import Book from '../Books/Book';


const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);

    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center my-16'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9'>
            {
                books.map((book, index) => <Book key={index} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default AllBooks;