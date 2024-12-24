import {Component} from "@slyte/component";

class DetailsComp extends Component {
	constructor() {
		super();
	}

	data() {
		return {
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			deleteUser:function(empNo){
				this.$app.$ServiceProvider.showAlert("DELETE EMPLOYEE!","Are you sure want to delete this employee "+empNo,()=>{this.$app.$ServiceProvider.deleteUser(empNo)});
			},
			updateUser:function(user){
				this.$app.$ServiceProvider.showFormComp("update",user);
			}
		}
	}

	static observers() {
		return {
		}
	}

}

export {DetailsComp}; 
