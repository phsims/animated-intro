/*
Scripts File
Author: Pam Halligan-Sims
Author URI: http://fireflywebsites.co.uk/


*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
    window.getComputedStyle = function(el, pseudo) {
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        }
        return this;
    }
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it, so be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
        
    } /* end larger than 481px */
    
    /* if is above or equal to 768px */
    if (responsive_viewport >= 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
	// add all your scripts here
	
 
}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );
 


jQuery(window).bind("load", function() {

    var wHeight = jQuery(window).height(),
        loadHMax = ((wHeight / 100) * 80).toFixed(0);

    jQuery('#loadBg').attr('style', ('max-height:' + loadHMax + 'px;'));

    shrink();
});

function shrink() {

    jQuery('.counterSpan').each(function () {
        var countWrap = jQuery('#countWrap').width(),
		    spanWidth = jQuery('#loadBg').width(),
			wHeight = jQuery(window).height(),
			loadH = jQuery('#loadWrap').height(),
			loadC = ((wHeight - loadH) / 2).toFixed(0),
            newFontSize = spanWidth / 2.4,
			clCenter = countWrap - spanWidth,
			absCenter = (clCenter / 2).toFixed(0)
			lineHeight = (absCenter/ 1.4).toFixed(0);
		
		jQuery('#loadWrap').attr('style', ('margin:' + loadC + 'px auto;opacity: 1;'));
		jQuery('#countLine').attr('style', ('left:' + absCenter + 'px;'));
        jQuery('.counterSpan').css({"font-size": newFontSize, "line-height": "80%;"});
		
    });
}



window.onload = function (){

	var countTimeline = new TimelineMax({onComplete:loop});
	
	countTimeline.to("#countLine", 1, {rotation:360 , ease:Linear.easeNone})
	.to(".five", 0, {opacity: 0})
	.to(".four", 0, {opacity:1})
	.to("#countLine", 0, {rotation:0})
	.to("#countLine", 1, {rotation:360 , ease:Linear.easeNone})
	.to(".four", 0, {opacity: 0})
	.to(".three", 0, {opacity:1})
	.to("#countLine", 0, {rotation:0})
	.to("#countLine", 1, {rotation:360 , ease:Linear.easeNone})
	.to(".three", 0, {opacity: 0})
	.to(".two", 0, {opacity:1})
	.to("#countLine", 0, {rotation:0})
	.to("#countLine", 1, {rotation:360 , ease:Linear.easeNone})
	.to(".two", 0, {opacity: 0})
	.to(".one", 0, {opacity:1})
	.to("#countLine", 0, {rotation:0})
	.to("#countLine", 1, {rotation:360 , ease:Linear.easeNone}, "start")
	.to("#loadWrap", 0, {opacity: 0, visible:false, height:0, width:0, margin:0})
	.to('.mainAnim div', 0, {opacity: 1, visible:true, height:100 + '%', top:0})
	.to('.mainAnim', 0, {opacity: 1, visible:true, height:100 + '%', top:0});
	
	
	//countTimeline.seek("start");

	
}

function loop(){

	centerAnim();
	var loopTimeline = new TimelineMax({onComplete:infiniteloop});
	
	loopTimeline.to(".logo", 1, {opacity: 1}, "startLoop")
	.to(".star1", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone}, "stars")
	.to(".star1", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone}, "starsend")
	.to(".star3", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone})
	.to(".star3", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone})
	.to(".star2", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:0.75}, "stars")
	.to(".star2", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:0.75}, "starsend")
	.to(".star5", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:0.5}, "stars")
	.to(".star5", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:0.5}, "starsend")	
	.to(".star4", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone})
	.to(".star4", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone})	
	.to(".star3", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone}, "stars")
	.to(".star3", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone}, "starsend")
	.to(".star4", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:1.25}, "stars")
	.to(".star4", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:1.25}, "starsend")
	.to(".star6", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:2}, "stars")
	.to(".star6", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:2}, "starsend")	
	.to(".star5", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone}, "stars")
	.to(".star5", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone}, "starsend")
	.to(".star2", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone})
	.to(".star2", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone})	
	.to(".star6", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:2.5}, "stars")
	.to(".star6", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:2.5}, "starsend")	
	.to(".star4", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:1.75}, "stars")
	.to(".star4", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:1.75}, "starsend")	
	.to(".star3", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone})
	.to(".star3", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone})
	.to(".star1", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:1.5}, "stars")
	.to(".star1", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:1.5}, "starsend")
	.to(".star6", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone, delay:1}, "stars")
	.to(".star6", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone, delay:1}, "starsend")	
	.to(".star1", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone})
	.to(".star1", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone})
	.to(".star6", 1, {rotation:"+=180", opacity: 1, scale:1, ease:Linear.easeNone})
	.to(".star6", 1, {rotation:"+=180", opacity: 0, scale:0, ease:Linear.easeNone})	
	.to(".wheel", 15, {rotation:"+=360" , ease:Linear.easeNone}, "startLoop")
	.to(".goldwheel", 15, {rotation:"+=1080" , ease:Linear.easeNone}, "startLoop");	
	

}

function centerAnim() {
       var wHeight = jQuery(window).height(),
		animH = jQuery('.wheel').height(),
		animC = (wHeight - animH),
		animAbsC = (animC / 2).toFixed(0);
		
	jQuery('.mainAnim').attr('style', ('margin:' + animAbsC+ 'px auto;'));

}

function infiniteloop(){ 
	 loop();
}

jQuery(document).ready(function() {
	
	
	jQuery('.sixcol.first')
		.mouseenter(function() {
			var tl1in = new TimelineMax();
			tl1in.to(".sixcol.first", 0.5, {scale:1.2}, "hover")
			.to(".sixcol.last", 0.5, {scale:0.8}, "hover")
		})
		
		.mouseleave(function() {
			var tl1out = new TimelineMax();
			tl1out.to(".sixcol.first", 0.5, {scale:1}, "hover")
			.to(".sixcol.last", 0.5, {scale:1}, "hover")
		});

	jQuery('.sixcol.first').change(function(e) {
		jQuery('.sixcol.first').trigger('mouseleave');
	});

	jQuery('.sixcol.last')
		.mouseenter(function() {
			var tl2in = new TimelineMax();
			tl2in.to(".sixcol.last", 0.5, {scale:1.2}, "hover")
			.to(".sixcol.first", 0.5, {scale:0.8}, "hover")
		})
		
		.mouseleave(function() {
			var tl1out = new TimelineMax();
			tl1out.to(".sixcol.last", 0.5, {scale:1}, "hover")
			.to(".sixcol.first", 0.5, {scale:1}, "hover")
		});

	jQuery('.sixcol.last').change(function(e) {
		jQuery('.sixcol.last').trigger('mouseleave');
	});
	
});