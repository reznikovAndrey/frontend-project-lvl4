import cn from 'classnames';
import { Nav } from 'react-bootstrap';

const Channel = ({ id, name, isActive, clickHandler }) => {
  const classes = cn('rounded-0', 'text-start', {
    'bg-secondary text-white': isActive,
    'text-black': !isActive,
  });

  return (
    <Nav.Item>
      <Nav.Link eventKey={id} as="button" onClick={clickHandler} className={classes}>
        # {name}
      </Nav.Link>
    </Nav.Item>
  );
};

export default Channel;
