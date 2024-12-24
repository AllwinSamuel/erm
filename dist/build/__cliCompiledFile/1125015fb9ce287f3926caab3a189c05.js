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
import "/node_modules/@zoho/lyte-ui-component/components/javascript/lyte-menu.js";
import { prop } from "/node_modules/@slyte/core/index.js";
import { Component, LyteUiComponentComponentRegistry } from "/node_modules/@zoho/lyte-ui-component/components/component.js";

import $L from "/node_modules/@zoho/lyte-dom/modules/lyte-dom-utils.js";

/**
 * Changes
 * onNavItemSubMenuClicked - Fired when the sub menu of a nav item is clicked
 * onBeforeNavItemSubMenuOpened - fired before a sub menu is opened
 * onNavItemSubMenuOpened - fired when a sub menu is opened
 * onNavItemSubMenuClosed - fired when a sub menu is closed
 * onBeforeItemSelected - fired before an item is selected.
 * ltPropNavMenuYield - Boolean to choose whether the navSubmenu has to be yielded or not.
 * ltPropSubMenuValue - The "key" for the submenu.
 */

/**
 * Render a nav bar
 * @component lyte-nav
 * @version 1.0.0
 * @methods onItemSelected,afterRender
 * @import lyte-menu
 * @ignore-props
 * @dependencies lyte-menu
 */
/**
 * @customElement lyte-nav-item
 */

window._lyteNav = {
	id: 0
};

class LyteNavComponent extends Component {
    constructor() {
        super();
    }

    init() {
		/* Set core properties of menu */
		var dropObj = this.getData('ltPropMenu'),
			query = this.getData('ltPropContainerClass'), that = this, align = this.getData('ltPropAlignment'),
			containerId = this.getData('ltPropContainerId') || '';

		$L.fastdom.measure(function () {
			var prev = window._lyteUiUtils.nav_innerWidth;

			if (!prev) {
				window._lyteUiUtils.nav_innerWidth = document.documentElement.clientWidth;
			}
		});

		this.$addon.objectUtils(dropObj, 'add', 'yield', true);

		if (containerId) {
			this.$addon.objectUtils(dropObj, 'add', 'query', '#' + containerId);
		}
		else {
			this.$addon.objectUtils(dropObj, 'add', 'query', '.' + query);
		}


		if (this.getData('ltPropNavYield') || align === 'vertical') {
			// only makes sense to add ARIA in yielded cases
			this.enableAria = true;
			this.$node.setAttribute('role', 'navigation');
		}

		this.$node.recalculate = function () {
			that.recalculate();
		}

		this.setData('randomId', 'lyte-nav-menu-button-' + _lyteNav.id++);
	}

    didDestroy() {
		var allNodes = this.$node.querySelectorAll('lyte-nav-item'), i = 0, curValue;

		for (; i < allNodes.length; i++) {
			curValue = allNodes[i].getAttribute('lyte-shortcut');
			if (curValue) {
				allNodes[i].setAttribute('lyte-shortcut', JSON.stringify({}));
			}
		}
	}

    // Creating outer div
    createOuterDiv() {
		var div = document.createElement('div');
		this.addOuterDivStyles(div);

		return div;
	}

    addOuterDivStyles(div) {
		var useArrow = this.getData('ltPropArrow');
		div.setAttribute('class', 'lyteNavDiv');
		div.setAttribute('role', 'list');

		if (useArrow) {
			div.style.overflow = window._lyteUiUtils.isMobile ? 'auto' : 'hidden';
		}
		else {
			div.style.overflow = 'auto';
			div.classList.add('lyteNavDivFullHeight');
		}
	}

    show() {
		var arrows = this.getArrows(),
			outer = this.getOuterDiv(),
			useArrow = this.getData('ltPropArrow');

		if (!this.$node) {
			return;
		}
		if (useArrow) {
			this.setData('topH', arrows[0].getBoundingClientRect().height);
			this.setData('botH', arrows[1].getBoundingClientRect().height);
			this.dispArrow.call(this, arrows, outer);
		}
		this.fireAfterRender();
	}

    /**
	 * Constructs an Aux Array that is used to render the nav
	 * Reveals all items as part of the nav at the start
	 *
	 */

    construct() {
		var items = this.getData( 'ltPropItems' ) || [], i = 0,
		user = this.getData( 'ltPropUserValue' ),
		sys = this.getData( 'ltPropSystemValue' ), obj, store = [];

		for( ; i < items.length; i++ ) {
			obj = items[ i ];
			this.$addon.arrayUtils( store, 'push', obj );
		}
		this.setData('auxArray', store);
		// delete store[1]['items']
	}

    recalculate() {
		var sel = this.getCurrentSelected(),
			dv = this.getDataValue(sel) || this.getData('ltPropSelected') || '', newSel;

		// This removes the clicked element when they haven't specified the selected element but if they have it retains it
		this.construct();
		// Can't use the previous sel variable because it gets destroyed
		if (dv) {
			newSel = this.$node.querySelector('lyte-nav-item[data-value="' + window._lyteUiUtils.escape(dv) + '"]');
		}
		if (newSel) {
			newSel.setAttribute('selected', true);
		}
		this.collapse();
	}

    makeSelection() {
		if (this.getData('preventSel')) {
			return;
		}
		this.selectItem();
	}

    selectItem() {
		var sel = this.getData('ltPropSelected'), node;
		if (!sel) {
			this.removeSelected();
		}
		else {
			this.addSelected();
		}
	}

    removeSelected() {
		var node = this.$node.querySelector('lyte-nav-item[selected="true"]');
		if (node) {
			node.removeAttribute('selected');
		}
	}

    addSelected() {
		var isSelected = this.setInNav();
		if (!isSelected) {
			this.setInMenu();
		}
	}

    setInNav() {
		var sel = this.getData('ltPropSelected'), node;
		node = this.$node.querySelector('lyte-nav-item[data-value="' + window._lyteUiUtils.escape(sel) + '"]')
		if (node) {
			node.setAttribute('selected', true);
			return true;
		}
		return false;
	}

    setInMenu() {
		var menu = this.$node.querySelector('lyte-menu'),
			sel = this.getData('ltPropSelected'),
			body = menu ? menu.component.childComp : null, node;

		if (body) {
			node = body.querySelector('lyte-menu-item[data-value="' + window._lyteUiUtils.escape(sel) + '"]');
			// whenever a menuitem from more options menu was clicked the onClick callback was called twice
			if (node) {
				this.setData('preventCallback', true);
				node.click();
				this.setData('preventCallback', false);
			}
		}
	}

    /**
	 * This returns the current selected item by searching the DOM
	 * returns {DOMElement | null}
	 *
	 */

    getCurrentSelected() {
		var click = this.getData('ltPropClick');
		return this.$node.querySelector('lyte-nav-item.' + click);
	}

    /**
	 * Get the data-value of the current item
	 * @param {DOMElement | null} sel - The selected item
	 * @returns {String} - attribute value
	 *
	 */

    getDataValue(sel) {
		if (sel) {
			return sel.getAttribute('data-value');
		}
		return '';
	}

    /**
	 * Get the width of the current item
	 * @param {DOMElement | null} - The element whose width needs to be found
	 * @returns {Number} - The width of the element
	 *
	 */

    getLength(item) {
		var alignment = this.getData('ltPropAlignment'),
			considerMargin = this.getData('ltPropAddMargin');
		if (!item) {
			return 0;
		}
		if (alignment === "horizontal") {
			return considerMargin ? $L(item).outerWidth(true) : item.getBoundingClientRect().width;
		}
		return considerMargin ? $L(item).outerHeight(true) : item.getBoundingClientRect().height;
	}

    /**
	 * This is used to get the width of the menu icon that is rendered
	 * @returns {Number} - The width of the menu icon
	 *
	 */

    getMenuLength() {
		var menu, menuLength;
		this.setData('showMenu', true);
		menu = this.$node.querySelector('.' + this.getData('ltPropContainerClass'));
		menuLength = this.getLength(menu);
		this.setData('showMenu', false);
		return menuLength;
	}

    /**
	 * Collapse excess width held by the nav-items
	 *
	 */

    calculate() {
		if (!this.$node) {
			return;
		}
		var items = this.getData('auxArray'),
			store = [], tbr = [], ind,
			maxLength = this.getMaxLength(),
			i = 0, length = items.length, item,
			sys = this.getData('ltPropSystemValue'),
			totalLength = 0, sel = this.getCurrentSelected(),
			dv = this.getDataValue(sel), selLength = this.getLength(sel),
			menuLength = this.getMenuLength();
		totalLength = totalLength + selLength + menuLength;
		var headerCounter = 0;
		for (; i < items.length; i++) {
			item = items[i];
			// We already know the length of the selected item
			if (item[sys] === dv) {
				continue;
			}

			var query = window._lyteUiUtils.escape(item[sys]);
			if (query) {
				var node = this.$node.querySelector('lyte-nav-item[data-value="' + query + '"]');
			}
			else {
				headerCounter++;
				var allNodes = this.$node.querySelectorAll('lyte-nav-item[data-value="' + query + '"]');
				allNodes = Array.from(allNodes);
				var node = allNodes[headerCounter - 1];
			}
			totalLength += this.getLength(node);
			if (totalLength > maxLength) {
				this.$addon.arrayUtils(store, 'push', item);
				tbr.push(i);
			}
		}
		this.setData('menuContent', store);
		while (!isNaN((ind = tbr.pop()))) {
			this.$addon.arrayUtils(items, 'removeAt', ind, 1);
		}
	}

