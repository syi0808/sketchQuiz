import styled, { createGlobalStyle, css } from 'styled-components'
import bgImage from '../src/assets/bg.svg'

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
        user-select: none;
    }
`

export const AllWrapper = styled.div`
    width: 1920px;
    height: 1080px;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: -450px 230px;
    background-size: 1700px;
    overflow: scroll;
`

export const Title = styled.span`
    font-size: ${props => props.fontSize || "18px"};
    font-weight: ${props => props.fontWeight || 500};
    margin: ${props => props.margin || 0};
    color: ${props => props.color || "black"};
    
    ${props => props.gra && css`
        background: linear-gradient(to right, red, orange, yellow, green, blue, purple);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `}
`

export default GlobalStyle