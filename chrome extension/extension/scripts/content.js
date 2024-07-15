
// Add timer to sort after refresh


// get page url
let url = window.location.href;



// jstris

if (url.includes('jstris')){
  console.log('jstris');
  
  // Define elements
  let gameStatsEle = document.getElementById('gstats');
  let statLabelsEle = document.getElementById('statLabels');
  let glStatsEle = document.getElementById('glstats');
  
  // Check local storage for saved settings
  let settingsFromLocalStorage =  localStorage.getItem('jstris-enhancement-suite--settings') ? JSON.parse(localStorage.getItem('jstris-enhancement-suite--settings')) : null;

  let settings = {
    backgroundColor: settingsFromLocalStorage ? settingsFromLocalStorage?.backgroundColor : document.body.style.backgroundColor,
    statsTextColor: settingsFromLocalStorage ? settingsFromLocalStorage?.statsTextColor : gameStatsEle.style.color, 
  }


  const originalBackground = document.body.style.backgroundColor; 

  const setColors = (type, color) => {
    if (type === null || type === 'background'){
      // Set background color
      //document.body.style.background = settings?.backgroundColor; 
      //document.body.style.backgroundColor = settings?.backgroundColor;
      document.body.style.setProperty('background-color', `${settings?.backgroundColor}`, `important`);
      document.body.style.setProperty('background', `${settings?.backgroundColor}`, `important`);
    }
    
    if (type === null || type === 'text'){
      // Set text color
      //gameStatsEle.style.color = settings?.statsTextColor;
      //glStatsEle.style.color = settings?.statsTextColor;
      gameStatsEle.style.setProperty('color', `${settings?.statsTextColor}`, `important`);
      glStatsEle.style.setProperty('color', `${settings?.statsTextColor}`, `important`);

      // let slotEle = document.querySelectorAll('.slot')

      // slotEle.forEach(item => {
      //   item.style.setProperty('color', `${settings?.statsTextColor}`, `important`)
      // })
    }
  }

  
  gameStatsEle.style.fontSize = '.6em';
  
  
  // gameStatsEle.style.display = 'flex';
  // gameStatsEle.style.flexDirection = 'column';

  // statLabelsEle.style.display = 'flex';
  // statLabelsEle.style.flexDirection = 'row';
  // gameLStatsEle.style.display = 'flex';
  // gameLStatsEle.style.flexDirection = 'row';


  // Create container for buttons
  let buttonsBox = document.createElement('div');
  buttonsBox.id = 'buttonsBox';
  buttonsBox.style.position = 'absolute';
  buttonsBox.style.width = '100px';
  buttonsBox.style.bottom = '150px';
  buttonsBox.style.left = '-100px';
  //buttonsBox.style.zIndex = '100';
  buttonsBox.style.display = 'flex';
  buttonsBox.style.flexDirection = 'column';
  

  ///// Control panel options /////

  // Custom color selector
  let colorSelector = document.createElement('input');
  colorSelector.type = 'color';
  colorSelector.id = 'colorSelector';
  colorSelector.value = settings?.backgroundColor;
  colorSelector.style.border = `solid 3px ${originalBackground}`;
  colorSelector.style.width = '100px';
  colorSelector.style.height = '50px';
  colorSelector.style.padding = '0px';
  colorSelector.style.margin = '0px';

  colorSelector.onchange = () => {
    // document.body.style.background = colorSelector.value;
    // document.body.style.backgroundColor = colorSelector.value;
    colorSelector.style.border = `solid 3px ${colorSelector.value}`;
    settings.backgroundColor = colorSelector.value;
    localStorage.setItem('jstris-enhancement-suite--settings', JSON.stringify(settings));
    setColors('background', colorSelector.value)
  }


  // Custom text color selector
  let textColorSelector = document.createElement('input');
  textColorSelector.type = 'color';
  textColorSelector.id = 'textColorSelector';
  textColorSelector.value = settings?.statsTextColor;
  textColorSelector.style.border = `solid 3px ${originalBackground}`;
  textColorSelector.style.width = '100px';
  textColorSelector.style.height = '50px';
  textColorSelector.style.padding = '0px';

  textColorSelector.onchange = () => {
    // gameStatsEle.style.color = textColorSelector.value;
    // glStatsEle.style.color = textColorSelector.value;
    textColorSelector.style.border = `solid 3px ${textColorSelector.value}`;
    settings.statsTextColor = textColorSelector.value;
    localStorage.setItem('jstris-enhancement-suite--settings', JSON.stringify(settings));
    setColors('text', textColorSelector.value);
  }



  // Button to clear local storage 
  let clearLocalStorageButton = document.createElement('button');
  clearLocalStorageButton.innerHTML = 'Clear Local Storage';
  clearLocalStorageButton.style.border = `solid 3px ${originalBackground}`;
  clearLocalStorageButton.style.width = '100px';
  clearLocalStorageButton.style.height = '25px';
  clearLocalStorageButton.style.padding = '0px';
  clearLocalStorageButton.style.opacity = '.25';
  clearLocalStorageButton.style.fontSize = '.6em';

  clearLocalStorageButton.onclick = () => {
    localStorage.removeItem('jstris-enhancement-suite--settings');
  }
  

  buttonsBox.appendChild(colorSelector);
  buttonsBox.appendChild(textColorSelector);
  buttonsBox.appendChild(clearLocalStorageButton);


  let mainEle = document.getElementById('main');

  mainEle.appendChild(buttonsBox);


  // Set initial colors on page load
  setColors(null);

  // Run setInitialColor at interval to account for page refresh
  let count = 0;

  let interval1 = setInterval(() => {
    setColors(null);
    count++;

    // Clear interval after 5 seconds
    if (count >= 5){
      clearInterval(interval1);
    }
  }, 5000);
}


