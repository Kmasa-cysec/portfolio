
<template>
    <div class="container-fluid">
        <div class="row">       
            <div class="col-sm-4" id="section_title">
                <div class="h-100" id="skill_title">
                    <h1 class="section_name"><span>Skills</span></h1>
                </div>
            </div>
            <div class="col-sm-8" id="skill_contents">
                <div class="h-100 d-flex flex-column align-items-center justify-content-center">
                    <div class="text-left" id="lang">
                        <p><img src="../../assets/img/python.svg" id="skill-icon">Python</p>
                        <p><img src="../../assets/img/c.svg" id="skill-icon">C</p>
                        <p><img src="../../assets/img/rust.svg" id="skill-icon">Rust</p>
                        <p><img src="../../assets/img/vue.svg" id="skill-icon">Vue.js</p>
                        <p><img src="../../assets/img/swift.svg" id="skill-icon">Swift</p>
                        <p><img src="../../assets/img/git-icon.svg" id="skill-icon">Git</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.section_name {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    border-image: linear-gradient(to right, #2980b9, #6DD5FA, #e0ffff) 1/0 0 3px 0;
    border-style: solid;
}
table {
    border-collapse: separate;
}
th {
    padding-right: 25px;
}
#lang {
    line-height: 300%;
}
@media screen and (min-width: 481px) {
    #skill_title {
        background-color: #effff7;
        padding: 50% 0;
    }
    th {
        font-size:20px;
        padding-right: 25px;
    }
    td {
        font-size: 22px;
        text-align: left;
    }
    .text-left p {
        font-size: 25px;
    }
    #skill-icon {
        width: 40px;
        height: 20px;
    }
}
@media screen and (max-width: 480px) {
    #section_title {
        padding: 30px 0;
    }
    #skill_title {
        background-color: #effff7;
    }
    th {
        font-size: 14px;
        padding-right: 25px;
    }
    td {
        font-size: 16px;
        text-align: left;
    }
    .text-left p {
        font-size: 20px;
    }
    #skill-icon {
        width: 35px;
        height: 15px;
    }
}
#skill_contents {
    background-color: #effff7;
    padding: 15px;
}
</style>

