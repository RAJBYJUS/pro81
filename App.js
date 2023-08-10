import * as React from 'react';
import TabNavigator from "./navigation/TabNavigator"
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <TabNavigator>
      <DrawerNavigator />
    </TabNavigator>
  );
}