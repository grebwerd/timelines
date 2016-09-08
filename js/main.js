jQuery(document).ready(function($){

	initTimeLine();

	function initTimeLine(){
		displayCreateTimelineButton(isTimelinePresent());

	}

	function displayCreateTimelineButton(isTimeLinePresent){
		if(isTimeLinePresent){
			$('.create_timeline').hide();
		//	window.alert("There are timelines");
		}
		else{
			$('.create_timeline').show();
		//	window.alert("There are no timelines");
		}
	}

	function isTimelinePresent(){
		if($('.timelines').children().length){
			return true;
		}
		return false;
	}

	$('.create_timeline').on('click', function(){
		//window.alert("create timeline clicked");
		createTimeLine();
	});

	function createTimeLine(){
		var timeline = document.createElement('div');
		timeline.className="timeline1"
		var timelines = document.getElementsByClassName('timelines');
		timelines[0].appendChild(timeline);
		$('.create_timeline').hide();
	}

});


