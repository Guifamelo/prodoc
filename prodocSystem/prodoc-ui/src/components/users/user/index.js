import React, { Fragment, useState } from "react";

const User = (props) => {
    
   if(props.user_name)
    return (

        <div >
            <hr></hr>
            Nome {props.username}{props.nome}{props.user_name}
            <br></br>
            Idade: {props.userage}{props.idade}{props.user_age}
            <br></br>
            Email: {props.email}
            <br></br>
            _id: {props.id}
        </div>




    )
}

export default User;