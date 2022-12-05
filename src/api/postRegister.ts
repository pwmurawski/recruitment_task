/* eslint-disable no-empty */
const postRegister = async <T>(body: T) => {
  try {
    await fetch("https://example/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch {}
  return undefined;
};

export default postRegister;
