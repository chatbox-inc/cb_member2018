<template>
  <li :class="oddClass" >
    <div class="p-can__ListItemTumb" :style="thumbStyle"></div>
    <div class="p-can__ListItemDetail">
      <h4 class="p-can__ListItemDetailHeading">業務フロー改善のための業務管理システムの開発</h4>
      <p class="p-can__ListItemDetailDescription">
          Planning / Design / HTML,CSS / WordPress / Photo /<br>
          ある企業様の業務管理システムを制作させていただきました。<br>
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
          企画から実装など、すべて担当させていただきました。<br>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["index"],
  computed: {
    oddClass() {
      return {
        "p-can__ListItem": true,
        "is-odd": this.index % 2 !== 0
      };
    },
    thumbStyle() {
      return { backgroundImage: `url('/images/skill_talk.jpg')` };
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-can {
  &__ListItem {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    background: #faf7f7;
    border-right: 2px solid #c3504f;
    @include desktop {
      flex-wrap: nowrap;
    }
  }
  &__ListItem.is-odd {
    border-right: none;
    border-left: 2px solid #c3504f;
    flex-direction: row-reverse;
  }
  &__ListItemTumb {
    display: block;
    width: 100%;
    height: 200px;
    background-image: url("/images/skill_talk.jpg");
    background-position: center;
    background-size: cover;
    @include desktop {
      display: inline-block;
      width: 45%;
      height: auto;
    }
  }
  &__ListItemDetail {
    display: block;
    width: 100%;
    padding: 30px 40px;
    box-sizing: border-box;
    vertical-align: top;
    @include desktop {
      display: inline-block;
      width: 60%;
    }
  }
  &__ListItemDetailHeading {
    font-weight: bold;
    margin-bottom: 1em;
    font-size: 1.6rem;
    @include desktop {
      font-size: 1.9rem;
    }
  }
  &__ListItemDetailDescription {
  }
}
</style>
