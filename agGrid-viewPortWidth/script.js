var listData = [
        {version: '1.1', name: 'ListItemA', stat: 'rev'},
        {version: '1.0', name: 'ListItemA', stat: 'appr'},
        {version: '2.0', name: 'ListItemB', stat: 'depr'},
        {version: '2.3', name: 'ListItemB', stat: 'appr'},
        {version: '4.0', name: 'ListItemC', stat: 'rej'},
        {version: '1.0', name: 'ListItemD', stat: 'rev'}];
var listGridOptions = {
    rowData: listData,
    columnDefs: [
        {headerName: 'Version', field: 'version', width: 60, cellStyle: cellTextStyle},
        {headerName: 'Name', field: 'name', width: 303, cellStyle: cellTextStyle},
        {headerName: '', field: 'stat', width: 30, cellStyle: cellSymbolStyle}
    ],
    enableSorting: true,
    suppressMenuFilterPanel: true,
    suppressMenuMainPanel: true,
    suppressMenuColumnPanel: true,
    editable: false
};

function cellTextStyle(params) {
    return {color: 'rgba(255,255,240,.8)', 'font-style': 'normal'};
}
function cellSymbolStyle(params) {
    return {'text-align': 'center'};
}

document.addEventListener("DOMContentLoaded", function () {
    var eGridDiv1 = document.querySelector('#id2'),
        w;
    new agGrid.Grid(eGridDiv1, listGridOptions);

    w = $('div.ag-bl-center.ag-bl-full-height-center').width();
    $('.displayBox').append('<p style="font:12pt Arial">div.ag-bl-center.ag-bl-full-height-center <strong>width = '+w+'px</strong></p>');

});