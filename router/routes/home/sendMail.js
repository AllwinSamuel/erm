import {Route} from "@slyte/router";
import { MailpanelComp } from "/components/javascript/mailpanel-comp";

class SendMail extends  Route {
    beforeFetch(){
		var role = this.$app.$ServiceProvider.getRole();
		  if(role != "Admin" && role != "Manager"){
				   this.navigation.abort();
					 this.navigateTo("home.profile");
			}
	}
    render(){
        return {outlet : "#outlet2",component : MailpanelComp}
    }
    static actions(){
        return {

        }
    }
}

export {SendMail};

