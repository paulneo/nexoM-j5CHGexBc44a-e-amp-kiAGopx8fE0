import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Nexo Mundial',
  subtitle: 'Conocimiento técnico, explicado simple.',
  lang: 'es',
  themeColor: {
    hue: 170,         // verde teal técnico (≈ #0E7C66)
    fixed: true,      // ocultar el picker — la paleta es parte de la identidad
  },
  banner: {
    enable: false,    // sin banner: identidad editorial limpia
    src: '',          // sin asset físico (las imágenes viejas se eliminaron)
  },
  favicon: [
    {
      src: 'favicon.png',
    },
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [
    { name: 'Arquitectura',  url: '/categorias/arquitectura/',     external: false },
    { name: 'Construcción',  url: '/categorias/construccion/',     external: false },
    { name: 'Maquinaria',    url: '/categorias/maquinaria-pesada/', external: false },
    { name: 'Ingeniería',    url: '/categorias/ingenieria-basica/', external: false },
    { name: 'Glosario',      url: '/glosario/',                    external: false },
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: '',  // sin avatar físico — branding del sitio va en el wordmark del navbar
  name: 'Nexo Mundial',
  bio: 'Biblioteca práctica de arquitectura, construcción, maquinaria pesada e ingeniería básica. Conceptos técnicos explicados de forma sencilla, sin tecnicismos innecesarios.',
  links: [
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook',
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
