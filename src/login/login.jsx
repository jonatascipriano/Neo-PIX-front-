import './login.css';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className="container-login">
            <div className="box-login">
                <div className='form-login'>
                    <h2>NEOPIX</h2>
                    <span>Login</span>
                    <input type="email" placeholder='E-mail' />
                    <span>Senha</span>
                    <input type="password" placeholder='Senha' />
                    <Link className='link-senha'>Esqueci minha senha</Link>
                    <button className='btn-login' type='submit'>Entrar</button>
                    <p className='criar-conta'>Não tem uma conta? <Link className='link-conta'>click aqui</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;