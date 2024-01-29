/* Stream it to video element https://stackoverflow.com/questions/12024770/access-camera-from-a-browser */
console.log(navigator.mediaDevices)

const video = document.querySelector("#camera");
console.log(video)
video.autoplay = true;
const captureButton = document.querySelector("#capture_img");
const imageTag = document.querySelector("#image");
captureButton.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  //convert it to a usabe data url
  const dataURL = canvas.toDataURL();
  console.log("capture data", dataURL);
  //imageTag.src = dataURL;
  window.electronAPI.sendImage(dataURL);
});

console.log("api", window.electronAPI);

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => video.srcObject = stream);

