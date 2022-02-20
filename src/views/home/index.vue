<template>
  <div>
    <ImageSwipe />
    <NavSwipe />
  </div>
</template>

<script>
import ImageSwipe from "@/components/ImageSwipe";
import NavSwipe from "@/components/NavSwipe";

export default {
  name: "Home",
  components: {
    ImageSwipe,
    NavSwipe,
  },
};
</script>
