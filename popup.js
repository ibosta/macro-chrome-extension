document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["customString"], ({ customString }) => {
      if (customString) {
        document.getElementById("customString").value = customString;
      }
    });
  });

  document.getElementById("save").addEventListener("click", () => {
    const customString = document.getElementById("customString").value;
    chrome.storage.sync.set({ customString }, () => {
      const status = document.querySelector(".status");
      status.textContent = "İfade başarıyla kaydedildi!";
      setTimeout(() => (status.textContent = ""), 3000);
    });
  });
  