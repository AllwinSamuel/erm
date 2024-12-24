"use strict";
(self["webpackChunkerm"] = self["webpackChunkerm"] || []).push([["components/javascript/admin-comp"],{

/***/ 13172170:
/*!*********************************************!*\
  !*** ./components/javascript/admin-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComp": () => (/* binding */ AdminComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _list_comp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-comp.js */ 84282785);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});




class AdminComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

AdminComp._template = "<template tag-name=\"admin-comp\"> <list-comp></list-comp> <div id=\"popup\"></div> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n\nadmin-comp{\n  background-color:rgb(193, 221, 231);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  border: 20px solid balck;\n  padding-inline: 30px;\n  padding-block: 10px;\n}\n\n</style>";;
AdminComp._dynamicNodes = [{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
AdminComp._observedAttributes = [];



AdminComp.register("admin-comp", {
    hash: "AdminComp_221",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 84282785:
/*!********************************************!*\
  !*** ./components/javascript/list-comp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComp": () => (/* binding */ ListComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-input.js */ 97686034);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js */ 62028913);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-accordion.js */ 93535713);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});






class ListComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}
    init(){
          this.setData("users",this.$app.$ServiceProvider.getUsers());
          this.setData("updatedUsers",this.data.users);
      }
    data(arg1) {
		return Object.assign(super.data({  
			"users":this.$app.prop("array"),
			"updatedUsers":this.$app.prop("array")
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			search:function(e){
				 this.setData("updatedUsers",
					                           this.data.users.filter((user)=>
																			        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
																		          user.employeeNumber.toLowerCase().includes(e.target.value.toLowerCase()) ||
																		          user.role.toLowerCase().includes(e.target.value.toLowerCase()) 
																		));
			},
			addUser:function(){
				this.$app.$ServiceProvider.showFormComp("add");
		 }
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

ListComp._template = "<template tag-name=\"list-comp\"> <div class=\"wrapper\"> <lyte-input lt-prop-class=\"list-input\" lt-prop-placeholder=\"Search Employee Here..\" oninput=\"{{action('search',event)}}\"> </lyte-input> <lyte-button lt-prop-class=\"btn-add\" lt-prop-appearance=\"success\" onclick=\"{{action('addUser')}}\"> <template is=\"registerYield\" yield-name=\"text\"> ADD EMPLOYEE + </template> </lyte-button> </div> <template items=\"{{updatedUsers}}\" item=\"user\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-accordion> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-accordion-item> <lyte-accordion-header>{{user.name}}<lyte-icon class=\"lyteAccordionArrow\"></lyte-icon></lyte-accordion-header> <lyte-accordion-body> <pre>                  <span>EMPLOYEE NUMBER : {{user.employeeNumber}}</span>\n                  <span>EMPLOYEE ROLE   : {{user.role}}</span>\n                  <go-to lt-prop-route=\"home.details\" lt-prop-dp=\"[&quot;{{user.employeeNumber}}&quot;]\">View More</go-to>\n                 </pre> </lyte-accordion-body> </lyte-accordion-item> </template> </lyte-accordion> </template> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-accordion.css\");\n@import url('/node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-input.css');\nlist-comp{\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\nlyte-accordion-body{\n  width: 100%;\n}\n\n.wrapper{\n  display: flex;\n  justify-content: space-between;\n  gap:30px;\n  margin-block: 20px;\n}\n.btn-add{\n  width: max-content;\n  height: 60px;\n  border-radius: 7px;\n  &:hover{\n    opacity: 1.1;\n  }\n}\n.list-input{\n  flex-grow: 1;\n  text-indent: 10px;\n  height: 60px;\n  border-radius: 7px;\n}\n.lyteField{\n  padding: 0;\n}\n\nlyte-accordion-header{\n  height: 60px;\n  display: flex;\n  align-items: center;\n  padding-left: 50px;\n  margin-left: 20px;\n  font-size: 1.3rem;\n}\nlyte-icon.lyteAccordionArrow {\n  background-position: -42px 0;\n  width: 15px;\n  height: 10px;\n  position: absolute;\n  left: 10px;\n  top:20px;\n}\n\nlist-comp lyte-accordion-body pre span{\n  display: inline-block;\n  font-size: 1.1rem;\n  margin-bottom: 10px;\n}\n\nlist-comp go-to{\n   background-color: rgb(74, 131, 166);\n   display: inline-block;\n   padding: 10px;\n   margin-top: 10px;\n   color: #ffffff;\n   border-radius: 7px;\n   transition: all 0.2s ease-in-out;\n   &:hover{\n    scale:1.1;\n   }\n}</style>";;
ListComp._dynamicNodes = [{"t":"a","p":[1,1]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,3]},{"t":"r","p":[1,3,1],"dN":[],"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"f","p":[3],"dN":[{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,1,2],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,3,1,1,1]},{"t":"tX","p":[1,3,1,3,1]},{"t":"a","p":[1,3,1,5]},{"t":"cD","p":[1,3,1,5],"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[3,1,0]}];;
ListComp._observedAttributes = ["users", "updatedUsers"];



ListComp.register("list-comp", {
    hash: "ListComp_11",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 93535713:
/*!**************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-accordion.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteAccordionComponent": () => (/* binding */ LyteAccordionComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js */ 19978124);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "prop": function() {
        return _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop;
    },

    "Component": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    },

    "LyteUiComponentComponentRegistry": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry;
    }
});





