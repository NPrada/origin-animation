var letterO1 = document.querySelector('#o1');

var translateLetterBY = 10

var letterDisapperDur = 300;
var circleMoveDur = 300
var circleMoveDelayOffsetDur = 30
var circleExpandDur = 200


const animateSection1 = (isReversed) => {
 	anime({
		targets: '#n1',
		translateX: isReversed ? 0 : -translateLetterBY,
		opacity: isReversed ? 1 : 0,
		duration: letterDisapperDur / 5,
		easing: 'linear',
	});
}

const animateSection2 = (isReversed) => {
	anime({
		targets: '#i2',
		translateX: isReversed ? 0 : -translateLetterBY,
		opacity: isReversed ? 1 : 0,
		duration: letterDisapperDur / 5,
		easing: 'linear'
	});
}
const animateSection3 = (isReversed) => {
	anime({
		targets: '#g1',
		translateX: isReversed ? 0 : -translateLetterBY,
		opacity: isReversed ? 1 : 0,
		duration: letterDisapperDur / 5,
		easing: 'linear'
	});
}
const animateSection4 = (isReversed) => {
	anime({
		targets: '#i1',
		translateX: isReversed ? 0 : -translateLetterBY,
		opacity: isReversed ? 1 : 0,
		duration: letterDisapperDur / 5,
		easing: 'linear'
	});
}

const animateSection5 = (isReversed) => {
	anime({
		targets: '#r1',
		translateX: isReversed ? 0 : -translateLetterBY,
		opacity: isReversed ? 1 : 0,
		duration: letterDisapperDur / 5,
		easing: 'linear'
	});
}

const animateSection6 = (isReversed) => {
	if(!isReversed){
		anime({
			targets: '#oGroup',
			translateX: [0,40],
			duration: circleMoveDur,
			delay: letterDisapperDur - circleMoveDelayOffsetDur,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle1',
			r: [7.1,15],
			opacity: [1, 0.7],
			duration: circleExpandDur * 2,
			delay: letterDisapperDur - circleMoveDelayOffsetDur + circleMoveDur,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle2',
			r: [7.1,20],
			opacity: [1, 0.4],
			duration: circleExpandDur * 2,
			delay: letterDisapperDur - circleMoveDelayOffsetDur + circleMoveDur,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle3',
			r: [7.1,25],
			opacity: [1, 0],
			duration: circleExpandDur,
			delay: letterDisapperDur - circleMoveDelayOffsetDur + circleMoveDur,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle4',
			r: [{ value: 20, duration: circleExpandDur - 20 },
			{ value: 25, duration: circleExpandDur / 2 }
			],
			opacity: [{ value: 0.4, duration: circleExpandDur },
			{ value: 0, duration: circleExpandDur / 2 }
			],
			delay: letterDisapperDur - circleMoveDelayOffsetDur + circleMoveDur,
			easing: 'easeOutSine'
		});
	} 
	else {
		anime({
			targets: '#oGroup',
			translateX: [40,0],
			duration: circleMoveDur,
			delay: letterDisapperDur - circleMoveDelayOffsetDur + circleMoveDur,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle1',
			r: [15,7.1],
			opacity: [0.7, 1],
			duration: circleExpandDur * 2,
			delay: letterDisapperDur - circleMoveDelayOffsetDur ,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle2',
			r: [20,7.1],
			opacity: [0.4, 1],
			duration: circleExpandDur * 2,
			delay: letterDisapperDur - circleMoveDelayOffsetDur,
			easing: 'easeOutSine'
		});
	
		anime({
			targets: '#oCircle3',
			r: [25,7.1],
			opacity: [0, 1],
			duration: circleExpandDur,
			delay: letterDisapperDur - circleMoveDelayOffsetDur,
			easing: 'easeOutSine'
		});
	}
	
}


animateSection1(false)
animateSection2(false)
animateSection3(false)
animateSection4(false)
animateSection5(false)
animateSection6(false)



setTimeout(function() {
	animateSection6(true)
},1000)

