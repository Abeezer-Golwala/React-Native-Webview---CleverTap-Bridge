import React from 'react';
import { WebView } from 'react-native-webview';
import {
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const CleverTap = require('clevertap-react-native');
CleverTap.onUserLogin({'Name': 'Abeezer', 
'Identity': '7789', 
'Email' : 'hello@react.com',
'MSG-push':true,
'MSG-email':true,
'MSG-sms':true,
'MSG-whatsapp':true});
CleverTap.setDebugLevel(3);
CleverTap.createNotificationChannel("abtest","abtest","Clevertap test",3,true);
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

        <View>
          <Button onPress={CleverTap.recordEvent('AbeezerPushEvent')} title="Push event"/>
        
        <WebView
          ref={(r) => (this.webref = r)}
          source={{
            uri: 'https://github.com/react-native-webview/react-native-webview',
          }}
        />
      </View>
  );
};

export default App;