import {container} from 'tsyringe';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../stores/Store';

export default function Counter() {
	const store = container.resolve(Store);

	const forceUpdate = useForceUpdate();
	store.forceUpdate = forceUpdate;

	return (
		<div>
			<p>{store.count}</p>
		</div>
	);
}
