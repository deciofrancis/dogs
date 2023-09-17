import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFots } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }
  
  return (
    <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <MinhasFots />
          { mobile && 'Minhas Fotos' }
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          { mobile && 'Estatisticas' }
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFotos />
          { mobile && 'Adicionar Foto' }
        </NavLink>
        <button onClick={userLogout}> 
          <Sair />
          { mobile && 'Sair' }
        </button>
    </nav>
  );
}

export default UserHeaderNav;