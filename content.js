chrome.runtime.onMessage.addListener((msg) => {
  let nodesFound = document.querySelectorAll(msg.input);
  nodesFound.forEach((node) => {
    node.className += ' selected';
    node.onclick = () => console.log(node);
  });
});
