<template>
    <div class="top">
        <h1> {{ msg }} </h1>
    </div>
</template>

<script>
export default {
    name: 'Top',
    data () {
        return {
            msg: 'Welcome to Kmasa\'s Portfolio'
        }
    }
}
</script>

<style scoped>
div {
    /*background: #2980B9;*/
    /*background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);*/
    /*background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);*/
background: #5f2c82;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2980b9, #6dd5fa,  #fff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.top h1 {
    color: #0000ff;
    font-style: italic;
    font-weight: bold;
    padding: 230px 0 230px 0;
    margin: 0px 20% 150px 20%;
}
</style>
