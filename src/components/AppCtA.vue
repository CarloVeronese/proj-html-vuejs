<script>
import {store} from '../store'
export default {
    data() {
        return {
            store: store
        }
    }
}
</script>

<template>
    <section class="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-6 cta-container">
                    <h3 class="section-title">Start Learning to Drive Today</h3>
                    <h4 class="section-subtitle">Give us a call to to schedule your first driving lesson</h4>
                </div>
                <div class="col-6 cta-number align-center">
                    <font-awesome-icon icon="fa-solid fa-phone-flip"/>
                    <span>{{ store.companyNumber }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.call-to-action {
    background-image: url('horizontal-cta-background.jpg');
    background-size: cover;
    background-position: center;
    height: 246px;
    padding-top: 70px;
    .cta-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .section-title {
            color: white;
        }
        .section-subtitle {
            font-weight: bold;
            color: white;
        }
    }
    .cta-number {
        font-size: 30px;
        color: white;
        display: flex;
        gap: 28px;
        padding-left: 220px;
    }
}
</style>