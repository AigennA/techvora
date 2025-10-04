# Mobile App Setup Guide

This project is configured with Capacitor for native mobile app development. Follow these steps to run the app on iOS or Android devices.

## Prerequisites

- **For iOS**: Mac with Xcode installed
- **For Android**: Android Studio installed
- Node.js and npm installed

## Initial Setup

### 1. Transfer Project to GitHub

Export your project to GitHub using the "Export to GitHub" button in Lovable.

### 2. Clone and Install

```bash
git clone your-repo-url
cd your-project
npm install
```

### 3. Add Native Platforms

Add iOS and/or Android platforms:

```bash
# For iOS (Mac only)
npx cap add ios

# For Android
npx cap add android
```

### 4. Update Native Dependencies

```bash
# For iOS
npx cap update ios

# For Android  
npx cap update android
```

### 5. Build the Web Project

```bash
npm run build
```

### 6. Sync to Native Platforms

```bash
npx cap sync
```

**Note**: Run `npx cap sync` after every `git pull` to sync changes.

## Running the App

### On Android

```bash
npx cap run android
```

This will open Android Studio. Select your emulator or connected device and run the app.

### On iOS

```bash
npx cap run ios
```

This will open Xcode. Select your simulator or connected device and run the app.

## Development Workflow

1. Make changes in Lovable or your local editor
2. If working locally:
   - Run `npm run build` to build the web project
   - Run `npx cap sync` to sync changes to native platforms
3. Run `npx cap run android` or `npx cap run ios` to test

## Hot Reload During Development

The app is configured to use hot-reload from the Lovable sandbox during development:
- URL: `https://f5c87ca7-608c-4e0f-9f4b-e4e0a2de4099.lovableproject.com`
- This means you can make changes in Lovable and see them instantly in your mobile app without rebuilding

## Configuration

The Capacitor configuration is in `capacitor.config.ts`:

```typescript
{
  appId: 'app.lovable.f5c87ca7608c4e0f9f4be4e0a2de4099',
  appName: 'polycart-nexus',
  webDir: 'dist',
  server: {
    url: 'https://f5c87ca7-608c-4e0f-9f4b-e4e0a2de4099.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
}
```

## Troubleshooting

### App won't load
- Ensure you've run `npm run build` before `npx cap sync`
- Check that the server URL in `capacitor.config.ts` is correct
- Clear app data and reinstall

### Changes not showing
- Run `npx cap sync` after making changes
- Rebuild the native app if needed

### iOS build errors
- Ensure Xcode is up to date
- Run `pod install` in the `ios/App` directory

### Android build errors
- Ensure Android Studio and SDK are up to date
- Check Java version compatibility

## Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [iOS Development Guide](https://capacitorjs.com/docs/ios)
- [Android Development Guide](https://capacitorjs.com/docs/android)
- [Lovable Mobile Development Blog Post](https://lovable.dev/blogs/)

## Mobile-Optimized Features

This app includes:
- ✅ Responsive design for all screen sizes
- ✅ Touch-friendly buttons and interactions
- ✅ Mobile-optimized navigation
- ✅ Adaptive layouts for portrait/landscape
- ✅ Mobile-friendly cart and checkout
- ✅ Touch gesture support
- ✅ Native performance with Capacitor
