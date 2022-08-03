import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '../../hooks';
import { fetchChats } from '../../slices/chatsSlice';
import Channels from '../Channels';
import Loader from '../Loader';

const HomePage = () => {
  const { getAuthHeader } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const headers = getAuthHeader();
    dispatch(fetchChats(headers));
  }, []);

  const { loading } = useSelector(({ chats }) => chats);

  return !loading ? (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Channels />
      </Row>
    </Container>
  ) : (
    <Loader />
  );
};

export default HomePage;
