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

class AddComp extends Component {
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
      phone: this.$app.prop("number"),
      address: this.$app.prop("string"),
      department: this.$app.prop("string"),
      role: this.$app.prop("string"),
      designation: this.$app.prop("string"),
      gender: this.$app.prop("string"),     
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			submit:function(){
				var user = {
					employeeNumber: this.data.employeeNumber,
					name: this.data.name,
					email: this.data.email,
					phone: this.data.phone,
					address: this.data.address,
					department: this.data.department,
					role: this.data.role,
					designation: this.data.designation,
					gender: this.data.gender
				};
				 if(this.data.type.toLowerCase().trim() == "add"){
					this.$app.$ServiceProvider.addUser(user);
				 }else{
					this.$app.$ServiceProvider.updateUser(user);
			   }
				 this.setData("show",false)
				 window.location.reload();
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

AddComp._template = "<template tag-name=\"add-comp\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lbind(show)}}\" is=\"case\" lc-id=\"lc_id_0\"><form id=\"userForm\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(type,'!=','update')}}\" is=\"case\" lc-id=\"lc_id_0\"><div> <label for=\"employeeNumber\">Employee Number</label> <input type=\"text\" id=\"employeeNumber\" value=\"{{lbind(employeeNumber)}}\" required=\"\"> </div></template></template> <div> <label for=\"name\">Name</label> <input type=\"text\" id=\"name\" value=\"{{lbind(name)}}\" required=\"\"> </div> <div> <label for=\"email\">Email</label> <input type=\"email\" id=\"email\" value=\"{{lbind(email)}}\" required=\"\"> </div> <div> <label for=\"phone\">Phone</label> <input type=\"tel\" id=\"phone\" name=\"phone\" pattern=\"[0-9]{10}\" value=\"{{lbind(phone)}}\" required=\"\"> </div> <div> <label for=\"address\">Address</label> <textarea id=\"address\" value=\"{{lbind(address)}}\" rows=\"3\" required=\"\"></textarea> </div> <div> <label for=\"department\">Department</label> <select id=\"department\" name=\"department\" value=\"{{lbind(department)}}\" required=\"\"> <option value=\"IT\">IT</option> <option value=\"HR\">HR</option> <option value=\"Finance\">Finance</option> <option value=\"Marketing\">Marketing</option> </select> </div> <div> <label for=\"role\">Role</label> <select id=\"role\" name=\"role\" value=\"{{lbind(role)}}\" required=\"\"> <option value=\"Admin\">Admin</option> <option value=\"Manager\">Manager</option> <option value=\"Lead Developer\">Lead Developer</option> <option value=\"Senior Developer\">Senior Developer</option> <option value=\"Team Lead\">Team Lead</option> </select> </div> <div> <label for=\"designation\">Designation</label> <input type=\"text\" id=\"designation\" value=\"{{lbind(designation)}}\" required=\"\"> </div> <div> <label for=\"gender\">Gender</label> <select id=\"gender\" value=\"{{lbind(gender)}}\" required=\"\"> <option value=\"\" disabled=\"\" selected=\"\">Select gender</option> <option value=\"Male\">Male</option> <option value=\"Female\">Female</option> <option value=\"Non-binary\">Non-binary</option> </select> </div> <div> <button onclick=\"{{action('submit')}}\">Submit</button> <button type=\"reset\">Reset</button> </div> </form></template></template> </template><style>add-comp form{\n  position: absolute;\n  top:0;\n  left:0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(215, 140, 140);\n  z-index: 22;\n}</style>";;
AddComp._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[0,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,3],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"cn":"lc_id_0"},{"t":"a","p":[0,3,3],"cn":"lc_id_0"},{"t":"a","p":[0,5,3],"cn":"lc_id_0"},{"t":"a","p":[0,7,3],"cn":"lc_id_0"},{"t":"a","p":[0,9,3],"cn":"lc_id_0"},{"t":"a","p":[0,11,3],"cn":"lc_id_0"},{"t":"a","p":[0,13,3],"cn":"lc_id_0"},{"t":"a","p":[0,15,3],"cn":"lc_id_0"},{"t":"a","p":[0,17,3],"cn":"lc_id_0"},{"t":"a","p":[0,19,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"]}];;

AddComp._observedAttributes = [
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

export {AddComp};

AddComp.register("add-comp", {
    hash: "AddComp_4",
    refHash: "C_erm_app_0"
}); 
