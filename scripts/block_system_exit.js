// Block calls to `System.exit()` in Java and the native `exit()` function in C/C++ to prevent the app from closing
Java.perform(function () {
    // Hook Java System.exit()
    var System = Java.use('java.lang.System');
    System.exit.implementation = function (code) {
        console.log('[!] Blocked System.exit(' + code + ')');
    };

    // Hook native Java method
    var NativeLib = Java.use('com.yourApp.security.NativeLib');
    NativeLib.nativeCheck.implementation = function (input) {
        console.log('[*] Intercepted nativeCheck with input: ' + input);
        return true;
    };
});

// Hook native C/C++ exit() function
Interceptor.attach(Module.findExportByName(null, 'exit'), {
    onEnter: function (args) {
        console.log('[!] exit() blocked with code: ' + args[0].toInt32());
        args[0] = ptr(0);
    }
});
