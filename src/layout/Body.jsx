import React from 'react';
import Product from './Product';

const Body = () => {
  let listProduct = [
    {
      name: 'Fancy Product',
      isSale: 'false',
      price1: '$40.00',
      price2: '$80.000',
    },
    {
      name: 'Special Item',
      isSale: 'true',
      price1: '$20.00',
      price2: '$18.000',
    },
    {
      name: 'Sale Item',
      isSale: 'true',
      price1: '$50.00',
      price2: '$25.000',
    },
    {
      name: 'Popular Item',
      isSale: 'false',
      price1: '',
      price2: '$40.00',
    },
    {
      name: 'Sale Item',
      isSale: 'true',
      price1: '$40.00',
      price2: '$80.000',
    },
    {
      name: 'Fancy Product',
      isSale: 'false',
      price1: '$120.00',
      price2: '$280.000',
    },
    {
      name: 'Special Item',
      isSale: 'true',
      price1: '$20.00',
      price2: '$18.000',
    },
    {
      name: 'Popular Item',
      isSale: 'false',
      price1: '',
      price2: '$40.00',
    },
  ];

  const AddToCart = (product) => {
    console.log('Đã add sản phẩm ', product);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {listProduct.map((element) => {
            return (
              <Product
                name={element.name}
                price1={element.price1}
                price2={element.price2}
                isSale={element.isSale}
                onAddToCart={AddToCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Body;
