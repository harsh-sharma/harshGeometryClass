// Class Javascript
/**********************************video chat (start)*******************************/

var apiKey = '14463211';
var sessionId = '1_MX4xMjMyMDgxfjcwLjQyLjQ3Ljc4fjIwMTItMDQtMjEgMDg6MjQ6MzQuMjI3NzE3KzAwOjAwfjAuMzYwNTY1OTcxMDExfg';
var token = 'devtoken';          
 
TB.setLogLevel(TB.DEBUG);    

var session = TB.initSession(sessionId);     
session.addEventListener('sessionConnected', sessionConnectedHandler);
session.addEventListener('streamCreated', streamCreatedHandler);     
session.connect(apiKey, token);

var publisher;

function sessionConnectedHandler(event) {
  publisher = session.publish('myPublisherDiv');
   alert("Welcome to online Harsh Geometry Class.");
  // Subscribe to streams that were in the session when we connected
  subscribeToStreams(event.streams);
}
 
function streamCreatedHandler(event) {
  // Subscribe to any new streams that are created
  
  subscribeToStreams(event.streams);
}
 
function subscribeToStreams(streams) {
  for (var i = 0; i < streams.length; i++) {
	// Make sure we don't subscribe to ourself
	if (streams[i].connection.connectionId == session.connection.connectionId) {
	  return;
	}
	alert("new person connected.")
	// Create the div to put the subscriber element in to
	var div = document.createElement('div');
	div.setAttribute('id', 'stream' + streams[i].streamId);
	document.getElementById("others").appendChild(div);
					   
	// Subscribe to the stream
	session.subscribe(streams[i], div.id);
  }
}
/**********************************video chat (end)*******************************/

/**********************************Live chat (start)*******************************/

var __lc = {};
__lc.license = 1194031;

(function() {
  var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
  lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
})();
/**********************************Live chat (end)*******************************/