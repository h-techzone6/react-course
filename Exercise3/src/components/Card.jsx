import React from 'react'

const Card = (props) => {
  const {image,name,author,price} = props;
  return (
    <>
    <div className="card">
    <div className="card-container">
    <img src={image} alt="" />
    <div className='card-text'>
        <h2>{name}</h2>
        <h3>{author}</h3>
        <h2>{price}</h2>
        <button>Add to Cart</button>
    </div>
    </div>
</div>
    </>
  )
}

export default Card