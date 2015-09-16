/**
 * A cross browser label instance with support for rich HTML and text labels.
 *
 * Text labels supports ellipsis to reduce the text width.
 *
 * The mode can be changed through the method {@link #setRich}
 * which accepts a boolean value. The default mode is "text" which is
 * a good choice because it has a better performance.
 */
qx.Mixin.define("qxm.html.MStyle", {
    members: {

        /**
         * Internal helper to generate the DOM element
         *
         * @return {Element} DOM element
         */
        _createDomElement: function() {
            var element = qx.dom.Element.create(this.__nodeName);
            // componentHandler.upgradeDom();
            // console.log(element);
            // componentHandler.upgradeElement(element);
            return element;
        },

        // overridden
        // be sure that style attributes are merged and not overwritten
        _copyData: function(fromMarkup) {
            var elem = this.__element;

            // Copy attributes
            var data = this.__attribValues;
            if (data) {
                var Attribute = qx.bom.element.Attribute;

                for (var key in data) {
                    Attribute.set(elem, key, data[key]);
                }
            }

            // Copy properties
            var data = this.__propertyValues;
            if (data) {
                for (var key in data) {
                    this._applyProperty(key, data[key]);
                }
            }

            // Attach events
            var data = this.__eventValues;
            if (data) {
                // Import listeners
                qx.event.Registration.getManager(elem).importListeners(elem, data);

                // Cleanup event map
                // Events are directly attached through event manager
                // after initial creation. This differs from the
                // handling of styles and attributes where queuing happens
                // through the complete runtime of the application.
                delete this.__eventValues;
            }
        }

    }
});
