import React from 'react'
import Card from './Card'
import books from './books.json'


const Booklist = () => {
    const book1 = 
        {
            "image" : "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91asIC1fRwL._AC_UY218_.jpg",
            "name" : "Javascript Book",
            "author":"React",
            "price":"15 $"
        }
    
  return (
    <>
    {
        books.map((item)=>{
            return <Card
            image={item.image}
            name={item.name}
            author={item.author}
            price={item.price}
            />
        })
    }
    <Card image={book1.image} name={book1.name} author={book1.author} price={book1.price}></Card>
    </>
  )
}

export default Booklist