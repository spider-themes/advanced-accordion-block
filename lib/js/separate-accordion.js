(function ($) {
	'use strict';

	$(document).ready(function () {
		// Function to get a cookie's value by name
		function getCookie(name) {
		  const cookies = document.cookie.split(";");
		  for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.startsWith(name + "=")) {
			  return cookie.substring(name.length + 1);
			}
		  }
		  return null;
		}
	  
		// Function to set a cookie
		function setCookie(name, value, days) {
		  const expires = new Date();
		  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
		  document.cookie = name + "=" + value + "; expires=" + expires.toUTCString();
		}
	  
		// Function to check if the user has voted for the opposite option
		function hasVotedForOppositeOption(dataId, value) {
		  const oppositeValue = value === "yes" ? "no" : "yes";
		  const oppositeOptionKey = "voted_" + dataId + "_" + oppositeValue;
		  return getCookie(oppositeOptionKey) === "1";
		}
	  
		// Function to update the counter and store data in cookies
		function updateCounter(btn, value) {
			
			const dataId = btn.attr("data-id");
			const values = btn.attr("data-value");
			const countElement = btn.find(".count");
			const votedKey = "voted_" + dataId + "_" + value;
		
			// Check if the user has voted for the opposite option
			if (hasVotedForOppositeOption(dataId, value)) {
				setTimeout(function () {
					$('body').append('<div class="aagb-feedback-thankyou">You can only vote for one option.</div>');
				}, 500);
				setTimeout(function () {$('.aagb-feedback-thankyou').remove();}, 3000);
				return;
			}
		
			// Check if the user has already voted for this option
			if (getCookie(votedKey)) {
				setTimeout(function () {
					$('body').append('<div class="aagb-feedback-thankyou">You have already voted</div>');
				}, 500);
				setTimeout(function () {$('.aagb-feedback-thankyou').remove();}, 3000);
				return;
			}
		
			let count = parseInt(countElement.text(), 10);		
			count++;
			countElement.text(count);
		
			// Store a cookie to indicate that the user has voted for this option
			setCookie(votedKey, "1", 365); // Store the cookie for 365 days			

			// Send an AJAX request to update the post meta
			$.ajax({
				type: "POST",
				url: aagb_local_object.ajax_url, // This global variable is defined by WordPress and points to admin-ajax.php
				data: {
				action: "update_post_meta_action", // Custom AJAX action name
				post_id: dataId,
				value: value,
				count: count,
				},
				success: function (response) {
				// Handle the response from the server (if needed)
				console.log("Response from server: " + response);
				// add active with cookie id
				$('.feedback-btn-wrap .feedback-btn[data-id="'+dataId+'"][data-value="'+values+'"]').addClass('active');
				
				setTimeout(function () {
					$('body').append('<div class="aagb-feedback-thankyou">Thank you for your feedback!</div>');
				}, 500);
				setTimeout(function () {$('.aagb-feedback-thankyou').remove();}, 3000);	

				},
			});
		}
	  
		// Attach click event handlers to all feedback buttons
		const feedbackButtons = $(".feedback-btn");
		feedbackButtons.each(function () {
		  $(this).on("click", function (e) {
			const value = $(this).data("value");
			updateCounter($(this), value);
		  });
		});
		
		$('.feedback-btn-wrap .feedback-btn').each(function () {
			var data_id =  $(this).data('id');
			var data_val =  $(this).data('value');
	
			// Send an AJAX request to retrieve post meta data based on data_id
			$.ajax({
				url: aagb_local_object.ajax_url, // This should be set by WordPress and points to admin-ajax.php
				type: 'POST',
				data: {
					action: 'get_post_meta_by_id',
					data_id: data_id,
				},
				success: function(response) {	

					// response return ''
					if (response[data_val] == '') {
						response[data_val] = 0;
					}

					$('.feedback-btn-wrap .feedback-btn[data-id="'+data_id+'"][data-value="'+data_val+'"] .count').text(response[data_val]);
					
					const votedKey = "voted_" + data_id + "_" + data_val;
					if (getCookie(votedKey)) {
						$('.feedback-btn-wrap .feedback-btn[data-id="'+data_id+'"][data-value="'+data_val+'"]').addClass('active');
						return;
					}
				}
			});
		});
		
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