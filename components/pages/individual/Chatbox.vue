<template>
  <section class="p-chatBox">
    <div class="p-chatBox__inner">
      <h1 class="p-chatBox__title">Chatbox</h1>
      <p class="p-chatBox__sentence">
          Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
      </p>
      <a class="p-chatBox__button" href="">
        <div class="p-chatBox__buttonImg" :style="thumbStyle"></div>
        <div class="p-chatBox__buttonText">
            <p>株式会社chatboxの</p>
            <p>webサイトを見る</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('http://placehold.it/243x160')` };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-chatBox {
  @include c-container;
  margin-bottom: 120px;
  @include desktop() {
    margin-bottom: 196px;
    text-align: center;
  }
  &__inner {
    @include desktop() {
      text-align: center;
    }
  }
  &__title {
    @include c-title;
    text-align: center;
    margin-bottom: 1rem;
  }
  &__sentence {
    @include c-sentence;
    max-width: 550px;
    margin: 0 auto;
    margin-bottom: 2rem;
    @include desktop() {
      margin-bottom: 4rem;
      text-align: left;
    }
  }
  &__button {
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 140px;
    max-width: 100%;
    box-sizing: border-box;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    background: #c3504f;
    text-decoration: none;
    position: relative;
    transition: all 0.5s;
    line-height: 1.2;
    @include desktop {
      max-width: 600px;
      font-size: 2rem;
    }
    &:hover {
      opacity: 0.8;
      transition: all 0.5s;
    }
  }
  &__buttonImg {
    background-position: center;
    display: inline-block;
    width: 40%;
    margin-right: auto;
    height: 140px;
  }
  &__buttonText {
    display: inline-block;
    width: 46%;
    margin: 52px auto;
    color: #fff;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: left;
    @include desktop {
      width: 38%;
      margin: 44px auto;
    }
  }
}
</style>
