import riot from 'riot';
import styles from './styles.less';

riot.tag(
    'main',

    `
        <div class="{styles.content}"
             onclick="{changeText()}">
            Hello world!<br>
            <br>
            Now you can write a web application or website!
        </div>
    `,

    function(opts){
        let main = this;

        main.styles = styles;

        return main;
    }
);
