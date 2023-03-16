const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  butInstall.style.display = "block";
  event.prompt();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("butInstall clicked");
  const promptEvent = await window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  const result = await promptEvent.userChoice;
  console.log(`User response to the install prompt: ${result.outcome}`);
  if (result.outcome === "accepted") {
    console.log("User accepted the install prompt");
  } else {
    console.log("User dismissed the install prompt");
  }
  butInstall.style.display = "none";
  window.beforeInstallPromptEvent = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed successfully");
});
