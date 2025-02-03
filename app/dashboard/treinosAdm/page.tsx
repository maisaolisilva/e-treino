"use client";

import Link from "next/link";
import styled from "styled-components";

// Estilização básica
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .treino {
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

    a {
      color: #fff200;
      text-decoration: none;
    }

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

// Mock de treinos (por enquanto)
const treinos = [
  { id: "treino-a", nome: "Treino A - Peito e Tríceps" },
  { id: "treino-b", nome: "Treino B - Costas e Bíceps" },
];

export default function TreinosAdmin() {
  return (
    <StyledDiv>
      <h1>Treinos Disponíveis</h1>
      {treinos.map((treino) => (
        <div className="treino" key={treino.id}>
          <Link href={`/dashboard/treinosAdm/exercicios/${treino.id}`}>{treino.nome}</Link>
          <button>Excluir</button>
        </div>
      ))}
      <Link href="/dashboard/criarTreino" className="adicionar">+ Adicionar Treino</Link>
    </StyledDiv>
  );
}
