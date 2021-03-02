<template>
    <div class="container-fluid">
        <div class="row">       
            <div class="col-sm-4" id="section_title">
                <div class="h-100" id="work_title">
                    <div>
                        <h1 class="section_name"><span>Works</span></h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8 py-5" id="work_contents">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="container-fluid">
                        <div class="row" id="work_content">
                            <div class="col-xs-6 col-sm-5">
                                <h5 class="font-weight-bold py-3">
                                    <a href="https://github.com/Kmasa-cysec/detect_downloader">Linuxシェルスクリプトにおける<br class="d-lg-none">ダウンローダの検知</a>
                                </h5>
                                <p class="pb-5">セキュリティ・キャンプ全国大会2020<br class="d-lg-none"> Z-Vトラック「Rustで作るLinux向けアンチウイルスソフトウェア」での成果物．<br>マルウェアの前段とも言えるダウンローダの検知をRustで実現した．</p>
                                <div class="lang">
                                    Rust
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-5">
                                <h5 class="font-weight-bold py-3">
                                    <a>Volatility3の自作プラグイン<span style="font-size: 12px;"><br>(プロジェクトのレポジトリは近日公開予定)</span></a>
                                </h5>
                                <p class="pt-sm-1 pb-5">卒業研究において，メモリ・フォレンジックツールVolatility Frameworkの新型Volatility3でブラウザアーティファクトを自動抽出するプラグインを実装．</p>
                                <div class="lang">
                                    Python
                                </div>
                            </div>
                        </div>
                        <div class="row" id="work_content">
                            <div class="col-xs-6 col-sm-5">
                                <h5 class="font-weight-bold py-3">
                                    <a href="https://github.com/Kmasa-cysec/Linux_SystemCall">自作Linuxシステムコール</a>
                                </h5>
                                <p class="pt-sm-3 pb-5">簡単なLinuxシステムコールを自作．システムコールの外部仕様は「open()で開いたファイルのファイル名とinode番号を取得」で正直なところ実用性はないが，OSの基本的な仕組みなどの知識・経験を取得できた．</p>
                                <div class="lang">
                                    C
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-5">
                                <h5 class="font-weight-bold py-3">
                                    <a href="https://github.com/Kmasa-cysec/portfolio/tree/main">Portfolio Site</a>
                                </h5>
                                <p class="pt-sm-3 pb-5">このサイトであり，JavaScriptのフレームワークの１つであるVue.jsで実装．随時更新していく予定．</p>
                                <div class="lang">
                                    Vue.js
                                </div>
                            </div>
                        </div>
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
/*#work_content div {*/
    /*padding: 0.5em 1em;*/
    /*margin: 2em 0.5em;*/
    /*background: #ffe8d1;*/
    /*[>border-bottom: solid 6px #f4a460;<]*/
    /*box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);*/
    /*border-radius: 9px;*/
/*}*/
@media screen and (min-width: 481px) {
    #work_title {
        background-color: #fff9f4;
        padding: 90% 0;
    }
    #work_content > div {
        position: relative;
    padding: 0.5em 1em;
    margin: 5%  auto;
    background: #ffe8d1;
    /*border-bottom: solid 6px #f4a460;*/
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
}
    .lang {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        -webkit-transform: translateY(-50%) translateX(-50%);
    }
}
@media screen and (max-width: 480px) {
    #section_title {
        padding: 30px 0;
    }
    #work_title {
        background-color: #fff9f4;
    }
    #work_content > div {
        position: relative;
    padding: 0.5em 1em;
    margin: 5% auto;
    background: #ffe8d1;
    /*border-bottom: solid 6px #f4a460;*/
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
}
    .lang {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        -webkit-transform: translateY(-50%) translateX(-50%);
    }
}
#work_contents {
    background-color: #fff9f4;
    padding: 15px;
}
</style>

