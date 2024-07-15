# notes

## commands
  ### ~/chat-plus-popout
  
    rm -rf static && rm -rf build

    cp -R extension/build ../chat-plus && cp -R static ../chat-plus

  ### ~/chat-plus-popout/extension
    * npm run move && cp -R build ../../chat-plus && cp -R ../static ../../chat-plus

  ### ~/chat-plus-rants/rant-view
    npm run move

    cp -R ../rants-build ../../chat-plus

    npm run move && cp -R build ../../chat-plus/build-rants

    * npm run move && rm -rf ../../chat-plus/build-rants &&  cp -R build ../../chat-plus/build-rants


# letters to test groups

  things to cover 
  - bugs detected
  - features
  

  message
  - I made something I the rumble users might like. It's a small chrome extension that adds features to the rumble chat. 
  - It adds colors to the users in chat, similar to twitch, and highlights the user's username when mentioned in chat. There is also a list of usernames to tag accessed by pressing "@" in the chat input box.


# Copy

  The goal for this extension is to improve the Rumble chat experience for viewers and streamers.

  ## Product Listing

  ChatPlus is an extension for Rumble that improves livestream chat user experience, enhances chat functionality and adds options to make Rumble more user-friendly. 

  Simply type "@" to view recent chat users and click a username to add it to the chat message. 

  Features include:
  - User mention highlighting
  - Easy user tagging
  - Full window chat
  - Username color schemes
  - Play videos automatically 




# Chrome Publishing

  ## Purpose
  - (original)The purpose of this extension is to make it easier for users on Rumble.com to mention other users and see usernames mention in livestream chats.

  - (current)The purpose of this extension is to improve the user experience of livestream content on Rumble.com. 



  ## Storage Justification
  - The “storage” permission is used to store an options object to inform the behavior of the extension, including container positioning, enabling username colors, enabling a list of chat usernames, autoplaying videos and enabling the extension.

  ## Host Permission
  - The extension manifest permits "https://rumble.com/*" to allow the the extension to access to livestreams on the rumble.com website. The livestream url format uses uniques path directly after the domain (ie “https://rumble.com/[livestream-path]). Allowing "https://rumble.com/*" lets the extension operate on livestream content.

  - https://developer.chrome.com/docs/webstore/user_data/


## Hacker News post

https://news.ycombinator.com/item?id=34736288

https://chrome.google.com/webstore/detail/chatplus-for-rumble/odlcomopigapcpmlpmmmhlhegajembio


Show HN: ChatPlus – A Rumble chat enhancer extension

I recently released a Chrome extension that adds features to Rumble live chat to make it more viewer and streamer friendly. Features include user mention highlights, full window chat, recent chat user list, autoplay and more.

The Github repo can be found at github.com/sleighs/chat-plus. Feedback is appreciated. It would be great to hear from users what features they'd like to see in the future.

Thanks for checking this post out. I hope you enjoy ChatPlus.