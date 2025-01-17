chrome.commands.onCommand.addListener((command) => {
    if (command === "trigger-string") {
      chrome.storage.sync.get(["customString"], ({ customString }) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "insertString", text: customString });
          }
        });
      });
    }
  });
  