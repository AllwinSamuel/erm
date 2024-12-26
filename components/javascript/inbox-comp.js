import {Component} from "@slyte/component";

class InboxComp extends Component {
	constructor() {
		super();
	}
  init(){
		this.setData("message",this.$app.$ServiceProvider.getUser(JSON.parse(localStorage.getItem("auth")).empNo).message)
		console.log(this.data.message)
	}
	data() {
		return {
			message:this.$app.prop("array")
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

export {InboxComp}; 
