let searchButton = document.getElementById('dom-explore_search-button');

// Sends value from the search input field to the content script
searchButton.onclick = () => {
  let searchInput = document.getElementById('dom-explore_search-input').value;
  if(searchInput !== '') {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {input: searchInput});
    });
  }
};
