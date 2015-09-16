/**
 * This is the default main application class of QxMaterial.
 *
 * @asset(qxm/*)
 */
qx.Class.define("qxm.Application", {
    extend: qx.application.Standalone,
    members: {
        /**
         * This method contains the initial application code and gets called
         * during startup of the application
         *
         * @lint ignoreDeprecated(alert)
         */
        main: function() {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Environment.get("qx.debug")) {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
            }

        },
        finalize: function() {
            this.base(arguments);
            console.log('Has finished!');
            componentHandler.upgradeDom();
        },
        render: function() {
            this.base(arguments);
            console.log('Has finished!');
            componentHandler.upgradeDom();
        }
    }
});
