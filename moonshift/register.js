
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
    `,
    hTitle:`font-family: 'Raleway', sans-serif;
    font-size: 37px;
    line-height: normal;
    font-weight: bold;
    `,
    maindiv:`max-width:600px;
    margin:auto;
    font-family: Lato, sans-serif;
    font-size: 14px;
    color: #757575;
    line-height: 24px;
    font-weight: 300;
    box-shadow: 0 0 8px 2px #0000002b;
    `,
    textPrimary:`color:#3e3a6e;
    `,
    h5:`font-family: Raleway, sans-serif;
    font-size: 22px;
    font-weight: bold;
    line-height:normal;
    color: #3e3a6e;
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
    `
}


message += `
<div class="container" style="`+style.maindiv+`">
    <div class="header" style="`+style.header+`text-align:center">
        <img src="`+url+`/assets/img/logo.png" width="150" style="margin-bottom:20px;" />
        <h2 style="`+style.hTitle+style.m0+`">Welcome to <span style="`+style.textPrimary+`">MoonShift</span></h2>
    </div>
    <div class="body" style="`+style.body+`">
        <h5 style="`+style.h5+style.m0+style.mb3+style.textCenter+`">Hello Mohit Kumar</h5>
        <p style="`+style.m0+style.mb3+style.textCenter+`">You are one step away from verifying your account and joining the MoonShift community.
        Please verify your account by clicking the link below.</p>

        <div style="`+style.textCenter+`">
            <a href="gfg" style="`+style.btn+style.btnPrimary+`">Verify Email</a>
        </div>
    </div>
</div>
`

document.getElementById("test").innerHTML = message;