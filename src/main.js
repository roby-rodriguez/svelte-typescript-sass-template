import App from './App.svelte';
import { firstLetterOut } from './core/test';

const app = new App({
    target: document.body,
    props: {
        name: firstLetterOut('world')
    }
});

export default app;
