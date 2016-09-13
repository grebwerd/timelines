jQuery(document).ready(function($){

	var htmlElementEnum = Object.freeze({'div': 'div', 'a': 'a', 'li': 'li', 'ul': 'ul', 'ol':'ol'});

	initTimeLine();

	function initTimeLine(){
		displayCreateTimelineButton(isTimelinePresent());
	}

	function displayCreateTimelineButton(isTimeLinePresent){
		if(isTimeLinePresent){
			$('.create_timeline').hide();
		}
		else{
			$('.create_timeline').show();
		}
	}

	function isTimelinePresent(){
		if($('.timelines').children().length){
			return true;
		}
		return false;
	}

	$('.create_timeline').on('click', function(){
	
		createTimeLine();
	});
		

	function createTimeLine(){

		var timeline = initializeElementNode(htmlElementEnum.div, 'timeline');
		appendChildNode('timelines',timeline);

		var eventswrapper = initializeElementNode(htmlElementEnum.div, 'events-wrapper');
		appendChildNode('timeline', eventswrapper);

		var events = initializeElementNode(htmlElementEnum.div, 'events');
		appendChildNode('events-wrapper', events);
		
		 createEventOrganizedList();
		
		
		var fillingLine = initializeElementNode(htmlElementEnum.div, 'filling-line');
		appendChildNode('events', fillingLine);


		
		createNavigationButtons();

		$('.create_timeline').hide();
	}

	function initializeElementNode(elementType, className){
		var elementNode = document.createElement(elementType);
		elementNode.className = className;
		return elementNode;
	}
	
	function createElementNode(elementType){
		return document.createElement(elementType);
	}

	function createNavigationButtons(){
		var ulNavigationButtons = initializeElementNode(htmlElementEnum.ul, 'cd-timeline-navigation');
		var liPrev = initializeElementNode(htmlElementEnum.li, 'prev inactive');
		var anchorPrev = initializeElementNode( htmlElementEnum.a, 'Prev');

		appendChildNode('timelines', ulNavigationButtons);
		appendChildNode('cd-timeline-navigation', liPrev);
		appendChildNode('prev inactive', anchorPrev);
		
		
		
		var liNext = initializeElementNode(htmlElementEnum.li, 'next active');
		var anchorNext = initializeElementNode( htmlElementEnum.a, 'next');

		appendChildNode('cd-timeline-navigation', liNext);
		appendChildNode('next', anchorNext);
	}
	
	
	function createEventOrganizedList(){
		var organizedListEvent = initializeElementNode(htmlElementEnum.ol, 'organizedListEvent');
		appendChildNode('events', organizedListEvent);
		
		var event = createEvent("01/01/2016", "01 Jan");
		appendChildNode('organizedListEvent', event);
	}
	
	function createEvent(dataDate, innerHtmlText){
		var liEvent = initializeElementNode(htmlElementEnum.li, 'listItemEvent');
		var anchorEvent = initializeEventAnchor(dataDate, innerHtmlText);

		appendChildNode('organizedListEvent', liEvent);
		liEvent.appendChild(anchorEvent);
		return liEvent;
		
	}
	
	function initializeEventAnchor(dataDate, innerHtmlText){
		var anchorElement = createElementNode(htmlElementEnum.a);
		var anchorAttribute = document.createAttribute('data-date');
		anchorAttribute.value = dataDate;
		anchorElement.setAttributeNode(anchorAttribute);
		anchorElement.innerHtml = "01 Jan"
	    return anchorElement;
	}

	function appendChildNode(parentNodeClassName, childNode){
		document.getElementsByClassName(parentNodeClassName)[0].appendChild(childNode);
	}
	
	
});


