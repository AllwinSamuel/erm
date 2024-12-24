import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    },

    "Component": function() {
        return Component;
    }
});

import {Component} from "/node_modules/@slyte/component/index.js";

class FormComp extends Component {
    constructor() {
		super();
	}
    init(){
           
      }
    data(arg1) {
		return Object.assign(super.data({
			  user: this.$app.prop("object")
		}), arg1);	
	}
    static actions(arg1) {
		return Object.assign(super.actions({
			submit: function () {
				try {
					const { employeeNumber, name, email, phone, address, department, role, designation, gender, type } = this.data.user;
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
					if (this.data.type.toLowerCase().trim() === "add") {
						this.$app.$ServiceProvider.showAlert(
							"ADD EMPLOYEE!",
							"Are you sure you want to add this employee?",
							() => {
								this.$app.$ServiceProvider.addUser(this.data.user);
								this.$node.remove();
							}
						);
					} else {
						console.log(this.getData("user"));
						this.$app.$ServiceProvider.showAlert(
							 {
							header:	"UPDATE EMPLOYEE!",
							content: "Are you sure you want to update this employee " + "?",
							cb: () => {
								this.$app.$ServiceProvider.updateUser(this.getData("user"));
								this.$node.remove();
							}
						}
						);
					}
					
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

FormComp._template = "<template tag-name=\"form-comp\"> <div class=\"form-screen\"> <div class=\"form-container\"> <button class=\"form-btn--close\" onclick=\"{{action('close')}}\">X</button> <form> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(type,'==','add')}}\" is=\"case\" lc-id=\"lc_id_0\"><h2>ADD EMPLOYEE</h2></template><template default=\"\"><h2>UPDATE EMPLOYEE</h2></template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(type,'!=','update')}}\" is=\"case\" lc-id=\"lc_id_0\"><lyte-input lt-prop-label=\"EmployeeNumber\" lt-prop-placeholder=\"Enter EmployeeNumber\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(user.employeeNumber)}}\"></lyte-input></template></template> <lyte-input lt-prop-label=\"Name\" lt-prop-placeholder=\"Enter Name\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(user.name)}}\"></lyte-input> <lyte-input lt-prop-label=\"Email\" lt-prop-placeholder=\"Enter Email\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(user.email)}}\"></lyte-input> <lyte-input lt-prop-label=\"Phone\" lt-prop-placeholder=\"Enter Phone\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(user.phone)}}\"></lyte-input> <lyte-input lt-prop-label=\"Address\" lt-prop-placeholder=\"Enter Address\" lt-prop-type=\"textarea\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(user.address)}}\"></lyte-input> <label for=\"department\">Department</label> <lyte-dropdown lt-prop-id=\"department\" lt-prop-class=\"form-input\" lt-prop-selected=\"{{lbind(user.department)}}\" lt-prop-placeholder=\"Select A Department\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"IT\">IT </lyte-drop-item> <lyte-drop-item data-value=\"HR\">HR </lyte-drop-item> <lyte-drop-item data-value=\"Finance\">Finance </lyte-drop-item> <lyte-drop-item data-value=\"Marketing\">Marketing </lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <label for=\"role\">Role</label> <lyte-dropdown lt-prop-id=\"role\" lt-prop-class=\"form-input\" lt-prop-selected=\"{{lbind(user.role)}}\" lt-prop-placeholder=\"Select A Role\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"Admin\">Admin </lyte-drop-item> <lyte-drop-item data-value=\"Manager\">Manager </lyte-drop-item> <lyte-drop-item data-value=\"Lead Developer\">Lead Developer </lyte-drop-item> <lyte-drop-item data-value=\"Senior Developer\">Senior Developer </lyte-drop-item> <lyte-drop-item data-value=\"Team Lead\">Team Lead</lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <lyte-input lt-prop-label=\"Designation\" lt-prop-placeholder=\"Enter Designation\" lt-prop-class=\"form-input\" lt-prop-value=\"{{lbind(user.designation)}}\"></lyte-input> <label for=\"gender\">Gender</label> <lyte-dropdown lt-prop-id=\"gender\" lt-prop-class=\"form-input\" lt-prop-selected=\"{{lbind(user.gender)}}\" lt-prop-placeholder=\"Select A Gender\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"Male\">Male </lyte-drop-item> <lyte-drop-item data-value=\"Female\">Female </lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <div class=\"form-btns\"> <lyte-button lt-prop-appearance=\"success\" onclick=\"{{action('submit')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Submit </template> </lyte-button> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('reset')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Reset </template> </lyte-button> </div> </form> </div> </div> </template><style>@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-input.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-dropdown.css\");\n@import url(\"/node_modules/@zoho/lyte-ui-component/dist/themes/compiledCSS/default/ltr/lyte-ui-button.css\");\n.form-screen{\n  position: fixed;\n  top:0;\n  left:0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 22;\n  display: flex;\n  justify-content: center;\n  overflow: auto;\n}\n.form-container{\n  position: relative;\n  background-color: rgb(255, 255, 255);\n  width:500px;\n  height: fit-content;\n  padding:30px;\n  margin-top: 40px;\n  border-radius: 15px;\n  h2{\n    margin-inline: auto;\n  }\n}\n.form-btn--close{\n  position: absolute;\n  right:5px;\n  top:10px;\n  width: 50px;\n  height: 50px;\n  font-size: larger;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n}\n\nform-comp form{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  height: fit-content;\n}\n\n.form-input{\n  width: 100%;\n  height: 40px;\n  text-indent: 5px;\n  border: 1px solid #d6d6d6 !important;\n}\n\nlyte-dropdown {\n  max-width: 100%;\n}\n\n.form-btns{\n  display: flex;\n  justify-content: center;\n  gap:30px;\n  margin-top: 10px;\n}\n\n.form-btns button{\n  width:150px;\n  height:40px;\n  border-radius: 8px;\n  font-size: 1.2rem;\n}\n\n.lyteField{\n  padding: 0;\n}\n</style>";;
FormComp._dynamicNodes = [{"t":"a","p":[1,1,1]},{"t":"s","p":[1,1,3,1],"c":{"lc_id_0":{"dN":[],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":16,"sibl":[15]},{"t":"s","p":[1,1,3,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"},{"t":"cD","p":[0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":15,"sibl":[14]},{"t":"a","p":[1,1,3,5]},{"t":"cD","p":[1,1,3,5],"in":14,"sibl":[13]},{"t":"a","p":[1,1,3,7]},{"t":"cD","p":[1,1,3,7],"in":13,"sibl":[12]},{"t":"a","p":[1,1,3,9]},{"t":"cD","p":[1,1,3,9],"in":12,"sibl":[11]},{"t":"a","p":[1,1,3,11]},{"t":"cD","p":[1,1,3,11],"in":11,"sibl":[10]},{"t":"a","p":[1,1,3,15]},{"t":"r","p":[1,1,3,15,1],"dN":[{"t":"cD","p":[1,1,1],"in":5,"sibl":[4]},{"t":"cD","p":[1,1,3],"in":4,"sibl":[3]},{"t":"cD","p":[1,1,5],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,7],"in":2,"sibl":[1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[5,4,3,2,1,0],"hc":true,"trans":true,"in":10,"sibl":[9]},{"t":"cD","p":[1,1,3,15],"in":9,"sibl":[8]},{"t":"a","p":[1,1,3,19]},{"t":"r","p":[1,1,3,19,1],"dN":[{"t":"cD","p":[1,1,1],"in":6,"sibl":[5]},{"t":"cD","p":[1,1,3],"in":5,"sibl":[4]},{"t":"cD","p":[1,1,5],"in":4,"sibl":[3]},{"t":"cD","p":[1,1,7],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,9],"in":2,"sibl":[1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[6,5,4,3,2,1,0],"hc":true,"trans":true,"in":8,"sibl":[7]},{"t":"cD","p":[1,1,3,19],"in":7,"sibl":[6]},{"t":"a","p":[1,1,3,21]},{"t":"cD","p":[1,1,3,21],"in":6,"sibl":[5]},{"t":"a","p":[1,1,3,25]},{"t":"r","p":[1,1,3,25,1],"dN":[{"t":"cD","p":[1,1,1],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,3],"in":2,"sibl":[1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[3,2,1,0],"hc":true,"trans":true,"in":5,"sibl":[4]},{"t":"cD","p":[1,1,3,25],"in":4,"sibl":[3]},{"t":"a","p":[1,1,3,27,1]},{"t":"r","p":[1,1,3,27,1,1],"dN":[],"in":3,"sibl":[2]},{"t":"cD","p":[1,1,3,27,1],"in":2,"sibl":[1]},{"t":"a","p":[1,1,3,27,3]},{"t":"r","p":[1,1,3,27,3,1],"dN":[],"in":1,"sibl":[0]},{"t":"cD","p":[1,1,3,27,3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[15,14,13,12,11,10,9,8,7,6,5,4,2,0]}];;
FormComp._observedAttributes = ["user"];

export {FormComp};

FormComp.register("form-comp", {
    hash: "FormComp_4",
    refHash: "C_erm_app_0"
}); 
