import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import AllBooks from './AllBooks';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div className='text-center py-16'>Loading books...</div>}>
                <AllBooks></AllBooks>
            </Suspense>
        </div>
    );
};

export default Homepage;