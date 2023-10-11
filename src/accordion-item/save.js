/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
const Save = ({ attributes }) => {
	const {
		makeActive,
		border,
		margins,
		paddings,
		borderRadius,
		heading,
		headingTag,
		headingColor,
		showIcon,
		iconClass,
		iconPosition,
		iconColor,
		iconBackground,
		headerBg,
		bodyBg,
		buttonShow,
		anchorPosition,
		anchorLinkShow,
		contentCount,
	} = attributes;

	const activeClass = makeActive ? `aagb__accordion_body--show` : '';
	// set unique ID

	// initial accordion stage
	let currentIconClass;
	if (makeActive === false) {
		currentIconClass = iconClass;
	} else {
		if (iconClass === 'plus-alt2') {
			currentIconClass = 'minus';
		} else if (iconClass === 'arrow-down') {
			currentIconClass = 'arrow-up';
		} else if (iconClass === 'arrow-down-alt2') {
			currentIconClass = 'arrow-up-alt2';
		} else if (iconClass === 'plus-alt') {
			currentIconClass = 'dismiss';
		} else if (iconClass === 'insert') {
			currentIconClass = 'remove';
		}
	}

	const renderContent = () => {
		const innerBlocksContent = Array.from(
			{ length: contentCount },
			(_, index) => (
				<InnerBlocks.Content
					key={index}
					className="aagb__accordion_inner_content"
				/>
			)
		);

		return (
			<div className="aagb__accordion_component">
				{innerBlocksContent}
			</div>
		);
	};

	return (
		<React.Fragment>
			<div
				{...useBlockProps.save({
					className: `aagb__accordion_container panel ${
						makeActive ? 'aagb__accordion_active' : ''
					}`,
				})}
				style={{
					border: `${border.width} ${border.style} ${border.color}`,
					marginTop: `${margins.top}`,
					marginBottom: `${margins.bottom}`,
					borderRadius: `${borderRadius}px`,
				}}
			>
				<div
					className={`aagb__accordion_head ${iconPosition}`}
					data-active={makeActive}
					style={{
						color: headingColor ? headingColor : '#333333',
						backgroundColor: headerBg ? headerBg : 'transparent',
						padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					}}
				>
					<div
						className={`aagb__accordion_heading ${iconPosition} ${
							anchorPosition || ''
						}`}
					>
						<RichText.Content
							className="aagb__accordion_title"
							tagName={headingTag}
							value={heading}
							style={{
								margin: 0,
								color: headingColor ? headingColor : '#333333',
							}}
						/>
					</div>
					{showIcon && (
						<div
							className={`aagb__accordion_icon`}
							style={{
								color: iconColor ? iconColor : '#333333',
								backgroundColor: iconBackground
									? iconBackground
									: 'transparent',
							}}
						>
							<span
								className={`aagb__icon dashicons dashicons-${currentIconClass}`}
							></span>
						</div>
					)}
				</div>
				<div
					className={`aagb__accordion_body ${activeClass}`}
					role="region"
					style={{
						backgroundColor: bodyBg ? bodyBg : 'transparent',
						borderTop: `${border.width} ${border.style} ${border.color}`,
						padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					}}
				>
					{renderContent()}
					<span class="leftletter"></span>
					{buttonShow && (
						<>
							<div className="aagb_overlay"></div>
							<button
								id="ezd_button_toggle"
								className="ezd_button_toggle"
								onClick={toggleContent}
							>
								Read More
							</button>
						</>
					)}
				</div>
			</div>
			{anchorLinkShow === true && (
				<script>
					{`
								jQuery(document).ready(function($) {
									if ($('.aagb__accordion_heading').length) {
										$(document).ready(function() {
											var Anchor1 = new AnchorJS();
											Anchor1.add('.aagb__accordion_heading');
										});
									}
									
										// charecter count js 
										var text_max = ${contentCount};
										var countText = function(e) {
											var txt = $('.aagb__accordion_component').text();
											var text_length = txt.length;
										  
											if (text_length > text_max)
											{
												$('.aagb__accordion_component').text(txt.substr(0, text_max));
												text_length = text_max;
											}
											   
											var text_remaining = text_max - text_length;
										  
											$('.leftletter').html(text_remaining + ' characters remaining');
										};
									  
										$('.leftletter').keyup(countText);
									  
										countText();
										console.log(text_max);
									
								});
							`}
				</script>
			)}
		</React.Fragment>
	);
};
export default Save;
