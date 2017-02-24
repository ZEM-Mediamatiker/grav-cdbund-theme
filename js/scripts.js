$(document).ready(function(){
    $( "table" ).attr( "id", "sort-table" );
    $( "table" ).addClass( "table table-bordered table-sort text-left" );
    $("#sort-table").tablesorter( {dateFormat: 'ddmmyyyy'} ); 
});

/*$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');*/
