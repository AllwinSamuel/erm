import { LyteUiComponentAddon } from "@zoho/lyte-ui-component/addon.js";
import { Lyte } from "@slyte/core";
import  {ErmDb} from "./data-store/db";
import  {ErmComponentRegistry}  from "./components/component";
import  {ErmRouter}  from "./router/router";
import { ServiceProvider } from "./services/ServiceProvider";

class ErmApp extends Lyte{
    lookups(){
        return [
            LyteUiComponentAddon,
            {component : ErmComponentRegistry},
            {router : ErmRouter},
            {db : ErmDb},
            {ServiceProvider}
        ];
    }
}
export {ErmApp};

