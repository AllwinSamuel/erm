"use strict";
(self["webpackChunkerm"] = self["webpackChunkerm"] || []).push([["components/javascript/profile-comp"],{

/***/ 53655717:
/*!**********************************************!*\
  !*** ./components/javascript/avatar-comp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComp": () => (/* binding */ AvatarComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});



class AvatarComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}
    init(){
          this.$node.style.backgroundImage = `url("https://ui-avatars.com/api/?name=${this.data.name.trim().charAt(0).toUpperCase()}&color=fff&background=${this.$app.$ServiceProvider.getRandomColor()}&font-weight=900")`
      }
    didConnect(){
       this.$node.addEventListener("click",()=>{
           this.$app.$router.navigateTo("home");
       })
    }
    data(arg1) {
		return Object.assign(super.data({
			name:this.$app.prop("string")
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

AvatarComp._template = "<template tag-name=\"avatar-comp\" class=\"avatar-comp\"> </template><style>.avatar-comp{\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size:cover;\n  outline: 1.5px solid rgb(24, 21, 21);\n  outline-offset: 1px;\n  border-radius :50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10em;\n}</style>";;
AvatarComp._dynamicNodes = [];;
AvatarComp._observedAttributes = ["name"];



AvatarComp.register("avatar-comp", {
    hash: "AvatarComp_17",
    refHash: "C_erm_app_0"
}); 


/***/ }),

/***/ 48614070:
/*!***********************************************!*\
  !*** ./components/javascript/profile-comp.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComp": () => (/* binding */ ProfileComp)
/* harmony export */ });
/* harmony import */ var _slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @slyte/core/src/lyte-utils */ 56505143);
/* harmony import */ var _avatar_comp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar-comp.js */ 53655717);
/* harmony import */ var _user_comp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-comp.js */ 15949220);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@slyte/component/index.js */ 26633);

var _ = {};

(0,_slyte_core_src_lyte_utils__WEBPACK_IMPORTED_MODULE_0__._defineProperty)(_, {
    "Component": function() {
        return _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component;
    }
});





class ProfileComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
		super();
	}
    init(){
          this.setData("user",this.$app.$ServiceProvider.getUser(JSON.parse(localStorage.getItem("auth")).empNo));
      }
    data(arg1) {
		return Object.assign(super.data({
			"user":this.$app.prop("object")
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

ProfileComp._template = "<template tag-name=\"profile-comp\"> <div id=\"avatar\"><avatar-comp name=\"{{user.name}}\"></avatar-comp></div> <user-comp user=\"{{user}}\"></user-comp> </template><style>#avatar{\n  height: 150px;\n  width:150px;\n}\nprofile-comp{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgb(193, 221, 231);\n  height: 100vh;\n  padding-top: 30px;\n  gap:50px;\n}</style>";;
ProfileComp._dynamicNodes = [{"t":"a","p":[1,0]},{"t":"cD","p":[1,0],"in":1,"sibl":[0]},{"t":"a","p":[3]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;
ProfileComp._observedAttributes = ["user"];



ProfileComp.register("profile-comp", {
    hash: "ProfileComp_9",
    refHash: "C_erm_app_0"
}); 


/***/ })

}]);
//# sourceMappingURL=profile-comp.js.map