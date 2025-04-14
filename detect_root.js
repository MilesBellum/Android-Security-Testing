Java.perform(function () {
    var RootChecker = Java.use('java.io.File');
    RootChecker.exists.implementation = function () {
        var path = this.getAbsolutePath();
        if (path.indexOf("su") > -1 || path.indexOf("magisk") > -1) {
            console.log("[+] Blocked root check: " + path);
            return false;
        }
        return this.exists.call(this);
    };
});