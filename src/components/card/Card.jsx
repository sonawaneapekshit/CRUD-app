import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ sizeClasses = 'w-full', post }) => {
  const { title, userid, body, id } = post;
  return (
    <div className={`flex justify-between flex-col border border-zinc-800 rounded p-4 ${sizeClasses}`}>
      <h2
        aria-label="post-title"
        className="article font-bold text-xl md:text-2xl"
      >
        {title}
      </h2>
      <article aria-describedby="post-description">
        <p className="font-medium text-regular md:text-lg">{body}</p>
      </article>
    </div>
  );
};

Card.propTypes = {
  sizeClasses: PropTypes.string,
  post: PropTypes.object,
};

export default Card;
