import cn from 'classnames';

const Channel = ({ name, isActive, clickHandler }) => {
  const classes = cn('w-100', 'rounded-0', 'text-start', 'btn', {
    'btn-secondary': isActive,
  });

  return (
    <li className="nav-item w-100">
      <button type="button" className={classes} onClick={clickHandler}>
        <span className="me-1">#</span>
        {name}
      </button>
    </li>
  );
};

export default Channel;
