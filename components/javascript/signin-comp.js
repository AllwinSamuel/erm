import {Component} from "@slyte/component";

class SigninComp extends Component {
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
				const { userName , password} = this.data;
					if (!userName || !password) {
						this.$app.$ServiceProvider.toast("All fields are required!", "error");
						return;
					}
				this.setData("errMsg",this.$app.$ServiceProvider.validateUser({"userName":this.data.userName,"password":this.data.password}));
		}
	} 
	}
	static observers() {
		return {
		}
	}


}

export {SigninComp}; 