    getMaxLength() {
		var alignment = this.getData('ltPropAlignment'),
			widthPercent = parseFloat(this.getData('ltPropMaxWidth')) / 100,
			heightPercent = parseFloat(this.getData('ltPropMaxHeight')) / 100,
			rects = this.$node.getBoundingClientRect();

		if (alignment === 'horizontal') {
			return rects.width * widthPercent;
		}
		else {
			return rects.height * heightPercent;
		}
	}

    /**
	 * The staging function
	 *
	 */

    collapse() {
		$L.fastdom.measure(this.calculate, this);
	}

    fireAfterRender() {
		if (this.getMethods('afterRender')) {
			this.executeMethod('afterRender', this);
		}
	}

    deepCopyArray(arr) {
		let newArr = [];
		for (let i = 0; i < arr.length; i++) {
			if (typeof arr[i] === 'object' && arr[i] !== null) {
				var copiedObj = this.$addon .deepCopyObject(arr[i])
				newArr.push(copiedObj);
			} else {
				newArr.push(arr[i]);
			}
		}
		return newArr;
	}

    didConnect() {
		var align = this.getData('ltPropAlignment'),
			tag = this.$node, useArrow = this.getData('ltPropArrow'),
			isMobile = window._lyteUiUtils.isMobile,
			navYield = this.getData('ltPropNavYield'),
			type = this.getData('ltPropType'),
			arrows, i, div;

		this.addDirectionClass(align);
		if (align === 'horizontal') {
			if ((this.getData('ltPropItems') || []).length > 0) {
				this.construct();
				if (type === 'collapse') {
					this.collapse();
				}
				this.makeSelection();
				$L.fastdom.measure(this.fireAfterRender, this);
			}
		}
		else if (align === 'vertical') {
			if (type === "collapse") {
				this.construct();
				this.collapse();
				this.makeSelection();
				$L.fastdom.measure(this.fireAfterRender, this);
				return;
			}
			else if (!navYield) {
				this.buildVerticalNav();
			}
			else {
				this.addOuterDivStyles(this.getOuterDiv());
				$L.fastdom.measure(this.show.bind(this));
			}

			if (!useArrow) {
				return;
			}

			div = tag.querySelector('.lyteNavDiv');
			this.addEventsForArrows();
			arrows = this.getArrows();

			var that = this;
			if (isMobile) {
				this.prev = div.scrollTop;
				div.addEventListener('scroll', function (e) {
					var topHeight, botHeight, total,
						scrollH = div.scrollHeight,
						scrollT = div.scrollTop,
						height = div.getBoundingClientRect().height,
						prev = that.prev,
						diff = Math.floor(scrollT - prev),
						stopHandler = that.getData('stopHandler');

					that.prev = scrollT;
					topHeight = arrows[0].getBoundingClientRect().height;
					botHeight = arrows[1].getBoundingClientRect().height;

					e.preventDefault();
					if (diff == 0 || stopHandler) {
						return;
					}
					else if (diff > 0) {
						if (arrows[0].style.display === 'none') {
							arrows[0].style.display = 'inline-block';
							topHeight = that.getData('topH');
							total = topHeight + botHeight;
							div.style.height = 'calc(100% - ' + total + 'px)';
						}

						if (Math.abs(scrollT + height - scrollH) <= 5) {
							arrows[1].style.display = 'none';
							div.style.height = 'calc(100% - ' + topHeight + 'px)';
						}
					}
					else {
						// Added the second condition to solve a weird judder issue in mobile
						if (arrows[1].style.display === 'none' && (scrollH - (scrollT + height)) >= 30) {
							arrows[1].style.display = 'inline-block';
							botHeight = that.getData('botH');

							total = topHeight + botHeight;
							div.style.height = 'calc(100% - ' + total + 'px)';
						}

						if (scrollT <= 0) {
							arrows[0].style.display = 'none';
							div.style.height = 'calc(100% - ' + botHeight + 'px)';
						}
					}
				});
			}
			else {
				div.addEventListener('wheel', function (e) {
					var topHeight, botHeight, total,
						deltaY = e.deltaY,
						scrollH = div.scrollHeight,
						height = div.getBoundingClientRect().height,
						scrollT = div.scrollTop;

					e.preventDefault();

					if (Math.floor(scrollH) == Math.floor(height)) {
						return;
					}

					topHeight = arrows[0].getBoundingClientRect().height;
					botHeight = arrows[1].getBoundingClientRect().height;

					if (deltaY < 0) {
						scrollT = div.scrollTop = div.scrollTop - 6;

						if (arrows[1].style.display === 'none') {
							arrows[1].style.display = 'inline-block';
							botHeight = that.getData('botH');
							total = topHeight + botHeight;
							div.style.height = 'calc(100% - ' + total + 'px)';
						}

						if (scrollT <= 0) {
							arrows[0].style.display = "none"
							div.style.height = 'calc(100% - ' + botHeight + 'px)';
						}
					}

					if (deltaY > 0) {
						scrollT = div.scrollTop = div.scrollTop + 6;

						if (arrows[0].style.display === 'none') {
							arrows[0].style.display = 'inline-block';
							topHeight = that.getData('topH');
							total = topHeight + botHeight;
							div.style.height = 'calc(100% - ' + total + 'px)';
						}

						if (Math.floor(height) + Math.floor(scrollT) >= Math.floor(scrollH)) {
							arrows[1].style.display = 'none';
							div.style.height = 'calc(100% - ' + topHeight + 'px)';
						}
					}
				});
			}
		}
		var items = this.getData('ltPropItems');
		var copiedItems = this.deepCopyArray(items)
		this.setData('copiedItems', copiedItems);
	}

    addDirectionClass(align) {
		if (align === "vertical") {
			this.$node.classList.add('lyteNavVertical');
		}
		else {
			this.$node.classList.add('lyteNavHorizontal');
		}
	}

    getOuterDiv() {
		var navYield = this.getData('ltPropNavYield');
		if (navYield) {
			return this.$node.querySelector('lyte-yield');
		}
		return this.$node.querySelector('.lyteNavDiv');
	}

    addEventsForArrows() {
		var useArrow = this.getData('ltPropArrow'),
			arrows = this.getArrows(),
			isMobile = window._lyteUiUtils.isMobile,
			event = this.getData('ltPropArrowEvent');
		if (!useArrow) {
			return;
		}

		if (isMobile) {
			arrows[0].addEventListener('touchstart', this.moveup.bind(this));
			arrows[1].addEventListener('touchstart', this.movedown.bind(this));
			arrows[0].addEventListener('touchend', this.removeup.bind(this));
			arrows[1].addEventListener('touchend', this.removedown.bind(this));
			arrows[0].addEventListener('touchcancel', this.removeup.bind(this));
			arrows[1].addEventListener('touchcancel', this.removedown.bind(this));
		}
		else {
			if (event === 'mousehover') {
				arrows[0].addEventListener('mouseenter', this.moveup.bind(this));
				arrows[1].addEventListener('mouseenter', this.movedown.bind(this));
				arrows[0].addEventListener('mouseleave', this.removeup.bind(this));
				arrows[1].addEventListener('mouseleave', this.removedown.bind(this));
			}
			else if (event === 'click') {
				arrows[0].addEventListener('click', this.moveupOnClick.bind(this));
				arrows[1].addEventListener('click', this.movedownOnClick.bind(this));
			}
		}
	}

    buildVerticalNav() {
		var outerDiv, arrows, parent = this.$node,
			children = parent.children, length = children.length,
			temp, reset;
		outerDiv = this.createOuterDiv();
		arrows = this.getArrows();

		for (var i = 0; i < length; i++) {
			// Safari starts firing when a custom element is connected to a disconnected node
			children[0].prevent = true;
			temp = children[0];

			if (children[0].hasAttribute('selected')
				&& children[0].getAttribute('selected') !== 'false'
			) {
				reset = children[0];
				reset.removeAttribute('selected');
			}
			window._lyteUiUtils.appendChild(outerDiv, children[0]);
			temp.prevent = false;
			temp = null;
		}

		// Ideally we want it to be fired when it is appened to the DOM
		window._lyteUiUtils.appendChild(parent, outerDiv);
		if (reset) {
			reset.setAttribute('selected', 'true');
		}

		reset = null;
		this.addArrows();
		arrows = this.getArrows();
		$L.fastdom.measure(this.show.bind(this));
	}

