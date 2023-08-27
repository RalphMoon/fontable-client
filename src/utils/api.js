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
    const { data } = await client.post("/project", { imageUrl });

    return data.result;
  } catch (error) {
    throw error;
  }
}

export async function updateProject(unicodePaths, fontType) {
  try {
    const { data } = await client.put(
      `/project?export=${fontType}`,
      {
        unicodePaths,
      },
      {
        responseType: "arraybuffer",
      }
    );
    const blob = new Blob([data], { type: "application/octet-stream" });

    return blob;
  } catch (error) {
    throw error;
  }
}
