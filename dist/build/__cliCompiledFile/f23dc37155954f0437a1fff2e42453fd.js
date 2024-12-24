import { _defineProperty } from "@slyte/core/src/lyte-utils";
var _ = {};

_defineProperty(_, {
    "prop": function() {
        return prop;
    },

    "Component": function() {
        return Component;
    },

    "LyteUiComponentComponentRegistry": function() {
        return LyteUiComponentComponentRegistry;
    }
});

import "/node_modules/@zoho/lyte-ui-component/components/helpers/helpers-dev.js";
import { prop } from "/node_modules/@slyte/core/index.js";
import { Component, LyteUiComponentComponentRegistry } from "/node_modules/@zoho/lyte-ui-component/components/component.js";
import $L from "/node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js";

/**
 * A menu is a group of options available to perform some reasonable actions in the page
 * @component lyte-menu
 * @version 1.0.0
 * @methods onBeforeOpen,onOpen,onBeforeClose,onClose,onMenuClick,onPositionChanged
 */

class LyteMenuComponent extends Component {
    constructor() {
        super();
    }

    init() {
        var event = this.getData('ltPropEvent');
        var evt = this.checkElementForMenu.bind(this);
        this.setData('eventListeners.event', evt);
        this._close = this.closing.bind(this);
        this._trsend = this.tranEnd.bind(this);
        this._hoverclose = this.hoverClose.bind(this);
        document.addEventListener(/^(mouseenter|mousemove|mouseover|hover)$/.test(event) ? 'mousemove' : event, evt, true);

        if (!document.getElementsByClassName('lytemenufreezelayer')[0] && this.getData('ltPropFreeze')) {
            this.appendFreeze( 'lytemenufreezelayer left lyteMenuHidden')
            this.appendFreeze( 'lytemenufreezelayer top lyteMenuHidden')
            this.appendFreeze( 'lytemenufreezelayer bottom lyteMenuHidden')
            this.appendFreeze( 'lytemenufreezelayer right lyteMenuHidden')
            var freezeLayer = this.appendFreeze( 'lytemenufreezelayer nogroup lyteMenuHidden');
            freezeLayer.addEventListener('wheel', this.preventEvent);
            freezeLayer.addEventListener('touchmove', this.preventEvent);
        }
        if (!document.hasOwnProperty('_lyteMenu')) {
            document.documentElement.addEventListener('click', window.lyteCloseMenu, true);
            document.documentElement.addEventListener('keydown', this.keydownCheck, true);
            document.documentElement.addEventListener('keypress', window.menukeypress, true);
            window.addEventListener('orientationchange', this.resizeFunc, true);
            window.addEventListener('resize', this.resizeFunc, true);
            document._lyteMenu = {};
            document._lyteMenu.eventFlag = true;
        }
        /**
         * @method beforeRender
         * @version 1.0.1
         */
        this.getMethods('beforeRender') && this.executeMethod('beforeRender', this.$node);
    }

    rtlfunc(lft, bcr, ww) {
        if (this._dir) {
            if (bcr) {
                if (lft == 'right') {
                    return ww - bcr.left;
                }
                return ww - bcr.right;
            } else if (lft == 'left') {
                return 'right';
            }
        }
        return bcr ? bcr[lft] : 'left';
    }

    static actions(arg1) {
        return Object.assign(super.actions({
            mousemove: function (evt, _this) {
               var __target = evt.target,
               __class = 'lyteMenuSelection',
               __closest = __target.closest( "lyte-menu-item:not(.lyteSearchHidden):not(.lyteMenuItemDisabled)" ),
               exst = _this.getElementsByClassName( __class )[ 0 ],
               fn = function( __value ){
                    var __attr = 'aria-activedescendant';
                    $L( this.$node.element ).attr( __attr, __value );
                    $L( this.childComp ).attr( __attr, __value );
               }.bind( this );

               if( exst == __closest ){
                  return;
               }

               if( __closest ){
                    if( exst ){
                        $L( exst ).removeClass( __class );
                    }

                    $L( __closest ).addClass( __class );
                    fn( __closest.id );
               }
            }
        }), arg1);
    }

    arrayFrom(nodeList) {
        var arrayList = [];
        for (var i = 0; i < nodeList.length; i++) {
            arrayList.push(nodeList[i]);
        }
        return arrayList.slice();
    }

    appendFreeze(className) {
        var freezeLayer = document.createElement('div');
        freezeLayer.setAttribute('class', className);
        
        return window._lyteUiUtils.appendChild( document.body, freezeLayer );
    }

    resizeFunc(event) {
        if (event && event.type == 'resize' && window._lyteUiUtils.isMobile) {
            return;
        }
        clearTimeout(this._resizeTimeout)
        this._resizeTimeout = setTimeout(function () {
            var activeMenu = document.getElementsByTagName('lyte-menu');
            for (var i = 0; i < activeMenu.length; i++) {
                var current = activeMenu[i],
                    comp = current.component;
                if (current.classList.contains('lyteMenuClosed')) {
                    continue;
                }
                if (!comp.hasOwnProperty('parentMenu')) {
                    comp.callScrollFunc(event);
                    if (comp.getData('ltPropFreeze') && !comp.parentMenu) {
                        setTimeout(comp.setZIndex.bind(comp), 100);
                    }
                }
            }
        }.bind(this), event && event.type == "orientationchange" ? 500 : 16)
    }

    open_submenu(evt) {
        var _this = this,
        box = _this.childComp,
        child_opened = _this.childMenu;

        if( !child_opened && _this.data.ltPropAria ){
            var selected_cls = 'lyteMenuSelection',
            selected = box.getElementsByClassName( selected_cls )[ 0 ];
            if( !selected ){
                selected = Array.from( this.childComp.getElementsByTagName( 'lyte-menu-item' ) ).filter( function( item ){
                    var __$elem = $L( item );
                    return !( __$elem.hasClass( 'lyteSearchHidden' ) || __$elem.hasClass( 'lyteMenuItemDisabled' ) );
                })[ 0 ];

                if( selected ){
                    var __id = selected.id,
                    ns = 'aria-activedescendant';

                    $L( _this.$node.element ).attr( ns, __id );
                    $L( box ).attr( ns, __id ); 
                    $L( selected ).addClass( selected_cls );
                    _this.scrIntoView( selected );
                }
            }
            
            /**
             * @method onBeforeSubmenuOpen
             * @version 3.98.0
             */
            var cb = "onBeforeSubmenuOpen",
            __ret,
            __fn = function(){
                var submenu = $L( selected ).attr( "lyte-sub-menu" );
                if( submenu ){
                    var __sub = document.querySelector( submenu );

                    if( __sub ){
                        var keyCode = evt.keyCode,
                        menu_pos = __sub.ltProp( 'position' );
                        
                        if( /right/i.test( menu_pos ) && keyCode == 37 || /left/i.test( menu_pos ) && keyCode == 39 ){
                            return;
                        }

                        __sub.component.openingMenu( selected, { target : selected } );
                        return true;
                    }
                }
            };

            if( _this.getMethods( cb ) ){
                __ret = _this.executeMethod( cb, selected, evt, _this.$node );
            }

            if( __ret == false ){
                return false;
            } else if( __ret && __ret.then ){
                __ret.then( __fn ).catch( function( err ){
                    console.error( err );
                });
            } else {
                if( !__fn() ){
                    return false;
                }
            }

            evt.preventDefault();
            return true;
        }
    }

    is_input_element(target, keyCode) {
        if( target.contentEditable == "true" || /(input|textarea)/i.test( target.tagName || '' ) ){

            var allowed;

            if( this.childComp.contains( target ) ){
                allowed = target.getAttribute( 'allowed-keys' ) || "all";
            } else {
                allowed = ( target.getAttribute( 'allowed-keys' ) || "9" );
            }

            if( allowed == "all" || allowed.split( ',' ).indexOf( keyCode.toString() ) != -1 ){
                return;
            }

            return true;
        }   
    }

    keydownCheck(event) {
        var keyCode = event.which || event.keyCode,
        __target = event.target;

        if (keyCode == 27) {
            window.lyteCloseMenu(event, undefined, true, true );
        } else if (/^(38|40|13|36|35)$/.test(keyCode)) {
            var menus = document.getElementsByTagName('lyte-menu');
            // if( menus.length ) {
            // event.preventDefault()
            for (var i = 0; i < menus.length; i++) {
                if (menus[i].classList.contains('lyteMenuClosed') || menus[i].getAttribute('lyte-rendered') == null) {
                    continue;
                }
                var menu = menus[i].component;

                if( menu.is_input_element( __target, keyCode ) ){
                    continue;
                }

                if (!menu.childMenu) {

                    let attr = __target.getAttribute('data-associate-click');
                    let flag = true;
                    if( attr ){
                        let elem = $L(__target).find(attr);

                        if( elem ){
                            event.preventDefault();
                            flag = false;
                            elem.click();
                        }
                    }

                    flag && menu.traverseList( event );
                    if ( /^(3(5|6|8)|40)$/.test( keyCode ) ){
                        event.preventDefault();
                    }
                    break;
                }
            }
            // }
        } else if( /^(37|39)$/.test( keyCode ) ) {
            var menus = document.getElementsByTagName('lyte-menu');
            for (var i = 0; i < menus.length; i++) {
                var __cur_menu = menus[ i ];

                if ( __cur_menu.classList.contains('lyteMenuClosed') || __cur_menu.getAttribute('lyte-rendered') == null) {
                    continue;
                }
                var menu = __cur_menu.component,
                parent_menu = menu.parentMenu,
                child_menu = menu.childMenu;

                if( menu.is_input_element( __target, keyCode ) ){
                    continue;
                }

                if( parent_menu && !child_menu ){
                    var menu_pos = menu.data.pos;
                    if( /right/i.test( menu_pos ) && keyCode == 37 || /left/i.test( menu_pos ) && keyCode == 39 ){
                        menu.$node.ltProp( 'show', false );
                    }
                }

                if( menu.open_submenu( event ) ){
                    return;
                }
            }
        } else if (keyCode == 32) {
            var menus = document.getElementsByTagName('lyte-menu');
            for (var i = 0; i < menus.length; i++) {
                if (menus[i].classList.contains('lyteMenuClosed') || menus[i].getAttribute('lyte-rendered') == null) {
                    continue;
                }
                var menu = menus[i],
                box = menu.component.childComp,
                target = event.target,
                _this = menu.component;

                if( _this.is_input_element( __target, keyCode ) ){
                    continue;
                }

                if( _this.open_submenu( event ) ){
                    return;
                }

                if (_this.eligibleForClose(_this, target)) {
                    break;
                }
                if (menu.ltProp('freeze')) {
                    event.preventDefault();
                    break;
                }
            }
        } else if( keyCode == 9 ){
            var menus = Array.from( document.getElementsByTagName( 'lyte-menu' ) );

            menus.every( function( item ){
                if( $L( item ).hasClass( 'lyteMenuClosed' ) || item.getAttribute( 'lyte-rendered' ) == null ){
                    return true;
                }

                var comp = item.component;

                if( comp.is_input_element( __target, keyCode ) ){
                    return true;
                }

                if( !comp.childMenu ){
                    var childComp = comp.childComp,
                    target = event.target;

                    if( !childComp.contains( target ) ){
                        comp.hideMenu( true, event );
                        return false;
                    }
                }
                return true;
            });

        }
    }

    searchFilter(val) {
        this._typed = '';
        if (!val) {
            return
        }
        var items = this.childComp.getElementsByTagName('lyte-menu-item'), sel = {};
        for (var i = 0; i < items.length; i++) {

            var $item = $L( items[ i ] );


            if( $item.hasClass( 'lyteSearchHidden' ) || $item.hasClass( 'lyteMenuItemDisabled' ) ){
                continue;
            }

            var txt = items[i].textContent.trim().toLowerCase(), idx = txt.indexOf(val);
            if (idx != -1 && (idx < sel.index || sel.index == undefined)) {
                sel.item = items[i]; sel.index = idx;
            }
        }
        if (sel.item) {
            var prevS = this.childComp.getElementsByClassName('lyteMenuSelection')[0];
            if (sel.item == prevS) {
                return;
            }
            if (prevS) {
                prevS.classList.remove('lyteMenuSelection');
            }
            sel.item.classList.add('lyteMenuSelection');

            if( this.data.ltPropAria ){
                $L( this.$node.element ).attr( 'aria-activedescendant', sel.item.id );
                $L( this.childComp ).attr( 'aria-activedescendant', sel.item.id );
            }
            this.scrIntoView.call(this, sel.item)
        }
    }

    scrIntoView(elem) {
        if (!elem) {
            return;
        }
        $L.fastdom.measure(function () {
            var off = elem.getBoundingClientRect(), scr = this.findscrElem.call(this, elem), hgt = scr.getBoundingClientRect();
            $L.fastdom.mutate(function () {
                if (off.bottom > hgt.bottom) {
                    scr.scrollTop += parseInt(off.bottom - hgt.bottom);
                } else if (off.top < hgt.top) {
                    scr.scrollTop += parseInt(off.top - hgt.top);
                }
            }.bind(this))
        }.bind(this))
    }

