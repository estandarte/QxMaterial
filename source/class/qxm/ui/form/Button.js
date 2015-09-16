/**
 * A Button widget which supports various states and allows it to be used
 * via the mouse, touch, pen and the keyboard.
 *
 * If the user presses the button by clicking on it, or the <code>Enter</code> or
 * <code>Space</code> keys, the button fires an {@link qx.ui.core.MExecutable#execute} event.
 *
 * If the {@link qx.ui.core.MExecutable#command} property is set, the
 * command is executed as well.
 *
 * *Example*
 *
 * Here is a little example of how to use the widget.
 *
 * <pre class='javascript'>
 *   var button = new qx.ui.form.Button("Hello World");
 *
 *   button.addListener("execute", function(e) {
 *     alert("Button was clicked");
 *   }, this);
 *
 *   this.getRoot().add(button);
 * </pre>
 *
 * This example creates a button with the label "Hello World" and attaches an
 * event listener to the {@link #execute} event.
 *
 */
qx.Class.define("qxm.ui.form.Button", {
    extend: qx.ui.form.Button,
    include: [qxm.MMaterial],
    properties: {
        'class': {
            check: 'String',
            init: 'mdl-button mdl-js-button mdl-button--raised'
        }
    },
    /**
     * @param label {String} label of the atom
     * @param icon {String?null} Icon URL of the atom
     * @param command {qx.ui.command.Command?null} Command instance to connect with
     */
    construct: function(label, icon, command) {
        this.base(arguments, label, icon, command);
    },
    members: {
        _applyLabel: function(value, old) {
            // Sync with content element
            this.getContentElement().setValue(value);

            // Mark text size cache as invalid
            this.__invalidContentSize = true;

            // Update layout
            qx.ui.core.queue.Layout.add(this);
        },
        _createContentElement: function() {
            return new qxm.html.Label;
        },
        // overridden
        _createChildControlImpl: function(id, hash) {
            var control;

            switch (id) {
                case "label":
                    control = this;
                    control.setAnonymous(true);
                    control.setRich(this.getRich());
                    // this._add(control);
                    // if (this.getLabel() == null || this.getShow() === "icon") {
                    //     control.exclude();
                    // }
                    break;

                case "icon":
                    control = new qx.ui.basic.Image(this.getIcon());
                    control.setAnonymous(true);
                    this._addAt(control, 0);
                    if (this.getIcon() == null || this.getShow() === "label") {
                        control.exclude();
                    }
                    break;
            }

            return control || this.base(arguments, id);
        }
    }
});
