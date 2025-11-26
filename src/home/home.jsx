import './home.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import olaImage from '../assets/deash.png';

function Home() {
  return (
    <>
      <div className="hearder">
        <img className='logo' src={logo} alt="logo" />
        <h1><Link to={"/Home"}>Neo-pix</Link></h1>
        <nav>
          <ul><Link to={"/transferencia"}>transferencia</Link></ul>
          <ul><Link to={"/pendencias"}>pendentes</Link></ul>
          <ul><Link to={"/segurança"}>modo de segurança</Link></ul>
        </nav>
      </div>
      <div className='home'>
        <div className='home-content'>
          <h2>Olá Jonatas</h2>
          <p>Bem vindo ao Neo-pix, seu Sistema de Segurança Financeira </p>
          <img src={olaImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;