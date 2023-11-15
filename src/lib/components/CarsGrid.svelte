<style>
    .cars_grid {
        @apply px-3 grid grid-cols-cars_grid grid-rows-cars_grid w-full gap-3 mt-8;
    }
    .car {
        @apply rounded-xl bg-white bg-opacity-10 p-2.5 cursor-pointer;
    }
    .add_car {
        @apply rounded-xl bg-white bg-opacity-10 p-2.5 cursor-pointer flex items-center justify-center flex-col;
    }
    .add_car h6 {
        @apply mt-3 text-text_primary font-medium text-sm;
    }
    .add_icon_wrapper {
        @apply h-8 w-8;
    }
    .image_wrapper {
        @apply h-24;
    }
    .image_wrapper img {
        @apply h-full w-full object-cover;
    }
    .car_details_wrapper {
        @apply flex flex-row justify-between items-center mt-2;
    }
    .car_detail {
        @apply text-text_primary text-xs;
    }
    .car_detail h5 {
        @apply font-bold mb-1 text-sm;
    }
    .icon_wrapper {
        @apply h-5 w-5;
    }
</style>


<section class="cars_grid">
    <div class="car">
        <div class="image_wrapper">
            <img src="/images/highlander.png" alt="car" />
        </div>
        <div class="car_details_wrapper">
            <div class="car_detail">
                <h5>Toyota Highlander</h5>
                <p>2019/Petrol/3.0</p>
            </div>
            <div class="icon_wrapper">
                <img src="/images/edit.png" alt="edit" />
            </div>
        </div>
    </div>
    <div class="car">
        <div class="image_wrapper">
            <img src="/images/highlander.png" alt="car" />
        </div>
        <div class="car_details_wrapper">
            <div class="car_detail">
                <h5>Toyota Highlander</h5>
                <p>2019/Petrol/3.0</p>
            </div>
            <div class="icon_wrapper">
                <img src="/images/edit.png" alt="edit" />
            </div>
        </div>
    </div>
    <div class="car">
        <div class="image_wrapper">
            <img src="/images/highlander.png" alt="car" />
        </div>
        <div class="car_details_wrapper">
            <div class="car_detail">
                <h5>Toyota Highlander</h5>
                <p>2019/Petrol/3.0</p>
            </div>
            <div class="icon_wrapper">
                <img src="/images/edit.png" alt="edit" />
            </div>
        </div>
    </div>
    <div class="add_car">
        <div class="add_icon_wrapper">
            <img src="/images/plus.png" alt="plus" />
        </div>
        <h6>Add new car</h6>
    </div>
</section>