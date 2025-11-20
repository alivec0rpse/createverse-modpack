# Contributing to CreateVerse Modpack

Thanks for your interest in contributing!  
This document explains how to make changes cleanly, ensuring the pack remains stable and easy to maintain.

---

## 🧱 Project Structure

```
/
├── overrides/           # All configs, KubeJS scripts, datapacks, resources
├── modrinth.index.json  # Modpack manifest (DO NOT EDIT WITHOUT READING BELOW)
└── .github/workflows/   # CI that builds the .mrpack automatically
```

---

## 🛠️ How to Contribute

### 1. Fork the Repository
Click **Fork** → clone your fork locally.

### 2. Create a Feature Branch
```
git checkout -b feature/my-change
```

### 3. Make Your Changes
You may edit:
- Configs in `overrides/config`
- KubeJS scripts in `overrides/kubejs`
- Datapacks in `overrides/datapacks`
- Any asset or override in `overrides/`

### ❗ DO NOT:
- Commit your local `mods/` folder
- Modify mod JAR files
- Edit GitHub workflow files unless necessary
- Change the manifest version without following version rules

---

## 📦 Adding or Removing Mods

If you want to change the mod list:

1. Open an Issue or Discussion:
   - Include Modrinth link
   - Reason for change
   - Compatibility notes if any

2. Wait for approval.

3. Once approved:
   - Add/remove the mod entry inside `modrinth.index.json`
   - Never commit `.jar` files to the repository

---

## 🔢 Versioning Rules

The pack version comes from `versionId` inside **modrinth.index.json**.

This version is used for:
- GitHub Releases
- `.mrpack` file naming
- Automation workflows

Format:
```
MAJOR.MINOR.PATCH.BUILD
```

Example:
```
4.1.0.1
```

Update only when preparing a release-level change.

---

## 📤 Submitting a Pull Request

1. Ensure your branch is up to date:
```
git pull origin main
```

2. Push your branch:
```
git push origin feature/my-change
```

3. Open a PR with:
- What changed
- Why it changed
- How it improves the pack
- Any testing done

4. Wait for review.

---

## 🤖 CI / Build Info

Every commit to `main` triggers:
- Building a `.mrpack`
- Creating or updating a GitHub Release
- Uploading artifacts

You do **not** need to export the pack manually.

---

## 🧪 Testing Locally

1. Use a clean instance of Minecraft
2. Drop the `overrides/` content into the instance folder
3. Ensure all mods that appear in `modrinth.index.json` are installed
4. Launch and check for errors or crash logs

---

## ❤️ Thanks for Contributing!
Every fix, improvement, or tweak helps keep the modpack clean and enjoyable for everyone.
