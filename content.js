chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "insertString" && message.text) {
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable)) {
      const start = activeElement.selectionStart || 0;
      const end = activeElement.selectionEnd || 0;
      const currentValue = activeElement.value || "";
      activeElement.value = currentValue.slice(0, start) + message.text + currentValue.slice(end);
      activeElement.setSelectionRange(start + message.text.length, start + message.text.length);
    }
  }
});
