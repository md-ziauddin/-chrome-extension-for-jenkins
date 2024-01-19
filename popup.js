document.addEventListener("DOMContentLoaded", function () {
  var openJenkinsButton = document.getElementById("openJenkinsButton");
  openJenkinsButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(
        activeTab.id,
        { action: "getBranchName" },
        function (response) {
          if (response && response.branchName) {
            var jenkinsUrl = "https://your-jenkins-url.com/job/your-job-name/";
            var urlWithBranch = jenkinsUrl + "branch/" + response.branchName;
            chrome.tabs.create({ url: urlWithBranch });
          }
        }
      );
    });
  });
});
