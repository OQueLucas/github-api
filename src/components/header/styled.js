import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 4px;
  
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    padding: 8px;
    font-weight: 500;
  }

  button { 
    background-color: #225ed8;
    color: #fff;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;

    &:hover {
    background-color: #225ed9;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;