
url = 'http://198.251.65.146:4013'

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
        <img src="`+url+`/assets/img/logoh.png" width="150" style="margin-bottom:20px;" />
        <h2 style="`+style.hTitle+style.m0+`">Welcome to MoonShift</h2>
    </div>
    <div class="body" style="`+style.body+`">
        

        <div style="`+style.mb3+`">
            <b>Appointment Details</b>
        </div>

        <table style="width:100%">
            <tr>
                <td>
                    <table style="margin-bottom: 15px;font-size:14px">
                        <tr>
                            <td style="padding:0">
                                <img src="`+url+`/assets/img/placeholder.jpg" style="max-width: 64px;height: 64px;object-fit: cover;border-radius: 6px;" />
                            </td>
                            <td style="vertical-align: middle;padding: 10px;">
                                <h4 style="margin-top: 0;margin-bottom: 10px;">Dr. Emmanual Adoh</h4>
                                <div>emma@yopmail.com</div>
                            </td>
                        </tr>
                    </table>
                </td>

                <td style="text-align:right;">
                    <b>Booking ID:</b> 12233333
                </td>
            </tr>
        </table>

       


        <h4 style="margin-bottom: 10px;margin-top: 0;color: #3e3a6e;">Notes</h4>
        <p style="margin-bottom: 15px;margin-top: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <table style="box-shadow: 0 0 11px 3px #dedede;
        border: 1px solid #eaeaea;
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 6px;font-size: 14px;border: 1px solid #ececec;">
            <tr>
                <td>
                <table>
                <td style="padding:0"><img src="`+url+`/assets/img/calendar.png" width="40"></td>
                <th style="vertical-align: middle;padding: 10px;">Time & Date</th>
                </table>
                </td>

                <td style="text-align:right">
                    <div style="margin-bottom:10px;"><b>Start Time:</b> 26, Sep 2020, 11:00 AM</div>
                    <div><b>End Time:</b> 26, Sep 2020, 8:00 PM</div>
                </td>
            </tr>
        </table>

        <h3 style="margin-top: 0;margin-bottom: 10px;color:#3e3a6e;">Skill Detail</h3>
        <hr>

        <h4 style="margin-bottom: 10px;margin-top: 0;">When would you like to start?</h4>
        <p style="margin-bottom: 15px;margin-top: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia magni, error officiis doloribus dolorem laboriosam quibusdam, praesentium ipsam asperiores provident, tempore rerum consequuntur iusto repudiandae magnam ducimus voluptatem quos.</p>

        


    </div>
    <div class="footer" style="`+style.footer+`">
    &copy 2021 MoonShift All rights reserved.
    </div>
</div>
`

document.getElementById("test").innerHTML = message;