const defaultModules = { menu: "menu", form: 'form', table: 'table' };

function lsu(modules = []) {
    modules = modules.length ? modules : Object.keys(defaultModules);
    // console.log(modules);
    this.modules = {};

    for (var i = 0; i < modules.length; i++) {
        this.modules[modules[i]] = i;
        // eval("this."+modules[i]) = modules[i];
    }

    // this.a = 0;
    // this.b = 0;
}


// var lsu_menu = {};

// var lsu_form = {};

// var lsu_table = {};