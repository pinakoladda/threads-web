import { useState, useEffect } from "react";
import { Post } from "../Post/Post";
import { request } from "../../api";
import "./index.css";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    request.get("/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <div className="posts-list">
        {posts.map((post) => (
          <Post
            text={post.text}
            userName={post.author.name}
            login={post.author.login}
            key={post._id}
          />
        ))}
      </div>
    </>
  );
};
