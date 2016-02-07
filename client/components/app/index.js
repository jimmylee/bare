import riot from 'riot';
import styles from './styles.less';

/* ===[ WARNING ]========================================
  By using the tag strategy, we lose, and must:

  - Self-closing tags
  - Unquoted expressions. Write value="{ val }"
    instead of value={ val }
  - Boolean attributes. Write __checked="{ flag }"
    instead of checked={ flag }
  - Shorthand ES6 method signatures
  - <img src={ src }> must be written as
    <img riot-src={ src }> in order to avoid illegal server requests
  - style="color: { color }" must be written as
    riot-style="color: { color }" so that style attribute expressions work in IE
  - Scoped CSS precompilation.
*/

const appController = function(options) {
  let main = this;
  main.styles = styles;
  return main;
};

riot.tag(
  'main',
  `
    <div class="{styles.content}">
      Do not go gentle into that good night.
    </div>
  `,
  appController
);
