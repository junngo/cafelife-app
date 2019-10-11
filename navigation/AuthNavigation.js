import { createStackNavigator, createAppContainer } from "react-navigation";
import AuthHome from "../screens/Auth/AuthHome";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";

const AuthNavigation = createStackNavigator(
    {
        AuthHome,
        Signup,
        Login,
        Confirm
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AuthNavigation);
