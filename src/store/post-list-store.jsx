import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi Friends I am going to mumbai for my vacation , Hope to enjoy a lot. peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },

  {
    id: 3,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think…eople he was talking to made him change his mind.",
    tags: Array(3),
    reactions: 34,
    userId: "user-12",
    tags: ["mother", "Teacher"],
  },

  {
    id: 4,
    title: "He was an expert but not in a discipline",
    body: "He was an expert but not in a discipline that anyo…do it without even putting any thought behind it.",
    tags: Array(3),
    reactions: 34,
    userId: "user-12",
    tags: ["discipline", "Unbeliveble"],
  },

  {
    id: 5,
    title: "Dave watched as the forest burned up on the hill.",
    body: "Dave watched as the forest burned up on the hill, …h the pets, but she still was nowhere to be seen.",
    tags: Array(3),
    reactions: 21,
    userId: "user-12",
    tags: ["hill", "burned"],
  },

  {
    id: 6,
    title: "All he wanted was a candy bar.",
    body: "All he wanted was a candy bar. It didn't seem like…something to do with the gun pointed at his face.",
    tags: Array(3),
    reactions: 4,
    userId: "user-12",
    tags: ["candy", "bar"],
  },

  {
    id: 7,
    title: "Hopes and dreams were dashed that day.",
    body: "Hopes and dreams were dashed that day. It should h…sn't and the hopes and dreams came crashing down.",
    tags: Array(3),
    reactions: 7,
    userId: "user-12",
    tags: ["dreams", "hopes"],
  },
];
export default PostListProvider;
