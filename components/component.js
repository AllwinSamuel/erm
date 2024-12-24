import { ComponentRegistry } from "@slyte/component";

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
}

export {ErmComponentRegistry}; 

