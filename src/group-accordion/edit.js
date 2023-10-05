/* eslint-disable @wordpress/no-unsafe-wp-apis */
// import editor style
import './editor.scss';
import {
	PanelBody,
	ToggleControl,
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
	const { uniqueId, activeAccordionBorder, searchShow } = attributes;

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
			</InspectorControls>

			<div
				{...useBlockProps({
					className: `aagb_accordion_${uniqueId}`,
				})}
			>
				{searchShow && (
					<div className="ezd-form-group" id="ezd-search-form">
						<input
							id="ezd-search-id"
							type="text"
							className="form-control noEnterSubmit"
							placeholder="Search for FAQ"
						/>
						<small>
							<span
								id="ezd-search-help-block"
								className="help-block"
							></span>
						</small>
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
