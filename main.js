var $body = $('body'),
	$panel = $('.container'),
	$TextContent = $('.content-text'),
	$img = $('.imgC');

function initAnim() {
	TweenMax.set([$TextContent, $img], { transformStyle: "preserve-3d" });

	$body.mousemove(function(e) {
		anim(e.pageX, e.pageY) 
	});
};

function anim(cx, cy) {
	var sxPos = (cx / $body.width()*100 - 50)*2 ;
	var syPos = (cy / $body.height()*100 - 50)*2;
	TweenMax.to($TextContent, 2, {
		rotationY: -0.03 * sxPos,
		rotationX: 0.03 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -700",
		ease: Expo.easeOut
	});
	TweenMax.to($img, 2, {
		rotationY: -0.04 * sxPos,
		rotationX: 0.04 * syPos,
		transformPerspective: 500,
		transformOrigin: "center center -350",
		ease: Expo.easeOut
	});
}

$body.mouseleave(function() {
	anim($body.width()/2, $body.height()/2);
})

initAnim();
