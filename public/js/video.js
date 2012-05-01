function loadVideo(playerUrl, title, autoplay) {
	document.getElementById('title').innerHTML = title
  swfobject.embedSWF(
	  playerUrl + '&rel=1&border=0&fs=1&autoplay=' + 
	  (autoplay?1:0), 'player', '560', '315', '9.0.0', false, 
	  false, {allowfullscreen: 'true'});
}

function showMyVideos(data) {
	var feed = data.feed;
	var entries = feed.entry || [];
	var html = ['<ul class="videos">'];
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i];
		if(entry.title.$t.length > 25){
			var title = entry.title.$t.substr(0, 25) + '...';
		}else{
			var title = entry.title.$t;
		}
		var fulltitle = entry.title.$t;
		var thumbnailUrl = entry.media$group.media$thumbnail[0].url;
		var playerUrl = entry.media$group.media$content[0].url;
		var author = entry.author[0].name.$t;
		var viewCount = entry.yt$statistics.viewCount;
		
		html.push('<li>');
		html.push('<table><tr>');
		html.push('<td><img src="', thumbnailUrl, '" width="130" height="97" onclick="loadVideo(\'', playerUrl, '\',\'', fulltitle, '\', true)"/></td>');
		html.push('<td valign=\'top\'><h3 title="', fulltitle ,'" onclick="loadVideo(\'', playerUrl, '\',\'', fulltitle, '\', true)">', title, '</h3>');
		html.push('<p>by ', author, '<br/>');
		html.push(viewCount, ' views</p>');
		html.push('</td>');
		html.push('</tr></table>');
		html.push('</li>');
	}
	html.push('</ul><br style="clear: left;"/>');
	document.getElementById('videos').innerHTML = html.join('');
	if (entries.length > 0) {
	loadVideo(entries[0].media$group.media$content[0].url, entries[0].title.$t, false);
	}
}