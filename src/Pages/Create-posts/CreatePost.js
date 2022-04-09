import React from "react";
import styled from "styled-components";

const CreatePost = () => {
  return (
    <Container>
      <FormDiv>
        <h1>Create A Post</h1>
        <div>
          <p>Title:</p>
          <input type="text" placeholder="Title" />
        </div>
        <div>
          <p>Post:</p>
          <textarea placeholder="Title" />
        </div>
        <button>Submit Post </button>
      </FormDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  // background: red;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
`;
const FormDiv = styled.div`
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
    margin-top: 10px;
    resize: none;
  }
  div {
    border: 1px solid red;
    width: 90%;
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

// const input
export default CreatePost;
