import {AUTO_MODE, DARK_MODE, DEFAULT_THEME, LIGHT_MODE} from "@constants/constants.ts";

export function getDefaultHue(): number {
  const fallback = '170' // teal Nexo Mundial, no el azul 250 del template viejo
  const configCarrier = document.getElementById('config-carrier')
  return parseInt(configCarrier?.dataset.hue || fallback)
}

export function isHueFixed(): boolean {
  const configCarrier = document.getElementById('config-carrier')
  return configCarrier?.dataset.hueFixed === 'true'
}

export function getHue(): number {
  // Si el sitio fija el hue por identidad de marca, ignorar localStorage
  // y devolver siempre el del config. Esto evita que valores viejos
  // (ej. 250 azul del template Fuwari) persistan en el browser.
  if (isHueFixed()) {
    return getDefaultHue()
  }
  const stored = localStorage.getItem('hue')
  return stored ? parseInt(stored) : getDefaultHue()
}

export function setHue(hue: number): void {
  localStorage.setItem('hue', String(hue))
  const r = document.querySelector(':root')
  if (!r) {
    return
  }
  r.style.setProperty('--hue', hue)
}

export function setTheme(theme: string): void {
  localStorage.setItem('theme', theme)
  switch (theme) {
    case LIGHT_MODE:
      document.documentElement.classList.remove('dark');
      break
    case DARK_MODE:
      document.documentElement.classList.add('dark');
      break
    case AUTO_MODE:
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      break
  }
}

export function getStoredTheme(): string {
  return localStorage.getItem('theme') || DEFAULT_THEME
}