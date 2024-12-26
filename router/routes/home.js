import {Route} from "@slyte/router";
import { HomeComp } from "/components/javascript/home-comp";

class Home extends  Route {
    render(){
        return {
            outlet : "#outlet",
            component:HomeComp
        }
    }
    divert(){
        if(this.navigation.info.route == "home")
        this.$app.$router.navigateTo("home.profile"); 
    }
    static actions(){
        return {

        }
    }
}

export {Home};

