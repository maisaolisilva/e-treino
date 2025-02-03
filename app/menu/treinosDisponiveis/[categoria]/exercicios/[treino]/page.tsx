"use client";

import { useParams } from "next/navigation";
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

  .exercicios {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .exercicio {
    background: #303841;
    color: #FFF200;
    padding: 10px 15px;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    border: #FFF200 2px solid;
  }
`;

// Simulação de um banco de dados de exercícios
const exerciciosPorTreino: Record<string, { nome: string; series: number; repeticoes: string }[]> = {
  "treino-a": [
    { nome: "Supino Reto", series: 4, repeticoes: "10-12" },
    { nome: "Crucifixo", series: 3, repeticoes: "12-15" },
  ],
  "treino-b": [
    { nome: "Agachamento Livre", series: 4, repeticoes: "10" },
    { nome: "Leg Press", series: 3, repeticoes: "12" },
  ],
};

export default function ExerciciosPage() {
  const params = useParams();
  const treino = params.treino ? params.treino.toString().toLowerCase() : "";

  // Garante que o treino seja válido
  const exercicios = exerciciosPorTreino[treino] || [];

  return (
    <StyledDiv>
      <h1>Exercícios - {treino.replace("-", " ").toUpperCase()}</h1>
      <div className="exercicios">
        {exercicios.length > 0 ? (
          exercicios.map((exercicio, index) => (
            <div key={index} className="exercicio">
              <p><strong>{exercicio.nome}</strong></p>
              <p>{exercicio.series} séries de {exercicio.repeticoes} repetições</p>
            </div>
          ))
        ) : (
          <p>Nenhum exercício disponível.</p>
        )}
      </div>
    </StyledDiv>
  );
}
