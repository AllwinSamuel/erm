import {Route} from "@slyte/router";
import { ProfileComp } from "/components/javascript/profile-comp";

class Profile extends  Route {
    beforeFetch(){
        // this.$app.triggerEvent("routeChanged","home.profile");
    }
    render(){
        return {
            outlet : "#outlet2",
            component : ProfileComp
          }
    }
    static actions(){
        return {

        }
    }
}

export {Profile};

