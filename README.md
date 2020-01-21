# FinDev
**Find devs near you**.

FinDev it's a web and mobile app to find devs near you - by using Github API and geolocation within 10Km (over 6 miles) radius - that you can do what you'd like to do. e.g., ask for some help with programming, job offer, etc.

## About the application
### Web app
The web app is just a register page with a user dashboard.

![image](https://user-images.githubusercontent.com/41703972/72548737-0f271900-386e-11ea-91ee-6c466b9a28ef.png)

### Mobile app
The mobile app is where we can find devs near us by a specific tech allowing us to see their names, bio and their github profile with one tap.

## Technologies
- Node.js
- React
- React Native with [Expo](https://expo.io/learn)

## Useful libs / modules
### Backend
- [express](https://github.com/expressjs/express)
- [axios](https://github.com/axios/axios)
- [MongoDB (mongoose)](https://github.com/Automattic/mongoose)
- [socket.io](https://github.com/socketio/socket.io)

### Web
- [axios](https://github.com/axios/axios)

### Mobile
- [react-native-maps](https://docs.expo.io/versions/latest/sdk/map-view/)
- [expo-location](https://docs.expo.io/versions/latest/sdk/location/)
- [react-native-webview](https://docs.expo.io/versions/latest/sdk/webview/)
- [react-navigation](https://github.com/react-navigation/react-navigation)
- [react-navigation-stack](https://github.com/react-navigation/stack)
- [axios](https://github.com/axios/axios)
- [socket.io-client](https://github.com/socketio/socket.io-client)
- @expo/vector-icons (installed by default)

## Requirements
- [Node.js](https://nodejs.org)
- [MongoDB Account](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&_bt=335229503988&_bn=g&gclid=EAIaIQobChMIhtmIud_E5gIVEISRCh0sygfvEAAYASABEgLGCvD_BwE)
- [Expo](https://expo.io/learn)

## Get started
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/FinDev.git` on your favorite terminal.
2. After cloning run `yarn` or `npm install` on **backend**, **frontend** and **findev** folder.
3. After that, go to **backend** folder and rename `sample.env` file to `.env`, then enter your own credentials.
4. Then, create a folder in the root project directory named **credentials**, then create a json file named **baseUrl** so you can add your ip address followed by server port or your server url. 
```json
{
    "ip": "http://<ip goes here>:<port goes here>"
}
```

## License
This project is under the MIT license. See the [LICENSE](https://github.com/ribeiromatheus/FinDev/blob/master/LICENSE) file for more details.