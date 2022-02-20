<template>
  <Root>
    <VantSwipe
      v-bind="{ autoplay: 3000, 'indicator-color': 'rgba(221,53,25,1)' }"
    >
      <VantSwipeItem>
        <CustomImg
          :style="{
            display: 'block',
            boxSizing: 'border-box',
            width: '100%',
            height: '1.5rem',
          }"
          v-bind="{
            imgSrc:
              '//m15.360buyimg.com/mobilecms/jfs/t1/106610/25/22106/145851/620476c7Ed628b01c/eba9fbce2a0bcfc8.jpg!cr_1053x420_4_0!q70.jpg',
          }"
        >
        </CustomImg>
      </VantSwipeItem>

      <VantSwipeItem>
        <CustomImg
          :style="{
            display: 'block',
            boxSizing: 'border-box',
            width: '100%',
            height: '1.5rem',
          }"
          v-bind="{
            imgSrc:
              '//m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/209189/18/12905/162980/61bbf501E2d49c634/29452e71e84c0e39.png!cr_1053x420_4_0!q70.jpg',
          }"
        >
        </CustomImg>
      </VantSwipeItem>
    </VantSwipe>
  </Root>
</template>

<script>
import Root from "./Root.vue";
import VantSwipe from "./VantSwipe.vue";
import VantSwipeItem from "./VantSwipeItem.vue";
import CustomImg from "./CustomImg.vue";

export default {
  name: "ImageSwipe",
  components: {
    Root,
    VantSwipe,
    VantSwipeItem,
    CustomImg,
  },
};
</script>
