// 1. Will never die
const WHITELIST = ['youtube.com', 'github.com', 'google.com', 'whatsapp.com', 'web.whatsapp.com'];

// 2. Function to refresh the UI
async function updateUI() {
  try {
    const allTabs = await chrome.tabs.query({ currentWindow: true });
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Filter logic: Find tabs that are NOT active AND NOT in the whitelist
    const deadTabs = allTabs.filter(tab => {
      const isCurrent = tab.id === activeTab.id;
      const isSafe = WHITELIST.some(site => tab.url && tab.url.includes(site));
      return !isCurrent && !isSafe;
    });

    // tab-count update 
    const countDisplay = document.getElementById('tab-count');
    if (countDisplay) countDisplay.innerText = deadTabs.length;

    // show the tabs that are ready to be buried
    const listElement = document.getElementById('tab-list');
    if (listElement) {
      listElement.innerHTML = '';
      deadTabs.forEach(tab => {
        const li = document.createElement('li');
        li.className = 'tab-item';
        li.innerText = `👻 ${tab.title || 'Untitled Tab'}`;
        listElement.appendChild(li);
      });
    }
    
    console.log("UI Updated. Dead tabs found:", deadTabs.length);
  } catch (error) {
    console.error("Failed to update UI:", error);
  }
}

// 3. Initialize everything when the popup opens
document.addEventListener('DOMContentLoaded', () => {
  console.log("Tab Graveyard Initialized ⚰️");

  updateUI();

  const statsTrigger = document.getElementById('stats-trigger');
  if (statsTrigger) {
    statsTrigger.addEventListener('click', () => {
      const container = document.getElementById('tab-list-container');
      container.classList.toggle('hidden');
    });
  }

  // BURY BUTTON
  const cleanButton = document.getElementById('clean-tabs');
  if (cleanButton) {
    cleanButton.addEventListener('click', async () => {
      try {
        const allTabs = await chrome.tabs.query({ currentWindow: true });
        const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // Filter Logic: to identify IDs to remove
        const ids = allTabs
          .filter(tab => tab.id !== activeTab.id && !WHITELIST.some(site => tab.url && tab.url.includes(site)))
          .map(tab => tab.id);

        if (ids.length > 0) {
          await chrome.tabs.remove(ids);
          console.log(`Burying ${ids.length} tabs...`);
          updateUI();
        }
      } catch (error) {
        console.error("Error during burial:", error);
      }
    });
  }
});