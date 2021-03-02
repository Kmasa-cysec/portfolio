<template>
    <!--<header class="sticky-top">-->
        <b-navbar toggleable="md" type="dark" variant="info" class="sticky-top">
        <div id="myheader-logo">
            <b-navbar-brand class="text-white" href="#">Kmasa's PortFolio</b-navbar-brand>
        </div>
        <b-navbar-toggle class="navbar-expand-sm" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <div class="nav" id="myheader-nav">
                <a href="#top" class="nav-button" v-smooth-scroll>Top</a>
                <a href="#about" class="nav-button" v-smooth-scroll>About</a>
                <a href="#skill" class="nav-button" v-smooth-scroll>Skills</a>
                <a href="#work" class="nav-button" v-smooth-scroll>Works</a>
            </div>
        </b-collapse>
        </b-navbar>
        <!--    </header> -->
</template>

<style>
b-navbar {
    background: #191970;
    display: flex;
}
#myheader-logo {
    margin-right: auto;
    padding: 10px;
}
#myheader-nav {
    margin-left: auto;
    float: right;
}
#myheader-nav a {
    color: #fff;
    padding: 20px;
}
</style>
