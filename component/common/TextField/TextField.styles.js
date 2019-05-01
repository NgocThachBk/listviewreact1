import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "80%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 10,
    height: 30,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "MontserratMedium",
    fontSize: 12,
    color: "#333",
    alignSelf: "flex-start"
  },
  input: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
    color: "#333",
    width: "50%",
    textAlign: "right"
  }
});
