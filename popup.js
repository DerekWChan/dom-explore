let searchButton = document.getElementById('search-button');

searchButton.onclick = () => {
  let searchInput = document.getElementById('search-input').value;
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {input: searchInput});
  });
};
