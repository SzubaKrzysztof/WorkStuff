export class Basket {
	constructor() {
		this.attach();
	}

	attach() {
		this.el = "#Cart";
		this.$el = $(this.el);

		this.json = window.JSONS.DemoBasket;
		this.Update();
	}

	EmptyBasketHtml(msg = "", cls = "") {
		return `<div class="empty ${cls}">
                    <span>${msg}</span>
                    <i class="material-symbols-rounded">shopping_basket</i>
                    <a class="button" href="/basketedit.php?mode=1">Przejdź do koszyka</a>
                </div>`;
	}

	Loading() {
		this.$el.html(
			this.EmptyBasketHtml("Trwa aktualizowanie Twojego koszyka", "loading")
		);
	}

	ShowError() {
		this.$el.html(
			this.EmptyBasketHtml("Wystąpił nieoczekiwany błąd :(", "error", "")
		);
	}

	GetIAIData() {
		if (!this.params) {
			this.params = { Basket: { format: "json" } };
			if (this.ProductId) {
				this.params.Hotspots = {
					format: "json",
					params: {
						action: "get-hotspots-html",
						"zones-names": "p_associated_zone2",
						components: "basket",
						"zones-types": "projector",
						product: this.ProductId,
					},
				};
			}
		}

		return Konesso.behaviors.Body.GetIAIData(this.params).then((x) => {
			var x = getJSON(x);

			if (!x) return;

			if (x.Hotspots && x.Hotspots.response && x.Hotspots.response.basket) {
				Konesso.settings.Hotspots.Basket = JSON.parse(
					x.Hotspots.response.basket.trim().replace(/(\r\n|\n|\r|\\n)/gm, "")
				);
			}

			if (x.Basket) {
				Konesso.settings.IAIData.Basket = x.Basket;

				if (Konesso.behaviors.Body.Basket)
					Konesso.behaviors.Body.Basket.Update();
			}
		});
	}

	ChangeBasket(id = 1, mode = 1, qty = 1, rmv = false, additional = "") {
		this.ProductId = id;

		let rand =
			this.json.Basket.response.basket.products[
				Math.floor(
					Math.random() * this.json.Basket.response.basket.products.length
				)
			];

		this.json.Basket.response.basket.products.push(rand);

		return new Promise((resolve, reject) => {
			$.ajax({
				type: "POST",
				url: "/basketchange.php",
				async: true,
				data:
					"&mode=" +
					mode +
					"&product=" +
					this.ProductId +
					(rmv ? "&change=empty" : "&number=" + qty) +
					"&size=uniw&getAjax=true" +
					(additional ? "&additional=" + additional : ""),
				dataType: "json",
			})
				.success((x) => {
					if (rmv) {
						this.ProductId = false;
					}
					if (this.GetIAIData()) {
						resolve(x);
					}
				})
				.error((x) => {
					reject(x);
					this.ShowError();
				});
		});
		this.Update();
	}

	Update() {
		var html = "";
		// if Konesso.settings.IAIData && !Konesso.settings.IAIData.Basket.error && Konesso.settings.IAIData.Basket.response.basket
		if (this.json) {
			let basket = this.json.Basket.response.basket;
			let productsCounter = 0;
			if (basket.productsCounter && basket.products) {
				var shippingFree = basket.toShippingFree == "0.00" ? true : false;
				var sum = !shippingFree
					? Konesso.behaviors.Body.priceFormat(
							basket.worth + parseFloat(basket.shippingCost)
					  )
					: basket.worth_formatted;
				var p = basket.products;
				productsCounter = basket.productsCounter;
				p.reverse();

				html += `<div class="basket row no-gutters">
                <div class="checkout col-md-8">
                    <span class="title">Podsumowanie</span>
                    <div class="summary">
                        <div class="line">
                            <span class="name">Suma:</span>
                            <b class="price">${sum}</b>
                        </div>
                        <div class="line">
                            <span class="name">Ilość:</span>
                            <b class="price">${basket.productsNumber}</b>
                        </div>
                        <div class="line">
                            <span class="name">Dostawa:</span>
                            <b class="price">${
															!shippingFree
																? "od " + basket.shippingCost_formatted
																: "Darmowa"
														}</b>
                        </div>
                        <div class="line">
                            <span class="name">Wartość zamówienia:</span>
                            <b class="price">${basket.worth_formatted}</b>
                        </div>
                    </div>
                    <a href="#" class="btn green">Przejdź do koszyka</a>
                </div>
                <div class="products col-md-4">`;
				for (let i in p) {
					let item = p[i];
					html += `
                    <div class="item" data-product-id=${item.id} data-additional="${item.md5_additional}">
                        <a class="image" href="${item.link}">
                            <img src="${item.icon}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <div class="sell">
                            <div class="qty">
                                <i>Ilość:</i>
                                <span>${item.count}</span>
                            </div>
                            <div class="price">
                                <i>Cena:</i>
                                <span>${item.prices.worth_gros_formatted}</span>
                            </div>
                        </div>
                        <button class="remove">
                          <i class="zwicon-trash"></i>
                      </button> 
                  </div>`;
				}
				html += `</div>
            </div>`;
			} else {
				html = this.EmptyBasketHtml("Twój koszyk jest pusty");
			}
			// $('#MainHeader .basket-trigger .badge').html(productsCounter);
		} else {
			this.ShowError();
			return;
		}

		this.$el.html(html);

		$('[data-tab="Cart"]').trigger("click");
	}
}

