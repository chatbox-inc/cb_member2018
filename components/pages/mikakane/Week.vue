<template>
  <section class="p-week">
    <div class="p-week__inner">
      <div class="p-week__heading">
        <h3 class="p-week__headingTitle">For a week</h3>
        <p class="p-week__headingIntro">
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </p>
      </div>
      <ul class="p-week__lists">
        <week v-for="index in 7" :key="index" :index="index+1"></week>
      </ul>
    </div>
  </section>
</template>

<script>
import Week from "./_Week.vue";
export default {
  props: {},
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
