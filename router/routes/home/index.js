import { Route } from "@slyte/router";
import { AdminComp } from "/components/javascript/admin-comp";

class Index extends Route {
  beforeFetch(){
		var role = this.$app.$ServiceProvider.getRole();
		  if(role != "Admin" && role != "Manager"){
				   this.navigation.abort();
					 this.navigateTo("home.profile");
			}
	}
	render() {
		return {outlet : "#outlet2",component : AdminComp}
	}
  onError(e){
		console.log(e);
	}
	static actions(){
		return{
			
		}
	}
}

export {Index};

