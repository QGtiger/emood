let util = {

}
util.title = function(title){
    title = title ? title + '-Emood' : 'Emood';
    window.document.title = title;
}

export default util;