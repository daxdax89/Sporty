import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  Button
} from "react-native";
import { Icon } from "react-native-elements";

// import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    <ImageBackground
      source={require("../assets/images/soccer-field.jpg")}
      style={styles.background}
    >
      <View style={styles.titleHolder}>
        <Text style={styles.title}>Sporty</Text>
      </View>
      <View style={styles.iconHolder}>
        <Icon
          name="sign-in"
          type="font-awesome"
          color="white"
          size={150}
        ></Icon>
      </View>
      <View style={styles.inputHolder}>
        <TextInput
          inlineImageLeft="search_icon"
          style={styles.input}
          value="Username"
        />
        <TextInput
          inlineImageLeft="search_icon"
          style={styles.input}
          value="Password"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={styles.buttonHolder}>
        <Button
          style={styles.button}
          title="Login"
          // onPress={alert("LOL!")}
        ></Button>
      </View>
    </ImageBackground>
    // <View style={styles.container}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.contentContainer}
    //   >
    //     {/* <View style={styles.welcomeContainer}>
    //       <Image
    //         source={
    //           __DEV__
    //             ? require("../assets/images/robot-dev.png")
    //             : require("../assets/images/robot-prod.png")
    //         }
    //         style={styles.welcomeImage}
    //       />
    //     </View> */}

    //     <View style={styles.getStartedContainer}>
    //       {/* <DevelopmentModeNotice /> */}

    //       <Text style={styles.getStartedText}>Get started by openings</Text>

    //       <View
    //         style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
    //       >
    //         <MonoText>screens/HomeScreen.js</MonoText>
    //       </View>

    //       <Text style={styles.getStartedText}>
    //         Change this text and your app will automatically reload.
    //       </Text>
    //     </View>

    //     <View style={styles.helpContainer}>
    //       <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    //         <Text style={styles.helpLinkText}>
    //           Help, it didn’t automatically reload!
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ScrollView>

    //   <View style={styles.tabBarInfoContainer}>
    //     <Text style={styles.tabBarInfoText}>
    //       This is a tab bar. You can edit it in:
    //     </Text>

    //     <View
    //       style={[styles.codeHighlightContainer, styles.navigationFilename]}
    //     >
    //       <MonoText style={styles.codeHighlightText}>
    //         navigation/MainTabNavigator.js
    //       </MonoText>
    //     </View>
    //   </View>
    // </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center"
  },
  inputHolder: {
    marginTop: 20
  },
  title: {
    color: "white",
    textAlign: "center"
  },
  inputHolder: {
    marginTop: 20
  },
  input: {
    color: "white",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    height: 40,
    marginTop: 10,
    backgroundColor: "#4d4d4d"
  },
  iconHolder: {
    marginTop: 150
  },
  buttonHolder: {
    marginTop: 20
  },
  button: {
    color: "white"
  }
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff"
  //   },
  //   developmentModeText: {
  //     marginBottom: 20,
  //     color: "rgba(0,0,0,0.4)",
  //     fontSize: 14,
  //     lineHeight: 19,
  //     textAlign: "center"
  //   },
  //   contentContainer: {
  //     paddingTop: 30
  //   },
  //   welcomeContainer: {
  //     alignItems: "center",
  //     marginTop: 10,
  //     marginBottom: 20
  //   },
  //   //   welcomeImage: {
  //   //     width: 100,
  //   //     height: 80,
  //   //     resizeMode: "contain",
  //   //     marginTop: 3,
  //   //     marginLeft: -10
  //   //   },
  //   getStartedContainer: {
  //     alignItems: "center",
  //     marginHorizontal: 50
  //   },
  //   homeScreenFilename: {
  //     marginVertical: 7
  //   },
  //   codeHighlightText: {
  //     color: "rgba(96,100,109, 0.8)"
  //   },
  //   codeHighlightContainer: {
  //     backgroundColor: "rgba(0,0,0,0.05)",
  //     borderRadius: 3,
  //     paddingHorizontal: 4
  //   },
  //   getStartedText: {
  //     fontSize: 17,
  //     color: "rgba(96,100,109, 1)",
  //     lineHeight: 24,
  //     textAlign: "center"
  //   },
  //   tabBarInfoContainer: {
  //     position: "absolute",
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     ...Platform.select({
  //       ios: {
  //         shadowColor: "black",
  //         shadowOffset: { width: 0, height: -3 },
  //         shadowOpacity: 0.1,
  //         shadowRadius: 3
  //       },
  //       android: {
  //         elevation: 20
  //       }
  //     }),
  //     alignItems: "center",
  //     backgroundColor: "#fbfbfb",
  //     paddingVertical: 20
  //   },
  //   tabBarInfoText: {
  //     fontSize: 17,
  //     color: "rgba(96,100,109, 1)",
  //     textAlign: "center"
  //   },
  //   navigationFilename: {
  //     marginTop: 5
  //   },
  //   helpContainer: {
  //     marginTop: 15,
  //     alignItems: "center"
  //   },
  //   helpLink: {
  //     paddingVertical: 15
  //   },
  //   helpLinkText: {
  //     fontSize: 14,
  //     color: "#2e78b7"
  //   }
});
