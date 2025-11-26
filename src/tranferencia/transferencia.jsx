import React from 'react';
import './transferencia.css';
import transacao from '../assets/transacao.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Transferencia() {
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
        <div className='transferencia-container'>
            <h2>transferencia</h2>
            <div className='transferencia-box'>
                <img src={transacao} alt="" />
                <form action="">
                    <label htmlFor="destinatario">Destinatário (CPF, Email ou Chave Pix):</label>
                    <input id="destinatario" type="text" placeholder='***.***.***-**'/>
                    <label htmlFor="valor">Valor</label>
                    <input id="valor" type="text" placeholder='R$'/>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Transferencia;