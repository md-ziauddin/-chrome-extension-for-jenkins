// Inject custom CSS into the GitLab page
var link = document.createElement("link");
link.href = chrome.extension.getURL("styles.css");
link.type = "text/css";
link.rel = "stylesheet";
document.head.appendChild(link);

// Function to open Jenkins URL in a new tab
function openJenkinsTab(branchName) {
  var jenkinsUrl = "https://jenkins.com/controller9/jobs/"; // Update the jenkinsUrl with needed Jenkins Url
  var urlWithBranch = jenkinsUrl + encodeURIComponent(branchName);
  window.open(urlWithBranch, "_blank");
}

// Extract branch name from the data-clipboard-text attribute
var sourceBranchButton = document.querySelector(".js-source-branch-copy");
if (sourceBranchButton) {
  var branchName = sourceBranchButton.getAttribute("data-clipboard-text");

  // Create the "Open Jenkins" button
  var openJenkinsButton = document.createElement("button");
  openJenkinsButton.className = "js-open-jenkins-button";
  openJenkinsButton.innerHTML =
    '<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/jenkins_logo_icon_170552.png" alt="jenkins icon" />';

  // Append the button to the desired location
  setTimeout(() => {
    var actionsContainer = document.querySelector(".mr-widget-content");
    actionsContainer.appendChild(openJenkinsButton);
  }, 2000);

  // Add click event listener to the new button
  openJenkinsButton.addEventListener("click", function () {
    openJenkinsTab(branchName);
  });
}
