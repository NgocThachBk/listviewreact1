import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 120,
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageContainer: {
    height: 100,
    width: 100,
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,

    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    margin: 10
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10
  },
  info: {
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 10,
    justifyContent: "center",
    height: 120,
    width: "70%"
  },
  title: {
    height: 20,
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    flexWrap: "wrap"
  },
  note: {
    height: 20,
    fontFamily: "MontserratLight",
    fontSize: 10,
    flexWrap: "wrap"
  },
  content: {
    height: 80,
    fontFamily: "MontserratMedium",
    fontSize: 12,
    flexWrap: "wrap"
  }
});
