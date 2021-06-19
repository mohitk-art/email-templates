style = {
    header: `
    padding:30px 15px;
    text-align:center;
    background-color:#f2f2f2;
    `,
    body:`
    padding: 50px 25px;
    border-radius:50px;
    background-color:#fff;
    `,
    p: 'margin-top:0;margin-bottom:10px;',
    hTitle: `font-family: 'Raleway', sans-serif;
    font-size: 25px;
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
    textPrimary: `color:#3e3a6e;
    `,
    h5: `font-family: Raleway, sans-serif;
    font-size: 22px;
    background:none;
    padding:0;
    color:#333;
    height:auto;
    font-weight: bold;
    line-height:normal;
    `,
    m0: `margin:0;`,
    mb3: 'margin-bottom:15px;',
    textCenter: `text-align:center;`,
    btn: `padding:10px 30px;
    font-weight:500;
    font-size:14px;
    line-height:normal;
    border:0;
    display:inline-block;
    text-decoration:none;
    `,
    btnPrimary: `
    background-color:#3e3a6e;
    color:#fff;
    `,
    bgPrimary: `background-color:#3e3a6e;`,
    footer: `
    padding:10px 15px;
    font-weight:500;
    color:#fff;
    text-align:center;
    background-color:#000;
    `,
    th: `
    padding:6px 12px;
    font-weight:600;
    background:#eee;
    `,
    td: `
    padding:6px 12px;
    font-weight:400;
    background:#eee;
    `,
    qrCode:`
    width:100px;
    height:auto;
    border: 3px solid #26255d;
    `,
}


message = ' '
message = `
<div class="container" style="`+style.maindiv+`">
    <div style="text-align:center;margin-top:20px;margin-bottom:20px;">
    <img src="./white-logo.png" style="width:235px;" />
    </div>
    <div class="body" style="`+style.body+`">

    <div style="text-align:center;margin-bottom:20px;">
        <img src="` + image + `" style="`+style.qrCode+`" alt="QR Image" />
        </div>

        <table style="width:100%;margin-bottom:15px">
        <tr>
        <td style="padding:0px;vertical-align: top;">
        <b style="`+ style.textPrimary + `">Event Organizer:</b> ${options.event_user} <br>
        <b style="`+ style.textPrimary + `">Email:</b> ${options.event_email} <br>
        <b style="`+ style.textPrimary + `">Mobile:</b> ${options.mobileNo}<br>
        </td>

        <td style="text-align:right;padding:0px;vertical-align: top;">
        <b style="`+ style.textPrimary + `">Order Id:</b> <b>${options.order_id}</b>
        
        </td>
        <tr>
        </table>
        <b style="`+ style.textPrimary + `">${options.event.events.name}</b>
        <div style="margin-bottom: 10px;margin-top:12px;">
        <b style="`+ style.textPrimary + `">Address: </b>${options.event.events.address}</div>

        <p class="desc" style="margin-top: 0;">
        ${options.event.events.description}
        </p>

        <div style="margin-bottom: 10px;">
            <b style="`+ style.textPrimary + `">Date(Start - End):</b> ${start_date} - ${end_date}
        </div>
        
        <div class="table-responsive" style="background-color: #e0e0e0;">
        <table style="width: 100%; text-align: left;font-size: 14px;font-weight: 500;">
            <thead>
                <tr>
                    <th style="padding: 10px;">Ticket Name</th>
                    <th style="padding: 10px;">Per Quantity Amount</th>
                    <th style="padding: 10px;">Quantity</th>
                    <th style="padding: 10px;text-align: right;">Total Amount</th>
                </tr>
            </thead>

            <tbody>`;
options.ticket.forEach((ticketData) => {
    message += '<tr>';
    message += '<td style="padding: 10px;">' + ticketData.name + '</td>';
    message += '<td style="padding: 10px;">$' + ticketData.price + '</td>';
    message += '<td style="padding: 10px;">' + ticketData.quantity + '</td>';
    message += '<td style="padding: 10px;text-align: right;">$' + ticketData.price * ticketData.quantity + '</td>';
    message += '<tr>';
})
message += `
                <tr style="font-size: 16px;">
                  
                    <td style="padding: 10px;text-align: right;" colspan="4"><spam>Total Paid Total</spam>$${options.totalPayment}</td>
                </tr>
            </tbody>
        </table>
        </div>

        <div style="margin-top: 20px;text-align:right;">
            Thanks,<br/>
            Lunatix Team
        </div>
        </div>
      
        </div>`;