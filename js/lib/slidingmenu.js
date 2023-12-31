/*! =========================================================
 * Sliding Menu v0.2.0
 * http://github.danielcardoso.net/sliding-menu/
 * ==========================================================
 * Copyright (c) 2014-2015 DanielCardoso.net.
 * Licensed under MIT.
 * ======================================================== */
if ("undefined" == typeof jQuery)
  throw new Error("Sliding Menu requires jQuery");
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c, e, f;
      (c = a(this)),
        (e = c.data("dc.slidingMenu")),
        (f = "object" == typeof b && b),
        (e || !/destroy|hide/.test(b)) &&
          (e || c.data("dc.slidingMenu", (e = new d(this, f))),
          "string" == typeof b && e[b]());
    });
  }
  var c, d;
  (c = []),
    (d = function (a, b) {
      (this.options = void 0),
        (this.$el = void 0),
        (this.currentPanel = void 0),
        this.init(a, b);
    }),
    (d.NAME = "Sliding Menu"),
    (d.VERSION = "0.2.0"),
    (d.MAIN_CLASS = "s-menu"),
    (d.PANEL_CLASS = d.MAIN_CLASS + "-panel"),
    (d.ICON_CLASS = d.MAIN_CLASS + "-icon"),
    (d.NAVIGATION_CLASS = d.MAIN_CLASS + "-nav"),
    (d.SET_ICON_CLASS = "sm-set-icon"),
    (d.DEFAULTS = {
      className: "",
      transitionDuration: 250,
      dataJSON: !1,
      initHref: !1,
      backLabel: "Back",
    }),
    (d.prototype.init = function (b, c) {
      (this.$el = a(b)),
        this.$el.hasClass(d.MAIN_CLASS) ||
          ((this.options = this.getOptions(c)), this.events(), this.process());
    }),
    (d.prototype.$ = function (a) {
      return this.$el.find(a);
    }),
    (d.prototype.events = function () {
      this.$el.on("click", "a", a.proxy(this._onClickItem, this));
    }),
    (d.prototype._onClickItem = function (b) {
      $('.s-menu-panel').removeClass('activePanel');
      var c, e, f;
      (c = a(b.currentTarget)),
        void 0 !== c.attr("data-id") &&
          (b.preventDefault(),
          (f = c.hasClass(d.MAIN_CLASS + "-back")),
          (e = this.$(
            "." + d.PANEL_CLASS + '[data-id="' + c.attr("data-id") + '"]'
          )),
          this.currentPanel.attr("data-id") !== e.attr("data-id")
            ? (this.currentPanel.stop(!0, !0).animate(
                {
                  left: f ? "100%" : "-100%",
                },
                this.options.transitionDuration
              ),
              e
                .stop(!0, !0)
                .css("left", f ? "-100%" : "100%")
                .addClass('activePanel')
                .animate(
                  {
                    left: 0,
                  },
                  this.options.transitionDuration
                ),
              this.$el.stop(!0, !0).animate(
                {
                  height: e.height(),
                },
                this.options.transitionDuration
              ))
            : (e.css({
                left: 0,
              }),
              this.$el.height(e.height())),
          (this.currentPanel = e)),
        c.hasClass(d.NAVIGATION_CLASS) ||
          (this.$("li.active").removeClass("active"),
          c.closest("li").addClass("active"));
    }),
    (d.prototype.process = function () {
      var a;
      (a = this.options.dataJSON
        ? this.processJSON(this.options.dataJSON)
        : this.processHTML()),
        this.setMenuContent(a);
    }),
    (d.prototype.setMenuContent = function (b) {
      var c;
      this.$el.empty().addClass(d.MAIN_CLASS + " " + this.options.className),
        a(b).each(
          a.proxy(function (b, e) {
            var f;
            (f = a("<ul/>")),
              e.root && (c = "." + d.PANEL_CLASS + '[data-id="' + e.id + '"]'),
              f.attr("data-id", e.id),
              f.addClass(d.PANEL_CLASS),
              a(e.children).each(function (b, c) {
                var e, g, h;
                (e = a("<li/>")),
                  c.separator !== !0
                    ? ((g = c.html ? a("<div/>") : a("<a/>")),
                      g.attr({
                        class: c.styleClass,
                        href: c.href,
                      }),
                      c.panelId && g.attr("data-id", c.panelId),
                      c.html
                        ? (g.html(c.html), e.addClass(d.MAIN_CLASS + "-html"))
                        : g.text(c.label),
                      c.icon &&
                        ((h = a("<i/>")),
                        h.addClass(d.ICON_CLASS + " " + c.icon),
                        g.prepend(h)),
                      e.append(g))
                    : e.addClass(d.MAIN_CLASS + "-separator"),
                  f.append(e);
              }),
              this.$el.append(f);
          }, this)
        ),
        (c = this.$(c)),
        c.addClass(d.PANEL_CLASS + "-root"),
        (this.currentPanel = c),
        this.options.initHref !== !1
          ? this.changeVisiblePanel()
          : this.currentPanel.css("left", 0),
        this.$el.height(this.currentPanel.height());
    }),
    (d.prototype.changeVisiblePanel = function () {
      var a, b;
      (a = this.getHyperlinkByHref(this.options.initHref)),
        0 !== a.length
          ? (a.closest("li").addClass("active"),
            (b = this.getPanelByHref(this.options.initHref)),
            (this.currentPanel = b))
          : console.warn(
              d.NAME +
                ': the link "' +
                this.options.initHref +
                '" does not exists. Please check the ' +
                (this.options.dataJSON !== !1
                  ? "JSON object"
                  : "HTML structure") +
                "."
            ),
        (this.options.initHref = !1),
        this.currentPanel.css("left", 0);
    }),
    (d.prototype.processHTML = function (b, c, e) {
      var f, g;
      return (
        (f = {
          id: d.PANEL_CLASS + "-" + this.getNewId(),
          root: b ? !1 : !0,
          children: [],
        }),
        (g = []),
        void 0 !== b
          ? f.children.push({
              panelId: c.id,
              href: "#" + c.id,
              label: this.options.backLabel === !0 ? e : this.options.backLabel,
              styleClass: d.MAIN_CLASS + "-back " + d.NAVIGATION_CLASS,
            })
          : (b = this.$el.children("ul")),
        b.children("li").each(
          a.proxy(function (b, c) {
            var e, h, i, j;
            (c = a(c)),
              c.hasClass("separator")
                ? (e = {
                    separator: !0,
                  })
                : ((h = c.children("a")),
                  (e = {
                    icon:
                      h.find("." + d.SET_ICON_CLASS).attr("class") || void 0,
                    href: h.attr("href"),
                    label: this.trimWhiteSpaces(h.text()),
                  }),
                  void 0 !== e.icon &&
                    (e.icon = e.icon.replace(d.SET_ICON_CLASS, "")),
                  (j = c.children("ul")),
                  0 !== j.length &&
                    ((i = this.processHTML(j, f, e.label)),
                    (e.panelId = i[0].id),
                    (e.styleClass = d.NAVIGATION_CLASS),
                    (g = g.concat(i)))),
              f.children.push(e);
          }, this)
        ),
        [f].concat(g)
      );
    }),
    (d.prototype.processJSON = function (b, c, e) {
      var f, g;
      return (
        (f = {
          id: d.PANEL_CLASS + "-" + this.getNewId(),
          root: c ? !1 : !0,
          children: [],
        }),
        (g = []),
        c &&
          f.children.push({
            panelId: c.id,
            href: "#" + c.id,
            label: this.options.backLabel === !0 ? e : this.options.backLabel,
            styleClass: d.MAIN_CLASS + "-back " + d.NAVIGATION_CLASS,
          }),
        a(b).each(
          a.proxy(function (a, b) {
            var c;
            f.children.push(b),
              b.children &&
                ((c = this.processJSON(b.children, f, b.label)),
                (b.panelId = c[0].id),
                (b.styleClass = d.NAVIGATION_CLASS),
                (g = g.concat(c)),
                delete b.children);
          }, this)
        ),
        [f].concat(g)
      );
    }),
    (d.prototype.trimWhiteSpaces = function (a) {
      return a.trim();
    }),
    (d.prototype.getDefaults = function () {
      return d.DEFAULTS;
    }),
    (d.prototype.getOptions = function (b) {
      return a.extend({}, this.getDefaults(), this.$el.data(), b);
    }),
    (d.prototype.getHyperlinkByHref = function (a) {
      return this.$('a[href="' + a + '"]') || void 0;
    }),
    (d.prototype.getPanelByHref = function (a) {
      var b = this.getHyperlinkByHref(a);
      return void 0 !== b ? b.closest("ul") : void 0;
    }),
    (d.prototype.getNewId = function () {
      var a;
      do a = Math.random().toString(36).substring(2, 9);
      while (c.indexOf(a) >= 0);
      return c.push(a), a;
    });
  var e = a.fn.slidingMenu;
  (a.fn.slidingMenu = b),
    (a.fn.slidingMenu.Constructor = d),
    (a.fn.slidingMenu.noConflict = function () {
      return (a.fn.slidingMenu = e), this;
    });
});
