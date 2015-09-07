import riot from 'riot';
import 'components';
import AppStore from 'stores/app';
import dispatcher from 'utilities/dispatcher';

dispatcher.addStore(new AppStore());

riot.mount('app');
