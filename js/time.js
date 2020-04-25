$( function() {
	$.backstretch('img/road2.jpg');
	var endDate = "May  09, 2020 00:00:00";
	$('.countdown.simple').countdown({ 
		date: endDate 
	});
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Дней</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Часов</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Мин</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Сек</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
