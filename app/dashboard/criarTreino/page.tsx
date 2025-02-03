"use client";

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
                select {
                    background: transparent;
                    border: #FFF200 3px solid;
                    padding: 3px;
                }
                select option {
                    font-size: 15px;
                    color: #000000;
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

export default function CriarTreino() {
    return (
        <StyledDiv>
            <main>
                <form>
                    <div>
                        <label htmlFor="nomeTreino" >Nome do Treino:</label>
                        <input type="text" name="nomeTreino" id="nomeTreino" aria-required/>
                    </div>

                    <div>
                        <label htmlFor="descricaoTreino">Descrição:</label>
                        <input type="text" name="descricaoTreino" id="descricaoTreino" />
                    </div>

                    <div>
                        <label htmlFor="categoriaTreino">Categoria:</label>
                        <select name="categoriaTreino" id="categoriaTreino" aria-required>
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediario">Intermediário</option>
                            <option value="avancado">Avançado</option>
                            <option value="melhorIdade">Melhor Idade</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="duracao">Duração Estimada em minutos:</label>
                        <input type="number" name="duracao" id="duracao" />
                    </div>

                    <div>
                        <label htmlFor="frequencia">Frequência Recomendada: </label>
                        <input type="text" name="frequencia" id="frequencia" />
                    </div>
                    <button >Salvar</button>
                </form>
            </main>
        </StyledDiv>
    )
}