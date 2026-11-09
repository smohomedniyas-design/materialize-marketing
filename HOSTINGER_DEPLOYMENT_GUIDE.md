# Hostinger Deployment Guide for Materialize Marketing

This guide covers deploying the production static build of **Materialize Marketing** to **Hostinger** (Shared Hosting, Cloud Hosting, or WordPress Hosting with LiteSpeed / Apache).

---

## 📦 What Has Been Prepared

1. **Pre-packaged Deployment Archive**:
   - File: `hostinger-deploy.zip` (~10.5 MB)
   - Location: `d:\SPG US\Materialize Marketing\site\Materialize Marketing\MM\hostinger-deploy.zip`
2. **Pre-configured `.htaccess`**:
   - Clean Next.js route resolution (e.g. `/work/rich-sinners` automatically serves `/work/rich-sinners/index.html` without trailing slash issues).
   - Video streaming support for `HeroBG.mp4` (byte-range requests, partial content `206`).
   - 1-year immutable caching for static assets in `_next/` and images.
   - Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
   - Automatic HTTP to HTTPS redirection.
3. **All 27 Prerendered Routes**:
   - Home, Work, Services (including Digital Marketing), Portfolio case studies, Pricing, Process, About, Contact, Terms, and Privacy.

---

## 🚀 Option 1: File Manager Upload (Recommended  -  2 Minutes)

This is the fastest and most foolproof method.

### Step 1: Log into Hostinger
1. Open [hpanel.hostinger.com](https://hpanel.hostinger.com) and log in.
2. Under **Websites**, find your domain and click **Manage**.

### Step 2: Open File Manager
1. In the left navigation menu, go to **Files** &rarr; **File Manager** (or click **Access files of [your-domain]**).
2. Choose **public_html** (this is the root web directory).

### Step 3: Clear Any Default Files
- If you see a default Hostinger `default.php` file, delete it or move it to a backup folder so it does not override `index.html`.

### Step 4: Upload `hostinger-deploy.zip`
1. In the top toolbar of the File Manager, click the **Upload** icon (arrow pointing up).
2. Select **File** and choose:
   `hostinger-deploy.zip` from your local machine.

### Step 5: Extract the Zip
1. Once upload reaches 100%, right-click `hostinger-deploy.zip` in File Manager.
2. Click **Extract**.
3. Choose the destination directory as `.` (or type `public_html`) so the contents extract directly into `public_html`.
4. Verify that `index.html`, `_next/`, `HeroBG.mp4`, and `.htaccess` are directly inside `public_html`.
5. You can now delete the uploaded `hostinger-deploy.zip` from the server to save disk space.

### Step 6: Test Your Live Domain
Visit your domain in any browser:
- `https://yourdomain.com/` (Should show the full-screen looping hero video)
- `https://yourdomain.com/services/digital-marketing` (Should load directly without 404)
- `https://yourdomain.com/pricing` (Should show the new $299 / $699 pricing)

---

## 🔌 Option 2: FTP / SFTP Upload (FileZilla)

If you prefer uploading via FTP:

1. In Hostinger hPanel, go to **Files** &rarr; **FTP Accounts**.
2. Note your **FTP Host**, **FTP Username**, and set/reset your **FTP Password**.
3. Open **FileZilla** or **Cyberduck**:
   - Host: `ftp.yourdomain.com` (or the IP listed in hPanel)
   - Username: your FTP username
   - Password: your FTP password
   - Port: `21`
4. On the remote side (right panel), double-click into **`public_html/`**.
5. On the local side (left panel), navigate to:
   `d:\SPG US\Materialize Marketing\site\Materialize Marketing\MM\hostinger-deploy`
6. Select **all files and folders** inside `hostinger-deploy` (including `.htaccess`) and drag them into `public_html/`.

---

## 🔒 Post-Deployment Checklist

1. **Enable Free SSL**:
   - In hPanel, go to **Security** &rarr; **SSL**.
   - Make sure an active **Lifetime Let's Encrypt SSL certificate** is installed for your domain.
   - Toggle **Force HTTPS** to ON.
2. **Purge LiteSpeed Cache**:
   - In hPanel, go to **Advanced** &rarr; **LiteSpeed Cache**.
   - Click **Flush All** to ensure new visitors receive the fresh build immediately.
3. **Contact Form Routing**:
   - The brief form submits natively or links to your project board (or Monday.com CRM integration).
   - Inquiries sent to `hello@materializemarketing.com` will route to your designated mailbox.

