/**
 * A cross browser label instance with support for rich HTML and text labels.
 *
 * Text labels supports ellipsis to reduce the text width.
 *
 * The mode can be changed through the method {@link #setRich}
 * which accepts a boolean value. The default mode is "text" which is
 * a good choice because it has a better performance.
 */
qx.Class.define("qxm.html.Input", {
    include: [qxm.html.MStyle],
    extend: qx.html.Input,
    members: {

    }
});
