<template>
  <section class="p-introduction">
    <div class="p-introduction--inner">
      <div class="p-introduction__listItem">
        <div class="p-introduction__listItemThumb" :style="thumbStyle"></div>
      </div>
      <div class="p-introduction__listItems">
        <div class="p-introduction__listItemPosition">株式会社 chatbox / 代表取締役</div>
        <p class="p-introduction__listItemName">後藤 知宏</p>
        <div class="p-introduction__listItemNameEn">Goto Tomohiro</div>
        <p class="p-introduction__listItemDescription">
          Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </p>
        <div class="p-introduction__listItemSns">
          <a href="">
            <span class="p-introduction__twitter">
              <i aria-hidden="true" class="fa fa-twitter fa-2x" data-v-0d2d6594=""></i>
            </span>
          </a>
          <a href="">
            <span class="p-introduction__twitter">
              <i aria-hidden="true" class="fa fa-twitter fa-2x" data-v-0d2d6594=""></i>
            </span>
          </a>
          <a href="">
            <span class="p-introduction__twitter">
              <i aria-hidden="true" class="fa fa-twitter fa-2x" data-v-0d2d6594=""></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('/images/skill_talk.jpg')` };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-introduction {
  @include c-container;
  margin-bottom: 100px;
  margin-top: 260px;
  @include desktop() {
    margin-bottom: 196px;
    text-align: center;
    margin-top: 0;
  }
  &__listItem {
    padding-left: 2%;
    padding-right: 2%;
    box-sizing: border-box;
    width: 40%;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    @include desktop() {
      width: 30%;
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
  &__listItems {
    padding-left: 2%;
    padding-right: 2%;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    @include desktop() {
      width: 70%;
      max-width: 100%;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
  &__listItemThumb {
    width: 80%;
    margin: 0 auto 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    @include desktop {
      width: 100%;
    }
    &::before {
      content: "";
      display: block;
      padding-top: 100%;
      margin: 0 auto;
    }
  }
  &__listItemPosition {
    margin-bottom: 8px;
    color: #393739;
    font-size: 2rem;
  }
  &__listItemName {
    letter-spacing: 2px;
    color: #393739;
    font-size: 3.4rem;
    line-height: 1.4;
    @include desktop {
      font-size: 4.5rem;
    }
  }
  &__listItemNameEn {
    margin: 0 auto 5%;
    padding-bottom: 5%;
    color: #ccc4cb;
    font-family: "Yu Mincho Medium", YuMincho, serif;
    font-size: 2rem;
    letter-spacing: 1.5px;
    position: relative;
    &::after {
      content: "";
      width: 60%;
      border-bottom: 2px solid #c3504f;
      position: absolute;
      left: 20%;
      bottom: 0;
    }
  }
  &__listItemDescription {
    margin-bottom: 2rem;
  }
  &__listItemSns {
    margin-top: 10px;
    color: #fff;
  }
  &__twitter {
    display: inline-block;
    width: 55px;
    height: 55px;
    background-color: #c3504f;
    margin-right: 1rem;
    border-radius: 50%;
    i {
      padding-top: 13px;
    }
    @include desktop {
      margin-right: 2rem;
    }
  }
  .fa-twitter:before {
    color: #fff;
  }
}
</style>
