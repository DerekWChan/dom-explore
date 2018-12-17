chrome.runtime.onMessage.addListener(msg => {
  let nodesFound = document.querySelectorAll(msg.input);
  nodesFound.forEach(node => {
    node.className += node.className === '' ? 'dom-explore_selected' : ' dom-explore_selected';
    node.onclick = () => {
      let tooltipText = '';
      for(attr of node.attributes) {
        tooltipText += `${attr.name}: ${attr.value}<br>`;
      }
      event.target.insertAdjacentHTML(
        'beforebegin',
        `<span class="dom-explore_tooltip">${tooltipText}</span>`);
      event.preventDefault();
    };
  });
});
