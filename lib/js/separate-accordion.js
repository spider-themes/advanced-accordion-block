(function ($) {
	function setCookie(name, value) {
		document.cookie = name + '=' + value + '; path=/';
	}

	// Function to remove a cookie by name
	function removeCookie(name) {
		document.cookie =
			name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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

	$('.feedback-btn-wrap .feedback-btn').click(function () {
		var dataId = $(this).closest('.feedback-btn-wrap').data('id'); // Get the data-id attribute
		var value = $(this).data('value'); // Get the data-value attribute

		// Check if a cookie exists for this data-id and value
		var existingCookie = getCookie('feedback_' + dataId);

		if (existingCookie === value) {
			// If the same button is clicked again, remove the cookie
			removeCookie('feedback_' + dataId);

			// Remove the "active" class from the clicked button
			$(this).removeClass('active');
		} else {
			// Set a new cookie with the data-id and value
			setCookie('feedback_' + dataId, value);

			// Remove the "active" class from all buttons within the same .feedback-btn-wrap container
			$(this).siblings('.feedback-btn').removeClass('active');

			// Add the "active" class to the clicked button
			$(this).addClass('active');

			setTimeout(function () {
				$('body').append(
					'<div class="aagb-feedback-thankyou">Thank you for your feedback!</div>'
				);
			}, 500);

			setTimeout(function () {
				$('.aagb-feedback-thankyou').remove();
			}, 3000);
		}
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
