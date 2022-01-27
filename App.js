import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createChannel} from './src/utils/localPushNotifs';
import {
  requestUserPermission,
  notificationListener,
} from './src/utils/notificationService';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    createChannel();
    notificationListener();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 35}}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
