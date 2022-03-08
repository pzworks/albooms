import { StyleSheet} from "react-native";
import { mainColor, screenWidth} from "./common";

export const albumStyles = StyleSheet.create({
  albumTitle: {
    fontSize: 14,
    textAlign: "center"
  },
  album: {
    margin: screenWidth/10,
    borderWidth: 1,
    borderColor: mainColor,
    padding: screenWidth/20,
    borderRadius: screenWidth/50,
  },
  favAlbum: {
    margin: screenWidth/10,
    borderWidth: 1,
    borderColor: '#0000ff',
    padding: screenWidth/20,
    borderRadius: screenWidth/50,
  },
  addAlbumButton: {
    width: screenWidth/2,
    margin: 20,
    textAlign: "center",
    backgroundColor: mainColor,
    padding: 8,
    borderRadius: 5,
    alignSelf: "center"
  },
  addAlbumButtonText: {
    textAlign: "center",
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    alignSelf: "center",
    padding: 7,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: mainColor,
    margin: 10,
    width: screenWidth/2
  },
  invalidInput: {
    alignSelf: "center",
    padding: 7,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#ff0000',
    margin: 10,
    width: screenWidth/2
  }
})
