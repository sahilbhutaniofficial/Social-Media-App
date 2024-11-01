import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <FaDeleteLeft />
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
        </div>
        <div className="alert alert-success reactions" role="alert">
          This post have been reacted by {post.reactions} people
        </div>
      </div>
    </>
  );
}
