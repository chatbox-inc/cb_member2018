<template>
  <section class="p-chatBox">
    <div class="p-chatBox__inner">
      <h1 class="p-chatBox__title">Chatbox</h1>
      <p class="p-chatBox__sentence">
          Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
      </p>
      <a class="p-chatBox__button" href="https://chatbox-inc.com/">
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
      return { backgroundImage: `url('/images/concept_photo02.jpg')` };
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
      text-align: center;
    }
  }
  &__button {
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 80px;
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
      height: 140px;
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
    background-size: cover;
    width: 40%;
    margin-right: auto;
    height: 80px;
    @include desktop {
      height: 140px;
    }
  }
  &__buttonText {
    display: inline-block;
    width: 45%;
    margin: 26px auto;
    color: #fff;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: left;
    font-size: 1.2rem;
    @include desktop {
      font-size: 2rem;
      width: 38%;
      margin: 44px auto;
    }
  }
}
</style>
