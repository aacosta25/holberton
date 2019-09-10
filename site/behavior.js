document.addEventListener("DOMContentLoaded", function(event) {

  
	// Javascript Challenge
	var thumbnailElement = document.getElementById("smart_thumbnail");

		thumbnailElement.addEventListener("click", function() {
			thumbnailElement.className = "";

		if (thumbnailElement.className == "") {
			thumbnailElement.addEventListener("click", function() {
				thumbnailElement.className = "small";
			});
			

		}
	});// Click event ends

	});// End Script

	/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = http://54.242.249.117/index.html;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://http-54-242-249-117.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();







