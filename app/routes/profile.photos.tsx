import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { PostsWrapper } from "features/posts/components/PostsWrapper";
import { getPosts } from "features/posts/services";

export const meta: MetaFunction = () => {
  return [{ title: "Profile photos" }];
};

export function ErrorBoundary() {
  const error = useRouteError();
  console.log("error error in post page", error);
  return <div>ups, something was wrong</div>;
}
export async function loader() {
  const data = await getPosts();

  return {
    posts: data,
  };
}

export default function ProfilePhotos() {
  const { posts } = useLoaderData<typeof loader>();

  return <PostsWrapper posts={posts} />;
}