    findscrElem(el) {
        var nde = el.parentNode;
        while (nde && nde.nodeName != "LYTE-MENU-BODY") {
            var st = window.getComputedStyle(nde).getPropertyValue('overflow-y')
            if (nde.scrollHeight > nde.offsetHeight && (st == 'auto' || st == 'scroll')) {
                break;
            }
            nde = nde.parentNode;
        }
        return nde;
    }

    didDestroy() {

        this.pop_global_stack();

        if (this.childComp) {
            var allNodes = this.childComp.getElementsByTagName('lyte-menu-item')
            for (var i = 0; i < allNodes.length; i++) {
                var curValue = allNodes[i].getAttribute('lyte-shortcut')
                if (curValue) {
                    allNodes[i].setAttribute('lyte-shortcut', JSON.stringify({}))
                }
            }
            this.childComp.parentElement && this.childComp.parentElement.removeChild(this.childComp);
            delete this.childComp.parent;
            delete this.childComp; /*delete this.$node.toggle;*/
        }
        var removeEvents = this.getData('eventListeners'), 
        event = this.getData('ltPropEvent'),
        data = this.data;

        if (document.body.querySelectorAll('lyte-menu').length == 0) {
            var freezeLayers = document.body.querySelectorAll('div.lytemenufreezelayer')
            for (var i = 0; i < freezeLayers.length; i++) {
                document.body.removeChild(freezeLayers[i]);
            }
            if (document._lyteMenu) {
                delete document._lyteMenu
                document.documentElement.removeEventListener('keydown', this.keydownCheck, true);
                document.documentElement.removeEventListener('keypress', window.menukeypress, true)
                document.documentElement.removeEventListener('click', window.lyteCloseMenu, true);
                window.removeEventListener('resize', this.resizeFunc, true);
                window.removeEventListener('orientationchange', this.resizeFunc, true);
            }

            if( data.ltPropShow && data.ltPropFreeze ){
                $L( document.body ).removeClass( 'lyteBodyWrapper' );
            }

        } else if ( data.ltPropShow &&  data.ltPropFreeze ) {
            document.body.classList.remove('lyteBodyWrapper');
            if (document.menu == this) {
                delete document.menu;
            }
            this.removeFreeze();
        }
        window.removeEventListener('scroll', this.addScrollPos, true);
        var ltPropQuery = this.getData('ltPropQuery'), parIndex = this.getData('parIndex'), nodeList;
        if (ltPropQuery || parIndex != undefined) {
            if (ltPropQuery) {
                nodeList = document.querySelectorAll(ltPropQuery);
            }
            document.removeEventListener(/^(mouseenter|mousemove|mouseover|hover)$/.test(event) ? 'mousemove' : event, removeEvents.event, true);
            if (ltPropQuery) {
                for (var i = 0; i < nodeList.length; i++) {
                    var __cur = nodeList[ i ];

                    delete __cur.menu;

                    // if( data.ltPropAria ){
                    //     $L( __cur ).removeAttr( 'aria-expanded aria-controls aria-activedescendant' );
                    // }
                }
            }
        }
        clearTimeout(this._typetime)

        if (this.menuBody) {
            delete this.menuBody.parent;
            delete this.menuBody
        }
        if (document.menu == this) {
            delete document.menu;
        }

        delete this.$node.element;
    }

    closestFind(path, query) {
        var first = path[ 0 ];

        if( first && first.matches ){
            var __len = path.length;

            for( var i = 0; i < __len; i++ ){
                var __cur = path[ i ];

                if( __cur == document || __cur == window ){
                    continue;
                }

                if( __cur.matches && __cur.matches( query ) ){
                    return __cur;
                }
            }
            return null;
        } else {
            return this.___closestFind( path, query );
        }
    }

    ___closestFind(path, query) {
        var parIndex = this.getData('parIndex'),
            elements = this.arrayFrom.call(this, (parIndex != undefined ? (this.$node.parentNode.parentNode.querySelectorAll('lyte-menu-item:nth-of-type(' + ++parIndex + ')')) : document.querySelectorAll(query.trim())));
        for (var i = 0; i < path.length; i++) {
            if (Array.prototype.indexOf.call(elements, path[i]) != -1) {
                return path[i];
            }
        }
        return null;
    }

    isHoverAnimate() {
        return this.data.ltPropAnimate && /^(mouseenter|mousemove|mouseover|hover)$/.test(this.data.ltPropEvent);
    }

    checkElementForMenu(event) {
        if (!event.menuFlag) {
            var query = this.getData('ltPropQuery');
            var closetElem = this.closestFind.call(this, event.path ? event.path : this.composePath.call(this, event), query);

            if( $L( closetElem ).hasClass( 'lyteMenuItemDisabled' ) ){
                return;
            }

            if (closetElem != null) {
                var isHover = this.isHoverAnimate();
                if (!isHover) {
                    if (this._evtadded) {
                        if (this.data.ltPropAnimate && parseInt(this.menuBody.style.height) == 0) {
                            this.setData('ltPropShow', false)
                        }
                        return;
                    }
                }
                if (event.type == 'contextmenu') {
                    window.lyteCloseMenu(event, this.$node);
                    this.$node.ltProp( "show", false );
                }
                var isOpen = !this.childComp.classList.contains('lyteMenuHidden');
                if (isOpen && this.$node.element != closetElem) {
                    if (isHover) {
                        if (this._openstart) {
                            this.tranEnd();
                        }
                        this.data.ltPropAnimate = false;
                        if (this._hideStarts) {
                            clearTimeout(this._time3);
                            this.closing(true, event);
                        } else {
                            this.hideMenu(true, event);
                        }
                        this.data.ltPropAnimate = true;
                    } else {
                        // for opening same menu at diff position menu body should be hided and its animation need to be prevented
                        this.childComp.classList.remove('lyteAnimate')
                        this._hideStarts = true
                        this._closest = closetElem, this._event = event
                        var prom = new Promise(function (resolve, reject) {
                            this._promResolve = resolve, this._promReject = reject
                            this.hideMenu.call(this, true, event);
                        }.bind(this))

                        Promise.resolve(prom).then(function () {
                            this.openingMenu(this._closest, this._event)
                            delete this._closest; delete this._event; delete this._promReject; delete this._promResolve;
                        }.bind(this), function () {
                            delete this._closest; delete this._event; delete this._promReject; delete this._promResolve;
                        }.bind(this))
                        return
                    }
                } else if (isOpen && this.$node.element == closetElem) {
                    if (isHover) {
                        if (this._openstart) {
                            return;
                        }
                    } else {
                        return;
                    }
                }
                this.openingMenu(closetElem, event)
            } else if (event.type == "contextmenu") {
                window.lyteCloseMenu(event, undefined, true);
            }
        }
    }

    openingMenu(closetElem, event) {
        // if (closetElem.tagName == "LYTE-MENU-ITEM" && event.type == 'click') {
        //     event.stopPropagation();
        // }
        event.menuFlag = true;
        // $L.fastdom.mutate(function(){
        this.$node.element = closetElem;
        closetElem.menu = this.$node;
        if (!this.parentMenu) {
            if (event.type != "contextmenu") {


                if( /lyte-menu-item/i.test( closetElem.tagName || "" ) ){
                    closetElem.__sub_open = true;
                    closetElem.__force_callback = this.data.ltPropForceClick;
                }

                this._open_fast = $L.fastdom.mutate(this.$node.toggle.bind(this.$node, event));
            } else {
                this.$node.toggle(event || {});
            }
        }
        // }.bind(this))
    }

    didConnect() {

        var menuBox = this.$node.getElementsByTagName('lyte-menu-box')[0];
        this.$node.toggle = function (event, flag) {
            delete this._open_fast;
            if (this.childComp.classList.contains('lyteMenuHidden') || flag) {
                if (['mousedown', 'mouseup'].indexOf(event.type) > -1) {
                    document._lyteMenu.preventClick = false;
                }
                this.openMenu.call(this, event)
            }
            else {
                if (!this.childMenu && event.type.indexOf('mouse') == -1 && !this._hideStarts) {
                    this.hideMenu.call(this, true, event)
                }
            }
        }.bind(this);

        this.$node.setCss = this.setCss.bind(this);

        menuBox.parent = this.$node;
        this.childComp = menuBox;
        menuBox.classList.add('lyteMenuHidden');
        this.$node.classList.add('lyteMenuClosed');
        menuBox.style.width = this.getData('ltPropWidth');

        // Lyte.Component.appendChild(document.body, menuBox);
        if (this.data.ltPropCallout && /^(mouseenter|mousemove|mouseover|hover)$/.test(this.data.ltPropEvent)) {
            this.childComp.classList.add('lyteHoverMenu')
        }
        if (this.getMethods('afterRender')) {
            /**
             * @method afterRender
             * @version 1.0.1
             */
            this.executeMethod('afterRender', this.$node);
        }
        $L.fastdom.measure(function () {
            this._dir = window._lyteUiUtils.getRTL();
        }.bind(this))
    }

    data(arg1) {
        var default_values = window._lyteUiUtils.getDefault( 'lyte-menu' );
        return Object.assign(super.data({
            // user data
            /**
            * @componentProperty {string[] | object[]} ltPropContent
            * @default []
            * @version 1.0.0
            */
            ltPropContent: prop('array', { 'default': [] }),
            /**
             * @componentProperty {string} ltPropId=''
             * @version 1.0.0
             */
            ltPropId: prop('string', { 'default': default_values.id || '' }),
            /**
             * @componentProperty {string} ltPropClass=''
             * @version 1.0.0
             */
            ltPropClass: prop('string', { 'default': default_values.class || '' }),
            /**
             * @componentProperty {string} ltPropQuery=''
             * @version 1.0.0
             */
            ltPropQuery: prop('string', { 'default': default_values.query || '' }),
            /**
             * @componentProperty {string} ltPropEvent=click
             * @version 1.0.0
             */
            ltPropEvent: prop('string', { 'default': default_values.event || 'click' }),
            /**
             * @componentProperty {boolean} ltPropYield=false
             * @version 1.0.0
             */
            ltPropYield: prop('boolean', { 'default': default_values.yield || false }),
            /**
             * @componentProperty {string} ltPropUserValue=''
             * @version 1.0.0
             */
            ltPropUserValue: prop('string', { 'default': default_values.userValue || '' }),
            /**
             * @componentProperty {string} ltPropSystemValue=''
             * @version 1.0.0
             */
            ltPropSystemValue: prop('string', { 'default': default_values.systemValue || '' }),
            /**
             * @componentProperty {boolean} ltPropCallout=false
             * @version 1.0.0
             */
            ltPropCallout: prop('boolean', { 'default': default_values.callout || false }),
            /**
             * @componentProperty {down | up | left | right | upRight | upLeft | downRight | downLeft | downAlignLeft | downAlignRight | upAlignLeft | upAlignRight} ltPropPosition=down
             * @version 1.0.0
             */
            ltPropPosition: prop('string', { 'default': default_values.position || 'down' }),
            /**
             * @componentProperty {string} ltPropDescription=''
             * @version 1.0.0
             */
            ltPropDescription: prop('string', { 'default': default_values.description || '' }),
            /**
             * @experimental ltPropTabIndex
             */
            ltPropTabIndex: prop('number', { 'default': default_values.tabIndex || 0 }),
            /**
             * @componentProperty {boolean} ltPropFreeze=true
             * @version 1.0.0
             */
            ltPropFreeze: prop('boolean', { 'default': default_values.freeze || true }),
            /**
             * @componentProperty {boolean} ltPropShow=false
             * @version 1.0.1
             */
            ltPropShow: prop('boolean', { 'default': false }),
            /**
             * @componentProperty {string} ltPropWidth=auto
             * @version 1.0.0
             */
            ltPropWidth: prop('string', { 'default': default_values.width || 'auto' }),
            /**
             * @componentProperty {string} ltPropHeight=auto
             * @version 1.0.0
             */
            ltPropHeight: prop('string', { 'default': default_values.height || 'auto' }),
            /**
             * @componentProperty {string} ltPropQueryClass=lyteMenuSelected
             * @version 1.0.0
             */
            ltPropQueryClass: prop('string', { 'default': default_values.queryClass || 'lyteMenuSelected' }),
            /**
             * @componentProperty {object} ltPropBoundary
             * @default {}
             * @version 1.0.0
             */
            ltPropBoundary: prop('object', { 'default': default_values.boundary || {} }),
            /**
             * @componentProperty {string} ltPropScope=''
             * @version 1.0.0
             */
            ltPropScope: prop('string', { 'default': default_values.scope || '' }),
            /**
             * @componentProperty {boolean} ltPropPreventInsideClick=false
             * @version 1.0.0
             */
            ltPropPreventInsideClick: prop('boolean', { default: default_values.preventInsideClick || false }),
            /**
             * @componentProperty {boolean} ltPropAnimate=false
             * @version 1.0.3
             */
            ltPropAnimate: prop('boolean', { default: default_values.animate || false }),
            /**
             * @componentProperty {boolean} ltPropSetCss=true
             * @version 1.0.4
             */
            ltPropSetCss: prop('boolean', { default: default_values.setCss == false ? false : true }),
            /**
             * @componentProperty {string} ltPropWrapperClass=''
             * @version 1.0.4
             */
            ltPropWrapperClass: prop('string', { 'default': default_values.wrapperClass || '' }),
            /**
             * @componentProperty {string} ltPropWrapperId=''
             * @version 1.0.4
             */
            ltPropWrapperId: prop('string', { default: default_values.wrapperId || "" }),
            /**
             * @componentProperty {boolean} ltPropBindToBody=true
             * @version 2.1.0
             */
            ltPropBindToBody: prop('boolean', { default: default_values.bindToBody == false ? false : true }),
            /**
             * @componentProperty {boolean} ltPropAria=false
             * @version 3.1.0
             */
            ltPropAria: prop('boolean', { default: default_values.aria || false }),
            /**
             * @componentProperty {object} ltPropAriaAttributes
             * @default {"role":"menu"}
             * @version 3.1.0
             */
            ltPropAriaAttributes: prop('object', { default: default_values.ariaAttributes || { role: "menu" }, watch : true }),
            /**
             * @typedef {object} menuOffset
             * @property {number} left
             * @property {number} right
             * @property {number} top
             * @property {number} bottom
             */

            /**
             * @componentProperty {menuOffset} ltPropOffset
             * @default {}
             * @version 2.2.11
             */
            ltPropOffset: prop('object', { default: default_values.offset || {} }),

            ltPropActiveElement : prop( 'string' ),
            /**
             * @experimental ltPropHeightResetOnScroll
             */
            ltPropHeightResetOnScroll: prop('boolean', { default: default_values.heightResetOnScroll == false ? false : true }),

            /**
             * @experimental ltPropPreventKeyEvents
             */
            
            ltPropPreventKeyEvents : prop( 'boolean', { default : default_values.preventKeys || false } ),

            /**
             * @experimental ltPropForceClick
             */

            ltPropForceClick : prop( 'boolean', { default : default_values.forceClick || false } ),

            // system data 
            eventListeners: prop('object', { 'default': {} }),
            pos: prop('string', { default: '' }),
            parIndex: prop('number'),
            lyteUnbound: prop('boolean', { default: false }),

            randomId : prop( 'string', { default : "lyteMenu_" + parseInt( Math.random() * 1e6 ) } ),
            customPosition : prop( 'string' , { default : "" } )
        }), arg1);
    }

