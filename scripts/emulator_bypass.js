// Hides emulator indicators
Java.perform(function () {
    var Build = Java.use("android.os.Build");

    Build.FINGERPRINT.value = "generic";
    Build.MODEL.value = "Pixel 9";
    Build.MANUFACTURER.value = "Google";
    Build.BRAND.value = "google";
    Build.DEVICE.value = "raven";
    Build.PRODUCT.value = "raven";

    console.log("[+] Camouflaged emulator");
});
