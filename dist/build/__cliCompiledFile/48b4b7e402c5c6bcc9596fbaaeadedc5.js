import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "ComponentRegistry": function() {
        return ComponentRegistry;
    }
});

import { ComponentRegistry } from "/node_modules/@slyte/component/index.js";

class ErmComponentRegistry extends ComponentRegistry{
    constructor(){
        super();
    }
    lookups(){
        return []
    }
    // addRegistries() {

    // }

    addRegistries() {
        return [this.$app.$lyteUiComponentAddon.$component];
    }

    _() {
        _;
    }
}

ErmComponentRegistry.register({
    hash: "C_erm_app_0",
    refHash: "app_1",
    app: true
});

export {ErmComponentRegistry}; 

