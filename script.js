let timer;
let timeLeft = 120; // 120 seconds = 2 minutes

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function submitPasskey() {
    var passkey = document.getElementById("passkey").value;
    var resultDiv = document.getElementById("result");
    var inputGroup = document.querySelector(".input-group");
    var timerDiv = document.getElementById("timer");
    var submitButton = document.querySelector(".button-33");
    var heading = document.querySelector("h1");
    var body = document.querySelector("body");

  
    if (passkey === "Thejas") { // Replace "Thejas" with the actual correct passkey
      // Hide elements
      resultDiv.innerHTML = ""; // Clear any previous content
      inputGroup.style.display = "none";
      timerDiv.style.display = "none";
      submitButton.style.display = "none";
      heading.style.display = "none";
      body.style.backgroundImage = "url('3.jpeg')";

      clearInterval(timer); // Stop the timer
  
      // Display success message
      var successMessage = document.createElement("h1");
      successMessage.textContent = "Success!";
      successMessage.classList.add("topcolor");
      resultDiv.appendChild(successMessage);
    } else {
      resultDiv.textContent = "Incorrect passkey. Please try again.";
    }
  }

function gameOver() {
  document.getElementById('result').textContent = 'Game Over';
  document.getElementById('passkey').disabled = true;
  document.querySelector('.button-33').disabled = true;
}

// Function to show elements after video completion
function showElements() {
  document.getElementById('content').style.display = 'flex';
  startTimer();
}

// Add an event listener to the video element to detect when the video ends
document.getElementById('background-video').addEventListener('ended', function() {
  // Call the function to show elements after video completion
  showElements();
});

// Function to play the video in full screen
function playVideo() {
  var backgroundVideo = document.getElementById('background-video');
  backgroundVideo.play().then(function() {
    // Video played successfully
    backgroundVideo.requestFullscreen().catch(function(error) {
      console.error('Fullscreen request failed:', error);
    });
  }).catch(function(error) {
    console.error('Video playback failed:', error);
  });
}

// Call the function to play the video
playVideo();
