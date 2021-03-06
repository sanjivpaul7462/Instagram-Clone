import React, { useState, useEffect } from "react";
import "./App.css";
// import { Button, Modal } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
import Post from "./Components/Post";
import { db } from "./firebase";


function App() {

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // useEffect -> Runs a piece of code based on a specific condition

  useEffect(() => {
    // This is where the code runs
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a new post is added, this code fire...
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  // const signUp = (event) => {

  // }

  return (
    <div className="app">
      {/* Modal */}


      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <button onClick={() => setOpen(true)}>Sign Up</button>

      <h1>
        Hello cleaver programmer's lets build an instagram clone app with
        React🚀
      </h1>

      {/* posts */}

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

      {/* posts 1hr25min10sec*/}
    </div>
  );
}

export default App;
