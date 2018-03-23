<template>
  <section class="p-can">
    <div class="p-can__inner">
      <div class="p-can__heading">
        <h3 class="p-can__headingTitle">What I can</h3>
        <div class="p-can__headingIntro" v-html="marked(items.summary)"></div>
      </div>
      <ul class="p-can__Lists">
        <can :index="index" v-for="(item,index) in items.contents" :key="index"></can>
      </ul>
    </div>
  </section>
</template>

<script>
import Can from "./_Can.vue";
export default {
  props: {
    items: Object
  },
  components: {
    Can
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
.p-can {
  margin-bottom: 50px;
  @include desktop {
    margin-bottom: 130px;
  }
  &__inner {
    @include c-container;
  }
  &__heading {
  }
  &__headingTitle {
    @include c-titleCenter;
  }
  &__headingIntro {
    margin-bottom: 40px;
    @include desktop {
      padding: 0 92px;
    }
  }
  &__Lists {
  }
}
</style>
