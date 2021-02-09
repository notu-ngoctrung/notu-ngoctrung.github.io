/* HTML Elements */
const introSection = document.getElementById("intro-section");
const introAvatar = document.getElementById("intro-avatar");
const typingText = document.getElementById("typing-text");

/* Sets the size for intro section to fit the window */
const setIntroSectionSize = () => {
    // const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    // // introSection.style.width = `${width}px`;
    introSection.style.height = `${height}px`;
    introAvatar.style.width = introAvatar.style.height = `${height * 0.3}px`;
};  

/* Typing text effect */
const textList = [
    'am Trung Nguyen.', 
    'am a software engineer.', 
    'love algorithms.', 
    'enjoy coding.'
];
const curState = {
    textId: 0,
    charPos: 0,         // 1-based
    direction: true,    // true if moving forward; otherwise, false
};
const typingSpeed = 100;
const typingHandler = () => {
    const plusVal = (curState.direction ? 1 : -1);
    const nextCharPos = curState.charPos + plusVal;
    curState.charPos = nextCharPos;
    if (nextCharPos < 0) {
        curState.textId = (curState.textId + 1) % textList.length;
        curState.charPos = 0;
    }
    if (nextCharPos >= 0 && nextCharPos <= textList[curState.textId].length) {
        typingText.innerText = textList[curState.textId].substring(0, nextCharPos);
        setTimeout(typingHandler, typingSpeed);
    }
    else {
        curState.direction = !curState.direction;
        setTimeout(typingHandler, typingSpeed * 5);
    }
};

window.onresize = setIntroSectionSize;
window.onload = () => {
    setIntroSectionSize();
    typingHandler();
}