chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getBranchName") {
    var branchElement = document.querySelector(
      ".your-gitlab-div-class .branch-name-class"
    );
    var branchName = branchElement ? branchElement.innerText.trim() : "";
    sendResponse({ branchName: branchName });
  }
});
