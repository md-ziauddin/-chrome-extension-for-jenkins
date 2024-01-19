// document.addEventListener("DOMContentLoaded", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     var activeTab = tabs[0];

//     // Send a message to content script to get branch name
//     chrome.tabs.sendMessage(
//       activeTab.id,
//       { action: "getBranchName" },
//       function (response) {
//         if (chrome.runtime.lastError) {
//           console.error(
//             "Error: Unable to establish connection.",
//             chrome.runtime.lastError
//           );
//         } else if (response && response.branchName) {
//           openJenkinsTab(response.branchName);
//         } else {
//           console.error(
//             "Error: Unable to get branch name from content script."
//           );
//         }
//       }
//     );
//   });

//   function openJenkinsTab(branchName) {
//     var jenkinsUrl = "https://jenkins.com/controller9/jobs/";
//     var urlWithBranch = jenkinsUrl + encodeURIComponent(branchName);
//     window.open(urlWithBranch, "_blank");
//   }
// });

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
