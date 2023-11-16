<script>
export default {
    data() {
        return {
            newsArray: [
                {
                    imgPath: 'blog-choosecar-700x441.jpg',
                    newsTitle: 'What Car to Start With?',
                    newsDate: 'February 7th, 2019',
                    numComments: 0,
                    newsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
                },
                {
                    imgPath: 'blogpost-10and2-700x441.jpg',
                    newsTitle: 'Avada Driving School Expanding',
                    newsDate: 'February 7th, 2019',
                    numComments: 0,
                    newsDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
                }
            ]
        }
    }
}
</script>

<template>
    <section class="latest-news-section">
        <div class="container">
            <div class="card">
                <h3 class="section-title">Latest News</h3>
                <div class="latest-news justify-between">
                    <div class="news-container align-center" v-for="article in newsArray">
                        <img :src="article.imgPath" alt="" class="news-img">
                        <h3 class="news-title green">{{article.newsTitle}}</h3>
                        <div class="news-subtitle">
                            <span class="light-grey">{{article.newsDate}}</span>
                            <span>|</span>
                            <span class="green">{{article.numComments}} Comment<span v-show="article.numComments != 1">s</span></span>
                        </div>
                        <p class="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                </div>
                <button class="button-green"><a href="">MORE FROM THE BLOG</a></button>
                <img src="latestnews-bottom-1200x105.png" class="news-bottom" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/partials/variables.scss' as*;
    .latest-news-section {
        background-image: url('latestnews-background.jpg');
        height: 875px;
        background-position: bottom;
        background-size: cover;
        display: flex;
        .card {
            border-top: 5px solid $dark-blue;
            margin-top: -50px;
            padding: 75px 0;
            gap: 65px;
            position: relative;
            box-shadow: 0px 20px 10px 10px rgba(0, 0, 0, 0.08);
            border-radius: 10px 10px 0 0;
            .latest-news {
                display: flex;
                gap: 28px;
                .news-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    .news-img {
                        width: 500px;
                        padding-bottom: 8px;
                    }
                    .news-title {
                        font-size: 21px;
                    }
                    .news-subtitle {
                        display: flex;
                        gap: 6px;
                        font-size: 13px;
                    }
                }
            }
            .news-bottom {
                position: absolute;
                top: 100%;
            }
        }
    }
</style>