import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
	let appElement = document.getElementById('app');
	let appRoot = createRoot(appElement);

	appRoot.render(<h1>hello via React!</h1>);
	// Roughly equivalent to the above
	// appElement.innerHTML = '<h1>hello from my app</h1>';
});
