const subscriberCountEl = document.getElementById("subscriber-count");
const subscriberGoalEl = document.getElementById("subscriber-goal");
const goalIncrementValue = 10;

const calculateGoal = (subscriberPoints) => {

  	console.log('cal',(parseInt(subscriberPoints) / goalIncrementValue));
  
	const calcGoalMultiplier = Math.floor((parseInt(subscriberPoints) / goalIncrementValue));
    console.log(calcGoalMultiplier);
	let calcGoal = (calcGoalMultiplier * goalIncrementValue) + goalIncrementValue;
	return calcGoal;
}

window.addEventListener('onWidgetLoad', function (obj) {
    let data=obj["detail"]["session"]["data"];
	subscriberCountEl.innerHTML=data['subscriber-points'].amount;
	subscriberGoalEl.innerHTML=calculateGoal(data['subscriber-points'].amount);
});

window.addEventListener('onSessionUpdate', function (obj) {
    const data = obj.detail.session;
	subscriberCountEl.innerHTML=data['subscriber-points'].amount;
	subscriberGoalEl.innerHTML=calculateGoal(data['subscriber-points'].amount);
});
