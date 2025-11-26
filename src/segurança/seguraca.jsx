import './seguranca.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import segurancaImage from '../assets/segu.png';

function Seguraca() {
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
        <div className='seguranca-container'>
            <h2>Modo de Segurança</h2>
            <div className='seguranca-box'>
                <form action="">
                    <label htmlFor="destinatario">valor limite</label>
                    <input id="destinatario" type="number" placeholder='R$'/>
                    <label htmlFor="valor">Tempo de quarentena</label>
                    <input id="valor" type="time" placeholder='Tempo'/>
                    <button type='submit'>ativar</button>
                </form>
                <div className='img-segu'><img src={segurancaImage} alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default Seguraca;