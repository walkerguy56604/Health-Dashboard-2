console.log("App loaded");

document.getElementById("testBtn").addEventListener("click", () => {
  alert("PWA is working 💪");
});

// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker registered"))
      .catch(err => console.error("SW registration failed:", err));
  });
}
