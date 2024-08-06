export interface Post {
  id: string;
  title: string;
  image: string;
}

export interface PostsWrapperProps {
  posts: Post[];
}
