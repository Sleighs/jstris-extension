/* global chrome */
/* global browser */


const API = chrome; // || browser;

// Opens options page
export async function openOptions() {
  if (API.runtime.openOptionsPage) {
    //console.log('chrome runtime opened options page');
    API.runtime.openOptionsPage();
  } else {
    //console.log('window opened options page');
    window.open(API.runtime.getURL('options.html'));
  }
}

// Saves options to chrome.storage
export async function saveOptions(data) {
  await API.storage.sync.set({ options: data })
    .then(() => { 
      if (data.debug) console.log('Options saved.') 
    });
}

// Gets options from chrome.storage
export async function getOptions() {
  var optionsData;
  try {
    const data = await API.storage.sync.get("options")
      .then((result) => { 
        if (result.options.debug) console.log('Options retrieved.', result.options)
        optionsData = result.options; 
      });
  } catch (error) {
    console.log('Error retrieving options.', error);
  }
  return optionsData;
}

export async function openRantsPopUp() {
  //await API.runtime.sendMessage({ action:'new-window' }, (response) => {
    //console.log('open rants', response);
  //});

  let windowOptions = {
    url: chrome.runtime.getURL("build-rants/index.html"),
    type: "popup",
  }

  chrome.windows.getAll({populate: true}, (windows) => {
    windows.forEach((window) => {
      window.tabs.forEach((tab) => {
        if (tab.url.includes("build-rants/index.html")) {
          API.windows.remove(window.id);
        }
      });
    });
  });

  // Open new rant window
  chrome.windows.create(windowOptions, (win)=>{
    //console.log('window created', win);
  });
}

export async function deleteAllRants() {
  /*await API.storage.sync.set({ savedRants: [] })
    .then(() => { 
      console.log('All rants deleted.') 
    });*/
  await API.storage.local.set({ savedRants: [] })
  .then(() => { 
    console.log('All rants deleted.') 
  });
}

export async function updateIcon() {
  // send message to background script to update icon
  await API.runtime.sendMessage({ method: 'enableChatPlus' }, (response) => {
    //console.log('update icon', response);
  })

};