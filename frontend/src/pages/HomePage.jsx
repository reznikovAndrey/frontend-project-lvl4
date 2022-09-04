import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Channels, Messages, Loader } from '../components';
import { useAuth } from '../hooks';
import { fetchChats } from '../slices/chatsSlice';

const HomePage = () => {
  const { getAuthHeader } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const headers = getAuthHeader();
    dispatch(fetchChats(headers));
  }, [dispatch, getAuthHeader]);

  const { loading } = useSelector(({ chats }) => chats);

  return !loading ? (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row xs={2} className="h-100 bg-white">
        <Channels />
        <Messages />
      </Row>
    </Container>
  ) : (
    <Loader />
  );
};

export default HomePage;
