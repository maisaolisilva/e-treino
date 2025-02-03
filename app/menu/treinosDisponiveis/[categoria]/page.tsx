"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .treinos {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .treino {
    background: #303841;
    color: #FFF200;
    padding: 10px 15px;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    border: #FFF200 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .botaoExercicios {
    background: #FFF200;
    color: #303841;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }
`;

// Simulação de um banco de dados de treinos por categoria
const treinosPorCategoria: Record<string, { nome: string; id: string }[]> = {
  iniciante: [
    { nome: "Treino A - Peito e Tríceps", id: "treino-a" },
    { nome: "Treino B - Costas e Bíceps", id: "treino-b" },
  ],
  intermediario: [
    { nome: "Treino C - Pernas", id: "treino-c" },
    { nome: "Treino D - Ombros e Abdômen", id: "treino-d" },
  ],
  avancado: [
    { nome: "Treino E - Corpo Completo", id: "treino-e" },
  ],
  "melhor-idade": [
    { nome: "Treino F - Mobilidade e Força", id: "treino-f" },
  ],
};

export default function TreinosPage() {
  const params = useParams();
  const categoria = params.categoria ? params.categoria.toString().toLowerCase() : "";

  // Obtém os treinos da categoria escolhida
  const treinos = treinosPorCategoria[categoria] || [];

  return (
    <StyledDiv>
      <h1>Treinos - {categoria.replace("-", " ").toUpperCase()}</h1>
      <div className="treinos">
        {treinos.length > 0 ? (
          treinos.map((treino) => (
            <div key={treino.id} className="treino">
              <p><strong>{treino.nome}</strong></p>
              <Link className="botaoExercicios" href={`/menu/treinosDisponiveis/${categoria}/exercicios/${treino.id}`}>
                Ver Exercícios
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum treino disponível.</p>
        )}
      </div>
    </StyledDiv>
  );
}
