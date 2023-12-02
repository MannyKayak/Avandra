import { Stack } from "expo-router/stack";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// when is loading this make the splash screen visible
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    RobotoBold: require("../assets/fonts/Inter-Bold.ttf"),
    RobotoMedium: require("../assets/fonts/Inter-Medium.ttf"),
    RobotoRegular: require("../assets/fonts/Inter-Regular.ttf"),
    default: require("../assets/fonts/Roboto-Regular.ttf"),
  });
  if (fontsLoaded) {
    console.log("font loaded successfully");
  } else {
    console.log("font not loaded");
  }
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
