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
import {
	ColorPalette,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	Notice,
	__experimentalBoxControl as BoxControl,
	__experimentalBorderControl as BorderControl,
} from '@wordpress/components';
const { __ } = wp.i18n;

import colors from '../colors';
import icons from './icons';
import tags from '../tags';

// include editor styles
import './editor.scss';

// admin url
const adminUrl = aagb_local_object.admin_url;
// icon positions
const iconPositions = [
	{
		label: 'Left',
		value: 'aagb_left_icon',
	},
	{
		label: 'Right',
		value: 'aagb_right_icon',
	},
];

const Edit = ({ attributes, setAttributes }) => {
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
	} = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					initialOpen={false}
					title={__('Accordion Status', 'advanced-accordion-block')}
				>
					<ToggleControl
						label={__(
							'Make it active on load',
							'advanced-accordion-block'
						)}
						checked={makeActive}
						onChange={() =>
							setAttributes({ makeActive: !makeActive })
						}
					/>
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
					<p className="aagb__label">
						{__('Header Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={(headingColor) =>
							setAttributes({ headingColor })
						}
					/>
					<p className="aagb__label">
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
							<p className="aagb__label">
								{__('Icon Color', 'advanced-accordion-block')}
							</p>
							<ColorPalette
								colors={colors}
								value={iconColor}
								onChange={(iconColor) =>
									setAttributes({ iconColor })
								}
							/>
							<p className="aagb__label">
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
					<p className="aagb__label">
						{__('Background Color', 'advanced-accordion-block')}
					</p>
					<ColorPalette
						colors={colors}
						value={bodyBg}
						onChange={(bodyBg) => setAttributes({ bodyBg })}
					/>
				</PanelBody>

				<PanelBody
						title={__('Pro Features', 'advanced-accordion-block')}
						initialOpen={false}
				>
					<Notice
							actions={[
								{
									label: 'Buy Pro',
									variant: 'primary',
									url: adminUrl + 'options-general.php?page=advanced-accordion-block-pricing',
								},
							]}
							status="warning"
							isDismissible={false}>
						<React.Fragment key=".0">
							<p>
								<b>Anchor Link</b> <br />
								Generate unique links for each FAQ item. It's handy for directing users to specific FAQs from external sources or within the same page.
							</p>

							<p>
								<b>Feedback</b> <br />
								Add feedback voting buttons to each FAQ item. From the total vote count, you can understand how helpful an accordion is.
							</p>

							<p>
								<b>Open All / Close All</b> <br />
								A functionality that lets users expand or collapse all accordion items simultaneously. It provides convenience, especially when users want to view or hide all FAQ items at once.
							</p>

							<p>
								<b>Read More</b> <br />
								Expand the accordion content beyond a certain character limit or line count, displaying a "Read More" button or link to reveal the entire content.
							</p>

							<p>
								<b>Instant Search</b> <br />
								Enable a search bar to help users find specific FAQs quickly. It's useful when you have a long list of FAQs.
							</p>

							<p>
								<b> Activator Event</b> <br />
								Choose the event type to activate the accordion. You can choose from Click, Hover, or Autoplay.
							</p>
						</React.Fragment>
					</Notice>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: `aagb__accordion_container ${
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
					style={{
						color: headingColor ? headingColor : '#333333',
						backgroundColor: headerBg ? headerBg : 'transparent',
						padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
					}}
				>
					<div className={`aagb__accordion_heading ${iconPosition}`}>
						<RichText
							tagName={headingTag}
							value={heading}
							className="aagb__accordion_title"
							onChange={(heading) => setAttributes({ heading })}
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
								className={`aagb__icon dashicons dashicons-${iconClass}`}
							></span>
						</div>
					)}
				</div>
				<div
					className={`aagb__accordion_body ${
						makeActive ? 'aagb__accordion_body--show' : ''
					}`}
					role="region"
					style={{
						backgroundColor: bodyBg ? bodyBg : 'transparent',
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
				</div>
			</div>
		</Fragment>
	);
};
export default Edit;
