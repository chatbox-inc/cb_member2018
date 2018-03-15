<template>
  <section class="p-interview">
    <div class="p-interview__inner">
      <div class="p-interview__heading">
        <h3 class="p-interview__headingTitle">Interview</h3>
        <p class="p-interview__headingDescription">
          <span></span>
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        </p>
      </div>
      <div class="p-interview__sec01">
        <div class="p-interview__sec01Img"></div>
        <div class="p-interview__sec01Keywords">
          <span class="p-interview__sec01Keyword">築いていきたいのは<br></span>
          <span class="p-interview__sec01Keyword">Webのこれからを語り会う会社</span>
        </div>
      </div>
      <div class="p-interview__sec02">
        <div class="p-interview__sec02Description">
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          <br>
            Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          <br>
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
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-interview {
  margin-bottom: 40px;
  @include desktop {
    margin-bottom: 100px;
  }
  &__inner {
    @include c-container;
  }
  &__heading {
    margin-bottom: 30px;
  }
  &__headingTitle {
    @include c-titleCenter;
  }
  /*&__headingDescription{*/
  /*span{*/
  /*margin-top: 30px;*/
  /*}*/
  /*}*/
  &__sec01 {
    @include desktop() {
      position: relative;
    }
  }
  &__sec01Keywords {
    width: 30%;
    display: inline-block;
    height: 300px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: 2px;
    margin: 30px 10px 30px 0;
    font-size: 1.8rem;
    font-weight: 700;
    vertical-align: top;
    color: #c3504f;
    position: relative;
    left: 180px;
    @include desktop() {
      width: 60%;
    }
  }
  &__sec01Img {
    display: inline-block;
    width: 60%;
    background: url("/images/skill_talk.jpg") no-repeat;
    background-position: top;
    background-size: cover;
    height: 400px;
    position: absolute;
    left: 0;
    @include desktop() {
      margin-bottom: 60px;
      background-position: center;
      width: 55%;
      height: auto;
      display: inline-block;
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
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(hsla(0, 0%, 99%, 0)),
        color-stop(10%, hsla(0, 0%, 99%, 0.5)),
        color-stop(20%, hsla(0, 0%, 100%, 0.8)),
        color-stop(25%, hsla(0, 0%, 100%, 0.85)),
        color-stop(61%, hsla(0, 0%, 100%, 0.9)),
        color-stop(80%, #fff)
      );
    }
  }
  &__sec02 {
    position: relative;
    z-index: 1000;
    left: -20px;
    @include desktop() {
      left: 0;
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
  &__sec02Description {
    padding-top: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.72) 4%,
      rgba(255, 255, 255, 1) 37%,
      rgba(255, 255, 255, 1) 46%,
      rgba(255, 255, 255, 1) 98%
    );
    @include desktop() {
      padding-top: 100px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.72) 17%,
        rgba(255, 255, 255, 1) 37%,
        rgba(255, 255, 255, 1) 46%,
        rgba(255, 255, 255, 1) 98%
      );
    }
    p {
      width: 100%;
      margin-left: auto;
      padding-left: 20px;
      @include desktop() {
        width: 60%;
      }
    }
  }
  &__sec02Keywords {
    display: inline-block;
    padding-right: 20px;
    width: 40%;
    text-align: center;
    @include desktop() {
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
