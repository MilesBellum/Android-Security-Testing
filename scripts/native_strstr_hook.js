Interceptor.attach(Module.findExportByName("libc.so", "strstr"), {
    onEnter: function (args) {
        var haystack = Memory.readCString(args[0]);
        var needle = Memory.readCString(args[1]);
        console.log("strstr called: " + haystack + " , " + needle);
    },
    onLeave: function (retval) {
        // retval.replace(ptr("0x0")); // To force it not to find a match
    }
});