/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion-item/edit.js":
/*!************************************!*\
  !*** ./src/accordion-item/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/accordion-item/icons.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tags */ "./src/tags.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/accordion-item/editor.scss");



/* eslint-disable react/jsx-no-target-blank */

/* eslint-disable no-shadow */

/* eslint-disable @wordpress/no-unsafe-wp-apis */
const {
  Fragment
} = wp.element;


const {
  __
} = wp.i18n;


 // include editor styles


const iconPositions = [{
  label: 'Left',
  value: 'aagb_left_icon'
}, {
  label: 'Right',
  value: 'aagb_right_icon'
}];

const Edit = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
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
    bodyBg
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Status', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: __('Make it active on load', 'advanced-accordion-block'),
    checked: makeActive,
    onChange: () => setAttributes({
      makeActive: !makeActive
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Settings', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    values: margins,
    label: __('Accordion Margin', 'advanced-accordion-block'),
    sides: ['top', 'bottom'],
    units: [],
    allowReset: false,
    onChange: newValue => setAttributes({ ...margins,
      margins: {
        top: newValue.top,
        bottom: newValue.bottom
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    values: paddings,
    label: __('Content Padding', 'advanced-accordion-block'),
    sides: ['horizontal', 'vertical'],
    units: [],
    splitOnAxis: true,
    allowReset: false,
    onChange: newValue => setAttributes({ ...paddings,
      paddings: {
        top: newValue.top,
        left: newValue.left,
        right: newValue.right,
        bottom: newValue.bottom
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    label: __('Set Accordion Border', 'advanced-accordion-block'),
    onChange: value => setAttributes({
      border: value
    }),
    value: border,
    withSlider: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: __('Border Radius', 'advanced-accordion-block'),
    value: borderRadius,
    onChange: borderRadius => setAttributes({
      borderRadius
    }),
    min: 0,
    max: 50
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Head', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aagb__label"
  }, __('Header Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: headingColor,
    onChange: headingColor => setAttributes({
      headingColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aagb__label"
  }, __('Header Background', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: headerBg,
    onChange: headerBg => setAttributes({
      headerBg
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Select Heading Tag', 'advanced-accordion-block'),
    options: _tags__WEBPACK_IMPORTED_MODULE_6__["default"],
    onChange: headingTag => setAttributes({
      headingTag
    }),
    value: headingTag
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: __('Accordion Icon', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: __('Show Icon', 'advanced-accordion-block'),
    checked: showIcon,
    onChange: () => setAttributes({
      showIcon: !showIcon
    })
  }), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Select Icon Type', 'advanced-accordion-block'),
    options: _icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    onChange: iconClass => {
      setAttributes({
        iconClass
      });
    },
    value: iconClass
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Icon Position', 'advanced-accordion-block'),
    options: iconPositions,
    onChange: iconPosition => {
      setAttributes({
        iconPosition
      });
    },
    value: iconPosition
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aagb__label"
  }, __('Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: iconColor,
    onChange: iconColor => setAttributes({
      iconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aagb__label"
  }, __('Icon Background', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: iconBackground,
    onChange: iconBackground => setAttributes({
      iconBackground
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: __('Accordion Body', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aagb__label"
  }, __('Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: bodyBg,
    onChange: bodyBg => setAttributes({
      bodyBg
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `aagb__accordion_container ${makeActive ? 'aagb__accordion_active' : ''}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_head ${iconPosition}`,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent',
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_heading ${iconPosition}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: headingTag,
    value: heading,
    className: "aagb__accordion_title",
    onChange: heading => setAttributes({
      heading
    }),
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    }
  })), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aagb__icon dashicons dashicons-${iconClass}`
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_body ${makeActive ? 'aagb__accordion_body--show' : ''}`,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      borderTop: `${border.width} ${border.style} ${border.color}`,
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: true,
    template: [['core/paragraph', {
      placeholder: 'Write your content or add any block here...'
    }]]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/accordion-item/icons.js":
/*!*************************************!*\
  !*** ./src/accordion-item/icons.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const icons = [{
  label: 'Plus Minus',
  value: 'plus-alt2'
}, {
  label: 'Arrow Up Down',
  value: 'arrow-down'
}, {
  label: 'Arrow Up Down Alt',
  value: 'arrow-down-alt2'
}, {
  label: 'Open Close',
  value: 'plus-alt'
}, {
  label: 'Insert Remove',
  value: 'insert'
}];
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/accordion-item/index.js":
/*!*************************************!*\
  !*** ./src/accordion-item/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/accordion-item/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/accordion-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/accordion-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/accordion-item/save.js");



/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: 'minus',
    foreground: '#77b5f7'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/accordion-item/save.js":
/*!************************************!*\
  !*** ./src/accordion-item/save.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable react/jsx-no-target-blank */

/* eslint-disable no-lonely-if */


const Save = _ref => {
  let {
    attributes
  } = _ref;
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
    bodyBg
  } = attributes;
  const activeClass = makeActive ? `aagb__accordion_body--show` : ''; // initial accordion stage

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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `aagb__accordion_container ${makeActive ? 'aagb__accordion_active' : ''}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_head ${iconPosition}`,
    "data-active": makeActive,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent',
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_heading ${iconPosition}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "aagb__accordion_title",
    tagName: headingTag,
    value: heading,
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    }
  })), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aagb__icon dashicons dashicons-${currentIconClass}`
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_body ${activeClass}`,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      borderTop: `${border.width} ${border.style} ${border.color}`,
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const {
  __
} = wp.i18n;
const colors = [{
  name: __('Black', 'advanced-accordion-block'),
  color: '#000000'
}, {
  name: __('White', 'advanced-accordion-block'),
  color: '#ffffff'
}, {
  name: __('Red', 'advanced-accordion-block'),
  color: '#ff0000'
}, {
  name: __('Green', 'advanced-accordion-block'),
  color: '#00ff00'
}, {
  name: __('Blue', 'advanced-accordion-block'),
  color: '#0000ff'
}, {
  name: __('Yellow', 'advanced-accordion-block'),
  color: '#ffff00'
}];
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tags = [{
  label: 'h1',
  value: 'h1'
}, {
  label: 'h2',
  value: 'h2'
}, {
  label: 'h3',
  value: 'h3'
}, {
  label: 'h4',
  value: 'h4'
}, {
  label: 'h5',
  value: 'h5'
}, {
  label: 'h6',
  value: 'h6'
}, {
  label: 'p',
  value: 'p'
}];
/* harmony default export */ __webpack_exports__["default"] = (tags);

/***/ }),

/***/ "./src/accordion-item/editor.scss":
/*!****************************************!*\
  !*** ./src/accordion-item/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/accordion-item/style.scss":
/*!***************************************!*\
  !*** ./src/accordion-item/style.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/accordion-item/block.json":
/*!***************************************!*\
  !*** ./src/accordion-item/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"aab/accordion-item","version":"0.1.0","title":"Single Accordion","category":"accordion-block","description":"Single Accordion for Group Accordion","parent":["aab/group-accordion"],"supports":{"html":false,"anchor":true},"example":{"attributes":{"heading":"Accordion Heading"}},"attributes":{"border":{"type":"object","default":{"width":"1px","color":"#cccccc","style":"solid"}},"paddings":{"type":"object","default":{"top":"10px","left":"15px","right":"15px","bottom":"10px"}},"margins":{"type":"object","default":{"top":"0px","bottom":"15px"}},"borderRadius":{"type":"number","default":0},"heading":{"type":"string","default":"Accordion Heading"},"headingTag":{"type":"string","default":"h4"},"headingColor":{"type":"string"},"headerBg":{"type":"string"},"showIcon":{"type":"boolean","default":true},"iconClass":{"type":"string","default":"plus-alt2"},"iconPosition":{"type":"string","default":"aab_right_icon"},"iconColor":{"type":"string"},"iconBackground":{"type":"string"},"bodyBg":{"type":"string"},"makeActive":{"type":"boolean","default":false}},"textdomain":"advanced-accordion-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"accordion-item/index": 0,
/******/ 			"accordion-item/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkaccordion"] = self["webpackChunkaccordion"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["accordion-item/style-index"], function() { return __webpack_require__("./src/accordion-item/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map