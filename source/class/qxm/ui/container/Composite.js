/**
 * The Composite is a generic container widget.
 *
 * It exposes all methods to set layouts and to manage child widgets
 * as public methods. You must configure this widget with a layout manager to
 * define the way the widget's children are positioned.
 *
 * *Example*
 *
 * Here is a little example of how to use the widget.
 *
 * <pre class='javascript'>
 *   // create the composite
 *   var composite = new qx.ui.container.Composite()
 *
 *   // configure it with a horizontal box layout with a spacing of '5'
 *   composite.setLayout(new qx.ui.layout.HBox(5));
 *
 *   // add some children
 *   composite.add(new qx.ui.basic.Label("Name: "));
 *   composite.add(new qx.ui.form.TextField());
 *
 *   this.getRoot().add(composite);
 * </pre>
 *
 * This example horizontally groups a label and text field by using a
 * Composite configured with a horizontal box layout as a container.
 *
 * *External Documentation*
 *
 * <a href='http://manual.qooxdoo.org/${qxversion}/pages/widget/composite.html' target='_blank'>
 * Documentation of this widget in the qooxdoo manual.</a>
 */
qx.Class.define("qxm.ui.container.Composite", {
    extend: qx.ui.container.Composite,
    include: [qxm.MMaterial],
    properties: {
        'class': {
            check: "String",
            init: ''
        }
    },
    members: {}
});
