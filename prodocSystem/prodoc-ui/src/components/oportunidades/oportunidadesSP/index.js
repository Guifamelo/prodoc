import React, { Fragment, useState } from "react";

const OportunidadeSP = (props) => {
    
   if(props.endereco_cliente == 'São Paulo-SP')
    return (

        <div >
            <hr></hr>
            Nome {props.nome}
            <br></br>
            Documento: {props.documento}
            <br></br>
            Estado Civil: {props.estado_civil}
            <br></br>
            Endereço: {props.endereco_cliente}
            <br></br>
            Tipo do Ativo: {props.tipo_ativo}
            <br></br>
            Valor do Ativo: {props.valor_do_ativo}
            <br></br>
            Valor do Venda: {props.valor_de_venda}
            <br></br>
            Comissão Parceiro: {props.comissao_parceiro}
            <br></br>
            Comissão Prodoc: {props.comissao_prodoc}
            <br></br>
            _id: {props.id}
        </div>
       



    )



    
}

export default OportunidadeSP;