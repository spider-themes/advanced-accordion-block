import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const Save = ({ attributes }) => {
	const { uniqueId } = attributes;

	return (
		<>
			<div className="form-group" id="filter-form">
				<input
					id="filter"
					type="text"
					className="form-control noEnterSubmit"
					placeholder="Search for FAQ"
				/>
				<small>
					<span id="filter-help-block" className="help-block"></span>
				</small>
			</div>
			<div
				{...useBlockProps.save({
					className: `searchable aagb_accordion_${uniqueId}`,
				})}
			>
				<InnerBlocks.Content />
			</div>

			<script>
				{`
					
					jQuery(document).ready(function($) {

						(function($) {
						  
						  var $form = $('#filter-form');
						  var $helpBlock = $("#filter-help-block");
						  
						  //Watch for user typing to refresh the filter
						  $('#filter').keyup(function() {
							var filter = $(this).val();
							$form.removeClass("has-success has-error");
							
							if (filter == "") {
							  $helpBlock.text("No filter applied.")
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
					  });

					  
				`}
			</script>
		</>
	);
};
export default Save;