var Meny = {
	create: function (e) {
		return (function () {
			function t(e) {
				Meny.extend(Q, e), n(), o(), i(), r(), s(), a();
			}
			function n() {
				switch (((k = ""), (D = ""), Q.position)) {
					case P:
						(E = "50% 0%"),
							(w =
								"rotateX( 30deg ) translateY( -100% ) translateY( " +
								Q.overlap +
								"px )"),
							(T = "50% 0"),
							(N = "translateY( " + Q.height + "px ) rotateX( -15deg )"),
							(Y = { top: "-" + (Q.height - Q.overlap) + "px" }),
							(X = { top: "0px" }),
							(C = { top: "0px" }),
							(L = { top: Q.height + "px" });
						break;
					case W:
						(E = "100% 50%"),
							(w =
								"rotateY( 30deg ) translateX( 100% ) translateX( -2px ) scale( 1.01 )"),
							(T = "100% 50%"),
							(N = "translateX( -" + Q.width + "px ) rotateY( -15deg )"),
							(Y = { right: "-" + (Q.width - Q.overlap) + "px" }),
							(X = { right: "0px" }),
							(C = { left: "0px" }),
							(L = { left: "-" + Q.width + "px" });
						break;
					case F:
						(E = "50% 100%"),
							(w =
								"rotateX( -30deg ) translateY( 100% ) translateY( -" +
								Q.overlap +
								"px )"),
							(T = "50% 100%"),
							(N = "translateY( -" + Q.height + "px ) rotateX( 15deg )"),
							(Y = { bottom: "-" + (Q.height - Q.overlap) + "px" }),
							(X = { bottom: "0px" }),
							(C = { top: "0px" }),
							(L = { top: "-" + Q.height + "px" });
						break;
					case E:
						(E = "100% 50%"),
							(w =
								"translateX( -100% ) translateX( " +
								Q.overlap +
								"px ) scale( 1.01 ) rotateY( -30deg )"),
							(T = "0 50%"),
							(N = "translateX( " + Q.width + "px ) rotateY( 15deg )"),
							(Y = { left: "-" + (Q.width - Q.overlap) + "px" }),
							(X = { left: "0px" }),
							(C = { left: "0px" }),
							(L = { left: Q.width + "px" });
				}
			}
			function o() {
				Meny.addClass(U.wrapper, "meny-" + Q.position),
					(R.wrapper = U.wrapper.style.cssText),
					(U.wrapper.style[Meny.prefix("perspective")] = "800px"),
					(U.wrapper.style[Meny.prefix("perspectiveOrigin")] = T);
			}
			function i() {
				U.cover && U.cover.parentNode.removeChild(U.cover),
					(U.cover = document.createElement("div")),
					(U.cover.style.position = "absolute"),
					(U.cover.style.display = "block"),
					(U.cover.style.width = "100%"),
					(U.cover.style.height = "100%"),
					(U.cover.style.left = 0),
					(U.cover.style.top = 0),
					(U.cover.style.zIndex = 1e3),
					(U.cover.style.visibility = "hidden"),
					(U.cover.style.opacity = 0);
				try {
					(U.cover.style.background = "rgba( 0, 0, 0, 0.4 )"),
						(U.cover.style.background =
							"-ms-linear-gradient(" +
							Q.position +
							", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)"),
						(U.cover.style.background =
							"-moz-linear-gradient(" +
							Q.position +
							", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)"),
						(U.cover.style.background =
							"-webkit-linear-gradient(" +
							Q.position +
							", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)");
				} catch (e) {}
				A &&
					(U.cover.style[Meny.prefix("transition")] =
						"all " + Q.transitionDuration + " " + Q.transitionEasing),
					U.contents.appendChild(U.cover);
			}
			function r() {
				var e = U.menu.style;
				switch (Q.position) {
					case P:
						(e.width = "100%"), (e.height = Q.height + "px");
						break;
					case W:
						(e.right = "0"), (e.width = Q.width + "px"), (e.height = "100%");
						break;
					case F:
						(e.bottom = "0"), (e.width = "100%"), (e.height = Q.height + "px");
						break;
					case I:
						(e.width = Q.width + "px"), (e.height = "100%");
				}
				(R.menu = e.cssText),
					(e.position = "fixed"),
					(e.display = "block"),
					(e.zIndex = 1),
					A
						? ((e[Meny.prefix("transform")] = w),
						  (e[Meny.prefix("transformOrigin")] = E),
						  (e[Meny.prefix("transition")] =
								"all " + Q.transitionDuration + " " + Q.transitionEasing))
						: Meny.extend(e, Y);
			}
			function s() {
				var e = U.contents.style;
				(R.contents = e.cssText),
					A
						? ((e[Meny.prefix("transform")] = D),
						  (e[Meny.prefix("transformOrigin")] = T),
						  (e[Meny.prefix("transition")] =
								"all " + Q.transitionDuration + " " + Q.transitionEasing))
						: ((e.position = e.position.match(/relative|absolute|fixed/gi)
								? e.position
								: "relative"),
						  Meny.extend(e, C));
			}
			function a() {
				"ontouchstart" in window &&
					(Q.touch
						? (Meny.bindEvent(document, "touchstart", h),
						  Meny.bindEvent(document, "touchend", y))
						: (Meny.unbindEvent(document, "touchstart", h),
						  Meny.unbindEvent(document, "touchend", y))),
					Q.mouse
						? (Meny.bindEvent(document, "mousedown", d),
						  Meny.bindEvent(document, "mouseup", v),
						  Meny.bindEvent(document, "mousemove", l))
						: (Meny.unbindEvent(document, "mousedown", d),
						  Meny.unbindEvent(document, "mouseup", v),
						  Meny.unbindEvent(document, "mousemove", l));
			}
			function c() {
				J ||
					((J = !0),
					Meny.addClass(U.wrapper, "meny-active"),
					(U.cover.style.height = U.contents.scrollHeight + "px"),
					(U.cover.style.visibility = "visible"),
					A
						? (Meny.bindEventOnce(U.wrapper, "transitionend", function () {
								Meny.dispatchEvent(U.menu, "opened");
						  }),
						  (U.cover.style.opacity = 1),
						  (U.contents.style[Meny.prefix("transform")] = N),
						  (U.menu.style[Meny.prefix("transform")] = k))
						: (O && O.stop(),
						  (O = Meny.animate(U.menu, X, 500)),
						  z && z.stop(),
						  (z = Meny.animate(U.contents, L, 500)),
						  H && H.stop(),
						  (H = Meny.animate(U.cover, { opacity: 1 }, 500))),
					Meny.dispatchEvent(U.menu, "open"));
			}
			function p() {
				J &&
					((J = !1),
					Meny.removeClass(U.wrapper, "meny-active"),
					A
						? (Meny.bindEventOnce(U.wrapper, "transitionend", function () {
								Meny.dispatchEvent(U.menu, "closed");
						  }),
						  (U.cover.style.visibility = "hidden"),
						  (U.cover.style.opacity = 0),
						  (U.contents.style[Meny.prefix("transform")] = D),
						  (U.menu.style[Meny.prefix("transform")] = w))
						: (O && O.stop(),
						  (O = Meny.animate(U.menu, Y, 500)),
						  z && z.stop(),
						  (z = Meny.animate(U.contents, C, 500)),
						  H && H.stop(),
						  (H = Meny.animate(U.cover, { opacity: 0 }, 500, function () {
								(U.cover.style.visibility = "hidden"),
									Meny.dispatchEvent(U.menu, "closed");
						  }))),
					Meny.dispatchEvent(U.menu, "close"));
			}
			function u() {
				(U.wrapper.style.cssText = R.wrapper),
					(U.menu.style.cssText = R.menu),
					(U.contents.style.cssText = R.contents),
					U.cover &&
						U.cover.parentNode &&
						U.cover.parentNode.removeChild(U.cover),
					Meny.unbindEvent(document, "touchstart", h),
					Meny.unbindEvent(document, "touchend", y),
					Meny.unbindEvent(document, "mousedown", d),
					Meny.unbindEvent(document, "mouseup", v),
					Meny.unbindEvent(document, "mousemove", l);
				for (var e in S) this.removeEventListener(S[e][0], S[e][1]);
				S = [];
			}
			function d() {
				K = !0;
			}
			function l(e) {
				if (!K) {
					var t = e.clientX - Z,
						n = e.clientY - $;
					switch (Q.position) {
						case P:
							n > Q.height ? p() : n < Q.threshold && c();
							break;
						case W:
							var o = U.wrapper.offsetWidth;
							t < o - Q.width ? p() : t > o - Q.threshold && c();
							break;
						case F:
							var i = U.wrapper.offsetHeight;
							n < i - Q.height ? p() : n > i - Q.threshold && c();
							break;
						case I:
							t > Q.width ? p() : t < Q.threshold && c();
					}
				}
			}
			function v() {
				K = !1;
			}
			function h(e) {
				(j = e.touches[0].clientX - Z),
					(q = e.touches[0].clientY - $),
					(B = null),
					(G = null),
					Meny.bindEvent(document, "touchmove", m);
			}
			function m(e) {
				(B = e.touches[0].clientX - Z), (G = e.touches[0].clientY - $);
				var t = null;
				Math.abs(B - j) > Math.abs(G - q)
					? B < j - Q.threshold
						? (t = g)
						: B > j + Q.threshold && (t = b)
					: G < q - Q.threshold
					? (t = M)
					: G > q + Q.threshold && (t = x),
					t && t() && e.prevent();
			}
			function y() {
				Meny.unbindEvent(document, "touchmove", m),
					null === B && null === G && f();
			}
			function f() {
				var e =
					(Q.position === P && q > Q.height) ||
					(Q.position === W && j < U.wrapper.offsetWidth - Q.width) ||
					(Q.position === F && q < U.wrapper.offsetHeight - Q.height) ||
					(Q.position === I && j > Q.width);
				e && p();
			}
			function b() {
				return Q.position === W && J
					? (p(), !0)
					: Q.position !== I || J
					? void 0
					: (c(), !0);
			}
			function g() {
				return Q.position !== W || J
					? Q.position === I && J
						? (p(), !0)
						: void 0
					: (c(), !0);
			}
			function x() {
				return Q.position === F && J
					? (p(), !0)
					: Q.position !== P || J
					? void 0
					: (c(), !0);
			}
			function M() {
				return Q.position !== F || J
					? Q.position === P && J
						? (p(), !0)
						: void 0
					: (c(), !0);
			}
			if (!e || !e.menuElement || !e.contentsElement)
				throw "You need to specify which menu and contents elements to use.";
			if (e.menuElement.parentNode !== e.contentsElement.parentNode)
				throw "The menu and contents elements must have the same parent.";
			var E,
				w,
				k,
				Y,
				X,
				T,
				D,
				N,
				C,
				L,
				O,
				z,
				H,
				P = "top",
				W = "right",
				F = "bottom",
				I = "left",
				A =
					"WebkitPerspective" in document.body.style ||
					"MozPerspective" in document.body.style ||
					"msPerspective" in document.body.style ||
					"OPerspective" in document.body.style ||
					"perspective" in document.body.style,
				Q = {
					width: 300,
					height: 300,
					position: I,
					threshold: 40,
					overlap: 6,
					transitionDuration: "0.5s",
					transitionEasing: "ease",
					mouse: !0,
					touch: !0,
				},
				U = {
					menu: e.menuElement,
					contents: e.contentsElement,
					wrapper: e.menuElement.parentNode,
					cover: null,
				},
				Z = U.wrapper.offsetLeft,
				$ = U.wrapper.offsetTop,
				j = null,
				q = null,
				B = null,
				G = null,
				J = !1,
				K = !1,
				R = {},
				S = [];
			return (
				t(e),
				{
					configure: t,
					open: c,
					close: p,
					destroy: u,
					isOpen: function () {
						return J;
					},
					addEventListener: function (e, t) {
						S.push([e, t]), U.menu && Meny.bindEvent(U.menu, e, t);
					},
					removeEventListener: function (e, t) {
						U.menu && Meny.unbindEvent(U.menu, e, t);
					},
				}
			);
		})();
	},
	animate: function (e, t, n, o) {
		return (function () {
			function i() {
				var t = 1 - Math.pow(1 - (Date.now() - p) / n, 5);
				for (var a in s) {
					var u = s[a];
					e.style[a] = u.start + (u.end - u.start) * t + u.unit;
				}
				1 > t ? (c = setTimeout(i, 1e3 / 60)) : (o && o(), r());
			}
			function r() {
				clearTimeout(c);
			}
			var s = {};
			for (var a in t)
				s[a] = {
					start: parseFloat(e.style[a]) || 0,
					end: parseFloat(t[a]),
					unit:
						"string" == typeof t[a] && t[a].match(/px|em|%/gi)
							? t[a].match(/px|em|%/gi)[0]
							: "",
				};
			var c,
				p = Date.now();
			return i(), { stop: r };
		})();
	},
	extend: function (e, t) {
		for (var n in t) e[n] = t[n];
	},
	prefix: function (e, t) {
		for (
			var n = e.slice(0, 1).toUpperCase() + e.slice(1),
				o = ["Webkit", "Moz", "O", "ms"],
				i = 0,
				r = o.length;
			r > i;
			i++
		) {
			var s = o[i];
			if ("undefined" != typeof (t || document.body).style[s + n]) return s + n;
		}
		return e;
	},
	addClass: function (e, t) {
		e.className = e.className.replace(/\s+$/gi, "") + " " + t;
	},
	removeClass: function (e, t) {
		e.className = e.className.replace(t, "");
	},
	bindEvent: function (e, t, n) {
		e.addEventListener
			? e.addEventListener(t, n, !1)
			: e.attachEvent("on" + t, n);
	},
	unbindEvent: function (e, t, n) {
		e.removeEventListener
			? e.removeEventListener(t, n, !1)
			: e.detachEvent("on" + t, n);
	},
	bindEventOnce: function (e, t, n) {
		var o = this,
			i = function () {
				o.unbindEvent(e, t, i), n.apply(this, arguments);
			};
		this.bindEvent(e, t, i);
	},
	dispatchEvent: function (e, t, n) {
		if (e) {
			var o = document.createEvent("HTMLEvents", 1, 2);
			o.initEvent(t, !0, !0), Meny.extend(o, n), e.dispatchEvent(o);
		}
	},
	getQuery: function () {
		var e = {};
		return (
			location.search.replace(/[A-Z0-9]+?=([\w|:|\/\.]*)/gi, function (t) {
				e[t.split("=").shift()] = t.split("=").pop();
			}),
			e
		);
	},
};
"function" != typeof Date.now &&
	(Date.now = function () {
		return new Date().getTime();
	});

