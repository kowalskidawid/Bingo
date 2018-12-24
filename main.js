var czas_wylosowania, trafien = 0, karta;
$(document).ready(function () {
	karta = $(".liczba");
	setInterval(czas,1);
	$("#koniec").hide();
	$("#karta").hide();
	$("#losowanie").hide();
	var poczotek_przedzialu = 1;
	var koniec_przedzialu = 15;
	for(j = 5; j <= 10; j++) {
		for(i = j; i <= 35; i+=5) {
			$(karta[i]).html(Math.floor(Math.random()*(koniec_przedzialu-poczotek_przedzialu) + poczotek_przedzialu));
		}
		poczotek_przedzialu +=15;
		koniec_przedzialu += 15;
	}

	for(let i = 1; i <= 35; i++) {
		$(karta[i]).on("click", function() {zaznacz(i)});
	}
	$("#start_button").click(function() {
		$("#karta").show();
		$("#losowanie").show();
		$("#start_button").html("Zacznij od nowa");
		losuj();
	});
	$("#od_nowa").click(function() {location.reload(true)});
});

function zaznacz(a) {
	console.log(a);
	var zaznaczona = 1;
	var wylosowana = $("#losowanie").html();
	if(wylosowana == zaznaczona) {
		trafien++;
		$("#l" + a).css("background-image", "url(trafienie.png)");
		$("#l" + a).css("pointer-events", "none");
		if(trafien == 25) {
			$("#karta").hide();
			$("#czas").hide();
			$("#losowanie").hide();
			$("#koniec").show();
		}
	}
}
function czas() {
	czas_aktualny = new Date();
	ile_procent = Math.floor((czas_aktualny-czas_wylosowania)/50);
	$("#aktualny").css("width", ile_procent + "%");
	if(ile_procent == 100) losuj();

}
function losuj() {
		czas_wylosowania = new Date();
	$("#losowanie").html(Math.floor(Math.random()*74+1));
}
