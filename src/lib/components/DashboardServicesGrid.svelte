<style>
    .services_grid {
        @apply grid grid-cols-dashboard_services grid-rows-dashboard_services px-3 w-full gap-3;
    }
    .services_grid_item {
        @apply rounded-xl bg-white bg-opacity-10 flex flex-row items-center px-3 py-2;
    }
    .icon_wrapper {
        @apply h-6 w-6;
    }
    .icon_wrapper img {
        @apply w-full h-full;
    }
    .service_label {
        @apply text-sm ml-2.5 font-semibold text-text_primary;
    }
</style>

<section class="services_grid">
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/punctured-tire.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Tires</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/air-conditioner.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Conditioning</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/car-wash.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Car washing</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/manual-transmission.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Transmission</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/engine-oil.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Oil change</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/car-battery.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Battery</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/car-engine.png" alt="service icon"/>
        </div>
        <h4 class="service_label">Engine</h4>
    </div>
    <div class="services_grid_item">
        <div class="icon_wrapper">
            <img src="/images/car-repair.png" alt="service icon"/>
        </div>
        <h4 class="service_label">More services</h4>
    </div>
</section>