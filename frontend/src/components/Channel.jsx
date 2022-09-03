import filter from 'leo-profanity';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

import ChannelDropdown from './ChannelDropdown';

const Channel = ({ channelData }) => {
  const { id, name, removable } = channelData;

  return (
    <Nav.Item key={id} className="d-flex w-100">
      <Nav.Link eventKey={id} as="button" className="rounded-0 text-start text-truncate">
        # {filter.clean(name)}
      </Nav.Link>
      {removable && <ChannelDropdown channelId={id} />}
    </Nav.Item>
  );
};

Channel.propTypes = {
  channelData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    removable: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Channel;
