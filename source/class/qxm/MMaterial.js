qx.Mixin.define("qxm.MMaterial", {
    properties: {},
    members: {
        addClass: function(pclass) {
            console.log('Adding class: ' + pclass);
            this.setClass(this.getClass() + ' ' + pclass);
            this.syncAppearance();
        },
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
            console.log('I\'m Here!');
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

            if (this.__layoutManager && this.hasLayoutChildren()) {
                var inset = this.getInsets();
                var innerWidth = width - inset.left - inset.right;
                var innerHeight = height - inset.top - inset.bottom;

                var decorator = this.getDecorator();
                var decoratorPadding = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };
                if (decorator) {
                    decorator = qx.theme.manager.Decoration.getInstance().resolve(decorator);
                    decoratorPadding = decorator.getPadding();
                }

                var padding = {
                    top: this.getPaddingTop() + decoratorPadding.top,
                    right: this.getPaddingRight() + decoratorPadding.right,
                    bottom: this.getPaddingBottom() + decoratorPadding.bottom,
                    left: this.getPaddingLeft() + decoratorPadding.left
                };

                this.__layoutManager.renderLayout(innerWidth, innerHeight, padding);
            } else if (this.hasLayoutChildren()) {
                throw new Error("At least one child in control " +
                    this._findTopControl() +
                    " requires a layout, but no one was defined!");
            }
            // Fire events
            if (this.hasListener("move")) {
                this.fireDataEvent("move", this.getBounds());
            }
        }
    }
})
