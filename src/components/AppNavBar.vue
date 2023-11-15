<script>
export default {
    data() {
        return {
            activeNavbar: 0
        }
    },
    props: {
        navbarList: Array,
    },
    methods: {
        clickMenuItem(index) {
            this.activeNavbar = index;
        }
    }
};
</script>

<template>
    <section class="navbar">
        <div class="container">
            <div class="navbar-content align-center">
                <img src="avada-drivers-logo-1x.png" alt="" class="logo" />
                <ul class="navbar-menu grow-1 align-center">
                    <li class="navbar-item align-center" v-for="(item, index) in navbarList">
                        <div class="menu-item" :class="index === activeNavbar ? 'active' : '' " @click="clickMenuItem(index)">{{ item.name.toUpperCase() }}</div>
                        <span class="new-item" v-show="item.newItem">NEW</span>
                    </li>
                </ul>
                <button><a href="">BOOK NOW</a></button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
.navbar {
    background-color: rgba(0, 0, 0, 0.25);
    .navbar-content{
        padding: 35px 0;
        display: flex;
        gap: 44px;
        .logo {
            width: 255px;
            object-fit: contain;
        }
        .navbar-menu {
            display: flex;
            gap: 44px;
            justify-content: flex-end;
            font-size: 15px;
            font-weight: 800;
            color: white;
            .navbar-item {
                display: flex;
                gap: 8px;
                .menu-item {
                    cursor: pointer;
                }
                .active {
                    color: $green;
                    position: relative;
                    &::after {
                        content: '';
                        padding: 1px;
                        background-color: $green;
                        position: absolute;
                        right: 0;
                        left: 0;
                        bottom: -5px;
                    }
                    }
                .new-item {
                    background-color: $green;
                    font-size: 11px;
                    border-radius: 5px;
                    line-height: 20px;
                    padding: 0 6px;
                }
            }
        }
    }
}
</style>
