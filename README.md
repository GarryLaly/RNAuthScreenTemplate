# RNAuthScreenTemplate

Free template auth screen for your react native project. Like login screen, register screen, forgot password screen, etc.

[Link Demo Playstore](https://play.google.com/store/apps/details?id=com.rnauthscreentemplate)

![](http://temaku.co.id/uploads/products/rnauthscreentemplate.png)

## Screenshot

Login Screen

![](https://lh3.googleusercontent.com/hCA3KSBiiLTMoMWWMnsXmo2xyAHfJjDP1wPl1KjSQOLreDf6oMlxWggv7F35YXzDhNuk=h900-rw)

Register Screen

![](https://lh3.googleusercontent.com/yhnxpv6WO6lynRKejUFEor-v7ykrZvss-6ydniE2n6KjEXIvAvD6ukGVLKYJ_M46dg=h900-rw)

## Getting Started

Cloning this repo use SSH
```
git clone git@github.com:GarryLaly/RNAuthScreenTemplate.git
```

Cloning this repo use HTTPS:
```
git clone https://github.com/GarryLaly/RNAuthScreenTemplate.git
```

Open the directory:
```
cd RNAuthScreenTemplate
```

### Prerequisites

You need to install node.js to run npm package and install react native for run this project

https://howtonode.org/how-to-install-nodejs

https://facebook.github.io/react-native/

### Installing

First time you need to install all of package json

```
npm install
react native link
```

Waiting until finish

## Running the tests

Running for android
```
react-native run-android
```
Running for iOS
```
react-native run-ios
```

## Deployment

To make it standalone compile without development mode. You need to run npm like this for debug standalone
```
npm run-script bundleDebug && npm run-script buildDebug
```
For release standalone version, but you need keystore. If you want upload to playstore
```
npm run-script bundleRelease && npm run-script buildRelease
```

## Built With

* [React Native 0.47](http://facebook.github.io/react-native/releases/0.47/) - Mobile apps framework
* [React Navigation](https://reactnavigation.org/) - React Native Plugin

## Contributing

Feel free for submitting pull requests to us.

## Authors

* **Garry Priambudi** - *Apps Developer* - [GarryLaly](https://github.com/GarryLaly)
* **Dimas Pradana** - *Apps Designer* - [Dimas Pradana](https://www.facebook.com/sha.dow.5836711)

## License

This project is licensed under the MIT License

## Acknowledgments

* Stackoverflow
* [Unsplash for Background](https://unsplash.com/photos/D6RsA8pmYko)
* [Temaku](http://temaku.co.id)
* etc
