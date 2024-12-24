import {Component} from "@slyte/component";

class FormComp extends Component {
	constructor() {
		super();
	}
  init(){
		 this.setData("employeeNumber",this.data.user.employeeNumber);
		 this.setData("name",this.data.user.name);
		 this.setData("email",this.data.user.email);
		 this.setData("phone",this.data.user.phone);
		 this.setData("address",this.data.user.address);
		 this.setData("department",this.data.user.department);
		 this.setData("role",this.data.user.role);
		 this.setData("designation",this.data.user.designation);
		 this.setData("gender",this.data.user.gender);
	}
	data() {
		return {
			show: this.$app.prop("boolean",{default : true}),
			employeeNumber: this.$app.prop("string"),
      name: this.$app.prop("string"),
      email: this.$app.prop("string"),
      phone: this.$app.prop("string"),
      address: this.$app.prop("string"),
      department: this.$app.prop("string"),
      role: this.$app.prop("string"),
      designation: this.$app.prop("string"),
      gender: this.$app.prop("string"),     
		}	
	}

	static actions() {
		return {
			submit: function () {
				try {
					const { employeeNumber, name, email, phone, address, department, role, designation, gender, type } = this.data;
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
					const user = {
						employeeNumber,
						name,
						email,
						phone,
						address,
						department,
						role,
						designation,
						gender,
					};
					if (type.toLowerCase().trim() === "add") {
						this.$app.$ServiceProvider.showAlert(
							"ADD EMPLOYEE!",
							"Are you sure you want to add this employee?",
							() => {
								this.$app.$ServiceProvider.addUser(user);
							}
						);
					} else {
						this.$app.$ServiceProvider.showAlert(
							"UPDATE EMPLOYEE!",
							"Are you sure you want to update this employee " + employeeNumber + "?",
							() => {
								this.$app.$ServiceProvider.updateUser(user);
							}
						);
					}
					this.$node.remove();
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