/**
 * Renders an accordion
 * @component lyte-accordion
 * @version 1.0.0
 * @methods onChanged,onOpen,onClose,onBeforeClose,onBeforeOpen,afterRender
 */

class LyteAccordionComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    data(arg1) {
		return Object.assign(super.data({
			/**
			 * @componentProperty {string} ltPropDuration=0.2s
			 * @suffix s,ms
			 */

			'ltPropDuration': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', { 
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-accordion', 'duration', '0.2s' ) 
			} ),

			/**
			 * @componentProperty {string} ltPropHeight
			 * @suffix px,pt,cm,mm,vh,vm,em
			 */

			'ltPropHeight': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string' ),

			/**
			 * @componentProperty {boolean} ltPropExclusive=true
			 */

			'ltPropExclusive': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-accordion', 'exclusive', true ) 
			} ),

			'ltPropYield': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 
				'default': true 
			} ),

			/**
			 * @componentProperty {boolean} ltPropDynamic=false
			 * @version 2.2.0
			 */

			'ltPropDynamic': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-accordion', 'dynamic', true ) 
			} ),

			/**
			 * @componentProperty {boolean} ltPropNested=false
			 * @version 3.12.0
			 */

			'ltPropNested': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', {
				'default': false
			} ),

			'ltPropPreventAutoScroll': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', {
				'default': false
			} )
		}), arg1);
	}

    toggleCurrentPanel(header) {
		header.click();
	}

    execAndCheck(name, event) {
		var arg, ret;

		arg = window._lyteAccordion.findProperParent( event.target ).parentElement;
	 	ret = this.executeMethod( name, event, arg, this );
	 	ret = ret == undefined ? true : ret;
	 	return ret;
	}

    initiateClose(activeElement, cb, event) {
		var accordionItem = activeElement.parentElement,
		header = accordionItem.querySelector( 'lyte-accordion-header' ),
		isImmediate = accordionItem._immediate;

		if( !isImmediate ) {
			// Requires two rAFs to do this which is totally weird - https://jsfiddle.net/6dLnwyef/1/
			window.requestAnimationFrame( function() {
				activeElement.style.height = activeElement.getBoundingClientRect().height + 'px';
				window.requestAnimationFrame( function() {
					activeElement.style.height = '0px';
				} );
			} );
		}
		else {
			this.closeImmediately( activeElement );
		}
		
			
		activeElement.style.overflow = 'hidden';	
		activeElement._close = true;
		activeElement.parentElement.classList.remove( 'lyteAccordionActive' );
		header.setAttribute( 'aria-expanded', 'false' );
		activeElement.setAttribute( 'aria-hidden', 'true' );

		if( cb ) {
			cb.call( this, event );
		}
	}

    closeImmediately(accordionBody) {

		accordionBody.style.transitionDuration = '0s';
		accordionBody.style.height = '0px';
		this.doAfterCloseWork( accordionBody );
		// TODO: Find a way to add onAfterClose callback
		// this.execNonRetCalls( [ 'onAfterClose', this ] );
	}

    doAfterCloseWork( accordionBody ) {
		accordionBody.classList.add( 'lyteAccordionBodyHide' );
	}


    execNonRetCalls(arr) {
		if( this.getMethods( arr[ 0 ] ) ) {
			this.executeMethod.apply( this, arr );
	 	}
	}

    isVisible(item) {
		return !!( item.offsetWidth || item.offsetHeight || item.getClientRects().length );
	}

    scrollIntoView(body) {
		var isVisible = body && this.isVisible( body );

		if( !isVisible || !body ) {
			return ;
		}

		var height = this.$node.getBoundingClientRect().height, 
 		scrollTop = this.$node.scrollTop,
 		visibleBound = scrollTop + height,
 		offTop = body.offsetTop,
 		map = body.getAttribute( 'map' ),
 		elemBound = offTop + body.getBoundingClientRect().height, id,
 		preventAutoScroll = this.getData( 'ltPropPreventAutoScroll' );

 		if( visibleBound < elemBound && !preventAutoScroll ) {
 			this.$node.scrollTop = this.$node.scrollTop + ( elemBound - visibleBound );
 		}

 		id = window.requestAnimationFrame( this.scrollIntoView.bind( this, body ) );
 		this.$addon.objectUtils( this.getData( 'rAFMap' ), 'add', map, id );
	}

    dynamic(body) {
		/**
		 * body is definitely defined over here
		 *
		 */

		var final;

		body.style.height = 'auto';
		// Issue in CRM - opening the accordion caused flickering
		body.style.opacity = '0';
		final = body.getBoundingClientRect().height;

		// This requires two rAFs just like initiateClose. Dk why -> https://jsfiddle.net/6dLnwyef/2/
		window.requestAnimationFrame( function() {

			/**
		 	 * Gotta put it inside a rAF else it just joins the previous 0px and the 
		 	 * current final height So the transition looks like auto -> final instead of 0 -> final
		 	 *
		 	 */

		 	body.style.height = '0px';
		 	body.style.opacity = '1';
			window.requestAnimationFrame( function() {
				body.style.height = final + 'px';
			} );

		} )
		

		
	}

    static(sibling, configuration) {

		/**
		 * The sibling is definitely always present
		 *
		 */

		var heightToSet = configuration.height;

		if( this.getData( 'heights' )[ sibling.getAttribute( 'map' ) ].conf 
	 		&& heightToSet 
	 	) {
	 		sibling.style.height = heightToSet;
	 	}
	 	else {
	 		sibling.style.height = this.getData( 'heights' )[ sibling.getAttribute( 'map' ) ].height;
	 	}
	}

    calculate(sibling, configuration) {
		var dynamic = this.getData( 'ltPropDynamic' );
	 	
		this.doBeforeOpenWork( sibling );

		if( dynamic ) {
			this.dynamic( sibling );
		}
		else {
			this.static( sibling, configuration );
		}
	}

    doBeforeOpenWork( accordionBody ) {
		accordionBody.classList.remove( 'lyteAccordionBodyHide' );
		accordionBody.parentElement.classList.add( 'lyteAccordionActive' );
	}


    initiateOpen(sibling, configuration, event) {
		var ret;

		this.calculate( sibling, configuration );
	 	sibling._close = false;
	 	sibling.style.overflow = 'hidden';
	 	sibling.parentElement.classList.add( 'lyteAccordionActive' );
	 	ret = window._lyteAccordion.findProperParent( event.target );
	 	ret.setAttribute( 'aria-expanded', 'true' );
	 	sibling.setAttribute( 'aria-hidden', 'false' );
	 	
 		this.scrollIntoView( sibling );
		this.execNonRetCalls( [  'onOpen', event, ret.parentElement, this ] );
		this.execNonRetCalls( [ 'onChanged', event, ret.parentElement, this ] );
	 		
	}

    didDestroy() {
		var allNodes = this.$node.querySelectorAll( 'lyte-accordion-item' ), i = 0, curValue;

		for( ; i < allNodes.length; i++ ) {
			curValue = allNodes[ i ].getAttribute( 'lyte-shortcut' );
			if( curValue ) {
				allNodes[ i ].setAttribute( 'lyte-shortcut', JSON.stringify( {} ) );
			}
		}
	}

    cancelFrame(body, event) {

		if( event.target !== body ) {
			return ;
		}
		
		var map = body.getAttribute( 'map' ),
		close = body._close,
		dynamic = this.getData( 'ltPropDynamic' );

		window.cancelAnimationFrame( this.getData( 'rAFMap' )[ map ] );
		body.style.overflow = close ? 'hidden' : 'auto';

		if( dynamic && !close ) {
			body.style.height = 'auto';
		}

		window.clearTimeout( body._callbackId );

		body._callbackId = setTimeout( function() {
			if( close ) {
				this.execNonRetCalls( [ 'onAfterClose', this ] );
			}
			else {
				this.execNonRetCalls( [ 'onAfterOpen', this ] );
			}
		}.bind( this ), 100 );

		if( close ) {
			this.doAfterCloseWork( body );
		}

	}

    setEvent(body) {
		if( body ) {
			body.addEventListener( 'transitionend', this.cancelFrame.bind( this, body ) );
		}
	}

    calculateHeight(body, index) {
		var isStyle = body.style.height;

		this.getData( 'heights' )[ index ] = {};

		if( !isStyle ) {
			this.getData( 'heights' )[ index ].height = body.getBoundingClientRect().height - parseFloat( window.getComputedStyle( body ).paddingTop ) - parseFloat( window.getComputedStyle( body ).paddingBottom ) + 'px';
			this.getData( 'heights' )[ index ].conf = true;
		}
		else {
			this.getData( 'heights' )[ index ].height = isStyle;
			this.getData( 'heights' )[ index ].conf = false;
		}
	}

    getYieldElement() {
		var item = this.$node.querySelector( 'lyte-accordion-item' ),
		res;

		if( item ) {
			res = item.parentElement;
		}

		return res || this.$node.querySelector( 'lyte-yield' );
	}

    readHeights() {
		if( !this.$node ) {
			return ;
		}

		var node = this.getYieldElement(), 
		nodes = node.children, i = 0, body,
		dynamic = this.getData( 'ltPropDynamic' );

		for( ; i < nodes.length; i++ ) {
			if( nodes[ i ].tagName !== 'LYTE-ACCORDION-ITEM' ) {
				continue;
			}

			body = nodes[ i ].querySelector( 'lyte-accordion-body' );
			if( !body ) {
				continue;
			}

			this.setEvent( body );
			// For now it looks like all the accordion-items must be specified at the start
			if( !dynamic ) {
				this.calculateHeight( body, i );
			}

			if( 
				nodes[ i ].classList.contains( 'lyteAccordionActive' ) 
				&& this.getData( 'ltPropExclusive' ) 
			) {
				this.flag = i;
			}
		}
	}

    maintainHeightOrder(body, index) {
		var dynamic = this.getData( 'ltPropDynamic' );

		/* When setting height transitionend was fired in safari but not in other browsers */
		body._close = false;
		body.style.height = dynamic ? 
								'auto' : 
								!this.getData( 'heights' )[ index ].conf ? 
									this.getData( 'heights' )[ index ].height :
									this.getData( 'ltPropHeight' ) ? 
										this.getData( 'ltPropHeight' ) : 
										this.getData( 'heights' )[ index ].height
	}

    writeHeights() {
		if( !this.$node ) {
			return ;
		}

		var node = this.getYieldElement(), nodes = node.children,
		exclusive = this.getData( 'ltPropExclusive' ), i = 0, body, header, ariaValue;

		for( ; i < nodes.length; i++ ) {
			if( nodes[ i ].tagName !== 'LYTE-ACCORDION-ITEM' ) {
				continue;
			}

			body = nodes[ i ].querySelector( 'lyte-accordion-body' );
			if( !body ) {
				continue;
			}
			
			// No point setting this for dynamic but we are letting it go for now
			// because we may want to introduce an attribute to open the accordion from
			// the html
			body.setAttribute( 'map', i );

			if( !nodes[ i ].classList.contains( 'lyteAccordionActive' ) ) {
				/* When setting height transitionend was fired in safari but not in other browsers */
				body._close = true;
				body.style.height = '0px';
			}
			else if( exclusive ) {
				if( this.flag != i ) {
					/* When setting height transitionend was fired in safari but not in other browsers */
					body._close = true;
					nodes[ i ].classList.remove( 'lyteAccordionActive' );
					body.style.height = '0px';
				}
				else {
					// Doing this to achieve this precedence: inline style > ltPropHeight > boundingClientRect
					this.maintainHeightOrder( body, i );
				}
			}
			else {
				this.maintainHeightOrder( body, i );
			}

			header = window._lyteAccordion.findHeader( body );

			if( header ) {
				header.setAttribute( 'aria-expanded', !body._close );
			}

			body.setAttribute( 'aria-hidden', !!body._close );

			if( body._close ) {
				body.classList.add( 'lyteAccordionBodyHide' );
			}

		}

		this.didConnectCalled = true;
	}

    executeAfterRender() {
		if( !this.$node ) {
			return ;
		}
		this.execNonRetCalls( [ 'afterRender', this ] );
	}

    attachScrolls(item) {
		if( !this.$node ) {
			return ;
		}

		var node = this.getYieldElement(), nodes = item ? [ item ] : node.children,
		i = 0, body;

		for( ; i < nodes.length; i++ ) {
			if( nodes[ i ].tagName !== 'LYTE-ACCORDION-ITEM' ) {
				continue;
			}

			body = nodes[ i ].querySelector( 'lyte-accordion-body' );
			if( !body ) {
				continue;
			}

			body.style.overflow = 'auto';
		}
	}

    getAllHeights() {
		this.setData( 'heights', {} );

		// A hack to make sure our attachScrolls happens before readHeights	
		_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.attachScrolls, this );
		_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.readHeights, this );
		_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate( this.writeHeights, this );
		_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.executeAfterRender, this );
		
	}

    didConnect() {
		this.setData( 'rAFMap', {} );		
		this.getAllHeights()
	}

    initializeItem(item) {
		this.flag = undefined;

		if( !this.getData( 'rAFMap' ) ) {
			this.setData( 'rAFMap', {} );
		}

		this.attachScrolls( item );
		this.readItemHeight( item );
		this.writeItemHeight( item );

	}

    readItemHeight(item) {
		var index = this.getItemIndex( item ),
		dynamic = this.getData( 'ltPropDynamic' ),
		body = item.querySelector( 'lyte-accordion-body' );

		if( !body ) {
			return ;
		}

		this.setEvent( body );
		// For now it looks like all the accordion-items must be specified at the start
		if( !dynamic ) {
			this.calculateHeight( body, index );
		}

		// if( 
		// 	item.classList.contains( 'lyteAccordionActive' ) 
		// 	&& this.getData( 'ltPropExclusive' ) && this.isAlreadyOpen()
		// ) {
		// 	this.flag = index;
		// }
	}

    writeItemHeight(item) {
		var body = item.querySelector( 'lyte-accordion-body' ),
		index = this.getItemIndex( item ),
		exclusive = this.getData( 'ltPropExclusive' ),
		openAccordion;

		if( !body ) {
			return ;
		}

		body.setAttribute( 'map', index );

		if( !item.classList.contains( 'lyteAccordionActive' ) ) {
			/* When setting height transitionend was fired in safari but not in other browsers */
			body._close = true;
			body.style.height = '0px';
		}
		// else if( exclusive ) {
		// 	// if( this.flag != index ) {
		// 		/* When setting height transitionend was fired in safari but not in other browsers */
		// 		body._close = true;
		// 		item.classList.remove( 'lyteAccordionActive' );
		// 		body.style.height = '0px';
		// 	// }
		// 	// else {
		// 	// 	// Doing this to achieve this precedence: inline style > ltPropHeight > boundingClientRect
		// 	// 	this.maintainHeightOrder( body, index );
		// 	// }
		// }
		else /* if( !exclusive ) */ {
			if( exclusive ) {
				openAccordion = this.getOpenAccordion();

				if( openAccordion ) {
					openAccordion.close();
				}

				this.maintainHeightOrder( body, index );
			}
			else {
				this.maintainHeightOrder( body, index );
			}
			
		}
	}

    getOpenAccordion() {
		var items = this.getYieldElement().children,
		body;

		for( var i = 0; i < items.length; i++ ) {
			body = items[ i ].querySelector( 'lyte-accordion-body' )
			if( body && body._close === false  ) {
				return items[ i ];
			}
		}
	}

    isAlreadyOpen() {
		var items = this.getYieldElement().children,
		body;

		for( var i = 0; i < items.length; i++ ) {
			body = items[ i ].querySelector( 'lyte-accordion-body' )
			if( body && body._close === false  ) {
				return true;
			}
		}

		return false;
	}

    getItemIndex(item) {
		var index = 0;

		while( item.previousElementSibling ) {
			item = item.previousElementSibling;

			if( item.tagName === 'LYTE-ACCORDION-ITEM' ) {
				index++;
			}
		}

		return index;
	}

    getConfiguration() {
		var config = {};
		
		config.transition = this.getData( 'ltPropDuration' )
		config.height = this.getData( 'ltPropHeight' )
		config.exclusive = this.getData( 'ltPropExclusive' )
		return config;
	}

    static observers(arg1) {
        return Object.assign(super.observers({
            nestedClassObserver: function() {
                var accordion = this.$node,
                nested = this.getData( 'ltPropNested' );

                if( nested ) {
                    accordion.classList.add( 'lyteAccordionNested' );
                }
                else {
                    accordion.classList.remove( 'lyteAccordionNested' );
                }
            }.observes( 'ltPropNested' ).on( 'didConnect' )
        }), arg1);
    }

    _() {
        _;
    }
}

