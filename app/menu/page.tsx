"use client"

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { HiUser } from "react-icons/hi2";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    max-width: 1200px; 
    margin: 0 auto; 

    header {
        margin-top: 3px;
        display: flex;
        align-items: end;
        justify-content: end;
        width: 100%;
        .botaoPerfil {
            display: flex;
            background: #303841;
            padding: 7px 8px;
        }
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    section {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16.36px;

        a {
            color: #FFF200;
            background: #303841;
            padding: 13px 45px;
            border-radius: 20px;
            text-align: center;
            font-size: 32px;
            border: #FFF200 2px solid;
            @media (min-width: 1024px) {
                 font-size: 48px;
            }
        }
    }
`;

export default function MenuPage() {
    return (
        <StyledDiv>
            <header>
                <Link className="botaoPerfil" href="">
                    <HiUser size={56} color="#FFF200"/>
                </Link>
            </header>
            <main>
                <Image src="/logo-mao-halter.png" 
                        alt="Imagem de uma mão segurando um halter" 
                        width={167} height={133} />
                <section>
                    <Link href="/menu/treinosDisponiveis/iniciante">Iniciante</Link>
                    <Link href="/menu/treinosDisponiveis/intermediario">Intermediário</Link>
                    <Link href="/menu/treinosDisponiveis/avancado">Avançado</Link>
                    <Link href="/menu/treinosDisponiveis/melhor-idade">Melhor Idade</Link>
                </section>
            </main>
        </StyledDiv>
    );
}
