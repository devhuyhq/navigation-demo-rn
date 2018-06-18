import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import { withNavigation } from "react-navigation";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Home screen</Text>
        <TouchableOpacity onPress={this.goToDetailScreen}>
          <Text style={{ fontSize: 20 }}>Go to detail screen</Text>
        </TouchableOpacity>
      </View>
    );
  }

  goToDetailScreen = () => {
    this.props.navigation.navigate("TabNavigator", {
      itemId: 86,
      otherParam: "anything you want here"
    });
  };
}

class BackButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text style={{ fontSize: 20 }}>Go Back</Text>
      </TouchableOpacity>
    );
  }

  onPress = () => {
    this.props.navigation.goBack();
  };
}
const BackButtonWrapper = withNavigation(BackButton);

class DetailScreen extends Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const xParam = navigation.getParam("xParam", "some default value");
    const otherParam = navigation.getParam("otherParam", "some default value");
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Detail screen</Text>
        <Text style={{ fontSize: 20 }}>{itemId}</Text>
        <Text style={{ fontSize: 20 }}>{xParam}</Text>
        <Text style={{ fontSize: 20 }}>{otherParam}</Text>
        <BackButtonWrapper />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Detail: {
    screen: DetailScreen
  },
  Home: {
    screen: HomeScreen
  }
});

export default createStackNavigator(
  {
    Detail: {
      screen: DetailScreen
    },
    Home: {
      screen: HomeScreen
    },
    TabNavigator: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 20
      }
    }
  }
);
