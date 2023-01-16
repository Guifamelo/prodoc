
/*


import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Oportunidade from "../oportunidade";
import OportunidadesSP from "../oportunidadesSP";
import OportunidadeFiltrada from "../oportunidadeFiltrada";

const OportunidadesFiltradas = () => {
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

                    //console.log(data.filter(data => data.endereco_cliente.includes("São")))
                })
                .catch(err => console.log(err))
        }
        getOportunidades()
    }, [])




    const [busca, setBusca] = useState('')
    // const filtro = oportunidades.filter(oportunidades.endereco_cliente == 'São Paulo-SP')
    //const filtro = oportunidades.filter(oportunidade => oportunidade.endereco_cliente.includes({ busca }))
    //console.log(oportunidades.filter(oportunidade => oportunidade.endereco_cliente.includes(busca)))
    let filtra = function (item) {
        if (item.endereco_cliente == "Santos-SP") {
            return true
        } else {
            return false
        }
    }

    const filtro = oportunidades.filter(filtra)
    console.log(filtro)
    console.log(busca)


    return (
        <Fragment>
            <div className="main">
                <div className="home">
                    Oportunidade Filtradas......<br />
                    Filtrar Endereço <input onChange={(ev) => setBusca(ev.target.value)} value={busca}></input>


                    {filtro.map((oportunidade, index) =>
                        <ul key={index}>
                            <li>
                                <OportunidadeFiltrada

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
                                ></OportunidadeFiltrada>
                            </li>

                        </ul>
                    )}
                </div>

                continua...
            </div>


        </Fragment >
    )



}
export default OportunidadesFiltradas;


*/