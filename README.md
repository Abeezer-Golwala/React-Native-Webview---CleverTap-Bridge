# React-Native-Webview-CleverTap-Bridge

Use the below code for making the page inside the webview.
https://github.com/Abeezer-Golwala/React-Native-Webview-CleverTap-Bridge/blob/master/Webview%20Page

When sending an event through webview mention the Type parameter as event and pass the event properties in json format as in the following code:
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"event",'Product Viewed': {'Product Name': 'Dairy Milk','Category': 'Chocolate','Amount': 20.00}}));

When sending an onuserlogin through webview mention the Type parameter as onuserlogin and pass the identities and communication pref in json format as in the following code:
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"onuserlogin",Payload:{'Name': 'Abctest', 'Identity': '9789', 'Email' : 'hello2@react.com', 'MSG-push':true, 'MSG-email':true,'MSG-sms':true, 'MSG-whatsapp':true}}));

When sending an profileset through webview mention the Type parameter as profileset and pass the userproperties and communication pref in json format as in the following code:
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"profileset",Payload:{'Gender': 'Male','test':'hello','test2':["hello","helloe"]}}));
