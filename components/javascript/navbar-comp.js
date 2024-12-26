import {Component} from "@slyte/component";

class NavbarComp extends Component {
	constructor() {
		super();
	}
  init(){
		var role = JSON.parse(localStorage.getItem("auth")).role ;
		if(role!= "Admin" && role!="Manager"){
			 this.setData("show",false);
		}
		this.$app.addEventListener("routeChanged", (route) => {
			var links = this.$node.querySelectorAll(".nav-link");
			links.forEach((link) => link.classList.remove("active"));
			const activeLink = Array.from(links).find((link) => link.dataset.route === route);
			if (activeLink) {
				activeLink.classList.add("active");
			}
		});
	}
	data() {
		return {
			"user":this.$app.prop("string" , {default:JSON.parse(localStorage.getItem("auth")).name}),
			"show":this.$app.prop("boolean",{default:true})
		}	
	}

	static methods() {
		return {
		}
	}

	static actions() {
		return {
			logout:function(){
				localStorage.removeItem("auth");
				this.$app.$router.navigateTo("sign");
			},
			active:function(e){
				this.$node.querySelectorAll(".nav-link").forEach((link)=>link.classList.remove("active"));
				e.target.classList.add("active");
			}
		}
	}

	static observers() {
		return {
		}
	}

}

export {NavbarComp}; 
