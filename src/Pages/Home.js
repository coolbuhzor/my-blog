import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import styled from "styled-components";

const Home = () => {
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <Container>
      {postList.map((post) => (
        <PostWrapper key={post.id}>
          <div>
            <h3>{post.title}</h3>
            <button>&#128465;</button>
          </div>
          <p>{post.content}</p>
          <h5>@{post.author.name}</h5>
        </PostWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
`;

const PostWrapper = styled.div`
  display: flex;
  width: 400px;
  background: #040404;
  border: 1px solid #78f8e2;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #78f8e2;
  box-sizing: border-box;
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    button {
      background: none;
      border: none;
    }
  }

  h3 {
    color: #78f8e2;
    font-size: 24px;
    margin-bottom: 10px;
    padding-left: 10px;
  }

  h5 {
    color: #78f8e2;
    margin-top: 10px;
    font-size: 20px;
  }
  p {
    color: #fff;
    word-wrap: break-word;
    height: auto;
    padding: 0 10px;
    line-height: 1.5;
    max-height: 250px;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
`;

export default Home;
