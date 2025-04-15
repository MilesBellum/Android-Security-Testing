#!/bin/bash

# Name of the frida-server binary (adjust if needed)
FRIDA_SERVER="frida-server"

# Local path to the frida-server binary
LOCAL_PATH="./$FRIDA_SERVER"

# Destination path on the Android device
REMOTE_PATH="/data/local/tmp/$FRIDA_SERVER"

echo "🔁 Pushing frida-server to the device..."
adb push "$LOCAL_PATH" "$REMOTE_PATH"

echo "⚙️ Setting SELinux to permissive mode..."
adb shell su -c "setenforce 0"

echo "🔐 Setting executable permissions on the device..."
adb shell "chmod 755 $REMOTE_PATH"

echo "🚀 Launching frida-server in the background..."
adb shell "$REMOTE_PATH &"

echo "✅ frida-server launched. You can verify with:"
echo "   frida-ps -U"