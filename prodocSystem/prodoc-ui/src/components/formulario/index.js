import React, { Fragment, useState } from "react";
import axios from "axios";
import Oportunidades from "../oportunidades/";
import TodasOportunidades from "../oportunidades/todasOportunidades";
import { formulario, inputs } from '../../styles/formulario.scss';
import { useNavigate } from "react-router-dom";


const Formulario = () => {
    const [nome_cliente, setNome_cliente] = useState('');
    const [documento_cliente, setDocumento_cliente] = useState();
    const [estado_civil_cliente, setEstado_civil_cliente] = useState('');
    const [endereco, setEndereco] = useState('');
    

    const [data, setData] = useState({
        "nome_cliente": '',
        "documento_cliente": '',
        "estado_civil_cliente": ''
    })
    const url = 'http://localhost:3333/oportunidades'

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e) {
        e.preventDefault()
        axios.post(url, {
            nome_cliente: data.nome_cliente,
            documento_cliente: data.documento_cliente,
            estado_civil_cliente: data.estado_civil_cliente
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    function submit(e) {
        e.preventDefault()
        axios.post(url, {
            nome_cliente: data.nome_cliente,
            documento_cliente: data.documento_cliente,
            estado_civil_cliente: data.estado_civil_cliente,
            endereco_cliente: data.endereco_cliente,
            tipo_ativo: data.tipo_ativo,
            valor_do_ativo: data.valor_do_ativo,
            valor_de_venda: data.valor_de_venda,
            comissao_prodoc: data.comissao_prodoc,
            comissao_parceiro: data.comissao_parceiro,
            numero_processo: data.numero_processo

        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const [filtro, setFiltro] = useState('')

    function clicaSP(){
        
    }


    return (
        <Fragment>
            <div className="main">
                <div className="home ">
                    <div className="coluna-1 ">
                        <div className="texto-1">
                            <h2>Formulario de oportunidade de investimento</h2>
                            <h5>Preencha este formulário com os dados do ativo em questão e clique em salvar.
                            </h5>
                            <button>ver todas</button><br/>
                            <button onClick={clicaSP()}>São Paulo</button><br/>
                            <button >Santos</button><br/>
                            

                        </div>
                        <div>
                            <form className="formulario" onSubmit={(e) => submit(e)}>
                                <div className="inputs">
                                <span>Nome Cliente: <input name='nome_cliente' onChange={(e) => handle(e)} value={data.nome_cliente}></input></span>
                                <span>Documento Cliente: <input name='documento_cliente' onChange={(e) => handle(e)} value={data.documento_cliente}></input></span>
                                <span>Estado Civíl: <input name='estado_civil_cliente' onChange={(e) => handle(e)} value={data.estado_civil_cliente}></input></span>
                                <span>Endereço: <input name='endereco_cliente' onChange={(e) => handle(e)} value={data.endereco_cliente}></input></span>
                                <span>Tipo do Ativo: <input name='tipo_ativo' onChange={(e) => handle(e)} value={data.tipo_ativo}></input></span>
                                <span>Valor do Ativo: <input name='valor_do_ativo' onChange={(e) => handle(e)} value={data.valor_do_ativo}></input></span>
                                <span>Valor de Venda: <input name='valor_de_venda' onChange={(e) => handle(e)} value={data.valor_de_venda}></input></span>
                                <span>Comissão Prodoc: <input name='comissao_prodoc' onChange={(e) => handle(e)} value={data.comissao_prodoc}></input></span>
                                <span>Comissão Parceiro: <input name='comissao_parceiro' onChange={(e) => handle(e)} value={data.comissao_parceiro}></input></span>
                                <span>Numero do Processo: <input name='numero_processo' onChange={(e) => handle(e)} value={data.numero_processo}></input></span>
                                </div>
                                <button>Salvar</button>
                            </form>


                            col
                        </div>
                    </div>
                    continua...
                    <TodasOportunidades></TodasOportunidades>

                </div>
            </div>
        </Fragment>
    )
}
export default Formulario;