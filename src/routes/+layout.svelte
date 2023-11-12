<script>
    import "../styles/app.css";
    import Tapbar from "../lib/components/Tapbar.svelte";
    import Header from "../lib/components/Header.svelte";
  </script>
  
  <main>
    <Header />
      <slot />
    <Tapbar />
  </main>