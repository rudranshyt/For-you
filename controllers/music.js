const audioSources = {
  "you-belong-with-me": "../songs/Taylor Swift - You Belong With Me.mp3",
  "you-are-my-sunshine": "../songs/You Are My Sunshine .. Original Song....mp3",
  "bless-broken-road": "../songs/Rascal Flatts Bless the Broken Road.mp3",
  "what-makes-you-beautiful":
    "../songs/One Direction - What Makes You Beautiful (Official Video).mp3",
  "hey-there-delilah": "../songs/Plain White T's - Hey There Delilah.mp3",
};
const audioObjects = {};
function togglePlayPause(songId) {
  if (!audioObjects[songId]) {
    audioObjects[songId] = new Audio(audioSources[songId]);
  }
  if (audioObjects[songId].paused) {
    audioObjects[songId].play();
  } else {
    audioObjects[songId].pause();
  }
}
document
  .getElementById("you-belong-with-me")
  .addEventListener("click", function () {
    togglePlayPause("you-belong-with-me");
  });

document
  .getElementById("you-are-my-sunshine")
  .addEventListener("click", function () {
    togglePlayPause("you-are-my-sunshine");
  });

document
  .getElementById("bless-broken-road")
  .addEventListener("click", function () {
    togglePlayPause("bless-broken-road");
  });

document
  .getElementById("what-makes-you-beautiful")
  .addEventListener("click", function () {
    togglePlayPause("what-makes-you-beautiful");
  });

document
  .getElementById("hey-there-delilah")
  .addEventListener("click", function () {
    togglePlayPause("hey-there-delilah");
  });
