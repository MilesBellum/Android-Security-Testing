// loader.js
// Modular loading script for Frida

const scripts = [
    'bypass_ssl.js',
    'detect_root.js',
    'hook_password.js',
    'native_strstr_hook.js',
    'emulator_bypass.js',
    'prefs_hook.js',
    'force_login.js',
    'block_system_exit.js'
];

// Helper to load scripts dynamically
function loadScript(path) {
    try {
        const content = require('fs').readFileSync(path, 'utf8');
        eval(content);
        console.log(`✅ Loaded: ${path}`);
    } catch (e) {
        console.error(`❌ Failed to load: ${path}`, e);
    }
}

// Load all scripts
scripts.forEach(name => {
    loadScript(`scripts/${name}`);
});

// You can use: frida -U -n com.package.name -l loader.js
