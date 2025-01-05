"use client"

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
            gap: 50px;
            div{
                display: flex;
                flex-direction: column;
                gap: 10px;
                input{
                    background: #303841;
                    padding: 9px 21px;
                    color: #FFF200;
                }
                input::placeholder{
                    color: #FFF200;
                    opacity: 1;
                }
            }
            button{
                background: #303841;
                color: #FFF200;
                padding: 8px 40px;
                text-align: center;
                border-radius: 20px;
                margin-bottom: 50px;
            }
        }
    }
`
export default function SignInPage() {
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
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" placeholder="sua senha"/>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <Link href="./register" className="principal">Criar Conta</Link>
            </main>
        </StyledDiv>
    )
}