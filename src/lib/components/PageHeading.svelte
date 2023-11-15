<script>
    export let title;
    export let subtitle;
</script>

<style>
    .heading {
        @apply px-3 my-4;
    }
    .heading h2 {
        @apply font-bold text-lg text-text_primary text-center;
    }
    .heading h4 {
        @apply mt-2 font-semibold text-base text-text_primary text-center;
    }
</style>

<section class="heading">
    <h2>{title}</h2>
    <h4>{subtitle}</h4>
</section>