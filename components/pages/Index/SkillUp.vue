<template>
  <section class="p-skillUp">
    <div class="p-skillUp__inner">
      <div class="p-skillUp__heading">
        <h3 class="p-skillUp__headingTitle">スキルアップ施策</h3>
        <p class="p-skillUp__headingIntro">chatboxでは自分で決めた目標に対して、積極的にスキルアップを目指していく人を応援しています。「自ら学び、教え合う」ことがごく自然に受け入れられている社内なので、得意分野をどんどん伸ばし、苦手分野は得意な人に教えてもらいながら補強していくことが可能です。</p>
      </div>
      <ul class="p-skillUp__Lists">
        <skillup-list :index="index" :skill="item" v-for="(item,index) in skillItems" :key="index"></skillup-list>
      </ul>
    </div>
  </section>
</template>

<script>
import SkillupList from "./_SkillUpList.vue";
export default {
  props: {
    skillItems: Array
  },
  data() {
    return {};
  },
  components: {
    SkillupList
  },
  async mounted() {}
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
.p-skillUp {
  margin-bottom: 108px;
  @include desktop {
    margin-bottom: 178px;
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
  }
  &__Lists {
  }
}
</style>
