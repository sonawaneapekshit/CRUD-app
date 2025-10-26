import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../loader/Loader';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const Posts = ({ postArray, loading, filterText }) => {
  const [filteredPosts, setFilteredPosts] = useState([postArray]);
  // const filterPostsList = useRef(postArray);

  console.log(postArray);
  return (
    <div className="min-h-80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
      {loading ? (
        <Loader />
      ) : postArray.length > 0 ? (
        postArray
          .filter((post) =>
            filterText !== ''
              ? typeof filterText === 'number'
                ? post.id === filterText
                : post.title.includes(filterText)
              : true,
          )
          .map((post) => (
            <Card sizeClasses="h-full" key={post.id} post={post} />
          ))
      ) : (
        <div>No data present</div>
      )}
    </div>
  );
};

Posts.propTypes = {
  postArray: PropTypes.array,
  loading: PropTypes.bool,
  filterText: PropTypes.string,
};

export default Posts;
