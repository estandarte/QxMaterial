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
qx.Class.define("qxm.ui.form.MTextField", {
    extend: qx.ui.core.Widget,
    include: [qxm.MMaterial],
    include: [
        qx.ui.core.MRemoteChildrenHandling,
        qx.ui.form.MForm,
        qxm.MMaterial
    ],
    implement: [
        qx.ui.form.IForm
    ],
    events: {
        /** Whenever the value is changed this event is fired
         *
         *  Event data: The new text value of the field.
         */
        "changeValue": "qx.event.type.Data"
    },

    properties: {
        'class': {
            check: 'String',
            init: 'mdl-textfield mdl-js-textfield'
        },
        label: {
            check: 'String',
            init: '',
            apply: '_applyLabel'
        }
    },

    construct: function() {
        this.base(arguments);

        // set the layout
        var layout = new qx.ui.layout.HBox();
        this._setLayout(layout);
        layout.setAlignY("middle");

        // text field
        var textField = this._createChildControl("textfield");
        var label = this._createChildControl("label");

        // forward the focusin and focusout events to the textfield. The textfield
        // is not focusable so the events need to be forwarded manually.
        this.addListener("focusin", function(e) {
            textField.fireNonBubblingEvent("focusin", qx.event.type.Focus);
            textField.setTextSelection(0, 0);
        }, this);

        this.addListener("focusout", function(e) {
            textField.fireNonBubblingEvent("focusout", qx.event.type.Focus);
        }, this);
        componentHandler.upgradeDom();
    },
    members: {
        _applyLabel: function(value) {
            this.getChildControl("label").setValue(value);
        },
        /**
         * This method sets the date, which will be formatted according to
         * #dateFormat to the date field. It will also select the date in the
         * calendar popup.
         *
         * @param value {Date} The date to set.
         */
        setValue: function(value) {
            // set the date to the textfield
            var textField = this.getChildControl("textfield");
            textField.setValue(value);
        },
        /**
         * Returns the current set date, parsed from the input-field
         * corresponding to the {@link #dateFormat}.
         * If the given text could not be parsed, <code>null</code> will be returned.
         *
         * @return {Date} The currently set date.
         */
        getValue: function() {
            // get the value of the textfield
            return this.getChildControl("textfield").getValue();
        },

        /**
         * Resets the DateField. The textfield will be empty and the datechooser
         * will also have no selection.
         */
        resetValue: function() {
            // set the date to the textfield
            var textField = this.getChildControl("textfield");
            textField.setValue("");
        },

        /**
         * Reacts on value changes of the text field.
         *
         * @param e {qx.event.type.Data} Change event
         */
        _onTextFieldChangeValue: function(e) {
            // Fire event
            this.fireDataEvent("changeValue", this.getValue());
        },
        /**
         * Creates the content element. The style properties
         * position and zIndex are modified from the Widget
         * core.
         *
         * This function may be overridden to customize a class
         * content.
         *
         * @return {qx.html.Element} The widget's content element
         */
        _createContentElement: function() {
            var element = new qxm.html.Element("div", {
                overflowX: "hidden",
                overflowY: "hidden"
            });
            return element;
        },
        _createChildControlImpl: function(id, hash) {
            var control;

            switch (id) {
                case "textfield":
                    control = new qxm.ui.form.TextField();
                    control.setFocusable(false);
                    control.addState("inner");
                    control.addListener("changeValue", this._onTextFieldChangeValue, this);
                    this._add(control, {
                        flex: 1
                    });
                    break;
                case "label":
                    control = new qxm.ui.basic.Label();
                    control.set({
                        focusable: false,
                        'class': 'mdl-textfield__label'
                    });
                    control.addState("inner");
                    this._add(control, {
                        flex: 1
                    });
                    break;

            }

            return control || this.base(arguments, id);
        }
    }
});