    contentChange() {
        if (!this.childComp.classList.contains('lyteMenuHidden')) {
            this.setCss.call(this);
            this.menuBody.style.removeProperty('height');
        }
    }

    setContextCss(evt, position) {
        var element = this.$node.element;
        var menuBody = this.childComp;
        $L.fastdom.measure(function () {
            var evt1 = evt,
                nbr = element.getBoundingClientRect();
            if (!evt || !evt.type) {
                evt = { clientX: nbr.left + nbr.width / 2, clientY: nbr.top + nbr.height / 2 }
            }
            var clientRect = menuBody.getBoundingClientRect(),
                menuBodyBcr = this.menuBody.getBoundingClientRect(),
                menuBodystyle = window.getComputedStyle(this.menuBody),
                padding = (menuBodystyle.boxSizing == 'content-box' ? (parseFloat(menuBodystyle.paddingTop) + parseFloat(menuBodystyle.paddingBottom)) : 0),
                bodyHeight = menuBodyBcr.height - padding,
                innerHeightt = window.innerHeight,
                innerWidtht = window.innerWidth,
                offset = this.data.ltPropOffset || {},
                topoff = offset.top || 0,
                btmoff = offset.bottom || 0,
                lftoff = offset.left || 0,
                rgtoff = offset.right || 0,
                x = (window.pageXOffset || document.documentElement.scrollLeft) * (this._dir ? - 1 : 1),
                y = window.pageYOffset || document.documentElement.scrollTop,
                lT = this.rtlfunc.call(this, 'left'),
                cX = this.__cX != undefined ? (this.__cX + this.rtlfunc('left', nbr, innerWidtht)) : (!this._dir ? evt.clientX : (innerWidtht - evt.clientX)),
                cY = this.__cY != undefined ? (this.__cY + nbr.top) : (evt.clientY);
            // $L.fastdom.mutate(function(){
            if (!position) {
                position = this.data.ltPropPosition;
            }
            switch (position) {
                case 'up': {
                    menuBody.style[lT] = cX + x + 'px';
                    // menuBody.style.top = ( cY - clientRect.height + y ) + 'px';
                    if (cY > innerHeightt - cY) {
                        // if( parseInt( menuBody.style.top ) < y )
                        //     {
                        menuBody.style.top = (cY + y) + 'px';
                        // }
                    } else {
                        // if( ( parseInt( menuBody.style.top ) + clientRect.height) > innerHeightt + y )
                        //     {
                        //         menuBody.style.top = ( cY - clientRect.height + y ) + 'px';
                        //     } 
                        menuBody.style.top = (cY - clientRect.height + y) + 'px';
                    }
                    this.setData('pos', 'up')
                    break;
                }
                default: {
                    menuBody.style[lT] = cX + x + 'px';
                    // menuBody.style.top = cY + y + 'px';
                    if (cY < innerHeightt - cY) {
                        // if( ( parseInt( menuBody.style.top ) + clientRect.height ) > innerHeightt + y ) {
                        //     menuBody.style.top = ( cY - clientRect.height + y ) + 'px';
                        // }
                        menuBody.style.top = cY + y + 'px';
                    } else {
                        // if( parseInt( menuBody.style.top ) < y ) {
                        //     menuBody.style.top = ( cY + y ) + 'px';
                        // }
                        menuBody.style.top = (cY - clientRect.height + y) + 'px';
                    }
                    this.setData('pos', 'down')
                }
            }
            if (clientRect.left < lftoff) {
                menuBody.style[lT] = (cX + lftoff) + 'px';
            }
            else if (this.rtlfunc.call(this, 'right', clientRect, innerWidtht) > (innerWidtht - rgtoff)) {
                menuBody.style[lT] = (cX - clientRect.width) + 'px';
            }
            if (evt1) {
                // if( evt1.type == 'contextmenu' ){
                if (parseFloat(menuBody.style.top) - y + bodyHeight > innerHeightt - btmoff && cY <= innerHeightt) {
                    this.menuBody.style.height = (innerHeightt - btmoff - parseFloat(menuBody.style.top) + y) + 'px';
                    bodyHeight = parseFloat(this.menuBody.style.height);
                }
                if (parseFloat(menuBody.style.top) - y < topoff && cY >= topoff) {
                    this.menuBody.style.height = (parseFloat(menuBody.style.top) - y - topoff + bodyHeight) + 'px';
                    menuBody.style.top = (y + topoff) + 'px';
                    bodyHeight = parseFloat(this.menuBody.style.height);
                }
                this._hgt = bodyHeight;
                // }
                if (this.__cX == undefined) {
                    this.__cX = cX - this.rtlfunc('left', nbr, innerWidtht);
                }
                if (this.__cY == undefined) {
                    this.__cY = cY - nbr.top;
                }
            }
            // }.bind(this))
        }.bind(this))

    }

    openMenu(event, flagg) {
        var onBeforeOpen, eventType = this.getData('ltPropEvent'), targetDiv;
        event = event ? event : {}
        if (!flagg) {
            targetDiv = this.targetElem.call(this, event.target);
            if (targetDiv[0]) {
                targetDiv[0].originMenu = targetDiv[1].component
            }
        }
        if (flagg && eventType != 'contextmenu') {
            if (!this.$node.element) {
                var query = this.getData('ltPropQuery');
                this.$node.element = document.body.querySelector(query.trim());
            }
            if (this.$node.element.tagName == 'LYTE-MENU-ITEM') {
                targetDiv = this.targetElem.call(this, this.$node.element);
            }
            else if (!targetDiv) {
                targetDiv = [];
            }
        }
        if (this.getMethods('onBeforeOpen')) {
            onBeforeOpen = this.executeMethod('onBeforeOpen', this.$node, event, this.$node.element);
        }

        if (targetDiv && targetDiv[0] && targetDiv[1].tagName == 'LYTE-MENU') {
            if (!targetDiv[1].ltProp('show')) {
                onBeforeOpen = false;
            }
        }

        delete ( this.$node.element || {} ).__sub_open;
        delete ( this.$node.element || {} ).__force_callback;

        if (onBeforeOpen != false && this.$node.element) {

            if( ( event || {} ).type == "contextmenu" ){
                event.preventDefault();
            }

            if (!this.data.ltPropBindToBody) {
                this.$node.ltProp('bindToBody', true);
            }
            //Actual opening process
            // $L.fastdom.measure(function(){
            //     // to set initial position if its scrolled previously

            // }.bind(this))
            // $L.fastdom.mutate(function(){
            // to set initial position if its scrolled previously
            this.childComp.scrollTop = 0;
            this.childComp.classList.remove('lyteMenuHidden', 'lyteAnimate');
            this.$node.classList.remove('lyteMenuClosed');

            //this.$node.element && this.$node.element.setAttribute('aria-expanded', 'true');

            if( this.data.ltPropAria ){
                var __$elem = $L( this.$node.element ),
                __attr = "aria-haspopup";

                __$elem.attr( {
                    "aria-expanded" : "true",
                    "aria-controls" : this.childComp.id
                });

                if( !__$elem.attr( __attr ) ){
                    __$elem.attr( __attr, 'menu' );
                }
            }

            this.childComp.style.display = 'block'

            if (this.getData('ltPropHeight')) {
                this.menuBody.style.height = this.getData('ltPropHeight')
            } else {
                this.menuBody.style.removeProperty('height')
            }
            if (targetDiv[0]) {

                var __first = targetDiv[ 1 ];

                if( /^(lyte-menu)$/i.test( __first.tagName ) ){
                    var __comp = __first.component,
                    childMenu = __comp.childMenu,
                    __childComp = __comp.childComp;

                    if( childMenu ){
                        childMenu.clearFastdom();
                        __childComp.removeEventListener( 'mousemove', childMenu.mouseleave, true );
                        childMenu.hideMenu( true, event );
                    }

                    __comp.childMenu = this;
                    this.parentMenu = __comp;

                    __childComp.addEventListener( 'mousemove', this.mouseleave, true );
                }
            }

            if( !this.parentMenu ){
                var __element = this.$node.element;

                $L( __element ).addClass( this.getData( 'ltPropQueryClass' ) );

                if( !/^lyte-menu-item$/i.test( __element.tagName ) ){
                    window.lyteCloseMenu( event, this.$node );
                }

                if( this.getData( 'ltPropFreeze' ) ){
                    this.setZIndex();
                } else if( !document.menu ){
                    window.addEventListener( 'scroll', this.addScrollPos, true );
                    document.menu = this;
                }
            }
            
            if ((/^(mouseenter|mousemove|mouseover|hover)$/.test(eventType)) && !this.childMenu && !this.parentMenu && !targetDiv[0]) {
                document.addEventListener('mousemove', this._hoverclose);
                // this.$node.element.addEventListener('mousemove', this.preventEvent);
                // this.menuBody.addEventListener('mousemove', this.preventEvent);
            }
            this._openFastdom = $L.fastdom.measure(function () {
                var mbcr = this.menuBody.getBoundingClientRect(),
                    iH = window.innerHeight,
                    yOff = window.pageYOffset || document.documentElement.scrollTop;
                this._dontCall = true;
                this.$node.ltProp('show', true);
                delete this._dontCall; delete this._openFastdom;
                if (this.getData('ltPropEvent') == 'contextmenu') {
                    this.setContextCss.call(this, event);
                }
                else {
                    this.setCss.call(this);
                }
                if (event.type != 'contextmenu') {
                    // this._hgt =  this.heightCheck.call(this, this.menuBody, mbcr, yOff, iH );
                    if (this.getData('ltPropAnimate') && this._hgt != 0) {
                        this._openstart = true;
                        // for animating height height need to set as zero and animate class need to be added
                        this.menuBody.style.height = 0;
                        if (['up', 'upLeft', 'upRight'].indexOf(this.getData('pos')) != -1) {
                            this.childComp.style.top = parseInt(this.childComp.style.top) + this._hgt + 'px';
                        }
                        this._time1 = setTimeout(this.animeClassAdd.bind(this), 20)
                    }
                }
                this.push_global_stack();
                if (this.getMethods('onOpen')) {
                    this.executeMethod('onOpen', this.$node, event, this.$node.element);
                }
            }.bind(this))

        } else {
            this._dontCall = true;
            delete this.$node.element;
            this.setData('ltPropShow', false)
            delete this._dontCall;
            delete event.menuFlag;
            if (this._promReject) {
                this._promReject();
            }
        }

    }

    animeClassAdd() {
        this.childComp.classList.add('lyteAnimate');
        this._time2 = setTimeout(this.heightSet.bind(this), 20)
    }

