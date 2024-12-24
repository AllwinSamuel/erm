import {Component} from "@slyte/component";

class SiginComp extends Component {
	constructor() {
		super();
	}

	data() {
		return {
			userName: this.$app.prop("string"),
      password: this.$app.prop("string"),
			errMsg : this.$app.prop("string")
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			submit: function (e) {
        e.preventDefault();
				this.setData("errMsg",this.$app.$ServiceProvider.validateUser({"userName":this.data.userName,"password":this.data.password}));
		}
	} 
	}
	static observers() {
		return {
		}
	}

}

export {SiginComp}; 
