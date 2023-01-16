import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import User from "./user";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = "http://localhost:3333/users";

        const getUsers = () => {
            axios.get(url)
                .then(res => {
                    console.log(res);
                    const data = res.data;
                    console.log(data);
                    setUsers(data)

                })
                .catch(err => console.log(err))
        }
        getUsers()

    }, []);

    return (
        <Fragment>
            <div className="main">
                <div className="home ">
                    <div className="coluna-1 ">
                        <div className="texto-1">
                            <h2>Veja ao lado os usuários cadastrados na plataforma</h2>
                            <h5>Clicando no botão abaixo você faz uma requisição get via Axios ao nosso banco de dados.
                            </h5>
                            <button>Buscar</button>
                        </div>
                        <div>
                            Buscando Usuários...
                            {users.map((user, index) => 
                                <User
                                    key={index}
                                    nome={user.nome}
                                    username={user.username}
                                    user_name={user.user_name}                                    
                                    user_age={user.user_age}
                                    idade={user.idade}
                                    userage={user.userage}
                                    idadeing={user.userage}
                                    email={user.email}
                                    id={user._id}
                                >
                                </User>
                            )}
                        </div>
                    </div>
                    continua...
                </div>
            </div>

        </Fragment>
    )
}

export default Users;