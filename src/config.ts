import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Nexo Mundial',
  subtitle: 'Una diversión para todos',
  lang: 'es',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: 'favicon.png',    // Path of the favicon, relative to the /public directory
      // theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      // sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.webp',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Nexo Mundial',
  bio: 'Descubre en Nexo Mundial una fuente de inspiración global con cuentos, recetas, noticias y espectáculos que te conectan con culturas de todo el mundo. ¡Explora y disfruta contenido diverso y entretenido!',
  links: [
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://www.facebook.com/nexomundial2/',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/nxmundial2024/',
    },
    {
      name: 'Tiktok',
      icon: 'fa6-brands:tiktok',
      url: 'https://www.tiktok.com/@nexomundial2024',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
