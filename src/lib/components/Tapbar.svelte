<script>
    import { page } from '$app/stores';
    export let acctMenuIsOpen
    export let toggleAcctMenuIsOpen
</script>

<style>
    .tapBarMenu {
        @apply h-[11.5vh] bg-black w-full fixed bottom-0 max-w-[576px] grid grid-cols-tapbarmenu grid-rows-tapbarmenu z-20 shadow-md;
    }
    .menuItem {
        @apply w-full p-4 flex justify-center items-center;
    }
    img {
        @apply w-8 h-8;
    }
    .flip {
        @apply -scale-x-100;
    }
    .newReportBtn {
        @apply absolute flex h-auto justify-center items-center bg-prime rounded-full p-4 right-1/2 -top-1/2 translate-x-1/2 z-10;
        -webkit-box-shadow: 0px 20px 28px -7px rgba(14,115,74,0.24); 
        box-shadow: 0px 20px 28px -7px rgba(14,115,74,0.24);
    }
    .newReportBtn img {
        @apply h-6 w-6;
    }
</style>

<div class="tapBarMenu">
    <a href="/" class="menuItem">
        {#if $page.url.pathname == '/' && !acctMenuIsOpen}
            <img src="/images/home.png" alt="Home menu icon" />
        {:else}
            <img src="/images/homegrey.png" alt="Home menu icon" />
        {/if}
    </a>
    <a href="/services" class="menuItem">
        {#if $page.url.pathname.startsWith('/services') && !acctMenuIsOpen}
            <img src="/images/car-repair.png" alt="Newspaper icon" />
        {:else}
            <img src="/images/car-repairgrey.png" alt="Newspaper icon" />
        {/if}
    </a>
    <a href="/history" class="menuItem">
        {#if $page.url.pathname.startsWith('/history') && !acctMenuIsOpen}
            <img src="/images/time.png" alt="Newspaper icon" />
        {:else}
            <img src="/images/timegrey.png" alt="Newspaper icon" />
        {/if}
    </a>
    <a href="/cars" class="menuItem">
        {#if $page.url.pathname.startsWith('/cars') && !acctMenuIsOpen}
            <img class="flip" src="/images/car.png" alt="Home menu icon" />
        {:else}
            <img class="flip" src="/images/cargrey.png" alt="Home menu icon" />
        {/if}
    </a>
    <span class="menuItem" on:click={toggleAcctMenuIsOpen}>
        {#if acctMenuIsOpen}
            <img src="/images/user.png" alt="User icon" />
        {:else}
            <img src="/images/usergrey.png" alt="User icon" />
        {/if}
    </span>
</div>