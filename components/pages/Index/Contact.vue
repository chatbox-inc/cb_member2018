<template>
  <div class="p-contact">
    <div class="p-contact--inner">
      <h1 class="p-contact--title">Contact</h1>
      <p class="p-contact--sentence">Web制作のご相談、技術顧問に関するご相談、イベント・スクールに関するお問い合わせなど、 chatbox に関する相談・ご質問はお気軽に下記「お問い合わせフォーム」からお願いいたします。</p>
      <a class="p-contact--button" href="https://chatbox-inc.com/contact">お問い合わせフォームへ </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-contact {
  @include c-container;
  margin-bottom: 120px;
  @include desktop() {
    margin-bottom: 196px;
    text-align: center;
  }
  &--inner {
    @include desktop() {
      text-align: center;
    }
  }
  &--title {
    @include c-title;
    text-align: center;
    margin-bottom: 1rem;
  }
  &--sentence {
    @include c-sentence;
    max-width: 550px;
    margin: 0 auto;
    margin-bottom: 2rem;
    @include desktop() {
      margin-bottom: 4rem;
      text-align: left;
    }
  }
  &--button {
    display: inline-block;
    padding: 3rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    background: #c3504f;
    text-decoration: none;
    position: relative;
    transition: all 0.5s;
    line-height: 1.2;
    @include desktop {
      max-width: 450px;
      font-size: 2rem;
    }
    &:hover {
      opacity: 0.8;
      transition: all 0.5s;
      &::before {
        right: 0.2rem;
        transition: all 0.5s;
      }
    }
  }
  &--button::before {
    content: "";
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background-image: url("/images/icon_arrow-white.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    right: 0.7rem;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;
    @include desktop {
      width: 2rem;
      height: 2rem;
      right: 1rem;
    }
  }
}
</style>
