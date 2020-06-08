parcelRequire = function (e, r, t, n) { var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require; function f(t, n) { if (!r[t]) { if (!e[t]) { var i = "function" == typeof parcelRequire && parcelRequire; if (!n && i) return i(t, !0); if (o) return o(t, !0); if (u && "string" == typeof t) return u(t); var c = new Error("Cannot find module '" + t + "'"); throw c.code = "MODULE_NOT_FOUND", c } p.resolve = function (r) { return e[t][1][r] || r }, p.cache = {}; var l = r[t] = new f.Module(t); e[t][0].call(l.exports, p, l, l.exports, this) } return r[t].exports; function p(e) { return f(p.resolve(e)) } } f.isParcelRequire = !0, f.Module = function (e) { this.id = e, this.bundle = f, this.exports = {} }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) { e[r] = [function (e, r) { r.exports = t }, {}] }; for (var c = 0; c < t.length; c++)try { f(t[c]) } catch (e) { i || (i = e) } if (t.length) { var l = f(t[t.length - 1]); "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () { return l }) : n && (this[n] = l) } if (parcelRequire = f, i) throw i; return f }({
    "jibs": [function (require, module, exports) {
        "use strict"; function t(t, o) { return null != o && "undefined" != typeof Symbol && o[Symbol.hasInstance] ? !!o[Symbol.hasInstance](t) : t instanceof o } function o(o, e) { if (!t(o, e)) throw new TypeError("Cannot call a class as a function") } function e(t, o) { for (var e = 0; e < o.length; e++) { var i = o[e]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function i(t, o, i) { return o && e(t.prototype, o), i && e(t, i), t } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Model = void 0; var n = function () { function t() { o(this, t), this.todos = JSON.parse(localStorage.getItem("todos")) || [] } return i(t, [{ key: "bindTodoListChanged", value: function (t) { this.onTodoListChanged = t } }, { key: "_commit", value: function (t) { this.onTodoListChanged(t), localStorage.setItem("todos", JSON.stringify(t)) } }, { key: "addTodo", value: function (t) { var o = { id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1, text: t, complete: !1 }; this.todos.push(o), this._commit(this.todos) } }, { key: "editTodo", value: function (t, o) { this.todos = this.todos.map(function (e) { return e.id === t ? { id: e.id, text: o, complete: e.complete } : e }), this._commit(this.todos) } }, { key: "deleteTodo", value: function (t) { this.todos = this.todos.filter(function (o) { return o.id !== t }), this._commit(this.todos) } }, { key: "toggleTodo", value: function (t) { this.todos = this.todos.map(function (o) { return o.id === t ? { id: o.id, text: o.text, complete: !o.complete } : o }), this._commit(this.todos) } }]), t }(); exports.Model = n;
    }, {}], "G9+Z": [function (require, module, exports) {
        "use strict"; function t(t, e) { return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e } function e(e, n) { if (!t(e, n)) throw new TypeError("Cannot call a class as a function") } function n(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function i(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.View = void 0; var o = function () { function t() { e(this, t), this.app = this.getElement("#app"), this.title = this.createElement("h1"), this.title.textContent = "Lista De Tarefas", this.form = this.createElement("form"), this.form.setAttribute("autoComplete", "off"), this.input = this.createElement("input"), this.input.type = "text", this.input.placeholder = "Adicionar Tarefas", this.input.name = "todo", this.submitButton = this.createElement("button"), this.submitButton.textContent = "Add", this.todoList = this.createElement("ul", "todo-list"), this.form.append(this.input, this.submitButton), this.app.append(this.title, this.form, this.todoList), this._temporaryTodoText, this._initLocalListeners() } return i(t, [{ key: "_resetInput", value: function () { this.input.value = "" } }, { key: "createElement", value: function (t, e) { var n = document.createElement(t); return e && n.classList.add(e), n } }, { key: "getElement", value: function (t) { return document.querySelector(t) } }, { key: "displayTodos", value: function (t) { for (var e = this; this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild); if (0 === t.length) { var n = this.createElement("p"); n.textContent = "Sem Tarefas.", this.todoList.append(n) } else t.forEach(function (t) { var n = e.createElement("li"); n.id = t.id; var i = e.createElement("input"); i.type = "checkbox", i.checked = t.complete; var o = e.createElement("span"); if (o.contentEditable = !0, o.classList.add("editable"), t.complete) { var a = e.createElement("s"); a.textContent = t.text, o.append(a) } else o.textContent = t.text; var s = e.createElement("button", "delete"); s.textContent = "Deletar", n.append(i, o, s), e.todoList.append(n) }) } }, { key: "_initLocalListeners", value: function () { var t = this; this.todoList.addEventListener("input", function (e) { "editable" === e.target.className && (t._temporaryTodoText = e.target.innerText) }) } }, { key: "bindAddTodo", value: function (t) { var e = this; this.form.addEventListener("submit", function (n) { n.preventDefault(), e._todoText && (t(e._todoText), e._resetInput()) }) } }, { key: "bindEditTodo", value: function (t) { var e = this; this.todoList.addEventListener("focusout", function (n) { if (e._temporaryTodoText) { var i = parseInt(n.target.parentElement.id); t(i, e._temporaryTodoText), e._temporaryTodoText = "" } }) } }, { key: "bindDeleteTodo", value: function (t) { this.todoList.addEventListener("click", function (e) { if ("delete" === e.target.className) { var n = parseInt(e.target.parentElement.id); t(n) } }) } }, { key: "bindToggleTodo", value: function (t) { this.todoList.addEventListener("change", function (e) { if ("checkbox" === e.target.type) { var n = parseInt(e.target.parentElement.id); t(n) } }) } }, { key: "_todoText", get: function () { return this.input.value } }]), t }(); exports.View = o;
    }, {}], "L76f": [function (require, module, exports) {
        "use strict"; function o(o, e) { return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](o) : o instanceof e } function e(e, d) { if (!o(e, d)) throw new TypeError("Cannot call a class as a function") } function d(o, e, d) { return e in o ? Object.defineProperty(o, e, { value: d, enumerable: !0, configurable: !0, writable: !0 }) : o[e] = d, o } Object.defineProperty(exports, "__esModule", { value: !0 }), exports.Controller = void 0; var t = function o(t, i) { var n = this; e(this, o), d(this, "onTodoListChanged", function (o) { n.view.displayTodos(o) }), d(this, "handleAddTodo", function (o) { n.model.addTodo(o) }), d(this, "handleEditTodo", function (o, e) { n.model.editTodo(o, e) }), d(this, "handleDeleteTodo", function (o) { n.model.deleteTodo(o) }), d(this, "handleToggleTodo", function (o) { n.model.toggleTodo(o) }), this.model = t, this.view = i, this.onTodoListChanged(this.model.todos), this.model.bindTodoListChanged(this.onTodoListChanged), this.view.bindAddTodo(this.handleAddTodo), this.view.bindEditTodo(this.handleEditTodo), this.view.bindDeleteTodo(this.handleDeleteTodo), this.view.bindToggleTodo(this.handleToggleTodo) }; exports.Controller = t;
    }, {}], "d+pd": [function (require, module, exports) {
        "use strict"; var e = require("./model"), r = require("./view"), i = require("./controller"), l = new i.Controller(new e.Model, new r.View);
    }, { "./model": "jibs", "./view": "G9+Z", "./controller": "L76f" }]
}, {}, ["d+pd"], null)
//# sourceMappingURL=/app.75fb0dc7.js.map