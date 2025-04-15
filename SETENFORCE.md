## 🪟 Run the setenforce0 script on Windows

1. Open the `setenforce` folder where `setenforce0.bat` is located.

2. Run the script with double-click.

## 🍎 Run the setenforce0 script on macOS

1. Open the `setenforce` folder where `setenforce0.sh` is located from the Terminal.

2. Make it executable.

```bash
chmod +x setenforce0.sh
./setenforce0.sh
```

## ⚠️ Notes

- This assumes your device is already connected via ADB and has root access (`su` works).
- SELinux might still show as enforcing if the kernel is locked down — but this usually works on custom ROMs or rooted stock ROMs.
