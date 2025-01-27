"use client"

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  main{
    .imagem {
      margin-top: 50px;
    }
    section{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 240px;
      gap: 50px;
      .principal{
        color: #FFF200;
        background: #303841;
        padding: 13px 45px;
        border-radius: 20px;
        text-align: center;
        border: #FFF200 2px solid;
      }
      
    }
    @media (min-width: 1024px) {
        font-size: 35px;
        .imagem {
          margin-top: 30px;
        }
        section {
          margin-top: 150px;
        }
      }
  }
`

export default function Home() {
  return (
    <StyledDiv>
      <main>
        <Image className="imagem" src="/logo-mao-halter.png" alt="Imagem de uma mão segurando um halter" width={301.19} height={230}/>
        <section>
          <Link href="auth/register" className="principal">Criar Conta</Link>
          <Link href="auth/signin">Entrar</Link>
        </section>
      </main>
    </StyledDiv>
  );
}
