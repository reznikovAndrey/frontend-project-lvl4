import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from '../../hooks';
import { fetchChats } from '../../slices/chatsSlice';

const HomePage = () => {
  const { getAuthHeader } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const headers = getAuthHeader();
    dispatch(fetchChats(headers));
  }, []);

  return <h1>Home page</h1>;
};

export default HomePage;