LyteAccordionComponent._template = "<template tag-name=\"lyte-accordion\"> <lyte-yield yield-name=\"yield\"> </lyte-yield> </template>";;
LyteAccordionComponent._dynamicNodes = [{"t":"i","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteAccordionComponent._observedAttributes = [
    "ltPropDuration",
    "ltPropHeight",
    "ltPropExclusive",
    "ltPropYield",
    "ltPropDynamic",
    "ltPropNested",
    "ltPropPreventAutoScroll"
];

window._lyteAccordion = {

	_lyteAccordionHeaderID: 0,

	_lyteAccordionBodyID: 0,

	generateHeaderID: function() {
		return 'lyte_accordion_header_' + _lyteAccordion._lyteAccordionHeaderID++;
	},

	generateBodyID: function() {
		return 'lyte_accordion_body_' + _lyteAccordion._lyteAccordionBodyID++;
	},

	findHeader: function( body ) {
		while( body 
			&& body.tagName !== 'LYTE-ACCORDION-HEADER' 
		) {
			body = body.previousElementSibling;
		}

		return body;
	},

	findProperParentS: function( elm ) {
		var properparent, stack = [], found = false, i;

		while( elm.tagName != "LYTE-YIELD" && elm.tagName != 'HTML' ) {
			properparent = elm;
			stack.push( elm );
			elm = elm.parentElement;

			// Clicking on a node and it gets detached by one of the bottom event listeners before it comes here
			if( !elm ) {
				return null;
			}
		}

		for( i = stack.length - 1; i > -1; i-- ) {
			if( stack[ i ].tagName === 'LYTE-ACCORDION-HEADER' 
				|| ( stack.length === 1 && stack[ i ].tagName === 'LYTE-ACCORDION-ITEM' ) 
			) {
				found = true;
				break;
			}
		}

		if( !found ) {
			return null;
		}

		// May need to add a check here
		return properparent.children[ 0 ];

	},

	findProperParent: function( element ) {
		var properparent;

		if( !element ) {
			return ;
		}

		while( element.tagName != "LYTE-YIELD" && element.tagName != 'HTML' ) {
			properparent = element;
			element = element.parentElement;

			// Clicking on a node and it gets detached by one of the bottom event listeners before it comes here
			if( !element ) {
				return {};
			}
		}

		// May need to add a check here
		if( ( properparent.children[ 0 ] || {} ).tagName === 'LYTE-ACCORDION-HEADER' ) {
			return properparent.children[ 0 ];
		}

	}
};

document.addEventListener( 'click', function( event ) {
	var elementClicked = _lyteAccordion.findProperParentS( event.target ), 
	parent, temp, childs, flag, i = 0, sibling, component, configuration, transition,
	openElement, bodyElement, returnval, itsStyle, activeElement;

	if( !elementClicked ) {
		return ;
	}

	parent  = elementClicked;

	while(
		parent.tagName != 'HTML' 
		&& parent.tagName != 'LYTE-ACCORDION'
	) {
		parent = parent.parentElement;

		if( !parent ) {
			return ;
		}
	}

	// This is a safety check because it is generally guaranteed to be a LYTE-ACCORDION Element
	if( parent.tagName == 'HTML' ) {
		return ;
	}

	temp  = parent.querySelector( 'lyte-accordion-item' ).parentElement || parent.querySelector( 'lyte-yield' );
	childs = temp.children;
	flag = true;

	// why is this here??
	for( ; i < childs.length; i++ ) {
		if( childs[ i ].querySelector( 'lyte-accordion-header' ) == elementClicked ) {
			flag = false
			break;
		}
	}

	if( flag ) {
		return ;
	}

	/* sibling - The lyte-accordion-body tag of current clicked accordion item */

	sibling = temp.children[ i ].querySelector( 'lyte-accordion-body' );
	component = temp.closest( 'lyte-accordion' ).component;
	configuration = component.getConfiguration();
	transition = configuration.transition;

	/* When they haven't provided a lyte-accordion-body tag */
	if(
		!sibling 
		|| sibling.tagName != 'LYTE-ACCORDION-BODY'
	) {
		// Close accordion
 		if( 
 			configuration 
 			&& configuration.exclusive 
 			&& ( openElement = component.getOpenAccordion() )
 			&& ( bodyElement = openElement.querySelector( 'lyte-accordion-body' ) )
 		 ) {
 			
 			bodyElement.style.transitionDuration = transition;
 			if( component.getMethods( 'onBeforeClose' ) ) {
 				returnval = component.execAndCheck( 'onBeforeClose', event );
	 			if( returnval ){
	 				component.initiateClose( bodyElement, function( e ) {
	 					this.execNonRetCalls( [ 'onClose', e, _lyteAccordion.findProperParent( e.target ).parentElement, this ] );
	 				}, event );
	 			}
	 			else {
	 				return ;
	 			} 			
	 		}
	 		else {
	 			component.initiateClose( bodyElement, function( e ) {
	 				this.execNonRetCalls( [ 'onClose', e, _lyteAccordion.findProperParent( e.target ).parentElement, this ] );
	 			}, event );		
	 		}
 		}


 		if( temp.children[ i ].classList.contains( 'lyteAccordionActive' ) ) {
 			temp.children[ i ].classList.remove( 'lyteAccordionActive' )
 		}
 		else {
 			temp.children[ i ].classList.add( 'lyteAccordionActive' )
 		}

 		_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( function() {
 			component.execNonRetCalls( [ 'onChanged', event, _lyteAccordion.findProperParent( event.target ).parentElement, component ] );
 		} )
 		
		return ;
	}

	itsStyle = window.getComputedStyle( sibling ).height;
 	if( transition ) {
 		sibling.style.transitionDuration = transition;

 		// Added so that it slides the first time as well
 		if( ( openElement = component.getOpenAccordion() )
 			&& ( bodyElement = openElement.querySelector( 'lyte-accordion-body' ) ) ) {
 			 	bodyElement.style.transitionDuration = transition;
 		}
 	}

 	activeElement = component.getOpenAccordion();

 	// Close the already opened accordion-item in exclusive accordion. 
	if( 
		configuration 
		&& configuration.exclusive 
		&& activeElement 
		&& activeElement != sibling.parentElement
	) {	
		if( 
			( bodyElement = activeElement.querySelector( 'lyte-accordion-body' ) )
			&& component.getMethods( 'onBeforeClose' ) 
		) {
			returnval = component.execAndCheck( 'onBeforeClose', event );
	 		if( returnval ) {
	 			component.initiateClose( bodyElement, function( e ) {
	 				this.execNonRetCalls( [ 'onClose', e, _lyteAccordion.findProperParent( e.target ).parentElement, this ] );
	 			}, event );
	 		}
	 		else {
	 			return ;
	 		} 			
		}
	 	else if( ( bodyElement = activeElement.querySelector( 'lyte-accordion-body' ) ) ) {
	 		component.initiateClose( bodyElement, function( e ) {
	 			this.execNonRetCalls( [ 'onClose', e, _lyteAccordion.findProperParent( e.target ).parentElement, this ] );
	 		}, event );
	 	}

	 	// If the element has no bodyelement you still need to remove it.
 		if( activeElement.classList.contains( 'lyteAccordionActive' ) ) {
 			activeElement.classList.remove( 'lyteAccordionActive' )
 		}
		
	}
	
	// itsStyle.height = '0px' -> Meaning it is closed
	if( itsStyle == '0px' ) {
	 	
	 	if( component.getMethods( 'onBeforeOpen' ) ) {
	 		returnval = component.execAndCheck( 'onBeforeOpen', event );

	 		// Get configuration again incase user sets height in onBeforeOpen
	 		configuration = component.getConfiguration();
	 		if( returnval ) {
	 			component.initiateOpen( sibling, configuration, event );
	 		}
	 		else {
	 			return ;
	 		}	 		
	 	}
	 	else {
	 		component.initiateOpen( sibling, configuration, event );
	 	}
	 }

	 // It is opened so close it
	 else {
	 	if( component.getMethods( 'onBeforeClose' ) ) {
	 		returnval = component.execAndCheck( 'onBeforeClose', event );
	 		if( returnval ) {
	 			component.initiateClose( sibling, function( e ) {
	 				var ret =  _lyteAccordion.findProperParent( e.target );
	 				this.execNonRetCalls( [ 'onClose', e, ret.parentElement, this ] );
	 				this.execNonRetCalls( [ 'onChanged', e, ret.parentElement, this ] );
	 			}, event );
	 		}
	 		else{
	 			return;
	 		}
	 	}
	 	else {
	 		component.initiateClose( sibling, function( e ) {
	 			var ret =  _lyteAccordion.findProperParent( e.target );
	 			this.execNonRetCalls( [ 'onClose', e, ret.parentElement, this ] );
	 			this.execNonRetCalls( [ 'onChanged', e, ret.parentElement, this ] );
	 		}, event );
	 	}
	 }
}, true );

document.addEventListener( 'keydown', function( event ) {
	var keyCode = event.keyCode, header = document.activeElement,
	accordion = header, comp;

	if( header.tagName !== 'LYTE-ACCORDION-HEADER' ) {
		return ;
	}

	if( keyCode === 13
		|| keyCode === 32
	) {

		while( accordion
			&& accordion.tagName !== 'LYTE-ACCORDION'
			&& accordion.tagName !== 'HTML' 
		) {
			accordion = accordion.parentElement;
		}

		if( accordion.tagName !== 'LYTE-ACCORDION' ) {
			return ;
		}

		comp = accordion.component;
		event.preventDefault();

		switch( keyCode ) {
			case 13:
			case 32:
				comp.toggleCurrentPanel( header );
				break;
		}
	}
	
} );

/**
 * @customElement lyte-accordion-item
 */
/**
 * @customElement lyte-accordion-header
 */
/**
 * @customElement lyte-accordion-body
 */

if( !window._lyteUiUtils.registeredCustomElements[ 'lyte-accordion-item' ] ) {
    window._lyteUiUtils.registeredCustomElements[ 'lyte-accordion-item' ] = true;

    class LyteAccordionItemCustomElements extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return [ 'lyte-shortcut' ]; 
        }

        connectedCallback() {
            var lyteNode = this.$node;
            var that = lyteNode , comp = lyteNode;

            if( lyteNode._hasConnectedCallbackFired ) {
				return ;
			}

            lyteNode._hasConnectedCallbackFired = true;

            while(
				comp.tagName != 'HTML' 
				&& comp.tagName != 'LYTE-ACCORDION'
			) {
				comp = comp.parentElement;

				if( !comp ) {
					return ;
				}
			}

            // This is a safety check because it is generally guaranteed to be a LYTE-ACCORDION Element
            if( comp.tagName == 'HTML' ) {
				return ;
			}

            comp = comp.component;

            lyteNode.open = function() {
				if( !that.classList.contains( 'lyteAccordionActive' ) ) {
					that.click();
				}
			}

            lyteNode.close = function( immediate ) {

				that._immediate = immediate;

				if( that.classList.contains( 'lyteAccordionActive' ) ) {
					that.click();
				}

				that._immediate = false;
			}

            if( comp.didConnectCalled ) {
				comp.initializeItem( lyteNode );
			}
        }

        attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
            var lyteNode = this.$node;
            if( typeof window.shortcut == "function" ){
	         	if( !newValue ) {
	            	return ;
	          	}

	          	newValue = JSON.parse( newValue )
	          	if( !newValue.key ){
	            	return ;
	          	}

	          	var newKey = newValue.key, type = newValue.type, wait = newValue.wait;
	          	if( !oldValue ){
	            	oldValue = {};
	          	}

	          	window.shortcut.push( {
	            	newKey: newKey,
	            	type: type,
	            	wait: wait,
	            	oldKey: oldValue.key,
	            	value: lyteNode
	         	} )
	      	}
        }

        _() {
            _;
        }
    }

    LyteAccordionItemCustomElements.options = {clone : {allCallbacks : false}};

    LyteAccordionItemCustomElements.register("lyte-accordion-item");
}

