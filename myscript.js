function listVideos(data) {
	console.log(data);
	
        var output ='';
        for (var i = 0; i<data.feed.entry.length; i++) {
            var title = data.feed.entry[i].title.$t;
	
           // var description = data.feed.entry[i].media$group.media$description.$t;
	
            var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
	
            //var id = data.feed.entry[0].id.$t.substring(38);
            
            var blocktype = ((i % 2) === 1) ? 'b':'a';
            
            output += '<div class="ui-block-' + blocktype + '">';
	    output += '<h3 class="movietitle">' + title + '</h3>';
            output += '<img src="' + thumbnail + '" alt="' + title + '" />';
            output +="</div>";
        }
        $('#videolist').html(output);
}
