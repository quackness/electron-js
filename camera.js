/* Stream it to video element https://stackoverflow.com/questions/12024770/access-camera-from-a-browser */
console.log(navigator.mediaDevices)

const video = document.querySelector("#camera");
console.log(video)
video.autoplay = true;

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => video.srcObject = stream);

