import React from 'react';
import { Nav, Container, Item, Logo } from '../styles/components/NavStyle';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const cart = useSelector(state => state.cart.cart);

  return (
    <Nav>
      <Link to="/">
        <Logo className='text-4xl'>MISŌ</Logo>
      </Link>
      <Container>
      <Item>
          <Link to="/landing">
            <CiHome size={25} />
            <h4>Home</h4>
          </Link>
        </Item>
        <Item>
          <Link to="profile">
            <CgProfile size={25} />
            <h4>Profile</h4>
          </Link>
        </Item>

        <Item>
          <Link to="cart">
            <p>{cart ? cart.items.length : '0'}</p>
            <FiShoppingBag size={25} />
            <h4>Cart</h4>
          </Link>
        </Item>
      </Container>
    </Nav>
  );
}

export default Navigation;
