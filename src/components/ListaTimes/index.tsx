import React from "react";

function ListaTimes(){
    const times =[{
        nome: 'Eduardo Pereira Rodrigues FC',
        tecnico: 'DuDurante',
        pontuacao: '50,00'
    }]

    return(
        <aside>
            <ul>
                {times.map((item, index) => 
                    <li>
                        <h4>{item.nome}</h4>
                        <span>{item.tecnico}</span>
                        <br></br>
                        <span>{item.pontuacao}</span>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default ListaTimes;