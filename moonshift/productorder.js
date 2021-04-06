
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
    p:'margin-top:0;margin-bottom:10px;',
    hTitle:`font-family: 'Raleway', sans-serif;
    font-size: 25px;
    height:auto;
    line-height: normal;
    font-weight: bold;
    background:none;
    padding:0;
    color:#333;
    `,
    maindiv:`
    width:800px;
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
    bgPrimary:`background-color:#3e3a6e;`,
    footer:`
    padding:10px 15px;
    font-weight:500;
    color:#fff;
    text-align:center;
    background-color:#000;
    `,
    th:`
    padding:6px 12px;
    font-weight:600;
    background:#eee;
    `,
    td:`
    padding:6px 12px;
    font-weight:400;
    background:#eee;
    `
    }


    products = [
        {product:'Chair', price:'450', discout:'10', qty:'3', total:'450'},
        {product:'Test product', price:'450', discout:'10', qty:'3', total:'450'},
        {product:'Home Degine', price:'450', discout:'10', qty:'3', total:'450'},
    ]

message += `
<div class="container" style="`+style.maindiv+`">
    <div class="header" style="`+style.header+`text-align:center">
        <img src="`+url+`/assets/img/logoh.png" width="150" style="margin-bottom:20px;" />
        <h2 style="`+style.hTitle+style.m0+`">Hello Mohit Kumar your order placed successfully.
        </h2>
    </div>
    <div class="body" style="`+style.body+`">
    
    <table style="width:100%;font-size:14px;">
        <tr>
            <td style="width:50%;">
                <b>Sold By:</b>
                <p style="`+style.p+`width:200px;margin-top:15px;">
                MoonShift <br/>
                Address- 1178 Broadway 3rd Floor New York <br/>
                Phone- (587) 1-800-000-0000
                </p>
            </td>
            <td style="width:50%;text-align:right;">
                <b>Billing Address:</b>
                <p style="`+style.p+`width:200px;margin-top:15px;margin-left:auto">
                MoonShift <br/>
                Address- 1178 Broadway 3rd Floor New York<br/>
                Phone- (587) 1-800-000-0000
                </p>
            </td>
        </tr>
    </table>

    <table style="width:100%;font-size:14px;text-align:left;margin-bottom:20px">
        <tr>
            <td style="width:50%;">
                <table style="font-size:14px;width:100%;font-size:14px;text-align:left;">
                <tr>
                    <th style="width:100px;">Order Number: </th>
                    <td>ord_.lepnykq2</td>
                </tr>
                <tr>
                    <th>Order Date: </th>
                    <td>Tue Apr 06 2021, 08:57</td>
                </tr>
                </table>
            </td>
            <td style="width:50%;text-align:right;">
                <b>Shipping Address:</b>
                <p style="width:200px;margin-left:auto">
    
                Address- 1178 Broadway 3rd Floor New York<br/>
                Phone- (587) 1-800-000-0000
                </p>
            </td>
        </tr>
    </table>


    <table style="font-size:14px;width:100%;text-align:left;margin-bottom:20px;">
        <tr>
            <th style="`+style.th+`">Sr No.</th>
            <th style="`+style.th+`;width: 325px;">Product</th>
            <th style="`+style.th+`">Price</th>
            <th style="`+style.th+`">Discout</th>
            <th style="`+style.th+`">Qty</th>
            <th style="`+style.th+`">Total Price</th>
        </tr>

        `
        
        products.forEach(function(element,index) {
           element;
            message += `<tr>
                            <td style="`+style.td+style.bgPrimary+`;color:#fff">`+index+1+`</td>
                            <td style="`+style.td+`">`+element.product+`</td>
                            <td style="`+style.td+`">`+element.price+`</td>
                            <td style="`+style.td+`">`+element.discout+`</td>
                            <td style="`+style.td+`">`+element.qty+`</td>
                            <td style="`+style.td+`">`+element.total+`</td>
                        </tr>`
        });
        
        
        message += `

        <tr>
            <td colspan="4" style="`+style.th+`;background: #fff;border-bottom: 1px solid #aaa;text-align:right;">Sub Total</td>
            <td colspan="2" style="`+style.th+`;background: #fff;border-bottom: 1px solid #aaa;">CAD $ 1260.5<td>
        </tr>
        <tr>
            <td colspan="4" style="`+style.th+`;background: #fff;border-bottom: 1px solid #aaa;text-align:right;">Delivery Charges</td>
            <td colspan="2" style="`+style.th+`;background: #fff;border-bottom: 1px solid #aaa;">$ 0<td>
        </tr>
        <tr>
            <td colspan="4" style="`+style.th+`;background: #fff;text-align:right;">GRAND TOTAL WITH 10 % GST</td>
            <td colspan="2" style="`+style.th+`;background: #fff;">CAD $ 1424.5<td>
        </tr>
    </table>

        <p style="`+style.p+`font-size: 2em;line-height:normal;text-align: center;font-style: italic;margin-bottom:20px;">Thank you!</p>

        <div style="text-align:right;">
            <p style="`+style.p+`">Invoice was created on a computer and is valid without the signature and seal.</p>
            <p style="`+style.p+`">Don't hesitate to each out to the contact details below if you have any questions regarding order.</p>
        </div>

        <div style="width:200px;text-align:right;margin-left:auto;">
        All the Best <br/>
        MoonShift Support <br/>
        Phone-+1-800-000-0000 <br/>
        care@moonshift.com 
        </div>
    </div>
    <div class="footer" style="`+style.footer+`">
    &copy 2021 MoonShift All rights reserved.
    </div>
</div>
`

document.getElementById("test").innerHTML = message;