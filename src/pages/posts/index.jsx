import { request } from "../../api";
import { Navbar } from "../../components/Navbar";
import { PostsList } from "../../components/PostsList";
import { useState, useEffect } from "react";

export const Posts = () => {
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
      <Navbar />
      <PostsList posts={posts} getPosts={getPosts} />
    </>
  );
};
