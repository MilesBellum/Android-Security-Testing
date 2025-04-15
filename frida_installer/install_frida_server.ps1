# Name of the frida-server binary
$fridaServer = "frida-server"

# Check if the file exists in the current directory
if (!(Test-Path -Path "./$fridaServer")) {
    Write-Host "❌ frida-server not found in the current directory." -ForegroundColor Red
    exit 1
}

# Push the file to the device
Write-Host "🔁 Pushing frida-server to the device..."
adb push "./$fridaServer" "/data/local/tmp/$fridaServer"

# Set SELinux to permissive mode
Write-Host "⚙️ Setting SELinux to permissive mode..."
adb shell su -c "setenforce 0"

# Set executable permissions on the device
Write-Host "🔐 Setting executable permissions..."
adb shell "chmod 755 /data/local/tmp/$fridaServer"

# Run the server in background
Write-Host "🚀 Launching frida-server in the background..."
adb shell "/data/local/tmp/$fridaServer &"

Write-Host "✅ frida-server launched. You can verify with: frida-ps -U" -ForegroundColor Green
