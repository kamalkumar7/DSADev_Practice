type Notificationn = string | { message: string; timestamp: number };

function handleNotification(input: Notificationn) {
  if (typeof input === "string") {
    console.log("Message:", input);
  } else {
    console.log("Message:", input.message);
    console.log("Received at:", new Date(input.timestamp).toLocaleString());
  }
}

// Simulated usage:
const messageOnly: Notificationn = "New comment on your post!";
const detailedMessage: Notificationn = {
  message: "You have a new follower!",
  timestamp: Date.now()
};

handleNotification(messageOnly);
handleNotification(detailedMessage);

//run npx tsx typeNarrowing.ts