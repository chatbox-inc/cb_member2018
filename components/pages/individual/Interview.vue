<template>
  <section class="p-interview">
    <div class="p-interview__inner">
      <div class="p-interview__heading">
        <h3 class="p-interview__headingTitle">Interview</h3>
        <p class="p-interview__headingDescription">
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </p>
      </div>
      <div class="p-interview__sec01">
        <div class="p-interview__sec01Img"></div>
        <div class="p-interview__sec01Keywords">
          <span class="p-interview__sec01Keyword">築いていきたいのは</span>
          <span class="p-interview__sec01Keyword">Webのこれからを語り会う会社</span>
        </div>
      </div>
      <div class="p-interview__sec02">
        <div class="p-interview__sec02Description">
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
          <p>
            Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-interview {
  margin-bottom: 40px;
  @include desktop {
    margin-bottom: 99px;
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
  }
  &__sec01 {
    @include desktop() {
      position: relative;
    }
  }
  &__sec01Img {
    display: inline-block;
    width: 100%;
    background: url("http://placehold.it/445x540") no-repeat;
    background-position: top;
    background-size: contain;
    @include desktop() {
      margin-bottom: 60px;
      background-position: center;
      width: 55%;
      background-size: cover;
    }
    &::before {
      content: "";
      display: block;
      padding-top: 83%;
      @include desktop {
        padding-top: 100%;
      }
    }
  }
  &__sec01Description {
    margin-bottom: 30px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    right: 0;
    z-index: 10;
    @include desktop() {
      padding: 20px 0 25% 130px;
      width: 60%;
      position: absolute;
      background: linear-gradient(
        left,
        hsla(0, 0%, 99%, 0),
        hsla(0, 0%, 99%, 0.5) 10%,
        hsla(0, 0%, 100%, 0.8) 20%,
        hsla(0, 0%, 100%, 0.85) 25%,
        hsla(0, 0%, 100%, 0.9) 61%,
        #fff 80%
      );
    }
  }
  &__sec02 {
    display: flex;
    @include desktop() {
      padding-bottom: 300px;
      position: relative;
    }
  }
  &__sec02Img {
    display: inline-block;
    width: 59%;
    height: 59%;
    margin-bottom: 30px;
    background: url("/images/concept_photo02.jpg") center no-repeat;
    background-size: cover;
    @include desktop() {
      position: absolute;
      width: 50%;
      top: -90px;
      right: 0;
      z-index: 20;
      margin: 0;
      height: auto;
    }
    &::before {
      content: "";
      display: block;
      padding-top: 70%;
    }
  }
  &__sec02Keywords {
    display: inline-block;
    padding-right: 20px;
    width: 40%;
    text-align: center;
    @include desktop() {
      width: 50%;
      position: absolute;
      top: -60px;
      left: 0;
      background: linear-gradient(
        top,
        hsla(0, 0%, 99%, 0),
        hsla(0, 0%, 99%, 0.5) 10%,
        hsla(0, 0%, 100%, 0.8) 20%,
        hsla(0, 0%, 100%, 0.85) 25%,
        hsla(0, 0%, 100%, 0.9) 61%,
        #fff 80%
      );
    }
  }
  &__sec02Keyword {
    margin: 0 5px;
    display: inline-block;
    font-weight: bold;
    vertical-align: top;
    writing-mode: vertical-rl;
    color: #c3504f;
    text-orientation: upright;
    font-feature-settings: "pkna";
    font-size: 1.2rem;
    letter-spacing: 2px;
    @include desktop() {
      margin: 30px 1em;
      font-size: 1.8rem;
    }
  }
}
</style>