<script>

</script>

<template>
    <section class="newsletter">
        <div class="container">
            <div class="newsletter-container justify-between">
                <h3 class="section-title self-center">Sign up to our Newsletter</h3>
                <input type="email" name="" id="" class="newsletter-email">
                <button class="button-green justify-center"><a href="">SUBSCRIBE</a></button>
                <p class="light-grey data self-center">(We do not share your data with anybody, and only use it for its intended purpose)</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.newsletter {
    background-image: url('newsletter_background.jpg');
    background-size: cover;
    background-position-x: 40px;
    padding: 52px 0 70px;
    .newsletter-container {
        width: 606px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        .newsletter-email {
            margin-top: 26px;
            background-color: #F7F7F7;
        }
        .data {
            font-size: 14px;
            margin-top: 10px;
        }
    }
}
</style>