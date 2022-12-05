/* eslint-disable no-empty */
const swApi = async <Data>(
  url: string,
  options: RequestInit = { method: "GET" }
) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const headers = { ...defaultHeaders, ...options.headers };
  const newOptions = { ...options, headers };

  try {
    const response = await fetch(`${baseUrl}${url}`, newOptions);
    const data: Data = response.status !== 204 ? await response.json() : null;

    return {
      data,
      status: response.status,
    };
  } catch {}
  return undefined;
};

export default swApi;
