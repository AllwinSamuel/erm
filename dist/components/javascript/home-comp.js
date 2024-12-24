"use strict";
(self["webpackChunkerm"] = self["webpackChunkerm"] || []).push([["components/javascript/home-comp"],{

/***/ 30003561:
/*!********************************************!*\
  !*** ./components/javascript/home-comp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComp": () => (/* binding */ HomeComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _navbar_comp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-comp.js */ 90068352);
/* harmony import */ var _profile_comp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-comp.js */ 48614070);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});





class HomeComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}
    init(){
          //  this.$app.$router.navigateTo("home.user");
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

HomeComp._template = "<template tag-name=\"home-comp\"> <navbar-comp></navbar-comp> <div id=\"outlet2\"> <profile-comp></profile-comp> </div> <div id=\"toast\"></div> </template><style>#outlet2{\n  height: calc(100vh - 100px);\n}</style>";;
HomeComp._dynamicNodes = [{"t":"cD","p":[1],"in":1,"sibl":[0]},{"t":"cD","p":[3,1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
HomeComp._observedAttributes = [];



HomeComp.register("home-comp", {
    hash: "HomeComp_8",
    refHash: "C_erm_app_0"
}); 


/***/ }),

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
/* harmony import */ var _avatar_comp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-comp.js */ 53655717);
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



NavbarComp.register("navbar-comp", {
    hash: "NavbarComp_21",
    refHash: "C_erm_app_0"
}); 


/***/ })

}]);
//# sourceMappingURL=home-comp.js.map