<template>
    <section class="p-messege__bg">
    <div class="p-messege__inner">
        <div class="p-messege__contents">
            <h3 class="p-messege__headingTitle">Message</h3>
            <p class="p-messege__headingDescription">
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
            <p class="p-messege__headingDescription">
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </p>
        </div>
    </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";

.p-messege {
    margin-bottom: 40px;
    @include desktop {
    }
    &__bg{
        background-image: url(http://placehold.it/350x350);
        text-align: right;
        margin-bottom: 85px;
        background-size: 100%;
        @include desktop() {
            background-repeat: no-repeat;
        }
    }
    &__inner {
        @include c-container;
    }
    &__contents{
        width: 100%;
        margin-left: auto;
        position: relative;
        top: 134px;
        background-color: rgba(195,80,79,.9);
        @include desktop() {
            width: 40%;
            position: static;
            background-color: transparent;
        }
    }
    &__headingTitle {
        padding: 30px 0;
        font-size: 2.5rem;
        font-family: Yu Mincho Medium,YuMincho,serif;
        font-weight: 400;
        color: #fff;
        text-align: center;
        background-size: cover;
        &::first-letter {
            font-size: 1.5em;
            color: #fff;
            @include desktop{
                font-size: 1.5em;
                color: #C3504F;
            }
        }
        @include desktop{
            margin-bottom: 1.2em;
            font-size: 5rem;
        }
    }
    &__headingDescription{
        color: #FFF;
        text-align: center;
        padding: 0 13px 50px 13px;
        @include desktop {

        }
    }
}

</style>
