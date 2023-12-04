'use client'

import { useState, useEffect, useRef } from 'react';
import styles from './login.module.css';
import Load from '../load/load';

function Login({ setAuthenticado }){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [screenLoading , setScreenLoading] = useState(true);
    const [loginLoading , setLoginLoading] = useState(false);
    const [error, setError] = useState(false);
    const message = useRef('')

    function checkCookieAndSetClass(){
        const cookie = localStorage.getItem('session');
        if (cookie) {
            setAuthenticado(true)
        }
    };

    useEffect(() => {

        function ValidarToken(){

            let token = localStorage.getItem('session');
            let nome = localStorage.getItem('user');

            fetch("/api/validarToken?token="+token+"&nome="+nome, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'same-origin',
            })
            .then(response => response.json())
            .then(data => {
                if (data.message == "Não Autorizado!") {
                    localStorage.removeItem('session');
                    localStorage.removeItem('user');
                }
                setScreenLoading(false);
                checkCookieAndSetClass();
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
        }

    ValidarToken();

    }, [refresh]);

    function validarLogin(event) {
        event.preventDefault();
        setLoginLoading(true)

        const nome = event.target[0].value;
        const senha = event.target[1].value;

        // Fazer uma requisição GET para a API de login
        fetch("/api/validarLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha
            })
        })
        .then(response => response.json())
        .then(data => {

            // Verificar a resposta da API
            if (data.autorizado == 0) {
                setError(true)
                message.current.innerText = data.message;
                setLoginLoading(false)
                return;
            }

            localStorage.setItem('session', data.token);
            localStorage.setItem('user', data.user_data.nome);
            localStorage.setItem('user_data', JSON.stringify(data.user_data));
            setRefresh(!refresh);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            setError(true)
        });
    }

    return(
        <section className={`${styles.mainLogin}`}>

            {!screenLoading &&
                <form onSubmit={validarLogin} className={styles.formBox}>

                    <h1>Sistema de Gerneciamento</h1>
                    
                    <input type="text" value={username} placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} className={error === true ? styles.errorBorder : ''} />
                    <input type="password" value={password} placeholder='Senha' onChange={(e) => setPassword(e.target.value)} className={error === true ? styles.errorBorder : ''} />
                    
                    <p className={styles.errorMessage} ref={message}>&emsp;</p>

                    {loginLoading && <Load size={35} />}
                    {!loginLoading && <button type='submit'>Login</button>}

                </form>
            }

            {screenLoading &&             
                <div className={styles.loadingBox}>
                    <Load size={100} />
                </div>
            }

        </section>
    );
}

export default Login;