    addArrows() {
		var arrows = this.getArrows(),
			useArrow = this.getData('ltPropArrow'),
			parent = this.$node;

		if (!useArrow) {
			return;
		}
		if (arrows.length == 0) {
			this.addArrow('arrow-up');
			this.addArrow('arrow-down');
		}
		else {
			parent.insertBefore(arrows[0], parent.children[0]);
			parent.appendChild(arrows[1]);
		}
	}

    getArrows() {
		var parent = this.$node;
		return parent.querySelectorAll('lyte-arrow');
	}

    removedown() {
		this.setData('stopHandler', false);
		window.cancelAnimationFrame(this.getData('arrowdid'))
	}

    removeup() {
		this.setData('stopHandler', false);
		window.cancelAnimationFrame(this.getData('arrowuid'));
	}

    down(div, ar, bot) {
		var id,
			scrollT = div.scrollTop,
			scrollH = div.scrollHeight,
			height = div.getBoundingClientRect().height;

		this.setData('stopHandler', true);
		if (scrollT + height < scrollH) {
			scrollT = div.scrollTop = div.scrollTop + 3
		}

		if (Math.floor(height) + Math.floor(scrollT) >= scrollH) {
			ar[1].style.display = 'none';
			div.style.height = 'calc(100% - ' + bot + 'px)';
		}

		id = window.requestAnimationFrame(this.down.bind(this, div, ar, bot));
		this.setData('arrowdid', id);
	}

    downOnClick(counterLimit) {
		var tag = this.$node,
			div = tag.querySelector('.lyteNavDiv'),
			ar = this.getArrows(),
			bot = this.getData('botH'),
			item = div.getElementsByTagName('lyte-nav-item')[0],
			topMargin = parseInt(window.getComputedStyle(item).marginTop),
			bottomMargin = parseInt(window.getComputedStyle(item).marginBottom);
		var scrollT = div.scrollTop,
			scrollH = div.scrollHeight,
			height = div.getBoundingClientRect().height;
		var scrollSize = div.getElementsByTagName('lyte-nav-item')[0].offsetHeight;

		// Check if the counter limit is reached
		if (this.getData('downIterationCounter') >= counterLimit) {
			return;
		}

		this.setData('stopHandler', true);

		scrollSize = scrollSize + topMargin + bottomMargin;
		// Calculate how much we can scroll down
		var scrollableDistance = scrollH - scrollT - height;
		var scrollStep = Math.min(scrollableDistance, scrollSize);
		if (scrollT + scrollStep < scrollH) {
			scrollT = div.scrollTop = div.scrollTop + scrollStep;
		} else {
			// If the bottom is reached, stop further recursive calls
			return;
		}

		if (Math.floor(height) + Math.floor(scrollT) >= scrollH) {
			ar[1].style.display = 'none';
			div.style.height = 'calc(100% - ' + bot + 'px)';
		}

		// Increment the iteration counter
		var currentCounter = this.getData('downIterationCounter') || 0;
		window.requestAnimationFrame(this.downOnClick.bind(this, counterLimit));
	}

    up(div, ar, top) {
		var scrollT = div.scrollTop, id;
		this.setData('stopHandler', true);

		if (scrollT !== 0) {
			scrollT = div.scrollTop = div.scrollTop - 3;
		}

		if (scrollT <= 0) {
			ar[0].style.display = 'none';
			div.style.height = 'calc(100% - ' + top + 'px)';
		}

		id = window.requestAnimationFrame(this.up.bind(this, div, ar, top));
		this.setData('arrowuid', id);
	}

    upOnClick(counterLimit) {
		var tag = this.$node,
			div = tag.querySelector('.lyteNavDiv'),
			ar = this.getArrows(),
			item = div.getElementsByTagName('lyte-nav-item')[0],
			topMargin = parseInt(window.getComputedStyle(item).marginTop),
			bottomMargin = parseInt(window.getComputedStyle(item).marginBottom),
			top = this.getData('topH');
		var scrollT = div.scrollTop;
		var scrollSize = div.getElementsByTagName('lyte-nav-item')[0].offsetHeight;

		// Check if the current iteration has reached the counter limit
		if (this.getData('iterationCounter') >= counterLimit) {
			return;
		}

		this.setData('stopHandler', true);
		scrollSize = scrollSize + topMargin + bottomMargin;
		if (scrollT !== 0) {
			scrollT = div.scrollTop = div.scrollTop - scrollSize;
		}
		if (scrollT <= 0) {
			ar[0].style.display = 'none';
			div.style.height = 'calc(100% - ' + top + 'px)';
		}

		// Increment the iteration counter
		var currentCounter = this.getData('iterationCounter') || 0;
		this.setData('iterationCounter', currentCounter + 1);

		// Request the next animation frame for the next iteration
		window.requestAnimationFrame(this.upOnClick.bind(this, counterLimit));
	}

    movedown(event) {
		var top, bot, total,
			tag = this.$node,
			div = tag.querySelector('.lyteNavDiv'),
			ar = this.getArrows(),
			height = div.getBoundingClientRect().height,
			scroll = div.scrollHeight, id;

		ar[0].style.display = 'inline-block';
		top = this.getData('topH');
		bot = this.getData('botH');
		total = top + bot;
		div.style.height = 'calc(100% - ' + total + 'px)';

		// Call Animation inside a rAF.
		id = window.requestAnimationFrame(this.down.bind(this, div, ar, bot));
		this.setData('arrowdid', id);
	}

    movedownOnClick(event) {
		var top, bot, total,
			tag = this.$node,
			div = tag.querySelector('.lyteNavDiv'),
			ar = this.getArrows(), id,
			item = div.getElementsByTagName('lyte-nav-item')[0],
			topMargin = parseInt(window.getComputedStyle(item).marginTop),
			bottomMargin = parseInt(window.getComputedStyle(item).marginBottom),
			step = this.getData('ltPropScrollIncrement');
		ar[0].style.display = 'inline-block';
		top = this.getData('topH');
		bot = this.getData('botH');
		total = top + bot + topMargin + bottomMargin;
		div.style.height = 'calc(100% - ' + total + 'px)';

		// Reset the down iteration counter
		this.setData('downIterationCounter', 0);

		// Call Animation inside a rAF.
		window.requestAnimationFrame(this.downOnClick.bind(this, step));
	}

    moveup() {
		var top, bot, total,
			tag = this.$node,
			div = tag.querySelector('.lyteNavDiv'),
			ar = this.getArrows(), id,
			height = div.getBoundingClientRect().height,
			scroll = div.scrollHeight;

		ar[1].style.display = 'inline-block';
		top = this.getData('topH');
		bot = this.getData('botH');
		total = top + bot;
		div.style.height = 'calc(100% - ' + total + 'px)';

		// Call Animation inside a rAF
		id = window.requestAnimationFrame(this.up.bind(this, div, ar, top));
		this.setData('arrowuid', id);
	}

    moveupOnClick() {
		var top, bot, total,
			tag = this.$node,
			div = tag.querySelector('.lyteNavDiv'),
			ar = this.getArrows(),
			item = div.getElementsByTagName('lyte-nav-item')[0],
			topMargin = parseInt(window.getComputedStyle(item).marginTop),
			bottomMargin = parseInt(window.getComputedStyle(item).marginBottom),
			step = this.getData('ltPropScrollIncrement');
		ar[1].style.display = 'inline-block';
		top = this.getData('topH');
		bot = this.getData('botH');

		total = top + bot;
		div.style.height = 'calc(100% - ' + total + 'px)';
		// Reset the iteration counter
		this.setData('iterationCounter', 0);

		// Call Animation inside a rAF
		window.requestAnimationFrame(this.upOnClick.bind(this, step));
	}

    addArrow(cls) {
		var i = document.createElement('i'),
			ar = document.createElement('lyte-arrow'),
			tag = this.$node;

		i.setAttribute('class', cls);
		ar.appendChild(i);

		if (cls.indexOf('up') !== - 1) {
			tag.insertBefore(ar, tag.children[0]);
		}
		else {
			tag.appendChild(ar)
		}
	}

    dispArrow(arrows, div) {
		var which = 0, topHeight = 0, botHeight = 0, total = 0;

		if (this.getData('arrowTop')) {
			topHeight = this.getData('topH');
			which = 1;
		}

		if (this.getData('arrowBot')) {
			botHeight = this.getData('botH');
			if (which == 1) {
				which = 3
			}
			else {
				which = 2
			}
		}

		switch (which) {
			case 1:
				div.style.height = 'calc(100% - ' + topHeight + 'px)'
				arrows[1].style.display = "none"
				break;
			case 2:
				div.style.height = 'calc(100% - ' + botHeight + 'px)'
				arrows[0].style.display = "none"
				break
			case 3:
				total = topHeight + botHeight
				div.style.height = 'calc(100% - ' + total + 'px)'
				break;
		}
	}

