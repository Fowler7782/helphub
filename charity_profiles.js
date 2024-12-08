// Wait until the DOM is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const volunteerButton = document.getElementById("volunteerButton");
    const missionStatement = document.getElementById("missionStatement");
    const charityName = document.getElementById("charityName");
    
    // Create the form dynamically for Volunteer Now button
    const form = document.createElement("form");
    form.innerHTML = `
        <h3>Volunteer Now</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>

        <button type="submit">Submit</button>
    `;
    form.style.display = "none"; // Hide form initially
    form.style.marginTop = "20px";
    document.querySelector("main").appendChild(form);

    // Event listener to toggle visibility of the form when Volunteer Now is clicked
    volunteerButton.addEventListener("click", () => {
        form.style.display = form.style.display === "none" ? "block" : "none";
    });

    // Show the mission statement when the charity name is hovered over
    charityName.addEventListener("mouseover", () => {
        missionStatement.style.display = "block";
    });

    charityName.addEventListener("mouseout", () => {
        missionStatement.style.display = "none";
    });
});
