# React-Native-Webview-CleverTap-Bridge

Use the below code for making the page inside the webview.

https://github.com/Abeezer-Golwala/React-Native-Webview-CleverTap-Bridge/blob/master/Webview%20Page

**PushEvent**<br/>
When sending an event through webview mention the Type parameter as event and pass the event properties with key name as Payload in json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"event",EventName : 'Product Viewed', Payload: {'Product Name': 'Dairy Milk','Category': 'Chocolate','Amount': 20.00}}));

**OnUserLogin**<br/>
When sending an onuserlogin through webview mention the Type parameter as onuserlogin and pass the identities and communication pref with key name as Payload in  json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"onuserlogin",Payload:{'Name': 'Abctest', 'Identity': '9789', 'Email' : 'hello2@react.com', 'MSG-push':true, 'MSG-email':true,'MSG-sms':true, 'MSG-whatsapp':true}}));

**ProfileSet**<br/>
When sending a profileset through webview mention the Type parameter as profileset and pass the userproperties and communication pref with key name as Payload  in json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"profileset",Payload:{'Gender': 'Male','test':'hello','test2':["hello","helloe"]}}));

**ChargedEvent**<br/>
When sending a ChargedEvent through webview mention the Type parameter as chargedevent, pass the Charged Details with key name as chargedetails & charged item details with key name as items in json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"chargedevent",chargedetails:{'totalValue': 20, 'category': 'books'},items:[{'title': 'book1'}, {'title': 'book2'}, {'title': 'book3'}]}));

**profileSetMultiValuesForKey**<br/>
When sending a profileSetMultiValuesForKey through webview mention the Type parameter as profileSetMultiValuesForKey, pass the Values of the key with key name as values & key with key name as key in json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"profileSetMultiValuesForKey",values:['a','b','c'],key:'letters'}));

**profileSetMultiValuesForKey**<br/>
When sending a profileRemoveMultiValueForKey through webview mention the Type parameter as profileRemoveMultiValueForKey, pass the Value you want to reomve from the key with key name as value & key with key name as key in json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"profileRemoveMultiValueForKey",value:'b',key:'letters'}));

**profileSetMultiValuesForKey**<br/>
When sending a profileAddMultiValueForKey through webview mention the Type parameter as profileAddMultiValueForKey, pass the Value you want to reomve from the key with key name as value & key with key name as key in json format as in the following code:<br/>
window.ReactNativeWebView.postMessage(JSON.stringify({Type:"profileAddMultiValueForKey",value:'d',key:'letters'}));
