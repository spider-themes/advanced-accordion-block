import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const Save = ({ attributes }) => {
	const {
		uniqueId,
		searchShow,
		showAllbtn,
		placeholderText,
		closeText,
		openText,
		examples,
	} = attributes;

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: (examples || []).map((item, index) => ({
			'@type': 'Question',
			name: item.heading,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.content,
			},
		})),
	};

	return (
		<Fragment>
			{searchShow && (
				<div className="aagb_form_inner" id="ezd-search-form">
					<div className="aagb_form_group">
						<input
							id="aagb-search-id"
							type="text"
							className="aagb_form_control noEnterSubmit"
							placeholder={placeholderText || 'Search for FAQ'}
						/>
					</div>
					<span
						id="aagb-search-help-block"
						className="help-block"
					></span>
				</div>
			)}
			{showAllbtn && (
				<div className="aagb_accordion_wrapper_btn">
					<a href="#" className="content-accordion__close-all">
						<svg
							class="svg-inline--fa fa-compress-alt fa-w-14"
							role="presentation"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="compress-alt"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							data-fa-i2svg=""
						>
							<path
								fill="currentColor"
								d="M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
							></path>
						</svg>
						<RichText.Content
							value={closeText}
							style={{
								margin: 0,
							}}
						/>
					</a>
					<a href="#" className="content-accordion__show-all">
						<svg
							class="svg-inline--fa fa-expand-alt fa-w-14"
							role="presentation"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="expand-alt"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							data-fa-i2svg=""
						>
							<path
								fill="currentColor"
								d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
							></path>
						</svg>
						<RichText.Content
							value={openText}
							style={{
								margin: 0,
							}}
						/>
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

			{/* <script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema, null, '\t'),
				}}
			/> */}
		</Fragment>
	);
};

export default Save;
