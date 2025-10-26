import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '../loader/Loader';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const Posts = ({ postArray, loading, filterText }) => {
  // const [filteredPosts, setFilteredPosts] = useState([postArray]);
  // const filterPostsList = useRef(postArray);

  const getFilteredPosts = () => {
    if (filterText === '') return postArray;
    return postArray.filter((post) =>
      typeof filterText === 'number'
        ? post.id === filterText
        : post.title.includes(filterText),
    );
  };

  let filteredPosts = getFilteredPosts();

  console.log(postArray);
  return (
    <div
      className={`min-h-80 grid ${
        filteredPosts.length > 0
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1'
      } gap-4 auto-rows-fr`}
    >
      {loading ? (
        <Loader />
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Card sizeClasses="h-full" key={post.id} post={post} />
        ))
      ) : (
        <div className="h-full w-full text-center text-2xl font-bold flex justify-center items-center">
          No data present
        </div>
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
