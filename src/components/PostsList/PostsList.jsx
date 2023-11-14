import { Post } from "../Post/Post";
import "./index.css";

export const PostsList = ({ posts, getPosts }) => {
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
            author={post.author._id}
          />
        ))}
      </div>
    </>
  );
};
