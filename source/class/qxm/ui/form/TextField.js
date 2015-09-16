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
qx.Class.define("qxm.ui.form.TextField", {
    extend: qx.ui.form.TextField,
    include: [qxm.MMaterial],
    properties: {
        'class': {
            check: 'String',
            init: 'mdl-textfield__input'
        }
    },
    // /**
    //  * @param label {String} label of the atom
    //  * @param icon {String?null} Icon URL of the atom
    //  * @param command {qx.ui.command.Command?null} Command instance to connect with
    //  */
    // construct: function(label, icon, command) {
    //     this.base(arguments, label, icon, command);
    // },
    members: {
        //qxm.html.Input
        /**
         * Creates the input element. Derived classes may override this
         * method, to create different input elements.
         *
         * @return {qxm.html.Input} a new input element.
         */
        _createInputElement: function() {
            return new qxm.html.Input("text");
        }

    }
});