export class Body {
	constructor() {}
	attach() {
		$("body").addClass(Konesso.settings.PageType + "-page");

		console.log("aaa");

		this.SideBar();

		// this.Konesso.Basket = new Basket();
		// this.Konesso.WishList = new WishList();

		this.RunIAIData();

		this.Tabs(); // todo; zmiana na globalną funkcję

		this.ScrollTo(); //todo; zamiec na html5

		this.Listeners();

		this.StickyHeader();

		this.AccordionFooter(); //todo; zmiana na funkcje globalna możliwą do uzycia na innych stronach / czesciach strony

		this.GenerateMenuCategories();

		this.isTopInfoClosed(); //todo;

		this.TippyInit();

		//  this.GenerateIdsForModalTriggers('[data-modal]'); todo; nie generowac od razu a uzyc trigger do uruchomienia wskazanego modalu

		this.ActiveIAIHotspots();
		this.IsMenyEmpty();

		// todo: search jako osobny komponent;
		this.SearchProduct();
		this.SearchFields();
		this.ActiveSearchBlock();

		// this.hystModalInit(); //todo; check

		this.MenyHashChange();

		this.ProductQtyDropdown();

		this.QtySelectToInput();
		setTimeout(() => {
			this.GenerateAsideCategories();
		}, 100);
	}

	QtySelectToInput() {
		$(document).on("change", ".qty", (e) => {
			let target = $(e.currentTarget);
			if (target.find(".qty-select :selected").text() == "więcej") {
				target.html("");
				target.append('<input type="number" class="qty-input">');
				target.find(".qty-input").val(1).focus();
			}
		});
	}

	GenerateIdsForModalTriggers(element) {
		$(element).each((i, el) => {
			console.log(el);
			console.log(i);
			let id = Math.ceil(Math.random() * 2152153);
			$(el).attr("data-modal", `#modal-${id}`);
			console.log(el);
		});
	}

	hystModalInit() {
		let newModal = new HystModal({
			linkAttributeName: "data-modal",
		});
	}

	checkCategory(name = "") {
		if (this.Breadcrumbs.length && this.Breadcrumbs.indexOf(name) !== -1) {
			return true;
		}

		return;
	}

	ActiveIAIHotspots() {
		if (Konesso.settings.PageType == "main") {
			Konesso.settings.IaIParams.Hotspots = {
				format: "json",
				params: {
					action: "get-hotspots-html",
					"zones-names":
						"main_hotspot_zone1,main_hotspot_zone2,main_hotspot_zone3,main_hotspot_zone4",
					components:
						"main_hotspot_zone1,main_hotspot_zone2,main_hotspot_zone3,main_hotspot_zone4",
					"zones-types": "main,main,main,main",
				},
			};
		} else if (Konesso.settings.PageType == "projector") {
			Konesso.settings.ProductId = $("#p_product_hidden").val();
			Konesso.settings.IaIParams.Hotspots = {
				format: "json",
				params: {
					action: "get-hotspots-html",
					"zones-names":
						"p_associated_zone1,p_associated_zone2,p_associated_zone3",
					components: "products_zone1,products_zone2,products_zone3",
					"zones-types": "projector,projector,projector",
					product: Konesso.settings.ProductId,
				},
			};
			// Konesso.settings.IaIParams.Hotspots = {"format":"json","params":{"action":"get-hotspots-html","zones-names":"p_associated_zone1,p_associated_zone2,p_associated_zone3,p_associated_zone4","components":"products_zone1,products_zone2,products_zone3,products_zone4","zones-types":"projector,projector,projector,projector", "product" : Konesso.settings.ProductId}}
		} else if (Konesso.settings.PageType == "basketedit") {
			Konesso.settings.IaIParams.Hotspots = {
				format: "json",
				params: {
					action: "get-hotspots-html",
					"zones-names": "basketedit_hotspot_zone1,",
					components: "basketedit_hotspot_zone1",
					"zones-types": "basket",
				},
			};
		}
	}

	RunIAIData() {
		console.log("🚀 ~ file: Body.js:588 ~ Body ~ RunIAIData ~ RunIAIData:");
		// this.Basket = new Basket();
		// this.WishList = new WishList();
	}

	GetIAIData(params = false) {
		return;
		var params = params || Konesso.settings.IaIParams;
		return new Promise((resolve, reject) => {
			if (!params) return;

			$.ajax({
				data: { request: JSON.stringify(params) },
				url: "/ajax/get.php",
			})
				.success((x) => {
					resolve(x);
				})
				.error((x) => {
					reject(x);
				});
		});
	}

