var ListView = require('./view_list');
var TableView = require('./view_table');
var CookiesView = require('./view_cookies');
var CircularPackView = require('./view_circular_pack');
var CookiesStencilView = require('./view_cookies_stencil');
var TextEditorView = require('./view_texteditor');


class ViewBuilder {
    textEditor() {
        return new TextEditorView();
    }

    list() {
        return new ListView();
    }

    table() {
        return new TableView();
    }

    circularPack() {
        return new CircularPackView();
    }

    cookies() {
        return new CookiesView();
    }

    cookiesStencil() {
        return new CookiesStencilView();
    }
}

module.exports = ViewBuilder;
