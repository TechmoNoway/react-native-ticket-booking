# React Native Ticket Booking App 🎟️

A mobile application built with [Expo](https://expo.dev) that enables users to discover events, purchase tickets, manage bookings, and scan tickets at venue entrances.

## Features

- **User Authentication** - Secure login and account management
- **Event Discovery** - Browse and search upcoming events with filtering options
- **Ticket Purchase** - Streamlined checkout process for event tickets
- **Ticket Management** - View, share, and access purchased tickets
- **QR Code Generation** - Digital tickets with unique verification codes
- **Ticket Scanning** - Validate tickets at event entry points
- **User Profiles** - Personalized experiences and preferences

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), for quickly testing the app

## Project Structure

This application uses Expo Router with file-based routing:

```
app/
├── (authed)/             # Protected routes requiring authentication
│   ├── (tabs)/           # Main tab navigation
│   │   ├── (events)/     # Event discovery and details
│   │   ├── (tickets)/    # Ticket management screens  
│   │   ├── profile.tsx   # User profile screen
│   │   └── scan.tsx      # QR code scanner
│   └── _layout.tsx       # Authentication layout wrapper
├── login.tsx             # Login screen
├── register.tsx          # Registration screen
└── _layout.tsx           # Root layout
```

## Technologies

- **React Native** - Core mobile framework
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe development
- **Expo Router** - File-based navigation
- **React Native Paper** - UI component library
- **Zustand** - State management

## Learn more

To learn more about developing with Expo:

- [Expo documentation](https://docs.expo.dev/): Explore fundamentals and advanced topics
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial
- [Expo Router documentation](https://docs.expo.dev/router/introduction/): Learn about the file-based routing system

## Join the community

- [Expo on GitHub](https://github.com/expo/expo): View the open source platform
- [Discord community](https://chat.expo.dev): Connect with other Expo developers