	AccordionFooter() {
		//todo zmienic na jquery
		// jako funkcja globalna Accordion

		const acc = document.getElementsByClassName("accordion");
		let i;

		for (let i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function (e) {
				let target = $(e.currentTarget);
				let panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					target
						.find("i")
						.removeClass("zwicon-chevron-up")
						.addClass("zwicon-chevron-down");
					panel.style.maxHeight = null;
				} else {
					target
						.find("i")
						.removeClass("zwicon-chevron-down")
						.addClass("zwicon-chevron-up");
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}
	}

	StickyHeader() {
		var bodyClassT = "h-top";
		var bodyClassNT = "h-not-top";
		var bodyClassSU = "h-s-up";
		var bodyClassSD = "h-s-down";
		$("body").addClass(bodyClassT);
		$("#MainHeader")
			.addClass("h-sticky ")
			.headroom({
				offset: 120,
				tolerance: 100,
				classes: {
					initial: "animated",
					pinned: "slideDown",
					unpinned: "slideUp",
				},
				onPin: function () {
					$("body")
						.addClass(bodyClassSU)
						.removeClass([bodyClassT, bodyClassSD].join(" "));
				},
				onUnpin: function () {
					$("body")
						.addClass(bodyClassSD)
						.removeClass([bodyClassT.bodyClassSU].join(" "));
				},
				onTop: function () {
					$("body")
						.addClass(bodyClassT)
						.removeClass([bodyClassNT, bodyClassSD, bodyClassSU].join(" "));
				},
				onNotTop: function () {
					$("body")
						.addClass(bodyClassNT)
						.removeClass([bodyClassT, bodyClassSD, bodyClassSU].join(" "));
				},
				onBottom: function () {},
				onNotBottom: function () {},
			});
	}

	SearchFields() {
		var searchOptions = {
			strings: [
				"Kawa ziarnista",
				"Herbata zielona",
				"Ekspress przelewowy",
				"Zestaw prezentowy dla dziewczyny",
			],
			typeSpeed: 100,
			backSpeed: 30,
			attr: "placeholder",
			shuffle: true,
			smartBackspace: true,
			bindInputFocusEvents: true,
			cursorChar: "|",
			loop: true,
		};

		let elements = [
			document.querySelector(".header-main .search-input"),
			document.querySelector(".meny-konesso #Search .input"),
		];
		elements.forEach((el) => {
			new Typed(el, searchOptions);
		});
	}

	ScrollTo() {
		$(document).on("click", "*[data-scroll-to]", function () {
			var $this = $(this),
				data = $this.data();

			if (!$(data.scrollTo).length) return;

			var top = $(data.scrollTo).offset().top;
			if (data.scrollMargin) top -= data.scrollMargin;

			window.Konesso.behaviors.Scroll.Smooth(top);
		});
	}

	isTopInfoClosed() {
		if (!localStorage.getItem("isTopInfoClosed")) {
			//todo; oznaczenie versji + dorobienie generowania slidow na podstawie dnaych JSON
			$("#MainHeader").prepend(
				`<div class="top-info">
                    <div class="slider" data-component="Slider" data-autoplay="7000">
                        <div class="item">
                            <a href="#"><span>Darmowa dostawa</span></a> 
                        </div>
                        <div class="item">
                            <a href="#"><span>Akcja 22 zł</span></a>
                        </div>
                        <div class="item">
                            <a href="#"><span>Kawy lawazza 30% taniej</span></a>
                        </div>
                    </div>
                    <button><i class="zwicon-close"></i></button>
                </div>`
			);
		}
	}

	SearchProduct() {
		//todo; .main-search-fom
		$(document).on(
			"click",
			".search-bar .submit, .meny-konesso #Search .submit",
			(e) => {
				const target = $(e.currentTarget);
				const searchBar = target.parent().find("input");
				if (searchBar.val().length < 1) {
					e.prevent();
					searchBar.css("box-shadow", "0px 0px 5px 0px red"); //todo; to style css
				} else {
					searchBar.removeAttr("style");
				}
			}
		);
		$(document).on(
			"keydown",
			".search-bar .search-input, .meny-konesso #Search .input",
			(e) => {
				const target = $(e.currentTarget);
				if (target.val().length < 1 && e.keyCode == 13) {
					e.prevent();
					target.css("box-shadow", "0px 0px 5px 0px red");
				} else if (e.keyCode == 13 && searchBar.val().length > 1) {
					e.prevent();
					target.removeAttr("style");
					window.location.href = `search.php?text=${target.val()}`;
				}
			}
		);
		//search aside menu
		$(document).on("keyup", ".tabs #Search input", () => {
			if ($(".tabs #Search input").val().length > 1) {
				$(".tabs #Search .products").fadeIn().addClass("active");
			} else {
				$(".tabs #Search .products").fadeOut();
			}
		});
	}

	IsMenyEmpty() {
		$(document).on("click", ".meny-konesso #Fav .remove", () => {
			let basket = $(".meny-konesso #Fav .basket");
			let fav = $(".meny-konesso #Fav .basket .favourites");
			if (fav.children().length == 0) {
				basket.addClass("d-flex align-items-center justify-content-center");
				basket.css("height", "85vh");
				basket.children().remove();
				basket.append(`<div class="empty">
                                <span>Twoja lista jest pusta</span>
                                <i class="zwicon-heart"></i>
                                <a class="btn black" href="/basketedit.php?mode=2">Przejdź do ulubionych</a>
                            </div>`);
			} else {
				basket.removeClass("d-flex").removeClass("align-items-center");
				$(".meny-konesso #Fav .basket .empty").remove();
				basket.removeAttr("style");
			}
		});

		$(document).on("click", ".meny-konesso #Cart .remove", () => {
			let basket = $(".meny-konesso #Cart .basket");
			let prods = $(".meny-konesso #Cart .basket .products");
			if (prods.children().length == 0) {
				basket.addClass("d-flex align-items-center justify-content-center");
				basket.css("height", "85vh");
				basket.children().remove();
				basket.append(`<div class="empty">
                                <span>Twój koszyk jest pusty</span>
                                <i class="zwicon-shopping-cart"></i>
                                <a class="btn black" href="/basketedit.php?mode=1">Przejdź do koszyka</a>
                            </div>`);
			} else {
				basket.removeClass("d-flex").removeClass("align-items-center");
				$(".meny-konesso #Cart .basket .empty").remove();
				basket.removeAttr("style");
			}
		});
	}

	ProductQtyDropdown() {
		//todo kod jako przyklad
		$("input.qty-product")
			.get()
			.forEach((x) => {
				html = `<select name="xxx"  class="qty-select">`;

				for (let i = 1; i <= 15; i++)
					html += `<option value="${i}">${i}</option>`;

				html += `<option value="x">więcej</option>
         </select>`;
				x.outerHTML = html;
			});

		$(document).on("change", ".qty-select", (e) => {
			$t = $(e.currentTarget);
			if ($t == "x") {
				$t.get()[0].outerHTML = '<input name="xxx" value="1">';
			}
		});
	}

	Tabs() {
		//w chwili obecnej jest to taby sidemenu - a powinno byc rozgraniczenie
		//todo; zmienic na funkcje globalna

		$(document).on("click", "*[data-tab]", function (e) {
			var tab_id = $(this).attr("data-tab");
			let tab_title = $(this).attr("data-title");
			var $target = $("#" + tab_id);
			var $tabs = $target.parents(".tabs");

			if (!$target.length || !$tabs.length) {
				return;
			}

			$(".close-panel .title").html(tab_title);
			$(".close-panel .block i").attr(
				"class",
				tab_id == "Cart"
					? "zwicon-shopping-cart"
					: tab_id == "Fav"
					? "zwicon-heart"
					: tab_id == "Search"
					? "zwicon-search"
					: tab_id == "Menu"
					? "zwicon-hamburger-menu"
					: "zwicon-user"
			);
			$(".close-panel .title").attr(
				"href",
				tab_id == "Cart"
					? "#koszyk"
					: tab_id == "Fav"
					? "#ulubione"
					: tab_id == "Search"
					? "#szukaj"
					: "#"
			);
			$tabs.find(".item").removeClass("active");
			$tabs.find('*[data-tab="' + tab_id + '"]').addClass("active");
			$tabs.find(".wrapper").removeClass("active");
			$target.addClass("active");
			$("body").css("overflow", "hidden");
		});
	}

	Scrollable() {
		$(document).on("mousewheel DOMMouseScroll", ".scrollable", function (e) {
			var e0 = e.originalEvent,
				delta = e0.wheelDelta || -e0.detail;

			this.scrollTop += (delta < 0 ? 1 : -1) * 30;
			e.prevent();
		});
	}

	GenerateMenuCategories() {
		let json = window.JSONS.MainCategories;

		json.forEach((el) => {
			if (el.label == "Infolinia" || el.label == "Konesso") {
				return;
			}
			let html = `<li class="item">
                    <span>${el.label}</span>
                    
                    ${
											el.children
												? `<div class="content">
                            <div class="types">
                                ${el.children
																	.map((es) => {
																		if (es.children != undefined) {
																			return `<div class="block ${
																				es.children.length >= 17
																					? "big-element"
																					: ""
																			}">
                                            <ul>
                                                <li><b>${es.label}</b></li>
                                                ${es.children
																									.map((ex) => {
																										return `<li><a href="#">${ex.label}</a></li>`;
																									})
																									.join("")}
                                            </ul>
                                        </div>`;
																		} else {
																			return "";
																		}
																	})
																	.join("")}
                            </div>
                            ${el.children
															.map((ex) => {
																if (ex.label == "Promo" || ex.html) {
																	return ex.html;
																}
															})
															.join("")}
                        </div>`
												: ""
										}
                </li>`;

			$(".menu-categories .list").append(html); //todo;
		});
	}

	TippyInit() {
		$(document).ready(function () {
			window.Konesso.behaviors.init();

			$("[data-tippy-content]").each((i, el) => {
				tippy($("[data-tippy-content]").get(), {
					content: $(el).data("tippy"),
					animation: "shift-away",
					arrow: true,
					duration: 2500,
				});
			});
		});

		tippy("body *[data-tippy-content]");
	}

	ActiveSearchBlock() {
		$(document).on("click", ".header-main .search-bar", () => {
			if ($(window).width() < 768) {
				return;
			} else {
				$(".search-window").fadeIn().addClass("active");
				$(".header-main .main-overlay").addClass("active");
				$("body").css("overflow", "hidden");
			}
		});
		$(document).on("click", ".header-main .main-overlay", () => {
			$(".search-window").fadeOut().removeClass("active");
			$(".header-main .main-overlay").removeClass("active");
			$("body").removeAttr("style");
		});
		$(document).on("keyup", ".header-main .search-bar .search-input", () => {
			if ($(".search-bar .search-input").val().length > 1) {
				$(".search-window").addClass("searching");
			} else {
				$(".search-window").removeClass("searching");
			}
		});
	}

	MenyHashChange() {
		this.hashVar = [];
		//słuzy do uzycia przegladarkowego cofnij
		//todo; breakpoint mobile
		//nie dziala zamnkniecie calkowiete menu mobile
		$(document).on("click", ".close-panel .zwicon-close", () => {
			$(".mobile-menu li").removeClass("current");
			$("body").css("overflow-y", "visible");
			this.Meny.close();
		});

		$(document).on("click", ".trigger-menu", (e) => {
			window.history.pushState(
				[],
				"menu-href",
				"#" + $(".s-menu-panel-root").data("id")
			);
			this.hashVar.push($(".s-menu-panel-root").data("id"));
		});

		$(document).on("click", ".meny-konesso .s-menu-nav", (e) => {
			if ($(e.currentTarget).hasClass("s-menu-back")) {
				return;
			}
			window.history.pushState(
				[],
				"menu-href",
				"#" + $(e.currentTarget).data("id")
			);
			this.hashVar.push($(e.currentTarget).data("id"));
		});

		// meny close

		$(".menuJSON"); //todo close trigger-menu

		$(".mobile-menu .item").each((i, el) => {
			if ($(el).hasClass("trigger-menu")) {
				return;
			}
			$(el).data("hash", `s-menu-panel-${Math.ceil(99999 * Math.random())}`);
		});

		$(document).on("click", ".mobile-menu .item", (e) => {
			let target = $(e.currentTarget);
			if (target.hasClass("trigger-menu")) {
				return;
			}
			window.history.pushState([], "menu-href", "#" + target.data("hash"));
		});

		//

		$(window).on("hashchange", (e) => {
			if (e.originalEvent.newURL == e.originalEvent.oldURL) {
				$(`a[href="${window.location.hash}"]`).eq(0).trigger("click");
			}
			$(`a[href="${window.location.hash}"]`).eq(0).trigger("click");

			if (!$(".mobile-menu .trigger-menu").hasClass("current")) {
				$(`.zwicon-close`).eq(0).trigger("click");
			}

			$(".filter-modal .s-menu-back").click();
			$(".filter-modal .modal__close").click();
		});
	}

	Listeners() {
		// $(document).on('click', '.search-trigger, #TopSearch form a', this.TopSearchTrigger.bind(this));
		$(document).on("click", "*[data-meny-open]", this.ActiveMenyTab.bind(this));
		$(document).on(
			"click",
			".meny-overlay, *[data-meny-close]",
			this.MenyReset.bind(this)
		);
		$(document).on("click", ".add-to-basket", this.AddToBasket.bind(this));
		$(document).on("click", ".add-to-favs", this.AddToWishList.bind(this));

		// $(document).on('click', '[data-modal]', this.Modal.bind(this));

		//top info bar
		$(document).on("click", ".top-info .zwicon-close", () => {
			$(".top-info").remove();
			localStorage.setItem("isTopInfoClosed", "true");
		});

		$(document).on("scroll", () => {
			if ($(window).scrollTop() >= 200) {
				$(".top-info").addClass("hidden");
			}
		});
		//

		//hide menu
		$(document).on("click", ".menu-categories .list .back", () => {
			$(".menu-trigger").css("pointer-events", "none");
			setTimeout(() => {
				$(".menu-trigger").removeAttr("style");
			}, 1000);
		});
		//

		//cart aside menu
		$(document).on("click", ".meny-konesso #Cart .item .remove", (e) => {
			let $target = $(e.currentTarget);
			$target.parent().remove();
		});
		//

		//fav aside menu
		$(document).on("click", ".meny-konesso #Fav .item .remove", (e) => {
			let $target = $(e.currentTarget);
			$target.parent().remove();
		});
		//

		// categories menu
		$(document).on("mouseenter", ".menu-categories", () => {
			$(".menu-categories").addClass("active");
		});
		$(document).on("mouseleave", ".menu-categories", () => {
			$(".menu-categories").removeClass("active");
		});
		//

		//

		//tablet
		if ($(window).width() >= 768 && $(window).width() <= 992) {
			$(document).on("click", ".menu-trigger", () => {
				this.Meny.open();
			});
		}
		//

		//show more additional info
		$(document).on("click", ".additional-more", (e) => {
			if ($(e.currentTarget).hasClass("active")) {
				$(".additional-info").css("height", "300px");
				$(e.currentTarget).removeClass("active");
				$(e.currentTarget)
					.find("i")
					.removeClass("zwicon-chevron-up")
					.addClass("zwicon-chevron-down");
			} else {
				$(".additional-info").css("height", "100%");
				$(e.currentTarget).addClass("active");
				$(e.currentTarget)
					.find("i")
					.removeClass("zwicon-chevron-down")
					.addClass("zwicon-chevron-up");
			}
		});
		//

		//show all banners
		$(document).on("click", ".banner-main .show-banners", () => {
			$(".main-modal").addClass("active");
		});
		//

		$(document).on("click", ".user-login, .loginPopUpShow", (e) => {
			e.prevent();
			var content;
			var link = "/login.php";
			$.ajax({
				url: link + "?set_render=content",
			})
				.done((x) => {
					content = $(x).find("#content").html();
					if (!content || !content.length) window.location.href = link;

					$("body").dialog({
						content: content,
						wrapperClass: "signin-dialog",
						fixed: true,
						fitToWindow: true,
						animate: true,
						maxWidth: 812,
						modal: true,
					});
				})
				.error((x) => {
					window.location.href = link;
				});

			return;
		});

		$(document).on("click", "#menuJSON a", (e) => {
			if (e.target.href && e.target.className != "s-menu-nav")
				window.location.href = e.target.href;
		});

		$(document).on(
			"keyup",
			".menu-search-text",
			_.debounce((e) => {
				var $target = $(e.target);
				var val = $target.val();
				var $container = $target.parents(".search-container");
				var data = $target.data();
				var $results = $container.find(".search-results");
				var options = {
					items: data.items || 10,
					categories: data.categories && data.categories == true ? true : false,
				};

				if (val.length < 2 || !$container.length) {
					$results.html("");
					return;
				}

				if (!$results.length) {
					$container.append('<div class="search-results"></div>');
					$results = $container.find(".search-results");
				}

				$results.html(
					'<div class="d-flex align-items-center justify-content-center flex-column mt-3 mb-3 pt-3 pb-3"><i class="fi fi-coffee-beans icon-spin icon-3x"></i><div class="mt-3">wyszukiwanie...</div></div>'
				);

				this.SearchTextIAI(val, false, options.items)
					.then((data) => {
						if (data.error) {
							this.SearchError($results, data.results);
							return;
						}

						$results.html(data.result);

						$("#TopSearch .search-results > ul").mousewheel(function (
							event,
							delta
						) {
							this.scrollLeft -= delta * 100;

							event.prevent();
						});
					})
					.catch((err) => {
						if (err.error) {
							this.SearchError($results, err.results);
							return;
						}
					});
			}, 300)
		);

		if ($(window).width() < 768) {
			$(".search-bar").attr("data-meny-open", true).attr("data-tab", "Search");
		}

		this.Scrollable();
	}

	AddToBasket(e) {
		e.prevent();
		var $product;
		if ($(e.currentTarget).data("productId")) $product = $(e.currentTarget);
		else $product = $(e.currentTarget).parents(".product");

		var id = $product.data("productId");
		if (!id) return false;

		var rmv = $product.data("rmv") ? 1 : 0;
		var qty = $product.data("qty") || 1;
		var additional = $product.data("additional") || 1;

		if ($product.data("qtyTarget") && $($product.data("qtyTarget")).length)
			qty = $($product.data("qtyTarget")).val();

		if (rmv) qty = 0;

		this.Basket.Loading();
		new Basket();
		window.Basket.ChangeBasket();
		id, 1, qty, rmv, additional;
	}

	AddToWishList(e) {
		e.prevent();
		var $product;
		if ($(e.currentTarget).data("productId")) $product = $(e.currentTarget);
		else $product = $(e.currentTarget).parents(".product");

		var id = $product.data("productId");
		if (!id) return false;

		var rmv = $product.data("rmv") ? 1 : 0;
		var qty = $product.data("qty") ? $product.data("qty") : 1;

		if (rmv) qty = 0;

		this.WishList.Loading();
		$(document).on("click", ".add-to-favourites", (e) => {
			e.prevent();
			$("#Fav .basket")
				.append(`<a href="#" class="btn green">Przejdź do ulubionych</a>                  
            <div class="favourites">
                  <div class="item">
                     <a href="#" class="image">
                        <img src="img/coffee-product.jpg" alt="">
                     </a>
                     <div class="title">Kawa Ziarnista Java Kenya Muhara Magomano 250g</div>
                     <div class="sell">
                        <div class="qty">
                              <i>Ilość:</i>
                              <span>1</span>
                        </div>
                        <div class="price">
                              <i>Cena:</i>
                              <span>82.00 zł</span>
                        </div>
                     </div>
                     <button class="remove">
                        <i class="zwicon-trash"></i>
                     </button>
                  </div>
                  <div class="item">
                     <a class="image" href="#">
                        <img src="img/coffee-product.jpg" alt="">
                     </a>
                     <div class="title">Kawa Ziarnista Java Kenya Muhara Magomano 250g</div>
                     <div class="sell">
                        <div class="qty">
                              <i>Ilość:</i>
                              <span>1</span>
                        </div>
                        <div class="price">
                              <i>Cena:</i>
                              <span>82.00 zł</span>
                        </div>
                     </div>
                     <button class="remove">
                        <i class="zwicon-trash"></i>
                     </button>
                  </div>
            </div>`);
			this.Meny.open();
			$('[data-tab="Fav"]').trigger("click");
		});

		this.WishList.ChangeBasket(id, 2, qty, rmv);
	}

	SideBar() {
		this.MenyWidthNormal = 350;
		this.MenyWidthMobile = "100%";
		this.MenyWidthLarge = 600;
		this.MenyOptionsChanged = false;

		let $menu = $(".meny-konesso");
		let $content = $(".meny-content");

		if (!$menu.length || !$content.length) return;

		this.MenyOptions = {
			menuElement: $menu[0],
			contentsElement: $content[0],
			height: $(window).width() < 768 ? "100%" : "",
			position: $(window).width() < 768 ? "bottom" : "left",
			width:
				$(window).width() < 768 ? this.MenyWidthMobile : this.MenyWidthNormal,
			threshold: 20,
			overlap: 0,
			angle: 0,
			mouse: true,
			touch: false,
		};

		this.Meny = Meny.create(this.MenyOptions);
	}

	GenerateAsideCategories() {
		$(".menuJSON").slidingMenu({
			className: "gn-menu",
			backLabel: "Wróć",
			dataJSON: window.JSONS.MainCategories,
		});
	}

	GenerateIdsForModalTriggers(element) {
		$(element).each((i, el) => {
			let id = Math.ceil(Math.random() * 2152153);
			$(el).attr("data-modal", `#modal-${id}`);
		});
	}

	MenyReset() {
		this.MenyOptions.mouse = true;
		this.MenyUpdateOptions();
		this.MenyOptionsChanged = false;
	}

	MenyUpdateOptions() {
		if (this.Meny.isOpen()) {
			this.Meny.close();
		}

		this.Meny.configure(this.MenyOptions);
		this.MenyOptionsChanged = false;
	}

	CartTab() {
		if (this.MenyOptions.width != this.MenyWidthLarge) {
			this.MenyOptions.width = this.MenyWidthLarge;
			this.MenyOptionsChanged = true;
		}

		if ($("#Cart").hasClass("active")) {
			$("#Cart").addClass("active");
			$('li[data-tab="Cart"]').addClass("active");
		}
	}

	ActiveMenyTab(x) {
		var $x = $(x.currentTarget);
		var data = $x.data();

		var find = false;

		x.prevent();

		if (data.menyOpen) {
			this.MenyOptions.mouse = false;
			this.MenyOptionsChanged = true;
		}

		if (data.tab == "Cart") {
			this.CartTab();
		} else if (this.MenyOptions.width != this.MenyWidthNormal) {
			this.MenyOptions.width = this.MenyWidthNormal;
			this.MenyOptionsChanged = true;
		}

		if (this.MenyOptionsChanged) {
			this.MenyUpdateOptions();
			this.MenyOptionsChanged = false;
		}

		if (!this.Meny.isOpen()) {
			this.Meny.open();
		}

		if ($x.is("a")) {
			if (find && find.length) {
				find.trigger("click");
			}
			return;
		}

		if ($(window).width() <= 768) {
			if (!$x.hasClass("current")) {
				$(".mobile-menu li").removeClass("current");
				$x.addClass("current");
			} else {
				$x.removeClass("current");
				this.Meny.close();
			}
		}
	}
}

export class Components {
	constructor() {
		this._components = {};
		this._classNames = {};
	}

