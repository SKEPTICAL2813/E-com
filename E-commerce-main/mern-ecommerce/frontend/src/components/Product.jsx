import React from 'react';
import {
  Card,
  Header,
  Footer,
  Container,
  AddItem
} from '../styles/components/ProductStyle';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartActions';

function Product({ imgUrl, title, price, productId, userId }) {
  const dispatch = useDispatch();
  const quantity = 1;
  const data = { userId, productId, quantity };

  const handleAddToCart = data => {
    dispatch(addToCart(data));
    alert('item added to cart');
  };

  return (
    <Card className='border border-red-600 ml-24 h-[35rem] w-28 m-3 rounded-3xl bg-white shadow-md shadow-black'>
      <Container>
        <Header>
          <img src={imgUrl} alt="jacket"></img>
        </Header>
        <Footer>
          <h2>{title}</h2>
          <h3>Rs. {price}</h3>
          <AddItem>
            <button onClick={() => handleAddToCart(data)} className=' bg-rose-400'>Add to cart</button>
          </AddItem>
        </Footer>
      </Container>
    </Card>
  );
}

export default Product;
