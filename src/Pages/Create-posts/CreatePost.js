import React, { useState, useEffect } from "react";
import { Container, FormDiv, Button } from "./CreatePostCss";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (auth.currentUser) {
      console.log(auth.currentUser, "test");
    } else {
      navigate("/log-in");
    }
  }, [navigate]);
  const handleChange = (e) => {
    // key: e.target.name,
    // value: e.target.value,
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const postCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: post.title,
      content: post.content,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        email: auth.currentUser.email,
      },
    });
    navigate("/");
  };
  // console.log(post);
  return (
    <Container>
      <FormDiv>
        <h1>Create A Post</h1>
        <div>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>Post:</p>
          <textarea
            name="content"
            placeholder="Enter Your Post"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button onClick={createPost}>Submit Post </Button>
      </FormDiv>
    </Container>
  );
};

// const input
export default CreatePost;
