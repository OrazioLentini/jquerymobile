function listVideos(data) {
  console.log(data);
	//Title
	console.log(data.feed.entry[0].title.$t);
	
	//Description
	console.log(data.feed.entry[0].media$group.media$description.$t);
	
	//Thumbnail
	console.log(data.feed.entry[0].media$group.media$thumbnail[0].url);
	
	//ID
	console.log(data.feed.entry[0].id.$t.substring(38));
}
