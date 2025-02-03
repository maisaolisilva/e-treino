"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import styled from "styled-components";

// Estilização básica
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .exercicio {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 10px;
    margin: 10px 0;
    background: #303841;
    color: #fff200;
    border-radius: 10px;

    button {
      background: red;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  }

  .adicionar {
    background: green;
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
  }
`;

// Mock de exercícios (por enquanto)
const exerciciosMock: Record<string, { id: string; nome: string }[]> = {
    "treino-a": [
      { id: "1", nome: "Supino Reto" },
      { id: "2", nome: "Tríceps Testa" },
    ],
    "treino-b": [
      { id: "3", nome: "Remada Curvada" },
      { id: "4", nome: "Rosca Direta" },
    ],
  };

export default function ExerciciosAdmin() {
  const params = useParams();
  const treinoId = params.id as string;
  const exercicios = exerciciosMock[treinoId] || [];

  return (
    <StyledDiv>
      <h1>Exercícios do Treino</h1>
      {exercicios.map((exercicio) => (
        <div className="exercicio" key={exercicio.id}>
          <span>{exercicio.nome}</span>
          <button>Excluir</button>
        </div>
      ))}
      <Link href="/dashboard/criarExercicio" className="adicionar">+ Adicionar Exercício</Link>
    </StyledDiv>
  );
}
