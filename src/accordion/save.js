/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
const { Fragment } = wp.element;
const { select } = wp.data;

const Save = ({ attributes }) => {
	
	const {
		uniqueId,
		makeActive,
		border,
		margins,
		paddings,
		borderRadius,
		heading,
		headingTag,
		headingColor,
		anchorPosition,
		anchorLinkShow,
		showIcon,
		iconClass,
		iconPosition,
		iconColor,
		iconBackground,
		headerBg,
		bodyBg,
		id,
		linkedAccordion,
		link,
		tab,
		disableAccordion,
		feedbackShow,
		feedbacLabel,
		yesBtn,
		noBtn,
		counterShow,
		uniqueKey
	} = attributes;

	const activeClass = makeActive
		? `aab__accordion_body--show active__accordion_${uniqueId}`
		: '';
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
	
	const FeedBackBtn = () => {
		// Get the current page ID
		
		return (
            feedbackShow && (
                <span
                    className="feedback-btn-wrap"
                    data-id={uniqueKey}
					>
						
                    {feedbacLabel && (
                        <span>{feedbacLabel}</span>
                    )}

                    {yesBtn && (
                        <button className="feedback-btn" data-value="yes" data-id={uniqueKey}>
                            {yesBtn}
                            {counterShow && (<span className="count">--</span>)}
                        </button>
                    )}

                    {noBtn && (
                        <button className="feedback-btn" data-value="no" data-id={`${uniqueKey}`}>
                            {noBtn}
                            {counterShow && (<span className="count">--</span>)}
                        </button>
                    )}
                </span>
            )
        );
		
	};

	return (
		<div
			{...useBlockProps.save({
				className: `aab__accordion_container ${
					disableAccordion ? 'aab__accordion_disabled' : ''
				} ${
					makeActive ? `active__accordion_container_${uniqueId}` : ''
				}`,
			})}
			style={{
				border: `${border.width} ${border.style} ${border.color}`,
				marginTop: `${margins.top}`,
				marginBottom: `${margins.bottom}`,
				borderRadius: `${borderRadius}px`,
			}}
			id={id !== '' ? id : ''}
		>
			{linkedAccordion ? (
				<Fragment>
					<a
						href={link}
						target={tab ? '_blank' : '_self'}
						rel={tab ? 'noopener noreferrer' : 'noopener'}
						className="aab__accordion_link"
					>
						<div
							className={`aab__accordion_head ${iconPosition}`}
							data-active={makeActive}
							style={{
								color: headingColor ? headingColor : '#333333',
								backgroundColor: headerBg
									? headerBg
									: 'transparent',
								padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
							}}
						>
							<div
								className={`aab__accordion_heading ${iconPosition} ${
									anchorPosition || ''
								}`}
							>
								<RichText.Content
									className="aab__accordion_title"
									tagName={headingTag}
									value={heading}
									style={{
										margin: 0,
										color: headingColor
											? headingColor
											: '#333333',
									}}
								/>
							</div>
							{showIcon && (
								<div
									className={`aab__accordion_icon`}
									style={{
										color: iconColor
											? iconColor
											: '#333333',
										backgroundColor: iconBackground
											? iconBackground
											: 'transparent',
									}}
								>
									<span
										className={`aab__icon dashicons dashicons-${currentIconClass}`}
									></span>
								</div>
							)}
						</div>
					</a>
				</Fragment>
			) : (
				<Fragment>
					<div
						className={`aab__accordion_head ${iconPosition}`}
						data-active={makeActive}
						style={{
							color: headingColor ? headingColor : '#333333',
							backgroundColor: headerBg
								? headerBg
								: 'transparent',
							padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
						}}
					>
						<div
							className={`aab__accordion_heading ${iconPosition} ${
								anchorPosition || ''
							}`}
						>
							<RichText.Content
								className="aab__accordion_title"
								tagName={headingTag}
								value={heading}
								style={{
									margin: 0,
									color: headingColor
										? headingColor
										: '#333333',
								}}
							/>
						</div>
						{showIcon && (
							<div
								className={`aab__accordion_icon`}
								style={{
									color: iconColor ? iconColor : '#333333',
									backgroundColor: iconBackground
										? iconBackground
										: 'transparent',
								}}
							>
								<span
									className={`aab__icon dashicons dashicons-${currentIconClass}`}
								></span>
							</div>
						)}
					</div>
					<div
						className={`aab__accordion_body ${activeClass}`}
						role="region"
						style={{
							backgroundColor: bodyBg ? bodyBg : 'transparent',
							borderTop: `${border.width} ${border.style} ${border.color}`,
							padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
						}}
					>
						<InnerBlocks.Content />




						<FeedBackBtn />



					</div>
					{anchorLinkShow === true && (
						<script>
							{`
								jQuery(document).ready(function($) {
									if ($('.aab__accordion_heading').length) {
										$(document).ready(function() {
											var Anchor1 = new AnchorJS();
											Anchor1.add('.aab__accordion_heading');
										});
									}
								});
							`}
						</script>
					)}
				</Fragment>
			)}
		</div>
	);
};
export default Save;
