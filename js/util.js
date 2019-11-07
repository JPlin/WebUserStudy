/**
 * 保存txt文件
 * @params data 文件内容
 * @params name 保存的文件名
 * @params exportRaw('result.txt', 'my,god,fuck')
 */
function fakeClick(obj) {
    var ev = document.createEvent("MouseEvents");
    ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    obj.dispatchEvent(ev);
}

function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    fakeClick(save_link);
}
/**
 * read json file from local
 */
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'meta_image.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
/**
 * random select images
 */

function random_select(data_list, num) {
    var result = [];
    var count = data_list.length;
    for (var i = 0; i < num; i++) {
        var index = ~~(Math.random() * count) + i;
        result[i] = data_list[index];
        data_list[index] = data_list[i];
        count--;
    }
    return result;
}