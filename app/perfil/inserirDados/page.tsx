"use client"

import styled from "styled-components"

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
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
                select option {
                    font-size: 12px;
                }
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

export default function InserirDados() {
    return(
        <StyledDiv>
             <main>
                <form>
                    <div>
                        <label htmlFor="peso">Peso (kg):</label>
                        <input type="number" name="peso" id="peso" placeholder="Ex: 70" required />
                    </div>

                    <div>
                        <label htmlFor="altura">Altura (cm):</label>
                        <input type="number" name="altura" id="altura" placeholder="Ex: 175" required />
                    </div>

                    <div>
                        <label htmlFor="cintura">Circunferência da Cintura (cm):</label>
                        <input type="number" name="cintura" id="cintura" placeholder="Ex: 80" required />
                    </div>

                    <div>
                        <label htmlFor="braco">Circunferência do Braço (cm):</label>
                        <input type="number" name="braco" id="braco" placeholder="Ex: 30" required />
                    </div>

                    <div>
                        <label htmlFor="quadril">Circunferência do Quadril (cm):</label>
                        <input type="number" name="quadril" id="quadril" placeholder="Ex: 95" required />
                    </div>

                    <div>
                        <label htmlFor="tempoTreino">Tempo de Treino (meses):</label>
                        <input type="number" name="tempoTreino" id="tempoTreino" placeholder="Ex: 6" required />
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </main>
        </StyledDiv>
    )
}
