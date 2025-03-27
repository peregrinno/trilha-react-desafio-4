import styled from 'styled-components';

interface InputContainerProps {
    hasIcon?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
    width: 100%;
    height: 42px;
    color: #000;
    position: relative;
    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    margin-bottom: 5px;
    
    & input {
        width: calc(100% - ${props => props.hasIcon ? '30px' : '0px'});
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
        color: #333;
    }
`

export const ErrorMessage = styled.p`
    color: #e63946;
    font-size: 12px;
    margin-top: 2px;
    margin-left: 10px;
    height: 16px;
`

export const PasswordToggleButton = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #81259D;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    
    &:hover {
        opacity: 0.7;
    }
`

export const RequirementsList = styled.div`
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 8px 12px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border-left: 3px solid #81259D;
`

interface RequirementItemProps {
    isMet: boolean;
}

export const RequirementItem = styled.div<RequirementItemProps>`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: 12px;
    color: ${props => props.isMet ? '#2a9d8f' : '#666'};
    
    &:last-child {
        margin-bottom: 0;
    }
    
    &:before {
        content: ${props => props.isMet ? '"✓"' : '"○"'};
        margin-right: 8px;
        font-weight: ${props => props.isMet ? 'bold' : 'normal'};
    }
`