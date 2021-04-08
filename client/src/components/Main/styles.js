import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    padding: 80px 50px;
    border-radius: 20px;
`;

export const InputName = styled.input`
    border: 3px solid black;
    border-radius: 15px;

    padding: 10px 12px;
    font-size: 22px;

    width: 400px;
    height: 50px;
    outline: none;
`;

export const FormEnter = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputButton = styled.button`
    width: 200px;
    height: 80px;
    border: none;
    color: white;
    outline: none;
    font-size: 30px;
    font-weight: 600;
    border-radius: 30px;

    margin-top: 20px;

    cursor: pointer;
    transition: box-shadow 0.3s;

    background: rgb(200, 200, 200);
    box-shadow: 0 5px 0 rgba(0, 0, 0, 0.4);

    &:hover {
        background: rgb(195, 195, 195);
    }

    &:active {
        background: rgb(192, 192, 192);
        transform: translateY(5px);
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: ${(props) => props.fontWeight || 500};
    margin: ${(props) => props.margin || 0};
    color: ${(props) => props.color || "black"};

    ${(props) =>
        props.gra &&
        css`
            background: linear-gradient(
                to right,
                red,
                orange,
                yellow,
                green,
                blue,
                purple
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `}
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
`;
