chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getBranchName") {
    var branchButton = document.querySelector(".js-source-branch-copy");

    if (branchButton) {
      // Get the branch name from the data-clipboard-text attribute
      var branchName = branchButton.getAttribute("data-clipboard-text");

      sendResponse({ branchName: branchName });
    } else {
      sendResponse({ branchName: "" }); // Return an empty string if the button is not found
    }

    // Return true to indicate that sendResponse will be called asynchronously
    return true;
  }
});