	register(type, classObj) {
		this._classNames[type] = classObj;
	}

	attach() {
		let elementList = Array.prototype.slice.call(
			document.querySelectorAll("[data-component]")
		);

		elementList.forEach((element) => {
			let data = $(element).data();

			if (data.attached) {
				return;
			} else {
				$(element).data("attached", true);
			}

			/** FIXME
			 * potential memory leak
			 * find a way to remove elements out of DOM
			 */

			if (this._classNames[data.component]) {
				this._components[data.component] = new this._classNames[data.component](
					element,
					data,
					Konesso.settings
				);
				this._components[data.component].id = element.id;
			} else {
				console.log(data.component + " component is missing");
			}
		});

		window.Konesso.behaviors.Body.TippyInit();

		// tippy('body *[data-tippy-content]')
	}

	get classNames() {
		return this._classNames;
	}

	get components() {
		return this._components;
	}

	getById(id) {
		for (var key in this._components) {
			if (this._components[key].id === id) {
				return this._components[key];
			}
		}
	}

	getByType(type) {
		var results = [];
		for (var key in this._components) {
			if (this._components[key].constructor.name === type) {
				results.push(this._components[key]);
			}
		}
		return results;
	}
}

export class PublicHomePage {
	constructor() {
		// this.init();
	}

