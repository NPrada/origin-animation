var letterO1 = document.querySelector('#o1');

function runAnim (){
  var animDuration = 1500
	var translateLetterBY = 10
	
	var letterDisapperDur = 300;
	var circleMove = 300
	var circleMoveDelayOffset = 30 
	var circleExpand = 200

	anime({
		targets: '#n1',
		translateX: -translateLetterBY,
		opacity: 0,
		duration: letterDisapperDur/5,
		delay: letterDisapperDur/5*0,
		easing: 'linear'
	});
	anime({
		targets: '#i2',
		translateX: -translateLetterBY,
		opacity:0,
		duration: letterDisapperDur/5,
		delay: letterDisapperDur/5*1,
		easing: 'linear'
	});
	anime({
		targets: '#g1',
		translateX: -translateLetterBY,
		opacity:0,
		duration: letterDisapperDur/5,
		delay: letterDisapperDur/5*2,
		easing: 'linear'
	});
	anime({
		targets: '#i1',
		translateX: -translateLetterBY,
		opacity:0,
		duration: letterDisapperDur/5,
		delay: letterDisapperDur/5*3,
		easing: 'linear'
	});
	anime({
		targets: '#r1',
		translateX: -translateLetterBY,
		opacity:0,
		duration: letterDisapperDur/5,
		delay: letterDisapperDur/5*4,
		easing: 'linear'
	});
	anime({
		targets: '#oGroup',
		translateX: 40,
		duration: circleMove,
		delay: letterDisapperDur - circleMoveDelayOffset,
		easing: 'easeOutSine'
	});

	anime({
		targets: '#oCircle1',
		r: 15,
		opacity: 0.7,		
		duration: circleExpand*2,
		delay: letterDisapperDur - circleMoveDelayOffset + circleMove,
		easing: 'easeOutSine'
	});

	anime({
		targets: '#oCircle2',
		r: 20,
		opacity: 0.4,
		duration: circleExpand*2,
		delay: letterDisapperDur - circleMoveDelayOffset + circleMove,
		easing: 'easeOutSine'
	});

	anime({
		targets: '#oCircle3',
		r: 25,
		opacity: 0,		
		duration: circleExpand,
		delay: letterDisapperDur - circleMoveDelayOffset + circleMove,
		easing: 'easeOutSine'
	});

	anime({
		targets: '#oCircle4',
		r: [{value: 20, duration: circleExpand-20},
				{value: 25, duration: circleExpand/2}
			],
		opacity: [{value: 0.4, duration: circleExpand},
							{value: 0, duration: circleExpand/2}
			],		
		delay: letterDisapperDur - circleMoveDelayOffset + circleMove,
		easing: 'easeOutSine'
	});
}

setTimeout(runAnim,2000)



function makeCirclePath (cx, cy, r) {
	console.log(`
M ${cx} ${cy}
m -${r}, 0
a ${r},${r} 0 1,0 ${r*2},0
a ${r},${r} 0 1,0 -${r*2},0
`)
	return `
	 	M ${cx} ${cy}
		m -${r}, 0
		a ${r},${r} 0 1,0 ${r*2},0
		a ${r},${r} 0 1,0 -${r*2},0
	`
}

// makeCirclePath(9,19, 9)