/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE = `${process.env.BASE_URL}/users/`;

export const getProfile = async () => {
  try {
    const user = await fetch(BASE + "/1");
    return user.json();
  } catch (error) {
    console.log("error in getProfile", error);
  }
};

export const updateProfile = async (id: string, data: any) => {
  try {
    fetch(BASE + id, {
      method: "PUT",
      body: JSON.stringify({
        name: {
          username: data.name,
        },
      }),
    });
  } catch (error) {
    console.log("error in updateProfile", error);
  }
};
