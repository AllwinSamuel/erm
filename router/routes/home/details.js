import {Route} from "@slyte/router";
import { DetailsComp } from "/components/javascript/details-comp";

class Details extends  Route {
    fetch(params){
      return  {
        "user":this.$app.$ServiceProvider.getUser(params.dynamicParam),
        "show":this.$app.$ServiceProvider.getRole() == "Admin"
      }
    }
    render(data,params){
       return {
         outlet : "#outlet2",
         component : DetailsComp
       }
    }
    static actions(){
        return {
            
        }
    }
}

export {Details};

