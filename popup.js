let searchInput = document.getElementById('dom-explore_search-input');
let searchButton = document.getElementById('dom-explore_search-button');

// Sends value from the search input field to the content script
searchInput.onsubmit = searchButton.onclick = () => {
  let inputValue = searchInput.value;
  if(inputValue !== '') {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {input: inputValue});
    });
  }
};
