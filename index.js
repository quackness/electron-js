// console.log("electron api from index.js", window.electronAPI);
console.log("getImage", window.electronAPI);
const imageTag = document.querySelector("#image-tag");
window.electronAPI.getImage((event, data) => {
  console.log(event, data)
  imageTag.src = data;
  window.electronAPI.closeCameraWindow();

});