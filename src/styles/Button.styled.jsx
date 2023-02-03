import styled from 'styled-components';

export const Button = styled.button.attrs(({ type, disabled }) => ({
  type: type || 'button',
  disabled: disabled || false,
}))`
  background: var(--primary-color);
  border: 3px solid transparent;
  color: #fff;
  padding: 10px;
  font-family: 'Poppins';
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  transition-property: background, color, border-color;

  &:hover {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;