    heightSet() {

        var style = window.getComputedStyle(this.menuBody);

        this._transdur = Math.max(400, this.returntran(style.transitionDuration) + this.returntran(style.transitionDelay) + 20);

        // for invert animation
        this._evtadded = true;
        // this.childComp.removeEventListener( 'transitionend', this._trsend )
        this.childComp.addEventListener('transitionend', this._trsend)
        if (['up', 'upLeft', 'upRight'].indexOf(this.getData('pos')) != -1) {
            this.childComp.style.top = parseInt(this.childComp.style.top) - this._hgt + 'px';
        }
        // animation start
        this.menuBody.style.height = this._hgt + 'px';
    }

    tranEnd(evt) {
        this.childComp.removeEventListener('transitionend', this._trsend)
        this.childComp.classList.remove('lyteAnimate');
        clearTimeout(this._time2);
        clearTimeout(this._time1);
        this.clearFastdom();
        if (this._dont_modify) {
            this.menuBody.style.height = '';
            delete this._dont_modify;
        }
        delete this._openstart;
    }

    clearFastdom() {
        $L.fastdom.clear(this._openFastdom);
        $L.fastdom.clear(this._open_fast);
        delete this._open_fast;
        delete this._openFastdom;
    }

    // heightCheck : function(menuBody, bcr, extsYoff, iH ){
    //         if(  !this.data.ltPropSetCss ) {
    //             return
    //         }
    //     // here fastdom is removed for proper on open callback
    //         // menu body properties are required for enable scroll when window size is too small to view full menu body
    //         var clientRect = bcr || menuBody.getBoundingClientRect(), hgt, yoff = extsYoff == undefined ? ( window.pageYOffset || document.documentElement.scrollTop ) : extsYoff,
    //         windowHgt = iH || window.innerHeight;
    //         hgt = clientRect.bottom - clientRect.top;
    //         if(clientRect.bottom > windowHgt)
    //             {
    //                 this.menuBody.style.height = (windowHgt - clientRect.top) + 'px';
    //                 hgt = windowHgt - clientRect.top;
    //             }       
    //         if(clientRect.top < 0)
    //             {
    //                 this.menuBody.style.height = clientRect.bottom + 'px';
    //                 this.childComp.style.top = yoff + 'px';
    //                 hgt = clientRect.bottom;
    //             }   
    //         this._dontCall = true;
    //         this.$node.ltProp('show', true);
    //         delete this._dontCall;
    //         return hgt;
    // },

    composePath(event) {
        var arr = [], node = event.target;
        while (node && node.tagName != 'HTML') {
            arr.push(node);
            node = node.parentNode;
        }
        return arr;
    }

    elementsFromPointCal(x, y) {
        var arr = [], element = document.elementFromPoint(x, y), prev;
        while (element != document && element != document.documentElement && element != document.body && element.tagName != 'LYTE-MENU-BODY') {
            element._pe = element.style.pointerEvents;
            element.style.pointerEvents = 'none';
            arr.push(element);
            prev = element;
            element = document.elementFromPoint(x, y);
            if (prev == element) {
                break
            }
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.pointerEvents = arr[i]._pe;
            delete arr[i]._pe;
        }
        return arr;
    }

    eligibleForClose(_this, target) {
        if (!target) {
            return false;
        }
        if (_this.childComp && _this.childComp.contains(target)) {
            return true;
        }
        if (_this.childMenu) {
            return this.eligibleForClose(_this.childMenu, target);
        }
        return false;
    }

    hoverClose(event) {
        if (this.$node) {
            var elements = document.elementsFromPoint ? document.elementsFromPoint(event.clientX, event.clientY) : this.elementsFromPointCal(event.clientX, event.clientY);
            if (elements.indexOf(this.$node.element) == -1 && elements.indexOf(this.childComp) == -1 && !this.eligibleForClose(this, elements[0])) {
                this.hideMenu(true, event);
            }
            // if((document.elementsFromPoint ? document.elementsFromPoint(event.clientX, event.clientY) : this.elementsFromPointCal.call(this, event.clientX, event.clientY)).indexOf(this.$node.element) == -1)
            //     {
            //         this.hideMenu.call(this, true, event);
            //     }
        }
    }

    mouseleave(event) {
        var component = this.parent.component, target = component.targetElem.call(component, event.target);
        if (component.childMenu) {
            if (target[1] == component.$node && target[0] != component.childMenu.$node.element && target[0]) {
                this.removeEventListener('mousemove', component.childMenu.mouseleave, true )
                component.childMenu.hideMenu.call(component.childMenu, true, event)
            }
        }
    }

    hideMenu(flag, event, flag2) {
        var onBeforeClose;
        if (this.childMenu) {
            if (!this.childMenu.childComp.contains(event.target) || flag2) {
                if (!this.childMenu.hideMenu.call(this.childMenu, flag, event, flag2)) {
                    return
                }
            } else {
                return
            }
        }
        if (this.getMethods('onBeforeClose')) {
            onBeforeClose = this.executeMethod('onBeforeClose', this.$node, event);
        }
        if (onBeforeClose != false) {
            this.tranEnd();
            this.clearFastdom();
            delete this.__cX; delete this.__cY;
            if (this.parentMenu) {
                delete this.parentMenu.childMenu
                delete this.parentMenu
            }
            else {
                // this.$node.element && this.$node.element.classList.remove(this.getData('ltPropQueryClass'))
                delete document.menu
                window.removeEventListener('scroll', this.addScrollPos, true)
            }
            this._arguments = arguments;
            if (/^(mouseenter|mousemove|mouseover|hover)$/.test(this.data.ltPropEvent) != -1) {
                // this.$node.element.removeEventListener('mousemove', this.preventEvent);
                // this.menuBody.removeEventListener('mousemove', this.preventEvent);
                document.removeEventListener('mousemove', this._hoverclose);
            }
            this._hideStarts = true;
            // $L.fastdom.mutate( function(){
            if (this.menuBody && this.data.ltPropAnimate && this.data.ltPropEvent != 'contextmenu' && this._hgt) {
                this.menuBody.style.height = this._hgt + 'px';
                this.childComp.classList.add('lyteAnimate')// for hide height is set to zero
                // clearTimeout( this.hidetime )
                this._time3 = setTimeout(function () {
                    if (this.menuBody.style.height != '0px') {
                        this.menuBody.style.height = 0;
                        if (['up', 'upLeft', 'upRight'].indexOf(this.getData('pos')) != -1) {
                            this.childComp.style.top = parseInt(this.childComp.style.top) + this._hgt + 'px';
                        }
                        this.menuBody.removeEventListener('transitionend', this._close)
                        this.menuBody.addEventListener('transitionend', this._close)
                        this._hidetimeout = setTimeout(this.closing.bind(this, flag, event), this._transdur);
                    } else {
                        this.closing(flag, event);
                    }
                }.bind(this), 20)
            } else {
                delete this._arguments;
                this.closing( flag, event, true );
            }
            // }.bind(this))
            return true
        } else {
            this._dontCall = true;
            this.setData('ltPropShow', true)
            delete this._dontCall;
            delete event.menuFlag;
            delete this._hideStarts;
            if (this._promReject) {
                this._promReject();
            }
        }
    }

    closing() {
        var flag, 
        evt,
        __args = arguments,
        frm_direct = __args[ 2 ];

        if (this._arguments) {
            flag = this._arguments[0];
            evt = this._arguments[1];
            // height set to its original
            this.menuBody.style.height = this._hgt + 'px';
            delete this._hgt;
            delete this._arguments;
        } else {
            flag = __args[0];
            evt = __args[1];
        }
        this.menuBody && this.menuBody.removeEventListener('transitionend', this._close)
        this.childComp.classList.add('lyteMenuHidden')
        delete this._hideStarts;
        this.$node.classList.add('lyteMenuClosed');
        if (this.getData('ltPropFreeze') && !this.parentMenu) {
            this.setZIndex.call(this, flag)
        }
        this._dontCall = true;
        this.$node.ltProp('show', false);


        var __$node = $L( this.$node.element ).removeClass( this.data.ltPropQueryClass );

        if( this.data.ltPropAria ){
            __$node.removeAttr( 'aria-activedescendant' ).attr( 'aria-expanded', "false" );
            $L( this.childComp ).removeAttr( 'aria-activedescendant' )
        }
        
        delete this._dontCall;
        delete this.$node.element; delete this._evtadded;
        this.childComp.classList.remove('lyteAnimate');
        this.childComp.style.left = '';
        this.childComp.style.top = '';
        var selection = this.childComp.querySelector('.lyteMenuSelection')
        if (selection) {
            selection.classList.remove('lyteMenuSelection')
        }
        clearTimeout(this._hidetimeout);
        delete this._hidetimeout;

        var promise_res = this._promResolve;

        this.pop_global_stack();

        if( frm_direct && !promise_res && !this.data.ltPropAnimate ){
            var cb = "onClose";
            this.getMethods( cb ) && this.executeMethod( cb, this.$node, evt );
        } else {
            $L.fastdom.measure(function () {
                if (this.getMethods('onClose')) {
                    this.executeMethod('onClose', this.$node, evt);
                }
                if( promise_res ) {
                    $L.fastdom.mutate( promise_res.bind( this ) );
                }
                if( !frm_direct ){
                    this.clearFastdom();
                }
            }.bind(this));
        }
    }

    targetElem(nodeName) {
        var currNode;
        nodeName = nodeName.correspondingElement || nodeName;
        while (nodeName && nodeName.tagName != 'LYTE-MENU-BODY' && nodeName.tagName != 'BODY') {
            if (nodeName.tagName == 'LYTE-MENU-ITEM') {
                currNode = nodeName
            }
            nodeName = nodeName.parentNode;
        }
        return [currNode, nodeName ? nodeName.parent : null]
    }

    optionSelect(event) {

        var target = event.target,
        nodeName = this.targetElem( target )[ 0 ];


        var elem = target.nodeName === 'lyte-menu-item' ? $L(target) : $L(target).closest('lyte-menu-item'),
        isGroupMenu = elem.hasClass('lyteMenuAccordionContainer'),
        isAccordionItem = elem.get(0) && elem.get(0).parentNode && elem.get(0).parentNode.classList.contains('lyteMenuAccordionItem'),
        flag;

        if( isAccordionItem ){
            nodeName = elem.get(0);
        }

        if( isGroupMenu && !this._ignore ){

            let groupContainer = elem.find('.lyteMenuAccordionItem');
            let ret;
            let value;
            let transDuration = parseFloat( groupContainer.css('transition-duration') );
            let bodyClt = this.menuBody.getBoundingClientRect();
            let menuBodystyle = window.getComputedStyle(this.menuBody);
            let padding = (menuBodystyle.boxSizing == 'content-box' ? (parseFloat(menuBodystyle.paddingTop) + parseFloat(menuBodystyle.borderTopWidth) + parseFloat(menuBodystyle.borderBottomWidth) + parseFloat(menuBodystyle.paddingBottom)) : 0);
            this._ignore = true;

            if( this.data.ltPropYield ){
                value = elem.get(0).getAttribute('data-value');
            }else{
                value = this.data.ltPropContent[parseInt(elem.get(0).getAttribute('elemorder'))]
            }

            var menuGroupTransEnd = function( flag ){
                this._ignore = false;
                if( flag ){
                    if( this.getMethods('onMenuGroupOpen') ){
                        this.executeMethod('onMenuGroupOpen', value, event, this.$node, this.$node.element, { element: nodeName, submenu: !!nodeName.originMenu } );
                    }
                    this.setAuto();
                }else{
                    if( this.getMethods('onMenuGroupClose') ){
                        this.executeMethod('onMenuGroupClose', value, event, this.$node, this.$node.element, { element: nodeName, submenu: !!nodeName.originMenu } );
                    }
                }
                this.menuBody.style.maxHeight = "";
                this.setCss( void 0, void 0, true );
            }.bind(this);

            clearTimeout(this.setAuto);
            this.setAuto = function( ){
                groupContainer.get(0).style.height = 'auto'
            }

            let calculateHeight = function(){
                let _elem = groupContainer.get(0);
                let height = 0;

                Array.from( _elem.children ).forEach(function(element){
                    height+=element.offsetHeight
                });

               _elem.style.height = height + "px";
               setTimeout( this.setHeight, !isNaN(transDuration) ? transDuration*1000 : 0 , _elem, 'auto' )

            }.bind(this);

            let setMaxHeight = function(){
                let customPos = this.data.customPosition;
                if( customPos == 'up' ){
                    this.menuBody.style.maxHeight = bodyClt.bottom - padding + 'px';
                }else if( customPos == 'down' ){
                    this.menuBody.style.maxHeight = window.innerHeight - bodyClt.top - padding + 'px';
                }
            }.bind(this);

            var menuOpen = function(){
                calculateHeight();
                setMaxHeight();

                elem.removeClass('lyteMenuAccordionClosed');
                elem.addClass('lyteMenuAccordionOpened');

                setTimeout( menuGroupTransEnd , !isNaN(transDuration) ? transDuration * 1000 : 0 , true );             
            }.bind(this),menuClose = function(){
                setMaxHeight();
                groupContainer.css( 'height', groupContainer.get(0).getBoundingClientRect().height + 'px' );

                setTimeout( function(){
                    groupContainer.css( 'height' , 0 )
                }, 0 );

                elem.addClass('lyteMenuAccordionClosed');
                elem.removeClass('lyteMenuAccordionOpened');


                this.menuBody.style.height = '';
                setTimeout( menuGroupTransEnd , !isNaN(transDuration) ? transDuration * 1000 : 0, false );                
            }.bind(this);

            if( elem.hasClass('lyteMenuAccordionOpened') ){
                if( this.getMethods('onBeforeMenuGroupClose') ){
                    ret = this.executeMethod('onBeforeMenuGroupClose', value, event, this.$node, this.$node.element, { element: nodeName, submenu: !!nodeName.originMenu } );
                }
                
                if(ret != false){
                    menuClose();
                }
            }else{
                if( this.getMethods('onBeforeMenuGroupOpen') ){
                    ret = this.executeMethod('onBeforeMenuGroupOpen', value, event, this.$node, this.$node.element, { element: nodeName, submenu: !!nodeName.originMenu } );
                }
    
                if( ret != void 0 && ret.then ){
                    Promise.resolve(ret).then( function(){
                        menuOpen();
                    } );

                }else if(ret!=false){
                    menuOpen();
                }
            }  
        }

        if( nodeName ){
            if( $L( nodeName ).hasClass( 'lyteMenuItemDisabled' ) || ( nodeName.__sub_open && !nodeName.__force_callback ) ){
                return;
            }
        }

        if( ( event.ctrlKey == true || event.metaKey == true || event.which == 2) && target.href != undefined && target.href.indexOf('javascript:') != -1 && target.target == '_blank') { 
            return false; 
        }

        if (this.getMethods('onMenuClick') && nodeName) {
            var value;
            if (this.getData('ltPropYield')) {
                value = nodeName.getAttribute('data-value')
            }
            else {
                var ltPropContent = this.getData('ltPropContent')
                if (nodeName.hasAttribute('grporder')) {
                    var grp = ltPropContent[parseInt(nodeName.getAttribute('grporder'))]
                    value = grp[Object.keys(grp)[0]][parseInt(nodeName.getAttribute('elemorder'))]
                }
                else {
                    value = ltPropContent[parseInt(nodeName.getAttribute('elemorder'))]
                }
            }
            flag = this.executeMethod('onMenuClick', value, event, this.$node, this.$node.element, { element: nodeName, submenu: !!nodeName.originMenu });
        }
        if (this.childMenu && !flag) {
            event.stopPropagation()
        }
        if ( ( nodeName || (!nodeName && this.getData('ltPropPreventInsideClick')) ) && !isGroupMenu) {
            if( ( nodeName || {} ).__sub_open ){
                return;
            }
            window.lyteCloseMenu(event, undefined, true)
            // this.hideMenu( false, event, true )
        }
    }

