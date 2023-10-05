import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const Save = ({ attributes }) => {
	const { uniqueId, searchShow } = attributes;

	return (
		<>
			{searchShow && (
				<div className="ezd_form_inner" id="ezd-search-form">
					<div className="ezd_form_group">
						<input
							id="ezd-search-id"
							type="text"
							className="ezd_form_control noEnterSubmit"
							placeholder="Search for FAQ"
						/>
					</div>
					<small>
						<span
							id="ezd-search-help-block"
							className="help-block"
						></span>
					</small>
				</div>
			)}
			<div
				{...useBlockProps.save({
					className: `searchable aagb_accordion_${uniqueId}`,
				})}
			>
				<InnerBlocks.Content />
			</div>
			{searchShow === true && (
				<script>
					{`
					
					jQuery(document).ready(function($) {

						(function($) {
						  
						  var $form = $('#ezd-search-form');
						  var $helpBlock = $("#ezd-search-help-block");
						  
						  //Watch for user typing to refresh the filter
						  $('#ezd-search-id').keyup(function() {
							var filter = $(this).val();
							$form.removeClass("has-success has-error");
							
							if (filter == "") {
							  $helpBlock.text("Nothing found")
							  $('.searchable .panel').show();
							} else {
							  //Close any open panels
							  $('.collapse.in').removeClass('in');
							  
							  //Hide questions, will show result later
							  $('.searchable .panel').hide();
					  
							  var regex = new RegExp(filter, 'i');
					  
							  var filterResult = $('.searchable .panel').filter(function() {
								return regex.test($(this).text());
							  })
					  
							  if (filterResult) {
								if (filterResult.length != 0) {
								  $form.addClass("has-success");
								  $helpBlock.text(filterResult.length + " question(s) found.");
								  filterResult.show();
								} else {
								  $form.addClass("has-error").removeClass("has-success");
								  $helpBlock.text("No questions found.");
								}
					  
							  } else {
								$form.addClass("has-error").removeClass("has-success");
								$helpBlock.text("No questions found.");
							  }
							}
						  })
					  
						}($));

						$('.noEnterSubmit').keypress(function(e) {
							if (e.which == 13) e.preventDefault();
						  });

						  $(".ezd_button_toggle").each(function(i) {
							$(this).click(function() {
								var buttonText = $(this).text();
								var accordionContent = $(this).closest(".aagb__accordion_container").find(".aagb__accordion_component");
								var overlay = $(this).closest(".aagb__accordion_container").find(".ezd_overlay");
								if (buttonText === "Read More") {
									// Change button text and show content
									$(this).text("Read Less");
									accordionContent.addClass('collapse_expand');
									overlay.addClass('collapse_expand');
								} else {
									// Change button text and hide content
									$(this).text("Read More");
									accordionContent.removeClass('collapse_expand');
									overlay.removeClass('collapse_expand');
								}
							});
						});
					});  
				`}
				</script>
			)}
		</>
	);
};
export default Save;
