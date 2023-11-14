<script>
    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';
    // register Swiper custom elements
    register();
</script>

<style>
    .dashboard_slider {
        @apply w-full mt-10 mb-24 h-64;
    }
    swiper-container {
        @apply h-full;
    }
    img {
        @apply object-cover h-full w-full;
    }
</style>

<section class="dashboard_slider">
    <swiper-container
        loop={true}
        autoplay={true}
    >
        <swiper-slide>
            <img src="/images/slider.jpg" alt="slider1" />
        </swiper-slide>
        <swiper-slide>
            <img src="/images/slider_two.jpg" alt="slider2" />
        </swiper-slide>
        <swiper-slide>
            <img src="/images/slider_three.jpg" alt="slider3" />
        </swiper-slide>
      </swiper-container>
</section>