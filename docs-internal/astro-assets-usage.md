# How to use `src/assets` in Astro

In Astro, the `src/assets` directory is special: files here are **processed and optimized** by Astro (unlike the `public/` folder, where files are just copied as-is).

To use an image from `src/assets`, you must **import it** in your component script and pass it to Astro's `<Image />` component. You cannot simply reference it by a string path like `/assets/image.png`.

## How to use it

### 1. Basic Usage (Recommended)

Import the image and use the built-in `<Image />` component. This automatically handles resizing, format conversion (WebP/AVIF), and prevents layout shift (CLS).

```astro
---
// 1. Import the Image component
import { Image } from 'astro:assets';

// 2. Import your asset file
// (Note: Use relative paths or aliases if configured)
import heroBg from '../assets/hero-bg-light.png'; 
import myIcon from '../assets/content.svg';
---

<!-- 3. Use it in the template -->
<Image src={heroBg} alt="Hero Background" width={800} />

<Image src={myIcon} alt="Content Icon" class="w-10 h-10" />
```

### 2. Using as a CSS Background (Inline Style)

If you need the image path for a `style` attribute (like a background image), import it and use `.src`:

```astro
---
import heroBgDark from '../assets/hero-bg-dark.png';
---

<div 
  class="hero-bg" 
  style={`background-image: url(${heroBgDark.src});`}
>
  <!-- Content -->
</div>
```

## Why use `src/assets` vs `public/`?

| Feature | `src/assets` | `public/` |
| :--- | :--- | :--- |
| **Optimization** | ✅ Yes (Size, Format, Quality) | ❌ No (Served as-is) |
| **Cache Busting** | ✅ Yes (Hash added to filename) | ❌ No |
| **Access** | **Must refer to via Import** | Check via URL (e.g., `/image.png`) |
| **Best For** | UI elements, Heroes, Icons | `robots.txt`, `favicon.ico`, meta images |

### Note on Dynamic Usage (e.g., DOM manipulation)

If you have scripts that manually create `<img>` tags like `img.src = "/" + iconPath`, this **will not work** with `src/assets` because the files are bundled and renamed. That method only works for `public/` files. 

To use `src/assets` images in this way, you would need to pass the **imported image object's `.src` property** to a data attribute in your HTML, which your script can then read.