    /*
        Calculate left of menu container when it has to come below/above the select element when it exceeds window.innerWidth and there is space to the right
    */
    setLeftExceedForDown(element, container, bcr, containerbcr, xscroll, ww) {
        var scrolledLeft = xscroll,
            elementBCR = bcr,
            elementLeft = this.rtlfunc.call(this, 'left', elementBCR, ww),
            elementWidth = elementBCR.width,
            containerBCR = containerbcr,
            containerWidth = containerBCR.width,
            total = scrolledLeft + elementLeft + elementWidth - containerWidth;

        return total
    }

    /*
        Calculate left of menu container when it has to come below/above the select element when it doesn't exceed window.innerWidth
    */
    setLeftNotExceedForDown(element, bcr, xscroll, ww) {
        var scrolledLeft = xscroll,
            elementBCR = bcr,
            elementLeft = this.rtlfunc.call(this, 'left', elementBCR, ww),
            total = scrolledLeft + elementLeft;

        return total
    }

    /*
        Calculate top of menu container when it has to come above the select element
    */
    setTopAboveForDown(element, container, bcr, containerbcr, yscroll) {
        var scrolledHeight = yscroll,
            elementBCR = bcr,
            elementTop = elementBCR.top,
            containerBCR = containerbcr,
            containerHeight = containerBCR.height,
            total = scrolledHeight + elementTop - containerHeight;

        return total
    }

    /*
        Calculate top of menu container when it has to come below the select element
    */
    setTopBelowForDown(element, bcr, yscroll) {
        var scrolledHeight = yscroll,
            elementBCR = bcr,
            elementTop = elementBCR.top,
            elementHeight = elementBCR.height,
            total = scrolledHeight + elementTop + elementHeight;

        return total
    }

    /*
        Calculate left of menu container when it has to come to right of the select element
    */
    setLeftForRight(element, bcr, xscroll, ww) {
        var scrolledWidth = xscroll,
            elementBCR = bcr,
            elementLeft = this.rtlfunc.call(this, 'left', elementBCR, ww),
            elementWidth = elementBCR.width,
            total = scrolledWidth + elementLeft + elementWidth;

        return total
    }

    /*
        Calculate right of menu container when it has to come to left of the select element of right menu
    */
    setRightForRight(element, container, bcr, elembcr, xscroll, ww) {
        var scrolledWidth = xscroll,
            elementBCR = bcr,
            containerBCR = elembcr,
            elementLeft = this.rtlfunc.call(this, 'left', elementBCR, ww),
            containerWidth = containerBCR.width,
            total = scrolledWidth + elementLeft - containerWidth;

        return total
    }

    /*
        Calculate top of menu container when it has to come to right of menu and there is space below
    */
    setTopForRight(element, bcr, yscroll) {
        var scrolledHeight = yscroll,
            elementBCR = bcr,
            elementTop = elementBCR.top,
            total = scrolledHeight + elementTop;

        return total
    }

    /*
        Calculate top of menu container when it has to come to right of menu and there is no space below
    */
    setTopForRightAbove(element, container, bcr, elembcr, yscroll) {
        var scrolledHeight = yscroll,
            elementBCR = bcr,
            elementTop = elementBCR.top,
            elementHeight = elementBCR.height,
            containerBCR = elembcr,
            containerHeight = containerBCR.height,
            total = scrolledHeight + elementTop + elementHeight - containerHeight;

        return total
    }

    /**
        Remove wrong arrow and append proper arrow
        @param string correct - the correct class
    */
    setCorrectClass(cls) {
        var arrow = this.childComp.querySelector('.lyteArrow'),
            list = arrow.classList, i = 0;
        for (; i < list.length; i++) {
            if (list[i] == 'lyteArrow' || list[i] == cls) {
                continue;
            }
            else {
                arrow.classList.remove(list[i]);
                i--;
            }
        }

        arrow.classList.add(cls);
    }

    /**
     * Set the CSS for your menu
     * refer commit ID 583ee6ccbeaa6b3729178bf9df0139032b016d19 and previous for the previous stable setCSS function.
     * commit ID 583ee6ccbeaa6b3729178bf9df0139032b016d19 also gives a better understanding about the hard coded values in this function.
     */
    setCss(onlyScroll, _pos, maintainPos) {
        var link = this.childComp;

        if (!link
            || link.classList.contains('lyteMenuHidden') || !this.getData('ltPropSetCss')
        ) {
            return;
        }

        // Get properties
        var callout = this.getData('ltPropCallout');

        link.style.left = "";
        link.style.top = "";
        link.style.right = "";
        link.style.bottom = "";

        // Get button
        var body = link,
            par = this.$node.element,
            isParentMenu = this.parentMenu ? this.parentMenu : false,
            parentCustomPos = isParentMenu ? this.parentMenu.data.customPosition : false,
            parentPos = isParentMenu ? this.parentMenu.data.ltPropPosition : false,
            cusPos = this.data.customPosition;

        // Get Geometric propotions
        var wwidth, wheight, wleft, wtop, iwdt = window.innerWidth;
        var query = this.getData('ltPropScope'), flag;
        if (query) {
            var temp = { target: par };
            var elemm = this.closestFind.call(this, this.composePath.call(this, temp), query);
            if (elemm) {
                var rec = elemm.getBoundingClientRect();
                wleft = this.rtlfunc.call(this, 'left', rec, iwdt) < 0 ? 0 : this.rtlfunc.call(this, 'left', rec, iwdt);
                wwidth = iwdt > this.rtlfunc.call(this, 'right', rec, iwdt) ? this.rtlfunc.call(this, 'right', rec, iwdt) : iwdt;
                flag = true
            }
        }
        if (!flag) {
            wwidth = iwdt;
            wleft = 0;
        }
        var wheight = window.innerHeight;
        var wtop = 0,
            drop = body.getBoundingClientRect(),
            menuBodyBcr = this.menuBody.getBoundingClientRect(),
            menuBodystyle = window.getComputedStyle(this.menuBody),
            menu_header = body.querySelector( "lyte-menu-header" ),
            menu_footer = body.querySelector( "lyte-menu-footer" ),
            header_hgt = menu_header ? menu_header.offsetHeight : 0,
            footer_hgt = menu_footer ? menu_footer.offsetHeight : 0,
            padding = (menuBodystyle.boxSizing == 'content-box' ? (parseFloat(menuBodystyle.paddingTop) + parseFloat(menuBodystyle.borderTopWidth) + parseFloat(menuBodystyle.borderBottomWidth) + parseFloat(menuBodystyle.paddingBottom)) : 0),
            bodyHeight = menuBodyBcr.height - padding,
            x = (window.pageXOffset || document.documentElement.scrollLeft) * (this._dir ? - 1 : 1),
            y = window.pageYOffset || document.documentElement.scrollTop,
            height = body.offsetHeight,
            width = body.offsetWidth,
            arrow = link.querySelector('.lyteArrow'),
            position = parentPos ? (parentPos != parentCustomPos ? parentCustomPos : (_pos || this.getData('ltPropPosition')) ) : (_pos || this.getData('ltPropPosition')),
            offsets = par.getBoundingClientRect(),
            arrowBcr = arrow ? arrow.getBoundingClientRect() : { width: 0, height: 0 },
            aHeight = arrowBcr.height / 2,
            aWidth = arrowBcr.width / 2,
            offset = this.data.ltPropOffset || {};

        if (offset.left) {
            wleft += offset.left;
        }
        if (offset.top) {
            wtop += offset.top;
        }
        if (offset.right) {
            wwidth -= offset.right;
        }
        if (offset.bottom) {
            wheight -= offset.bottom;
        }

        // Intialize flags
        var downPos,
            rightPos,
            topPos,
            leftPos;

        // temp stores
        var tempStore,
            tempTop,
            tempLeft,
            tempMarginLeft,
            tempMarginTop,
            tempNum,
            tempDenom,
            pos,
            tempPer,
            oL = this.rtlfunc.call(this, 'left', offsets, iwdt),
            lT = this.rtlfunc.call(this, 'left');
        
        var checkPosition = function(){
            if( ( parentCustomPos == 'right' || parentCustomPos == 'left' ) && parentCustomPos != pos ){
                this.parentMenu.setCss(this.parentMenu, pos);
                this.setCss(this,pos);
                return true;
            }
        }.bind(this);

        if (arrow) {
            arrow.style.removeProperty('left');
            arrow.style.removeProperty('top');
            arrow.style.removeProperty('bottom');
            arrow.style.removeProperty('right')
        }
        if (position === 'down') {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if (tempTop + height > wheight
                /*&& offsets.top > height */
            ) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }
            rightPos = true;
            tempLeft = oL;
            if (tempLeft + width > wwidth
                && tempLeft > tempLeft + offsets.width - body.offsetWidth
            ) {
                rightPos = false;

            }
            else if (oL + width <= wwidth) {
                rightPos = true;
            }

            if (offsets.width > width && arrow) {
                arrow.style[lT] = ((width / 2 - 0) / width) * 100 + "%";
            }

            if (downPos || ( maintainPos && cusPos=='down' ) ) {
                pos = 'down'
                if (callout) {
                    this.setCorrectClass('lyteArrowTop');
                    tempStore = this.setTopBelowForDown(par, offsets, y) + aHeight + 'px';
                }
                else {
                    body.style.top = this.setTopBelowForDown(par, offsets, y) + 'px';
                }

            }
            else {
                pos = 'up';
                body.style.top = 'unset';
                if (callout) {
                    this.setCorrectClass('lyteArrowBottom');
                    tempStore = ((window.scrollY - ( wheight - offsets.top )) * -1 ) + aHeight + 'px'
                    // tempStore = this.setTopAboveForDown(par, body, offsets, drop, y) - aHeight + 'px';
                }
                else {
                    body.style.bottom = ((window.scrollY - ( wheight - offsets.top )) * -1 )+ 'px'
                    // body.style.bottom = ( this.setTopAboveForDown(par, body, offsets, drop, y) - bodyHeight ) + 'px';
                }
            }

            if (rightPos) {
                if (callout) {
                    tempNum = Math.max(Math.min(offsets.width, width) / 2 - aWidth, aWidth / 2); // We removed arrow.offsetWidth because it was giving width as 0 px
                    tempDenom = width / 100;
                    tempPer = tempNum / tempDenom;
                    arrow.style[lT] = tempPer + '%';
                }

                if( pos == 'up' ){
                    body.style.bottom = tempStore ? tempStore : body.style.bottom;
                }else{
                    body.style.top = tempStore ? tempStore : body.style.top;
                }
                body.style[lT] = this.setLeftNotExceedForDown(par, offsets, x, iwdt) + 'px';
            }
            else {
                if (callout) {
                    tempDenom = width / 100;
                    tempNum = width - (Math.min(offsets.width, width) / 2) - aWidth; // We removed arrow.offsetWidth because it was giving width as 0 px
                    tempPer = tempNum / tempDenom;
                    arrow.style[lT] = tempPer + '%';
                }

                body.style.top = tempStore ? tempStore : body.style.top;
                body.style[lT] = this.setLeftExceedForDown(par, body, offsets, drop, x, iwdt) + 'px'
            }


        }
        else if (position === 'right') {
            rightPos = true;
            if (oL + offsets.width + width > wwidth
                && oL - drop.width > wleft
            ) {
                rightPos = false;
                pos = 'left';
            }
            else {
                rightPos = true;
                pos = 'right';
            }

            let ret = checkPosition();

            if( ret == true ){
                return;
            }

            downPos = true;
            if (offsets.top + drop.height > wheight) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }

