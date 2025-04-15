Java.perform(function () {
    var LoginClass = Java.use("com.example.auth.LoginManager");

    LoginClass.isUserAuthenticated.implementation = function () {
        console.log("[+] Forcing OK authentication");
        return true;
    };
});