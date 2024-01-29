/* Stream it to video element https://stackoverflow.com/questions/12024770/access-camera-from-a-browser */
console.log(navigator.mediaDevices)

const video = document.querySelector('#video');
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => console.log(stream));

