import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps147479Navigator from '../features/Maps147479/navigator';
import Add-Item147478Navigator from '../features/Add-Item147478/navigator';
import Maps147474Navigator from '../features/Maps147474/navigator';
import UserProfile147470Navigator from '../features/UserProfile147470/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps147479: { screen: Maps147479Navigator },
Add-Item147478: { screen: Add-Item147478Navigator },
Maps147474: { screen: Maps147474Navigator },
UserProfile147470: { screen: UserProfile147470Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
