import { useState, useEffect } from "react";
import { Post } from "../Post/Post";
import { request } from "../../api";
import "./index.css";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    request.get("/posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts();
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
            id={post._id}
            onUpdate={getPosts}
            avatar={post.author.avatar}
            isLiked={post.isLiked}
            likes={post.likes}
            date={post.date}
          />
        ))}
      </div>
    </>
  );
};
