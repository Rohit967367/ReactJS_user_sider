export const getToken = async () => {
  const uri = "http://localhost:9000/get-token";

  const option = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(uri, option);

    const { token } = await response.json();

    return token;
  } catch (error) {
    console.log(error);
  }
};

export const getMeetingId = async (token) => {
  try {
    const uri = "http://localhost:9000/create-meeting";

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    };

    const response = await fetch(uri, option)
      .then(async (result) => {
        const { meetingId } = await result.json();
        // const meetingId = await result.json();
        return meetingId;
      })
      .catch((error) => console.log("error", error));
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const createMeeting = async (token) => {
  const url = `https://api.zujonow.com/api/meetings`;
  const options = {
    method: "POST",
    headers: { Authorization: token, "Content-Type": "application/json" },
  };

  const { meetingId } = await fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error("error", error));

  return meetingId;
};
