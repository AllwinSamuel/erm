import {Component} from "@slyte/component";

class ProfileComp extends Component {
	constructor() {
		super();
	}
  init(){
		this.setData("user",this.$app.$ServiceProvider.getUser(JSON.parse(localStorage.getItem("auth")).empNo));
	}
	data() {
		return {
			"user":this.$app.prop("object")
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			
		}
	}

	static observers() {
		return {
		}
	}

}

export {ProfileComp}; 
