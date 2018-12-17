// Removes tooltip when clicked
const closeTooltip = () => {
  this.remove();
};

// Listens for user input from the extension then makes every matching Element
// clickable, displaying a tooltip containing its attributes
chrome.runtime.onMessage.addListener(msg => {
  let nodesFound = document.querySelectorAll(msg.input); // all matching elements
  nodesFound.forEach(node => {
    // Stylize each element so that they're easier to see
    node.className += node.className === '' ? 'dom-explore_selected' : ' dom-explore_selected';
    node.onclick = () => { // Create tooltips to display when clicked
      let tooltipText = `<i>< ${node.tagName.toLowerCase()} ></i><br>`;
      for(attr of node.attributes) {
        tooltipText += `<b><i>${attr.name}</i></b>: <i>${attr.value}</i><br>`;
      }
      event.target.insertAdjacentHTML(
        'beforebegin',
        `<div class="dom-explore_tooltip" onclick="(${closeTooltip})();">${tooltipText}</div>`);
      event.preventDefault(); // Stops links from redirecting, etc.
    };
  });
});
