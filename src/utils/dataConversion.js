import { Buffer } from "buffer";

export const serializedBufferToUrl = (serializedBuffer) => {
  try {
    const uint8Array = new Uint8Array(serializedBuffer?.data);
    const blob = new Blob([uint8Array], { type: "application/octet-stream" });

    return URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
