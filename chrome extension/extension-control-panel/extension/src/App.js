import React, { useState, useEffect } from 'react';
import './App.css';
import { Options } from './Components';
import ToggleSwitch from './Components/ToggleSwitch';
import { deleteAllRants, getOptions, openRantsPopUp, saveOptions, updateIcon } from './main';

const defaultOptions = {
  enableChatPlus: true,
  colorUsernames: true,
  showUsernameListOnStartup: false,
  enableUsernameMenu: true,
  popupBelow: false,
  playVideoOnPageLoad: false,
  hideFullWindowChatButton: false,
  showListUserCount: false,
  chatStyleNormal: true,
  saveRants: false,
  chatAvatarEnabled: true
};

function App() {
  const [optionsState, setOptionsState] = useState(null);

  const onChange = (val) => {
    setOptionsState({
      ...optionsState,
      enableChatPlus: val
    });
    saveOptions({...optionsState, enableChatPlus: val});
    updateIcon()
  }
  
  useEffect(()=>{
    getOptions().then((result) => {
      if (!result || Object.keys(result).length === 0) {
        setOptionsState(defaultOptions);
      } else {
        setOptionsState(result);
      }
      return result;
    });
  }, []);

  return (
    <div className="popup-container">
      <div className='header-container'>
        <h1 className='header-title'>ChatPlus</h1>
        {optionsState && 
          <ToggleSwitch id="switch" 
            checked={optionsState.enableChatPlus} 
            onChange={onChange} 
        />}
      </div>
      
      <div className='links-container'>
        <a className='link' href='https://github.com/sleighs/chat-plus' target="_blank" rel="noreferrer">About</a>
        <a className='link' href='mailto:wsright987@gmail.com'>Found a bug?</a>
      </div>

      <div className='rants-btns-container' 
        style={{display:''}}
      >
        <div style={{ 
          display: 'flex', 
          //flexDirection: 'row', 
          //justifyContent: 'space-between',
          width: '100%',
        }}>
          <button className='view-rants-btn' onClick={() => openRantsPopUp()}>View Rants</button>
          <button style={{display:'none'}}className='delete-rants-btn'
            onClick={() => {
              // Show status after delete          
              let status = document.getElementById('rant-status');
              status.innerHTML = 'Deleted.';
              status.style.opacity = 1;
              setTimeout(() => {
                status.style.opacity = 0;
                status.innerHTML = 'Rant Status';
              }, 2000);
              deleteAllRants();
            }}>
            Delete Rants
          </button>
        </div>
        
        <div className='status-container'>
          <span id='rant-status' style={{opacity:0,}}>Rant Status</span>
        </div>
      </div>

      {optionsState && 
        <Options 
          defaultOptions={defaultOptions} 
          optionsState={optionsState}
          setOptionsState={setOptionsState}
        />}
    </div>
  );
}

export default App;
