import {container} from 'tsyringe';
import {useEffect} from 'react';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../stores/Store';

export default function Counter() {
	const store = container.resolve(Store);

	const forceUpdate = useForceUpdate();

	useEffect(() => {
		store.addListener(forceUpdate);

		return () => {
			store.removeListener(forceUpdate);
		};
	}, [store, forceUpdate]);

	return (
		<div>
			<p>{store.count}</p>
		</div>
	);
}
