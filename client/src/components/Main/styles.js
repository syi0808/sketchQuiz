import styled from 'styled-components'

export const InputWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const InputName = styled.input`
    border: 3px solid black;
    border-radius: 15px;

    padding: 10px 12px;
    font-size: 22px;

    width: 400px;
    height: 50px;
    outline: none;
`

export const FormEnter = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`       

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
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
`