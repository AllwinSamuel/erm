"use strict";
(self["webpackChunkerm"] = self["webpackChunkerm"] || []).push([["components_javascript_list-comp_js"],{

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
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-accordion.js */ 93535713);
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
          console.log(this.$app.$ServiceProvider.getUsers());
      }
    data(arg1) {
		return Object.assign(super.data({  
			"users":this.$app.prop("array"),
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

ListComp._template = "<template tag-name=\"list-comp\"> <template items=\"{{users}}\" item=\"user\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-accordion> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-accordion-item> <lyte-accordion-header>{{user.name}}<lyte-icon class=\"lyteAccordionArrow\"></lyte-icon></lyte-accordion-header> <lyte-accordion-body> <pre><div>\n                  <span>email:</span><span>{{user.email}}</span>\n                  <span>address:</span><span>{{user.address}}</span>\n                  <span>designation:</span><span>{{user.designation}}</span>\n                  <go-to lt-prop-route=\"details\" lt-prop-dp=\"[&quot;{{user.employeeNumber}}&quot;]\">\n                    view all details\n                  </go-to>\n                 </div></pre> </lyte-accordion-body> </lyte-accordion-item> </template> </lyte-accordion> </template> </template><style>@import url(\"/themes/compiledCSS/ltr/custom-accord.css\");</style>";;
ListComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"f","p":[1],"dN":[{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,1,2],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"tX","p":[1,3,1,0,2,0]},{"t":"tX","p":[1,3,1,0,5,0]},{"t":"tX","p":[1,3,1,0,8,0]},{"t":"a","p":[1,3,1,0,10]},{"t":"cD","p":[1,3,1,0,10],"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ListComp._observedAttributes = ["users"];



ListComp.register("list-comp", {
    hash: "ListComp_77",
    refHash: "C_erm_app_0"
}); 


/***/ })

}]);
//# sourceMappingURL=components_javascript_list-comp_js.js.map