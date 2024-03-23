import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const Save = ({ attributes }) => {
	const {
		uniqueId,
		placeholderText,
		closeText,
		openText,
		activetorClass,
	} = attributes;

	return (
		<Fragment>
			<div
				{...useBlockProps.save({
					className: `searchable aagb_accordion_${uniqueId} ${activetorClass}`,
				})}
			>
				<InnerBlocks.Content />
			</div>
		</Fragment>
	);
};

export default Save;
