async function iniciarCamera() {
  try {
    const constraints = {
      video: { facingMode: "user" }, // câmera frontal
      audio: false,
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    const video = document.getElementById("camera");
    video.srcObject = stream;
  } catch (err) {
    alert("Erro ao acessar a câmera: " + err.message);
    console.error(err);
  }
}

window.addEventListener("load", iniciarCamera);
