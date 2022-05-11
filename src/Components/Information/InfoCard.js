import React from 'react';

const InfoCard = ({ img, cardTitle, cardBg, cardText }) => {
  return (
    <div className={`card lg:card-side shadow-xl bg-accent py-0 lg:py-2 md:pt-8 ${cardBg}`}>
      <figure className='px-4 md:pl-8 sm:px-8'>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body py-4 lg:pl-0">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;