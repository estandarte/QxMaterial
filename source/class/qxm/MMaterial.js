qx.Mixin.define("qxm.MMaterial", {
    properties: {},
    members: {
        syncAppearance: function() {
            this.getContentElement().removeClass(this.getContentElement().getAttribute('class'));
            this.getContentElement().addClass(this.getClass());
        },
        _applyDimension: function() {
            // qx.ui.core.queue.Layout.add(this);
        },


        // property apply
        _applyStretching: function() {
            // qx.ui.core.queue.Layout.add(this);
        },
        // property apply
        _applyFont: function(value, old) {
            this.__font = qx.theme.manager.Font.getInstance().resolve(value);
            // empty template
        },

        /** @overridden */
        renderLayout: function(left, top, width, height) {
            var changes = {
                position: true
            };
            var pixel = "px";

            var contentStyles = {};
            // Move content to new position
            if (changes.position) {
                contentStyles.left = left + pixel;
                contentStyles.top = top + pixel;
            }


            if (Object.keys(contentStyles).length > 0) {
                var content = this.getContentElement();
                content.setStyles(contentStyles);
            }
            // Fire events
            if (this.hasListener("move")) {
                this.fireDataEvent("move", this.getBounds());
            }
        }
    }
})
