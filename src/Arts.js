import React from "react";

const Arts = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((artsItem) => {
        const { id, name, img, desc, price } = artsItem;
        return (
          <article key={id} className='arts-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Arts;