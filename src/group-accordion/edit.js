/* eslint-disable @wordpress/no-unsafe-wp-apis */
// import editor style
import './editor.scss';
import {
	PanelBody,
	ToggleControl,
	// Button,
	// ButtonGroup,
	__experimentalBorderControl as BorderControl,
} from '@wordpress/components';

import colors from '../colors';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { Fragment } from '@wordpress/element';
const Edit = ({ attributes, setAttributes, clientId }) => {
	const { uniqueId, activeAccordionBorder, searchShow, showAllbtn } =
		attributes;

	// set unique ID
	setAttributes({
		uniqueId: clientId,
	});
	return (
		<Fragment>
			<style>
				{`.aagb_accordion_${uniqueId} .aagb__accordion_active { border: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} !important; }`}
				{`.aagb_accordion_${uniqueId} .aagb__accordion_body--show { border-top: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} !important; }`}
			</style>
			<InspectorControls>
				<PanelBody
					initialOpen={false}
					title={__(
						'Active Accordion Style',
						'advanced-accordion-block'
					)}
				>
					<BorderControl
						colors={colors}
						label={__('Border', 'advanced-accordion-block')}
						onChange={(value) =>
							setAttributes({ activeAccordionBorder: value })
						}
						value={activeAccordionBorder}
						withSlider={true}
					/>
				</PanelBody>
				<PanelBody
					title={__('Accordion Search', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ToggleControl
						label={__(
							'Show Accordion Search',
							'advanced-accordion-block'
						)}
						checked={searchShow} // Use the state variable here
						onChange={() =>
							setAttributes({ searchShow: !searchShow })
						}
					/>
				</PanelBody>
				<PanelBody
					title={__(
						'Open All / Close All Button',
						'advanced-accordion-block'
					)}
					initialOpen={false}
				>
					<ToggleControl
						label={__(
							'Open All / Close All',
							'advanced-accordion-block'
						)}
						checked={showAllbtn} // Use the state variable here
						onChange={() =>
							setAttributes({ showAllbtn: !showAllbtn })
						}
					/>
				</PanelBody>
				{/* <PanelBody
					title={__('Activator Event', 'advanced-accordion-block')}
					initialOpen={false}
				>
					<ButtonGroup>
						<Button
							variant="primary"
							onClick={() =>
								jQuery('.aagb__accordion_container  ').addClass(
									'active'
								)
							}
						>
							Button 1
						</Button>
						<Button variant="primary">Button 2</Button>
					</ButtonGroup>
				</PanelBody> */}
			</InspectorControls>

			<div
				{...useBlockProps({
					className: `aagb_accordion_${uniqueId}`,
				})}
			>
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

				<InnerBlocks
					allowedBlocks={['aab/accordion-item']}
					template={[['aab/accordion-item']]}
				/>
			</div>
		</Fragment>
	);
};
export default Edit;
