<style>
    .branches_grid {
        @apply px-3 w-full flex flex-col;
    }
    input[type="radio"] {
        @apply w-0 h-0 opacity-0;
    }
    .branch_wrapper input[type="radio"]:checked ~ label {
        @apply border-2 border-highlight;
    }
    .branch {
        @apply flex flex-row w-full h-auto rounded-xl bg-white bg-opacity-10 p-3;
    }
    .branch_image {
        @apply w-2/5 h-24;
    }
    .branch_image img {
        @apply w-full h-full object-cover;
    }
    .branch_details {
        @apply py-1 flex flex-col ml-2 text-text_primary w-3/5 justify-between;
    }
    .branch_details .name {
        @apply font-extrabold;
    }
    .branch_details .branch_location {
        @apply font-light;
    }
    .distance_rating {
        @apply flex flex-row justify-between items-center;
    }
    .distance_icon_wrapper {
        @apply h-auto w-auto flex flex-row items-center;
    }
    .distance_icon_wrapper img {
        @apply h-6;
    }
    .distance_icon_wrapper span {
        @apply text-base ml-1;
    }
    .rating {
        @apply flex flex-row h-3;
    }
</style>

<section class="branches_grid">
    <div class="branch_wrapper">
        <input type="radio" id="branch1" name="branch"/>
        <label class="branch" for="branch1">
            <div class="branch_image">
                <img src="/images/branch1.jpg" alt="mechanic at work" />
            </div>
            <div class="branch_details">
                <h5 class="name">Linking Automobile Ltd</h5>
                <p class="branch_location">Westlands Blvd, Accra</p>
                <div class="distance_rating">
                    <div class="distance_icon_wrapper"> 
                        <img src="/images/location-pin.png" alt="location" />
                        <span>6 miles</span>
                    </div>
                    <div class="rating">
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                    </div>
                </div>
            </div>
        </label>
    </div>
    <div class="branch_wrapper">
        <input type="radio" id="branch2" name="branch"/>
        <label class="branch" type="radio" for="branch2">
            <div class="branch_image">
                <img src="/images/branch2.jpg" alt="mechanic at work" />
            </div>
            <div class="branch_details">
                <h5 class="name">Linking Automobile Ltd</h5>
                <p class="branch_location">Nr Purewater Road, Accra</p>
                <div class="distance_rating">
                    <div class="distance_icon_wrapper"> 
                        <img src="/images/location-pin.png" alt="location" />
                        <span>4 miles</span>
                    </div>
                    <div class="rating">
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                        <img src="/images/star.png" alt="star" />
                    </div>
                </div>
            </div>
        </label>
    </div>
</section>