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

export async function getProjectList(uid) {
  try {
    const { data } = await client.get(`/users/${uid}/projects`);

    return data.result;
  } catch (error) {
    throw error;
  }
}

export async function getProject(uid, pathname) {
  try {
    const { data } = await client.get(`/users/${uid}${pathname}`);

    return data.result;
  } catch (error) {
    throw error;
  }
}

export async function createProject(uid, fontFamilyName) {
  try {
    const { data } = await client.post(`/users/${uid}/projects`, {
      fontFamilyName,
    });

    return data.result;
  } catch (error) {
    throw error;
  }
}

export async function updateProject(uid, pathname, char, exportType) {
  try {
    const endpoint = exportType
      ? `/users/${uid}${pathname}?export_type=${exportType}`
      : `/users/${uid}${pathname}`;
    const headers = exportType ? { responseType: "arraybuffer" } : {};

    const { data } = await client.put(endpoint, { char }, headers);

    if (exportType) {
      const blob = new Blob([data], { type: "application/octet-stream" });

      return blob;
    }
  } catch (error) {
    throw error;
  }
}

export async function deleteProject(uid, projectId) {
  try {
    await client.delete(`/users/${uid}/projects/${projectId}`);
  } catch (error) {
    throw error;
  }
}
