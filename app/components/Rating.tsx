import React from 'react';

interface StarRatingProp{
    rating : number
}
const StarRating = ({ rating }:StarRatingProp) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    const renderStar = (type: 'full' | 'half' | 'empty', key: string | number) => (
      <span key={key} className={`star ${type}`}>
        {type === 'full' ? '★' : type === 'half' ? '☆' : '☆'}
      </span>
    );
  
    return (
      <div className="rating">
        {Array.from({ length: fullStars }, (_, i) => renderStar('full', i))}
        {hasHalfStar && renderStar('half', 'half')}
        {Array.from({ length: emptyStars }, (_, i) => renderStar('empty', i))}
      </div>
    );
};

export default StarRating;
