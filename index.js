function openModal() {
  document.getElementById("projectModal").style.display = "block";
}
  
function closeModal() {
document.getElementById("projectModal").style.display = "none";
}

function handleSubmit() {
    // Retrieve input field values and perform desired actions
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDescription").value;
    const goalAmount = document.getElementById("goalAmount").value;
    const duration = document.getElementById("duration").value;

    // Generate a random project ID (replace this with your own logic)
    var projectId = generateProjectId();
  
    // Perform further processing or validation as needed
    console.log("Project submitted:");
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Goal Amount:", goalAmount);
    console.log("Duration (in days):", duration);

    var message = 'Project created! Your project ID is: ' + projectId;
    alert(message);
  
    // Reset form and close modal
    document.getElementById("projectModalForm").reset();
    closeModal();
  }

// Function to generate a random project ID
function generateProjectId() {
  // Replace this with your own logic to generate a project ID
  // For simplicity, we'll use a random number in this example
  var projectId = Math.floor(Math.random() * 1000000);
  return projectId;
}

function openExploreModal() {
  document.getElementById("exploreModal").style.display = "block";
}

function closeExploreModal() {
  document.getElementById("exploreModal").style.display = "none";
}

function searchProject() {
  const projectID = document.getElementById("exploreProjectId").value;
  
  // Perform project search and retrieve project details based on the projectID
  // Assuming projectDetails is an example object with project details
  const projectDetails = {
    title: "Example Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    goalAmount: 1000,
    duration: 30
  };

  const projectDetails2 = {

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

  // Get the project ID from the input field
  // var projectId = document.getElementById('exploreProjectId').value;

  // Generate the HTML code for the "Contribute to Project" button
  var contributeButton = '<button class="contribute-button">Contribute to Project</button>';

  // Append the button to the project-details div
  var projectDetailsDiv = document.querySelector('.project-details');
  projectDetailsDiv.innerHTML += contributeButton;

  // Show the footer
  var footer = document.querySelector('.footer');
  footer.style.display = 'block';

  // hide the footer-display
  var footer = document.querySelector('.footer-display');
  footer.style.display = 'none';

  var walletAddressElement = document.getElementById('walletAddress');
  // Update the value
  walletAddressElement.textContent = '0x1234'; // Replace '0x1234' with the actual wallet address value

  // Close explore modal
  closeExploreModal();
}

// footer functions


// IMPORTANT FUNCTIONS FOR US TO CONNECT TO THE BLOCKCHAIN


// Connect to the blockchain using wallet
let signer;

async function connectWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  provider.send("eth_requestAccounts", [])
  .then( () => {
    provider.listAccounts().then((accounts) => {
      signer = provider.getSigner(accounts[0]);
      document.getElementById('walletBtn').innerHTML = accounts[0].slice(0, 4) + '...' + accounts[0].slice(38, 42);
    });
  }).catch((err) => {
    console.error(err);
  })
}

