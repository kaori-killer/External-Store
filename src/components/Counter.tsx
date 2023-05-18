import {container} from 'tsyringe';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../stores/Store';

export default function Counter() {
	const store = container.resolve(Store);

	const forceUpdate = useForceUpdate();

	const handleClick = () => {
		store.count += 1;
		forceUpdate();
	};

	return (
		<div>
			<p>{store.count}</p>
			<button onClick={handleClick}>
				새로고침
			</button>
		</div>
	);
}
