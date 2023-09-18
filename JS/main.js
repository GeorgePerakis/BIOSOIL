// Check if the visitorCount is already in localStorage
let visitorCount = localStorage.getItem('visitorCount');

// If it's not in localStorage, initialize it to 0
if (visitorCount === null) {
    visitorCount = 0;
}

// Increment the visitorCount and update it in the localStorage
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Display the visitor count on the page
document.getElementById('visitorCount').textContent = visitorCount;