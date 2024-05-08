import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/components/ProfileStyle';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

export default function Profile() {
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (userInfo) {
    return (
      <div className='bg-gradient-to-r from-orange-300 to-rose-300  h-screen justify-center flex'>
        <Container className=' shadow-md shadow-black h-96 bg-white'>
          <h2>Profile Details</h2>
          <section>
            <h4>Name</h4>
            <p>{userInfo.name}</p>
          </section>
          <section>
            <h4>Email</h4>
            <p>{userInfo.email}</p>
          </section>
          <button onClick={handleLogout}>Log-Out</button>
        </Container>
      </div>
    );
  } else {
    return (
      <Container >
        <h4>
          You have been logged out. Please Login{' '}
          <a href="/login">
            <button>Login</button>
          </a>
        </h4>
      </Container>
    );
  }
}
