const BASE = `${process.env.BASE_URL}/products`;

export const getPosts = async () => {
  try {
    const posts = await fetch(BASE + "?limit=6");
    return posts.json();
  } catch (error) {
    console.log("error in getPosts", error);
  }
};
