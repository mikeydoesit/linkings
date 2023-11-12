<script>
    export let isOpen;
    export let toggleMenu;
</script>

<style>
    .header {
        @apply flex flex-row h-auto w-full justify-between items-center py-6 px-6 ;
    }
    .left_col, .right_col {
        @apply h-auto flex flex-row items-center;
    }
    .logo_wrapper {
        @apply w-16 h-16;
    }
    .notification_wrapper {
        @apply w-8 h-8;
    }
    .logo_wrapper img, .notification_wrapper img {
        @apply h-full w-full;
    }
    .greeting_wrapper {
        @apply ml-6 text-text_primary;
    }
    .greeting_wrapper h3 {
        @apply text-lg font-semibold;
    }
    .greeting_wrapper .name {
        @apply text-lg font-semibold;
    }
</style>

<div class="header">
    <div class="left_col">
        <div class="logo_wrapper">
            <img src="/images/logo.png" alt="logo" />
        </div>
        <div class="greeting_wrapper">
            <h3>Hello,</h3>
            <p class="name">Abena</p>
        </div>
    </div>
    <div class="right_col">
        <div class="notification_wrapper">
            <img src="/images/notification.png" alt="notification" />
        </div>
    </div>
</div>