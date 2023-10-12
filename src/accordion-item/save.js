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
		readText,
	} = attributes;

	const activeClass = makeActive ? `aagb__accordion_body--show` : '';
	const expandClass = buttonShow ? 'expand' : '';
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
					className={`aagb__accordion_body ${activeClass} ${expandClass}`}
					role="region"
					style={{
						backgroundColor: bodyBg ? bodyBg : 'transparent',
						borderTop: `${border.width} ${border.style} ${border.color}`,
						padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					}}
				>
					{renderContent()}
					{buttonShow && (
						<>
							<div className="aagb_overlay"></div>
							<button className="aagb_button_toggle">
								<RichText.Content
									value={readText}
									style={{
										margin: 0,
									}}
								/>
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
							});
								
					`}
				</script>
			)}
			<script>
				{`
							jQuery(document).ready(function($) {
								var text_max = parseInt("${contentCount}"); // Parse contentCount as an integer

								$(".expand .aagb__accordion_component p").hide();
								$(".expand .aagb__accordion_component p").slice(0, text_max).show();
								
								$(".expand .aagb_button_toggle").click(function(e) {
									e.preventDefault();
									$(".expand .aagb__accordion_component p:hidden").slice(0, text_max).fadeIn("slow");
									if ($(".expand .aagb__accordion_component p:hidden").length === 0) {
										$(".aagb_button_toggle").fadeOut("slow");
										$(".aagb_overlay").fadeOut("slow");
									}
								});
							});
								
					`}
			</script>
		</React.Fragment>
	);
};
export default Save;
