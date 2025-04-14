// loader.js
// Modular loading script for Frida

const scripts = [
    'bypass_ssl.js',
    'detect_root.js',
    'hook_password.js',
    'native_strstr_hook.js',
    'emulator_bypass.js',
    'prefs_hook.js',
    'force_login.js'
];

function loadScript(scriptName) {
    const file = new File(scriptName, "r");
    const content = file.readAll();
    file.close();
    eval(content);
}

for (let i = 0; i < scripts.length; i++) {
    console.log("[*] Loading: " + scripts[i]);
    loadScript(scripts[i]);
}

// You can use: frida -U -n com.app.target -l loader.js