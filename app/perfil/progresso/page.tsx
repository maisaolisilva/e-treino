"use client";

import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
    a {
        border: #FFF200 3px solid;
        border-radius: 20px;
        color: #FFF200;
        padding: 8px 40px;
        text-align: center;
        border-radius: 20px;
        margin-bottom: 50px;
    }
`

export default function Progresso(){
    return(
        <StyledDiv>
            <h1>Progresso</h1>
            <p>Gráfico com possibilidade de navegar pelas datas de inserção dos dados</p>
            <Link href="/perfil/inserirDados">Inserir Novas Medidas</Link>
        </StyledDiv>
    )
}