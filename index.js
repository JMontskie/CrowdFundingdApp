function openModal() {
    document.getElementById("projectModal").style.display = "block";
  }
  
function closeModal() {
document.getElementById("projectModal").style.display = "none";
}

function submitProject() {
    // Retrieve input field values and perform desired actions
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDescription").value;
    const goalAmount = document.getElementById("goalAmount").value;
    const duration = document.getElementById("duration").value;
  
    // Perform further processing or validation as needed
    console.log("Project submitted:");
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Goal Amount:", goalAmount);
    console.log("Duration (in days):", duration);
  
    // Reset form and close modal
    //document.getElementById("projectModal").reset();
    //closeModal();
  }

function openExploreModal() {
  document.getElementById("exploreModal").style.display = "block";
}

function closeExploreModal() {
  document.getElementById("exploreModal").style.display = "none";
}

function searchProject() {
  const projectID = document.getElementById("projectID").value;
  
  // Perform project search and retrieve project details based on the projectID
  // Assuming projectDetails is an example object with project details
  const projectDetails = {
    title: "Example Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    goalAmount: 1000,
    duration: 30
  };

  // Display project details on the main page
  const projectDetailsContainer = document.getElementById("projectDetails");
  projectDetailsContainer.innerHTML = `
    <h2>${projectDetails.title}</h2>
    <p>${projectDetails.description}</p>
    <p>Goal Amount: $${projectDetails.goalAmount}</p>
    <p>Duration: ${projectDetails.duration} days</p>
  `;
  projectDetailsContainer.style.display = "block";

  // Close explore modal
  closeExploreModal();
}