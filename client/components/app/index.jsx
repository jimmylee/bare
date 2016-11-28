import { Component, h } from 'preact';
import styles from './styles.less';

/** @jsx h */
export default class App extends Component {
  render() {
    return (
      <div className={styles.content}>
        All the worlds a stage.
      </div>
    );
  }
}
