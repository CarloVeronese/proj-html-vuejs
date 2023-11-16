<script>
export default {
    props: {
        contacts: Array,
        courses: Array
    }
}
</script>

<template>
    <section class="footer-content">
        <div class="container footer-menu justify-between">
            <div class="company-info">
                <img src="avada-drivers-logo-1x.png" class="company-logo" alt="">
                <p class="company-paragraph light-grey">Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.</p>
            </div>
            <div class="list-container">
                <h4 class="list-title">CONTACT DETAILS</h4>
                <ul class="footer-list">
                    <li class="footer-list-item light-grey" v-for="(contact, contactIndex) in contacts" :class="contactIndex > 0 ? 'align-center' : ''">
                        <font-awesome-icon :icon="`fa-${contact.icon.type} fa-${contact.icon.name}`"/>
                        <a href="" class="detail light-grey">{{contact.detail}}</a>
                    </li>
                </ul>
            </div>
            <div class="list-container">
                <h4 class="list-title">COURSES</h4>
                <ul class="footer-list">
                    <li class="footer-list-item light-grey align-center" v-for="course in courses">
                        <font-awesome-icon icon="fa-regular fa-circle-right" class="green"/>
                        <a href="" class="green course">{{course}}</a>
                    </li>
                </ul>
            </div>
            <div class="ad align-center">
                <img src="footer-ad-grid-400x357.png" alt="" class="ad-img">
                <button class="button-green justify-center"><a href="">BOOK NOW</a></button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.footer-content {
    background-image: url('footer-background-color.jpg');
    background-position: -90px;
    background-size: cover;
    padding: 65px 0 70px;
    gap: 22px;
    .footer-menu {
        display: flex;
        .company-info {
            display: flex;
            flex-direction: column;
            width: 266px;
            gap: 12px;
            font-size: 13px;
            margin-right: 25px;
            .company-logo {
                width: 232px;
            }
            .company-paragraph {
                line-height: 26px;
            }
        }
        .list-container {
            display: flex;
            flex-direction: column;
            gap: 26px;
            width: 200px;
            .list-title {
                color: white;
            }
            .footer-list {
                display: flex;
                flex-direction: column;
                gap: 20px;
                .footer-list-item {
                    display: flex;
                    gap: 10px;
                    .detail {
                        font-size: 14px;
                        line-height: 25px;
                    }
                    .course {
                        font-size: 17px;
                    }
                }
            }
        }
        .ad {
            display: flex;
            flex-direction: column;
            gap: 25px;
            .ad-img {
                width: 264px;
            }
        }
    }
}
</style>