            if (rightPos) {
                if (callout) {
                    this.setCorrectClass('lyteArrowLeft');
                    tempStore = this.setLeftForRight(par, offsets, x, iwdt) + aWidth + 'px';
                }
                else {
                    body.style[lT] = this.setLeftForRight(par, offsets, x, iwdt) + 'px'
                }
            }
            else {
                if (callout) {
                    this.setCorrectClass('lyteArrowRight');
                    tempStore = (this.setRightForRight(par, body, offsets, drop, x, iwdt) - aWidth) + 'px';
                }
                else {
                    body.style[lT] = this.setRightForRight(par, body, offsets, drop, x, iwdt) + 'px';
                }
            }

            if (downPos) {
                if (callout) {
                    arrow.style.top = Math.max(offsets.height / 2 - aHeight, aHeight / 2) + 'px';
                }

                body.style[lT] = tempStore ? tempStore : body.style[lT];
                body.style.top = this.setTopForRight(par, offsets, y, iwdt) + 'px'
            }
            else {
                if (callout) {
                    arrow.style.bottom = Math.max(offsets.height / 2 - aHeight, aHeight / 2) + 'px';
                }

                body.style[lT] = tempStore ? tempStore : body.style[lT];
                body.style.top = this.setTopForRightAbove(par, body, offsets, drop, y, iwdt) + 'px'
            }
        }
        else if (position === 'up') {
            topPos = true
            if (offsets.top - drop.height < wtop
                /*&& offsets.top + offsets.height + height < wheight */
            ) {
                topPos = (wheight - offsets.top) < (offsets.bottom - wtop)
            }

            rightPos = true
            if (oL + width > wwidth
                && oL > oL + offsets.width - body.offsetWidth
            ) {
                rightPos = false
            }
            else if (oL + width <= wwidth) {
                rightPos = true
            }

            if (offsets.width > width && arrow) {
                arrow.style[lT] = ((width / 2 - 0) / width) * 100 + '%';
            }

            if (topPos || ( maintainPos && cusPos=='up') ) {
                pos = 'up';
                body.style.top = 'unset';
                if (callout) {
                    this.setCorrectClass('lyteArrowBottom');
                    tempStore = ( (window.scrollY - ( wheight - offsets.top )) * -1) + aHeight + 'px'
                    // tempStore = this.setTopAboveForDown(par, body, offsets, drop, y) - aHeight + 'px';
                }
                else {
                    body.style.bottom = ( (window.scrollY - ( wheight - offsets.top )) * -1 ) + 'px'
                    // body.style.top = this.setTopAboveForDown(par, body, offsets, drop, y) + 'px';
                }
            }
            else {
                pos = 'down';
                if (callout) {
                    this.setCorrectClass('lyteArrowTop');
                    tempStore = this.setTopBelowForDown(par, offsets, y) + aHeight + 'px';
                }
                else {
                    body.style.top = this.setTopBelowForDown(par, offsets, y, iwdt) + 'px'
                }
            }
            if (rightPos) {
                if (callout) {
                    tempNum = Math.max(Math.min(offsets.width, width) / 2 - aWidth, aWidth / 2); // We removed arrow.offsetWidth because it was giving width as 0 px
                    tempDenom = width / 100;
                    tempPer = tempNum / tempDenom;
                    arrow.style[lT] = tempPer + '%'
                }
                
                if( pos == 'up' ){
                    body.style.bottom = tempStore ? tempStore : body.style.bottom;
                }else{
                    body.style.top = tempStore ? tempStore : body.style.top;
                }
                body.style[lT] = this.setLeftNotExceedForDown(par, offsets, x, iwdt) + 'px';
            }
            else {
                if (callout) {
                    tempDenom = width / 100;
                    tempNum = width - (Math.min(offsets.width, width) / 2) - aWidth; // We removed arrow.offsetWidth because it was giving width as 0 px
                    tempPer = tempNum / tempDenom;
                    arrow.style[lT] = tempPer + '%';
                }

                body.style.top = tempStore ? tempStore : body.style.top;
                body.style[lT] = this.setLeftExceedForDown(par, body, offsets, drop, x, iwdt) + 'px';
            }
        }
        else if (position === 'left') {
            leftPos = true;
            if (oL - drop.width < wleft
                && oL + drop.width < wwidth
            ) {
                leftPos = false;
                pos = 'right';
            }
            else {
                leftPos = true;
                pos = 'left';
            }

            let ret = checkPosition();

            if( ret == true ){
                return;
            }

            downPos = true;
            if (offsets.top + drop.height > wheight) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }

            if (leftPos) {
                if (callout) {
                    this.setCorrectClass('lyteArrowRight');
                    tempStore = (this.setRightForRight(par, body, offsets, drop, x, iwdt) - aWidth) + 'px';
                }
                else {
                    body.style[lT] = this.setRightForRight(par, body, offsets, drop, x, iwdt) + 'px';
                }
            }
            else {
                if (callout) {
                    this.setCorrectClass('lyteArrowLeft');
                    tempStore = (this.setLeftForRight(par, offsets, x, iwdt) + aWidth) + 'px';
                }
                else {
                    body.style[lT] = this.setLeftForRight(par, offsets, x) + 'px';
                }
            }
            if (downPos) {
                if (callout) {
                    arrow.style.top = Math.max(offsets.height / 2 - aHeight, aHeight / 2) + 'px';
                }

                body.style[lT] = tempStore ? tempStore : body.style[lT];
                body.style.top = this.setTopForRight(par, offsets, y) + 'px';
            }
            else {
                if (callout) {
                    arrow.style.bottom = Math.max(offsets.height / 2 - aHeight, aHeight / 2) + 'px';
                }

                body.style[lT] = tempStore ? tempStore : body.style[lT];
                body.style.top = this.setTopForRightAbove(par, body, offsets, drop, y) + 'px';
            }
        } else if (position === 'downLeft') {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if (tempTop + height > wheight /*&& offsets.top > height*/) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }
            if (!downPos) {
                tempTop = offsets.top - height;
            }
            rightPos = false

            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.max(oL + offsets.width / 2 - width, oL - width + 2 * aHeight);
            if (tempLeft < wleft) {
                tempLeft = wleft
                rightPos = true
            } else {
                rightPos = false
            }
            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = (oL + 0.25 * offsets.width - tempLeft) + 'px';
                } else {
                    newArrowLeft = Math.min(width - 0.25 * offsets.width, width - (aHeight * 1.5) - 3) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downLeft';
            } else {
                pos = 'upLeft';
            }

        } else if (position === 'downRight') {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if (tempTop + height > wheight /*&& offsets.top > height*/) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }

            if (!downPos) {
                tempTop = offsets.top - height
            }

            rightPos = true

            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.min(oL + offsets.width / 2, oL + offsets.width - 2 * aHeight);
            if (tempLeft + width > wwidth) {
                tempLeft = wwidth - width;
                rightPos = false;
            } else {
                rightPos = true;
            }

            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = Math.max(0.25 * offsets.width, aWidth / 2) + 'px';
                } else {
                    newArrowLeft = (oL + 0.25 * offsets.width - tempLeft) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downRight';
            } else {
                pos = 'upRight';
            }
        } else if (position === 'upLeft') {
            downPos = false;
            tempTop = offsets.top - height;
            if (tempTop < wtop) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }
            if (downPos) {
                tempTop = offsets.top + offsets.height;
            }
            rightPos = false
            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.max(oL + offsets.width / 2 - width, oL - width + 2 * aHeight);
            if (tempLeft < wleft) {
                tempLeft = wleft
                rightPos = true
            } else {
                rightPos = false
            }
            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = (oL + 0.25 * offsets.width - tempLeft) + 'px';
                } else {
                    newArrowLeft = Math.min(width - 0.25 * offsets.width, width - (aHeight * 1.5) - 3) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downLeft';
            } else {
                pos = 'upLeft';
            }

        } else if (position === 'upRight') {
            downPos = false;
            tempTop = offsets.top - height;
            if (tempTop < wtop) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }
            if (downPos) {
                tempTop = offsets.top + offsets.height
            }

            rightPos = true

            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.min(oL + offsets.width / 2, oL + offsets.width - 2 * aHeight);
            if (tempLeft + width > wwidth) {
                tempLeft = wwidth - width;
                rightPos = false;
            } else {
                rightPos = true;
            }

            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = Math.max(0.25 * offsets.width, aWidth / 2) + 'px';
                } else {
                    newArrowLeft = (oL + 0.25 * offsets.width - tempLeft) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downRight';
            } else {
                pos = 'upRight';
            }
        } else if (position === 'downAlignLeft') {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if (tempTop + height > wheight /*&& offsets.top > height*/) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }

            if (!downPos) {
                tempTop = offsets.top - height
            }

            rightPos = false

            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.max(oL + offsets.width - width, oL - width + 2 * aHeight);
            if (tempLeft < wleft) {
                tempLeft = Math.max(Math.min(oL, oL + offsets.width - 2 * aHeight), wleft)
                rightPos = true
            } else {
                tempLeft = Math.min(wwidth - width, tempLeft)
                rightPos = false
            }
            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = (offsets.right - tempLeft) / 2 + 'px';
                } else {
                    newArrowLeft = Math.min((oL - tempLeft + Math.max(width, offsets.width)) / 2, Math.max(width, offsets.width) - (aHeight * 1.5) - 3) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downAlignLeft';
            } else {
                pos = 'upAlignLeft';
            }

        } else if (position === 'downAlignRight') {
            downPos = true;
            tempTop = offsets.top + offsets.height;
            if (tempTop + height > wheight /*&& offsets.top > height*/) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }

            if (!downPos) {
                tempTop = offsets.top - height;
            }

            rightPos = true

            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.min(oL, oL + offsets.width - 2 * aHeight);
            if (tempLeft + width > wwidth) {
                tempLeft = Math.min(Math.max(oL + offsets.width - width, oL - width + 2 * aHeight), wwidth - width);
                rightPos = false;
            } else {
                tempLeft = Math.max(tempLeft, 0)
                rightPos = true;
            }

            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = Math.max(0.5 * (Math.min(this.rtlfunc.call(this, 'right', offsets, iwdt) - tempLeft, width) - aWidth), aWidth / 2) + 'px';
                } else {
                    newArrowLeft = (0.5 * (-tempLeft + width + oL)) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downAlignRight';
            } else {
                pos = 'upAlignRight';
            }
        } else if (position === 'upAlignLeft') {
            downPos = false;
            tempTop = offsets.top - height;
            if (tempTop < wtop) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }
            if (downPos) {
                tempTop = offsets.top + offsets.height;
            }
            rightPos = false
            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.max(oL + offsets.width - width, oL - width + 2 * aHeight);
            if (tempLeft < wleft) {
                tempLeft = Math.max(Math.min(oL, oL + offsets.width - 2 * aHeight), wleft)
                rightPos = true
            } else {
                tempLeft = Math.min(wwidth - width, tempLeft)
                rightPos = false
            }
            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = (offsets.right - tempLeft) / 2 + 'px';
                } else {
                    newArrowLeft = Math.min((oL - tempLeft + Math.max(width, offsets.width)) / 2, Math.max(width, offsets.width) - (aHeight * 1.5) - 3) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downAlignLeft';
            } else {
                pos = 'upAlignLeft';
            }
        } else if (position === 'upAlignRight') {
            downPos = false;
            tempTop = offsets.top - height;
            if (tempTop < wtop) {
                downPos = (wheight - offsets.top) > (offsets.bottom - wtop);
            }
            if (downPos) {
                tempTop = offsets.top + offsets.height;
            }
            rightPos = true

            if (callout) {
                this.setCorrectClass(downPos ? 'lyteArrowTop' : 'lyteArrowBottom');
            }
            tempLeft = Math.min(oL, oL + offsets.width - 2 * aHeight);
            if (tempLeft + width > wwidth) {
                tempLeft = Math.min(Math.max(oL + offsets.width - width, oL - width + 2 * aHeight), wwidth - width);
                rightPos = false;
            } else {
                tempLeft = Math.max(tempLeft, wleft)
                rightPos = true;
            }

            body.style.top = tempTop + aHeight * (downPos ? 1 : -1) + y + 'px';

            body.style[lT] = tempLeft + x + 'px';
            if (callout) {
                var newArrowLeft;
                if (rightPos) {
                    newArrowLeft = Math.max(0.5 * (Math.min(this.rtlfunc.call(this, 'right', offsets, iwdt) - tempLeft, width) - aWidth), aWidth / 2) + 'px';
                } else {
                    newArrowLeft = (0.5 * (-tempLeft + width + oL)) + 'px';
                }
                arrow.style[lT] = newArrowLeft;
            }
            if (downPos) {
                pos = 'downAlignRight';
            } else {
                pos = 'upAlignRight';
            }
        }
        this.data.customPosition = pos;

        wheight -= ( header_hgt + footer_hgt );
        wtop += ( header_hgt + footer_hgt );

        if (parseFloat(body.style.top) - y + bodyHeight > wheight && offsets.top <= wheight) {
            this.menuBody.style.height = (wheight - parseFloat(body.style.top) + y - padding) + 'px';
            bodyHeight = parseFloat(this.menuBody.style.height);
            this._dont_modify = true;
        }

        if( parseFloat(body.style.bottom) - y + bodyHeight > wheight && offsets.top <= wheight ){
            this.menuBody.style.height = (wheight - parseFloat(body.style.bottom) + y - padding) + 'px';
            bodyHeight = parseFloat(this.menuBody.style.height);
            this._dont_modify = true;
        }

        if (parseFloat(body.style.top) - y < wtop && offsets.bottom >= wtop) {
            this.menuBody.style.height = (parseFloat(body.style.top) - y + bodyHeight - wtop) + 'px';
            body.style.top = (wtop + y) + 'px';
            bodyHeight = parseFloat(this.menuBody.style.height);
            this._dont_modify = true;
        }

        this._hgt = bodyHeight;

        if (body.classList.contains('lyteHoverMenu')) {
            $L(body).removeClass("topPlace", "bottomPlace", "rightPlace", "leftPlace");
            if (/up/.test(pos)) {
                body.classList.add('topPlace');
            } else if (/down/.test(pos)) {
                body.classList.add('bottomPlace');
            } else if (/right/.test(pos)) {
                body.classList.add('rightPlace');
            } else if (/left/.test(pos)) {
                body.classList.add('leftPlace');
            }
        }
        if (downPos) {
            $L(this.childComp).removeClass('lyteMenuUp').addClass('lyteMenuDown');
        } else {
            $L(this.childComp).removeClass('lyteMenuDown').addClass('lyteMenuUp');
        }
        this.setData('pos', pos);
    }

    returntran(prop) {
        var ret = 0;
        if (/\d+/.test(prop || '')) {
            var match = prop.match(/(\d+)(s|ms){0,}$/);
            ret = parseFloat(prop) * (match[2] == "s" ? 1000 : 1);
        }
        return ret;
    }

    checkForBoundary(clientRect, ww) {
        // var clientRect = this.$node.element.getBoundingClientRect(), ww = window.innerWidth;
        var boundary = this.getData('ltPropBoundary');
        if ((boundary.hasOwnProperty('left') ? (this.rtlfunc.call(this, 'left', clientRect, ww) < this.rtlfunc.call(this, 'left', boundary, ww)) : false) || (boundary.hasOwnProperty('right') ? (this.rtlfunc.call(this, 'right', clientRect, ww) > this.rtlfunc.call(this, 'right', boundary, ww)) : false) || (boundary.hasOwnProperty('top') ? (clientRect.top < boundary.top) : false) || (boundary.hasOwnProperty('bottom') ? (clientRect.bottom > boundary.bottom) : false)) {
            this.hideMenu.call(this, true, {} );
        }
    }

    traverseList(event) {
        var kc = event.keyCode || event.which;
        if ((this.childComp && this.childComp.classList.contains('lyteMenuHidden')) || (kc != 13 && kc != 40 && kc != 38 && kc != 36 && kc != 35)) {
            return
        }

        var fn = function( elem ){
            if( this.data.ltPropAria ){
                $L( this.$node.element ).attr( 'aria-activedescendant', ( elem || {} ).id );
                $L( this.childComp ).attr( 'aria-activedescendant', ( elem || {} ).id );
            }

            elem.classList.add( 'lyteMenuSelection' );
            this.scrIntoView( elem );


            /**
             * @method onNavigation
             * @version 3.96.0
             */
            var cb = "onNavigation";
            this.getMethods( cb ) && this.executeMethod( cb, elem.getAttribute( 'data-value' ), event, this.$node, this.$node.element, { element : elem, submenu : !!elem.originMenu } );
            
        }.bind( this ),

        __key = event.key; 

        var cursel = this.childComp.querySelector('.lyteMenuSelection'),
        elements = Array.from( this.childComp.getElementsByTagName( 'lyte-menu-item' ) ).filter( function( item ){
            var __$elem = $L( item );
            return !( __$elem.hasClass( 'lyteSearchHidden' ) || __$elem.hasClass( 'lyteMenuItemDisabled' ) );
        });

        if (!cursel || !cursel.offsetParent) {

            var __final;

            if( __key == "End" || kc == 38 ){
                __final = $L( elements ).get( -1 );
            } else {
                __final = elements[ 0 ];
            }

            if( __final ){
              return fn( __final );
            }
        }

        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].offsetParent) {
                continue;
            }
            if (elements[i].classList.contains('lyteMenuSelection')) {
                break;
            }
        }

        if (!elements[i]) {
            return;
        }

        if (kc == 13) {
            if( !this.open_submenu( event ) ){
                var active = this.data.ltPropActiveElement,
                __cur_elem = elements[ i ],
                is_active = active ? __cur_elem.querySelector( active ) : "";

                if( is_active ){
                    is_active.click();
                } else {
                    __cur_elem.dispatchEvent(new Event('click', { bubbles: true }))
                }
                event.preventDefault();
            }
        }
        else if (kc == 38 ) {
            var j = i;

            if( i == 0 ){
                i = elements.length;
            }

            i = i - 1
            for (; i > -1; i--) {
                if (!elements[i].classList.contains('lyteMenuActive') && !elements[i].classList.contains('lyteMenuFiltered') && elements[i].offsetParent) {
                    break;
                }
            }
            if (i != -1) {
                elements[j].classList.remove('lyteMenuSelection')

                fn( elements[ i ] );
            }
        }
        else if (kc == 40 ) {
            var j = i;

            if( i == elements.length - 1 ){
                i = -1;
            }

            i = i + 1
            for (; i < elements.length; i++) {
                if (!elements[i].classList.contains('lyteMenuActive') && !elements[i].classList.contains('lyteMenuFiltered') && elements[i].offsetParent) {
                    break;
                }
            }
            if (i != elements.length) {
                elements[j].classList.remove('lyteMenuSelection')

                fn( elements[ i ] );
            }
        } else if( __key == "Home" && elements.length ) {
            if (cursel == elements[0]) {
                return;
            }
            $L( cursel ).removeClass( 'lyteMenuSelection' );

            fn( elements[ 0 ] );

        } else if( __key == "End" && elements.length ){
            if (cursel == $L(elements).get(-1)) {
                return;
            }

            $L( cursel ).removeClass( 'lyteMenuSelection' );

            fn( $L( elements ).get( -1 ) );
        }
    }

    setFreeze(nodeName) {
        var fz = document.body.querySelectorAll('.lytemenufreezelayer:not(.nogroup)')
        // freeze bound calculation
        $L.fastdom.measure(function () {
            var node = document.body.querySelector('.lytemenufreezelayer.left'), rect = nodeName.getBoundingClientRect(),
                iwdt = window.innerWidth
            $L.fastdom.mutate(function () {
                node.style.height = rect.height + "px"
                node.style.width = Math.max(rect.left, 0) + "px"
                node.style.top = rect.top + "px"
                node = document.body.querySelector('.lytemenufreezelayer.right')
                node.style.height = rect.height + "px"
                node.style.width = Math.max(iwdt - rect.right, 0) + "px"
                node.style.top = rect.top + "px"
                node = document.body.querySelector('.lytemenufreezelayer.top')
                node.style.height = rect.top + "px"
                node = document.body.querySelector('.lytemenufreezelayer.bottom')
                node.style.height = (window.innerHeight - rect.bottom) + "px"
                for (var i = 0; i < fz.length; i++) {
                    fz[i].classList.remove('lyteMenuHidden')
                    fz[i].addEventListener('wheel', this.preventEvent);
                    fz[i].addEventListener('touchmove', this.preventEvent);
                }
            }.bind(this))
        }.bind(this))
    }

    preventEvent(event) {
        if (!(event.metaKey || event.shiftKey || event.ctrlKey)) {
            var isTch = event.type == "touchmove";
            if (isTch && event.touches.length != 1) {
                return;
            }
            if (event.type == 'wheel' || isTch) {
                event.stopImmediatePropagation()
            }
            event.preventDefault();
            event.stopPropagation();
        }
    }

    addScrollPos(event) {
        if (!document.menu) {
            return
        }
        if (event.target != window && (document.menu.childComp.contains(event.target))) {
            return
        }
        var component = document.menu;
        component.callScrollFunc(event, true);

    }

    removeFreeze() {
        if (!document.menu || (this.data.ltPropAnimate && this.data.ltPropFreeze)) {
            var fz = document.body.querySelectorAll('.lytemenufreezelayer')
            for (var i = 0; i < fz.length; i++) {
                fz[i].classList.add('lyteMenuHidden');
                fz[i].removeEventListener('wheel', this.preventEvent);
            }
            document.body.classList.remove('lyteBodyWrapper');
        }
    }

    setZIndex(flag) {
        var nodeName = this.$node.element;
        if (nodeName) {
            while (nodeName && nodeName.tagName != 'HTML') {
                if (nodeName.classList.contains('lyteMenuGroup')) {
                    if (!flag) {
                        this.setFreeze.call(this, nodeName)
                        document.body.classList.add('lyteBodyWrapper');
                    }
                    else {
                        this.removeFreeze.call(this)
                    }
                    break
                }
                else {
                    nodeName = nodeName.parentNode;
                }
            }
            if (nodeName && nodeName.tagName == 'HTML' || !nodeName) {
                if (flag && (!document.menu || (document.menu && !document.menu.data.ltPropFreeze))) {
                    this.removeFreeze.call(this)
                }
                else {
                    var freezeLayer = document.body.querySelector('.lytemenufreezelayer.nogroup');
                    freezeLayer.classList.remove('lyteMenuHidden');
                    document.body.classList.add('lyteBodyWrapper');
                }
            }
        }

    }

    callScrollFunc(evt, callBoundary) {
        var comp = this,
            menubody = comp.menuBody,
            height = menubody.style.height.indexOf('px') != -1,
            boundaryKeys = Object.keys(this.data.ltPropBoundary || {}).length,
            bcr = callBoundary && boundaryKeys && comp.$node.element ? comp.$node.element.getBoundingClientRect() : undefined,
            ww = callBoundary && boundaryKeys && comp.$node.element ? window.innerWidth : undefined,
            given = comp.$node.ltProp('height'),
            allowreset = this.data.ltPropHeightResetOnScroll,
            isContext = comp.$node.ltProp('event') == 'contextmenu';
        if (height && allowreset) {
            menubody.style.height = given || '';
            callBoundary && boundaryKeys && $L.fastdom.measure(comp.checkForBoundary.bind(comp, bcr, ww));
            $L.fastdom.measure(comp[isContext ? 'setContextCss' : 'setCss'].bind(comp, evt));
        } else {
            comp[isContext ? 'setContextCss' : 'setCss'](evt);
            callBoundary && boundaryKeys && comp.checkForBoundary(bcr, ww);
        }
        if (comp.childMenu) {
            comp.childMenu.callScrollFunc();
        }
    }

    push_global_stack() {
        var arr = ( window._lyteUiUtils.popupStack || {} ).globalStack;

        if( arr ){
            arr.push( this.__fstack = {
                childElement : this.childComp,
                focusedElement : this.$node.element,
                parentElement : this.$node
            });
        }
    }

    pop_global_stack() {
        var arr = ( window._lyteUiUtils.popupStack || {} ).globalStack,
        stack = this.__fstack;

        if( arr && stack ){
            delete this.__fstack;
            var index = arr.indexOf( stack );

            if( index + 1 ){
                arr.splice( index, 1 );
            }
        }
    }

    static observers(arg1) {
        return Object.assign(super.observers({
            bToBody: function () {
                if (this.data.ltPropBindToBody && this.childComp.parentNode != document.body) {
                    var menuBody = this.childComp.querySelector('lyte-menu-body');
                    menuBody.addEventListener('click', this.optionSelect.bind(this));
                    menuBody.parent = this.$node;
                    this.menuBody = menuBody;
                    var span = document.createElement('span');
                    span.setAttribute('class', 'lyteArrow' + (this.data.ltPropCallout ? '' : ' lyteMenuHidden'));
                    menuBody.insertBefore(span, menuBody.children[0]);
                    this.menuBody.style.height = this.data.ltPropHeight;
                    if (this._dir) {
                        this.menuBody.classList.add('lyteRTL');
                    }
                    window._lyteUiUtils.appendChild(document.body, this.childComp);
                } else if (!this.data.ltPropBindToBody) {
                    this.$node.ltProp('show', false);
                    if (this.menuBody) {
                        delete this.menuBody.parent;
                        delete this.menuBody;
                    }
                }
            }.observes('ltPropBindToBody').on('didConnect'),

            calloutObs: function (arg) {
                var arrow = this.childComp.querySelector('span.lyteArrow')
                if (arg.newValue) {
                    arrow.classList.remove('lyteMenuHidden')
                } else {
                    arrow.classList.add('lyteMenuHidden')
                }
            }.observes('ltPropCallout'),

            firePosCallBack: function () {
                if (this.getMethods('onPositionChanged')) {
                    this.executeMethod('onPositionChanged', this.getData('pos'), this.$node);
                }
            }.observes('pos'),

            contentChangeObs: function () {
                this.contentChange.call(this);
            }.observes('ltPropContent.[]'),

            hideToggle: function (arg) {
                if (this._dontCall) {
                    return;
                }
                if (arg.newValue == false) {
                    this.hideMenu(true, {});
                }
                else {
                    this.openMenu({}, true);
                }
            }.observes('ltPropShow'),

            ariaObs: function ( arg ) {
                var childComp = this.childComp,
                data = this.data;

                if( data.ltPropAria && childComp ){
                    window._lyteUiUtils.setAttribute( childComp, data.ltPropAriaAttributes || {}, ( arg || { oldValue : {} } ).oldValue );
                }

            }.observes('ltPropAriaAttributes', 'ltPropAriaAttributes.{}', 'ltPropBindToBody' ).on('didConnect'),

            single_obs : function( arg ){

                if( !arg.path ){
                    return;
                }

                var key = arg.path.replace( /^\./, '' ),
                newValue = arg.newValue,
                data = this.data,
                childComp = this.childComp;

                if( data.ltPropAria  && childComp ){
                    var obj = {};
                    obj[ key ] = newValue;

                    window._lyteUiUtils.setAttribute( childComp.get( 0 ), obj, {} );
                }

             }.observes( 'ltPropAriaAttributes.*' )
        }), arg1);
    }

    _() {
        _;
    }
}

