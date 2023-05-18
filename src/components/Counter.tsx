import {container} from 'tsyringe';
import {useEffect} from 'react';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../stores/Store';

export default function Counter() {
	const store = container.resolve(Store);

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		store.forceUpdates.add(forceUpdate);
	}, []);

	return (
		<div>
			<p>{store.count}</p>
		</div>
	);
}