    /**
	 * This recreates an object with just the data-value
	 * @param {string} dv - The data-value of the element with which an object is created
	 * @returns {Object} obj - The lyte-nav info object
	 *
	 */
    recreateFromDv(dv) {
		var sys = this.getData('ltPropSystemValue'), i = 0, items = this.getData('copiedItems') || [];

		for (; i < items.length; i++) {
			if (items[i][sys] === dv) {
				return items[i];
			}
		}
	}

    /**
	 * Find the index of the item that needs to be swapped out from the menu
	 * @param {String} dv - The data-value of the element
	 * @returns {Number} index - The index of the element in the rendered menu
	 *
	 */
    findInd(dv) {
		// come here
		var menus = this.getData('menuContent'),
			i = 0, sys = this.getData('ltPropSystemValue');
		var subMenuName = this.getData('ltPropSubMenuValue');

		for (; i < menus.length; i++) {
			var element = menus[i];
			if (element[subMenuName]) {
				var subArray = element[subMenuName];
				for (var j = 0; j < subArray.length; j++) {
					var subElement = subArray[j];
					if (dv == subElement[sys]) {
						return i;
					}
				}
			}
			else {
				if (dv == menus[i][sys]) {
					return i;
				}
			}
		}
		return -1;
	}

    /**
	 * Set the click class to the item
	 * @param {String} dv - The data-value of the item which needs the click class
	 *
	 */
    setSelected(dv) {
		// Just set the click class to the item
		var newLast = this.$node.querySelector('lyte-nav-item[data-value="' + window._lyteUiUtils.escape(dv) + '"]');

		// Just a safety
		if (newLast) {
			newLast.click();
		}
	}

    setSelectedNavItem() {
		var items = this.getData('ltPropItems');
		if (items) {
			var subMenuName = this.getData('ltPropSubMenuValue');
			var selectedNavItemIndex = this.findParentMenuIndex(items);
			if (selectedNavItemIndex === -1 && subMenuName) {
				selectedNavItemIndex = this.findParentMenuIndexForSubMenuItem(items);
				var subArray = items[selectedNavItemIndex][subMenuName]
				var menuItemIndex = this.findMenuItemIndex(subArray);
				var selectedMenuItem = subArray[menuItemIndex];
				this.setData('selectedMenuItem', selectedMenuItem);
			}
			else {
				this.setData('selectedMenuItem', {});
			}
			var selectedNavItem = items[selectedNavItemIndex];
			this.setData('selectedNavItem', selectedNavItem);
		}
	}

    static actions(arg1) {
        return Object.assign(super.actions({
            openMenu: function (event) {
                if ((event.key === 'Enter' || event.key === ' ') && !this.preventClick) {
                    event.target.click();
                }

                if (this.preventClick) {
                    this.preventClick = false;
                }
            },
			handleBentoClick: function (_this,event) {
				if (this.getMethods('onBentoClick')) {
                    this.executeMethod('onBentoClick',_this,event);
                }
			},
			handleBentoHover: function (_this,event) {
				if (this.getMethods('onBentoHover')) {
                    this.executeMethod('onBentoHover',_this,event);
                }
			}
        }), arg1);
    }

    static methods(arg1) {
        return Object.assign(super.methods({
            beforeSubMenuOpen: function (menu, event, originElem) {
                var dv = originElem.getAttribute('data-value');
                if (dv) {
                    var selected = originElem.getAttribute('selected');
                    var target = event.target;
                    var targetTagName = target.tagName;
                    if (selected && !(targetTagName === 'LYTE-NAV-MENU-ICON')) {
                        return false;
                    }
                }
                if (this.getMethods('onBeforeNavItemSubMenuOpen')) {
                    var returnValue = this.executeMethod('onBeforeNavItemSubMenuOpen');
                    if (returnValue === false) {
                        return false;
                    }
                }
            },
            subMenuOpened: function (menu, event, originElem) {
                originElem.classList.add('lyteNavSubMenuOpened');
                if (this.getMethods('onNavItemSubMenuOpened')) {
                    this.executeMethod('onNavItemSubMenuOpened');
                }
            },
            subMenuClosed: function (menu, event) {
                var navItems = this.$node.getElementsByTagName('lyte-nav-item');
                navItems = Array.from(navItems);
                navItems.forEach(element => {
                    if (element.classList.contains("lyteNavSubMenuOpened")) {
                        element.classList.remove("lyteNavSubMenuOpened");
                    }
                });
                if (this.getMethods('onNavItemSubMenuClosed')) {
                    this.executeMethod('onNavItemSubMenuClosed');
                }
            },

            /**
             * The menu was selected
             * swap the menu item and the last item of the nav item
             *
             */
            moreOptionsItemSelected: function (value, event, menuElement, originElement, clickedItem) {
                var selObj = arguments[4],
                    items = this.getData('ltPropItems'),
                    click = this.getData('ltPropClick'),
                    sys = this.getData('ltPropSystemValue'),
                    item = selObj.element, aux = this.getData('auxArray'),
                    dv = this.getDataValue(item), /* need to remove */ rm, ind = this.findInd(dv),
                    menus = this.getData('menuContent'), /* need to remove */pushObj, prevSel,
                    auxLength = aux.length, replacedObj, finalObj;
                var subMenuName = this.getData('ltPropSubMenuValue');

				var preventCallback = this.getData('preventCallback');
				if (preventCallback !== true) {
					if (dv) {
						this.setData('ltPropSelected', dv);
						// set selectedNavItem
						this.setSelectedNavItem()
						// menuContent has to be modified here
						var newNavItem;
						var parentNavItemIndex = this.findParentMenuIndexForSubMenuItem(menus);

						var itemToBeReplaced;
						ind = this.findInd(dv)

						// remove memory reference
						if (parentNavItemIndex !== -1) {
							itemToBeReplaced = menus[parentNavItemIndex][sys];

							// Get the parent Item
							var oldMenuItem = menus[parentNavItemIndex];
							var temp = oldMenuItem[subMenuName];
							// Get the subArray: the old navMenu
							var menuItemIndex = this.findMenuItemIndex(temp);
							newNavItem = this.swapItems(parentNavItemIndex, menuItemIndex, menus);
							this.$addon.arrayUtils(menus, 'replaceAt', parentNavItemIndex, newNavItem);

						}

						prevSel = this.$node.querySelector('lyte-nav-item.' + click);
						if (prevSel) {
							prevSel.classList.remove(click);
						}
						// finalObj takes from ltPropItems
						// ltPropItems should be modified atleast here
						// Setting ltPropItems for the component
						var items = this.getData('ltPropItems');

						var index = items.findIndex(item => item[sys] === itemToBeReplaced);
						// When item from subarray of more options menu is selected there are some issues
						finalObj = this.recreateFromDv(dv);
						if (!finalObj) {
							finalObj = newNavItem;
						}
						replacedObj = this.$addon.arrayUtils(aux, 'replaceAt', auxLength - 1, finalObj);
						if (replacedObj[subMenuName]) {
							// alter replacedObj here
							var headerID = replacedObj.header_value;
							var copiedItems = this.getData('copiedItems');
							var index = -1;
							for (var i = 0; i < copiedItems.length; i++) {
								var element = copiedItems[i];
								if (element.header_value) {
									var headerValue = element.header_value;
									if (headerValue === headerID) {
										index = i;
										break;
									}
								}
							}
							var originalNavItem = copiedItems[index]
							// remove the unwanted value from the replacedObj
							for (let key in replacedObj) {
								if (!originalNavItem.hasOwnProperty(key)) {
									delete replacedObj[key];
								}
							}
						}
						rm = this.$addon.arrayUtils(menus, 'removeAt', ind, 1);
						this.$addon.arrayUtils(menus, 'insertAt', ind, replacedObj);
						this.setSelected(dv);
						// recalculate
						this.$node.recalculate();

						if (this.getMethods('onMenuClick') && !this.getData('preventCallback')) {
							this.executeMethod('onMenuClick', value, event, menuElement, originElement, clickedItem);
						}
					}
					else {
						return;
					}
				}

            },

            beforeOpen: function () {
                if (this.getMethods('onBeforeOpen')) {
                    this.executeMethod('onBeforeOpen');
                }
            },

            open: function () {
                if (this.getMethods('onOpen')) {
                    this.executeMethod('onOpen');
                }
            },

            beforeClose: function (element, event) {
                if (this.getMethods('onBeforeClose')) {
                    this.executeMethod('onBeforeClose');
                }
                /*
                    When pressing enter on a menu item, PK will use element.click so event.isTrusted will be false when closed with keyboard on the item
                */
                if (!event.isTrusted) {
                    this.preventClick = true;
                }
            },

            close: function () {
                if (this.getMethods('onClose')) {
                    this.executeMethod('onClose');
                }
            },

            befRender: function () {
                if (this.getData('beforeMenuRender')) {
                    this.executeMethod('beforeMenuRender')
                }
            },

            aftRender: function () {
                if (this.getData('afterMenuRender')) {
                    this.executeMethod('afterMenuRender');
                }
            },

            menuItemOfNavMenuClicked: function (navItemValue, event, element, menuOriginElem, clickedItemAndSubmenu_detail) {
                // when the menu is yielded, navItemValue is a string
                this.reArrangeArrays(navItemValue, element);
                var selected = clickedItemAndSubmenu_detail.element;
                var dv = selected.getAttribute('data-value');
                // this.setSelected(dv);
                // done previouslyly by setSelected: when was firing a click event, but if nav item is given as query the sub enu will again open
                var navItem = this.$node.querySelector('lyte-nav-item[data-value="' + window._lyteUiUtils.escape(navItemValue) + '"]');

                navItem.setAttribute('selected', true);
                if (this.getMethods('onNavItemSubMenuClicked') && !this.getData('preventCallback')) {
                    this.executeMethod('onNavItemSubMenuClicked', this);
                }
            }
        }), arg1);
    }

