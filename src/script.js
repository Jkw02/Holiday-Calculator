// Create an array to store subscribed user information
const subscribedUsers = [];

function subscribeNewsletter() {
    const userName = prompt("What is your name?");
    
    if (userName) {
        const userEmail = prompt("Please enter your email to subscribe for updates:");

        if (userEmail) {
            const confirmationMessage = `Thank you, ${userName}! You have successfully subscribed to our newsletter using the email: ${userEmail}.`;
            alert(confirmationMessage);
          
            // Log subscription information to the console
            console.log(`Name: ${userName}`);
            console.log(`Email: ${userEmail}`);
            
            // Store user information in the array
            subscribedUsers.push({ name: userName, email: userEmail });
        } else {
            alert("Email is required for updates. Please enter a valid email.");
        }
    } else {
        alert("Name is required for subscription. Please try again.");
    }
}


// Event listener for the "Subscribe to Newsletter" button
const subscribeButton = document.getElementById("subscribeButton");
subscribeButton.addEventListener("click", subscribeNewsletter);

// Function to calculate the total price based on destination and class
function calculatePrice() {
    const destinationSelect = document.getElementById("destinationSelect");
    const classSelect = document.getElementById("classSelect");
    const totalPriceElement = document.getElementById("totalPrice");

    const destination = destinationSelect.value;
    const travelClass = classSelect.value;
    let price = 0;

    // Assign prices based on destination and class
const prices = {
  england: {
    economy: 300,
    business: 600,
    'first-class': 1000,
  },
  wales: {
    economy: 250,
    business: 550,
    'first-class': 900,
  },
  scotland: {
    economy: 350,
    business: 700,
    'first-class': 1200,
  },
  ireland: {
    economy: 400,
    business: 750,
    'first-class': 1300,
  },
};

    // Check if the selected destination exists in the prices object
  
    if (destination in prices) {
      
        // Check if the selected travel class exists in the prices object for the destination
      
        if (travelClass in prices[destination]) {
            price = prices[destination][travelClass];
        }
    }

    totalPriceElement.textContent = `$${price}`;
}

// Event listener for the "Calculate Price" button
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculatePrice);