var rows1 = [
        {parent: true, open: false, name: "level-1: under review", stat: "rev", children: rows2},
        {parent: true, open: false, name: "level-1: deprecated", stat: "depr", children: rows2},
        {parent: true, open: false, name: "level-1: under edit", stat: "edit", children: rows2},
        {parent: true, open: false, name: "level-1: rejected", stat: "rej", children: rows2},
        {parent: true, open: false, name: "level-1: pproved", stat: "appr", children: rows2}
    ],
    rows2 = [
        {parent: true, open: false, name: "level-2: under review", stat: "rev", children: rows3},
        {parent: true, open: false, name: "level-2: deprecated", stat: "depr", children: rows3},
        {parent: true, open: false, name: "level-2: under edit", stat: "edit", children: rows3},
        {parent: true, open: false, name: "level-2: rejected", stat: "rej", children: rows3},
        {parent: true, open: false, name: "level-2: approved", stat: "appr", children: rows3}
    ],
    rows3 = [
        {name: "level-3: under review", stat: "rev"},
        {name: "level-3: deprecated", stat: "depr"},
        {name: "level-3: under edit", stat: "edit"},
        {name: "level-3: rejected", stat: "rej"},
        {name: "level-3: approved", stat: "appr"}
    ];
var
    gridOptions1 = {
        rowData: rows1,
        columnDefs: columnDefs = [
            {headerName: 'Name', field: 'name', width: 300, cellStyle: statusCheck},
            {headerName: 'Status', field: 'stat', width: 84, cellStyle: statusCheck}
        ],
        enableSorting: true,
        suppressMenuFilterPanel: true,
        suppressMenuMainPanel: true,
        suppressMenuColumnPanel: true,
        editable: false
    },
    gridOptions2 = {
        rowData: rows1,
        columnDefs: columnDefs = [
            {headerName: 'Name', field: 'name', width: 384, cellRenderer: 'group', cellRendererParams: {innerRenderer: innerCellRenderer}, cellStyle: statusCheck},
            {headerName: 'Status', field: 'stat', width: 84, cellStyle: statusCheck},
        ],
        rowSelection: 'multiple',
        enableColResize: true,
        enableSorting: false,
        enableFilter: false,
        animateRows: true,
        rowHeight: 20,
        // getRowStyle: statusCheck,
        getNodeChildDetails: function (node) {
            if (node.parent) {
                return {
                    group: true,
                    children: node.children,
                    expanded: node.open
                };
            } else {
                return null;
            }
        }
    }

function innerCellRenderer(params) {
    //return the name of the node (the actual column value) when expanding a row
    return '<span class="rowNodeText">' + params.data.name + '</span>';
};

function statusCheck(params) {
    var
        stat = params.data.stat;
    if (stat === 'edit') {
        return {color: 'salmon'};
    }
    if (stat === 'appr') {
        return {color: 'green'};
    }
    if (stat === 'rev') {
        return {color: 'yellow', fontStyle: 'italic'};
    }
    if (stat === 'rej') {
        return {color: 'red', textDecoration: 'line-through'};
    }
    if (stat === 'depr') {
        return {color: 'gray', fontStyle: 'italic'};
    }
    return null;
};

document.addEventListener("DOMContentLoaded", function () {
    var eGridDiv1 = document.querySelector('#id2');
    new agGrid.Grid(eGridDiv1, gridOptions2);

});