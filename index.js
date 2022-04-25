const initialDelay = 0.5;
const delayBetweenMessages = 1.5;

const setAnimationDelay = (node, seconds) => {
    node.style.animationDelay = `${seconds}s`;
}

const addMessagesAnimationDelay = () => {
    const chatDiv = document.getElementById('chat-box');

    // Set first element animation delay
    setAnimationDelay(chatDiv.children[0], initialDelay);

    let currDelay = initialDelay;
    for (let i = 1; i < chatDiv.children.length; i++) {
        if (!chatDiv.children[i].classList.contains('animate-with-previous')) {
            currDelay += delayBetweenMessages;
        }
        setAnimationDelay(chatDiv.children[i], currDelay)
    }
}