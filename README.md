# Birthday Card Creation App

This is a React Native app that allows users to create custom birthday cards by adding images, text, and adjusting font sizes. The app includes features such as selecting an image from the gallery, editing text, and formatting the card for a personalized birthday greeting.

## Table of Contents

* Introduction
* Features
* Installation
* Usage
* App Structure
* Libraries and Tools Used
* License

## Introduction

The Birthday Card Creation app enables users to design and customize a birthday card. Users can:

* Add a custom text message to the card.
* Adjust the font size of the text.
* Upload an image from their device's gallery.
* View and modify the card content in real-time.

This project is built using React Native and Expo to provide a smooth development and deployment experience for mobile apps.

## Features

* Create a Card: Users can create a birthday card with a personalized message.
* Image Picker: Select and display an image from the user's device.
* Text Editor: Add and edit custom text on the card.
* Font Size Adjustment: Increase or decrease the font size of the text.
* Responsive Layout: The app is designed with a flexible and responsive layout that works well on both iOS and Android.


## Installation

## Prerequisites

Make sure you have the following installed:

1. Node.js:
 * Download Node.js at https://nodejs.org/en/download/package-manager

2. Expo CLI: If you haven't installed Expo CLI, you can do so by running:
   ```
   npm install -g expo-cli
   ```
3. Expo Go: Install the Expo Go app on your mobile device from App Store or Google Play Store.

## Steps to Install

1. Clone the repository:

```
git clone https://github.com/your-username/BirthdayCard.git
cd BirthdayCard
```
2. Install the dependencies:
```
npm install
```
3. Start the Expo project:
```
expo start
```
4. Scan the QR code displayed in the terminal or on the web browser with Expo Go to run the app on your device.

## Usage

Once the app is running, you'll be able to:

1. Create a Birthday Card: The app will show a "Create Your Birthday Card" screen with the following options:

* Add Text: Type a custom message for the birthday card. You can adjust the font size using the font controls.
* Add an Image: Tap the "Add an Image" button to choose an image from your device's gallery.
* Increase/Decrease Font Size: Use the buttons to adjust the font size of the message on the card.

2. Customize Your Card: The text and image you add will be displayed on the card. You can continue to edit the text and font size until you're satisfied with the result.

3. Preview and Share: Once you have finished customizing your birthday card, you can save or share it with friends or family to celebrate the special occasion.

## App Structure

Here's a breakdown of the main parts of the app:

* App.js: This is the main entry point for the app. It contains the logic for rendering the card, handling text input, and picking an image.
* Styles: Styles are written using StyleSheet.create() and include custom styling for various elements, such as buttons, card layout, text 
 input, etc.
* Image Picker: Uses expo-image-picker to allow users to select images from their device's gallery.


## Libraries and Tools Used

* React Native: A framework for building native mobile apps using JavaScript and React.
* Expo: A toolchain for building React Native apps without needing to configure native code.
* expo-image-picker: A library that allows users to select images from their device's media library.
* React: The JavaScript library for building user interfaces.
* React Native Components: Various components from react-native, such as View, Text, TextInput, and TouchableOpacity.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

screenshots
