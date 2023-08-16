// Function to update the news headline
function updateHeadline() {
    // Simulating fetching a new headline from an API
    const headlines = [
        "Breaking: Major Earthquake Strikes Coastal Region, Residents Urged to Evacuate",
        "COVID-19 Update: New Variant Detected, Health Officials Monitor Situation",
        "Tech Giant Launches Revolutionary Product, Promising to Change the Industry",
        "Global Summit on Climate Change Concludes with Historic Agreements",
        "Space Exploration Milestone: Astronauts Successfully Land on Mars",
        "Major Earthquake Strikes Coastal Region, Residents Urged to Evacuate",
        "Wildfire Spreads Rapidly, Threatening Residential Areas",
        "Flash Floods Hit City, Emergency Services Respond",
        "Industrial Explosion Causes Panic, Surrounding Area Evacuated",
        "Hurricane Warning Issued for Coastal Communities",
    ];

    const headlineIndex = Math.floor(Math.random() * headlines.length);
    const headline = headlines[headlineIndex];

    const headlineElement = document.getElementById("headline");
    headlineElement.textContent = headline;
}

// Update the headline every 10 seconds
setInterval(updateHeadline, 1000);

// Initial update
updateHeadline();

