(function () {
	var $button = document.querySelector('.js-tests-toggle'), 
	    $description = document.querySelectorAll('.js-description');

	$button.addEventListener('click', descriptionToggle);    

	 function descriptionToggle () {
		var cssValue;
        
        for (var i = 0; i < $description.length; i++) {
        	if ($description[i].style.display === 'none') {
        		cssValue = 'block';
        	}
        	else {
        		cssValue = 'none';
        	}
        	$description[i].style.display = cssValue;
        }

	};

})();