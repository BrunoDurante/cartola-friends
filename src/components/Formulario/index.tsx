import React from "react";

function Formulario(){
    return(
        <form action="">
            <div>
                <label htmlFor="pontuacao">Insira a sua pontuação da rodada</label>
                <input type="text" name="pontuacao" id="pontuacao" placeholder="0,00" required />
            </div>
            <div>
                <label htmlFor="">Informe o seu time</label>
                <input type="text" name="time" id="time" required/>
            </div>
        </form>
    )
}

export default Formulario;