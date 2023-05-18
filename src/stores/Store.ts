import {singleton} from 'tsyringe';
import useForceUpdate from '../hooks/useForceUpdate';

type ForceUpdates = () => void;

@singleton()
export default class Store {
	count = 0;

	forceUpdates = new Set<ForceUpdates>();

	update() {
		this.forceUpdates.forEach(forceUpdate => {
			forceUpdate();
		});
	}

	addListener(forceUpdate: ForceUpdates) {
		this.forceUpdates.add(forceUpdate);
	}

	removeListener(forceUpdate: ForceUpdates) {
		this.forceUpdates.delete(forceUpdate);
	}
}
