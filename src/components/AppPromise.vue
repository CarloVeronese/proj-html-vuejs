<script>
export default {
    data() {
        return {
            courses: [
                {
                    imgPath: 'courses-passplus-200x200.jpg',
                    name: 'Pass Plus'
                },
                {
                    imgPath: 'course-intensive-200x200.jpg',
                    name: 'Intensive Course'
                },
                {
                    imgPath: 'courses-instructor-200x200.jpg',
                    name: 'Instructors'
                }
            ]
        }
    }
}
</script>

<template>
    <section class="promise">
        <div class="container">
            <div class="card">
                <h3 class="card-title">Courses</h3>
                <p class="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                <button class="button-green"><a href="">COURSE INFORMATION</a></button>
                <img src="new-corner.jpg" class="new-corner" alt="">
            </div>
            <div class="courses justify-between grow-1">
                <div class="course-container align-center justify-between" v-for="course in courses">
                    <img :src="course.imgPath" alt="">
                    <div class="course-title">{{ course.name }}</div>
                    <button><a href="">LEARN MORE</a></button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../style/partials/variables.scss' as*;
    .promise {
        background-image: url('promise-background.jpg');
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
        position: relative;
        height: 517px;
        &::after {
            content: '';
            position: absolute;
            border-top-right-radius: 50% 100%;
            border-top-left-radius: 50% 100%;
            bottom: -78px;
            height: 80px;
            width: 100%;
            transform: rotate(180deg);
            z-index: 1;
            background-color: #E4E9ED;
        }
        .container {
            display: flex;
            gap: 40px;
            .card {
                width: 428px;
                padding: 60px 50px;
                gap: 40px;
                position: relative;
                margin-top: -30px;
                z-index: 2;
                .card-title {
                    font-size: 40px;
                    padding-bottom: 10px;
                }
                .new-corner {
                    width: 74px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 10px 0;
                }
            }
            .courses {
                padding-top: 80px;
                display: flex;
                .course-container {
                    display: flex;
                    flex-direction: column;
                    img {
                        width: 193px;
                        aspect-ratio: 1 / 1;
                    }
                    .course-title {
                        color: $dark-blue;
                        font-weight: bold;
                        font-size: 20px;
                    }
                    button {
                        font-weight: bold;  
                        border: 3px solid $dark-blue;
                        background-color: transparent;
                        a {
                            color: $dark-blue;
                            line-height: 30px;
                            padding: 0 20px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }            
    }
</style>