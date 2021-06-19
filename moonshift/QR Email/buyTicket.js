
url = 'http://198.251.65.146:4013'

message = ''

style = {
    header:`
    padding:30px 15px;
    text-align:center;
    background-color:#f2f2f2;
    `,
    body:`
    padding: 50px 25px;
    border-radius:50px;
    background-color:#fff;
    `,
    qrCode:`
    width:100px;
    height:auto;
    border: 3px solid #26255d;
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
    background-color:#26255d;
    padding:15px;
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
    <div style="text-align:center;margin-top:20px;margin-bottom:20px;">
    <img src="./white-logo.png" style="width:235px;" />
    </div>
    <div class="body" style="`+style.body+`">
            
        <div style="text-align:center;margin-bottom:20px;">
        <img src="" style="`+style.qrCode+`" alt="QR Image" />
        </div>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, sit sapiente fugit et itaque dolores odit quisquam similique sint, ratione soluta nemo maiores velit autem numquam, cum adipisci aspernatur sunt!</p>
        
    </div>

    <div style="text-align: center;margin-top: 25px;margin-bottom: 25px;">
    <img src="./broughttoyouby.png" style="width:200px" />
    </div>

    </div>
        `

document.getElementById("test").innerHTML = message;
