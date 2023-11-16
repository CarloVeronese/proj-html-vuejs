<script>
export default {
    data() {
        return {
            activeTestIndex: 0,
            testimonialsArray: [
                {
                    name: 'Sophia Jones',
                    imgPathKey: 'sophia',
                    testimony: 'Avada Driving School really helped me build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.'
                },
                {
                    name: 'Grant Scott',
                    imgPathKey: 'grant',
                    testimony: "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way. Like an improv conversation. An improversation."
                },
                {
                    name: 'Harold Schrute',
                    imgPathKey: 'harold',
                    testimony: "In the wild, there is no health care. In the wild, health care is, 'Ow, I hurt my leg! I can't run! A lion eats me and I'm dead!' Well, I'm not dead. I'm the lion. You're dead!"
                },
                {
                    name: 'Kate Malone',
                    imgPathKey: 'kate',
                    testimony: "Nope it's not Ashton Kutcher, it's Kate Malone. Equally handsome, equally smart."
                },
                {
                    name: 'Kelly Kapoor',
                    imgPathKey: 'kelly',
                    testimony: "I swallowed a tapeworm last night. It's going to grow up to three feet inside of me and then it eats all my food so that I don't get fat. And then after three months I take some medicine and then I pass it. Creed sold it to me. It's from Mexico."
                }
            ]
        }
    },
    methods: {
        clickSelector(index) {
            this.activeTestIndex = index;
        }
    }
}
</script>

<template>
    <section class="testimonials">
        <div class="container">
            <h3 class="section-title">Testimonials</h3>
            <h4 class="section-subtitle">Here's what our happy drivers had to say about our services:</h4>
            <div class="testimonial-profile align-center justify-center" v-for="(profile, testimonialsIdex) in testimonialsArray" v-show="testimonialsIdex === activeTestIndex">
                <img :src="`testimonial-${profile.imgPathKey}.png`" alt="" class="testimonial-img">
                <p class="testimonial-paragraph">{{profile.testimony}}</p>
                <h4 class="testimonial-name">{{profile.name}}</h4>
            </div>
            <div class="profile-selection">
                <font-awesome-icon class="selector" v-for="(n, index) in testimonialsArray" :icon="index === activeTestIndex ? 'fa-solid fa-circle' : 'fa-regular fa-circle'" @click="clickSelector(index)"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as*;
.testimonials {
    background-image: url('testimonial-background.jpg');
    background-position: bottom;
    background-size: cover;
    .container {
        padding: 200px 0 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        .section-title {
            color: $grey;
        }
        .section-subtitle {
            color: $light-grey;
            font-size: 21px;
        }
        .testimonial-profile {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 704px;
            font-size: 21px;
            .testimonial-img {
                width: 150px;
            }
            .testimonial-paragraph {
                text-align: center;
                color: $light-grey;
            }
            .testimonial-name {
                color: $light-grey;
                font-weight: 800;
            }
        }
        .profile-selection {
            display: flex;
            gap: 10px;
            .selector {
                width: 12px;
                color: $light-grey;
                cursor: pointer;
            }
        }
    }
}
</style>