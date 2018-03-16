<template>
  <section class="p-week">
    <div class="p-week__inner">
      <div class="p-week__heading">
        <h3 class="p-week__headingTitle">For a week</h3>
        <div class="p-week__headingIntro" v-html="marked(items.summary)"></div>
      </div>
      <ul class="p-week__lists">
        <week v-for="(item,index) in items.days" :key="index" :index="index+1" :item="item"></week>
      </ul>
    </div>
  </section>
</template>

<script>
import Week from "./_Week.vue";
export default {
  props: {
    items: Object
  },
  components: {
    Week
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-week {
  margin-bottom: 60px;
  @include desktop {
    margin-bottom: 130px;
  }
  &__inner {
    @include c-container;
  }
  &__headingTitle {
    @include c-titleCenter;
  }
  &__headingIntro {
    line-height: 2;
    margin-bottom: 60px;
    @include desktop {
      margin-bottom: 100px;
    }
  }
  &__lists {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @include desktop {
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
