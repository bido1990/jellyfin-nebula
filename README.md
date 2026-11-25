<div align="center">

# 🌌 Nebula

**A dark, rounded and elegant theme for Jellyfin 12**

Glass effect · violet → cyan gradient · smooth animations

**English** · [Español (upstream, not updated for this fork)](README.es.md)

> **About this fork (bido1990/jellyfin-nebula)**
> - Theme only: install it with the `@import` lines below, replacing `COMMIT_SHA` with a commit of this fork you have reviewed. A pinned commit never changes behind your back, unlike `@main`.
> - The Google Fonts import in `nebula.css` is disabled for privacy. The theme uses your system font.
> - The home carousel (JavaScript) is not supported in this fork. Its installers in `install/` are **disabled**: they mount `/var/run/docker.sock` (root access to the host) and re-download code from the upstream `main` branch every 10 minutes.
> - Emby support has been removed. This fork targets Jellyfin only.
> - Updating: use **Sync fork** on GitHub, review the changes, then update `COMMIT_SHA` in Jellyfin.

![Jellyfin 12](https://img.shields.io/badge/Jellyfin-12.x-8b5cf6?style=for-the-badge&logo=jellyfin&logoColor=white)
![Install](https://img.shields.io/badge/install-1_minute-22d3ee?style=for-the-badge)
![MIT License](https://img.shields.io/badge/license-MIT-555?style=for-the-badge)

![Home page with Nebula](screenshots/inicio.jpg)

</div>

---

## ✨ Before and after

![Stock Jellyfin vs Nebula](screenshots/antes-despues.jpg)

<table>
<tr>
<td width="50%"><img src="screenshots/ficha.jpg" alt="Movie page"><br><b>Movie page</b>: the logo replaces the title, round buttons, audio and subtitle tracks as cards.</td>
<td width="50%"><img src="screenshots/biblioteca.jpg" alt="Library"><br><b>Library</b>: rounded cards, glass menus and clean filters.</td>
</tr>
<tr>
<td width="50%"><img src="screenshots/temporada.jpg" alt="Season"><br><b>Episodes</b> as cards, with a "✓ Watched" badge and a short overview.</td>
<td width="50%" align="center"><img src="screenshots/movil.jpg" alt="Mobile" width="80%"><br><b>Mobile</b>: everything adapted to small screens.</td>
</tr>
</table>

**What changes, in short:**

| | |
|---|---|
| 🔘 **Everything rounded** | Cards, pill buttons, glass menus and dialogs, thin scrollbars, Inter font |
| 🎬 **Movie page** | Logo instead of title, animated entrance, custom audio/subtitle dropdowns, circular cast photos |
| 📺 **Episodes** | Cards with a play button on hover and a watched badge |
| ▶️ **Player** | Gradient pause button, glowing progress bar, glass "skip intro" |
| 🔐 **Everything else** | Login, search, TV guide, favorites and admin dashboard to match |
| 📱 **Mobile** | Adapted to narrow screens |

---

## 🚀 Installing the theme (1 minute, nothing to install)

> You only need to copy and paste **one line**. No files to touch, nothing to restart, and if you don't like it, removing it is just as easy.

**1.** Sign in to Jellyfin with an **administrator** account. Click your **user picture** (top right) → **Dashboard**.

**2.** In the left menu, open **Branding** (appearance customization).

**3.** In the **"Custom CSS code"** box, paste this line:

```css
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/nebula.css');
```

**4.** Click **Save** at the bottom.

**5.** Reload the page with **Ctrl + F5** (Mac: **Cmd + Shift + R**). On mobile, close the app or tab and open it again.

Done! 🎉 It applies to **all users** and updates only when you change `COMMIT_SHA` (this fork).

---

## 🎨 Options

Each option is **one more line** that you paste **below** the theme line, in the same "Custom CSS code" box (*Dashboard → Branding*). Combine as many as you like.

> The option file names are in Spanish — just copy them as they are.

### 🌈 Accent color

Swap the violet → cyan for another color. Use **only one** of these lines:

![Accent colors](screenshots/opcion-acentos.png)

```css
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/acento-coral.css');
```

Replace `acento-coral` with the one you want: `acento-coral` (coral) · `acento-esmeralda` (emerald) · `acento-oceano` (ocean) · `acento-rosa` (pink) · `acento-oro` (gold) · `acento-blanco` (white).

<details>
<summary>🎛️ Want your own exact color?</summary>

Paste this below the theme and change the colors (each one as `#hex` and as `R,G,B` numbers):

```css
:root {
  --nb-a1: #ff6b6b; --nb-a1-rgb: 255,107,107;   /* color 1 */
  --nb-a2: #ffa94d; --nb-a2-rgb: 255,169,77;    /* color 2 */
  --nb-on-accent: #fff;                          /* text on buttons (use #111 if your colors are light) */
}
```
</details>

### 🧭 Top bar

Jellyfin 12 puts your libraries in the top bar. If you prefer a cleaner bar:

![Top bar options](screenshots/opcion-cabecera.png)

| I want… | Paste this line |
|---|---|
| A **minimal** bar (just logo, search and user) | `@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/cabecera-minima.css');` |
| Hide only the **libraries** | `@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/ocultar-bibliotecas-cabecera.css');` |
| Hide only **Favorites** | `@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/ocultar-favoritos-cabecera.css');` |
| Hide only the **"More"** menu | `@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/ocultar-menu-mas.css');` |

> You don't lose anything: libraries are still under "My Media" on the home page and in the ☰ menu.

### 🏷️ Text title instead of the logo

By default the item page shows the movie's **logo**. If you prefer the written name:

![Logo or text title](screenshots/opcion-titulo.jpg)

```css
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/titulo-en-texto.css');
```

### 🃏 Centered card text

Nebula left-aligns the title and year. To center them like stock Jellyfin:

![Card text](screenshots/opcion-tarjetas.jpg)

```css
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/tarjetas-texto-centrado.css');
```

### 🐢 No animations

For slow devices, TVs, or if you just don't like the effects. Everything appears instantly:

```css
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/sin-animaciones.css');
```

### 📋 Full example

This is what the box would look like with the theme + coral accent + minimal bar:

```css
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/nebula.css');
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/acento-coral.css');
@import url('https://cdn.jsdelivr.net/gh/bido1990/jellyfin-nebula@COMMIT_SHA/opciones/cabecera-minima.css');
```

> ⚠️ `@import` lines must go **at the very top** of the box, before any other CSS you have.

---

## ❓ FAQ

<details>
<summary><b>I pasted the line and nothing changed</b></summary>

1. Make sure you clicked **Save**.
2. Reload with **Ctrl + F5** (the browser caches the old version).
3. Check that the line is the **first one** in the box, with no stray characters before it.
</details>

<details>
<summary><b>Does it work on my TV / phone app?</b></summary>

It works everywhere Jellyfin's **web client** is used: browsers (desktop and mobile), **Jellyfin Media Player** and the official **Android** app (which is the web client inside). "Native" apps like **Android TV, Swiftfin (iPhone/Apple TV) or Findroid** don't load custom CSS, so you won't see it there.
</details>

<details>
<summary><b>Do I need to update anything when you release improvements?</b></summary>

Only if you want them. The line is pinned to `COMMIT_SHA`, so nothing changes until you sync the fork, review the changes and put the new commit in the line. Then reload with **Ctrl + F5**.
</details>

<details>
<summary><b>Does it work with Jellyfin 10.x?</b></summary>

It's built for **Jellyfin 12**. On 10.x it partly works (the top bar and settings pages are different in 12).
</details>

<details>
<summary><b>How do I remove it?</b></summary>

Delete the lines from the "Custom CSS code" box (*Dashboard → Branding*), save and reload. Jellyfin goes back to how it was.
</details>

---

<div align="center">

Made with 💜 for the Jellyfin community · [MIT](LICENSE) License

Original theme by [nemesbak](https://github.com/nemesbak/jellyfin-nebula). If you like it, ⭐ star the upstream repository.

</div>
