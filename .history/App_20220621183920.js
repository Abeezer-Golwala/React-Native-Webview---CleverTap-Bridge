import React from 'react';
import type {Node} from 'react';
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

        <View style={{ flex: 1,  }}>
          {/* <Button onPress={CleverTap.recordEvent('AbeezerPushEvent')} title="Push event"/> */}
          <WebView
            source={{
              uri: 'https://abclevertaptest.000webhostapp.com/ReactNativeWebView'
            }}
            javaScriptEnabled={true}
            onMessage={event => {
              //Converting data recived from webveiw to json object 
              const test = JSON.parse(event.nativeEvent.data);
              //checking the type of the data recieved from webview if its an event, onuserlogin or profile set data.
                if (JSON.stringify(Object.values(test)[0]) == "\"event\""){
                  CleverTap.recordEvent(Object.keys(test)[1],Object.values(test)[1]);
                  console.log(test);
                }
                else if (JSON.stringify(Object.values(test)[0]) == "\"onuserlogin\""){
                  CleverTap.onUserLogin(Object.values(test)[1]);
                  console.log(test);
                }
                else if (JSON.stringify(Object.values(test)[0]) == "\"profileset\""){
                  CleverTap.profileSet(Object.values(test)[1]);
                  console.log(test);
                }
              }
            }
          
            style={{ marginTop: 20 }}
          />
      </View>
  );
};
export default App;