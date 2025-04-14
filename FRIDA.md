# Frida Installation Guide (For Beginners)

## 🧰 Prerequisites

Before using `loader` script, make sure you have the following installed:

- Python 3.x installed on your PC
- `pip` to install Python packages
- ADB (Android Debug Bridge)
- Frida (`frida`, `frida-trace`, etc.)
- An Android device (preferably rooted)
- `frida-server` running on the device

## 💻 Installing Frida

### 🔹 Windows

1. Download and install Python from [https://www.python.org/downloads/windows](https://www.python.org/downloads/windows)

2. Open PowerShell or CMD and run:

```bash
pip install frida-tools
```

3. Verify that Frida is installed:

```bash
frida --version
```

### 🔹 MacOS
1. Open Terminal.

2. Install Python using Homebrew:

```bash
brew install python
```

3. Install Frida:

```bash
pip3 install frida-tools
```

4. Verify:

```bash
frida --version
```

## 🔧 Installing ADB

### 🔹 Windows

1. Download `Platform Tools` from [https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)

2. Extract the ZIP into a folder.

3. Add that folder to your system PATH.

4. Verify installation:

```bash
adb devices
```

### 🔹 MacOS

1. Install `Platform Tools`:

```bash
brew install android-platform-tools
```

## 📲 Installing `frida-server` on Android

1. Download `frida-server` from [https://github.com/frida/frida/releases](https://github.com/frida/frida/releases)

Look for a file like:

```pgsql
frida-server-<version>-android-arm64.xz
```

2. Extract the file:

```bash
xz -d frida-server-*.xz
chmod +x frida-server
```

It is recommended not to use the name `frida-server` and use a random name instead. i.e. `android-pen-server`.

3. Push it to your device:

```bash
adb root # Might be required
adb push frida-server /data/local/tmp/
adb shell "chmod 755 /data/local/tmp/frida-server"
```

4. Start `frida-server`:

```bash
adb shell "/data/local/tmp/frida-server &"
```

For the last step, make sure you start `frida-server` as root, i.e. if you are doing this on a rooted device, you might need to `su` and run it from that shell.

## 💡 Extra Tips

- Use `frida-ps -U` to list running processes on the device.

- Use `frida-trace -U -n com.app.target -i nativeCheck` to auto-generate hooks.

- Some apps might be able to detect the `frida-server` location. Renaming the `frida-server` binary to a random name, or moving it to another location such as `/dev` may do the trick.

- If you get `adbd cannot run as root in production builds` after running `adb root`
you need to prefix each shell command with `su -c`. For example: `adb shell "su -c chmod 755 /data/local/tmp/frida-server"`

- Make sure the app is in the foreground before hooking.

- Modify the script to hook other methods as needed.

##

For more information you can consult [Frida's documentation](https://frida.re/docs/android/)