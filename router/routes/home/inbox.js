import {Route} from "@slyte/router";
import { InboxComp } from "/components/javascript/inbox-comp";

class Inbox extends  Route {
    render(){
        return {outlet : "#outlet2",component : InboxComp}
    }
    static actions(){
        return {

        }
    }
}

export {Inbox};

