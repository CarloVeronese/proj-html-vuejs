<script>
export default {
    data() {
        return {
            rates: [
                {
                    ratePerc: 95,
                    rateType: 'pass rate'
                },
                {
                    ratePerc: 100,
                    rateType: 'referral rate'
                },
                {
                    ratePerc: 0,
                    rateType: 'accident'
                }
            ],
            instructorsProfiles: [
                {
                    name: 'Mike Hart',
                    imgPath: 'instructor-mikehart-200x127.jpg'
                },
                {
                    name: 'John Smith',
                    imgPath: 'instructor-johnsmith-200x127.jpg'
                },
                {
                    name: 'Angela Hart',
                    imgPath: 'instructor-angelahart-200x127.jpg'
                }
            ],
            socials: ['fa-facebook-f','fa-twitter', 'fa-instagram']
        }
    }
}
</script>

<template>
    <section class="instructors">
        <div class="container">
            <div class="row justify-between">
                <div class="card rate-card" v-for="(card, rateIndex) in rates" :class="rateIndex === 1 ? 'middle-card' : 'normal-card'">
                    <div class="rate justify-center align-center">
                        <span class="rate-perc">{{ card.ratePerc }}%</span>
                    </div>
                    <div class="rate-card-paragraph">{{ card.rateType.toUpperCase() }}</div>
                </div>
            </div>
            <div class="your-instructors">
                <h3 class="section-title">Your Instructors</h3>
                <div class="instructors-paragraph">
                    <p class="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                    <button class="button-green justify-center"><a href="">MORE ABOUT US</a></button>
                </div>
            </div>
                <div class="row justify-between align-start">
                    <div class="card instructor-card" v-for="(instructor, index) in instructorsProfiles" :class="index === 1 ? 'middle-card' : 'normal-card'">
                        <img :src="instructor.imgPath" alt="" :class="index === 1 ? 'instructor-main-img' : 'instructor-img'">
                        <h3 class="instructor-name">{{ instructor.name }}</h3>
                        <div class="socials-logos">
                            <a href="" v-for="social in socials">
                                <font-awesome-icon class="social-logo" :icon="`fa-brands ${social}`"/>
                            </a>
                        </div>
                        <p class="instructor-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>        
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as*;
.container {
    display: flex;
    flex-direction: column;
    gap: 80px;
    .normal-card {
        width: 364px;
    }
    .middle-card {
        width: 388px;
    }
    .rate-card {
        padding-top: 50px;
        padding-bottom: 80px;;
        .rate {
            border: 10px solid $green;
            color: $light-grey;
            border-radius: 50%;
            width: 220px;
            aspect-ratio: 1 / 1;
            display: flex;
            position: relative;
            .rate-perc {
                font-size: 50px;
            }
        }
        .rate-card-paragraph {
            color: $light-grey;
            font-weight: bold;
        }
    }
    .instructor-card {
        padding: 40px 40px 65px;
        margin-bottom: -90px;
        .instructor-name {
            color: $grey;
            font-size: 24px;
        }
        .instructor-img {
            width: 288px;
        }
        .instructor-main-img {
            width: 306px;
        }
        .socials-logos {
            display: flex;
            gap: 20px;
            font-size: 20px;
            .social-logo {
                color: $socials-grey;
            }
        }
        .instructor-card-paragraph {
            color: $light-grey;
            text-align: center;
            font-size: 16px;
            line-height: 30px;
        }
    }
    .card {
        z-index: 2;
        gap: 45px;
        border-top: 5px solid $green;
    }
    .your-instructors {
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        .instructors-paragraph {
            display: flex;
            gap: 45px;
            .section-paragraph {
                font-size: 20px;
            }
            button {
                width: 370px;
                flex-shrink: 0;
            }
        }
    }
}

</style>