	attach() {
		if (Konesso.settings.PageType != "main") return;

		this.ResetZone();

		this.UseWebP = CanIuseWebP();
		this.Data = false;
		this.Timers = [];
		this.Zones = [
			{
				Id: 1,
				Name: "Strefa nowości",
				Desc: "",
				Link: "/Nowosc-snewproducts-pol.html",
			},
			{
				Id: 2,
				Name: "Strefa promocji",
				Desc: "",
				Link: "/Promocja-spromo-pol.html",
			},
			{ Id: 3, Name: "Specjalne", Desc: "", Link: "" },
			{
				Id: 4,
				Name: "Najcześciej kupowane",
				Desc: "",
				Link: "/Bestseller-sbestseller-pol.html ",
			},
			{ Id: 5, Name: "Wyróżnione", Desc: "", Link: "" },
			{ Id: 6, Name: "Świeżo palone", Desc: "", Link: "" },
		];

		this.getDataOptions = {
			Newest: 16,
			Promo: 16,
			Bests: 12,
			Specials: 0,
			Awards: 0,
			Roast: 16,
			t: String(Date.now()).slice(0, -5),
		};

		this.getData();
	}

	styles() {
		let html = ``;

		return html;
	}

	getData() {
		$.ajax({
			data: this.getDataOptions,
			url: "https://public.konesso.pl/?module=homepage&json=true",
		}).done((x) => {
			this.Data = x;

			this.SiteContent();

			Konesso.behaviors.MainPage.CategoriesList(this.Data.BaseCategories);

			$("#placeholder-content").remove();
		});
	}

	SiteContent() {
		if (!this.Data) return;

		let html = "";
		let opt = {};
		let mainB = "";

		let hit = this.HitProducts();
		if (hit)
			html += '<div class="container"><div class="row"><div class="col-sm-8">';

		html += this.MainBanners("Zone5");

		if (hit)
			html += '</div><div class="col-sm-4">' + hit + "</div></div></div>";

		// $('#main_banner1').html( mainB );/

		html += this.Banners("Zone7");

		html += this.BannersTwoColumns("Zone6");

		if (this.Data.Products.Newest) {
			html += this.HotspotCreateHtml(
				this.Data.Products.Newest,
				this.getZone(1)
			);
		}

		html += this.Branded("Zone12");

		if (this.Data.Products.Roast) {
			html += this.HotspotCreateHtml(this.Data.Products.Roast, this.getZone(6));
		}

		let promo = "";
		if (this.Data.Products.Promo) {
			opt = {};
			if (this.Data.Banners.Zone9) {
				opt.Items = 3;
			}

			promo += this.HotspotCreateHtml(this.Data.Products.Promo, false, opt);
		}

		if (promo || this.Data.Banners.Zone9) {
			html +=
				'<div class="m-t-5"><a href="' +
				this.Zones[1].Link +
				'" class="big-label"><span>' +
				this.Zones[1].Name +
				"</span><small>Zobacz wszystkie</small></a></div>";
		}

		html += this.BannersTwoColumns("Zone8");

		if (this.Data.Banners.Zone9 && promo) {
			html += `<div class="row">
				<div class="col-md-6">${promo}</div>
				<div class="col-md-6">${this.BannersSlider("Zone9")}</div>
			</div>`;
		} else if (promo) {
			html += promo;
		} else {
			html += this.BannersSlider("Zone9");
		}

		if (this.Data.Banners.Zone10) {
			html += `<section class="full-width-row">${this.MainBanners(
				"Zone10"
			)}</section>`;
		}

		if (this.Data.Products.Bests) {
			if (this.Data.Banners.Zone4) {
				this.HotSpotSlider = false;
				this.HotSpotWithBannerZone = Object.values(this.Data.Banners.Zone4); //reindex
			}

			html += this.HotspotCreateHtml(this.Data.Products.Bests, this.getZone(4));
		}

		html += this.Branded("Zone11");

		if (this.Data.Products.Awards) {
			html += this.HotspotCreateHtml(
				this.Data.Products.Awards,
				this.getZone(5)
			);
		}

		html += this.BannersTwoColumns("Zone3");

		if (this.Data.Products.Specials) {
			html += this.HotspotCreateHtml(
				this.Data.Products.Specials,
				this.getZone(3)
			);
		}

		html += this.styles();

		$("#container").prepend(html);

		html = this.Branded("Zone13");
		if (html) $("#main_news2").after(html);

		this.runTimers();
		// Konesso.behaviors.Body.AddToBasketBtns();
		Konesso.behaviors.Components.attach();
	}

