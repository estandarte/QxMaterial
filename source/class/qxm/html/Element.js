/**
 * A cross browser label instance with support for rich HTML and text labels.
 *
 * Text labels supports ellipsis to reduce the text width.
 *
 * The mode can be changed through the method {@link #setRich}
 * which accepts a boolean value. The default mode is "text" which is
 * a good choice because it has a better performance.
 */
qx.Class.define("qxm.html.Element", {
    include: [qxm.html.MStyle],
    extend: qx.html.Element,
    members: {

        // /**
        //  * Internal helper to generate the DOM element
        //  *
        //  * @return {Element} DOM element
        //  */
        // _createDomElement: function() {
        //     var element = qx.dom.Element.create(this.__nodeName);
        //     // componentHandler.upgradeDom();
        //     console.log(element);
        //     componentHandler.upgradeElement(element);
        //     return element;
        // }

    }
});
