import { PostsWrapperProps } from "../types/PostsWrapper.types";
import { PostCard } from "./PostCard";

export const PostsWrapper: React.FC<PostsWrapperProps> = ({ posts }) => {
  return (
    <div className="grid grid-rows-3 sm:grid-rows-2 grid-flow-col md:grid-cols-4 mb-20 place-content-center gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
