import { useState, useEffect } from "react";
import { Post } from "../Post/Post";
import "./index.css";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <>
      <div className="posts-list">
        {posts.map((post) => (
          <Post
            text={post.text}
            userName="Buddy"
            login="@popopo"
            key={post._id}
          />
        ))}
      </div>
    </>
  );
};
