import React, { useEffect } from 'react';
import Product from '../../components/Product';
import { Row } from '../../styles/components/HomeStyle';
import { getCart } from '../../features/cart/cartActions';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const { items } = useSelector(state => state.products);
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const userId = userInfo?.id;
  console.log(items);
  useEffect(() => {
    dispatch(getCart(userId));
  }, [userId, dispatch]);

  return (
    <div className='bg-gradient-to-r from-orange-300 to-rose-300 flex flex-wrap '>
      <Row>
        {items.map(item => (
          <Product
            key={item._id}
            imgUrl={item.img}
            title={item.title}
            price={item.price}
            productId={item._id}
            userId={userInfo?.id}
          />
        ))}
      </Row>
    </div>
  );
}

export default Home;
