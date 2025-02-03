"use client"

import styled from "styled-components";

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

export default function CriarExercicio(){
    return(
        <StyledDiv>
            <main>
                <form>

                    <div>
                        <label htmlFor="nomeExercicio" >Nome do Exercício: </label>
                        <input type="text" name="nomeExercicio" id="nomeExercicio" aria-required />
                    </div>

                    <div>
                        <label htmlFor="series">Quantidade de séries: </label>
                        <input type="number" name="series" id="series" aria-required/>
                    </div>

                    <div>
                        <label htmlFor="repeticoes">Quantidade de Repetições:</label>
                        <input type="number" name="repeticoes" id="repeticoes" />
                    </div>

                    <div>
                        <label htmlFor="carga">Carga Recomendada: </label>
                        <input type="text" name="carga" id="carga" />
                    </div>

                    <div>
                        <label htmlFor="descanso">Tempo de descanso (segundos):</label>
                        <input type="number" name="descanso" id="descanso" />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descrição:</label>
                        <input type="text" name="descricao" id="descricao" />
                    </div>
                    <button>Salvar</button>
                </form>
            </main>
        </StyledDiv>
    )
}