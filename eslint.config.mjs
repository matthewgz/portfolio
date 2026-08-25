// @ts-check
import prettier from 'eslint-config-prettier/flat';

// La genera `nuxt prepare` (el postinstall) en el buildDir del proyecto.
// Antes se importaba desde node_modules/.cache/nuxt/.nuxt/, que era la
// ubicacion de versiones antiguas de Nuxt: en Nuxt 4 el buildDir es ./.nuxt,
// asi que en un checkout limpio ese import no resolvia y el lint no arrancaba.
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here

  // Va al final para que desactive las reglas de estilo que chocan con
  // prettier: sin esto, vue/html-self-closing y el formateo de <img /> se
  // corrigen el uno al otro en bucle.
  prettier,
);
