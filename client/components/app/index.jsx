import Preact from 'preact';
import styles from './styles.less';

// NOTE: This is an example canvas animation you can obviously delete and replace
// with something of your own!
import { animateExample } from 'client/common/example';

export default class App extends Preact.Component {
  _canvas;

  canvas = (ref) => {
    this._canvas = ref;
  }

  updateCanvas() {
    const ctx = this._canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    animateExample(ctx);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.updateCanvas();
  }

  compoenntWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  handleResize = () => {
    this.updateCanvas();
  }

  render(props) {
    return (
      <canvas className={styles.content} ref={this.canvas} />
    );
  }
}
