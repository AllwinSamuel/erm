import {Route} from "@slyte/router";
import { SigninComp } from "/components/javascript/signin-comp";

class Sign extends  Route {
    beforeFetch(){
        if(localStorage.getItem("auth")){
            this.navigation.abort();
            this.navigateTo("home.profile")
        }
    }
    render(){
        return { 
            outlet : "#outlet",
            component : SigninComp
        }
    }
    static actions(){
        return {

        }
    }
}

export {Sign};

