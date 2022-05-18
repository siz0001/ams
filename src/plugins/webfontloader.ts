/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import('webfontloader')

  webFontLoader.load({
    google: {
      families: ['Noto Sans:400,700', 'Roboto:400,500,700,900&display=swap']
    }
  })
}