LyteMenuComponent._template = "<template tag-name=\"lyte-menu\"> <lyte-menu-box id=\"{{randomId}}\" class=\"{{ltPropWrapperClass}} lytePopupZI\" onmousemove=\"{{action('mousemove',event,this)}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropBindToBody}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropYield,'==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-body id=\"{{ltPropId}}\" class=\"{{ltPropClass}}\" tabindex=\"1\"> <template items=\"{{ltPropContent}}\" item=\"menu\" index=\"indexVal\" is=\"for\" _new=\"true\"><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiOptGroupCheck(menu)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-group elemorder=\"{{indexVal}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{lyteUiReturnOnlyKey(menu)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-header> {{lyteUiReturnOnlyKey(menu)}} </lyte-menu-header> </template></template> <template items=\"{{lyteUiReturnOnlyValue(menu)}}\" item=\"menu1\" index=\"indexVal1\" is=\"for\" _new=\"true\"><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIsObject(menu1),'==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-item grporder=\"{{indexVal}}\" elemorder=\"{{indexVal1}}\" data-value=\"{{menu1}}\"> <lyte-menu-label>{{menu1}}</lyte-menu-label> </lyte-menu-item> </template><template default=\"\"> <lyte-menu-item grporder=\"{{indexVal}}\" elemorder=\"{{indexVal1}}\" id=\"{{menu1.id}}\" class=\"{{menu1.class}}\" data-value=\"{{menu1[ltPropSystemValue]}}\"> <lyte-menu-label>{{menu1[ltPropUserValue]}}</lyte-menu-label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{menu1[ltPropDescription]}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-description> {{menu1[ltPropDescription]}}</lyte-menu-description> </template></template> </lyte-menu-item> </template></template> </template> </lyte-menu-group> </template><template default=\"\"><template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(lyteUiIsObject(menu),'==',false)}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-item elemorder=\"{{indexVal}}\" data-value=\"{{menu}}\"> <lyte-menu-label>{{menu}}</lyte-menu-label> </lyte-menu-item> </template><template default=\"\"> <lyte-menu-item elemorder=\"{{indexVal}}\" id=\"{{menu.id}}\" class=\"{{menu.class}}\" data-value=\"{{menu[ltPropSystemValue]}}\"> <lyte-menu-label>{{menu[ltPropUserValue]}}</lyte-menu-label> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{menu[ltPropDescription]}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-description> {{menu[ltPropDescription]}}</lyte-menu-description> </template></template> </lyte-menu-item> </template></template> </template></template> </template> </lyte-menu-body> </template><template default=\"\"> <lyte-yield yield-name=\"yield\"></lyte-yield> </template></template> </template></template> </lyte-menu-box> </template>";;
LyteMenuComponent._dynamicNodes = [{"t":"a","p":[1]},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"f","p":[1,1],"dN":[{"t":"s","p":[0],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[1,3],"cn":"lc_id_0"},{"t":"f","p":[1,3],"dN":[{"t":"s","p":[0],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,1,0],"cn":"default"},{"t":"cD","p":[1,1],"in":2,"sibl":[1],"cn":"default"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[0],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,1,0],"cn":"default"},{"t":"cD","p":[1,1],"in":2,"sibl":[1],"cn":"default"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1,1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"i","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0},{"type":"dc","trans":true,"hc":true,"p":[1,0]}];;

LyteMenuComponent._observedAttributes = [
    "ltPropContent",
    "ltPropId",
    "ltPropClass",
    "ltPropQuery",
    "ltPropEvent",
    "ltPropYield",
    "ltPropUserValue",
    "ltPropSystemValue",
    "ltPropCallout",
    "ltPropPosition",
    "ltPropDescription",
    "ltPropTabIndex",
    "ltPropFreeze",
    "ltPropShow",
    "ltPropWidth",
    "ltPropHeight",
    "ltPropQueryClass",
    "ltPropBoundary",
    "ltPropScope",
    "ltPropPreventInsideClick",
    "ltPropAnimate",
    "ltPropSetCss",
    "ltPropWrapperClass",
    "ltPropWrapperId",
    "ltPropBindToBody",
    "ltPropAria",
    "ltPropAriaAttributes",
    "ltPropOffset",
    "ltPropActiveElement",
    "ltPropHeightResetOnScroll",
    "ltPropPreventKeyEvents",
    "ltPropForceClick",
    "eventListeners",
    "pos",
    "parIndex",
    "lyteUnbound",
    "randomId",
    "customPosition"
];

window.lyteCloseMenu = function( evt, element, flag, close_submenu_alone ){
    if( document._lyteMenu.preventClick != false || element ){
        if( ( evt && evt.button != 2 ) || element || flag ){
            var menus = document.body.getElementsByTagName( 'lyte-menu' ),
            target = ( evt || {} ).target;

            for( var i = 0; i < menus.length; i++ ){
                var cur_menu = menus[ i ];
                if( cur_menu.classList.contains( 'lyteMenuClosed' ) ||  !cur_menu.hasAttribute( 'lyte-rendered' ) ){
                    continue;
                }

                var comp = cur_menu.component,
                childComp = comp.childComp;

                if( cur_menu != element && childComp && !childComp.classList.contains( 'lyteMenuHidden' ) ){
                    
                    if( flag || !( target && childComp.contains( target ) ) ){
                        if( !comp._hideStarts ){
                            if( close_submenu_alone && comp.data.ltPropAria ){
                               if( comp.childMenu ){
                                    continue;
                               } else if( comp.parentMenu ){
                                    comp.hideMenu( !element, evt, flag );
                                    break;
                               }
                            }
                            comp.hideMenu( !element, evt, flag );
                        }
                    }  
                }
            }

        }
    }

    if( evt && evt.type == 'click'){
        document._lyteMenu.preventClick = true;
    }
};

if (!window._lyteUiUtils.registeredCustomElements['lyte-menu-item']) {
    window._lyteUiUtils.registeredCustomElements['lyte-menu-item'] = true;

    window.menukeypress = function(evt) {
        var menus = document.querySelectorAll('lyte-menu:not(.lyteMenuClosed)[lyte-rendered]'),
        keyCode = evt.which || evt.keyCode;

        for (var i = 0; i < menus.length; i++) {
            var _this = menus[i].component;
            if (!_this.childMenu) {


                if( _this.is_input_element( evt.target, keyCode ) ){
                    continue;
                }

                _this._typed = _this._typed || '';
                _this._typed += String.fromCharCode( keyCode );
                clearTimeout(_this._typetime);
                _this._typetime = setTimeout(_this.searchFilter.bind(_this, _this._typed.trim().toLowerCase()), 400)
                break;
            }
        }
    };

    /**
     * @customElement lyte-menu-item,
     *                lyte-menu-body,
     *                lyte-menu-description,
     *                lyte-menu-label,
     *                lyte-menu-group,
     *                lyte-menu-header
     */
    class LyteMenuItemCustomElements extends LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        static get observedAttributes() {
            return [ 'lyte-shortcut', 'lt-prop-disabled' ];
        }

        check_disable(value) {
            var lyteNode = this.$node;
            var fn = "remove";

            if( value == "true" || value == "" ){
                fn = "add";
            }

            lyteNode.classList[ fn ]( "lyteMenuItemDisabled" );
        }

        attributeChangedCallback(attributeName, oldValue, newValue) {
            var lyteNode = this.$node;

            if( attributeName == "lt-prop-disabled" ){
                return this.check_disable( newValue );
            }

            if (typeof window.shortcut == "function") {
                if (!newValue) {
                    return;
                }
                newValue = JSON.parse(newValue);
                var newKey = newValue.key;
                var type = newValue.type;
                var wait = newValue.wait;
                if (!oldValue) {
                    oldValue = {};
                }
                else {
                    oldValue = JSON.parse(oldValue)
                }
                window.shortcut.push({
                    newKey: newKey,
                    type: type,
                    wait: wait,
                    oldKey: oldValue.key,
                    value: lyteNode
                });
            }
        }

        connectedCallback() {
            var lyteNode = this.$node;
            var closestBody = $L(lyteNode).closest('lyte-menu-box').get(0),
            disabled = lyteNode.getAttribute( 'lt-prop-disabled' );

            if (closestBody && closestBody.parent) {
                var aria = closestBody.parent.ltProp('aria');
                if (aria) {
                    $L( lyteNode ).attr('role', 'menuitem');

                    if( !lyteNode.id ){
                        lyteNode.id = "lyteMenuItem_" + parseInt( Math.random() * 1e6 );
                    }
                }
            }

            ( disabled == "true" || disabled == "" ) && this.check_disable( disabled );
        }

        disconnectedCallback() {
            var lyteNode = this.$node;
            var curValue = lyteNode.getAttribute('lyte-shortcut');
            if (curValue) {
                lyteNode.setAttribute('lyte-shortcut', JSON.stringify({}));
            }
        }

        _() {
            _;
        }
    }

    LyteMenuItemCustomElements.options = {clone : {allCallbacks : false}};

    LyteMenuItemCustomElements.register("lyte-menu-item");
}

/**
 * @syntax nonYielded
 * <lyte-menu  lt-prop-content='[{"label" : "Open File", "description" : "Ctrl + O"},{"label" : "New File", "description" : "Ctrl + N"},{"label" : "Save File", "description" : "Ctrl + S"}]' lt-prop-user-value = 'label' lt-prop-description = 'description' lt-prop-event="click" ></lyte-menu>
 */

/**
 * @syntax yielded
 * <lyte-menu lt-prop-yield="true"  lt-prop-event='click' >
 *   <template is="registerYield" yield-name="yield">
 *      <lyte-menu-body>
 *          <lyte-menu-item data-value = "1">
 *               <lyte-menu-label >
 *                   New File
 *               </lyte-menu-label>
 *          <lyte-menu-item>
 *          <lyte-menu-item data-value = "2">
 *              <lyte-menu-label >
 *                  Open File
 *              </lyte-menu-label>
 *           </lyte-menu-item>
 *           <lyte-menu-item data-value = "3">
 *              <lyte-menu-label >
 *                  Save File
 *              </lyte-menu-label>
 *           </lyte-menu-item>
 *     </lyte-menu-body>
 *   </template>
 * </lyte-menu>
 */
export { LyteMenuComponent };

LyteMenuComponent.register("lyte-menu", {
    hash: "LyteMenuComponent_8",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});