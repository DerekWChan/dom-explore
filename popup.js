let searchButton = document.getElementById('dom-explore_search-button');

searchButton.onclick = () => {
  let searchInput = document.getElementById('dom-explore_search-input').value;
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {input: searchInput});
  });
};
