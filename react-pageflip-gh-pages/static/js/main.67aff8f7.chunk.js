(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([[0], {
  23:
    function (e, t, a) { e.exports = a(24) }, 24:
    function (e, t, a) {
      "use strict"; a.r(t); var n = a(22), i = a(3), s = a(4), o = a(6), l = a(5), r = a(0), c = a.n(r), u = a(15), m = a.n(u), p = a(16), d = (a(38), a(1)), g = a.n(d), h = a(18), v = a.n(h), f = a(19), b = a.n(f), E = a(20), k = a.n(E), y = a(21), N = a.n(y); a(47); g.a.registerLanguage("javascript", v.a), g.a.registerLanguage("plaintext", b.a), g.a.registerLanguage("xml", k.a), g.a.registerLanguage("scss", N.a); var S = c.a.forwardRef((
        function (e, t) { return c.a.createElement("div", { className: "page page-cover page-cover-" + e.pos, ref: t, "data-density": "hard" }, c.a.createElement("div", { className: "page-content" }, c.a.createElement("h2", null, e.children))) })), C = c.a.forwardRef((
          function (e, t) { return c.a.createElement("div", { className: "page", ref: t, "data-density": "soft" | e.density }, c.a.createElement("div", { className: "page-content" }, c.a.createElement("h2", { className: "page-header" }, "Seitentitel - ", e.number), c.a.createElement("div", { className: "page-image", style: { backgroundImage: "url(images/html/" + e.image + ")" } }), c.a.createElement("div", { className: "page-text" }, e.children), c.a.createElement("div", { className: "page-footer" }, e.number + 1))) })), x =
          function (e) {
            Object(o.a)(a, e); var t = Object(l.a)(a);
            function a(e) {
              var n; Object(i.a)(this, a), (n = t.call(this, e)).nextButtonClick =
                function () { n.flipBook.getPageFlip().flipNext() }, n.prevButtonClick =
                function () { n.flipBook.getPageFlip().flipPrev() }, n.onPage =
                function (e) { n.setState({ page: e.data }) }, n.onChangeOrientation =
                function (e) { n.setState({ orientation: e.data }) }, n.onChangeState =
                //# number: wird als Seitenzahl angezeigt
                function (e) { n.setState({ state: e.data }) };  
                var s = [c.a.createElement(S, { key: 0, pos: "top" }, "Vorderseite")];
                s.push(c.a.createElement(C, { key: 1, image: 1 + ".jpg", number: 1 }, "Moin"));
                s.push(c.a.createElement(C, { key: 2, image: 2 + ".jpg", number: 2 }, "Moin 2"));
                s.push(c.a.createElement(S, { key: 3, pos: "bottom" }, "Rückseite"));     
                return s, n.state = { page: 0, totalPage: 0, orientation: "landscape", state: "read", pages: s }, n
            } return Object(s.a)(a, [{
              key: "componentDidMount", value:
                function () { this.setState({ totalPage: this.flipBook.getPageFlip().getPageCount() }) }
            }, {
              key: "render", value:
                function () {
                  var e = this; return c.a.createElement("div", null, c.a.createElement("div", { className: "container-md", style: { position: "relative" } }, c.a.createElement(p.a, {
                    width: 550, height: 733, size: "stretch", minWidth: 315, maxWidth: 1e3, minHeight: 400, maxHeight: 1533, maxShadowOpacity: .5, showCover: !0, mobileScrollSupport: !0, onFlip: this.onPage, onChangeOrientation: this.onChangeOrientation, onChangeState: this.onChangeState, className: "flip-book html-book demo-book", style: { backgroundImage: "url(images/background.jpg)" }, ref:
                      function (t) { return e.flipBook = t }
                  }, this.state.pages)), c.a.createElement("div", { className: "container mt-3" }, c.a.createElement("div", { className: "row" })))
                }
            }]), a
          }(c.a.Component); m.a.render(c.a.createElement(x, null), document.getElementById("demoBlock")), document.addEventListener("DOMContentLoaded", (
            function () {
              var e, t = document.querySelectorAll("code"), a = Object(n.a)(t); try { for (a.s(); !(e = a.n()).done;) { var i = e.value; g.a.highlightBlock(i) } } catch (l) { a.e(l) } finally { a.f() } var s = !1, o = document.querySelector(".demo-source"); document.querySelector(".btn-source").addEventListener("click", (
                function () { o.style.display = s ? "none" : "block", s = !s }))
            }))
    }, 38:
    function (e, t, a) { }
}, [[23, 1, 2]]]);
//# sourceMappingURL=main.67aff8f7.chunk.js.map