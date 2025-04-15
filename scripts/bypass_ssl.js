// Bypass SSL pinning in applications using OkHttp 
Java.perform(function () {
    var CertificatePinner = Java.use('okhttp3.CertificatePinner');
    CertificatePinner.check.overload('java.lang.String', 'java.util.List').implementation =
    function (hostname, peerCertificates) {
        console.log('[+] Bypass SSL pinning for: ' + hostname);
        return;
    };
});
