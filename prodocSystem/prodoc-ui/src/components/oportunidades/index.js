import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Oportunidade from "./oportunidade";
import OportunidadesSP from "./oportunidadesSP";

const Oportunidades = () => {
    const [oportunidades, setOportunidades] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3333/oportunidades";

        const getOportunidades = () => {
            axios.get(url)
                .then(res => {
                    console.log(res);
                    const data = res.data;
                    setOportunidades(data)
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
        getOportunidades()
    }, [])

    

    

    return (
        <Fragment>
            <div className="main">
                <div className="home ">
                    <div className="coluna-1 ">
                        <div className="texto-1">
                            <h2>Veja ao lado as oportunidades de investimento cadastrados na plataforma</h2>
                            <h5>Clicando no botão abaixo você faz uma requisição post via Axios ao nosso banco de dados.
                            </h5>
                            <button>Nova Oportunidade</button>
                        </div>
                        <div>
                            Buscando Oportunidades...
                            {oportunidades.map((oportunidade, index) =>
                                <Oportunidade
                                    key={index}
                                    nome={oportunidade.nome_cliente}
                                    documento={oportunidade.documento_cliente}
                                    estado_civil={oportunidade.estado_civil_cliente}
                                    endereco_cliente={oportunidade.endereco_cliente}
                                    tipo_ativo={oportunidade.tipo_ativo}
                                    valor_do_ativo={oportunidade.valor_do_ativo}
                                    valor_de_venda={oportunidade.valor_de_venda}
                                    comissao_parceiro={oportunidade.comissao_parceiro}
                                    comissao_prodoc={oportunidade.comissao_prodoc}
                                    id={oportunidade._id}
                                ></Oportunidade>
                            )}
                        </div>
                    </div>
                    <div>
                        Oportunidades SP...
                        {oportunidades.map((oportunidade, index) =>
                            <OportunidadesSP
                                key={index}
                                nome={oportunidade.nome_cliente}
                                documento={oportunidade.documento_cliente}
                                estado_civil={oportunidade.estado_civil_cliente}
                                endereco_cliente={oportunidade.endereco_cliente}
                                tipo_ativo={oportunidade.tipo_ativo}
                                valor_do_ativo={oportunidade.valor_do_ativo}
                                valor_de_venda={oportunidade.valor_de_venda}
                                comissao_parceiro={oportunidade.comissao_parceiro}
                                comissao_prodoc={oportunidade.comissao_prodoc}
                                id={oportunidade._id}
                            ></OportunidadesSP>
                        )}
                    </div>
                    <hr/>
                    
                    
                    continua...
                </div>
            </div>

        </Fragment>
    )



}
export default Oportunidades;