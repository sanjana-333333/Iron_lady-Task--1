function sendMessage() {
    let input = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");
    let userText = input.value.trim();

    if (userText === "") return;

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = userText;
    chatbox.appendChild(userMsg);

    let reply = "";

    let text = userText.toLowerCase();

    if (text.includes("hi") || text.includes("hello")) {
        reply = "Hello! Welcome to Iron Lady 🌸 How can I help you today?";
    }
    else if (
        text.includes("program") ||
        text.includes("course") ||
        text.includes("offering")
    ) {
        reply = "Iron Lady offers leadership development programs designed to empower women with confidence, communication, and career growth skills.";
    }
    else if (
        text.includes("eligible") ||
        text.includes("eligibility")
    ) {
        reply = "Iron Lady programs are designed for women professionals at different career stages who want to grow into leadership roles.";
    }
    else if (
        text.includes("enroll") ||
        text.includes("join") ||
        text.includes("register")
    ) {
        reply = "You can enroll by visiting the Iron Lady website, selecting a suitable program, and completing the registration process online.";
    }
    else if (
        text.includes("outcome") ||
        text.includes("benefit")
    ) {
        reply = "Participants gain leadership confidence, mentorship support, and practical tools to accelerate their career growth.";
    }
    else {
        reply = "I can help you with programs, eligibility, enrollment, and outcomes. Please ask a related question 😊";
    }

    // Assistant message
    let botMsg = document.createElement("div");
    botMsg.className = "message assistant";
    botMsg.innerText = reply;
    chatbox.appendChild(botMsg);

    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

