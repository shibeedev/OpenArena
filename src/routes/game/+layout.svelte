<script>
    import { page } from '$app/stores';
    import { musicManager } from '$lib/music/musicManager.js';
    import { onMount } from 'svelte';

    let musicInitialized = false;

    // Add more logging
    console.log('Layout loaded');
    
    // Watch for page changes
    $: if ($page?.url?.pathname && musicInitialized) {
        musicManager.setMusicForPage($page.url.pathname);
        console.log('Page changed:', $page.url.pathname);
    }
    
    // Log page changes separately
    $: console.log('Page store:', $page);

    onMount(() => {
        console.log('Layout mounted');
        musicInitialized = true;
    });
</script>

<slot />