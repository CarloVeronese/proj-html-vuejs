<script>
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 form-description">
                <h3 class="section-title">Get Behind The Wheel</h3>
                <h4 class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</h4>
                <p class="section-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae frangilla nibh.</p>
            </div>
            <div class="col-6 card-container">
                <div class="card">
                    <div class="card-title">First Lesson Free!</div>
                    <div class="card-paragraph">When you make a block booking with us your first lesson is included free.</div>
                    <div class="form">
                        <input type="text" placeholder="Your Name*">
                        <input type="email" placeholder="Email*">
                        <input type="number" placeholder="Telephone">
                        <input type="text" placeholder="Location">
                    </div>
                    <button class="button-green form-button"><a>REQUEST A CALLBACK</a></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as*;
.container {
    padding: 30px 0 80px;
}
.form-description {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-right: 28px;
    .section-title {
        color: $grey;
        padding: 5px 0;
    }
    .section-subtitle {
        color: $light-grey;
        line-height: 35px;
    }
    .section-paragraph {
        color: $light-grey;
    }
}
.card-container {
    padding-left: 23px;
    margin-top: -70px;
    z-index: 1;
    .card {
        padding: 45px 40px;
        gap: 30px;
        .card-title {
            color: $green;
            font-weight: 800;
            font-size: 30px;
        }
        .form {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 30px;
            input {
                line-height: 52px;
                padding: 0 10px;
                background-color: $egg-white;
                border: 1px solid rgba(128, 128, 128, 0.266);
                border-radius: 5px;
            }
        }
        .form-button {
            margin-bottom: 15px;
        }
    }
}
</style>