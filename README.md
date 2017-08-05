# Ga-mobile-connection-type

Send to Google Analytics how many Andoid Chrome mobile users uses your website in WIFI / 4G / 3G Fast / 3G SLOW / 2G. 

Send to GA the Time to first byte / Time to fist paint / Loadtime of the **first landing** others page view (with cache) will be ignored. 

This code uses the netinfo API ( [only available in Andoid + Chrome >= 59](https://caniuse.com/#search=netinfo) ), **so this will not track all your mobile sessions** but you can extrapolate those numbers to have a good idea of the connectivity used across your website. 

**Mobile emulation with chrome dev tool will not fire the code [only available in Andoid + Chrome >= 59](https://caniuse.com/#search=netinfo)** 
For debugging purposes please use the remote USB debugger.


## How this works ? 

* When the mobile user loads the landing page we check if we can detect his connection type.
* If we have his connection type we send to GA an event 
* We save the loading Time to first byte / Time to fist paint / Loadtime  by sending it to GA via the User timing API 
* We put a cookie to the user to don't send the loading time on the following pages ( with browser caching )

### What's 3G / 4G ... 

I grouped the "similar connection' as follow : 

![3G Slow](https://img4.hostingpics.net/pics/852978ScreenShot20170805at24519PM.png)



## Onsite Setup 

Copy paste the content of the ```build/GaMobileConnectionType.min.js``` just after the ```ga('send','pageview')``` function

```html 
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-45800571-1', 'auto');
	ga('send', 'pageview');

	// Paste the content of build/GaMobileConnectionType.min.js here    
</script>
```
 
 ## Google Analytics Setup 
 
 ### Add a new Goal ( event tracking ) 
 
 * Go to Admin -> View -> Goal
 * Create a new custom goal.
 * Give a name to your custom goal
 * Select event
 * Only add the category ```connectivity``` 
 
 
 ![add goal demo](http://g.recordit.co/EeHRyN5gQh.gif "add goal demo")
 
 
 ### Create custom segments 
 
 ### Wifi 
 
 ![wifi segment](https://img4.hostingpics.net/pics/721278ScreenShot20170805at102905AM.png)
 
  ### 4G
 
 ![4G segment](https://img4.hostingpics.net/pics/954931GEe2hHP.png)
 
 
 Do the same with other connection type ( 2G / 3G / H + ) ( check the table for all the labels name)
 
 
## Analyze your datas 

Use the custom segement to filter your datas. 

Here I can see the split of my users based on the location and connectivity 

![split](https://img4.hostingpics.net/pics/475243GEe5dZ2.png)



## Dev 

If you are a simple user you can't stop reading that. 

### To setup a dev environement 

```npm install``` 

### To build

```grunt watch``` 

### To run the tests

```npm test```  