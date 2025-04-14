# Frida

## 🧰 Prerequisites

Before using `loader` script, make sure you have the following installed:

- Python 3.x
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
frida-server-16.1.4-android-arm64.xz
```

2. Extract the file:

```bash
xz -d frida-server-*.xz
chmod +x frida-server

```

3. Push it to your device:

```bash
adb push frida-server /data/local/tmp/
adb shell "chmod 755 /data/local/tmp/frida-server"
```

4. Start `frida-server`:

```bash
adb shell
su
/data/local/tmp/frida-server &
```

## 💡 Extra Tips

- Use `frida-ps -U` to list running processes on the device.

- Use `frida-trace -U -n com.app.target -i nativeCheck` to auto-generate hooks.

- Make sure the app is in the foreground before hooking.

- Modify the script to hook other methods as needed.
