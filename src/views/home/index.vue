<template>
  <div class="home">
    <ImageSwipe />
    <NavSwipe />
    <SecondGoodsKill />
  </div>
</template>

<script>
import ImageSwipe from "@/components/ImageSwipe";
import NavSwipe from "@/components/NavSwipe";
import SecondGoodsKill from "@/components/SecondGoodsKill";

export default {
  name: "Home",
  components: {
    ImageSwipe,
    NavSwipe,
    SecondGoodsKill,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #efefef;
}
</style>
