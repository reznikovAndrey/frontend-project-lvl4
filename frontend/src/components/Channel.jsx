import { Nav } from 'react-bootstrap';

import ChannelDropdown from './ChannelDropdown';

const Channel = ({ channelData }) => {
  const { id, name, removable } = channelData;

  return (
    <Nav.Item key={id} className="d-flex">
      <Nav.Link eventKey={id} as="button" className="rounded-0 text-start">
        # {name}
      </Nav.Link>
      {removable && <ChannelDropdown channelId={id} />}
    </Nav.Item>
  );
};

export default Channel;
