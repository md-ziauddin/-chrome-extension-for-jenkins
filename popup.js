document.addEventListener("DOMContentLoaded", function () {
  // Your popup script logic (if any)
});

// Background script to store and retrieve branch name
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getBranchName") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(
        activeTab.id,
        { action: "getBranchName" },
        function (response) {
          sendResponse(response);
        }
      );
    });
    return true; // Indicates that sendResponse will be called asynchronously
  }
});
