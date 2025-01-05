"use client"

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledDiv = styled.div`
  background: #D6E6F2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  main{
    section{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 290px;
      .principal{
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

export default function Home() {
  return (
    <StyledDiv>
      <main>
        <Image src="/logo-mao-halter.png" alt="Imagem de uma mão segurando um halter" width={301.19} height={230}/>
        <section>
          <Link href="auth/register" className="principal">Criar Conta</Link>
          <Link href="auth/signin">Entrar</Link>
        </section>
      </main>
    </StyledDiv>
  );
}
