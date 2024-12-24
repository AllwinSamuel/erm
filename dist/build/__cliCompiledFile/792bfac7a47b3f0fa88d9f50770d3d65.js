import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Component": function() {
        return Component;
    }
});

import './avatar-comp.js';
import {Component} from "/node_modules/@slyte/component/index.js";

class NavbarComp extends Component {
    constructor() {
		super();
	}
    init(){
          var role = JSON.parse(localStorage.getItem("auth")).role ;
          if(role!= "Admin" && role!="Manager"){
               this.setData("show",false);
          }
      }
    data(arg1) {
		return Object.assign(super.data({
			"user":this.$app.prop("string" , {default:JSON.parse(localStorage.getItem("auth")).name}),
			"show":this.$app.prop("boolean",{default:true})
		}), arg1);	
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			logout:function(){
				localStorage.removeItem("auth");
				this.$app.$router.navigateTo("sign");
			},
			active:function(e){
				document.querySelectorAll(".nav-link").forEach((link)=>link.classList.remove("active"));
				e.target.classList.add("active");
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

NavbarComp._template = "<template tag-name=\"navbar-comp\"> <ul> <li class=\"nav-avatar\"><avatar-comp name=\"{{user}}\"></avatar-comp></li> <li><h1>ERM</h1></li> <li><go-to class=\"nav-link active\" lt-prop-route=\"home\" onclick=\"{{action('active',event)}}\">Profile</go-to></li> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lbind(show)}}\" is=\"case\" lc-id=\"lc_id_0\"><li><go-to class=\"nav-link\" lt-prop-route=\"home.index\" onclick=\"{{action('active',event)}}\">Dashboard</go-to></li></template></template> <li><button onclick=\"{{action('logout')}}\"><img title=\"logout\" src=\"../../assets/logout-svgrepo-com copy.svg\"></button></li> </ul> </template><style>\nnavbar-comp ul{\n   background-color: rgb(255, 255, 255);\n   height:100px;\n   box-shadow: 10px 10px 10px rgb(205, 202, 202);\n   display: flex;\n   padding-inline: 30px;\n   align-items: center;\n   gap:30px;\n   flex-wrap: wrap;\n}\nnavbar-comp li , ul , a {\n  all:unset;\n  \n}\na{\n  pointer-events: none;\n}\nnavbar-comp li {\n  font-size: 1.5rem;\n}\nnavbar-comp li:nth-child(3){\n  margin-left: auto;\n}\n\n.nav-avatar{\n  height: 70px;\n  width:70px;\n}\n\nnavbar-comp  h1{\n   margin-inline: 30px;\n   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n   font-size: 3rem;\n}\nnavbar-comp  button{\n  background: transparent;\n  all:unset;\n  margin-left: 30px;\n  &:hover{\n    scale: 1.1;\n  }\n}\nnavbar-comp  button img{\n  margin-left: auto;\n  height: 30px;\n  width:30px;\n  cursor: pointer;\n}\n\n.nav-link {\n  padding: 33px;\n  position: relative;\n}\n\n.nav-link::before {\n  content: \"\";\n  position: absolute; \n  bottom: -4px; \n  left: 50%; \n  transform: translateX(-50%); \n  height: 4px; \n  width: 0; \n  background-color: rgb(50, 171, 205); \n  transition: width 0.3s ease; \n}\n\n.nav-link:hover::before {\n  width: 100%; \n}\n\n.active{\n  border-bottom: 4px solid rgb(50, 171, 205);\n}\n\n\n@media screen and (width < 780px) {\n  .nav-link {\n    display: none;\n  }\n}</style>";;
NavbarComp._dynamicNodes = [{"t":"a","p":[1,1,0]},{"t":"cD","p":[1,1,0],"in":2,"sibl":[1]},{"t":"a","p":[1,5,0]},{"t":"cD","p":[1,5,0],"in":1,"sibl":[0]},{"t":"s","p":[1,7],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0,0],"cn":"lc_id_0"},{"t":"cD","p":[0,0],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0},{"t":"a","p":[1,9,0]},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;
NavbarComp._observedAttributes = ["user", "show"];

export {NavbarComp};

NavbarComp.register("navbar-comp", {
    hash: "NavbarComp_21",
    refHash: "C_erm_app_0"
}); 