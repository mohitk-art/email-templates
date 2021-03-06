
url = 'http://198.251.65.146:4014'

message = ''

style = {
    header:`
    padding:30px 15px;
    text-align:center;
    background-color:#f2f2f2;
    `,
    body:`
    padding:15px;
    height: 230px;
    `,
    hTitle:`font-family: 'Raleway', sans-serif;
    font-size: 37px;
    height:auto;
    line-height: normal;
    font-weight: bold;
    background:none;
    padding:0;
    color:#333;
    `,
    maindiv:`
    width:600px;
    margin:auto;
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #333;
    line-height: 24px;
    font-weight: 300;
    border: 1px solid #eaeaea;
    `,
    textPrimary:`color:#3e3a6e;
    `,
    h5:`font-family: Raleway, sans-serif;
    font-size: 22px;
    background:none;
    padding:0;
    color:#333;
    height:auto;
    font-weight: bold;
    line-height:normal;
    `,
    m0:`margin:0;`,
    mb3:'margin-bottom:15px;',
    textCenter:`text-align:center;`,
    btn:`padding:10px 30px;
    font-weight:500;
    font-size:14px;
    line-height:normal;
    border:0;
    display:inline-block;
    text-decoration:none;
    `,
    btnPrimary:`
    background-color:#3e3a6e;
    color:#fff;
    `,
    footer:`
    padding:10px 15px;
    font-weight:500;
    color:#fff;
    text-align:center;
    background-color:#000;
    `
    }

message += `
<div class="container" style="`+style.maindiv+`">
    <div class="header" style="`+style.header+`text-align:center">
        <img src="`+url+`/assets/img/logo.png" width="150" style="margin-bottom:20px;" />
        <h2 style="`+style.hTitle+style.m0+`">Welcome to MoonShift</h2>
    </div>
    <div class="body" style="`+style.body+`">
        <h5 style="`+style.h5+style.m0+style.mb3+style.textCenter+`">Hello Mohit Kumar</h5>
        <p style="`+style.m0+style.mb3+style.textCenter+`margin-bottom:20px">You are one step away from verifying your account and joining the MoonShift community.
        Please verify your account by clicking the link below.</p>

        <div style="`+style.textCenter+`">
            <a href="gfg"><span style="`+style.btn+style.btnPrimary+`">Verify Email</span></a>
        </div>
    </div>
    <div class="footer" style="`+style.footer+`">
    &copy 2021 MoonShift All rights reserved.
    </div>
</div>
`

document.getElementById("test").innerHTML = message;