    findParentMenuIndex(array) {
		var selectedValue = this.getData('ltPropSelected');
		var sys = this.getData('ltPropSystemValue');
		// Find the sub array which is having the ltpropselected value
		for (var i = 0; i < array.length; i++) {
			var element = array[i];
			if (element[sys] === selectedValue) {
				// If selectedValue is found, return the parent index
				return i
			}
			if (element.header_value === selectedValue) {
				return i;
			}
		}
		return -1;
	}

    findParentMenuIndexForSubMenuItem(array) {
		var aux = this.getData('auxArray'),
			sys = this.getData('ltPropSystemValue');
		var subMenuName = this.getData('ltPropSubMenuValue')
		var selectedValue = this.getData('ltPropSelected');
		// Find the sub array which is having the ltpropselected value
		for (var i = 0; i < array.length; i++) {
			var element = array[i];
			if (element[subMenuName]) {
				var subMenu = element[subMenuName];
				for (var j = 0; j < subMenu.length; j++) {
					var subElement = subMenu[j];
					if (subElement[sys] === selectedValue) {
						// If selectedValue is found, return the parent index
						return i
					}
				}
			}
		}
		return -1;
	}

    findMenuItemIndex(subArray) {
		var aux = this.getData('auxArray'),
			sys = this.getData('ltPropSystemValue');
		var selectedValue = this.getData('ltPropSelected');
		var index = subArray.findIndex(item => item[sys] === selectedValue);
		return index;
	}

    swapItems(parentNavItemIndex, menuItemIndex, array) {
		// var navMenu = this.getData('navMenu');
		var subMenuName = this.getData('ltPropSubMenuValue')
		// Get the parent Item
		var oldMenuItem = array[parentNavItemIndex];
		// create new obj without using deepcopy
		var newNavItem = array[parentNavItemIndex][subMenuName][menuItemIndex];
		Object.keys(newNavItem).forEach(key => {
			// Add Properties
			this.$addon.objectUtils(oldMenuItem, "add", key, newNavItem[key]);
			// Object.defineProperty(oldMenuItem, key, {
			// 	value: newNavItem[key],
			// 	writable: true,
			// 	enumerable: true,
			// 	configurable: true
			// });
		});
		return oldMenuItem;
	}

    reArrangeArrays(value, element) {
		var aux = this.getData('auxArray');
		var items = this.getData('ltPropItems');
		var navSelectedItem = value;
		// var navSelectedItem = value[sys];
		var subMenuName = this.getData('ltPropSubMenuValue')
		this.setData('ltPropSelected', navSelectedItem);
		var parentNavItemIndex = this.findParentMenuIndexForSubMenuItem(aux);
		// remove memory reference
		if (parentNavItemIndex !== -1) {
			// Get the parent Item
			var oldMenuItem = aux[parentNavItemIndex];
			this.setSelectedNavItem()
			var temp = oldMenuItem[subMenuName];
			// Get the subArray: the old navMenu
			var menuItemIndex = this.findMenuItemIndex(temp);
			var newNavItem = this.swapItems(parentNavItemIndex, menuItemIndex, aux);
			this.$addon.arrayUtils(aux, 'replaceAt', parentNavItemIndex, newNavItem);

		}
	}

    data(arg1) {
		return Object.assign(super.data({
			/**
			 * @componentProperty {object} ltPropMenu
			 * @default {}
			 * @version 1.0.8
			 * @component lyte-menu
			 */

			'ltPropMenu': prop('object', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-nav', 'menu', {}) }),

			/**
			 * @componentProperty {boolean} ltPropNavYield
			 * @default false
			 * @version 1.0.8
			 *
			 */

			'ltPropNavYield': prop('boolean', { 'default': false }),

			/**
			 * @componentProperty {boolean} ltPropMenuYield
			 * @default false
			 * @version 1.0.8
			 *
			 */

			'ltPropMenuYield': prop('boolean', { 'default': false }),
			'ltPropNavMenuYield': prop('boolean', { 'default': false }),
			/**
			 * @componentProperty {array} ltPropItems
			 * @version 1.0.8
			 * @default []
			 */

			'ltPropItems': prop('array', { 'default': [] }),

			/**
			 * @componentProperty {string} ltPropUserValue
			 * @version 1.0.8
			 */

			'ltPropUserValue': prop('string', { 'default': '' }),

			/**
			 * @componentProperty {string} ltPropSystemValue
			 * @version 1.0.8
			 */

			'ltPropSystemValue': prop('string', { 'default': '' }),


			/**
			 * @componentProperty {string} ltPropMaxWidth
			 * @suffix %
			 * @default 90%
			 * @version 1.0.8
			 */

			'ltPropMaxWidth': prop('string', { 'default': '90%' }),

			/**
			 * @componentProperty {collapse|default} ltPropType
			 * @default default
			 * @version 1.0.8
			 */

			'ltPropType': prop('string', { 'default': '' }),

			/**
			 * @componentProperty {string} ltPropNavMenuClass
			 * @default lyteNavMenuClass
			 * @version 1.0.8
			 */

			'ltPropNavMenuClass': prop('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-nav', 'navMenuClass', 'lyteNavMenuClass') }),

			/**
			 * @componentProperty {string} ltPropMenuIcon
			 * @default lyteNavKebabMenu
			 * @version 1.0.8
			 */


			'ltPropMenuIcon': prop('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-nav', 'menuIcon', 'lyteNavKebabMenu') }),

			/**
			 * @componentProperty {string} ltPropContainerClass
			 * @default lyteNavIconContainer
			 * @version 1.0.8
			 */

			'ltPropContainerClass': prop('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-nav', 'containerClass', 'lyteNavIconContainer') }),


			/**
			 * @componentProperty {string} ltPropClick
			 * @default lyteNavActive
			 */

			'ltPropClick': prop('string', { 'default': window._lyteUiUtils.resolveDefaultValue('lyte-nav', 'click', 'lyteNavActive') }),

			/**
			 * @componentProperty {horizontal|vertical} ltPropAlignment
			 * @default horizontal
			 */

			'ltPropAlignment': prop('string', { 'default': 'horizontal' }),

			/**
			 * @componentProperty {boolean} ltPropArrow
			 * @default true
			 *
			 */

			'ltPropArrow': prop('boolean', { 'default': true }),

			'ltPropSelected': prop('string', { 'default': '' }),

			'ltPropContainerId': prop('string', { 'default': '' }),

			'ltPropMaxHeight': prop('string', { 'default': '90%' }),

			'ltPropArrowEvent': prop('string', { 'default': 'mousehover' }),
			'ltPropScrollIncrement': prop('number', { 'default': 1 }),
			'ltPropAddMargin': prop('boolean', { 'default': false }),
			'ltPropNavMenuYield': prop('boolean', { 'default': false }),
			'ltPropSubMenuValue': prop('string', { 'default': '' }),
			'ltPropBentoIcon': prop('boolean', { 'default': false }),
			'ltPropBentoIconClass': prop('string', { 'default': '' }),
			'menuContent': prop('array', { 'default': [] }),
			'navMenu': prop('object', { 'default': {} }),
			'navMenuQuery': prop('string', { 'default': '#zxsdf' }),
			'auxArray': prop('array', { 'default': [] }),
			'arrowTop': prop('boolean', { 'default': false }),
			'arrowBot': prop('boolean', { 'default': false }),
			'showMenu': prop('boolean', { 'default': false }),
			'selectedMenuItem': prop('object', { 'default': {} }),
			'selectedNavItem': prop('object', { 'default': {} }),
			'copiedItems': prop('array', { 'default': [] })
		}), arg1);
	}

    static observers(arg1) {
        return Object.assign(super.observers({
            /**
             * Recalculate the layout when new items are pushed in
             *
             */

            itemsOb: function () {
                var items = this.getData('ltPropItems');
                var copiedItems = this.deepCopyArray(items)
                this.setData('copiedItems', copiedItems);
                var items = this.getData('copiedItems');
                this.recalculate();
            }.observes('ltPropItems.[]'),

			selObserver: function () {
				var selected = this.getData('ltPropSelected');
				if (selected) {
					this.reArrangeArrays(selected);
					var navItem = this.$node.querySelector('lyte-nav-item[data-value="' + window._lyteUiUtils.escape(selected) + '"]');
					navItem.setAttribute('selected', true);
				}
                this.makeSelection();
            }.observes('ltPropSelected')
        }), arg1);
    }

    _() {
        _;
    }
}

