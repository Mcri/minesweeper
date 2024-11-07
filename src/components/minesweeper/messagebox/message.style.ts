import styled from "styled-components";

export const StyledMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    flex-direction: column;
    z-index: 300;
    background-color: rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 100%;
    bottom: 0;
    letter-spacing: 0.1em;

    h2 {
        display: block;
        font-size: 3rem;
        color: rgb(31, 92, 50);
        margin-bottom: 10px;
        text-shadow: 0 1mm 0.8mm rgba(0, 0, 0, 0.2);
    }

    h2.gameover {
        color: #432424;
    }

    button {
        letter-spacing: 0.1em;
        padding: 10px 20px;
        font-size: 1.1rem;
        border: none;
        background-color: rgb(201, 197, 24);
        color: white;
        filter: drop-shadow(0 0 1mm rgba(0, 0, 0, 0.5));

        :hover {
            background-color: rgb(201, 205, 24);
        }
    }
`;
