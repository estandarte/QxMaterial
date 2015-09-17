/**
 * A vertical box layout.
 *
 * The vertical box layout lays out widgets in a vertical column, from top
 * to bottom.
 *
 * *Features*
 *
 * * Minimum and maximum dimensions
 * * Prioritized growing/shrinking (flex)
 * * Margins (with vertical collapsing)
 * * Auto sizing (ignoring percent values)
 * * Percent heights (not relevant for size hint)
 * * Alignment (child property {@link qx.ui.core.LayoutItem#alignY} is ignored)
 * * Vertical spacing (collapsed with margins)
 * * Reversed children layout (from last to first)
 * * Horizontal children stretching (respecting size hints)
 *
 * *Item Properties*
 *
 * <ul>
 * <li><strong>flex</strong> <em>(Integer)</em>: The flexibility of a layout item determines how the container
 *   distributes remaining empty space among its children. If items are made
 *   flexible, they can grow or shrink accordingly. Their relative flex values
 *   determine how the items are being resized, i.e. the larger the flex ratio
 *   of two items, the larger the resizing of the first item compared to the
 *   second.
 *
 *   If there is only one flex item in a layout container, its actual flex
 *   value is not relevant. To disallow items to become flexible, set the
 *   flex value to zero.
 * </li>
 * <li><strong>height</strong> <em>(String)</em>: Allows to define a percent
 *   height for the item. The height in percent, if specified, is used instead
 *   of the height defined by the size hint. The minimum and maximum height still
 *   takes care of the element's limits. It has no influence on the layout's
 *   size hint. Percent values are mostly useful for widgets which are sized by
 *   the outer hierarchy.
 * </li>
 * </ul>
 *
 * *Example*
 *
 * Here is a little example of how to use the vertical box layout.
 *
 * <pre class="javascript">
 * var layout = new qx.ui.layout.VBox();
 * layout.setSpacing(4); // apply spacing
 *
 * var container = new qx.ui.container.Composite(layout);
 *
 * container.add(new qx.ui.core.Widget());
 * container.add(new qx.ui.core.Widget());
 * container.add(new qx.ui.core.Widget());
 * </pre>
 *
 * *External Documentation*
 *
 * See <a href='http://manual.qooxdoo.org/${qxversion}/pages/layout/box.html'>extended documentation</a>
 * and links to demos for this layout.
 *
 */
qx.Class.define("qxm.ui.layout.VBox", {
    extend: qx.ui.layout.VBox,
    members: {

        // overridden
        renderLayout: function(availWidth, availHeight, padding) {
            console.log('I\'m Here!');
            this.__widget.addClass('layout_vbox');
            // // Rebuild flex/height caches
            // if (this._invalidChildrenCache) {
            //     this.__rebuildCache();
            // }
            //
            // // Cache children
            // var children = this.__children;
            // var length = children.length;
            // var util = qx.ui.layout.Util;
            //
            //
            // // Compute gaps
            // var spacing = this.getSpacing();
            // var separator = this.getSeparator();
            // if (separator) {
            //     var gaps = util.computeVerticalSeparatorGaps(children, spacing, separator);
            // } else {
            //     var gaps = util.computeVerticalGaps(children, spacing, true);
            // }
            //
            //
            // // First run to cache children data and compute allocated height
            // var i, child, height, percent;
            // var heights = [];
            // var allocatedHeight = gaps;
            //
            // for (i = 0; i < length; i += 1) {
            //     percent = this.__heights[i];
            //
            //     height = percent != null ?
            //         Math.floor((availHeight - gaps) * percent) :
            //         children[i].getSizeHint().height;
            //
            //     heights.push(height);
            //     allocatedHeight += height;
            // }
            //
            //
            // // Flex support (growing/shrinking)
            // if (this.__enableFlex && allocatedHeight != availHeight) {
            //     var flexibles = {};
            //     var flex, offset;
            //
            //     for (i = 0; i < length; i += 1) {
            //         flex = this.__flexs[i];
            //
            //         if (flex > 0) {
            //             hint = children[i].getSizeHint();
            //
            //             flexibles[i] = {
            //                 min: hint.minHeight,
            //                 value: heights[i],
            //                 max: hint.maxHeight,
            //                 flex: flex
            //             };
            //         }
            //     }
            //
            //     var result = util.computeFlexOffsets(flexibles, availHeight, allocatedHeight);
            //
            //     for (i in result) {
            //         offset = result[i].offset;
            //
            //         heights[i] += offset;
            //         allocatedHeight += offset;
            //     }
            // }
            //
            //
            // // Start with top coordinate
            // var top = children[0].getMarginTop();
            //
            // // Alignment support
            // if (allocatedHeight < availHeight && this.getAlignY() != "top") {
            //     top = availHeight - allocatedHeight;
            //
            //     if (this.getAlignY() === "middle") {
            //         top = Math.round(top / 2);
            //     }
            // }
            //
            //
            // // Layouting children
            // var hint, left, width, height, marginBottom, marginLeft, marginRight;
            //
            // // Pre configure separators
            // this._clearSeparators();
            //
            // // Compute separator height
            // if (separator) {
            //     var separatorInsets = qx.theme.manager.Decoration.getInstance().resolve(separator).getInsets();
            //     var separatorHeight = separatorInsets.top + separatorInsets.bottom;
            // }
            //
            // // Render children and separators
            // for (i = 0; i < length; i += 1) {
            //     child = children[i];
            //     height = heights[i];
            //     hint = child.getSizeHint();
            //
            //     marginLeft = child.getMarginLeft();
            //     marginRight = child.getMarginRight();
            //
            //     // Find usable width
            //     width = Math.max(hint.minWidth, Math.min(availWidth - marginLeft - marginRight, hint.maxWidth));
            //
            //     // Respect horizontal alignment
            //     left = util.computeHorizontalAlignOffset(child.getAlignX() || this.getAlignX(), width, availWidth, marginLeft, marginRight);
            //
            //     // Add collapsed margin
            //     if (i > 0) {
            //         // Whether a separator has been configured
            //         if (separator) {
            //             // add margin of last child and spacing
            //             top += marginBottom + spacing;
            //
            //             // then render the separator at this position
            //             this._renderSeparator(separator, {
            //                 top: top + padding.top,
            //                 left: padding.left,
            //                 height: separatorHeight,
            //                 width: availWidth
            //             });
            //
            //             // and finally add the size of the separator, the spacing (again) and the top margin
            //             top += separatorHeight + spacing + child.getMarginTop();
            //         } else {
            //             // Support margin collapsing when no separator is defined
            //             top += util.collapseMargins(spacing, marginBottom, child.getMarginTop());
            //         }
            //     }
            //
            //     // Layout child
            //     child.renderLayout(left + padding.left, top + padding.top, width, height);
            //
            //     // Add height
            //     top += height;
            //
            //     // Remember bottom margin (for collapsing)
            //     marginBottom = child.getMarginBottom();
        }
    }
});
