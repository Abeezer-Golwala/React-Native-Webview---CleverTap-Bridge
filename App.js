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
              const clevertapdata = JSON.parse(event.nativeEvent.data);
              console.log(clevertapdata.Type);
              //checking the type of the data recieved from webview if its an event, onuserlogin or profile set data.
                if (JSON.stringify(clevertapdata.Type) == "\"event\""){
                  CleverTap.recordEvent(clevertapdata.EventName,clevertapdata.Payload);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.Payload));
                }
                else if (JSON.stringify(clevertapdata.Type) == "\"onuserlogin\""){
                  CleverTap.onUserLogin(clevertapdata.Payload);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.Payload));
                }
                else if (JSON.stringify(clevertapdata.Type) == "\"profileset\""){
                  CleverTap.profileSet(clevertapdata.Payload);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.Payload));
                }
                else if (JSON.stringify(clevertapdata.Type) == "\"chargedevent\""){
                  CleverTap.recordChargedEvent(clevertapdata.chargedetails, clevertapdata.items);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.chargedetails)+"\n"+JSON.stringify(clevertapdata.items));
                }
                else if (JSON.stringify(clevertapdata.Type) == "\"profileSetMultiValuesForKey\""){
                  CleverTap.profileSetMultiValuesForKey(clevertapdata.values, clevertapdata.key);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.key)+"\n"+JSON.stringify(clevertapdata.values));
                }
                else if (JSON.stringify(clevertapdata.Type) == "\"profileRemoveMultiValueForKey\""){
                  CleverTap.profileRemoveMultiValueForKey(clevertapdata.value, clevertapdata.key);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.key)+"\n"+JSON.stringify(clevertapdata.value));
                }
                else if (JSON.stringify(clevertapdata.Type) == "\"profileAddMultiValueForKey\""){
                  CleverTap.profileAddMultiValueForKey(clevertapdata.value, clevertapdata.key);
                  console.log(JSON.stringify(clevertapdata.Type)+"\n"+JSON.stringify(clevertapdata.key)+"\n"+JSON.stringify(clevertapdata.value));
                }
              }
            }
            style={{ marginTop: 20, flex:1 }}
          />
      </View>
  );
};
export default App;