LyteNavComponent._template = "<template tag-name=\"lyte-nav\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropAlignment,'!==','vertical')}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropNavYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"nav\" items=\"{{auxArray}}\" role=\"list\"></lyte-yield> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropBentoIcon}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteNavBento {{ltPropBentoIconClass}}\" onclick=\"{{action('handleBentoClick',this,event)}}\" onmouseover=\"{{action('handleBentoHover',this,event)}}\"> <div class=\"lyteNavCandyboxIcon\"></div> <div class=\"lyteNavCandyboxZIcon\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16\" height=\"16\" viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\"> <g> <path class=\"lyteNavCandyboxZIconPath1\" d=\"M50,50l1.8-4.5l3.5-8.6c1.3-3.3-1.1-6.9-4.6-6.9H9c-3.6,0-6-3.7-4.6-6.9l6.8-16C12,5.2,13.8,4,15.8,4h51.9 c14.1,0,23.7,14.2,18.6,27.2l-8.7,22.3\"></path> <path class=\"lyteNavCandyboxZIconPath2\" d=\"M22.4,46.4l-8.7,22.3C8.6,81.8,18.2,96,32.3,96h51.9c2,0,3.8-1.2,4.6-3.1l6.8-16c1.4-3.3-1-6.9-4.6-6.9H49.4 c-3.5,0-6-3.6-4.6-6.9l3.7-9.3L50,50\"></path> </g> </svg> </div> </div></template></template> </template><template default=\"\"> <template items=\"{{auxArray}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item[ltPropSubMenuValue],'&amp;&amp;',expHandlers(item.type,'===','menu'))}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-nav-item data-value=\"{{item[ltPropSystemValue]}}\" id=\"{{expHandlers('lyteitem','+',item['header_value'])}}\" lyte-shortcut=\"{{lyteUiGetValue(item,'shortcut')}}\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item[ltPropUserValue]}}\" is=\"case\" lc-id=\"lc_id_0\"> {{item[ltPropUserValue]}} </template><template default=\"\"> {{item[\"header\"]}} </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{item[ltPropSystemValue]}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-nav-menu-icon tabindex=\"0\" id=\"lyteicon{{item[ltPropSystemValue]}}\" lt-prop-parent=\"{{item['header_value']}}\"></lyte-nav-menu-icon> </template><template default=\"\"> <lyte-nav-menu-icon tabindex=\"0\" id=\"lyteicon{{item['header_value']}}\" lt-prop-parent=\"{{item['header_value']}}\"></lyte-nav-menu-icon> </template></template> </lyte-nav-item> </template><template default=\"\"> <lyte-nav-item data-value=\"{{item[ltPropSystemValue]}}\" id=\"{{expHandlers('lyteitem','+',item[ltPropSystemValue])}}\" lyte-shortcut=\"{{lyteUiGetValue(item,'shortcut')}}\"> {{item[ltPropUserValue]}} </lyte-nav-item> </template></template> </template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropBentoIcon}}\" is=\"case\" lc-id=\"lc_id_0\"><div class=\"lyteNavBento {{ltPropBentoIconClass}}\" onclick=\"{{action('handleBentoClick',this,event)}}\" onmouseover=\"{{action('handleBentoHover',this,event)}}\"> <div class=\"lyteNavCandyboxIcon\"></div> <div class=\"lyteNavCandyboxZIcon\"> <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16\" height=\"16\" viewBox=\"0 0 100 100\" style=\"enable-background:new 0 0 100 100;\" xml:space=\"preserve\"> <g> <path class=\"lyteNavCandyboxZIconPath1\" d=\"M50,50l1.8-4.5l3.5-8.6c1.3-3.3-1.1-6.9-4.6-6.9H9c-3.6,0-6-3.7-4.6-6.9l6.8-16C12,5.2,13.8,4,15.8,4h51.9 c14.1,0,23.7,14.2,18.6,27.2l-8.7,22.3\"></path> <path class=\"lyteNavCandyboxZIconPath2\" d=\"M22.4,46.4l-8.7,22.3C8.6,81.8,18.2,96,32.3,96h51.9c2,0,3.8-1.2,4.6-3.1l6.8-16c1.4-3.3-1-6.9-4.6-6.9H49.4 c-3.5,0-6-3.6-4.6-6.9l3.7-9.3L50,50\"></path> </g> </svg> </div> </div></template></template> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropType,'===','collapse')}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(menuContent.length,'>',0),'||',showMenu)}}\" is=\"case\" lc-id=\"lc_id_0\"> <span onkeydown=\"{{action('openMenu',event)}}\" class=\"{{ltPropContainerClass}}\" id=\"{{ltPropContainerId}}\" role=\"button\" aria-expanded=\"false\" aria-labelledby=\"{{randomId}}\" tabindex=\"0\"> <span class=\"{{ltPropMenuIcon}}\"></span> </span> <span id=\"{{randomId}}\" class=\"lyteVisuallyHidden\" aria-hidden=\"true\"> {{lyteUiI18n('lyte.nav.more.options')}} </span> </template></template> <lyte-menu on-menu-click=\"{{method('moreOptionsItemSelected')}}\" lt-prop=\"{{stringify(ltPropMenu)}}\" on-before-open=\"{{method('beforeOpen')}}\" on-open=\"{{method('open')}}\" on-before-close=\"{{method('beforeClose')}}\" on-close=\"{{method('close')}}\" before-render=\"{{method('befRender')}}\" after-render=\"{{method('aftRender')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropMenuYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"menu\" items=\"{{menuContent}}\"></lyte-yield> </template><template default=\"\"> <lyte-menu-body class=\"{{ltPropNavMenuClass}}\"> <template items=\"{{menuContent}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(item[ltPropSubMenuValue],'!')}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-menu-item data-value=\"{{item[ltPropSystemValue]}}\" class=\"{{if(expHandlers(index,'==',2),'testItem','')}}\" tabindex=\"0\" lyte-shortcut=\"{{lyteUiGetValue(item,'shortcut')}}\"> <lyte-menu-label>{{item[ltPropUserValue]}} </lyte-menu-label> <lyte-menu-description>{{item[ltPropSystemValue]}} </lyte-menu-description> </lyte-menu-item> </template><template default=\"\"> <lyte-menu-item data-value=\"{{item[ltPropSystemValue]}}\" class=\"lyteMenuAccordionContainer lyteMenuAccordionClosed\" tabindex=\"0\" lyte-shortcut=\"{{lyteUiGetValue(item,'shortcut')}}\"> <lyte-menu-label>{{item[\"header\"]}}</lyte-menu-label> <div class=\"lyteMenuAccordionItem\"> <template items=\"{{item[ltPropSubMenuValue]}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-menu-item data-value=\"{{item[ltPropSystemValue]}}\" tabindex=\"0\"> <lyte-menu-label>{{item[ltPropUserValue]}}</lyte-menu-label> <lyte-menu-description>{{item[ltPropSystemValue]}} </lyte-menu-description> </lyte-menu-item> </template> </div> </lyte-menu-item> </template></template> </template> </lyte-menu-body> </template></template> </template> </lyte-menu> </template></template> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(ltPropType,'===',&quot;collapse&quot;)}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropNavYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"nav\" items=\"{{auxArray}}\" role=\"list\"></lyte-yield> </template><template default=\"\"> <template items=\"{{auxArray}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-nav-item tabindex=\"0\" data-value=\"{{item[ltPropSystemValue]}}\" id=\"item{{item[ltPropSystemValue]}}\" lyte-shortcut=\"{{lyteUiGetValue(item,'shortcut')}}\">{{item[ltPropUserValue]}}</lyte-nav-item> </template> </template></template> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{expHandlers(expHandlers(menuContent.length,'>',0),'||',showMenu)}}\" is=\"case\" lc-id=\"lc_id_0\"> <span class=\"{{ltPropContainerClass}}\" id=\"{{ltPropContainerId}}\" role=\"button\" aria-expanded=\"false\" aria-labelledby=\"{{randomId}}\" tabindex=\"0\"> <span class=\"{{ltPropMenuIcon}}\"></span> </span> <span id=\"{{randomId}}\" class=\"lyteVisuallyHidden\" aria-hidden=\"true\"> {{lyteUiI18n('lyte.nav.more.options')}} </span> </template></template> <lyte-menu lt-prop=\"{{stringify(ltPropMenu)}}\" lt-prop-position=\"right\" on-menu-click=\"{{method('moreOptionsItemSelected')}}\" on-before-open=\"{{method('beforeOpen')}}\" on-open=\"{{method('open')}}\" on-before-close=\"{{method('beforeClose')}}\" on-close=\"{{method('close')}}\" before-render=\"{{method('befRender')}}\" after-render=\"{{method('aftRender')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropMenuYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"menu\" items=\"{{menuContent}}\"></lyte-yield> </template><template default=\"\"> <lyte-menu-body class=\"{{ltPropNavMenuClass}}\"> <template items=\"{{menuContent}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-menu-item data-value=\"{{item[ltPropSystemValue]}}\" lyte-shortcut=\"{{lyteUiGetValue(item,'shortcut')}}\"> <lyte-menu-label> {{item[ltPropUserValue]}} </lyte-menu-label> </lyte-menu-item> </template> </lyte-menu-body> </template></template> </template> </lyte-menu> </template><template default=\"\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropNavYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropArrow}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-arrow style=\"display: inline-block;\"> <i class=\"arrow-up\"></i> </lyte-arrow> </template></template> <lyte-yield class=\"lyteNavDiv\" yield-name=\"nav\"></lyte-yield> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropArrow}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-arrow style=\"display: inline-block;\"> <i class=\"arrow-down\"></i> </lyte-arrow> </template></template> </template></template> </template></template> </template></template> <lyte-menu id=\"lyteNavItemSubMenu\" lt-prop-yield=\"true\" lt-prop-event=\"click\" lt-prop-system-value=\"{{ltPropSystemValue}}\" lt-prop-user-value=\"{{ltPropUserValue}}\" lt-prop-query=\"{{navMenuQuery}}\" lt-prop-position=\"down\" on-menu-click=\"{{method('menuItemOfNavMenuClicked')}}\" on-before-open=\"{{method('beforeSubMenuOpen')}}\" on-open=\"{{method('subMenuOpened')}}\" on-close=\"{{method('subMenuClosed')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template is=\"switch\" l-c=\"true\" _new=\"true\"><template case=\"{{ltPropNavMenuYield}}\" is=\"case\" lc-id=\"lc_id_0\"> <lyte-yield yield-name=\"navmenu\" navobj=\"{{navMenu}}\" selectednavitem=\"{{selectedNavItem}}\" selectedmenuitem=\"{{selectedMenuItem}}\"></lyte-yield> </template><template default=\"\"> <lyte-menu-group> <template items=\"{{navMenu[ltPropSubMenuValue]}}\" item=\"subitem\" index=\"index\" is=\"for\" _new=\"true\"> <lyte-menu-item data-value=\"{{subitem[ltPropSystemValue]}}\" id=\"item{{subitem[ltPropSystemValue]}}\" tabindex=\"0\"> <lyte-menu-label>{{subitem[ltPropUserValue]}}</lyte-menu-label> <lyte-menu-description>{{subitem[ltPropSystemValue]}}</lyte-menu-description> </lyte-menu-item> </template> </lyte-menu-group> </template></template> </lyte-menu-body> </template> </lyte-menu> </template>";;
LyteNavComponent._dynamicNodes = [{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"tX","p":[1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"tX","p":[1],"cn":"default"}]},"dc":{"lc_id_0":{},"default":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"s","p":[1,3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,1],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[0],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1],"hc":true,"trans":true},"default":{"dc":[1],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"a","p":[3],"cn":"lc_id_0"},{"t":"tX","p":[3,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[3],"cn":"lc_id_0"},{"t":"r","p":[3,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"a","p":[1,1],"cn":"default"},{"t":"f","p":[1,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,1,0],"cn":"lc_id_0"},{"t":"cD","p":[1,1],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"tX","p":[1,3,0],"cn":"lc_id_0"},{"t":"cD","p":[1,3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"tX","p":[1,1,0],"cn":"default"},{"t":"cD","p":[1,1],"in":2,"sibl":[1],"cn":"default"},{"t":"a","p":[1,3,1],"cn":"default"},{"t":"f","p":[1,3,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,3,0]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true},"default":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[3],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"f","p":[1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,0]},{"t":"cD","p":[1],"in":0}],"dc":[0],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":3,"sibl":[2],"cn":"lc_id_0"},{"t":"s","p":[3],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"a","p":[1,1],"cn":"lc_id_0"},{"t":"a","p":[3],"cn":"lc_id_0"},{"t":"tX","p":[3,1],"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{}},"hd":true,"co":["lc_id_0"],"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"a","p":[5],"cn":"lc_id_0"},{"t":"r","p":[5,1],"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1],"cn":"default"},{"t":"a","p":[1,1],"cn":"default"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,1]},{"t":"cD","p":[1,1],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0}],"dc":[0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"cD","p":[5],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"s","p":[1],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1],"cn":"lc_id_0"},{"t":"i","p":[3],"in":1,"sibl":[0],"cn":"lc_id_0"},{"t":"s","p":[5],"c":{"lc_id_0":{"dN":[{"t":"cD","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{},"dc":{"lc_id_0":{"dc":[2,1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[3,1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[1,0],"hc":true,"trans":true},"default":{"dc":[0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":2,"sibl":[1]},{"t":"a","p":[3]},{"t":"r","p":[3,1],"dN":[{"t":"s","p":[1,1],"c":{"lc_id_0":{"dN":[{"t":"a","p":[1],"cn":"lc_id_0"},{"t":"i","p":[1],"in":0,"cn":"lc_id_0"}],"cdp":{"t":"a","p":[0]},"dcn":true}},"d":{"dN":[{"t":"a","p":[1,1],"cn":"default"},{"t":"f","p":[1,1],"dN":[{"t":"a","p":[1]},{"t":"tX","p":[1,1,0]},{"t":"cD","p":[1,1],"in":2,"sibl":[1]},{"t":"tX","p":[1,3,0]},{"t":"cD","p":[1,3],"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[2,1,0],"hc":true,"trans":true,"in":1,"sibl":[0],"cn":"default"},{"t":"cD","p":[1],"in":0,"cn":"default"}]},"dc":{"lc_id_0":{"dc":[0],"hc":true,"trans":true},"default":{"dc":[1,0],"hc":true,"trans":true}},"hd":true,"co":["lc_id_0"],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[1],"in":0}],"dc":[1,0],"hc":true,"trans":true,"in":1,"sibl":[0]},{"t":"cD","p":[3],"in":0},{"type":"dc","trans":true,"hc":true,"p":[2,1,0]}];;

LyteNavComponent._observedAttributes = [
    "ltPropMenu",
    "ltPropNavYield",
    "ltPropMenuYield",
    "ltPropNavMenuYield",
    "ltPropItems",
    "ltPropUserValue",
    "ltPropSystemValue",
    "ltPropMaxWidth",
    "ltPropType",
    "ltPropNavMenuClass",
    "ltPropMenuIcon",
    "ltPropContainerClass",
    "ltPropClick",
    "ltPropAlignment",
    "ltPropArrow",
    "ltPropSelected",
    "ltPropContainerId",
    "ltPropMaxHeight",
    "ltPropArrowEvent",
    "ltPropScrollIncrement",
    "ltPropAddMargin",
    "ltPropSubMenuValue",
    "ltPropBentoIcon",
    "ltPropBentoIconClass",
    "menuContent",
    "navMenu",
    "navMenuQuery",
    "auxArray",
    "arrowTop",
    "arrowBot",
    "showMenu",
    "selectedMenuItem",
    "selectedNavItem",
    "copiedItems"
];

if (!window._lyteUiUtils.registeredCustomElements['lyte-nav-item']) {
    window._lyteUiUtils.registeredCustomElements['lyte-nav-item'] = true;

    class LyteNavItemCustomElements extends LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            var lyteNode = this.$node;
            if (!lyteNode.prevent) {

				var parent = lyteNode, component, align, div = lyteNode;

				while (
					parent &&
					parent.tagName != 'LYTE-NAV'
					&& parent.tagName != 'HTML'
				) {
					parent = parent.parentElement
				}

				if ( !parent || parent.tagName == 'HTML' ) {
					return;
				}

				component = parent.component;
				align = component.getData('ltPropAlignment');

				if (component.enableAria) {
					lyteNode.setAttribute('role', 'listitem');
				}

				if (align === 'vertical') {
					while (div && !div.classList.contains('lyteNavDiv')) {
						div = div.parentElement
					}
				}

				$L.fastdom.measure(function () {
					var offsetTop, newElemOffset;

					if (component && !component.$node) {
						return;
					}

					if (
						lyteNode.hasAttribute('selected')
						&& lyteNode.getAttribute('selected')
					) {
						if (div && align === 'vertical') {
							offsetTop = lyteNode.offsetTop;
							div.scrollTop = offsetTop
							if (offsetTop != 0) {
								component.setData('arrowTop', true);
							}
							component.setData('arrowBot', false);
						}

					}
					else if (div && align === 'vertical') {
						newElemOffset = lyteNode.offsetTop;
						if (newElemOffset + lyteNode.getBoundingClientRect().height > div.getBoundingClientRect().height + div.scrollTop) {
							component.setData('arrowBot', true)
						}
					}
				}, lyteNode)
				var icon = lyteNode.querySelector('lyte-nav-menu-icon');

				if (icon) {
					var id = lyteNode.getAttribute('id');
					var query = '#' + id
					// var query = 'lyte-nav-menu-icon#' + id
					var queryList = component.getData('navMenuQuery');
					if (queryList) {
						if (!(queryList.includes(query))) {
							queryList = queryList + ',' + query
						}
						component.setData('navMenuQuery', queryList);
					}
					else {
						// If not set, it makes an error in closestFind of lyte-menu
						component.setData('navMenuQuery', query)
					}
					// component.setData('navMenuQuery', query)
				}

				if (!lyteNode._eventRegistered) {
					lyteNode._eventRegistered = true;
					lyteNode.addEventListener('click', function (event) {
						if (component.getMethods('onBeforeItemSelected')) {
							var returnValue = component.executeMethod('onBeforeItemSelected', event, lyteNode, component);
							if (returnValue === false) {
								return returnValue;
							}
						}
						var dv = lyteNode.getAttribute('data-value');
						if (dv) {
							var target = event.target
							var targetTagName = target.tagName;
							if (targetTagName !== 'LYTE-NAV-MENU-ICON') {
								lyteNode.setAttribute('selected', true);
								component.setSelectedNavItem();
								if (component.getMethods('onItemSelected') && !component.getData('preventCallback')) {
									component.executeMethod('onItemSelected', lyteNode, component);
								}
							}
						}
						else {
							var icon = lyteNode.querySelector('lyte-nav-menu-icon');
							if (icon) {
								var target = event.target
								var targetTagName = target.tagName;
								var parentValue = icon.getAttribute('lt-prop-parent');
								var aux = component.getData('auxArray'), user = component.getData('ltPropUserValue'),
									sys = component.getData('ltPropSystemValue');
								// find out the submenu contents
								var navTemp = aux.find(item => item.header_value === parentValue);
								component.setData('navMenu', navTemp);
							}
							else {
								lyteNode.setAttribute('selected', true);
								if (component.getMethods('onItemSelected') && !component.getData('preventCallback')) {
									component.executeMethod('onItemSelected', lyteNode, component);
								}
							}
						}
					}.bind(lyteNode));
				}
			}
        }

        disconnectedCallback() {
            var lyteNode = this.$node;
            var curValue = lyteNode.getAttribute('lyte-shortcut');
            if (curValue) {
				lyteNode.setAttribute('lyte-shortcut', JSON.stringify({}));
			}
        }

        static get observedAttributes() {
            return ['selected', 'lyte-shortcut'];
        }

        /**
		 * The attrite changed callback will append classes to the lyte-nav-item
		 * It is fired when an element is appened to the DOM in chrome/opera/ff and when it is appended to any disconnected node in safari
		 *
		 */

        attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
            var lyteNode = this.$node;
            if (!lyteNode.prevent) {
				var parent = lyteNode, component, click, prevSelected, val, dv;

				if (attributeName === 'lyte-shortcut') {
					if (typeof window.shortcut === 'function') {
						if (!newValue) {
							return;
						}
						newValue = JSON.parse(newValue);
						oldValue = oldValue ? JSON.parse(oldValue) : {};
						window.shortcut.push({
							newKey: newValue.key,
							type: newValue.type,
							wait: newValue.wait,
							oldKey: oldValue.key,
							value: lyteNode
						});
					}
				}
				else if (attributeName == 'selected' && newValue && newValue !== 'false') {
					val = lyteNode.getAttribute('selected');

					while (
						parent
						&& parent.tagName != 'LYTE-NAV'
						&& parent.tagName != 'HTML'
					) {
						parent = parent.parentElement;
					}

					if (!parent || parent.tagName == 'HTML') {
						return;
					}

					component = parent.component;
					click = component.getData('ltPropClick');
					prevSelected = parent.querySelector('.' + click);
					if (prevSelected && prevSelected != lyteNode) {
						prevSelected.setAttribute('selected', '');
					}

					if (val) {
						lyteNode.classList.add(click);

						dv = lyteNode.getAttribute('data-value');

						if (dv) {
							component.setData('preventSel', true);
							component.setData('ltPropSelected', dv);
							component.setData('preventSel', false);
						}
					}
				}
				else if (attributeName == 'selected') {
					parent = lyteNode;
					while (
						parent
						&& parent.tagName != 'LYTE-NAV'
						&& parent.tagName != 'HTML'
					) {
						parent = parent.parentElement;
					}

					if (!parent || parent.tagName == 'HTML') {
						return;
					}

					component = parent.component;
					click = component.getData('ltPropClick');
					lyteNode.classList.remove(click);

					if (!component.$node.querySelector('lyte-nav-item[selected="true"]')) {
						component.setData('preventSel', true);
						component.setData('ltPropSelected', '');
						component.setData('preventSel', false);
					}
				}
			}
        }

        _() {
            _;
        }
    }

    LyteNavItemCustomElements.options = {clone : {allCallbacks : false}};

    LyteNavItemCustomElements.register('lyte-nav-item');
}


window._lyteUiNav = {
	resize: function () {
		var navs = document.querySelectorAll('lyte-nav'),
			length = navs.length, i = 0, nav, comp;

		for (; i < navs.length; i++) {
			nav = navs[i];
			comp = nav.component;

			if (comp && comp.getData('ltPropType') === 'collapse') {
				comp.recalculate();
			}
		}
	}
};

window.addEventListener('resize', function (event) {
	var id = window._lyteUiUtils.lyteNavId,
		isMobile = window._lyteUiUtils.isMobile,
		width = window._lyteUiUtils.nav_innerWidth, cur;

	if (isMobile && width) {
		// Comparing the layout viewport widths to check if the orientation has changed
		cur = document.documentElement.clientWidth;

		if (cur !== width) {
			window._lyteUiUtils.nav_innerWidth = cur;
			_lyteUiNav.resize();
		}
	}
	else if (!isMobile) {
		window.clearTimeout(id);

		// Debounce
		window._lyteUiUtils.lyteNavId = window.setTimeout(function () {
			_lyteUiNav.resize();
		}, 16 /* yikes */);
	}


});

/**
 * @syntax nonYielded
 * <lyte-nav lt-prop-items='[ { "name": "Tab 1", "value": "1" }, { "name": "Tab 2", "value": "2" } ]' lt-prop-user-value="name" lt-prop-system-value="value"></lyte-nav>
 *
 */

// New codes stats here
if (!window._lyteUiUtils.registeredCustomElements['lyte-nav-menu-icon']) {
    window._lyteUiUtils.registeredCustomElements['lyte-nav-menu-icon'] = true;

    class LyteNavMenuIconCustomElements extends LyteUiComponentComponentRegistry.CustomElements {
        lookups() {
            return [{
                component: LyteUiComponentComponentRegistry
            }];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            var lyteNode = this.$node;

            var parent = lyteNode, component, align, div = lyteNode, parentItem = lyteNode;

            while (
				parent.tagName != 'LYTE-NAV'
				&& parent.tagName != 'HTML'
			) {
				parent = parent.parentElement
			}
            if (parent.tagName == 'HTML') {
				return;
			}
            component = parent.component;

            while (
				parentItem.tagName != 'LYTE-NAV-ITEM'
				&& parentItem.tagName != 'HTML'
			) {
				parentItem = parentItem.parentElement
			}
            if (parentItem.tagName == 'HTML') {
				return;
			}

            if (!lyteNode._eventRegistered) {
				lyteNode._eventRegistered = true;
				lyteNode.addEventListener('click',
					function (event) {
						var parentValue = lyteNode.getAttribute('lt-prop-parent');
						var aux = component.getData('auxArray'), user = component.getData('ltPropUserValue'),
							sys = component.getData('ltPropSystemValue');
						// find out the submenu contents
						var navTemp = aux.find(item => item.header_value === parentValue);
						component.setData('navMenu', navTemp);
					}.bind(lyteNode));
			}
        }

        disconnectedCallback() {
		}

        _() {
            _;
        }
    }

    LyteNavMenuIconCustomElements.options = {clone : {allCallbacks : false}};

    LyteNavMenuIconCustomElements.register('lyte-nav-menu-icon');
}
export { LyteNavComponent };

LyteNavComponent.register("lyte-nav", {
    hash: "LyteNavComponent_7",
    refHash: "C_lyte-ui-component_@zoho/lyte-ui-component_2"
});