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
  openJenkinsButton.className =
    "gl-button btn btn-md btn-default has-tooltip js-open-jenkins-button";
  openJenkinsButton.innerHTML =
    '<span class="gl-button-text">Open Jenkins</span>';

  // Append the button to the desired location
  var actionsContainer = document.querySelector(".detail-page-header-actions");
  actionsContainer.appendChild(openJenkinsButton);

  // Add click event listener to the new button
  openJenkinsButton.addEventListener("click", function () {
    openJenkinsTab(branchName);
  });
}
