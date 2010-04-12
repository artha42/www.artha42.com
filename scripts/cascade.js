$(document).ready(function () {

	// Get total number of panels
	var totalPanels	= $(".panel").size();
	
	// Set speed for animation
	var speed = 350;
	
	// Set "padding" between panels
	var padding = 17;
	
	// Quick access to four "positions"
	var p1 = (padding * 0) + "px";
	var p2 = (padding * 1) + "px";
	var p3 = (padding * 2) + "px";
	var p4 = (padding * 3) + "px";
	
	// Start panel counter
	var curPanel = 1;
	
	// Set intital postions for first three panels
	$("#panel_"+1).css({"top" : p3, "left" : p3});
	$("#panel_"+2).css({"top" : p2, "left" : p2});
	$("#panel_"+3).css({"top" : p1, "left" : p1});						 
	
	// Reverse, Offset Initial Z-Index Settings, then show the panels
	$(".panel").each(function(i) {
		$(this).css({"z-index" : (totalPanels - i)})
		}).show();
	
	
	if (totalPanels == 1) {
		
		$(".slider-nav").hide();
		
	} else if (totalPanels == 2) {
		
        $(".slider-nav").click(function(){ flip(); });
	
	} else if (totalPanels > 2) {
	
		// When the left/right arrows are clicked, call appropriate functions
		$(".slider-right").click(function(){ change_right(); });	
		$(".slider-left").click(function(){ change_left(); });	
	
	}
	
	function flip() {
	
		var p1_zindex = $("#panel_"+1).css("z-index");
		var p1_pos = $("#panel_"+1).css("top");
		
		var p2_zindex = $("#panel_"+2).css("z-index");
		var p2_pos = $("#panel_"+2).css("top");
		
		$("#panel_1").css({"z-index" : p2_zindex}).animate({ top: p2_pos, left: p2_pos}, speed); 
		$("#panel_2").css({"z-index" : p1_zindex}).animate({ top: p1_pos, left: p1_pos}, speed); 	
	
	}
		

	// Change Right Function
	function change_right() {
	   	 
        // If loop is completed, reset curPanel to 1	
	    if (curPanel == totalPanels + 1) { curPanel = 1; }
		
		// Var to increment counter
		var next = curPanel + 1 
			
		// Animate First Three Slides
		$("#panel_"+curPanel).animate({ top: p1, left: p1}, 0);
		$("#panel_"+(curPanel+1)).animate({ top: p3, left: p3}, speed);
		$("#panel_"+(curPanel+2)).animate({ top: p2, left: p2}, speed);  
		

        // If pointer is at second to last, bring back first panel to back position
		if (curPanel == totalPanels - 1) {
		
			$("#panel_" + 1).animate({ top: p2, left: p2}, speed);
			
		} 
		
		// If pointer is at last panel, bring back first panel and second panel to second and third positions respectively
		if (curPanel == totalPanels) {
		
			$("#panel_" + 1).animate({ top: p3, left: p3}, speed);
			$("#panel_" + 2).animate({ top: p2, left: p2}, speed);
		
		}
		
		// Loop through each panel
	    $(".panel").each(function(i) {
			
			// Grab the z-index
			var zindex = parseInt($(this).css("z-index"));	
			
			if (zindex == totalPanels) {
				
				$(this).css({"z-index" : 1});
			
			} else {
			
				$(this).css({"z-index" : zindex + 1});
			
			}
		
		});
		
		curPanel = next;
		
	}
	
	// Change Left Function
	function change_left() {
	   	 
        // If loop is completed, reset curPanel to 1	
	    if (curPanel == totalPanels + 1) { curPanel = 1; }
		
		
		if (curPanel == 1) {
		
		// Var to increment counter
		var next = totalPanels;
		
		} else {
		
		var next = curPanel-1;
			
		}
			// Animate First Three Slides
			$("#panel_"+curPanel).animate({ top: p2, left: p2}, speed);
			$("#panel_"+(curPanel+1)).animate({ top: p1, left: p1}, speed);
			
			// If current panel is first panel
			if (curPanel == 1) {
			
			      // Bring last panel to front position
				$("#panel_"+totalPanels).css({"top" : p4, "left" : p4}).animate({ top: p3, left: p3}, speed);  
			
			} else {
				
				// Bring current panel minus 1 into front position
				$("#panel_"+(curPanel-1)).css({"top" : p4, "left" : p4}).animate({ top: p3, left: p3}, speed);
				
			}
		
		
		// If current panel is last panel, move first panel to back
        if (curPanel == totalPanels) {
		
			$("#panel_" + 1).animate({ top: p1, left: p1}, speed);
			
		} 
		
		// Loop through each panel
	    $(".panel").each(function(i) {
			
			// Grab the z-index
			var zindex = parseInt($(this).css("z-index"));	
			
			if (zindex == 1) {
				
				$(this).css({"z-index" : totalPanels});
			
			} else {
			
				$(this).css({"z-index" : zindex - 1});
			
			} 
		
		}); 
		
		curPanel = next;
		
	}
	
		
});