import {Component} from "@slyte/component";

class FormComp extends Component {
	constructor() {
		super();
	}
  init(){
		 
	}
	data() {
		return {
			  user: this.$app.prop("object")
		}	
	}
	static actions() {
		return {
			submit: function () {
				try {
					const { employeeNumber, name, email, phone, address, department, role, designation, gender, type } = this.data?.user;
					if (!employeeNumber || !name || !email || !phone || !address || !department || !role || !designation || !gender) {
						this.$app.$ServiceProvider.toast("All fields are required!", "error");
						return;
					}
					const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					if (!emailRegex.test(email)) {
						this.$app.$ServiceProvider.toast("Please enter a valid email address!","error");
						return;
					}
					if (!/^\d+$/.test(phone)) {
						this.$app.$ServiceProvider.toast("Please enter a valid phone number!", "error");
						return;
					}
					if (this.data.type.toLowerCase().trim() === "add") {
						this.$app.$ServiceProvider.showAlert(
							"ADD EMPLOYEE!",
							"Are you sure you want to add this employee?",
							() => {
								this.$app.$ServiceProvider.addUser(this.data.user);
								// this.$node.remove();
							}
						);
					} else {
						this.$app.$ServiceProvider.showAlert(
							 {
							header:	"UPDATE EMPLOYEE!",
							content: "Are you sure you want to update this employee " + "?",
							cb: () => {
								this.$app.$ServiceProvider.updateUser(this.getData("user"));
								// this.$node.remove();
							}
						}
						);
					}
					
				} catch (e) {
					console.log(e);
				}
			},
			
      close:function(){
				this.$node.remove();
			}
		}
	}

	static observers() {
		return {
		}
	}


}

export {FormComp}; 
