import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
`;
export const FormDiv = styled.div`
  width: 400px;
  background: #040404;
  border: 1px solid #78f8e2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #78f8e2;

  input,
  textarea {
    width: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
  }
  input {
    height: 40px;
  }
  textarea {
    height: 100px;
    padding-top: 10px;
    resize: none;
  }
  div {
    width: 90%;
    margin-top: 10px;
  }
  h1 {
    color: #78f8e2;
    text-align: center;
  }
  p {
    color: #78f8e2;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  background: none;
  border: 1px solid #78f8e2;
  border-radius: 5px;
  outline: none;
  text-decoration: none;
  color: #78f8e2;
  font-size: 20px;
  padding: 5px 10px;
  :hover {
    transform: scale(1.1);
  }
`;
