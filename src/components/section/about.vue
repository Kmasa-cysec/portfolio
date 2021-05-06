<template>
    <div class="container-fluid">
        <div class="row">       
            <div class="col-sm-4" id="section_title">
                <div class="h-100" id="title">
                    <h1 class="section_name"><span>About</span></h1>
                </div>
            </div>
            <div class="col-sm-8" id="contents">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td class="last-td">Masahito Kimura（木村 将人）</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td class="last-td">Master 1st</td>
                            </tr>
                            <tr>
                                <th>Laboratory</th>
                                <td class="last-td"><a href="">Cyber Security Laboratory</a></td>
                            </tr>
                            <tr>
                                <th>Reseach</th>
                                <td class="last-td">Digital Forensics<br class="d-lg-none">（Memory Forensics）</td>
                            </tr>
                            <tr>
                                <th>Github</th>
                                <td class="last-td"><a href="https://github.com/Kmasa-cysec">Kmasa-cysec</a></td>
                            </tr>
                            <tr>
                                <th>Blog</th>
                                <td class="last-td"><a href="https://kmasa-cysec.hateblo.jp/archive">Kmasaのヒトリゴト</a></td>
                            </tr>
                            <tr>
                                <th>Twitter</th>
                                <td class="last-td"><a href="https://twitter.com/Kma5a_Cy5ec">Kma5a_Cy5ec</a></td>
                            </tr>
                            <tr>
                                <th>Contact</th>
                                <td class="last-td">kmasa.cysec[at]gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
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

@media screen and (min-width: 481px) {
    #title {
        background-color: #efffff;
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
    tr {
        line-height: 280%;
    }
}
@media screen and (max-width: 480px) {
    #section_title {
        padding: 30px 0;
    }
    #title {
        background-color: #efffff;
    }
    th {
        font-size: 14px;
        padding-right: 25px;
    }
    td {
        font-size: 16px;
        text-align: left;
    }
}
#contents {
    background-color: #efffff;
    padding: 15px;
}
</style>

