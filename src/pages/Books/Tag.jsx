import React from 'react';

const Tag = ({tag, index}) => {
    return (
              <div className={` badge  ${index % 2 ? `badge-secondary` : `badge-outline badge-success`}`}>{tag}</div>
    );
};

export default Tag;