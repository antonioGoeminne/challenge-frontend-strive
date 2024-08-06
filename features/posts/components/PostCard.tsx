import { Post } from "../types/PostsWrapper.types";

export const PostCard: React.FC<Post> = ({ image }) => {
  return (
    <div
      data-testid="postCard"
      className="w-[110px] h-[160px] rounded-xl shadow-xl border my-1"
    >
      <img
        className="h-full w-full rounded-xl object-cover"
        src={image}
        alt="Landscape photograph by Tobias Tullius"
      />
    </div>
  );
};
