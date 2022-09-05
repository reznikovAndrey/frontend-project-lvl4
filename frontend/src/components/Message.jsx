import filter from 'leo-profanity';
import PropTypes from 'prop-types';

const Message = ({ username, body }) => (
  <div className="text-break mb-2">
    <b>{username}</b>
    :
    {filter.clean(body)}
  </div>
);

Message.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Message;
