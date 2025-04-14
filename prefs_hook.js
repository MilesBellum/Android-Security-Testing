Java.perform(function () {
    var prefs = Java.use("android.app.SharedPreferencesImpl");

    prefs.getBoolean.overload('java.lang.String', 'boolean').implementation = function (key, defValue) {
        console.log("[*] getBoolean key: " + key);
        if (key === "premium_enabled") {
            console.log("[+] Forcing premium mode!");
            return true;
        }
        return this.getBoolean(key, defValue);
    };
});