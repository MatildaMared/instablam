<h1 align="center">Instablam</h1>

<p align="center">"Instablam" is an Instagram-like progressive web app where you take photos using your mobile/computer camera and then add a filter, description and other details. The saved photos are displayed in a gallery.</p>

---

## Links 🌍

- [GitHub Repo](https://github.com/MatildaMared/instablam "Instablam Repo")

- [Live Demo](https://matildamared-instablam.netlify.app "Live View")

---

## Screenshots 📸

![Gallery View](https://user-images.githubusercontent.com/43721548/143270442-da1a4d0a-35a2-4b14-a93e-9079ace94eeb.PNG)
![Photo Page](https://user-images.githubusercontent.com/43721548/143270541-56a539cf-8e99-4560-97ee-7ce1be3cf97b.PNG)

---

## About the app 📝

This app is using several API's to access the camera, get location data and send notifications to the user. Some of these API's are working differently in different browser which means the app might not work everywhere. I've tested the app sucessfully in Chrome, Edge, FireFox and Safari on macOS, Chrome and Safari och iOS and ipadOS and Chrome on Windows, so hopefully it will work for the majority of users. 😊

The app is a progressive web app, using a service worker to cache data. It is also installable in the browser supporting this feature, which means it can be installed and used as a normal desktop app. If the user is not connected to the internet the app will still work, even though there are certain features you cannot use (the part where you get information about your location).

I've also worked REALLY hard on the accessibility of the app, for example by making the app functional for those using a screen reader. This is done by using aria attributes, semantic HTML elements and displaying descriptive text, that will only show up on a screen reader and not visually, in certain places to describe what is happening. The app is also 100% accessible using only a keyboard and no mouse which I am really proud over! 😄

---

## Technologies used 💻

- HTML
- CSS
- JavaScript
- React
- styled-components

---

## Icons 🎨

This app is using icons from https://feathericons.com/

---

## Getting Started 🛫

1. Clone the repo, either by downloading a zip file through this GitHub repository, or by running `git clone https://github.com/MatildaMared/instablam.git`

2. Install NPM packages by running `npm install`

3. In the project directory, you can run `npm start` to start the development server. The app is built using `create-react-app`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

4. To make a production build, run `npm run build`. This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

## Author 👩‍💻

**Matilda Mared**

- [GitHub Profile](https://github.com/MatildaMared "MatildaMared")
- [LinkedIn Profile](https://www.linkedin.com/in/matilda-mared "MatildaMared")
- [Email](mailto:matildamared@live.se?subject=Hi "Hi!")

---

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!
