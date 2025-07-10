function handleNotification(input) {
    if (typeof input === "string") {
        console.log("Message:", input);
    }
    else {
        console.log("Message:", input.message);
        console.log("Received at:", new Date(input.timestamp).toLocaleString());
    }
}
// Simulated usage:
var messageOnly = "New comment on your post!";
var detailedMessage = {
    message: "You have a new follower!",
    timestamp: Date.now()
};
handleNotification(messageOnly);
handleNotification(detailedMessage);
