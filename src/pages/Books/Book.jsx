import React from 'react';
import { Link } from 'react-router';
import Tag from './Tag';
import { FaStar } from 'react-icons/fa6';

const Book = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="w-full">
            <div className="card bg-base-100 w-full shadow-sm">
  <figure className='p-6'>
    <img
      src={book.image} className='rounded-2xl h-55'/>
  </figure>
  <div className="card-body">
    <div className='flex justify-start gap-1.5'>
        {
            book.tags.map((tag,index) => <Tag tag={tag} index={index}></Tag>)
        }
    </div>
    <h2 className="card-title font-bold text-3xl">
      {book.bookName}
    
    </h2>
    <p className='font-semibold text-lg'>{book.author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{book.category}</div>
      <div className="badge badge-outline">{book.rating} <FaStar></FaStar></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;