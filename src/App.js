const rasaURL = "https://6e6f-103-125-177-124.ngrok-free.app/webhooks/rest/webhook";



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
