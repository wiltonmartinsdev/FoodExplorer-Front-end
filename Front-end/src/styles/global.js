import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }
    
    body{
        font-size: 1.6rem;

        background-color: #1E1E1E;

        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};
   
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea{
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 1.6rem;

        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};


        line-height: 1.6rem;
        
        outline: none;
    }

    button{
        font-family: Poppins, sans-serif;
        font-weight: 500;
        font-size: 1.4rem;

        line-height: 2.4rem;

    }
    
    a{
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.TEXT_COLOR_100};

    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }

`;
