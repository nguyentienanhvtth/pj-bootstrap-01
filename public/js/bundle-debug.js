jQuery(document).ready(function(){
   $('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  percentPosition: true,
		columnWidth: '.grid-item'
	});
});
