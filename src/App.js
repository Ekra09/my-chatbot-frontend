const rasaURL = "https://6e6f-103-125-177-124.ngrok-free.app/webhooks/rest/webhook";

async function sendMessage(message) {
  try {
    const response = await fetch(rasaURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: "user", // You can replace with a session ID if needed
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending message to Rasa:", error);
    return [{ text: "Sorry, I couldn't reach the server." }];
  }
}
