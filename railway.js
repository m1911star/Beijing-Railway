var Zepto = function() {
		function G(a) {
			return a == null ? String(a) : z[A.call(a)] || "object"
		}
		function H(a) {
			return G(a) == "function"
		}
		function I(a) {
			return a != null && a == a.window
		}
		function J(a) {
			return a != null && a.nodeType == a.DOCUMENT_NODE
		}
		function K(a) {
			return G(a) == "object"
		}
		function L(a) {
			return K(a) && !I(a) && Object.getPrototypeOf(a) == Object.prototype
		}
		function M(a) {
			return a instanceof Array
		}
		function N(a) {
			return typeof a.length == "number"
		}
		function O(a) {
			return g.call(a, function(a) {
				return a != null
			})
		}
		function P(a) {
			return a.length > 0 ? c.fn.concat.apply([], a) : a
		}
		function Q(a) {
			return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function R(a) {
			return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
		}
		function S(a, b) {
			return typeof b == "number" && !k[Q(a)] ? b + "px" : b
		}
		function T(a) {
			var b, c;
			return i[a] || (b = h.createElement(a), h.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), c == "none" && (c = "block"), i[a] = c), i[a]
		}
		function U(a) {
			return "children" in a ? f.call(a.children) : c.map(a.childNodes, function(a) {
				if (a.nodeType == 1) return a
			})
		}
		function V(c, d, e) {
			for (b in d) e && (L(d[b]) || M(d[b])) ? (L(d[b]) && !L(c[b]) && (c[b] = {}), M(d[b]) && !M(c[b]) && (c[b] = []), V(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b])
		}
		function W(a, b) {
			return b == null ? c(a) : c(a).filter(b)
		}
		function X(a, b, c, d) {
			return H(b) ? b.call(a, c, d) : b
		}
		function Y(a, b, c) {
			c == null ? a.removeAttribute(b) : a.setAttribute(b, c)
		}
		function Z(b, c) {
			var d = b.className,
				e = d && d.baseVal !== a;
			if (c === a) return e ? d.baseVal : d;
			e ? d.baseVal = c : b.className = c
		}
		function $(a) {
			var b;
			try {
				return a ? a == "true" || (a == "false" ? !1 : a == "null" ? null : !/^0/.test(a) && !isNaN(b = Number(a)) ? b : /^[\[\{]/.test(a) ? c.parseJSON(a) : a) : a
			} catch (d) {
				return a
			}
		}
		function _(a, b) {
			b(a);
			for (var c in a.childNodes) _(a.childNodes[c], b)
		}
		var a, b, c, d, e = [],
			f = e.slice,
			g = e.filter,
			h = window.document,
			i = {},
			j = {},
			k = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			l = /^\s*<(\w+|!)[^>]*>/,
			m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
			o = /^(?:body|html)$/i,
			p = /([A-Z])/g,
			q = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			r = ["after", "prepend", "before", "append"],
			s = h.createElement("table"),
			t = h.createElement("tr"),
			u = {
				tr: h.createElement("tbody"),
				tbody: s,
				thead: s,
				tfoot: s,
				td: t,
				th: t,
				"*": h.createElement("div")
			},
			v = /complete|loaded|interactive/,
			w = /^\.([\w-]+)$/,
			x = /^#([\w-]*)$/,
			y = /^[\w-]*$/,
			z = {},
			A = z.toString,
			B = {},
			C, D, E = h.createElement("div"),
			F = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			};
		return B.matches = function(a, b) {
			if (!b || !a || a.nodeType !== 1) return !1;
			var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
			if (c) return c.call(a, b);
			var d, e = a.parentNode,
				f = !e;
			return f && (e = E).appendChild(a), d = ~B.qsa(e, b).indexOf(a), f && E.removeChild(a), d
		}, C = function(a) {
			return a.replace(/-+(.)?/g, function(a, b) {
				return b ? b.toUpperCase() : ""
			})
		}, D = function(a) {
			return g.call(a, function(b, c) {
				return a.indexOf(b) == c
			})
		}, B.fragment = function(b, d, e) {
			var g, i, j;
			return m.test(b) && (g = c(h.createElement(RegExp.$1))), g || (b.replace && (b = b.replace(n, "<$1></$2>")), d === a && (d = l.test(b) && RegExp.$1), d in u || (d = "*"), j = u[d], j.innerHTML = "" + b, g = c.each(f.call(j.childNodes), function() {
				j.removeChild(this)
			})), L(e) && (i = c(g), c.each(e, function(a, b) {
				q.indexOf(a) > -1 ? i[a](b) : i.attr(a, b)
			})), g
		}, B.Z = function(a, b) {
			return a = a || [], a.__proto__ = c.fn, a.selector = b || "", a
		}, B.isZ = function(a) {
			return a instanceof B.Z
		}, B.init = function(b, d) {
			var e;
			if (!b) return B.Z();
			if (typeof b == "string") {
				b = b.trim();
				if (b[0] == "<" && l.test(b)) e = B.fragment(b, RegExp.$1, d), b = null;
				else {
					if (d !== a) return c(d).find(b);
					e = B.qsa(h, b)
				}
			} else {
				if (H(b)) return c(h).ready(b);
				if (B.isZ(b)) return b;
				if (M(b)) e = O(b);
				else if (K(b)) e = [b], b = null;
				else if (l.test(b)) e = B.fragment(b.trim(), RegExp.$1, d), b = null;
				else {
					if (d !== a) return c(d).find(b);
					e = B.qsa(h, b)
				}
			}
			return B.Z(e, b)
		}, c = function(a, b) {
			return B.init(a, b)
		}, c.extend = function(a) {
			var b, c = f.call(arguments, 1);
			return typeof a == "boolean" && (b = a, a = c.shift()), c.forEach(function(c) {
				V(a, c, b)
			}), a
		}, B.qsa = function(a, b) {
			var c, d = b[0] == "#",
				e = !d && b[0] == ".",
				g = d || e ? b.slice(1) : b,
				h = y.test(g);
			return J(a) && h && d ? (c = a.getElementById(g)) ? [c] : [] : a.nodeType !== 1 && a.nodeType !== 9 ? [] : f.call(h && !d ? e ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
		}, c.contains = function(a, b) {
			return a !== b && a.contains(b)
		}, c.type = G, c.isFunction = H, c.isWindow = I, c.isArray = M, c.isPlainObject = L, c.isEmptyObject = function(a) {
			var b;
			for (b in a) return !1;
			return !0
		}, c.inArray = function(a, b, c) {
			return e.indexOf.call(b, a, c)
		}, c.camelCase = C, c.trim = function(a) {
			return a == null ? "" : String.prototype.trim.call(a)
		}, c.uuid = 0, c.support = {}, c.expr = {}, c.map = function(a, b) {
			var c, d = [],
				e, f;
			if (N(a)) for (e = 0; e < a.length; e++) c = b(a[e], e), c != null && d.push(c);
			else for (f in a) c = b(a[f], f), c != null && d.push(c);
			return P(d)
		}, c.each = function(a, b) {
			var c, d;
			if (N(a)) {
				for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a
			} else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
			return a
		}, c.grep = function(a, b) {
			return g.call(a, b)
		}, window.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			z["[object " + b + "]"] = b.toLowerCase()
		}), c.fn = {
			forEach: e.forEach,
			reduce: e.reduce,
			push: e.push,
			sort: e.sort,
			indexOf: e.indexOf,
			concat: e.concat,
			map: function(a) {
				return c(c.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			slice: function() {
				return c(f.apply(this, arguments))
			},
			ready: function(a) {
				return v.test(h.readyState) && h.body ? a(c) : h.addEventListener("DOMContentLoaded", function() {
					a(c)
				}, !1), this
			},
			get: function(b) {
				return b === a ? f.call(this) : this[b >= 0 ? b : b + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					this.parentNode != null && this.parentNode.removeChild(this)
				})
			},
			each: function(a) {
				return e.every.call(this, function(b, c) {
					return a.call(b, c, b) !== !1
				}), this
			},
			filter: function(a) {
				return H(a) ? this.not(this.not(a)) : c(g.call(this, function(b) {
					return B.matches(b, a)
				}))
			},
			add: function(a, b) {
				return c(D(this.concat(c(a, b))))
			},
			is: function(a) {
				return this.length > 0 && B.matches(this[0], a)
			},
			not: function(b) {
				var d = [];
				if (H(b) && b.call !== a) this.each(function(a) {
					b.call(this, a) || d.push(this)
				});
				else {
					var e = typeof b == "string" ? this.filter(b) : N(b) && H(b.item) ? f.call(b) : c(b);
					this.forEach(function(a) {
						e.indexOf(a) < 0 && d.push(a)
					})
				}
				return c(d)
			},
			has: function(a) {
				return this.filter(function() {
					return K(a) ? c.contains(this, a) : c(this).find(a).size()
				})
			},
			eq: function(a) {
				return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
			},
			first: function() {
				var a = this[0];
				return a && !K(a) ? a : c(a)
			},
			last: function() {
				var a = this[this.length - 1];
				return a && !K(a) ? a : c(a)
			},
			find: function(a) {
				var b, d = this;
				return typeof a == "object" ? b = c(a).filter(function() {
					var a = this;
					return e.some.call(d, function(b) {
						return c.contains(b, a)
					})
				}) : this.length == 1 ? b = c(B.qsa(this[0], a)) : b = this.map(function() {
					return B.qsa(this, a)
				}), b
			},
			closest: function(a, b) {
				var d = this[0],
					e = !1;
				typeof a == "object" && (e = c(a));
				while (d && !(e ? e.indexOf(d) >= 0 : B.matches(d, a))) d = d !== b && !J(d) && d.parentNode;
				return c(d)
			},
			parents: function(a) {
				var b = [],
					d = this;
				while (d.length > 0) d = c.map(d, function(a) {
					if ((a = a.parentNode) && !J(a) && b.indexOf(a) < 0) return b.push(a), a
				});
				return W(b, a)
			},
			parent: function(a) {
				return W(D(this.pluck("parentNode")), a)
			},
			children: function(a) {
				return W(this.map(function() {
					return U(this)
				}), a)
			},
			contents: function() {
				return this.map(function() {
					return f.call(this.childNodes)
				})
			},
			siblings: function(a) {
				return W(this.map(function(a, b) {
					return g.call(U(b.parentNode), function(a) {
						return a !== b
					})
				}), a)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(a) {
				return c.map(this, function(b) {
					return b[a]
				})
			},
			show: function() {
				return this.each(function() {
					this.style.display == "none" && (this.style.display = ""), getComputedStyle(this, "").getPropertyValue("display") == "none" && (this.style.display = T(this.nodeName))
				})
			},
			replaceWith: function(a) {
				return this.before(a).remove()
			},
			wrap: function(a) {
				var b = H(a);
				if (this[0] && !b) var d = c(a).get(0),
					e = d.parentNode || this.length > 1;
				return this.each(function(f) {
					c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d)
				})
			},
			wrapAll: function(a) {
				if (this[0]) {
					c(this[0]).before(a = c(a));
					var b;
					while ((b = a.children()).length) a = b.first();
					c(a).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				var b = H(a);
				return this.each(function(d) {
					var e = c(this),
						f = e.contents(),
						g = b ? a.call(this, d) : a;
					f.length ? f.wrapAll(g) : e.append(g)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					c(this).replaceWith(c(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(b) {
				return this.each(function() {
					var d = c(this);
					(b === a ? d.css("display") == "none" : b) ? d.show() : d.hide()
				})
			},
			prev: function(a) {
				return c(this.pluck("previousElementSibling")).filter(a || "*")
			},
			next: function(a) {
				return c(this.pluck("nextElementSibling")).filter(a || "*")
			},
			html: function(a) {
				return arguments.length === 0 ? this.length > 0 ? this[0].innerHTML : null : this.each(function(b) {
					var d = this.innerHTML;
					c(this).empty().append(X(this, a, b, d))
				})
			},
			text: function(b) {
				return arguments.length === 0 ? this.length > 0 ? this[0].textContent : null : this.each(function() {
					this.textContent = b === a ? "" : "" + b
				})
			},
			attr: function(c, d) {
				var e;
				return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a : c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : this.each(function(a) {
					if (this.nodeType !== 1) return;
					if (K(c)) for (b in c) Y(this, b, c[b]);
					else Y(this, c, X(this, d, a, this.getAttribute(c)))
				})
			},
			removeAttr: function(a) {
				return this.each(function() {
					this.nodeType === 1 && Y(this, a)
				})
			},
			prop: function(b, c) {
				return b = F[b] || b, c === a ? this[0] && this[0][b] : this.each(function(a) {
					this[b] = X(this, c, a, this[b])
				})
			},
			data: function(b, c) {
				var d = this.attr("data-" + b.replace(p, "-$1").toLowerCase(), c);
				return d !== null ? $(d) : a
			},
			val: function(a) {
				return arguments.length === 0 ? this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value) : this.each(function(b) {
					this.value = X(this, a, b, this.value)
				})
			},
			offset: function(a) {
				if (a) return this.each(function(b) {
					var d = c(this),
						e = X(this, a, b, d.offset()),
						f = d.offsetParent().offset(),
						g = {
							top: e.top - f.top,
							left: e.left - f.left
						};
					d.css("position") == "static" && (g.position = "relative"), d.css(g)
				});
				if (this.length == 0) return null;
				var b = this[0].getBoundingClientRect();
				return {
					left: b.left + window.pageXOffset,
					top: b.top + window.pageYOffset,
					width: Math.round(b.width),
					height: Math.round(b.height)
				}
			},
			css: function(a, d) {
				if (arguments.length < 2) {
					var e = this[0],
						f = getComputedStyle(e, "");
					if (!e) return;
					if (typeof a == "string") return e.style[C(a)] || f.getPropertyValue(a);
					if (M(a)) {
						var g = {};
						return c.each(M(a) ? a : [a], function(a, b) {
							g[b] = e.style[C(b)] || f.getPropertyValue(b)
						}), g
					}
				}
				var h = "";
				if (G(a) == "string")!d && d !== 0 ? this.each(function() {
					this.style.removeProperty(Q(a))
				}) : h = Q(a) + ":" + S(a, d);
				else for (b in a)!a[b] && a[b] !== 0 ? this.each(function() {
					this.style.removeProperty(Q(b))
				}) : h += Q(b) + ":" + S(b, a[b]) + ";";
				return this.each(function() {
					this.style.cssText += ";" + h
				})
			},
			index: function(a) {
				return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(a) {
				return a ? e.some.call(this, function(a) {
					return this.test(Z(a))
				}, R(a)) : !1
			},
			addClass: function(a) {
				return a ? this.each(function(b) {
					d = [];
					var e = Z(this),
						f = X(this, a, b, e);
					f.split(/\s+/g).forEach(function(a) {
						c(this).hasClass(a) || d.push(a)
					}, this), d.length && Z(this, e + (e ? " " : "") + d.join(" "))
				}) : this
			},
			removeClass: function(b) {
				return this.each(function(c) {
					if (b === a) return Z(this, "");
					d = Z(this), X(this, b, c, d).split(/\s+/g).forEach(function(a) {
						d = d.replace(R(a), " ")
					}), Z(this, d.trim())
				})
			},
			toggleClass: function(b, d) {
				return b ? this.each(function(e) {
					var f = c(this),
						g = X(this, b, e, Z(this));
					g.split(/\s+/g).forEach(function(b) {
						(d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b)
					})
				}) : this
			},
			scrollTop: function(b) {
				if (!this.length) return;
				var c = "scrollTop" in this[0];
				return b === a ? c ? this[0].scrollTop : this[0].pageYOffset : this.each(c ?
				function() {
					this.scrollTop = b
				} : function() {
					this.scrollTo(this.scrollX, b)
				})
			},
			scrollLeft: function(b) {
				if (!this.length) return;
				var c = "scrollLeft" in this[0];
				return b === a ? c ? this[0].scrollLeft : this[0].pageXOffset : this.each(c ?
				function() {
					this.scrollLeft = b
				} : function() {
					this.scrollTo(b, this.scrollY)
				})
			},
			position: function() {
				if (!this.length) return;
				var a = this[0],
					b = this.offsetParent(),
					d = this.offset(),
					e = o.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					} : b.offset();
				return d.top -= parseFloat(c(a).css("margin-top")) || 0, d.left -= parseFloat(c(a).css("margin-left")) || 0, e.top += parseFloat(c(b[0]).css("border-top-width")) || 0, e.left += parseFloat(c(b[0]).css("border-left-width")) || 0, {
					top: d.top - e.top,
					left: d.left - e.left
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var a = this.offsetParent || h.body;
					while (a && !o.test(a.nodeName) && c(a).css("position") == "static") a = a.offsetParent;
					return a
				})
			}
		}, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function(b) {
			var d = b.replace(/./, function(a) {
				return a[0].toUpperCase()
			});
			c.fn[b] = function(e) {
				var f, g = this[0];
				return e === a ? I(g) ? g["inner" + d] : J(g) ? g.documentElement["scroll" + d] : (f = this.offset()) && f[b] : this.each(function(a) {
					g = c(this), g.css(b, X(this, e, a, g[b]()))
				})
			}
		}), r.forEach(function(a, b) {
			var d = b % 2;
			c.fn[a] = function() {
				var a, e = c.map(arguments, function(b) {
					return a = G(b), a == "object" || a == "array" || b == null ? b : B.fragment(b)
				}),
					f, g = this.length > 1;
				return e.length < 1 ? this : this.each(function(a, h) {
					f = d ? h : h.parentNode, h = b == 0 ? h.nextSibling : b == 1 ? h.firstChild : b == 2 ? h : null, e.forEach(function(a) {
						if (g) a = a.cloneNode(!0);
						else if (!f) return c(a).remove();
						_(f.insertBefore(a, h), function(a) {
							a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && !a.src && window.eval.call(window, a.innerHTML)
						})
					})
				})
			}, c.fn[d ? a + "To" : "insert" + (b ? "Before" : "After")] = function(b) {
				return c(b)[a](this), this
			}
		}), B.Z.prototype = c.fn, B.uniq = D, B.deserializeValue = $, c.zepto = B, c
	}();
window.Zepto = Zepto, window.$ === undefined && (window.$ = Zepto), function(a) {
	function m(a) {
		return a._zid || (a._zid = c++)
	}
	function n(a, b, c, d) {
		b = o(b);
		if (b.ns) var e = p(b.ns);
		return (h[m(a)] || []).filter(function(a) {
			return a && (!b.e || a.e == b.e) && (!b.ns || e.test(a.ns)) && (!c || m(a.fn) === m(c)) && (!d || a.sel == d)
		})
	}
	function o(a) {
		var b = ("" + a).split(".");
		return {
			e: b[0],
			ns: b.slice(1).sort().join(" ")
		}
	}
	function p(a) {
		return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
	}
	function q(a, b) {
		return a.del && !j && a.e in k || !! b
	}
	function r(a) {
		return l[a] || j && k[a] || a
	}
	function s(b, c, e, f, g, i, j) {
		var k = m(b),
			n = h[k] || (h[k] = []);
		c.split(/\s/).forEach(function(c) {
			if (c == "ready") return a(document).ready(e);
			var h = o(c);
			h.fn = e, h.sel = g, h.e in l && (e = function(b) {
				var c = b.relatedTarget;
				if (!c || c !== this && !a.contains(this, c)) return h.fn.apply(this, arguments)
			}), h.del = i;
			var k = i || e;
			h.proxy = function(a) {
				a = y(a);
				if (a.isImmediatePropagationStopped()) return;
				a.data = f;
				var c = k.apply(b, a._args == d ? [a] : [a].concat(a._args));
				return c === !1 && (a.preventDefault(), a.stopPropagation()), c
			}, h.i = n.length, n.push(h), "addEventListener" in b && b.addEventListener(r(h.e), h.proxy, q(h, j))
		})
	}
	function t(a, b, c, d, e) {
		var f = m(a);
		(b || "").split(/\s/).forEach(function(b) {
			n(a, b, c, d).forEach(function(b) {
				delete h[f][b.i], "removeEventListener" in a && a.removeEventListener(r(b.e), b.proxy, q(b, e))
			})
		})
	}
	function y(b, c) {
		if (c || !b.isDefaultPrevented) {
			c || (c = b), a.each(x, function(a, d) {
				var e = c[a];
				b[a] = function() {
					return this[d] = u, e && e.apply(c, arguments)
				}, b[d] = v
			});
			if (c.defaultPrevented !== d ? c.defaultPrevented : "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) b.isDefaultPrevented = u
		}
		return b
	}
	function z(a) {
		var b, c = {
			originalEvent: a
		};
		for (b in a)!w.test(b) && a[b] !== d && (c[b] = a[b]);
		return y(c, a)
	}
	var b = a.zepto.qsa,
		c = 1,
		d, e = Array.prototype.slice,
		f = a.isFunction,
		g = function(a) {
			return typeof a == "string"
		},
		h = {},
		i = {},
		j = "onfocusin" in window,
		k = {
			focus: "focusin",
			blur: "focusout"
		},
		l = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	i.click = i.mousedown = i.mouseup = i.mousemove = "MouseEvents", a.event = {
		add: s,
		remove: t
	}, a.proxy = function(b, c) {
		if (f(b)) {
			var d = function() {
					return b.apply(c, arguments)
				};
			return d._zid = m(b), d
		}
		if (g(c)) return a.proxy(b[c], b);
		throw new TypeError("expected function")
	}, a.fn.bind = function(a, b, c) {
		return this.on(a, b, c)
	}, a.fn.unbind = function(a, b) {
		return this.off(a, b)
	}, a.fn.one = function(a, b, c, d) {
		return this.on(a, b, c, d, 1)
	};
	var u = function() {
			return !0
		},
		v = function() {
			return !1
		},
		w = /^([A-Z]|returnValue$|layer[XY]$)/,
		x = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	a.fn.delegate = function(a, b, c) {
		return this.on(b, a, c)
	}, a.fn.undelegate = function(a, b, c) {
		return this.off(b, a, c)
	}, a.fn.live = function(b, c) {
		return a(document.body).delegate(this.selector, b, c), this
	}, a.fn.die = function(b, c) {
		return a(document.body).undelegate(this.selector, b, c), this
	}, a.fn.on = function(b, c, h, i, j) {
		var k, l, m = this;
		if (b && !g(b)) return a.each(b, function(a, b) {
			m.on(a, c, h, b, j)
		}), m;
		!g(c) && !f(i) && i !== !1 && (i = h, h = c, c = d);
		if (f(h) || h === !1) i = h, h = d;
		return i === !1 && (i = v), m.each(function(d, f) {
			j && (k = function(a) {
				return t(f, a.type, i), i.apply(this, arguments)
			}), c && (l = function(b) {
				var d, g = a(b.target).closest(c, f).get(0);
				if (g && g !== f) return d = a.extend(z(b), {
					currentTarget: g,
					liveFired: f
				}), (k || i).apply(g, [d].concat(e.call(arguments, 1)))
			}), s(f, b, i, h, c, l || k)
		})
	}, a.fn.off = function(b, c, e) {
		var h = this;
		return b && !g(b) ? (a.each(b, function(a, b) {
			h.off(a, c, b)
		}), h) : (!g(c) && !f(e) && e !== !1 && (e = c, c = d), e === !1 && (e = v), h.each(function() {
			t(this, b, e, c)
		}))
	}, a.fn.trigger = function(b, c) {
		return b = g(b) || a.isPlainObject(b) ? a.Event(b) : y(b), b._args = c, this.each(function() {
			"dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
		})
	}, a.fn.triggerHandler = function(b, c) {
		var d, e;
		return this.each(function(f, h) {
			d = z(g(b) ? a.Event(b) : b), d._args = c, d.target = h, a.each(n(h, b.type || b), function(a, b) {
				e = b.proxy(d);
				if (d.isImmediatePropagationStopped()) return !1
			})
		}), e
	}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
		a.fn[b] = function(a) {
			return a ? this.bind(b, a) : this.trigger(b)
		}
	}), ["focus", "blur"].forEach(function(b) {
		a.fn[b] = function(a) {
			return a ? this.bind(b, a) : this.each(function() {
				try {
					this[b]()
				} catch (a) {}
			}), this
		}
	}), a.Event = function(a, b) {
		g(a) || (b = a, a = b.type);
		var c = document.createEvent(i[a] || "Events"),
			d = !0;
		if (b) for (var e in b) e == "bubbles" ? d = !! b[e] : c[e] = b[e];
		return c.initEvent(a, d, !0), y(c)
	}
}(Zepto), function($) {
	function triggerAndReturn(a, b, c) {
		var d = $.Event(b);
		return $(a).trigger(d, c), !d.isDefaultPrevented()
	}
	function triggerGlobal(a, b, c, d) {
		if (a.global) return triggerAndReturn(b || document, c, d)
	}
	function ajaxStart(a) {
		a.global && $.active++ === 0 && triggerGlobal(a, null, "ajaxStart")
	}
	function ajaxStop(a) {
		a.global && !--$.active && triggerGlobal(a, null, "ajaxStop")
	}
	function ajaxBeforeSend(a, b) {
		var c = b.context;
		if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1) return !1;
		triggerGlobal(b, c, "ajaxSend", [a, b])
	}
	function ajaxSuccess(a, b, c, d) {
		var e = c.context,
			f = "success";
		c.success.call(e, a, f, b), d && d.resolveWith(e, [a, f, b]), triggerGlobal(c, e, "ajaxSuccess", [b, c, a]), ajaxComplete(f, b, c)
	}
	function ajaxError(a, b, c, d, e) {
		var f = d.context;
		d.error.call(f, c, b, a), e && e.rejectWith(f, [c, b, a]), triggerGlobal(d, f, "ajaxError", [c, d, a || b]), ajaxComplete(b, c, d)
	}
	function ajaxComplete(a, b, c) {
		var d = c.context;
		c.complete.call(d, b, a), triggerGlobal(c, d, "ajaxComplete", [b, c]), ajaxStop(c)
	}
	function empty() {}
	function mimeToDataType(a) {
		return a && (a = a.split(";", 2)[0]), a && (a == htmlType ? "html" : a == jsonType ? "json" : scriptTypeRE.test(a) ? "script" : xmlTypeRE.test(a) && "xml") || "text"
	}
	function appendQuery(a, b) {
		return b == "" ? a : (a + "&" + b).replace(/[&?]{1,2}/, "?")
	}
	function serializeData(a) {
		a.processData && a.data && $.type(a.data) != "string" && (a.data = $.param(a.data, a.traditional)), a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data), a.data = undefined)
	}
	function parseArguments(a, b, c, d) {
		var e = !$.isFunction(b);
		return {
			url: a,
			data: e ? b : undefined,
			success: e ? $.isFunction(c) ? c : undefined : b,
			dataType: e ? d || c : c
		}
	}
	function serialize(a, b, c, d) {
		var e, f = $.isArray(b),
			g = $.isPlainObject(b);
		$.each(b, function(b, h) {
			e = $.type(h), d && (b = c ? d : d + "[" + (g || e == "object" || e == "array" ? b : "") + "]"), !d && f ? a.add(h.name, h.value) : e == "array" || !c && e == "object" ? serialize(a, h, c, b) : a.add(b, h)
		})
	}
	var jsonpID = 0,
		document = window.document,
		key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		scriptTypeRE = /^(?:text|application)\/javascript/i,
		xmlTypeRE = /^(?:text|application)\/xml/i,
		jsonType = "application/json",
		htmlType = "text/html",
		blankRE = /^\s*$/;
	$.active = 0, $.ajaxJSONP = function(a, b) {
		if ("type" in a) {
			var c = a.jsonpCallback,
				d = ($.isFunction(c) ? c() : c) || "jsonp" + ++jsonpID,
				e = document.createElement("script"),
				f = window[d],
				g, h = function(a) {
					$(e).triggerHandler("error", a || "abort")
				},
				i = {
					abort: h
				},
				j;
			return b && b.promise(i), $(e).on("load error", function(c, h) {
				clearTimeout(j), $(e).off().remove(), c.type == "error" || !g ? ajaxError(null, h || "error", i, a, b) : ajaxSuccess(g[0], i, a, b), window[d] = f, g && $.isFunction(f) && f(g[0]), f = g = undefined
			}), ajaxBeforeSend(i, a) === !1 ? (h("abort"), i) : (window[d] = function() {
				g = arguments
			}, e.src = a.url.replace(/=\?/, "=" + d), document.head.appendChild(e), a.timeout > 0 && (j = setTimeout(function() {
				h("timeout")
			}, a.timeout)), i)
		}
		return $.ajax(a)
	}, $.ajaxSettings = {
		type: "GET",
		beforeSend: empty,
		success: empty,
		error: empty,
		complete: empty,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: jsonType,
			xml: "application/xml, text/xml",
			html: htmlType,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, $.ajax = function(options) {
		var settings = $.extend({}, options || {}),
			deferred = $.Deferred && $.Deferred();
		for (key in $.ajaxSettings) settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
		ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
		var dataType = settings.dataType,
			hasPlaceholder = /=\?/.test(settings.url);
		if (dataType == "jsonp" || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === !1 ? "" : "callback=?")), $.ajaxJSONP(settings, deferred);
		var mime = settings.accepts[dataType],
			headers = {},
			setHeader = function(a, b) {
				headers[a.toLowerCase()] = [a, b]
			},
			protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
			xhr = settings.xhr(),
			nativeSetHeader = xhr.setRequestHeader,
			abortTimeout;
		deferred && deferred.promise(xhr), settings.crossDomain || setHeader("X-Requested-With", "XMLHttpRequest"), setHeader("Accept", mime || "*/*");
		if (mime = settings.mimeType || mime) mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime);
		(settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") && setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
		if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
		xhr.setRequestHeader = setHeader, xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
				var result, error = !1;
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
					dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")), result = xhr.responseText;
					try {
						dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : $.parseJSON(result))
					} catch (e) {
						error = e
					}
					error ? ajaxError(error, "parsererror", xhr, settings, deferred) : ajaxSuccess(result, xhr, settings, deferred)
				} else ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred)
			}
		};
		if (ajaxBeforeSend(xhr, settings) === !1) return xhr.abort(), ajaxError(null, "abort", xhr, settings, deferred), xhr;
		if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];
		var async = "async" in settings ? settings.async : !0;
		xhr.open(settings.type, settings.url, async, settings.username, settings.password);
		for (name in headers) nativeSetHeader.apply(xhr, headers[name]);
		return settings.timeout > 0 && (abortTimeout = setTimeout(function() {
			xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings, deferred)
		}, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr
	}, $.get = function(a, b, c, d) {
		return $.ajax(parseArguments.apply(null, arguments))
	}, $.post = function(a, b, c, d) {
		var e = parseArguments.apply(null, arguments);
		return e.type = "POST", $.ajax(e)
	}, $.getJSON = function(a, b, c) {
		var d = parseArguments.apply(null, arguments);
		return d.dataType = "json", $.ajax(d)
	}, $.fn.load = function(a, b, c) {
		if (!this.length) return this;
		var d = this,
			e = a.split(/\s/),
			f, g = parseArguments(a, b, c),
			h = g.success;
		return e.length > 1 && (g.url = e[0], f = e[1]), g.success = function(a) {
			d.html(f ? $("<div>").html(a.replace(rscript, "")).find(f) : a), h && h.apply(d, arguments)
		}, $.ajax(g), this
	};
	var escape = encodeURIComponent;
	$.param = function(a, b) {
		var c = [];
		return c.add = function(a, b) {
			this.push(escape(a) + "=" + escape(b))
		}, serialize(c, a, b), c.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(a) {
	a.fn.serializeArray = function() {
		var b = [],
			c;
		return a([].slice.call(this.get(0).elements)).each(function() {
			c = a(this);
			var d = c.attr("type");
			this.nodeName.toLowerCase() != "fieldset" && !this.disabled && d != "submit" && d != "reset" && d != "button" && (d != "radio" && d != "checkbox" || this.checked) && b.push({
				name: c.attr("name"),
				value: c.val()
			})
		}), b
	}, a.fn.serialize = function() {
		var a = [];
		return this.serializeArray().forEach(function(b) {
			a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
		}), a.join("&")
	}, a.fn.submit = function(b) {
		if (b) this.bind("submit", b);
		else if (this.length) {
			var c = a.Event("submit");
			this.eq(0).trigger(c), c.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(a) {
	"__proto__" in {} || a.extend(a.zepto, {
		Z: function(b, c) {
			return b = b || [], a.extend(b, a.fn), b.selector = c || "", b.__Z = !0, b
		},
		isZ: function(b) {
			return a.type(b) === "array" && "__Z" in b
		}
	});
	try {
		getComputedStyle(undefined)
	} catch (b) {
		var c = getComputedStyle;
		window.getComputedStyle = function(a) {
			try {
				return c(a)
			} catch (b) {
				return null
			}
		}
	}
}(Zepto);

function FastClick(a) {
	"use strict";

	function b(a, b) {
		return function() {
			return a.apply(b, arguments)
		}
	}
	var c;
	this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, FastClick.notNeeded(a) || (deviceIsAndroid && (a.addEventListener("mouseover", b(this.onMouse, this), !0), a.addEventListener("mousedown", b(this.onMouse, this), !0), a.addEventListener("mouseup", b(this.onMouse, this), !0)), a.addEventListener("click", b(this.onClick, this), !0), a.addEventListener("touchstart", b(this.onTouchStart, this), !1), a.addEventListener("touchmove", b(this.onTouchMove, this), !1), a.addEventListener("touchend", b(this.onTouchEnd, this), !1), a.addEventListener("touchcancel", b(this.onTouchCancel, this), !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
		var e = Node.prototype.removeEventListener;
		"click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
	}, a.addEventListener = function(b, c, d) {
		var e = Node.prototype.addEventListener;
		"click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
			a.propagationStopped || c(a)
		}), d) : e.call(a, b, c, d)
	}), "function" == typeof a.onclick && (c = a.onclick, a.addEventListener("click", function(a) {
		c(a)
	}, !1), a.onclick = null))
}
window.amapCache = window.amapCache || {}, function(a) {
	var b, c = !1,
		d = {},
		e = {},
		f = {};
	try {
		b = a.localStorage, b.setItem("TEST", "TEST"), b.getItem("TEST"), b.removeItem("TEST"), c = !0
	} catch (g) {
		c = !1
	}
	var h = function() {
			for (var a = b.length - 1; a >= 0; a--) {
				var c = b.key(a),
					d = c.split("/")[0];
				"data" == d && (e[c] || b.removeItem(c))
			}
		},
		i = function(b) {
			$.get(d.versionPath, function(c) {
				f = c, a.amapCache.cacheFileListObj = c, a.amapCache.newestVersion = c;
				var d;
				for (d in a.amapCache.newestVersion) if (a.amapCache.newestVersion.hasOwnProperty(d)) {
					{
						d.split("/")[1].split("_")[0]
					}
					e[d + "_" + a.amapCache.newestVersion[d]] = !0
				}
				h(), b && b()
			}, "json")
		},
		j = function(a) {
			c ? (d.versionPath = a.versionPath || "http://m.amap.com/subway/data/version/version.json", i(a.complete)) : a.complete()
		};
	a.amapCache.init = j;
	var k = function(a, b, c) {
			$.ajax({
				url: a,
				type: "get",
				method: "get",
				dataType: "json",
				success: b,
				error: c
			})
		},
		l = function(a, d, e) {
			f[a];
			if (c) {
				var g = a + "_" + f[a],
					h = b.getItem(g);
				h ? d("[object String]" == Object.prototype.toString.call(h) ? JSON.parse(h) : h) : k(a, function(a) {
					"[object String]" == Object.prototype.toString.call(a) && (a = JSON.parse(a)), b.setItem(g, JSON.stringify(a)), d(a)
				}, e)
			} else k(a, function(a) {
				"[object String]" == Object.prototype.toString.call(a) && (a = JSON.parse(a)), d(a)
			}, e)
		};
	a.amapCache.loadData = l, a.amapCache.cacheFileListObj = f, a.amapCache.enabledLocalstorage = c
}(window);
var SW = {
	cache: {
		curCity: {
			adcode: null,
			name: null
		},
		dataForDrw: {},
		cities: {},
		lines: {},
		stations: {},
		stationsInfo: {},
		offset: {}
	},
	datas: [],
	info_datas: [],
	fileNameData: {
		1100: "beijing",
		3100: "shanghai",
		4401: "guangzhou",
		4403: "shenzhen",
		4201: "wuhan",
		1200: "tianjin",
		3201: "nanjing",
		8100: "xianggang",
		5000: "chongqing",
		3301: "hangzhou",
		2101: "shenyang",
		2102: "dalian",
		5101: "chengdu",
		2201: "changchun",
		3205: "suzhou",
		4406: "foshan",
		5301: "kunming",
		6101: "xian",
		4101: "zhengzhou",
		2301: "haerbin",
		4301: "changsha",
		3302: "ningbo",
		3202: "wuxi",
		3702: "qingdao",
		3601: "nanchang"
	},
	cityname: {
		1100: "北京",
		3100: "上海",
		4401: "广州",
		4403: "深圳",
		4201: "武汉",
		1200: "天津",
		3201: "南京",
		8100: "香港",
		5000: "重庆",
		3301: "杭州",
		2101: "沈阳",
		2102: "大连",
		5101: "成都",
		2201: "长春",
		3205: "苏州",
		4406: "佛山",
		5301: "昆明",
		6101: "西安",
		4101: "郑州",
		2301: "哈尔滨",
		4301: "长沙",
		3302: "宁波",
		3202: "无锡",
		3702: "青岛",
		3601: "南昌"
	},
	swInit: function() {
		var a = this;
		FastClick.attach(document.body), amapCache.init({
			complete: function() {
				a.initCity(), tip.init()
			}
		})
	},
	initCity: function() {
		var a = this;
		a.changeCity(), $(window).on("hashchange", function() {
			a.changeCity()
		})
	},
	changeCity: function() {
		var a = this,
			b = window.location.hash.replace(/^\#/, ""),
			c = b.split("&")[0].substr(0, 4),
			d = b.split("&")[1] ? b.split("&")[1].replace("lnglat=", "") : "";
		$("#subway-svg,#infowindow-content,#tip-content,.line-caption").remove(), c = "" != c && a.fileNameData[c] ? c : "1100";
		var e = navigator.userAgent;
		/Android/i.test(e) ? (a.loading(), a.loadData(c, function(b) {
			a.loadingOver(), drwSw.draw(b, d)
		})) : a.loadData(c, function(a) {
			drwSw.draw(a, d)
		})
	},
	loadDom: function(a) {
		var b = a + "_dom_" + amapCache.cacheFileListObj["data/" + a + "_drw_" + SW.adcode + ".json"];
		amapCache.enabledLocalstorage && window.localStorage.getItem(b)
	},
	loadData: function(a, b) {
		var c = this,
			d = a,
			e = c.fileNameData[a];
		if (SW.cache.cities[d]) b(SW.cache.cities[d]), SW.cache.curCity.adcode = d, SW.cache.curCity.name = SW.cache.cities[d].name;
		else {
			//var f = "data/" + d + "_drw_" + e + ".json";
            var f = "http://m.amap.com/subway/data/1100_drw_beijing.json";
			amapCache.loadData(f, function(a) {
				SW.cache.dataForDrw[a.i] = a, SW.cache.cities[a.i] = SW.cache.cities[a.i] || {}, SW.cache.cities[a.i].name = a.s, SW.cache.cities[a.i].id = a.i, SW.cache.cities[a.i].offset = a.o, SW.cache.cities[a.i].lines = [], SW.cache.cities[a.i].linesNamePos = {}, SW.cache.cities[a.i].stations = [], SW.cache.cities[a.i].zolines = {}, SW.cache.cities[a.i].zostations = [];
				var c = a.o.split(",");
				SW.cache.offset[a.i] = SW.cache.offset[a.i] || {};
				var e = 1e3 - Number(c[0]),
					f = 1e3 - Number(c[1]);
				SW.cache.offset[a.i].x = e, SW.cache.offset[a.i].y = f;
				for (var g = 0; g < a.l.length; g++) {
					for (var h = a.l[g].c, i = 0; i < h.length; i++) {
						var j = h[i].split(" ");
						h[i] = Number(j[0]) + e + " " + (Number(j[1]) + f)
					}
					a.l[g].c = h;
					for (var k = 0; k < a.l[g].st.length; k++) {
						var l = a.l[g].st[k].p.split(" ");
						a.l[g].st[k].p = Number(l[0]) + e + " " + (Number(l[1]) + f), "1" == a.l[g].st[k].su && (SW.cache.cities[a.i].stations.push(a.l[g].st[k]), SW.cache.stations[a.l[g].st[k].si] = a.l[g].st[k])
					}
					var m = a.l[g].lp;
					if (m) {
						for (var n = 0; n < m.length; n++) {
							var o = m[n].split(" ");
							m[n] = Number(o[0]) + e + " " + (Number(o[1]) + f)
						}
						a.l[g].lp = m
					}
					SW.cache.cities[a.i].linesNamePos[a.l[g].ls] = a.l[g].lp, SW.cache.cities[a.i].lines.push(a.l[g]), SW.cache.lines[a.l[g].ls] = a.l[g]
				}
				b(SW.cache.cities[d]), SW.cache.curCity.adcode = d, SW.cache.curCity.name = SW.cache.cities[d].name
			}, function() {
				alert("数据加载失败！")
			}), 
            //f = "data/" + d + "_info_" + e + ".json",
            f = "http://m.amap.com/subway/data/1100_info_beijing.json"
            amapCache.loadData(f, function(a) {
				for (var b = 0; b < a.l.length; b++) for (var c = 0; c < a.l[b].st.length; c++) SW.cache.stationsInfo[a.l[b].st[c].si] = a.l[b].st[c]
			})
		}
	},
	loading: function() {
		$(".loading-bg").css("display", "block")
	},
	loadingOver: function() {
		$(".loading-bg").css("display", "none")
	}
},
	drwSw = {
		currLines: {},
		w: $(window).width(),
		h: $(window).height(),
		t_top: 0,
		t_left: 0,
		moveX: 0,
		moveY: 0,
		font_size: 12,
		nearHightLight: 14,
		isNearTip: !1,
		label_angle: {
			0: [0, -1],
			1: [1, -1],
			2: [1, 0],
			3: [1, 1],
			4: [0, 1],
			5: [-1, 1],
			6: [-1, 0],
			7: [-1, -1]
		},
		curOffset: {},
		sortline: null,
		isAndroid2Ver: !1,
		ns_svg: "http://www.w3.org/2000/svg",
		isAndroid2: function() {
			var a, b = this,
				c = navigator.userAgent;
			/Android (\d+\.\d+)/.test(c) && (a = parseFloat(RegExp.$1)), b.isAndroid2Ver = 3 > a ? !0 : !1
		},
		initDraw: function(a, b) {
			var c = this;
			c.t_left = 0, c.t_top = 0, c.isAndroid2();
			var d, e, f, g, h = parseInt(c.w / 2),
				i = parseInt(c.h / 2),
				j = (a.id, c.getNearStation(a, b));
			if (j) {
				var k = SW.cache.stations[j].p;
				f = parseInt(k.split(" ")[0]), g = parseInt(k.split(" ")[1])
			} else f = 1e3, g = 1e3;
			d = f, e = g;
			var l = d - h,
				m = e - i;
			c.deletInProgress(a), c.isAndroid2Ver ? c.drawCanvasSubway(a, j) : c.drawSvgSubway(a, j), window.scrollTo(l, m)
		},
		draw: function(a, b) {
			this.currLines = {}, this.initDraw(a, b)
		},
		drawCanvasSubway: function(a, b) {
			var c = this;
			$("#subwayCanvas").css("display", "block"), $(".station-out-box").css("display", "block"), $("#subwaySvg").css("display", "none"), c.setCanvasTrans(a), c.drawCanvas(a, b)
		},
		drawSvgSubway: function(a, b) {
			var c = this;
			$("#subwayCanvas").css("display", "none"), $(".station-out-box").css("display", "none"), $("#subwaySvg").css("display", "block");
			a.id;
			c.drwSwBox(a), c.drawSvg(a, b)
		},
		drwSwBox: function(a) {
			var b = this,
				c = document.getElementById("subwaySvg"),
				d = document.createElementNS(b.ns_svg, "svg");
			d.setAttribute("class", "subway-content"), d.setAttribute("id", "subway-svg"), d.setAttribute("adcode", a.id), d.setAttribute("viewBox", "0 0 2000 2000"), d.style.width = "2000px", d.style.height = "2000px", c.appendChild(d);
			var e = document.createElementNS(b.ns_svg, "g");
			e.setAttribute("id", "subway-box"), d.appendChild(e);
			var f = document.createElementNS(b.ns_svg, "g");
			f.setAttribute("id", "svg-g");
			var g, h;
			g = b.t_top, h = b.t_left, f.setAttribute("transform", "translate(" + h + "," + g + ") scale(1)"), f.setAttribute("pointer-events", "suto"), e.appendChild(f)
		},
		setCanvasTrans: function(a) {
			var b = this,
				c = document.getElementById("subwayCanvas"),
				d = c.getContext("2d");
			c.setAttribute("adcode", a.id);
			var e, f;
			e = b.t_top, f = b.t_left, _translate = [f, e], d.translate(_translate[0], _translate[1])
		},
		deletInProgress: function(a) {
			for (var b = this, c = 0; c < a.lines.length; c++)"3" != a.lines[c].su && (b.currLines[a.lines[c].ls] = a.lines[c])
		},
		lineSort: function() {
			var a = this;
			a.sortline = [];
			for (id in a.currLines) {
				var b = parseInt(a.currLines[id].x),
					c = a.currLines[id].ls;
				a.sortline[b - 1] = c
			}
		},
		addCaption: function() {
			for (var a = this, b = $("#subway-caption"), c = 0; c < a.sortline.length; c++) {
				var d = $('<div class="line-caption"></div>');
				d.html(SW.cache.lines[a.sortline[c]].ln), d.attr("id", "caption-" + a.sortline[c]), d.attr("lineid", a.sortline[c]), d.css("background", "#" + SW.cache.lines[a.sortline[c]].cl), b.append(d)
			}
		},
		drawSvg: function(a, b) {
			var c = this,
				d = "normal";
			c.lineSort(), c.drwSwLines(c.currLines, d), c.drwSwStations(a, d, b), c.drwSwStationsName(a, d, 12, 20), c.drawBg(c.currLines), c.drwSwLinesName(a), c.addCaption(c.currLines)
		},
		drawBg: function() {
			var a = this,
				b = document.getElementById("svg-g"),
				c = document.createElementNS(a.ns_svg, "g");
			c.setAttribute("id", "g-bg"), b.appendChild(c);
			var d = document.createElementNS(a.ns_svg, "rect");
			d.setAttribute("id", "select_bg"), d.setAttribute("x", 0), d.setAttribute("y", 0), d.setAttribute("width", 2e3), d.setAttribute("height", 2e3), c.appendChild(d)
		},
		drawSelectLine: function(a) {
			var b = this,
				c = "select",
				d = document.getElementById("svg-g"),
				e = document.createElementNS(b.ns_svg, "g");
			e.setAttribute("id", "g-select"), d.appendChild(e), b.drwSwLines(a, c), b.drwSwStations(a, c), b.drwSwStationsName(a, c, 12, 20)
		},
		drawCanvas: function(a, b) {
			var c = this,
				d = document.getElementById("subwayCanvas"),
				e = d.getContext("2d"),
				f = a.id;
			$.each(c.currLines, function(a, b) {
				c.cDrawLine(b, e), c.cDrawLineName(b, e)
			}), $.each(a.stations, function(a, d) {
				c.cDrawStationCircle(d, e), c.cCreateStationOut(d, f, b), c.cDrawStationText(d, e)
			}), b && c.cDrawHeightlightCircle(b, e)
		},
		drwSwLines: function(a, b) {
			var c = this,
				d = document.getElementById("svg-g"),
				e = document.createElementNS(c.ns_svg, "g");
			if (e.setAttribute("id", "g-line-" + b), "normal" == b) {
				d.appendChild(e);
				for (var f in a) {
					var g = a[f].c,
						h = "M" + g[0].split(" ").join(","),
						i = h + "L" + g.join("L"),
						j = document.createElementNS(c.ns_svg, "path");
					j.setAttribute("id", "line-" + a[f].ls), j.setAttribute("name", a[f].ls), j.setAttribute("stroke", "#" + a[f].cl), j.setAttribute("d", i), e.appendChild(j)
				}
			} else if ("select" == b) {
				var k = document.getElementById("g-select");
				k.appendChild(e);
				var g = a.c,
					h = "M" + g[0].split(" ").join(","),
					i = h + "L" + g.join("L"),
					j = document.createElementNS(c.ns_svg, "path");
				j.setAttribute("id", "line-" + a.ls), j.setAttribute("name", a.ls), j.setAttribute("stroke", "#" + a.cl), j.setAttribute("d", i), e.appendChild(j)
			}
		},
		drwSwLinesName: function(a) {
			var b = this,
				c = a.linesNamePos,
				d = document.getElementById("svg-g"),
				e = document.createElementNS(b.ns_svg, "g");
			e.setAttribute("id", "g-line-name"), d.appendChild(e);
			for (id in c) if (null != c[id]) for (var f = 0; f < c[id].length; f++) {
				var g = SW.cache.lines[id].ln,
					h = g.length * b.font_size + 6,
					i = 20,
					j = SW.cache.lines[id].cl,
					k = parseInt(c[id][f].split(" ")[0]),
					l = parseInt(c[id][f].split(" ")[1]) - 15,
					m = (document.getElementById("g-line-name"), document.createElementNS(b.ns_svg, "g"));
				m.setAttribute("transform", "translate(" + k + "," + l + ")"), m.setAttribute("class", "line_name"), m.setAttribute("lineid", id);
				var n = document.createElementNS(b.ns_svg, "rect");
				n.setAttribute("rx", 3), n.setAttribute("ry", 3), n.setAttribute("width", h), n.setAttribute("height", i), n.setAttribute("fill", "#" + j), m.appendChild(n);
				var o = document.createElementNS(b.ns_svg, "text");
				o.setAttribute("class", "line_name_txt"), o.setAttribute("lineid", id), o.setAttribute("height", 20), o.setAttribute("x", h / 2), o.setAttribute("y", i / 2), o.setAttribute("dy", 4), o.setAttribute("fill", "#fff"), o.setAttribute("text-anchor", "middle"), o.textContent = g, m.appendChild(o), e.appendChild(m)
			}
		},
		drwSwStations: function(a, b, c) {
			var d = this,
				e = document.getElementById("svg-g"),
				f = document.createElementNS(d.ns_svg, "g");
			if (f.setAttribute("id", "g-station-" + b), "normal" == b) e.appendChild(f);
			else if ("select" == b) {
				var g = document.getElementById("g-select");
				g.appendChild(f)
			}
			for (var h = a.stations || a.st, i = 0; i < h.length; i++) if ("1" == h[i].su) {
				var j = document.createElementNS(d.ns_svg, "g");
				if (j.setAttribute("id", "g-" + h[i].si), j.setAttribute("class", "g-station"), f.appendChild(j), "0" == h[i].t) {
					var k = document.createElementNS(d.ns_svg, "circle");
					k.setAttribute("cx", parseInt(h[i].p.split(" ")[0])), k.setAttribute("cy", parseInt(h[i].p.split(" ")[1])), k.setAttribute("r", 7), k.setAttribute("fill", "#FFF"), k.setAttribute("stroke-width", 2), k.setAttribute("stroke", "#000"), j.appendChild(k)
				} else if ("1" == h[i].t) {
					var l = document.createElementNS(d.ns_svg, "image");
					l.setAttribute("x", parseInt(h[i].p.split(" ")[0]) - 13), l.setAttribute("y", parseInt(h[i].p.split(" ")[1]) - 13), l.setAttribute("width", 26), l.setAttribute("height", 26), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "transfer-station.png"), j.appendChild(l)
				}
				if (h[i].si == c) {
					var m = SW.cache.stations[c],
						k = document.createElementNS(d.ns_svg, "circle");
					k.setAttribute("id", "near-" + c), k.setAttribute("class", "near-station"), k.setAttribute("cx", parseInt(m.p.split(" ")[0])), k.setAttribute("cy", parseInt(m.p.split(" ")[1])), k.setAttribute("r", 14), k.setAttribute("fill", "#007aff"), k.setAttribute("fill-opacity", .4), j.appendChild(k), $("#tip-content").length > 0 || (d.nearTip(c), $("#tip-content").addClass("open"))
				}
				var n = document.createElementNS(d.ns_svg, "circle");
				n.setAttribute("cx", parseInt(h[i].p.split(" ")[0])), n.setAttribute("cy", parseInt(h[i].p.split(" ")[1])), n.setAttribute("line_id", h[i].r.split("|")[0]), n.setAttribute("station_id", h[i].si), n.setAttribute("r", 13), n.setAttribute("fill", "#FFF"), n.setAttribute("fill-opacity", "0"), j.appendChild(n)
			}
		},
		drwSwStationsName: function(a, b, c, d) {
			var e = this,
				f = a.stations || a.st || a,
				g = document.getElementById("svg-g"),
				h = document.createElementNS(e.ns_svg, "g");
			if (h.setAttribute("id", "g-station-name-" + b), "normal" == b) g.appendChild(h);
			else if ("select" == b) {
				var i = document.getElementById("g-select");
				i.appendChild(h)
			}
			var j = document.createElementNS(e.ns_svg, "g");
			j.setAttribute("id", "g-name"), h.appendChild(j);
			for (var k = 0; k < f.length; k++) if ("1" == f[k].su && "2" != f[k].t) {
				var l = document.createElementNS(e.ns_svg, "text");
				l.style.fontSize = c + "px", l.setAttribute("id", "name-" + f[k].si), l.setAttribute("name", f[k].n), l.textContent = f[k].n;
				var m, n, o, p = f[k].lg;
				m = "0" == p || "4" == p ? "middle" : "left", l.setAttribute("text-anchor", m), "0" == p || "4" == p ? n = parseInt(f[k].p.split(" ")[0]) : "5" == p || "6" == p || "7" == p ? n = parseInt(f[k].p.split(" ")[0]) - f[k].n.length * c - 10 : ("1" == p || "2" == p || "3" == p) && (n = parseInt(f[k].p.split(" ")[0]) + 10), "2" == p || "6" == p ? o = parseInt(f[k].p.split(" ")[1]) + 5 : "0" == p || "1" == p || "7" == p ? o = parseInt(f[k].p.split(" ")[1]) - 10 : ("3" == p || "4" == p || "5" == p) && (o = parseInt(f[k].p.split(" ")[1]) + d), l.setAttribute("x", n), l.setAttribute("y", o), j.appendChild(l)
			}
		},
		cDrawLine: function(a, b) {
			b.lineWidth = 7;
			var c = a.c[0].split(/\s+/),
				d = parseFloat(c[0]),
				e = parseFloat(c[1]);
			b.beginPath(), b.moveTo(d, e), $.each(a.c, function(a, c) {
				var d = c.split(/\s+/),
					e = parseFloat(d[0]),
					f = parseFloat(d[1]);
				b.lineTo(e, f)
			}), b.strokeStyle = "#" + a.cl, b.stroke()
		},
		cDrawStationCircle: function(a, b) {
			var c = a.p.split(/\s+/),
				d = parseFloat(c[0]),
				e = parseFloat(c[1]);
			if ("0" == a.t) b.lineWidth = 4, b.strokeStyle = "#000000", b.fillStyle = "#FFFFFF", b.beginPath(), b.arc(d, e, 6, 0, 2 * Math.PI), b.stroke(), b.fill();
			else if ("1" == a.t) {
				var f = document.getElementById("transfer-img");
				b.drawImage(f, d - 13, e - 13, 26, 26)
			}
		},
		cDrawHeightlightCircle: function(a, b) {
			var c = SW.cache.stations[a].p.split(/\s+/),
				d = parseFloat(c[0]),
				e = parseFloat(c[1]);
			b.fillStyle = "#007aff", b.globalAlpha = "0.4", b.beginPath(), b.arc(d, e, 14, 0, 2 * Math.PI), b.fill()
		},
		cDrawLineName: function(a, b) {
			var c = this,
				d = a.lp,
				e = a.ln,
				f = a.cl,
				g = e.length * c.font_size + 6,
				h = 20,
				i = 5;
			if (d) for (var j = 0; j < d.length; j++) {
				var k = parseInt(d[j].split(" ")[0]),
					l = parseInt(d[j].split(" ")[0]) + g / 2,
					m = parseInt(d[j].split(" ")[1]) - 15,
					n = parseInt(d[j].split(" ")[1]);
				b.beginPath(), b.moveTo(k + i, m), b.lineTo(k + g - i, m), b.quadraticCurveTo(k + g, m, k + g, m + i), b.lineTo(k + g, m + h - i), b.quadraticCurveTo(k + g, m + h, k + g - i, m + h), b.lineTo(k + i, m + h), b.quadraticCurveTo(k, m + h, k, m + h - i), b.lineTo(k, m + i), b.quadraticCurveTo(k, m, k + i, m), b.fillStyle = "#" + f, b.fill(), b.fillStyle = "white", b.textAlign = "center", b.font = c.font_size + "px Microsoft YaHei", b.fillText(e, l, n)
			}
		},
		cCreateStationOut: function(a, b, c) {
			var d, e, f, g = this,
				h = $(".station-out-box"),
				i = a.p.split(/\s+/);
			d = parseFloat(i[0]) - 13, e = parseFloat(i[1]) - 13, a.si == c ? (f = $('<a class="station-out near-station" id="near-' + c + '" line_id=' + a.r.split("|")[0] + " station_id=" + a.si + " station_name=" + a.n + "></a>"), setTimeout(function() {
				$("#tip-content").length > 0 || (g.nearTip(c), $("#tip-content").addClass("open"))
			}, 100)) : f = $('<a class="station-out" line_id=' + a.r.split("|")[0] + " station_id=" + a.si + " station_name=" + a.n + "></a>"), f.css({
				"display:": "block",
				width: "26px",
				height: "26px",
				position: "absolute",
				top: e,
				left: d
			}), h.append(f)
		},
		cDrawStationText: function(a, b) {
			var c = this;
			b.textBaseline = "middle", b.textAlign = "center";
			var d = a.n.length * c.font_size,
				e = c.font_size,
				f = c.label_angle[a.lg][0] * (d / 2 + 10),
				g = c.label_angle[a.lg][1] * (e / 2 + 10),
				h = a.p.split(/\s+/),
				i = parseFloat(h[0]) + f,
				j = parseFloat(h[1]) + g;
			b.fillStyle = "#000000", b.font = c.font_size + "px Microsoft YaHei", b.lineWidth = .5, b.fillText(a.n, i, j)
		},
		nearTip: function(a) {
			var b, c, d, e = this,
				f = $("#subway"),
				g = $("#near-" + a),
				h = g.offset().left,
				i = g.offset().top;
			b = 60 > h || 60 > i && 60 > h || 60 > i && h > 60 && 1880 > h ? "l" : h > 1880 || 60 > i && h > 1880 ? "r" : "t";
			var j = $('<div class="tip-content" id="tip-content"><div class="tip-near tip-' + b + '"><img class="near-img" src="./img/subway/near_' + b + '.png"/></div></div>');
			f.append(j), "l" == b ? (c = h, d = i) : "r" == b ? (c = h, d = i) : (c = h + e.nearHightLight, d = i), $(".tip-content").css({
				top: d + "px",
				left: c + "px"
			}), e.isNearTip = !0
		},
		getDistance: function(a, b) {
			var c = 6378137,
				d = Math.PI / 180,
				e = (b.lat - a.lat) * d,
				f = (b.lng - a.lng) * d,
				g = a.lat * d,
				h = b.lat * d,
				i = Math.sin(e / 2),
				j = Math.sin(f / 2),
				k = i * i + j * j * Math.cos(g) * Math.cos(h);
			return 2 * c * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k))
		},
		toLnglat: function(a) {
			if (!a) return !1;
			var b = a.split(","),
				c = b[0],
				d = b[1];
			return {
				lng: c,
				lat: d
			}
		},
		getNearStation: function(a, b) {
			for (var c, d, e, f = this, g = -1, h = 0, i = a.stations, j = f.toLnglat(b), k = 0; k < i.length; k++) c = f.toLnglat(i[k].sl), e = i[k].si, h = "" != i[k].sl ? f.getDistance(j, c) : 1e5, (-1 == g || g > h) && (g = h, d = e);
			return 1e4 > g ? d : !1
		}
	},
	tip = {
		isHighlight: !1,
		isInfoShow: !1,
		stationsInfo: SW.cache.stationsInfo,
		stations: SW.cache.stations,
		lines: SW.cache.lines,
		station_w: 26,
		init: function() {
			this.bindEvent()
		},
		bindEvent: function() {
			var a = this;
			$("#subway").on("click", ".line-caption", function() {
				var a = $(this).attr("lineid");
				$("#g-select").remove(), $("#g-bg").css("display", "block"), drwSw.drawSelectLine(SW.cache.lines[a])
			}), $("#subway").on("click", "g", function() {
				if ($(this).hasClass("line_name")) {
					var a = $(this).attr("lineid");
					$("#g-select").remove(), $("#g-bg").css("display", "block"), drwSw.drawSelectLine(SW.cache.lines[a])
				}
			}), $("#subway").on("click", "#g-bg", function() {
				$("#g-select").remove(), $("#g-bg").css("display", "none")
			}), $("#subway").on("click", "circle", function(b) {
				b.stopPropagation(), b.preventDefault();
				var c = $(this);
				a.openInfowindow(c), $(this).closest(".g-station").find(".near-station").length > 0 && a.closeNearTip()
			}), $(".station-out-box").on("click", ".station-out", function(b) {
				b.stopPropagation(), b.preventDefault();
				var c = $(this);
				a.openInfowindow(c), $(this).hasClass("near-station") && a.closeNearTip()
			}), $(".station-out-box").on("touchstart", ".station-out", function(a) {
				a.stopPropagation()
			}), $("#subway").on("click", ".close_info_btn", function(b) {
				a.closeInfoWindow(b)
			}), $(document).on("click", function(b) {
				a.closeInfoWindow(b)
			}), $("#subway").on("click", "#infowindow-content", function(a) {
				a.stopPropagation()
			}), $("#subway").on("touchstart", "#infowindow-content", function(a) {
				a.stopPropagation()
			})
		},
		closeInfoWindow: function() {
			$("#infowindow-content").remove(), $("#tip-content").length > 0 && $("#tip-content").css("display", "block").addClass("open")
		},
		closeNearTip: function() {
			var a = $(".tip-content");
			drwSw.isNearTip && a.hasClass("open") && a.css("display", "none").removeClass("open")
		},
		openInfowindow: function(a) {
			{
				var b = this,
					c = a.attr("line_id"),
					d = a.attr("station_id");
				a.attr("station_name")
			}
			$("#infowindow-content").remove();
			var e = b.setInfowindowType(a);
			b.createInfowindow(e), b.loadinfo(c, d), b.setInfowindowPos(e, a)
		},
		setInfowindowType: function(a) {
			var b, c = a.offset().left,
				d = a.offset().top;
			return b = 160 > c || 160 > d && 160 > c || 160 > d && c > 160 && 1680 > c ? "r" : c > 1680 || 160 > d && c > 1680 ? "l" : "t"
		},
		createInfowindow: function(a) {
			var b = $("#subway"),
				c = $('<div class="infowindow-content" id="infowindow-content">'),
				d = "";
			b.append(c), "t" == a ? d = '<div class="info-window-top-out"><div class="info-window"><h3 id="info-title"><span id="station-name"></span><a href="javascript:void(0)" class="close_info_btn">×</a></h3><div id="info-content"><div class="info-detail-content info-content-item info-time"></div></div></div><div class="info-window-bottom"><div class="arrow-bg"><i class="arrow"></i></div></div></div>' : "r" == a ? d = '<div class="info-window-left-out"><div class="info-window-left"><div class="arrow-bg"><i class="arrow"></i></div></div><div class="info-window"><h3 id="info-title"><span id="station-name"></span><a href="javascript:void(0)" class="close_info_btn">×</a></h3><div id="info-content"><div class="info-detail-content info-content-item info-time"></div></div></div></div>' : "l" == a && (d = '<div class="info-window-right-out"><div class="info-window"><h3 id="info-title"><span id="station-name"></span><a href="javascript:void(0)" class="close_info_btn">×</a></h3><div id="info-content"><div class="info-detail-content info-content-item info-time"></div></div></div><div class="info-window-right"><div class="arrow-bg"><i class="arrow"></i></div></div></div>'), c.append(d)
		},
		setInfowindowPos: function(a, b) {
			var c, d, e = this,
				f = $(".info-window"),
				g = $("#infowindow-content"),
				h = (f.width(), f.height(), b.offset().left),
				i = b.offset().top;
			"t" == a ? (c = h + e.station_w / 2, d = i) : "l" == a ? (c = h, d = i) : "r" == a && (c = h, d = i), g.css({
				top: d + "px",
				left: c + "px"
			})
		},
		loadinfo: function(a, b) {
			var c, d = this,
				e = [],
				f = [],
				g = [];
			e = d.stationsInfo[b].d, c = d.stations[b].n, f = d.stations[b].r.split("|");
			for (var h = {}, i = 0, j = e.length; j > i; i++) {
				var k = e[i];
				h[k.ls] || (h[k.ls] = []), h[k.ls].push(k)
			}
			$("#info-title #station-name").html(c);
			var l = "";
			for (l in h) if (h.hasOwnProperty(l) && d.lines[l]) {
				var m = d.lines[l].la;
				"" == m || (m = "(" + m + ")"), g.push('<div class="time-item">'), g.push('<h4 class="time-item-title" style="border-bottom:1px solid #' + d.lines[l].cl + '"><label class="line-label" style="background-color:#' + d.lines[l].cl + ';">地铁' + d.lines[l].ln + '</label><label class="line-sub-label">' + m + "</label></h4>"), g.push('<ul class="time-item-main">');
				for (var n = 0; 2 > n; n++) if (h[l][n]) {
					var o = h[l][n].ft,
						p = h[l][n].lt;
					"--" != o.split(":")[0] && "--" != p.split(":")[0] && (g.push('<li class="time-item-detail">'), g.push('<div class="train-direct fl"><label class="direct-label">开往</label><span class="direct-name">' + d.stations[h[l][n].n].n + "</span></div>"), g.push('<div class="train-time fl">'), g.push('<div class="start-time time-box fl"><label class="time-label">首</label><span class"time">' + o + "</span></div>"), g.push('<div class="last-time time-box fl"><label class="time-label">末</label><span class="time">' + p + "</span></div>"), g.push("</div>"), g.push("</li>"))
				}
				g.push("</ul>"), g.push("</div>")
			}
			$(".info-time").html(g.join(""))
		}
	},
	deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
	deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
	deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
	deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function(a) {
	"use strict";
	switch (a.nodeName.toLowerCase()) {
	case "button":
	case "select":
	case "textarea":
		if (a.disabled) return !0;
		break;
	case "input":
		if (deviceIsIOS && "file" === a.type || a.disabled) return !0;
		break;
	case "label":
	case "video":
		return !0
	}
	return /\bneedsclick\b/.test(a.className)
}, FastClick.prototype.needsFocus = function(a) {
	"use strict";
	switch (a.nodeName.toLowerCase()) {
	case "textarea":
		return !0;
	case "select":
		return !deviceIsAndroid;
	case "input":
		switch (a.type) {
		case "button":
		case "checkbox":
		case "file":
		case "image":
		case "radio":
		case "submit":
			return !1
		}
		return !a.disabled && !a.readOnly;
	default:
		return /\bneedsfocus\b/.test(a.className)
	}
}, FastClick.prototype.sendClick = function(a, b) {
	"use strict";
	var c, d;
	document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
}, FastClick.prototype.determineEventType = function(a) {
	"use strict";
	return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(a) {
	"use strict";
	var b;
	deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
}, FastClick.prototype.updateScrollParent = function(a) {
	"use strict";
	var b, c;
	if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
		c = a;
		do {
			if (c.scrollHeight > c.offsetHeight) {
				b = c, a.fastClickScrollParent = c;
				break
			}
			c = c.parentElement
		} while (c)
	}
	b && (b.fastClickLastScrollTop = b.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
	"use strict";
	return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
}, FastClick.prototype.onTouchStart = function(a) {
	"use strict";
	var b, c, d;
	if (a.targetTouches.length > 1) return !0;
	if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], deviceIsIOS) {
		if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;
		if (!deviceIsIOS4) {
			if (c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
			this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
		}
	}
	return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(a) {
	"use strict";
	var b = a.changedTouches[0],
		c = this.touchBoundary;
	return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
}, FastClick.prototype.onTouchMove = function(a) {
	"use strict";
	return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(a) {
	"use strict";
	return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(a) {
	"use strict";
	var b, c, d, e, f, g = this.targetElement;
	if (!this.trackingClick) return !0;
	if (a.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
	if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
		if (b = this.findControl(g)) {
			if (this.focus(g), deviceIsAndroid) return !1;
			g = b
		}
	} else if (this.needsFocus(g)) return a.timeStamp - c > 100 || deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.sendClick(g, a), deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
	return deviceIsIOS && !deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
}, FastClick.prototype.onTouchCancel = function() {
	"use strict";
	this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(a) {
	"use strict";
	return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
}, FastClick.prototype.onClick = function(a) {
	"use strict";
	var b;
	return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
}, FastClick.prototype.destroy = function() {
	"use strict";
	var a = this.layer;
	deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(a) {
	"use strict";
	var b, c;
	if ("undefined" == typeof window.ontouchstart) return !0;
	if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
		if (!deviceIsAndroid) return !0;
		if (b = document.querySelector("meta[name=viewport]")) {
			if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
			if (c > 31 && window.innerWidth <= window.screen.width) return !0
		}
	}
	return "none" === a.style.msTouchAction ? !0 : !1
}, FastClick.attach = function(a) {
	"use strict";
	return new FastClick(a)
}, "undefined" != typeof define && define.amd ? define(function() {
	"use strict";
	return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;