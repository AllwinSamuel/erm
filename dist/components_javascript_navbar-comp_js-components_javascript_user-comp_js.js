"use strict";
(self["webpackChunkerm"] = self["webpackChunkerm"] || []).push([["components_javascript_navbar-comp_js-components_javascript_user-comp_js"],{

/***/ 90068352:
/*!**********************************************!*\
  !*** ./components/javascript/navbar-comp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComp": () => (/* binding */ NavbarComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});



class NavbarComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
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

NavbarComp._template = "<template tag-name=\"navbar-comp\"> from nav </template>";;
NavbarComp._dynamicNodes = [];;
NavbarComp._observedAttributes = [];



NavbarComp.register("navbar-comp", {
    hash: "NavbarComp_8",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 15949220:
/*!********************************************!*\
  !*** ./components/javascript/user-comp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComp": () => (/* binding */ UserComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-table.js */ 73674149);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    },

    "prop": function() {
        return _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop;
    }
});





class UserComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}
    init(){
       
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

UserComp._template = "<template tag-name=\"user-comp\"> <lyte-table lt-prop-yield=\"true\" lt-prop-border=\"true\" lt-prop-resize=\"{&quot;horizontal&quot;: true, &quot;vertical&quot; : true}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-table-structure> <lyte-thead> <lyte-tr> <lyte-th>Attibutes</lyte-th> <lyte-th>Values</lyte-th> </lyte-tr> </lyte-thead> <lyte-tbody> <template object=\"{{user}}\" value=\"value\" key=\"key\" is=\"forIn\" _new=\"true\"><lyte-tr> <lyte-td> {{key}} </lyte-td> <lyte-td> {{value}} </lyte-td> </lyte-tr></template> </lyte-tbody> </lyte-table-structure> </template> </lyte-table> <lyte-yield yield-name=\"content\"></lyte-yield> </template><style>@import url('/node_modules/@zoho/lyte-ui-component/dist/components/styles/lyte-ui-table.css');\n</style>";;
UserComp._dynamicNodes = [{"t":"r","p":[1,1],"dN":[{"t":"cD","p":[1,1,1,1],"in":6,"sibl":[5]},{"t":"cD","p":[1,1,1,3],"in":5,"sibl":[4]},{"t":"cD","p":[1,1,1],"in":4,"sibl":[3]},{"t":"cD","p":[1,1],"in":3,"sibl":[2]},{"t":"a","p":[1,3,1]},{"t":"fI","p":[1,3,1],"dN":[{"t":"tX","p":[0,1,1]},{"t":"cD","p":[0,1],"in":2,"sibl":[1]},{"t":"tX","p":[0,3,1]},{"t":"cD","p":[0,3],"in":1,"sibl":[0]},{"t":"cD","p":[0],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[6,5,4,3,2,1,0],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"i","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
UserComp._observedAttributes = [];



UserComp.register("user-comp", {
    hash: "UserComp_81",
    refHash: "C_erm_app_0"
}); 


/***/ })

}]);
//# sourceMappingURL=components_javascript_navbar-comp_js-components_javascript_user-comp_js.js.map