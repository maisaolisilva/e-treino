"use client";

import styled from "styled-components";
import { HiUser } from "react-icons/hi2";
import Link from "next/link";

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 17px;
margin-top: 70px;
h1{
    font-size: 26px;
}
.foto{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #303841;
    width: 232px;
    height: 223px;
}
a {
    border: #FFF200 3px solid;
    border-radius: 20px;
    color: #FFF200;
    padding: 8px 40px;
    text-align: center;
    border-radius: 20px;
    margin-top: 30px;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;       
        div{
            display: flex;
            flex-direction: column;
            gap: 10px;
            input{
                border: #FFF200 3px solid;
                    background: none;
                    padding: 9px 21px;
                    color: #FFF200;
            }
            input::placeholder{
                color: #FFF200;
                opacity: 1;
            }
            }
            button{
                border: #FFF200 3px solid;
                border-radius: 20px;
                color: #FFF200;
                padding: 8px 40px;
                text-align: center;
                border-radius: 20px;
                margin-top: 30px;
            }       
        }

`

export default function perfil(){
    return(
        <StyledDiv>
            <h1>Perfil de Usuário</h1>
            <div className="foto">
                <HiUser size={200} color="#FFF200"/>
            </div>
            <form>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" placeholder="exemplo@email.com"/>
                </div>
                <div>
                    <label htmlFor="fullName">Nome Completo:</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Nome completo"/>
                </div>
                <div>
                    <label htmlFor="birthDate">Data de Nascimento:</label>
                    <input type="date" name="password" id="password" placeholder="sua senha"/>
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
                <Link href="">Conferir progresso</Link>
        </StyledDiv>
    )
}
