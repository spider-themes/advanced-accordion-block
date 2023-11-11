/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
const { Fragment } = wp.element;
import {
	InnerBlocks,
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Dashicon } from '@wordpress/components';
import {
	TabPanel,
	ColorPalette,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
	TextControl,
} from '@wordpress/components';
const { __ } = wp.i18n;

import colors from '../colors';
import icons from './icons';
import tags from '../tags';

// include editor styles
import './editor.scss';

const iconPositions = [
	{
		label: 'Left',
		value: 'aab_left_icon',
	},
	{
		label: 'Right',
		value: 'aab_right_icon',
	},
];
const anchorPositions = [
	{
		label: 'Left',
		value: 'aab_left_link',
	},
	{
		label: 'Right',
		value: 'aab_right_link',
	},
];

const { select } = wp.data;

const Edit = ({ attributes, setAttributes, clientId, tabSelected }) => {
	const {
		uniqueId,
		makeActive,
		feedbackShow,
		border,
		margins,
		paddings,
		borderRadius,
		heading,
		headingTag,
		anchorLinkShow,
		anchorPosition,
		headingColor,
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
		feedbacLabel,
		yesBtn,
		noBtn,
		counterShow,
		uniqueKey,
	} = attributes;

	const numericClientId = clientId.replace(/\D/g, '').slice(0, 5);

	// Ensure numericClientId contains exactly 5 characters
	while (numericClientId.length < 5) {
		numericClientId = '0' + numericClientId;
	}

	// set unique ID
	setAttributes({
		uniqueId: clientId.slice(0, 8),
		uniqueKey: numericClientId,
	});

	return (
		<Fragment>
			<InspectorControls>
				<TabPanel
					className="my-tab-panel"
					activeClass="active-tab"
					onSelect={(newTab) =>
						setAttributes({ tabSelected: newTab })
					}
					tabs={[
						{
							name: 'layout',
							title: (
								<Fragment>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										aria-hidden="true"
										focusable="false"
									>
										<path
											fill-rule="evenodd"
											d="M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Fragment>
							),
							className: 'layout-tab',
						},
						{
							name: 'style',
							title: (
								<Fragment>
									<svg
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										aria-hidden="true"
										focusable="false"
									>
										<path d="M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"></path>
									</svg>
								</Fragment>
							),
							className: 'style-tab',
						},
					]}
				>
					{(tab) => (
						<PanelBody>
							{tab.name === 'layout' && (
								<Fragment>
									<PanelBody
										initialOpen={false}
										title={__(
											'Accordion ID',
											'advanced-accordion-block'
										)}
									>
										<TextControl
											label={__(
												'Set Accordion ID',
												'advanced-accordion-block'
											)}
											value={id}
											onChange={(id) =>
												setAttributes({ id })
											}
										/>
									</PanelBody>
								</Fragment>
							)}
							{tab.name === 'style' && (
								<Fragment>
									{/* Your style controls go here */}
									<RangeControl
										label={__(
											'Border Radius',
											'advanced-accordion-block'
										)}
										value={borderRadius}
										onChange={(borderRadius) =>
											setAttributes({ borderRadius })
										}
										min={0}
										max={50}
									/>
									{/* Add more style controls here */}
								</Fragment>
							)}
						</PanelBody>
					)}
				</TabPanel>
				<PanelBody
					initialOpen={false}
					title={__('Accordion ID', 'advanced-accordion-block')}
				>
					<TextControl
						label={__(
							'Set Accordion ID',
							'advanced-accordion-block'
						)}
						value={id}
						onChange={(id) => setAttributes({ id })}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Status', 'advanced-accordion-block')}
				>
					{linkedAccordion !== true && (
						<ToggleControl
							label={__(
								'Make it Active on Load',
								'advanced-accordion-block'
							)}
							checked={makeActive}
							onChange={() =>
								setAttributes({ makeActive: !makeActive })
							}
						/>
					)}

					{linkedAccordion !== true && (
						<ToggleControl
							label={__(
								'Make it a Disable Accordion?',
								'advanced-accordion-block'
							)}
							checked={disableAccordion}
							onChange={() =>
								setAttributes({
									disableAccordion: !disableAccordion,
								})
							}
							help={__(
								'No click event works. This feature is for the frontend only!',
								'advanced-accordion-block'
							)}
						/>
					)}
					<ToggleControl
						label={__(
							'Turn it into a Linked Accordion?',
							'advanced-accordion-block'
						)}
						checked={linkedAccordion}
						onChange={() =>
							setAttributes({ linkedAccordion: !linkedAccordion })
						}
						help={__(
							'Linked Accordion disable the Accordion Body and open the link when it is clicked.',
							'advanced-accordion-block'
						)}
					/>
					{linkedAccordion && (
						<Fragment>
							<TextControl
								label={__(
									'Link URL',
									'advanced-accordion-block'
								)}
								value={link}
								onChange={(link) => setAttributes({ link })}
							/>
							<ToggleControl
								label={__(
									'Open in new tab?',
									'advanced-accordion-block'
								)}
								checked={tab}
								onChange={() =>
									setAttributes({
										tab: !tab,
									})
								}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Settings', 'advanced-accordion-block')}
				>
					<BoxControl
						values={margins}
						label={__(
							'Accordion Margin',
							'advanced-accordion-block'
						)}
						sides={['top', 'bottom']}
						units={[]}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...margins,
								margins: {
									top: newValue.top,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<div className="aa-custom-spacer"></div>
					<BoxControl
						values={paddings}
						label={__(
							'Content Padding',
							'advanced-accordion-block'
						)}
						sides={['horizontal', 'vertical']}
						units={[]}
						splitOnAxis={true}
						allowReset={false}
						onChange={(newValue) =>
							setAttributes({
								...paddings,
								paddings: {
									top: newValue.top,
									left: newValue.left,
									right: newValue.right,
									bottom: newValue.bottom,
								},
							})
						}
					/>
					<div className="aa-custom-spacer"></div>
					<BorderControl
						colors={colors}
						label={__(
							'Set Accordion Border',
							'advanced-accordion-block'
						)}
						onChange={(value) => setAttributes({ border: value })}
						value={border}
						withSlider={true}
					/>
					<div className="aa-custom-spacer"></div>
					<RangeControl
						label={__('Border Radius', 'advanced-accordion-block')}
						value={borderRadius}
						onChange={(borderRadius) =>
							setAttributes({ borderRadius })
						}
						min={0}
						max={50}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Head', 'advanced-accordion-block')}
				>
					<p className="aab__label">
						{__('Header Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={(headingColor) =>
							setAttributes({ headingColor })
						}
					/>
					<p className="aab__label">
						{__('Header Background', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headerBg}
						onChange={(headerBg) => setAttributes({ headerBg })}
					/>
					<SelectControl
						label={__(
							'Select Heading Tag',
							'advanced-accordion-block'
						)}
						options={tags}
						onChange={(headingTag) => setAttributes({ headingTag })}
						value={headingTag}
					/>
				</PanelBody>
				<PanelBody
					title={__('Anchor Link', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__(
							'Show Anchor Link',
							'advanced-accordion-block'
						)}
						checked={anchorLinkShow} // Use the state variable here
						onChange={() =>
							setAttributes({ anchorLinkShow: !anchorLinkShow })
						}
					/>
					{anchorLinkShow && (
						<Fragment>
							<SelectControl
								label={__(
									'Anchor Icon Position',
									'advanced-accordion-block'
								)}
								options={anchorPositions}
								onChange={(anchorPosition) =>
									setAttributes({
										anchorPosition,
									})
								}
								value={anchorPosition}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					title={__('Accordion Icon', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Show Icon', 'advanced-accordion-block')}
						checked={showIcon}
						onChange={() => setAttributes({ showIcon: !showIcon })}
					/>
					{showIcon && (
						<Fragment>
							<SelectControl
								label={__(
									'Select Icon Type',
									'advanced-accordion-block'
								)}
								options={icons}
								onChange={(iconClass) => {
									setAttributes({ iconClass });
								}}
								value={iconClass}
							/>
							<SelectControl
								label={__(
									'Icon Position',
									'advanced-accordion-block'
								)}
								options={iconPositions}
								onChange={(iconPosition) => {
									setAttributes({ iconPosition });
								}}
								value={iconPosition}
							/>
							<p className="aab__label">
								{__('Icon Color', 'advanced-accordion-block')}
							</p>
							<ColorPalette
								colors={colors}
								value={iconColor}
								onChange={(iconColor) =>
									setAttributes({ iconColor })
								}
							/>
							<p className="aab__label">
								{__(
									'Icon Background',
									'advanced-accordion-block'
								)}
							</p>
							<ColorPalette
								colors={colors}
								value={iconBackground}
								onChange={(iconBackground) =>
									setAttributes({ iconBackground })
								}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelBody
					title={__('Accordion Body', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<p className="aab__label">
						{__('Background Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={bodyBg}
						onChange={(bodyBg) => setAttributes({ bodyBg })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Feedback', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__(
							'Enable / Disable',
							'advanced-accordion-block'
						)}
						checked={feedbackShow}
						onChange={() =>
							setAttributes({ feedbackShow: !feedbackShow })
						}
					/>
					{feedbackShow == 1 && (
						<Fragment>
							<TextControl
								label={__('Label', 'advanced-accordion-block')}
								value={feedbacLabel}
								onChange={(feedbacLabel) =>
									setAttributes({ feedbacLabel })
								}
							/>
							<TextControl
								label={__('Yes', 'advanced-accordion-block')}
								value={yesBtn}
								onChange={(yesBtn) => setAttributes({ yesBtn })}
								className="bbpc-control-half yes-btn"
							/>

							<TextControl
								label={__('No', 'advanced-accordion-block')}
								value={noBtn}
								onChange={(noBtn) => setAttributes({ noBtn })}
								className="bbpc-control-half no-btn"
							/>
							<ToggleControl
								label={__(
									'Counter',
									'advanced-accordion-block'
								)}
								checked={counterShow}
								onChange={() =>
									setAttributes({ counterShow: !counterShow })
								}
							/>
							<TextControl
								label={__('ID', 'advanced-accordion-block')}
								value={uniqueKey}
								onChange={(uniqueKey) =>
									setAttributes({ uniqueKey })
								}
								disabled
							/>
						</Fragment>
					)}
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: `aab__accordion_container ${
						makeActive
							? `active__accordion_container_${uniqueId}`
							: ''
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
								style={{
									color: headingColor
										? headingColor
										: '#333333',
									backgroundColor: headerBg
										? headerBg
										: 'transparent',
									padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
								}}
							>
								<div
									className={`aab__accordion_heading ${iconPosition} ${anchorPosition}`}
								>
									<RichText
										tagName={headingTag}
										value={heading}
										className="aab__accordion_title"
										onChange={(heading) =>
											setAttributes({ heading })
										}
										style={{
											margin: 0,
											color: headingColor
												? headingColor
												: '#333333',
										}}
									/>
									{anchorLinkShow && (
										<a href="#">
											<i className="dashicons-admin-links"></i>
										</a>
									)}
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
											className={`aab__icon dashicons dashicons-${iconClass}`}
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
							style={{
								color: headingColor ? headingColor : '#333333',
								backgroundColor: headerBg
									? headerBg
									: 'transparent',
								padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
							}}
						>
							<div
								className={`aab__accordion_heading ${iconPosition} ${anchorPosition}`}
							>
								<RichText
									tagName={headingTag}
									value={heading}
									className="aab__accordion_title"
									onChange={(heading) =>
										setAttributes({ heading })
									}
									style={{
										margin: 0,
										color: headingColor
											? headingColor
											: '#333333',
									}}
								/>
								{anchorLinkShow && (
									<a href="#">
										<i className="dashicons dashicons-admin-links"></i>
									</a>
								)}
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
										className={`aab__icon dashicons dashicons-${iconClass}`}
									></span>
								</div>
							)}
						</div>
						<div
							className={`aab__accordion_body ${
								makeActive
									? `active__accordion_${uniqueId}`
									: ''
							}`}
							role="region"
							style={{
								backgroundColor: bodyBg
									? bodyBg
									: 'transparent',
								borderTop: `${border.width} ${border.style} ${border.color}`,
								padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
							}}
						>
							<InnerBlocks
								allowedBlocks={true}
								template={[
									[
										'core/paragraph',
										{
											placeholder:
												'Write your content or add any block here...',
										},
									],
								]}
							/>
							{feedbackShow == 1 && (
								<span className={'feedback-btn-wrap'}>
									{feedbacLabel && (
										<span>{feedbacLabel}</span>
									)}

									{yesBtn && (
										<button
											className="feedback-btn"
											data-value="yes"
										>
											{yesBtn}
											{counterShow && (
												<span className="count">
													--
												</span>
											)}
										</button>
									)}

									{noBtn && (
										<button
											className="feedback-btn"
											data-value="no"
										>
											{noBtn}
											{counterShow && (
												<span className="count">
													--
												</span>
											)}
										</button>
									)}
								</span>
							)}
						</div>
					</Fragment>
				)}
			</div>
		</Fragment>
	);
};
export default Edit;
