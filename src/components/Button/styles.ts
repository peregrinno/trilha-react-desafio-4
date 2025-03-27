import styled from 'styled-components';

export const ButtonContainer = styled.button.attrs((props: { type?: string }) => ({
  type: props.type || 'button',
}))`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    font-weight: 600;
    border: 1px solid #81259D;
    border-radius: 21px;
    transition: all 0.2s ease-in-out;
    outline: none;

    &:hover:not(:disabled) {
        opacity: 0.8;
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
        box-shadow: none;
    }

    &:disabled {
        background-color: #cccccc;
        border-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
        opacity: 0.7;
    }
`