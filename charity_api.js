const apiKey = "stl8_6f5c3c4cbb5fb4774372dae1d774252a15b83be56d1e235f9e96ded1a29da2ab";
const apiUrl = `https://data.charitynavigator.org
app_id=YOUR_APP_ID&app_key=${apiKey}`; /

// DOM elements
const loadingIndicator = document.getElementById("loading");
const charityList = document.getElementById("charityList");

// Fetch data from Charity Navigator API
async function fetchCharities() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Clear loading indicator
        loadingIndicator.style.display = "none";

        // Display charity data
        data.forEach(charity => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h3>${charity.charityName}</h3>
                <p><strong>Mission:</strong> ${charity.mission || "No mission statement available."}</p>
                <a href="${charity.websiteURL || '#'}" target="_blank">Visit Website</a>
            `;
            charityList.appendChild(listItem);
        });
    } catch (error) {
        loadingIndicator.textContent = "Failed to load charities. Please try again later.";
        console.error("Error fetching charities:", error);
    }
}

// Fetch charities on page load
fetchCharities();
