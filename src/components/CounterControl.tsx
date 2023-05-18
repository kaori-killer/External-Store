import {container} from 'tsyringe';

import useForceUpdate from '../hooks/useForceUpdate';

import Store from '../stores/Store';

export default function CounterControl() {
	const store = container.resolve(Store);

	const forceUpdate = useForceUpdate();

	const handleClick = () => {
		store.count += 1;
		forceUpdate();
	};

	return (
		<div>
			<p>{store.count}</p>
			<button type='button' onClick={handleClick}>
                증가
			</button>
		</div>
	);
}
