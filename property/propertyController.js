images = [{name:'property.jpg'},{name:'property.jpg'},{name:'property.jpg'},{name:'property.jpg'}]
items = [1,2,3,3];

var styles = {
    main:`
    margin: auto;
    width: 100%;
    max-width: 700px;
    font-family: arial;
    border: 6px solid #25a9e0;
    font-size: 14px;
    padding: 9px;
    `,
    mb_3:`margin-bottom:15px;`,
    mt_3:`margin-top:15px;`,
    logoimg:`max-width: 180px;margin-bottom: 14px;`,
    mapimg:`width: 100%;
    height: 273px;
    object-fit: cover;
    object-position: center center;`,
    title:`font-style: italic;margin-top: 0;margin-bottom: 15px;font-weight: 500;padding-bottom: 10px;border-bottom: 1px solid #d9d9d9;`,
    imagegrip:`display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 12px;`,
    imagegrip_img:`width: calc(25% - 10px);
    height: 130px;
    object-fit: cover;
    margin-bottom: 12px;
    object-position: center center;
    `,
    items:`display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `,
    item:`width: 100%;
    justify-content: space-between;
    display: flex;
    margin-bottom: 15px;
    font-weight: 600;
    max-width: calc(50% - 7px);
    `,
    item_span:`font-weight: 400;`
}

html = '<div class="main" style="'+styles.main+'">'
html += '<div style="text-align:center">'
html += '<img src="http://198.251.65.146:4707/assets/img/logo.png" style="'+styles.logoimg+'" class="logoimg">'
html += '</div>'
html += '<img src="./map.png" style="'+styles.mapimg+'" class="map-img">'
html += '<h3 class="title" style="'+styles.title+styles.mt_3+'">Property Images</h3>'
html += '<div style="'+styles.imagegrip+'" class="image-grip">'
images.forEach(function(element,index) {
    // html += '<div>'
    html += '<img src="./property.jpg" style="'+styles.imagegrip_img+'" />'
    // html += '</div>'
});
html += '</div>'
html += '<h3 class="title" style="'+styles.title+'">Property Description</h3>'
html += '<p style="margin-top:0px;margin-bottom:15px">Lorem lldfdffd</p>'
html += '<h3 class="title" style="'+styles.title+'">Basic Details</h3>'

html += '<div style="'+styles.items+'" class="items">'
items.forEach(function(element,index) {
html += '<div style="'+styles.item+'" class="item">'
html += 'Property Type : <span style="'+styles.item_span+'">Basement</span>'
html += '</div>'
});
html += '</div>'

html += '</div>'



document.getElementById("test").innerHTML = html;