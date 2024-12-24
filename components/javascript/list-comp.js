import {Component} from "@slyte/component";

class ListComp extends Component {
	constructor() {
		super();
	}
  init(){
		this.setData("users",this.$app.$ServiceProvider.getUsers());
		this.setData("updatedUsers",this.data.users);
	}
	data() {
		return {  
			"users":this.$app.prop("array"),
			"updatedUsers":this.$app.prop("array")
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			search:function(e){
				 this.setData("updatedUsers",
					                           this.data.users.filter((user)=>
																			        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
																		          user.employeeNumber.toLowerCase().includes(e.target.value.toLowerCase()) ||
																		          user.role.toLowerCase().includes(e.target.value.toLowerCase()) 
																		));
			},
			addUser:function(){
				this.$app.$ServiceProvider.showFormComp("add");
		 }
		}
	}

	static observers() {
		return {
		}
	}

}

export {ListComp}; 
