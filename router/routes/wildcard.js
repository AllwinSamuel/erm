import {Route} from "@slyte/router";

class Wildcard extends  Route {
     render(){
        return {
            outlet : "#outlet",
            html : "<h2 style='text-align:center'>Oops! No such page found </h2>" 
        }
     }
    static actions(){
        return {

        }
    }
}

export {Wildcard};

