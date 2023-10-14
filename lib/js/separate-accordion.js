(function ($) {
	function setCookie(name, value) {
		document.cookie = name + '=' + value + '; path=/';
	}

	// Function to remove a cookie by name
	function removeCookie(name) {
		document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	}

	// Function to get the value of a cookie by name
	function getCookie(name) {
		var nameEQ = name + '=';
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			while (cookie.charAt(0) == ' ') {
				cookie = cookie.substring(1, cookie.length);
			}
			if (cookie.indexOf(nameEQ) == 0) {
				return cookie.substring(nameEQ.length, cookie.length);
			}
		}
		return null;
	}
	
	var yesCount = 0;
	var noCount = 0;

	$('.feedback-btn-wrap .feedback-btn').click(function () {
		var dataId 			= $(this).data('id');		
		var value 			= $(this).data('value'); 

		if (getCookie('feedback_' + dataId) ) {
			setTimeout(function () {
				$('body').append('<div class="aagb-feedback-thankyou">You have already voted</div>');
			}, 500);
			setTimeout(function () {$('.aagb-feedback-thankyou').remove();}, 3000);
		} else {

		var existingCookie 	= getCookie('feedback_' + dataId);

		if (existingCookie === value) {
			removeCookie('feedback_' + dataId);			
			$(this).removeClass('active');			
			if (value === 'yes') {
				yesCount--;
			} else if (value === 'no') {
				noCount--;
			}
		} else {			
			oppositeCookie = getCookie('feedback_' + dataId);
			if (oppositeCookie) {
				removeCookie('feedback_' + dataId);				
				if (oppositeCookie === 'yes') {
					yesCount--;
				} else if (oppositeCookie === 'no') {
					noCount--;
				}
			}
				
			setCookie('feedback_' + dataId, value);	

			$(this).siblings('.feedback-btn').removeClass('active');			
			$(this).addClass('active');
			
			if (value === 'yes') {
				yesCount++;
			} else if (value === 'no') {
				noCount++;
			}
			
			setTimeout(function () {
				$('body').append('<div class="aagb-feedback-thankyou">Thank you for your feedback!</div>');
			}, 500);
			setTimeout(function () {$('.aagb-feedback-thankyou').remove();}, 3000);			
		}
			
		setCookie('yesCount', yesCount.toString());
		setCookie('noCount', noCount.toString());
			
		$.ajax({
			type: 'POST',
			url: aagb_local_object.ajax_url,
			data: { 
				action: 'update_counts_display',
				dataId: dataId, 
				value: value,
				yescount: yesCount,
				nocount: noCount
			},
			success: function (response) {
				var prevYes = $('.feedback-btn-wrap .feedback-btn[data-id="'+dataId+'"][data-value="yes"] .count').text();
				prevYes 	= parseInt(prevYes);
				$('.feedback-btn-wrap .feedback-btn[data-id="'+dataId+'"][data-value="yes"] .count').text(prevYes+yesCount);
				
				var prevNo 	= $('.feedback-btn-wrap .feedback-btn[data-id="'+dataId+'"][data-value="no"] .count').text();
				prevNo 		= parseInt(prevNo);
				$('.feedback-btn-wrap .feedback-btn[data-id="'+dataId+'"][data-value="no"] .count').text(prevNo+noCount);
			}
		});
	}
	});
	

	$('.feedback-btn-wrap .feedback-btn').each(function () {
		var data_id =  $(this).data('id');

		// Send an AJAX request to retrieve post meta data based on data_id
		$.ajax({
			url: aagb_local_object.ajax_url, // This should be set by WordPress and points to admin-ajax.php
			type: 'POST',
			data: {
				action: 'get_post_meta_by_id',
				data_id: data_id,
			},
			success: function(response) {			
				response.yes 	= response.yes == 0 ? 0 : response.yes;
				response.no 	= response.no == 0 ? 0 : response.no;
				$('.feedback-btn-wrap .feedback-btn[data-id="'+data_id+'"][data-value="yes"] .count').text(response.yes);
				$('.feedback-btn-wrap .feedback-btn[data-id="'+data_id+'"][data-value="no"] .count').text(response.no);
			}
		});
	});
	
	// Check for existing cookies and add the "active" class accordingly on page load
	$('.feedback-btn-wrap').each(function () {
		var dataId = $(this).data('id');
		var feedbackCookie = getCookie('feedback_' + dataId);

		if (feedbackCookie) {
			var $button = $(this).find(
				'.feedback-btn[data-value="' + feedbackCookie + '"]'
			);
			$button.addClass('active');
		}
	});
	

	// show body on click head
	$(document).on('click', '.aab__accordion_head', function () {
		const $this = $(this);
		const $parent = $this.parent();
		const $icon = $this
			.children('.aab__accordion_icon')
			.children('.aab__icon');
		const $body = $parent.children('.aab__accordion_body');

		// icons
		if ($icon.hasClass('dashicons-plus-alt2')) {
			$icon.removeClass('dashicons-plus-alt2');
			$icon.addClass('dashicons-minus');
		} else if ($icon.hasClass('dashicons-minus')) {
			$icon.removeClass('dashicons-minus');
			$icon.addClass('dashicons-plus-alt2');
		} else if ($icon.hasClass('dashicons-arrow-down-alt2')) {
			$icon.removeClass('dashicons-arrow-down-alt2');
			$icon.addClass('dashicons-arrow-up-alt2');
		} else if ($icon.hasClass('dashicons-arrow-up-alt2')) {
			$icon.removeClass('dashicons-arrow-up-alt2');
			$icon.addClass('dashicons-arrow-down-alt2');
		} else if ($icon.hasClass('dashicons-arrow-down')) {
			$icon.removeClass('dashicons-arrow-down');
			$icon.addClass('dashicons-arrow-up');
		} else if ($icon.hasClass('dashicons-arrow-up')) {
			$icon.removeClass('dashicons-arrow-up');
			$icon.addClass('dashicons-arrow-down');
		} else if ($icon.hasClass('dashicons-plus-alt')) {
			$icon.removeClass('dashicons-plus-alt');
			$icon.addClass('dashicons-dismiss');
		} else if ($icon.hasClass('dashicons-dismiss')) {
			$icon.removeClass('dashicons-dismiss');
			$icon.addClass('dashicons-plus-alt');
		} else if ($icon.hasClass('dashicons-insert')) {
			$icon.removeClass('dashicons-insert');
			$icon.addClass('dashicons-remove');
		} else if ($icon.hasClass('dashicons-remove')) {
			$icon.removeClass('dashicons-remove');
			$icon.addClass('dashicons-insert');
		}
		// toggle body
		$body.slideToggle();
	});
})(jQuery);