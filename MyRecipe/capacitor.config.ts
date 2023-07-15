import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-recipe',
  webDir: 'dist/my-recipe',
  server: {
    androidScheme: 'https'
  }
};

export default config;
