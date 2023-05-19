import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../../../../assets/arrow';
import style from './styles.module.css';

function Header({ name, id }) {
  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <Link to={'/'}>
          <ArrowLeftIcon />
        </Link>
        <span>{name}</span>
      </div>
      <p>#{id}</p>
    </header>
  );
}

export default Header;