	MainBanners(ZoneName = "") {
		let html = "";
		let zone = this.Data.Banners[ZoneName];
		if (!zone) return html;

		html +=
			'<div class="swiper-labels" id="' +
			ZoneName +
			'" data-component="SliderLabel"><div class="swiper-container"><div class="swiper-wrapper">';
		for (var i in zone) {
			var item = zone[i];
			if (item.isHTML) {
				html +=
					'<div class="swiper-slide" data-label="' +
					item.Title +
					'">' +
					item.HTML +
					"</div>";
			} else {
				html += `<div class="swiper-slide" data-label="${
					item.Title
				}"><a href="${item.Url}" target="${item.Target}" rel="${
					item.Rel
				}" title="${item.Title}"><img src="${this.getImageSize(item)}" title="${
					item.Title
				}" alt="${item.Title}"></a></div>`;
			}
		}
		html +=
			'</div><div class="btns"><div class="btn-prev"></div><div class="btn-next"></div></div><div class="pagination"></div></div></div>';

		return html;
	}

	BannersTwoColumns(ZoneName = "") {
		let html = "";
		let zone = this.Data.Banners[ZoneName];

		if (!zone) return html;

		let row =
			'<div class="d-flex align-items-center justify-content-between ' +
			(zone.length > 2 ? "" : "row ") +
			' text-center">';

		html +=
			'<section id="' +
			ZoneName +
			'" class="' +
			ZoneName +
			'" ' +
			(zone.length > 2
				? 'data-component="Slider" data-arrows="true" data-slides-to-show="1" data-slides-to-scroll="1"'
				: "") +
			">";

		html += row;

		for (var i in zone) {
			var item = zone[i];

			if (item.isHTML) {
				html += item.HTML;
			} else {
				html += `<div class="col-md-6 m-b-2 bnr"><a href="${
					item.Url
				}" target="${item.Target}" rel="${item.Rel}" title="${
					item.Title
				}" ><img  src="${this.getImageSize(item)}"  title="${
					item.Title
				}" alt="${item.Title}" ></a></div>`;
			}
			if (zone.length > 2 && (i % 2 || zone.length - 1 == i)) {
				html += "</div>";
				if (i % 2 && zone.length - 1 > i) html += row;
			}
		}
		html += "</div></section>";

		return html;
	}

	BannersSlider(ZoneName = "") {
		var html = "";
		let zone = this.Data.Banners[ZoneName];
		if (zone) {
			html += `<ul id="${ZoneName}" class="slider" ${
				Object.values(zone).length > 1
					? 'data-component="Slider" data-arrows="true"'
					: ""
			}>`;
			for (var i in zone) {
				var item = zone[i];
				if (item.isHTML) {
					html += item.HTML;
				} else {
					html += `<li>
					<a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${
						item.Title
					}">
						<img src="${this.getImageSize(item)}" alt="${item.Title}">
					</a></li>`;
				}
			}

			html += `</ul>`;
		}

		return html;
	}

	Banners(ZoneName = "") {
		var html = "";
		let zone = this.Data.Banners[ZoneName];
		if (zone) {
			html += '<section id="' + ZoneName + '">';
			for (var i in zone) {
				var item = zone[i];
				if (item.isHTML) {
					html += item.HTML;
				} else {
					html += `<div>
					<a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${
						item.Title
					}">
						<img src="${this.getImageSize(item)}" alt="${item.Title}">
					</a></div>`;
				}
			}
			html += "</section>";
		}

		return html;
	}

	Branded(ZoneName = "") {
		var html = "";
		let zone = this.Data.Banners[ZoneName];

		if (!zone) return html;

		zone = zone[0];

		if (!zone.Products || !zone.Products.length) return html;

		html += `<div class="m-t-5"><a href="${zone.Url}" target="${zone.Target}" rel="${zone.Rel}" title="${zone.Title}" class="big-label"><span>${zone.Title}</span></a></div>`;
		html +=
			'<section id="' +
			ZoneName +
			'" class="full-width-row branded" style="' +
			(window.innerWidth >= 1200 && zone.Image.Desktop
				? `background:url(${zone.Image.Desktop}) no-repeat top center;background-size:contain;padding-top:170px;`
				: "") +
			'">';
		html += '<div class="container">';

		if (zone.Image.Mobile && zone.Products.length >= 2) {
			var opt = {};
			opt.Items = 4;

			let banner = `<a href="${zone.Url}" target="${zone.Target}" rel="${
				zone.Rel
			}" title="${
				zone.Title
			}" class="d-block text-center"><img src="${this.getImage(
				zone.Image.Mobile
			)}"></a>`;

			let hotspot = this.HotspotCreateHtml(zone.Products, false, opt);

			html += `<div class="row"><div class="col-md-3">${banner}</div><div class="col-md-9">${hotspot}</div></div>`;
		} else {
			if (window.innerWidth < 1200) {
				html += `<a href="${zone.Url}" target="${zone.Target}" rel="${
					zone.Rel
				}" title="${zone.Title}" class="d-block text-center">
					<img src="${this.getImageSize(zone)}">
				</a>`;
			}

			html += this.HotspotCreateHtml(zone.Products, false);
		}
		html += "</div>";
		html += "</section>";

		return html;
	}

	HitProducts() {
		let html = "";
		let zone = this.Data.Products.Hits;
		if (!zone) return html;

		html += `<div id="hit-container" >
			<div id="hity">
				
				<div class="hit-items" ${
					this.Data.Products.Hits.length > 1
						? 'data-component="Slider" data-arrows="true" data-dots="false"'
						: ""
				}>
				`;

		for (var i in zone) {
			var item = zone[i];
			var url = this.getProductUrl(item.ProductId, item.productName);
			var RetailPriceFormat = this.priceFormat(item.productRetailPrice);
			var RetailPriceNettoFormat = this.priceFormat(
				Math.round(
					(item.productRetailPrice -
						item.productRetailPrice * (item.productVat / 100)) *
						100
				) / 100
			);
			var StrikethroughRetailPriceFormat = this.priceFormat(
				item.productStrikethroughRetailPrice
			);
			var selled = item.Selled + item.Selled2;
			if (item.Items - selled < 0 || item.Items == selled) continue;

			html += `
						<div class="hit-item">
                            <div class="p-wrap product_${
															item.ProductId
														} type-product" data-product-id="${item.ProductId}">
                                <div class="name">Okazje Konesso!</div>
                                <div class="discount">Oszczędź <b>${
																	item.Value
																}${item.Type ? "%" : "zł"}</b></div>
								<a class="p-icon" href="${url}" title="${item.productName}">
                                    <figure><img src="${this.getProductIcon(
																			item.ProductId,
																			{ name: item.productName }
																		)}"  alt="${item.productName}"></figure>
                                    <div class="p-labels text-center"> ${ProductLabelsHtml(
																			item
																		)}</div>
                                </a>
                                
                                <a class="p-name" href="${url}" title="${
				item.productName
			}"><h5>${item.Name ? item.Name : item.productName}</h5></a>

                                <div class="loader"><i style="width:${
																	(selled * 100) / item.Items
																}%"></i></div>
								
								
								<div class="info">
                                    <div class="p-amout"><span class="text"><b>Pozostało:</b> <span class="selled">${
																			item.Items - selled
																		}</span> / <span class="items">${
				item.Items
			}</span></span></div>

                                    <div class="timer" data-component="CountDownTimer" data-time="${
																			item.TimeEnd
																		}" data-style="big"></div>

                                    <div class="prices">
                                        ${
																					item.productStrikethroughRetailPrice
																						? `<del class="max-price">${StrikethroughRetailPriceFormat}</del>`
																						: ""
																				}    
                                        <span class="price promo">${RetailPriceFormat}</span>
											
                                    </div>
								</div>
								
							</div>
						</div>
					`;

			// this.Timers.push({id: '#hit_timer_'+item.ProductId, time: item.TimeEnd});
		}

		html += `</div></div>`;

		html += `</div>`;

		return html;
	}

	ProductLabelsHtml(product = false) {
		let html = "";
		if (!product) return html;

		html += product.discount
			? `<span class="promo icon-promo">-${product.discount}% </span>`
			: "";

		return html;
	}

	getImageSize(item) {
		let src = "";
		if (!item.Image) return src;

		if (window.innerWidth < 600 && item.Image.Mobile) src = item.Image.Mobile;
		else if (window.innerWidth < 900 && item.Image.Tablet)
			src = item.Image.Tablet;
		else src = item.Image.Desktop;

		return this.getImage(src);
	}

	getImage(img = "") {
		if (this.UseWebP)
			return img.replace(".png", ".webp").replace(".jpg", ".webp");

		return img;
	}

	HotspotCreateHtml(products, zone, opt = {}) {
		var HotSpot = new HotSpotZone(products, zone, opt);

		var html = HotSpot.HotspotCreateHtml();

		return html;
	}

