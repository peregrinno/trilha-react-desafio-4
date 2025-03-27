import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 30px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Spacing = styled.div`
    margin: 10px 0;
    width: 100%;
`

export const ErrorText = styled.p`
    color: #e63946;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 500;
    width: 100%;
    text-align: center;
    background-color: rgba(230, 57, 70, 0.1);
    padding: 8px;
    border-radius: 4px;
    border-left: 3px solid #e63946;
`

export const SuccessText = styled.p`
    color: #2a9d8f;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 500;
    width: 100%;
    text-align: center;
    background-color: rgba(42, 157, 143, 0.1);
    padding: 8px;
    border-radius: 4px;
    border-left: 3px solid #2a9d8f;
`
