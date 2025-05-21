/**
 * @file PostCSS Configuration
 * This file configures PostCSS plugins, primarily for integrating Tailwind CSS and Autoprefixer.
 * Tailwind CSS is used for utility-first CSS styling.
 * Autoprefixer adds vendor prefixes to CSS rules for broader browser compatibility.
 */
module.exports = {
  /**
   * Specifies the PostCSS plugins to be used.
   * @type {Object.<string, Object>}
   */
  plugins: {
    /**
     * Tailwind CSS plugin.
     * The empty object `{}` indicates that Tailwind should use its default configuration.
     */
    tailwindcss: {},
    /**
     * Autoprefixer plugin.
     * The empty object `{}` indicates that Autoprefixer should use its default browser list and options.
     */
    autoprefixer: {},
  },
};
