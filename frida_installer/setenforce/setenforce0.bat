REM This works only if you get an error message like: "Unable to load SELinux policy from the kernel: Failed to open file ?/sys/fs/selinux/policy?: Permission denied"
@echo off
adb shell su -c "setenforce 0"