if( !window._lyteUiUtils.registeredCustomElements[ 'lyte-accordion-header' ] ) {
    window._lyteUiUtils.registeredCustomElements[ 'lyte-accordion-header' ] = true;

    class LyteAccordionHeaderCustomElements extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return [ ];
        }

        connectedCallback() {
            var lyteNode = this.$node;
            var id = lyteNode.getAttribute( 'id' );

            lyteNode.setAttribute( 'role', 'button' );

            if( !lyteNode.hasAttribute( 'tabindex' ) ) {
				lyteNode.setAttribute( 'tabindex', '0' );
			}

            if( !id ) {
				lyteNode.setAttribute( 'id', _lyteAccordion.generateHeaderID() );
			}
        }

        _() {
            _;
        }
    }

    LyteAccordionHeaderCustomElements.options = {clone : {allCallbacks : false}};

    LyteAccordionHeaderCustomElements.register("lyte-accordion-header");
}

if( !window._lyteUiUtils.registeredCustomElements[ 'lyte-accordion-body' ] ) {
    window._lyteUiUtils.registeredCustomElements[ 'lyte-accordion-body' ] = true;

    class LyteAccordionBodyCustomElements extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return [ ];
        }

        connectedCallback() {
            var lyteNode = this.$node;
            var id = lyteNode.getAttribute( 'id' ), 
			head = _lyteAccordion.findHeader( lyteNode );

            lyteNode.setAttribute( 'role', 'region' );

            if( !id ) {
				id = _lyteAccordion.generateBodyID();
				lyteNode.setAttribute( 'id', id );
			}

            if( head ) {
				head.setAttribute( 'aria-controls', id );
				lyteNode.setAttribute( 'aria-labelledby', head.getAttribute( 'id' ) );
			}
        }

        _() {
            _;
        }
    }

    LyteAccordionBodyCustomElements.options = {clone : {allCallbacks : false}};

    LyteAccordionBodyCustomElements.register("lyte-accordion-body");
}

/**
 * @syntax yielded
 * <lyte-accordion>
 *     <template is="registerYield" yield-name="yield">
 *         <lyte-accordion-item>
 *             <lyte-accordion-header>
 *                 HEADER 1
 *             </lyte-accordion-header>
 *             <lyte-accordion-body>
 *                 CONTENT 1
 *             </lyte-accordion-body>
 *         </lyte-accordion-item>
 *         <lyte-accordion-item>
 *             <lyte-accordion-header>
 *                 HEADER 2
 *             </lyte-accordion-header>
 *             <lyte-accordion-body>
 *                 CONTENT 2
 *             </lyte-accordion-body>
 *         </lyte-accordion-item>
 *     </template>
 * </lyte-accordion>
 */


LyteAccordionComponent.register("lyte-accordion", {
    hash: "LyteAccordionComponent_6",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});


/***/ })

}]);
//# sourceMappingURL=admin-comp.js.map