	ProductHTML(item, cls = "") {
		let html = "";
		if (!item || !item.productId) return html;

		let link = this.getProductUrl(item.productId, item.productName);

		html +=
			'<div class="p-wrap type-product product_' +
			item.productId +
			" col-12 " +
			cls +
			'" data-product-id="' +
			item.productId +
			'">';
		html +=
			'<a class="p-icon" href="' +
			link +
			'" title="' +
			item.productName +
			'"><figure><img data-sizes="auto"  data-src="' +
			this.getProductIcon(item.productId, { name: item.productName }) +
			'"  alt="' +
			item.productName +
			'" class="lazyload"></img> </figure> <div class="p-labels">' +
			this.ProductLabelsHtml(item) +
			"</div></a>";

		html += '<div class="p-content">';
		html +=
			'<a class="p-name" href="' +
			link +
			'" title="' +
			item.productName +
			'">' +
			item.productName +
			"</a>";

		html += '<div class="p-prices">';

		var RetailPriceFormat = this.priceFormat(item.productRetailPrice);
		var RetailPriceNettoFormat = this.priceFormat(
			Math.round(
				(item.productRetailPrice -
					item.productRetailPrice * (item.productVat / 100)) *
					100
			) / 100
		);
		var StrikethroughRetailPriceFormat = this.priceFormat(
			item.productStrikethroughRetailPrice
		);

		html += '<span class="client-b2b">';
		html +=
			'<span class="price">' +
			RetailPriceNettoFormat +
			" <small>netto</small></span>";
		if (item.productStrikethroughRetailPrice)
			html +=
				'<del class="max-price">' +
				(item.productStrikethroughRetailPrice
					? StrikethroughRetailPriceFormat
					: "") +
				" </del>";

		html +=
			'<span class="price-small">' +
			RetailPriceFormat +
			" <small>brutto</small></span>";
		html += "</span>";

		html += '<span class="client-detal">';
		html += '<span class="price">' + RetailPriceFormat + " </span>";
		if (item.productStrikethroughRetailPrice)
			html +=
				'<del class="max-price">' +
				(item.productStrikethroughRetailPrice
					? StrikethroughRetailPriceFormat
					: "") +
				" </del>";

		html +=
			'<span class="point-price">' +
			this.pricePointFormat(item.productRetailPrice) +
			'<span class="currency"> pkt.</span></span>';
		html += "</span>";

		html += "</div>";
		html += "</div>";
		html += "</div>";

		return html;
	}

	ResetZone() {
		this.Zone = false;
		this.HotSpotItems = 4;
		this.HotSpotSlider = true;
		this.HotSpotWithBannerZone = false;
	}

	getZone(Zone = 0) {
		if (!Zone) return;

		return (this.Zone = this.Zones.filter((x) => x.Id == Zone)[0]);
	}

	runTimers() {
		if (!this.Timers || !this.Timers.length) return;

		for (var i in this.Timers) {
			var end_date = new Date(this.Timers[i].time);

			var timern = new CountdownTimer($(this.Timers[i].id), end_date);
			timern.countDown();
		}
	}

	slugify(text) {
		text = text.toString();

		var from = "ĄĆĘŁŃÓŚŹŻąćęłńóśźż";
		var to = "ACELNOSZZacelnoszz";
		for (var i = 0, l = from.length; i < l; i++) {
			text = text.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
		}
		return text //.toLowerCase()
			.replace(/\s+/g, "-") // Replace spaces with -
			.replace(/[^\w\-]+/g, "") // Remove all non-word chars
			.replace(/\-\-+/g, "-") // Replace multiple - with single -
			.replace(/^-+/, "") // Trim - from start of text
			.replace(/-+$/, ""); // Trim - from end of text
	}

	pricePointFormat(price = 0) {
		var price = Math.round(price * 2000) / 100;
		var p = price.toString().split(".");
		if (p.length == 2) {
			return p[0] + "," + (p[1].length == 1 ? p[1] + "0" : p[1]);
		}
		return String(price).replace(".", ",");
	}

	priceFormat(price = 0, currency = "zł") {
		var p = price.toString().split(".");
		if (p.length == 2) {
			return (
				p[0] + "," + (p[1].length == 1 ? p[1] + "0" : p[1]) + " " + currency
			);
		}
		return price + ",00 " + currency;
	}

	getProductUrl(Id, Name = "") {
		if (!Id) return;

		return "/product-pol-" + Id + "-" + this.slugify(Name) + ".html";
	}

	getProductIcon(Id, options = {}) {
		if (!Id) return;

		var $options = Object.assign(
			{ size: "small", type: "Icon", url: true, name: "" },
			options
		);

		var url = "/pol_il_" + this.slugify($options.name) + "-" + Id + ".jpg";

		if ($options.url) return url;
		else
			return (
				'<img src="' +
				url +
				'" alt="' +
				$options.name +
				'" title="' +
				$options.name +
				'">'
			);
	}
}

export class Basket {
	constructor() {
		this.attach();
	}

	attach() {
		this.el = "#MenuFavs";
		this.$el = $(this.el);

		this.Update();
	}

	Loading() {
		this.$el.html(
			'<div class="empty loading"><img src="../../img/loader.png"></img><span>Trwa aktualizowanie Twojej listy obserwowanych</span> <div class="mt-5"> <a href="/basketedit.php?mode=2" class="btn main arrow has-icon"><span>Przejdź do obserwowanych</span><i class="ico-sl-heart"></i></a></div></div>'
		);
	}

	ShowError() {
		this.$el.html(
			'<div class="empty error"><i class="ico-sl-heart"></i><span>Wystąpił nieoczekiwany błąd :(</span> <div class="mt-5"> <a href="/basketedit.php?mode=1" class="btn main arrow has-icon"><span>Przejdź do obserwowanych</span><i class="ico-sl-heart"></i></a></div></div>'
		);
	}

	GetIAIData() {
		return Konesso.behaviors.Body.GetIAIData({
			Wishlist: { format: "json" },
		}).then((x) => {
			x = getJSON(x);
			if (!x) return;

			Konesso.settings.IAIData.Wishlist = x.Wishlist;

			// if(Konesso.behaviors.Body.WishList)
			this.Update();
		});
	}

	ChangeBasket(id = 1, mode = 1, qty = 1, rmv = false) {
		return new Promise((resolve, reject) => {
			$.ajax({
				type: "POST",
				url: "/basketchange.php",
				async: true,
				data:
					"&mode=" +
					mode +
					"&product=" +
					id +
					(rmv ? "&change=empty" : "&number=" + qty) +
					"&size=&getAjax=true",
				dataType: "json",
			})
				.success((x) => {
					if (this.GetIAIData()) {
						resolve(x);
					}
				})
				.error((x) => {
					reject(x);
					this.ShowError();
				});
		});
	}

	Update() {
		var html = "";
		if (
			Konesso.settings.IAIData &&
			!Konesso.settings.IAIData.Wishlist.error &&
			Konesso.settings.IAIData.Wishlist.response.product
		) {
			var basket = Konesso.settings.IAIData.Wishlist.response;
			var productCounter = 0;
			if (basket.product.length) {
				var p = basket.product;
				p.reverse();

				html += `<div class="align-items-center no-gutters row">

                            <div class="col-12 "><div class="basket">
                           
                                <div class="summary">
                                    <div><span class="qty">Ilość produktów:</span><i class="price">${
																			basket.attributes.count
																		}</i></div>
                                    <div><span class="delivery">Wartość:</span><i class="price">${Konesso.behaviors.Body.priceFormat(
																			basket.attributes.cost
																		)}</i></div>
                                </div>

                                <a href="/basketedit.php?mode=2" class="btn main arrow has-icon"><span>Przejdź do listy</span><i class="ico-sl-heart"></i></a>
                            </div>
                        </div>
                            <div class="col-12 products">`;
				for (var i in p) {
					var item = p[i];
					html += `<a class="product" href="${item.attributes.link}" data-product-id="${item.attributes.id}" data-mode="2" data-rmv="1">
                               
                                <div class="img"><img src="${item.icon}"></div>
                                <div class="desc title">
                                    <i>Produkt:</i>
                                    <span>${item.name}</span>
                                </div>

                                <div class="desc price">
                                    <i>Cena:</i>
                                    <span>${item.price.attributes.price_formatted}</span>
                                </div>

                                <button class="btn remove add-to-favs" ><i class="ico-sl-trash"></i></button>
                            </a>`;
				}
				html += `
                        </div>
                </div>`;
				$("#MainHeader .btn main favs-trigger .badge").html(
					basket.attributes.count
				);
			} else {
				html =
					'<div class="empty"><i class="ico-sl-heart"></i><span>Niestety Twoja lista jest pusta.</span></div>';
				$("#MainHeader .btn main favs-trigger .badge").html("");
			}
		} else {
			if (
				!Konesso.settings.IAIData ||
				Konesso.settings.IAIData.Wishlist.error
			) {
				this.ShowError();
				return;
			}

			html =
				'<div class="empty"><i class="ico-sl-heart"></i><span>Niestety Twoja lista jest pusta.</span></div>';
			$("#MainHeader .btn main favs-trigger .badge").html("");
		}

		this.$el.html(html);
	}
}
