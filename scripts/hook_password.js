// Hook to `checkPassword` method to monitor passwords
Java.perform(function () {
    var LoginClass = Java.use("com.example.auth.AuthManager");

    LoginClass.checkPassword.implementation = function (password) {
        console.log("[*] checkPassword called with: " + password);
        var result = this.checkPassword(password);
        console.log("[*] Result: " + result);
        return result;
    };
});
