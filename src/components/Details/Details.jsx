import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Tag from '../../pages/Books/Tag';
import { ToastContainer, toast } from 'react-toastify';
import { BookContext } from '../../Context/BookContext';

const Details = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const expectedBook = books.find(book => book.bookId == id);

    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;
    

    const {storedBooks, setStoredBooks, handleMarkasRead, handleWishlist, wishlist, setWishlist} = useContext(BookContext);

   

    return (
        <div className='container mx-auto py-16'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure className='lg:max-w-sm w-full'>
    <img
      src={image}
      alt="Album" className='h-full w-full object-cover' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <p className="card-title">By: {author}</p>
    <p className='py-2 border-y-2'>{category}</p>
    <p>Review: {review}</p>
    <div className='flex items-center gap-2'>
        {
            tags.map( (tag, index) => (
               <Tag key={index} tag={tag}></Tag>
            ))
        }
    </div>
    <div className="card-actions justify-end border-t flex flex-col">
        <div>
            <span className='flex justify-between items-center gap-2'>Number of pages: {totalPages}</span>
        </div>


        <div className='flex justify-between items-center gap-2'>
            <span>Publisher: {publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Year of Publishing: {yearOfPublishing}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Rating: {rating}</span>
        </div>

        <div className="flex items-center gap-4">

     
      <button className="btn btn-primary" onClick={()=>{handleMarkasRead(expectedBook)}}>Mark As Read</button>
      <button className="btn btn-success btn-outline" onClick={()=>handleWishlist(expectedBook)}>Add to Wishlist</button>
    </div>   </div>
  </div>
</div>
 <ToastContainer />
        </div>
    );
};

export default Details;