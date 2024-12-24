import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "Lyte": function() {
        return Lyte;
    },

    "LyteUiComponentAddon": function() {
        return LyteUiComponentAddon;
    },

    "ErmDb": function() {
        return ErmDb;
    },

    "ServiceProvider": function() {
        return ServiceProvider;
    },

    "ErmRouter": function() {
        return ErmRouter;
    },

    "ErmComponentRegistry": function() {
        return ErmComponentRegistry;
    }
});

import { LyteUiComponentAddon } from "/node_modules/@zoho/lyte-ui-component/addon.js";
import { Lyte } from "/node_modules/@slyte/core/index.js";
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

    _() {
        _;
    }
}
export {ErmApp};

ErmApp.register({
    hash: "app_1"
});

