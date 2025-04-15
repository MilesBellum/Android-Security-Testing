# Frida Installation Guide (For Beginners)

## 🧰 Prerequisites

Before using `loader` script, make sure you have the following installed:

- Python 3.x installed on your PC
- `pip` to install Python packages
- ADB (Android Debug Bridge)
- Frida (`frida`, `frida-trace`, etc.)
- An Android device (preferably rooted)
- `frida-server` running on the device

## 🛠️ Installing Frida

### 🪟 Windows

1. Download and install Python from [https://www.python.org/downloads/windows](https://www.python.org/downloads/windows)

2. Open PowerShell or CMD and run:

```bash
pip install frida-tools
```

3. Verify that Frida is installed:

```bash
frida --version
```

### 🍎 MacOS
1. Open Terminal.

2. Install Python and Pip using Homebrew:

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

## 🔧 Installing ADB (Android Debug Bridge)

### 🪟 Windows

1. Download `Platform Tools` from [https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)

2. Extract the ZIP into a folder.

3. Add that folder to your system PATH.

4. Verify installation:

```bash
adb devices
```

### 🍎 MacOS

1. Install `Platform Tools`:

```bash
brew install android-platform-tools
```

## 📲 Installing `frida-server` on Android device

1. Download `frida-server` from [https://github.com/frida/frida/releases](https://github.com/frida/frida/releases)

Look for a file like:

```pgsql
frida-server-<version>-android-arm64.xz
```

2. Extract the file:

### 🪟 Windows

Uncompress the XZ into a folder.

### 🍎 MacOS

```bash
unxz frida-server-*.xz
```

or

```bash
xz -d frida-server-*.xz
```

3. Push `frida-server` to the Android device:

```bash
adb root # Might be required
adb push frida-server /data/local/tmp/
```

It is recommended not to use the name `frida-server` and use a random name instead. i.e. `android-pen-server`.

4. Init the shell (from the device's shell):

```bash
adb shell
```

5. Give it executable permissions:

```bash
cd /data/local/tmp
chmod +x frida-server
chmod 755 /data/local/tmp/frida-server
```

6. Start `frida-server`:

```bash
/data/local/tmp/frida-server &
```

For the last step, make sure you start `frida-server` as root, i.e. if you are doing this on a rooted device, you might need to `su` (after of `adb shell`) and run it from that shell. You might see `#` instead of `$`.

## 📦 Automated installation

If you want to save the lines of code and automate the whole process above, follow the steps below:

### 🪟Windows

1. Open PowerShell in the folder where `frida-server` and `install_frida_server.ps1` are located.

2. Allow script execution (temporary):

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

3. Run the script:

```powershell
./install_frida_server.ps1
```

### 🍎 MacOS

1. Open Terminal in the folder where `frida-server` and `install_frida_server.sh` are located.

```bash
./install_frida_server.sh
```

## 💀 Kill the process manually

```bash
adb shell
su
ps | grep frida
```

This shows something like:

```bash
u0_a123   1234  567   ...  /data/local/tmp/frida-server
```

Now kill it (replace 1234 with the actual PID):

```bash
kill -9 1234
```

## ⚠️ Notes

- If you get something like `Failed to enumerate processes: unable to access process with pid <number> due to system restrictions; try 'sudo sysctl kernel.yama.ptrace_scope=0'`, run Frida as root

- SELinux might still show as enforcing if the kernel is locked down — but this usually works on custom ROMs or rooted stock ROMs.

- If you get `adbd cannot run as root in production builds` after running `adb root`
you need to prefix each shell command with `su -c`. For example: `adb shell "su -c chmod 755 /data/local/tmp/frida-server"`

## 💡 Extra Tips

- Use `frida-ps -U` to list running processes on the device. It may help you to find the name of the target application.

- Use `frida-trace -U -n com.package.name -i nativeCheck` to auto-generate hooks.

- Some apps might be able to detect the `frida-server` location. Renaming the `frida-server` binary to a random name, or moving it to another location such as `/dev` may do the trick.

- Make sure the app is in the foreground before hooking.

- Modify the script to hook other methods as needed.

##

For more information you can consult [Frida's documentation](https://frida.re/docs/android/)
