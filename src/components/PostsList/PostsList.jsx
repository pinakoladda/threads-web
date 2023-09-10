import { useState, useEffect } from "react";
import { Post } from "../Post/Post";
import "./index.css";
import { request } from "../../api";

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
            userName="Buddy"
            login="@popopo"
            key={post._id}
          />
        ))}
      </div>
    </>
  );
};
