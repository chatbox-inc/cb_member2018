<template>
  <section class="p-can">
    <div class="p-can__inner">
      <div class="p-can__heading">
        <h3 class="p-can__headingTitle">What I can</h3>
        <p class="p-can__headingIntro">
            Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </p>
      </div>
      <ul class="p-can__Lists">
        <can :index="index" v-for="index in 3" :key="index"></can>
      </ul>
    </div>
  </section>
</template>

<script>
import Can from "./_Can.vue";
export default {
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
