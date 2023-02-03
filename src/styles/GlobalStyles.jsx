import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #757cff;
        --primary-color-darker: #545cf2;
        --error: #e7195a;
        --success: #1aac83;
        --light-color: #f3f3f3;
        --light-gray-color: #e7e7e7;
        --dark-gray-color: #555;
        --dark-color: #333;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        background: var(--light-gray-color);
        padding: 0;
    }
`;
export default GlobalStyles;
