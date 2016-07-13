document.addEventListener('DOMContentLoaded', function(e) {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		var href = link.getAttribute('href');

		if ( href.match(/^https?:\/\//) ) {
			link.setAttribute('target', '_blank');
		}
	}
});
