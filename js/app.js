function calculateGrade(event) {
	const grip = $("#gripstrength").val();
	const weight = $("#weight").val();
	let experience = 0
	if ($('#experienceYears').val()) {
		experience += parseInt($('#experienceYears').val(), 10)
	}
	if ($('#experienceMonths').val()) {
		experience += parseInt($('#experienceMonths').val(), 10) / 12.0;
	}
	const sex = $("#sex option:selected").val();
	const gym = $("#gym option:selected").val();
	if (weight <= 0 || grip <= 0){
		alert("Enter valid weight and grip strength");
		return
	}
	let strengthX = 0;
	let expX = 0;
	let constVal = 0;
	if (experience > 0) {
		if (sex == 1) {
			if (gym == 1) {
				strengthX = 7.293;
				expX = 0.3267;
				constVal = 0.205;
			} else if (gym == 2) {
				strengthX = 7.6107;
				expX = 0.1711;
				constVal = 0.3257;
			} else if (gym == 3) {
				strengthX = 4.1014;
				expX = 0.4071;
				constVal = 1.7453;
			} else {
				strengthX = 6.9284;
				expX = 0.2845;
				constVal = 0.4089;
			}
		} else if (sex == 2) {
			if (gym == 1) {
				strengthX = 3.7869;
				expX = 0.3301;
				constVal = 0.9488;
			} else if (gym == 2) {
				strengthX = 6.8547;
				expX = 0.0286;
				constVal = 0.9488;
			} else if (gym == 3) {
				strengthX = 8.1627;
				expX = 0.4271;
				constVal = -1.1792;
			} else {
				strengthX = 7.0362;
				expX = 0.196;
				constVal = -0.551;
			}
		} else {
			if (gym == 1) {
				strengthX = 7.9731;
				expX = 0.2995;
				constVal = -0.4224;
			} else if (gym == 2) {
				strengthX = 8.2801;
				expX = 0.1109;
				constVal = 0.0055;
			} else if (gym == 3) {
				strengthX = 5.3331;
				expX = 0.418;
				constVal = 0.7618;
			} else {
				strengthX = 7.8652;
				expX = 0.2444;
				constVal = -0.2737;
			}
		}
	} else {
		if (sex == 1) {
			if (gym == 1) {
				strengthX = 8.7319;
				constVal = 0.1882;
			} else if (gym == 2) {
				strengthX = 7.2253;
				constVal = 0.6394;
			} else if (gym == 3) {
				strengthX = 7.2253;
				constVal = 0.6394;
			} else {
				strengthX = 8.389;
				constVal = 0.2589;
			}
		} else if (sex == 2) {
			if (gym == 1) {
				strengthX = 7.5164;
				constVal = 0.2498;
			} else if (gym == 2) {
				strengthX = 6.8517;
				constVal = 1.0694;
			} else if (gym == 3) {
				strengthX = 12.5933;
				constVal = -3.0116;
			} else {
				strengthX = 8.9047;
				constVal = -0.5219;
			}
		} else {
			if (gym == 1) {
				strengthX = 9.3503;
				expX = -0.4262;
			} else if (gym == 2) {
				strengthX = 8.4363;
				expX = 0.3211;
			} else if (gym == 3) {
				strengthX = 8.73;
				expX = -0.5076;
			} else {
				strengthX = 9.1876;
				expX = 0.2947;
			}
		}
	}
	const answer = (grip / weight) * strengthX + (experience * expX) + constVal;
	$(".calculatorResults").slideDown();
	$("#calculatedGrade").text(answer.toFixed(2));
	$("#calculatedGrade").scramble(2000,10,"numbers",true);
}
$(".calculatorResults").hide();