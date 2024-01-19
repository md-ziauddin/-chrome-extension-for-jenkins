document.addEventListener("DOMContentLoaded", function () {
  var openJenkinsButton = document.getElementById("openJenkinsButton");

  openJenkinsButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      if (activeTab) {
        chrome.tabs.sendMessage(
          activeTab.id,
          { action: "getBranchName" },
          function (response) {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
            } else if (response && response.branchName) {
              var jenkinsUrl = "https://jenkins.com/controller9/jobs/";
              var urlWithBranch =
                jenkinsUrl + encodeURIComponent(response.branchName);

              // Open the Jenkins URL in a new tab
              chrome.tabs.create({ url: urlWithBranch });
            } else {
              console.error(
                "Error: Unable to get branch name from content script."
              );
            }
          }
        );
      } else {
        console.error("Error: No active tab found.");
      }
    });
  });
});
