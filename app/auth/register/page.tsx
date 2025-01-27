"use client";

import styled from "styled-components";
import Image from "next/image";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-size: 20px;
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
                margin-bottom: 50px;
            }
        }
    }
    
`

export default function RegisterPage() {
    return(
        <StyledDiv>
            <main>
                <Image src="/logo-mao-halter.png" 
                        alt="Imagem de uma mão segurando um halter" 
                        width={301.19} height={230} />
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
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" placeholder="sua senha"/>
                    </div>
                    <div>
                        <label htmlFor="birthDate">Data de Nascimento:</label>
                        <input  className="date" type="date" name="birthDate" id="birthDate" />
                    </div>
                    <button >Criar conta</button>
                </form>
            </main>
        </StyledDiv>
    )
}