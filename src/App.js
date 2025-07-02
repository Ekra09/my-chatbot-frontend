const rasaURL = `${process.env.REACT_APP_RASA_BACKEND_URL}/webhooks/rest/webhook`;


async function sendMessage(message) {
  const response = await fetch(rasaURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: "user", // or use unique id per session
      message: message,
    }),
  });

  const data = await response.json();
  return data;
}
