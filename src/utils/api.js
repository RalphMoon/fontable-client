import { instance as client } from "../lib/axios";

export async function login(token) {
  try {
    const { data } = await client.post(
      "/users",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.result;
  } catch (error) {
    throw error;
  }
}

export async function createProject(imageUrl) {
  try {
    const { data } = await client.post("/projects", { imageUrl });

    return data.result;
  } catch (error) {
    throw error;
  }
}
