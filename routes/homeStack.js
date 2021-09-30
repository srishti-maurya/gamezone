import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  //top screen to rendor first
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens); //creates nav stack and passes the screen

export default createAppContainer(HomeStack); //returns a container of nav stack to rendor
