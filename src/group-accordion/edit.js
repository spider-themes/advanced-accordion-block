/* eslint-disable @wordpress/no-unsafe-wp-apis */
// import editor style
import './editor.scss';
import React, { useState } from 'react';
import {
	PanelBody,
	ToggleControl,
	__experimentalBorderControl as BorderControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import colors from '../colors';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	RichText,
	Notice,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';


// admin url
const adminUrl = aagb_local_object.admin_url;
const Edit = ({ attributes, setAttributes, clientId }) => {
	const {
		uniqueId,
		activeAccordionBorder,
	} = attributes;

	const [activetorClass, setActivetorClass] = useState('click');

	// set unique ID
	setAttributes({
		uniqueId: clientId,
	});
	const handleActivetorChange = (value) => {
		setActivetorClass(value);
		setAttributes({ activetorClass: value });
	};

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
								<b>Voting Feedback</b> <br />
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
					className: `aagb_accordion_${uniqueId}`,
				})}
			>
				<InnerBlocks
					allowedBlocks={['aab/accordion-item']}
					template={[['aab/accordion-item']]}
				/>
			</div>
		</Fragment>
	);
};
export default Edit;
