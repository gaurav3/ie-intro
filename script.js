// Countdown timer
let totalSeconds = 5 * 60; // 5 minutes in seconds
let waitingTotalSeconds = 5 * 60; // 5 minutes in seconds for waiting room

function updateCountdown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedTime = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    
    const countdownElement = document.getElementById('countdown-timer');
    if (countdownElement) {
        countdownElement.textContent = formattedTime;
    }
    
    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        // Reset to 5 minutes when it reaches 0
        totalSeconds = 5 * 60;
    }
}

function updateWaitingCountdown() {
    const minutes = Math.floor(waitingTotalSeconds / 60);
    const seconds = waitingTotalSeconds % 60;
    const formattedTime = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    
    const countdownElement = document.getElementById('waiting-countdown-timer');
    if (countdownElement) {
        countdownElement.textContent = formattedTime;
    }
    
    if (waitingTotalSeconds > 0) {
        waitingTotalSeconds--;
    } else {
        // Reset to 5 minutes when it reaches 0
        waitingTotalSeconds = 5 * 60;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
setInterval(updateWaitingCountdown, 1000);

// Initialize countdown on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    updateWaitingCountdown();
});

// Country code mapping
const countryCodes = {
    'my': '+60',  // Malaysia
    'us': '+1',   // United States
    'uk': '+44',  // United Kingdom
    'in': '+91',  // India
    'ca': '+1',   // Canada
    'au': '+61',  // Australia
    'sg': '+65',  // Singapore
    'id': '+62',  // Indonesia
    'th': '+66',  // Thailand
    'ph': '+63'   // Philippines
};

// Auto-populate country code based on country selection
document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const countryCodeSelect = document.getElementById('country-code');
    
    // Initialize country code on page load
    const selectedCountry = countrySelect.value;
    if (countryCodes[selectedCountry]) {
        countryCodeSelect.value = countryCodes[selectedCountry];
    }
    
    // Auto-populate country code when country changes
    countrySelect.addEventListener('change', function() {
        const selectedCountry = this.value;
        if (countryCodes[selectedCountry]) {
            countryCodeSelect.value = countryCodes[selectedCountry];
        }
    });

    // Handle form submission
    const registrationForm = document.getElementById('registration-form-element');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const country = document.getElementById('country').value;
            const phone = document.getElementById('phone').value.trim();
            const consent = document.getElementById('consent').checked;
            
            // Validate form fields
            if (name && email && country && phone && consent) {
                // Redirect to index-filled.html
                window.location.href = 'index-filled.html';
            }
        });
    }
});

// Handle milestone clicks for webinar page
document.addEventListener('DOMContentLoaded', function() {
    const milestoneItems = document.querySelectorAll('.milestone-item');
    const milestonesToggle = document.getElementById('milestones-toggle');
    const milestonesBox = document.querySelector('.milestones-box');
    
    // Toggle milestones list on mobile
    if (milestonesToggle && milestonesBox) {
        milestonesToggle.addEventListener('click', function() {
            milestonesBox.classList.toggle('expanded');
        });
    }
    
    milestoneItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const time = parseInt(this.getAttribute('data-time'));
            
            // Remove active class from all items
            milestoneItems.forEach(function(milestone) {
                milestone.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // In a real implementation, this would seek the video to the specified time
            // For example: videoElement.currentTime = time;
            console.log('Seek to:', time, 'seconds');
        });
    });

    // Handle questions form submission
    const questionsForm = document.querySelector('.questions-form');
    if (questionsForm) {
        questionsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const questionInput = document.getElementById('question-input');
            const question = questionInput.value.trim();
            
            if (question) {
                // In a real implementation, this would submit the question to a server
                console.log('Question submitted:', question);
                alert('Thank you for your question! We will address it during the Q&A session.');
                questionInput.value = '';
            }
        });
    }
});

