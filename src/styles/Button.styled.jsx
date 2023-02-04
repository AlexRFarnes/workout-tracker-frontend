import styled from 'styled-components';

export const Button = styled.button.attrs(({ type, disabled }) => ({
  type: type || 'button',
  disabled: disabled || false,
}))`
  border: 3px solid transparent;
  padding: 10px;
  font-family: 'Poppins';
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  transition-property: background, color, border-color;

  &:disabled,
  &[disabled] {
    border-color: var(--medium-gray-color);
    background-color: var(--light-gray-color);
    color: var(--dark-color);
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #fff;
  background: var(--primary-color);

  &:hover:not([disabled]) {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;

export const SecondaryButton = styled(Button)`
  color: var(--light-color);
  background: var(--dark-color);

  &:hover:not([disabled]) {
    background: transparent;
    color: var(--dark-color);
    border-color: var(--dark-color);
  }
`;
