import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #757cff;
        --primary-color-darker: #545cf2;
        --error: #e7195a;
        --success: #1aac83;
        --light-color: #eee;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        background: #f1f1f1;
        padding: 0;
    }
`;
export default GlobalStyles;
