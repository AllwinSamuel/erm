(self["webpackChunkerm"] = self["webpackChunkerm"] || []).push([["app-init"],{

/***/ 33407950:
/*!*********************************************!*\
  !*** ./components/javascript/alert-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComp": () => (/* binding */ AlertComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-alert.js */ 63712806);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});




class AlertComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
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

AlertComp._template = "<template tag-name=\"alert-comp\"> <lyte-alert lt-prop-wrapper-class=\"sampleAlert\" lt-prop=\"{&quot;buttons&quot; : [{&quot;type&quot;:&quot;accept&quot;,&quot;text&quot;:&quot;Ok&quot;,&quot;appearance&quot;:&quot;success&quot;},{&quot;type&quot;:&quot;reject&quot;,&quot;text&quot;:&quot;Cancel&quot;,&quot;appearance&quot;:&quot;failure&quot;}]}\" lt-prop-type=\"warning\" lt-prop-yield=\"true\" lt-prop-show=\"true\" on-accept=\"{{method('perform')}}\"> <template is=\"registerYield\" yield-name=\"alert\"> <lyte-alert-header> {{header}} </lyte-alert-header> <lyte-alert-content> {{content}} </lyte-alert-content> </template> </lyte-alert> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-alert.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n</style>";;
AlertComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,1]},{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"tX","p":[3,1]},{"t":"cD","p":[3],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
AlertComp._observedAttributes = [];



AlertComp.register("alert-comp", {
    hash: "AlertComp_4",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 49937256:
/*!********************************************!*\
  !*** ./components/javascript/form-comp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComp": () => (/* binding */ FormComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-input.js */ 97686034);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-dropdown.js */ 9950326);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js */ 62028913);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});






class FormComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}
    init(){
           this.setData("employeeNumber",this.data.user.employeeNumber);
           this.setData("name",this.data.user.name);
           this.setData("email",this.data.user.email);
           this.setData("phone",this.data.user.phone);
           this.setData("address",this.data.user.address);
           this.setData("department",this.data.user.department);
           this.setData("role",this.data.user.role);
           this.setData("designation",this.data.user.designation);
           this.setData("gender",this.data.user.gender);
      }
    data(arg1) {
		return Object.assign(super.data({
			show: this.$app.prop("boolean",{default : true}),
			employeeNumber: this.$app.prop("string"),
      name: this.$app.prop("string"),
      email: this.$app.prop("string"),
      phone: this.$app.prop("string"),
      address: this.$app.prop("string"),
      department: this.$app.prop("string"),
      role: this.$app.prop("string"),
      designation: this.$app.prop("string"),
      gender: this.$app.prop("string"),     
		}), arg1);	
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			submit: function () {
				try {
					const { employeeNumber, name, email, phone, address, department, role, designation, gender, type } = this.data;
					if (!employeeNumber || !name || !email || !phone || !address || !department || !role || !designation || !gender) {
						this.$app.$ServiceProvider.toast("All fields are required!", "error");
						return;
					}
					const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					if (!emailRegex.test(email)) {
						this.$app.$ServiceProvider.toast("Please enter a valid email address!","error");
						return;
					}
					if (!/^\d+$/.test(phone)) {
						this.$app.$ServiceProvider.toast("Please enter a valid phone number!", "error");
						return;
					}
					const user = {
						employeeNumber,
						name,
						email,
						phone,
						address,
						department,
						role,
						designation,
						gender,
					};
					if (type.toLowerCase().trim() === "add") {
						this.$app.$ServiceProvider.showAlert(
							"ADD EMPLOYEE!",
							"Are you sure you want to add this employee?",
							() => {
								this.$app.$ServiceProvider.addUser(user);
							}
						);
					} else {
						this.$app.$ServiceProvider.showAlert(
							"UPDATE EMPLOYEE!",
							"Are you sure you want to update this employee " + employeeNumber + "?",
							() => {
								this.$app.$ServiceProvider.updateUser(user);
							}
						);
					}
					this.$node.remove();
				} catch (e) {
					console.log(e);
				}
			},
			
      close:function(){
				this.$node.remove();
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

FormComp._template = "<template tag-name=\"form-comp\"> <div class=\"form-container\"> <button class=\"form-btn--close\" onclick=\"{{action('close')}}\">X</button> <form> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(type,'==','add')}}\" is=\"case\" lc-id=\"lc_id_0\"><h2>ADD EMPLOYEE</h2></template><template default=\"\"><h2>UPDATE EMPLOYEE</h2></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(type,'!=','update')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-input lt-prop-label=\"EmployeeNumber\" lt-prop-placeholder=\"Enter EmployeeNumber\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(employeeNumber)}}\"></lyte-input></template></template> <lyte-input lt-prop-label=\"Name\" lt-prop-placeholder=\"Enter Name\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(name)}}\"></lyte-input> <lyte-input lt-prop-label=\"Email\" lt-prop-placeholder=\"Enter Email\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(email)}}\"></lyte-input> <lyte-input lt-prop-label=\"Phone\" lt-prop-placeholder=\"Enter Phone\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(phone)}}\"></lyte-input> <lyte-input lt-prop-label=\"Address\" lt-prop-placeholder=\"Enter Address\" lt-prop-type=\"textarea\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(address)}}\"></lyte-input> <label for=\"department\">Department</label> <lyte-dropdown lt-prop-id=\"department\" lt-prop-class=\"form-input\" lt-prop-selected=\"{{lbind(department)}}\" lt-prop-placeholder=\"Select A Department\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"IT\">IT </lyte-drop-item> <lyte-drop-item data-value=\"HR\">HR </lyte-drop-item> <lyte-drop-item data-value=\"Finance\">Finance </lyte-drop-item> <lyte-drop-item data-value=\"Marketing\">Marketing </lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <label for=\"role\">Role</label> <lyte-dropdown lt-prop-id=\"role\" lt-prop-class=\"form-input\" lt-prop-selected=\"{{lbind(role)}}\" lt-prop-placeholder=\"Select A Role\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"Admin\">Admin </lyte-drop-item> <lyte-drop-item data-value=\"Manager\">Manager </lyte-drop-item> <lyte-drop-item data-value=\"Lead Developer\">Lead Developer </lyte-drop-item> <lyte-drop-item data-value=\"Senior Developer\">Senior Developer </lyte-drop-item> <lyte-drop-item data-value=\"Team Lead\">Team Lead</lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <lyte-input lt-prop-label=\"Designation\" lt-prop-placeholder=\"Enter Designation\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(designation)}}\"></lyte-input> <label for=\"gender\">Gender</label> <lyte-dropdown lt-prop-id=\"gender\" lt-prop-class=\"form-input\" lt-prop-selected=\"{{lbind(gender)}}\" lt-prop-placeholder=\"Select A Gender\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"Male\">Male </lyte-drop-item> <lyte-drop-item data-value=\"Female\">Female </lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <div class=\"form-btns\"> <lyte-button lt-prop-appearance=\"success\" onclick=\"{{action('submit')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Submit </template> </lyte-button> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('reset')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Reset </template> </lyte-button> </div> </form> </div> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\nform-comp{\n  position: fixed;\n  top:0;\n  left:0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 22;\n  display: flex;\n  justify-content: center;\n  overflow: auto;\n}\n.form-container{\n  position: relative;\n  background-color: rgb(255, 255, 255);\n  width:500px;\n  height: fit-content;\n  padding:30px;\n  margin-top: 40px;\n  border-radius: 15px;\n  h2{\n    margin-inline: auto;\n  }\n}\n.form-btn--close{\n  position: absolute;\n  right:5px;\n  top:10px;\n  width: 50px;\n  height: 50px;\n  font-size: larger;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\n\nform-comp form{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  height: fit-content;\n}\n\n.form-input{\n  width: 100%;\n  height: 40px;\n  text-indent: 5px;\n  border: 1px solid #d6d6d6 !important;\n}\n\nlyte-dropdown {\n  max-width: 100%;\n}\n\n.form-btns{\n  display: flex;\n  justify-content: center;\n  gap:30px;\n  margin-top: 10px;\n}\n\n.form-btns button{\n  width:150px;\n  height:40px;\n  border-radius: 8px;\n  font-size: 1.2rem;\n}\n\n.lyteField{\n  padding: 0;\n}\n</style>";;
FormComp._dynamicNodes = [{"t":"a","p":[1,1]},{"t":"s","p":[1,3,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":16,"sibl":[15]},{"t":"s","p":[1,3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":15,"sibl":[14]},{"t":"a","p":[1,3,5]},{"t":"cD","p":[1,3,5],"in":14,"sibl":[13]},{"t":"a","p":[1,3,7]},{"t":"cD","p":[1,3,7],"in":13,"sibl":[12]},{"t":"a","p":[1,3,9]},{"t":"cD","p":[1,3,9],"in":12,"sibl":[11]},{"t":"a","p":[1,3,11]},{"t":"cD","p":[1,3,11],"in":11,"sibl":[10]},{"t":"a","p":[1,3,15]},{"t":"r","p":[1,3,15,1],"dN":[{"t":"cD","p":[1,1,1],"in":5,"sibl":[4]},{"t":"cD","p":[1,1,3],"in":4,"sibl":[3]},{"t":"cD","p":[1,1,5],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,7],"in":2,"sibl":[1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[5,4,3,2,1,0],"hc":true,"trans":true,"in":10,"sibl":[9]},{"t":"cD","p":[1,3,15],"in":9,"sibl":[8]},{"t":"a","p":[1,3,19]},{"t":"r","p":[1,3,19,1],"dN":[{"t":"cD","p":[1,1,1],"in":6,"sibl":[5]},{"t":"cD","p":[1,1,3],"in":5,"sibl":[4]},{"t":"cD","p":[1,1,5],"in":4,"sibl":[3]},{"t":"cD","p":[1,1,7],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,9],"in":2,"sibl":[1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[6,5,4,3,2,1,0],"hc":true,"trans":true,"in":8,"sibl":[7]},{"t":"cD","p":[1,3,19],"in":7,"sibl":[6]},{"t":"a","p":[1,3,21]},{"t":"cD","p":[1,3,21],"in":6,"sibl":[5]},{"t":"a","p":[1,3,25]},{"t":"r","p":[1,3,25,1],"dN":[{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,3],"in":2,"sibl":[1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"cD","p":[1,3,25],"in":4,"sibl":[3]},{"t":"a","p":[1,3,27,1]},{"t":"r","p":[1,3,27,1,1],"dN":[],"in":3,"sibl":[2]},{"t":"cD","p":[1,3,27,1],"in":2,"sibl":[1]},{"t":"a","p":[1,3,27,3]},{"t":"r","p":[1,3,27,3,1],"dN":[],"in":1,"sibl":[0]},{"t":"cD","p":[1,3,27,3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[15,14,13,12,11,10,9,8,7,6,5,4,2,0]}];;

FormComp._observedAttributes = [
    "show",
    "employeeNumber",
    "name",
    "email",
    "phone",
    "address",
    "department",
    "role",
    "designation",
    "gender"
];



FormComp.register("form-comp", {
    hash: "FormComp_7",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 42596698:
/*!*********************************************!*\
  !*** ./components/javascript/toast-comp.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComp": () => (/* binding */ ToastComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_messagebox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-messagebox.js */ 1658409);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});




class ToastComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
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

ToastComp._template = "<template tag-name=\"toast-comp\"> <lyte-messagebox lt-prop-type=\"{{type}}\" lt-prop-yield=\"true\" lt-prop-show=\"true\"> <template is=\"registerYield\" yield-name=\"messageboxYield\"> <span>{{message}}</span> </template> </lyte-messagebox> </template><style>@import '/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-messagebox.css';\n</style>";;
ToastComp._dynamicNodes = [{"t":"a","p":[1]},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[1,0]}],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;
ToastComp._observedAttributes = [];



ToastComp.register("toast-comp", {
    hash: "ToastComp_87",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 63712806:
/*!**********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-alert.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteAlertComponent": () => (/* binding */ LyteAlertComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "prop": function() {
        return _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop;
    },

    "Component": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});




/**
 * Renders an alert
 * @component lyte-alert
 * @version 1.0.0
 * @dependencies lyte-button,lyte-wormhole
 */

class LyteAlertComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    data(arg1) {
        return Object.assign(super.data({
            /**
             * This specifies the type of the alert.
             * @componentProperty {success|error|warning|info|confirm} ltPropType
             * @version 1.0.0
             */
            "ltPropType":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default": ""}),

            /**
             * Set this property true to show the alert, false to hide. Note: Boolean values cannot be set using element attributes. Use ltProp() method of the element.
             * @componentProperty {boolean} ltPropShow
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropShow":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default": false}),

            /**
             *This property sets given class to wrapper div of Alert. This helps you to identify your Alert and also to make style changes to that.
             * @componentProperty {string} ltPropWrapperClass
             * @version 1.0.0
             */
            "ltPropWrapperClass":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default": ""}),

            /**
             * @componentProperty {boolean} ltPropAllowMultiple
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropAllowMultiple":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default": false}),

            /**
             * @componentProperty {string} ltPropHeading
             * @version 1.0.0
             */
            "ltPropHeading":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default": ""}),

            /**
             * @componentProperty {string} ltPropPrimaryMessage
             * @version 1.0.0
             */
            "ltPropPrimaryMessage":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default": ""}),

            /**
             * @componentProperty {string} ltPropSecondaryMessage
             * @version 1.0.0
             */
            "ltPropSecondaryMessage":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default": ""}),

            /**
             * @componentProperty {string} ltPropTop
             * @version 1.0.0
             * @suffix px,%,em
             * @default 40px
             */
            "ltPropTop":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default":"40px"}),

            /**
             * @componentProperty {array} ltPropButtons
             * @version 1.0.0
             * @default []
             */
            "ltPropButtons":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("array",{"default": []}),

            /**
             * @componentProperty {left|center|right} ltPropButtonPosition
             * @version 1.0.0
             * @default right
             */
            "ltPropButtonPosition":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default": "right"}),

            /**
             * @componentProperty {boolean} ltPropShowCloseButton
             * @version 1.0.0
             * @default true
             *
             */
            "ltPropShowCloseButton":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default": true}),

            /**
             * @componentProperty {boolean} ltPropCloseOnEscape
             * @version 1.0.0
             * @default true
             *
             */
            "ltPropCloseOnEscape":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default": true}),
            /**
             * @typedef {object} dimmer
             * @property {colorstring} color=black
             * @property {number} opacity=0.4
             * @minValue 0
             * @maxValue 1
             * @step 0.1
             */
            /**
             * @componentProperty {dimmer} ltPropDimmer
             * @version 1.0.0
             */
            "ltPropDimmer":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("object",{"default":{"color":"black","opacity":"0.4"}}),

            /**
             * @componentProperty {boolean} ltPropYield
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropYield":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default":false}),

            /**
             * @componentProperty {slideDown|zoomIn} ltPropAnimation=slideDown
             * @version 2.0.0
             */
            "ltPropAnimation" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default":"slideDown"}), //Other value zoomIn

            /**
             * @componentProperty {left|center} ltPropContentAlign=left
             * @version 2.0.0
             */
            "ltPropContentAlign" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default" : "left"}), //other value center

            /**
             * @componentProperty {boolean} ltPropAria
             * @version 3.1.0
             * @default false
             *
             */
            "ltPropAria" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { default : false } ),

            /**
             * @componentProperty {object} ltPropAriaAttributes
             * @version 3.1.0
             */
            "ltPropAriaAttributes" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'object', { default : {}, watch:true } ),

            /**
             * @componentProperty {boolean} ltPropPreventFocus
             * @version 3.3.0
             * @default false
             *
             */
            "ltPropPreventFocus" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { default : false } ),
            "ltPropFocusOnClose" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean' , {
                default : false
            }),


            
            "nonYieldFooter" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default":true}),
            "triggerShow" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("number",{"default":0}),
            "escClicked" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object',{"default" : {}})
        }), arg1);
    }

    didConnect() {
        if(this.$node.ltProp("show")){
            this.setData('triggerShow',this.getData('triggerShow')+1);
        }
    }

    /**
     * The method is going to add the aria properties to the alert component
     *
     */
    addAriaValues() {
        if(this.getData('ltPropAria')){
            var ariaProp = this.getData('ltPropAriaAttributes') || {};
            if('aria-labelledby' in ariaProp){
                var header = this.getAlertWidget('header');
                if(header){
                    header.classList.add( ariaProp['aria-labelledby'] );
                }
            }
            if('aria-describedby' in ariaProp){
                var content = this.getAlertWidget('content');
                if(content){
                    content.classList.add(ariaProp['aria-describedby']);
                }
            }
            window._lyteUiUtils.setAttribute( this.getAlertWidget(), ariaProp, {} );
            var closeIcon = this.getAlertWidget('close');
            if(closeIcon){
                closeIcon.setAttribute('aria-label',ariaProp['close-label'] || 'Close icon at top right position');
            }
        }
    }

    /**
     * The method is going to return the element from the alert based on the prop value
     * @param {property} prop - The type of element to be returned
     *
     */
    getAlertWidget(prop) {
        if(prop === "header"){
            return this.getData('ltPropYield') ? this.childComp.querySelector('lyte-alert-header') : this.childComp.querySelector('.alertHeader');
        }
        else if(prop === "content"){
            return this.getData('ltPropYield') ? this.childComp.querySelector('lyte-alert-content') : this.childComp.querySelector('.alertContentMiddle');
        }
        else if(prop === "close"){
            return this.childComp.querySelector('.alertClose');
        }
        else{
            return this.childComp.querySelector('.alertPopup');
        }
    }

    printId() {
        console.log("this.openTId ---> "+this.openTId);
        console.log("this.showTId ---> "+this.showTId);
        console.log("this.closeTId ---> "+this.closeTId);
        console.log("this.sId ---> "+this.sId);
    }

    closeAlertFn() {

        /**
        * @method onClose
        * @version 1.0.0
        */
        if(this.getMethods("onClose")){
          this.executeMethod("onClose",this,this.getData('escClicked'));
          this.setData('escClicked' , {})
        }
    }

    /**
     * The method is going to add the left and top values to the alert
     * Add the configurations for the button which are provided using ltPropButtons
     * Makes the alert visible
     *
     */
    showAlert() {
        var self = this;
        this.showTId = setTimeout(function(){
            delete self.showTId;
            if(self.actualModalDiv){
                window._lyteUiUtils.dispatchEvent('lyteAlertBeforeOpened' , self.actualModalDiv)
                window.LytePopup.bindTransitionEnd(self.actualModalDiv);
                if(self.getData('ltPropTop') == "center"){
                    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    self.actualModalDiv.style.top = (h - self.actualModalDiv.getBoundingClientRect().height)/2 + "px";
                }
                else{
                    self.actualModalDiv.style.top = self.getData('ltPropTop');
                }
                if(self.getData("ltPropAnimation") == "zoomIn"){
                    self.actualModalDiv.classList.add('alertOpened');
                }
                self.$node.classList.add('lyteAlertOpened');
                /**
                * @method onShow
                * @version 2.2.0
                */
                if(self.getMethods('onShow')){
                    self.executeMethod('onShow',self);
                }
                setTimeout(function(){
                    window._lyteUiUtils.dispatchEvent('lyteAlertOpened' , self.actualModalDiv)
                },310)
            }
            else{
                if(self.getData('ltPropShow')){
                    self.setData('ltPropShow',false);
                }
            }
        },100);
        this.setData('ltPropShowCopy',true);
        this.addAriaValues();

        // This is the animation part check
        // Two types of animation slidedown and zoomIn

        if(this.getData("ltPropAnimation") == "slideDown"){
            this.actualModalDiv.classList.add('lyteAlertSlideDown');
        }
        else if(this.getData("ltPropAnimation") == "zoomIn"){
            this.actualModalDiv.classList.add('lyteAlertZoomIn');
        }

        // This check is for a footer button that is been given from component side


        if(this.getData('ltPropButtons') && this.getData('nonYieldFooter')){
            var buttons = this.getData('ltPropButtons');
            var buttonComp;
            for(var i=0; i<buttons.length; i++){
                buttonComp = this.actualModalDiv.querySelectorAll(".lyteAlertBtn")[i];
                var keys = Object.keys(buttons[i]);
                for(var j = 0; j<keys.length; j++){
                    if(keys[j] !== "text"){
                        buttonComp.ltProp(keys[j], buttons[i][keys[j]]);
                    }
                };
            }
            buttonComp = null;
        }



        window.LytePopup.addPopup(this);

        // Freeze layer configuration goes here

        var freezeStyle = this.childComp.querySelector(".alertFreezeLayer").style;
        freezeStyle.background = this.getData('ltPropDimmer').color;
        if(!this.addedFreezeDetails){
            freezeStyle.opacity = this.getData('ltPropDimmer').opacity;
        }


    }

    /**
     * The method is going to do the calculations and close the alert
     *
     */

    closeAlert() {
        if(this.childComp && this.actualModalDiv){
            if(this.addedFreezeDetails){
                window.LytePopup.hideOrShowFreeze("close",this);
                delete this.addedFreezeDetails;
            }
            if(this.getData('ltPropAnimation') == "slideDown"){
                this.actualModalDiv.style.top = "-"+(this.actualModalDiv.getBoundingClientRect().height+this.actualModalDiv.getBoundingClientRect().top+40)+"px";
            }
            var animDur = parseFloat(document.defaultView.getComputedStyle(this.actualModalDiv).getPropertyValue("transition-duration")) * 1000;
            if(this.getData('ltPropAnimation') == "zoomIn"){
                this.actualModalDiv.classList.remove('alertOpened');
            }
            var self = this;
            this.sId = setTimeout(function(){
                self.setData('ltPropShowCopy',false);
                delete self.sId;
                delete self.actualModalDiv;
                delete self.childComp;
                // LytePopup.bodywrapperCount -= 1;
                // if(LytePopup.bodywrapperCount == 0 || LytePopup.components.length == 0){
                //     document.body.classList.remove('bodyWrapper');
                // }
                window.LytePopup.checkAndRemoveWrapper();
            },animDur-100);
            this.closeAlertFn();
            window.LytePopup.closePopup(this);
            if(this.addedFreezeDetails){
                this.childComp.querySelector(".alertFreezeLayer").style.opacity = 0;
                this.childComp.querySelector(".alertFreezeLayer").style.visibility = "";
            }
            // LytePopup.bindTransitionEnd(this.actualModalDiv);
        }
        else{
            window.LytePopup.closePopup(this);
        }
        this.$node.classList.remove('lyteAlertOpened');
    }

    didDestroy() {
        this.$node.classList.remove('lyteAlertOpened');
        if(this.openTId){
            clearTimeout(this.openTId);
            delete this.openTId;
        }
        if(this.showTId){
            clearTimeout(this.showTId);
            delete this.showTId;
        }
        if(this.closeTId){
            clearTimeout(this.closeTId);
            delete this.closeTId;
        }
        if(this.sId){
            clearTimeout(this.sId);
            delete this.sId;
        }
        if(this.childComp){
            if(this.addedFreezeDetails){
                window.LytePopup.hideOrShowFreeze("close", this);
                delete this.addedFreezeDetails;
            }
            window.LytePopup.closePopup(this);
            this.childComp.remove();
            delete this.actualModalDiv;
            delete this.childComp;
            // LytePopup.bodywrapperCount -= 1;
            // if(LytePopup.bodywrapperCount == 0 || LytePopup.components.length == 0){
            //     document.body.classList.remove('bodyWrapper');
            // }
            window.LytePopup.checkAndRemoveWrapper();
        }
    }

    static actions(arg1) {
        return Object.assign(super.actions({
            closeAlert : function(){
                this.$node.ltProp("show",false);
            },
            accept : function(buttonText){
                var retVal = true;
                /**
                * @method onAccept
                * @version 1.0.0
                */
                if(this.getMethods("onAccept")){
                    retVal = this.executeMethod("onAccept",buttonText,this);
                    retVal = retVal == undefined ? true : retVal;
                }
                retVal && this.$node.ltProp("show",false);
            },
            reject : function(buttonText){
                var retVal = true;
                /**
                * @method onReject
                * @version 1.0.0
                */
                if(this.getMethods("onReject")){
                    retVal = this.executeMethod("onReject",buttonText,this);
                    retVal = retVal == undefined ? true : retVal;
                }
                retVal && this.$node.ltProp("show",false);
            }
        }), arg1);
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            beforeWormholeAppend : function(arg){
                this.childComp = arg;
                this.actualModalDiv = this.childComp.querySelector(".alertPopup");
                if(this.getData('ltPropYield') && arg.querySelector('lyte-alert-footer')){
                    this.setData("nonYieldFooter",false);
                }
                else{
                    this.setData("nonYieldFooter",true);
                }
                if(this.getData('nonYieldFooter')){
                    if(this.getData('ltPropButtons').length == 0){
                        if(this.getData('ltPropType') == "confirm"){
                            this.setData('ltPropButtons',[{"type":"accept","text":"Ok"},{"type":"reject","text":"Cancel"}]);
                        }
                        else{
                            this.setData('ltPropButtons',[{"type":"accept","text":"Ok"}]);
                        }
                    }
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            showToggled : function() {
                var onBeforeClose = true
                if(!this.$node.ltProp("show")){
                    window._lyteUiUtils.dispatchEvent('lyteAlertBeforeClose' , this.actualModalDiv)
                    if(this.getMethods("onBeforeClose")){
                        onBeforeClose = this.executeMethod("onBeforeClose",this,this.getData('escClicked'));
                    }
                }
                if(onBeforeClose === false){
                    this.setData("ltPropShow" , true)
                    return;
                }
                if(this.$node.ltProp("show")){
                    if(this.closeTId){
                        clearTimeout(this.closeTId);
                        delete this.closeTId;
                    }
                    if(this.sId){
                        clearTimeout(this.sId);
                        delete this.sId;
                        this.setData('ltPropShowCopy',false);
                        delete this.sId;
                        delete this.actualModalDiv;
                        delete this.childComp;
                    }
                    var self = this;
                    this.openTId = setTimeout(function(){
                        delete self.openTId;
                        document.body.classList.add('bodyWrapper');
                        // LytePopup.bodywrapperCount += 1;
                        self.showAlert();
                    },0);
                }
                else{
                    if(this.openTId){
                        clearTimeout(this.openTId);
                        delete this.openTId;
                    }
                    if(this.showTId){
                        clearTimeout(this.showTId);
                        delete this.showTId;
                    }
                    var self = this;
                    this.closeTId = setTimeout(function(){
                        delete self.closeTId;
                        self.closeAlert();
                    },0);
                }
            }.observes('ltPropShow','triggerShow')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteAlertComponent._template = "<template tag-name=\"lyte-alert\" role=\"alert\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropShowCopy}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-wormhole on-before-append=\"{{method(&quot;beforeWormholeAppend&quot;)}}\" lt-prop-show=\"{{ltPropShow}}\" lt-prop-focus-on-close=\"{{ltPropFocusOnClose}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div class=\"alertWrapper {{ltPropWrapperClass}} lytePopupZI\"> <div class=\"{{lyteUiConcatAlertClass(ltPropContentAlign,'alertPopup')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropShowCloseButton}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyte-svg alertClose\" onclick=\"{{action('closeAlert')}}\" tabindex=\"0\"></span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"alert\"></lyte-yield> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIfEquals(ltPropHeading,''),'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"alertHeader\"> <span class=\"dBlock\">{{ltPropHeading}}</span> </div> </template></template> <div class=\"alertContent\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIfEquals(ltPropType,''),'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"alertContentMiddle\"> <span class=\"{{lyteUiConcatTypeClass(ltPropType,'AlertIcon','lyteStatusIcon')}}\"></span> </div> </template></template> <div class=\"alertContentMiddle\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIfEquals(ltPropPrimaryMessage,''),'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div> <span class=\"alertPrimaryMsg\">{{ltPropPrimaryMessage}}</span> </div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIfEquals(ltPropSecondaryMessage,''),'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div> <span class=\"alertSecondaryMsg\">{{ltPropSecondaryMessage}}</span> </div> </template></template> </div> <div class=\"clearFloat\"></div> </div> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{nonYieldFooter}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIsEmptyArray(ltPropButtons),'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"{{lyteUiConcat('alertFooter ',ltPropButtonPosition)}}\"> <template items=\"{{ltPropButtons}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> {{log(ltPropButtons.type)}} <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiIfEquals(item.type,'accept')}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-button class=\"lyteAlertBtn\" onclick=\"{{action('accept',item.text)}}\"> <template is=\"registerYield\" yield-name=\"text\">{{item.text}}</template> </lyte-button> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiIfEquals(item.type,'reject')}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-button class=\"lyteAlertBtn\" onclick=\"{{action('reject',item.text)}}\"> <template is=\"registerYield\" yield-name=\"text\">{{item.text}}</template> </lyte-button> </template></template> </template> </div> </template></template> </template></template> </div> <div class=\"{{lyteUiAddShowClass(ltPropShowCopy,'','alertFreezeLayer')}}\"></div> </div> </template> </lyte-wormhole> </template></template> </template>";;
LyteAlertComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,1,3],"c":{"lc_id_0":{"dN":[{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[2],"cn":"default"},{"t":"s","p":[3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[1],"cn":"default"},{"t":"s","p":[3,3,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"default"},{"t":"s","p":[3,3,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,1,5],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"tX","p":[1]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[0]}],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"tX","p":[0]}],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"t":"a","p":[1,3]}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteAlertComponent._observedAttributes = [
    "ltPropType",
    "ltPropShow",
    "ltPropWrapperClass",
    "ltPropAllowMultiple",
    "ltPropHeading",
    "ltPropPrimaryMessage",
    "ltPropSecondaryMessage",
    "ltPropTop",
    "ltPropButtons",
    "ltPropButtonPosition",
    "ltPropShowCloseButton",
    "ltPropCloseOnEscape",
    "ltPropDimmer",
    "ltPropYield",
    "ltPropAnimation",
    "ltPropContentAlign",
    "ltPropAria",
    "ltPropAriaAttributes",
    "ltPropPreventFocus",
    "ltPropFocusOnClose",
    "nonYieldFooter",
    "triggerShow",
    "escClicked"
];

/**
 * @syntax nonYielded
 * <lyte-alert lt-prop-heading="Delete Profile" lt-prop-primary-message="Confirm Delete" lt-prop-secondary-message="Are you sure want to delete this profile?" >
 * </lyte-alert>
 */

/**
 * @syntax yielded
 * <lyte-alert lt-prop-wrapper-class = "sampleAlert" lt-prop-yield = "true">
 *     <template is = "registerYield" yield-name = "alert">
 *         <lyte-alert-header> Delete Profile </lyte-alert-header>
 *         <lyte-alert-content> Are you sure want to delete this profile? </lyte-alert-content>
 *     </template>
 * </lyte-alert>
 */



LyteAlertComponent.register("lyte-alert", {
    hash: "LyteAlertComponent_10",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});


/***/ }),

/***/ 62028913:
/*!***********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-button.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteButtonComponent": () => (/* binding */ LyteButtonComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "prop": function() {
        return _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop;
    },

    "Component": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});




/**
 * Renders a button
 * @component lyte-button
 * @version 1.0.0
 * @utility click, focus, blur
 * @dependencies lyte-shortcut
 * 		/plugins/lyte-shortcut.js
 */

class LyteButtonComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    data(arg1) {
		return Object.assign(super.data({

			/**
			 * @componentProperty {string} ltPropName
			 */

			'ltPropName': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': undefined
			} ),


			/**
			 * @componentProperty {boolean} ltPropDisabled=false
			 */

			'ltPropDisabled': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', {
				'default': false
			} ),

			/**
			 * @componentProperty {boolean} ltPropAutoFocus=false
			 */

			'ltPropAutofocus': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', {
				'default': false
			} ),

			/**
			 * @componentProperty {default | primary | secondary | success | failure} ltPropAppearance=default
			 */

			'ltPropAppearance': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'appearance', 'default' )
			} ),

			/**
			 * @componentProperty {string} ltPropId
			 */

			'ltPropId': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': undefined
			} ),

			/**
			 * @componentProperty {button | submit | reset} ltPropType=button
			 */

			'ltPropType': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': 'button'
			} ),

			/**
			 * @componentProperty {string} ltPropValue
			 */

			'ltPropValue': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': undefined
			} ),

			/**
			 * @componentProperty {string} ltPropTabindex
			 */

			'ltPropTabindex': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': undefined
			} ),

			/**
			 * @componentProperty {string} ltPropStyle
			 */

			'ltPropStyle': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'style', undefined )
			} ),

			/**
			 * @componentProperty {extra-small | small | medium | large} ltPropSize=default
			 */

			'ltPropSize': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'size', 'default' )
			} ),
			/**
			 * @componentProperty {colorString} ltPropBackgroundColor
			 */

			'ltPropBackgroundColor': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'backgroundColor', undefined )
			} ),
			/**
			 * @componentProperty {colorString} ltPropColor
			 */

			'ltPropColor': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'color', undefined )
			} ),

			/**
			 * @componentProperty {string} lyteShortcut
			 */

			'lyteShortcut': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': ''
			} ),

			/**
			 * @componentProperty {string} ltPropClass
			 */

			'ltPropClass':(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'class', '' )
			} ),
			/**
			 * @componentProperty {string} ltPropClass
			 */

			'lyteUnbound': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', {
				'default': false
			} ),

			/**
			 * @componentProperty {object} ltPropAriaButton={}
			 * @version 3.1.0
			 */

			'ltPropAriaButton': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object', {
				'default': window._lyteUiUtils.resolveDefaultValue( 'lyte-button', 'ariaButton', {} )
			} ),

			/**
			 * @componentProperty {string} ltPropText
			 */

			'ltPropText': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', {
				'default': ''
			}),
			/**
			 * @componentProperty {string} ltPropDataTabindex
			 */
			'ltPropDataTabindex': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': null }),
			'randomId': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string')
		}), arg1);
	}

    init() {
		this.pushValue();
	}

    registerFunction(fn) {
		var that = this;
		this.$node[ fn ] = function() {
			var node = that.$node,
			button = node.querySelector( 'button' ),
			disabled = node.ltProp( 'disabled' );

			if( disabled ) {
				return ;
			}

			button[ fn ]();
		}
	}

    didConnect() {
		var fns = [ 'click', 'focus', 'blur' ], i = 0,
		oldAria = {}, newAria = this.getData( 'ltPropAriaButton' );

		for( ; i < fns.length; i++ ) {
			this.registerFunction( fns[ i ] );
		}

		this.addAriaValues( oldAria, newAria );
	}

    addAriaValues(oldAria, newAria) {
		var button = this.getButtonWidget();

		window._lyteUiUtils.setAttribute( button, newAria, oldAria );
	}

    getButtonWidget() {
		return this.$node.querySelector( 'button' );
	}

    didDestroy() {
		var val;

		delete this.$node.focus;
		delete this.$node.blur;
		delete this.$node.click;

		try {
			val = JSON.parse( this.getData('lyteShortcut') );
		}
		catch( err ) {
			return ;
		}

		if( Array.isArray( val ) ) {
			val.forEach( function( shortcutConfig ) {
				if( shortcutConfig.key ) {
					window.shortcut.push( {
						newKey: undefined,
						type: undefined,
						wait: undefined,
						oldKey: shortcutConfig.key
					} );
				}
			} );
		}
		else {
			window.shortcut.push( {
				newKey: undefined,
				type: undefined,
				wait: undefined,
				oldKey: val.key
			} );
		}
	}

    pushValue(oldValue) {
		var key = this.getData( 'lyteShortcut' ),
		node = this.$node,
		// oldValue can be an array as well. Need to handle that
		oldObj = JSON.parse( oldValue || '{}' ),
		oldKey = oldObj.key;

		if(!key){
			return
		}
		window.newObj = JSON.parse( key );
		if(Array.isArray(newObj)){
			newObj.forEach(function(item){
				if(item.key){
					window.shortcut.push( {
						newKey : item.key,
						type : item.type,
						wait : item.wait,
						// Need to unregister shortcut for array case
						oldKey:undefined,
						value:node
					} );
				}
			})
		}
		else{
			if(newObj.key){
				window.shortcut.push( {
					newKey : newObj.key,
					type : newObj.type,
					wait : newObj.wait,
					oldKey: oldKey,
					value:node
				} );
			}
			else {
				window.shortcut.push( {
					newKey: undefined,
					type: undefined,
					wait: undefined,
					oldKey: oldKey
				} );
			}
		}
	}

    static actions(arg1) {
        return Object.assign(super.actions({
            check: function( event ) {
                var button = this.$node.querySelector( 'button' )
                if( button.disabled ) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            ariaObserver: function( change ) {
                var oldAria = change.oldValue,
                newAria = change.newValue;

                this.addAriaValues( oldAria, newAria );
            }.observes( 'ltPropAriaButton' ),

            shortcutChanged: function( changeObj ) {
                this.pushValue( changeObj.oldValue );
            }.observes( 'lyteShortcut' ),

            changeClass: function() {
                var cls = this.getData('ltPropClass'), tempStyle = '',
                tempClass = 'lyte-button' + ( cls ? ' ' + cls : '' ),
                app = this.getData( 'ltPropAppearance' ), size = this.getData( 'ltPropSize' ),
                color = this.getData( 'ltPropColor' ), bg = this.getData( 'ltPropBackgroundColor' );
                size = size ? size.toLowerCase() : '';
                app = app ? app : 'default';

                if( bg ) {
                    tempClass = tempClass + ' lyteBackgroundColorBtn';
                }
                else if( color ) {
                    tempClass = tempClass + ' lyteColorBtn';
                }
                else if( app.indexOf( 'default' ) !== -1 ) {
                    tempClass = tempClass + ' lyteDefaultBtn';
                }
                else if( app.indexOf( 'primary' ) !== -1 ) {
                    tempClass = tempClass + ' lytePrimaryBtn';
                }
                else if( app.indexOf( 'secondary' ) !== -1 ) {
                    tempClass = tempClass + ' lyteSecondary';
                }

                if( app.indexOf( 'success' ) !== -1 ) {
                    tempClass = tempClass + ' lyteSuccess';
                }
                else if( app.indexOf( 'failure' ) !== -1 ) {
                    tempClass = tempClass + ' lyteFailure';
                }

                if( size === 'extra-small' ) {
                    tempClass = tempClass + ' lyteExsm';
                }
                else if( size === 'small' ) {
                    tempClass = tempClass + ' lyteSm';
                }
                else if( size === 'large' ) {
                    tempClass = tempClass + ' lyteLg';
                }

                if( color ) {
                    if( !bg ) {
                        // Adding bg-color #fff because androids render a grayish button.
                        tempStyle = tempStyle + 'background-color: #fff; color:' + color + ';border-color:' + color + ';';
                    }
                    else {
                        tempStyle = tempStyle + 'background-color:' + bg + ';border-color:' + bg + ';color:' + color + ';';
                    }
                }
                else if( bg ) {
                    tempStyle = tempStyle + 'background-color:' + bg + ";border-color:" + bg + ";color:white;";
                }

                if( this.getData( 'ltPropStyle' ) ) {
                    tempStyle = tempStyle + this.getData( 'ltPropStyle' );
                }

                this.setData( 'finalStyle', tempStyle );
                this.setData( 'finalClass', tempClass );
            }.observes(
                'ltPropClass',
                'ltPropBackgroundColor',
                'ltPropColor',
                'ltPropStyle',
                'ltPropSize',
                'ltPropAppearance'
            ).on( 'init' )
        }), arg1);
    }

    _() {
        _;
    }
}

LyteButtonComponent._template = "<template tag-name=\"lyte-button\" onclick=\"{{action('check',event)}}\" onmousedown=\"{{action('check',event)}}\"> <button type=\"{{ltPropType}}\" class=\"{{finalClass}}\" value=\"{{ltPropValue}}\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" id=\"{{ltPropId}}\" name=\"{{ltPropName}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" style=\"{{finalStyle}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropText}}\" is=\"case\" lc-id=\"lc_id_0\"> {{ltPropText}} </template><template default=\"\"> <lyte-yield yield-name=\"text\"></lyte-yield> </template></template> </button> </template>";;
LyteButtonComponent._dynamicNodes = [{"t":"a","p":[1],"a":{"style":{"name":"style","dynamicValue":"finalStyle"},"t":{"name":"type","dynamicValue":"ltPropType"}}},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"i","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteButtonComponent._observedAttributes = [
    "ltPropName",
    "ltPropDisabled",
    "ltPropAutofocus",
    "ltPropAppearance",
    "ltPropId",
    "ltPropType",
    "ltPropValue",
    "ltPropTabindex",
    "ltPropStyle",
    "ltPropSize",
    "ltPropBackgroundColor",
    "ltPropColor",
    "lyteShortcut",
    "ltPropClass",
    "lyteUnbound",
    "ltPropAriaButton",
    "ltPropText",
    "ltPropDataTabindex",
    "randomId"
];

/**
 * @syntax yielded
 * <lyte-button>
 *     <template is="registerYield" yield-name="text">
 *         click me
 *     </template>
 * </lyte-button>
 */

/**
 * @syntax staticBuilder
 * <lyte-button lt-prop-text="click me"></lyte-button>
 */



LyteButtonComponent.register("lyte-button", {
    hash: "LyteButtonComponent_165",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});


/***/ }),

/***/ 9950326:
/*!*************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-dropdown.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteDropdownComponent": () => (/* binding */ LyteDropdownComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js */ 19978124);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_plugins_lyte_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/plugins/lyte-search.js */ 57616523);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_plugins_lyte_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_ui_component_plugins_lyte_search_js__WEBPACK_IMPORTED_MODULE_3__);

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





/* @Slicer.otherframeworkStart */

/*  @Slicer.otherframeworkEnd */

window._lyteDropdownItemId = 0;
window._lyteDropdownBodyId = 0;

/**
 * Renders a dropdown
 * @component lyte-dropdown
 * @version 1.0.0
 * @utility toggle,resetPosition,open,close
 * @methods onShow,onBeforeShow,onScroll,onPositionChanged,onChange,beforeSelect,onHide,onBeforeHide,onAdd,onBeforeAdd,onRemove,onBeforeRemove,onOptionSelected
 * @dependencies lyte-tooltip
 */

// _preventSetCSS has external depedency - pk - dateselect

class LyteDropdownComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    init() {
		var type = this.getData('ltPropType'),
			sel = this.getData('ltPropSelected');
		this._close = this.closeDrop1.bind(this);

		this._transEnd = this.tranEnd.bind(this);

		if (this.getData('ltPropPreventParentScroll')) {
			this.setData('ltPropFreeze', false);
		}

		if (!this.freezeLayerCreated()) {
			this.createFreezeLayer();
		}

		this.$node.getItem = function( val ) {
			var component = this.component,
			box = this.getDropBox(),
			body = component.getDropBody( box );

			return component.getItem( component.getAllItems( body ), val );
		}

		this.$node.resetPosition = function () {
			var comp = this.component,
				shouldUseSave = comp.getData('ltPropFixPositionOnOpen');

			comp.setCss(false, shouldUseSave);
		}

		// Create toggle function
		this.$node.toggle = function (event, type) {
			var val = event ? event : undefined;
			if (this.component.getData('ltPropDisabled') || this.component.getData('ltPropReadOnly')) {
				return;
			}

			this.component.showHide(val, type, true);
		}

		this.$node.getDropBox = function () {
			var component = this.component;

			return component.getDropBox();
		}

		this.$node.open = function () {
			var component = this.component,
				isOpen = component.getData('ltPropIsOpen');

			if (!isOpen) {
				this.toggle();
			}
		}

		this.$node.close = function () {
			var component = this.component,
				isOpen = this.getData('ltPropIsOpen');

			if (isOpen) {
				this.toggle();
			}

		}

		this.$node.getInitialSelected = function (options) {
			var component = this.component;

			component.setInitialSelected(options);

			return component.getData('ltPropSelected');
		}

		this.$node.getDisplayValue = function () {
			var component = this.component,
				link = component.childComp,
				body = component.getDropBody(link),
				sel = component.getData('ltPropSelected'),
				node;

			if (sel) {
				// node = body.querySelector( '[data-value="' + window._lyteUiUtils.escape( sel ) + '"]' );
				node = component.getItem(component.getAllItems(body), sel);

				if (node) {
					return node.textContent.trim();
				}
			}

			return '';
		}

		this.$node.closeError = function () {
			var component = this.component,
				link = component.childComp,
				drophead = component.getData('drophead'),
				body = component.getDropBody(link),
				nodes = body.querySelectorAll('lyte-drop-item:not(.lyteDropdownActive):not(.lyteSearchHidden)');

			if (nodes.length !== 0) {
				component.closeError(link, drophead);
			}
		}

		this.$node.updateBoxAria = function (key, value) {
			var component = this.component,
				box = component.getDropBox();

			box.setAttribute(key, value);
		}

		this.$node.updateButtonAria = function (key, value) {
			var component = this.component,
				button = component.getAriaButton();

			button.setAttribute(key, value);
		}

		this.$node.updateBodyAria = function (key, value) {
			var component = this.component,
				body = component.getDropBody(component.childComp);

			body.setAttribute(key, value);
		}

		this.$node.setValue = function (value) {
			var component = this.component,
				input = component.getSearchBox();

			if (input && input.setValue) {
				input.setValue(value);
			}
		}

		this.$node.showNoResults = function() {
			var box = this.getDropBox(),
			errorDiv = box.querySelector( '.lyteDropdownNoResult' );

			if( errorDiv ) {
				errorDiv.style.display = 'block';
			}
		}

		this.$node.hideNoResults = function() {
			var box = this.getDropBox(),
			errorDiv = box.querySelector( '.lyteDropdownNoResult' );

			if( errorDiv ) {
				errorDiv.style.display = 'none';
			}
		}

		this.$node.scrollToSelected = function() {
			var component = this.component;

			component.scrollSel();
		}

		this.$node.resetSelected = function() {
			var component = this.component,
			selected = component.getData( 'ltPropSelected' );

			component.setData( 'ltPropSelected', '' );
			component.setData( 'ltPropSelected', selected );
		}


		if (type.indexOf('multiple') !== -1
			|| type.indexOf('multisearch') !== -1
		) {
			this.setData('multiple', true);

			if (!sel) {
				this.setData('ltPropSelected', '[]');
			}

			if (type.indexOf('multisearch') !== -1) {
				this.setData('search', true);
			}

			this.setIterator();
		}
	}

    freezeLayerCreated() {
		return document.getElementById( 'lytedropdownfreezelayer' );
	}

    createFreezeLayer() {
		var freezeLayer;

		freezeLayer = document.createElement('div');
		freezeLayer.setAttribute('id', 'lytedropdownfreezelayer');
		freezeLayer.style.display = 'none';
		freezeLayer.style.opacity = '0.01';
		freezeLayer.style.background = '#fff';

		if( window._lyteUiUtils.appendLocation === 'first' ) {
			document.body.insertBefore( freezeLayer, document.body.children[ 0 ] );
		}
		else {
			document.body.appendChild( freezeLayer );
		}
	}

    getSearchBox() {
		return this.$node.querySelector('.lyteDropdownTextField');
	}

    setIterator() {
		var userValue = this.getData('ltPropUserValue'),
			sysValue = this.getData('ltPropSystemValue');

		this.setData('userValue', userValue ? userValue : 'display');
		this.setData('sysValue', sysValue ? sysValue : 'value');
	}

    didDestroy() {
		var body = this.childComp,
			mut = this.$node.mutobserver,
			freeze = this.getData('ltPropFreeze'),
			scrollsToPrevent = this.getData('ltPropPreventScroll'),
			type = this.getData( 'ltPropType' ),
			tab = this.getElementWithTabIndex();

		window.clearTimeout(this.timeoutIdForOpen);
		window.clearTimeout(this.timeoutIdForClose);
		window.clearTimeout( this.scrollEndId );

		this.popOutOfGlobalStack( this.$node );

		if (body) {

			// If a dropdown is getting destroyed when it is open, then we hide the freeze layer set because of it
			if (!body.classList.contains('lyteDropdownHidden')
				&& freeze
				&& scrollsToPrevent === 'all'
			) {
				document.getElementById('lytedropdownfreezelayer').style.display = 'none';
			}

			if (!body.classList.contains('lyteDropdownHidden') && document.body) {
				document.body.classList.remove('lyteBodyWrapper');
			}

			delete body.origindd;
			body.remove();
		}

		if (mut) {
			mut.disconnect()
		}

		this.disableParentListeners();

		// Flush autoClosed when the autoClosed dropdown is getting destroyed
		if (window._lyteDropdown.autoClosed === this.$node) {
			window._lyteDropdown.autoClosed = null;
		}

		if (window._lyteDropdown.lastDropdownWithAPromise === this.$node) {
			window._lyteDropdown.lastDropdownWithAPromise = null;
		}

		if( type === 'multisearch' && tab ) {
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( tab ).removeSearch();
		}

		delete this.childComp;
		delete this.$node.toggle;
		delete this.$node.element;

		this.$node.mutobserver = null;

		window.clearTimeout(this._FFBodyScrollOnRemove);
		window.clearTimeout(this._FFBodyScrollOnAdd);
	}

    disableParentListeners() {
		var that = this;

		if (this.scrollableParents) {
			this.scrollableParents.off('scroll', this.resetScroll);
			this.scrollableParents.off( 'wheel', this.preventDefaultBehaviour );
			this.scrollableParents.off( 'touchmove', this.preventDefaultBehaviour );
		}

		this.scrollableParents = undefined;

		if (this.lyteScrollBarParents) {

			this.lyteScrollBarParents.each(function (index, item) {

				if (item) {
					item.removeEventListener('touchmove', that.disableLyteScrollBar, true);
					item.removeEventListener('wheel', that.disableLyteScrollBar, true);
				}

			});

			this.lyteScrollBarParents = undefined;
		}

	}

    prerequisites() {
		// Not putting inside fastdom because it causes a jitter
		if (this.data.ltPropAnimate) {
			this._hgtRemoval = true
			// body.style.height = '';
		}
		this.setCss(false, true);
		this.openSlideAnimate();

		if (this.getData('call')) {
			this.childComp.removeAttribute('lyte-hidden');
		}

		this.pushIntoGlobalStack( this.$node );

		this.fireOnShow();

		if (this.shouldFocusFirstFocusableElement()) {
			this.focusFirstFocusableElement();
		}

		this.setData('call', null);
	}

    pushIntoGlobalStack(node) {
		if( window._lyteUiUtils.popupStack && window._lyteUiUtils.popupStack.globalStack ) {
			if( this.alreadyPushed( node ) ) {
				this.popOutOfGlobalStack( node );
			}

			window._lyteUiUtils.popupStack.globalStack.push( {
				childElement: this.getDropBox(),
				focusedElement: document.activeElement,
				parentElement: node
			} );
		}
	}

    alreadyPushed(node) {
		return !!~this.findIndex( node );
	}

    popOutOfGlobalStack(node) {
		if( window._lyteUiUtils.popupStack && window._lyteUiUtils.popupStack.globalStack ) {
			var items = window._lyteUiUtils.popupStack.globalStack;

			var index = this.findIndex( node );

			if( !!~index ) {
				items.splice( index, 1 );
			}
		}
	}

    findIndex(node) {
		var items = window._lyteUiUtils.popupStack.globalStack;

		for( var i = 0; i < items.length; i++ ) {
			if( items[ i ].parentElement === node ) {
				return i;
			}
		}

		return -1;
	}

    shouldFocusFirstFocusableElement() {
		return this.getData('ltPropAllowFocusableElements');
	}

    focusFirstFocusableElement() {
		var element = this.getFirstFocusableElement();

		if (element) {
			element.focus();
		}

	}

    getFirstFocusableElement() {
		var box = this.$node.getDropBox();

		return box.querySelector(window._lyteDropdown.focusableElementsSelector);
	}

    fireOnShow() {
		var ev;

		if (this.getData('call') && this.getMethods('onShow')) {
			ev = this.getData('call');
			ev = ev === true ? undefined : ev;
			this.executeMethod('onShow', ev, this);
		}

		window._lyteUiUtils.dispatchEvent('lytedropdownshow', this.$node);
	}

    // Do a dfs to find the types of dropdown
    getChildren(childs) {
		var head = this.getData('drophead'),
			body = this.getData('dropbody'),
			tag, i = 0, drop = this.$node;

		if (head === 'yield' && body === 'yield') {
			return;
		}

		for (; i < childs.length; i++) {

			tag = childs[i].tagName;
			if (tag === 'LYTE-DROPDOWN'
				|| tag === 'TEMPLATE'
			) {
				continue;
			}

			if (tag === 'LYTE-DROP-BOX') {
				this.setData('dropbody', 'yield');
				drop.querySelector('lyte-drop-box').classList.add('lyteDropdownHidden');
			}
			else if (tag === 'LYTE-DROP-BUTTON') {
				this.setData('drophead', 'yield');
				window._lyteUiUtils.appendChild(drop.querySelector('.lyteDummyEventContainer'), drop.querySelector('lyte-drop-button'))
				i--;
			}
			else {
				this.getChildren(childs[i].children);
			}
		}
	}

    setBoxClass(oldValue) {
		var cls = this.getData('ltPropBoxClass'),
			box = this.childComp || this.$node.querySelector('lyte-drop-box'),
			body = this.getData('dropbody');

		if (body === 'noyield') {
			if (oldValue) {
				_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(box).removeClass(oldValue);
			}

			if (cls) {
				_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(box).addClass(cls);
			}
		}

	}

    setButtonClass(oldValue) {
		var cls = this.getData('ltPropButtonClass'),
			button = this.$node.querySelector('lyte-drop-button');

		if (oldValue) {
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(button).removeClass(oldValue);
		}

		if (cls) {
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(button).addClass(cls);
		}
	}

    setIconClass() {
		var multiple = this.getData('multiple'),
			dropButton = this.getDropButton(),
			drophead = this.getData('drophead');

		if (!multiple) {
			return;
		}

		if (drophead === 'yield') {
			return;
		}

		if (this.hasIconClassChanged()) {
			dropButton.classList.add('ltDropdownIconNodePresent');
			this.setData('shouldDisplayIcon', true);
		}
		else {
			dropButton.classList.remove('ltDropdownIconNodePresent');
			this.setData('shouldDisplayIcon', false);
		}
	}

    getDropButton() {
		return this.$node.querySelector('lyte-drop-button');
	}

    getActiveElement() {
		var query = this.getData('ltPropActiveElement'), result;

		if (query) {
			result = this.$node.querySelector(query) || this.$node.getDropBox().querySelector(query);
		}

		result = result || this.getAriaButton();

		return result;
	}

    getAriaButton() {
		return this.$node.querySelector('[role="combobox"]');
	}

    hasIconClassChanged() {
		var iconCls = this.getData('ltPropIconClass');

		return iconCls && iconCls !== 'dropdown';
	}

    didConnect() {
		var selList = this.getData('ltPropSelectedList') || [];

		this.determineYieldContents();
		this.setClassAttributes();
		this.calculateSelected = selList.length > 0;
		this.bindEvents();
		this.addCallout();
		this.setSelectedDuringRender();
		this.toggleButtonInteractivity();
		this.toggleDropdownClass();
		// Bad way to trigger an observer
		this.setData('preventDisp', true);
		this.setData('changeItToInvoke', this.getData('changeItToInvoke') + 1);
		this.setData('preventDisp', false);
		this.setSelectedFromList(true);
		this.toggleDropdown();
		this.attachErrorDiv();
		this.showNoResultDiv();
		this.fireAfterRender();
	}

    fireAfterRender() {
		if( this.getMethods( 'onAfterRender' ) ) {
			this.executeMethod( 'onAfterRender', this.$node );
		}
	}

    attachErrorDiv() {
		var errorDiv = this.createErrorDiv(),
		body = this.getDropBody( this.getDropBox() );

		if( errorDiv ) {
			body.appendChild( errorDiv );
		}
	}

    toggleDropdown() {
		var show = this.getData( 'ltPropShow' ),
		drop = this.$node, tab = this.getElementWithTabIndex();

		if ( show ) {
			this.setData( 'ltPropShow', false );
			drop.toggle();

			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( function() {
				tab.focus();
				var pos = drop.getBoundingClientRect();

				// This doesn't work exactly it can be behind a overflow'd div and still not be visible.
				if (pos.left < 0
					|| pos.top < 0
				) {
					drop.scrollIntoView();
				}
			} );
		}
	}

    toggleButtonInteractivity() {
		var tab = this.getElementWithTabIndex(),
		disabled = this.getData( 'ltPropDisabled' ),
		dataTabIndex = this.getData( 'ltPropDataTabindex' ),
		tabIndex = this.getData( 'ltPropTabindex' );

		if (disabled) {
			this.disableClickableItem(tab);
			tab.setAttribute('tabindex', -1);
			tab.setAttribute('data-tabindex', "");
		}
		else {
			this.enableClickableItem(tab);
			tab.setAttribute('tabindex', tabIndex);
			tab.setAttribute('data-tabindex', dataTabIndex);
		}
	}

    bindEvents() {
		var hover = this.getData( 'ltPropHover' ),
		box = this.getDropBox(),
		body = this.getDropBody( box ),
		type = this.getData( 'ltPropType' ),
		tab;

		if( type === 'multisearch' ) {
			tab = this.getElementWithTabIndex();
			tab && tab.addEventListener( 'keyup', this.fireCheckKey.bind( this ) );
		}

		box.addEventListener('click', function (event) {
			this.processElements(event);
		}.bind(this));

		if (hover) {
			box.addEventListener('mouseout', function (event) {
				this.closeIt(event);
			}.bind(this));
		}

		body.addEventListener('scroll', function (event) {
			this.callOnScroll(event, this);
		}.bind(this));

		box.addEventListener( 'mousemove', this.highlightDropItemsOnHover.bind( this ) );
	}

    determineYieldContents() {
		var dropdownYield = this.$node.querySelector( 'lyte-yield' ),
		head, body;

		this.determine( dropdownYield );

		head = this.getData('drophead');
		body = this.getData('dropbody');

		if (head !== 'yield') {
			this.setData('drophead', head = 'noyield');
		}

		if (body !== 'yield') {
			this.setData('dropbody', body = 'noyield');
		}
	}

    setSelectedDuringRender() {
		var placeholder = this.getData('ltPropPlaceholder'),
		selected = this.getData('ltPropSelected'),
		options = this.getData('ltPropOptions') || [],
		body = this.getData( 'dropbody' ),
		type = this.getData( 'ltPropType' );

		this.setData('preventDisp', true);

		//We need to set the first value in the dropdown as the selected one
		if ( !placeholder && !selected && type !== 'multiple' && type !== 'multisearch' ) {
			if( options.length > 0 ) {
				this.setSelectedFromOptions();
			}
			else if( body === 'yield' ) {
				this.setSelectedFromYield();
			}
			
		}

		this.setData('preventDisp', false);
	}

    setSelectedFromOptions(options) {
		var options = options || this.getData('ltPropOptions') || [],
		firstElement = options[ 0 ],
		flag = false,
		value;

		if (firstElement.constructor == Object) {
			if (Object.keys(firstElement).length == 1) {
				value = firstElement[Object.keys(firstElement)[0]];
				if (value.constructor == Array) {
					flag = true
				}
			}
		}

		
		if (flag) {
			if (Object.prototype.toString.call(value[0]) === '[object Object]') {
				this.setData('ltPropSelected', value[0][this.getData('ltPropSystemValue')]);
			}
			else {
				this.setData('ltPropSelected', value[0]);
			}
		}
		else {
			if (Object.prototype.toString.call(firstElement) === '[object Object]') {
				this.setData('ltPropSelected', firstElement[this.getData('ltPropSystemValue')]);
			}
			else {
				this.setData('ltPropSelected', firstElement);
			}

		}
	}

    setSelectedFromYield() {
		var node = this.getFirstEnabledItem();

		if (node) {
			node.setAttribute('selected', true);
		}
	}

    highlightDropItemsOnHover(event) {
		var cur = event.target,
			curTar = event.currentTarget,
			prev = curTar.querySelector('.lyteDropdownSelection'),

			// This overrides everything
			preventNavigation = this.getData( 'ltPropPreventNavigation' );

		if( preventNavigation ) {
			return ;
		}

		cur = window._lyteDropdown.traverse(cur, ['LYTE-DROP-ITEM']);

		if (this.hasMousePositionNotChanged(event) || cur === prev) {
			return;
		}

		// This will make sure that it is removed for disabled items which have pointer-events:none
		if (prev) {
			prev.classList.remove('lyteDropdownSelection');
		}

		if (!cur || cur.tagName !== 'LYTE-DROP-ITEM') {
			return;
		}

		if (cur.getAttribute('disabled') === 'true') {
			return;
		}

		if (cur) {
			cur.classList.add('lyteDropdownSelection');
			this.getActiveElement().setAttribute('aria-activedescendant', cur.getAttribute('id'));
		}

	}

    createErrorDiv() {
		var isErrorDivYield = this.getData( 'ltPropNoResultYield' ),
		noResultText = this.getData('ltPropNoResult'),
		errorDiv;

		if( !isErrorDivYield ) {
			errorDiv = document.createElement( 'div' );
			errorDiv.setAttribute('class', 'lyteDropdownNoResult');
			errorDiv.textContent = noResultText;
			errorDiv.style.display = 'none';
		}
		
		return errorDiv;
	}

    processElements(event) {
		var elm = event.target,
			mul = this.getData('multiple'),
			search = this.getData('search');

		if (search) {
			this.focusInput();
		}

		elm = window._lyteDropdown.traverse(elm, ['HTML', 'LYTE-DROP-ITEM']);

		if (!elm || elm.tagName === 'HTML') {               //Clicking on header should not call selection code
			return;
		}

		if (elm.getAttribute('disabled') === 'true') {
			return;
		}

		if ( !mul ) {
			this.selectItem( event, elm );
		}
		else {
			this.addItem( event, elm );
		}
	}

    addItem(event, elm) {
		var numberOfItemsGettingAdded = 1, src, ret,
		oldSelected = this.getData('ltPropSelected'),
		that = this;

		if ( this.beforeAddPromiseActive ) {
			return;
		}

		if ( this.checkLimit( numberOfItemsGettingAdded ) ) {
			return;
		}

		src = elm.getAttribute('data-value');

		if (this.getMethods('onBeforeAdd')) {
			ret = this.beforeAdd(event, elm, src);
		}

		if (this.isPromise(ret)) {
			this.beforeAddPromiseActive = true;

			ret.then(function () {
				that.selectItemOfMultiSelect(event, elm, oldSelected);
				that.beforeAddPromiseActive = false;
			}).catch(function (err) {
				console.error(err);
				that.beforeAddPromiseActive = false;
			});
		}
		else {
			if (ret) {
				return;
			}

			this.selectItemOfMultiSelect(event, elm, oldSelected);
		}
	}

    selectItem(event, elm) {
		var link = this.childComp, freeze = this.getData( 'ltPropFreeze' ),
		oldSelected = this.getData( 'ltPropSelected' );

		if ( !this.beforeSelect( event, elm ) ) {
			return;
		}

		this.setData( 'ltPropSelected', elm.getAttribute('data-value') );
		this.optCall(event, this.getData('ltPropSelected'), elm);
		this.fireOnChange(oldSelected, event, elm);

		if ( this.beforeHide( link, event, freeze ) ) {
			return;
		}

		this.closeDrop(link, event, freeze);
	}

    isPromise(obj) {
		return typeof obj === 'object';
	}

    selectItemOfMultiSelect(event, elm, oldSelected) {
		var link = this.childComp,
			elements = link.querySelectorAll('lyte-drop-item'),
			src = elm.getAttribute('data-value'),
			head = this.getData('drophead'),
			type = this.getData('ltPropType'),
			search = this.getData('search'),
			input = this.$node.querySelector('lyte-search') || this.$node.querySelector('input');;

		if (search && input.setValue && !this.isInputEmpty(input)) {
			input.setValue('');
		}

		this.setHighlight(elements, elm);

		this.setData('prev', true);
		elm.setAttribute('selected', 'true');
		this.setData('prev', false);

		elm.classList.add('lyteDropdownActive');

		this.hideGroup(elm);

		// check this things position in code now.
		if (this.getMethods('onAdd')) {
			this.executeMethod('onAdd', event, src, this.getData('ltPropSelected'), this, elm);
		}

		this.showError(link, type, head);

		this.fixBoxPosition();
		this.fireOnChange(oldSelected, event, elm);
	}

    setClassAttributes() {
		this.setBoxClass();
		this.setButtonClass();
		this.setIconClass();
		this.setClassForRemoveIcon();
	}

    setClassForRemoveIcon() {
		var shouldUseRemoveIcon = this.getData('ltPropShowRemoveIcon') && this.getData('ltPropSelected');

		if (shouldUseRemoveIcon) {
			this.$node.classList.add('lyteDropdownWithDeselectIcon');
		}
		else {
			this.$node.classList.remove('lyteDropdownWithDeselectIcon');
		}
	}

    addCallout() {
		var span, box = this.getDropBox();

		span = document.createElement('span');
		span.setAttribute('class', 'lyteArrow');
		box.insertBefore(span, box.children[0]);
	}

    addTabIndexForYieldedMultisearch() {
		var type = this.getData('ltPropType'),
			drophead = this.getData('drophead'),
			tabIndexElement = this.$node.querySelector('input'),
			index = this.getData('ltPropTabindex'),
			dataIndex = this.getData('ltPropDataTabindex'),
			isDisabled = this.getData('ltPropDisabled');

		if (tabIndexElement && drophead === 'yield' && type === 'multisearch' && !isDisabled) {
			tabIndexElement.setAttribute('tabindex', index);
			tabIndexElement.setAttribute('data-tabindex', dataIndex);
		}
	}

    getElementWithTabIndex() {
		return this.$node.querySelector('[tabindex]') || this.$node.querySelector('input');
	}

    getFirstEnabledItem() {
		var body = this.getDropBody(this.childComp),
			items = body.querySelectorAll('lyte-drop-item'),
			disabledList = this.getData('ltPropDisabledList') || [];

		for (var i = 0; i < items.length; i++) {
			if (!~disabledList.indexOf(items[i].getAttribute('data-value'))) {
				return items[i];
			}
		}
	}

    hasMousePositionNotChanged(event) {
		var curClientX = event.clientX,
			curClientY = event.clientY,
			prevClientX = this.prevClientX,
			prevClientY = this.prevClientY;

		this.prevClientX = curClientX;
		this.prevClientY = curClientY;

		if (prevClientX === curClientX && prevClientY === curClientY) {
			return true;
		}

		return false;
	}

    tranEnd(evt) {
		var box = this.childComp,
			isAnimate = this.getData('ltPropAnimate'),
			body = this.data.ltPropAnimateBox ? box : this.getDropBody(box);

		window.clearTimeout(this.timeoutIdForOpen)

		if (isAnimate) {
			body.style.height = 'auto';
		}

		box.classList.remove('lyteAnimate', 'lyteDropBoxAnimate');
		box.removeEventListener('transitionend', this._transEnd)
		delete this._prevent;
		delete this._preventSetcss;
		delete this._preventMutObs;

		// Hidden method
		if (this.getMethods('onAnimationEnd')) {
			this.executeMethod('onAnimationEnd', evt, this);
		}

		var isFF = this.isFF(),
			isOpen = this.getData('ltPropIsOpen');

		if (!isOpen) {
			return;
		}

		if (isFF && this.isBodyScrollable()) {
			this.addProperScrollbar();
		}
		else if (isFF && !this.isBodyScrollable()) {
			this.removeScrollbar();
		}
	}

    openSlideAnimate() {
		if (this.getData('ltPropAnimate')) {
			if (this._preventSetcss) {
				return
			}

			if (this._preventAnimate) {
				return;
			}

			this._preventAnimate = true;
			this._preventSetcss = true
			this._preventMutObs = true
			var box = this.childComp ? this.childComp : this.$node.querySelector('lyte-drop-box'),
				isBoxAnimate = this.data.ltPropAnimateBox,
				elem = isBoxAnimate ? box : this.getDropBody(this.childComp);
			this._oriStyle = elem.style.height;
			// animation starts from zero
			elem.style.height = 0;
			// for invert animation
			if (['up', 'upLeft', 'upRight'].indexOf(this.getData('pos')) != -1) {
				box.style.top = parseInt(box.style.top) + this._hgt + 'px';
			}

			box.classList.add('lyteAnimate');
			if (isBoxAnimate) {
				box.classList.add('lyteDropBoxAnimate');
			}
			// setTimeout( function(){
			// animation class added
			// box.classList.add( 'lyteAnimate' );
			setTimeout(function () {
				// invert anime starts
				if (['up', 'upLeft', 'upRight'].indexOf(this.getData('pos')) != -1) {
					box.style.top = parseInt(box.style.top) - this._hgt + 'px';
				}
				// height animate starts
				elem.style.height = this._hgt + 'px';
				setTimeout(function () {
					box.addEventListener('transitionend', this._transEnd);

					if (!this._hgt) {
						this.tranEnd.call(this, {})
					}
					else {
						var time = this.getTransitionTime(box);

						// A fail safe incase transitionend doesn't fire
						this.timeoutIdForOpen = setTimeout(this._transEnd, time);
					}
				}.bind(this), 20)
			}.bind(this), 20)
			// }.bind(this), 20)
		}
	}

    getTransitionTime(box) {
		var tolerance = 100,
			duration = window.getComputedStyle(box).transitionDuration,
			res = tolerance;

		if (!!~duration.indexOf('ms')) {
			res += parseInt(duration);
		}
		else {
			// seconds
			res += parseFloat(duration) * 1000;
		}

		return res;
	}

    /**
	 * This is going to determine the structure of the dropdown whether it is a single or dropdown within dropdown
	 * @param {HTMLElement} yd - The yield of the dropdown
	 *
	 */

    determine(yd) {
		var children = yd.children,
			head, box, drop = this.$node, dummy, other;

		other = drop.querySelector('lyte-dropdown');
		if (other) {
			this.getChildren(children);
		}
		else {
			box = yd.querySelector('lyte-drop-box');
			head = yd.querySelector('lyte-drop-button');

			if (head) {
				dummy = drop.querySelector('.lyteDummyEventContainer');
				this.setData('drophead', 'yield');
				window._lyteUiUtils.appendChild(dummy, head);
			}

			if (box) {
				this.setData('dropbody', 'yield');
				box.classList.add('lyteDropdownHidden')
			}
		}
	}

    /**
	 * This is going to add a class to the drop-box for multiselects
	 *
	 */

    addClass() {
		var link = this.childComp;

		link.classList.add('lyteMultiSelectDropdown');
	}

    closeDrop(link, event, freeze, isScroll) {
		window._lyteDropdown.autoClosed = null;
		this.setData('ltPropIsOpen', false);

		if (this._prevent) {
			return
		}
		if (this.getData('ltPropAnimate') && !isScroll) {
			var isBoxAnimate = this.data.ltPropAnimateBox;
			this._prevent = true;
			this._preventSetcss = true;
			this._arguments = arguments;
			this.childComp.classList.add('lyteAnimate');
			if (isBoxAnimate) {
				this.childComp.classList.add('lyteDropBoxAnimate');
			}
			setTimeout(function () {
				var box = this.childComp ? this.childComp : this.$node.querySelector('lyte-drop-box'),
					elem = isBoxAnimate ? box : this.getDropBody(this.childComp);

				elem.style.height = this._hgt + 'px';

				setTimeout(function () {
					// var box = this.childComp ? this.childComp : this.$node.querySelector('lyte-drop-box'),
					// elem = isBoxAnimate ? box : this.getDropBody( this.childComp );

					// height set to zero for hide animation
					elem.style.height = 0;
					// invert animation
					if (['up', 'upLeft', 'upRight'].indexOf(this.getData('pos')) != -1) {
						box.style.top = parseInt(box.style.top) + this._hgt + 'px';
					}

					this._animationStarted = true;
					this._elem = elem;
					this._box = box;
					elem.addEventListener('transitionend', this._close);

					if (!this._hgt) {
						this.closeDrop1.call(this)
					}
					else {
						// A fail safe incase transitionend doesn't fire
						var time = this.getTransitionTime(elem);

						this.timeoutIdForClose = setTimeout(this._close, time);
					}

				}.bind(this), 20);

			}.bind(this), 20)
		} else {
			this.closeDrop1(link, event, freeze)
		}
	}

    closeDrop1(link, event, freeze) {
		var bt = this.$node.querySelector('lyte-drop-button'),
			pos = this.getData('pos'), cls, mul = this.getData('multiple'), body,
			box = this.getDropBox(),
			scrollsToPrevent = this.getData('ltPropPreventScroll'),
			preventParentScroll = this.getData('ltPropPreventParentScroll');

		window.clearTimeout(this.timeoutIdForClose);

		if (this._arguments) {
			link = this._arguments[0], event = this._arguments[1], freeze = this._arguments[2]
			this._elem.style.height = this._oriStyle;
			//animate class removal
			this._box.classList.remove('lyteAnimate', 'lyteDropBoxAnimate');
			this._elem.removeEventListener('transitionend', this._close)
			delete this._hgt; delete this._oriStyle; delete this._arguments; delete this._elem; delete this._box;
		}

		if (mul) {
			body = this.getDropBody(link);
			body.scrollTop = 0;
		}

		link.classList.add('lyteDropdownHidden');
		var freezeLayer = document.querySelector('#lytedropdownfreezelayer')
		if (freeze && freezeLayer && scrollsToPrevent === 'all') {
			document.querySelector('#lytedropdownfreezelayer').style.display = 'none'
		}

		link.style.left = '';
		link.style.top = '';
		link.style.bottom = '';
		link.style.right = '';

		if (freeze || preventParentScroll) {
			document.body.classList.remove('lyteBodyWrapper');
		}

		this.disableParentListeners();

		cls = this.removeClass(bt.classList, pos, 'lyteDropButton', true);

		if (cls) {
			bt.classList.remove(cls);
		}

		this.popOutOfGlobalStack( this.$node );

		if (this.getMethods('onHide')) {
			this.executeMethod('onHide', event, this);
		}

		this.focusButton();

		// This if statement is a bad fix. Added so that the dropdown doesn't throw an error when it is destroyed in on-option-selected and box is empty
		if (box) {
			var posClsToRemove = this.removeClass(box.classList, pos, 'lyteDropdown', true);
		}

		if (posClsToRemove) {
			box.classList.remove(posClsToRemove);
		}

		this.setData('pos', '');
		this.setData('secondaryPosition', '');
		this.setData('savedPositions', {});

		delete this._prevent; delete this._preventSetcss;
		delete this._preventAnimate;
		delete this._animationStarted;
	}

    focusButton() {
		var isSearch = this.getData('search'),
			activeElement = document.activeElement,
			focusOnClose = this.getData('ltPropFocusOnClose');

		/* Not sure about multisearchs */
		if (focusOnClose && !isSearch && !this.isFocusable(activeElement)) {
			this.preventScroll = true;
			this.setData('ltPropFocus', true);
			this.preventScroll = false;
		}
	}

    isFocusable(element) {
		var tabIndex;

		element = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(element);

		if (!window._lyteDropdown.isVisible(element.get(0)) || element.is(":disabled")) {
			return false;
		}

		tabIndex = element.attr("tabindex");
		tabIndex = isNaN(tabIndex) ? -1 : tabIndex;
		return element.is("button, input, select, textarea, a[href], area[href], iframe") || tabIndex > -1;
	}

    callOnScroll(event) {
		var comp = this;

		if (this.getMethods('onScroll')) {
			this.executeMethod('onScroll', event, this);
		}

		if( this.hasScrollEndReached( event ) && this.movingDownward( event ) ) {
			window.clearTimeout( this.scrollEndId );

			this.scrollEndId = setTimeout( function() {
				comp.fireScrollEnd( event );
			}, 50 ); 
		}
	}

    movingDownward(event) {
		var scrollingContainer = event.target,
		scrollTop = scrollingContainer.scrollTop,
		previousScrollTop = this.previousScrollTop || 0;

		this.previousScrollTop = scrollTop;

		return scrollTop - previousScrollTop > 0;
	}

    hasScrollEndReached(event) {
		var scrollingContainer = event.target,
		scrollTop = scrollingContainer.scrollTop,
		height = scrollingContainer.offsetHeight,
		scrollHeight = scrollingContainer.scrollHeight,
		tolerance = 5;

		return height + scrollTop >= ( scrollHeight - tolerance );
	}

    fireScrollEnd(event) {
		if( this.getMethods( 'onScrollEnd' ) ) {
			this.executeMethod( 'onScrollEnd', event );
		}
	}

    addDisabledClass(elements) {
		var i = 0, ele;
		for (; i < elements.length; i++) {
			ele = elements[i];
			if (ele.getAttribute('disabled') == 'true') {
				ele.classList.add('lyteDropdown-disabled');
			}
			else if (ele.classList.contains('lyteDropdown-disabled')) {
				ele.classList.remove('lyteDropdown-disabled');
			}
		}
	}

    showNoResultDiv() {
		var show = this.getData('ltPropShowEmptyMessage'),
			link = this.childComp,
			body = this.getDropBody(link),
			items = body.querySelectorAll('lyte-drop-item'),
			nores = body.querySelector('.lyteDropdownNoResult'),
			multiple = this.getData('multiple');

		if (!nores) {
			return;
		}

		if (show && !multiple) {
			if (items.length === 0) {
				nores.style.display = 'block';
			}
			else {
				nores.style.display = 'none';
			}

		}
		else if (!show && !multiple) {
			nores.style.display = 'none';
		}
	}

    /**
	 * The method is going to specify the class that needs to be removed from the classList
	 * ( Might be buggy when lt-prop-position is changed as it only removes opposites)
	 * @param {classList} arr - The classlist under question
	 * @param {string} pos - The current position of the dropdown
	 * @param {string} prefix - A prefix that is appended to the pos attribute to determine the class
	 * @param {boolean} ignore - Tells whether we must search for the opposites
	 * @param {string} suffix - A suffix added to the end of the class
	 *
	 */


    removeClass(arr, pos, prefix, ignore, suffix) {
		if (!pos) {
			return '';
		}

		suffix = suffix || '';

		var negate = {
			'up': 'Down',
			'down': 'Up',
			'left': 'Right',
			'right': 'Left'
		}, i = 0, len = arr.length,

			ngcls = prefix
				+ (ignore ?
					pos[0].toUpperCase() + pos.substring(1)
					: negate[pos]) + suffix;

		for (; i < len; i++) {
			if (arr[i] === ngcls) {
				return ngcls;
			}
		}

		return '';
	}

    /*
		Calculate left of dropdown container when it has to come below/above the select element when it exceeds window.innerWidth and there is space to the right
	*/
    setLeftExceedForDown(element, container, bcr, width, xscroll) {
		var scrolledLeft = -xscroll,
			elementBCR = this.getButton().getBoundingClientRect(),
			elementLeft = elementBCR.left,
			elementWidth = elementBCR.width,
			elementRight = elementBCR.right,
			total = scrolledLeft + (window.innerWidth - elementRight);

		return total
	}

    /*
		Calculate left of dropdown container when it has to come below/above the select element when it doesn't exceed window.innerWidth
	*/
    alignBoxToButtonLeft(element, bcr, xscroll) {
		var scrolledLeft = xscroll,
			elementBCR = this.getButton().getBoundingClientRect(),
			elementLeft = elementBCR.left,
			total = scrolledLeft + elementLeft;

		return total
	}

    /*
		Calculate top of dropdown container when it has to come above the select element
	*/
    setTopAboveForDown(element, container, bcr, containerbcr, yscroll) {
		var scrolledHeight = -yscroll,
			elementBCR = bcr,
			elementTop = elementBCR.top,
			containerBCR = containerbcr,
			containerHeight = containerBCR.height,
			total = scrolledHeight + (window.innerHeight - elementTop);

		if (this._animationStarted) {
			return scrolledHeight + (window.innerHeight - elementTop);
		}

		return total
	}

    /*
		Calculate top of dropdown container when it has to come below the select element
	*/
    alignBoxTopToButtonBottom(element, bcr, yscroll) {
		var scrolledHeight = yscroll,
			elementBCR = bcr,
			elementTop = elementBCR.top,
			elementHeight = elementBCR.height,
			total = scrolledHeight + elementTop + elementHeight;

		return total
	}

    /*
		Calculate left of dropdown container when it has to come to right of the select element
	*/
    setLeftForRight(element, bcr, xscroll) {
		var scrolledWidth = xscroll,
			elementBCR = bcr,
			elementLeft = elementBCR.left,
			elementWidth = elementBCR.width,
			total = scrolledWidth + elementLeft + elementWidth;

		return total
	}

    /*
		Calculate right of dropdown container when it has to come to left of the select element of right dropdown
	*/
    setRightForRight(element, container, bcr, width, xscroll) {
		var scrolledWidth = -xscroll,
			elementBCR = bcr,
			elementLeft = elementBCR.left,
			total = scrolledWidth + (window.innerWidth - elementLeft);

		return total
	}

    /*
		Calculate top of dropdown container when it has to come to right of dropdown and there is space below
	*/
    setTopForRight(element, bcr, yscroll) {
		var scrolledHeight = yscroll,
			elementBCR = bcr,
			elementTop = elementBCR.top,
			total = scrolledHeight + elementTop;

		return total
	}

    /*
		Calculate top of dropdown container when it has to come to right of dropdown and there is no space below
	*/
    setTopForRightAbove(element, container, bcr, elembcr, yscroll) {
		var scrolledHeight = -yscroll,
			elementBCR = bcr,
			elementTop = elementBCR.top,
			elementHeight = elementBCR.height,
			elementBottom = elementBCR.bottom,
			containerBCR = elembcr,
			containerHeight = containerBCR.height,
			total = scrolledHeight + (window.innerHeight - elementBottom);

		if (this._animationStarted) {
			return scrolledHeight + (window.innerHeight - elementBottom);
		}

		return total
	}

    /**
		Remove wrong arrow and append proper arrow
		@param string correct - the correct class
	*/
    setCorrectClass(cls) {
		var arrow = this.childComp.querySelector('.lyteArrow'),
			list = arrow.classList, i = 0;
		for (; i < list.length; i++) {
			if (list[i] == 'lyteArrow' || list[i] == cls) {
				continue;
			}
			else {
				arrow.classList.remove(list[i]);
				i--;
			}
		}

		arrow.classList.add(cls);
		arrow.classList.add('lyteArrowIcon');
	}

    /**
	 * This going to check if a class has been toggled
	 * @param {MutationRecord} rec - The mutation record
	 * @param {String} cls - The class that needs to be checked
	 *
	 */
    hasClassToggled(rec, cls) {
		var old = rec.oldValue ? rec.oldValue.trim().split(" ") : [],
			node = rec.target,
			olen = old.length,
			nlen = node.classList.length;

		if (((!!~old.indexOf(cls)
			&& !node.classList.contains(cls))
			|| (!~old.indexOf(cls)
				&& node.classList.contains(cls)
			))

			// Only 1 class changed
			&& Math.abs(olen - nlen) === 1
		) {
			return true;
		}

		return false;
	}

    /**
	 * The adjust width is going to adjust the width of the dropdown's body that is going to open
	 * @param {Element} body - The lyte-drop-box
	 * @param {Number} pwidth - The width of the parent Element
	 * @param {Number} bwidth - The width of the body Element
	 *
	 */

    adjustWidth(body, pwidth, bwidth) {
		var boxButtonWidth = this.getData('ltPropBoxButtonWidth'), newWidth;

		if (boxButtonWidth === 'min-button') {
			this.setData('widthAdjusted', 1);

			if (bwidth > pwidth) {
				this.setData('widthAdjusted', 2);
			}

			body.style.minWidth = pwidth + 'px';
		}
		else if (boxButtonWidth === 'auto') {
			this.setData('widthAdjusted', 1);
			body.style.width = 'auto';
			newWidth = body.getBoundingClientRect().width;

			if (newWidth > pwidth) {
				this.setData('widthAdjusted', 2);
			}
		}
		else {
			this.setData('widthAdjusted', 1);
			body.style.width = pwidth + 'px';
			body.style.minWidth = pwidth + 'px';
		}

		return body.getBoundingClientRect().width;

	}

    getFocusableElements() {
		var dropdown = this.$node,
			box = dropdown.getDropBox();

		return box.querySelectorAll(window._lyteDropdown.focusableElementsSelector);
	}

    /**
	 * This is going to return the proper drop-body tag of the dropdown - ( dropdown inside dropdown )
	 * @param {Element} box - The lyte-drop-box of the dropdown
	 *
	 */

    getDropBody(link) {
		var all;

		if (link) {
			all = link.querySelectorAll('lyte-drop-body');
		}
		else {
			all = this.$node.querySelectorAll('lyte-drop-body');
		}

		return all[all.length - 1];
	}

    /**
	 * This is going to remove the previous highlighted element and set a new highlighted element
	 * @param {Element} node - The element to be toggled -> should not be undefined
	 * @param {Element} body - The lyte-drop-body
	 *
	 */

    toggleCurrent(node) {
		var cls = 'lyteDropdownSelection',
			box = this.getDropBox(),
			prev = box && box.querySelector('.' + cls);

		if (prev) {
			prev.classList.remove(cls);
		}

		node.classList.add(cls);
		this.getActiveElement().setAttribute('aria-activedescendant', node.getAttribute('id'));
	}

    /**
	 * This is going to scroll the drop-body to the element above the selected element
	 * This function is also going to highlight the selected value
	 * Note this doesn't work when they are making a request and trying to set the data
	 *
	 */

    scrollSel() {

		var sel = this.getData('ltPropSelected'),
			link = this.childComp,
			body = this.getDropBody(link),
			tmp, highlightedElement,
			all_elems = this.getAllItems(body),
			node = tmp = this.getItem(all_elems, sel) /*body.querySelector( '[data-value="' + window._lyteUiUtils.escape( sel ) + '"]' )*/;

		// Not for multiselects
		if (this.getData('multiple')) {
			// tmp = body.querySelector( 'lyte-drop-item:not(.lyteDropdownActive):not(.lyteSearchHidden)' );
			tmp = all_elems.filter(function (item) {
				return !item.classList.contains('lyteDropdownActive') && !item.classList.contains('lyteSearchHidden');
			})[0];

			if (tmp && !tmp.classList.contains('lyteDropdown-disabled')) {
				this.toggleCurrent(tmp);
			}

			return;
		}

		if ((sel || '').length === 0) {
			body.scrollTop = 0;
		}

		while (node
			&& (node = node.previousElementSibling)
		) {
			if ((node.tagName === 'LYTE-DROP-ITEM'
				|| node.tagName === 'LYTE-DROP-LABEL')
				&& window._lyteDropdown.isVisible(node)
			) {
				break;
			}
		}

		// Scroll to original node if no visible node is found
		node = node ? node : tmp;

		// If we now have a node set the scrollTop
		if (node) {
			body.scrollTop = this.isFirstItem( node ) ? 0 : node.offsetTop;
		}
		else {
			body.scrollTop = 0;
		}

		if (tmp && !tmp.classList.contains('lyteDropdown-disabled')) {
			this.toggleCurrent(tmp);
		}
		else {
			highlightedElement = body.querySelector('.lyteDropdownSelection');

			if (highlightedElement) {
				highlightedElement.classList.remove('lyteDropdownSelection');
			}
		}
	}

    isFirstItem(node) {
		var parent = node.parentElement;

		return parent && parent.firstElementChild === node;
	}

    /**
	 * This is going to clone the object
	 * @param {Object} obj - the object to be clone
	 *
	 */

    clone(obj) {
		var clone = {};

		for (var key in obj) {
			clone[key] = obj[key];
		}

		return clone;
	}

    isFF() {
		var ua = window.navigator.userAgent;

		return !!~ua.indexOf('Firefox');
	}

    isBodyScrollable() {
		var link = this.childComp,
			body = this.getDropBody(link);

		return body.scrollHeight > body.offsetHeight;
	}

    addProperScrollbar() {
		var link = this.childComp,
			body = this.getDropBody(link);

		if (!body.classList.contains('lyteDropdownFFScroll')) {
			body.classList.add('lyteDropdownFFScroll');
		}

		if (body.classList.contains('lyteDropdownFFZeroScroll')) {
			body.classList.remove('lyteDropdownFFZeroScroll');
		}
	}

    removeScrollbar() {
		var link = this.childComp,
			body = this.getDropBody(link);

		if (!body.classList.contains('lyteDropdownFFZeroScroll')) {
			body.classList.add('lyteDropdownFFZeroScroll');
		}

		if (body.classList.contains('lyteDropdownFFScroll')) {
			body.classList.remove('lyteDropdownFFScroll');
		}
	}

    getButton() {
		return this.$node.element || this.$node.querySelector('lyte-drop-button');
	}

    /* 
		Disallow arrow key navigation(and enter) when there can be multiple focusable elements on the box
		and the current focused element is not the active element. Also I guess activeElement can be empty and then have a value during its lifetime
		We are adding the ltPropPreventNavigation here because this function can prevent the navigation of arrow keys
	*/
    shouldNavigate() {
		var activeElement = this.getData('ltPropActiveElement'),
			currentActiveElement = document.activeElement,
			allowFocusableElements = this.getData('ltPropAllowFocusableElements'),

			// This overrides everything
			preventNavigation = this.getData( 'ltPropPreventNavigation' );

		if( preventNavigation ) {
			return false;
		}

		if (!allowFocusableElements || !activeElement) {
			return true;
		}

		return currentActiveElement.matches(activeElement);
	}

    setVerticalCalloutPosition(width, offsets, doesBoxAndButtonLeftAlign) {
		var link = this.childComp,
		arrow = link.querySelector( '.lyteArrow' ),
		aWidth, tempMarginLeft, tempNum, tempDenom, tempPer;

		aWidth = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
		aWidth = parseFloat(aWidth ? aWidth : '0px');
		tempMarginLeft = window.getComputedStyle(arrow, ':before').marginLeft;
		tempMarginLeft = Math.abs(parseFloat(tempMarginLeft ? tempMarginLeft : '0px'));

		if( doesBoxAndButtonLeftAlign ) {
			tempNum = offsets.width / 2 - aWidth + tempMarginLeft; // We removed arrow.offsetWidth because it was giving width as 0 px
		} else {
			tempNum = width - (offsets.width / 2) - aWidth + tempMarginLeft; // We removed arrow.offsetWidth because it was giving width as 0 px
		}
		
		tempDenom = width / 100;
		tempPer = tempNum / tempDenom;

		arrow.style.left = tempPer + '%';
	}

    setHorizontalCalloutPosition(drop, offsets, doesBoxAndButtonTopAlign) {
		var link = this.childComp,
		arrow = link.querySelector( '.lyteArrow' ),
		aHeight, tempMarginTop, tempNum, tempDenom, tempPer;

		aHeight = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
		aHeight = parseFloat(aHeight ? aHeight : '0px');
		tempMarginTop = window.getComputedStyle(arrow, ':before').marginTop;
		tempMarginTop = Math.abs(parseFloat(tempMarginTop ? tempMarginTop : '0px'));

		if( doesBoxAndButtonTopAlign ) {
			tempNum = ((offsets.height / 2) - aHeight + tempMarginTop) * 100;
		} 
		else {
			tempNum = (drop.height - offsets.height / 2 - aHeight + tempMarginTop) * 100;
		}

		tempDenom = drop.height;
		tempPer = tempNum / tempDenom;
		arrow.style.top = tempPer + '%';
	}

    clearPositionValues() {
		var link = this.childComp;

		link.style.left = '';
		link.style.top = '';
		link.style.bottom = '';
		link.style.right = '';
	}

    setPositionFlags(primaryPosition, secondaryPosition) {
		this.setData( 'pos', primaryPosition );
		this.setData( 'secondaryPosition', secondaryPosition );
	}

    exceedsBottomBoundary(preferredPosition, offsets, drop, scopeBoundary) {
		if( preferredPosition !== 'right' && preferredPosition !== 'left' ) {
			return offsets.top + offsets.height + drop.height > scopeBoundary.bottom;
		}

		return offsets.top + drop.height > scopeBoundary.bottom;
		
	}

    exceedsTopBoundary(offsets, drop, scopeBoundary) {
		return offsets.top - drop.height < scopeBoundary.top;
	}

    findPrimaryVerticalPosition(preferredPosition, offsets, drop, scopeBoundary) {
		if( preferredPosition === 'down' ) {
			if( this.exceedsBottomBoundary( preferredPosition, offsets, drop, scopeBoundary ) && !this.exceedsTopBoundary( offsets, drop, scopeBoundary ) ) {
				return false
			}
			
			return true;
		}

		if( preferredPosition === 'up' ) {
			if( this.exceedsTopBoundary( offsets, drop, scopeBoundary ) && !this.exceedsBottomBoundary( preferredPosition, offsets, drop, scopeBoundary ) ) {
				return false;
			}
			
			return true;
		}
	}

    findSecondaryVerticalPosition(preferredPosition, offsets, drop, scopeBoundary) {
		if ( this.exceedsBottomBoundary( preferredPosition, offsets, drop, scopeBoundary ) ) {
			return false;
		}
		
		return true;
	}

    /**
	 * Set the CSS for your dropdown
	 * refer commit ID 583ee6ccbeaa6b3729178bf9df0139032b016d19 and previous for the previous stable setCSS function.
	 * commit ID 583ee6ccbeaa6b3729178bf9df0139032b016d19 also gives a better understanding about the hard coded values in this function.
	 */
    setCss(onlyScroll, useSave) {
		var link = this.childComp,

			// An indication that the dropdown has been opened recently and this setcss is called for the open
			isOpen = this.getData('call');

		if (!useSave) {
			this.setData('savedPositions', {});
		}

		if (!link
			|| link.classList.contains('lyteDropdownHidden')
		) {
			return;
		}

		this.clearPositionValues();
		// Get properties
		var callout = this.getData('ltPropCallout');


		// Get button
		var body = link,
			custom = this.$node.element,
			par = custom ? custom : this.$node.querySelector('lyte-drop-button');

		// Get Geometric propotions
		var save = this.getData('savedPositions'),
			drop = this.clone(body.getBoundingClientRect()),
			bodybcr = this.getDropBody(body).getBoundingClientRect(),
			x = window.pageXOffset || document.documentElement.scrollLeft,
			y = window.pageYOffset || document.documentElement.scrollTop,
			height = body.offsetHeight,
			width = body.offsetWidth,
			arrow = link.querySelector('.lyteArrow'),
			position = this.getData('ltPropPosition'),
			offsets = par.getBoundingClientRect(),
			isFF = this.isFF(),
			scopeBoundary = this.getScopeBoundary();

		if (this.data.ltPropAnimate) {
			this._hgt = this.data.ltPropAnimateBox ? drop.height : bodybcr.height;
			// this.getDropBody( body ).style.height = ( this._hgt ) + 'px';
		}


		// Adjusting width of the body is a one time thing. Atleast that is what we think.
		// Till the smoke clears around this issue we are going to hang on to onlyScroll
		// onlyScroll will probably be deprecated
		if (isOpen) {

			// Hack to prevent the mutation observer from getting fired
			// MutationObserver fired when i added a class attribute to the drop-item.
			// We have cases where it should fire when we add a class to the drop-item
			this._preventClass = true;
			this.scrollSel();

			if (!onlyScroll) {

				// Reset width for later usage
				width = this.adjustWidth(body, offsets.width, width);
				drop.width = width;

				// Set width of span.lyteArrow if there is no callout
				if (!callout) {
					arrow.style.width = offsets.width + 'px';
				}
			}
		}

		// Adding the not check here because it was causing the mutobserver to fire infinitely when resize occured.
		// When resized the dropdown would add the lyteDropBodyCallout again and this keeps happening over and over again.
		if (callout && !body.classList.contains('lyteDropBodyCallout')) {
			body.classList.add('lyteDropBodyCallout')
		}

		if (isFF && this.isBodyScrollable()) {
			this.addProperScrollbar();
		}
		else if (isFF && !this.isBodyScrollable()) {
			this.removeScrollbar();
		}

		// Intialize flags
		var downPos,
			rightPos,
			topPos,
			leftPos,
			rtl = window._lyteUiUtils.getRTL();


		// temp stores
		var tempLeft,
			aHeight,
			aWidth;

		if (position === 'down') {
			downPos = this.findPrimaryVerticalPosition( 'down', offsets, drop, scopeBoundary );

			rightPos = 0;

			// rightPos - 1 -> rtl or no space to the right -> align left
			// rightPos - 2 -> ltr or space available to the right -> align right
			// rightPos - 0/3 -> align to the right if ltr or to the left if rtl
			tempLeft = offsets.left;
			if (tempLeft + offsets.width - width > scopeBoundary.left) {
				rightPos = 1;
			}

			if (offsets.left + width <= scopeBoundary.right) {
				rightPos += 2;
			}

			if (rtl) {
				rightPos = !!(!(rightPos & 1 || !rightPos));
			}
			else {
				rightPos = !!(rightPos & 2 || !rightPos);
			}

			if (useSave && !window._lyteDropdown.isEmpty(save)) {
				rightPos = save.rightPos;
				downPos = save.downPos;
			}
			else if (useSave) {
				save.rightPos = rightPos;
				save.downPos = downPos;

				this.setData('savedPositions', save);
			}

			if (downPos) {
				if (callout) {
					this.setCorrectClass('lyteArrowTop');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aHeight = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					body.style.top = this.alignBoxTopToButtonBottom(par, offsets, y) + parseFloat(aHeight ? aHeight : '0px') + 'px';
				}
				else {
					body.style.top = this.alignBoxTopToButtonBottom(par, offsets, y) + 'px';
				}



			}
			else {

				if (callout) {
					this.setCorrectClass('lyteArrowBottom');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aHeight = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					body.style.bottom = this.setTopAboveForDown(par, body, offsets, drop, y) + parseFloat(aHeight ? aHeight : '0px') + 'px';
				}
				else {
					body.style.bottom = this.setTopAboveForDown(par, body, offsets, drop, y) + 'px';
				}


			}

			if (rightPos) {
				if (callout) {
					this.setVerticalCalloutPosition( width, offsets, true );
				}

				body.style.left = this.alignBoxToButtonLeft(par, offsets, x) + 'px';
			}
			else {
				if (callout) {
					this.setVerticalCalloutPosition( width, offsets, false );
				}

				body.style.right = this.setLeftExceedForDown(par, body, offsets, width, x) + 'px'
			}

			this.setPositionFlags( downPos ? 'down' : 'up', rightPos ? 'right' : 'left' );

		}
		else if (position === 'right') {
			rightPos = 0;
			if (offsets.left - drop.width > scopeBoundary.left) {
				rightPos = 1;

			}
			if (offsets.left + offsets.width + drop.width < scopeBoundary.right) {
				rightPos += 2;
			}

			if (rtl) {
				rightPos = !!(!(rightPos & 1 || !rightPos));
			}
			else {
				rightPos = !!(rightPos & 2 || !rightPos);
			}

			downPos = this.findSecondaryVerticalPosition( 'right', offsets, drop, scopeBoundary );

			if (useSave && !window._lyteDropdown.isEmpty(save)) {
				rightPos = save.rightPos;
				downPos = save.downPos;
			}
			else if (useSave) {
				save.rightPos = rightPos;
				save.downPos = downPos;

				this.setData('savedPositions', save);
			}

			if (rightPos) {

				if (callout) {
					this.setCorrectClass('lyteArrowLeft');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aWidth = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					aWidth = parseFloat(aWidth ? aWidth : '0px');
					body.style.left = this.setLeftForRight(par, offsets, x) + aWidth + 'px'
				}
				else {
					body.style.left = this.setLeftForRight(par, offsets, x) + 'px'
				}
			}
			else {

				if (callout) {
					this.setCorrectClass('lyteArrowRight');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aWidth = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					aWidth = parseFloat(aWidth ? aWidth : '0px');
					body.style.right = this.setRightForRight(par, body, offsets, width, x) + aWidth + 'px';
				}
				else {
					body.style.right = this.setRightForRight(par, body, offsets, width, x) + 'px';
				}
			}

			if (downPos) {
				if (callout) {
					this.setHorizontalCalloutPosition( drop, offsets, true );
				}

				body.style.top = this.setTopForRight(par, offsets, y) + 'px'
			}
			else {
				if (callout) {
					this.setHorizontalCalloutPosition( drop, offsets, false );
				}

				body.style.bottom = this.setTopForRightAbove(par, body, offsets, drop, y) + 'px'
			}

			this.setPositionFlags( rightPos ? 'right' : 'left', downPos ? 'down' : 'up' );

		}
		else if (position === 'up') {
			topPos = this.findPrimaryVerticalPosition( 'up', offsets, drop, scopeBoundary );

			rightPos = 0
			if (offsets.left + offsets.width - width > scopeBoundary.left) {
				rightPos = 1;
			}
			if (offsets.left + width <= scopeBoundary.right) {
				rightPos += 2;
			}

			if (rtl) {
				rightPos = !!(!(rightPos & 1 || !rightPos));
			}
			else {
				rightPos = !!(rightPos & 2 || !rightPos);
			}

			if (useSave && !window._lyteDropdown.isEmpty(save)) {
				rightPos = save.rightPos;
				topPos = save.topPos;
			}
			else if (useSave) {
				save.rightPos = rightPos;
				save.topPos = topPos;

				this.setData('savedPositions', save);
			}

			if (topPos) {

				if (callout) {
					this.setCorrectClass('lyteArrowBottom');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aHeight = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					aHeight = parseFloat(aHeight ? aHeight : '0px');
					body.style.bottom = this.setTopAboveForDown(par, body, offsets, drop, y) + aHeight + 'px';
				}
				else {
					body.style.bottom = this.setTopAboveForDown(par, body, offsets, drop, y) + 'px';
				}
			}
			else {

				if (callout) {
					this.setCorrectClass('lyteArrowTop');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aHeight = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					aHeight = parseFloat(aHeight ? aHeight : '0px');
					body.style.top = this.alignBoxTopToButtonBottom(par, offsets, y) + aHeight + 'px';
				}
				else {
					body.style.top = this.alignBoxTopToButtonBottom(par, offsets, y) + 'px'
				}
			}
			if (rightPos) {
				if (callout) {
					this.setVerticalCalloutPosition( width, offsets, true );
				}

				body.style.left = this.alignBoxToButtonLeft(par, offsets, x) + 'px';
			}
			else {
				if (callout) {
					this.setVerticalCalloutPosition( width, offsets, false );
				}

				body.style.right = this.setLeftExceedForDown(par, body, offsets, width, x) + 'px';
			}

			this.setPositionFlags( topPos ? 'up' : 'down', rightPos ? 'right' : 'left' );

		}
		else if (position === 'left') {
			leftPos = 0;

			if (offsets.left + offsets.width + width < scopeBoundary.right) {
				leftPos = 1;
			}
			if (offsets.left - width > scopeBoundary.left) {
				leftPos += 2;
			}

			if (rtl) {
				leftPos = !!(!(leftPos & 1 || !leftPos));
			}
			else {
				leftPos = !!(leftPos & 2 || !leftPos);
			}

			downPos = this.findSecondaryVerticalPosition( 'left', offsets, drop, scopeBoundary );

			if (useSave && !window._lyteDropdown.isEmpty(save)) {
				leftPos = save.leftPos;
				downPos = save.downPos;
			}
			else if (useSave) {
				save.leftPos = leftPos;
				save.downPos = downPos;

				this.setData('savedPositions', save);
			}

			if (leftPos) {

				if (callout) {
					this.setCorrectClass('lyteArrowRight');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aWidth = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					aWidth = parseFloat(aWidth ? aWidth : '0px');
					body.style.right = this.setRightForRight(par, body, offsets, width, x) + aWidth + 'px';
				}
				else {
					body.style.right = this.setRightForRight(par, body, offsets, width, x) + 'px';
				}
			}
			else {

				if (callout) {
					this.setCorrectClass('lyteArrowLeft');

					// layout thrashing happens here
					// Removing layout thrashing causes a jitter
					aWidth = window.getComputedStyle(arrow, ':before').getPropertyValue('border-left-width');
					aWidth = parseFloat(aWidth ? aWidth : '0px');
					body.style.left = this.setLeftForRight(par, offsets, x) + aWidth + 'px';
				}
				else {
					body.style.left = this.setLeftForRight(par, offsets, x) + 'px';
				}
			}

			if (downPos) {
				if (callout) {
					this.setHorizontalCalloutPosition( drop, offsets, true );
				}

				body.style.top = this.setTopForRight(par, offsets, y) + 'px';
			}
			else {
				if (callout) {
					this.setHorizontalCalloutPosition( drop, offsets, false );
				}

				body.style.bottom = this.setTopForRightAbove(par, body, offsets, drop, y) + 'px';
			}

			this.setPositionFlags( leftPos ? 'left' : 'right', downPos ? 'down' : 'up' );

		}

		body.__height = height;
	}

    getScopeBoundary() {
		var scope = this.getData('ltPropScope'),
			element,
			res = {
				left: 0,
				top: 0,
				right: window.innerWidth,
				bottom: window.innerHeight
			}, boundingRects;

		if (scope !== 'window') {
			element = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node).closest(scope).get(0);

			if (element) {
				boundingRects = element.getBoundingClientRect();

				return {
					left: Math.max(0, boundingRects.left),
					top: Math.max(0, boundingRects.top),
					right: Math.min(window.innerWidth, boundingRects.right),
					bottom: Math.min(window.innerHeight, boundingRects.bottom)
				};
			}
		}

		return res;
	}

    setFreezeLayer() {
		var node = document.getElementById('lytedropdownfreezelayer'),
			scrollsToPrevent = this.getData('ltPropPreventScroll');

		if (scrollsToPrevent === 'all') {
			node.style.display = 'block';
			node.classList.add('lyteDropdownZIndex');
		}

		document.body.classList.add('lyteBodyWrapper');
	}

    isInView(element) {
		var body = this.getDropBody(this.childComp),
			containerScrollTop = body.scrollTop,
			containerHeight = body.offsetHeight,
			elementTop = element.offsetTop,
			elementHeight = element.offsetHeight;

		return elementTop >= containerScrollTop && elementTop + elementHeight <= containerScrollTop + containerHeight;
	}

    moveIntoView(element) {
		var body = this.getDropBody(this.childComp),
			containerScrollTop = body.scrollTop,
			elementTop = element.offsetTop;

		if (elementTop <= containerScrollTop) {
			this.moveDown(element);
		}
		else {
			this.moveUp(element);
		}
	}

    moveDown(element) {
		var body = this.getDropBody(this.childComp);

		body.scrollTop = this.isFirstItem( element ) ? 0 : element.offsetTop;
	}

    moveUp(element) {
		var body = this.getDropBody(this.childComp);

		body.scrollTop = element.offsetTop + element.offsetHeight - body.offsetHeight
	}

    scrollIntoView(element, move) {
		var parent = this.getDropBody(this.childComp),
			offsetTop = element.offsetTop,
			scrollT = parent.scrollTop,
			height = parent.getBoundingClientRect().height,
			elementHeight = element.getBoundingClientRect().height;

		if (!parent.contains(element)) {
			// There can be elements inside lyte-drop-footer. So we only scroll to elements inside the body
			return;
		}

		if (!this.isInView(element)) {
			this.moveIntoView(element);
		}
	}

    open() {
		var that = this, link,
			type = this.getData('ltPropType'),
			head = this.getData('drophead'),
			mul = this.getData('multiple'),
			freeze = this.getData('ltPropFreeze'),
			hover = this.getData('ltPropHover');

		link = this.childComp = this.$node.querySelector('lyte-drop-box');

		this.closeError(link, head);
		this.hideNodes();

		if (
			type === 'multisearch'
			&& head !== 'yield'
		) {
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node.querySelector('.lyteDropdownTextField')).search({
				scope: link,
				trim: this.getData( 'ltPropTrimSearchText' ),
				searchDelay: undefined,
				hiddenSelector: ".lyteDropdownActive",
				search: 'lyte-drop-item',
				related: 'lyte-drop-group',
				onSearch: function (res, event, value) {
					var i = 0, lk = that.childComp,
						body = that.getDropBody(lk),
						div = body.querySelector('.lyteDropdownNoResult'),
						text = that.getData('ltPropNoResult'), ret;

					if (that.getMethods('onSearch')) {
						ret = that.executeMethod('onSearch', res, event, value, that);
					}

					if (ret === false) {
						return ret;
					}

					body.scrollTop = 0;

					for (; i < res.length; i++) {
						if (!res[i].classList.contains('lyteDropdownActive')) {
							if (div) {
								div.style.display = 'none';
							}

							that.toggleCurrent(res[i], body);

							return;
						}
					}

					if (div.style.display !== 'none') {
						return;
					}

					if (text) {
						div.style.display = 'block';
					}
				}
			});
		}

		link.origindd = this.$node;
		window._lyteUiUtils.appendChild(document.body, link);
		link.classList.remove('lyteDropdownHidden');

		this.preventParentScroll();

		if (freeze && !mul && !hover) {
			this.setFreezeLayer()
		}

	}

    preventParentScroll() {

		if (!this.getData('ltPropPreventParentScroll')) {
			return;
		}

		var parents = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this.$node).parents(), scrollableParents, lyteScrollBarParents, that = this;

		scrollableParents = parents.filter(this.isScrollable);
		lyteScrollBarParents = parents.filter(this.isLyteScrollBar);

		lyteScrollBarParents = lyteScrollBarParents.map(function (index, item) {
			return item.parentNode;
		});

		scrollableParents.each(function (index, item) {
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(item).data('lyte-scrollTop', item.scrollTop);
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(item).data('lyte-scrollLeft', item.scrollLeft);
		});

		this.scrollableParents = scrollableParents;
		this.lyteScrollBarParents = lyteScrollBarParents;

		this.scrollableParents.on('scroll', this.resetScroll);
		this.scrollableParents.on( 'wheel', this.preventDefaultBehaviour );
		this.scrollableParents.on( 'touchmove', this.preventDefaultBehaviour );


		this.lyteScrollBarParents.each(function (index, item) {
			if (item) {
				item.addEventListener('touchmove', that.disableLyteScrollBar, true);
				item.addEventListener('wheel', that.disableLyteScrollBar, true);
			}
		});

		document.body.classList.add('lyteBodyWrapper');
	}

    disableLyteScrollBar(event) {
		event.stopPropagation();
	}

    isScrollable(index, item) {
		var overflowY = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(item).css('overflow-y'),
			overflowX = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(item).css('overflow-x');

		if ((item.clientWidth < item.scrollWidth && (overflowX === 'auto' || overflowX === 'scroll')) || (item.clientHeight < item.scrollHeight && (overflowY === 'auto' || overflowY === 'scroll'))) {
			return true;
		}

		return false;
	}

    isLyteScrollBar(index, item) {
		return item.classList.contains('lyteScrollBar');
	}

    resetScroll() {
		var scrollTop = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this).data('lyte-scrollTop'),
			scrollLeft = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(this).data('lyte-scrollLeft');

		this.scrollTop = scrollTop;
		this.scrollLeft = scrollLeft;
	}

    preventDefaultBehaviour(event) {
		event.preventDefault();
	}

    hideNodes() {
		var link = this.childComp, selected, i = 0, item,
			mul = this.getData('multiple'),
			type = this.getData('ltPropType'),
			head = this.getData('drophead'),
			sel = this.getData('ltPropSelected');

		// Hide the filtered items in the dropdown list
		if (mul && sel && sel.length > 2) {
			if (!link) {
				return;
			}

			try {
				selected = JSON.parse(this.getData('ltPropSelected') || '[]');
			}
			catch (err) {
				console.error('Unable to parse ltPropSelected', err);
				return;
			}

			// Hide new selected values

			var all_elems = this.getAllItems(link);

			for (; i < selected.length; i++) {
				item = this.getItem(all_elems, selected[i]);
				// item = link.querySelector('[data-value="'+ window._lyteUiUtils.escape( selected[ i ] ) +'"]');
				if (item) {
					item.classList.add('lyteDropdownActive');
					this.hideGroup(item);
					this.setData('preventSel', true);
					item.setAttribute('selected', true);
					this.setData('preventSel', false);
				}
			}
		}

		this.showError(link, type, head);
	}

    showNodes(change) {
		var i = 0, j, olen, elm, res,
			link = this.childComp,
			body = this.getDropBody(link),
			mul = this.getData('multiple'),
			type = this.getData('ltPropType'),
			head = this.getData('drophead'),
			all = this.getData('ltPropSelectedList') || [],
			sysValue = this.getData('sysValue'),
			nv = change.newValue,
			ov = change.oldValue;

		if (!mul) {
			return;
		}

		// if link doesn't make sense here: TODO
		if (link) {
			res = body.querySelector('.lyteDropdownNoResult');
		}

		try {
			// Convert to string for obvious reasons
			nv = JSON.parse(nv || '[]').map(function (val) {
				return '' + val;
			});

			// Convert to string for obvious reasons
			ov = JSON.parse(ov || '[]').map(function (val) {
				return '' + val;
			});
		}
		catch (err) {
			console.error('Unable to parse ltPropSelected', err);
			return;
		}

		olen = ov.length;

		var all_elems = this.getAllItems(link);

		for (; i < olen; i++) {
			if (nv.indexOf(ov[i]) === -1) {
				if (link) {
					// elm = link.querySelector( '[data-value="' + window._lyteUiUtils.escape( ov[ i ] ) + '"]' );
					elm = this.getItem(all_elems, ov[i]);

					// show items in dropbox
					if (elm) {
						elm.classList.remove('lyteDropdownActive');
						this.showGroup(elm);
						this.setData('preventSel', true);
						elm.removeAttribute('selected');
						this.setData('preventSel', false);

					}
				}


				// remove items from head
				this.setData('preventSelListObs', true);

				for (j = 0; j < all.length; j++) {
					if (('' + all[j][sysValue]) === ov[i]) {
						this.$addon.arrayUtils(all, 'removeAt', j, 1);
						break;
					}
				}

				this.setData('preventSelListObs', false);

				// May need to add a check to see if the dropdown is open
				if (res
					&& ((type === 'multisearch' && head !== 'yield')
						|| type === 'multiple')
				) {
					res.style.display = 'none';
				}
			}
		}
	}

    toggleDropdownClass() {
		var node = this.$node,
			sel = this.getData('ltPropSelected') || '[]',
			isMultiple = this.getData('multiple');

		if (!isMultiple) {
			return;
		}

		sel = JSON.parse(sel);

		if (sel.length > 0) {
			node.classList.remove('lyteDropNoOptSelected')
		}
		else {
			node.classList.add('lyteDropNoOptSelected');
		}
	}

    first() {
		var type = this.getData('ltPropType');

		this.setData('ltPropShow', true);
		this.setData('ltPropIsOpen', true);
		this.open();

		if (type === 'multisearch') {
			this.focusInput();
		}

		this.setBoxStyles();
	}

    subsequent(link, freeze, mul, hover) {
		var type = this.getData('ltPropType'),
			head = this.getData('drophead');

		this.setData('ltPropIsOpen', true);
		link.classList.remove('lyteDropdownHidden');

		this.preventParentScroll();

		if (freeze && !mul && !hover) {
			this.setFreezeLayer()
		}

		if (type === 'multisearch') {
			this.focusInput();
		}

		this.closeError(link, head);
		this.showError(link, type, head);

		this.setBoxStyles();
	}

    setBoxStyles() {
		var manual = this.getData('ltPropSetPos'),
			dropbox = this.getDropBox();

		if (manual
			|| !dropbox || dropbox.classList.contains('lyteDropdownHidden')
		) {
			return;
		}

		this.prerequisites();
	}

    /**
	 * This invokes the beforeShow method but with a twist
	 * You can now return promises which open the dropdown only when they are resolved
	 * @param {Event} event - The event
	 * @param {boolean} fromTg - Whether it is from the toggle function
	 *
	 *
	 */

    beforeShow(event, fromTg, first) {
		var res, that = this, link = this.getDropBox(),
			freeze = this.getData('ltPropFreeze'),
			mul = this.getData('multiple'),
			hover = this.getData('ltPropHover');

		res = this.executeMethod('onBeforeShow', event, this);

		if (res && res.then) {

			window._lyteDropdown.lastDropdownWithAPromise = this.$node;
			this.setData('blockShowHide', true);

			res
				.then(function (arg) {
					that.setData('blockShowHide', false);

					if (that.isNotLastDropdownWithPromise()) {
						return;
					}

					that.setData('call', fromTg ? true : event);

					if (first) {
						that.first();
					}
					else {
						that.subsequent(link, freeze, mul, hover);
					}
				})
				.catch(function (err) {
					that.setData('blockShowHide', false);
					link.removeAttribute('lyte-hidden');
					console.error(err);
				});
		}
		else if (res !== false) {
			that.setData('call', fromTg ? true : event);
			if (first) {
				that.first();
			}
			else {
				that.subsequent(link, freeze, mul, hover);
			}
		}
		else if (res === false) {
			link.removeAttribute('lyte-hidden');
		}
	}

    // Don't change this fn name because thangagiri/anantha(in lyte-tags) is using it to get the dropbox in one of his components.
    getDropBox() {
		var box = this.childComp;

		if (!box) {
			box = this.$node.querySelector('lyte-drop-box');
		}

		return box;
	}

    isNotLastDropdownWithPromise() {
		var lastDropdown = window._lyteDropdown.lastDropdownWithAPromise;

		return this.$node !== lastDropdown;
	}

    /**
	 * Show the error div when one of the elements get removed
	 * @param link - the drop box
	 * @param head -  the dropdown's head
	 *
	 */

    closeError(link, head) {
		var body = this.getDropBody(link),
			result = body.querySelector('.lyteDropdownNoResult'),
			type = this.getData('ltPropType');

		if (
			result
			&& ((head !== 'yield' && type === 'multisearch')
				|| (type === 'multiple'))

		) {
			result.style.display = 'none';
		}
	}

    /**
	 * Check if the number of selected items has crossed the limit
	 * @param {Number} extra - The extra items to be added to the selected list
	 * @returns {Boolean} - true if it does
	 *
	 */

    checkLimit(extra) {
		var type = this.getData('ltPropType'),
			max = this.getData('ltPropMaxCount'),
			sel = this.getData('ltPropSelected'),
			arr, count;

		if (type !== 'multiple'
			&& type !== 'multisearch'
		) {
			return;
		}

		arr = JSON.parse(sel || '[]'),
			count = arr.length + extra;

		if (max > 0 && count > max) {
			return true;
		}
	}

    /**
	 * Find the data-values of nodes that are going to be removed
	 * @param {sel} - The current selected
	 * @param {Array} nodes - An array of HTMLElements that are going to be removed
	 * @return {Object} - Object containing two keys => removed representing the nodes that are getting removed and selected which represents the current selected
	 *
	 */

    findMarked(sel, nodes) {
		var i, ind, removed = [],
			len = nodes.length;

		try {
			sel = JSON.parse(sel || '[]').map(function (val) {
				return '' + val;
			});
		}
		catch (er) {
			console.error('Unable to parse ltPropSelected', er);
		}

		// Unfortunately sortable can change the order of selected values
		for (i = 0; i < len; i++) {
			ind = sel.indexOf(nodes[i].getAttribute('data-value'));
			removed = removed.concat(sel.splice(ind, 1));
		}

		return {
			removed: removed,
			selected: sel
		};
	}

    /**
	 * Remove the marked values
	 * @param sel - The current selected
	 * @param nodes - nodes that are going to be removed
	 * @param head - whether the content was yielded or not
	 *
	 */

    removeMarked(sel, nodes, head, link) {
		var len = nodes.length,
			i, j, all = this.getData('ltPropSelectedList') || [],
			sysValue = this.getData('sysValue'),
			body, node;

		this.setData('preventSelListObs', true);

		for (i = 0; i < len; i++) {
			for (j = 0; j < all.length; j++) {
				if (('' + all[j][sysValue]) == nodes[i].getAttribute('data-value')) {
					this.$addon.arrayUtils(all, 'removeAt', j);
					break;
				}
			}
		}

		this.setData('preventSelListObs', false);

		body = this.getDropBody(link);

		var all_elems = this.getAllItems(body);

		for (i = 0; i < nodes.length; i++) {
			// node = body.querySelector( '[data-value="'+ window._lyteUiUtils.escape( nodes[ i ].getAttribute( 'data-value' ) ) +'"]' );
			node = this.getItem(all_elems, nodes[i].getAttribute('data-value'));
			if (node) {
				node.classList.remove('lyteDropdownActive');
				node.classList.remove('lyteSearchHidden');
				this.showGroup(node);
				node.removeAttribute('selected');
			}
		}

		this.fixSearchResults();

		this.setData('prev', true);
		this.setData('ltPropSelected', JSON.stringify(sel));
		this.setData('prev', false);

	}

    fixSearchResults() {
		var input = this.$node.querySelector('lyte-search') || this.$node.querySelector('input');

		if (input && input.setValue) {
			input.setValue(input.value || '');
		}
	}

    removeAll(event) {
		var drop = this.$node,
			link = this.childComp,
			head = this.getData('drophead'),
			button = drop.querySelector('lyte-drop-button'),
			nodes = button.querySelectorAll('.lyteDropMark'),
			oldSelected = this.getData('ltPropSelected'),
			sel = this.getData('ltPropSelected'),
			proper, changeObj, ret;

		if (this.getData('ltPropReadOnly')) {
			return;
		}

		changeObj = this.findMarked(sel, nodes);

		proper = this.getData('isKeyDown') ? 'keydown' : 'click';

		// Intentionally sending false because we are already passing in an array
		ret = this.beforeRemove(event, changeObj.removed, proper, nodes);

		if (ret) {
			// Don't know why exactly this is here
			// event.stopPropagation();
			return;
		}

		this.removeMarked(changeObj.selected, nodes, head, link);

		this.closeError(link, head);

		if (this.getMethods('onRemove')) {
			this.executeMethod('onRemove', event, changeObj.removed, this.getData('ltPropSelected'), this, proper, nodes);
		}

		this.fixBoxPosition();

		this.fireOnChange(oldSelected, event, nodes);

		// Don't know why exactly this is here
		// event.stopPropagation();
	}

    /**
	 * Returns true when current clicked node and previous selected node( only 1 ) are same or one of the previous selected nodes is behind. Else returns false
	 *
	 * @param cur - currently selected node
	 */

    relativePosition(cur, prev) {
		var iterator = cur;

		// When the current selected element and the previous selected element is the same
		if (prev.length === 1 && prev[0] === cur) {
			return true;
		}

		// Loop through previous elements to check if it is present
		while ((iterator = iterator.previousElementSibling)) {
			if (iterator.getAttribute('lyte-last')) {
				return true;
			}
		}

		return false;
	}

    shade(node) {
		var front, iterator,
			// There can be dropdowns within dropdown - this guarantees the first button is selected
			present = this.$node
				.querySelector('lyte-drop-button')
				.querySelectorAll('.lyteDropMark');

		// Don't process when a there are more than 1 selected items and the user clicks on one of the selected items
		if (present.length > 1 && node.classList.contains('lyteDropMark')) {
			return;
		}

		iterator = (present.length === 0 || this.relativePosition(node, present)) ? 'previousElementSibling' :
			'nextElementSibling';

		do {
			node.classList.add('lyteDropMark');
		} while ((node = node[iterator])
			&& !node.getAttribute('lyte-last'));
	}

    fireCheckKey() {
		var node = this.$node;

		node.component.checkKey(window.event);
	}

    fireOnChange(oldValue, event, item) {
		var newValue = this.getData('ltPropSelected');

		if (this.hasValueChanged(oldValue) && this.getMethods('onChange')) {
			this.executeMethod('onChange', event, newValue, this, item);
		}
	}

    hasValueChanged(oldValue) {
		var newValue = this.getData('ltPropSelected'),
			isMultiSelects = this.getData('multiple');

		if (isMultiSelects) {
			oldValue = this.stringifyALS(oldValue);
			newValue = this.stringifyALS(newValue);

			// differently ordered selected values are considered different.
			return oldValue !== newValue;
		}
		else {
			return oldValue !== newValue;
		}
	}

    stringifyALS(arrayLikeString) {
		arrayLikeString = arrayLikeString || '[]';

		arrayLikeString = JSON.parse(arrayLikeString).map(function (item) {
			return '' + item;
		});

		return JSON.stringify(arrayLikeString);
	}

    mark(node, shift, single) {



		// When shift is pressed
		if (shift) {
			window._lyteDropdown.unmark(this);
			this.shade(node);
		}
		// When command or control is pressed
		else if (single) {
			window._lyteDropdown.unmark(this);
			node.classList.add('lyteDropMark');
		}
		// When none of the modifier keys are pressed
		else {
			window._lyteDropdown.unmark();
			node.classList.add('lyteDropMark');
		}

		this.setLast(node);
	}

    beforeSelect(event, item) {
		var selected = this.getData('ltPropSelected'), ret = true,
			value = item.getAttribute('data-value');

		if (this.getMethods('beforeSelect')) {
			ret = this.executeMethod('beforeSelect', event, selected, this, item, value);
			ret = ret === false ? false : true;
		}

		return ret;
	}

    /**
	 * This function is going to focus the input in the dropdown when
	 * an item is selected from the multiselect list
	 * an item is removed from the selected list
	 *
	 */

    focusInput() {
		var inp;

		// People have search inside the drop-box in multisearch
		if (!window._lyteUiUtils.isMobile) {
			_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {

				if (!this.$node) {
					return;
				}

				var inp = this.$node.querySelector('input');

				if (inp) {
					inp.focus();
				}
			}, this);
		}
		else {
			inp = this.$node.querySelector('input');

			if (inp) {
				inp.focus();
			}
		}
	}

    /**
	 * This is going to show the no result div
	 * @param {Element} link - The drop-box element
	 * @param {String} type - The dropdown type
	 * @param {String} head - Whether the head is an yield or not
	 *
	 */

    showError(link, type, head) {
		var body = this.getDropBody(link),
			nodes = body.querySelectorAll('lyte-drop-item:not(.lyteDropdownActive):not(.lyteSearchHidden)'),
			res, text = this.getData('ltPropNoResult');

		if (
			text
			&& nodes.length === 0
			&& (res = body.querySelector('.lyteDropdownNoResult'))
			&& ((type === 'multisearch' && head !== 'yield') || (type === 'multiple'))
		) {
			res.style.display = 'block';
		}
	}

    /**
	 * This is going to decide whether to remove or to not remove the current item from the multiselect
	 * @param {Event} event - The event object
	 * @param {String/Array} src - An array or the single data-value getting removed
	 * @param {String} proper - The event which triggered the remove function
	 * @param {Element/Array} node - An array or the single item getting removed
	 * @returns {Boolean} - true to prevent it from getting removed
	 *
	 */

    beforeRemove(event, src, proper, node) {
		var ret;

		if (this.getMethods('onBeforeRemove')) {
			ret = this.executeMethod('onBeforeRemove', event, src, this.getData('ltPropSelected'), this, proper, node);

			ret = ret != false ? false : true;
		}

		return ret;
	}

    /**
	 * This invokes a method which is going to decide whether to add the item into the multiselect or not
	 * @param {Event} event - The event object
	 * @param {Element} elm - The element that was selected
	 * @param {String} src - Its data-value
	 * @returns {Boolean/Object} - returning prevents the element from being selected
	 *
	 */

    beforeAdd(event, elm, src) {
		var preventAddition;

		if (this.getMethods('onBeforeAdd')) {
			preventAddition = this.executeMethod('onBeforeAdd', event, src, this.getData('ltPropSelected'), this, elm);
		}

		if (this.isPromise(preventAddition)) {
			return preventAddition;
		}

		preventAddition = preventAddition != false ? false : true;

		return preventAddition;
	}

    /**
	 * This is going to invoke the beforeHide callback and tell us whether the dropbody should be hidden or not
	 * @param {Event} event - The invoked event object
	 *
	 *
	 */

    beforeHide(link, event, freeze) {
		var res = false;

		if (this.getMethods('onBeforeHide')) {
			res = this.executeMethod('onBeforeHide', event, this);
			if (res && res.then) {
				res
					.then(function () {
						this.closeDrop(link, event, freeze);
					}.bind(this, link, event, freeze))
					.catch(function (err) {
						console.error(err);
					});

				return true;
			}
			res = res != false ? false : true;
		}

		return res;
	}

    // Hidden Method
    beforeScrollClose(event) {
		if (this.getMethods('onBeforeScrollClose')) {
			this.executeMethod('onBeforeScrollClose', event);
		}
	}

    // Hidden Method
    beforeScrollOpen(event) {
		if (this.getMethods('onBeforeScrollOpen')) {
			this.executeMethod('onBeforeScrollOpen', event);
		}
	}

    /**
	 * This is going to set the highlight element of the dropdown
	 * @param {NodeList} elems - All the lyte-drop-items to be traversed
	 * @param {Element} node - Current selected drop-item
	 *
	 */

    setHighlight(elems, node) {
		var i = 0, j, k;

		for (; i < elems.length; i++) {
			if (elems[i].classList.contains('lyteDropdownSelection')) {
				break;
			}
		}

		if (elems[i] && elems[i] === node) {

			k = j = i;
			i = window._lyteDropdown.find(elems, i + 1, true);



			if (i != elems.length) {
				elems[i].classList.add('lyteDropdownSelection');
				this.getActiveElement().setAttribute('aria-activedescendant', elems[i].getAttribute('id'));
			}
			else {
				j = window._lyteDropdown.find(elems, j - 1, false);

				if (j != -1) {
					elems[j].classList.add('lyteDropdownSelection');
					this.getActiveElement().setAttribute('aria-activedescendant', elems[j].getAttribute('id'));
				}
			}

			elems[k].classList.remove('lyteDropdownSelection');
		}

	}

    /**
	 * Sets the current node as the last selected node
	 * so that subsequent selections can proceed from this node ( Also removes the previous last)
	 *
	 * @param node - the node which is going to be the last node that is getting set
	 */

    setLast(node) {
		var prev = document.querySelector('[lyte-last="true"]');

		if (prev) {
			prev.removeAttribute('lyte-last');
		}

		node.setAttribute('lyte-last', true);
	}

    /**
	 * This is going to invoke the onOptionSelected callback
	 * @param {Event} event - The event object
	 * @param {string} sel - The current selected value
	 * @param {Element} elm - The lyte-drop-item that was selected
	 *
	 */

    optCall(event, sel, elm) {
		if (this.getMethods('onOptionSelected')) {
			this.executeMethod('onOptionSelected', event, sel, this, elm);
		}
	}

    /**
	 * Function to set the first value as lt-prop-selected
	 *
	 */

    setInitialSelected(options) {
		this.setSelectedFromOptions( options );
	}

    setSelectedList() {
		var sel = this.getData('ltPropSelected'),
			selected, selectedList;

		if (!sel) {
			return;
		}

		try {
			selected = JSON.parse(sel || '[]').map(function (val) {
				return '' + val;
			});
		}
		catch (err) {
			console.error('Could not parse ltPropSelected', err);
			return;
		}

		this.buildList(selected);
	}

    buildList(selected) {
		this.setData('preventSelListObs', true);

		for (var i = 0; i < selected.length; i++) {
			if (this.isPresentInList(selected[i])) {
				continue;
			}

			if (this.isOptionsGiven()) {
				this.buildWithOptions(selected[i]);
			}
			else {
				this.buildManually(selected[i]);
			}
		}

		this.setData('preventSelListObs', false);
	}

    isPresentInList(sel) {
		var list = this.getData('ltPropSelectedList') || [],
			sysValue = this.getData('sysValue');

		for (var i = 0; i < list.length; i++) {
			if (('' + list[i][sysValue]) === sel) {
				return true;
			}
		}

		return false;
	}

    isOptionsGiven() {
		var userValue = this.getData('ltPropUserValue'),
			sysValue = this.getData('ltPropSystemValue')

		return userValue || sysValue;
	}

    buildWithOptions(selected) {
		var options = this.getData('ltPropOptions') || [],
			sysValue = this.getData('sysValue'), selectedObj, i = 0;

		while (i < options.length && !selectedObj) {
			if (this.isOptGroup(options[i])) {
				selectedObj = this.getSelectedFromGroup(options[i], selected);
			}
			else if (('' + options[i][sysValue]) === selected) {
				// TODO: Check if same object needs to be pushed or a cloned object needs to be pushed.
				selectedObj = options[i];
			}

			i++;
		}

		if (selectedObj) {
			this.$addon.arrayUtils(this.getData('ltPropSelectedList'), 'push', selectedObj);
		}
	}

    isOptGroup(option) {
		var keys = Object.keys(option),
			length = keys.length;

		return keys.length === 1 && Array.isArray(option[keys[0]]);
	}

    getSelectedFromGroup(group, selected) {
		var key = Object.keys(group)[0],
			sysValue = this.getData('sysValue');

		group = group[key] || [];

		for (var i = 0; i < group.length; i++) {
			if (('' + group[i][sysValue]) === selected) {
				return group[i];
			}
		}
	}

    buildManually(selected) {
		var link = this.childComp,
			parent = link ? link : this.$node.querySelector('lyte-drop-box'),
			element = this.getItem(this.getAllItems(parent), selected),
			// element = parent.querySelector( '[data-value="' + window._lyteUiUtils.escape( selected ) + '"]' ),
			obj = {
				value: selected,
				display: (element || {}).textContent
			};

		if (!obj.display) {
			return;
		}

		this.$addon.arrayUtils(this.getData('ltPropSelectedList'), 'push', obj);
	}

    disableClickableItem(tab) {
		var type = this.getData('ltPropType');

		if (type === 'multisearch') {
			tab = this.getClickableItem(tab);
		}

		if (tab && tab.classList) {
			tab.classList.add('lyteDropdown-disabled');
		}

		this.$node.classList.add('lyteDropdownDisabled');
	}

    enableClickableItem(tab) {
		var type = this.getData('ltPropType');

		if (type === 'multisearch') {
			tab = this.getClickableItem(tab);
		}

		if (tab && tab.classList) {
			tab.classList.remove('lyteDropdown-disabled');
		}

		this.$node.classList.remove('lyteDropdownDisabled');
	}

    getClickableItem(tab) {
		var head = this.getData('drophead');

		if (head === 'noyield') {
			return window._lyteDropdown.traverse(tab, ['HTML', 'LYTE-DROP-BUTTON']);
		}
		else {
			return this.$node.querySelector('.lyteDummyEventContainer');
		}


	}

    hideGroup(item) {
		var group = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(item).parent(), visibleItems;

		if (!group.get(0) || group.get(0).tagName !== 'LYTE-DROP-GROUP') {
			return;
		}

		visibleItems = this.getVisibleItems(group);

		if (visibleItems.length === 0) {
			group.addClass('lyteDropdownHideGroup');
		}
	}

    showGroup(item) {
		var group = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(item).parent(), visibleItems;

		if (!group.get(0) || group.get(0).tagName !== 'LYTE-DROP-GROUP') {
			return;
		}

		visibleItems = this.getVisibleItems(group);

		if (visibleItems.length > 0) {
			group.removeClass('lyteDropdownHideGroup');
		}
	}

    getVisibleItems(group) {
		return group.find('lyte-drop-item:not(.lyteDropdownActive):not(.lyteSearchHidden)');
	}

    setSelectedFromList(isDidConnect) {
		var isMultiple = this.getData('multiple'),
			list, selected, sysValue = this.getData('sysValue'),
			selstr = this.getData('ltPropSelected');

		if (!isMultiple) {
			return;
		}

		list = this.getData('ltPropSelectedList') || [];

		if (isDidConnect
			&& !this.calculateSelected
		) {
			return;
		}

		selected = [];

		for (var i = 0; i < list.length; i++) {
			selected.push('' + list[i][sysValue]);
		}

		this.prevSelectedList = true;
		this.setData('ltPropSelected', JSON.stringify(selected));
		this.prevSelectedList = false;
		this.toggleDropdownClass();
	}

    executeKeyNavigationCallback(item) {
		// Hiding this for now because we don't know it will be useful for anyone outside UI components
		if (this.getMethods('onKeyNavigation')) {
			this.executeMethod('onKeyNavigation', this, item);
		}
	}

    isInputEmpty(input) {
		if (input.tagName === 'LYTE-SEARCH') {
			input = input.querySelector('input');
		}

		if (input && input.value === '') {
			return true;
		}

		return false;
	}

    fixBoxPosition() {
		var shouldUseSave = this.getData('ltPropFixPositionOnOpen');

		this.setCss(true, shouldUseSave);
	}

    showHide(event, eventtype, fromTg) {
		var link = this.childComp,
			freeze = this.getData('ltPropFreeze'),
			mul = this.getData('multiple'),
			type = this.getData('ltPropType'),
			hover = this.getData('ltPropHover'),
			rm = this.getData('ltPropRemoveMultiple'),
			show = this.getData('ltPropShow'), res, cur,
			blockShowHide = this.getData('blockShowHide'),
			isReadOnly = this.getData('ltPropReadOnly'),
			isDisabled = this.getData('ltPropDisabled');

		if (isReadOnly || isDisabled) {
			return;
		}

		if (blockShowHide) {
			return;
		}

		/* Doesn't matter if the onBeforeOpen returns false
		 * trying to open another dropdown when autoClosed is set will flush it
		 * showHide is called from toggle as well
		 */

		window._lyteDropdown.autoClosed = null;

		// Exists to remove multiple selected values from a multiselect using either the meta key or the control key
		if (rm && event && mul) {
			cur = event.target;
			while (cur && cur.tagName !== 'LYTE-DROPDOWN' && !cur.getAttribute('data-value')) {
				cur = cur.parentNode;
			}

			// Node with data-value is clicked so you need to process it
			if (cur && cur.getAttribute('data-value')) {
				this.mark(cur, event.shiftKey, event.ctrlKey || event.metaKey);
				return;
			}
			// The node with data-value is not clicked so this is going to unmark everything
			else {
				_lyteDropdown.unmark();
			}
		}
		// When you click another dropdown whose rm is false
		else {
			_lyteDropdown.unmark();
		}

		// For some unknow reason the dropdown closes when you hover over the select box to prevent this we are doing this and same for the opposite
		if (eventtype == 'enter') {
			if (
				link
				&& !link.classList.contains('lyteDropdownHidden')
			) {
				return;
			}

			this.$node.querySelector('[tabindex]').focus()
		}

		if (eventtype == 'leave') {
			if (
				link
				&& link.classList.contains('lyteDropdownHidden')
			) {
				return;
			}
		}

		this.showNoResultDiv();

		if (!show) {
			if (!link) {
				this.childComp = this.$node.querySelector('lyte-drop-box');
			}

			if (this.childComp) {
				this.childComp.setAttribute('lyte-hidden', '');
			}

			window._lyteUiUtils.dispatchEvent('beforeshow', this.$node, { originalEvent: event });

			if (this.getMethods('onBeforeShow')) {
				this.beforeShow(event, fromTg, true);
			}
			else {
				this.setData('call', fromTg ? true : event);
				this.first();
			}

			if (mul) {
				this.addClass();
			}
		}
		else if (link && link.classList.contains('lyteDropdownHidden')) {
			link.setAttribute('lyte-hidden', '');

			window._lyteUiUtils.dispatchEvent('beforeshow', this.$node, { originalEvent: event });

			if (this.getMethods('onBeforeShow')) {
				this.beforeShow(event, fromTg, false);
			}
			else {
				this.setData('call', fromTg ? true : event);
				this.subsequent(link, freeze, mul, hover);
			}
		}
		else if (link && (fromTg || !mul)) {
			if (this.beforeHide.call(this, link, event, freeze)) {
				return;
			}

			this.closeDrop(link, event, freeze);
		}
		else if (link && type === 'multisearch') {
			this.focusInput();
		}
	}

    checkKey(event) {
		var type = this.getData('ltPropType');
		if (event.keyCode == 9) {
			this.$node.component.showHide(event, event.type);

			if (type == 'multisearch') {
				this.focusInput();
			}
		}
	}

    closeIt(event) {
		var mx = event.clientX,
			my = event.clientY,
			dp = this.$node.querySelector('lyte-drop-button'),
			dpt = dp.getBoundingClientRect().top,
			dph = dp.getBoundingClientRect().height,
			dpl = dp.getBoundingClientRect().left,
			dpw = dp.getBoundingClientRect().width,
			dc = this.childComp,
			dct = dc.getBoundingClientRect().top,
			dch = dc.getBoundingClientRect().height,
			dcl = dc.getBoundingClientRect().left,
			dcw = dc.getBoundingClientRect().width;

		if ((mx > Math.floor(dpl)
			&& mx < Math.floor(dpl + dpw)
			&& my > Math.floor(dpt)
			&& my < Math.floor(dpt + dph))
			|| (mx > Math.floor(dcl)
				&& mx < Math.floor(dcl + dcw)
				&& my > Math.floor(dct)
				&& my < Math.floor(dct + dch)
			)
		) {
			return;
		}

		this.$node.toggle(event, "leave")
	}

    closeFun(event) {
		var link = this.childComp,
			head = this.getData('drophead'),
			rm = this.getData('ltPropRemoveMultiple'),
			oldSelected = this.getData('ltPropSelected'),
			node = event.target, src, sel = this.getData('ltPropSelected'), i = 0,
			res = [], body, end, proper, hide, ret, changeObj;

		while (
			!node.getAttribute('data-value')
			&& node
		) {
			node = node.parentElement
		}

		if (!node) {
			return;
		}

		src = node.getAttribute('data-value')

		proper = this.getData('isKeyDown') ? 'keydown' : 'click';

		ret = this.beforeRemove(event, rm ? [src] : src, proper, rm ? [node] : node);

		if (ret) {
			// Don't know why this is here
			// event.stopPropagation();
			return;
		}

		// This is for inbuilt error display
		this.closeError(link, head);

		changeObj = this.findMarked(sel, [node]);

		this.removeMarked(changeObj.selected, [node], head, link);

		if (this.getMethods('onRemove')) {
			// Return an array of removed values in case of removeMultiple
			// else return a singular value
			this.executeMethod('onRemove', event, rm ? [src] : src, this.getData('ltPropSelected'), this, proper, rm ? [node] : node);
		}

		this.fixBoxPosition();

		this.fireOnChange(oldSelected, event, rm ? [node] : node);

		// Don't know why this is here
		// event.stopPropagation();

	}

    data(arg1) {
		return Object.assign(super.data({
			'shouldDisplayIcon': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),
			'changeItToInvoke': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("number", { "default": 1 }),
			'dummy1': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": true }),
			'dummy2': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": false }),
			'savedPositions': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object', { 'default': {} }),

			/**
			 * @componentProperty {boolean} ltPropRemoveMultiple
			 * @default false
			 * @version 1.0.2
			 *
			 */

			'ltPropRemoveMultiple': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'removeMultiple', false) }),
			'ltPropYield': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": false }),

			/**
			 * @componentProperty {default|multiple|multisearch} ltPropType
			 * @default default
			 */

			'ltPropType': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": 'default' }),

			/**
			 * @componentProperty {number} ltPropTabindex
			 * @default 0
			 */

			'ltPropTabindex': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("number", { "default": 0 }),

			/**
			 * @componentProperty {boolean} ltPropShow
			 * @default false
			 *
			 */

			'ltPropShow': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": false }),

			/**
			 * @componentProperty {boolean} ltPropFreeze
			 * @default true
			 *
			 */

			'ltPropFreeze': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'freeze', true) }),

			/**
			 * @componentProperty {array} ltPropOptions
			 * @default []
			 */

			'ltPropOptions': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("array", { "default": [] }),

			/**
			 * @componentProperty {string} ltPropUserValue
			 */

			'ltPropUserValue': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": undefined }),

			/**
			 * @componentProperty {string} ltPropSystemValue
			 */

			'ltPropSystemValue': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": undefined }),

			/**
			 * @componentProperty {up|down|left|right} ltPropPosition
			 * @default down
			 */

			'ltPropPosition': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'position', 'down') }),

			/**
			 * @componentProperty {string} ltPropIconClass
			 * @default dropdown
			 */

			'ltPropIconClass': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'iconClass', 'dropdown') }),

			/**
			 * @componentProperty {string} ltPropSelected
			 * @default ''
			 */

			'ltPropSelected': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": '' }),

			/**
			 * @componentProperty {boolean} ltPropCallout
			 * @default false
			 *
			 */

			'ltPropCallout': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'callout', false) }),

			/**
			 * @componentProperty {string} ltPropPlaceholder
			 * @version 1.0.4
			 */

			'ltPropPlaceholder': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'placeholder', '') }),

			/**
			 * @componentProperty {boolean} ltPropDisabled
			 * @default false
			 *
			 */

			'ltPropDisabled': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": false }),

			/**
			 * @componentProperty {boolean} ltPropHover
			 * @default false
			 *
			 */

			'ltPropHover': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": false }),

			/**
			 * @componentProperty {string} ltPropNoResult
			 * @default No Results Found
			 * @version 2.0.0
			 */

			'ltPropNoResult': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'noResult', window._lyteUiUtils.i18n('no.results.found')) }),

			/**
			 * @componentProperty {number} ltPropMaxCount
			 * @default 0
			 * @version 2.1.0
			 */

			'ltPropMaxCount': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('number', { 'default': 0 }),

			'ltPropInputClass': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": 'lyteSearch' }),

			/**
			 * @typedef {object} boundary
			 * @property {number} left
			 * @property {number} right
			 * @property {number} top
			 * @property {number} bottom
			 */
			/**
			 * @componentProperty {boundary} ltPropBoundary
			 * @default {}
			 */

			'ltPropBoundary': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("object", { "default": {} }),
			'pos': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": '' }),
			'secondaryPosition': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": '' }),
			'firePos': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("number", { "default": 1 }),
			'ltPropAjaxRequest': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("object", { "default": {} }),
			'firstRequest': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean", { "default": true }),
			'userValue': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string'),
			'sysValue': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string'),

			/**
			 * @componentProperty {string} ltPropDisplayValue
			 * @version 1.0.1
			 */

			'ltPropDisplayValue': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string", { "default": "", hideAttr: true }),

			/**
			 * @componentProperty {array} ltPropDisabledList
			 * @version 1.0.3
			 * @default []
			 */

			'ltPropDisabledList': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('array', { "default": [] }),

			/**
			 * @componentProperty {boolean} ltPropAnimate
			 * @default false
			 *
			 */

			ltPropAnimate: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { default: window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'animate', false) }),
			'ltPropSetPos': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),


			/**
			 * @componentProperty {tooltipConfig} ltPropTooltip
		 * @default { "position" : "bottom", "appearance" : "box","margin" : 5, "keeptooltip" : true}
			 * @version 2.0.0
			 * @component lyte-tooltip ltPropTooltipConfig
			 */

			'ltPropTooltip': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object', {
				'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'tooltip', {
					'position': 'bottom',
					'appearance': 'box',
					'margin': 5,
					'keeptooltip': true
				})

			}),
			// 'ltPropContainerClass':Lyte.attr("string",{"default":''}),
			// 'ltPropSlide':Lyte.attr("boolean",{"default": false}),

			/**
			 * @componentProperty {string} ltPropBoxClass
			 * @version 2.2.8
			 */

			'ltPropBoxClass': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'boxClass', '') }),

			/**
			 * @componentProperty {boolean} ltPropIsOpen
			 * @default false
			 *
			 * @version 2.2.8
			 */

			'ltPropIsOpen': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			'ltPropFocus': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			/**
			 * @componentProperty {boolean} ltPropFixPositionOnOpen
			 * @default false
			 *
			 * @version 2.2.12
			 */

			'ltPropFixPositionOnOpen': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'fixPositionOnOpen', false) }),

			'ltPropForcePlaceholder': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'forcePlaceholder', false) }),

			'ltPropShowEmptyMessage': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			'ltPropBoxButtonWidth': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'boxButtonWidth', 'min-button') }),

			'ltPropPreventScroll': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': 'all' }),

			'ltPropScope': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': 'window' }),

			ltPropAnimateBox: (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { default: window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'animateBox', false) }),

			'ltPropTooltipClass': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'tooltipClass', '') }),

			'ltPropDisplayList': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('array', { 'default': [] }),

			'ltPropSelectedList': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('array', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'selectedList', []) }),

			'ltPropItemSearchType': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': 'contains' }),	//@options contains, startsWith

			'ltPropFocusOnClose': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'focusOnClose', true) }),

			'ltPropButtonClass': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-dropdown', 'buttonClass', '') }),

			'ltPropDisableItemTooltip': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			'ltPropPreventParentScroll': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			'ltPropShowRemoveIcon': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			'ltPropAriaButton': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object', { 'default': {}, watch: true }),

			// Keeping this property hidden for now because we don't know if we need it.
			'ltPropAriaBox': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object', { 'default': {}, watch: true }),

			'ltPropAriaBody': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object', { 'default': {}, watch: true }),

			'ltPropReadOnly': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),

			// The element that should receive focus when the dropdown is opened. It can be in the button or the body
			'ltPropActiveElement': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': '' }),

			// This is used to allow focusable elements in the body and focustrap them. Also this will be hidden
			'ltPropAllowFocusableElements': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean', { 'default': false }),
			'ltPropDataTabindex': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string', { 'default': "" }),

			/* This is a special property that is used to handle a stupid case(territory dropdown in list view) where they have submenus inside dropdown.
			They have submenus inside dropdown which needs to be opened and navigated through the keyboard. So we prevent our arrow key navigations
			This property should not be revealed to the outside world */
			'ltPropPreventNavigation': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 'default': false } ),

			'ltPropTrimSearchText': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 'default': true } ),

			// Experimental for now
			'ltPropNoResultYield': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 'default': false } )

		}), arg1);
	}

    getAllItems(link, __arr) {
		var arr = __arr || [],
			__nodes = link ? link.children : [],
			__len = __nodes.length;

		for (var i = 0; i < __len; i++) {
			var __cur_item = __nodes[i];

			if (/lyte-drop-item/i.test(__cur_item.tagName || "")) {
				arr.push(__cur_item);
			} else {
				this.getAllItems(__cur_item, arr);
			}

		}

		return arr;
	}

    getItem(list, value) {
		var __len = list.length,
			conv = value;

		for (var i = 0; i < __len; i++) {
			var cur = list[i];

			if (cur.getAttribute('data-value') == conv) {
				return cur;
			}
		}

		return null;
	}

    static actions(arg1) {
        return Object.assign(super.actions({
            addFocusClass: function (event) {
                this.getDropButton().classList.add('lyteMultiSearchDropButtonFocused');
            },

            removeFocusClass: function (event) {
                this.getDropButton().classList.remove('lyteMultiSearchDropButtonFocused');
            },

            toolTipConfig: function (button, propName) {
                var width = button.offsetWidth,
                    scrollWidth = button.scrollWidth,
                    config = this.getData('ltPropTooltip');

                propName = propName || 'showToolTip';

                this.setData(propName, (width < scrollWidth) && !window._lyteDropdown.isEmpty(config));
            },

            preventDefault: function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                }
            },

            closeIt: function (event) {
                this.closeIt(event);
            },

            processElements: function (event) {
                this.processElements(event)
            },

            closeFun: function (event) {
                this.closeFun(event);
            },

            checkKey: function (event) {
                this.checkKey(event);
            },

            showHide: function ( event, eventtype, fromTg ) {
                this.showHide( event, eventtype, fromTg );
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            iconClassChanged: function () {
                this.setIconClass();
            }.observes('ltPropIconClass'),

            setClassForRemoveIconObs: function () {
                this.setClassForRemoveIcon();
            }.observes('ltPropShowRemoveIcon', 'ltPropSelected'),

            addDataTabindex: function () {
                var drophead = this.getData('drophead'),
                    isDisabled = this.getData('ltPropDisabled'),
                    dataIndex = this.getData('ltPropDataTabindex'),
                    tabIndexElement = this.$node.querySelector('input');
                if (tabIndexElement && drophead === 'yield' && !isDisabled) {
                    tabIndexElement.setAttribute('data-tabindex', dataIndex);
                }
            }.observes('ltPropDataTabIndex'),

            addTabIndex: function () {
                this.addTabIndexForYieldedMultisearch();
            }.observes('ltPropTabindex'),

            changeBoxClass: function (change) {
                var oldValue = change.oldValue;

                this.setBoxClass(oldValue);

            }.observes('ltPropBoxClass'),

            changeButtonClass: function (change) {
                var oldValue = change.oldValue;

                this.setButtonClass(oldValue);

            }.observes('ltPropButtonClass'),

            noResultChanged: function () {
                var link = this.childComp,
                    type = this.getData('ltPropType'),
                    head = this.getData('drophead'),
                    body = this.getDropBody(link),
                    nores = body.querySelector('.lyteDropdownNoResult'),
                    text = this.getData('ltPropNoResult'),
                    link = this.childComp;

                nores.textContent = text;

                if (!text) {
                    nores.style.display = 'none';
                }

                // Hide the no result div if text is empty
                if (link) {
                    this.showError(link, type, head);
                }

            }.observes('ltPropNoResult'),

            // TODO: Fix this
            onChangeInDisabledList: function () {
                var elements = this.childComp ? this.childComp.querySelectorAll('lyte-drop-item') : this.$node.querySelectorAll('lyte-drop-item'),
                    isItemDisabled;

                for (var i = 0; i < elements.length; i++) {
                    isItemDisabled = this.$component.registeredHelpers.lyteUiCheckDisabled(this.getData('ltPropDisabledList') || [], elements[i].dataset.value);

                    if (isItemDisabled === 'true') {
                        elements[i].classList.remove('lyteDropdownSelection');
                        elements[i].setAttribute('disabled', isItemDisabled);
                    }

                    if (isItemDisabled === 'false' && elements[i].hasAttribute('disabled')) {
                        elements[i].removeAttribute('disabled');
                    }
                }
                this.addDisabledClass(elements);

            }.observes('ltPropDisabledList.[]', 'ltPropOptions.[]' ).on('didConnect'),

            /**
             * Fires the position callback and adds and removes classes for the drop-box according to the direction
             *
             */

            firePosCallBack: function () {
                var pos = this.getData('pos'),
                    needCv = this.getData('widthAdjusted');

                if (pos !== '') {
                    // Fast dom removed here because it is causing a bug in ie
                    // $L.fastdom.mutate( function() {
                    var body = this.childComp,
                        bt = this.$node.querySelector('lyte-drop-button'),
                        ngcls = this.removeClass(body.classList, pos, 'lyteDropdown');

                    /* Removing and adding class of the lyte-drop-box */

                    if (ngcls) {
                        this._preventClass = true;
                        body.classList.remove(ngcls);
                    }

                    body.classList.add('lyteDropdown' + pos[0].toUpperCase() + pos.substring(1));

                    /* End */

                    /* Removing and adding class of lyte-drop-button */

                    ngcls = this.removeClass(bt.classList, pos, 'lyteDropButton');

                    if (ngcls) {
                        this._preventClass = true;
                        bt.classList.remove(ngcls);
                    }

                    bt.classList.add('lyteDropButton' + pos[0].toUpperCase() + pos.substring(1));

                    /* End */

                    if (needCv === 2) {
                        body.classList.add('lyteDropdownCurve');
                    }

                    if (this.getMethods('onPositionChanged')) {
                        this.executeMethod('onPositionChanged', pos, this);
                    }
                    // }, this );

                }

            }.observes(
                'pos',
                'firePos'
            ),

            secondaryPositionObserver: function () {
                var pos = this.getData('secondaryPosition') || '';

                if (pos !== '') {
                    var box = this.childComp,
                        classToRemove = this.removeClass(box.classList, pos, 'lyteDropbox', false, 'AlignToButton');

                    if (classToRemove) {
                        box.classList.remove(classToRemove);
                    }

                    this._preventClass = true;  // This preventClass will take care of the classToRemove mut observer fire
                    box.classList.add('lyteDropbox' + pos[0].toUpperCase() + pos.substring(1) + 'AlignToButton');
                }
            }.observes('secondaryPosition'),

            selObs: function (change) {
                var old = change.oldValue;

                if (this.getData('prev')) {
                    return;
                }

                // TODO:
                // When limit crosses we reset the ltPropSelected which causes the other lt-prop-selected to fire
                // That observer fires twice overall but doesn't change the state of the dropdown but we need to cutdown
                // the processing
                if (this.checkLimit(0)) {
                    this.setData('prev', true);
                    this.setData('ltPropSelected', old);
                    this.setData('prev', false);

                    return;
                }

                this.hideNodes();
                this.showNodes(change);
            }.observes('ltPropSelected'),

            /**
             * Function to set an initial value to the dropdown when lt-prop-options is pushed later
             * into the dropdown. When lt-prop-options is empty and new items are pushed in
             * @param change - Old value and new values
             *
             */

            contentChange: function (change) {
                var oldValue = change.oldValue,
                    newValue = change.newValue,
                    sel = this.getData('ltPropSelected'),
                    ph = this.getData('ltPropPlaceholder'),
                    disp = this.getData('ltPropDisplayValue'),
                    body = this.getData('dropbody') === 'yield',

                    // Old value of lt-prop-options should be empty and the new value should be filled
                    initial = (
                        (oldValue && oldValue.length === 0)
                        || !oldValue
                    ) && newValue && newValue.length > 0;

                if (initial && !sel && !ph && !body) {
                    this.setInitialSelected();
                }

                this.showNoResultDiv();
            }.observes('ltPropOptions'),

            // This is going to only process the child nodes
            hideOptionsBasedOnSelected: function () {
                // This is for multiselect
                var link = this.childComp,
                    head = this.getData('drophead'),
                    multiple = this.getData('multiple'),
                    type = this.getData('ltPropType');

                if (link && multiple) {
                    this.hideNodes();

                    // close error will always close the error
                    this.closeError(link, head);

                    // So there is no error div showing now and show error will decide to show it or not based on the displayed items
                    this.showError(link, type, head);
                }
            }.observes('ltPropOptions'),

            selChange: function () {
                var mul = this.getData('multiple'),
                    head = this.getData('drophead'),
                    link = this.childComp,
                    sel = this.getData('ltPropSelected'),
                    disp = this.getData('ltPropDisplayValue'),
                    preventDisp = this.getData('preventDisp'),
                    sels, parent = link ? link : this.$node.querySelector('lyte-drop-box'),
                    body = this.getDropBody(parent),
                    node, i = 0;

                if (this.prevSelectedList) {
                    return;
                }

                if (
                    mul
                ) {
                    this.setSelectedList();
                }
                else if (!mul) {
                    var all_elems = this.getAllItems(parent);

                    // node = parent.querySelector( '[data-value="' + window._lyteUiUtils.escape( sel ) + '"]' );
                    node = this.getItem(all_elems, sel);

                    if (node) {
                        this.toggleCurrent(node);
                    }

                    // Don't remove previous selected=true attribute when it is a multiselect should only remove it when the element is removed from the selected list.
                    sels = parent.querySelectorAll('[selected]');

                    for (; i < sels.length; i++) {
                        if (sels[i].getAttribute('data-value') != sel) {
                            sels[i].removeAttribute('selected');
                        }
                    }

                    if (head !== 'yield') {
                        if (node) {
                            var innerText = node.textContent;

                            if ((disp && !preventDisp) || !disp) {

                                // don't really need the or over here but w.e
                                this.setData('ltPropDisplayValue', (innerText || '').trim());
                            }
                        }
                        else if (!sel && !preventDisp) {
                            this.setData('ltPropDisplayValue', '');
                        }
                    }

                }

                // To set selected to true to the ltPropSelected node
                if (node) {
                    node.setAttribute('selected', 'true');
                }

                this.toggleDropdownClass();

            }.observes(
                'ltPropOptions',
                'ltPropSelected',
                'changeItToInvoke'
            ),

            tabIndexChange: function () {
                this.toggleButtonInteractivity();
            }.observes('ltPropDisabled'),

            focusDropdown: function () {
                var focusableElement = this.getElementWithTabIndex(),
                    shouldFocus = this.getData('ltPropFocus'),
                    isSearch = this.getData('search');

                if (shouldFocus) {
                    if (!isSearch && focusableElement) {
                        focusableElement.focus( { preventScroll: this.preventScroll } );
                    }
                    else if (isSearch) {
                        this.$node.open();
                    }
                }

                this.data.ltPropFocus = false;
            }.observes('ltPropFocus').on('didConnect'),

            showHideEmptyMessage: function () {
                this.showNoResultDiv();
            }.observes('ltPropShowEmptyMessage'),

            setSelectedFromListObs: function () {
                if (this.getData('preventSelListObs')) {
                    return;
                }

                this.setSelectedFromList();
            }.observes('ltPropSelectedList.[]'),

            ariaObserver: function () {
                // TODO: Need to fix the setAttribute oldAria argument passed here
                window._lyteUiUtils.setAttribute(this.getDropBox(), this.getData('ltPropAriaBox') || {}, {});
                window._lyteUiUtils.setAttribute(this.getDropBody(this.childComp), this.getData('ltPropAriaBody') || {}, {});
                window._lyteUiUtils.setAttribute(this.getAriaButton(), this.getData('ltPropAriaButton') || {}, {});
            }.observes('ltPropAriaButton', 'ltPropAriaButton.{}', 'ltPropAriaBox', 'ltPropAriaBox.{}', 'ltPropAriaBody', 'ltPropAriaBody.{}' ).on('didConnect')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteDropdownComponent._template = "<template tag-name=\"lyte-dropdown\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropHover,'==',true)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(multiple,'==',true)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(search,'==',true)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(drophead,'==','noyield')}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-button role=\"combobox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\" aria-haspopup=\"listbox\"> <div class=\"lyteMultiselect\"> <ul class=\"lyteMultipleSelect\"> <template items=\"{{ltPropSelectedList}}\" item=\"item\" index=\"indexVal\" is=\"for\" _new=\"true\"> <li data-value=\"{{lyteUiReturnValueBy(item,sysValue)}}\"> <span class=\"lyteDropdownVisible\" onmouseenter=\"{{action('toolTipConfig',this,'selToolTip')}}\" lt-prop-title=\"{{if(selToolTip,lyteUiReturnValueBy(item,userValue),'')}}\" lt-prop-tooltip-config=\"{{ltPropTooltip}}\" lt-prop-tooltip-class=\"{{ltPropTooltipClass}}\">{{lyteUiReturnValueBy(item,userValue)}}</span> <lyte-drop-remove class=\"lyteCloseIcon\"></lyte-drop-remove> </li> </template> <li class=\"lyteMultiselectInput\"> <input disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadOnly}}\" onkeydown=\"{{action('preventDefault',event)}}\" type=\"text\" placeholder=\"{{ltPropPlaceholder}}\" class=\"lyteDropdownTextField\" autocomplete=\"off\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" onclick=\"{{action('showHide',event)}}\" onfocus=\"{{action('addFocusClass',event)}}\" onblur=\"{{action('removeFocusClass',event)}}\"> </li> </ul> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{shouldDisplayIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-icon class=\"{{ltPropIconClass}}\"></lyte-icon> </template></template> </lyte-drop-button> </template><template default=\"\"> </template></template> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(drophead,'==',&quot;noyield&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <div class=\"lyteDummyEventContainer\" role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\" onclick=\"{{action('showHide',event)}}\" onkeyup=\"{{action('checkKey',event)}}\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\"> <lyte-drop-button> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(ltPropSelectedList.length,'==',0),'&amp;&amp;',expHandlers(ltPropForcePlaceholder,'!'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteDropPlaceholderMultiple\">{{ltPropPlaceholder}}</span> </template></template> <ul class=\"lyteMultipleSelect\"> <template items=\"{{ltPropSelectedList}}\" item=\"item\" index=\"indexVal\" is=\"for\" _new=\"true\"> <li data-value=\"{{lyteUiReturnValueBy(item,sysValue)}}\"> <span class=\"lyteDropdownVisible\" onmouseenter=\"{{action('toolTipConfig',this,'selToolTip')}}\" lt-prop-title=\"{{if(selToolTip,lyteUiReturnValueBy(item,userValue),'')}}\" lt-prop-tooltip-config=\"{{ltPropTooltip}}\" lt-prop-tooltip-class=\"{{ltPropTooltipClass}}\">{{lyteUiReturnValueBy(item,userValue)}}</span> <lyte-drop-remove class=\"lyteCloseIcon\"></lyte-drop-remove> </li> </template> </ul> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropForcePlaceholder}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteDropPlaceholderMultiple\">{{ltPropPlaceholder}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{shouldDisplayIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-icon class=\"{{ltPropIconClass}}\"></lyte-icon> </template></template> </lyte-drop-button> </div> </template><template default=\"\"> </template></template> </template></template> </template><template default=\"\"> <div onmouseenter=\"{{action('showHide',event,'enter')}}\" role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\" onmouseleave=\"{{action('closeIt',event)}}\" class=\"lyteDummyEventContainer\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" style=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(drophead,'==',&quot;noyield&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-button> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropDisplayValue}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteMarginRight lyteDropdownLabel\" onmouseenter=\"{{action('toolTipConfig',this,'showToolTip')}}\" lt-prop-title=\"{{if(showToolTip,ltPropDisplayValue,'')}}\" lt-prop-tooltip-config=\"{{ltPropTooltip}}\" lt-prop-tooltip-class=\"{{ltPropTooltipClass}}\">{{ltPropDisplayValue}}</span> </template><template case=\"{{expHandlers(expHandlers(ltPropSelected,'!'),'&amp;&amp;',expHandlers(ltPropDisplayValue,'!'))}}\" is=\"case\" lc-id=\"lc_id_1\"> <span class=\"lyteDropPlaceholderNormal\">{{ltPropPlaceholder}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropSelected,'&amp;&amp;',ltPropShowRemoveIcon)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-remove class=\"lyteDropdownDeselectIcon\"></lyte-drop-remove> </template></template> <lyte-icon class=\"{{ltPropIconClass}}\"></lyte-icon> </lyte-drop-button> </template><template case=\"{{expHandlers(drophead,'==',&quot;yield&quot;)}}\" is=\"case\" lc-id=\"lc_id_1\"> </template></template> </div> </template></template> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(multiple,'==',true)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(search,'==',true)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(drophead,'==','noyield')}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-button onclick=\"{{action('showHide',event)}}\" role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\"> <div class=\"lyteMultiselect\"> <ul class=\"lyteMultipleSelect\"> <template items=\"{{ltPropSelectedList}}\" item=\"item\" index=\"indexVal\" is=\"for\" _new=\"true\"> <li data-value=\"{{lyteUiReturnValueBy(item,sysValue)}}\"> <span class=\"lyteDropdownVisible\" onmouseenter=\"{{action('toolTipConfig',this,'selToolTip')}}\" lt-prop-title=\"{{if(selToolTip,lyteUiReturnValueBy(item,userValue),'')}}\" lt-prop-tooltip-config=\"{{ltPropTooltip}}\" lt-prop-tooltip-class=\"{{ltPropTooltipClass}}\">{{lyteUiReturnValueBy(item,userValue)}}</span> <lyte-drop-remove class=\"lyteCloseIcon\"></lyte-drop-remove> </li> </template> <li class=\"lyteMultiselectInput\"> <input disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadOnly}}\" onkeydown=\"{{action('preventDefault',event)}}\" type=\"text\" placeholder=\"{{ltPropPlaceholder}}\" class=\"lyteDropdownTextField\" autocomplete=\"off\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" onfocus=\"{{action('addFocusClass',event)}}\" onblur=\"{{action('removeFocusClass',event)}}\"> </li> </ul> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{shouldDisplayIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-icon class=\"{{ltPropIconClass}}\"></lyte-icon> </template></template> </lyte-drop-button> </template><template default=\"\"> <div class=\"lyteDummyEventContainer\" style=\"\" onclick=\"{{action('showHide',event)}}\" role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\"> </div> </template></template> </template><template default=\"\"> <div class=\"lyteDummyEventContainer\" onclick=\"{{action('showHide',event)}}\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(drophead,'==',&quot;noyield&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-button> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(ltPropSelectedList.length,'==',0),'&amp;&amp;',expHandlers(ltPropForcePlaceholder,'!'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteDropPlaceholderMultiple\">{{ltPropPlaceholder}}</span> </template></template> <ul class=\"lyteMultipleSelect\"> <template items=\"{{ltPropSelectedList}}\" item=\"item\" index=\"indexVal\" is=\"for\" _new=\"true\"> <li data-value=\"{{lyteUiReturnValueBy(item,sysValue)}}\"> <span class=\"lyteDropdownVisible\" onmouseenter=\"{{action('toolTipConfig',this,'selToolTip')}}\" lt-prop-title=\"{{if(selToolTip,lyteUiReturnValueBy(item,userValue),'')}}\" lt-prop-tooltip-config=\"{{ltPropTooltip}}\" lt-prop-tooltip-class=\"{{ltPropTooltipClass}}\">{{lyteUiReturnValueBy(item,userValue)}}</span> <lyte-drop-remove class=\"lyteCloseIcon\"></lyte-drop-remove> </li> </template> </ul> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropForcePlaceholder}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteDropPlaceholderMultiple\">{{ltPropPlaceholder}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{shouldDisplayIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-icon class=\"{{ltPropIconClass}}\"></lyte-icon> </template></template> </lyte-drop-button> </template><template default=\"\"> </template></template> </div> </template></template> </template><template default=\"\"> <div onclick=\"{{action('showHide',event)}}\" class=\"lyteDummyEventContainer\" tabindex=\"{{ltPropTabindex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" style=\"\" role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded=\"{{if(ltPropIsOpen,'true','false')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(drophead,'==',&quot;noyield&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-button> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropDisplayValue}}\" is=\"case\" lc-id=\"lc_id_0\"> <span onmouseenter=\"{{action('toolTipConfig',this,'showToolTip')}}\" lt-prop-tooltip-config=\"{{ltPropTooltip}}\" lt-prop-tooltip-class=\"{{ltPropTooltipClass}}\" lt-prop-title=\"{{if(showToolTip,ltPropDisplayValue,'')}}\" class=\"lyteMarginRight lyteDropdownLabel\">{{ltPropDisplayValue}}</span> </template><template case=\"{{expHandlers(expHandlers(ltPropSelected,'!'),'&amp;&amp;',expHandlers(ltPropDisplayValue,'!'))}}\" is=\"case\" lc-id=\"lc_id_1\"> <span class=\"lyteDropPlaceholderNormal\">{{ltPropPlaceholder}}</span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropSelected,'&amp;&amp;',ltPropShowRemoveIcon)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-remove class=\"lyteDropdownDeselectIcon\"></lyte-drop-remove> </template></template> <lyte-icon class=\"{{ltPropIconClass}}\"></lyte-icon> </lyte-drop-button> </template><template case=\"{{expHandlers(drophead,'==',&quot;yield&quot;)}}\" is=\"case\" lc-id=\"lc_id_1\"> </template></template> </div> </template></template> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropHover,'==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(dropbody,'==',&quot;noyield&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-box class=\"lyteDropdownHidden\"> <lyte-drop-body> <template items=\"{{ltPropOptions}}\" item=\"item\" index=\"indexVal\" is=\"for\" _new=\"true\"><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiOptGroupCheck(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-group> <lyte-drop-label>{{lyteUiReturnOnlyKey(item)}}</lyte-drop-label> <template items=\"{{lyteUiReturnValueBy(item,lyteUiReturnOnlyKey(item))}}\" item=\"subitem\" index=\"indexval\" is=\"for\" _new=\"true\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiIsObject(subitem)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-item data-value=\"{{subitem[ltPropSystemValue]}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,subitem[ltPropSystemValue])}}\">{{subitem[ltPropUserValue]}}</lyte-drop-item> </template><template default=\"\"> <lyte-drop-item data-value=\"{{subitem}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,subitem)}}\">{{subitem}}</lyte-drop-item> </template></template> </template> </lyte-drop-group> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiIsObject(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-item data-value=\"{{item[ltPropSystemValue]}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,item[ltPropSystemValue])}}\">{{item[ltPropUserValue]}}</lyte-drop-item> </template><template default=\"\"> <lyte-drop-item data-value=\"{{item}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,item)}}\">{{item}}</lyte-drop-item> </template></template> </template></template> </template> </lyte-drop-body> </lyte-drop-box> </template><template default=\"\"> </template></template> <div class=\"lyteLoadMsg\" style=\"display:none;\">Loading</div> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(dropbody,'==',&quot;noyield&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-box class=\"lyteDropdownHidden\"> <lyte-drop-body> <template items=\"{{ltPropOptions}}\" item=\"item\" index=\"indexVal\" is=\"for\" _new=\"true\"><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiOptGroupCheck(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-group> <lyte-drop-label>lyteUiReturnOnlyKey(item)</lyte-drop-label> <template items=\"{{lyteUiReturnValueBy(item,lyteReturnOnlyKey(item))}}\" item=\"subitem\" index=\"indexval\" is=\"for\" _new=\"true\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiIsObject(subitem)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-item data-value=\"{{subitem[ltPropSystemValue]}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,subitem[ltPropSystemValue])}}\">{{subitem[ltPropUserValue]}}</lyte-drop-item> </template><template default=\"\"> <lyte-drop-item data-value=\"{{subitem}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,subitem)}}\">{{subitem}}</lyte-drop-item> </template></template> </template> </lyte-drop-group> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiIsObject(item)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-item data-value=\"{{item[ltPropSystemValue]}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,item[ltPropSystemValue])}}\">{{item[ltPropUserValue]}}</lyte-drop-item> </template><template default=\"\"> <lyte-drop-item data-value=\"{{item}}\" disabled=\"{{lyteUiCheckDisabled(ltPropDisabledList,item)}}\">{{item}}</lyte-drop-item> </template></template> </template></template> </template> </lyte-drop-body> </lyte-drop-box> </template><template default=\"\"> </template></template> <div class=\"lyteLoadMsg\" style=\"display:none;\">Loading</div> </template></template> <lyte-yield yield-name=\"yield\" style=\"display: none;\" lyte-options=\"{{ltPropOptions}}\"></lyte-yield> </template>";;
LyteDropdownComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1,1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,3],"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3,1],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[1,1,3,1],"cn":"lc_id_0"},{"t":"f","p":[1,1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,3],"in":0}],"dc":[0],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{"dc":[3,1,0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{},"lc_id_1":{}},"hd":true,"co":["lc_id_0","lc_id_1"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,5],"cn":"lc_id_0"},{"t":"cD","p":[1,5],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"lc_id_1":{}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1,1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,3],"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1,1,3,1],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"}]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"lc_id_0"},{"t":"a","p":[1,3,1],"cn":"lc_id_0"},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,3],"in":0}],"dc":[0],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{"dc":[3,1,0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{},"lc_id_1":{}},"hd":true,"co":["lc_id_0","lc_id_1"],"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,5],"cn":"lc_id_0"},{"t":"cD","p":[1,5],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"lc_id_1":{}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1,1],"dN":[{"t":"s","p":[0],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"},{"t":"f","p":[1,3],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1,1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1,1],"dN":[{"t":"s","p":[0],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"},{"t":"f","p":[1,3],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"a","p":[5]},{"t":"i","p":[5],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;

LyteDropdownComponent._observedAttributes = [
    "shouldDisplayIcon",
    "changeItToInvoke",
    "dummy1",
    "dummy2",
    "savedPositions",
    "ltPropRemoveMultiple",
    "ltPropYield",
    "ltPropType",
    "ltPropTabindex",
    "ltPropShow",
    "ltPropFreeze",
    "ltPropOptions",
    "ltPropUserValue",
    "ltPropSystemValue",
    "ltPropPosition",
    "ltPropIconClass",
    "ltPropSelected",
    "ltPropCallout",
    "ltPropPlaceholder",
    "ltPropDisabled",
    "ltPropHover",
    "ltPropNoResult",
    "ltPropMaxCount",
    "ltPropInputClass",
    "ltPropBoundary",
    "pos",
    "secondaryPosition",
    "firePos",
    "ltPropAjaxRequest",
    "firstRequest",
    "userValue",
    "sysValue",
    "ltPropDisplayValue",
    "ltPropDisabledList",
    "ltPropAnimate",
    "ltPropSetPos",
    "ltPropTooltip",
    "ltPropBoxClass",
    "ltPropIsOpen",
    "ltPropFocus",
    "ltPropFixPositionOnOpen",
    "ltPropForcePlaceholder",
    "ltPropShowEmptyMessage",
    "ltPropBoxButtonWidth",
    "ltPropPreventScroll",
    "ltPropScope",
    "ltPropAnimateBox",
    "ltPropTooltipClass",
    "ltPropDisplayList",
    "ltPropSelectedList",
    "ltPropItemSearchType",
    "ltPropFocusOnClose",
    "ltPropButtonClass",
    "ltPropDisableItemTooltip",
    "ltPropPreventParentScroll",
    "ltPropShowRemoveIcon",
    "ltPropAriaButton",
    "ltPropAriaBox",
    "ltPropAriaBody",
    "ltPropReadOnly",
    "ltPropActiveElement",
    "ltPropAllowFocusableElements",
    "ltPropDataTabindex",
    "ltPropPreventNavigation",
    "ltPropTrimSearchText",
    "ltPropNoResultYield"
];

window.addEventListener('scroll', function (event) {
	_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function () {
		var elm = window._lyteDropdown.getVisibleDropbox(),
			tempele = elm,
			isAnimate,
			cur = event.target, shouldUseSave,
			drop, component, boundary, offsets, link, bounds;

		if (!elm) {
			window._lyteDropdown.openAutoClosedDropdown(cur, event);
			return;
		}

		// if( cur.nodeName == "#document" ) {     //This probably happens because scrollIntoView is used to focus the dropdown which is open at the start so the event.target is #document(CODE HELP)
		// 	return ;
		// }

		while (cur != document && cur.tagName !== 'LYTE-DROP-BOX' && cur.tagName !== 'HTML') {
			cur = cur.parentElement;
		}

		if (cur.tagName === 'LYTE-DROP-BOX') {
			return;
		}

		drop = elm.origindd;

		// People could just render the lyte-drop-box without any dropdown and that guy is scrolling
		if (!drop) {
			window._lyteDropdown.openAutoClosedDropdown(cur, event);
			return;
		}

		component = drop.component;
		link = component.childComp;


		// Dropdowns crossing their boundaries are closed automatically
		bounds = window._lyteDropdown.buildBounds(component);
		offsets = drop.getBoundingClientRect();

		if ((offsets.top < bounds.top
			|| offsets.left < bounds.left
			|| offsets.right > bounds.right
			|| offsets.bottom > bounds.bottom)
		) {

			component.beforeScrollClose(event);
			if (component.beforeHide.call(component, link, event, component.getData('ltPropFreeze'))) {
				return;
			}

			component.closeDrop.call(component, link, event, component.getData('ltPropFreeze'), true);
			isAnimate = component.getData('ltPropAnimate');

			/* While closeDrop does set autoClosed to null
			 * This sets it to its proper value thereby making the dropdown properly close/open when
			 * it either moves out or comes into bounds
			 */


			if (!isAnimate) {
				window._lyteDropdown.autoClosed = drop;
			}

		}

		// Set CSS of the dropdown on scrolling
		if (!drop.component._preventSetcss) {
			shouldUseSave = drop.component.getData('ltPropFixPositionOnOpen');

			drop.component.setCss(true, shouldUseSave);
		}
	});
}, true);

document.addEventListener('click', function (event) {
	var ele = event.target,
		target = event.target,
		cur, all, i = 0, j = 0, type,
		open, temp, component, res, freeze, link, drp, item, active, container, head, input;

	// Performing an user action such as click whether it is on the same dropdown
	// or another dropdown or anywhere will flush autoClosed
	// Browser defined scrollbars don't trigger a click but lyte-scrollbar does
	if (!window._lyteDropdown.isScrollBar(target)) {
		window._lyteDropdown.autoClosed = null;
	}

	ele = window._lyteDropdown.traverse(ele, ['LYTE-DROPDOWN', 'HTML', 'LYTE-DROP-BOX', 'LYTE-DROP-REMOVE']);

	if (window._lyteDropdown.focusOut) {

		// If container is html, then the click event in the dropdown will close it.
		window._lyteDropdown.preventClose = ele && ele.tagName !== 'HTML' ? true : false;
	}

	// return when there is no element
	if (!ele) {
		return;
	}

	if (ele.tagName == 'HTML') {

		window._lyteDropdown.unmark();
		open = document.querySelectorAll('lyte-drop-box:not(.lyteDropdownHidden)');

		for (; j < open.length; j++) {
			temp = open[j];
			if (temp) {
				component = temp.origindd.component;

				if (component.beforeHide.call(component, temp, event, component.getData('ltPropFreeze'))) {
					continue;
				}

				freeze = document.getElementById('lytedropdownfreezelayer');
				component.closeDrop.call(component, temp, event, freeze);
			}
		}

		active = document.activeElement;

		// Looks like activeElements can be undefined - LOL IE
		if (active && active.tagName === 'INPUT' && (container = window._lyteDropdown.traverse(active, ['LYTE-DROPDOWN']))) {
			active.blur();
		}
	}
	else if (ele.tagName === 'LYTE-DROPDOWN') {
		cur = ele;
		all = document.querySelectorAll('lyte-drop-box:not(.lyteDropdownHidden)')
		for (; i < all.length; i++) {
			if (all[i].origindd == cur) {
				continue;
			}
			else {
				drp = all[i].origindd;
				component = drp.component;
				window._lyteDropdown.unmark();

				if (component.beforeHide.call(component, component.childComp, event, component.getData('ltPropFreeze'))) {
					continue;
				}

				component.closeDrop.call(component, component.childComp, event, component.getData('ltPropFreeze'));
			}
		}
	}
	else if (ele.tagName === 'LYTE-DROP-REMOVE') {
		drp = ele;
		while (drp.tagName != 'LYTE-DROPDOWN') {
			if (drp.getAttribute('data-value')) {
				item = drp;
			}
			drp = drp.parentElement;
		}

		type = drp.ltProp('type');
		head = drp.component.getData('drophead');

		window._lyteDropdown.closeOtherDropdowns(drp);

		if (drp.ltProp('readOnly')) {
			return;
		}

		if (type === 'default') {
			drp.ltProp('selected', '');
		}
		else {
			if (type === 'multisearch') {
				drp.component.focusInput();
				input = drp.querySelector('lyte-search') || drp.querySelector('input');

				if (input && input.setValue) {
					input.setValue('');
				}
			}

			if (item.classList.contains('lyteDropMark')) {
				drp.component.removeAll(event);
			}
			else {
				window._lyteDropdown.unmark();
				drp.component.closeFun(event);
			}
		}

	}
}, true);

if (window._lyteUiUtils.isIos) {
	document.addEventListener('focusout', function (event) {
		// need to check for multiple dropdown
		var target = event.target,
			open, drop, comp, freeze;

		// test for normal input in dom
		if ((drop = window._lyteDropdown.traverse(target, 'LYTE-DROPDOWN'))
			&& event.target.tagName === 'INPUT'
		) {
			comp = drop.component;
			open = comp.childComp;
			freeze = comp.getData('ltPropFreeze');

			window._lyteDropdown.focusOut = true;

			setTimeout(function () {

				if (_lyteDropdown.preventClose) {
					_lyteDropdown.preventClose = _lyteDropdown.focusOut = false;
					return;
				}

				if (open
					&& !open.classList.contains('lyteDropdownHidden')
				) {
					if (comp.beforeHide(open, event, freeze)) {
						return;
					}

					comp.closeDrop(open, event, freeze);
				}

				_lyteDropdown.focusOut = false;
			}, 0);
		}
	}, true);
}

document.addEventListener('keydown', function (event) {  //This is to take care of the tabbing problems in a dropdown and traversing(CODE HELP)
	var kc = event.keyCode,
		active, acomp, abutton, anodes, activeDrop,
		open = document.querySelector('lyte-drop-box:not(.lyteDropdownHidden)'),
		type, res, drp, component, src, last, l = 0, cur, elem, elems, i = 0, j, all, k, curActive;


	if (window._lyteDropdown.openFocusedDropdown(kc)) {
		return;
	}

	if (kc === 32 || kc === 40) {
		curActive = activeDrop = document.activeElement;
		activeDrop = window._lyteDropdown.traverse(activeDrop, ['LYTE-DROPDOWN', 'HTML']);

		// active elements can be null - LOL IE
		if (activeDrop) {
			if (activeDrop.tagName === 'LYTE-DROPDOWN' && curActive.tagName !== 'INPUT' && curActive.tagName !== 'TEXTAREA') {
				event.preventDefault();
			}

			if (activeDrop.tagName === 'LYTE-DROPDOWN'
				&& !activeDrop.ltProp( 'isOpen' )
			) {
				activeDrop.component.showHide(event, event.type);

				// End this here
				return;
			}
		}
	}

	// UP, DOWN, ENTER
	if (
		(
			kc == 38
			|| kc == 40
			|| kc == 13
		)
		&& open
	) {

		if (kc == 38
			|| kc == 40
		) {
			event.preventDefault()
		}

		// Get the current highlighted element
		drp = open.origindd;
		component = drp.component;
		type = component.getData('ltPropType');
		open = component.getDropBox();
		cur = open.querySelector('.lyteDropdownSelection');

		var shouldNavigate = component.shouldNavigate();

		if (!shouldNavigate) {
			return;
		}

		// No current Highlighted Element or the current highlighted element is hidden
		// It just sets the first visible element as highlighted and returns
		// Only for multiselects
		if (
			!cur
			|| (cur && !window._lyteDropdown.isVisible(cur))
		) {

			// This one is a yikes
			elems = open.querySelectorAll('lyte-drop-item:not(.lyteSearchHidden):not(.lyteDropdownActive)') //wrong

			for (; i < elems.length; i++) {
				if (window._lyteDropdown.isVisible(elems[i])
					&& elems[i].getAttribute('disabled') !== "true"
				) {
					elem = elems[i];
					break;
				}
			}

			if (cur) {
				cur.classList.remove('lyteDropdownSelection');
			}

			if (elem) {
				elem.classList.add('lyteDropdownSelection');
				component.getActiveElement().setAttribute('aria-activedescendant', elem.getAttribute('id'));
				return;
			}
		}

		kc = event.keyCode;
		elems = open.querySelectorAll('lyte-drop-item');
		for (i = 0; i < elems.length; i++) {
			if (elems[i].classList.contains('lyteDropdownSelection')) {
				break;
			}
		}

		// A highlighted element was present and enter is pressed
		if (kc == 13) {
			if (component.getData('multiple')) {
				if (!elems[i]) {
					return;
				}

				elems[i].click();
			}
			else {

				// Just a safety check.
				// lyteDropdownSelection is most likely present
				if (elems[i]) {
					elems[i].click();
				}
			}
		}
		// Key up was pressed
		else if (
			kc == 38
			&& i != 0
		) {
			j = i;
			i = window._lyteDropdown.find(elems, i - 1, false);

			if (i != -1) {
				component.scrollIntoView(elems[i], 'up');
				elems[j].classList.remove('lyteDropdownSelection');
				elems[i].classList.add('lyteDropdownSelection');
				component.getActiveElement().setAttribute('aria-activedescendant', elems[i].getAttribute('id'));
				component.executeKeyNavigationCallback(elems[i]);
			}
		}

		// Key down was pressed
		else if (
			kc == 40
			&& i != elems.length - 1
		) {
			j = i;
			i = window._lyteDropdown.find(elems, i + 1, true);

			if (i < elems.length) {  // Added this because it was breaking in CRM
				component.scrollIntoView(elems[i], 'down');
				elems[j].classList.remove('lyteDropdownSelection');
				elems[i].classList.add('lyteDropdownSelection');
				component.getActiveElement().setAttribute('aria-activedescendant', elems[i].getAttribute('id'));
				component.executeKeyNavigationCallback(elems[i]);
			}
		}

	}

	// Backspace was pressed
	else if (kc === 8) {
		active = window._lyteDropdown.getActive();

		if (active) {
			acomp = active.component;
			abutton = active.querySelector('lyte-drop-button');
			anodes = abutton.querySelector('.lyteDropMark');
		}

		drp = window._lyteDropdown.getDropdownWithFocusedInput();

		if (!drp) {
			return;
		}

		component = drp && drp.component;
		type = component && component.getData('ltPropType');

		if (anodes) {
			event.preventDefault();
			acomp.setData('isKeyDown', true);
			acomp.removeAll(event);
			acomp.setData('isKeyDown', false);
		}
		else if (drp && type === 'multisearch' && window._lyteDropdown.isInput(event)) {
			last = drp.querySelectorAll('lyte-drop-remove')
			if (last.length > 0) {
				drp.component.setData('isKeyDown', true);
				last[last.length - 1].click();
				drp.component.setData('isKeyDown', false);
			}
		}
	}


	else if (
		kc === 27
		|| kc === 9
	) {
		// Escape
		// Close the current opened dropdown
		if (open) {

			open = window._lyteDropdown.traverse(open, ['LYTE-DROP-BOX']);

			if (!open) {
				return;
			}

			component = open.origindd.component;

			if (kc === 9 && window._lyteDropdown.shouldTrapFocus(component)) {
				window._lyteDropdown.loopIfBoundaryElements(component, event);
			}
			else {
				if (component.beforeHide.call(component, component.childComp, event, component.getData('ltPropFreeze'))) {
					return;
				}

				// open.classList.add('lyteDropdownHidden')
				component.closeDrop.call(component, component.childComp, event, component.getData('ltPropFreeze'));
			}
		}
	}
});

document.addEventListener('keypress', function (event) { //It searches the dropdown items matching the pressed charactes when the dropdown is open
	var kc = event.which || event.keyCode, i = 0, children, pos,
		open = document.querySelectorAll('lyte-drop-box:not(.lyteDropdownHidden)'), drp, searchMethod;

	var isMatchFound = function (itemValue, searchKey, method) {
		if (method === 'contains') {
			if (itemValue.trim().toLowerCase().indexOf(searchKey.toLowerCase()) != -1) {
				return true;
			}
		}
		else if (method === 'startsWith') {
			if (itemValue.trim().substring(0, searchKey.length).toLowerCase() === searchKey.toLowerCase()) {
				return true;
			}
		}

		return false;
	};

	if (
		open.length > 0
		&& ((kc >= 65 && kc <= 90)
			|| (kc >= 97 && kc <= 122)
			|| (kc >= 48 && kc <= 57))
	) {
		window._lyteDropdown.pressedCharacter = _lyteDropdown.pressedCharacter ? _lyteDropdown.pressedCharacter += String.fromCharCode(kc) : String.fromCharCode(kc);
		if (_lyteDropdown.checkDDtimeoutId) {
			clearTimeout(_lyteDropdown.checkDDtimeoutId);
		}

		_lyteDropdown.checkDDtimeoutId = setTimeout(function () {
			_lyteDropdown.pressedCharacter = null;
		}, 500);

		// activeElements can be null - LOL IE
		drp = (document.activeElement || {}).parentElement;
		drp = (drp || {}).tagName == "LYTE-DROPDOWN" ? drp : null;
		if (open.length > 0 && drp) {
			for (var i = 0; i < open.length; i++) {
				// breaking change
				if (open[i].origindd == drp) {
					break;
				}
			}

			open = open[i];
			drp = open.origindd;
			children = open.querySelectorAll('lyte-drop-item');
			searchMethod = drp.getData('ltPropItemSearchType');

			if (
				_lyteDropdown.cachePreviousVal.char
				&& _lyteDropdown.cachePreviousVal.char == _lyteDropdown.pressedCharacter
				&& (_lyteDropdown.cachePreviousVal.pos + 1) < children.length
				&& isMatchFound(children[_lyteDropdown.cachePreviousVal.pos + 1].textContent, _lyteDropdown.pressedCharacter, searchMethod)/* children[ _lyteDropdown.cachePreviousVal.pos + 1 ].textContent.trim().substring( 0, _lyteDropdown.pressedCharacter.length ).toLowerCase() === _lyteDropdown.pressedCharacter.toLowerCase()*/
			) {
				pos = _lyteDropdown.cachePreviousVal.pos + 1;
			}
			else {
				for (i = 0; i < children.length; i++) {
					if (isMatchFound(children[i].textContent, _lyteDropdown.pressedCharacter, searchMethod) /*children[ i ].textContent.trim().substring( 0, _lyteDropdown.pressedCharacter.length ).toLowerCase() === _lyteDropdown.pressedCharacter.toLowerCase()*/) {
						pos = i;
						break;
					}
				}
			}

			if (pos != undefined) {
				var selected = open.querySelectorAll('.lyteDropdownSelection');
				for (var j = 0; j < selected.length; j++) {
					selected[j].classList.remove('lyteDropdownSelection');
				}
				children[pos].classList.add('lyteDropdownSelection');
				drp.component.getActiveElement().setAttribute('aria-activedescendant', children[pos].getAttribute('id'));
				var scrollDiv = open.querySelector('lyte-drop-body');

				if (scrollDiv.contains(children[pos])) {
					// footers can have lyte-drop-items. So no scrolling there.
					scrollDiv.scrollTop += parseInt(children[pos].getBoundingClientRect().top - scrollDiv.getBoundingClientRect().top);
				}

			}

			_lyteDropdown.cachePreviousVal.char = _lyteDropdown.pressedCharacter;
			_lyteDropdown.cachePreviousVal.pos = pos;
		}

	}

});

if (!window._lyteUiUtils.isMobile) {
	window.addEventListener('resize', function (event) {
		delete this._hgt;

		// Resizing is counted as an user action which flushes the autoClosed property
		window._lyteDropdown.autoClosed = null;

		var open = document.querySelector('lyte-drop-box:not(.lyteDropdownHidden)'),
			shouldUseSave;

		if (open && !open.origindd.component._preventSetcss) {
			shouldUseSave = open.origindd.component.getData('ltPropFixPositionOnOpen');

			open.origindd.component.setCss(true, shouldUseSave);
		}
	});
}

if (!window._lyteUiUtils.registeredCustomElements['lyte-drop-body']) {
    window._lyteUiUtils.registeredCustomElements['lyte-drop-body'] = true;

    /**
	   * @customElement lyte-drop-box
	   */

    class LyteDropBodyCustomElements extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return [];
        }

        connectedCallback() {
            var lyteNode = this.$node;

            if (!lyteNode._attributesSet) {
				var cur = window._lyteDropdown.traverse(lyteNode, ['LYTE-DROPDOWN', 'BODY']), dropdown, component, ariaButton;

				if (cur.tagName === 'BODY') {
					cur = lyteNode.origindd;
				}

				if (!cur || cur.tagName !== 'LYTE-DROPDOWN') {
					return;
				}

				dropdown = cur;
				component = dropdown.component;

				// if( component.getData( 'ltPropType' ) === 'multisearch' || component.getData( 'ltPropType' ) === 'multiple' ) {
				// 	this.setAttribute( 'aria-multiselectable', 'true' );
				// }
				// else {
				// 	this.setAttribute( 'aria-multiselectable', 'false' );
				// }
				lyteNode._attributesSet = true;

				lyteNode.setAttribute('role', 'listbox');
				if (!lyteNode.getAttribute('id')) {
					lyteNode.setAttribute('id', 'Lyte_Drop_Body_' + window._lyteDropdownBodyId++);
				}

				ariaButton = component.getAriaButton();

				if (ariaButton) {
					ariaButton.setAttribute('aria-controls', lyteNode.getAttribute('id'));
				}

			}
        }

        _() {
            _;
        }
    }

    LyteDropBodyCustomElements.options = {clone : {allCallbacks : false}};

    LyteDropBodyCustomElements.register("lyte-drop-body");
}

if (!window._lyteUiUtils.registeredCustomElements['lyte-drop-item']) {
    window._lyteUiUtils.registeredCustomElements['lyte-drop-item'] = true;

    /**
	 * @customElement lyte-drop-item
	 */

    class LyteDropItemCustomElements extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return ['selected'];
        }

        connectedCallback() {
            var lyteNode = this.$node;


            if (!lyteNode._eventRegistered) {

				lyteNode._eventRegistered = true;

				lyteNode.setAttribute('aria-selected', 'false');
				lyteNode.setAttribute('role', 'option');

				if (!lyteNode.getAttribute('id')) {
					lyteNode.setAttribute('id', 'Lyte_Drop_Item_' + window._lyteDropdownItemId++);
				}

				// this.setAttribute( 'tabindex', '-1' );


				lyteNode.addEventListener('mouseenter', function () {
					var title = lyteNode.getAttribute('data-title'),
						showCustomTooltip = lyteNode.getAttribute( 'data-custom-tooltip' ),
						width = lyteNode.offsetWidth,
						scrollWidth = lyteNode.scrollWidth,
						component = window._lyteDropdown.getDropdownFromItem(lyteNode), tooltipConfig, cls, showToolTip;

					if (!component) {
						return;
					}

					if (component.getData('ltPropDisableItemTooltip') || showCustomTooltip === "true" ) {
						return;
					}

					tooltipConfig = component.getData('ltPropTooltip');
					cls = component.getData('ltPropTooltipClass');

					title = title || lyteNode.innerText.trim();

					showToolTip = (width < scrollWidth && !window._lyteDropdown.isEmpty(tooltipConfig));
					lyteNode.setAttribute('lt-prop-title', showToolTip ? title : '');

					if (showToolTip) {
						lyteNode.setAttribute('lt-prop-tooltip-config', JSON.stringify(tooltipConfig));
						lyteNode.setAttribute('lt-prop-tooltip-class', cls);
					}

				});
			}

            var component = window._lyteDropdown.getDropdownFromItem(lyteNode);
            lyteNode._dropdownComponent = component;

            window.clearTimeout(component._FFBodyScrollOnAdd);

            component._FFBodyScrollOnAdd = window.setTimeout(function () {
				var isFF = component.isFF(),
					isOpen = component.getData('ltPropIsOpen');

				if (!isOpen) {
					return;
				}

				if (isFF && component.isBodyScrollable()) {
					component.addProperScrollbar();
				}
			}, 0);
        }

        disconnectedCallback() {
            var lyteNode = this.$node;
            var component = lyteNode._dropdownComponent;

            if (!component) {
				return;
			}

            window.clearTimeout(component._FFBodyScrollOnRemove);

            component._FFBodyScrollOnRemove = window.setTimeout(function () {
				var isFF = component.isFF(),
					isOpen = component.getData('ltPropIsOpen');

				if (!isOpen) {
					return;
				}

				if (isFF && !component.isBodyScrollable()) {
					component.removeScrollbar();
				}
			}, 0);
        }

        attributeChangedCallback(attr, oldValue, newValue, namespace) {
            var lyteNode = this.$node;
            var cur = lyteNode, drp, component, type, sel, res,
				src = lyteNode.getAttribute('data-value'),
				attributeChanged;

            if (oldValue === null && newValue !== null || oldValue !== null && newValue === null) {
				attributeChanged = true;
			}

            if (!attributeChanged) {
				return;
			}

            if (attr == 'selected') {
				if (lyteNode.hasAttribute('selected')) {

					lyteNode.setAttribute('aria-selected', 'true');

					cur = window._lyteDropdown.traverse(cur, ['LYTE-DROP-BOX', 'BODY']);

					if (!cur || cur.tagName == 'BODY') {
						return;
					}

					drp = cur.origindd;
					if (!drp) {
						cur = window._lyteDropdown.traverse(cur, ['LYTE-DROPDOWN', 'BODY']);
						drp = cur;
					}

					component = drp.component;

					if (!component) {
						return;
					}

					if (component.getData('preventSel')) {
						return;
					}

					type = component.getData('ltPropType');

					if (type == 'multiple'
						|| type == 'multisearch'
					) {
						sel = component.getData('ltPropSelected');
						if ((sel && sel.length == 2) || !sel) {
							sel = JSON.stringify([src]);
							// not setting prev to true here
							component.setData('ltPropSelected', sel);
						}
						else {
							res = JSON.parse(sel);
							res.push(src);
							// not setting prev to true here
							component.setData('ltPropSelected', JSON.stringify(res));
						}
					}
					else {
						component.setData('ltPropSelected', src);
					}
				}
				else {
					lyteNode.setAttribute('aria-selected', 'false');
				}
			}
        }

        _() {
            _;
        }
    }

    LyteDropItemCustomElements.options = {clone : {allCallbacks : false}};

    LyteDropItemCustomElements.register('lyte-drop-item');
}



window._lyteDropdown = {
	// When multiple dropdowns have multiple callbacks returning a promise, store the last dropdown
	lastDropdownWithAPromise: null,

	// Whether the dropdown should not be closed when the input is focused out
	preventClose: false,

	// Current dropdown that was autoClosed
	autoClosed: null,

	// Whether a focus happened
	focusOut: false,

	focusableElementsSelector: 'input:not(:disabled), button:not(:disabled), [tabindex]:not([tabindex="-1"]), textarea:not(:disabled), select:not(:disabled), a',

	shouldTrapFocus: function (comp) {
		var dropdown = comp.$node,
			box = dropdown.getDropBox(),
			focusableElements = comp.getFocusableElements(),
			shouldTrapFocus = comp.getData('ltPropAllowFocusableElements') && focusableElements.length > 1;

		return shouldTrapFocus;
	},

	loopIfBoundaryElements: function (comp, event) {
		var focusableElements = comp.getFocusableElements(),
			length = focusableElements.length,
			dropdown = comp.$node,
			activeElement = document.activeElement;

		if (event.shiftKey && focusableElements[0] === activeElement) {
			event.preventDefault();
			focusableElements[length - 1].focus();
		}

		if (!event.shiftKey && focusableElements[length - 1] === activeElement) {
			event.preventDefault();
			focusableElements[0].focus();
		}

	},

	closeOtherDropdowns: function (currentDropdown) {
		var openDropdowns = window._lyteUiUtils.getVisibleDropdowns() || [];

		for (var i = 0; i < openDropdowns.length; i++) {
			if (openDropdowns[i] !== currentDropdown) {
				openDropdowns[i].close();
			}
		}
	},

	openFocusedDropdown: function (keyCode) {
		var dropdown = window._lyteDropdown.getDropdownWithFocusedInput(),
			type, BACKSPACE = 8;

		if (keyCode == 27 || keyCode == 9 || !dropdown) {
			return;
		}

		type = (dropdown.ltProp('type') || '').toLowerCase();

		if (type === 'multisearch' && !dropdown.ltProp('isOpen')) {
			dropdown.open();

			if (keyCode === BACKSPACE) {
				return false;
			}

			return true;
		}
	},

	getDropdownFromItem: function (cur) {
		cur = window._lyteDropdown.traverse(cur, ['LYTE-DROP-BOX', 'BODY']);

		if (!cur || cur.tagName == 'BODY') {
			return;
		}

		var drp = cur.origindd;

		if (!drp) {
			cur = window._lyteDropdown.traverse(cur, ['LYTE-DROPDOWN', 'BODY']);
			drp = cur;
		}

		var component = drp.component;

		return component;
	},

	getDropdownWithFocusedInput: function () {
		var activeElement = document.activeElement, dropdown;

		if (activeElement
			&& activeElement.nodeName.toLowerCase() === 'input'
		) {
			dropdown = window._lyteDropdown.traverse(activeElement, ['HTML', 'LYTE-DROPDOWN']);
		}

		if (dropdown && dropdown.nodeName.toLowerCase() === 'lyte-dropdown') {
			return dropdown;
		}

	},

	/**
	 * Gets the current visible dropbox from the body
	 * This was added to fix a performance problem in CRM - kural's subform feature
	 *
	 *
	 */

	getVisibleDropbox: function () {
		var childs = (document.body || {}).children || [],
			i = 0;

		for (; i < childs.length; i++) {
			if (
				childs[i].tagName === 'LYTE-DROP-BOX'
				&& window._lyteDropdown.isVisible(childs[i])
			) {
				return childs[i];
			}
		}
	},

	/**
	 * Check if the element is a scrollbar
	 * @param {HTMLElement} element - the clicked element
	 *
	 */

	isScrollBar: function (element) {
		return element
			&& (element.classList.contains('lyteScrollContainer') || element.classList.contains('lyteScrollDiv'));
	},

	/**
	 * Checks if the dropdown is within the visible bounds
	 * @param {Object} visibleBound - The visible bound of the scrollable element
	 * @param {Object} dropBound - The dropdown's boundaries
	 *
	 */

	isInBounds: function (visibleBound, dropBound) {
		return visibleBound.top < dropBound.top
			&& visibleBound.bottom > dropBound.bottom
			&& visibleBound.left < dropBound.left
			&& visibleBound.right > dropBound.right;
	},

	/**
	 * This is going to construct the visible bound of the scrolling container
	 * @param {object} - getBoundingClientRect of the element
	 * @param {boolean} - If it is a boolean or not
	 * @param {HTMLElement} - The current scrollable div
	 *
	 */

	buildVisibleBounds: function (rect, isDoc, cur) {
		var top = isDoc ? 0 : Math.max(rect.top, 0),
			left = isDoc ? 0 : Math.max(rect.left, 0),
			right = isDoc ? window.innerWidth : Math.min(window.innerWidth, rect.left + cur.offsetWidth),
			bottom = isDoc ? window.innerHeight : Math.min(window.innerHeight, rect.top + cur.offsetHeight);

		return {
			top: top,
			left: left,
			right: right,
			bottom: bottom
		};
	},

	/**
	 * This is used to find the current auto closed dropdown
	 * @param {HTMLElement} cur - The cur scrolled element
	 *
	 */

	openAutoClosedDropdown: function (cur, event) {
		var isDocument = cur === document,
			scrollRect, visibleBound,
			drop = window._lyteDropdown.autoClosed, comp, link;

		if (!drop) {
			return;
		}

		scrollRect = isDocument ? {} : cur.getBoundingClientRect();
		visibleBound = window._lyteDropdown.buildVisibleBounds(scrollRect, isDocument, cur)

		comp = drop.component,
			link = comp.childComp;

		if (drop
			&& cur.contains(drop)
			&& window._lyteDropdown.isInBounds(visibleBound, drop.getBoundingClientRect())

			// safety
			&& link.classList.contains('lyteDropdownHidden')
		) {
			comp.beforeScrollOpen(event);
			drop.toggle();
			window._lyteDropdown.autoClosed = null;
		}
	},

	/**
	 * This is used to determine whether an object is empty or not
	 * @param {Object} obj - The object to be checked
	 *
	 */

	isEmpty: function (obj) {
		for (var key in obj) {
			return false;
		}

		return true;
	},

	/**
	 * This is going to build the boundary parameter for a particular dropdown instance
	 * @param {Component} comp - The lyte-dropdown component object
	 *
	 */

	buildBounds: function (comp) {
		var bound = comp.getData('ltPropBoundary') || {},
			scope = comp.getData('ltPropScope'), parent, boundingRects;

		if (scope !== 'window') {
			parent = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()(comp.$node).closest(scope).get(0);

			if (parent) {
				boundingRects = parent.getBoundingClientRect();

				return {
					left: Math.max(0, boundingRects.left),
					top: Math.max(0, boundingRects.top),
					right: Math.min(window.innerWidth, boundingRects.right),
					bottom: Math.min(window.innerHeight, boundingRects.bottom)
				};
			}
		}

		return {
			left: bound.left || 0,
			right: bound.right || window.innerWidth,
			top: bound.top || 0,
			bottom: bound.bottom || window.innerHeight
		}
	},

	/**
	 * This is going to traverse up the dom to check if the required tagNames are present
	 * @param {Element} node - The element whose parents need to be traversed
	 * @param {Array} arr - The set of tag names to check against
	 *
	 */

	traverse: function (node, arr) {
		while (node && !~arr.indexOf(node.tagName)) {
			node = node.parentNode;
		}

		return node;
	},

	/**
	 * Find the next/previous element which is visible
	 * @param {NodeList} elems - The set of all elements to test against
	 * @param {integer} i - index from which we need to search
	 * @param {boolean} forward - whether to move forward or backward
	 *
	 *
	 */

	find: function (elems, i, forward) {
		var inc = forward ? 1 : -1,
			len = elems.length;

		for (
			;
			forward ?
				i < len
				: i > -1;

			i = i + inc
		) {
			if (window._lyteDropdown.isVisible(elems[i])
				&& elems[i].getAttribute('disabled') !== "true"
			) {
				return i;
			}
		}

		return forward ? len : -1;
	},

	/**
	 * This is going to check if the element is visible or not
	 * @param {Element} item - The item to check against
	 *
	 */

	isVisible: function (item) {
		return !!(item.offsetWidth || item.offsetHeight || item.getClientRects().length);
	},

	/**
	 * Checks if the current target is an input within the dropdown and with no value
	 * @param event - the keydown event
	 *
	 */

	// Initialize variables
	pressedCharacter: null,

	checkDDtimeoutId: null,

	cachePreviousVal: {},

	isInput: function (event) {
		// There maybe a case when a dropdown might be opened on pressing on an input with toggle. When backspace is pressed
		// on that input the global event handler for keydown might misbehave by trying to remove the last item
		// Fix is to check if the input is present inside the open dropdown
		var open = event.target;

		open = window._lyteDropdown.traverse(open, ['LYTE-DROPDOWN']);

		if (open
			&& event.target.tagName === 'INPUT'
			&& event.target.type === 'text'
			&& !event.target.value
		) {
			return true;
		}

		return false;
	},

	/**
	 * Unmark all nodes except the current components nodes
	 *
	 */

	unmark: function (comp) {
		var nodes = document.querySelectorAll('.lyteDropMark'),
			i = 0, len = nodes.length, par;

		for (; i < len; i++) {
			// This is stupid. Change it later.
			//nodes[ i ].classList.remove( 'lyteDropMark' );
			par = comp ? window._lyteDropdown.findParent(nodes[i]) : undefined;
			par && par == comp.$node ? undefined : nodes[i].classList.remove('lyteDropMark');
		}
	},

	findParent: function (node) {
		node = window._lyteDropdown.traverse(node, ['LYTE-DROPDOWN'])

		return node;
	},

	getActive: function () {
		var node = document.querySelector('.lyteDropMark');

		return window._lyteDropdown.findParent(node);
	}
}

if (!window._lyteUiUtils.registeredCustomElements['lyte-drop-group']) {
    window._lyteUiUtils.registeredCustomElements['lyte-drop-group'] = true;

    /**
	 * @customElement lyte-drop-group
	 */

    class LyteDropGroupCustomElements extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return ['label'];
        }

        attributeChangedCallback(attr, oldValue, newValue, namespace) {
            var lyteNode = this.$node;
            var node, value;

            if (attr == 'label') {
				node = lyteNode.querySelector('lyte-drop-label');
				value = lyteNode.getAttribute('label');
				if (node) {
					node.textContent = value;
				}
				else {
					node = document.createElement('lyte-drop-label');
					node.textContent = value;
					lyteNode.insertBefore(node, lyteNode.children[0]);
				}
			}
        }

        _() {
            _;
        }
    }

    LyteDropGroupCustomElements.options = {clone : {allCallbacks : false}};

    LyteDropGroupCustomElements.register("lyte-drop-group");
}

/**
 * @syntax nonYielded
 * <lyte-dropdown lt-prop-options='[{"name": "Option 1", "value": "1"}, {"name": "Option 2", "value": "2"}]' lt-prop-user-value="name" lt-prop-system-value="value"></lyte-dropdown>
 */

/**
 * @syntax yielded
 * <lyte-dropdown>
 *     <template is="registerYield" yield-name="yield">
 *         <lyte-drop-button>
 *             Option 1
 *         </lyte-drop-button>
 *         <lyte-drop-box>
 *             <lyte-drop-body>
 *                 <lyte-drop-item data-value="1">Option 1</lyte-drop-item>
 *                 <lyte-drop-item data-value="2">Option 2</lyte-drop-item>
 *             </lyte-drop-body>
 *         </lyte-drop-box>
 *      </template>
 * </lyte-dropdown>
 */

/**
 * @syntax
 * @attribute ltPropType=multiple
 * <lyte-dropdown lt-prop-selected='["1"]' lt-prop-type="multiple">
 *     <template is="registerYield" yield-name="yield">
 *         <lyte-drop-box>
 *             <lyte-drop-body>
 *                 <lyte-drop-item data-value="1">Option 1</lyte-drop-item>
 *                 <lyte-drop-item data-value="2">Option 2</lyte-drop-item>
 *             </lyte-drop-body>
 *         </lyte-drop-box>
 *      </template>
 * </lyte-dropdown>
 */

/**
 * @syntax
 * @attribute ltPropType=multisearch
 * <lyte-dropdown lt-prop-selected='["1"]' lt-prop-type="multisearch">
 *     <template is="registerYield" yield-name="yield">
 *         <lyte-drop-box class="bodyContainer">
 *             <lyte-drop-body>
 *                 <lyte-drop-item data-value="1">Option 1</lyte-drop-item>
 *                 <lyte-drop-item data-value="2">Option 2</lyte-drop-item>
 *             </lyte-drop-body>
 *         </lyte-drop-box>
 *      </template>
 * </lyte-dropdown>
 */









LyteDropdownComponent.register("lyte-dropdown", {
    hash: "LyteDropdownComponent_245",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});






/***/ }),

/***/ 97686034:
/*!**********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-input.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteInputComponent": () => (/* binding */ LyteInputComponent)
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
    }
});





/* @Slicer.otherframeworkStart */
// import "../../plugins/lyte-trapFocus.js";
/*  @Slicer.otherframeworkEnd */

window._lyteInput = function(evt) {
    // var inputs = document.body.getElementsByTagName( 'lyte-input' );
    var dateIp = window._lyteUiUtils.input, inputs = Object.keys( dateIp || {} )
    for( var i = 0; i < inputs.length; i++ ){
        // if( /date/i.test( inputs[ i ].ltProp( 'type' ) ) ){
            var comp = dateIp[ inputs[ i ] ].component;
            if( evt.type == "click" ){
                comp.calenderClickHide.call( comp, evt );
            } else {
                comp.scrollFunc.call( comp, evt );
            }
        // }
    }
};

/**
 * This component is used to get responses from user
 * @component lyte-input
 * @version 1.0.0
 * @dependency lyte-calendar
 *  /components/lyte-calendar.js
 *  /theme/compiledCSS/default/ltr/lyte-ui-calendar.css 
 *  /plugins/lyte-moment.js
 * @dependency lyte-dropdown
 *  /components/lyte-dropdown.js
 *  /theme/compiledCSS/default/ltr/lyte-ui-dropdown.css
 * @dependency lyte-wormhole
 *  /components/lyte-wormhole.js
 * @utility focus,blur,click,select
 * @import lyte-dropdown
 * @condition ltPropType time,datetime
 * @ignoreMethods
 * @ignoreUtils
 * @ignoreProperties ltPropRemoveMultiple,ltPropYield,ltPropOptions,ltPropUserValue,ltPropSystemValue,ltPropIconClass,ltPropPlaceholder,ltPropNoResult,ltPropMaxCount,ltPropAjaxRequest,ltPropDisplayValue,ltPropDisabledList,ltPropTooltip,ltPropBoxClass,ltPropIsOpen,ltPropFixPositionOnOpen
 * @import lyte-calendar
 * @condition ltPropType date,datetime
 * @ignoreMethods
 * @ignoreUtils
 */

class LyteInputComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    init(frm_obs) { 
        var data = this.data, type = data.ltPropType;
          if( type == 'time' || type == "datetime" ){
            this._prevent = true
            this.timeInValChange();
            this.startEndTimeObs();
            delete this._prevent;
            if( type.indexOf( 'time' ) != -1 && data.ltPropDropdown ){
                this.dropdownConstruct();
                if( type == "time" ) {
                    // data.ltPropDefaultTime = data.ltPropDefaultTime || data.ltPropValue;
                    this.setData( 'ltPropDefaultTime', data.ltPropDefaultTime || data.ltPropValue );
                }
            }
          } 
          if( type == 'date' || type == "datetime" ){
            if( type == 'date' ) {
                // data.ltPropCurrentDate = data.ltPropCurrentDate || data.ltPropValue; 
                this.setData( 'ltPropCurrentDate', data.ltPropCurrentDate || data.ltPropValue );
            } 

            if( data.ltPropAria ){
                this.setData( 'randomId', "lyteInput_" + parseInt( Math.random() * 1e6 ) );
                this.$addon.objectUtils( data.ltPropCalendarProperties, 'add', 'disableNavigation', false );
            }

            this.dateRegexFind();
          }

          if( !frm_obs ){
            this.$node.classList.add('lyteInput');
            this.$node.classList.add('horizontal');
          }

          if( this.getMethods( 'beforeRender' ) ) {
           /**
            * @method beforeRender
            * @version 1.0.1
            */
                this.executeMethod( 'beforeRender', this.$node );
            }
    }

    englishDate() {
        if( (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) && this.data ){
            var format = this.data.ltPropFormat,
            date = this.data.ltPropCurrentDate,
            final = '';

            if( date ){
                final = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( date, format, { i18n : true } ).format( format );
            } 
            this.setData( 'ltPropConvertedDate', final );
        }
    }

    englishTime() {
        if( (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) && this.data ){
            var final = this.data.ltPropDefaultTime;

            if( this.data.ltPropTimeFormat == 12 ){
                var format = 'hh:mm A';
                final = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( final, format, { i18n : true } ).format( format );
            }
            this.setData( 'ltPropConvertedTime', final );
        }
    }

    didConnect() {
           var type = this.data.ltPropType/*, divIdInput= this.$node, lyteLabelDiv= this.$node.querySelector( '.lyteLabel' ),lyteFieldDiv= this.$node.querySelector( '.lyteField' )*/; 
           if( type == 'date' || type == "datetime" )
                { 
                    window._lyteUiUtils.input = window._lyteUiUtils.input || {};
                    this.$node._random = 'LyteInput' + Date.now();
                    window._lyteUiUtils.input[ this.$node._random ] = this.$node;
                    this.englishDate();
                }   
            if(type == 'time' || type == "datetime" ){
                if(this.getData('ltPropDropdown')){
                    var drop = this.dropdown = this.$node.querySelector( 'lyte-dropdown' );
                    this.dropbox =  drop.component.childComp ? drop.component.childComp : drop.querySelector( 'lyte-drop-box' );
                    drop.element = this.$node.querySelectorAll( 'input' )[ type == 'datetime' ? 1 : 0 ];

                    if( this.data.ltPropDropdownShow ){
                        drop.resetPosition();
                    }

                }
                this.englishTime();
            }
            if(type == 'time' || type == 'date' || type == "datetime"){
                if(this.getData('ltPropWheel')){
                    var func = this.handleWheel.bind(this);
                    this.setData('eventListeners.timeWheel', func);
                    this.$node.addEventListener('wheel', func);
                }
                this._manualset = true
                if( type == "time" ){
                    this.setData( 'ltPropValue', this.data.ltPropDefaultTime );
                } else if( type == "date" ) {
                    this.setData( 'ltPropValue', this.data.ltPropCurrentDate );
                } 
                delete this._manualset;
            }  
            type = type == "textarea" ? "textarea" : 'input';  
              [ 'focus', 'blur', 'click', 'select' ].forEach( function( item ){
                    this.$node[ item ] = function( arg ){
                      this.$node.querySelector( type )[item]( arg );
                    }.bind( this )      
              }.bind( this ) )                      
            if(this.getMethods('afterRender')){
               /**
                * @method afterRender
                * @version 1.0.1
                */                
                this.executeMethod('afterRender', this.$node);
            }
            _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( function(){
                this._dir = window._lyteUiUtils.getRTL();
                if( this._dir ) {
                    _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate( function(){
                        this.$node.classList.add( 'lyteRTL' );
                        if( this.$node.calendarDiv ) {
                            this.$node.calendarDiv.classList.add( 'lyteRTL' );
                        }
                    }.bind( this ) )
                }   
            }.bind( this ) );
    }

    didDestroy(frm_obs) {
        if( !frm_obs && this.$node.calendarComp ){
            this.$node.calendarComp.remove();
            delete this.$node.calendarComp; 
            delete this.$node.calendarDiv;
            delete this._assCalendar;
            delete this.$node.revertToSelected;
        }
        var evt = this.getData('eventListeners'), type = this.getData('ltPropType');
        // if(type == 'date' || type == "datetime" ){
            var __input = window._lyteUiUtils.input || {};
            delete __input[ this.$node._random ];
        // }
        // if(type == 'time' || type == "datetime" ){
            delete this.dropdown; delete this.dropbox;
        // }
        if(evt.hasOwnProperty('mouseup')){
            document.removeEventListener('mouseup', evt.mouseup);
        }   
    }

    rtlfunc(lft, bcr, ww) {
        if( this._dir ) {
            if( bcr ) {
                if( lft == 'left' ) {
                    return ww - bcr.right;
                } else if( lft == 'clientX' ) {
                    return ww - bcr.clientX
                } else if( lft == 'offsetLeft' ) {
                    return ww - bcr.width - bcr.offsetLeft;
                }
                return ww - bcr.left;
            } else if( lft == 'left' ) {
                return 'right';
            } 
        }
        return bcr ? bcr[ lft ] : 'left';
    }

    calenderClickHide(event) {
        if( !this.data.ltPropBindToBody ){
            return
        }
        var calendarComp = this.$node.calendarDiv, tgt = event.target.correspondingElement || event.target;
        if( calendarComp.classList.contains( 'lyteCalendarHidden' ) ){
            return;
        }
        if( tgt && [ "LYTE-DROP-BOX", "LYTE-DROP-ITEM", "LYTE-DROP-BODY" ].indexOf( tgt.tagName ) != -1 ) {
            while( tgt.tagName != "LYTE-DROP-BOX" && tgt.tagName != "BODY" ) {
                tgt = tgt.parentNode;
            }
            if( tgt.tagName == "LYTE-DROP-BOX" ) {
                tgt = tgt.origindd
            }
        }

        var is_contains_target = this.data.ltPropAria ? _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( tgt ).hasClass( 'lyteInputCalendarIcon' ) : this.$node.contains( tgt ),
        is_target_is_calendar = calendarComp.contains( tgt );

        if( !is_contains_target && !is_target_is_calendar ) {         
            this._hideCalendar();
        } else if( tgt && /*!tgt.classList.contains( 'lyteCalDateSpan' ) && !tgt.classList.contains( 'lyteCalCdate' ) &&*/ calendarComp.contains( tgt ) ) {
            this._byManual = true;
            this.$node.focus();
            delete this._byManual;
        }
    }

    scrollFunc(event) {
        if( event && event.type == 'resize' && window._lyteUiUtils.isMobile ) {
            return;
        }
        var thisCalendar = this.$node.calendarDiv;
         _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
            event && event.type == "orientationchange" ? setTimeout( this.setCss.bind( this ), 500 ) : this.setCss();
             _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure(function(){
                var boundary = this.data.ltPropBoundary, input = this.$node.getBoundingClientRect(), wwidth = window.innerWidth;
                if(thisCalendar && event && event.type == 'scroll' && !thisCalendar.classList.contains('lyteCalendarHidden')){
                    if((boundary.hasOwnProperty('left') ? ( this.rtlfunc.call( this, 'left', input, wwidth ) < boundary.left) : false) || (boundary.hasOwnProperty('right') ? ( this.rtlfunc.call( this, 'right', input, wwidth ) > boundary.right) : false)  || (boundary.hasOwnProperty('top') ? (input.top < boundary.top) : false)  || (boundary.hasOwnProperty('bottom') ? (input.bottom > boundary.bottom) : false))      
                        {  

                            this._hideCalendar( true );                        }
                 } else if( this._closedbyscrl ){
                    if( ( boundary.left != undefined ? ( this.rtlfunc.call( this, 'left', input, wwidth ) >= boundary.left ) : true ) && ( boundary.right != undefined ? ( this.rtlfunc.call( this, 'right', input, wwidth ) <= boundary.right ) : true )  && ( boundary.top != undefined ? (input.top >= boundary.top) : true )  && (boundary.bottom != undefined ? ( input.bottom <= boundary.bottom ) : true ) ){
                        this._byManual = true;
                        this.$node.focus();
                        delete this._byManual;
                        this.showCalendar( {}, this.$node.querySelector( 'input' ) );
                        delete this._closedbyscrl;
                    }    
                 }
             }.bind(this))  
         }.bind(this))
    }

    rsizefun(evt) {
        var isTch = evt.touches,
        ev = evt,
        cb = "onResizeStart",
        __this = this,
        __data = __this.data,
        $node = __this.$node;

        if( isTch && isTch.length > 1 ){
            return;
        } else if( isTch ){
            ev = isTch[ 0 ];
        }

        if( __this.getMethods( cb ) && __this.executeMethod( cb, evt, $node ) == false ){
            return;
        }

        var tagName = 'getElementsByTagName',
        textarea = $node[ tagName ]( 'textarea' )[ 0 ],
        resize = __data.ltPropTextAreaResize || {},
        __doc = document,
        __add = 'addEventListener',
        label = $node[ tagName ]( 'label' )[ 0 ],
        gbcr = "getBoundingClientRect",
        label_bcr = label ? label[ gbcr ]() : {},
        bcr = textarea[ gbcr ](),
        this_bcr = $node[ gbcr ](),
        comp_style = window.getComputedStyle( textarea ),
        paddingLeft = parseFloat( comp_style.paddingLeft ),
        fn = function( __min, prop ){
            var __value = comp_style[ __min ];

            if( /%$/.test( __value ) ){
                return this_bcr[ prop ] * parseFloat( __value ) / 100;
            } else {
                return parseFloat( __value );
            }

        },
        __obj = {},
        __obj1 = {},
        __obj2 = {},
        __obj3 = {};

        if( resize.horizontal ){
            __this.__minwidth = fn( "minWidth", 'width' );
            __this.__maxwidth = fn( "maxWidth", 'width' );

            __obj.width = this_bcr.width;
            __obj1.width = bcr.width;
            __obj2.width = __obj2.minWidth = label_bcr.width;
            __obj3.width = __obj3.minWidth = "auto";
        }

        if( resize.vertical ){
            __this.__minheight = fn( "minHeight", 'height' );
            __this.__maxheight = fn( "maxHeight", 'height' );

            __obj.height = this_bcr.height;
            __obj1.height = bcr.height;
            __obj2.height = label_bcr.height;
            __obj3.height = "auto";
        }


        __this.__clientX = ev.clientX;
        __this.__clientY = ev.clientY;

        __doc[ __add ]( isTch ? 'touchmove' : "mousemove", __this.__rmove = __this.textareaResize.bind( __this ), true );
        __doc[ __add ]( isTch ? 'touchend' : 'mouseup', __this.__rend = __this.mouseup.bind( __this ), true );

        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( $node ).addClass( 'resizeStart' ).css( __obj );
        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( textarea ).css( __obj1 ).parent().css( __obj3 );
        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( label ).css( __obj2 );

        evt.preventDefault();
        return false;
     }

    mouseup(evt) {
       var __doc = document,
       __remove = "removeEventListener",
       isTch = evt.type == "touchend",
       cb = "onResizeEnd",
       __this = this,
       $node = __this.$node;

        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( $node ).removeClass( 'resizeStart' );

       __doc[ __remove ]( isTch ? "touchmove" : "mousemove", __this.__rmove, true );
       __doc[ __remove ]( isTch ? "touchend" : "mouseup", __this.__rend, true );

       __this.getMethods( cb ) && __this.executeMethod( cb, evt, __this._resize_move, $node );

       [ '__minwidth', '__minheight', '__maxheight', '__maxwidth', '__clientY', '__clientX', '_resize_move', '__remove', '__rend' ].forEach( function( item ){
           delete __this[ item ];
       });
    }

    textareaResize(evt) {
       var __this = this,
       __data = __this.data,
       isTch = evt.touches,
       ev = evt;

       if( isTch && isTch.length > 1 ){
           return;
       } else if( isTch ){
           ev = isTch[ 0 ];
           evt.preventDefault();
       }

       __this._resize_move = true;

       var xInc = -( __this.__clientX - ( __this.__clientX = ev.clientX ) ) * ( this._dir ? -1 : 1 ) ,
       yInc = -( __this.__clientY - ( __this.__clientY = ev.clientY ) ),
       __obj = {},
       __obj1 = {},
       __setData = {},
       resize = __data.ltPropTextAreaResize || {},
       textarea = __this.$node.getElementsByTagName( 'textarea' )[ 0 ],
       $node = __this.$node,
       fn = function( prop, __min, __max, inc ){
           var current = parseFloat( textarea.style[ prop ] ),
           __new = current + inc;

           if( !isNaN( __min ) ){
               if( __min > __new ){
                   inc = __min - current;
                   __new = current + inc;
               }
           }

           if( !isNaN( __max ) ){
               if( __max < __new ){
                   inc = __max - current;
               }
           }

           __obj[ prop ] = current + inc;
           __obj1[ prop ] = parseFloat( $node.style[ prop ] ) + inc;
       };

       if( resize.horizontal ){
          fn( 'width', __this.__minwidth, __this.__maxwidth, xInc );
          __setData.ltPropWidth = __obj1.width + 'px';
       }

       if( resize.vertical ){
          fn( 'height', __this.__minheight, __this.__maxheight, yInc );
          __setData.ltPropHeight = __obj.height + 'px';
       }

       _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( $node ).css( __obj1 );
       _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( textarea ).css( __obj );

       __this._prevent = true;
       __this.setData( __setData );
       delete __this._prevent;

    }

    heightFunc() {
        if( !this._prevent ){
            _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( 'input,textarea', this.$node ).eq( 0 ).css( 'height', this.getData( 'ltPropHeight' ) ); 
        }
     }

    widthfun() {
        if( !this._prevent ){
            this.$node.style.width = this.getData( 'ltPropWidth' );
        }
    }

    appearanceFun() {
        var type = this.data.ltPropType, 
        $node = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node );

        if( this.getData( 'ltPropAppearance' ) == 'box' ) {
            if(type =='search') {
                $node.find( '.lyteField' ).addClass( 'lyteInputBoxSearch' );
            }

            $node.addClass( 'lyteInputBox' ).removeClass( 'lyteInput' );
        } else {
            if(type =='search') {
                $node.find( '.lyteField' ).removeClass( 'lyteInputBoxSearch' );
            }

            $node.addClass( 'lyteInput' ).removeClass( 'lyteInputBox' );
        }       
    }

    directionfun() {
        var $node = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node );

        if( this.data.ltPropDirection == 'vertical' ){
            $node.addClass( 'vertical' ).removeClass( 'horizontal' );
        } else {
            $node.removeClass( 'vertical' ).addClass( 'horizontal' );
        }
    }

    data(arg1) {

        var default_values = window._lyteUiUtils.getDefault( 'lyte-input' ),
        __boolean = "boolean",
        __string = "string",
        __number = "number",
        __object = "object",
        __array = "array",
        __value;

        return Object.assign(super.data({
           /**
            * @componentProperty {boolean} ltPropDisabled=false
            * @version 1.0.0
            */            
            ltPropDisabled : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),
           /**
            * @componentProperty {boolean} ltPropAutofocus=false
            * @version 1.0.0
            */            
            ltPropAutofocus : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),
           /**
            * @componentProperty {on | off} ltPropAutocomplete=off
            * @version 1.0.0
            */            
            ltPropAutocomplete : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.autocomplete || 'off' }),
           /**
            * @componentProperty {number} ltPropMaxlength
            * @version 1.0.0
            */            
            ltPropMaxlength : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.maxlength }),
           /**
            * @componentProperty {string} ltPropName=''
            * @version 1.0.0
            */            
            ltPropName : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {string} ltPropPlaceholder=''
            * @version 1.0.0
            */            
            ltPropPlaceholder : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {boolean} ltPropReadonly=false
            * @version 1.0.0
            */            
            ltPropReadonly : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),
           /**
            * @componentProperty {string} ltPropValue=''
            * @version 1.0.0
            */            
            ltPropValue : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {string} ltPropWidth=''
            * @version 1.0.0
            */            
            ltPropWidth : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.width || '' }),
           /**
            * @componentProperty {string} ltPropTabIndex=0
            * @version 1.0.0
            */            
            ltPropTabIndex : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.tabIndex || '0' }),
           /**
            * @componentProperty {text | number | password | date | time | textarea | datetime} ltPropType=text
            * @version 1.0.0
            */            
            ltPropType : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {flat | box} ltPropAppearance=flat
            * @version 1.0.0
            */            
            ltPropAppearance : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.appearance || '' }),
           /**
            * @componentProperty {vertical | horizontal} ltPropDirection=vertical
            * @version 1.0.0
            */            
            ltPropDirection : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.direction || 'vertical' }),
           /**
            * @componentProperty {string} ltPropLabel=''
            * @version 1.0.0
            */            
            ltPropLabel : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {string} ltPropId=''
            * @version 1.0.0
            */            
            ltPropId : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {string} ltPropClass=''
            * @version 1.0.0
            */            
            ltPropClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.class || '' }),
           /**
            * @componentProperty {string} ltPropStyle=''
            * @version 1.0.0
            */            
            ltPropStyle : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.style || '' }),
           /**
            * @componentProperty {string} ltPropWrapperStyle=''
            * @version 1.0.0
            */            
            ltPropWrapperStyle : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.wrapperStyle || '' }),
           /**
            * @componentProperty {string} ltPropHeight=''
            * @version 1.0.0
            */            
            ltPropHeight : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.height || '' }),
           /**
            * @componentProperty {string} ltPropPattern='.+'
            * @version 1.0.2
            */            
            ltPropPattern : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.pattern || '.+' }),
           /**
            * @componentProperty {string} ltPropInputTitle=''
            * @version 1.0.2
            */            
            ltPropInputTitle : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),

            // data for textarea
           /**
            * @componentProperty {number} ltPropRows
            * @version 1.0.0
            * @condition ltPropType textarea
            */            
            ltPropRows : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : void 0 }),
           /**
            * @componentProperty {number} ltPropCols
            * @version 1.0.0
            * @condition ltPropType textarea
            */            
            ltPropCols : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : void 0 }),
            /**
             * @typedef {object} inputResize
             * @property {boolean} vertical=true
             * @property {boolean} horizontal=true
             */

            /**
             * @componentProperty {inputResize} ltPropTextAreaResize
             * @version 1.0.0
             * @condition ltPropType textarea
             */            
            ltPropTextAreaResize : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : default_values.textAreaResize || { vertical : true, horizontal : true } }),

            // data for number
           /**
            * @componentProperty {number} ltPropMax
            * @version 1.0.0
            * @condition ltPropType number
            */            
            ltPropMax : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : void 0 }),  
           /**
            * @componentProperty {number} ltPropMin
            * @version 1.0.0
            * @condition ltPropType number
            */                      
            ltPropMin : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : void 0 }),
           /**
            * @componentProperty {number} ltPropStep=1
            * @version 1.0.0
            * @condition ltPropType number
            */                        
            ltPropStep : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number ,{ default : default_values.step || 1 }),

            // data for time
           /**
            * @componentProperty {12 | 24} ltPropTimeFormat=12
            * @version 1.0.0
            * @condition ltPropType number
            */            
            ltPropTimeFormat : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.timeFormat || 12 }),
           /**
            * @componentProperty {number} ltPropHourInterval=1
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */            
            ltPropHourInterval : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.hourInterval || 1 }),
           /**
            * @componentProperty {string} ltPropDefaultTime=''
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */            
            ltPropDefaultTime : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {number} ltPropMinuteInterval=30
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */            
            ltPropMinuteInterval : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.minuteInterval || 30 }),
           /**
            * @componentProperty {boolean} ltPropDropdown=false
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */            
            ltPropDropdown : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.dropdown || false }),
           /**
            * @componentProperty {boolean} ltPropShowInterval=false
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */            
             ltPropShowInterval : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.showInterval || false }),
           /**
            * @componentProperty {string} ltPropStartTime=''
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */
            ltPropStartTime : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.startTime || '' }),
           /**
            * @componentProperty {string} ltPropEndTime=''
            * @version 1.0.0
            * @condition ltPropType time,datetime
            */
            ltPropEndTime : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.endTime || '' }),
             /**
            * @componentProperty {boolean} ltPropConvertToNearest=false
            * @version 2.2.14
            * @condition ltPropType time,datetime
            */
            ltPropConvertToNearest : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.convertToNearest || false }),
             /**
            * @componentProperty {boolean} ltPropValidateOnBlur=false
            * @version 2.2.14
            * @condition ltPropType time,datetime
            */
            ltPropValidateOnBlur : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.validateOnBlur || false }),

            // data for calendar
            ltPropFillRows : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : ( __value = default_values.fillRows ) == void 0 ? true : default_values }),
            ltPropNumberOfRows : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.numberOfRows || 6 }),
            ltPropMinDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "" }),
            ltPropMaxDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "" }),
            ltPropStartWeekDay : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.startWeekDay || 1 } ),
            ltPropMonthHeaderFormat : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default: default_values.monthHeaderFormat || 'MMMM YYYY' } ),
            daysOfWeek : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __array, { default : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat' ] } ),
            ltPropYear : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : ( __value = default_values.year ) == void 0 ? true : __value } ),
            ltPropFormat : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.format || "MM/DD/YYYY" }),
            viewDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : {} }),
            ltPropStartDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
            ltPropEndDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : ''}),
            ltPropCurrentDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : ''}),
            /**
            * @componentProperty {boolean} ltPropBindToBody=true
            * @version 2.1.0
            * @condition ltPropType time,date,datetime
            */
            ltPropBindToBody : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : ( __value = default_values.bindToBody ) == void 0 ? true : __value }),
           /**
            * @componentProperty {string} ltPropCalendarClass=''
            * @version 2.1.0
            * @condition ltPropType date,datetime
            */
            ltPropCalendarClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.calendarClass || "" }),
            ltPropHeaderType : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.headerType || "default" }),

            // data for dropdown
           /**
            * @componentProperty {boolean} ltPropDropdownDisabled=false
            * @version 1.0.2
            * @condition ltPropType time,datetime
            */
            ltPropDropdownDisabled : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false}),
           /**
            * @componentProperty {boolean} ltPropDropdownShow=false
            * @version 1.0.2
            * @condition ltPropType time,datetime
            */
            ltPropDropdownShow : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false}),
           /**
            * @componentProperty {boolean} ltPropDropdownCallout=false
            * @version 2.0.0
            * @condition ltPropType time,datetime
            */
            ltPropDropdownCallout : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),
           /**
            * @componentProperty {boolean} ltPropDropdownFreeze=false
            * @version 1.0.2
            * @condition ltPropType time,datetime
            */
            ltPropDropdownFreeze : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : ( __value = default_values.dropdownFreeze ) == void 0 ? false : __value }),
           /**
            * @componentProperty {string} ltPropDropdownId=''
            * @version 2.2.2
            * @condition ltPropType time,datetime
            */
            ltPropDropdownId : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
           /**
            * @componentProperty {string} ltPropDropdownClass=''
            * @version 2.2.2
            * @condition ltPropType time,datetime
            */
            ltPropDropdownClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.dropdownClass || '' }),

            // for dropdown and calendar
            ltPropPosition : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.position || 'down'}),
            ltPropBoundary : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : default_values.boundary || {} }),

            // for date and time
            /**
            * @componentProperty {boolean} ltPropWheel=false
            * @version 2.0.0
            * @condition ltPropType time,datetime,date
            */
            ltPropWheel : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.wheel || false } ),
           /**
            * @componentProperty {boolean} ltPropYield=false
            * @version 1.0.2
            * @condition ltPropType time,datetime,date
            */
            ltPropYield : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.yield || false}),
            ltPropAnimate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.animate || false }),
           /**
            * @componentProperty {boolean} ltPropPreventSelection=false
            * @version 2.2.9
            * @condition ltPropType date
            */
            ltPropPreventSelection : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.preventSelection || false }),
           /**
            * @componentProperty {boolean} ltPropPreventKeys=false
            * @version 2.2.11
            * @condition ltPropType date
            */
            ltPropPreventKeys : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.preventKeys || false }),
           /**
            * @componentProperty {number} ltPropUpdateDelay=250
            * @version 2.0.0
            */
            ltPropUpdateDelay : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.hasOwnProperty( 'updateDelay' ) ? default_values.updateDelay : 250 }),
           /**
            * @componentProperty {boolean} ltPropAutoUpdate=true
            * @version 1.0.2
            * @default true
            */
            ltPropAutoUpdate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : ( __value = default_values.autoUpdate ) == void 0 ? true : __value }),
           /**
            * @componentProperty {number} ltPropCallbackDelay=0
            * @version 2.2.8
            */
            ltPropCallbackDelay : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number, { default : default_values.hasOwnProperty( 'callbackDelay' ) ? default_values.callbackDelay : 0 }),
           /**
            * @componentProperty {boolean} ltPropCloseIcon=false
            * @version 2.0.0
            * @condition ltPropType date,text,password,number
            */
            ltPropCloseIcon : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.closeIcon || false }),

            // datetime type
            /**
             * @experimental ltPropTimePlaceholder
             */
            ltPropTimePlaceholder : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', { default : "" }),

            ltPropCommonPlaceholder : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string', { default : '' }),
            /**
             * @experimental ltPropTimeClass
             */
            ltPropTimeClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.timeClass || "" }),

            // aria
           /**
            * @componentProperty {boolean} ltPropAria=false
            * @version 3.1.0
            */
            ltPropAria : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.aria || false }),
           /**
            * @componentProperty {object} ltPropAriaAttributes
            * @version 3.1.0
            * @default {}
            */
            ltPropAriaAttributes : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : default_values.ariaAttributes || {}, watch : true }),

            ltPropTimeAriaAttributes : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : default_values.timeAriaAttributes || {}, watch : true } ),
           /**
            * @componentProperty {boolean} ltPropFocus=false
            * @version 3.2.0
            */
            ltPropFocus : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),
           /**
            * @componentProperty {object} ltPropCalendarProperties
            * @version 2.2.20
            * @default {}
            * @component lyte-calendar
            * @condition ltPropType date,datetime
            */

            ltPropCalendarProperties : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : default_values.calendarProperties || { disableNavigation : true } }),
           /**
            * @componentProperty {object} ltPropDropdownProperties
            * @version 2.2.20
            * @default {}
            * @component lyte-dropdown
            * @condition ltPropType time,datetime
            */

            ltPropDropdownProperties : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : default_values.dropdownProperties || {} }),

           /**
            * @componentProperty {string} ltPropScope=''
            * @version 2.2.20
            * @condition ltPropType date,datetime
            */

            ltPropScope : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.scope || "" }),

           /**
            * @componentProperty {boolean} ltPropHeaderYield=false
            * @version 3.20.0
            * @condition ltPropType date,datetime
            */

            ltPropHeaderYield : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.headerYield || false }),

           /**
            * @componentProperty {string} ltPropConvertedDate=''
            * @version 3.20.0
            * @condition ltPropType date,datetime
            */

            ltPropConvertedDate : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),

           /**
            * @componentProperty {string} ltPropConvertedTime=''
            * @version 3.20.0
            * @condition ltPropType date,datetime
            */

            ltPropConvertedTime : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),

            /**
            * @componentProperty {boolean} ltPropPreventDropdownNavigation=false
            * @version 3.28.0
            * @condition ltPropType date,datetime
            */

            ltPropPreventDropdownNavigation : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.preventDropdownNavigation || false }),

            /**
            * @componentProperty {string} ltPropInputWrapperClass=""
            * @version 3.30.0
            */
            ltPropInputWrapperClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.inputWrapperClass || '' }),

            /**
            * @componentProperty {string} ltPropWrapperClass=""
            * @version 3.32.0
            */
            ltPropWrapperClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : default_values.wrapperClass || "" }),

            ltPropTimezoneHandling : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : default_values.timezoneHandling || false }),

           /**
            * @componentProperty {boolean} ltPropFocusAtEnd=false
            * @version 3.86.0
            */
            ltPropFocusAtEnd : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false } ),

            /**
            * @componentProperty {boolean} ltPropPasswordIcon=false
            * @version 3.91.0
            * @condition ltPropType password
            */
            ltPropPasswordIcon : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false } ),
            /**
            * @componentProperty {boolean} ltPropPasswordVisibility=false
            * @version 3.91.0
            * @condition ltPropType password
            */
            ltPropPasswordVisibility : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false } ),
            /**
             * @typedef {object} passwordTooltip
             * @property {string} show="Show password"
             * @property {string} hide="Hide password"
             */

            /**
            * @componentProperty {passwordTooltip} ltPropPasswordTooltip=false
            * @version 3.91.0
            * @condition ltPropType password
            */
            ltPropPasswordTooltip : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : {
                show : "Show password",
                hide : "Hide password"
            } } ),
            /**
            * @componentProperty {string} ltPropTooltipConfig='{"position" : "bottom"}'
            * @version 3.91.0
            * @condition ltPropType password
            */
            ltPropTooltipConfig : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '{"position" : "bottom"}' } ),
            /**
             * @typedef {object} ariaLabel
             * @property {string} modal="Choose date"
             * @property {string} button="Change date"
             */

            /**
            * @componentProperty {ariaLabel} ltPropAriaLabel
            * @version 3.91.0
            */
            ltPropAriaLabel : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : { modal : "Choose date", button : "Change date" } } ), 
           /**
            * @componentProperty {string} ltPropDataTabindex = 0
            * @version 3.91.0
            */
            ltPropDataTabindex : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "0" } ),
            /**
             * @componentProperty {string} ltPropLabelClass=""
             * @version 3.98.0
             */
            ltPropLabelClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "" } ),

            // system data

            eventListeners : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, {default : {}}),
            selectedField : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : {}}),
            endMinute : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number ),
            startMinute : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __number ),
            dropdownData : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __array, { default : []}),
            originalData : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __array, { default : []}),
            dateRange : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : { day : [], month : [], year : []}}),
            // Dont change this property name. Already some people from crm using this for passing their custom translations
            meridian : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __object, { default : {AM : (window._lyteUiUtils ? window._lyteUiUtils.i18n('AM') : 'AM'), PM : (window._lyteUiUtils ? window._lyteUiUtils.i18n('PM') : 'PM')}}),
            hour : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : window._lyteUiUtils.i18n('hour')}),
            min : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : window._lyteUiUtils.i18n('min')}),
            selectedDateField : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : ""}),
            preventObs : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : true}),
            resize : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : true}),
            resizeClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "lyteTextareaResize" } ),
            pos : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : ""}),
            isSearch : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),
            isBox : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : '' }),
            dateOrder : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __array, { default : [] }),
            showPlaceholder : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),

            lyteUnbound : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false }),

            randomId : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "" } ),

            navigation : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __boolean, { default : false } ),
            passwordClass : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "lyteInputShowPasswordIcon" } ),
            passwordTooltip : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default: "" } ),

            isExpanded : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( __string, { default : "false" } )
        }), arg1);
}

    getDateFromFormat(tdate, format) {

        var is_i18n = this.data.ltPropCalendarProperties.i18n;

        if( is_i18n ){
            var format = this._assCalendar.component.getRelevantFormat( format );

            return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( tdate ).i18N( format ); 
        } else {
            return this._assCalendar.component.getDateFromFormat(tdate, format);
        }

    }

    dateValidation(date) {
        if( !this._assCalendar ){
            return false;
        }
        var timeObj = this._assCalendar.component.stringToDate( date, this.data.ltPropFormat );
         if( timeObj == 'Invalid Date'){
            return false
         }
         return timeObj;
    }

    dateRegexFind(arg) {
         var format, dateRange = this.getData('dateRange'),
         dateOrder = [];
         if(!arg){
             format = this.getData('ltPropFormat');
         }else{
             format = arg.newValue;
         }
         var dayReg = /D+/ig.exec(format), monthReg = /M+/ig.exec(format), yearReg = /Y+/ig.exec(format);
         if( dayReg ){
             dateRange.day[0] = dayReg.index; dateRange.day[1] = dayReg.index + dayReg[0].length;
             dateOrder.push( { value : dateRange.day[ 0 ], name : "day", format : format.match( /D+/ig )[ 0 ] } );
         }
         if( monthReg ){
             dateRange.month[0] = monthReg.index; dateRange.month[1] = monthReg.index + monthReg[0].length;
             dateOrder.push( { value : dateRange.month[ 0 ], name : "month", format : format.match( /M+/ig )[ 0 ] } );
         }
         if( yearReg ){
             dateRange.year[0] = yearReg.index; dateRange.year[1] = yearReg.index + yearReg[0].length;
             dateOrder.push( { value : dateRange.year[ 0 ], name : "year", format : format.match( /Y+/ig )[ 0 ] } )
         }
         dateOrder.sort( function( a, b ){
             return a.value - b.value;
         } )
         this.setData( 'dateOrder', dateOrder );
     }

    constructingArr(i, startTime, format) {
        if(i < startTime){
            i += 1440;
        }
        var interval = (i - startTime) / 60,
        temp = {};
        temp.time = this.convertToRailway(i, true, format).trim();
        temp.interval = interval < 1 ? ((i - startTime) + ' '+ this.getData('min')) : ((interval % 1 == 0 ? interval : interval.toFixed(1)) + ' ' + this.getData('hour'));
        return temp;
    }

    dropdownConstruct() {
        if( this._prevent ) {
            return
        }
        var startTime = this.getData('startMinute'), i, temp = [], endTime = this.getData('endMinute'), hrInter = this.getData('ltPropHourInterval'), minInt = this.getData('ltPropMinuteInterval'), format = this.getData('ltPropTimeFormat'),
        arr = [];
        if(startTime >= endTime){
            endTime += 1440;
        }
        for(i = startTime; i <= endTime; i += minInt){
             var current = this.constructingArr(i, startTime, format);
             if( arr.indexOf( current.time ) == -1 ){
                 temp.push( current );
                 arr.push( current.time );
             }
        }

        if( this.data.ltPropTimezoneHandling ){
            this.check_dst( temp );
        }
        this.setData('originalData', temp);

        if( this.data.ltPropDropdownShow ){
            this.setData( 'dropdownData', temp );
        }
    }

    constructNewDrop(input, format) {
        var temp = [], startTime = this.getData('startMinute');
        if(format == 12){
            var min = this.convertToRailway(input.value.trim());
            var ret = this.maxValCheck(min);
            if(ret != false){
                temp.push(this.constructingArr(min, startTime, 12));
            }
            min += 720;
            ret = this.maxValCheck(min % 1440);
            if(ret != false){
                temp.push(this.constructingArr(min, startTime, 12));
            }
        }else{
            var min = this.convertToRailway(input.value.trim());
            var ret = this.maxValCheck(min);
            if(ret != false){
                temp.push(this.constructingArr(min, startTime, 24));
            }
        }
        this.dropdown.ltProp( 'selected', '' );
        if( temp.length == 0 && this.data.ltPropValidateOnBlur ){
            this.data.ltPropStartTime && temp.push( { time : this.data.ltPropStartTime, interval : "" } );
            this.data.ltPropEndTime && temp.push( { time : this.data.ltPropEndTime, interval : "" } );
        }
        this.setData('dropdownData', temp);
        this.dropdown.ltProp( 'selected', this.data.ltPropDefaultTime );
    }

    getCorrectTime(timeFormat) {

        if( (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) ){
            var date = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment();
            if( timeFormat == 12 ){
                return date.i18N( "hh:mm A" );
            } else{
                return date.format( "HH:mm" );
            }
        }

        var time = new Date(), hr = time.getHours(), min = time.getMinutes().toString(), meridian = this.getData('meridian'), mer = hr > 11 ? meridian.PM : meridian.AM;
        if(min.length == 1){
            min = '0' + min;
        }
        if(timeFormat == 12){
            if( hr != 12 ) {
                hr = (hr%12).toString();
                if(hr.length == 1){
                    hr = '0' + hr;
                }
            }
            return hr + ':' + min + " " + mer;
        }else{
            if(hr < 10){
                hr = '0' + hr;
            }
            return hr + ":" + min;
        }

    }

    handleWheel(evt) {
        var input = evt.target, type = this.getData('ltPropType');
        if( input.tagName != 'INPUT' || Math.abs( evt.deltaY ) <= Math.abs( evt.deltaX ) ) {
            return
        }
        if(type == 'time' || ( type == "datetime" && input.id == "time" ) ){
            if( this._emptytimeValue ){
                return;
            }
            _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
               var selectedField = this.getData('selectedField');
                if(!selectedField.prop || input.selectionStart > 3){
                    // settting initial selection if input is not focused
                    input.selectionStart = 0;
                    input.selectionEnd = 2;
                    this.setData('selectedField', {prop : 'hour', val : 0});
                    selectedField = {prop : 'hour', val : 0};
                }
                if(evt.deltaY < -10){
                    this.timeDecrease.call(this, input, {}, selectedField.prop, input.selectionStart, input.selectionEnd)
                }else if(evt.deltaY > 10){
                    this.timeIncrease.call(this, input, {}, selectedField.prop, input.selectionStart, input.selectionEnd)
                }
            }.bind(this))
        }else if( type == 'date' || ( type == "datetime" && input.id == "date" ) ){
            if(evt.deltaY < -10){
                evt.keyCode = 40;
                this.calendarKeydown.call(this, evt, input);
            }else if(evt.deltaY > 10){
                evt.keyCode = 38;
                this.calendarKeydown.call(this, evt, input);
            }
        }
        evt.preventDefault();   
    }

    convertToRailway(val, flag, format) {
        var meridian = this.getData('meridian');
        if(!flag){
            var hr = parseInt(val.slice(0, 2));
            var min = parseInt(val.slice(3, 5));
            if(val.length != 5){
                var mer = val.slice(6, val.length);
                return (mer == meridian.PM ? ((hr % 12) + 12) : hr % 12) * 60 + min;
            }else{
                return (hr * 60 + min);
            }
        }else{
            var hr = parseInt(val / 60) % 24;

            var min = val % 60;
            if(min < 10){
                min = '0' + min;
            }
            var mer = ''
            if(format == 12){
                if(parseInt(hr / 12) == 1){
                    if(hr > 12){
                        hr = hr % 12;
                    }
                    mer = meridian.PM;
                }else{
                    mer = meridian.AM;
                    hr = hr || 12;
                }
            }
            if(hr < 10){
                hr = '0' + hr;
            }
            return (hr + ":" + min + " " + mer);
        }
    }

    maxValCheck(val) {
        var endTime = this.getData('endMinute');
        var startTime = this.getData('startMinute');
        var toChangeTime;
        if(typeof val == 'string'){
            toChangeTime =  this.convertToRailway(val);
        }else{
            toChangeTime = val
        }
        if(startTime < endTime){
            if(toChangeTime <= endTime && toChangeTime >= startTime){
                return true
            }
        }else{
            if((toChangeTime < 1440 && toChangeTime >= startTime) || (toChangeTime >= 0 && toChangeTime <= endTime)){
                return true;
            }
        }
        return false
    }

    timeInValChange(arg) {
        var timeFormat = this.getData('ltPropTimeFormat'), value,
        val = this.data.ltPropValue,
        type = this.data.ltPropType;

        if(arg){
            value = arg.newValue;
        }else{
            value = this.getData('ltPropDefaultTime');
            if( ( val == undefined || type == 'datetime' ) && !value && (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) && ( type == "time" ? this.data.ltPropPlaceholder : ( this.data.ltPropTimePlaceholder || this.data.ltPropCommonPlaceholder ) ) ){
                this._emptytimeValue = true;
                if( type == 'datetime' ){
                    this.checkCommonPlaceHolder();
                }
                return;
            }
        }
        if(!value){
            var startTime =  this.getData('ltPropStartTime');
            if(startTime){
                value = startTime;
            }else{
                value = this.getCorrectTime(timeFormat);
            }
        }
        this.setData('ltPropDefaultTime', value.slice(0, timeFormat != 12 ? 5 : value.length));
    }

    checkCommonPlaceHolder() {
        if( ( this.data || {} ).ltPropCommonPlaceholder ){
            this.setData( 'showPlaceholder', !( this.data.ltPropCurrentDate || this.data.ltPropDefaultTime ) );
        }
    }

    startEndTimeObs(arg) {
        if(!arg || arg.item == 'ltPropStartTime')
            {
                var defaultVal = this._emptytimeValue ? this.getCorrectTime( this.data.ltPropTimeFormat ) : this.getData('ltPropDefaultTime');
                var startTime = this.getData('ltPropStartTime')
                if(!startTime){
                    this.setData('ltPropStartTime', defaultVal)
                    startTime = defaultVal
                }
                this.setData('startMinute', this.convertToRailway(startTime));
            }
        if(!arg || arg.item == 'ltPropEndTime') 
            {
                var  endTime = this.getData('ltPropEndTime'), flag = 0
                if(!endTime){
                    var min = Math.max(0, parseInt(startTime.slice(3, 5)) - 1).toString();
                    if(min.length == 1){
                        min = '0' + min;
                    }
                    endTime = ( startTime.slice(0, 3) + min + " " + startTime.slice(6, startTime.length) ).trim();
                    this.setData('ltPropEndTime', endTime)
                }
                this.setData('endMinute',  this.convertToRailway(endTime));
            }
        this.data.ltPropDropdown && this.dropdownConstruct();    
    }

    dateCallback(arg) {
        if( arg.newValue == "" && arg.oldValue == undefined) {
            return
        }

        this.englishDate();

        if(this.getMethods('onDateChange')){
           /**
            * @method onDateChange
            * @version 1.0.2
            * @condition ltPropType date,datetime
            */            
            this.executeMethod('onDateChange', arg, this.$node, this._selected);
        }
        this.checkCommonPlaceHolder();
        delete this._selected;
    }

    timeCallback(arg) {
        if( arg.newValue == "" && arg.oldValue == undefined) {
            return
        }
        if(this.getMethods('onValueChange')){
           /**
            * @method onValueChange
            * @version 1.0.2
            */            
            this.executeMethod('onValueChange', arg, this.$node)
        }
    }

    /*
        Calculate left of dropdown container when it has to come below/above the select element when it exceeds window.innerWidth and there is space to the right
    */
    setLeftExceedForDown(element, container, bcr, containerbcr, xscroll, ww) {
        var scrolledLeft = xscroll,
        elementBCR = bcr,
        elementLeft = this.rtlfunc.call( this, 'left', elementBCR, ww ),
        elementWidth = elementBCR.width,
        containerBCR = containerbcr,
        containerWidth = containerBCR.width,
        total = scrolledLeft + elementLeft + elementWidth - containerWidth;

        return total
    }

    /*
        Calculate left of dropdown container when it has to come below/above the select element when it doesn't exceed window.innerWidth
    */
    setLeftNotExceedForDown(element, bcr, xscroll, ww) {
        var scrolledLeft = xscroll,
        elementBCR = bcr,
        elementLeft = this.rtlfunc.call( this, 'left', elementBCR, ww ),
        total = scrolledLeft + elementLeft;

        return total
    }

    /*
        Calculate top of dropdown container when it has to come above the select element
    */
    setTopAboveForDown(element, container, bcr, containerbcr, yscroll) {
        var scrolledHeight = yscroll,
        elementBCR = bcr,
        elementTop = elementBCR.top,
        containerBCR = containerbcr,
        containerHeight = containerBCR.height,
        total = scrolledHeight + elementTop  - containerHeight;

        return total
    }

    /*
        Calculate top of dropdown container when it has to come below the select element
    */
    setTopBelowForDown(element, bcr, yscroll) {
        var scrolledHeight = yscroll,
        elementBCR = bcr,
        elementTop = elementBCR.top,
        elementHeight = elementBCR.height,
        total = scrolledHeight + elementTop + elementHeight;

        return total
    }

    /*
        Calculate left of dropdown container when it has to come to right of the select element
    */
    setLeftForRight(element, bcr, xscroll, ww) {
        var scrolledWidth = xscroll,
        elementBCR = bcr,
        elementLeft = this.rtlfunc.call( this, 'left', elementBCR, ww ),
        elementWidth = elementBCR.width,
        total = scrolledWidth + elementLeft + elementWidth;

        return total
    }

    /*
        Calculate right of dropdown container when it has to come to left of the select element of right dropdown
    */
    setRightForRight(element, container, bcr, elembcr, xscroll, ww) {
        var scrolledWidth = xscroll,
        elementBCR = bcr,
        containerBCR = elembcr,
        elementLeft = this.rtlfunc.call( this, 'left', elementBCR, ww ),
        containerWidth = containerBCR.width,
        total = scrolledWidth + elementLeft - containerWidth;

        return total
    }

    /*
        Calculate top of dropdown container when it has to come to right of dropdown and there is space below
    */
    setTopForRight(element, bcr, yscroll) {
        var scrolledHeight = yscroll,
        elementBCR = bcr,
        elementTop = elementBCR.top,
        total = scrolledHeight + elementTop;

        return total
    }

    /*
        Calculate top of dropdown container when it has to come to right of dropdown and there is no space below
    */
    setTopForRightAbove(element, container, bcr, elembcr, yscroll) {
        var scrolledHeight = yscroll,
        elementBCR = bcr,
        elementTop = elementBCR.top,
        elementHeight = elementBCR.height,
        containerBCR = elembcr,
        containerHeight = containerBCR.height,
        total = scrolledHeight + elementTop + elementHeight - containerHeight;

        return total
    }

    /**
     * Set the CSS for your calendar
     * refer commit ID 583ee6ccbeaa6b3729178bf9df0139032b016d19 and previous for the previous stable setCSS function.
     * commit ID 583ee6ccbeaa6b3729178bf9df0139032b016d19 also gives a better understanding about the hard coded values in this function.
     */
    setCss() {
        var link = this.$node.calendarDiv;

        if( !link 
            || link.classList.contains( 'lyteCalendarHidden' ) 
        ) {
            return;
        }

        // Get properties

        // Get button
        var body = link,
        par = this.$node.querySelector( 'input' ).parentElement;

        // Get Geometric propotions
        var wwidth, wheight, flag, 
        bleft = 0, btop = 0,
        wwidth = window.innerWidth,
        wheight= window.innerHeight,
        iwdth = wwidth,
        drop = body.getBoundingClientRect(), 
        x = ( window.pageXOffset || document.documentElement.scrollLeft ) * ( this._dir ? - 1 : 1 ),
        y = window.pageYOffset || document.documentElement.scrollTop,
        height = body.offsetHeight,
        width = body.offsetWidth, 
        position = this.getData( 'ltPropPosition' ),
        offsets = par.getBoundingClientRect(),
        scope = this.data.ltPropScope,
        scopeElement = scope ? _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node ).closest( scope ).get( 0 ) : void 0,
        scopeBcr = scopeElement ? scopeElement.getBoundingClientRect() : void 0;

        if( scopeBcr ){
            bleft = Math.max( bleft, scopeBcr.left );
            btop = Math.max( btop, scopeBcr.top );
            wwidth = Math.min( wwidth, scopeBcr.right );
            wheight = Math.min( wheight, scopeBcr.bottom );
        }

        // Intialize flags
        var downPos, 
        rightPos, 
        topPos, 
        leftPos,
        pos;

        // temp stores
        var tempStore,
        tempTop, 
        tempLeft, 
        tempMarginLeft, 
        tempMarginTop,
        tempNum, 
        tempDenom, 
        tempPer,
        oL = this.rtlfunc.call( this, 'left', offsets, iwdth ),
        lT = this.rtlfunc.call( this, 'left' );

        if( position === 'down' ) {
            downPos = true;
            tempTop = offsets.top + offsets.height; 
            if( tempTop + height > wheight 
                /*&& offsets.top > height */
            ) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop );        
            }

            rightPos = true;
            tempLeft = oL;
            if( tempLeft + width > wwidth 
                && tempLeft > tempLeft + offsets.width - body.offsetWidth 
            ) {
                rightPos = false;
                
            }
            // else if( oL + width <= wwidth ) {
            //     rightPos = true;
            // }

            if( downPos ) {
                this.setData( 'pos', 'down' );
                body.style.top = this.setTopBelowForDown( par, offsets, y ) + 'px';
                
            }
            else {
                this.setData( 'pos', 'up' );
                body.style.top = this.setTopAboveForDown( par, body, offsets, drop, y, iwdth ) + 'px';
            }

            if( rightPos ) {
                body.style.top = tempStore ? tempStore : body.style.top;
                body.style[ lT ] = this.setLeftNotExceedForDown( par, offsets, x, iwdth ) + 'px';  
            }
            else {
                body.style.top = tempStore ? tempStore : body.style.top;
                body.style[ lT ] = this.setLeftExceedForDown( par, body, offsets, drop, x, iwdth ) + 'px'
            }

            
        }
        else if( position === 'right' ) {
            rightPos = true;
            if( oL + offsets.width + width > wwidth
                && oL - drop.width > bleft 
            ) {   
                rightPos = false;
                
            }

            downPos = true;
            if( offsets.top + drop.height > wheight ) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop )
            }

            if( rightPos ) {
                this.setData( 'pos', 'right' );
                body.style[ lT ]= this.setLeftForRight( par, offsets, x, iwdth ) + 'px'
            }
            else {
                this.setData( 'pos', 'left' );
                body.style[ lT ] = this.setRightForRight( par, body, offsets, drop, x, iwdth ) + 'px';
            }

            if( downPos ) {
                body.style[ lT ] = tempStore ? tempStore : body.style[ lT ];
                body.style.top = this.setTopForRight( par, offsets, y ) + 'px' 
            }
            else {
                body.style[ lT ] = tempStore ? tempStore : body.style[ lT ];
                body.style.top = this.setTopForRightAbove( par, body, offsets, drop, y ) + 'px'
            }
        }
        else if( position === 'up' ) {
            topPos = true
            if( offsets.top - drop.height < btop 
                /*&& offsets.top + offsets.height + height < wheight */
            ) {
                topPos = ( wheight - offsets.top ) < ( offsets.bottom - btop )
            }

            rightPos = true
            if( oL + width > wwidth 
                && oL > oL + offsets.width - body.offsetWidth 
            ) {
                rightPos = false
            }
            // else if( oL + width <= wwidth ) {
            //     rightPos = true
            // }

            if( topPos ) {
                this.setData( 'pos', 'up' );
                body.style.top = this.setTopAboveForDown( par, body, offsets, drop, y ) + 'px';
            }
            else {
                this.setData( 'pos', 'down' );
                body.style.top = this.setTopBelowForDown( par, offsets, y ) + 'px'
            }
            if( rightPos ) {
                body.style.top = tempStore ? tempStore : body.style.top;
                body.style[ lT ] = this.setLeftNotExceedForDown( par, offsets, x, iwdth ) + 'px';
            }
            else{
                body.style.top = tempStore ? tempStore : body.style.top;
                body.style[ lT ] = this.setLeftExceedForDown( par, body, offsets, drop, x, iwdth ) + 'px';
            }
        } else if( position === 'left' ) {
            leftPos = true;
            if( oL - drop.width < bleft 
                && oL + drop.width < wwidth 
            ) {
                leftPos = false;
            }
            // else {
            //     leftPos = true;
            // }

            downPos = true;
            if( offsets.top + drop.height > wheight ) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop );
            }

            if( leftPos ) {
                this.setData( 'pos', 'left' );
                body.style[ lT ] = this.setRightForRight( par, body, offsets, drop, x, iwdth ) + 'px';
            }
            else {
                this.setData( 'pos', 'right' );
                body.style[ lT ] = this.setLeftForRight( par, offsets, x, iwdth ) + 'px';
            }
            if( downPos ){
                body.style[ lT ] = tempStore ? tempStore : body.style[ lT ];
                body.style.top = this.setTopForRight( par, offsets, y ) + 'px';
            }
            else{
                body.style[ lT ] = tempStore ? tempStore : body.style[ lT ];
                body.style.top = this.setTopForRightAbove( par, body, offsets, drop, y ) + 'px';
            }
        } else if( position === 'downLeft' ) {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if( tempTop + height > wheight /*&& offsets.top > height*/ ) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop );
            } 
            // else {
            //     downPos = true;
            // }
            if( !downPos ) {
                tempTop = offsets.top - height;
            }
            rightPos = false
            tempLeft = oL + offsets.width / 2 - width;
            if( tempLeft < bleft ) {
                tempLeft = bleft
                rightPos = true
            } 
            // else { 
            //     rightPos  = false
            // }

            body.style.top = tempTop + y + 'px';

            body.style[ lT ] = tempLeft + x + 'px';
            if( downPos ){
                pos = 'downLeft';
            } else {
                pos = 'upLeft';
            }
            this.setData( 'pos', pos);

        } else if( position === 'downRight' ) {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if( tempTop + height > wheight /*&& offsets.top > height*/ ) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop );
            } 
            // else {
            //     downPos = true;
            // }
            if( !downPos ) {
                tempTop = offsets.top - height
            }
            rightPos = true
            tempLeft = oL + offsets.width / 2;
            if( tempLeft + width > wwidth ) {
                tempLeft = wwidth - width;
                rightPos = false;
            } 
            // else { 
            //     rightPos  = true;
            // }

            body.style.top = tempTop + y + 'px';

            body.style[ lT ] = tempLeft + x + 'px';
            if( downPos ){
                pos = 'downRight';
            } else {
                pos = 'upRight';
            }
            this.setData( 'pos', pos);
        } else if( position === 'upLeft' ) {
            downPos = false;
            tempTop = offsets.top - height;
            if( tempTop < btop) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop );
            } 
            // else {
            //     downPos = false;
            // }
            if( downPos ) {
                tempTop = offsets.top + offsets.height;
            }
            rightPos = false
            tempLeft = offsets[ lT ] + offsets.width / 2 - width;
            if( tempLeft < bleft ) {
                tempLeft = bleft
                rightPos = true
            } 
            // else { 
            //     rightPos  = false
            // }

            body.style.top = tempTop + y + 'px';

            body.style[ lT ] = tempLeft + x + 'px';
            if( downPos ){
                pos = 'downLeft';
            } else {
                pos = 'upLeft';
            }
            this.setData( 'pos', pos);

        } else if( position === 'upRight' ) {
            downPos = false;
            tempTop = offsets.top - height;
            if( tempTop < btop) {
                downPos = ( wheight - offsets.top ) > ( offsets.bottom - btop );
            } 
            // else {
            //     downPos = false;
            // }
            if( downPos ) {
                tempTop = offsets.top + offsets.height
            }
            rightPos = true
            tempLeft = oL + offsets.width / 2;
            if( tempLeft + width > wwidth ) {
                tempLeft = wwidth - width;
                rightPos = false;
            } 
            // else { 
            //     rightPos  = true;
            // }

            body.style.top = tempTop + y + 'px';

            body.style[ lT ] = tempLeft + x + 'px';
            if( downPos ){
                pos = 'downRight';
            } else {
                pos = 'upRight';
            }
            this.setData( 'pos', pos);
        }
            
    }

    preventFn() {
        this.preventFocus = true;
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            wormholeAppend : function( element, outlet ){

                var __node = this.$node;

                __node.calendarComp = element;
                element.nodeN = __node;
                __node.calendarDiv = element.querySelector( 'div#lyteCalendar' );
                this._assCalendar = __node.calendarDiv.querySelector( 'lyte-calendar' );
                // var func1 = this.calendarMousedown.bind(this);
                // this.$node.calendarDiv.addEventListener('mousedown', func1, true);
                // this.setData('eventListeners.mousedown', func1);
               /**
                * @utility revertToToday
                * @condition ltPropType date,datetime
                * @version 2.2.12
                */            
                __node.revertToToday = this._assCalendar.revertToToday;
               /**
                * @utility revertToSelected
                * @condition ltPropType date,datetime
                * @version 2.2.12
                */            
                __node.revertToSelected = this._assCalendar.revertToSelected;

                var dropdown = this._assCalendar.querySelectorAll('lyte-dropdown');
                for( var i = 0; i < dropdown.length; i++ ){
                    var dropbody = dropdown[ i ].component.childComp || dropdown[ i ].querySelector( 'lyte-drop-box' );
                    dropbody.addEventListener( 'mousedown', this.preventFn.bind( this ) );
                }

                if( this.data.ltPropAria ){
                    try{
                        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( __node.calendarDiv ).trapFocus();
                    }catch( err ){};
                }
            },

            "on-dateselected":function(){
                   this._selected = true;
                   this._hideCalendar();
             },
             hide : function(){
                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node ).removeClass( 'lyteInputDropdownOpen' );
                if(this.getMethods('onHide')){
                   /**
                    * @method onHide
                    * @condition ltPropType time,datetime
                    * @version 1.0.2
                    */                
                    this.executeMethod('onHide', arguments[0], arguments[1], this.$node);
                }
             },
             beforeHide : function(){
                if(this.getMethods('onBeforeHide')){
                   /**
                    * @method onBeforeHide
                    * @condition ltPropType time,datetime
                    * @version 1.0.2
                    */                
                    return this.executeMethod('onBeforeHide', arguments[0], arguments[1], this.$node);
                }
             },
             show : function(){
                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node ).addClass( 'lyteInputDropdownOpen' );
                if(this.getMethods('onShow')){
                   /**
                    * @method onShow
                    * @condition ltPropType date,datetime
                    * @version 1.0.2
                    */                
                    this.executeMethod('onShow', arguments[0], arguments[1], this.$node);
                }
             },
             beforeShow : function(){
                if(this.getMethods('onBeforeShow')){
                   /**
                    * @method onShow
                    * @condition ltPropType date,datetime
                    * @version 1.0.2
                    */                
                    return this.executeMethod('onBeforeShow', arguments[0], arguments[1], this.$node);
                }
             },
             optionSelected : function(){
                this._calmsfg = true;
                delete this._emptytimeValue;
                this.setData('ltPropDefaultTime', arguments[1].trim());

                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( 'input', this.$node ).get( -1 ).focus();
             },

             scroll : function(){
                if(this.getMethods('onScroll')){
                   /**
                    * @method onScroll
                    * @condition ltPropType time,datetime
                    * @version 1.0.2
                    */                
                    this.executeMethod('onScroll', arguments[0], arguments[1]);
                }
             },

             positionChange : function(){
                if(this.getMethods('onPositionChanged')){
                   /**
                    * @method onPositionChanged
                    * @condition ltPropType time,datetime
                    * @version 1.0.2
                    */                
                    this.executeMethod('onPositionChanged', arguments[0], arguments[1]);
                }
             },

             calendarNavigate : function( arg1, arg2, arg3, arg4 ){
                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.setCss.bind( this ) );
                if( this.getMethods( 'onNavigate' ) ) {
                   /**
                    * @method onNavigate
                    * @condition ltPropType date,datetime
                    * @version 2.0.0
                    */                
                    this.executeMethod( 'onNavigate', arg1, arg2, arg3, arg4 )
                }
             },

             viewDateChange : function( arg1, arg2 ){
                   /**
                    * @method onViewdateChange
                    * @condition ltPropType date,datetime
                    * @version 2.2.11
                    */            
                this.getMethods( 'onViewdateChange' ) && this.executeMethod( 'onViewdateChange', arg1, arg2, this.$node );
             },

             viewChange : function( evt, viewType, _this ){
                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.setCss.bind( this ) );
                   /**
                    * @method onViewChange
                    * @condition ltPropType date,datetime
                    * @version 2.2.11
                    */            
                this.getMethods( 'onViewChange' ) && this.executeMethod( 'onViewChange', evt, viewType, _this, this.$node )
             }
        }), arg1);
    }

    valUpdate() {
         if( !this.$node || !this) {
             return;
         }
         delete this._timeout;
         var type = this.data.ltPropType;
         if( type == 'date' || type == "datetime" ){
             var inn = this.$node.querySelector( 'input' ).value;
             this.setData('ltPropCurrentDate', inn ? inn : "");
         }else if(type == "textarea"){
             var inn = this.$node.querySelector( 'textarea' ).value;
             this.setData('ltPropValue', inn ? inn : "");
         }else{
             var inn = this.$node.querySelector( 'input' ).value;
             // if( this.data.ltPropType == "number" && !frmblur && ( !inn || inn == this.$node.ltProp( 'value' ) ) ){
             //  return
             // }
             this.setData('ltPropValue', inn ? inn : "");
         }  
    }

    fixSelection(val, selectedField, input) {
     if( this.data.ltPropReadonly ){
         return;
     }
     // changing selection range
             input.selectionStart = selectedField.val + val;
             input.selectionEnd = input.selectionStart + 2;
             this.timeClick.call(this, {}, input, selectedField.val + val );
    }

    replaceVal(input, val, start, end) {
         var value;
         if(typeof input == 'string'){
             value = input
         }else{
             value = input.value
         }
         var regex = new RegExp('('+ value.slice(start, start + end) +')','i');
          return value.trim().replace(regex, val);   
    }

    retVal(val1, val2, limit) {
      if( parseInt( val1 + val2 ) > limit ) {
         return '0' + val2
      }
      return val1 + val2;
    }

    convertToPm(limit, val, meridian) {
         if( limit == 12 ) {
             var mer = val.slice( 6, val.length ), time = val.slice( 0, 5 ), hr = val.slice( 0, 2 ), min = val.slice( 3, 5 )
             if( hr == '00' && mer == 'AM' || hr == '12' && mer == 'PM' ) {
                 return val
             }
             return hr + ':' + min + " " + ( meridian.AM == mer ? meridian.PM : meridian.AM )
         }
         return val
    }

    hourTimeSet(input, evt, selection, start, end) {
          var inputVal = input.value.trim(), limit, meridian = this.getData('meridian');
          var typedValue  = window._lyteUiUtils.getCorrectNumberCode( evt.which || evt.keyCode ) - 48;
          var newVal = inputVal.slice(start + 1, end) + typedValue;
          var timeFormat = this.data.ltPropTimeFormat,
          blur = this.data.ltPropValidateOnBlur,
          final;
          
          if(selection == 'hour'){
             limit = timeFormat == 12 ? 12 : 24;
          }else{
             delete this._lasttyped;
             limit = 60
          }
         // if(parseInt(newVal) > limit){
             // newVal = '0' + typedValue;
             // if((limit == 12 && newVal == '00' && inputVal.slice(6, 8) == meridian.PM)){
             //     inputVal = this.replaceVal.call(this, input, meridian.AM, 6, meridian.AM.length);
             // }else
              if(limit == 60 && parseInt( newVal ) >= 60){
                 newVal = '0' + typedValue;
             }
         // }else{
             // if((limit == 12 && newVal == '12' && inputVal.slice(6, 8) == meridian.AM)){
             //     inputVal = this.replaceVal.call(this, input, meridian.PM, 6, meridian.AM.length);
             // } else if((limit == 12 && newVal == '00' && inputVal.slice(6, 8) == meridian.PM)){
             //     inputVal = this.replaceVal.call(this, input, meridian.AM, 6, meridian.PM.length);
             // }
         // }

         // if( selection == 'hour' && timeFormat == 12 && newVal == "00" ){
         //     newVal = "12";
         // }
         if( selection == "hour" ){
             final = this.getCrctHour( inputVal, start, end, limit, typedValue, meridian );
             this._lasttyped = typedValue + '';
         } else {
             final = inputVal.slice(0, start) + newVal + inputVal.slice(end, inputVal.length);
             if( !blur || blur && evt.type != 'keydown' ){
                 var returnV1 = this.maxValCheck(final);
                 if(returnV1 == false ){
                     final = inputVal.slice(0, start) + this.retVal( inputVal.slice(start, start + 1), typedValue, limit ) + inputVal.slice(end, inputVal.length);
                     returnV1 = this.maxValCheck(final);
                     if(returnV1 == false){
                         final = inputVal.slice(0, start) + '0' + typedValue + inputVal.slice(end, inputVal.length);
                         returnV1 = this.maxValCheck(final);
                         if(returnV1 == false){
                             final = this.convertToPm( limit, final, meridian)
                             returnV1 = this.maxValCheck(final);
                             if(returnV1 == false){
                                 return false;
                             }
                         }
                     }
                 }
             }
         }

         if( this.data.ltPropTimezoneHandling ){
             final = this.check_dst( final, 1, 1 );
         }

         this.setData('ltPropDefaultTime', final);
         // restore current selection
         _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
             input.selectionStart = start;
             input.selectionEnd = end;
         })
    }

    _getCrctHour(str, limit, meridian) {
         if( this.maxValCheck( str ) == false ){
             if( limit == 12 ){
                  str = this.convertToPm( limit, str, meridian );
                  if( this.maxValCheck( str ) == false ){
                     return false;
                  } 
                  return str;
             }
             return false;
         }
         return str;
    }

    getCrctHour(inputVal, start, end, limit, typedValue, meridian) {
         var str, hr, ret, allow,
         blur = this.data.ltPropValidateOnBlur;
         if( this._lasttyped != undefined ){
             hr = this._lasttyped + typedValue;
             if( hr == "00" && limit == 12 ){
                 allow = true;
                 hr = "12"
             }
             if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
                 ret = false;
             } else {
                 str = hr + inputVal.slice( end );
                 if( !blur ){
                     ret = this._getCrctHour( str, limit, meridian );
                 } else {
                     return str;
                 }
             }
             if( ret != false ){
                 return ret;
             } else if( str ) {
                 var em = this.data.endMinute,
                 endTime = this.convertToRailway( str );
                 if( endTime - em < 60 && endTime - em >= 0 ){
                     return this.convertToRailway( em, true, limit ).trim();
                 }
             }
         }
         hr = inputVal.slice( start + 1, end ) + typedValue;
         if( hr == "00" && limit == 12  ){
             if( !allow ){
                 return inputVal;
             }
             hr = "12"
         }
         if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
             ret = false;
         } else {
             str = hr + inputVal.slice( end );
             if( !blur ){
                 ret = this._getCrctHour( str, limit, meridian );
             } else {
                 return str;
             }
         }
         if( ret != false ){
             return ret;
         }

         hr = inputVal.slice( 0, start + 1 ) + typedValue;
         if( hr == "00" && limit == 12  ){
             if( !allow ){
                 return inputVal;
             }
             hr = "12"
         }
         if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
             ret = false;
         } else {
             str = hr + inputVal.slice( end );
             if( !blur ){
                 ret = this._getCrctHour( str, limit, meridian );
             } else {
                 return str;
             }
         }
         if( ret != false ){
             return ret;
         }

         hr = '0' + typedValue;
         if( hr == "00" && limit == 12  ){
             if( !allow ){
                 return inputVal;
             }
             hr = "12"
         }
         str = hr + inputVal.slice( end );
         if( !blur ){
             ret = this._getCrctHour( str, limit, meridian );
         } else {
             return str;
         }
         if( ret != false ){
             return ret;
         }
         hr = typedValue + '0';
         if( hr == "00" && limit == 12  ){
             if( !allow ){
                 return inputVal;
             }
             hr = "12"
         }
         if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
             ret = false;
         } else {
             str = hr + inputVal.slice( end );
             if( !blur ){
                 ret = this._getCrctHour( str, limit, meridian );
             } else {
                 return str;
             }
         }
         if( ret != false ){
             return ret;
         }

         if( this.data.ltPropConvertToNearest ){
            return this.findNearestTime( inputVal, start, end, limit, typedValue, meridian );
         }
         return inputVal;
    }

    findNearestTime(inputVal, start, end, limit, typedValue, meridian) {
         var hr, ret;
         if( this._lasttyped != undefined ){
             hr = this._lasttyped + typedValue;
             if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
                 ret = false;
             } else {
                 return this._findNearest( hr + inputVal.slice( end ), limit );
             }
         }
         hr = inputVal.slice( start + 1, end ) + typedValue;
         if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
             ret = false;
         } else {
             return this._findNearest( hr + inputVal.slice( end ), limit );
         }
         hr = inputVal.slice( 0, start + 1 ) + typedValue;
         if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
             ret = false;
         } else {
             return this._findNearest( hr + inputVal.slice( end ), limit );
         }
         hr = '0' + typedValue;
         if( limit == 24 && parseInt( hr ) >= 24 || limit == 12 && parseInt( hr ) >= 13 ){
             ret = false;
         } else {
             return this._findNearest( hr + inputVal.slice( end ), limit );
         }
         return inputVal;
    }

    _findNearest(str, limit) {
       var value = this.convertToRailway( str ),
       end = this.data.endMinute,
       start = this.data.startMinute,
       startDiff = Math.abs( start - value ),
       endDiff = Math.abs( end - value );
       if( startDiff > endDiff ){
          return this.convertToRailway( end, true, limit ).trim();
       } else {
         return this.convertToRailway( start, true, limit ).trim();
       }
    }

    timeIncrease(input, evt, selection, start, end, flag) {
           if( this.data.ltPropReadonly ){
              return
           }
           var inputVal = input.value.trim(), limit, currentValue = parseInt(inputVal.slice(start, end)), interval, timeFormat = this.getData('ltPropTimeFormat'), final, meridian = this.getData('meridian');
           if(selection == 'hour'){
              limit = timeFormat == 12 ? 12 : 24;
              if(flag){
                  interval = 1;
              }else{
                  interval =  this.data.ltPropHourInterval;
              }
           }else{
              limit = 60;
              interval =  this.data.ltPropMinuteInterval;
           }
           var newVal,
           allow;
           if( (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) && (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment.lyteMoment.prototype.add) ){
              var momentFormat = timeFormat == 12 ? "hh:mm A" : "HH:mm",
              moment;
              inputVal = inputVal.replace( meridian.AM, 'AM' ).replace( meridian.PM, 'PM' );

              if( this.data.ltPropTimezoneHandling && this.data.ltPropCurrentDate ){
                  moment = this.check_dst( inputVal, true );
              } else {
                  moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( inputVal, momentFormat );
              }

              if( moment.validate() ){
                  final = moment.add( interval, limit == 60 ? 'minutes' : 'hours' ).format( momentFormat ).replace( 'AM', meridian.AM ).replace( 'PM', meridian.PM );
              } else {
                  allow = true;
              }
           } 
           if( allow ) {
               newVal = (currentValue + interval) % limit;
               if(limit == 12 && newVal < currentValue && inputVal.slice(6, inputVal.length) == meridian.AM){
                  if(newVal == 0){
                      newVal = '12';
                  }
                 inputVal = this.replaceVal.call(this, input, meridian.PM, 6, inputVal.length);
               }else if(limit == 12 && newVal < currentValue && inputVal.slice(6, inputVal.length) == meridian.PM){
                  if(currentValue != 12 || newVal == 0){
                      inputVal = this.replaceVal.call(this, input, meridian.AM, 6, inputVal.length);
                  }
               }else if(limit == 12 && newVal == currentValue && inputVal.slice(6, inputVal.length) == meridian.AM){
                      newVal = '12';
                      inputVal = this.replaceVal.call(this, input, meridian.PM, 6, inputVal.length);
               }else if(limit == 60 && newVal <= currentValue) {
                   var ret = this.timeIncrease.call(this, input, evt, 'hour', 0, 2, true);
                   if(ret == false){
                      return false;
                   }
                   inputVal = input.value.trim();
               }
              newVal = newVal.toString();
              if(newVal.length == 1){
                  newVal = '0' + newVal;
              }
              final = inputVal.slice(0, start) + newVal + inputVal.slice(end, inputVal.length);
          }
          var returnV = this.maxValCheck(final)
          if(returnV == false){
              return false
          }
          this.setData('ltPropDefaultTime', final);
          // restore current selection
          _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
              input.selectionStart = start;
              input.selectionEnd = end;
          })
     }

    timeDecrease(input, evt, selection, start, end, flag) {
        if( this.data.ltPropReadonly ){
            return
         }
         var inputVal = input.value.trim(), limit, currentValue = parseInt(inputVal.slice(start, end)), interval, timeFormat = this.getData('ltPropTimeFormat'), final, meridian = this.getData('meridian');
         if(selection == 'hour'){
            limit = timeFormat == 12 ? 12 : 24;
            if(flag){
                interval = 1;
            }else{
                interval =  this.getData('ltPropHourInterval');
            }
         }else{
            limit = 60;
            interval =  this.getData('ltPropMinuteInterval');
         }
         var newVal,
         allow;
         if( (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) && (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment.lyteMoment.prototype.subtract) ){
            var momentFormat = timeFormat == 12 ? "hh:mm A" : "HH:mm",
            moment;
            inputVal = inputVal.replace( meridian.AM, 'AM' ).replace( meridian.PM, 'PM' );
            
            if( this.data.ltPropTimezoneHandling && this.data.ltPropCurrentDate ){
                moment = this.check_dst( inputVal, true );
            } else {
                moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( inputVal, momentFormat );
            }

            if( moment.validate() ){
                final = moment.subtract( interval, limit == 60 ? 'minutes' : 'hours' ).format( momentFormat ).replace( 'AM', meridian.AM ).replace( 'PM', meridian.PM );
            } else {
                allow = true;
            }
         } 
         if( allow) {
             newVal = (currentValue - interval + limit) % limit;
             if(limit == 12 && newVal > currentValue && inputVal.slice(6, inputVal.length) == meridian.AM){
                 inputVal = this.replaceVal.call(this, input, meridian.PM, 6, inputVal.length);
             } else if(limit == 12 && (newVal > currentValue || currentValue == 12) && inputVal.slice(6, inputVal.length) == meridian.PM){
                inputVal = this.replaceVal.call(this, input, meridian.AM, 6, inputVal.length);
             }else if(limit == 12 && newVal == 0){
                if(inputVal.slice(6, inputVal.length) == meridian.PM){
                    newVal = '12';
                } 
             }else if(limit == 60 && newVal >= currentValue) {
                var ret = this.timeDecrease.call(this, input, evt, 'hour', 0, 2, true);
                if(ret == false){
                    return false;
                }
                inputVal = input.value.trim()
             }
            newVal = newVal.toString();
            if(newVal.length == 1){
                newVal = '0' + newVal;
            }
            final = inputVal.slice(0, start) + newVal + inputVal.slice(end, inputVal.length);
        }
        var returnV = this.maxValCheck(final);
        if(returnV == false){
            return false
        }
        this.setData('ltPropDefaultTime', final);
        // restore current selection
        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
            input.selectionStart = start;
            input.selectionEnd = end;
        })
   }

    findCalendarRange(evt, input, allow) {
         // var flag = false;
         if(input.value && this.dateValidation(input.value) != false){
                 var start = input.selectionStart, i;
                 var end = input.selectionEnd;
                 var range = this.getData('dateRange');
                 for(i in range){
                     if( allow && i != this.data.selectedDateField ){
                         continue;
                     }
                     // checking selected pos
                      var returnedRange = this.setRangeByMoment( input, range, i );

                      // One bug in this check. It will cause error when format is given without separators like MMDDYYYY

                     if( ( returnedRange[ 0 ] <= start && returnedRange[ 1 ] >= start ) || allow ){
                         if( !this.data.ltPropPreventSelection ){
                             input.selectionStart = returnedRange[ 0 ];
                             input.selectionEnd = returnedRange[ 1 ];
                         } else if( allow ) {
                            input.selectionStart = input.selectionEnd = returnedRange[ 1 ]; 
                         }
                         this.setData('selectedDateField', i);
                         // flag = true;
                         break;
                     }
                 }
             }
          // return flag;   
    }

    setRangeByMoment(input, range, key) {
       var start, end;
       if( (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) ){
           var format = this.data.ltPropFormat, 
           value = input.value,
           is_i18n = this.data.ltPropCalendarProperties.i18n,
           moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( value, this._assCalendar.component.getRelevantFormat( format ), {
             i18n : is_i18n
           }),
           ns = is_i18n ? 'i18N' : 'format';

           if( moment.validate() ){
             var length = 0, sliceForm = format.slice( range [ key ] [ 0 ], range  [ key ][ 1 ] );
             for( var i = 0; i < this.data.dateOrder.length; i++ ){
                 var current = this.data.dateOrder[ i ], newValue = moment[ ns ]( current.format );
                 if( current.format == sliceForm ){
                     break;
                 }
                 value = value.replace( newValue, '' );
                 length += newValue.length
             }
             var formatted = moment[ ns ]( sliceForm );
             start = length + value.indexOf( formatted );
             end = start + formatted.length;
           } else {
              start = range[ key ] [ 0 ];
              end = range[ key ] [ 1 ];
           }
       } else {
         start = range[ key ][ 0 ];
         end = range[ key ][ 1 ];
       }
       return [ start, end ];
    }

    hideCalendar() {
         Array.from( document.getElementsByTagName( 'lyte-input' ) ).forEach( function( item ){
             var cal_div = item.calendarDiv;

             if( item != this.$node && cal_div && !_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( cal_div ).hasClass( 'lyteCalendarHidden' ) ){
                 item.component._hideCalendar();
             }
         }.bind( this ) );
    }

    _hideCalendar(bool, __force) {

         var cal = this.$node.calendarDiv;

         if( !cal || _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( cal ).hasClass( 'lyteCalendarHidden' ) ){
             return;
         }

         if( !__force && !this._selected && !this.data.ltPropCalendarProperties.disableNavigation && cal.contains( document.activeElement ) ){
             return;
         }

         var callback,
         cb = 'onBeforeCalendarClose';

         if( this.getMethods( cb ) ) {
                /**
                 * @method onBeforeCalendarClose
                 * @condition ltPropType date,datetime
                 * @version 2.2.8
                 */            
             callback = this.executeMethod( cb, cal, this.$node, !!this._selected );
         }
         if( callback == false ){
             this.$node.focus();
             return
         } else if( callback && callback.then ){
             this._calendarCloseStart = true;
             Promise.resolve( callback ).then( this.mainHideFn.bind( this, bool ) );
         } else {
             this.mainHideFn( bool );
         }
    }

    mainHideFn(bool) {

         var comp = this,
         inputs = this.$node,
         __calendar = inputs.calendarDiv;

         delete comp._calendarCloseStart;
         __calendar.classList.add('lyteCalendarHidden')
         inputs.classList.remove( 'calendarOpen' );

         Array.from( comp._assCalendar.querySelectorAll( 'lyte-dropdown' ) ).forEach( function( item ){
             item.close();
         });

         if( this.data.ltPropAria ){
             _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( 'input,textarea', inputs ).attr( "aria-expanded", "false" );
          }

         if( comp.getMethods( 'onCalendarClose' ) ) {
            /**
             * @method onCalendarClose
             * @condition ltPropType date,datetime
             * @version 1.0.2
             */            
             comp.executeMethod( 'onCalendarClose', __calendar, inputs )
         }
         comp.data.ltPropHeaderType == 'drilldown' && inputs.revertToSelected();
         if( bool ){
             inputs.blur();
             comp._closedbyscrl = true;
         } 

         if( this.data.ltPropAria ){
             var exst_active = document.activeElement;

             if( exst_active == document.body || __calendar.contains( exst_active ) ){
                 _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( '.lyteInputCalendarIcon', this.$node ).focus();
             }

             this.setData( "isExpanded", "false" );
         }
    }

    showCalendar(event, input) {
     if( this._byManual ) {
         delete this._byManual;
         return;
     }
      this.hideCalendar();
      // removing hidden class
       if( this.data.ltPropReadonly && !this.data.ltPropPreventKeys || this._calendarCloseStart ){
         return;
      }
      if( this.getMethods( 'onBeforeOpen' )  ){
         var retVal = this.executeMethod( 'onBeforeOpen', event, this.$node );
         if( retVal == false ){
             this._prevclick = true;
             setTimeout( function(){
                 delete this._prevclick;
             }.bind( this ), 100 );
             return;
         }
      }
      if( !this.data.ltPropBindToBody ){
          this.setData( 'ltPropBindToBody', true );   
      }
      this.$node.calendarDiv.classList.remove('lyteCalendarHidden')
      _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.scrollFunc.bind( this ) );
      // initial selection
      _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
         if( !this.data.ltPropReadonly ){
              // if( !this.data.ltPropPreventSelection ){
              //    input.selectionStart = 0;
              //    input.selectionEnd = 0;
              // }
              this.findCalendarRange(event, input );
          }
          this.$node.classList.add( 'calendarOpen' );
          if( this.data.ltPropType == 'datetime' ){
             if( this.dropdown ){
                 this.dropdown.close();
             }
          }

          if( this.data.ltPropAria ){
             _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( 'input,textarea', this.$node ).attr( "aria-expanded", "true" );
          }

          // if( !this.data.ltPropCalendarProperties.disableNavigation ){
          //    this.setData( "navigation", true );
          // }


          if( this.data.ltPropAria ){
             window.requestAnimationFrame( function(){
                 // this._assCalendar.focusCalendar();
                 this.setData( "navigation", true );
                 this.setData( "isExpanded", "true" );
             }.bind( this ) );
          }

          if(this.getMethods('onCalendarOpen')){
            /**
             * @method onCalendarOpen
             * @condition ltPropType date,datetime
             * @version 1.0.2
             */            
             this.executeMethod('onCalendarOpen', this.$node.calendarDiv, this.$node);
          }   
      }.bind(this))
    }

    // calendarMousedown : function(event){
    //      if( this.$node.calendarDiv.contains( event.target.correspondingElement || event.target ) ) {
    //          this.preventFocus = true
    //      }
    // },

    timeClick(evt, input, startVal) {
     if( this.data.ltPropReadonly && !this.data.ltPropPreventKeys ){
         return;
     }
     if( !this.data.ltPropReadonly && !this._emptytimeValue ){
         var start, startVal, endVal;
         // measuring clicked position
             start = Math.min( 2, parseInt( ( startVal == undefined ? input.selectionStart : startVal ) / 3 ) );
         // measuring selection 
             switch(start){
                 case 2 : {
                     startVal = 6;
                     endVal = input.value.length;
                     this.setData('selectedField', {prop : 'meridian', val : 6});
                 }
                 break;
                 case 1 : {
                     startVal = 3;
                     endVal = 5;
                     this.setData('selectedField', {prop : 'minute', val : 3});
                 }
                 break;
                 default : {
                     startVal = 0;
                     endVal = 2;
                     this.setData('selectedField', {prop : 'hour', val : 0});
                 }
             }

         input.selectionStart = startVal;
         input.selectionEnd = endVal;
       }
       if(this.dropbox && this.dropbox.classList.contains('lyteDropdownHidden') && evt.type == "click"){
             this.open_dropdown();
         }
    }

    open_dropdown() {
         this.dropdown.ltProp( 'selected', '' );
         this.setData('dropdownData', this.getData('originalData'));
         this.dropdown.ltProp( 'selected', this.data.ltPropDefaultTime );
         this.dropdown.toggle();
    }

    calendarKeydown(evt, input) {
         
         if( evt.key == "Escape" ){
             return this._hideCalendar( void 0, true );
         }

         if( !input.value || this.data.ltPropReadonly ){
             return;
         }
         var keyCode = evt.keyCode,

         time = this.dateValidation(input.value);
             if(time != false){
                 var selected = this.getData('selectedDateField');                       
                 if([37, 38, 39, 40, 9].indexOf(keyCode) != -1){
                         if(input.selectionEnd == input.selectionStart){
                             this.findCalendarRange(evt, input);
                             selected = this.data.selectedDateField;
                         }
                         var start = input.selectionStart;
                         var end = input.selectionEnd;
                         if([38, 40].indexOf(keyCode) != -1){
                            evt.preventDefault();
                         switch(selected){
                             case 'year' : {
                                 if(keyCode == 40){
                                     time.setFullYear(time.getFullYear() - 1);
                                 }else{
                                     time.setFullYear(time.getFullYear() + 1);
                                 }   
                             }
                             break;
                             case 'month' : {
                                 if(keyCode == 40){
                                     time.setMonth(time.getMonth()  - 1);
                                 }else{
                                     time.setMonth(time.getMonth() + 1);
                                 }
                             }
                             break;
                             default : {
                                 if(keyCode == 40){
                                     time.setDate(time.getDate() - 1);
                                 }else{
                                     time.setDate(time.getDate() + 1);
                                 }
                             }
                         }
                         if( this._assCalendar.component.checkDate( time ) ){
                             this.setData('ltPropCurrentDate', this.getDateFromFormat(time, this.getData('ltPropFormat')));
                         }
                         _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.findCalendarRange.bind( this, {}, input, true ) )
                     } else {
                         if((input.selectionEnd == input.value.length && (keyCode == 39 || (!evt.shiftKey && keyCode == 9))) || (input.selectionStart == 0 && (keyCode == 37 || (evt.shiftKey && keyCode == 9)))){
                             return
                         }else{
                             var daterange = this.getData('dateRange'),
                             dateOrder = this.data.dateOrder,
                             index;

                             for( var i = 0; i < dateOrder.length; i++ ){
                                 if( dateOrder[ i ].name == selected ){
                                     index = i;
                                     break;
                                 }
                             }

                             if( keyCode == 39 || ( !evt.shiftKey && keyCode == 9 ) ) {
                                 if( i + 1 == dateOrder.length ){
                                     start = end = daterange[ selected ][ 1 ] + 1;
                                 } else {
                                     var returned = this.setRangeByMoment( input, daterange, dateOrder[ index + 1 ].name );
                                     start = end = Math.abs( ( returned[ 0 ] + returned[ 1 ] ) * 0.5 )
                                 }
                             }else if( keyCode == 37 || ( evt.shiftKey && keyCode == 9 ) ){
                                 if( i == 0 ){
                                     start = end = daterange[ selected ][ 0 ] + 1;
                                 } else {
                                     var returned = this.setRangeByMoment( input, daterange, dateOrder[ index - 1 ].name );
                                     start = end = Math.abs( ( returned[ 0 ] + returned[ 1 ] ) * 0.5 )
                                 }
                             }
                             _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.measure( this.findCalendarRange.bind( this, {}, input ) );
                             if( this.data.ltPropPreventSelection ){
                                 return;
                             }
                             // start = input.selectionStart;
                             // end = input.selectionEnd;
                             evt.preventDefault();
                         }
                     }
                     // restore current selection
                     // $L.fastdom.mutate(function(){
                         input.selectionStart = start;
                         input.selectionEnd = end;
                     // })
                  }
              }
    }

    focusCallback(evt) {
         if( this.getMethods( 'onFocus' ) ) {
            /**
             * @method onFocus
             * @version 1.0.6
             */            
             this.executeMethod( 'onFocus', evt, this.$node )
         }
    }

    focusout() {
         if(!this.preventFocus){
             var cal = this.$node.calendarDiv;
             if( !cal || cal.classList.contains('lyteCalendarHidden') ) {
                 return
             }

             var data = this.data;

             if( data.navigation ){
                 return;
             }

             clearTimeout( this._hidecall );
             this._hidecall = setTimeout( this._hideCalendar.bind( this ), 0 );
         }else {
             delete this.preventFocus;
         }
    }

    maxLen(value) {

         var max = this.data.ltPropMaxlength;
         return max != undefined ? value.toString().match( new RegExp('.{0,' + max + '}') )[ 0 ] : value;
    }

    showCalendarAction(event, input) {
          var $node = this.$node;

         $node.classList.add( 'lyteInputFocus' )
         this.focusCallback.call( this, event );

         if( this.data.ltPropAria ){
             return;
         }

         if( _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( $node.calendarDiv ).hasClass( 'lyteCalendarHidden' ) || !this.data.ltPropBindToBody ){
             this.showCalendar( event, input );
         }
    }

    input_blur(event, flag) {

         var r_target = event.relatedTarget;

         if( this.data.ltPropAria && r_target && this.$node.contains( r_target ) ){
             return;
         }


         delete this._lasttyped;
         var ty = /date/i.test( this.data.ltPropType ), 
         mt = this.getMethods( 'onBlur' );

         if( ty ){
             if( r_target && this.data.ltPropHeaderType == "dropdown" ){
                 var drop = r_target.closest( 'lyte-drop-box' );
                 if( drop ){
                     var origindd = drop.origindd,
                     $node = this.$node,
                     wormhole = $node.calendarComp;

                     if( origindd && wormhole && wormhole.contains( origindd ) ){
                         return $node.focus();
                     }
                 }
             }

         }


         this.$node.classList.remove( 'lyteInputFocus' )
         if( !flag ) {
             var type = this.getData( 'ltPropType' )
             if( this._calmsfg ) {
                 this.valUpdate();
                 clearTimeout( this._blurcall );
                 this._blurcall = setTimeout( function(){
                     if( ty ){
                         this.focusout.call( this )
                     }
                     if( mt ) {
                         this.executeMethod( 'onBlur', event, this.$node )
                     }
                 }.bind( this ), 0)
                 delete this._calmsfg;
             } else {
                 if( type == "number" ) {
                     var max = this.data.ltPropMax,
                     min = this.data.ltPropMin,
                     value = parseFloat( event.target.value ),
                     happened = false;

                     if( !isNaN( value ) ){
                         if( [ undefined, null, '' ].indexOf( min ) == -1 && min.constructor == Number ){
                             value = Math.max( min, value );
                             happened = value == min;
                         } 
                         if( [ undefined, null, '' ].indexOf( max ) == -1 && max.constructor == Number ){
                             value = Math.min( max, value );
                             happened = happened || ( value == max );
                         }
                         if( happened ){
                             event.target.value = value;
                         }
                     }
                 }
                 this.valUpdate.call( this );
                 if( ty ){
                     this.focusout.call( this )
                 }
                 if( mt ) {
                    /**
                     * @method onBlur
                     * @version 1.0.6
                     */                            
                     this.executeMethod( 'onBlur', event, this.$node )
                 }
             }
         }
    }

    open_cal_for_icon(evt) {
         if(  _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node.calendarDiv ).hasClass( 'lyteCalendarHidden' ) || !this.data.ltPropBindToBody ){
             this.showCalendar( evt, this.$node.getElementsByTagName( 'input' )[ 0 ] );
         }
    }

    static actions(arg1) {
        return Object.assign(super.actions({

                calendarKey : function( evt ){
                    if( evt.key == "Escape" ){
                        this._hideCalendar( void 0, true );
                    }
                },

                togglePassword : function(){
                    this.setData( 'ltPropPasswordVisibility', !this.data.ltPropPasswordVisibility );
                },

                calIconClick : function( evt, __this ){
                    this.open_cal_for_icon( evt );
                },

                calIconFocus : function( evt, __this ){
                    var __rel = evt.relatedTarget;

                    if( __rel && this.$node.contains( __rel ) ){
                        return;
                    }

                    this.showCalendarAction( evt, __rel );
                },

                calIconBlur : function( evt ){

                    var __rel = evt.relatedTarget,
                    calendar = this._assCalendar;

                    if( !( calendar && __rel && calendar.contains( __rel ) ) ){
                        this._hideCalendar();
                    }

                    if( __rel && this.$node.contains( __rel ) ){
                        return;
                    }

                    this.input_blur( evt );
                },

                calIconKey : function( evt ){
                    switch( evt.key ){
                        case "Enter" :
                        case ' ' : {
                             this.open_cal_for_icon( evt );
                        }
                        break;
                    }
                },

                resizeSelect : function( evt ){
                    this.rsizefun( evt )
                },

                preventDrag : function( evt ){
                    evt.preventDefault();
                },

                clsIcon : function( evt ){
                    this.$node.ltProp( 'value', '' );
                    this.$node.focus();
                    if( this.data.isSearch ){
                        /**
                         * @event on-ip-clear
                         * @version 2.0.0
                         */                    
                        this.throwEvent( 'on-ip-clear', evt );
                    }
                    if( this.getMethods( 'onClear' ) ) {
                        /**
                         * @method onClear
                         * @version 2.0.0
                         */                    
                        this.executeMethod( 'onClear', evt, this.$node );
                    }
                },

                calmsdown : function( evt, _this ){
                    this._calmsfg = true;

                    var target = evt.target;

                    if( this.$node.calendarDiv.contains( target.correspondingElement || target ) ) {
                        this.preventFocus = true
                    }
                },

                 numberKeydown : function( evt, _this ){
                    var ff = /firefox/ig.test( window.navigator.userAgent );
                    if( !( window._lyteUiUtils.isAndroid && !( ff ) ) ) {
                        var key = evt.which || evt.keyCode, prev, value = _this.value, isIE = /rv:11/ig.test( window.navigator.userAgent );
                        if( /^(8|9|27|37|39|13|187|189)$/.test( key ) || ( ff && /^173$/i.test( key ) ) || ( key >= 48 && key <=57 ) || ( key >= 96 && key <= 105 ) || evt.metaKey || evt.ctrlKey || ( /^(38|40)$/.test( key ) && !isIE ) ){
                            return;
                        }
                        if( /^(69|190)$/.test( key ) ){
                            if( ( !/\./i.test( value ) && key == 190 ) || ( key == 69 && ( !/e/i.test( value ) && value != "" ) ) ) {
                                return;
                            }
                        }
                        evt.preventDefault();
                        if( key == 38 ){
                            value = Number( value || 0 ) + Number( _this.step );
                        } else if( key == 40 ) {
                            value = Number( value || 0 ) - Number( _this.step );
                        }
                        if( isIE && /^(38|40)$/.test( key ) ){
                            var newVal = parseInt( this.maxLen( value ) );
                            if( !isNaN( newVal ) ) {
                                newVal = Math.min( Math.max( newVal, _this.min ? _this.min : -Infinity ), _this.max ? _this.max : Infinity );
                                if( !isNaN( newVal ) ) {
                                    _this.value = newVal;
                                }
                            }
                        }
                     }
                 },

                 numberPaste : function( evt, _this ) {
                    var clip = evt.clipboardData || window.clipboardData,
                    newVal = _this.value + clip.getData( 'text' ).replace(/\'|\"/g, '');
                    if( /^([0-9]+|\.(?!e){1,}|\+|\-)([0-9\.\e]{0,}$)/i.test( newVal ) ){
                        return;
                    }
                    if( newVal.length == this.maxLen( newVal ) && !/rv:11/ig.test( window.navigator.userAgent ) ){
                        return;
                    }
                    evt.preventDefault();
                 },

                 focusClass : function(evt){
                    this.$node.classList.add( 'lyteInputFocus' )
                    this.focusCallback.call( this, evt )
                 },

                 "blurThrow":function(event, flag){
                    this.input_blur( event, flag );
                 },

                 input : function( evt, _this ){
                    if( this.data.ltPropType == 'number' ){
                        var value = _this.value, newVal1 = this.maxLen( value ), newVal;
                        newVal = Math.min( newVal1, _this.max != undefined && _this.max != '' ? _this.max : Infinity )
                        if( value !== newVal1 || newVal1 != newVal ){
                            if( newVal1 == newVal ) {
                                _this.value = newVal1;
                            } else if ( isNaN( newVal ) ){
                                _this.value = parseFloat( newVal1 );
                            } else {
                                _this.value = newVal;
                            }
                        }
                    }
                    if(this.getData('ltPropAutoUpdate')){
                        clearTimeout( this._iptime );
                        var updly = this.data.ltPropUpdateDelay;
                        if( updly != undefined ){
                            this._iptime = setTimeout( this.valUpdate.bind( this ), updly );
                        } else {
                            this.valUpdate.call( this );
                        }
                    }
                 },

                 "showcalendar":function(event, input){
                    this.showCalendarAction( event, input );
                 },

                 calendarClick : function(evt, input){
                    
                    var __focus = this._focus,
                    __data = this.data;

                    if( __focus && window._lyteUiUtils.isMobile || ( __data.ltPropReadonly && !__data.ltPropPreventKeys ) ){      
                        delete this._focus;     
                        return;     
                    }
                    if( !__focus && /date/i.test( __data.ltPropType ) && !this._prevclick ){
                        
                        var calendar_elem = this.$node.calendarDiv;

                        if( !this.data.ltPropAria && ( !calendar_elem || _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( calendar_elem ).hasClass( 'lyteCalendarHidden' ) ) ){
                            this.showCalendar( evt, input);
                        }
                    }
                    this.findCalendarRange(evt, input);
                 },

                 calendarKeydown : function(){
                    this.calendarKeydown.apply(this, arguments)
                 },

                 timeBlur : function(evt, input){
                    if( this._emptytimeValue && input.value ){
                        this.checkTimeStr( input, true );
                    } else if( this.data.ltPropValidateOnBlur && !this._emptytimeValue ){
                        var ret = this._getCrctHour( input.value, this.data.ltPropTimeFormat, this.data.meridian );
                        this.setData( 'ltPropDefaultTime', ret ? ret : this._findNearest( input.value, this.data.ltPropTimeFormat ) );
                    }
                    this.$node.classList.remove( 'lyteInputFocus' )
                    this.setData('selectedField', {});
                    if( this.getMethods( 'onBlur' ) ) {
                        if( this._calmsfg ){
                            this.executeMethod( 'onBlur', evt, this.$node )
                        } else {
                            setTimeout( function(){ 
                                this.executeMethod( 'onBlur', evt, this.$node )
                            }.bind( this ), 0 )
                        }
                    }
                 },

                 timeInput : function( _this ){
                    if( this._emptytimeValue ){
                        this.checkTimeStr( _this );
                    } else {
                        var value = _this.value || "",
                        format = this.data.ltPropTimeFormat,
                        form,
                        meridian = this.data.meridian;
                        if( format == 12 ){
                            form = "hh:mm A";
                            value = value.replace( meridian.AM, 'AM' ).replace( meridian.PM, 'PM' );
                        } else {
                            form = "HH:mm";
                        }
                        if( value && (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment) && !_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( value, form ).validate() ){
                            _this.value = this.data.ltPropDefaultTime;
                        }
                    }

                 },

                 timeFocus : function(evt, input){
                    this.$node.classList.add( 'lyteInputFocus' )
                    var value = input.value.trim();
                    this.setData('selectedField', {prop : 'hour', val : 0});
                    input.selectionStart = 0;
                    this.fixSelection.call(this, 0, {prop : 'hour', val : 0}, input);
                    this.focusCallback.call( this, evt )
                 },

                 timeKeydown : function(evt, input){
                    if( this.data.ltPropReadonly || this._emptytimeValue ){
                        return;
                    }


                    if( /enter/i.test( evt.key ) ){
                        if( this.data.ltPropAria && _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.dropbox ).hasClass( 'lyteDropdownHidden' ) ){
                            this.open_dropdown();
                            // evt.preventDefault();
                            evt.stopPropagation();
                            evt.stopImmediatePropagation();
                        }
                        return;
                    }


                    var selectedField = this.getData('selectedField'), meridian = this.getData('meridian'), timeFormat = this.getData('ltPropTimeFormat'), flag = true, oriDrop = this.getData('originalData'), rendered = this.getData('dropdownData'),
                    keyCode = window._lyteUiUtils.getCorrectNumberCode( evt.which || evt.keyCode ),
                    prev_nav = this.data.ltPropPreventDropdownNavigation,
                    is_drop_open =  this.dropbox && !_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.dropbox ).hasClass( 'lyteDropdownHidden' );

                    if( !prev_nav && is_drop_open && /38|40|13/.test( keyCode ) ){
                        return;
                    }

                    if( prev_nav && is_drop_open && /38|40/.test( keyCode ) ){
                        evt.stopPropagation();
                    }

                    if(selectedField.prop && !( evt.ctrlKey || evt.metaKey ))
                        {
                            var start = input.selectionStart, end = input.selectionEnd;
                            if(start == end){
                                this.timeClick( {}, input, start );
                                start = input.selectionStart, end = input.selectionEnd;
                                selectedField = this.getData('selectedField');
                            } else {
                                if( start == 0 && end == input.value.length ){
                                    start = 0;
                                    end = 2;
                                    this.timeClick(  {}, input, start );
                                    selectedField = this.getData( 'selectedField' );
                                }
                            }
                            var dontcall;
                            if(keyCode != 9){
                                evt.preventDefault();
                            }
                            if([9, 37, 39].indexOf(keyCode) != -1){
                                if((evt.shiftKey || keyCode == 37) && selectedField.prop != 'hour' && keyCode != 39){
                                    this.fixSelection.call(this, -3, selectedField, input);
                                    evt.preventDefault();
                                    dontcall = true;
                                }
                                else if((((!evt.shiftKey || keyCode == 39) && selectedField.prop != 'minute' && timeFormat == 24) || (!evt.shiftKey && selectedField.prop != 'meridian' && timeFormat == 12)) && keyCode != 37){
                                    this.fixSelection.call(this, 3, selectedField, input);
                                    evt.preventDefault();
                                    dontcall = true;
                                }
                                flag = false;

                            }else if(keyCode >=48 && keyCode <= 57 && selectedField.prop != 'meridian'){
                                if(selectedField.prop == 'hour'){
                                    this.hourTimeSet.call(this, input, evt, "hour", start, end);
                                }else if(selectedField.prop == 'minute'){
                                    this.hourTimeSet.call(this, input, evt, 'minute', start, end);
                                }
                                this.data.ltPropDropdown && this.constructNewDrop(input, timeFormat);
                            }else if((keyCode == 38 || keyCode == 40) && selectedField.prop != 'meridian'){
                                if(keyCode == 38){
                                    this.timeIncrease.call(this, input, evt, selectedField.prop, start, end);
                                }
                                else{
                                    this.timeDecrease.call(this, input, evt, selectedField.prop, start, end);
                                }
                                flag = false;
                                dontcall = true;
                            }else if(selectedField.prop == 'meridian'){
                                var val = input.value.trim().slice(6,input.value.length), final, key = String.fromCharCode(keyCode).toUpperCase();
                                if(meridian.PM.toUpperCase().indexOf(key) == 0){
                                    val = meridian.PM;
                                }else if(meridian.AM.toUpperCase().indexOf(key) == 0){
                                    val = meridian.AM;
                                }
                                else if([38, 40].indexOf(keyCode) != -1){
                                    if(val == meridian.PM){
                                        val = meridian.AM
                                    }else{
                                        val = meridian.PM
                                    }
                                }
                                if(val != meridian.AM){
                                //  if(input.value.trim().slice(0, 2) == '12'){
                                //      final = this.replaceVal.call(this, input, '00', 0, 2);
                                //  }
                                // }else{
                                    if(input.value.trim().slice(0, 2) == '00'){
                                        final = this.replaceVal.call(this, input, '12', 0, 2);
                                    }
                                }
                                if(val){
                                    final = this.replaceVal.call(this, final ? final : input, val, start, end);
                                }
                                if( !this.data.ltPropValidateOnBlur ){
                                    var returnV = this.maxValCheck(final);
                                    if(returnV == false){
                                        return false;
                                    }
                                }
                                this.setData('ltPropDefaultTime', final);
                                flag = false;
                            }
                            !dontcall && this.fixSelection.call(this, 0, this.getData('selectedField'), input);
                         if(flag)
                            {
                                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().fastdom.mutate(function(){
                                    // restore current selection
                                    input.selectionStart = start;
                                    input.selectionEnd = end;
                                })
                            }
                         if(oriDrop.length != rendered.length && (keyCode < 48 || keyCode > 57)){
                            this.dropdown.ltProp( 'selected', '' );
                            this.setData('dropdownData', oriDrop);
                            this.dropdown.ltProp( 'selected', this.data.ltPropDefaultTime );
                         }  
                      } else if( /^8|46$/i.test( keyCode ) ) {
                        evt.preventDefault();
                      }
                 },

                 timeClick : function(){
                    this.timeClick.apply(this, arguments)
                 }
         }), arg1);
    }

    checkTimeStr(_this, frmblur) {
       if( this._emptytimeValue ){
           var value = _this.value || "",
           format = this.data.ltPropTimeFormat,
           form,
           meridian = this.data.meridian;
           if( format == 12 ){
               form = "hh:mm A";
               value = value.replace( meridian.AM, 'AM' ).replace( meridian.PM, 'PM' );
           } else {
               form = "HH:mm";
           }
           if( value && _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( value, form ).validate() ){
               var ret = this._getCrctHour( _this.value, format, meridian );
               this.setData( 'ltPropDefaultTime', ret ? ret : this._findNearest( _this.value, format ) );
               delete this._emptytimeValue;
           } else if( value && frmblur ){
               if( this.data.ltPropStartTime == this.data.ltPropDefaultTime ){
                   this.setData( 'ltPropDefaultTime', "" );
               }
               this.setData( 'ltPropDefaultTime', this.data.ltPropStartTime );
               delete this._emptytimeValue;
           }
       }
    }

    check_dst(arr, check, return_value) {
       var Lc = this.$addon.objectUtils,
       moment = (_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment),
       _this = this,
       data = _this.data,
       date = data.ltPropCurrentDate,
       format = data.ltPropFormat,
       timeFormat = data.ltPropTimeFormat == 12,
       __format = timeFormat ? 'hh:mm A' : 'HH:mm',
       fn = function( item ){            
           return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( date + ' ' + item.time, format + ' ' + __format ).format( __format ) != item.time;
       },
       common = function( item ){
           if( item.className ){
               Lc( item, 'delete', 'className' );
           }
       };

       if( !moment ){
           return;
       }

       if( check ){
           if( date ){
               var __moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( date + ' ' + arr, format + ' ' + __format  );
               if( return_value ){
                   return __moment.format( __format );
               }
               return __moment;
           }
           if( return_value ){
               return arr;
           }
           return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default().moment( arr, __format  );
       }

       if( date ){
           arr.forEach( function( item ){
               if( fn( item ) ){
                   if( !item.className ){
                       Lc( item, 'add', 'className', 'lyteDropdownActive' );
                   }
               } else {
                   common( item );
               }
           });
       } else {
           arr.forEach( common );
       }
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            textareaFuncObs : function(){
                var __this = this,
                __data = __this.data;

                if( __data.ltPropType == "textarea" ){
                    var resize = __data.ltPropTextAreaResize,
                    __horizontal = resize.horizontal,
                    __vertical = resize.vertical,
                    to_value = ( __horizontal || __vertical ),
                    __class = "lyteTextareaResize",
                    vert = 'lyteTextareaResizeVertical',
                    hori = 'lyteTextareaResizeHorizontal';

                    this.setData( 'resize', to_value );

                    if( !to_value ){
                        _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node ).addClass( 'lyteTextareaNoResize' );
                    }

                    if( __horizontal && !__vertical ){
                        __class += ( " " + hori );
                    } else if( __vertical && !__horizontal ){
                        __class += ( " " + vert );
                    }

                    this.setData( 'resizeClass', __class )
                }
            }.observes( 'ltPropTextAreaResize', 'ltPropTextAreaResize.{}' ).on( 'didConnect' ),

            btobody : function( arg ){
                if( !arg.newValue ){
                    delete this.$node.revertToToday;
                }
            }.observes( 'ltPropBindToBody' ),

            disAbs : function(){
                this.$node.classList[ this.data.ltPropDisabled ? 'add' : 'remove' ]( 'lyteInputDisabled' );
            }.observes( 'ltPropDisabled' ).on( 'didConnect' ),

            readAbs : function(){
                this.$node.classList[ this.data.ltPropReadonly ? 'add' : 'remove' ]( 'lyteInputReadonly' );
            }.observes( 'ltPropReadonly' ).on( 'didConnect' ),

            heightFuncObs : function( arg ){
                this.heightFunc();
            }.observes('ltPropHeight').on('didConnect'),

            widthfunObs : function(){
                this.widthfun();
            }.observes( 'ltPropWidth' ).on( 'didConnect' ),

            appearanceFunObs : function(){
                this.appearanceFun();
            }.observes('ltPropAppearance').on('didConnect'),

            directionfunObs : function(){
                this.directionfun();
            }.observes('ltPropDirection').on('didConnect'),

            input_wrap_obs : function( arg ){
                var oldValue = ( arg || { oldValue : "" } ).oldValue,
                newValue = this.data.ltPropInputWrapperClass,
                __$node = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node );

                __$node.removeClass( oldValue ).addClass( newValue );

                if( !arg && this.data.ltPropAria && /date/i.test( this.data.ltPropType ) ){
                    __$node.addClass( "lyteInputWithCalendarIcon" );
                }

            }.observes( 'ltPropInputWrapperClass' ).on( 'didConnect' ),

            focusObs : function(){
                var __data = this.data,
                $node = this.$node;

                if( __data.ltPropFocus ){
                    $node.focus();
                    
                    if( __data.ltPropFocusAtEnd ){
                        var elem = $node.getElementsByTagName( __data.ltPropType == "textarea" ? "textarea" : "input" )[ 0 ];

                        if( elem ){
                            window.requestAnimationFrame( function(){
                                elem.selectionStart = elem.value.length;
                            } );
                        }
                    }
                }
                // this.data.ltPropFocus = false
                $node.ltProp( 'focus', false );

            }.observes( 'ltPropFocus').on( 'didConnect' ),

            boxObs : function( arg ){
                var type = this.data.ltPropType,
                appearance = this.data.ltPropAppearance;

                if( type == "search" && appearance == "box" ){
                    this.setData( 'isBox', 'lyteInputBoxSearch' );
                } else {
                    this.setData( 'isBox', '' );
                }

                if( arg && arg.item == "ltPropType" ){
                    this.didDestroy( true );
                    this.init( true );
                    this.didConnect( true );
                }

            }.observes( 'ltPropType', 'ltPropAppearance' ).on( 'init' ),

            dateRegexObs : function( arg ){
                this.dateRegexFind( arg );
            }.observes('ltPropFormat'),

            timeFormatChange : function(){
                this.timeInValChange();
            }.observes('ltPropTimeFormat'),

            wheelObs : function(arg){
                if(arg.newValue){
                    this.$node.addEventListener('wheel', this.getData('eventListeners.timeWheel'));
                }else{
                    this.$node.removeEventListener('wheel', this.getData('eventListeners.timeWheel'));
                }
            }.observes('ltPropWheel'),

            timeBoundObs : function(arg){
                if(arg &&  arg.newValue == "" && arg.oldValue == undefined) {
                    return
                }
                if(!arg || (arg && arg.item != 'ltPropDefaultTime')){
                    this.startEndTimeObs(arg);
                }else{
                    if( arg && !arg.newValue ){
                        this.timeInValChange();
                        return;
                    }
                    if(this.setData('preventObs')){
                        this.setData('ltPropValue', arg.newValue);
                    }

                    this.englishTime();

                    if(this.getMethods('onTimeChange')){
                       /**
                        * @method onTimeChange
                        * @version 1.0.2
                        * @condition ltPropType time,datetime
                        */                
                        this.executeMethod('onTimeChange', arg, this.$node);
                    }
                    this._manualset = true;
                    if( this.data.ltPropType == 'time' ) {
                        this.setData( 'ltPropValue', arg.newValue )
                    } else {
                        this.checkCommonPlaceHolder();
                    }
                    delete this._manualset;
                }
            }.observes('ltPropStartTime', 'ltPropEndTime', 'ltPropDefaultTime'),

            dateChangeCallback : function( arg ){

                var __type = this.data.ltPropType;

                if( this.data.ltPropTimezoneHandling ){
                    this.check_dst( this.data.originalData );

                    var default_time = this.data.ltPropDefaultTime;

                    if( default_time ){
                        this.setData( 'ltPropDefaultTime', this.check_dst( default_time, 1, 1 ) );
                    }

                    if( __type == "time" ){
                        return;
                    }
                }

                var callDelay = this.data.ltPropCallbackDelay;

                this._manualset = true;
                if( __type ) {
                    this.setData( 'ltPropValue', arg.newValue )
                } 
                delete this._manualset;
                if( callDelay == undefined ){
                    this.dateCallback( arg );
                } else {
                    clearTimeout( this.__datachange );
                    this.__datachange = setTimeout( this.dateCallback.bind( this ), callDelay, arg );
                }
                this.checkCommonPlaceHolder();
            }.observes('ltPropCurrentDate'),

            valChangeObs : function(arg){
                var callDelay = this.data.ltPropCallbackDelay;
                if( !this._manualset ){
                    var tp = this.data.ltPropType;
                    if( tp == 'date' ) {
                        this.setData( 'ltPropCurrentDate', arg.newValue );
                    } else if( tp == "time" ) {
                        this.setData( 'ltPropDefaultTime', arg.newValue );
                    }
                }
                if( callDelay == undefined ){
                    this.timeCallback( arg );
                } else {
                    clearTimeout( this.__valuechange );
                    this.__valuechange  = setTimeout(this.timeCallback.bind(this), callDelay , arg);
                }
            }.observes('ltPropValue'),

            firePosCallBack: function() {

                var calendar = this.$node.calendarDiv,
                pos = this.data.pos;

                _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( calendar ).removeClass( 'lyteInputCalendarUp lyteInputCalendarDown' ).addClass( 'lyteInputCalendar' + ( /up/i.test( pos ) ? 'Up' : 'Down' ) );

                if( this.getMethods( 'onPositionChanged' )) {
                   /**
                    * @method onDateChange
                    * @version 1.0.6
                    * @condition ltPropType time,datetime
                    */            
                    this.executeMethod( 'onPositionChanged', pos, calendar );
                }
            }.observes('pos'),

            password_obs : function( arg ){

                 var __data = this.data,
                 __visibility = __data.ltPropPasswordVisibility;

                 if( __data.ltPropType == "password" && __data.ltPropPasswordIcon ){
                     this.setData({
                         passwordClass : 'lyteInput' + ( __visibility ? 'Hide' : "Show" ) + 'PasswordIcon',
                         passwordTooltip : __data.ltPropPasswordTooltip[ __visibility ? "hide" : "show" ],
                         ltPropFocus : true
                     });

                     var __input = this.$node.getElementsByTagName( "input" )[ 0 ];

                     __input.setAttribute( "type", __visibility ? "text" : "password" );
                     window.requestAnimationFrame( function(){
                         __input.selectionStart = __input.selectionEnd = __input.value.length;
                     });

                     if( !arg ){
                         _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( this.$node ).addClass( 'lyteInputWithPasswordToggleButton' );
                     }
                 }

            }.observes( 'ltPropPasswordVisibility' ).on( 'didConnect' ),

            attrObs : function( arg ){

               var data = this.data;

               if( data.ltPropAria ){
                   var elems = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( "input,textarea", this.$node ),
                   aria1 = "ltPropAriaAttributes",
                   aria2 = "ltPropTimeAriaAttributes";

                   if( !arg || arg.item == aria1 ){
                       window._lyteUiUtils.setAttribute( elems.get( 0 ), data[ aria1 ] || {}, arg ? arg.oldValue : {} )
                   }

                   if( data.ltPropType == "datetime" && ( !arg || arg.item == aria2 ) ){
                       window._lyteUiUtils.setAttribute( elems.get( 1 ), data[ aria2 ] || {}, arg ? arg.oldValue : {} )
                   }
               }

            }.observes( 'ltPropAriaAttributes', 'ltPropAriaAttributes.{}', 'ltPropTimeAriaAttributes' ).on( 'didConnect' ),

            single_obs : function( arg ){

               if( !arg.path ){
                   return;
               }

               var key = arg.path.replace( /^\./, '' ),
               newValue = arg.newValue,
               data = this.data;

               if( data.ltPropAria ){
                   var obj = {};
                   obj[ key ] = newValue;

                   window._lyteUiUtils.setAttribute( _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_2___default()( 'input,textarea', this.$node ).get( /time/i.test( arg.item ) ? -1 : 0 ), obj, {} );
               }

            }.observes( 'ltPropAriaAttributes.*', 'ltPropTimeAriaAttributes.*' )
        }), arg1);
    }

    _() {
        _;
    }
}

LyteInputComponent._template = "<template tag-name=\"lyte-input\"> <template is=\"switch\" value=\"{{ltPropType}}\"> <template case=\"password\" is=\"case\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField {{if(ltPropValue,'ltIconShow','')}} {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <input pattern=\"{{ltPropPattern}}\" data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"{{ltPropType}}\" value=\"{{lbind(ltPropValue)}}\" id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" maxlength=\"{{ltPropMaxlength}}\" name=\"{{ltPropName}}\" placeholder=\"{{ltPropPlaceholder}}\" autocomplete=\"{{ltPropAutocomplete}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" style=\"{{ltPropStyle}}\" readonly=\"{{ltPropReadonly}}\" onfocus=\"{{action('focusClass',event)}}\" onblur=\"{{action('blurThrow',event)}}\" title=\"{{ltPropInputTitle}}\" oninput=\"{{action('input',event)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropPasswordIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteInputPasswordToggleIcon {{passwordClass}}\" lt-prop-tooltip-config=\"{{ltPropTooltipConfig}}\" lt-prop-title=\"{{passwordTooltip}}\" onclick=\"{{action('togglePassword')}}\"></span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropCloseIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"inputCloseIcon\" onclick=\"{{action('clsIcon',event)}}\" style=\"{{if(ltPropValue,'display: block;','display: none;')}}\"></span> </template></template> </div> </template> <template case=\"number\" is=\"case\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField {{if(ltPropValue,'ltIconShow','')}} {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <input pattern=\"{{ltPropPattern}}\" data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"number\" value=\"{{lbind(ltPropValue)}}\" id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" maxlength=\"{{ltPropMaxlength}}\" name=\"{{ltPropName}}\" placeholder=\"{{ltPropPlaceholder}}\" autocomplete=\"{{ltPropAutocomplete}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" style=\"{{ltPropStyle}}\" onkeydown=\"{{action('numberKeydown',event,this)}}\" onfocus=\"{{action('focusClass',event)}}\" onblur=\"{{action('blurThrow',event)}}\" step=\"{{ltPropStep}}\" max=\"{{ltPropMax}}\" min=\"{{ltPropMin}}\" title=\"{{ltPropInputTitle}}\" onpaste=\"{{action('numberPaste',event,this)}}\" oninput=\"{{action('input',event,this)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropCloseIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"inputCloseIcon\" onclick=\"{{action('clsIcon',event)}}\" style=\"{{if(ltPropValue,'display: block;','display: none;')}}\"></span> </template></template> </div> </template> <template case=\"textarea\" is=\"case\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <textarea autocomplete=\"{{ltPropAutocomplete}}\" pattern=\"{{ltPropPattern}}\" data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" value=\"{{lbind(ltPropValue)}}\" rows=\"{{ltPropRows}}\" cols=\"{{ltPropCols}}\" maxlength=\"{{ltPropMaxlength}}\" name=\"{{ltPropName}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" style=\"{{ltPropStyle}}\" onfocus=\"{{action('focusClass',event)}}\" onblur=\"{{action('blurThrow',event)}}\" title=\"{{ltPropInputTitle}}\" oninput=\"{{action('input',event)}}\"></textarea> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{resize}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"{{resizeClass}}\" onmousedown=\"{{action('resizeSelect',event)}}\" ontouchstart=\"{{action('resizeSelect',event)}}\"></span> </template></template> </div> </template> <template case=\"date\" is=\"case\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <input pattern=\"{{ltPropPattern}}\" data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"text\" id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" name=\"{{ltPropName}}\" placeholder=\"{{ltPropPlaceholder}}\" autocomplete=\"{{ltPropAutocomplete}}\" value=\"{{lbind(ltPropCurrentDate)}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" onkeydown=\"{{action('calendarKeydown',event,this)}}\" onclick=\"{{action('calendarClick',event,this)}}\" onfocus=\"{{action('showcalendar',event,this)}}\" onblur=\"{{action('blurThrow',event)}}\" style=\"{{ltPropStyle}}\" title=\"{{ltPropInputTitle}}\" oninput=\"{{action('input',event)}}\" ondragstart=\"{{action('preventDrag',event)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropAria}}\" is=\"case\" lc-id=\"lc_id_0\"> <span aria-haspopup=\"true\" aria-label=\"{{ltPropAriaLabel.button}}\" disabled=\"{{ltPropDisabled}}\" aria-expanded=\"{{isExpanded}}\" aria-controls=\"#{{randomId}}\" class=\"lyteInputCalendarIcon\" onclick=\"{{action('calIconClick',event,this)}}\" onfocus=\"{{action('calIconFocus',event,this)}}\" onblur=\"{{action('calIconBlur',event,this)}}\" tabindex=\"{{ltPropTabIndex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" onkeydown=\"{{action('calIconKey',event)}}\"></span> </template></template> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropBindToBody}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-wormhole on-before-append=\"{{method('wormholeAppend')}}\" role=\"dialog\" aria-modal=\"true\" aria-label=\"{{ltPropAriaLabel.modal}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div id=\"lyteCalendar\" class=\"lyteInputCalendar lyteCalendarHidden {{ltPropCalendarClass}}\" onmousedown=\"{{action('calmsdown',event,this)}}\" onkeydown=\"{{action('calendarKey',event)}}\"> <lyte-calendar id=\"{{randomId}}\" lt-prop-fill-rows=\"{{ltPropFillRows}}\" lt-prop-number-of-rows=\"{{ltPropNumberOfRows}}\" lt-prop-yield=\"{{ltPropYield}}\" lt-prop-format=\"{{ltPropFormat}}\" lt-prop-end-date=\"{{lbind(ltPropEndDate)}}\" lt-prop-start-date=\"{{lbind(ltPropStartDate)}}\" lt-prop-current-date=\"{{lbind(ltPropCurrentDate)}}\" lt-prop-year=\"{{lbind(ltPropYear)}}\" lt-prop-month-header-format=\"{{ltPropMonthHeaderFormat}}\" on-date-selected=\"{{method('on-dateselected')}}\" lt-prop-min-date=\"{{ltPropMinDate}}\" lt-prop-max-date=\"{{ltPropMaxDate}}\" lt-prop-start-week-day=\"{{ltPropStartWeekDay}}\" lt-prop-header-type=\"{{ltPropHeaderType}}\" on-navigate=\"{{method('calendarNavigate')}}\" on-viewdate-change=\"{{method('viewDateChange')}}\" on-view-change=\"{{method('viewChange')}}\" lt-prop=\"{{stringify(ltPropCalendarProperties)}}\" lt-prop-activate-navigation=\"{{lbind(navigation)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"registerYield\" yield-name=\"footer\"> <lyte-yield yield-name=\"footer\"></lyte-yield> </template> </template></template> </lyte-calendar> </div> </template> </lyte-wormhole> </template></template> </template> <template case=\"datetime\" is=\"case\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{showPlaceholder}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteInputDateTimePlaceholder\">{{ltPropCommonPlaceholder}}</span> </template></template> <input autocomplete=\"{{ltPropAutocomplete}}\" data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"text\" class=\"{{ltPropClass}}\" id=\"date\" placeholder=\"{{ltPropPlaceholder}}\" value=\"{{lbind(ltPropCurrentDate)}}\" onkeydown=\"{{action('calendarKeydown',event,this)}}\" onclick=\"{{action('calendarClick',event,this)}}\" onfocus=\"{{action('showcalendar',event,this)}}\" onblur=\"{{action('blurThrow',event)}}\" oninput=\"{{action('input',event)}}\" ondragstart=\"{{action('preventDrag',event)}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropAria}}\" is=\"case\" lc-id=\"lc_id_0\"> <span aria-haspopup=\"true\" aria-label=\"{{ltPropAriaLabel.button}}\" disabled=\"{{ltPropDisabled}}\" aria-expanded=\"{{isExpanded}}\" aria-controls=\"#{{randomId}}\" class=\"lyteInputCalendarIcon\" onclick=\"{{action('calIconClick',event,this)}}\" onfocus=\"{{action('calIconFocus',event,this)}}\" onblur=\"{{action('calIconBlur',event,this)}}\" tabindex=\"{{ltPropTabIndex}}\" data-tabindex=\"{{ltPropDataTabindex}}\" onkeydown=\"{{action('calIconKey',event)}}\"></span> </template></template> <input autocomplete=\"{{ltPropAutocomplete}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"text\" placeholder=\"{{ltPropTimePlaceholder}}\" class=\"{{ltPropTimeClass}}\" value=\"{{ltPropDefaultTime}}\" id=\"time\" onblur=\"{{action('timeBlur',event,this)}}\" onfocus=\"{{action('timeFocus',event,this)}}\" onkeydown=\"{{action('timeKeydown',event,this)}}\" onclick=\"{{action('timeClick',event,this)}}\" style=\"{{ltPropStyle}}\" ondragstart=\"{{action('preventDrag',event)}}\" disabled=\"{{ltPropDisabled}}\" oninput=\"{{action('timeInput',this)}}\" readonly=\"{{ltPropReadonly}}\"> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropBindToBody}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-wormhole on-before-append=\"{{method('wormholeAppend')}}\" role=\"dialog\" aria-modal=\"true\" aria-label=\"{{ltPropAriaLabel.modal}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div id=\"lyteCalendar\" class=\"lyteInputCalendar lyteCalendarHidden {{ltPropCalendarClass}}\" onmousedown=\"{{action('calmsdown',event,this)}}\" onkeydown=\"{{action('calendarKey',event)}}\"> <lyte-calendar id=\"{{randomId}}\" lt-prop-fill-rows=\"{{ltPropFillRows}}\" lt-prop-number-of-rows=\"{{ltPropNumberOfRows}}\" lt-prop-yield=\"{{ltPropYield}}\" lt-prop-format=\"{{ltPropFormat}}\" lt-prop-end-date=\"{{lbind(ltPropEndDate)}}\" lt-prop-start-date=\"{{lbind(ltPropStartDate)}}\" lt-prop-current-date=\"{{lbind(ltPropCurrentDate)}}\" lt-prop-year=\"{{lbind(ltPropYear)}}\" lt-prop-month-header-format=\"{{ltPropMonthHeaderFormat}}\" on-date-selected=\"{{method('on-dateselected')}}\" lt-prop-min-date=\"{{ltPropMinDate}}\" lt-prop-max-date=\"{{ltPropMaxDate}}\" lt-prop-start-week-day=\"{{ltPropStartWeekDay}}\" lt-prop-header-type=\"{{ltPropHeaderType}}\" on-navigate=\"{{method('calendarNavigate')}}\" on-viewdate-change=\"{{method('viewDateChange')}}\" on-view-change=\"{{method('viewChange')}}\" lt-prop=\"{{stringify(ltPropCalendarProperties)}}\" lt-prop-activate-navigation=\"{{lbind(navigation)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"registerYield\" yield-name=\"footer\"> <lyte-yield yield-name=\"footer\"></lyte-yield> </template> </template></template> </lyte-calendar> </div> </template> </lyte-wormhole> </template></template> <lyte-dropdown class=\"lyteInputDateTimeDropdown\" lt-prop-position=\"{{ltPropPosition}}\" lt-prop-yield=\"true\" lt-prop-disabled=\"{{ltPropDropdownDisabled}}\" lt-prop-show=\"{{ltPropDropdownShow}}\" lt-prop-callout=\"{{ltPropDropdownCallout}}\" lt-prop-boundary=\"{{ltPropBoundary}}\" lt-prop-freeze=\"{{ltPropDropdownFreeze}}\" on-hide=\"{{method('hide')}}\" on-show=\"{{method('show')}}\" on-before-hide=\"{{method('beforeHide')}}\" on-before-show=\"{{method('beforeShow')}}\" on-option-selected=\"{{method('optionSelected')}}\" on-position-changed=\"{{method('positionChange')}}\" on-scroll=\"{{method('scroll')}}\" lt-prop-selected=\"{{ltPropDefaultTime}}\" lt-prop-animate=\"{{ltPropAnimate}}\" lt-prop-scope=\"{{ltPropScope}}\" lt-prop=\"{{stringify(ltPropDropdownProperties)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-button class=\"lyteInputDateTimeDropButton\"></lyte-drop-button> <lyte-drop-box id=\"{{ltPropDropdownId}}\" class=\"{{ltPropDropdownClass}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropHeaderYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-head> <lyte-yield yield-name=\"timeheader\"></lyte-yield> </lyte-drop-head> </template></template> <lyte-drop-body> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"><template items=\"{{dropdownData}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-drop-item data-value=\"{{item.time}}\" class=\"{{item.className}}\"> <lyte-yield yield-name=\"yield\" item-value=\"{{item}}\"></lyte-yield> </lyte-drop-item> </template> </template><template case=\"{{ltPropShowInterval}}\" is=\"case\" lc-id=\"lc_id_1\"><template items=\"{{dropdownData}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-drop-item data-value=\"{{item.time}}\" class=\"{{item.className}}\"> <span>{{item.time}}</span> <span style=\"opacity: 0.5;float: right;margin-left: 5px;\">{{item.interval}}</span> </lyte-drop-item> </template> </template><template default=\"\"><template items=\"{{dropdownData}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-drop-item data-value=\"{{item.time}}\" class=\"{{item.className}}\"> <span>{{item.time}}</span> </lyte-drop-item> </template> </template></template> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> </template> <template case=\"time\" is=\"case\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <input data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"text\" value=\"{{ltPropDefaultTime}}\" id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" maxlength=\"{{ltPropMaxlength}}\" name=\"{{ltPropName}}\" placeholder=\"{{ltPropPlaceholder}}\" autocomplete=\"{{ltPropAutocomplete}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" onblur=\"{{action('timeBlur',event,this)}}\" onfocus=\"{{action('timeFocus',event,this)}}\" onkeydown=\"{{action('timeKeydown',event,this)}}\" onclick=\"{{action('timeClick',event,this)}}\" style=\"{{ltPropStyle}}\" title=\"{{ltPropInputTitle}}\" ondragstart=\"{{action('preventDrag',event)}}\" oninput=\"{{action('timeInput',this)}}\"> </div> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropDropdown}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-dropdown class=\"lyteInputTimeDropdown\" lt-prop-position=\"{{ltPropPosition}}\" lt-prop-yield=\"true\" lt-prop-disabled=\"{{ltPropDropdownDisabled}}\" lt-prop-show=\"{{ltPropDropdownShow}}\" lt-prop-callout=\"{{ltPropDropdownShow}}\" lt-prop-boundary=\"{{ltPropBoundary}}\" lt-prop-freeze=\"{{ltPropDropdownFreeze}}\" on-hide=\"{{method('hide')}}\" on-show=\"{{method('show')}}\" on-before-hide=\"{{method('beforeHide')}}\" on-before-show=\"{{method('beforeShow')}}\" on-option-selected=\"{{method('optionSelected')}}\" on-position-changed=\"{{method('positionChange')}}\" on-scroll=\"{{method('scroll')}}\" lt-prop-selected=\"{{ltPropDefaultTime}}\" lt-prop-animate=\"{{ltPropAnimate}}\" lt-prop-scope=\"{{ltPropScope}}\" lt-prop=\"{{stringify(ltPropDropdownProperties)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-button class=\"lyteInputTimeDropButton\"></lyte-drop-button> <lyte-drop-box id=\"{{ltPropDropdownId}}\" class=\"{{ltPropDropdownClass}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropHeaderYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-drop-head> <lyte-yield yield-name=\"timeheader\"></lyte-yield> </lyte-drop-head> </template></template> <lyte-drop-body> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"><template items=\"{{dropdownData}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-drop-item data-value=\"{{item.time}}\" class=\"{{item.className}}\"> <lyte-yield yield-name=\"yield\" item-value=\"{{item}}\"></lyte-yield> </lyte-drop-item> </template> </template><template case=\"{{ltPropShowInterval}}\" is=\"case\" lc-id=\"lc_id_1\"><template items=\"{{dropdownData}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-drop-item data-value=\"{{item.time}}\" class=\"{{item.className}}\"> <span>{{item.time}}</span> <span style=\"opacity: 0.5;float: right;margin-left: 5px;\">{{item.interval}}</span> </lyte-drop-item> </template> </template><template default=\"\"><template items=\"{{dropdownData}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-drop-item data-value=\"{{item.time}}\" class=\"{{item.className}}\"> <span>{{item.time}}</span> </lyte-drop-item> </template> </template></template> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> </template></template> </template> <template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropLabel}}\" is=\"case\" lc-id=\"lc_id_0\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel {{ltPropLabelClass}}\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField{{if(ltPropValue,' ltIconShow','')}} {{isBox}} {{ltPropWrapperClass}}\" style=\"{{ltPropWrapperStyle}}\"> <input data-tabindex=\"{{ltPropDataTabindex}}\" tabindex=\"{{ltPropTabIndex}}\" type=\"text\" value=\"{{lbind(ltPropValue)}}\" id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" maxlength=\"{{ltPropMaxlength}}\" name=\"{{ltPropName}}\" placeholder=\"{{ltPropPlaceholder}}\" autocomplete=\"{{ltPropAutocomplete}}\" autofocus=\"{{ltPropAutofocus}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" onfocus=\"{{action('focusClass',event)}}\" onblur=\"{{action('blurThrow',event)}}\" style=\"{{ltPropStyle}}\" title=\"{{ltPropInputTitle}}\" pattern=\"{{ltPropPattern}}\" oninput=\"{{action('input',event)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropType,'==',&quot;search&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"searchIcon\"></span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropCloseIcon}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"inputCloseIcon\" onclick=\"{{action('clsIcon',event)}}\" style=\"{{if(ltPropValue,'display: block;','display: none;')}}\"></span> </template></template> </div>  </template> </template> </template>";;
LyteInputComponent._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1],"c":{"password":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[1],"cn":"password"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"password"},{"t":"a","p":[3,1],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"},"t":{"name":"type","dynamicValue":"ltPropType"}},"cn":"password"},{"t":"s","p":[3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"password"},{"t":"s","p":[3,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropValue","'display: block;'","'display: none;'"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"password"}]},"number":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"number"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"number"},{"t":"a","p":[3,1],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"},"value":{"name":"value","dynamicValue":"ltPropValue","isLbind":true}},"cn":"number"},{"t":"s","p":[3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropValue","'display: block;'","'display: none;'"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"number"}]},"textarea":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"textarea"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"textarea"},{"t":"a","p":[3,1],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"},"placeholder":{"name":"placeholder","dynamicValue":"ltPropPlaceholder"}},"cn":"textarea"},{"t":"s","p":[3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"textarea"}]},"date":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"date"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"date"},{"t":"a","p":[3,1],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"}},"cn":"date"},{"t":"s","p":[3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"date"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"r","p":[1],"dN":[{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1,1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"date"}]},"datetime":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":5,"sibl":[4],"cn":"datetime"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"datetime"},{"t":"s","p":[3,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":4,"sibl":[3],"cn":"datetime"},{"t":"a","p":[3,3],"cn":"datetime"},{"t":"s","p":[3,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":3,"sibl":[2],"cn":"datetime"},{"t":"a","p":[3,7],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"}},"cn":"datetime"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"s","p":[1,1,1],"c":{"lc_id_0":{"dN":[{"t":"r","p":[1],"dN":[{"t":"i","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1,1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"datetime"},{"t":"a","p":[7],"cn":"datetime"},{"t":"r","p":[7,1],"dN":[{"t":"cD","p":[1],"in":4,"sibl":[3]},{"t":"a","p":[3]},{"t":"s","p":[3,1],"c":{"lc_id_0":{"dN":[{"t":"i","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[3,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"i","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[0],"cn":"lc_id_1"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,0]},{"t":"tX","p":[1,3,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[3,3],"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0}],"dc":[4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"datetime"},{"t":"cD","p":[7],"in":0,"cn":"datetime"}]},"time":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":1,"sibl":[0],"cn":"time"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"time"},{"t":"a","p":[3,1],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"}},"cn":"time"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"r","p":[1,1],"dN":[{"t":"cD","p":[1],"in":4,"sibl":[3]},{"t":"a","p":[3]},{"t":"s","p":[3,1],"c":{"lc_id_0":{"dN":[{"t":"i","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2]},{"t":"s","p":[3,3,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"a","p":[1,1]},{"t":"i","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true},"lc_id_1":{"dN":[{"t":"a","p":[0],"cn":"lc_id_1"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,0]},{"t":"tX","p":[1,3,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"lc_id_1"}],"cdp":{"t":"a","p":[1]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0],"cn":"default"},{"t":"f","p":[0],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"lc_id_1":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0","lc_id_1"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"cD","p":[3,3],"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0}],"dc":[4,3,2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"time"}]}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[1],"cn":"default"},{"t":"a","p":[3],"a":{"style":{"name":"style","dynamicValue":"ltPropWrapperStyle"}},"cn":"default"},{"t":"a","p":[3,1],"a":{"style":{"name":"style","dynamicValue":"ltPropStyle"}},"cn":"default"},{"t":"s","p":[3,3],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"sibl":[0],"cn":"default"},{"t":"s","p":[3,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"a":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropValue","'display: block;'","'display: none;'"]}}},"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"default"}]},"dc":{"password":{},"number":{},"textarea":{},"date":{"dc":[0],"hc":true,"trans":true},"datetime":{"dc":[2,1,0],"hc":true,"trans":true},"time":{"dc":[0],"hc":true,"trans":true},"default":{}},"co":["password","number","textarea","date","datetime","time"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteInputComponent._observedAttributes = [
    "ltPropDisabled",
    "ltPropAutofocus",
    "ltPropAutocomplete",
    "ltPropMaxlength",
    "ltPropName",
    "ltPropPlaceholder",
    "ltPropReadonly",
    "ltPropValue",
    "ltPropWidth",
    "ltPropTabIndex",
    "ltPropType",
    "ltPropAppearance",
    "ltPropDirection",
    "ltPropLabel",
    "ltPropId",
    "ltPropClass",
    "ltPropStyle",
    "ltPropWrapperStyle",
    "ltPropHeight",
    "ltPropPattern",
    "ltPropInputTitle",
    "ltPropRows",
    "ltPropCols",
    "ltPropTextAreaResize",
    "ltPropMax",
    "ltPropMin",
    "ltPropStep",
    "ltPropTimeFormat",
    "ltPropHourInterval",
    "ltPropDefaultTime",
    "ltPropMinuteInterval",
    "ltPropDropdown",
    "ltPropShowInterval",
    "ltPropStartTime",
    "ltPropEndTime",
    "ltPropConvertToNearest",
    "ltPropValidateOnBlur",
    "ltPropFillRows",
    "ltPropNumberOfRows",
    "ltPropMinDate",
    "ltPropMaxDate",
    "ltPropStartWeekDay",
    "ltPropMonthHeaderFormat",
    "daysOfWeek",
    "ltPropYear",
    "ltPropFormat",
    "viewDate",
    "ltPropStartDate",
    "ltPropEndDate",
    "ltPropCurrentDate",
    "ltPropBindToBody",
    "ltPropCalendarClass",
    "ltPropHeaderType",
    "ltPropDropdownDisabled",
    "ltPropDropdownShow",
    "ltPropDropdownCallout",
    "ltPropDropdownFreeze",
    "ltPropDropdownId",
    "ltPropDropdownClass",
    "ltPropPosition",
    "ltPropBoundary",
    "ltPropWheel",
    "ltPropYield",
    "ltPropAnimate",
    "ltPropPreventSelection",
    "ltPropPreventKeys",
    "ltPropUpdateDelay",
    "ltPropAutoUpdate",
    "ltPropCallbackDelay",
    "ltPropCloseIcon",
    "ltPropTimePlaceholder",
    "ltPropCommonPlaceholder",
    "ltPropTimeClass",
    "ltPropAria",
    "ltPropAriaAttributes",
    "ltPropTimeAriaAttributes",
    "ltPropFocus",
    "ltPropCalendarProperties",
    "ltPropDropdownProperties",
    "ltPropScope",
    "ltPropHeaderYield",
    "ltPropConvertedDate",
    "ltPropConvertedTime",
    "ltPropPreventDropdownNavigation",
    "ltPropInputWrapperClass",
    "ltPropWrapperClass",
    "ltPropTimezoneHandling",
    "ltPropFocusAtEnd",
    "ltPropPasswordIcon",
    "ltPropPasswordVisibility",
    "ltPropPasswordTooltip",
    "ltPropTooltipConfig",
    "ltPropAriaLabel",
    "ltPropDataTabindex",
    "ltPropLabelClass",
    "eventListeners",
    "selectedField",
    "endMinute",
    "startMinute",
    "dropdownData",
    "originalData",
    "dateRange",
    "meridian",
    "hour",
    "min",
    "selectedDateField",
    "preventObs",
    "resize",
    "resizeClass",
    "pos",
    "isSearch",
    "isBox",
    "dateOrder",
    "showPlaceholder",
    "lyteUnbound",
    "randomId",
    "navigation",
    "passwordClass",
    "passwordTooltip",
    "isExpanded"
];

[ 'click', 'scroll', 'resize', 'orientationchange' ].forEach( function( item ){
    window.addEventListener( item, window._lyteInput, true ); 
} )

/**
 * @syntax Text
 * @attribute ltPropType=text
 * <lyte-input  lt-prop-type="text" lt-prop-placeholder="enter text here" lt-prop-label="Name"> </lyte-input>
 */

/**
 * @syntax Number
 * @attribute ltPropType=number
 * <lyte-input lt-prop-label="Age" lt-prop-type="number"  lt-prop-placeholder="Enter number here"> </lyte-input>
 */

/**
 * @syntax Textarea
 * @attribute ltPropType=textarea
 * <lyte-input lt-prop-type="textarea" lt-prop-id="lyteinput" lt-prop-placeholder="Enter your comments" lt-prop-label="Comments" lt-prop-rows="5" lt-prop-cols="80" > </lyte-input>
 */

/**
 * @syntax Date
 * @attribute ltPropType=date
 * <lyte-input lt-prop-type="date" lt-prop-id="lyteinput" lt-prop-format="MM/DD/YYYY" lt-prop-label="Select DOB" lt-prop-placeholder="Select your DOB" > </lyte-input>
 */

/**
 * @syntax Time
 * @attribute ltPropType=time
 * <lyte-input lt-prop-type="time" lt-prop-time-format=12 lt-prop-wheel=true lt-prop-label="Select Time" > </lyte-input>
 */

/**
 * @syntax Date Time
 * @attribute ltPropType=datetime
 * <lyte-input lt-prop-type="datetime" lt-prop-placeholder="Select Date" lt-prop-format="MM/DD/YYYY" lt-prop-label="Date & Time"  > </lyte-input>
 */

/**
 * @syntax Date Yielded
 * @attribute ltPropType=date
 * @attribute ltPropYield=true
 * <lyte-input lt-prop-type="date" lt-prop-yield = true lt-prop-format="MM/DD/YYYY" lt-prop-label="Select DOB" lt-prop-placeholder="Select your DOB" > 
 *     <template is = "registerYield" yield-name = "footer">
 *         calendar footer
 *     </template>
 * </lyte-input>
 */

/**
 * @syntax Time Yielded
 * @attribute ltPropType=time
 * @attribute ltPropYield=true
 * <lyte-input lt-prop-type="time" lt-prop-yield = true lt-prop-time-format=12 lt-prop-wheel=true lt-prop-label="Select Time" > </lyte-input>
 *     <template is = "registerYield" yield-name = "item">
 *         {{itemValue.time}}
 *     </template>
 * </lyte-input>
 */

/**
 * @syntax Date Time yielded
 * @attribute ltPropType=datetime
 * @attribute ltPropYield=true
 * <lyte-input lt-prop-type="datetime" lt-prop-yield = true lt-prop-placeholder="Select Date" lt-prop-format="MM/DD/YYYY" lt-prop-label="Date & Time"  > </lyte-input>
 *     <template is = "registerYield" yield-name = "item">
 *         {{itemValue.time}}
 *     </template>
 *     <template is = "registerYield" yield-name = "footer">
 *         calendar footer
 *     </template>
 * </lyte-input>
 */

/**
* @syntax Password
* @attribute ltPropType=password
* <lyte-input lt-prop-type="password" lt-prop-label="password" lt-prop-placeholder="Enter password here"> </lyte-input>
* </lyte-input>
*/

/**
* @syntax staticBuilder
* @attribute ltPropType=text
* <lyte-input lt-prop-type="text" lt-prop-placeholder="enter text here" lt-prop-label="Name"> </lyte-input>
*/


LyteInputComponent.register("lyte-input", {
    hash: "LyteInputComponent_11",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});

/***/ }),

/***/ 1658409:
/*!***************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-messagebox.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteMessageboxComponent": () => (/* binding */ LyteMessageboxComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_helpers_dev_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/helpers-dev.js */ 60488310);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_javascript_lyte_wormhole_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/javascript/lyte-wormhole.js */ 57986490);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js */ 19978124);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4__);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    },

    "prop": function() {
        return _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop;
    }
});







/**
 * Renders a messagebox
 * @component lyte-messagebox
 * @version 1.0.0
 * @dependencies lyte-wormhole
 * @methods onClose
 */

class LyteMessageboxComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    init() {
      var th = this;
      this.$node.alignMessageBox = function(){
        th.setData('onResizeBoolean' , true);
        th.computeOffsetImpl();
      }
    }

    data(arg1) {
        return Object.assign(super.data({

            /**
             * @componentProperty {success | error | warning | info} ltPropType
             * @version 1.0.0
             * @default success
             */
            "ltPropType":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default":"success"}),

            /**
             * @componentProperty {boolean} ltPropShow
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropShow":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default":false}),

            /**
             * @componentProperty {string} ltPropMessage
             * @version 1.0.0
             */
            "ltPropMessage":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropDuration
             * @version 1.0.0
             * @default 2000
             */
            "ltPropDuration":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default":"2000"}),
            /**
             * @typedef {object} offset
             * @property {string} left="center"
             * @property {string} top="center"
             * @property {string} right
             * @property {string} bottom
             */
            /**
             * @componentProperty {offset} ltPropOffset
             * @version 1.0.0
             */
            "ltPropOffset":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("object",{"default":null}),

            /**
             * @typedef {object} transition
             * @property {slideFromTop | fadeIn} animation="fadeIn"
             * @property {string} duration
             */
            /**
             * @componentProperty {transition} ltPropTransition
             * @version 1.0.0
             * @default { "animation" : "fadeIn", "duration" :"0.2s"}
             */
            "ltPropTransition":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("object",{"default":{"animation" : "fadeIn","duration" : "0.2s"}}),

            /**
             * @componentProperty {boolean} ltPropYield
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropYield":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default" : false}),

            /**
             * @componentProperty {string} ltPropClass
             * @version 1.0.0
             */
            "ltPropClass":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("string",{"default":""}),

            /**
             * @componentProperty {boolean} ltPropCloseManually
             * @version 3.0.X
             */
            "ltPropCloseManually":(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)("boolean",{"default": false}),
            "ltPropAriaRole" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('string' , {
                default : 'status'
            }),

            "onResizeBoolean" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean' , {
              'default' : false
            }),
            "ltPropShowCloseButton" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean' , {
                default : true
            }),
            
            "ltPropFocusOnClose" : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean' , {
                default : false
            })  
        }), arg1);
    }

    computeOffsetImpl() {
        var messageEle = this.actualMessageDiv;
        this.fastdomfn1 = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().fastdom.measure(function(){
            delete this.fastdomfn1;
            var messageElePosition = messageEle.getBoundingClientRect();
            // var offsetObj = this.$node.ltProp('offset');
            var offsetObj = Object.assign({},this.$node.ltProp('offset'));

            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            if(this.$node.ltProp('offset')){
                if(offsetObj.left === "center" || offsetObj.right === "center" || offsetObj.left == undefined || offsetObj.left == ""){
                    var offLeft = (w - messageElePosition.width)/2;
                    if(offLeft < 0){
                        offLeft = 20;
                    }
                    offsetObj.left = offLeft + "px";
                }
                if(offsetObj.top === "center" || offsetObj.bottom === "center"){
                    var offTop = (h - messageElePosition.height)/2;
                    if(offTop < 0){
                        offTop = 20;
                    }
                    offsetObj.top = offTop + "px";
                }
                if(offsetObj.right && offsetObj.right !== "center"){
                    if(offsetObj.right.indexOf("%") > -1){
                        offsetObj.left = w-(messageElePosition.width+(w/parseFloat(offsetObj.right)))+"px";
                    }
                    else{
                        offsetObj.left = w-(messageElePosition.width+parseFloat(offsetObj.right))+"px";
                    }
                }
                if(offsetObj.bottom && offsetObj.bottom !== "center"){
                    if(offsetObj.bottom.indexOf("%") > -1){
                        offsetObj.top = h-(messageElePosition.height+(h/parseFloat(offsetObj.bottom)))+"px";
                    }
                    else{
                        offsetObj.top = h-(messageElePosition.height+parseFloat(offsetObj.bottom))+"px";
                    }
                }
                if(!offsetObj.top){
                    offsetObj.top = 20;
                }
                this.fastdomfn2 = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().fastdom.mutate(function(){
                    delete this.fastdomfn2;
                    messageEle.style.left = parseFloat(offsetObj.left) + "px";
                    if(this.getData('ltPropTransition').animation === "slideFromTop"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = -1 * messageElePosition.height + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (parseFloat(offsetObj.top) + messageElePosition.height) +"px)";
                    } else if(this.getData('ltPropTransition').animation === "slideFromBottom"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = window.innerHeight + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (parseFloat(offsetObj.top) - window.innerHeight) +"px)";
                        // this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    } else {
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.top = parseFloat(offsetObj.top) + "px";
                    }
                    if(!this.getData('onResizeBoolean')){
                      this.showMessagebox();
                    }
                },this);
            }
            else{
                var offsetLeft="",offsetTop="";
                offsetLeft = (document.body.clientWidth - messageElePosition.width)/2;
                this.fastdomfn3 = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().fastdom.mutate(function(){
                    delete this.fastdomfn3;
                    messageEle.style.left = parseFloat(offsetLeft)+"px";
                    if(this.getData('ltPropTransition').animation === "slideFromTop"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = -1 * messageElePosition.height + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (messageElePosition.height + 20) +"px)";
                        // this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    } else if(this.getData('ltPropTransition').animation === "slideFromBottom"){
                        // messageEle.style.transitionDuration = this.getData('ltPropTransition').duration ? this.getData('ltPropTransition').duration : '0.2s';
                        messageEle.style.top = window.innerHeight + "px";
                        this.childComp.style.visibility = "visible";
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.transform = "translate(0px,"+ (messageElePosition.height + 20 - window.innerHeight) +"px)";
                        // this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    } else {
                        this.actualMessageDiv.style.visibility = "visible";
                        messageEle.style.top = "20px";
                    }
                    if(!this.getData('onResizeBoolean')){
                      this.showMessagebox();
                    }
                },this);
            }

        },this);
    }

    closeMessageBoxFn(checkWormhole) {
        this.setData('onResizeBoolean' , false);
        if(this.timeOutId){
            clearInterval(this.timeOutId);
            this.timeOutId = false;
        }
        if( this.childComp && document.contains( this.childComp ) ){
            this.childComp.remove();
        }
        delete this.actualMessageDiv;
        delete this.childComp;
        if(!checkWormhole && this.getMethods("onClose")){
            this.executeMethod("onClose",this);
        }
        window.removeEventListener('resize' , this.$node.alignMessageBox)
    }

    clearFastdom() {
        if(this.fastdomfn1){
            _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().fastdom.clear(this.fastdomfn1);
            delete this.fastdomfn1;
        }
        if(this.fastdomfn2){
            _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().fastdom.clear(this.fastdomfn2);
            delete this.fastdomfn2;
        }
        if(this.fastdomfn3){
            _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().fastdom.clear(this.fastdomfn3);
            delete this.fastdomfn3;
        }
    }

    showMessagebox() {
        // start = new Date().getTime();
        var duration = parseInt(this.getData("ltPropDuration"));
        var self = this;
        // if(self.actualMessageDiv && !self.getData('ltPropShow')){
        //     _lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
        // }
        this.timeOutId = setInterval(function(){
            clearInterval(self.timeOutId);
            // end = new Date().getTime();
            if(!self.$node || self.getData('ltPropCloseManually')){
                return;
            }
            if(self.getData('ltPropTransition').animation === "slideFromTop"){
                window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                self.actualMessageDiv.style.transform = "";
                setTimeout(function(){
                    if(self.$node){
                        self.setData("ltPropShow",false);
                    }
                },500);
            } else if(self.getData('ltPropTransition').animation === "slideFromBottom"){
                window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                self.actualMessageDiv.style.transform = "";
                setTimeout(function(){
                    if(self.$node){
                        self.setData("ltPropShow",false);
                    }
                },500);
            } else {
                window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                self.actualMessageDiv.classList.remove('lyteMessageBoxFadeIn');
                self.actualMessageDiv.classList.add('lyteMessageBoxFadeOut');
                setTimeout(function(){
                    if(self.$node){
                        self.setData("ltPropShow",false);
                    }
                },500);
            }
            self.timeOutId = false;
        },duration);
        window.addEventListener('resize' , this.$node.alignMessageBox)
    }

    didDestroy() {
        this.clearFastdom();
        if(this.actualMessageDiv){
            window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , this.actualMessageDiv)
        }
        if(this.timeOutId || this.getData('ltPropShow')){
            clearInterval(this.timeOutId);
            if(this.getData('ltPropTransition').animation === "slideFromTop" && this.actualMessageDiv){
                this.actualMessageDiv.style.transform = "";
	        	this.setData("ltPropShow",false);
        	} else if(this.getData('ltPropTransition').animation != "slideFromTop" && this.actualMessageDiv){
                this.actualMessageDiv.style.transform = "";
	        	this.setData("ltPropShow",false);
            } else { 
        		this.actualMessageDiv.classList.remove('lyteMessageBoxFadeIn');
        		this.actualMessageDiv.classList.add('lyteMessageBoxFadeOut');
	        	this.setData("ltPropShow",false);
        	}
            this.timeOutId = false;
            this.closeMessageBoxFn(true);
        }
        window.removeEventListener('resize' , this.$node.alignMessageBox)
    }

    static actions(arg1) {
        return Object.assign(super.actions({
            closeMessageBox : function(){
                clearInterval(this.timeOutId);
                this.timeOutId = false;
                var self = this;
                if(self.actualMessageDiv){
                    window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeClose' , self.actualMessageDiv)
                }
                if(self.getData('ltPropTransition').animation === "slideFromTop"){
                    self.actualMessageDiv.style.transform = "";
                    setTimeout(function(){
                        if(self.$node){
                            self.setData("ltPropShow",false);
                        }
                    },200);
                } else if(self.getData('ltPropTransition').animation === "slideFromBottom"){
                    self.actualMessageDiv.style.transform = "";
                    setTimeout(function(){
                        if(self.$node){
                            self.setData("ltPropShow",false);
                        }
                    },200);
                } else {
                    self.actualMessageDiv.classList.remove('lyteMessageBoxFadeIn');
                    self.actualMessageDiv.classList.add('lyteMessageBoxFadeOut');
                    setTimeout(function(){
                        if(self.$node){
                            self.setData("ltPropShow",false);
                        }
                    },500);
                }
                window.removeEventListener('resize' , this.$node.alignMessageBox)
            }
        }), arg1);
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            onBeforeShow : function(){},
            onShow:function(){},
            beforeWormholeAppend : function(arg){
                this.childComp = arg;
                this.actualMessageDiv = this.childComp.querySelector(".lyteMessageBox");
                this.actualMessageDiv.style.position = "fixed";
                // LyteComponent.appendChild(document.body,this.childComp);
            },
            afterWormholeAppend : function(arg){
                var dur = parseFloat(this.getData('ltPropTransition').duration)*100
                if(this.getData('ltPropDuration')){
                    dur = parseFloat(this.getData('ltPropDuration'))
                }
                var _this = this;
                if(this.getData('ltPropTransition').animation === "slideFromTop"){
                    this.actualMessageDiv.classList.add('lyteMessageBoxSlideFromTop');
                    this.computeOffsetImpl();
                    setTimeout(function(){
                        if(_this.getMethods("onShow")){
                            _this.executeMethod("onShow",_this.actualMessageDiv);
                        }
                    },dur)
                } else if(this.getData('ltPropTransition').animation === "slideFromBottom"){
                    this.actualMessageDiv.classList.add('lyteMessageBoxSlideFromBottom');
                    this.computeOffsetImpl();
                    setTimeout(function(){
                        if(_this.getMethods("onShow")){
                            _this.executeMethod("onShow",_this.actualMessageDiv);
                        }
                    },dur)
                } else {
                    this.computeOffsetImpl();
                    this.actualMessageDiv.classList.add('lyteMessageBoxFadeIn');
                    setTimeout(function(){
                        if(_this.getMethods("onShow")){
                            _this.executeMethod("onShow",_this.actualMessageDiv);
                        }
                    },dur)
                    // this.childComp.style.visibility = "visible";
                }
            }
        }), arg1);
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            setDuration : function(){
                var durationVal = this.$node.ltProp("duration");
                if(durationVal != ""){
                    this.setData("ltPropDuration",durationVal);
                }
                
            }.observes('ltPropDuration'),

            showToggled : function() {
                if(this.actualMessageDiv){
                    window._lyteUiUtils.dispatchEvent('lyteMessageboxBeforeOpen' , this.actualMessageDiv)
                }
                if(!(this.$node.ltProp("show"))){
                    this.closeMessageBoxFn();
                }
            }.observes('ltPropShow').on('didConnect')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteMessageboxComponent._template = "<template tag-name=\"lyte-messagebox\"> <template is=\"switch\" l-c=\"true\"><template is=\"case\" case=\"{{ltPropShow}}\" lc-id=\"lc_id_0\"><lyte-wormhole style=\"visibility: hidden\" on-before-append=\"{{method(&quot;beforeWormholeAppend&quot;)}}\" on-append=\"{{method(&quot;afterWormholeAppend&quot;)}}\" lt-prop-show=\"{{ltPropShow}}\" lt-prop-focus-on-close=\"{{ltPropFocusOnClose}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div class=\"{{lyteUiMsgBoxConcatClass(ltPropClass,ltPropType,'MessageIcon','lyteMessageBox')}} lytePopupZI\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropType}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteMessageBoxSymbol\"></span> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"lyteMessageBoxContent\" aria-live=\"polite\" role=\"{{ltPropAriaRole}}\"> <lyte-yield yield-name=\"messageboxYield\"></lyte-yield> </span> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\"><template is=\"case\" case=\"{{lyteUiIfEquals(ltPropMessage,'')}}\" lc-id=\"lc_id_0\"></template><template default=\"\"><div> <span class=\"lyteMessageBoxContent\" aria-live=\"polite\" role=\"{{ltPropAriaRole}}\">{{ltPropMessage}}</span> </div></template></template> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropShowCloseButton}}\" is=\"case\" lc-id=\"lc_id_0\"><span class=\"lyteMessageBoxClose\" onclick=\"{{action('closeMessageBox')}}\"></span></template></template> </div> </template> </lyte-wormhole></template></template> </template>";;
LyteMessageboxComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"r","p":[0,1],"dN":[{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1]},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1,1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[0,1],"cn":"default"},{"t":"tX","p":[0,1,0],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"s","p":[1,5],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0}],"dc":[1],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteMessageboxComponent._observedAttributes = [
    "ltPropType",
    "ltPropShow",
    "ltPropMessage",
    "ltPropDuration",
    "ltPropOffset",
    "ltPropTransition",
    "ltPropYield",
    "ltPropClass",
    "ltPropCloseManually",
    "ltPropAriaRole",
    "onResizeBoolean",
    "ltPropShowCloseButton",
    "ltPropFocusOnClose"
];

/**
 * @syntax nonYielded
 * <lyte-messagebox lt-prop-message = "This is a messagebox without yield.">
 * </lyte-messagebox>
 */

/**
* @syntax yielded
* <lyte-messagebox lt-prop-yield = true>
*     <template is = "registerYield" yield-name = "messageboxYield">
*         <span> Here is the text. </span>
*         <a href = "#"> Some link </a>
*     </template>
* </lyte-messagebox>
*/



LyteMessageboxComponent.register("lyte-messagebox", {
    hash: "LyteMessageboxComponent_15",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});


/***/ }),

/***/ 57986490:
/*!*************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/javascript/lyte-wormhole.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteWormholeComponent": () => (/* binding */ LyteWormholeComponent)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "prop": function() {
        return _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop;
    },

    "Component": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});




/**
 * This component is used to append a dom anywhere in the document
 * @component lyte-wormhole
 * @version 2.2.6
 * @methods onBeforeAppend,onAppend
 */


class LyteWormholeComponent extends _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super();
    }

    data(arg1) {
		return Object.assign(super.data({
			/**
			 * @componentProperty {string} ltPropQuery
			 * @version 2.2.6
			 */
			'ltPropQuery' : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'string' ),

			'ltPropAppendOnCreation': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 'default': true } ),

			'ltPropAppend': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)( 'boolean', { 'default': false } ),

			'ltPropShow' : (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean' , {	'default' : false }),

			'ltPropFocusOnClose':  (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('boolean' , {	'default' : false }),

			'stackMap': (0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__.prop)('object',{ default: {
				'LYTE-MODAL': 'modalStack',
				'LYTE-BETA-MODAL': 'betaModalStack',
				'LYTE-BETA-POPOVER': 'betaPopoverStack',
				'LYTE-POPOVER': 'popoverStack',
				'LYTE-MESSAGEBOX': 'messageboxStack',
				'LYTE-ALERT': 'alertStack',
				'LYTE-COLORBOX': 'colorboxStack'
			}})
		}), arg1);
	}

    didDestroy() {
		var utilObj = this.createUtilObj(this);
		this.handleRemovalFromStack( utilObj );

		this.parent = null;
		if( window._lyteUiUtils && 
				window._lyteUiUtils.popupStack && 
					window._lyteUiUtils.popupStack.globalStack && 
						window._lyteUiUtils.popupStack.globalStack.length <= 0 ){
						
			window._lyteUiUtils.popupStack=null;
		}
	}

    appendContent() {
		var ret, 
		outlet = this.data.ltPropQuery ? document.querySelector( this.data.ltPropQuery ) : document.body;

		if( !outlet ) {
			console.error( 'Provide valid outlet to append' );
			return;
		}

		if( this.getMethods( 'onBeforeAppend' ) && this.executeMethod( 'onBeforeAppend', this.$node, outlet ) == false ) {
			return;
		}
		this.parent = this.$node.parentElement;
		window._lyteUiUtils.appendChild( outlet, this.$node );
		this.appended = true;

		if( this.getMethods( 'onAppend' ) ) {
			this.executeMethod( 'onAppend', this.$node, outlet )
		}
	}

    bringContentBack() {
		window._lyteUiUtils.appendChild( this.parent, this.$node );
	}

    createUtilObj(wormhole) {
		var utilObj={};

		if(wormhole.parent){
			utilObj.parentElement=wormhole.parent;
		} else {
			utilObj.parentElement=wormhole.$node.parentElement;
		}
		utilObj.focusedElement=document.activeElement;
		utilObj.childElement = wormhole.$node;

		return utilObj;
	}

    popUtilObj(utilObj, stackName, wormhole) {
        var lyteSelf = this;
        if( !utilObj || !window._lyteUiUtils || !window._lyteUiUtils.popupStack || !window._lyteUiUtils.popupStack[stackName]){
			return;
		}

        if( window._lyteUiUtils.popupStack[stackName].length>=1){
			window._lyteUiUtils.popupStack[stackName].forEach(function(ele,ind){
					if(ele.parentElement==utilObj.parentElement){
						lyteSelf.$addon.arrayUtils( window._lyteUiUtils.popupStack[stackName], 'removeAt' , ind , 1 );
						return;
					}
			}.bind(wormhole));
		}
    }

    handleInsertionIntoStack(utilObj) {

			if( !utilObj || !utilObj.parentElement || !utilObj.parentElement.tagName ){
				return;
			}
			var tagName = utilObj.parentElement.tagName;
			var stackName = this.getData('stackMap')[tagName];

			this.$addon.arrayUtils( window._lyteUiUtils.popupStack.globalStack, 'push', utilObj);

			if( stackName ){
				this.$addon.arrayUtils( window._lyteUiUtils.popupStack[stackName], 'push', utilObj);
			}
	}

    handleRemovalFromStack(utilObj) {
        var lyteSelf = this;

        if( !window._lyteUiUtils || !window._lyteUiUtils.popupStack || !window._lyteUiUtils.popupStack.globalStack ){
			return;
		}
        if( !utilObj || !utilObj.parentElement || !utilObj.parentElement.tagName ){
			return;
		}

        var tagName = utilObj.parentElement.tagName;
        var stackName = this.getData('stackMap')[tagName];
        var lastActiveElement;

        if(window._lyteUiUtils.popupStack.globalStack.length >= 1){

			if( stackName ){
				this.popUtilObj( utilObj, stackName, this );
			}

			var focusElement, changeFocus=true;
			window._lyteUiUtils.popupStack.globalStack.forEach(function(ele,ind){
				if(ele.parentElement==utilObj.parentElement){
					if(ind<window._lyteUiUtils.popupStack.globalStack.length-1){
						changeFocus=false;
						window._lyteUiUtils.popupStack.globalStack[ind+1].focusedElement =	_lyteUiUtils.popupStack.globalStack[ind].focusedElement;
					}
					focusElement = lyteSelf.$addon.arrayUtils( window._lyteUiUtils.popupStack.globalStack , 'removeAt' , ind , 1 );
					return;
				}
			}.bind(this));

			if(focusElement && focusElement[0]){
				lastActiveElement= focusElement[0].focusedElement;
			}
			if(changeFocus && lastActiveElement && this.getData('ltPropFocusOnClose')){
					lastActiveElement.focus();	
			}
		}
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            initFunc: function() {

                if(!window._lyteUiUtils.popupStack){
                    window._lyteUiUtils.popupStack = {
                        globalStack:[],
                        modalStack:[],
                        betaModalStack:[],
                        betaPopoverStack:[],
                        popoverStack:[],
                        alertStack:[],
                        messageboxStack:[],
                        colorboxStack:[]
                    };
                }

                var utilObj = this.createUtilObj(this);

                if(this.$node.getData('ltPropShow')){
                    this.handleInsertionIntoStack( utilObj );
                }
                else {
                    this.handleRemovalFromStack( utilObj );
                }

            }.observes( 'ltPropQuery','ltPropShow' ).on('init'),

            didConnectFunc :function(){
                var appendOnCreation = this.getData( 'ltPropAppendOnCreation' );

                if( !appendOnCreation ) {
                    return ;
                }

                // this.appendContent();
                this.$node.ltProp( 'append', true );
            }.observes( 'ltPropQuery' ).on( 'didConnect' ),

            appendObserver: function() {
                var append = this.getData( 'ltPropAppend' );

                if( append ) {
                    this.appendContent();
                }
                else {
                    this.bringContentBack();
                }
            }.observes( 'ltPropAppend' )
        }), arg1);
    }

    _() {
        _;
    }
}

LyteWormholeComponent._template = "<template tag-name=\"lyte-wormhole\"> <lyte-yield yield-name=\"lyte-content\"></lyte-yield> </template>";;
LyteWormholeComponent._dynamicNodes = [{"t":"i","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[0]}];;

LyteWormholeComponent._observedAttributes = [
    "ltPropQuery",
    "ltPropAppendOnCreation",
    "ltPropAppend",
    "ltPropShow",
    "ltPropFocusOnClose",
    "stackMap"
];

/**
 * @syntax yielded
 * <lyte-wormhole>
 * 	  <template is = "registerYield" yield-name = "lyte-content">
 * 		 Some wormhole content
 *	  </template>
 * </lyte-wormhole>
 */



LyteWormholeComponent.register("lyte-wormhole", {
    hash: "LyteWormholeComponent_16",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});

/***/ }),

/***/ 49405404:
/*!*********************!*\
  !*** ./app-init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ 3548204);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "ErmApp": function() {
        return _app_js__WEBPACK_IMPORTED_MODULE_1__.ErmApp;
    }
});



var app = new _app_js__WEBPACK_IMPORTED_MODULE_1__.ErmApp({
    performance : true,
    debug : true
});




/***/ }),

/***/ 3548204:
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErmApp": () => (/* binding */ ErmApp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_addon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/addon.js */ 5888064);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 21984420);
/* harmony import */ var _data_store_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-store/db */ 85658738);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/component */ 57373778);
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router/router */ 99442756);
/* harmony import */ var _services_ServiceProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ServiceProvider */ 53025444);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Lyte": function() {
        return _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.Lyte;
    },

    "LyteUiComponentAddon": function() {
        return _node_modules_zoho_lyte_ui_component_addon_js__WEBPACK_IMPORTED_MODULE_2__.LyteUiComponentAddon;
    },

    "ErmDb": function() {
        return _data_store_db__WEBPACK_IMPORTED_MODULE_3__.ErmDb;
    },

    "ServiceProvider": function() {
        return _services_ServiceProvider__WEBPACK_IMPORTED_MODULE_4__.ServiceProvider;
    },

    "ErmRouter": function() {
        return _router_router__WEBPACK_IMPORTED_MODULE_5__.ErmRouter;
    },

    "ErmComponentRegistry": function() {
        return _components_component__WEBPACK_IMPORTED_MODULE_6__.ErmComponentRegistry;
    }
});








class ErmApp extends _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.Lyte{
    lookups(){
        return [
            _node_modules_zoho_lyte_ui_component_addon_js__WEBPACK_IMPORTED_MODULE_2__.LyteUiComponentAddon,
            {component : _components_component__WEBPACK_IMPORTED_MODULE_6__.ErmComponentRegistry},
            {router : _router_router__WEBPACK_IMPORTED_MODULE_5__.ErmRouter},
            {db : _data_store_db__WEBPACK_IMPORTED_MODULE_3__.ErmDb},
            {ServiceProvider: _services_ServiceProvider__WEBPACK_IMPORTED_MODULE_4__.ServiceProvider}
        ];
    }

    _() {
        _;
    }
}


ErmApp.register({
    hash: "app_1"
});



/***/ }),

/***/ 57373778:
/*!*********************************!*\
  !*** ./components/component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErmComponentRegistry": () => (/* binding */ ErmComponentRegistry)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "ComponentRegistry": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.ComponentRegistry;
    }
});



class ErmComponentRegistry extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.ComponentRegistry{
    constructor(){
        super();
    }
    lookups(){
        return []
    }
    // addRegistries() {

    // }

    addRegistries() {
        return [this.$app.$lyteUiComponentAddon.$component];
    }

    _() {
        _;
    }
}

ErmComponentRegistry.register({
    hash: "C_erm_app_0",
    refHash: "app_1",
    app: true
});

 



/***/ }),

/***/ 85658738:
/*!**************************!*\
  !*** ./data-store/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErmDb": () => (/* binding */ ErmDb),
/* harmony export */   "Schema": () => (/* binding */ Schema)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/data/index.js */ 73416229);
/* harmony import */ var _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/data/index.js */ 4474264);
/* harmony import */ var _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/data/index.js */ 67372236);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Db": function() {
        return _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_1__.Db;
    },

    "RESTConnector": function() {
        return _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_2__.RESTConnector;
    },

    "RESTSerializer": function() {
        return _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_3__.RESTSerializer;
    }
});



class ErmDb extends _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_1__.Db{
    _() {
        _;
    }
}

ErmDb.Connector = _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_2__.RESTConnector;
ErmDb.Serializer = _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_3__.RESTSerializer;

ErmDb.register({
    hash: "db_erm_app_0"
});

let Schema = ErmDb.Schema;



/***/ }),

/***/ 23200907:
/*!**************************************************************!*\
  !*** ./node_modules/@zoho/lyte-dom/modules/lyte-dom-ajax.js ***!
  \**************************************************************/
/***/ ((module) => {

( function( factory ) {

	if(  true && typeof module.exports === "object" ) {
		module.exports = function( scope, lyteDomObj ) {
			if( typeof scope === "undefined" && typeof window.$L === "undefined" ) {
				console.error( 'Unable to find a scope to add into - lyte-dom-ajax' );

				return ;
			}

			if( scope ) {
				factory( scope, lyteDomObj );
			}
			else {
				factory( window.$L, lyteDomObj );
			}
		}
	}	
	else {
		factory( window.$L, window.lyteDomObj );
	}

} )( function( $L, lyteDomObj ) {
	var hreq = /^(HEAD|GET)$/,
	cquery = /\?/,
	rand = new Date(),
	regheader = /(.*?):\s*(.*?)[\r\n]/g,
	hasher = /#.*$/,
	antiCache = /([?&])_=[^&]*/,
	origin;

	if( typeof document !== 'undefined' ) {
		origin = document.createElement( 'a' )
		origin.href = window.location.href;
	}

	function serializeObj( obj ) {
		var res = [];

		for( var key in obj ) {
			res[ res.length ] = encodeURIComponent( key ) + '=' + encodeURIComponent( obj[ key ] == null ? "" : obj[ key ] );
		}

		return res.join( '&' );
	}

	function serializeArray( data ) {
		var strarr = [];

		var add = function( name, value ) {
			var res;

			res = $L.isFunction( value ) ? value() : value;
			strarr[ strarr.length ] = encodeURIComponent( name ) + '=' + encodeURIComponent( res );
		}

		$L.each( data, function() {
			add( this.name, this.value );
		} );

		return strarr.join( '&' );
	}

	function convertData( data ) {
		if( typeof data === 'string' ) {
			return data;
		}
		else if( Array.isArray( data ) ) {
			return serializeArray( data );
		}
			
		return serializeObj( data );
	}

	function setQueryParams( url, data ) {
		var strData = '';

		strData = convertData( data );
		url += ( cquery.test( url ) ? '&' : '?' ) + strData;

		return url;
	}

	function mergeObject( first, second ) {
		var key;

		for( var key in second ) {
			key = key.toLowerCase();
			
			if( !first.hasOwnProperty( key ) ) {
				first[ key ] = second[ key ];
			}
		}
	}

	function initializeSettings( s ) {
		var arr = [ 'accepts', 'converters', 'contents', 'headers' ],
		settings = $L.ajaxSettings, key;

		for( key in settings ) {
			if( !!~arr.indexOf( key ) ) {
				mergeObject( s[ key ] ? s[ key ] : s[ key ] = {}, settings[ key ] );
			}
			else {
				s[ key ] = s[ key ] == undefined ? settings[ key ] : s[ key ];
			}
		}
	}

	function isNonTextualResponse( xml ) {
		return ( xml.responseType || 'text' ) !== 'text' || typeof xml.responseType !== 'string';
	}

	$L.extend( {

		active: 0,

		ajaxSettings: {

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/,
				script: /\b(?:java|ecma)script\b/
			},

			converters: {
				"* text": String,
				"text text": function( res ) { return res; },
				"text html": function( res ) { return res; },
				"text json": JSON.parse,
				"text xml": $L.parseXML,
				"text javascript": $L.Evaluate
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			accepts: {	
				"*": "*/*",
				"text": "text/plain",
				"html": "text/html",
				"xml": "application/xml, text/xml",
				"json": "application/json, text/javascript",
				"script":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			}
		},

		ajaxSetup: function( settings ) {
			for( var key in settings ) {
				$L.ajaxSettings[ key ] = settings[ key ];
			}
		},

		ajax: function( url, op ) {

			if( typeof url === 'object' ) {
				op = url;
				url = op.url;
			}

			initializeSettings( op || ( op = {} ) );

			if( !op.url ) {
				op.url = url;
			}

			// callback array
			var success = [],
			fail = [],
			complete = [],

			xhr = op.xhr,

			// SETUP - type
			req = ( op.type || 'GET' ).toUpperCase(),
			get = hreq.test( req ),
			// SETUP CONTEXT
			fncContext = op.context || op,
			globalContext = op.context 
							&& ( 
								op.context instanceof lyteDomObj
								|| op.nodeType
							) ? $L( op.context ) : $L.ev,
			// SETUP - async
			async,
			// SETUP - global
			fireEvents,
			// SETUP - beforesend
			beforeSend = op.beforeSend,

			// MIGHT WANT TO ADD A SAFETY CHECK OVER HERE
			cacheURL,
			uncached,
			body,
			headers,
			abortType = 'cancelled',
			respHeaders,
			proRespHeader,
			reqHeaders = {},
			processData,
			finish,
			field,
			atag,

			// Used in done/always/...
			isSuccess,
			data,
			error,

			//
			lXHR = {
				readyState: 0,

				setRequestHeader: function( name, value ) {
					if( finish == null && value ) {
						reqHeaders[ name ] = value;
					}

					return this;
				},

				overrideMimeType: function( type ) {
					if( finish == null ) {
						op.mimeType = type;
					}

					return this;
				},

				getAllResponseHeaders: function() {
					if( finish ) {
						return respHeaders;
					}

					return null;
				},

				getResponseHeader: function( key ) {
					var match;

					if( finish ) {
						if( !proRespHeader ) {
							proRespHeader = {};

							while( ( match = regheader.exec( respHeaders ) ) ) {
								proRespHeader[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}

						match = proRespHeader[ key.toLowerCase() ];
						
						return match ? match : null;
					}
				},

				abort: function( statusText ) {
					var finalText = statusText || abortType;

					if( xml ) {
						// Need to pass statusText over here
						xml.abort();
					}

					done( 0, finalText );

					return this;
				},

				then: function( onSuccess, onFailure ) {
					success.push( onSuccess );
					fail.push( onFailure );

					// should change
					if( !op.async ) {
						if( isSuccess ) {
							fireCallbacks( success, fncContext, [ data, this.statusText, this ] );
						}
						else {
							fireCallbacks( fail, fncContext, [ this, this.statusText, error ] );
						}
					}

					return this;
				},

				fail: function( onFailure ) {
					fail.push( onFailure );

					if( !op.async && !isSuccess ) {
						fireCallbacks( fail, fncContext, [ this, this.statusText, error ] );
					}
					return this;
				},

				always: function( onComplete ) {
					complete.push( onComplete );

					if( !op.async ) {
						fireCallbacks( complete, fncContext, [ this, this.statusText ] );
					}

					return this;
				},

				done: function( onSuccess ) {
					success.push( onSuccess );

					if( !op.async && isSuccess ) {
						fireCallbacks( success, fncContext, [ data, this.statusText, this ] );
					}
					return this;
				}
			};

			op.dataTypes = ( op.dataType || '*' ).toLowerCase().match( $L.regex.rnothtmlwhite );

			async = op.async = ( typeof op.async === 'boolean' ? op.async : true );

			fireEvents = op.global = ( typeof op.global === 'boolean' ? op.global : true );

			processData = op.processData = ( typeof op.processData === 'boolean' ? op.processData : true );

			if( origin && op.crossDomain == null ) {
				atag = document.createElement( 'a' );

				try {
					atag.href = op.url;

					atag.href = atag.href;
					op.crossDomain = atag.protocol + '//' + atag.host !== origin.protocol + '//' + origin.host;
				}
				catch( e ) {
					op.crossDomain = true;
				}
			}

			cacheURL = op.url.replace( hasher, "" );

			if( processData ) {
				if( get ) {
					uncached = op.url.slice( cacheURL.length );

					if( op.data ) {
						cacheURL = setQueryParams( cacheURL, op.data );
					}

					if( op.cache === false ) {
						cacheURL = cacheURL.replace( antiCache, "$1" );
						// bug
						uncached = ( cquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( rand++ ) + uncached;
					}

					op.url = cacheURL + uncached

				}
				else if( op.data ) {
					op.data = convertData( op.data );
				}
			}

			if( $L.ev && fireEvents && $L.active++ == 0 ) {
				$L.ev.trigger( 'ajaxStart' );
			}
			
			if( op.data && !get && op.contentType !== false || op.contentType ) {
				// SETUP - HEADER
				lXHR.setRequestHeader( 'Content-Type', op.contentType || 'application/x-www-form-urlencoded; charset=UTF-8' )
			}

			for( headers in op.headers ) {
				lXHR.setRequestHeader( headers, op.headers[ headers ] );
			}

			lXHR.setRequestHeader( 
				'Accept',
				op.dataTypes[ 0 ] && op.accepts[ op.dataTypes[ 0 ] ] ?  
					op.accepts[ op.dataTypes[ 0 ] ] +
					( op.dataTypes[ 0 ] !== '*' ? ',*/*; q=0.01': "" ) :
					op.accepts[ '*' ]
			);

			// Finish is added here because people can fire lXHR.abort inside the beforeSend callback
			// After aborting the execution continues without returning without it.
			if( beforeSend && ( beforeSend.call( fncContext, lXHR, op ) === false || finish ) ) {
				return lXHR.abort();
			}

			abortType = 'abort';

			if( op.success ) {
				success.push( op.success );
			}
			
			if( op.error ) {
				fail.push( op.error );
			}

			if( op.complete ) {
				complete.push( op.complete );
			}
			
			// prolly another func

			lXHR.readyState = 1;

			if( globalContext && globalContext.trigger && fireEvents ) {
				globalContext.trigger( 'ajaxSend', [ lXHR, op ] )
			}

			if( finish ) {
				return lXHR;
			}


			var xml = xhr ? xhr : new XMLHttpRequest();

			
			// TODO: Should op.url be here??????
			xml.open( 
				req, 
				op.url, 
				async
			);

			for( field in op.xhrFields ) {
				xml[ field ] = op.xhrFields[ field ];
			}

			if ( op.mimeType ) {
				lXHR.overrideMimeType( op.mimeType );
			}

			if( !op.crossDomain && !reqHeaders[ 'X-Requested-With' ] ) {
				reqHeaders[ 'X-Requested-With' ] = 'XMLHttpRequest';
			}

			for( headers in reqHeaders ) {
				xml.setRequestHeader( headers, reqHeaders[ headers ] );
			}

			body = !get && op.data || null;

			xml.onload = function() {
				// Maybe need to handle FTP
				var isNonTextual = isNonTextualResponse( xml );

				done( xml.status, xml.statusText, isNonTextual ? xml.response : xml.responseText, xml.getAllResponseHeaders(), isNonTextual ? 'binary' : 'text' );
			}

			xml.onerror = xml.onabort = function() {
				var isNonTextual = isNonTextualResponse( xml );

				done( xml.status, xml.statusText, isNonTextual ? xml.response : xml.responseText, xml.getAllResponseHeaders(), isNonTextual ? 'binary' : 'text' );
			}

			if( op.async ) {
				xml.timeout = op.timeout ? op.timeout : 0;

				xml.ontimeout = function() {
					done( 0, 'timeout' );
				}
			}

			xml.send( body );

		
			// prolly another func

			function done( status, nStatusText, response, responseHeaders, responseDataType ) {

				var response, statusText = nStatusText;

				if( finish ) {
					return ;
				}

				finish = true;

				respHeaders = responseHeaders || "";

				lXHR.readyState = status > 0 ? 4 : 0;
				isSuccess = status >= 200 && status < 300 || status === 304;


				if( isSuccess ) {

					// We are going to handle text -> dataType conversion for now
					// SETUP - DATATYPE
					response = getProperResponse( response, op, lXHR, responseDataType );

					if( status == 304 ) {
						statusText = 'notmodified';
					}
					else if( status == 204 || op.type == 'HEAD' ) {
						statusText = 'nocontent'
					}
					else {
						statusText = response.state;
						data = response.data;
						error = response.error;
						isSuccess = !error;
					}
				}
				else {
					lXHR.responseText = response;
					if( status || !statusText ) {
						statusText = 'error';
						status = status < 0 ? 0 : status;
					}

					error = statusText;
				}

				lXHR.status = status;
				lXHR.statusText = ( statusText || nStatusText ) + "";

				if( isSuccess ) {
					if( success.length > 0 ) {
						fireCallbacks( success, fncContext, [ data, statusText, lXHR ] );
					}
					
				}
				else if( fail.length > 0 ) {
					fireCallbacks( fail, fncContext, [ lXHR, statusText, error ] );
				}

				// lXHR.statusCode( statusCode || {} );

				if( globalContext && globalContext.trigger && fireEvents ) {
					globalContext.trigger( 
						isSuccess ? 'ajaxSuccess' : 'ajaxError',
						[ lXHR, op, isSuccess ? data : error ]
					)
				}

				if( complete.length > 0 ) {
					fireCallbacks( complete, fncContext, [ lXHR, statusText ] );
				}

				if( globalContext && globalContext.trigger && fireEvents ) {
					globalContext.trigger( 'ajaxComplete', [ lXHR, op ] );

					// Need to add ajax fail
					if( $L.ev && !( --$L.active ) ) {
						$L.ev.trigger( 'ajaxStop' );
					}
				}


			}

			return lXHR;
		},

		getScript: function( url, data, callback ) {
			return $L.get( url, data, callback );
		},

		getJSON: function( url, callback ) {
			return $L.get( url, undefined, callback );
		}
	} );

	function fireCallbacks( calls, context, args ) {
		var call;

		while( ( call = calls.shift() ) ) {
			call.apply( context, args );
		}
	}

	function convertResponse( first, second, response, lXHR, settings ) {
		var data, hop, cfun;

		if( first === second ) {
			return { data: response, state: 'success' };
		}

		if( settings.type === 'HEAD' ) {
			return ;
		}

		hop = first + " " + second;

		for( var key in settings.converters ) {
			if( key.toLowerCase() === hop ) {
				cfun = settings.converters[ key ];
				break;
			}
		} 

		lXHR.responseText = response;

		try {
			data = cfun ? cfun( response ) : "";
		}
		catch( err ) {
			return { data: undefined, state: "parseerror", error: err };
		}

		if( $L.ajaxSettings.responseFields[ second ] ) {
			lXHR[ $L.ajaxSettings.responseFields[ second ] ] = data;
		}
		
		return { data: data, state: "success" }; 
	}

	function getProperResponse( response, settings, lXHR, responseDataType ) {
		var contentType, type, 
		types = settings.dataTypes,
		contents = settings.contents;

		// Sniff out content-type
		if( types[ 0 ] === '*' ) {
			contentType = settings.mimeType || lXHR.getResponseHeader( 'content-type' );
		}

		if( contentType ) {
			for( type in contents ) {
				if( contents[ type ].test( contentType ) ) {
					types[ 0 ] = type;
					break;
				}
			}
		}
		
		if( types[ 0 ] === '*' ) {
			types[ 0 ] = responseDataType;
		}

		return convertResponse( responseDataType, types[ 0 ], response, lXHR, settings );
	}

	$L.each( [ 'get', 'post' ], function( i, type ) {
		$L[ type ] = function( url, data, success, datatype ) {
			if( $L.isFunction( data ) ) {
				datatype = datatype || success;
				success = data;
				data = undefined;
			}

			return $L.ajax( 
				$L.extend( {
					type: type,
					url: url,
					data: data,
					dataType: datatype,
					success: success

				}, $L.isPlainObject( url ) && url ) 
			);
		};
	} );
} );


/***/ }),

/***/ 76361426:
/*!****************************************************************!*\
  !*** ./node_modules/@zoho/lyte-dom/modules/lyte-dom-events.js ***!
  \****************************************************************/
/***/ ((module) => {

( function( factory ) {
	if(  true && typeof module.exports === "object" ) {
		module.exports = function( scope, lyteDomObj ) {
			if( typeof scope === "undefined" && typeof window.$L === "undefined" ) {
				console.error( 'Unable to find a scope to add into - lyte-dom-events' );

				return ;
			}

			if( scope ) {
				factory( scope, lyteDomObj );
			}
			else {
				factory( window.$L, lyteDomObj );
			}
		}
	}
	else {
		factory( window.$L, window.lyteDomObj );
	}
	
} )( function( $L, lyteDomObj ) {
	var readyQueue = [],
	state = 'initial';

	var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;

	$L.each( [
		'ajaxStart',
		'ajaxStop',
		'ajaxComplete',
		'ajaxError',
		'ajaxSuccess',
		'ajaxSend'
		], function( i, fnc ) {
			lyteDomObj.prototype[ fnc ] = function( cb ) {
				return this.on( fnc, cb );
			}
	} );

	function executeReady() {
		var fn;
		while( ( fn = readyQueue.shift() ) ) {
			fn.call();
		}
	}

	lyteDomObj.prototype.ready = function( fn ) {
		readyQueue.push( fn );

		if( state === 'initial' 
			&& document.readyState !== 'ready' 
			&& document.readyState !== 'complete' 
		) {
			state = 'registered';
			document.addEventListener( 'DOMContentLoaded', function() {
				executeReady();
			} );
		}
		else if( document.readyState === 'ready' || document.readyState === 'complete' ) {
			executeReady();
		}

		return this;
	}

	
	$L.each( [ 'blur', 'focus', 'focusin', 'focusout', 'resize', 'bindScroll', 'click', 'dblclick',
			'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave',
			'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu' 
		], 
		function( ind, func ) {
			lyteDomObj.prototype[ func ] = function( data, fn ) {
				var actual = func === 'bindScroll' ? 'scroll' : func;
				
				return arguments.length > 0 ?
					this.on( actual , null, data, fn ) :
					this.trigger( actual );
			}
		} 
	);

	$L.debounce = function( callback, wait, immediate ) {
		var id;
		var obj = function() {
			var return_val;
			var  args = arguments;
			var that = this;
			var callback_func = function(){
				return_val = callback.apply(that,args);
			}
			var callNow = !wait && immediate;
			
			if( !callNow ) {
				if( id ) {
					clearTimeout( id );
				}
				id = setTimeout( callback_func ,wait);
				
				/*id = setTimeout( callback.bind( this , arguments ), wait );*/
			}
			else {
				callback_func();
			}
			return return_val
			
		}
		return obj.cancel= function(){
			clearTimeout(id);
		 	id= null;
		},obj;
	}

	function eventsEmpty( events ) {
		for( var key in events ) {
			if( events[ key ].length > 0 ) {
				return false;
			}
		}

		return true;
	}

	function setEvents( elems, type, cb, sel, data, one ) {

		var orig;
		if( typeof cb === 'boolean' ) {
			cb = retFalse;
		}

		if( typeof cb !== 'function' ) {
			return elems;
		}

		orig = cb;

		if( one ) {
			cb = function( e ) {

				// Manually removing the event handler
				var del = e.delegateTarget, k,
				elemcache = $L._dataPriv.get( del ),
				type = e.type,
				cache = elemcache.events[ type ];

				for( k = 0; k < cache.length; k++ ) {
					if( cache[ k ].handler === cb ) {
						cache.splice( k, 1 );
						break;
					}
				}

				if( eventsEmpty( elemcache.events ) ) {
					del.removeEventListener( type, elemcache.handle );
				}

				orig.apply( this, arguments );
			}
		}

		if( !cb.unId ) {
			cb.unId = $L.ev.unId++;
		}

		return $L.each( elems, function( index, elem ) {
			var ecache = $L._dataPriv.get( elem ), 
			evts, i, name, handler;

			if( !ecache.events ) {
				ecache.events = {}; 
			}

			var evts = type.match( $L.regex.rnothtmlwhite );
			i = evts.length;

			if( !( handler = ecache.handle ) ) {
				ecache.handle = handler = function( evt ) {
					$L.ev.triggered !== evt.type ? $L.ev.dispatch.apply( elem, arguments ) : undefined;
				}
			}

			while( i-- ) {
				name = evts[ i ];
				if( !ecache.events[ name ] ) {
					ecache.events[ name ] = [];
				}

				ecache.events[ name ].push( {
					handler: cb,
					type: name,
					selectors: sel,
					data: data
				} );

				elem.addEventListener( name, handler );
			}
				
		} );
	}

	lyteDomObj.prototype.extend( {
		on: function( eventType, selectors, data, callback ) {
			return $L.ev.add( this, eventType, selectors, data, callback );
		},

		one: function( eventType, selectors, data, callback ) {
			return $L.ev.add( this, eventType, selectors, data, callback, true );
		},

		off: function( eventType, selector, fn ) {
			var type, handler;

			if( eventType.preventDefault && eventType.handleObj ) {
				handler = eventType.handleObj;
				$L( eventType.delegateTarget ).off( eventType.type, handler.selector, handler.handler );

				return this;
			}

			if( typeof eventType === 'object' ) {
				for( type in eventType ) {
					this.off( type, selector, eventType[ type ] );
				}

				return this;
			}

			if( selector === false || typeof selector === 'function' ) {
				fn = selector;
				selector = undefined;
			}

			if( fn === false ) {
				fn = retFalse;
			}

			return $L.each( this, function() {
				$L.ev.removeEvents( this, eventType, selector, fn );
			} );
		},

		trigger: function( type, data ) {
			return this.each( function( i, item ) {
				$L.ev.trigger( type, data, item );
			} );
		},

		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];

			if( elem ) {
				return $L.ev.trigger( type, data, elem, true );
			}
		}
	});

	function acceptData( owner ) {
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	}

	function stopCallback( event ) {
		event.stopPropagation();
	}


	$L.ev = {
		unId: 1,

		removeEvents: function( elem, type, sel, fn ) {
			var cache = $L._dataPriv.hasData( elem ) && $L._dataPriv.get( elem ),
			events = ( cache || {} ).events, types, length, i = 0, j, length, e, handlers, handleObj, cb;

			if( !events ) {
				return ;
			}

			types = ( type || "" ).match( $L.regex.rnothtmlwhite ) || [];
			length = types.length;

			for( ; i < length; i++ ) {
				e = types[ i ];
				handlers = events[ e ] || [];

				for( j = 0; j < handlers.length; j++ ) {
					handleObj = handlers[ j ];
					cb = handleObj.handler;

					if( ( !sel || sel === handleObj.selector || sel === '**' && handleObj.selector )
						&& ( !fn || cb.unId === fn.unId ) ) {
						handlers.splice( j, 1 );
						j--;
					}
				}

				if( !handlers.length ) {
					elem.removeEventListener( e, cache.handle );

					delete events[ e ];
				}
			}

			if( $L.isEmptyObject( events ) ) {
				$L._dataPriv.remove( elem, 'events handle' );
			}

		},

		// setEvents( elems, type, cb, sel, data )
		add: function( elems, type, sel, data, cb, one ) {
			var name;

			// on( object ) => object is passed
			if( typeof type === 'object' ) {
				// selector is given ( data may or may not be given )
				if( typeof sel === 'string' ) {
					for( name in type ) {
						$L.ev.add( elems, name, sel, data, type[ name ], one );
					}
				}
				// selector is not given( data may or may not be given )
				else {
					for( name in type ) {
						$L.ev.add( elems, name, undefined, sel, type[ name ], one );
					}
				}

				return elems;
			}

			// on( sel, cb )
			if( data == null && cb == null ) {
				return setEvents( elems, type, sel, undefined, undefined, one );
			}

			// Either selector or data have not been provided
			else if( cb == null ) {

				// selector given, data not given
				if( typeof sel === "string" ) {
					return setEvents( elems, type, data, sel, undefined, one );
				}

				// selector not given, data given
				else {
					return setEvents( elems, type, data, undefined, sel, one );
				}
			}
			else {
				// Everything is here
				return setEvents( elems, type, cb, sel, data, one );
			}
		},

		trigger: function( event, data, item, handler ) {

			// Doing parentNode here because we don't know what is happening in the focus event
			var path = [ item || document ], 
			cur, 
			tmp, event, args, i = 0, handle, 
			type = typeof event === 'string' ? event : event.type, 
			ontype, last, special, 
			data = typeof data === 'undefined' ? 
					[] : 
					data;

			tmp = last = item = item || document;
			cur = item.parentNode;

			event = event[ $L.expando ] ? event : 
										new $L.Event( type, typeof event === 'object' && event );

			type = event.type;
			ontype = 'on' + type;
			if( !event.target ) {
				event.target = item;
			}

			args = $L.merge( [ event ], data );
			special = $L.ev.special[ type ] || {};

			if( !handler && special.trigger && special.trigger.apply( item, data ) === false ) {
				return ;
			}


			if( !handler && !special.noBubble && !$L.isWindow( item ) ) {
				for( ; cur; cur = cur.parentNode ) {
					path.push( cur );
					tmp = cur;
				}

				if( tmp === ( item.ownerDocument || document ) ) {
					path.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
			

			// Fire both handlers and onclicks
			while( ( cur = path[ i++ ] ) && !event.isPropagationStopped() ) {
				// change event type i guess
				last = cur;
				handle = ( $L._dataPriv.get( cur, 'events' ) || {} )[ type ] 
						&& $L._dataPriv.get( cur, 'handle' );

				// handler
				if( handle ) {
					handle.apply( cur, args );
				}

				handle = ontype && cur[ ontype ];
				if( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, args );

					if( event.result === false ) {
						event.preventDefault();
					}
				}
			}

			// change event type i guess

			if( !handler && !event.isDefaultPrevented() ) {
				if( ( !special._default 
					|| special._default.apply( path.pop(), args ) === false )
					&& acceptData( item ) 
				) {
					if( ontype && $L.isFunction( item[ type ] ) && !$L.isWindow( item ) ) {
						tmp = item[ ontype ];

						if( tmp ) {
							item[ ontype ] = null;
						}

						$L.ev.triggered = type;

						if( event.isPropagationStopped() ) {
							last.addEventListener( type, stopCallback );
						}

						item[ type ]();

						if( event.isPropagationStopped() ) {
							last.removeEventListener( type, stopCallback );
						}

						$L.ev.triggered = undefined;

						if( tmp ) {
							item[ ontype ] = tmp;
						}
					}
				}
				
			}

			return event.result;

		},

		addProp: function( name, hook ) {
			Object.defineProperty( $L.Event.prototype, name, {
				enumerable: true,
				configurable: true,
				get: $L.isFunction( hook ) ? 
					function() {
						if( this.originalEvent ) {
							return hook( this.originalEvent );
						}
					} :
					function() {
						if( this.originalEvent ) {
							return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		dispatch: function( e ) {
			var elem = this,
			event = e.expando ? e : new $L.Event( e ),
			ecache = $L._dataPriv.get( elem ),
			events = ecache.events[ event.type ],
			i, eobj, handler, selector, args = [],
			j, res, context, fnc, data, queue = [], 
			tailQueue = {
				context: elem,
				handler: []
			};

			event.delegateTarget = this;

			args[ 0 ] = event;

			for( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}


			for( i = 0; i < events.length; i++ ) {
				eobj = events[ i ];
				handler = eobj.handler;
				selector = eobj.selectors;
				data = eobj.data;
				
				if( selector && !( event.type === 'click' && event.button >= 1 ) ) {
					for( j = e.target; j !== elem; j = j.parentNode ) {
				 		if( j.nodeType === 1 && !( e.type === 'click' && j.disabled === true ) ) {

				 			if( $L._matches( j, selector ) ) {
				 				event.currentTarget = j;
				 				queue.push( { 
				 					context: j, 
				 					handler: [ eobj ] 
				 				} );
				 			}
				 		}
					}
				}
				else if( !( event.type === 'click' && event.button >= 1 ) ) {
					tailQueue.handler.push( eobj );
				}
				
			}

			queue.push( tailQueue );

			for( 
				i = 0; 

				i < queue.length 
				&& !event.isPropagationStopped();

				i++ 
			) {
				handler = queue[ i ].handler;
				context = queue[ i ].context;

				event.currentTarget = context;

				for( 
					j = 0;

					j < handler.length 
					&& !event.isImmediatePropagationStopped(); 

					j++ 
				) {
					fnc = handler[ j ].handler;
					data = handler[ j ].data;
					event.data = data;
					event.handleObj = handler[ j ];

					res = fnc.apply( context, args );

					if( ( event.result = res ) === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}
			}

			return event.result;
		},

		triggered: undefined,

		special: {
			load: {
				noBubble: true
			},

			focus: {
				trigger: function() {
					if( this !== document.activeElement && this.focus ) {
						this.focus();
						return false;
					}
				}
			},

			blur: {
				trigger: function() {
					if( this !== document.activeElement && this.blur ) {
						this.blur();
						return false;
					}
				}
			},

			click: {
				trigger: function() {
					if( this.nodeName.toLowerCase() === 'input' && this.type === 'checkbox' && this.click ) {
						this.click();
						return false;
					}
				}
			},

			beforeunload: {
				postDispatch: function( event ) {
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	}

	var retTrue = function() {
		return true;
	}

	var retFalse = function() {
		return false;
	}

	// Looks like you can add your custom data to your event with props
	// src can also be a type what
	$L.Event = function( src, props ) {

		if( this === $L ) {
			return new $L.Event( src, props );
		}

		if( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			this.isDefaultPrevented = src.defaultPrevented 
									|| src.defaultPrevented === undefined ?
									retTrue :
									retFalse;

			// This is a text node in mousewheel events for old browsers
			this.target = src.target;	
		}
		else {
			this.type = src;
		}
		
		if( props ) {
			$L.extend( this, props );
		}

		this.timeStamp = src && src.timeStamp || Date.now();
		this[ $L.expando ] = true;
	}

	$L.Event.prototype = {
		constructor: $L.event,
		isDefaultPrevented: retFalse,
		isPropagationStopped: retFalse,
		isImmediatePropagationStopped: retFalse,
		isSimulated: false,

		preventDefault: function() {
			var org = this.originalEvent;

			this.isDefaultPrevented = retTrue;
			if( org && !this.isSimulated ) {
				org.preventDefault();
			}
		},

		stopPropagation: function() {
			var org = this.originalEvent;

			this.isPropagationStopped = retTrue;
			if( org && !this.isSimulated ) {
				org.stopPropagation();
			}
		},

		stopImmediatePropagation: function() {
			var org = this.originalEvent;

			this.isImmediatePropagationStopped = retTrue;
			if( org && !this.isSimulated ) {
				org.stopImmediatePropagation();
			}

			this.stopPropagation();
		}

	}

	$L.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: function( event ) {
			var button = event.button;

			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, $L.ev.addProp );
} );

/***/ }),

/***/ 22235237:
/*!*******************************************************************!*\
  !*** ./node_modules/@zoho/lyte-dom/modules/lyte-dom-traversal.js ***!
  \*******************************************************************/
/***/ ((module) => {

( function( factory ) {

	if(  true && typeof module.exports === "object" ) {
		module.exports = function( scope, lyteDomObj ) {
			if( typeof scope === "undefined" && typeof window.$L === "undefined" ) {
				console.error( 'Unable to find a scope to add into - lyte-dom-traversal' );

				return ;
			}

			if( scope ) {
				factory( scope, lyteDomObj );
			}
			else {
				factory( window.$L, lyteDomObj );
			}
		}
	}	
	else {
		factory( window.$L, window.lyteDomObj );
	}

} )( function( $L, lyteDomObj ) {
	var rreturn = /\r/g,
	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

	var customProp = /^--/;
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

	var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var cssNormals = {
		letterSpacing: "0",
		fontWeight: "400"
	}, 
	rboolattr = /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
	boolHook = {
		set: function( item, name, value ) {
			if( value === false ) {
				$L.removeAttr( item, name );
			}
			else {
				item.setAttribute( name, name );
			}

			return name;
		}
	};

	function nodeName( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	}

	function stripAndCollapse( value )  {
		var tokens = value.match( $L.regex.rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	function currentValue( elem, name ) {
		return $L.css( elem, name );
	}

	function adjustCSS( elem, name, ret ) {
		var val,
		adjusted,
		cur = parseFloat( currentValue( elem, name ) ),
		unit = ret && ret[ 3 ] || $L.cssNumber[ name ] ? '' : 'px';

		if( ret ) {
			val = cur || 0;
			adjusted = ret[ 1 ] ?
							val + ( ret[ 1 ] + 1 ) * ret[ 2 ] :
							+ ret[ 2 ];
		}

		return adjusted;
	}

	function makeClassArray( vals ) {
		if( Array.isArray( vals ) ) {
			return vals;
		}

		return stripSpacesAndCollapse( vals ).match( $L.regex.rnothtmlwhite ) || [];
	}

	function stripSpacesAndCollapse( val ) {
		return ( val && val.match && val.match( $L.regex.rnothtmlwhite ) || [] ).join( " " );
	}

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( 'class' ) || "";
	}

	function getStyles( elem ) {
		var win = elem.ownerDocument.defaultView;

		if( !win || !win.opener ) {
			win = window;
		}

		return win.getComputedStyle( elem );
	}

	function curCSS( elem, name, computed ) {
		var ret;

		computed = computed || getStyles( elem ); 

		if( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			// if ( ret === "" && !$L.contains( elem.ownerDocument, elem ) ) {
			// 	ret = $L.style( elem, name );
			// }
		}

		// IE returns zIndex as integers
		return ret !== undefined ?
			ret + "":
			ret;
	}


	$L.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, key ) {
		var top = key === 'pageYOffset';

		lyteDomObj.prototype[ method ] = function( val ) {
				return $L._processInput( this, method , val, function( elem, method, val ) {
					var wobj;
					if( $L.isWindow( elem ) ) {
						wobj = elem;
					}
					else if( elem.nodeType === 9 ) {
						wobj = elem.defaultView;
					}

					if( val == undefined ) {
						return wobj ? wobj[ key ] : elem[ method ];
					}

					if( wobj ) {
						wobj.scrollTo( 
							!top ? val : wobj.pageXOffset,
							top ? val : wobj.pageYOffset
						);
					}
					else {
						elem[ method ] = val;
					}
				} );

			}
	} );

	$L.each( { Height: 'height', Width: 'width' }, function( name, type ) {
		$L.each( { padding: 'inner' + name, content: type, '': 'outer' + name }, function( defaultExtra, funcName ) {
			lyteDomObj.prototype[ funcName ] = function( margin, value ) {
				var extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
				return $L._processInput( this, type, typeof margin !== 'boolean' ? margin : undefined, 
					function( elem, type, value ) {
						var doc;

						if( $L.isWindow( elem ) ) {
							return funcName.indexOf( "outer" ) === 0 ?
										elem[ "inner" + name ] :
									elem.document.documentElement[ "client" + name ];
						}

						if( elem.nodeType === 9 ) {
							doc = elem.documentElement;

							return Math.max(
								elem.body[ "scroll" + name ], doc[ "scroll" + name ],
								elem.body[ "offset" + name ], doc[ "offset" + name ],
								doc[ "client" + name ]
							);
						}
						
						return value === undefined ? $L.css( elem, type, extra ) :
												$L.style( elem, type, value, extra );
					} 
				);
			}
		} )
	} );

	

	function boxModelAdjustment( elem, dimension, box, isBorderValue, styles, val ) {

		var i = dimension === 'width' ? 1 : 0,
		extra = 0, delta = 0;

		if( box === ( isBorderValue ? 'border' : 'content' ) ) {
			return 0;
		}

		for( ; i < 4; i += 2 ) {

			if( box === 'margin' ) {
				delta += $L.css( elem, 'margin' + cssExpand[ i ], true, styles );
			}

			if( !isBorderValue ) {

				delta += $L.css( elem, 'padding' + cssExpand[ i ], true, styles );

				if( box !== 'padding' ) {
					delta += $L.css( elem, 'border' + cssExpand[ i ] + 'Width', true, styles );
				}
				else {
					extra += $L.css( elem, 'border' + cssExpand[ i ] + 'Width', true, styles );
				}
			}
			else {

				if( box === 'content' ) {
					delta -= $L.css( elem, 'padding' + cssExpand[ i ], true, styles );
				}

				if( box !== 'margin' ) {
					delta -= $L.css( elem, 'border' + cssExpand[ i ] + 'Width', true, styles );
				}

			}

		}

		// Get scrollgutter 
		if( !isBorderValue && val >= 0 ) {
			delta += Math.max( 0, Math.ceil(
				elem[ 'offset' + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] - val - delta - extra - 0.5
			) );
		}

		return delta;

	}

	function getWidthOrHeight( elem, dimension, extra ) {
		var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = $L.css( elem, "boxSizing", false, styles ) === "border-box",
		isBorderValue = isBorderBox;

		// Return a non-pixel value yikes!
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}

		isBorderValue = isBorderValue && ( $L._meta.support.reliableBoxSizing() || val === elem.style[ dimension ] );

		if( val === 'auto' 
			|| ( !parseFloat( val ) && $L.css( elem, 'display', false, styles ) === 'inline' ) 
		) {
			val = elem[ 'offset' + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];
			isBorderValue = true;
		}

		val = parseFloat( val ) || 0;

		return ( val + 
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				isBorderValue,
				styles,
				val
			) ) + 'px';


	}

	// args comes later
	function swap( elem, props, cb ) {
		var ret, name,
		temp = {};

		for( name in props ) {
			temp[ name ] = elem.style[ name ];
			elem.style[ name ] = props[ name ];
		}

		ret = cb.call( elem );

		for( name in props ) {
			elem.style[ name ] = temp[ name ];
		}

		return ret;
	}

	$L.texthighlighter = function(text , highlight_text , tagType , highlightClass , highlightId){
		var Reg = new RegExp( highlight_text , "gi");
		var obj = document.createDocumentFragment();
		tagType = tagType ? tagType : 'span';
		if(highlight_text.length > 0){
			
			var matches = text.match(Reg);
			var cur_pos = 0;
			var index = 0;
			for ( var index = 0 ; matches && index < matches.length ; index++){
				var pos =  text.indexOf(matches[index]);
				var highlight = matches[index];
				var textnode = text.slice(0,pos);
				if(textnode.length){
					obj.appendChild(document.createTextNode(textnode));
				}
				var highlight_node = document.createElement(tagType);
				highlight_node.innerText = highlight;
				obj.appendChild(highlight_node);
				text = text.slice(pos + matches[index].length);
			}
			

		}
		if(text.length){
			var textnode = text.slice(0,text.length);
			if(textnode){
				obj.appendChild(document.createTextNode(textnode));
			}
		}
		return obj;
	}

	// Parent functions
	lyteDomObj.prototype.extend( {

		path: function() {
			var element = this[ 0 ],
			tagName, result = [], position, selector;

			while( element && element.nodeType === 1 && element.tagName !== 'BODY' ) {
				position = 1;
				selector = '';
				tagName = element.nodeName.toLowerCase();

				selector += tagName;

				if( element.id ) {
					selector += '#' + element.id;
				}
				else {
					while( element.previousElementSibling ) {
						element = element.previousElementSibling;
						position++;
					}

					selector += ':nth-child(' + position + ')';
				}

				result.unshift( selector );
				element = element.parentNode;
			}

			return result.join( ' > ' );
		},

		closest: function( sel, context ) {
			var elems = this,
			i = 0, length = elems.length, matches = [];

			if( !$L.needsContext.test( sel ) ) {
				for( ; i < length; i++ ) {
					var elem = elems[ i ];
					do {
						if( elem.nodeType === 1 && $L( elem ).is( sel ) ) {
							matches.push( elem );
							break;
						}

						elem = elem.parentNode;
					} while( elem && elem !== context );
				}
			}

			return $L._removeDupes( matches, false, this );
		},

		css: function( key, value ) {
			return $L._processInput( this, key, value, function( item, name, val ) {
				var i = 0,
				ret = {};

				if(Array.isArray( name ) ) {
					for( ; i < name.length; i++ ) {
						ret[ name[ i ] ] = $L.css( item, name[ i ] );
					}

					return ret;
				}

				if( val != undefined) {
					return $L.style( item, name, val );
				}
				else {
					return $L.css( item, name );
				}
			});
		},

		removeProp: function( key ) {
			return $L.each( this, function() {
				delete this[ $L.propNames[ key ] || key ];
			} );
		},

		removeAttr: function( key ) {
			return $L.each( this, function( index, elem ) {
				$L.removeAttr( elem, key );
			} );
		},

		attr: function( key, value ) {
			return $L._processInput( this, key, value, $L.attr );
		},

		prop: function( key, value ) {
			return $L._processInput( this, key, value, $L.prop );
		},

		siblings: function( sel ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [], i,
						children = item.parentElement.children;

						for( i = 0; i < children.length; i++ ) {
							if( item !== children[ i ] 
								&& children[ i ].nodeType === 1 
								&& $L._checkMatch( children[ i ], sel ) 
							) {
								result.push( children[ i ] );
							}
						}

						return result;
					} );

			return $L._removeDupes( results, false, this );
		},

		children: function( sel ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [], 
						child = item.children,
						length = child.length, i;

						for( i = 0; i < length; i++ ) {
							if( child[ i ].nodeType === 1 && $L._checkMatch( child[ i ], sel ) ) {
								result.push( child[ i ] );
							}
						}

						return result;
					} );
			
			return this.pushStack( results );
		},

		prevUntil: function( sel, filter, includeCorner ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [];

						if( includeCorner && $L._checkMatch( item, filter ) ) {
							result.push( item );
						}

						while( ( item = item.previousSibling ) ) {
							if( item.nodeType === 1 && $L( item ).is( sel ) ) {

								if( includeCorner && $L._checkMatch( item, filter ) ) {
									result.push( item );
								}

								break;
							}

							if( item.nodeType === 1 && $L._checkMatch( item, filter ) ) {
								result.push( item );	
							}
						}

						return result;
					} );

			return $L._removeDupes( results, true, this );
		},

		nextUntil: function( sel, filter, includeCorner ) {
			var results;

			results = $L.map( this, function( item, index ) {
						var result = [];

						if( includeCorner && $L._checkMatch( item, filter ) ) {
							result.push( item );
						}

						while( ( item = item.nextSibling ) ) {
							if( item.nodeType === 1 && $L( item ).is( sel ) ) {

								if( includeCorner && $L._checkMatch( item, filter ) ) {
									result.push( item );
								}
								break;
							}

							if( item.nodeType === 1 && $L._checkMatch( item, filter ) ) {
								result.push( item );
							}
						}

						return result;
					} );
			
			return $L._removeDupes( results, false, this );
		},

		parentsUntil: function( sel, filter ) {
			var results;
			results = $L.map( this, function( item, index ) {
						var result = [];
						while( ( item = item.parentNode ) ) {
							if( item.nodeType === 1 && $L( item ).is( sel ) ) {
								break;
							}

							if( item.nodeType === 1 && $L._checkMatch( item, filter ) ) {
								result.push(item);
							}
						}

						return result;
					} );
			
			return $L._removeDupes( results, true, this );
		},

		parents: function( sel ) {
			var results;
			results = $L.map( this, function( item, index ) {
						var result = [];
						while( ( item = item.parentNode ) && item.nodeType !== 9 ) {
							if( item.nodeType === 1 ) {
								if( $L._checkMatch( item, sel ) ) {
									result.push( item );
								}
							}
						}

						return result;
					} );

			return $L._removeDupes( results, true, this );
		},

		parent: function( sel ) {
			var nodes = $L.map( this, function( item, index ) { 
				var parent = item.parentNode;

				return parent 
						&& parent.nodeType !== 11 
						&& $L._checkMatch( parent, sel ) ? parent :
														null;
			} );

			return $L._removeDupes( nodes, false, this );
			

		},

		offsetParent: function(){
			return  this.map( function( index, elem ) {
						var offsetParent = elem.offsetParent;

						while( offsetParent && $L.css( offsetParent, 'position' ) === "static" ) {
							offsetParent = offsetParent.offsetParent;
						}

						return offsetParent || document.documentElement;
					} )
		},

		offset: function( args ) {
			if( arguments.length ) {
				return args === undefined ? this : this.each( function( i, e ) {
					$L.offset.setOffset( e, args, i );
				} )
			}

			var rect, win, elem = this[ 0 ];

			if( !elem ) {
				return;
			}

			if( !elem.getClientRects().length ) {
				return { top: 0 , left: 0 };
			}

			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;

			return { 
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
			
		},

		position: function()
		{
			if( !this [0] )
			{
				return;
			}

			var offsetParent,offset,doc,
				elem = this[0],
				parentOffset = {top: 0, left: 0};

			if( $L.css(elem , 'position') === 'fixed')
			{
				offset = elem.getBoundingClientRect()
			}
			else
			{
				offset = this.offset()
				doc = elem.ownerDocument
				offsetParent = elem.offsetParent || doc.documentElement;
				while( offsetParent && ( offsetParent === doc.body || offsetParent === doc.documentElement) && 
					$L.css(offsetParent,'position') === 'static')
				{
					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) 
				{

					parentOffset = $L( offsetParent ).offset();
					parentOffset.top += parseFloat($L.css( offsetParent, "borderTopWidth", true ));
					parentOffset.left += parseFloat($L.css( offsetParent, "borderLeftWidth", true ));
				}
			}
			return 			{
				top: offset.top - parentOffset.top - parseFloat($L.css( elem, "marginTop", true )),
				left: offset.left - parentOffset.left - parseFloat($L.css( elem, "marginLeft", true ))
			}
		},

		next: function( sel ) {
			var result = $L.map( this, function( item, index ) {
				do {
					item = item.nextSibling;
				} while( item && item.nodeType != 1 );

				return item 
						&& item.nodeType === 1
						&& $L._checkMatch( item, sel ) ? item : null;
			} );

			return this.pushStack( result );
		},

		nextAll: function( sel ) {
			var results = $L.map( this, function( next, index ) {
				var result = [];

				do {
					next = next.nextSibling;
					if( next 
						&& next.nodeType === 1
						&& $L._checkMatch( next, sel ) 
					) {
						result.push( next );
					}
				} while( next );

				return result;
			} );

			return $L._removeDupes( results, false, this );	
		},

		prev: function( sel ) {
			var result = $L.map( this, function( item, index ) {
				do {
					item = item.previousSibling;
				} while( item && item.nodeType != 1 );

				return item 
					&& item.nodeType === 1
					&& $L._checkMatch( item, sel ) ? item : null;
			} );

			return this.pushStack( result );
		},

		prevAll: function( sel ) {
			var results = $L.map( this, function( prev, index ) {
				var result = [];

				do {
					prev = prev.previousSibling;
					if( prev 
						&& prev.nodeType === 1
						&& $L._checkMatch( prev, sel ) 
					) {
						result.push( prev );
					}
				} while( prev );

				return result;
			} );

			return $L._removeDupes( results, true, this );	
		},

		contents: function()
		{

			var matched =$L.map(this ,function(e)
			{
				
				if(e.nodeName && e.nodeName.toLowerCase() === 'iframe' )
				{
					return e.contentDocument;
				}
				if(e.nodeName && e.nodeName.toLowerCase() === 'template' )
				{
					e = e.content || e;
				}
				return $L.merge([],e.childNodes)
			})
			return this.pushStack( matched );
		},

		toggleClass: function( cls, state ) {
			var elems = this,
			i, lnode, clsName, combined;

			if( $L.isFunction( cls ) ) {
				return elems.each( function( index, item ) {
					$L( item ).toggleClass( 
						cls.call( 
							item, 
							index, 
							getClass( item ) ,
							state 
						), 
						state 
					);
				} );
			}

			if( typeof state === "boolean" ) {
				state ? elems.addClass( cls ): elems.removeClass( cls );
				return this;
			}
			else if( typeof state === 'string' ) {
				combined = [].slice.call( arguments );
				return this.toggleClass( combined );
			}

			return $L.each( elems, function( index, item ) {
				if( item.nodeType !== 1 ) {
					return ;
				}

				if( typeof cls === 'string' || Array.isArray( cls ) ) {
					var classArray = makeClassArray( cls );

					if( classArray.length ) {
						for( i = 0; i < classArray.length; i++ ) {
							lnode = $L( item );
							if( lnode.hasClass( classArray[ i ] ) ) {
								lnode.removeClass( classArray[ i ] );
							}
							else {
								lnode.addClass( classArray[ i ] );
							}
						}
					}
				}
				else {
					clsName = getClass( item );

					if( clsName ) {
						$L._dataPriv.set( item, '__classname__', clsName );
					}

					clsName 
					|| cls === false ? 
						item.setAttribute( 'class', '' ) :
						item.setAttribute( 'class', $L._dataPriv.get( item, '__classname__' ) );
				}

				

			} );
		},

		addClass: function( cls ) {
			var elems = this,
			length = this.length,
			i, j,
			arr, combined;

			// Blah we need to return over here.
			if( $L.isFunction( cls ) ) {
				return elems.each( function( index, item ) {
					$L( item ).addClass( cls.call( item, index, getClass( item ) ) );
				} );
			}

			if( arguments.length > 1 ) {
				combined = [].slice.call( arguments );
				return this.addClass( combined ); 
			}

			arr = makeClassArray( cls );

			for( i = 0; i < length; i++ ) {
				if( elems[ i ].nodeType !== 1 ) {
					continue;
				}

				for( j = 0; j < arr.length; j++ ) {	
					if( typeof arr[ j ] === 'string' && arr[ j ] ) {
						elems[ i ].classList ? 
							elems[ i ].classList.add( arr[ j ] ) :
							elems[ i ].className += ' ' + arr[ j ];
					}
				}	
			}

			return this;
			
		},

		removeClass: function( cls ) {
			var elems = this,
			length = this.length, combined,
			arr, i = 0, j = 0, cur, noCL = false;

			if( $L.isFunction( cls ) ) {
				return elems.each( function( index, item ) {
					$L( item ).removeClass( cls.call( item, index, getClass( item ) ) );
				} );
			}

			if( !arguments.length ) {
				return this.attr( 'class', '' );
			}

			if( arguments.length > 1 ) {
				combined = [].slice.call( arguments );
				return this.removeClass( combined ); 
			}

			arr = makeClassArray( cls );

			for( i = 0; i < length; i++ ) {
				if( elems[ i ].nodeType !== 1 ) {
					continue;
				}

				cur = getClass( elems[ i ] );
				cur = ' ' + cur + ' ';
				for( j = 0; j < arr.length; j++ ) {	
					if( typeof arr[ j ] === 'string' && arr[ j ] ) {
						if( elems[ i ].classList ) {
							elems[ i ].classList.remove( arr[ j ] )
						} 
						else {	
							noCL = true;
							cur.replace( ' ' + arr[ j ] + ' ', ' ' );
						}	
					}
				}

				if( noCL ) {
					elems[ i ].setAttribute( 'class', cur );
					noCL = false;
				}
			}

			return this;

		},

		hasClass: function( cls ) {
			var elems = this,
			length = this.length,
			i, cur;

			cls = " " + cls + " ";
			for( i = 0; i < length; i++ ) {
				if( elems[ i ].nodeType !== 1 ) {
					continue;
				}

				cur = " " + getClass( elems[ i ] ) + " ";
				if( cur.indexOf( cls ) !== -1 ) {
					return true;
				}
			}

			return false;
		},

		val: function( value ) {

			var elem = this[ 0 ],
			ret, isFunc, hooks;

			if( value === undefined ) {
				if( elem ) {
					hooks = $L.valHooks[ elem.type ] ||
							$L.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks && "get" in hooks && ( ret = hooks.get( elem, "value" ) ) !== undefined) {
						return ret;
					}

					ret = elem.value;
				}

				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				return ret == null ? "" : ret;
			}

			isFunc = $L.isFunction( value );

			return this.each( function( index, item ) {
				var newVal;

				if( isFunc ) {
					newVal = value.call( item, index, $L( item ).val() );
				}
				else {
					newVal = value;
				}

				if( newVal == null ) {
					newVal = "";
				}
				else if( typeof newVal == "number" ) {
					newVal = newVal + "";
				}
				else if( Array.isArray( newVal ) ) {
					newVal = $L.map( newVal, function( sval ) {
						return sval == null ? "" : sval + "";
					} );
				}

				var val = $L.valHooks[ this.type ] || $L.valHooks[ this.tagName.toLowerCase() ];

				if( !val || !( 'set' in val ) || val.set( this, newVal, 'value' ) === undefined ) {
					this.value = newVal;
				}
			} );
		}
	} );

	$L.cssHooks = {
		borderWidth: {
			set: setPositiveNumber
		},

		padding: {
			set: setPositiveNumber
		},

		marginLeft: {
			get: function( elem, computed ) {
				if( computed && !$L._meta.support.reliableMarginLeft() ) {
					return ( elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) ) + 'px';
				}
			}
		},

		opacity: {
			get: function( elem, computed ) {
				if( computed ) {
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	};

	var cssShow = { position: "absolute", visibility: "hidden", display: "block" };

	$L.each( [ 'top', 'left' ], function( index, funcName ) {
		$L.cssHooks[ funcName ] = {
			get: function( elem, computed ) {
				if( computed && !$L._meta.support.reliablePixelPosition() ) {
					var val = curCSS( elem, funcName );

					return rnumnonpx.test( val ) ? $L( elem ).position()[ funcName ] + 'px' : val ;
				}
			}	
		}
	} );

	$L.each( [ 'width', 'height' ], function( index, funcName ) {
		$L.cssHooks[ funcName ] =  {
			get: function( elem, computed, extra ) {
				if( computed ) {
					return rdisplayswap.test( $L.css( elem, 'display' ) ) &&
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?	
					 swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, funcName, extra );
					} )
					: getWidthOrHeight( elem, funcName, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					isBorderBox = extra && $L.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						funcName,
						extra,
						isBorderBox,
						styles
					);

					if ( subtract && ( matches = rcssNum.exec( value ) ) &&
						( matches[ 3 ] || "px" ) !== "px" ) {

						elem.style[ funcName ] = value;
						value = $L.css( elem, funcName );
					}

					return setPositiveNumber( elem, value, subtract );
			}
		}
	} );

	$L.offset = {
		setOffset: function( elem, args, i ) {

			var cpos, cleft, csstop, ctop, coffset, cssleft, calpos,
			pos = $L.css( elem, 'position' ),
			cElem = $L(elem),
			props = {};

			if( pos === 'static' ) {
				cElem.css( 'position','relative');
			}

			coffset = cElem.offset();
			csstop = $L.css( elem , "top" );
			cssleft = $L.css( elem , "left" );
			calpos = ( pos === 'absolute' || pos === 'fixed' )
					&& ( csstop + cssleft ).indexOf( 'auto' ) > -1;

			if( calpos ) {
				cpos = cElem.position()
				ctop = cpos.top;
				cleft = cpos.left;
			}
			else {
				ctop = parseFloat( csstop ) || 0 ;
				cleft = parseFloat( cssleft ) || 0 ;
			}

			if( $L.isFunction( args ) ) {
				args = args.call( elem , i , $L.extend( {}, coffset ) );
			}

			if( args.top != null ) {
				props.top = ( args.top - coffset.top ) + ctop;
			}

			if( args.left != null ) {
				props.left = ( args.left - coffset.left ) + cleft;
			}

			cElem.css( 'top', props.top );
			cElem.css( 'left', props.left );

			return cElem
		}
	}

	$L.extend( {
		cssNumber : {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		propNames : {
			"cellpadding": "cellPadding",
			"cellspacing": "cellSpacing",
			"class": "className",
			"colspan": "colSpan",
			"contenteditable": "contentEditable",
			"for": "htmlFor",
			"frameborder": "frameBorder",
			"maxlength": "maxLength",
			"readonly": "readOnly",
			"rowspan": "rowSpan",
			"tabindex": "tabIndex",
			"usemap": "useMap"
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if( !$L._meta.support.radioValue && nodeName( elem, 'input' ) && value === 'radio' ) {
						var val = elem.value;

						elem.setAttribute( type, value );
						if( val ) {
							elem.value = val;
						}
						
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, key ) {
			var i = 0, name;
			key = ( key && key.match( $L.regex.rnothtmlwhite ) ) || [];

			while( ( name = key[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		},

		style: function( item, key, value, extra ) {
			var isCustom = customProp.test( key ),
			style, type = typeof value, hooks;

			if( !item || item.nodeType !== 1 ) {
				return ;
			}

			style = item.style;

			hooks = $L.cssHooks[ key ] || $L.cssHooks[ value ];

			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( item, key, ret );

				type = "number";
			}

			if( type === 'number' ) {
				value += $L.cssNumber[ key ] ? '' : 'px';
			}

			value = hooks && ( 'set' in hooks ) ? hooks.set( item, value, extra ) : value;
			
			if( isCustom ) {
				style.setProperty( item, value );
			}
			else {
				style[ key ] = value;
			}
		},

		css: function(item, key, extra, styles ) {
			var origName = $L._camelCase(key),
			ret, hooks;
			
			hooks = $L.cssHooks[ key ] || $L.cssHooks[ origName ];

			if( hooks && 'get' in hooks ) {
				ret = hooks.get( item, true, extra );
			}

			if( ret === undefined ) {
				ret = curCSS( item, key, styles );
			}

			if ( ret === "normal" && key in cssNormals ) {
				ret = cssNormals[ key ];
			}


			// do extra stuff over here

			if( extra ) {
				// they were checking for infinity for some reason
				return parseFloat( ret ) || 0;
			}

			return ret;
		},

		attr: function( item, key, value ) {
			var hooks, obt, ret;

			key = key.toLowerCase();
			hooks = $L.attrHooks[ key ] || rboolattr.test( key ) && boolHook;

			if( value !== undefined ) {
				if( value === null ) {
					$L.removeAttr( item, key );
					return ;
				}

				obt = hooks && 'set' in hooks && ( ret = hooks.set( item, key, value ) ) !== undefined; 

				if( obt ) {
					return ret;
				}
				else {
					item.setAttribute( key, value + '' );
					return value;
				}
			}
			
			if ( hooks && "get" in hooks && ( ret = hooks.get( item, key ) ) !== null ) {
				return ret;
			}

			ret = item.getAttribute( key );

			return ret == null ? undefined : ret;
		},

		prop: function( item, key, value ) {
			var hooks, ret, obt;

			key = $L.propNames[ key ] || key;
			hooks = $L.propHooks[ key ];

			if( value === undefined ) {
				obt = hooks && 'get' in hooks && ( ret = hooks.get( item, key ) ) !== undefined;
				return obt ? ret : item[ key ];
			}
			else {
				obt = hooks && 'set' in hooks && ( ret = hooks.set( item, value, key ) ) !== undefined ; 
				return obt ? ret : item[ key ] = value;
			}

			return value;
		},

		valHooks:{
				'checkbox': {
					set: function( elem, value ) {
						if ( Array.isArray( value ) ) {
							elem.checked = $L.inArray( $L( elem ).val(), value ) > -1 ;
						}
					},
	
					get: function( elem ) {
						 elem.getAttribute( "value" ) === null ? "on" : elem.value;
					}
				},

				'radio': {
					set: function( elem, value ) {
						if ( Array.isArray( value ) ) {
							return ( elem.checked = $L.inArray( $L( elem ).val(), value ) > -1 );
						}
					},
	
					get: function( elem ) {
						return elem.getAttribute( "value" ) === null ? "on" : elem.value;
					}
				},

				'select': {
					get: function( elem ) {
						var value, opt, i,
						options = elem.options,
						index = elem.selectedIndex,
						one= elem.type === 'select-one',
						values = one ? null : [],
						max= one ? ( index + 1 ) : options.length;

						if( index < 0 ) {
							i = max;
						}
						else {
							i = one ? index : 0;
						}

						for( ; i < max; i++ ) {
							opt=options[ i ];

							if( ( opt.selected || i === index ) && !opt.disabled && (!opt.parentNode.disabled || !nodeName(opt.parentNode,'optgroup')))
							{
								value=$L(opt).val();
								if(one)
								{
									return value;
								}
								values.push(value);
							}
						}
						return values;

					},

					set: function(elem,val) 
					{
						var optset,opt,options=elem.options,
						values =$L.makeArray(val),i=options.length;

						while( i-- )
						{
							opt = options[i];
							if(opt.selected = $L.inArray($L.valHooks.option.get(opt),values)>-1)
							{
								optset=true;
							}
						}	

						if( !optset )
						{
							elem.selectedIndex = -1;
						}
						return values;
					}
				},

				option: {
					get: function( elem ) {
						
						var val = $L.attr(elem,'value')

						return val!=null? val: stripAndCollapse($L(elem).text())
					}
				}
			}
	} );

	$L.propHooks = {
		tabIndex: {
			get: function( elem ) {
				var ind = elem.getAttribute( 'tabindex' );

				if( ind ) {
					return parseInt( ind, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) 
					|| rclickable.test( elem.nodeName ) 
					&& elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	};

	function setPositiveNumber( elem, value, subtract ) {
		var matches = rcssNum.exec( value );

		return matches ? Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || 'px' ) :
						value;
	}
} );

/***/ }),

/***/ 19978124:
/*!***************************************************************!*\
  !*** ./node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

;( function( factory ) {
	if(  true && typeof module.exports === "object" ) {
		module.exports = factory( false, true, true, true, true );
		// module.exports = function( scope, addTraversalModule, addEventsModule, addAjaxModule ) {

		// 	var isBundler = true;

		// 	addTraversalModule = addTraversalModule === undefined ? true : addTraversalModule;
		// 	addEventsModule = addEventsModule === undefined ? true : addEventsModule;
		// 	addAjaxModule = addAjaxModule === undefined ? true : addAjaxModule;

		// 	if( typeof scope === "undefined" ) {
		// 		return factory( window, isBundler, addTraversalModule, addEventsModule, addAjaxModule );
		// 	}
			
		// 	return factory( scope, isBundler, addTraversalModule, addEventsModule, addAjaxModule );
		// }
	}
	else {
		factory( window );		
	}
	
} )( function( scope, isBundler, addTraversalModule, addEventsModule, addAjaxModule ) {


	var arr = [];
	var slice = arr.slice;
	var push = arr.push;
	var indexOf = arr.indexOf;
	var concat = arr.concat;
	var class2type = {};
	var toString = class2type.toString;
	var hasOwn = class2type.hasOwnProperty;
	var fnToString = hasOwn.toString;
	var ObjectFunctionString = fnToString.call( Object );
	var prefDoc = window.document;

	/* POLYFILLING MATCHES */

	function groupMatch( sel, arr ) {
		var res = [], 
		i = 0, len = arr.length;

		for( ; i < len; i++ ) {
			if( $L._matches( arr[ i ], sel ) ) {
				res.push( arr[ i ] );
			} 
		}

		return res;
	}

	/* END */

	/* ISXML POLYFILL */

	var isXML = function( elem ) {
		var docElem = elem && ( elem.ownerDocument || elem ).documentElement;
		return docElem ? docElem.tagName !== 'HTML' : false;
	}

	/* ISXML POLYFILL */

	

	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}


	function isArrayLike( obj ) {
		var length = !!obj && "length" in obj && obj.length,type = toType( obj );
		if ( $L.isFunction( obj ) || $L.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}

	function containsCustom( sel ) {
		return sel.indexOf( ':visible' ) !== -1;
	}

	function getVisible( sel, context ) {
		var ind = sel.indexOf( ':visible' ),
		sub = sel.substring( 0, ind ),
		nodes, i = 0, ret = [];

		nodes = context.querySelectorAll( sub ? sub : '*' );

		for( ; i < nodes.length; i++ ) {
			if( isVisible( nodes[ i ] ) ) {
				ret.push( nodes[ i ] );
			}
		}

		return ret;
	}

	function processQuery( sel, context, ret ) {
		var groups, i;

		if( containsCustom( sel ) ) {
			groups = sel.split( "," );

			if( groups.length > 1 ) {
				for( i = 0; i < groups.length; i++ ) {
					processQuery( groups[ i ], context, ret );
				}
			}
			else {
				push.apply( ret, getVisible( groups[ 0 ], context ) );
			}
		}
		else {
			domQuery( sel, context, ret );
		}
	}

	function isVisible( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	}

	function domQuery( sel, context, ret ) {
		var nodes = context.querySelectorAll( sel );

		push.apply( ret, nodes );
	}

	var $L = function( selector, context ) {
		return new lyteDomObj( selector, context );
	}

	$L.isFunction = function( obj ) {
    	return typeof obj === "function" && typeof obj.nodeType !== "number";
  	}


	// we removed the  last part of the first regex over here
	var idRegex = /^(?:\s*(<[\w\W]+>)|#([\w-]+))$/,
	rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i ),
	rhtml = /<|&#?\w+;/,
	rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );



	// A regex to match the selector passed in

	var lyteDomObj = function( selector, context ) {
		var rootElem = rootElement, 
		idElem, match, key, idRet;

		if( !selector ) {
			return this;
		}

		if( typeof selector === 'string' ) {
			if( selector[ 0 ] === '<' 
				&& selector[ selector.length - 1 ] === '>' 
				&& selector.length > 3 
			) {
				match = [ null, selector, null ];
			}
			else {
				match = idRegex.exec( selector );
			}

			if( match && ( match[ 1 ] || !context ) ) {
				if( match[ 1 ] ) {
					context = context instanceof lyteDomObj ? context[ 0 ] : context;

					$L.merge( this, $L.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument : document
					) );

					if( rsingleTag.test( match[ 1 ] ) && $L.isPlainObject( context ) ) {
						for( key in context ) {
							if( $L.isFunction( this[ key ] ) ) {
								this[ key ]( context[ key ] );
							}
							else {
								this.attr( key, context[ key ] );
							}
						}
					}

					return this;
				}
				else {
					idElem = document.getElementById( match[ 2 ] );
					idRet = this.pushStack( idElem ? [ idElem ] : [] );
					idRet.isId = true;
					return idRet;
				}
			}

			else if( !context || context instanceof lyteDomObj ) {
				return ( context || rootElem ).find( selector );
			}
			else  {
				return this.constructor( context ).find( selector );
			}
		}
		// Handle nodes passed into lyte-dom
		else if( selector.nodeType ) {
			this[ 0 ] = selector;
			this.singular = true;
			this.length = 1;
			return this;
		}

		idRet = $L.makeArray( selector, this );
		if( selector === window ) {
			idRet.singular = true;
		}

		return idRet;
	}

	

	lyteDomObj.prototype = {
		splice: arr.splice, 
		constructor: $L,
		length: 0,
		push: arr.push,
		sort: arr.sort,
		indexOf: arr.indexOf
	}

	$L.prototype = lyteDomObj.prototype;


	// Add a new key with specified value to the object
	$L.extend = lyteDomObj.prototype.extend = function() {
		var key,
		i = 1,
		newObj, oldObj, obj, vessel,
		deep = false,
		length = arguments.length,
		result = arguments[ 0 ] || {};

		if( typeof result === 'boolean' ) {
			deep = result;
			result = arguments[ i ] || {};
			i++;
		}

		if( length == i ) {
			result = this
			i--;
		}

		if( !$L.isFunction( result ) && typeof result !== 'object' ) {
			result = {};
		}
		
		for( ; i < arguments.length; i++ ) {
			obj = arguments[ i ];

			for( key in obj ) {
				newObj = obj[ key ];
				oldObj = result[ key ];

				if( newObj === oldObj || key === '__proto__' ) {
					continue;
				}

				if( newObj && deep ) {
					if( Array.isArray( newObj ) ) {
						vessel = oldObj && Array.isArray( oldObj ) ? oldObj : [];

						result[ key ] = $L.extend( deep, vessel, newObj );
					}
					else if( $L.isPlainObject( newObj ) ) {
						vessel = $L.isPlainObject( oldObj ) ? oldObj : {};

						result[ key ] = $L.extend( deep, vessel, newObj );
					}
					else if( newObj !== undefined ) {
						result[ key ] = newObj;
					}
				}
				else {
					result[ key ] = obj[ key ];
				}
			}
		}
		return result;
	}
	var searchUtil = {
		startsWith :function (searchValue,value){
			return value.indexOf(searchValue) === 0;
		},
		endsWith : function (searchValue,value){
			return value.indexOf(searchValue) === value.length - searchValue.length;
		},
		includes :function (searchValue,value){
			return value.indexOf(searchValue) !== -1;
		}
	},
	convertValue = function(value,options){
		if(options.caseSensitive === false){
			value = value.toLowerCase();
		}
		if(options.trim){
			value =  value.trim();
		}
		return value;
	},
	checkValue =  function(searchType,searchValue,value,options){
		if(typeof value === "number" && (typeof searchValue === "string"  || searchType !== "equals")){
			value = value.toString();
		}
		else if(typeof value === "boolean" && searchType!="any" && searchType!="empty") {
			return searchValue === value;
		}
		else if(typeof value === "object") {
			return false;
		}
		value = convertValue(value,options);
		switch(searchType){
			case "any":{
				return true;
			}
			case "empty":{
				return !value;
			}
			case "equals":{
				return searchValue === value;
			}
			case "notEquals":{
				return searchValue != value;
			}
			default : {
				if(options.allowEmptyValue || searchValue){
					return searchUtil[searchType](searchValue,value);
				}
				return false;
			}
		}
	},
	isArray = function(value){
		return value && typeof value === "object" && Array.isArray(value);
	},
	isObject = function(value) {
		return value &&typeof value === "object" && !Array.isArray(value);
	};
	$L.extend( {
		
		// credits to: https://stackoverflow.com/a/5918791/7141445 
		userAgent: ( function() {
			var ua = navigator.userAgent, tem, 
		    M = ua.match(/(opera|CriOS|FxiOS|EdgiOS|OPT|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d.]+)/i) || [];

		    // IE
		    if( /trident/i.test( M[ 1 ] ) ) {
		        tem = /\brv[ :]+([\d.]+)/g.exec( ua ) || [];

		        return {
		        	browser: 'IE',
		        	version: ( tem[ 1 ] || '' ).split( '.' )[ 0 ],
		        	detailedVersion: [ 'IE', tem[ 1 ] ]
		        }
		    }

		    // Opera or UCBrowser or Edge or Samsung or YaBrowser or EdgeOnMac
		    if( M[ 1 ] === 'Chrome' ) {
		        tem = ua.match( /\b(OPR|Edge|UCBrowser|SamsungBrowser|YaBrowser|Edg|Falkon|EdgA)\/([\d.]+)/ );

		        if( tem != null ) {
		        	if( tem[ 1 ] === 'Edg' || tem[ 1 ] === 'EdgA' ) {
		        		tem[ 1 ] = 'Edge';
		        	}

		        	return {
		        		browser: tem[ 1 ],
		        		version: ( tem[ 2 ] || '' ).split( '.' )[ 0 ],
		        		detailedVersion: [ tem[ 1 ], tem[ 2 ], M[ 1 ], M[ 2 ] ]
		        	}
		        }

		    }

		    M = M[ 2 ] ? [ M[ 1 ], M[ 2 ] ] : [ navigator.appName, navigator.appVersion ];

		    // Safari
		    if( ( tem = ua.match( /version\/([\d.]+)/i ) ) != null

		    // Ignore Android
		    && !( /android/i ).test( ua ) 
		    ) {
		    	M.splice( 1, 1, tem[ 1 ] );
		    }
		   
		    // IOS Browsers
		    if( M[ 0 ] === 'CriOS' || M[ 0 ] === 'FxiOS' || M[ 0 ] === 'EdgiOS' || M[ 0 ] === 'OPT' ) {
		   		M[ 2 ] = 'Safari';
		   		
		    }

		    if( M[ 0 ] === 'MSIE' ) {
		   		M[ 0 ] = 'IE';	
		    }

		    return {
		    	browser: M[ 0 ],
		    	version: ( M[ 1 ] || '' ).split( '.' )[ 0 ],
		    	detailedVersion: M
		    };

		} )(),
		
		regex: {
			rnothtmlwhite: (/[^\x20\t\r\n\f]+/g)
		},

		_meta: {
			support: {}
		},

		_processInput: function( elems, key, value, fn, ret, eget, raw ) {
			var name, length = elems.length, i = 0;
			var bulk = key == null;

			if( toType( key ) === 'object') {
				ret = true;
				for( name in key ) {
					$L._processInput( elems, name, key[ name ], fn, true );
				}
			}
			else if( value !== undefined ) {
				ret = true;
				if( !$L.isFunction( value ) ) {
					raw = true;
				}

				if( bulk ) {
					if( raw ) {
						fn.call( elems,value );
						fn = null;
					}
					else {
						bulk = fn;
						fn = function( elem, key, value) {
							return bulk.call( $L( elem ), value );
						}
					}
				}

				if ( fn ) {
					for( ; i < length; i++ ) {
						fn( elems[ i ], key, raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) ) )
					}
				}
			}

			if( ret ) {
				return elems;
			}

			if( bulk ) {
				return fn.call( elems )
			}	

			return length ? fn( elems[ 0 ], key ) : eget;

		},

		_camelCase: function ( string ) {
			return string.replace( msPrefix, "ms-" ).replace( venPrefix, fcamelCase );
		},

		_removeDupes: function( elems, reverse, context ) {
			if( elems.length > 1 ){
				var nodes = uniqueSort( elems ) ;
				return context.pushStack( reverse ? nodes.reverse() : nodes );	
			}	

			return context.pushStack( elems );
		},

		_checkMatch: function( elem, sel ) {
			return !sel || $L._matches( elem, sel ) ? true : false;
		},

		_matches: function( elem, sel ) {
			var groups, i, ret, ind, sub,

			matchesSelector = elem.matches
							|| elem.matchesSelector
							|| elem.msMatchesSelector
							|| elem.webkitMatchesSelector
							|| elem.mozMatchesSelector;

			if( containsCustom( sel ) ) {
				groups = sel.split( "," );

				if( groups.length > 1 ) {
					for( i = 0; i < groups.length; i++ ) {
						ret = $L._matches( elem, groups[ i ] );
						if( ret ) {
							return true;
						}
					}	
				}
				else {
					sel = groups[ 0 ];
					ind = sel.indexOf( ':visible' );
					sub = sel.substring( 0, ind );

					return matchesSelector.call( elem, sub ? sub : '*' ) && isVisible( elem );
				}
			
			}
			// Should be in an else because there is a case in the if where it doesn't return a value
			else {
				return matchesSelector.call( elem, sel );
			}
		},

		expando: "lytedom" + Math.random().toString().replace(/\D/g,""),
		// Looks like map is going to get a third argument called which is mostly for internal usage

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		map: function( items, cb ) {
			var len = items.length,
			i,value,
			matches = [];

			if( isArrayLike( items ) ) {
				for( i = 0; i < len; i++ ) {
					value = cb( items[ i ], i );
					if( value != null ) {
						matches.push( value );
					}
				}
			}
			else {
				for( i in items ) {
					value = cb( items[ i ], i );
					if( value != null ) {
						matches.push( value );
					}
				}
			}
			
			// Flatten it
			return concat.apply( [], matches );

		},

		grep: function( items, cb, invert ) {
			var i=0, 
			expected = !invert,
			len = ( items || [] ).length, 
			matches = [];

			for( ; i < len; i++ ) {
				var ret = cb.call( window, items[ i ], i );
				if( !!ret === expected ) {
					matches.push( items[ i ] );
				}
			}

			return matches;
		},

		each: function( items, cb ) {
			var i, len;

			if( isArrayLike( items ) ) {
				len = items.length;
				for( i = 0; i < len; i++ ) {
					if( cb.call( items[ i ], i, items[ i ] ) === false ) {
						break;
					}
				}
			}
			else {
				for( i in items ) {
					if( cb.call( items[ i ], i, items[ i ] ) === false ) {
						break;
					}
				}
			}

			return items;
		},

		merge: function( obj, arr ) {
			var len, i, 
			extra = arr.length || 0;
			len = obj.length || 0;
			
			for( i = 0 ; i < extra; i++ ) {
				obj[ len + i ] = arr[ i ];
			}

			obj.length = extra + len;

			return obj;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}

			return true;
		},

		makeArray: function( arr, results ) {
			var ret = results || [];

			if( arr != null ) {
				if( isArrayLike( Object( arr ) ) ) {
					$L.merge(ret, typeof arr === 'string' ? [ arr ] :arr );
				}
				else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray : function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		isPlainObject: function( obj ) {
			var pro,ctor;

			if( !obj || toString.call( obj ) !== '[object Object]' ) {
				return false;
			}

			pro = Object.getPrototypeOf( obj );

			if( !pro ) {
				return true;
			}

			ctor = hasOwn.call( pro, 'constructor' ) && pro.constructor;

			return typeof ctor === "function" && fnToString.call( ctor ) === ObjectFunctionString;
		},

		parseXML: function( data ) {
			var parser = new DOMParser();

			return parser.parseFromString( data, 'text/xml' );
		},

		Evaluate: function( code ) {
			var node = document.createElement( 'script' );

			node.text = code;
			document.head.appendChild( node ).parentNode.removeChild( node );
		},

		removeLeaks: function( elems ) {
			var i = 0, cache, e;
			for( ; i < elems.length; i++ ) {
				if( ( cache = elems[ i ][ $L._dataPriv.expando ] ) ) {
					if( cache.events ) {
						for( e in cache.events ) {
							$L.ev.removeEvents( elems[ i ], e, cache.handle );
						}
					}

					cache = undefined;
				}

				if( cache ) {
					cache = undefined;
				}
			}
		},
		search : function ( array, key , value , searchType ,options, _nested_){
			var temparray  = [],tempKey,
			recursive=false,defaultType;
			if(isObject(array)){
				array = [array];
				defaultType = "object";
			}
			if(options){
				recursive = options.recursive || false ;
				if(options.caseSensitive ===  false){
					value = value.toLowerCase();
				}
				if(options.trim){
					value = value.trim();
				}
			}
			else{
				options = {};
			}
			if(key && typeof key === "string"){
				key = key.split(".");
			}
			if(!searchType){
				searchType = "includes";
			}
			else if(searchType !== "equals"){
				if(typeof value === "number" ){
					value = value.toString();
				}
			}
			if(key){
				tempKey = key[0];
			}
			for(var index=0;index<array.length;index++){
				var temp = array[index];
				if(!tempKey){
					if(checkValue(searchType,value,temp,options)){
						temparray.push(temp);
					}
					else if(isArray(temp)){
						var flag =  this.search(temp,tempKey,value,searchType,options,true);
						if(recursive && flag){
							return flag; //if recursive it return array in allcase
						}
						else if(flag){
							temparray.push(temp);
						}
					}
				}
				else if(isObject(temp) && tempKey in temp){
					if(key.length === 1 && checkValue(searchType,value,temp[tempKey],options)){
						temparray.push(temp);
					}
					else if( isArray(temp[tempKey]) || isObject(temp[tempKey])){
						var flag =  this.search(temp[tempKey],key.slice(1),value,searchType,options,true);
						if(recursive && flag){
							return  flag;
						}
						else if(flag){
							var tempObj = {};//to construct object
							tempObj[tempKey]=flag;
							temparray.push(temp);
						}
					}
				}
				else if(isArray(temp)){
					var flag =  this.search(temp,key,value,searchType,options,true);
					if(recursive && flag){
						return recursive;
					}
					else if(flag){
						temparray.push(temp);
					}
				}
				if(recursive && temp[options.children]){ //for json
					var flag =  this.search(temp[options.children],key,value,searchType,options,true);
					if(flag){
						var resultArray;
						if(temparray.length){
							resultArray=temparray.concat(flag);
						}
						else{
							resultArray=flag;
						}
						temparray = resultArray;
					}
				}
			}
			if(_nested_){
				if(temparray.length){
					if(recursive){
						return temparray
					}
					else if(defaultType === "object"){
						return temparray[0];
					}
					return temparray;
				}
				else{
					return false;
				}
			}
			else{
				return temparray;
			}
		}
	
	} );
function uniqueSort( res ) {
	var hasDupes = false,
	dupes = [], i = 0, j = 0, elem,
	inp = res.slice( 0 );

	res.sort( function( a, b ) {

		var compare;

		if( a === b ) {
			hasDupes = true;
			return 0;
		}

		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
					a.compareDocumentPosition( b ) :
					1;

		if( compare & 1 ) {
			if( a === document || a.ownerDocument === prefDoc && prefDoc.contains( a ) ) {
				return -1;
			}

			if( b === document || b.ownerDocument === prefDoc && prefDoc.contains( b ) ) {
				return 1;
			}

			return inp ? inp.indexOf( a ) - inp.indexOf( b ) : 0;
		}

		return compare & 4 ? -1 : 1;

	} );

	if( hasDupes ) {
		while( ( elem = res[ i++ ] ) ) {
			if( elem === res[ i ] ) {
				j = dupes.push( i );
			}
		}

		while( j-- ) {
			res.splice( dupes[ j ], 1 );
		}
	}

	return res;
}


	$L.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
		function( i, name ) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function roundPixelMeasures( val ) {
		return Math.round( parseFloat( val ) );
	}

	if( typeof document !== "undefined" ) {
		( function() {
			var input = document.createElement( 'input' ),
				select = document.createElement( 'select' ),
				opt = select.appendChild( document.createElement( 'option' ) );

			input.type = 'checkbox';

			// Android <= 4.3 bug
			$L._meta.support.checkOn = input.value !== '';

			// IE Bugs
			$L._meta.support.optSelected = opt.selected;

			input = document.createElement( 'input' );
			input.value = 't';
			input.type = 'radio';
			$L._meta.support.radioValue = input.value === 't';
		} )();

		( function() {
			function computeStyleTests() {
				if( !div ) {
					return ;
				}

				var styles, doc = document.documentElement;

				container.style.cssText = 'position: absolute; left: -2222px;width:300px;height:5px;';
				div.style.cssText = 'position:relative;width:200px;margin: auto; top: 1%;box-sizing:border-box;padding: 20px;';

				container.appendChild( div );
				doc.appendChild( container );

				styles = window.getComputedStyle( div );

				reliableMarginLeft = roundPixelMeasures( styles.marginLeft ) === 50;
				pixelPos = styles.top !== '1%';
				isBoxSizingReliable = roundPixelMeasures( styles.width ) === 200;

				doc.removeChild( container );
				div = null;
			}

			var div = document.createElement( 'div' ),
			container = document.createElement( 'div' ), 
			reliableMarginLeft, pixelPos, isBoxSizingReliable;

			$L.extend( $L._meta.support, {
				reliableMarginLeft: function() {
					computeStyleTests();
					return reliableMarginLeft;
				},

				reliablePixelPosition: function() {
					computeStyleTests();
					return pixelPos;
				},

				reliableBoxSizing: function() {
					computeStyleTests();
					return isBoxSizingReliable;
				}
			} );
		} )();
	}

	$L.needsContext = /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i;


	$L.dataid = 0

	function Data() {
		this.expando = $L.expando + $L.dataid++;
	}

	$L.extend( Data.prototype, {
		cache: function( elem ) {
			var res = elem[ this.expando ];

			if( !res ) {
				res = {};

				// Doing accept data stuff over here
				if( elem.nodeType ) {
					elem[ this.expando ] = res;
				}
				else {
					Object.defineProperty( elem, this.expando, {
						value: res,
						configurable: true
					} );
				}
			}

			return res;
		},

		get: function( elem, key ) {
			return key === undefined ? this.cache( elem ) :
										elem[ this.expando ] && elem[ this.expando ][ $L._camelCase( key ) ];
		},
		hasData: function( owner )
		{
			var cache = owner[this.expando];
			return cache !== undefined &&  !$L.isEmptyObject(cache)
		},
		access: function( elem,key,value )
		{
			if( key === undefined || ((key && typeof key==='string') && value === undefined))
			{
				return this.get(elem,key);
			}
			this.set(elem,key,value);
			return value !==undefined ? value : key;
		},
		set: function( elem, data, value )
		{
			var prop,
			cache = this.cache( elem );

			if ( typeof data === "string" ) 
			{
				cache[ $L._camelCase( data ) ] = value;
			} 
			else 
			{
				for ( prop in data ) 
				{
					cache[ $L._camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		remove: function( owner, key )
		{
			var i,cache = owner[ this.expando ];
			if (cache===undefined)
			{
				return;
			}
			if(key !== undefined)
			{
				if( Array.isArray( key ) )
				{
					key =key.map( $L._camelCase )
				}
				else
				{
					key = $L._camelCase( key );
					key = key in cache ?  [key] : ( key.match( $L.regex.rnothtmlwhite ) || [] )
				}
				i = key.length;
				while(i--)
				{
					delete cache[ key[i] ];
				}
			}

			if( key === undefined || $L.isEmptyObject(cache))
			{
				if( owner.nodeType )
				{
					owner[ this.expando ] = undefined;
				}
				else
				{
					delete owner[ this.expando ];
				}
			}
		}
	} );

	$L._dataPriv = new Data();
	var dataUser = new Data();

	lyteDomObj.prototype.extend( {
		toArray: function() {
			return slice.call( this );
		},

		add: function( sel, context ) {
			return this.pushStack(
				uniqueSort( 
					$L.merge(
						this.get(),
						$L( 
							sel, 
							context 
						)
					) 
				)
			);
		},

		addBack: function( sel ) {
			return this.add( sel == null ? this.prevObject : this.prevObject.filter( sel ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		has: function( arg ) {
			var args = $L( arg, this );
			var l = args.length;

			return this.filter( function() {
				var i = 0;
				for( ; i < l; i++ ) {
					// CONTAINS
					if( this !== args[ i ] && this.contains( args[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		is: function( sel ) {
			return filterFn( 
				this, 
				typeof sel === 'string' 
				&& $L.needsContext.test( sel ) ? $L( sel ) : 
												sel || [], 
				false ).length > 0 ;
		},

		not: function( sel ) {
			return this.pushStack( filterFn( this, sel || [] , true ) );
		}

	} );


	// LYTE DOM arrayLike manipulations
	lyteDomObj.prototype.extend( {

		eq: function( i ) {
			var length = this.length;
			i = i < 0 ? length + i : i;
			return this.pushStack( i < 0 || i > length - 1 ? [ ] : [ this[ i ] ] );
		},

		last: function() {
			return this.eq( -1 );
		},

		first: function() {
			return this.eq( 0 );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		map: function( cb ) {
			return this.pushStack( $L.map( this, function( item, index ) {
						return cb.call( item, index, item );
				} )
			);
		},

		filter: function( sel ) {
			return this.pushStack( filterFn( this, sel || [], false ) );
		},

		find: function( sel ) {
			var ret,
			self = this,
			len = this.length, i;

			if( typeof sel !== 'string' ) {
				return this.pushStack( $L( sel ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						// CONTAINS
						if ( self[ i ] !== this && self[ i ].contains( this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for( i = 0; i < len; i++ ) {
				processQuery( sel, this[ i ], ret );
				//domQuery( sel, this[ i ], ret );
			}

			return ret.length > 1 ? uniqueSort( ret ) : ret;
		},

		pushStack: function( elems ) {
			var retElements;

			retElements = $L.merge( this.constructor(), elems );
			retElements.prevObject = this;
			
			return retElements;
		},

		each: function( cb ) {
			return $L.each( this, cb );
		},

		get: function( i ) {

			if ( i == null ) {
				return slice.call( this );
			}

			return i < 0 ? this[ i + this.length ] : this[ i ];
		},

    	empty: function() {
     	 	this.each( function( index, elem ) {
     	 		if( elem.nodeType === 1 ) {
        			$L.removeLeaks( elem.getElementsByTagName( '*' ) );

          			elem.textContent = '';
        		}
     	 	} );
        		

      		return this;
    	},

		text: function( value ) {
      		return $L._processInput( this, null, value, function( value ) {
          		return value === undefined ? 
          		findText( this ) : 
          		this.empty().each( function() {
            		if( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
              			this.textContent = value;
              		}
          		} )
        	}, arguments.length );
    	}
    	// ,

    	// clone: function( dAndE, deepDAndE ) {
    	// 	dAndE = ( dAndE===true ) ?true : false;
    	// 	deepDAndE = deepDAndE == null ? dAndE : deepDAndE;

    	// 	return this.map( function() {
    	// 		return $L.clone( this , dAndE ,deepDAndE );
    	// 	} );
    	// }
	} );

	function findText( elems ) {
		var node, i = 0, ret = '',
		type = elems.nodeType, elem;

		if( !type ) {
			while( ( node = elems[ i++ ] ) ) {
				ret += findText( node );
			}	
		}
		else if( type === 1 || type === 9 || type === 11 ) {
			if( typeof elems.textContent === 'string' ) {
				return elems.textContent;
			}
			else {
				for( elem = elems.firstChild; elem; elem = elem.nextSibling ) {
					ret += findText( elem );
				}
			}
		}
		else if( type === 3 || type === 4 ) {
			return elems.nodeValue;
		}
		
		return ret;
	}

	var msPrefix = /^-ms-/,
	venPrefix = /-([a-z])/g;

	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	if( typeof document !== "undefined" ) {
		( function() {
			var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

			input.setAttribute( "type", "radio" );
			input.setAttribute( "checked", "checked" );
			input.setAttribute( "name", "t" );

			div.appendChild( input );

			$L._meta.support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

			div.innerHTML = "<textarea>x</textarea>";
			$L._meta.support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
		} )();	
	}

	function filterFn( elems, sel, not ) {

		if( typeof sel === 'string' ) {
			if( not ) {
				sel = ":not(" + sel + ")";
			}

			return groupMatch( sel, $L.grep( elems, function( node ) {
				return node.nodeType === 1;
			} ) );

		}
		else if( $L.isFunction( sel ) ) {
			return $L.grep( elems, function( elem, index ) {
				return !!sel.call( elem, index, elem ) !== not;
			} );
		}
		else if( sel.nodeType === 1 ) {
			return $L.grep( elems, function( elem ) {
				return ( elem === sel ) !== not;
			} );
		}
		else {
			return $L.grep( elems, function( elem ) {
				return ( indexOf.call( sel, elem ) > -1 ) !== not;
			} );
		}
	}


var wrapMap = {
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	_default: [ 0, "", "" ]
};


wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

$L.extend( {
	parseHTML: function( val, context ) {
		var matches = rsingleTag.exec( val ),
		parsed;

		if( matches ) {
			return [ context.createElement( matches[ 1 ] ) ];
		}

		parsed = buildFragment( val, context );

		return parsed;
	}
} );

function buildFragment( val, context ) {
	var frag = document.createDocumentFragment(),
	tag, wrap , j, nodes = [], first;

	if( rhtml.test( val ) ) {
		first = frag.appendChild( document.createElement( 'div' ) );
		tag = ( rtagName.exec( val )[ 1 ] || '' ).toLowerCase();
		wrap = wrapMap[ tag ] || wrapMap._default;
		first.innerHTML = wrap[ 1 ] + val + wrap[ 2 ];

		j = wrap[ 0 ];
		while ( j-- ) {
			first = first.lastChild;
		}

		$L.merge( nodes, first.childNodes ); 
		first = frag.firstChild;
		first.textContent = "";
	}

	return nodes;


} 


	$L.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || $L._dataPriv.hasData( elem )
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data);
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem,name );
		},

		_data: function( elem, name, data ) {
			return $L._dataPriv.access( elem,name,data )
		},

		_removeData: function( elem, name ) {
			$L._dataPriv.remove( elem,name );
		}

	} );

	lyteDomObj.prototype.extend( {
		data: function( key, value ) {

			var i, name, data,
			elem = this[ 0 ], 
			attr = elem && elem.attributes;

			if( key === undefined ) {
				if( this.length ) {
					data = dataUser.get( elem );

					if( elem.nodeType === 1 && !$L._dataPriv.get( elem, 'hasDataAttrs' ) ) {
						i = attr.length;
						while( i-- ) {
							if( attr[ i ] ) {
								name = attr[ i ].name;

								if( name.indexOf('data-') === 0) {
									name = $L._camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}

						$L._dataPriv.set( elem, 'hasDataAttrs', true );
					}
				}

				return data;
			}

			if( typeof key === 'object' ) {
				return this.each( function() {
					dataUser.set( this, key )
				} );
			}

			return $L._processInput( this, null, value, function( value ) {
				var data;

				if( elem && value === undefined) {
					data = dataUser.get( elem, key )
					if( data !== undefined ) {
						return data;
					}

					data = dataAttr( elem, key );

					if( data !== undefined ) {
						return data;
					}

					return ;
				}

				this.each( function() {
					dataUser.set( this, key, value )
				} );

			}, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} )
		}
	} );

var rmultiDash = /[A-Z]/g,
rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try  {
				data = getData( data );
			}

			catch ( e ) {}

			dataUser.set( elem, key, data );
		} 
		else {
			data = undefined;
		}
	}

	return data;
}




	var rootElement = typeof document !== "undefined" ? $L( document ) : {};

	$L.parse = JSON.parse;
	
	if( scope !== false ) {
		scope.$L = $L;
		scope.lyteDomObj = lyteDomObj;
	}
	
	/*
	Copyright (c) 2016 Wilson Page wilsonpage@me.com
	Copyright (c) 2019 ananthapadmanaban.n ananthapadmanaban.n@zohocorp.com
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), 
	to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, 
	distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	*/


	( function() {

		var r = window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function( cb ) { return setTimeout( cb, 1000 / 40 ) };

		var FastDom = function() {
			this.readOps = [];
			this.writeOps = [];
		}

		FastDom.prototype = {
			constructor: FastDom, 

			scheduled: false,

			measure: function( cb, context ) {
				cb = context ? cb.bind( context ) : cb;
				this.readOps.push( cb );
				this.stagingFn();
				return cb;
			},

			mutate: function( cb, context ) {
				cb = context ? cb.bind( context ) : cb;
				this.writeOps.push( cb );
				this.stagingFn();
				return cb;
			},

			stagingFn: function() {
				if( !this.scheduled ) {
					this.scheduled = true;
					r( this.executeTasks.bind( this ) );
				}
			},

			executeTasks: function() {
				var error;
				try {
					this.execute( this.readOps );
					this.execute( this.writeOps );
				}
				catch( e ) {
					error = e;
				}

				this.scheduled = false;
				if( this.readOps.length || this.writeOps.length ) {
					this.stagingFn();
				}

				if( error ) {
					if( this.catch ) {
						this.catch( error );
					}
					else {
						throw error ;
					}
				}
				
			},

			execute: function( cbs ) {
				var cb;
				while( cb = cbs.shift() ) {
					cb();
				}

			},

			clear: function( task ) {
				return this.remove( this.readOps, task ) || this.remove( this.writeOps, task );
			},

			remove: function( tasks, task ) {
				var ind = tasks.indexOf( task );
				return ind !== -1 ? !!tasks.splice( ind, 1 ) : false;
			},

			catch: null
		}

		$L.fastdom = new FastDom();





	} )();

	( function() {
		var setRtlScrollType = function() {
			var htmlString = "<div style='position: absolute; left: 0; top: 0; overflow: hidden; width: 10px;height: 1px;'><div style='width: 20px; height: 1px;'></div></div>",
			type = 'reverse',
			div = document.createElement('div');
			div.innerHTML = htmlString;
			var scrollableElement =  div.children[0];
			document.body.appendChild(scrollableElement);
			if (scrollableElement.scrollLeft > 0) {
				type = 'default';
			} else {
				scrollableElement.scrollLeft = -5;
				if(scrollableElement.scrollLeft < 0) {
					type = 'negative';
				}
			}
			document.body.removeChild( scrollableElement );
			return type;
		}
	
		if( typeof document === 'undefined' ) {
			return ;
		}
		
		if(document.readyState !== 'ready'	&& document.readyState !== 'complete' ) {
			document.addEventListener( 'DOMContentLoaded', function() {
				$L.rtlScrollType = setRtlScrollType();
			} );
		}
		else if( document.readyState === 'ready' || document.readyState === 'complete' ) {
			$L.rtlScrollType =  setRtlScrollType();
		}
	} )();

	if( isBundler ) {

		if( addTraversalModule ) {
			__webpack_require__( /*! ./lyte-dom-traversal.js */ 22235237 )( $L, lyteDomObj );
		}
		
		if( addEventsModule ) {
			__webpack_require__( /*! ./lyte-dom-events.js */ 76361426 )( $L, lyteDomObj );
		}

		if( addAjaxModule ) {
			__webpack_require__( /*! ./lyte-dom-ajax.js */ 23200907 )( $L, lyteDomObj );
		}
    }

	return $L;

} );


/***/ }),

/***/ 5888064:
/*!*******************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/addon.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LyteUiComponentAddon": () => (/* binding */ LyteUiComponentAddon)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 52193885);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/exportable-helpers.js */ 63465505);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_helpers_dev_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/helpers-dev.js */ 60488310);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_utilityFn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/utilityFn.js */ 33084052);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_eventListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/eventListeners.js */ 35312679);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_eventListeners_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_ui_component_components_helpers_eventListeners_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_tableNavigation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/tableNavigation.js */ 87329985);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_lyte_copy2clip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/lyte-copy2clip.js */ 6669686);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_lyte_copy2clip_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_ui_component_components_helpers_lyte_copy2clip_js__WEBPACK_IMPORTED_MODULE_8__);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "LyteAddon": function() {
        return _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.LyteAddon;
    },

    "LyteUiComponentComponentRegistry": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_2__.LyteUiComponentComponentRegistry;
    },

    "lyteUiGetValue": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiGetValue;
    },

    "lyteUiReturnValueBy": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnValueBy;
    },

    "lyteUiConcat": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiConcat;
    },

    "lyteUiI18n": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiI18n;
    },

    "lyteUiImageFile": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiImageFile;
    },

    "lyteUiCapitalizeName": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiCapitalizeName;
    },

    "lyteUiFileSize": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiFileSize;
    },

    "lyteUiOptGroupCheck": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiOptGroupCheck;
    },

    "lyteUiIsObject": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiIsObject;
    },

    "lyteUiReturnOnlyKey": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyKey;
    },

    "lyteUiReturnOnlyValue": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyValue;
    }
});














class LyteUiComponentAddon extends _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.LyteAddon {
    lookups(){
        return [ {component : _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_2__.LyteUiComponentComponentRegistry} ];
    }

    static addHelpersToRegistry( registry ) {
        registry.registerHelper( 'lyteUiGetValue', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiGetValue );
        registry.registerHelper( 'lyteUiReturnValueBy', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnValueBy );
        registry.registerHelper( 'lyteUiConcat', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiConcat );
        registry.registerHelper( 'lyteUiI18n', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiI18n );
        registry.registerHelper( 'lyteUiImageFile', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiImageFile);
        registry.registerHelper( 'lyteUiCapitalizeName', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiCapitalizeName);
        registry.registerHelper( 'lyteUiFileSize', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiFileSize);
        registry.registerHelper( 'lyteUiOptGroupCheck', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiOptGroupCheck);
        registry.registerHelper( 'lyteUiIsObject', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiIsObject);
        registry.registerHelper( 'lyteUiReturnOnlyKey', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyKey);
        registry.registerHelper( 'lyteUiReturnOnlyValue', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyValue);
    }

    _() {
        _;
    }
}





LyteUiComponentAddon.singleTon = true;







LyteUiComponentAddon.register({
    hash: "@zoho/lyte-ui-component_3"
});


/***/ }),

/***/ 50761997:
/*!**********************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/component.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "LyteUiComponentComponentRegistry": () => (/* binding */ LyteUiComponentComponentRegistry)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "ComponentRegistry": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.ComponentRegistry;
    }
});





class LyteUiComponentComponentRegistry extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.ComponentRegistry{
    constructor(){
        super();
    }
    lookups(){
        return [];
    }

    _() {
        _;
    }
}

LyteUiComponentComponentRegistry.register({
    hash: "C_lyte-ui-component_@zoho/lyte-ui-component_2",
    refHash: "@zoho/lyte-ui-component_3"
});

class Component extends LyteUiComponentComponentRegistry.Component {
    lookups(){
        return [   {component : LyteUiComponentComponentRegistry} ];
    }

    _() {
        _;
    }
}

 


/***/ }),

/***/ 35312679:
/*!***********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/helpers/eventListeners.js ***!
  \***********************************************************************************/
/***/ (() => {

/* 
 * only for global events ( Ex. scroll, resize, orientationchange, click )
 * dont bind mousedown, mousemove, mouseup, mouseover kind of events 
 */

;( function(){

	var order_of_callback = {
		click : [ "menu", "dropdown", "input", "datetimeinput", "popover", "modal" ],
		scroll : [ "modal", "popover", "menu", "dropdown", "input", "datetimeinput" ],
		resize : [ "modal", "popover", "menu", "dropdown", "input", "datetimeinput" ]
	};

	function get_new_order( callback_order, components ){
		for( var key in components ){
			if( callback_order.indexOf( key ) + 1 ){
				continue;
			}
			callback_order.push( key );
		}

		return callback_order;
	}

	function common_callback( evt ){
		var type = evt.type,
		dom = evt.currentTarget,
		components = dom._lyteUi_evts[ type ] || {},
		callback_order = get_new_order( order_of_callback[ type ] || [], components );

		callback_order.every( function( name ){
			var handlers = components[ name ] || [],
			ret;
			
			handlers.every( function( item ){
				
				try{
					ret = item.call( this, evt );
				} catch( e ){
					console.error( e );
				}

				return ret != false;
			});

			return ret != false;
		});
	}

	window._lyteUiUtils.addEvent = function( dom, name, callback, ns ){

		var reg_evt = dom._lyteUi_evts;
		
		if( !reg_evt ){
			reg_evt = dom._lyteUi_evts = {};
		}

		var components = reg_evt[ name ];

		if( !components ){
			components = reg_evt[ name ] = {};
			dom.addEventListener( name, common_callback, true );
		}

		ns = ns || "others";

		var handlers = components[ ns ];

		if( !handlers ){
			handlers = components[ ns ] = [];
		}

		handlers.push( callback );
	}

	_lyteUiUtils.removeEvent = function( dom, name, callback, ns ){

		var reg_evt = dom._lyteUi_evts || {},
		components = reg_evt[ name ] || {},
		handlers = components[ ns || 'others' ] || [],
		index = handlers.indexOf( callback );

		if( index + 1 ){
			handlers.splice( index, 1 );
		}
	}

})();

/***/ }),

/***/ 63465505:
/*!***************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/helpers/exportable-helpers.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lyteUiCapitalizeName": () => (/* binding */ lyteUiCapitalizeName),
/* harmony export */   "lyteUiConcat": () => (/* binding */ lyteUiConcat),
/* harmony export */   "lyteUiFileSize": () => (/* binding */ lyteUiFileSize),
/* harmony export */   "lyteUiGetValue": () => (/* binding */ lyteUiGetValue),
/* harmony export */   "lyteUiI18n": () => (/* binding */ lyteUiI18n),
/* harmony export */   "lyteUiImageFile": () => (/* binding */ lyteUiImageFile),
/* harmony export */   "lyteUiIsObject": () => (/* binding */ lyteUiIsObject),
/* harmony export */   "lyteUiOptGroupCheck": () => (/* binding */ lyteUiOptGroupCheck),
/* harmony export */   "lyteUiReturnOnlyKey": () => (/* binding */ lyteUiReturnOnlyKey),
/* harmony export */   "lyteUiReturnOnlyValue": () => (/* binding */ lyteUiReturnOnlyValue),
/* harmony export */   "lyteUiReturnValueBy": () => (/* binding */ lyteUiReturnValueBy),
/* harmony export */   "stringify": () => (/* binding */ stringify)
/* harmony export */ });
function lyteUiGetValue( object, key ) {
    return object[ key ];
}

function lyteUiReturnValueBy(content,key){
	if(key || key == 0){
		return content[key]
	}
	else{
		return content
	}
}

function lyteUiConcat() {	
	var resp = '';
	var argLength = arguments.length;
	for( var i=0; i<argLength; i++ ) {
		if( arguments[ i ] != undefined ) {
			resp += arguments[ i ];
		}
	}
	return resp;
}

function lyteUiI18n(key,componentName){
	return _lyteUiUtils.i18n(key,componentName);
}

function lyteUiImageFile( file ){
	if(file.src && file.fileType === "image" ) {
		return true;
	}
	return false;
}

function lyteUiCapitalizeName(name){
	return _lyteUiUtils.capitalize(name);
}

function lyteUiFileSize( curr, def, dgt ){
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], idx = 0;
	if( def ) {
		idx = Math.max( idx, sizes.indexOf( def ) );
	} else {
		idx = Math.floor( Math.log( curr ) / Math.log( 1000 ) )
	}
	if( idx == 0 && curr == 1 ){
		return "1 Byte";
	}
	return ( parseInt( curr / Math.pow( 1000 , idx ) * Math.pow( 10, dgt ) ) / Math.pow( 10, dgt ) ) + ' ' + sizes[ idx ];

}

function lyteUiOptGroupCheck(content){
	if(content.constructor == Object)
		{
		  if(Object.keys(content).length == 1)
			  {
				  var value = content[Object.keys(content)[0]]
				  if(value.constructor == Object || value.constructor == Array)
				  {
					  return true
				  }
			   }
		}
	return false
}

function lyteUiIsObject(obj) {

	if ( Object.prototype.toString.call(obj) === "[object Object]" ) {
		return true;
	} else {
		return false;
	}
}

function lyteUiReturnOnlyKey( item ) {
    var lyteSelf = this;
    var objectkeys = Object.keys(item)
    if(objectkeys)
		{
			return objectkeys[0]
		}
	else
		{
			return false
		}
}

function lyteUiReturnOnlyValue( item ) {
	var objectkeys = Object.keys(item)
	return item[objectkeys[0]]
}

function stringify( obj ){
	return JSON.stringify( obj );
}



/***/ }),

/***/ 60488310:
/*!********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/helpers/helpers-dev.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_lyteUiUtils": () => (/* binding */ utils)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/component.js */ 50761997);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);
/* harmony import */ var _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-ui-component/components/helpers/exportable-helpers.js */ 63465505);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js */ 19978124);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4__);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "LyteUiComponentComponentRegistry": function() {
        return _node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry;
    },

    "appendChild": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.appendChild;
    },

    "insertBefore": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.insertBefore;
    },

    "insertAfter": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.insertAfter;
    },

    "replaceWith": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.replaceWith;
    },

    "stringify": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.stringify;
    },

    "lyteUiGetValue": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiGetValue;
    },

    "lyteUiReturnValueBy": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnValueBy;
    },

    "lyteUiConcat": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiConcat;
    },

    "lyteUiI18n": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiI18n;
    },

    "lyteUiImageFile": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiImageFile;
    },

    "lyteUiCapitalizeName": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiCapitalizeName;
    },

    "lyteUiFileSize": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiFileSize;
    },

    "lyteUiOptGroupCheck": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiOptGroupCheck;
    },

    "lyteUiIsObject": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiIsObject;
    },

    "lyteUiReturnOnlyKey": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyKey;
    },

    "lyteUiReturnOnlyValue": function() {
        return _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyValue;
    }
});






window._lyteUiUtils = window._lyteUiUtils || { version : "4.1.7" };

window._lyteUiUtils.cboxId = 0;
window._lyteUiUtils.rbuttonId = 0;
window._lyteUiUtils.calId = 0;

window._lyteUiUtils.appendLocation = 'last'; // alternate is first

_lyteUiUtils.setAppendLocation = function( appendLocation ) {
	_lyteUiUtils.appendLocation = appendLocation;
};

( function() {
	var defaultValueCache = {};

	window._lyteUiUtils.resolveDefaultValue = function( componentName, propertyName, componentDefaultValue ) {
		var valueMap = defaultValueCache[ componentName ] || {};

		if( propertyName in valueMap ) {
			return clone( valueMap[ propertyName ] );
		}

		return componentDefaultValue;
	}

	_lyteUiUtils.registerDefaultValues = function( obj ) {
		for( var componentName in obj ) {
			var defaultValueMap = obj[ componentName ];

			defaultValueCache[ componentName ] = defaultValueMap;
		}
	}

	_lyteUiUtils.getDefault = function( name ){
		return defaultValueCache[ name ] || {};
	}

	var clone = function( org ) {
		var type = typeof org, result = {};

		if( type !== 'object' ) {
			return org;
		}

		if( Array.isArray( org ) ) {
			return org.slice( 0 );
		}

		// TODO: This can break. Need to deep clone.
		for( var key in org ) {
			result[ key ] = org[ key ];
		}

		return result;
	}

} )();

window._lyteUiUtils.getVisibleDropdowns = function() {
	var dropboxes = document.querySelectorAll( 'lyte-drop-box:not(.lyteDropdownHidden)' ), res = [], dropdown;

	for( var i = 0; i < dropboxes.length; i++ ) {
		dropdown = dropboxes[ i ].origindd;

		if( dropdown ) {
			res.push( dropdown );
		}
	}

	return res;
}

_lyteUiUtils.getRecentModal = function(){
	if(_lyteUiUtils.popupStack && _lyteUiUtils.popupStack.modalStack){
		var modalElem = {}
		modalElem.modalElem = _lyteUiUtils.popupStack.modalStack[_lyteUiUtils.popupStack.modalStack.length - 1].parentElement
		modalElem.childElem = _lyteUiUtils.popupStack.modalStack[_lyteUiUtils.popupStack.modalStack.length - 1].childElement
		return modalElem
	}
	
	return {}
}

_lyteUiUtils.getRecentPopover = function(){
	if(_lyteUiUtils.popupStack && _lyteUiUtils.popupStack.popoverStack){
		var popoverElem = {}
		popoverElem.popoverElem = _lyteUiUtils.popupStack.popoverStack[_lyteUiUtils.popupStack.popoverStack.length - 1].parentElement
		popoverElem.childElem = _lyteUiUtils.popupStack.popoverStack[_lyteUiUtils.popupStack.popoverStack.length - 1].childElement
		return popoverElem
	}
	
	return {}
}


_lyteUiUtils.closeDropdowns = function() {
	var dropdowns = _lyteUiUtils.getVisibleDropdowns() || [];

	for( var i = 0; i < dropdowns.length; i++ ) {
		dropdowns[ i ].close();
	}
}

_lyteUiUtils.closeAllPopups = function(){
	if(_lyteUiUtils.popupStack){
		var popups = _lyteUiUtils.popupStack.globalStack
		if(popups && popups.length > 0){
			for(var i=popups.length-1;i>=0;i--){
				if(popups[i].parentElement){
					_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()(popups[i].parentElement)[0].setData('ltPropShow' , false)
				}
			}
		}
	}
}

_lyteUiUtils.i18n = function( key, componentName, fallback ){
	var keyName = ( componentName ? ( "lyte." + componentName + "." + key ) : key ),
	__obj = window._lyteUiComponentsLocale || {},
	ret =  __obj[ keyName || "" ];

	return ret || fallback || key;
}

_lyteUiUtils.getRTL = function(){
	if( this.Rtl != undefined && this.Rtl != null ) {
		return this.Rtl;
	}
	return this.Rtl = ( window.getComputedStyle( document.body ).getPropertyValue( 'direction' ) == 'rtl' );
}

_lyteUiUtils.isIos = /ip(hone|ad|od)/i.test( window.navigator.userAgent ) || ( /macintosh/i.test( window.navigator.userAgent ) && 'ontouchend' in document );

_lyteUiUtils.isAndroid = /android/i.test( window.navigator.userAgent );

_lyteUiUtils.isMobile =  _lyteUiUtils.isIos || _lyteUiUtils.isAndroid;


_lyteUiUtils.escape = function( str ){

	// convert to string and call replace

	if( typeof str === "number" ) {
		str = str + '';
	}
	return ( str || '' ).replace(/(\\|\'|\"|\?)/g, '\\$1');
}

_lyteUiUtils.appendChild = function( outlet, component ) {
	if( outlet !== document.body || _lyteUiUtils.appendLocation === 'last' ) {
		if( true && _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.appendChild){
			return (0,_node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.appendChild)( outlet, component ) || component;
		}
		else {
			return (0,_node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.appendChild)( outlet, component ) || component;
		}
	}
	else {
		var firstChild = outlet.children[ 0 ],
		elementToPrepend = component,
		parentNode = outlet;

		return _lyteUiUtils.insertBefore( firstChild, elementToPrepend, parentNode ) || component;
	}
}

_lyteUiUtils.insertBefore = function( outlet, component ){
	// if(true && insertBefore){
		return (0,_node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.insertBefore)( outlet, component );
	// }
	// else {
		// return window.LyteComponent.insertBefore( outlet, component );
	// }
}

_lyteUiUtils.dispatchEvent = function( eventType, component , event_argument){
	var option = {};
	option.bubbles = true;
	option.detail = event_argument || {};
	var customevent =  new window.CustomEvent(eventType,option);
	return component && component.dispatchEvent(customevent);
}
_lyteUiUtils.insertAfter = function( outlet, component ){
	// if(true && insertAfter){
		return (0,_node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.insertAfter)( outlet, component );
	// }
	// else {
		// return window.LyteComponent.insertAfter( outlet, component );
	// }
}

_lyteUiUtils.getZIndex = function(){
	var zIndex = 1060;
	var globalStack = _lyteUiUtils.popupStack.globalStack
	if(globalStack && globalStack.length>1){
		var prevZ = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()(globalStack[globalStack.length-2].childElement).find('.lytePopupZI')
		zIndex = parseInt(getComputedStyle(prevZ[0]).zIndex) + 2
	}
	return zIndex;
}

_lyteUiUtils.getScrollBarWidth = function( ){
	if( this._scrollwidth != undefined ){
		return this._scrollwidth;
	}
	var e = document.createElement("p");
    e.style.width = "100%";
    e.style.height = "200px";
    var t = document.createElement("div");
    t.style.position = "absolute";
    t.style.top = "0px"
    t.style.left = "0px"
    t.style.visibility = "hidden"
    t.style.width = "200px"
    t.style.height = "150px"
    t.style.overflow = "hidden"
    t.appendChild(e)
    document.body.appendChild(t);
    var a = e.offsetWidth;
    t.style.overflow = "scroll";
    var i = e.offsetWidth;
    a == i && (i = t.clientWidth)
    document.body.removeChild(t)
    this._scrollwidth = a - i;
    return this._scrollwidth;
}

_lyteUiUtils.replaceWith = function( outlet, component ){
	// if( replaceWith){
		return (0,_node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_2__.replaceWith)( outlet, component );
	// }
	// else {
		// return window.LyteComponent.replaceWith( outlet, component );
	// }
}

_lyteUiUtils.registeredCustomElements =  _lyteUiUtils.registeredCustomElements || {};

_lyteUiUtils.mergeObjects = function( oldObj, newObj ) {
	var result = {};

	for( var key in newObj ) {
		result[ key ] = newObj[ key ];
	}

	for( var key in oldObj ) {
		if( !( key in newObj ) ) {
			result[ key ] = false;
		}
	}

	return result;
}

_lyteUiUtils.setAttribute = function( element, newAria, oldAria ){
	var attributeList = _lyteUiUtils.mergeObjects( oldAria, newAria );

	for( var attribute in attributeList ) {
		if( attributeList[ attribute ] === false ) {
			element.removeAttribute( attribute )
		}
		else {
			element.setAttribute( attribute, attributeList[ attribute ] );
		}
	}
}

_lyteUiUtils.getZIndex = function(){
	var zIndex = 1060;
	var globalStack = _lyteUiUtils.popupStack.globalStack
	if(globalStack && globalStack.length>1){
		var prevZ = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()(globalStack[globalStack.length-2].childElement).find('.lytePopupZI')
		zIndex = parseInt(window.getComputedStyle(prevZ[0]).zIndex) + 2
	}
	return zIndex;
}

_lyteUiUtils.updateAria = function( element, key, value, prop ){
	var tagName = element.tagName.toLowerCase(),
	mapping = {
		/* Given util function should be defined in component. All the modifications should be done inside defined util*/
		// input : "updateAria"
		"radiobutton-group": "updateAriaArray"
	},
	tag = tagName.replace( /^lyte\-/, '' ),
	mapped = mapping[ tag ];

	if( mapped ){

		element[ mapped ](  key, value );

	} else if( element.ltProp ) {
		var string_property = { // string property
			breadcrumb : "ariaValue",
			step : "ariaValue"
		},
		object_property = {
			/*Name of the property to be updated if its object. Default value will be ariaAttributes*/
		},
		string_value = string_property[ tag ];

		if( string_value ){
			return element.ltProp( string_value, key );
		}

		objectutils( element.ltProp(  prop || object_property[ tag ] || "ariaAttributes" ) || {}, value != void 0 ? 'add' : 'delete', key, value );
	} else {
		_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()( element ).attr( key, value );
	}
}


_lyteUiUtils.trapFocus = function( evt, node ){
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), *[contenteditable]';
    var parent = node || window.LytePopup.components[window.LytePopup.components.length-1].actualModalDiv;

    // get list of focusable items
    var focusableItems;
    focusableItems = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()(parent.querySelectorAll(focusableElementsString)).filter(function(ind, item){ return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()(item).is(':visible') && (item.tabIndex != -1) && !(item.disabled) });

    if(focusableItems.length == 0){
        return;
    }
    if(node){
        if(focusableItems.length > 1 && (focusableItems[0].classList.contains('lyteModalClose') || focusableItems[0].classList.contains('lytePopoverClose'))){
            focusableItems[1].focus();
        }
        else{
            focusableItems[0].focus();
        }
        return;
    }

    // get currently focused item
    var focusedItem = document.activeElement;

    if(!(parent.contains(focusedItem))){
        // LytePopup.initializeFocus(parent);

        //Initialize Focus
        if(parent.classList.contains('lyteModal') || parent.classList.contains('lytePopover')){
            _lyteUiUtils.trapFocus(null, parent);
        }
        else if(parent.classList.contains('alertPopup')){
            var buttons = parent._callee.ltProp('buttons');
            for(var i = 0; i<buttons.length; i++){
                if(buttons[i].type == "accept"){
                    parent.querySelectorAll('button')[i].focus();
                    break;;
                }
            }
        }
        return;
    }

	

    // get the number of focusable items
    var numberOfFocusableItems = focusableItems.length;

    // get the index of the currently focused item
    var focusedItemIndex;
    for(var i = 0; i < focusableItems.length; i++){
        if(focusableItems[i] == focusedItem){
            focusedItemIndex = i;
            break;
        }
    }

    if (evt.shiftKey) {
        //back tab
        // if focused on first item and user preses back-tab, go to the last focusable item
        if (focusedItemIndex == 0) {
            focusableItems.get(numberOfFocusableItems - 1).focus();
            evt.preventDefault();
        }

    } else {
        //forward tab
        // if focused on the last item and user preses tab, go to the first focusable item
        if (focusedItemIndex == numberOfFocusableItems - 1) {
            focusableItems.get(0).focus();
            evt.preventDefault();
        }
    }
}

_lyteUiUtils.getBrowser = function(){
	//Check if browser is IE11
    if (window.navigator.userAgent.search("rv:11") >= 0) {
        return "ie";
    }
    //Check if browser is Edge
    if (window.navigator.userAgent.search("Edge") >= 0) {
        return "edge";
    }
    //Check if browser is Chrome || Opera
    else if (window.navigator.userAgent.search("Chrome") >= 0) {
        return "chrome";
    }
    //Check if browser is Firefox
    else if (window.navigator.userAgent.search("Firefox") >= 0) {
        return "firefox";
    }
    //Check if browser is Safari
    else if (window.navigator.userAgent.search("Safari") >= 0 && window.navigator.userAgent.search("Chrome") < 0) {
        return "safari";
    }
};

_lyteUiUtils.isNegativeScroll = function() {

    if( this._negativeScrollChrome != undefined ){
        return this._negativeScrollChrome;
    }

    var element =
    document.body.appendChild( _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()( "<div style='position: absolute; left: 0; top: 0; overflow: hidden; width: 10px;height: 1px;'><div style='width: 20px; height: 1px;'></div></div>" ).get( 0 ) ),
    newChrome;

    element.scrollLeft = -5;
    newChrome = element.scrollLeft < 0;
    document.body.removeChild( element );
    this._negativeScrollChrome = newChrome;
    return newChrome;
}

_lyteUiUtils.getCorrectNumberCode = function( code ){
    if( code >= 96 && code <= 105 ){
        return code - 48;
    }
    return code;
}

_lyteUiUtils.capitalize = function( str ){
	return ( str || '' ).replace( /^./, function( match ){
		    return match.toUpperCase();
	});
}

_lyteUiUtils.lyteUiFileSize = function( curr, def, dgt ){
	var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], idx = 0;
	if( def ) {
		idx = Math.max( idx, sizes.indexOf( def ) );
	} else {
		idx = Math.floor( Math.log( curr ) / Math.log( 1000 ) )
	}
	if( idx == 0 && curr == 1 ){
		return "1 Byte";
	}
	return ( parseInt( curr / Math.pow( 1000 , idx ) * Math.pow( 10, dgt ) ) / Math.pow( 10, dgt ) ) + ' ' + sizes[ idx ];

};

_lyteUiUtils.lyteUiIsEmpty = function(input){

	let type = typeof input;

	switch (type){
		case 'string':
			return input === "";
		case 'number':
		case 'Bigint':
			return input == '';
		case 'object':
			if( Array.isArray( input ) ){
				return input.length === 0;
			}else{
				return Object.keys( input ).length === 0;
			}
		case 'undefined':
			return true;
	}

};

// Accessibility
_lyteUiUtils.reduceAnimation = function(){
    _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()('body').addClass('lyteUiCompReduceAnim');
}

_lyteUiUtils.enableAnimation = function(){
    _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default()('body').removeClass('lyteUiCompReduceAnim')
}

_lyteUiUtils.dateFilterValue = function( startValue , endValue , selected , format ) {
	let moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment() , 
		inf = Infinity ,
		input = "" ,
		isValid = !!selected ,
		fns = {};

	switch( selected ){
		case 'is' : 
		case 'is_not' : {
			moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment( new Date( startValue ) )
			input = "{{start}}";
		}
		case 'today' : {
			fns.end = [ { name : "endOf", args : [ 'day' ] } ];
			fns.start = [ { name : "startOf", args : [ 'day' ] } ];
		}
		break;
		case 'till_yesterday' : {
			fns.end = [ 
				{ name : "startOf", args : [ 'day' ] },
				{ name : "subtract", args : [ 1, 'milliseconds' ] } 
			];
		}
		break;
		case 'yesterday' : {
			fns.end = [ 
				{ name : "startOf", args : [ 'day' ] },
				{ name : "subtract", args : [ 1, 'milliseconds' ] } 
			];

			fns.start = [ { name : "startOf", args : [ 'day' ] } ];

		}
		break;
		case 'tomorrow' : {
			fns.start = [ 
				{ name : "endOf", args : [ 'day' ] },
				{ name : "add", args : [ 1, 'milliseconds' ] } 
			];

			fns.end = [ { name : "endOf", args : [ 'day' ] } ];
		}
		break;
		case 'next_7_days' : {
			fns.start = [ 
				{ name : "endOf", args : [ 'day' ] },
				{ name : "add", args : [ 1, 'milliseconds' ] } 
			];

			fns.end = [ { name : "add", args : [ 7, 'day' ] } ];
		}
		break;
		case 'this_week' : {
			fns.start = [ 
				{ name : "startOf", args : [ 'week' ] }
			];
			
			fns.end = [ { name : "endOf", args : [ 'week' ] } ];
		}
		break;
		case 'this_month' : {
			fns.start = [ 
				{ name : "startOf", args : [ 'month' ] }
			];
			
			fns.end = [ { name : "endOf", args : [ 'month' ] } ];
		}
		break;
		case 'last_week' : {
			fns.end = [ 
				{ name : "startOf", args : [ 'week' ] },
				{ name : "subtract", args : [ 1, 'milliseconds' ] } 
			];
			
			fns.start = [ { name : "startOf", args : [ 'week' ] } ];
		}
		break;
		case 'last_month' : {
			fns.end = [ 
				{ name : "startOf", args : [ 'month' ] },
				{ name : "subtract", args : [ 1, 'milliseconds' ] } 
			];
			
			fns.start = [ { name : "startOf", args : [ 'month' ] } ];
		}
		break;
		case 'less_than' : {
			moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment( new Date( startValue ) )
			fns.end = [ { name : "subtract", args : [ 1, 'milliseconds' ] } ];
			startValue = -inf;

			input = "< {{start}}";
		}
		break;
		case 'greater_than' : {
			moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment( new Date( startValue ) )
			fns.end = [ { name : "add", args : [ 1, 'seconds' ] } ];
			endValue = inf;
			input = "> {{start}}";
		}
		case 'less_than_or_equal' : {
			endValue = startValue;
			startValue = -inf;
			input = "<= {{start}}";
		}
		break;
		case 'greater_than_or_equal' : {
			endValue = inf;
			input = " >= {{start}}";
		}
		break;
		case 'between' : 
		case 'not_between' : {
			if( !( isValid = ( startValue != -inf && endValue != inf ) ) ){
				moment = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment( new Date( 'invalid' ) );
			}
			input = "{{start}} < && {{end}} >";
		}
		break;
	}

	if( !moment.validate() ){
		startValue = startValue == -inf ? -inf : startValue;
		endValue = endValue == inf ? inf : endValue;
		isValid = false;
	} else {
		for( var key in fns ){
			var __value = fns[ key ],
			__length = __value.length,
			final;

			for( var i = 0; i < __length; i++ ){
				var __cur = __value[ i ];
				 moment[ __cur.name ].apply( moment, __cur.args );
			}

			final = moment.format();

			if( key == 'start' ){
				startValue = final;
			} else {
				endValue = final;
			}

			input = input.replace( '{{' + key + "}}", moment.format( format ) );
		}
	}

	return { start: startValue, end: endValue , isValid : isValid , input : input };

};

_lyteUiUtils.updateI18n = function( key, value ){
	window._lyteUiComponentsLocale[ key ] = value;
};

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiReturnOnlyKey", _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyKey );
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiReturnOnlyValue",_node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnOnlyValue);

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( "lyteUiGetLinearIndex", function( obj, rowIndex, columnIndex ) {
	return obj[ rowIndex * 4 + columnIndex ];
} );

/**
 * Helper to return url when flag is true
 * @param {string} url - The url to return
 * @param {boolean} flag - True returns the URL , false returns an empty string
 *
 */

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiSetURL', function( url, flag ) {

	if( flag ) {
		return url;
	} else {
		return '';
	}

} );


/**
 * Helper to check if an entire row in the calendar is empty or not
 * @param {object} vector - an array of objects where each object contains a particular date
 *
 */

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiCheckEmpty', function( vector ) {
	return vector && vector[ 0 ].emptyBlock && vector[ 6 ].emptyBlock;
} );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiDisableCalendarNav', function( viewDate, dir ) {
	var viewYear = viewDate.getFullYear(),
	viewMonth = viewDate.getMonth(),
	isYY = this.$node.component.isYYFormat(),
	isHavingTimezone = this.$node.component.isHavingTimezone,
	currentYear = isHavingTimezone ? Number( _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment().format( 'YYYY' ) ) : new Date().getFullYear(),
	max, bounds;

	if( isYY ) {
		max = isHavingTimezone ? _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment() : { uL: 19, lL: 80 };
		bounds = { minYear: currentYear - max.lL, maxYear: currentYear + max.uL };
	}
	else {
		bounds = { minYear: 1900, maxYear: 2100 };
	}

	if( ( dir === 'previous' && viewYear === bounds.minYear && viewMonth === 0 ) || ( dir === 'next' && viewYear === bounds.maxYear && viewMonth === 11 ) ) {
		return 'lyteCalDisableNav';
	}
} );


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiI18n", _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiI18n);

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( "lyteUiI18nWithArgs", function() {
	var keyName = arguments[ 0 ] || '',
	argumentsArray = Array.from( arguments ), val, dynamicArguments;

	argumentsArray.shift();

	dynamicArguments = argumentsArray;

	val = window._lyteUiComponentsLocale[ keyName ] || '';

	dynamicArguments.forEach( function( argument, index ) {
		var i18nPlaceholder = '$' + index;

		val = val.replace( i18nPlaceholder, argument );
	} );

	return val;
} );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiOptGroupCheck", _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiOptGroupCheck );
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiCheckForType",function(item,ltPropUserValue,ltPropSystemValue,section){
	if(section){
		var count = 0;
		var tcount = 0;
		for(var key in item){
			tcount++;
			if(key == ltPropUserValue){
				count++;
			}
			if(key == ltPropSystemValue){
				count++;
			}
		}
		if(count == 2 || tcount != 1){
			return false;
		}
		else{
			return true
		}
	}
	else{
		if(typeof item == "object"){
			return true
		}
		else{
			return false
		}
	}
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteListBoxIndex" , function(ind,parentInd){
// Created by suren to use in lyte-listbox
	if(parentInd || parentInd === 0){
		return parentInd +" "+ ind;
	}
	return ind;

});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteListBoxParentIndex" , function(th,data,name){
// Created by suren to use in lyte-listbox
	if(data[name]){
		return data[name];
	}
	return '';

});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteListBoxChildIndexId' , function(ind){
	return ('lyteLBLeftChildWrap_' + ind);
})

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteListBoxRequiredClassHelper' , function(val , reqVal , minReq , type,side , allowSort){
	if(val[reqVal] && side === "left"){
		return 'lyteLBMandateItem';
	}
	var parStr = "lyteLBMandateParent"
	var childStr = "lyteLBMandateItem"
	if(!allowSort){
		parStr += " lyteListBoxRequiredParent"
		childStr += " lyteListBoxRequiredItem"
	}
	if(val[reqVal] && !minReq){
		if(type === 'par'){
			return parStr;
		} else {
			return childStr
		}
	} else {
		return ''
	}
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiChildPadding", function(treeIcon) {

	if ( treeIcon === 'Arrow' ) {
		return "padding-left:20px;";
	} else if (treeIcon === 'Plus') {
		return "padding-left:25px;";
	} else {
		return "padding-left:27px;";
	}
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiHaveChildren", function(treeData,key) {

	if ( treeData[key] && treeData[key].length > 0 ) {

		return true;
	}
	return false;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiIsObject", _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiIsObject);
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiIsArray", function(obj) {

	if ( Object.prototype.toString.call(obj) === "[object Array]") {
		return true;
	} else {
		return false;
	}
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGiveProper',function(full,val){
	var returnval = []
	for(var i=0;i<full.length;i++){
		if(full[i].menu == val){
			returnval.push(full[i])
		}
	}
	return returnval
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiAddClassModal',function(className,show,drag){
	var resp = className;
	if(drag){
		resp += " draggable";
	}
	if(show){
		resp += " "+className+"Show";
	}
	return resp;
});


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiAddShowClass',function(a,b,c){		//Used in alert and colorbox thumbnail
	if(a === true){
		return b+" "+c;
	}
	return b;
});


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiCatwise',function(a,b){
    if(a==b[this.$node.get('ltPropCategory')]){
        return true
    }
      else {
        return false
    }
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiCheckClassForDate',function(val){
	if(!val){
		return false;
	}
	if(val.indexOf('lyteCalGray') != -1){
		return true
	}
	return false
});


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiConcat', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiConcat );


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiConcatTypeClass',function(a,b,c){	//Used in Alert
	if(a!==""){
		return a+b+" "+c;
	}
	return c;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetContainerClass',function(setselect,classval){
	var toRet=''
	if(!classval){
		classval = ''
	}
    if(setselect==true){
    	toRet = 'lyteDropdownContainer tick-selection ' + classval
    }
    else{
    	toRet = 'lyteDropdownContainer ' + classval
    }
    return toRet

});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetDropdownClass',function(arg1){
	if(arg1 && arg1.toString().toLowerCase()  == "true"){
		return 'lyteDropdownElement1 lyteDropdown-disabled'
	}
	else{
		return 'lyteDropdownElement1'
	}
});


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiIfEquals',function(a,b){	//Used in alert,messagebox,progressbar,rating
	return a === b;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiLabelCheck',function(a,b){
	if(a==b){
		return true;
	}
	else {
		return false
	}
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiObjectCheck',function(a){
    if(typeof a==='string'){
        return true;
    }
    else {
        return false
    }
});

// Lyte.Component.registerHelper('lyteUiHeaderCheck',function(value){
// 	if(value)
// 		{
// 			return true;
// 		}
// 	else
// 		{
// 		return false;
// 		}
// });

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiSetWH',function(radius){	//Used in progressbar
	return parseInt(radius) * 2;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiSetRadius',function(radius,stroke){	//Used in progressbar
	return parseInt(radius)-parseInt(stroke)/2;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiSetDashArray',function(radius,stroke){		//Used in progressbar
	var r = parseInt(radius)-parseInt(stroke)/2;
	return  2 * 3.14159 * r;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiSetOffset',function(radius,stroke,value){	//Used in progressbar
	var r = parseInt(radius)-parseInt(stroke)/2;
	var strokeDash =  2 * 3.14159 * r;
	return strokeDash * (1 - parseInt(value)/100);
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiTextTransform',function(radius){	//Used in progressbar
	return 'translate(0,-'+parseInt(radius) * 2+'px)';
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiMakeSortable',function(elementId){
	console.log(elementId);
	document.getElementById(elementId).classList.add('sortable');
	return true;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiCheckTabPosition",function(position){
	if(position.pos === "bottom"){
		return false;
	}
	else{
		return true;
	}
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiGetValue', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiGetValue );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiReturnValueBy', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiReturnValueBy );


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiIsEmptyArray',function(obj){	//Used in alert
     return obj.length == 0;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiRgbToHex",function(item){	//Used in colorpicker
	var hexValue = "#";
	if(/rgba/.test(item)){
		var valArray = item.substring(5,item.length-1).split(",");
		for(var i=0;i<3;i++){
			var val = parseInt(valArray[i]).toString(16).toUpperCase();
			if(val.length < 2){
				val = "0"+val;
			}
			hexValue += val;
		}
		var alpha = Math.round(parseFloat(valArray[3]) * 255);
		hexValue += (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
	}
	else if(/rgb/.test(item)){
		var valArray = item.substring(4,item.length-1).split(",");
		for(var i=0;i<3;i++){
			var val = parseInt(valArray[i]).toString(16).toUpperCase();
			if(val.length < 2){
				val = "0"+val;
			}
			hexValue += val;
		}
	}
	return hexValue;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiCPInsertBreak",function(index){	//Used in colorpicker
	if((index + 1)%10 == 0){
		return true;
	}
	return false;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiCheckInRange",function(start,end,current,form){
	var comp = this.$node.component;

	start = start || '';
	end = end || '';

	if(start === '' && end === ''){
		return true;
	}
	else if(start !== '' && end === ''){
		var startDate = comp.stringToDate( start, form )
		var currentDate = comp.stringToDate( current, form )
		if(currentDate >= startDate){
			return true
		}
	}
	else if(start !== '' && end !== ''){
		var startDate = comp.stringToDate( start, form )
		var endDate = comp.stringToDate( end, form )
		var currentDate = comp.stringToDate( current, form )
		if(currentDate >= startDate && currentDate <= endDate){
			return true
		}
	}
	else {
		var endDate = comp.stringToDate( end, form )
		var currentDate = comp.stringToDate( current, form )
		if(currentDate <= endDate){
			return true
		}
	}
	return false
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( "lyteUiDisabledDates", function( calendarDateObj, disabledDates ) {
	var curDate = calendarDateObj.val || '';

	disabledDates = disabledDates || [];

	return !!~disabledDates.indexOf( curDate );
} );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiIsEmptyObject",function(item){		//Used in dropdown,popover
	for(var key in item) {
        if(item.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiCheckDisabled",function(list,value){
	for(var i = 0; i<list.length; i++){
		if(value === list[i]){
			return "true";
		}
	}
    return "false";
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeLevelHelp",function(varr,index){
	if(varr !== ""){
		var level = varr + " " + index++;
		var arr = level.split(' ')
		return arr.length-1;
	}
	return 0;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeLevelVariableHelp",function(varr,index,vari){
	var str = "--"+vari+":";
	var def = 0;
	if(varr !== ""){
		var level = varr + " " + index++;
		var arr = level.split(' ')
		return str + (arr.length-1).toString()
	}
	return (str+def.toString());
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeMaxLevelHelp" , function(varr , index , maxLevel){
	var level = varr + " " + index++;
	var arr = level.split(' ')
	if(arr.length <= maxLevel){
		return true;
	}
	return false;
})

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeMaxLevelUpdate" , function(varr , index , maxLevel , ignore){
	var level = varr + " " + index++;
	var arr = level.split(' ')
	if(arr.length == maxLevel && ignore){
		maxLevel+=35
		return maxLevel;
	}
	return maxLevel;
})

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeClassHelp",function(state,col,open,close,wrapopen,wrapclose){
	if((state === "open")||!col){
		return open+" "+wrapopen;
	} else {
		return close+" "+wrapclose;
	}
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeMaxChild" , function(varr,index,maxLevel){
	var level = varr + " " + index++;
	var arr = level.split(' ')
	if(arr.length-1 >= maxLevel){
		return "lyteTreeMaxedChild";
	}
	return '';
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeTypeHelp" , function(ltPropSortable , ltPropAllowExternalImport){
	if(ltPropSortable && ltPropAllowExternalImport){
		return "withExternal"
	} else if(ltPropSortable){
		return "onlyInternal"
	} else {
		return "nonSortable"
	}
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeClassStateHelp",function(item){
	if((!item.defaultState)||(item.defaultState === "open")){
		return "lyteTreeOpened";
	} else if(item.defaultState === "close"){
		return "lyteTreeClosed";
	}
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeIndexHelp",function(varr,index){
	return (varr + " " + index++).trim() ;
});
// LyteUiComponentComponentRegistry.registerHelper("lyteTreeAriaTabIndexHelp" , function(varr , index){
// 	var taIn = (varr + " " + index++).trim()
// 	if((taIn.length === 1) && (taIn === '0')){
// 		return 0;
// 	}
// 	return -1;
// })
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeHasChildHelp",function(val,children){
	var col = val.collapsed
	if(!val[children] || val[children].length < 1){
		col = true;
	}
	if(val.hasChild && col){
		return 'lyteTreeHasChild'
	}
	return "";
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeAriaTabIndexHelp" , function(varr , index){
	var taIn = (varr + " " + index++).trim()
	if((taIn.length === 1) && (taIn === '0')){
		return "0";
	}
	return "-1";
})

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiTreeChildHelp",function(val,className,child){

	if(((val[child] === undefined)||(val[child].length === 0)) && !val.hasChild){
		return className + " lyteTreeLastChild";
	}

	return '';

});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeAriaRole",function(val,child){

	if(((val[child] === undefined)||(val[child].length === 0)) && !val.hasChild){
		return 'treeitem';
	}

	return 'group';

});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeDataType" , function(elem){
	if(typeof elem === "object" && Array.isArray(elem)){
		return 'array'
	}
	return typeof(elem);
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteTreeGetArrayLength" , function(val){
	return val.length
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteHTreeTopVline" , function(index , data){
	if(index === 0){
		return 'lyteHTreeVerticalConnectorHidden';
	}
	return '';
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteHTreeBottomVline" , function(index , data){
	if(index === data.length-1){
		return 'lyteHTreeVerticalConnectorHidden';
	}
	return '';
});


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'stringify', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.stringify );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiConcatAlertClass",function(val,Aclass){		//Used in alert
	return (val == "center" ? "lyteAlertCenterContent" : "") +" "+Aclass;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiSetIndexString', function( index, total ) {	//Used in colorbox
	return (index+1)+" of "+total;
} );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiRTL",function(){
	return _lyteUiUtils.getRTL();
});
// LyteComponent.registerHelper("lyteIsIos",function(){
// 	return _lyteUiUtils.isIos();
// });


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteIsIos",function(){
	return _lyteUiUtils.isIos;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteIsAndroid",function(){
	return _lyteUiUtils.isAndroid;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiGetMonthOrYear",function(header, cond){
	header = header || '';

	if(cond == "M"){
		return header.split(" ")[0];
	}
	else{
		return header.split(" ")[1];
	}
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiDisplayOrHide",function(color){
	if(color == "rgba(0, 0, 0, 0)"){
		return "lyteColorPicker__colorpan lyteColorPicker__hide";
	}
	else{
		return "lyteColorPicker__colorpan";
	}
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiMsgBoxConcatClass',function(a,b,c,d){	//Used in messagebox
	if(b!==""){
		return a+" "+b+c+" "+d;
	}
	return a+" "+d;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiFileSize', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiFileSize );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiAddClassRating',function(node,wrapper,readOnly){		//Used in rating\
	var resp = "";
	if(node.className != "{{dummy}}"){
		resp = node.className;
	}
	if(wrapper){
		resp += " " + wrapper;
	}
	if(readOnly){
		if(resp.indexOf("lyteRatingReadOnly") == -1){
			resp += " lyteRatingReadOnly";
		}
		// return "lyteRatingReadOnly";
	}
	else{
		if(resp.indexOf("lyteRatingReadOnly") != -1){
			resp = resp.replace("lyteRatingReadOnly","");
		}
	}
	return resp;
});


_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetArrayValueByIndex',function(array,index){	//Used in rating
	return array[index%array.length];
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiIfEqualsAny',function(){	//Used in rating
	var value = arguments[0];
	for(window.i = 1; window.i < arguments.length; window.i++){
		if(value == arguments[window.i]){
			return true;
		}
	}
	return false;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetNextArrayValueByIndex',function(array,index){ //used in drawer
	return array[index+1];
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiArrayLastIndex',function(array){ //used in drawer
 	return array.length-1;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetViewBox',function(type){ //used in rating
 	if(type === "heart"){
 		return "1.5 0.5 20 20";
 	}
 	if(type === "star"){
 		return "5.5 2.5 23 23";
 	}
 	return "0 0 21 21";
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetFillOrStroke',function(type,color,stroke){ //used in rating
 	if(type === "heart" || type === "star"){
 		return "; fill:"+color+";";
 	}
 	if(type === "lineStar" || type === "lineHeart"){
 		return "; fill:transparent"+";"+"; stroke:"+ (stroke ? stroke : color) +";";
 	}
 	return "; stroke:"+ (stroke ? stroke : color) +";";
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiCheckHalfRatingSvg',function(halfRating,precision){ //used in rating
 	if(halfRating && precision > 0 && precision < 1){
 		return true;
 	}
 	return false;
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiProgressbarLabel',function(label,percentage,showPercentage){ //used in progressbar
 	if(label){
 		return label;
 	}
 	return (percentage + (showPercentage ? "%" : ""));
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiGetStackValue',function(stack,index,prop){
	return index < stack.length && stack[index][prop];
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiAttribute', function( value, aria ){
	if( aria ){
		return value ? value : false;
	}
	return false
} )

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiAddPE', function(val){	//used to add pointer events none for no colors
	if(val === 'noColor'){
		return 'lyteColorPicker__pe'
	}
	return "";
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiClockPairNumber', function(val) {
    if(val.length == 1) {
        val = (0 + val);
    }
    return val;
})

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiDateRPHeaderClass', function( value ){
	if( value != "dropdown" ){
		return "lyteDateRPMonthHeader lyteDateRPStringHeader" ;
	}
	return "lyteDateRPMonthHeader";
} );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiSetAlphaLabel', function( value ){
	if( value ){
		return value ;
	}
	return _lyteUiUtils.i18n("Alpha");
} );
//lyte-layout
//lyte-layout-row
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( "lyteUiRowLength" , function( col_div ){
	var sum = this.$node.getData('sum');
	col_div = parseInt(col_div ,10);
	this.$node.setData('sum' , sum+col_div)
	return (col_div  && col_div < 12 && col_div > 0 && sum <= 12);

});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiImageFile', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiImageFile);

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper( 'lyteUiIsInArray', function( item, selected, sysValue ) {

	selected = selected || [];

	for( var i = 0; i < selected.length; i++ ) {
		if( selected[ i ][ sysValue ] === item[ sysValue ] ) {
			return true;
		}
	}

	return false;
} );

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteUiCapitalizeName', _node_modules_zoho_lyte_ui_component_components_helpers_exportable_helpers_js__WEBPACK_IMPORTED_MODULE_3__.lyteUiCapitalizeName);

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiGetMultiDropId",function( ){

	if(window._lyteUiUtils && window._lyteUiUtils.multiDropGlobe && window._lyteUiUtils.multiDropGlobe.ind ){
		return 'lyteMultiDropButton'+window._lyteUiUtils.multiDropGlobe.ind
	}
	else{
		return 'lyteMultiDropButton0';
	}
});

//scheduler Helper
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiSchedulerBusinessHour",function( businessHour, curr_time ){
	var timeStart = new Date("01/01/2007 " + businessHour[0]);
	var timeEnd = new Date("01/01/2007 " + businessHour[1]);
	curr_time = new Date("01/01/2007 " + curr_time.dataset.time);
	var curr = ((curr_time.getHours() * 60) + curr_time.getMinutes());
	if( ( ( curr - ((timeStart.getHours() * 60) + timeStart.getMinutes())) >= 0 )&& ( (((timeEnd.getHours() * 60) + timeEnd.getMinutes()) - curr) >= 0 ) ){
		return 'lyteSchedulerBusinessHour';
	}
})

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiSchedulerTimeFormat",function( time, min ){
	var hour  = parseInt(time);
	var format = time.split(hour)[1];
	format = format.toUpperCase();
	min = min ? min : '00';
	hour = ('0' + hour).slice(-2);
	time = hour + ':' + min + ' ' + format;
	return time;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiSchedulerChecktime",function( time, event ){
	
	var format = this.$node.getData('ltPropFormat');
	var startDate = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_4___default().moment(event.start, format);
	var start_hour  = startDate.get('hours');
	var time_format = start_hour > 12 ? 'pm' : 'am';
	start_hour = time_format === 'am' ? start_hour+'am' : (start_hour-12)+'pm';
	if(start_hour == time){
		return true;
	}
	return false;
});

_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiSchedulerGetDate",function( date, event ){
	return date.format('DD-MM-YYYY');
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper("lyteUiSchedulerMonthshortForm",function( monthindex ){
	var month = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Spet','Oct','Nov','Dec'];
	return month[monthindex];
});
_node_modules_zoho_lyte_ui_component_components_component_js__WEBPACK_IMPORTED_MODULE_1__.LyteUiComponentComponentRegistry.registerHelper('lyteTourShowIconHelper' , function(type){
	if(type === 'callout'){
		return true
	}
	return false
});


var utils = window._lyteUiUtils;



/***/ }),

/***/ 6669686:
/*!***********************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/helpers/lyte-copy2clip.js ***!
  \***********************************************************************************/
/***/ (() => {

( function(){
	var __utils = window._lyteUiUtils;

	if( __utils ){

		var __nav = window.navigator,
		user_agent = __nav.userAgent,
		is_mac = /Macintosh/i.test( user_agent ),
		ctrl_key = ( is_mac ? 'meta' : 'ctrl' ) + 'Key',
		__timeout,
		keyup_tolerance = 100,
		keydown_interval = 20;

		function is_copy( evt ){
			var key = evt.key;

			if( /^(c|x)$/i.test( key ) ){
				return evt[ ctrl_key ];
			}
			return false;
		};

		function html2str( __str ){
			var elem = document.createElement( "div" ),
			str = "",
			fn = function( arr ){
			    arr.forEach( function( item ){
			        var tag = item.tagName,
			        nodes = Array.from( item.childNodes || [] );

			        if( nodes.length ){
			            fn( nodes ); 
			        }

			        if( /^(div|dt|dd|detail|summary|length|fieldset|footer|header|main|blockquote|p|caption-div|h[1-6]|hr|td|th|hr|img|video|br)$/i.test( tag ) ){
			            str += "\n";
			        } else if( !tag ){
			            str += item.nodeValue;
			        }
			    });
			};

			elem.innerHTML = __str;

			fn( Array.from( elem.childNodes ) )

			return str;
		};

		function copy2clip( html, cb, failure ){
		    try{
		        __nav.permissions.query( { name: "clipboard-write" } ).then( function( result ){
		            if( /^(granted|prompt)$/i.test( result.state ) ){

		                var clip_item = new window.ClipboardItem( ( function(){
		                    var obj = {},
		                    type1 = "text/html",
		                    type2 = "text/plain";

		                    obj[ type1 ] = new window.Blob( [ html ], { type : type1 } );
		                    obj[ type2 ] = new window.Blob( [ html2str( html ) ], { type : type2 } );

		                    return obj;
		                }() ) );

		                __nav.clipboard.write( [ clip_item ] ).then( function(){
		                    cb && cb.apply( this, arguments ); 
		                }, function(){
		                    failure && failure.apply( this, arguments );
		                });
		            } else {
		                failure && failure.call( this, result );
		            }
		        }).catch( function( err ){
		        	__timeout = void 0;
		        	__utils.copyFrmEvt( html, void 0, void 0, cb, failure, true );
		        });
		    } catch( e ){
		        failure && failure.call( this, e );
		    }
		};

		__utils.html2str = html2str;

		__utils.copy2clip = copy2clip;

	 	__utils.copyFrmEvt = function( html, evt, wrapper, cb, failure, force ){

	 		if( evt && !is_copy( evt ) ){
	 			return;
	 		}

	 		if( __timeout != void 0 ){
	 			return;
	 		}

	 		__timeout = setTimeout( function(){
	 			__timeout = void 0;
	 		}, keydown_interval );

	 		if( force || window._lyteUiUtils.getBrowser() == 'firefox' ){
	 			var elem = document.createElement( 'div' ),
	 			__style = elem.style;

		 		elem.contentEditable = true;

		 		wrapper = wrapper || document.body;

		 		elem.tabindex = 0;
		 		elem.innerHTML = html;

		 		__style.position = "absolute";
		 		__style.opacity = '0';
		 		__style.top = "0";
		 		__style.left = "0";

		 		wrapper.appendChild( elem );

		 		elem.focus({
					preventScroll : true
				});

		 		var __selection = window.getSelection(),
		 		new_range = document.createRange();

		 		new_range.selectNodeContents( elem );

		 		__selection.removeAllRanges();
		 		__selection.addRange( new_range );

		 		if( !evt ){
		 			document.execCommand( 'copy' );
		 		}

		 		setTimeout( function(){
		 			elem.remove();
		 			cb && cb();
		 		}, keyup_tolerance );
	 		} else {
	 			copy2clip( html, cb, failure );
	 		}

	 		return true;
		}
	}
})();

/***/ }),

/***/ 87329985:
/*!************************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/helpers/tableNavigation.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js */ 19978124);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__);


( function(){

	function __index( elem ){
		return Array.from( elem.parentNode.children ).indexOf( elem );
	}

	function __previous_cell( elem, count ){
		/*
		 * returns previous row
		 */
		var parentNode = 'parentNode',
		previousElementSibling = 'previousElementSibling',
		prev = elem[ parentNode ][ previousElementSibling ];
		if( prev ){
			return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( prev.children ).get( -count );
		}

		/*
		 * returns from children of thead
		 */

		var thead = elem[ parentNode ][ parentNode ][ previousElementSibling ];
		if( thead ){
			return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( thead.children ).eq( -1 ).children().get( -count );
		}
	}

	function __next_cell( elem, count ){
		/*
		 * returns next row
		 */
		var parentNode = 'parentNode',
		nextElementSibling = 'nextElementSibling',
		next = elem[ parentNode ][ nextElementSibling ];
		if( next ){
			return next.children[ count ];
		}

		/*
		 * returns from children of tbody
		 */

		var tbody = elem[ parentNode ][ parentNode ][ nextElementSibling ];
		if( tbody ){
			return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( tbody.children ).eq( 0 ).children().get( count );
		}
	}

	function moveHori( cell, count ){
		var index = __index( cell ),
		new_index = index + count,
		__children = cell.parentNode.children,
		diff = new_index - index;

		if( diff == 0 ){
			return;
		}
 
		if( diff > 0 ){
			/*
			 * right, bottom, end navigation
			 */
			var __length = __children.length;
			if( __length > new_index ){
				return __children[ new_index ];
			} else {
				return __next_cell( cell, new_index - __length );
			}
		} else {
			/*
			 * left, top, home navigation
			 */
			 if( new_index < 0 ){
			 	return __previous_cell( cell, -new_index );
			 } else {
			 	return __children[ new_index ];
			 }
		}
	}

	function ret_grp( cell, count ){
		var parentNode = 'parentNode';
		return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( cell[ parentNode ][ parentNode ][ parentNode ].children ).eq( count ).children().eq( count ).children().get( count );
	}

	function home( cell, ctrl ){
		if( ctrl ){
			return ret_grp( cell, 0 );
		}
		return moveHori( cell, - __index( cell ) );
	}

	function end( cell, ctrl ){
		if( ctrl ){
			return ret_grp( cell, -1 );
		}
		return moveHori( cell, cell.parentNode.children.length - __index( cell ) - 1 );
	}

	function moveVert( cell, count ){
		return moveHori( cell, count * cell.parentNode.children.length );
	}

	function keyEvent( evt ){
		var target = evt.target,
		origin = evt.currentTarget;

		if( /^lyte\-t(d|h)$/i.test( target.tagName ) ||  /^lyte-exptable\-t(d|h)$/i.test( target.tagName ) ){
			var key = evt.key,
			 fn,
			 __count,
			 options = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( origin ).data( 'tableNavigation' ),
			 before_nav = options.beforeNavigation,
			 after_nav = options.afterNavigation,
			 ret;

			 /*
			  * If target is in fixed part you can return original table cell here. navigation will happen in original table
			  */
			  
			 before_nav && ( ret = before_nav.call( origin, target, evt ) );

			 if( ret != void 0 ){
			 	if( ret == false ){
				  return;
				} else if( ret.nodeType == 1 ){
				  target = ret;
				}
			 }

			 switch( key ){
			 	case "ArrowLeft" : {
			 		fn = moveHori;
			 		__count = -1;
			 	}	
			 	break;
			 	case "ArrowRight" : {
			 		fn = moveHori;
			 		__count = 1;
			 	}	
			 	break;
			 	case 'ArrowDown' : {
			 		fn = moveVert;
			 		__count = 1;
			 	}
			 	break;
			 	case 'ArrowUp' : {
			 		fn = moveVert;
			 		__count = -1;
			 	}
			 	break;
			 	case "Home" : {
			 		fn = home;
			 		__count = evt.metaKey || evt.ctrlKey;
			 	}
			 	break;
			 	case 'End' : {
			 		fn = end;
			 		__count = evt.metaKey || evt.ctrlKey;
			 	}
			 	break;
			 }


			if( fn && ( ret = fn( target, __count ) ) ){
				/*
				 * If particular column is fixed you can return fixed column here. fixed column will be focused
				 */
				after_nav && ( ret = after_nav.call( origin, ret, evt ) || ret );

				ret.focus();
				evt.preventDefault();
			}
		}
	}

	window._lyteUiUtils.tableNavigation = function( table, option ){
		var ns = "add",
		$node = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()( table ),
		data_ns = 'tableNavigation';

		if( option == "unbind" ){
			ns = "remove";
			$node.removeData( data_ns );
		}  else {
			$node.data( data_ns, option || {} );
		}

		table[ ns + 'EventListener' ]( 'keydown', keyEvent, true );
	}

})();

/***/ }),

/***/ 33084052:
/*!******************************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/components/helpers/utilityFn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js */ 19978124);
/* harmony import */ var _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__);


if(!window.LytePopup){
    window.LytePopup = {
        components:[],
        bodywrapperCount:0,
        onEscape : function(evt){
            evt = evt || window.event;
            var isEscape = false;
            var isTabPressed = false;
            var isEnter = false;
            var activeElement = document.activeElement;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
                isTabPressed = (evt.key == "Tab");
                isEnter = (evt.key == "Enter");
            } else {
                isEscape = (evt.keyCode == 27);
                isTabPressed = (evt.keyCode == 9);
                isEnter = (evt.keyCode == 13);
            }
            if (isEscape) {
                LytePopup.closePopup(undefined,true,evt);
            }
            if(isTabPressed && LytePopup.components.length > 0) {
                LytePopup.trapFocus(evt);
            }
            if(isEnter && activeElement && ( activeElement.classList.contains('alertClose') || activeElement.classList.contains('lyteModalClose') || activeElement.classList.contains('lytePopoverClose') )){
                activeElement.click();
            }
        },
        bindDocumentKeydown : function(){
            document.addEventListener('keydown',LytePopup.onEscape,true);
        },
        checkAndRemoveWrapper : function(){
            var elements = Array.from(document.querySelectorAll('.lyteAlertOpened')).concat(Array.from(document.querySelectorAll('.lyteModalOpened')), Array.from(document.querySelectorAll('.lytePopoverOpened')));
            if(elements.length == 0){
                document.body.classList.remove('bodyWrapper');
            }
            else{
                for(var i = 0; i < elements.length; i++){
                    if(elements[i].ltProp('freeze')){
                        return;
                    }
                }
                document.body.classList.remove('bodyWrapper');
            }
        },
        hideOrShowFreeze : function(cond, currComp, removedFromDom){
            var prevEleFreeze = '',val, currEleFreeze = '', prevElem = '', currElem = '';
            if(cond == "open" && LytePopup.components.length > 1){
                for(var i = LytePopup.components.length - 2 ; i >= 0; i--){
                    if(LytePopup.components[i].$node.tagName == "LYTE-MODAL"){
                        prevEleFreeze = 'lyte-modal-freeze';
                    }
                    else if(LytePopup.components[i].$node.tagName == "LYTE-POPOVER"){
                        prevEleFreeze = 'lyte-popover-freeze';
                    }
                    else{
                        prevEleFreeze = '.alertFreezeLayer';
                    }
                    if(currComp.$node.tagName == "LYTE-MODAL"){
                        currEleFreeze = 'lyte-modal-freeze';
                    }
                    else if(currComp.$node.tagName == "LYTE-POPOVER"){
                        currEleFreeze = 'lyte-popover-freeze';
                    }
                    else{
                        currEleFreeze = '.alertFreezeLayer';
                    }
                    prevElem = LytePopup.components[i].childComp.querySelector(prevEleFreeze);
                    currElem = currComp.childComp.querySelector(currEleFreeze);
                    val = currComp.getData('ltPropDimmer') && currComp.getData('ltPropDimmer').opacity ? currComp.getData('ltPropDimmer').opacity : "";
                    if(prevElem && currElem){
                        prevElem.style.transition = "none";
                        currElem.style.transition = "none";
                        prevElem.style.zIndex = 15;
                        prevElem.style.opacity = 0;
                        currElem.style.visibility = 'visible';
                        currElem.style.opacity = val;
                        setTimeout(LytePopup.removeTransition, 100, currElem, prevElem);
                        prevElem.style.zIndex = "";
                        currComp.addedFreezeDetails = true;
                        break;
                    }
                }
            }
            else if(cond == "close" && LytePopup.components.length > 1 && LytePopup.components[LytePopup.components.length-1] === currComp){
                for(var i = LytePopup.components.length - 2 ; i >= 0; i--){
                    if(LytePopup.components[i].$node.tagName == "LYTE-MODAL"){
                        prevEleFreeze = 'lyte-modal-freeze';
                    }
                    else if(LytePopup.components[i].$node.tagName == "LYTE-POPOVER"){
                        prevEleFreeze = 'lyte-popover-freeze';
                    }
                    else{
                        prevEleFreeze = '.alertFreezeLayer';
                    }
                    if(currComp.$node.tagName == "LYTE-MODAL"){
                        currEleFreeze = 'lyte-modal-freeze';
                    }
                    else if(currComp.$node.tagName == "LYTE-POPOVER"){
                        currEleFreeze = 'lyte-popover-freeze';
                    }
                    else{
                        currEleFreeze = '.alertFreezeLayer';
                    }
                    prevElem = LytePopup.components[i].childComp.querySelector(prevEleFreeze);
                    currElem = currComp.childComp.querySelector(currEleFreeze);
                    val = LytePopup.components[i].getData('ltPropDimmer') && LytePopup.components[i].getData('ltPropDimmer').opacity ? LytePopup.components[i].getData('ltPropDimmer').opacity : "";
                    if(prevElem && currElem){
                        currElem.style.transition = "none";
                        prevElem.style.transition = "none";
                        prevElem.style.zIndex = 15;
                        currElem.style.opacity = 0;
                        prevElem.style.visibility = "visible";
                        prevElem.style.opacity = val;
                        setTimeout(LytePopup.removeTransition, 100, currElem, prevElem);
                        prevElem.style.zIndex = '';
                        currElem.style.visibility = "";
                        break;
                    }
                    else{
                        if(prevElem && removedFromDom){
                            prevElem.style.transition = "none";
                            prevElem.style.zIndex = 15;
                            prevElem.style.visibility = "visible";
                            prevElem.style.opacity = val;
                            setTimeout(LytePopup.removeTransition, 100, currElem, prevElem);
                            prevElem.style.zIndex = '';
                            break;
                        }
                    }
                }
            }
        },
        removeTransition : function(currElem, prevElem){
            if(currElem){
                currElem.style.transition = "";
            }
            if(prevElem){
                prevElem.style.transition = "";
            }
        },
        addPopup : function(component) {
            LytePopup.closePopup();
            var compLengh = LytePopup.components.length;
            if(compLengh>0){
                var prevZIndex = 0;
                var prePopup = '', thisPopup = '';
                if(LytePopup.components[compLengh-1].$node.tagName == "LYTE-MODAL"){
                    prePopup = '.modalWrapper';
                }
                else if(LytePopup.components[compLengh-1].$node.tagName == "LYTE-POPOVER"){
                    prePopup = '.popoverWrapper';
                }
                else{
                    prePopup = '.alertWrapper';
                }

                if(component.$node.tagName == "LYTE-MODAL"){
                    thisPopup = '.modalWrapper';
                }
                else if(component.$node.tagName == "LYTE-POPOVER"){
                    thisPopup = '.popoverWrapper';
                }
                else{
                    thisPopup = '.alertWrapper';
                }
                var node = component.childComp.querySelector(thisPopup);
                prevZIndex = Number(document.defaultView.getComputedStyle(LytePopup.components[LytePopup.components.length-1].childComp.querySelector(prePopup),null).getPropertyValue('z-index'));
                if(prevZIndex+2 > Number(document.defaultView.getComputedStyle(node,null).getPropertyValue('z-index'))){
                    node.style.zIndex = prevZIndex+2;
                }
                // component.childComp.querySelector(thisPopup).style.zIndex = prevZIndex+2;
                // if(component.$node.ltProp('freeze') && component.childComp.querySelector(thisFreeze)){
                //     component.childComp.querySelector(thisFreeze).style.zIndex = prevZIndex+1;
                // }
            }
            LytePopup.components[compLengh] = component;
            if(component.getData('ltPropFreeze') || component.$node.tagName == "LYTE-ALERT"){
                LytePopup.hideOrShowFreeze("open", component)
            }
        },
        closePopup : function(component,fromEscape,event){
            if(fromEscape){
                var lastPop = LytePopup.components[LytePopup.components.length-1];
                if(lastPop){
                    var dropdowns = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()(lastPop.actualModalDiv).find('lyte-dropdown')
                    var dontClose = false;
                    for(var i = 0;i<dropdowns.length;i++){
                        if(dropdowns[i]){
                            if(dropdowns[i].getData('ltPropIsOpen')){
                                dontClose = true
                            }
                        }
                    }
                    if(lastPop && lastPop.$node.ltProp("closeOnEscape") && !dontClose){
                        lastPop.$node.setData('escClicked' , event);
                        lastPop.$node.ltProp("show",false);
                    }
                }
            } else {
                if(component){
                    var index = LytePopup.components.indexOf(component);
                    if(index > -1){
                        LytePopup.components.splice(index,1);
                    }
                }
                else{
                    for(var i=LytePopup.components.length-1;i>=0;i--){
                        if(LytePopup.components[i].$node && !LytePopup.components[i].$node.ltProp("allowMultiple")){
                            var comp = LytePopup.components[i];
                            // if(comp.$node.tagName == "LYTE-MODAL"){
                            //     LytePopup.components.splice(i,1);
                            // }
                            comp.$node.ltProp("show",false);
                        }
                    }
                }
            }
        },
        getScrollParent : function(node) {
            var isElement = node instanceof HTMLElement,
                overflowY = isElement && window.getComputedStyle(node).overflowY,
                isScrollable = overflowY !== 'visible' && overflowY !== 'hidden',
                scrollHeight = node && isScrollable ? node.scrollHeight : 0,
                clientHeight = node && isScrollable ? node.clientHeight : 0;

            if (!node) {
                return null;
            } else if (isScrollable && scrollHeight > clientHeight) {
                return node;
            }

            return LytePopup.getScrollParent(node.parentNode) || document.body;
        },
        focusFunction : function(node){
            node.focus()
            if(node.tagName === "INPUT" || node.tagName === "TEXTAREA"){
                if(node.type !== "checkbox" && node.type !== "radio" && node.type !== "number"){
                    node.selectionStart = node.value.length
                    node.scrollLeft = node.scrollWidth - node.getBoundingClientRect().width
                }
            }
        },
        trapFocus : function( evt, node ){
            var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), *[contenteditable]';
            var parent = node || LytePopup.components[LytePopup.components.length-1].actualModalDiv;
            // get list of focusable items
            var focusableItems;
            focusableItems = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()(parent.querySelectorAll(focusableElementsString)).filter(function(ind, item){ return _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()(item).is(':visible') && (item.tabIndex != -1) && !(item.disabled)});

            if(focusableItems.length == 0){
                return;
            }
            if(node){
                if(focusableItems.length > 1 && (focusableItems[0].classList.contains('lyteModalClose') || focusableItems[0].classList.contains('lytePopoverClose'))){
                    this.focusFunction(focusableItems[1])
                    // focusableItems[1].focus();
                }
                else{
                    this.focusFunction(focusableItems[0])
                    // focusableItems[0].focus();
                }
                return;
            }

            // get currently focused item
            var focusedItem = document.activeElement;
            var focusedParent;

            if(!(parent.contains(focusedItem))){
              focusedParent = _node_modules_zoho_lyte_dom_modules_lyte_dom_utils_js__WEBPACK_IMPORTED_MODULE_0___default()(focusedItem).closest('lyte-drop-box')[0]
              if(focusedParent){
                focusedParent = focusedParent.origindd
              }
              if(!(parent.contains(focusedParent))){
                LytePopup.initializeFocus(parent);
                evt && evt.preventDefault();
                return;
              }
            }

            // get the number of focusable items
            var numberOfFocusableItems = focusableItems.length;

            // get the index of the currently focused item
            var focusedItemIndex;
            for(var i = 0; i < focusableItems.length; i++){
                if(focusableItems[i] == focusedItem){
                    focusedItemIndex = i;
                    break;
                }
            }

            if (evt.shiftKey) {
                //back tab
                // if focused on first item and user preses back-tab, go to the last focusable item
                if (focusedItemIndex == 0) {
                    this.focusFunction(focusableItems.get(numberOfFocusableItems - 1))
                    // focusableItems.get(numberOfFocusableItems - 1).focus();
                    evt.preventDefault();
                }

            } else {
                //forward tab
                // if focused on the last item and user preses tab, go to the first focusable item
                if (focusedItemIndex == numberOfFocusableItems - 1) {
                    this.focusFunction(focusableItems.get(0))
                    // focusableItems.get(0).focus();
                    evt.preventDefault();
                }
            }
        },
        initializeFocus : function(node){
            if(node.classList.contains('lyteModal') || node.classList.contains('lytePopover')){
                LytePopup.trapFocus(null, node);
            }
            else if(node.classList.contains('alertPopup')){
                var buttons = node._callee.ltProp('buttons');
                for(var i = 0; i<buttons.length; i++){
                    if(buttons[i].type == "accept"){
                        this.focusFunction(node.querySelectorAll('button')[i])
                        // node.querySelectorAll('button')[i].focus();
                        break;;
                    }
                }
            }
        },
        transitionEnd : function(evt){
            if(evt.target == this && LytePopup.components.length > 0){
                var comp = LytePopup.components[LytePopup.components.length-1];
                var element = comp.actualModalDiv;
                !(comp.getData('ltPropPreventFocus')) && LytePopup.initializeFocus(element);
                this.removeEventListener( 'transitionend', LytePopup.transitionEnd );
            }
        },
        bindTransitionEnd : function(node){
            node && node.addEventListener( 'transitionend', LytePopup.transitionEnd );
        }
    };

    LytePopup.bindDocumentKeydown();
}
window.ratingNum = 0;

window._lyteUiUtils.convert_diacritics = function( str ){
    var diacritics = [
        { value : 'A',  regex : /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g },
        { value : 'AA', regex : /[\uA732]/g },
        { value : 'AE', regex : /[\u00C6\u01FC\u01E2]/g },
        { value : 'AO', regex : /[\uA734]/g },
        { value : 'AU', regex : /[\uA736]/g },
        { value : 'AV', regex : /[\uA738\uA73A]/g },
        { value : 'AY', regex : /[\uA73C]/g },
        { value : 'B',  regex : /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
        { value : 'C',  regex : /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g },
        { value : 'D',  regex : /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g },
        { value : 'DZ', regex : /[\u01F1\u01C4]/g },
        { value : 'Dz', regex : /[\u01F2\u01C5]/g },
        { value : 'E',  regex : /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g },
        { value : 'F',  regex : /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
        { value : 'G',  regex : /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g },
        { value : 'H',  regex : /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g },
        { value : 'I',  regex : /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g },
        { value : 'J',  regex : /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
        { value : 'K',  regex : /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g },
        { value : 'L',  regex : /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g },
        { value : 'LJ', regex : /[\u01C7]/g },
        { value : 'Lj', regex : /[\u01C8]/g },
        { value : 'M',  regex : /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
        { value : 'N',  regex : /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g },
        { value : 'NJ', regex : /[\u01CA]/g },
        { value : 'Nj', regex : /[\u01CB]/g },
        { value : 'O',  regex : /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g },
        { value : 'OI', regex : /[\u01A2]/g },
        { value : 'OO', regex : /[\uA74E]/g },
        { value : 'OU', regex : /[\u0222]/g },
        { value : 'P',  regex : /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
        { value : 'Q',  regex : /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
        { value : 'R',  regex : /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g },
        { value : 'S',  regex : /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g },
        { value : 'T',  regex : /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g },
        { value : 'TZ', regex : /[\uA728]/g },
        { value : 'U',  regex : /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g },
        { value : 'V',  regex : /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
        { value : 'VY', regex : /[\uA760]/g },
        { value : 'W',  regex : /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
        { value : 'X',  regex : /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
        { value : 'Y',  regex : /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g },
        { value : 'Z',  regex : /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g },
        { value : 'a',  regex : /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g },
        { value : 'aa', regex : /[\uA733]/g },
        { value : 'ae', regex : /[\u00E6\u01FD\u01E3]/g },
        { value : 'ao', regex : /[\uA735]/g },
        { value : 'au', regex : /[\uA737]/g },
        { value : 'av', regex : /[\uA739\uA73B]/g },
        { value : 'ay', regex : /[\uA73D]/g },
        { value : 'b',  regex : /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
        { value : 'c',  regex : /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g },
        { value : 'd',  regex : /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g },
        { value : 'dz', regex : /[\u01F3\u01C6]/g },
        { value : 'e',  regex : /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g },
        { value : 'f',  regex : /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
        { value : 'g',  regex : /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g },
        { value : 'h',  regex : /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g },
        { value : 'hv', regex : /[\u0195]/g },
        { value : 'i',  regex : /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g },
        { value : 'j',  regex : /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
        { value : 'k',  regex : /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g },
        { value : 'l',  regex : /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g },
        { value : 'lj', regex : /[\u01C9]/g },
        { value : 'm',  regex : /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
        { value : 'n',  regex : /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g },
        { value : 'nj', regex : /[\u01CC]/g },
        { value : 'o',  regex : /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g },
        { value : 'oi', regex : /[\u01A3]/g },
        { value : 'ou', regex : /[\u0223]/g },
        { value : 'oo', regex : /[\uA74F]/g },
        { value : 'p', regex : /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
        { value : 'q', regex : /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
        { value : 'r', regex : /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g },
        { value : 's', regex : /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g },
        { value : 't', regex : /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g },
        { value : 'tz', regex : /[\uA729]/g },
        { value : 'u', regex : /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g },
        { value : 'v', regex : /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
        { value : 'vy', regex : /[\uA761]/g },
        { value : 'w', regex : /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
        { value : 'x', regex : /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
        { value : 'y', regex : /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }
  ];

  diacritics.forEach( function( item ){
    str = str.replace( item.regex, item.value );
  });

  return str;
}


/***/ }),

/***/ 57616523:
/*!*********************************************************************!*\
  !*** ./node_modules/@zoho/lyte-ui-component/plugins/lyte-search.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( cb ){
  if( true ){
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! @zoho/lyte-dom */ 19978124) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (cb),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})( function( $L ){
    if( $L ){
      function getScope( elem, scope ){
          var data = elem._searchPluginData;
          scope = data.dynamicScope ? data.dynamicScope( elem ) : scope;
          if( data.checkFromParent ){
            scope = elem.parentNode;
          }
          return scope;
      }

     function keyUpBind( event ){
         if([37,13,38,39,40,91,27,16,18].indexOf(event.keyCode) > -1){ 
           return
         }
         var element = this,
         data = element._searchPluginData,
         searchDelay = data.searchDelay;

         clearTimeout(this.timeout); 
         clearTimeout( this._iptime );
         if( searchDelay == void 0 ){
            pressFunc.call( this, event );
         } else {
            this.timeout = setTimeout( pressFunc.bind( this ), searchDelay, event );
         }
      }

      function inputBind( event ){
         clearTimeout( this._iptime );
         this._iptime = setTimeout( pressFunc.bind( this ), 250, event );
      }

      function pressFunc( event ){
          var element = this;
          event = event || {};
          var data = this._searchPluginData,
          ret = findingList.call(this,event),
          searchList = ret[0],
          targetList = ret[1],
          searchComp = ret[2],
          related = ret[ 3 ],
          casesen  = data.caseSensitive,
          minLength = data.minLength ? data.minLength : 0,
          method = data.method ? data.method : 'contains',
          keyCode = event.keyCode || event.which,
          val = fNcase( casesen, element.tagName == 'LYTE-INPUT' ? element.querySelector( 'input,textarea' ).value : element.value, data.trim ),
          visibleList = [], flag, comp = data.component, hiddenList = [],
          hiddenSelector = data.hiddenSelector;

          if( data.diacritic ){
             val = window._lyteUiUtils.convert_diacritics( val );
          }

          if(val.length >= minLength || keyCode == 8 || keyCode == 46 )
            { 
              if(val.length)
                  {
                    for( var i = 0; i < searchList.length; i++ ) { 
                        var str = fNcase( casesen, searchList[i].trim() );
                        if( switchfun( method, val, str ) ) {
                            visibleList.push( searchComp[i] );
                        } else {
                           hiddenList.push( searchComp[ i ] );
                        }   
                    }
                  }
               else
                  {
                    visibleList = Array.apply( Array, searchComp );
                  }   
              if( data.onSearch && data.onSearch( visibleList, event , val ) == false ){
                return;
              }
               for(var i = 0; i < searchList.length; i++)
                   {  
                       var str = fNcase( casesen, searchList[i].trim() ), val = val;
                       additionalHand.call( this, targetList[i], switchfun( method, val, str ) , val )   
                   } 
              if( !/tree|accordion/.test( comp ) ) {
                  for( var i = 0; i < related.length; i++ ) {
                      if( related[ i ].querySelectorAll( data.target || data.search ).length == related[ i ].querySelectorAll( '.lyteSearchHidden' + ( hiddenSelector ? ( ',' + hiddenSelector ) : '' ) ).length ) {
                          related[ i ].classList.add( 'lyteSearchHidden' );
                      } else {
                          related[ i ].classList.remove( 'lyteSearchHidden' );
                      }
                   }
              } else if( comp == 'accordion' ){
                  $L.fastdom.measure( accfilter.bind( this, visibleList, hiddenList, val ) )
              } else if( comp == "tree" ){
                 $L.fastdom.measure( treefilter.bind( this, visibleList, hiddenList, val ) )
              }
          }                 
      }

      function arrayFrom( nodeList ){
          var arrayList = [];
          for(var i = 0; i < nodeList.length; i++)
            {
              arrayList.push(nodeList[i]);
            }
          return arrayList.slice(); 
      }

        function fNcase( bool, value, trim ){
          if( !bool ){
              value = value.toLowerCase();
          }
          if( trim ){
              value = value.trim();
          }
          return value;
        }

        function switchfun( method, val, str ){
          var check;
          switch( method )
            {
              case 'contains' : {
                  check = str.indexOf( val ) >= 0
                  break;    
              }
              case 'startsWith' : {
                    check = str.indexOf( val ) == 0; 
                    break;
              }
              case 'endsWith' : {
                    var ind = str.lastIndexOf( val );
                    if( ind != -1 ){
                      check = ( ind  + val.length ) == str.length;
                    }
                    break;
              }
            }
            return check;
        }

        function hiderecurse( elem ){
          for( var i = elem.length - 1; i >= 0; i-- ) {
              var icon = elem.eq( i );
              if( icon.hasClass( 'lyteIconOpened' ) ){
                  setTimeout( icon.click.bind( icon ) , 20 );
              }
          }
        }

        function searchListFind( nodeName ){
              var searchList = [];
              var target = [];
              for(var i = 0; i < nodeName.childElementCount; i++)
                {
                  while(nodeName.children[i].childElementCount)
                    {
                        window.returnedVal = searchListFind(nodeName.children[i]);
                        searchList = searchList.concat(window.returnedVal[0]);
                        target = target.concat(window.returnedVal[1]);
                        break;
                    }
                  if(!nodeName.children[i].childElementCount) 
                      {
                        searchList.push(nodeName.children[i].textContent);
                        target.push(nodeName.children[i]);
                      }
                }
              return [searchList,target];
        };

        function findingList(){
              var data = this._searchPluginData;
              var scope = getScope( this, typeof data.scope == 'string' ? document.querySelector(data.scope) : data.scope );
              var searchList = [], targetList = [], searchComp = [], related = [];

              if( !scope ){
                  return [ searchList, targetList, searchComp, related ];
              }

              if(data.search)   
                  {
                      searchComp = scope.querySelectorAll( data.search.trim() )
                      var target = data.target ? data.target : data.search;
                      for(var j = 0; j < searchComp.length; j++){
                          var valueToPush = searchComp[ j ].textContent;
                          if( data.diacritic ){
                            valueToPush = window._lyteUiUtils.convert_diacritics( valueToPush );
                          }
                          searchList.push( valueToPush );
                      }
                      targetList = scope.querySelectorAll( target )
                  }
              else
                  {
                      var callSearchList = searchListFind(scope)
                      searchList = callSearchList[0];
                      targetList = callSearchList[1];
                      searchComp = targetList.slice();
                  } 
                if( data.related && ( data.target || data.scope  ) ) {
                    related = scope.querySelectorAll( data.related );
                }
                return [searchList, targetList, searchComp, related];  
        };

        function accfilter ( vis, hid, value ){
              var scope = $L( getScope( this, this._searchPluginData.scope ) )[ 0 ];
              for( var i = 0; i < vis.length; i++ ){
                var close1 = $L( vis[ i ] ).closest( 'lyte-accordion-item', scope )
                for( var j = 0; j < hid.length; j++ ){
                  var close2 = $L( hid[ j ] ).closest( 'lyte-accordion-item', scope )
                  if( close1[ 0 ] == close2[ 0 ] ){
                      hid.splice( j, 1 );
                      j--; continue;
                  }
                }
                if( vis[ i + 1 ] ) {
                  var close2 = $L( vis[ i + 1 ] ).closest( 'lyte-accordion-item', scope );
                  if( close1[ 0 ] == close2[ 0 ] ){
                      vis.splice( i + 1, 1 );
                      i--;
                  }
                }
              }
              // scope[ 0 ].component.getAllHeights();
              $L.fastdom.mutate( function(){
                  for( var i = scope.ltProp( 'exclusive' ) ? ( vis.length - 1 ) : 0; i < vis.length; i++ ){
                    var isclose = false, close = $L( vis[ i ] ).closest( 'lyte-accordion-item' );
                    isclose = !close.hasClass( 'lyteAccordionActive' );
                    if( !value ){
                        isclose = !isclose
                    }
                    if( isclose ){
                        close.click();
                    }
                  }

                  for( var j = 0; j < hid.length; j++ ){
                      var close = $L( hid[ j ] ).closest( 'lyte-accordion-item' )
                      close.hasClass( 'lyteAccordionActive' ) && close.click();
                  }
              })
        }

        function treeinremove ( arr ){
            for( var i = 0; i < arr.length; i++ ){
                if( arr[ i + 1 ] ){
                  var cur = $L( arr[ i ] ).closest( '.lyteTreeBodyDiv' )[ 0 ], next = $L( arr[ i + 1 ] ).closest( '.lyteTreeBodyDiv' )[ 0 ];
                  if( cur.contains( next ) ){
                      arr.splice( i + 1, 1 );
                  } else if(next.contains( cur ) ){
                      arr.splice( i, 1 );
                      i--;
                  }
                }
            }
        }

        function treefilter( vis, hid, value, clear ){
          var scope = $L( getScope( this, this._searchPluginData.scope ) )[ 0 ];
          for( var i = 0; i < vis.length; i++ ){
            var cur = $L( vis[ i ] ).closest( '.lyteTreeBodyDiv' );
            for( var j = 0; j < hid.length; j++ ){
              var hide = $L( hid[ j ] ).closest( '.lyteTreeBodyDiv' ),
              flg = cur[ 0 ].contains( hide[ 0 ] ) || hide[ 0 ].contains( cur[ 0 ] );
              if( flg ){
                  hide.addClass( 'lyteSearchHidden' );
                  hid.splice( j, 1 );
                  j--;
              }
            }
          }
          for( var i = 0; i < vis.length; i++ ){
            removeClse( vis[ i ], scope )
            value.length && scope.ltProp( 'stateAttr', $L( vis[ i ] ).closest( 'lyte-tree-body' ).attr( 'data-value' ) )
          }
          if( value.length ) {
            for( var i = 0; i < hid.length; i++ ){
              $L( hid[ i ] ).closest( '.lyteTreeBodyDiv' ).addClass( 'lyteSearchHidden' )
            }
          } else {
            hiderecurse( $L( 'lyte-yield:not(.noChildClass) lyte-tree-icon', scope ), clear );
          }
        }

        function removeClse( target, scope ){
            var el = $L( target ).closest( '.lyteSearchHidden', scope );
            if( el.length ){
              el.removeClass( 'lyteSearchHidden' );
              removeClse( target, scope );
            }
        }

        function additionalHand( target, check, val ){
            var query = this._searchPluginData, comp = query.component;
            if( check ){
                if( comp == 'dropdown' ){
                  var clo = $L( target ).closest( 'lyte-drop-box' )[ 0 ] 
                  if( clo ) {
                    clo.classList.contains( 'lyteDropdownHidden' ) && ( clo.origindd ? clo.origindd.toggle() : $L( clo ).closest( 'lyte-dropdown' ).get( 0 ).toggle() )
                  }
                } 
              target.classList.remove( 'lyteSearchHidden' );
            } else if( comp != "tree" ) {
              if( target.classList.contains( 'lyteSearchHidden' ) ){
                  return;
              }
              target.classList.add( 'lyteSearchHidden' );
            }
        }

        $L.prototype.search = function( data ){
            data = data ? data : {};
            if(!data.scope)
                {
                    console.error('scope is not given');
                    return;
                }
            // var scope = typeof data.scope == 'string' ? document.body.querySelector( data.scope.trim() ) : data.scope;    
            var element = this[ 0 ]
            var searchList = [], targetList = [], searchComp = [];
            element._searchPluginData = data;

            if( !data.hasOwnProperty( 'searchDelay' ) ){
              data.searchDelay = 100;
            }

            if( data.component == "accordion" ){
              data.related = "lyte-accordion-item";
            } else if( data.component == "tree" ){
              data.related = ".lyteTreeBodyDiv lyte-yield:not(.noChildClass) lyte-tree-icon";
            }

            element.setValueForSearch = element.setValue = function(value){
                var element = this
                value = value != undefined ? value : '';
                element.tagName == 'LYTE-INPUT' ? element.ltProp({'value' : value}) : element.value = value;
                var evt = new Event('keyup');
                evt.which = evt.keyCode = 8;
                element.dispatchEvent(evt);
            }

        element.addEventListener('keyup', keyUpBind ); 

        element.addEventListener( 'input', inputBind);
        element.reset = pressFunc.bind( element );                  
        return this;
      }

      $L.prototype.removeSearch = function(){
          var removeElements = this;

          for( var i = 0; i < removeElements.length; i++ ){
              var current = removeElements[ i ],
              scope, search, related;
              if( !current._searchPluginData ){
                continue;
              }

              delete current.reset; 
              scope = current._searchPluginData.scope;
              search = current._searchPluginData.target || current._searchPluginData.search;
              related = current._searchPluginData.related;
              if( !scope ){
                continue;
              }
              scope = $L( getScope( current, scope ) );
              scope.find( search ).removeClass( 'lyteSearchHidden' );
              related && scope.find( related ).removeClass( 'lyteSearchHidden' );
              delete current._searchPluginData;
              delete current.setValueForSearch; delete current.setValue;

              current.removeEventListener( 'input', inputBind );
              current.removeEventListener( 'keyup', keyUpBind );
          }
          return this;
      }
    }
});


/***/ }),

/***/ 34317620:
/*!****************************!*\
  !*** ./router/maps/map.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErmMap": () => (/* binding */ ErmMap)
/* harmony export */ });
/* harmony import */ var _router_routes_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../router/routes/home.js */ 85947163);
/* harmony import */ var _router_routes_home_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../router/routes/home/index.js */ 15109247);
/* harmony import */ var _router_routes_home_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../router/routes/home/details.js */ 82933275);
/* harmony import */ var _router_routes_home_profile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../router/routes/home/profile.js */ 3528349);
/* harmony import */ var _router_routes_sign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../router/routes/sign.js */ 53487529);
/* harmony import */ var _router_routes_wildcard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../router/routes/wildcard.js */ 30857568);
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);








var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_6__._defineProperty)(_, {
    "RouterMap": function() {
        return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_7__.RouterMap;
    }
});



class ErmMap extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_7__.RouterMap {
    map() {
        this.route("home",{
            path:'/',
            handler: _router_routes_home_js__WEBPACK_IMPORTED_MODULE_0__.Home
        },() => {
            this.route("index",{
                path:'/dashboard',
                handler: _router_routes_home_index_js__WEBPACK_IMPORTED_MODULE_1__.Index
            });
            this.route("details", {
                path: "details/:empNo",
                handler: _router_routes_home_details_js__WEBPACK_IMPORTED_MODULE_2__.Details
            });
            this.route("profile", {
                handler: _router_routes_home_profile_js__WEBPACK_IMPORTED_MODULE_3__.Profile
            });
        });
        this.route("sign", {
            handler: _router_routes_sign_js__WEBPACK_IMPORTED_MODULE_4__.Sign
        });
        this.route("wildcard", {
            path: "/*",
            handler: _router_routes_wildcard_js__WEBPACK_IMPORTED_MODULE_5__.Wildcard
        });
    }

    _() {
        _;
    }
}
ErmMap.path = '../routes';



/***/ }),

/***/ 99442756:
/*!**************************!*\
  !*** ./router/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErmRouter": () => (/* binding */ ErmRouter)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);
/* harmony import */ var _maps_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps/map */ 34317620);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/component */ 57373778);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
  "Router": function() {
    return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Router;
  },

  "ErmMap": function() {
    return _maps_map__WEBPACK_IMPORTED_MODULE_2__.ErmMap;
  },

  "ErmComponentRegistry": function() {
    return _components_component__WEBPACK_IMPORTED_MODULE_3__.ErmComponentRegistry;
  }
});




class ErmRouter extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Router {
  constructor() {
    super(...arguments);

    this.beforeRouteNavigation = function (prev, current) {
      if (current.info.route != "sign") {
        if (!localStorage.getItem("auth")) {
          this.navigateTo("sign");
        }
      }
    };

    this.afterRouteNavigation = function (current) {};
  }

  lookups() {
    return [{ component: _components_component__WEBPACK_IMPORTED_MODULE_3__.ErmComponentRegistry }];
  }

  getComponentRegistry() {
    return this.$component;
  }

  getConfig() {
    var config = {
      baseMap: _maps_map__WEBPACK_IMPORTED_MODULE_2__.ErmMap,
      history: "html5",
    };
    return config;
  }

  _() {
    _;
  }
}




/***/ }),

/***/ 53025444:
/*!*************************************!*\
  !*** ./services/ServiceProvider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceProvider": () => (/* binding */ ServiceProvider)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/core/index.js */ 10193561);
/* harmony import */ var _components_javascript_toast_comp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/javascript/toast-comp */ 42596698);
/* harmony import */ var _components_javascript_form_comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/javascript/form-comp */ 49937256);
/* harmony import */ var _components_javascript_alert_comp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/javascript/alert-comp */ 33407950);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
  "Service": function() {
    return _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.Service;
  },

  "FormComp": function() {
    return _components_javascript_form_comp__WEBPACK_IMPORTED_MODULE_2__.FormComp;
  },

  "AlertComp": function() {
    return _components_javascript_alert_comp__WEBPACK_IMPORTED_MODULE_3__.AlertComp;
  },

  "ToastComp": function() {
    return _components_javascript_toast_comp__WEBPACK_IMPORTED_MODULE_4__.ToastComp;
  }
});






class  ServiceProvider extends _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.Service {
  validateUser(user){
    var {userName , password} = user;
    var updatedData = [
      {
        "employeeNumber": "emp101",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "8765432109",
        "address": "456 Oak Avenue, CA, USA",
        "department": "HR",
        "role": "Admin",
        "designation": "Manager",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp103",
        "name": "Alex Johnson",
        "email": "alex.j@example.com",
        "phone": "7654321098",
        "address": "789 Pine Road, TX, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Junior Accountant",
        "gender": "Non-binary",
        "password": "password"
      },
      {
        "employeeNumber": "emp104",
        "name": "Emily Brown",
        "email": "emily.b@example.com",
        "phone": "6543210987",
        "address": "321 Birch Lane, FL, USA",
        "department": "Marketing",
        "role": "Lead Developer",
        "designation": "Senior Associate",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp105",
        "name": "Michael Green",
        "email": "michael.g@example.com",
        "phone": "9876512345",
        "address": "654 Cedar Street, WA, USA",
        "department": "IT",
        "role": "Senior Developer",
        "designation": "Associate Engineer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp106",
        "name": "Sophia Wilson",
        "email": "sophia.w@example.com",
        "phone": "8765123498",
        "address": "789 Willow Lane, CO, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Senior Specialist",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp107",
        "name": "Chris Martinez",
        "email": "chris.m@example.com",
        "phone": "7651234598",
        "address": "456 Birch Avenue, TX, USA",
        "department": "IT",
        "role": "Admin",
        "designation": "Lead Engineer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp108",
        "name": "Olivia Taylor",
        "email": "olivia.t@example.com",
        "phone": "6547891230",
        "address": "321 Maple Street, FL, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp109",
        "name": "Liam Anderson",
        "email": "liam.a@example.com",
        "phone": "9877894561",
        "address": "123 Pine Drive, NY, USA",
        "department": "Marketing",
        "role": "Team Lead",
        "designation": "Junior Specialist",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp110",
        "name": "Ava Lee",
        "email": "ava.l@example.com",
        "phone": "8763217890",
        "address": "654 Oak Avenue, CA, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp111",
        "name": "Noah Harris",
        "email": "noah.h@example.com",
        "phone": "7659871234",
        "address": "789 Cedar Lane, TX, USA",
        "department": "IT",
        "role": "Senior Developer",
        "designation": "Developer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp112",
        "name": "Isabella Moore",
        "email": "isabella.m@example.com",
        "phone": "6541239876",
        "address": "123 Maple Street, CO, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Manager",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp113",
        "name": "Ethan White",
        "email": "ethan.w@example.com",
        "phone": "9874561230",
        "address": "456 Willow Drive, FL, USA",
        "department": "Marketing",
        "role": "Manager",
        "designation": "Senior Strategist",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp114",
        "name": "Mia Thompson",
        "email": "mia.t@example.com",
        "phone": "8766543210",
        "address": "789 Elm Road, CA, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Generalist",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp115",
        "name": "Lucas Perez",
        "email": "lucas.p@example.com",
        "phone": "7657891234",
        "address": "321 Birch Lane, TX, USA",
        "department": "IT",
        "role": "Lead Developer",
        "designation": "Senior Developer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp116",
        "name": "Amelia Evans",
        "email": "amelia.e@example.com",
        "phone": "6549873210",
        "address": "654 Pine Street, NY, USA",
        "department": "Finance",
        "role": "Senior Developer",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp117",
        "name": "Elijah Scott",
        "email": "elijah.s@example.com",
        "phone": "9873216540",
        "address": "123 Maple Drive, CO, USA",
        "department": "Marketing",
        "role": "Team Lead",
        "designation": "Writer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp118",
        "name": "Charlotte Martinez",
        "email": "charlotte.m@example.com",
        "phone": "8769871234",
        "address": "456 Cedar Road, FL, USA",
        "department": "HR",
        "role": "Manager",
        "designation": "Specialist",
        "gender": "Female",
        "password": "password"
      },
      {
        "employeeNumber": "emp119",
        "name": "James Ramirez",
        "email": "james.r@example.com",
        "phone": "7653219876",
        "address": "789 Birch Avenue, TX, USA",
        "department": "IT",
        "role": "Lead Developer",
        "designation": "Engineer",
        "gender": "Male",
        "password": "password"
      },
      {
        "employeeNumber": "emp120",
        "name": "Harper Walker",
        "email": "harper.w@example.com",
        "phone": "6543219870",
        "address": "321 Pine Lane, CA, USA",
        "department": "Finance",
        "role": "Manager",
        "designation": "Analyst",
        "gender": "Female",
        "password": "password"
      }
    ]
    localStorage.setItem("users",JSON.stringify(updatedData));
    var users = JSON.parse(localStorage.getItem("users"));
    var currentUser = users.filter(
      (user) => ((user.employeeNumber == userName || user.name == userName) && user.password == password)
    );
    if(currentUser[0]){
    localStorage.setItem("auth", JSON.stringify({"empNo":currentUser[0].employeeNumber,"role":currentUser[0].role,"name":currentUser[0].name}));
    this.$app.$router.navigateTo("home.profile");
    var url = `https://ui-avatars.com/api/?name=${currentUser[0].name.trim().charAt(0).toUpperCase()}&color=fff&background=${this.getRandomColor()}&rounded=true`;
    document.querySelector("#favicon").href = url;
    localStorage.setItem("faviconUrl",url);
    }
    else{
      return "Wrong Credentials!";
  }
  }

  getRole(){
    return JSON.parse(localStorage.getItem("auth")).role;
  }

  getUser(empNo){
    var users = this.getUsers();
    var user = users.filter((user) => user.employeeNumber == empNo)[0];
    var {password , ...remaining} = user;
    return remaining;
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users"))?.map(({ password, ...rest }) => rest); 
  }

  addUser(user){
   try{ var users = this.getUsers();
    var updatedUsers = [...users,user];
    localStorage.setItem("users",JSON.stringify(updatedUsers));
    this.toast("Employee added successfully","success");
    }catch(e){
      this.toast("ERROR! something went wrong","error");
    }
  }

  updateUser(employee){
    try{let users = this.getUsers();
    let updatedUsers = users.map((user) => {
      if (user.employeeNumber === employee.employeeNumber) {
        return { ...user, ...employee };
      }
      return user; 
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    this.toast("Employee details updated successfully","success");}
    catch(e){
      this.toast("ERROR! something went wrong","error");
    }
  }

  showFormComp(type,user){
    this.$app.$component.render(_components_javascript_form_comp__WEBPACK_IMPORTED_MODULE_2__.FormComp,{"type":type,"user":user},"#popup",{clearOutlet : true}); 
  }

  deleteUser(empNo){
      try{var updatedUsers = this.getUsers().filter((user) => user.employeeNumber !== empNo);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
         this.$app.$router.navigateBack();
      this.toast("Employee deleted successfully","success");}
      catch(e){
        this.toast("ERROR! something went wrong","error");
      }
  }

  toast(m,t){
    setTimeout(()=>{this.$app.$component.render(_components_javascript_toast_comp__WEBPACK_IMPORTED_MODULE_4__.ToastComp,{message:m,type:t},"#toast");},1000);
  }

  getRandomColor() {
    var colors = [
      'F94144', 'F3722C', 'F8961E', 'F9C74F',
      '90BE6D', '43AA8B', '577590', '577590',
      'D7263D', '1B998B', '9A031E', '5F0F40'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  showAlert(h,c,perform){
    this.$app.$component.render(_components_javascript_alert_comp__WEBPACK_IMPORTED_MODULE_3__.AlertComp,{header:h,content:c},"#toast",{
      methods : {"perform": function(){ perform();}},
      clearOutlet : true,
    });
  }

  _() {
    _;
  }
}


/***/ }),

/***/ 85947163:
/*!*******************************!*\
  !*** ./router/routes/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Route": function() {
        return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route;
    }
});



let HomeComp;

class Home extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route {
    render(){
        return {
            outlet : "#outlet",
            component:HomeComp
        }
    }
    divert(){
        if(this.navigation.info.route == "home")
        this.$app.$router.navigateTo("home.profile");
    }
    static actions(arg1) {
        return Object.assign(super.actions({

        }), arg1);
    }

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(Promise.all(/*! import() | components/javascript/home-comp */[__webpack_require__.e("vendors-node_modules_zoho_lyte-ui-component_components_javascript_lyte-table_js"), __webpack_require__.e("components_javascript_user-comp_js"), __webpack_require__.e("components/javascript/profile-comp"), __webpack_require__.e("components/javascript/home-comp")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/javascript/home-comp */ 30003561)).then(function(res) {
            HomeComp = res.HomeComp;
        }));
    }
}





/***/ }),

/***/ 82933275:
/*!***************************************!*\
  !*** ./router/routes/home/details.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Details": () => (/* binding */ Details)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
  "Route": function() {
    return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route;
  }
});



let DetailsComp;

class Details extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route {
  fetch(params){
    return  {
      "user":this.$app.$ServiceProvider.getUser(params.dynamicParam),
      "show":this.$app.$ServiceProvider.getRole() == "Admin"
    }
  }
  render(data,params){
     return {
       outlet : "#outlet2",
       component : DetailsComp
     }
  }
  static actions(arg1) {
      return Object.assign(super.actions({
          
      }), arg1);
  }

  _() {
    _;
  }

  getRequirements() {
    arguments[1].push(Promise.all(/*! import() | components/javascript/details-comp */[__webpack_require__.e("vendors-node_modules_zoho_lyte-ui-component_components_javascript_lyte-table_js"), __webpack_require__.e("components_javascript_user-comp_js"), __webpack_require__.e("components/javascript/details-comp")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/javascript/details-comp */ 65266391)).then(function(res) {
      DetailsComp = res.DetailsComp;
    }));
  }
}





/***/ }),

/***/ 15109247:
/*!*************************************!*\
  !*** ./router/routes/home/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Route": function() {
        return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route;
    }
});



let AdminComp;

class Index extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route {
    beforeFetch(){
          var role = this.$app.$ServiceProvider.getRole();
            if(role != "Admin" && role != "Manager"){
                     this.navigation.abort();
                       this.navigateTo("home.profile");
              }
      }
    render() {
		return {outlet : "#outlet2",component : AdminComp}
	}
    onError(e){
          console.log(e);
      }
    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(__webpack_require__.e(/*! import() | components/javascript/admin-comp */ "components/javascript/admin-comp").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/javascript/admin-comp */ 13172170)).then(function(res) {
            AdminComp = res.AdminComp;
        }));
    }
}





/***/ }),

/***/ 3528349:
/*!***************************************!*\
  !*** ./router/routes/home/profile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Route": function() {
        return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route;
    }
});



let ProfileComp;

class Profile extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route {
    render(){
        return {
            outlet : "#outlet2",
            component : ProfileComp
          }
    }
    static actions(arg1) {
        return Object.assign(super.actions({

        }), arg1);
    }

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(Promise.all(/*! import() | components/javascript/profile-comp */[__webpack_require__.e("vendors-node_modules_zoho_lyte-ui-component_components_javascript_lyte-table_js"), __webpack_require__.e("components_javascript_user-comp_js"), __webpack_require__.e("components/javascript/profile-comp")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/javascript/profile-comp */ 48614070)).then(function(res) {
            ProfileComp = res.ProfileComp;
        }));
    }
}





/***/ }),

/***/ 53487529:
/*!*******************************!*\
  !*** ./router/routes/sign.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sign": () => (/* binding */ Sign)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Route": function() {
        return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route;
    }
});



let SigninComp;

class Sign extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route {
    beforeFetch(){
        if(localStorage.getItem("auth")){
            this.navigation.abort();
            this.navigateTo("home.profile")
        }
    }
    render(){
        return { 
            outlet : "#outlet",
            component : SigninComp
        }
    }
    static actions(arg1) {
        return Object.assign(super.actions({

        }), arg1);
    }

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(__webpack_require__.e(/*! import() | components/javascript/signin-comp */ "components/javascript/signin-comp").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/javascript/signin-comp */ 56429359)).then(function(res) {
            SigninComp = res.SigninComp;
        }));
    }
}





/***/ }),

/***/ 30857568:
/*!***********************************!*\
  !*** ./router/routes/wildcard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wildcard": () => (/* binding */ Wildcard)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/router/index.js */ 14504106);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Route": function() {
        return _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route;
    }
});



class Wildcard extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.Route {
    render(){
       return {
           outlet : "#outlet",
           html : "<h2 style='text-align:center'>Oops! No such page found </h2>" 
       }
    }
    static actions(arg1) {
        return Object.assign(super.actions({

        }), arg1);
    }

    _() {
        _;
    }

    getRequirements() {}
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["lyte"], () => (__webpack_exec__(49405404)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-init.js.map