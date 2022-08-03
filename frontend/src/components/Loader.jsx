import { Spinner } from 'react-bootstrap';

const Loader = () => (
  <div className="d-flex flex-column justify-content-center align-items-center h-100">
    <Spinner animation="border" variant="primary" />
  </div>
);

export default Loader;
