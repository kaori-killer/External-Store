import {singleton} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';

@singleton()
export default class Store {
	count = 0;

	forceUpdate: () => void;

	update() {
		this.forceUpdate();
	}
}
