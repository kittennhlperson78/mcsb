let currentAudio;

function playSound(file) {

    // Stop the previous sound if one is playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Create and play the new sound
    currentAudio = new Audio(file);
    currentAudio.play();

}