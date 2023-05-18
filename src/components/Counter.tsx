import useStore from '../stores/useStore';

export default function Counter() {
	const store = useStore();

	return (
		<div>
			<p>{`Counter: ${store.count}`}</p>
		</div>
	);
}
