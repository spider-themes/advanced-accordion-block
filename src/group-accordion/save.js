import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
const Save = ({ attributes }) => {
	const { uniqueId, searchShow, showAllbtn } = attributes;

	return (
		<Fragment>
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
					<span
						id="ezd-search-help-block"
						className="help-block"
					></span>
				</div>
			)}
			{showAllbtn && (
				<div className="accordion_wrapper_btn">
					<a href="#" className="content-accordion__close-all">
						Close all
					</a>
					<a href="#" className="content-accordion__show-all">
						Show all
					</a>
				</div>
			)}
			<div
				{...useBlockProps.save({
					className: `searchable aagb_accordion_${uniqueId}`,
				})}
			>
				<InnerBlocks.Content />
			</div>
			{/* {searchShow === true && (
				<script>
					{`
					
					jQuery(document).ready(function($) {

						// (function($) {
						  
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
					  
						// }($));
					});  
				`}
				</script>
			)} */}
		</Fragment>
	);
};
export default Save;
