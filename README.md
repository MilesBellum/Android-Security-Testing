# Android Security Scripts

This repository contains a collection of Frida scripts for performing security tests on Android applications. It includes a modular loader (`loader.js`) that facilitates the execution of multiple scripts simultaneously.

## 📦 Scripts included

- `bypass_ssl.js`: Bypass SSL pinning in applications using OkHttp.
- `detect_root.js`: Prevents detection of rooted devices.
- `hook_password.js`: Hook to `checkPassword` method to monitor passwords.
- `native_strstr_hook.js`: Intercepts calls to the native function `strstr`.
- `emulator_bypass.js`: Hides emulator indicators.
- `prefs_hook.js`: Manipulates `SharedPreferences` to activate hidden functions.
- `force_login.js`: Forces user authentication.

## 🚀 Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/MilesBellum/Android-Security.git
   cd Android-Security
   ```

2. Connect your Android device and make sure Frida is installed and running.

3. Run the loader:

   ```bash
   frida -U -n com.app.target -l loader.js
   ```

   Replace `com.app.target` with the package name of the application you want to analyze.

## 📄 License 

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more details.