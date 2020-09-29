var win = window, doc = document;

// doc.onload = function (win) {
//     new hy().render();
// }

win.onload = function (win, e) {
    new Hy().render();
}

var Hy = function () {
    this.v = "0.0.1";

    this.render = function () {
        this.menu.render();
        this.form.render();
        this.table.render();
    };

    this.menu = new hy_menu();
    this.form = new hy_form();
    this.table = new hy_table();
}


var hy_menu = function () {
    this.render = function () {
        var menu = doc.getElementsByClassName("hy-menu")[0];
        if (menu) {
            var liEls = menu.getElementsByTagName("li"); // 获取父级节点
            for (var i = 0; i < liEls.length; i++) {
                var parentEl = liEls[i].parentElement;
                level = this.getLevel(parentEl);
                liEls[i].onclick = this.getMenuOnClickAction(liEls[i], level);
            }
        }
    };

    this.getLevel = function (obj) {
        if (hasClass(obj, "hy-menu") === true) { // 第一级
            return 1;
        } else if (hasClass(obj, "hy-menu2") === true) { // 第二级
            return 2;
        } else if (hasClass(obj, "hy-menu3") === true) { // 第三级，直接打开连接
            return 3;
        } else {
            return -1;
        }
    };
    this.getMenuOnClickAction = function (el, level) {
        var action;
        if (getChildrenNum(el, "ul", 2) > 0) {
            if (level === 1) {
                action = function () {
                    liEls = el.getEel
                }
            } else if (level === 2) {

            } else if (level === 3) {

            }
        } else {
            action = function () {
                win.location.href = el.getAttribute("data-href");
            }
        }

        return action;
    };
    this.openMenuUrl = function (obj) {
        var url = $(obj).attr("data-href");
    };
};

var hy_form = function () {
    this.render = function () { }
};

var hy_table = function () {
    this.render = function () { }
};


function hasClass(e, className) {
    return (' ' + e.className + ' ').indexOf(' ' + className + ' ') === -1 ? false : true;
}

function inArray(val, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (val == arr[i]) {
            return true;
        }
    }

    return false;
}

function getChildrenNum(el, tag, type = 1) {
    if (type == 1) {
        return el.getElementsByClassName(tag).length;
    } else if (type == 2) {
        return el.getElementsByTagName(tag).length;
    } else {
        return -1;
    }
};

function getChildren(el, tag) {
    if (tag.substr(0, 1) === ".") {
        tag = tab.substr(1);
        return el.getElementsByTagName(tag);
    } else if (tag.substr(0, 1) === "#") {
        tag = tab.substr(1);
        return el.getElementById(tag);
    } else {
        return el.getElementsByTagName(tag);
    }
}