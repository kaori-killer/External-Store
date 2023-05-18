import {singleton} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';

type Listeners = () => void;

@singleton()
export default class Store {
	count = 0;

	listeners = new Set<Listeners>();

	increase() {
		this.count += 1;
		this.publish();
	}

	decrease() {
		this.count -= 1;
		this.publish();
	}

	publish() {
		this.listeners.forEach(listener => {
			listener();
		});
	}

	addListener(listener: Listeners) {
		this.listeners.add(listener);
	}

	removeListener(listener: Listeners) {
		this.listeners.delete(listener);
	}
}
