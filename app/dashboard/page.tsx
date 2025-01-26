"use client"

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";



const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px; 
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        font-size: 30px;
    }
    .menu{
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16.36px;
        a{
            color: #FFF200;
            background: #303841;
            padding: 13px 45px;
            border-radius: 20px;
            text-align: center;
            font-size: 25px;
            border: #FFF200 2px solid;
            @media (min-width: 1024px) {
                 font-size: 48px;
            }
        }
        
    }

`
export default function DashboardPage() {
    return(
        <StyledDiv>
            <main>
                <Image src="/logo-mao-halter.png" 
                    alt="Imagem de uma mão segurando um halter" 
                    width={167} height={133} />
                <h1>Dashboard</h1>
                <section className="menu">
                    <Link href="/dashboard">Criar treino</Link>
                    <Link href="/dashboard">Ver treinos dispiníveis</Link>
                    <Link href="/dashboard">Adicionar usuário</Link>
                    <Link href="/dashboard">Excluir usuário</Link>
                    <Link href="/dashboard">Bloquear usuário</Link>
                </section>
            </main>
        </StyledDiv>
    )
}