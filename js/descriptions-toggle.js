(function () {
	var $button = document.querySelector('.js-tests-toggle'), 
	    $description = document.querySelectorAll('.js-description');

	$button.addEventListener('click', descriptionToggle);    

	 function descriptionToggle () {
		var ariaExpanded;
        
        for (var i = 0; i < $description.length; i++) {
        	if ($description[i].getAttribute('aria-expanded') === 'true') {
        		ariaExpanded = false;
        	}
        	else {
        		ariaExpanded = true;
        	}
        	$description[i].setAttribute('aria-expanded', ariaExpanded);
        }

	};

})();