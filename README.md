# RN_NavigationEx

Updated September, 2025 to show examples for navigation using Expo Router and TypeScript.
This repo goes along with the notes in this [document](https://docs.google.com/document/d/1yb6pyTp05UfF9IpnzkT4mqrpnpNfmS4PvGONy_R4V7o/edit?usp=sharing) for lesson 10 on Navigation

## How to run these sample apps

In your terminal, use cd to navigate into the proper app level folder you wish to view.
Once there, run these commands as needed:

- npm install
- If using tunneling:

  - npm i @expo/ngrok@^4.1.0
  - npx expo start --tunnel

- If using web, home wifi or emulator
  - npm start
  - select desired option

## BasicStackNav

This app shows how to set up a \_layout.tsx file in the app folder along with pages for each of the screens. The \_layout.tsx shows the Root Layout

## BasicTabNav

This app shows how to use the \_layout.tsx file along with the (tabs) folder so that you can utilize a Tab navigation. Also in the app folder is an additional file titled 'how_to_add_entry_screen.txt' that explains how to combine a Stack Nav and a Tab Nav to create an entry screen that loads first and then enters the Tab Nav.

## NestedNavPassData

This app shows how to use a loading screen and then enter a tab navigation. I am also showing a simple way to pass data from one screen to another using parameters. If you have a more complex data system where you will want to have data persist across many screens, then you should research more advanced ways to interact with global data (use as using context or Zustand).
