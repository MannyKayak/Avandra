import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  ForYouRestaurants,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerShadowVisible: false,
          headerTitle: "Avandra",
          headerTitleStyle: {
            color: COLORS.white,
            flex: 1,
            flexDirection: "column",
            fontSize: SIZES.xxLarge,
            fontWeight: FONT.bold,
            alignItems: "center",
            textAlign: "center",
          },
          headerTitleColor: COLORS.white,
          headerTransparent: false,
        }}
      />
      <View
        style={{
          height: 100,
          flex: 1,
        }}
      >
        <ImageBackground
          source={images.backgroundImage}
          style={{
            flex: 1,
            resizeMode: "cover",
            height: "100%",
            width: "100%",
          }}
        ></ImageBackground>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.gray }}
      >
        <View style={{ flex: 1, padding: SIZES.small }}>
          <ForYouRestaurants />
          <Welcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
