import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedRestaurant, item) => ({
    width: 300,
    padding: SIZES.xLarge,
    backgroundColor:
      selectedRestaurant === item.restaurantsId ? COLORS.lightWhite : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedRestaurant, item) => ({
    height: 200,
    backgroundColor:
      selectedRestaurant === item.restaurantsId ? "#FFF" : COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  restaurantName: (selectedRestaurant, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color:
      selectedRestaurant === item.restaurantsId ? COLORS.black : COLORS.black,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedRestaurant) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedRestaurant === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: "#B3AEC6",
  },
  starIcon: {
    width: SIZES.large,
    height: SIZES.large,
  },
});

export default styles;
