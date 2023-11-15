<script>
export default {
    props: {
        companyNumber: String
    }
}
</script>

<template>
    <section class="header-info">
    <div class="container">
        <div class="row justify-between">
            <h4>We have a 95% Successful Pass Rate!</h4>
            <h4 class="call align-center">
                <font-awesome-icon icon="fa-solid fa-phone" flip="horizontal" />
                <div>
                    <span>Give us a call to book your tuition!</span>
                    <span class="company-number">{{ companyNumber }}</span>
                </div>
            </h4>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as*;

.header-info {
    background-color: $dark-grey;
    h4 {
        color: rgba(211, 211, 211, 0.688);
        font-weight: 300;
        font-size: 12px;
        line-height: 45px;
    }
    .call {
        display: flex;
        gap: 8px;
        .company-number {
            margin-left: 2px;
        }
    }
    
}
</style>