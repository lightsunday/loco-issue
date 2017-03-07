(function(p, y, h, T) {
  var k = function() {
    var f = {};
    return {
      register: function(c, h) {
        console.log( ' ~ Register: ', c, h );
        f[c] = h;
      },
      require: function(c, h) {
        console.log( ' ~ require: ', c, h );
        var n = f[c];
        if (!n) throw Error('CommonJS error: failed to require("' + h + '")');
        return n
      }
    }
  }();
  k.register("$1", function(f, c, h) {
    function n(b) {
      var g = typeof b;
      if ("string" === g)
        if (/[^ <>!=()%^&|?:n0-9]/.test(b)) console.error("Invalid plural: " + b);
        else return new Function("n", "return " + b);
        "function" !== g && (b = function(a) {
        return 1 != a
      });
      return b
    }
    f.init = function(b) {
      function g(d, e, l) {
        return (d = a[d]) && d[l] ? d[l] : e ||
          ""
      }
      b = n(b);
      var a = {};
      return {
        _: function(a) {
          return g(a, a, 0)
        },
        _x: function(a, e) {
          return g(e + "\u0004" + a, a, 0)
        },
        _n: function(a, e, l) {
          l = Number(b(l));
          isNaN(l) && (l = 0);
          return g(a, i ? e : a, l)
        },
        load: function(d) {
          a = d || {};
          return this
        },
        pluraleq: function(a) {
          b = n(a);
          return this
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$2", function(f, c, h) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(c) {
      if (null == this) throw new TypeError;
      var b, g = Object(this),
        a = g.length >>> 0;
      if (0 === a) return -1;
      b = 0;
      1 < arguments.length && (b = Number(arguments[1]),
        b != b ? b = 0 : 0 != b && Infinity != b && -Infinity != b && (b = (0 < b || -1) * Math.floor(Math.abs(b))));
      if (b >= a) return -1;
      for (b = 0 <= b ? b : Math.max(a - Math.abs(b), 0); b < a; b++)
        if (b in g && g[b] === c) return b;
      return -1
    });
    return f
  }({}, p, y));
  k.register("$3", function(f, c, h) {
    f.trim = function(c, b) {
      for (b || (b = " \n"); c && -1 !== b.indexOf(c.substr(0, 1));) c = c.substr(1);
      for (; c && -1 !== b.indexOf(c.substr(-1));) c = c.substr(0, c.length - 1);
      return c
    };
    f.sprintf = function(c) {
      var b = 0,
        g, a = [].slice.call(arguments, 1);
      return c.replace(/%(s|u|%)/g, function(d, e) {
        if ("%" ===
          e) return "%";
        g = a[b++];
        return String(g) || ""
      })
    };
    return f
  }({}, p, y));
  k.register("$34", function(f, c, h) {
    function n(d) {
      a || c._gat && (a = _gat._createTracker(b, "loco"));
      if (a) {
        var e = d.shift();
        a[e].apply(a, d)
      } else g && g.push(d);
      return f
    }
    var b, g, a;
    f._init = function(a) {
      if (b = a.code) {
        g = c._gaq || (c._gaq = []);
        g.push(["_setAccount", b]);
        g.push(["_trackPageview"]);
        g.push(["_setDomainName", a.host]);
        a = h.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = ("https:" == h.location.protocol ? "https://ssl" : "http://www") +
          ".google-analytics.com/ga.js";
        var e = h.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(a, e)
      }
      return f
    };
    f.event = function(a, e, l, b) {
      return n(["_trackEvent", a || "", e || "", l || "", b || 0])
    };
    f.page = function(a, e) {
      return n(["_trackPageview", {
        page: a || location.pathname + location.hash,
        title: e || h.title
      }])
    };
    return f
  }({}, p, y));
  k.register("$35", function(f, c, h) {
    function n(a, d) {
      if (b) b[a](d);
      else c.ga && ga(a, d);
      return f
    }
    var b, g;
    f._init = function(a) {
      a.code && (function(a, e, l, b, g, m, q) {
        a.GoogleAnalyticsObject = g;
        a[g] = a[g] ||
          function() {
            (a[g].q = a[g].q || []).push(arguments)
          };
        a[g].l = 1 * new Date;
        m = e.createElement(l);
        q = e.getElementsByTagName(l)[0];
        m.async = 1;
        m.src = b;
        q.parentNode.insertBefore(m, q)
      }(c, h, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", a.code, {
        alwaysSendReferrer: !0,
        userId: a.user
      }), a.custom && n("set", a.custom), f.page(), ga(function(a) {
        b = a
      }));
      return f
    };
    f.event = function(a, d, e, l) {
      return n("send", {
        hitType: "event",
        eventCategory: a || "",
        eventAction: d || "",
        eventLabel: e || "",
        eventValue: Number(l || 0)
      })
    };
    f.page =
      function(a, d) {
        var e = {
          hitType: "pageview",
          page: a || location.pathname + location.hash,
          title: d || h.title
        };
        e.location = location.protocol + "//" + location.hostname + e.page;
        g && n("set", {
          referrer: g
        });
        g = e.location;
        return n("send", e)
      };
    f.reset = function() {
      g = location.href;
      n("set", {
        page: location.pathname + location.hash,
        title: h.title,
        location: g
      });
      return f
    };
    return f
  }({}, p, y));
  k.register("$28", function(f, c, I) {
    function n(a, e) {
      h(a).click(function(a) {
        b && b.event(e, "click", this.getAttribute("href") || "");
        return !0
      });
      a = null;
      return f
    }
    var b, g = location.hostname,
      a = "/help" === location.pathname.substr(0, 5);
    f.init = function(a) {
      !b && a && (g = a.host || (a.host = g), b = a.legacy ? k.require("$34", "legacy.js") : k.require("$35", "universal.js"), b._init(a));
      return f
    };
    f.link = function(d) {
      for (var e = d.getAttribute("href"); e && "#" !== e;) {
        if (0 === e.indexOf("#")) return n(d, "anchor");
        if ("/help" === e.substr(0, 5) && !a) d.setAttribute("target", "_blank");
        else if (0 === e.indexOf("http") || 0 === e.indexOf("//")) {
          if (-1 !== e.indexOf(g) && /^(https?:)*\/\/([^\/]+)/.exec(e) && g === RegExp.$2) break;
          d.setAttribute("target", "_blank");
          n(d, "external")
        }
        break
      }
      return f
    };
    f.page = function() {
      b && b.page.apply(b, arguments);
      return f
    };
    f.event = function() {
      b && b.event.apply(b, arguments);
      return f
    };
    f.reset = function() {
      b && b.reset && b.reset();
      return f
    };
    return f
  }({}, p, y));
  k.register("$31", function(f, c, k) {
    function n(a, d, e, l, b) {
      function c() {
        u && clearTimeout(u);
        t && t.fadeOut(400, function() {
          h(this).remove();
          t = null
        });
        return !1
      }

      function m() {
        q(); - 1 !== l && (u = setTimeout(c, l || 2E3));
        t.off("mouseleave").on("mouseenter", q)
      }

      function q() {
        u &&
          clearTimeout(u);
        u = null;
        t.off("mouseenter").on("mouseleave", m)
      }
      var u;
      g || (g = k.createElement("div"), g.id = "growls", k.body.appendChild(g));
      var t = h('<div class="growl growl-' + e + '"><div><a class="close" href="#"><span>X</span></a><span class="badge"></span><p class="message"></p><small class="caption"></small></div></div>');
      t.find("p").text(a || "Empty message");
      d ? t.find("small").text(d) : t.find("small").remove();
      if (b.length) {
        b.push({
          label: "Cancel",
          callback: c,
          css: "cancel"
        });
        var f, r = h('<form action="#" class="dialog"></form>');
        d = function(a, d) {
          f = h('<input type="button" value="' + d.label + '" class="butt ' + (d.css || "") + '" />');
          f.click(function(a) {
            "function" === typeof d.callback && d.callback(a, {
              close: c
            })
          });
          r.append(f);
          return f
        };
        for (a = 0; a < b.length; a++) d(a, b[a]);
        t.append(r)
      }
      h(g).prepend(t.hide().fadeIn(400));
      t.find("a").click(c);
      m()
    }
    var b, g;
    f.init = function() {
      if (!b) return b = c.alert, c.alert = function(a) {
        a = String(a).split("\n");
        var d = a[1] && a.slice(1).join("\n");
        f.alert(a[0], d)
      }, f
    };
    f.debug = function(a) {
      b(a);
      return f
    };
    f.alert = function(a,
      d, e, l, g) {
      try {
        return n(a, d || "", e || "alert", l || 4E3, g || []), !0
      } catch (z) {
        return a += "\n\n--\n" + (z.message || z), b.call(c, a), !1
      }
    };
    f.success = function(a, d, e) {
      return f.alert(a, d, "success", e || 2E3)
    };
    f.dialog = function(a, d, e, b) {
      return f.alert(a, d, b || "alert", -1, e)
    };
    f.login = function(a, d, e, b) {
      f.dialog(d || "You're not logged in", e || "Please log in to continue", [{
        label: b || "Log in",
        callback: function(d, e) {
          location.assign(a || "/session/auth/login?r=" + encodeURIComponent(location.href))
        }
      }])
    };
    return f
  }({}, p, y));
  k.register("$36",
    function(f, c, k) {
      function n(a) {
        return 27 === a.keyCode && t && B ? (H(), a.preventDefault(), !1) : !0
      }

      function b(a) {
        if (t) {
          a = c.innerWidth;
          var d = c.innerHeight;
          a !== C && (C = a, G(w));
          d !== v && (v = d, u && g())
        }
        return !0
      }

      function g() {
        var a = e.outerHeight(!0) - u.clientHeight;
        u.style.maxHeight = String(v - a) + "px"
      }

      function a(a) {
        a ? (z.show(), l.addClass("has-title")) : (z.hide(), l.removeClass("has-title"))
      }
      var d, e, l, s, z, m, q, u, t = !1,
        B = !1,
        r = !1,
        E, A, C, w, v, D = f.init = function() {
          if (!d) {
            d = h('<div id="overlay"></div>');
            e = h('<div class="overlay-frame"></div>');
            l = h('<div class="overlay-container"></div>');
            z = h('<div class="overlay-title"><span class="icon"></span><span class="title">Untitled</span></div>');
            m = h("<nav></nav>");
            q = h('<a class="overlay-close" href="#"><span>x</span></a>');
            s = h('<div class="overlay-bg"></div>');
            d.append(e.append(l)).append(s).prependTo(k.body);
            h(k).on("keydown", n);
            h(c).resize(b);
            C = c.innerWidth;
            v = c.innerHeight;
            A = l.outerWidth(!0) - l.width() + (e.innerWidth() - e.width());
            E = parseInt(l.css("width"));
            if (!E || isNaN(E)) E = l.width();
            m.hide().prependTo(e);
            z.append(q.hide()).hide().prependTo(e);
            d.hide()
          }
          return d
        },
        G = f.width = function(a) {
          var d = D();
          if (null === a) e.css("width", ""), l.css("width", "");
          else {
            a = a || E || 640;
            x = a + A;
            w = a;
            var b = C;
            x > b ? (x = b, a = x - A, d.addClass("spill")) : d.removeClass("spill");
            e.css("width", x + "px");
            l.css("width", a + "px")
          }
          return f
        };
      f.autoSize = function() {
        var a = D(),
          d = E || 0;
        l.children().each(function(a, e) {
          d = Math.max(d, h(e).outerWidth(!0))
        });
        G(d);
        if (u = a.find("div.overlay-scroll")[0]) v = c.innerHeight, g();
        return f
      };
      f.css = function(a) {
        D().attr("class", a);
        return f
      };
      f.html = function(a) {
        D();
        c.innerShiv && (a = innerShiv(a, !1));
        return l.html(a)
      };
      f.append = function(a) {
        D();
        a instanceof jQuery || (a = h(a));
        l.append(a);
        return f
      };
      var H = f.close = function(a) {
        if (t) {
          var e = function() {
            D().hide();
            h(k.body).removeClass("has-overlay");
            t = !1;
            l.html("");
            t = null;
            d.trigger("overlayClosed", [f])
          };
          null == a && (a = 300);
          d.trigger("overlayClosing", [f]);
          a ? d.fadeOut(a, e) : e()
        }
        return f
      };
      f.title = function(d, e) {
        D();
        var b = "",
          l = z.find("span");
        e && /^lang lang-(\w+)/.exec(e) && (b = RegExp.$1);
        l.eq(0).attr("class",
          e || "icon").attr("lang", b);
        r = d || "";
        l.eq(1).text(r);
        null != d ? a(!0) : B || a(!1);
        return f
      };
      f.enableClose = function() {
        D();
        B = !0;
        q.off("click").on("click", function(a) {
          H();
          return !1
        });
        a(!0);
        q.show();
        return f
      };
      f.disableClose = function() {
        D();
        B = !1;
        q.hide();
        t && r || a(!1);
        return f
      };
      f.enableNav = function(a) {
        m.append(a);
        m.show();
        return f
      };
      f.disableNav = function() {
        m.html("").hide();
        return f
      };
      f.open = function() {
        D();
        l.html("");
        G(E);
        d.attr("class", "");
        h(k.body).addClass("has-overlay");
        D().show();
        t = !0;
        f.title(null);
        B && a(!0);
        d.trigger("overlayOpened", [f]);
        return f
      };
      f.listen = function(a) {
        D().on("overlayClosed", a);
        return f
      };
      f.unlisten = function(a) {
        D().off("overlayClosed", a);
        return f
      };
      return f
    }({}, p, y));
  k.register("$11", function(f, c, k) {
    function n(a, d) {
      this.$element = h(a);
      this.options = d;
      this.enabled = !0;
      this.fixTitle()
    }
    f.init = function(a, d) {
      var e = {
        fade: !0,
        offset: 5,
        delayIn: b,
        delayOut: g,
        anchor: a.attr("data-anchor"),
        gravity: a.attr("data-gravity") || "s"
      };
      d && (e = h.extend({}, e, d));
      a.tipsy(e)
    };
    f.delays = function(a, d) {
      b = a || 150;
      g = d || 100
    };
    f.kill = function() {
      h("div.tipsy").remove()
    };
    f.text = function(a, d) {
      d.data("tipsy").setTitle(a)
    };
    var b, g;
    f.delays();
    h(k.body).on("overlayOpened overlayClosing", function(a) {
      f.kill();
      return !0
    });
    n.prototype = {
      show: function() {
        var a = this.getTitle();
        if (a && this.enabled) {
          var d = this.tip();
          d.find(".tipsy-inner")[this.options.html ? "html" : "text"](a);
          d[0].className = "tipsy";
          d.remove().css({
            top: 0,
            left: 0
          }).prependTo(k.body);
          var a = (a = this.options.anchor) ? this.$element.find(a) : this.$element,
            a = h.extend({}, a.offset(), {
              width: a[0].offsetWidth,
              height: a[0].offsetHeight
            }),
            e = d[0].offsetWidth,
            b = d[0].offsetHeight,
            g = "function" == typeof this.options.gravity ? this.options.gravity.call(this.$element[0]) : this.options.gravity,
            c;
          switch (g.charAt(0)) {
            case "n":
              c = {
                top: a.top + a.height + this.options.offset,
                left: a.left + a.width / 2 - e / 2
              };
              break;
            case "s":
              c = {
                top: a.top - b - this.options.offset,
                left: a.left + a.width / 2 - e / 2
              };
              break;
            case "e":
              c = {
                top: a.top + a.height / 2 - b / 2,
                left: a.left - e - this.options.offset
              };
              break;
            case "w":
              c = {
                top: a.top + a.height / 2 - b / 2,
                left: a.left + a.width + this.options.offset
              }
          }
          2 == g.length && ("w" ==
            g.charAt(1) ? c.left = a.left + a.width / 2 - 15 : c.left = a.left + a.width / 2 - e + 15);
          d.css(c).addClass("tipsy-" + g);
          d.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + g.charAt(0);
          this.options.className && d.addClass("function" == typeof this.options.className ? this.options.className.call(this.$element[0]) : this.options.className);
          d.addClass("in")
        }
      },
      hide: function() {
        this.tip().remove()
      },
      fixTitle: function() {
        var a = this.$element,
          d = a.attr("title") || "";
        (d || "string" !== typeof a.attr("original-title")) && a.attr("original-title",
          d).removeAttr("title")
      },
      getTitle: function() {
        var a, d = this.$element,
          e = this.options;
        this.fixTitle();
        "string" == typeof e.title ? a = d.attr("title" == e.title ? "original-title" : e.title) : "function" == typeof e.title && (a = e.title.call(d[0]));
        return (a = ("" + a).replace(/(^\s*|\s*$)/, "")) || e.fallback
      },
      setTitle: function(a) {
        var d = this.$element;
        d.attr("default-title") || d.attr("default-title", this.getTitle());
        null == a && (a = d.attr("default-title") || this.getTitle());
        d.attr("original-title", a);
        if (this.$tip) this.$tip.find(".tipsy-inner")[this.options.html ?
          "html" : "text"](a)
      },
      tip: function() {
        this.$tip || (this.$tip = h('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'), this.$tip.data("tipsy-pointee", this.$element[0]));
        return this.$tip
      },
      validate: function() {
        this.$element[0].parentNode || (this.hide(), this.options = this.$element = null)
      },
      enable: function() {
        this.enabled = !0
      },
      disable: function() {
        this.hide();
        this.enabled = !1
      },
      toggleEnabled: function() {
        this.enabled = !this.enabled
      }
    };
    h.fn.tipsy = function(a) {
      function d(d) {
        var e =
          h.data(d, "tipsy");
        e || (e = new n(d, h.fn.tipsy.elementOptions(d, a)), h.data(d, "tipsy", e));
        return e
      }

      function e() {
        var e = d(this),
          b = a.delayIn;
        e.hoverState = "in";
        0 == b ? e.show() : (e.fixTitle(), setTimeout(function() {
          "in" == e.hoverState && e.show()
        }, b))
      }

      function b() {
        var e = d(this),
          l = a.delayOut;
        e.hoverState = "out";
        0 == l ? e.hide() : (e.tip().removeClass("in"), setTimeout(function() {
          "out" == e.hoverState && e.hide()
        }, l))
      }
      a = h.extend({}, h.fn.tipsy.defaults, a);
      a.live || this.each(function() {
        d(this)
      });
      if ("manual" != a.trigger) {
        var g = a.live ?
          "live" : "bind",
          c = "hover" == a.trigger ? "mouseleave" : "blur";
        this[g]("hover" == a.trigger ? "mouseenter" : "focus", e)[g](c, b)
      }
      return this
    };
    h.fn.tipsy.defaults = {
      className: null,
      delayIn: 0,
      delayOut: 0,
      fade: !1,
      fallback: "",
      gravity: "n",
      html: !1,
      live: !1,
      offset: 0,
      opacity: 0.8,
      title: "title",
      trigger: "hover",
      anchor: null
    };
    h.fn.tipsy.revalidate = function() {
      h(".tipsy").each(function() {
        var a = h.data(this, "tipsy-pointee"),
          d;
        if (!(d = !a)) {
          a: {
            for (; a = a.parentNode;)
              if (a == k) {
                a = !0;
                break a
              }
            a = !1
          }
          d = !a
        }
        d && h(this).remove()
      })
    };
    h.fn.tipsy.elementOptions =
      function(a, d) {
        return h.metadata ? h.extend({}, d, h(a).metadata()) : d
      };
    h.fn.tipsy.autoNS = function() {
      return h(this).offset().top > h(k).scrollTop() + h(c).height() / 2 ? "s" : "n"
    };
    h.fn.tipsy.autoWE = function() {
      return h(this).offset().left > h(k).scrollLeft() + h(c).width() / 2 ? "e" : "w"
    };
    h.fn.tipsy.autoBounds = function(a, d) {
      return function() {
        var e = d[0],
          b = 1 < d.length ? d[1] : !1,
          g = h(k).scrollTop() + a,
          f = h(k).scrollLeft() + a,
          m = h(this);
        m.offset().top < g && (e = "n");
        m.offset().left < f && (b = "w");
        h(c).width() + h(k).scrollLeft() - m.offset().left <
          a && (b = "e");
        h(c).height() + h(k).scrollTop() - m.offset().top < a && (e = "s");
        return e + (b ? b : "")
      }
    };
    return f
  }({}, p, y));
  k.register("$21", function(f, c, I) {
    var n = {
      401: "You've been logged out",
      422: "Invalid data sent to server",
      404: "Not Found",
      500: "Server Error",
      502: "Bad Gateway",
      503: "Service unavailable",
      504: "Gateway timeout"
    };
    f.getErrors = function() {
      return n
    };
    f.jsonLink = function(b) {
      if (!b) return "";
      b = b.split("?");
      b[0] = b[0].replace(/(\.[a-z0-9]{1,4})?$/i, ".json");
      return b.join("?")
    };
    f.errorData = function(b, g, a) {
      var d,
        e;
      a = b.responseText;
      g = b.status;
      if (!a && 0 === g) return null;
      try {
        d = h.parseJSON(a) || {}
      } catch (l) {
        d = {}, e = n[b.status] || l.message || l
      }
      d.error = e || d.error || d.statusText || b.statusText || n[g] || "Unknown Error";
      return d
    };
    f.ajax = function(b, g, a, d) {
      function e() {
        a && a()
      }

      function l(a) {
        a.alert && alert(a.alert);
        var b = a.success;
        b && k.require("$31", "growl.js").success.apply(this, b.push ? b : [b]);
        b = d || h(I.body);
        b.trigger("locoAjaxSuccess", [a]);
        var l = a.events;
        if (l && l.length)
          for (var g, t = k.require("$28", "ga.js"); g = l.shift();) b.trigger(g, [a]), t.event("ajax", g);
        if (b = a.download) c.location.assign(b);
        else if (b = a.redirect)
          if (0 === b.indexOf("/modal/")) a.modal = {
            url: b
          };
          else return c.location.assign(b), !1;
        else if (a.reload) return c.location.reload(), !1;
        (b = a.modal) && k.require("$29", "modal.js").replace(b);
        e();
        return !0
      }

      function s(a, d, b) {
        if ("abort" !== d) {
          var s = a.status,
            t;
          if (401 === s) k.require("$31", "growl.js").login(), g && !1 === g(null, n[s], s, a) && e();
          else {
            if ("parsererror" === d) c.console && console.error && console.error(s, a.responseText), t = 404 === s ? "Ajax service not found" :
              /^\s+Fatal error/.test(a.responseText) ? "Fatal server error from Ajax request" : "Bad Ajax response";
            else {
              var h = f.errorData(a, d, b);
              h && h.error && (t = h.error)
            }
            "function" === typeof g && !1 === g(null, t, s, a) ? e() : h && h.data && !l(h.data) || (alert(t || "Unknown Ajax error"), e())
          }
        }
      }(b.headers || (b.headers = {}))["X-Loco-Csrf"] = c.loco && F.csrf || "";
      b.error = s;
      b.success = function(a, d, b) {
        if (!a || "object" !== typeof a) return s(b, "unknown");
        (a.status || a.error) && alert(a.error || a.statusText || b.statusText || n[a.status] || "Unknown Error");
        "function" === typeof g && !1 === g(a && a.data ? a.data : a, null, d, b) ? e() : a && a.data ? l(a.data) : e()
      }; - 1 !== b.url.indexOf(".json") && (b.dataType = "json");
      return h.ajax(b)
    };
    return f
  }({}, p, y));
  k.register("$29", function(f, c, I) {
    function n(a) {
      a.stopPropagation();
      a.preventDefault();
      return !1
    }

    function b() {
      l || (l = k.require("$36", "overlay.js"), l.listen(d));
      return l
    }

    function g() {
      var a = m.length - 1,
        d = m[a],
        e = h('<a class="has-icon icon-back" data-gravity="w">Back</a>').attr("href", d[0]).attr("title", d[1]).click(function(e) {
          if (m[a] ===
            d && B()) return n(e)
        });
      l.enableNav(e);
      k.require("$11", "tooltip.js").init(e)
    }

    function a(a, d) {
      b().autoSize();
      var e = l.init();
      k.require("$17", "html.js").init(e);
      m.length && g();
      e.find("[data-script]").each(function(a, e) {
        e = h(e);
        for (var b = -1, l, g = e.attr("data-script").split(" "); ++b < g.length;) l = g[b], z[l] ? z[l](e, d || {}) : alert("Unknown script " + l)
      });
      e.trigger("locoModalLoaded", [l, a || "", d || {}]);
      var c, q = e.find("form")[0],
        v;
      if (q) a: for (e = 0; e < q.elements.length; e++) switch (c = q.elements[e], c.type) {
        case "text":
        case "email":
        case "textarea":
          v =
            Number(c.getAttribute("tabindex"));
          if (isNaN(v) || 100 > v) continue a;
          h(c).focus();
          break a
      }
    }

    function d() {
      q = null;
      m = [];
      return !0
    }

    function e(a) {
      var d = h(a.currentTarget),
        e = d.attr("data-modal");
      if ("back" === e) {
        if (B()) return n(a);
        e = "close"
      }
      if ("close" === e) {
        t();
        var b = d.attr("href");
        if (b && -1 !== b.indexOf("#!")) return !0
      } else {
        var l = "submit" === a.type,
          g = d.attr("title") || d.attr("data-title"),
          b = d.attr("href") || d.attr("action"),
          c = l ? d.serialize() : "",
          d = l ? d.attr("method") : "get";
        e || (e = b.split("/").slice(1, 4).join("-"));
        u(b,
          g, d, c, "modal " + e)
      }
      return n(a)
    }
    var l, s = k.require("$28", "ga.js"),
      z = {},
      m = [],
      q, u = f.load = function(d, e, g, c, t) {
        var v = q;
        q = [].slice.call(arguments);
        v && d !== v[0] && (m.push(v), d += -1 === d.indexOf("?") ? "?" : "&", d += "r=" + encodeURIComponent(v[0]));
        b().open().title("Loading ..").disableClose().disableNav().css("modal").html('<div class="loading"></div>');
        t && l.width(null).css(t).autoSize();
        var v = d.split("#"),
          z = v[1];
        z && (d = v[0]);
        var v = k.require("$21", "http.js"),
          B = {
            type: g || "get",
            data: c || "",
            url: v.jsonLink(d)
          };
        v.ajax(B, function(b,
          v, f) {
          var B = b && b.html;
          if (!B) return b && b.redirect ? (q = m.pop() || null, u(b.redirect, e, g, c, t)) : (b = h('<h3 class="error"></h3>').text(v || "Unknown error"), l.enableClose().title("Error " + f || "?").html("").append(b)), !1;
          e = b.title || e || "Untitled";
          q && (q[1] = e);
          l.enableClose().title(e, b.icon).html(B);
          f = b.js || {};
          z && (f["#"] = z);
          a(d, f);
          s.page(d, e);
          l.init().one("overlayClosed", function() {
            s.reset()
          });
          return !0
        });
        return f
      },
      t = f.close = function() {
        b().close();
        return f
      },
      B = f.back = function() {
        if (previous = m.pop()) return q = m[m.length -
          2], u.apply(null, previous), !0
      };
    f.reload = function() {
      q && u.apply(null, q)
    };
    f.initLink = function(a) {
      a.click(e)
    };
    f.initForm = function(a) {
      h(a).submit(e)
    };
    f.replace = function(d) {
      b();
      var e = d && d.html,
        g = d && d.url,
        c = d && d.title,
        q = d && d.action;
      if (g) d = d && d.css || g.split("/").slice(1, 4).join("-"), u(g, c, "", "", d);
      else if (e) l.open().html(e), c && l.enableClose().title(c), a("", d && d.js);
      else if ("function" === typeof f[q]) f[q]()
    };
    f.find = function(a) {
      return b().init().find(a)
    };
    f.script = function(a, d) {
      if (d) {
        if ("function" !== typeof d.run) throw Error(a +
          " macro has no run function");
        z[a] = d.run;
        return f
      }
      return z[a]
    };
    return f
  }({}, p, y));
  k.register("$8", function(f, c, k) {
    f.listen = function(f, b) {
      function g() {
        u[l ? "show" : "hide"]()
      }

      function a(a) {
        q && f.setAttribute("size", a.length || 1);
        l = a;
        g();
        return a
      }

      function d() {
        s = null;
        b(l)
      }

      function e() {
        var e = f.value;
        m && e === m && (e = "");
        e !== l && (s && clearTimeout(s), a(e), z ? s = setTimeout(d, z) : d())
      }
      var l, s;
      f = f instanceof jQuery ? f[0] : f;
      var z = 150,
        m = c.attachEvent && f.getAttribute("placeholder"),
        q = 1 === Number(f.size),
        u = h('<a href="#clear" tabindex="-1" class="icon clear"><span>clear</span></a>').click(function(a) {
          f.value =
            "";
          e();
          return !1
        });
      a(f.value);
      h(f).on("input blur focus", function() {
        e();
        return !0
      }).after(u);
      g();
      return {
        delay: function(a) {
          z = a
        },
        ping: function(b) {
          b ? (s && clearTimeout(s), b = f.value, m && b === m && (b = ""), a(b), d(), b = void 0) : b = e();
          return b
        },
        val: function(d) {
          if (null == d) return l;
          s && clearTimeout(s);
          f.value = a(d);
          g()
        },
        el: function() {
          return f
        },
        blur: function(a) {
          return h(f).on("blur", a)
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$20", {
    "\u00e1": "a",
    "\u00e0": "a",
    "\u0103": "a",
    "\u1eaf": "a",
    "\u1eb1": "a",
    "\u1eb5": "a",
    "\u1eb3": "a",
    "\u00e2": "a",
    "\u1ea5": "a",
    "\u1ea7": "a",
    "\u1eab": "a",
    "\u1ea9": "a",
    "\u01ce": "a",
    "\u00e5": "a",
    "\u01fb": "a",
    "\u00e4": "a",
    "\u01df": "a",
    "\u00e3": "a",
    "\u0227": "a",
    "\u01e1": "a",
    "\u0105": "a",
    "\u0101": "a",
    "\u1ea3": "a",
    "\u0201": "a",
    "\u0203": "a",
    "\u1ea1": "a",
    "\u1eb7": "a",
    "\u1ead": "a",
    "\u1e01": "a",
    "\u01fd": "\u00e6",
    "\u01e3": "\u00e6",
    "\u1e03": "b",
    "\u1e05": "b",
    "\u1e07": "b",
    "\u0107": "c",
    "\u0109": "c",
    "\u010d": "c",
    "\u010b": "c",
    "\u00e7": "c",
    "\u1e09": "c",
    "\u010f": "d",
    "\u1e0b": "d",
    "\u1e11": "d",
    "\u0111": "d",
    "\u1e0d": "d",
    "\u1e13": "d",
    "\u1e0f": "d",
    "\u00f0": "d",
    "\ua77a": "d",
    "\u01c6": "\u01f3",
    "\u00e9": "e",
    "\u00e8": "e",
    "\u0115": "e",
    "\u00ea": "e",
    "\u1ebf": "e",
    "\u1ec1": "e",
    "\u1ec5": "e",
    "\u1ec3": "e",
    "\u011b": "e",
    "\u00eb": "e",
    "\u1ebd": "e",
    "\u0117": "e",
    "\u0229": "e",
    "\u1e1d": "e",
    "\u0119": "e",
    "\u0113": "e",
    "\u1e17": "e",
    "\u1e15": "e",
    "\u1ebb": "e",
    "\u0205": "e",
    "\u0207": "e",
    "\u1eb9": "e",
    "\u1ec7": "e",
    "\u1e19": "e",
    "\u1e1b": "e",
    "\u1e1f": "f",
    "\ua77c": "f",
    "\u01f5": "g",
    "\u011f": "g",
    "\u011d": "g",
    "\u01e7": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u1e21": "g",
    "\ua7a1": "g",
    "\u1d79": "g",
    "\u0125": "h",
    "\u021f": "h",
    "\u1e27": "h",
    "\u1e23": "h",
    "\u1e29": "h",
    "\u0127": "h",
    "\u210f": "h",
    "\u1e25": "h",
    "\u1e2b": "h",
    "\u1e96": "h",
    "\u00ed": "i",
    "\u00ec": "i",
    "\u012d": "i",
    "\u00ee": "i",
    "\u01d0": "i",
    "\u00ef": "i",
    "\u1e2f": "i",
    "\u0129": "i",
    "\u012f": "i",
    "\u012b": "i",
    "\u1ec9": "i",
    "\u0209": "i",
    "\u020b": "i",
    "\u1ecb": "i",
    "\u1e2d": "i",
    "\u0135": "j",
    "\u01f0": "j",
    "\u1e31": "k",
    "\u01e9": "k",
    "\u0137": "k",
    "\ua7a3": "k",
    "\u1e33": "k",
    "\u1e35": "k",
    "\u013a": "l",
    "\u013e": "l",
    "\u013c": "l",
    "\u0142": "l",
    "\u1e37": "l",
    "\u1e39": "l",
    "\u1e3d": "l",
    "\u1e3b": "l",
    "\u0140": "l",
    "\u1e3f": "m",
    "\u1e41": "m",
    "\u1e43": "m",
    "\u0144": "n",
    "\u01f9": "n",
    "\u0148": "n",
    "\u00f1": "n",
    "\u1e45": "n",
    "\u0146": "n",
    "\ua7a5": "n",
    "\u1e47": "n",
    "\u1e4b": "n",
    "\u1e49": "n",
    "\u00f3": "o",
    "\u00f2": "o",
    "\u014f": "o",
    "\u00f4": "o",
    "\u1ed1": "o",
    "\u1ed3": "o",
    "\u1ed7": "o",
    "\u1ed5": "o",
    "\u01d2": "o",
    "\u00f6": "o",
    "\u022b": "o",
    "\u0151": "o",
    "\u00f5": "o",
    "\u1e4d": "o",
    "\u1e4f": "o",
    "\u022d": "o",
    "\u022f": "o",
    "\u0231": "o",
    "\u00f8": "o",
    "\u01ff": "o",
    "\u01eb": "o",
    "\u01ed": "o",
    "\u014d": "o",
    "\u1e53": "o",
    "\u1e51": "o",
    "\u1ecf": "o",
    "\u020d": "o",
    "\u020f": "o",
    "\u01a1": "o",
    "\u1edb": "o",
    "\u1edd": "o",
    "\u1ee1": "o",
    "\u1edf": "o",
    "\u1ee3": "o",
    "\u1ecd": "o",
    "\u1ed9": "o",
    "\u1e55": "p",
    "\u1e57": "p",
    "\u0155": "r",
    "\u0159": "r",
    "\u1e59": "r",
    "\u0157": "r",
    "\ua7a7": "r",
    "\u0211": "r",
    "\u0213": "r",
    "\u1e5b": "r",
    "\u1e5d": "r",
    "\u1e5f": "r",
    "\ua783": "r",
    "\u015b": "s",
    "\u1e65": "s",
    "\u015d": "s",
    "\u0161": "s",
    "\u1e67": "s",
    "\u1e61": "s",
    "\u015f": "s",
    "\ua7a9": "s",
    "\u1e63": "s",
    "\u1e69": "s",
    "\u0219": "s",
    "\u017f": "s",
    "\ua785": "s",
    "\u1e9b": "s",
    "\u0165": "t",
    "\u1e97": "t",
    "\u1e6b": "t",
    "\u0163": "t",
    "\u1e6d": "t",
    "\u021b": "t",
    "\u1e71": "t",
    "\u1e6f": "t",
    "\ua787": "t",
    "\u00fa": "u",
    "\u00f9": "u",
    "\u016d": "u",
    "\u00fb": "u",
    "\u01d4": "u",
    "\u016f": "u",
    "\u00fc": "u",
    "\u01d8": "u",
    "\u01dc": "u",
    "\u01da": "u",
    "\u01d6": "u",
    "\u0171": "u",
    "\u0169": "u",
    "\u1e79": "u",
    "\u0173": "u",
    "\u016b": "u",
    "\u1e7b": "u",
    "\u1ee7": "u",
    "\u0215": "u",
    "\u0217": "u",
    "\u01b0": "u",
    "\u1ee9": "u",
    "\u1eeb": "u",
    "\u1eef": "u",
    "\u1eed": "u",
    "\u1ef1": "u",
    "\u1ee5": "u",
    "\u1e73": "u",
    "\u1e77": "u",
    "\u1e75": "u",
    "\u1e7d": "v",
    "\u1e7f": "v",
    "\u1e83": "w",
    "\u1e81": "w",
    "\u0175": "w",
    "\u1e98": "w",
    "\u1e85": "w",
    "\u1e87": "w",
    "\u1e89": "w",
    "\u1e8d": "x",
    "\u1e8b": "x",
    "\u00fd": "y",
    "\u1ef3": "y",
    "\u0177": "y",
    "\u1e99": "y",
    "\u00ff": "y",
    "\u1ef9": "y",
    "\u1e8f": "y",
    "\u0233": "y",
    "\u1ef7": "y",
    "\u1ef5": "y",
    "\u017a": "z",
    "\u1e91": "z",
    "\u017e": "z",
    "\u017c": "z",
    "\u1e93": "z",
    "\u1e95": "z",
    "\u01ef": "\u0292",
    "\u1f00": "\u03b1",
    "\u1f04": "\u03b1",
    "\u1f84": "\u03b1",
    "\u1f02": "\u03b1",
    "\u1f82": "\u03b1",
    "\u1f06": "\u03b1",
    "\u1f86": "\u03b1",
    "\u1f80": "\u03b1",
    "\u1f01": "\u03b1",
    "\u1f05": "\u03b1",
    "\u1f85": "\u03b1",
    "\u1f03": "\u03b1",
    "\u1f83": "\u03b1",
    "\u1f07": "\u03b1",
    "\u1f87": "\u03b1",
    "\u1f81": "\u03b1",
    "\u03ac": "\u03b1",
    "\u1f71": "\u03b1",
    "\u1fb4": "\u03b1",
    "\u1f70": "\u03b1",
    "\u1fb2": "\u03b1",
    "\u1fb0": "\u03b1",
    "\u1fb6": "\u03b1",
    "\u1fb7": "\u03b1",
    "\u1fb1": "\u03b1",
    "\u1fb3": "\u03b1",
    "\u1f10": "\u03b5",
    "\u1f14": "\u03b5",
    "\u1f12": "\u03b5",
    "\u1f11": "\u03b5",
    "\u1f15": "\u03b5",
    "\u1f13": "\u03b5",
    "\u03ad": "\u03b5",
    "\u1f73": "\u03b5",
    "\u1f72": "\u03b5",
    "\u1f20": "\u03b7",
    "\u1f24": "\u03b7",
    "\u1f94": "\u03b7",
    "\u1f22": "\u03b7",
    "\u1f92": "\u03b7",
    "\u1f26": "\u03b7",
    "\u1f96": "\u03b7",
    "\u1f90": "\u03b7",
    "\u1f21": "\u03b7",
    "\u1f25": "\u03b7",
    "\u1f95": "\u03b7",
    "\u1f23": "\u03b7",
    "\u1f93": "\u03b7",
    "\u1f27": "\u03b7",
    "\u1f97": "\u03b7",
    "\u1f91": "\u03b7",
    "\u03ae": "\u03b7",
    "\u1f75": "\u03b7",
    "\u1fc4": "\u03b7",
    "\u1f74": "\u03b7",
    "\u1fc2": "\u03b7",
    "\u1fc6": "\u03b7",
    "\u1fc7": "\u03b7",
    "\u1fc3": "\u03b7",
    "\u1f30": "\u03b9",
    "\u1f34": "\u03b9",
    "\u1f32": "\u03b9",
    "\u1f36": "\u03b9",
    "\u1f31": "\u03b9",
    "\u1f35": "\u03b9",
    "\u1f33": "\u03b9",
    "\u1f37": "\u03b9",
    "\u03af": "\u03b9",
    "\u1f77": "\u03b9",
    "\u1f76": "\u03b9",
    "\u1fd0": "\u03b9",
    "\u1fd6": "\u03b9",
    "\u03ca": "\u03b9",
    "\u0390": "\u03b9",
    "\u1fd3": "\u03b9",
    "\u1fd2": "\u03b9",
    "\u1fd7": "\u03b9",
    "\u1fd1": "\u03b9",
    "\u1f40": "\u03bf",
    "\u1f44": "\u03bf",
    "\u1f42": "\u03bf",
    "\u1f41": "\u03bf",
    "\u1f45": "\u03bf",
    "\u1f43": "\u03bf",
    "\u03cc": "\u03bf",
    "\u1f79": "\u03bf",
    "\u1f78": "\u03bf",
    "\u1fe4": "\u03c1",
    "\u1fe5": "\u03c1",
    "\u1f50": "\u03c5",
    "\u1f54": "\u03c5",
    "\u1f52": "\u03c5",
    "\u1f56": "\u03c5",
    "\u1f51": "\u03c5",
    "\u1f55": "\u03c5",
    "\u1f53": "\u03c5",
    "\u1f57": "\u03c5",
    "\u03cd": "\u03c5",
    "\u1f7b": "\u03c5",
    "\u1f7a": "\u03c5",
    "\u1fe0": "\u03c5",
    "\u1fe6": "\u03c5",
    "\u03cb": "\u03c5",
    "\u03b0": "\u03c5",
    "\u1fe3": "\u03c5",
    "\u1fe2": "\u03c5",
    "\u1fe7": "\u03c5",
    "\u1fe1": "\u03c5",
    "\u1f60": "\u03c9",
    "\u1f64": "\u03c9",
    "\u1fa4": "\u03c9",
    "\u1f62": "\u03c9",
    "\u1fa2": "\u03c9",
    "\u1f66": "\u03c9",
    "\u1fa6": "\u03c9",
    "\u1fa0": "\u03c9",
    "\u1f61": "\u03c9",
    "\u1f65": "\u03c9",
    "\u1fa5": "\u03c9",
    "\u1f63": "\u03c9",
    "\u1fa3": "\u03c9",
    "\u1f67": "\u03c9",
    "\u1fa7": "\u03c9",
    "\u1fa1": "\u03c9",
    "\u03ce": "\u03c9",
    "\u1f7d": "\u03c9",
    "\u1ff4": "\u03c9",
    "\u1f7c": "\u03c9",
    "\u1ff2": "\u03c9",
    "\u1ff6": "\u03c9",
    "\u1ff7": "\u03c9",
    "\u1ff3": "\u03c9",
    "\u0491": "\u0433",
    "\u0450": "\u0435",
    "\u0451": "\u0435",
    "\u04c2": "\u0436",
    "\u045d": "\u0438",
    "\u04e3": "\u0438",
    "\u04ef": "\u0443"
  });
  k.register("$7", function(f, c, h) {
    f.init = function() {
      function c(a) {
        return f[a] || a
      }

      function b(a) {
        return String(a || "").toLowerCase().replace(e,
          c)
      }

      function g(a, d, e) {
        for (var b = a.split(l), g = b.length; 0 !== g--;)(a = b[g]) && null == e[a] && (d.push(a), e[a] = !0);
        return d
      }

      function a(a, e) {
        for (var l = [], c = {}, f, s = e.length; 0 !== s--;)(f = e[s]) && g(b(f), l, c);
        d[a] = l
      }
      var d = [],
        e = /[^a-z0-9]/g,
        l = /[\-_\s.?!;:,*^+=~`"(){}<>\[\]\/\\\u00a0\u1680\u180e\u2000-\u206f\u2e00-\u2e7f\u3000-\u303f]+/,
        f = k.require("$20", "flatten.json");
      return {
        find: function(a, e) {
          var l = [],
            c = -1,
            f = d,
            s = f.length,
            r, h, A, C, n, v, D = g(b(a), [], {}),
            G = D.length,
            k = e ? !0 : !1;
          a: for (; ++c < s;)
            if (A = f[c], null != A && (C = A.length)) {
              n =
                0;
              b: for (; n < G; n++) {
                v = D[n];
                for (r = 0; r < C; r++)
                  if (h = A[r], 0 === h.indexOf(v)) continue b;
                continue a
              }
              l.push(k ? e[c] : c)
            }
          return l
        },
        add: function(a, e) {
          d[a] = g(b(e), [], {})
        },
        push: function(e) {
          a(d.length, e)
        },
        index: function(d, e) {
          a(d, e)
        },
        size: function() {
          return d.length
        },
        clear: function() {
          d = []
        },
        remove: function(a) {
          d[a] = null
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$22", function(f, c, h) {
    f.create = function() {
      var c = [],
        b = k.require("$7", "fulltext.js").init();
      return {
        add: function(g, a) {
          b.add(c.length, a);
          c.push(g);
          return this
        },
        find: function(g) {
          return b.find(g,
            c)
        },
        clear: function() {
          c = [];
          b.clear();
          return this
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$10", function(f, c, p) {
    function n(b) {
      -1 === b.indexOf("?") && (b = "/auto/" + b + ".json?q=");
      this.url = b;
      this.dead = {}
    }

    function b() {
      this.dict = k.require("$22", "dict.js").create()
    }
    f.init = function(g) {
      function a() {
        if ("hint" !== G) {
          var a = v.val() && !(J && J.val()) && null == C && !r;
          U[a ? "addClass" : "removeClass"]("error")
        }
      }

      function d(a) {
        J && J.val(a)
      }

      function e() {
        p.show();
        var a = v.outerWidth(!1),
          d = v.outerHeight(!1),
          e = v.css("margin-top");
        e && (e = parseInt(e),
          isNaN(e) || (d += e));
        a -= 2;
        p.css("top", d + "px").css("width", a + "px");
        r = !0
      }

      function l() {
        p.hide();
        r = !1
      }

      function c() {
        p.html("");
        l();
        B = 0;
        w = C = null
      }

      function f(d) {
        c();
        var b;
        for (b = 0; b < d.length; b++) {
          var l = b,
            g = d[b],
            v = g.value,
            r = g.lang || v.lang,
            u = h('<span class="label"></span>').text(g.label),
            t = h('<div class="auto-comp-result"></div>'),
            z = void 0,
            A = void 0;
          if (A = g.icon) z = h("<span></span>").attr("class", A).appendTo(t), r ? (z.attr("lang", r), g.lang = r) : -1 !== A.indexOf("lang-" + v) && (z.attr("lang", v), g.lang = v);
          for (A in g) t.data(A,
            g[A]);
          t.append(u);
          m(l, t)
        }(B = d.length) ? (E && e(), q(0)) : (q(null), a(), U.trigger("locoAutonone", []))
      }

      function m(a, d) {
        p.append(d);
        d.click(function(e) {
          e.stopPropagation();
          q(a, d);
          t();
          return !1
        });
        return d
      }

      function q(a, e) {
        w && (w.removeClass("selected"), w = null);
        C = null;
        null == a ? d("") : (e || (e = p.find("div.auto-comp-result").eq(a)), e.length && (e.addClass("selected"), C = a, w = e))
      }

      function u(a) {
        if (B) {
          var d = B - 1;
          null == C ? a = 0 < a ? 0 : d : (a = C + a, 0 > a ? a = d : a > d && (a = 0));
          return q(a)
        }
      }

      function t() {
        if (null == C) I.val(""), d("");
        else {
          var e = p.find("div.auto-comp-result").eq(C),
            b = e.data() || {
              label: "Error"
            },
            g = b.value,
            f = b.label;
          d(g);
          I.val(f);
          l();
          e = e.clone();
          e.data(b);
          c();
          m(0, e);
          B = 1;
          q(0, e);
          a();
          e.trigger("locoAutocomp", [g, f, e])
        }
      }
      var B = 0,
        r = !1,
        E = !1,
        A = g.form,
        C = null,
        w = null,
        v = h(g),
        D = v.attr("name"),
        G = v.attr("data-mode"),
        H = v.attr("data-provider"),
        J = "hint" !== G && h('<input type="hidden" value="" name="' + D + '" />').appendTo(A),
        U = h('<div class="auto-comp-wrap"></div>').replaceAll(v),
        p = h('<div class="auto-comp-drop"></div>');
      H && (H = new n(H));
      J && v.attr("name", "_" + D);
      v.attr("autocomplete") ||
        v.attr("autocomplete", "off");
      U.append(v).append(p);
      l();
      v.focus(function(a) {
        E = !0;
        1 < B && e()
      }).blur(function(d) {
        E = !1;
        a()
      }).keydown(function(a) {
        function d() {
          a.preventDefault();
          a.stopPropagation();
          return !1
        }
        switch (a.keyCode) {
          case 27:
            r && (a.stopPropagation(), l(), v.blur());
            break;
          case 40:
            B && (r ? u(1) : e());
            break;
          case 38:
            r && u(-1);
            break;
          case 13:
            if (r) return t(), d();
            if (!C && "hint" !== G) return d()
        }
        return !0
      });
      var I = k.require("$8", "LocoTextListener.js").listen(v, function(a) {
        H && H.fetch(a, f)
      });
      (A = v.attr("data-pre")) && (A =
        h.parseJSON(A)) && A.value && A.label ? (f([A]), t()) : !g.value || J && J.val() || !H || H.fetch(g.value, function(a) {
        f(a);
        t()
      });
      return {
        $: v,
        val: function() {
          return J && J.val()
        },
        clear: c,
        reset: function() {
          c();
          v.val("");
          d("");
          I.ping()
        },
        force: function(a, e) {
          c();
          d(e || "");
          I.val(a)
        },
        preload: function(a) {
          B && c();
          H = new b;
          var d, e;
          for (d in a) e = a[d], H.add(e)
        },
        mode: function(a) {
          G = a
        },
        provide: function(a) {
          H = new n(a)
        }
      }
    };
    n.prototype.fetch = function(b, a) {
      if (!b) return a && a([]), this.dead = {}, this;
      var d, e = this.dead;
      for (d in e)
        if (0 === b.indexOf(d)) return a &&
          a([]), this;
      d = {
        dataType: "json",
        url: this.url + encodeURIComponent(b)
      };
      k.require("$21", "http.js").ajax(d, function(d) {
        var c = d && d.results;
        c && (a && d.query && d.query === b && a(d.results), c.length || (e[b] = 0));
        return !0
      });
      return this
    };
    b.prototype.add = function(b) {
      var a = b.fulltext || b.label || b.value;
      a && this.dict.add(b, a)
    };
    b.prototype.fetch = function(b, a) {
      var d = b ? this.dict.find(b) : [];
      a && a(d);
      return this
    };
    return f
  }({}, p, y));
  k.register("$9", function(f, c, p) {
    function n(a) {
      a.stopPropagation();
      a.preventDefault();
      return !1
    }

    function b(a,
      d, e) {
      if (e = e || a.getElement(d)) e.off().mouseup(function(e) {
        e.stopPropagation();
        a.selectIndex(d, !0);
        return !1
      }).mouseover(function() {
        h(this).addClass("over");
        a.hover = d;
        return !0
      }).mouseout(function() {
        h(this).removeClass("over");
        a.hover = -1;
        return !0
      }), e = null;
      return a
    }

    function g(a) {
      if (a) {
        var d, e = a[0],
          b = e.id,
          g = e.title,
          c = [],
          f = [],
          q = -1,
          u = e.options.length,
          t, B = this.selectedIcon || "";
        this.id = b || "";
        this.name = e.name || "";
        this.prefix = e.getAttribute("data-prefix");
        for (this.defaultIcon = e.getAttribute("data-icon") || "icon no-icon"; ++q <
          u;) d = e.options[q], t = d.disabled, d.selected && c.push(q), d = h(d), f.push([d.val(), d.text(), d.attr("data-icon") || B, t, d.attr("lang")]);
        this.hidden || (this.hidden = h('<input type="hidden" name="' + this.name + '" value="" />').appendTo(e.form));
        this.list = h('<ul class="clearfix"></ul>');
        this.icon = h('<span class="icon"> </span>');
        this.selection = h('<span class="label"></span>');
        this.handle = h('<a class="handle" href="#"></a>').attr("tabindex", a.attr("tabindex") || "").append(this.icon).append(this.selection);
        d = h('<div class="selector"></div>').addClass(e.className).append(this.handle).append(this.list).replaceAll(e);
        b && d.attr("id", b);
        g && a.hasClass("hastip") && (d.attr("title", g), k.require("$11", "tooltip.js").init(d, {
          gravity: a.attr("data-gravity") || "s",
          anchor: a.attr("data-anchor")
        }));
        this.wrapper = d;
        this.up = d.hasClass("up");
        for (this.clearOptions(); d = f.shift();) this.addOption.apply(this, d);
        this.enable();
        this.close();
        if (u = c.length)
          for (q = 0; q < u; q++) this.selectIndex(c[q]);
        else q = e.selectedIndex, null != q && 0 <= q && this.selectIndex(q)
      }
    }
    f.create = function(a) {
      return new g(a)
    };
    f.extend = function(a) {
      a.parent = g;
      a.prototype = new g
    };
    c = g.prototype;
    c.enable = function() {
      var a = this;
      a.handle.click(function(a) {
        a.preventDefault();
        return !1
      }).mouseover(function(d) {
        return a.onRollover(d)
      }).mouseout(function(d) {
        return a.onRollout(d)
      }).mousedown(function(d) {
        return a.onPress(d)
      }).keydown(function(d) {
        return a.onKeydown(d)
      });
      h(p).mouseup(function(d) {
        return a.onRelease(d)
      }).keydown(function(d) {
        return a.onGlobalKeydown(d)
      })
    };
    c.onRollover = function(a) {
      return this.over = !0
    };
    c.onRollout = function(a) {
      this.over = !1;
      return !0
    };
    c.onPress = function(a) {
      return this.active ?
        this.over ? (this.close(), a.stopPropagation(), a.preventDefault(), !1) : !0 : (this.open(), a.stopPropagation(), a.preventDefault(), this.handle.focus(), !1)
    };
    c.onRelease = function(a) {
      this.active && !this.over && this.close();
      return !0
    };
    c.onGlobalKeydown = function(a) {
      if (this.active) switch (a.keyCode) {
        case 27:
          return this.close(), n(a);
        case 40:
          return this.hoverNext(1), n(a);
        case 38:
          return this.hoverNext(-1), n(a);
        case 13:
          if (-1 != this.hover) return this.selectIndex(this.hover, !0), this.hoverItem(-1), this.close(), n(a)
      }
      return !0
    };
    c.onKeydown = function(a) {
      return this.active || 40 !== a.keyCode ? !0 : (this.open(), n(a))
    };
    c.open = function() {
      var a = this.list,
        d = this.handle,
        e = this.wrapper,
        b = e.data("tipsy"),
        g = d.outerWidth() || 0,
        c = a.outerWidth() || 0;
      this.active = !0;
      this.hover = -1;
      e.addClass("active");
      a.show();
      this.up ? a.css("top", "-" + a.outerHeight() + "px") : a.css("top", d.outerHeight() + "px");
      b && b.disable();
      g > c && (g -= c - a.width(), a.css("min-width", String(g) + "px"))
    };
    c.close = function() {
      var a = this.wrapper,
        d = a.data("tipsy");
      this.list.hide();
      this.active = !1; - 1 !== this.hover && (this.getElement(this.hover).removeClass("over"), this.hover = -1);
      a.removeClass("active");
      d && d.enable()
    };
    c.hoverItem = function(a, d) {
      -1 !== this.hover && this.getElement(this.hover).removeClass("over");
      this.hover = a; - 1 !== a && (d = d || this.getElement(a), d.addClass("over"))
    };
    c.hoverNext = function(a) {
      var d = this.options.length;
      if (d) {
        d -= 1;
        if (-1 == this.hover) a = 0 < a ? 0 : d;
        else {
          a = this.hover + a;
          if (0 > a) {
            this.close();
            return
          }
          a > d && (a = 0)
        }
        this.hoverItem(a)
      }
    };
    c.enableChange = function(a) {
      this.eventName = a;
      this.eventData =
        [].slice.call(arguments, 1);
      return this
    };
    c.enableConfirm = function(a) {
      this.confirm = a;
      return this
    };
    c.clearOptions = function() {
      this.index = {};
      this.length = 0;
      this.options = [];
      this.list.html("");
      this.hidden.val("");
      this.idx = this.hover = -1;
      return this
    };
    c.destroy = function() {
      this.clearOptions();
      this.hidden.remove()
    };
    c.addOption = function(a, d, e, l, g) {
      var c = this.options.length,
        f = h("<span></span>").addClass(e || "icon no-icon"),
        q = h('<span class="label"></span>').text(d || a),
        q = h("<li></li>").append(f).append(q).appendTo(this.list);
      g ? g = g.split("-").shift() : e && -1 !== e.indexOf("lang-" + a) && (g = a);
      g && f.attr("lang", g);
      q.attr("data-option", c);
      this.options[c] = {
        value: a,
        text: d,
        lang: g || "",
        icon: e
      };
      this.index[a] = c;
      this.length = c + 1;
      l ? this.disableIndex(c) : b(this, c, q);
      return c
    };
    c.disableOption = function(a) {
      return this.disableIndex(this.index[a])
    };
    c.disableIndex = function(a) {
      (a = this.getElement(a)) && a.addClass("disabled").off();
      return this
    };
    c.enableOption = function(a) {
      return this.enableIndex(this.index[a])
    };
    c.enableIndex = function(a) {
      return b(this,
        a)
    };
    c.reIndex = function() {
      this.index = {};
      this.length = 0;
      for (var a = this.options.length; 0 !== a--;) this.index[this.options[a].value] = a, this.length++
    };
    c.selectValue = function(a, d) {
      return this.selectIndex(this.index[a], d)
    };
    c.selectIndex = function(a, d) {
      var e = this.options[a];
      if (e) {
        var b = this,
          g = b.idx,
          c = e.value,
          f = e.icon || b.defaultIcon,
          q = function() {
            null != g && b.getElement(g).removeClass("active");
            b.getElement(a).addClass("active");
            b.setLabel(e.text).setIcon(f, e.lang);
            b.hidden.val(c);
            b.idx = a;
            d && b.change()
          };
        g === a ? b.hidden.val(c) :
          d ? "function" === typeof b.confirm ? b.confirm.call(null, e, function(a) {
            a && q()
          }) : b.beforeChange(c) && q() : q();
        b.active && b.close()
      }
      return this
    };
    c.setLabel = function(a) {
      this.selection.text(a);
      this.prefix && this.selection.prepend(h('<span class="prefix"></span>').text(this.prefix));
      return this
    };
    c.setIcon = function(a, d) {
      this.icon.attr("class", a).attr("lang", d || "");
      return this
    };
    c.val = function() {
      var a = this.options[this.idx];
      return a && a.value
    };
    c.change = function() {
      var a = this.val(),
        d = this.save,
        e = this.eventName || "change",
        b = [a].concat(this.eventData || []);
      this.wrapper.trigger(e, b);
      d && d(a);
      return this
    };
    c.beforeChange = function(a) {
      var d = h.Event("locoBeforeSelect");
      this.wrapper.trigger(d, [a]);
      return !d.isDefaultPrevented()
    };
    c.renameOption = function(a, d) {
      var e = this.index[a],
        b = this.options[e];
      b && (b.text = d, this.getElement(e).find("span.label").text(d), e === this.idx && this.setLabel(d));
      return this
    };
    c.removeOption = function(a) {
      var d = this.index[a],
        e = this.options[d];
      e && (a = this.val(), this.getElement(d).remove(), this.options.splice(d,
        1), this.reIndex(), a === e.value ? this.selectIndex(0, !0) : this.selectValue(a, !1))
    };
    c.getElement = function(a) {
      return this.list.find("li").eq(a)
    };
    c.getWrapper = function() {
      return this.wrapper
    };
    c.persist = function(a) {
      var d = this.id || this.name,
        e = a.fetch(d);
      null != e && this.selectValue(e, !0);
      this.save = function(e) {
        a.store(d, e)
      };
      return this
    };
    c.listen = function(a) {
      return this.on(this.eventName || "change", a)
    };
    c.on = function(a, d) {
      this.wrapper.on(a, d);
      return this
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$30", function(f, c, p) {
    function n(b) {
      var g =
        [],
        a = h([]);
      this.hidden = a;
      this.selected = g;
      this.selectedIcon = "icon icon-checkbox";
      this.constructor.call(this, b);
      this.wrapper.addClass("multi");
      for (var d, e, l, c = h('<input type="checkbox" name="' + this.name + '[]" />')[0], f = this.options, m = f.length, q = -1; ++q < m;) d = this.getElement(q)[0], l = c.cloneNode(!0), g[q] && (l.checked = !0), l.setAttribute("value", f[q].value), a.push(d.appendChild(l));
      (e = this.defaultIcon) && this.setIcon(e);
      (e = b.attr("title")) ? this.setLabel(e): this.wrapper.addClass("no-title")
    }
    f.create = function(b) {
      return new n(b)
    };
    k.require("$9", "LocoSelector.js").extend(n);
    c = n.prototype;
    c.selectIndex = function(b, g) {
      return this.setIndexState(b, !this.selected[b], g)
    };
    c.setIndexState = function(b, g, a) {
      var d = this.options[b],
        e = this.getElement(b),
        l = this.hidden[b],
        c = this.selected;
      d && g !== c[b] && (c[b] = g, e[g ? "addClass" : "removeClass"]("checked"), l && (l.checked = g), a && this.change());
      return this
    };
    c.selectValue = function(b, g) {
      if (null == b.pop) return n.parent.prototype.selectValue.call(this, b, g);
      for (var a = this.selected.slice(), d = this.options.length,
          e = !1, l = -1, c = -1; ++l < d;) a[l] && (e = !0), a[l] = !1;
      if (d = b.length)
        for (; ++c < d;) l = this.index[b[c]], !1 === a[l] && (e = a[l] = !0);
      if (e) {
        for (l in a) this.setIndexState(l, a[l]);
        g && this.change()
      }
      return this
    };
    c.val = function() {
      for (var b = [], c = this.options, a = this.selected, d = a.length, e = -1; ++e < d;) a[e] && b.push(c[e].value);
      return b
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$17", function(f, c, p) {
    var n = c.ieVersion;
    f.ie = function(b) {
      return b ? n <= b : n
    };
    var b = f.init = function(c) {
      c ? c instanceof jQuery || (c = h(c)) : c = h(p.body);
      var a = k.require("$28",
          "ga.js"),
        d = k.require("$18", "forms.js"),
        e = k.require("$29", "modal.js"),
        l = k.require("$10", "LocoAutoComplete.js"),
        s = k.require("$9", "LocoSelector.js"),
        z = k.require("$30", "LocoMultiSelector.js"),
        m = k.require("$11", "tooltip.js");
      c.find("form").each(function(a, b) {
        var c = h(b);
        n && 10 > n && d.placeholders(c);
        b.getAttribute("data-modal") ? e.initForm(b) : b.action && 0 !== c.attr("action").indexOf("#") && !b.target && d.jsonify(b);
        c.hasClass("hasreveal") && d.revealify(c);
        c.find("input.auto-comp").each(function(a, d) {
          l.init(d)
        });
        c.find("select.selector").each(function(a, d) {
          d.hasAttribute("multiple") ? z.create(h(d)) : s.create(h(d))
        });
        c.find("button.hastip").each(function(a, d) {
          m.init(h(d))
        })
      });
      c.find("a").each(function(d, l) {
        -1 !== l.className.indexOf("hastip") && m.init(h(l));
        if (-1 !== l.href.indexOf("/modal/") || l.getAttribute("data-modal")) e.initLink(h(l));
        else {
          a.link(l);
          var c = l.getAttribute("data-ajax-target");
          c && (c = h("#" + c), h(l).click(function(a) {
            a.preventDefault();
            c.addClass("loading");
            h.get(l.href, function(a) {
              a = f.$(a).replaceAll(c);
              b(a);
              a.trigger("locoAhah")
            });
            return !1
          }))
        }
      });
      d = e = l = c = null;
      return f
    };
    f.$ = function(b) {
      return h(c.innerShiv ? innerShiv(b, !1) : b)
    };
    h.fn._html = function(g) {
      return null != g ? (g = this.html(c.innerShiv ? innerShiv(g, !1) : g), b(this), g) : j.html()
    };
    h.fn.macro = function(b, a) {
      if ("function" !== typeof b.run) throw Error("macro has no run function");
      b.run(this, a || {});
      return this
    };
    f.el = function(b, a) {
      var d = p.createElement(b || "div");
      a && (d.className = a);
      return d
    };
    f.txt = function(b) {
      return p.createTextNode(b || "")
    };
    f.h = function() {
      function b() {
        e =
          /[<>&]/g;
        l = /(\r\n|\n|\r)/g;
        c = /(?:https?):\/\/([a-zA-Z0-9\-_\.\?%~&;=\/]+(?:#.*)?)/g;
        b = null
      }

      function a(a) {
        return "&#" + a.charCodeAt(0) + ";"
      }

      function d(a, d) {
        return '<a href="' + a + '">' + d + "</a>"
      }
      var e, l, c;
      return function(f, m) {
        b && b();
        var q = f.replace(e, a);
        m && (q = q.replace(l, "<br />").replace(c, d));
        return q
      }
    }();
    f.noop = function(b) {
      b && (b.preventDefault(), b.stopPropagation(), h(b.target).blur());
      return !1
    };
    return f
  }({}, p, y));
  k.register("$18", function(f, c, p) {
    function n(a) {
      function d() {
        a.value === c && (a.value = "", b.removeClass("placeheld"));
        return !0
      }

      function e() {
        "" === a.value && (a.value = c, b.addClass("placeheld"));
        return !0
      }
      var b = h(a);
      if (!b.hasClass("auto-comp")) {
        var c = b.attr("placeholder");
        if (c) return b.focus(d).blur(e), e(), {
          kill: function() {
            d();
            b.off("focus", d).off("blur", e)
          }
        }
      }
    }
    var b = f.enable = function(a) {
        function d(a, d) {
          d.getAttribute("data-was-disabled") || (d.disabled = !1)
        }
        a.find(".button").removeClass("loading");
        a.find("button").each(d);
        a.find("input").each(d);
        a.find("select").each(d);
        a.find("textarea").each(d);
        c.attachEvent && a.hasClass("has-placeholders") &&
          f.placeholders(a);
        delete a._disabled
      },
      g = f.disable = function(a) {
        function d(a, d) {
          d.disabled ? d.setAttribute("data-was-disabled", "true") : d.disabled = !0
        }
        a._disabled || (a.find(".button").addClass("loading"), a.find("button").each(d), a.find("input").each(d), a.find("select").each(d), a.find("textarea").each(d), a._disabled = !0)
      };
    f.jsonify = function(a, d, e) {
      a instanceof jQuery || (a = h(a));
      a.disable || (h.fn.disable = function() {
        g(this);
        return this
      }, h.fn.enable = function() {
        b(this);
        this.placehold && this.placehold();
        return this
      });
      var c = "";
      a.find('[type="submit"]').click(function(a) {
        a && a.target && a.target.name && (c = encodeURIComponent(a.target.name) + "=" + encodeURIComponent(a.target.value));
        return !0
      });
      a.submit(function(b) {
        if (b && b.isDefaultPrevented && b.isDefaultPrevented() || e && !1 === e(b)) return !1;
        var g = a.serialize(),
          g = g.replace(/%0D%0A/g, "%0A");
        c && (g && (g += "&"), g += c, c = "");
        a.disable();
        var f = k.require("$21", "http.js"),
          g = {
            url: f.jsonLink(a.attr("action")),
            type: a.attr("method"),
            data: g
          };
        f.ajax(g, d, function() {
          a.enable()
        }, a);
        b.preventDefault();
        b.stopPropagation();
        return !1
      })
    };
    f.revealify = function(a) {
      a = a.closest("form");
      a.find("div[data-reveal-if]").each(function(d, b) {
        function c(a) {
          var d;
          r = r || a.target;
          if ("." === t) d = Boolean(r && r[B]), q && (d = !d);
          else {
            var b, e = h(r.form).serializeArray();
            for (b in e) e[b].name === u && (d = e[b].value);
            d = q ? B !== d : B === d
          }
          if (d !== m)
            if (m = d, a) g[m ? "slideDown" : "slideUp"](200);
            else g[m ? "show" : "hide"]();
          return !0
        }
        var g = h(b),
          f = /^(\!?)([_\w\-\[\]]+)(\.|!?=)(.*)$/.exec(g.attr("data-reveal-if"));
        if (f) {
          var m, q = f[1],
            u = f[2],
            t = f[3],
            B = f[4],
            f = a[0][u];
          if (f.type || null == f.length) f = [f];
          d = f.length;
          for (var r; 0 !== d--;) r = f[d], c(), h(r).change(c).removeClass("jshide");
          f = f = r = null
        }
      });
      a = null
    };
    f.linkify = function(a) {
      var d = a.getAttribute("data-icon");
      if (d) {
        var b = h(a),
          c = h("<a> </a>");
        c.attr("href", a.form.action);
        c.attr("class", b.attr("class"));
        c.attr("tabindex", b.attr("tabindex"));
        b.attr("tabindex", "-1");
        c.text(b.val());
        d && h("<span></span>").prependTo(c).addClass(d);
        b.hide().after(c);
        c.click(function(a) {
          b.click();
          return !1
        })
      }
    };
    f.placeholders = function(a) {
      var d,
        b = [];
      a.find("input[placeholder]").each(function(a, c) {
        "password" !== c.type && (d = n(c)) && b.push(d)
      });
      b.length && (a.submit(function() {
        for (var a in b) b[a].kill()
      }), a.addClass("has-placeholders"), d = i = null)
    };
    return f
  }({}, p, y));
  k.register("$4", function(f, c, p) {
    function n(a, d, b) {
      function e() {
        c();
        l = setTimeout(d, b)
      }

      function c() {
        l && clearTimeout(l);
        l = null
      }
      var l;
      e();
      h(a).mouseenter(c).mouseleave(e);
      return {
        die: function() {
          c();
          h(a).off("mouseenter mouseleave")
        }
      }
    }

    function b(a, d) {
      a.fadeTo(d, 0, function() {
        a.slideUp(d, function() {
          a.remove();
          h(c).triggerHandler("resize")
        })
      })
    }

    function g(a, d) {
      function e(d) {
        l[f] = null;
        b(h(a), 250);
        g && g.die();
        var c;
        if (c = d) d.stopPropagation(), d.preventDefault(), c = !1;
        return c
      }
      var g, f;
      h('<button type="button" class="notice-dismiss" href="#"> </a>').prependTo(a).click(e);
      h(c).triggerHandler("resize");
      s();
      f = l.length;
      l.push(e);
      d && (g = n(a, e, d))
    }

    function a(a, d, b) {
      var e = k.require("$17", "html.js");
      a = h('<div class="notice notice-' + a + '" loco-notice inline></div>').prependTo(h("#loco-notices"));
      var c = h(e.el("p"));
      b = h(e.el("span")).text(b);
      d = h(e.el("strong", "has-icon")).text(d + ": ");
      c.append(d).append(b).appendTo(a);
      return a
    }

    function d(d, b, e, l) {
      d = a(e, b, d).hide().fadeIn(500);
      h(c).triggerHandler("resize");
      g(d, l);
      return f
    }

    function e() {
      h("#loco-notices").find("div.notice").each(function(a, d) {
        g(d, !1)
      })
    }
    var l = [],
      s = Date.now || function() {
        return (new Date).getTime()
      },
      z, m, q, u;
    f.error = function(a) {
      return d(a, z, "error")
    };
    f.warning = function(a) {
      return d(a, m, "warning")
    };
    f.info = function(a) {
      return d(a, q, "info")
    };
    f.success = function(a) {
      return d(a, u, "success",
        5E3)
    };
    f.log = function() {
      c.console && console.log && console.log.apply(console, arguments)
    };
    f.debug = function(a, d) {
      c.console && console.error && (console.error("Loco Error: " + a), d && console.debug && console.debug(d))
    };
    f.clear = function() {
      for (var a = -1, d, b = l, e = b.length; ++a < e;)(d = b[a]) && d();
      l = [];
      return f
    };
    f.create = a;
    f.raise = function(a) {
      var d = f;
      (d[a.type] || d.error).call(d, a.message)
    };
    f.init = function(a) {
      z = a._("Error");
      m = a._("Warning");
      q = a._("Notice");
      u = a._("OK");
      setTimeout(e, 1E3);
      return f
    };
    return f
  }({}, p, y));
  k.register("$5",
    function(f, c, p) {
      function n(d, b, c, f) {
        function m(a, b, l) {
          var f = g || {
              _: function(a) {
                return a
              }
            },
            m = a.responseText,
            A = h("<pre>" + m + "</pre>").text();
          A && (A = A.replace(/(^\s+|\s+$)/g, ""));
          A || (A = m);
          q.debug("Ajax failure for " + d, {
            status: a.status,
            error: b,
            message: l,
            output: m
          });
          q.log(f._("Provide the following text when reporting a problem") + ":\n--8<--\n", A, "\n------");
          "parsererror" === b ? (m = f._("Check console output for debugging information"), (A = A.split(/[\r\n]/)[0]) ? (A = A.replace(/ +in +\S+ on line \d+/, ""), A = A.replace(/^[()! ]+Fatal error:\s*/,
            ""), q.error(A + ".\n" + m)) : q.error(f._("Server returned invalid data") + ". " + m)) : q.error(l || f._("Unknown error"));
          c && c(a, b, l)
        }
        f.url = a;
        f.dataType = "json";
        f.error = m;
        f.success = function(a, d, e) {
          var c = a && a.data,
            f = a && a.notices,
            g = f && f.length;
          for (!c || a.error ? m(e, d, a && a.error && a.error.message) : b && b(c, d, e); g--;) q.raise(f[g])
        };
        var q = k.require("$4", "notices.js").clear();
        return h.ajax(f)
      }
      var b = {},
        g, a = c.ajaxurl || "/wp-admin/admin-ajax.php",
        d = c.encodeURIComponent;
      f.init = function(a) {
        b = a.nonces || b;
        return f
      };
      f.localise = function(a) {
        g =
          a;
        return f
      };
      f.submit = function(a, d, b) {
        function c() {
          f.removeClass("loading");
          k.require("$18", "forms.js").enable(f)
        }
        var f = h(a),
          g = f.serialize();
        f.addClass("loading");
        k.require("$18", "forms.js").disable(f);
        return n(a.route.value, function(a, b, e) {
          c();
          d && d(a, b, e)
        }, function(a, d, e) {
          c();
          b && b(a, d, e)
        }, {
          type: a.method,
          data: g
        })
      };
      f.post = function(a, l, f, g) {
        var m;
        (m = b[a]) || (c.console && console.debug && console.debug('No nonce for "' + a + '"'), m = "");
        m = "action=loco_json&route=" + d(a) + "&loco-nonce=" + d(m);
        (l = l ? h.param(l) : "") &&
        (m += "&" + l);
        return n(a, f, g, {
          type: "post",
          data: m
        })
      };
      f.setNonce = function(a, d) {
        b[a] = d;
        return f
      };
      return f
    }({}, p, y));
  k.register("$19", {
    arab: 1,
    aran: 1,
    hebr: 1,
    nkoo: 1,
    syrc: 1,
    syrn: 1,
    syrj: 1,
    syre: 1,
    samr: 1,
    mand: 1,
    mend: 1,
    thaa: 1,
    adlm: 1,
    cprt: 1,
    phnx: 1,
    armi: 1,
    prti: 1,
    phli: 1,
    phlp: 1,
    phlv: 1,
    avst: 1,
    mani: 1,
    khar: 1,
    orkh: 1,
    ital: 1,
    lydi: 1,
    ar: 1,
    ary: 1,
    ckb: 1,
    dv: 1,
    fa: 1,
    he: 1,
    nqo: 1,
    ps: 1,
    ur: 1,
    yi: 1
  });
  k.register("$6", function(f, c, h) {
    function n() {}
    var b, g, a = k.require("$19", "rtl.json");
    f.init = function() {
      return new n
    };
    f.cast = function(a) {
      return a instanceof
      n ? a : "string" === typeof a ? f.parse(a) : f.clone(a)
    };
    f.clone = function(a) {
      var b, c = new n;
      for (b in a) c[b] = a[b];
      return c
    };
    f.parse = function(a) {
      b || (g = /[-_+]/, b = /^([a-z]{2,3})(?:-([a-z]{4}))?(?:-([a-z]{2}|[0-9]{3}))?(?:-([0-9][a-z0-9]{3,8}|[a-z0-9]{5,8}))?(?:-([a-z]-[-a-z]+))?$/i);
      a = String(a).split(g).join("-");
      if (!b.exec(a)) return null;
      var e = new n;
      e.lang = RegExp.$1.toLowerCase();
      if (a = RegExp.$2) e.script = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
      if (a = RegExp.$3) e.region = a.toUpperCase();
      if (a = RegExp.$4) e.variant =
        a.toLowerCase();
      if (a = RegExp.$5) e.extension = a;
      return e
    };
    c = n.prototype;
    c.isValid = function() {
      return !!this.lang
    };
    c.isKnown = function() {
      var a = this.lang;
      return !(!a || "zxx" === a)
    };
    c.toString = function(a) {
      a = a || "-";
      var b, c = this.lang || "zxx";
      if (b = this.script) c += a + b;
      if (b = this.region) c += a + b;
      if (b = this.variant) c += a + b;
      if (b = this.extension) c += a + b;
      return c
    };
    c.getIcon = function() {
      for (var a = 4, b, c, f = ["variant", "region", "script", "lang"], g = []; 0 !== a--;)
        if (b = f[a], c = this[b]) 1 === a && 3 === c.length ? g.push("region-m49") : g = g.concat([b,
          b + "-" + c.toLowerCase()
        ]);
      return g.join(" ")
    };
    c.isRTL = function() {
      return !!a[String(this.script || this.lang).toLowerCase()]
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$32", function(f, c, h) {
    function n(a) {
      c.console && console.error && console.error(a)
    }

    function b() {
      n("Method not implemented")
    }

    function g() {}

    function a(a) {}
    g.prototype.toString = function() {
      return "[Undefined]"
    };
    a.prototype._validate = function(a) {
      var e, c, f = !0;
      for (e in this) c = this[e], c === b ? (n(a + "." + e + "() must be implemented"), f = !1) : c instanceof g && (n(a + "." +
        e + " must be defined"), f = !1);
      return f
    };
    f.init = function(d, e) {
      var c, f = new a;
      if (d)
        for (c = d.length; 0 !== c--;) f[d[c]] = b;
      if (e)
        for (c = e.length; 0 !== c--;) f[e[c]] = new g;
      return f
    };
    f.validate = function(a) {
      var b = /function (\w+)\(/.exec(a.toString()) ? RegExp.$1 : "";
      a.prototype._validate(b || "Object")
    };
    return f
  }({}, p, y));
  k.register("$40", function(f, c, h) {
    var n = c.requestAnimationFrame,
      b = c.cancelAnimationFrame,
      g = 0;
    if (!n || !b)
      for (var a in {
          ms: 1,
          moz: 1,
          webkit: 1,
          o: 1
        })
        if (n = c[a + "RequestAnimationFrame"])
          if (b = c[a + "CancelAnimationFrame"] ||
            c[a + "CancelRequestAnimationFrame"]) break;
    n && b || (n = function(a) {
      var b = d();
      timeToCall = Math.max(0, 16 - (b - g));
      nextTime = b + timeToCall;
      timerId = c.setTimeout(function() {
        a(nextTime)
      }, timeToCall);
      g = nextTime;
      return timerId
    }, b = function(a) {
      clearTimeout(a)
    });
    var d = Date.now || function() {
      return (new Date).getTime()
    };
    f.loop = function(a, d) {
      function c() {
        g = n(c, d);
        a(f++)
      }
      var f = 0,
        g;
      c();
      return {
        stop: function() {
          g && b(g);
          g = null
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$37", function(f, c, h) {
    function n(b, d, e, c) {
      if (a) {
        var f = e;
        e = function(a) {
          if ((a.MSPOINTER_TYPE_TOUCH ||
              "touch") === a.pointerType) return f(a)
        }
      }
      b.addEventListener(d, e, c);
      return {
        unbind: function() {
          b.removeEventListener(d, e, c)
        }
      }
    }

    function b(a) {
      a.preventDefault();
      a.stopPropagation();
      return !1
    }
    var g, a = !!c.navigator.msPointerEnabled,
      d = a ? "MSPointerDown" : "touchstart",
      e = a ? "MSPointerMove" : "touchmove",
      l = a ? "MSPointerUp" : "touchend";
    f.ok = function(a) {
      null == g && (g = "function" === typeof h.body.addEventListener);
      g && a && a(f);
      return g
    };
    f.ms = function() {
      return a
    };
    f.dragger = function(a, c) {
      function f(b) {
        a.addEventListener(b, h[b], !1)
      }

      function g(b) {
        a.removeEventListener(b, h[b], !1)
      }
      var h = {};
      h[d] = function(a) {
        s(a, function(b, e) {
          e.type = d;
          c(a, e, r)
        });
        f(e);
        f(l);
        return !0
      };
      h[l] = function(a) {
        g(e);
        g(l);
        s(a, function(b, d) {
          d.type = l;
          c(a, d, r)
        });
        return !0
      };
      h[e] = function(a) {
        s(a, function(b, d) {
          d.type = e;
          c(a, d, r)
        });
        return b(a)
      };
      f(d);
      var r = {
        kill: function() {
          g(d);
          g(e);
          g(l);
          a = r = c = null
        }
      };
      return r
    };
    f.swiper = function(c, f, g) {
      function h(a) {
        c.addEventListener(a, w[a], !1)
      }

      function n(a) {
        c.removeEventListener(a, w[a], !1)
      }

      function r() {
        E && E.stop();
        E = null
      }
      var E, A, C, w = {},
        v = [],
        D = [],
        G = [];
      w[d] = function(a) {
        A = !1;
        r();
        var b = z();
        s(a, function(a, d) {
          v[a] = b;
          D[a] = d.clientX;
          G[a] = d.clientY
        });
        C = c.scrollLeft;
        return !0
      };
      w[l] = function(a) {
        s(a, function(a, b) {
          var d = z() - v[a],
            e = D[a] - b.clientX,
            d = Math.abs(e) / d;
          f(d, e ? 0 > e ? -1 : 1 : 0)
        });
        C = null;
        return !0
      };
      w[e] = function(a) {
        var d, e;
        null == C || s(a, function(a, b) {
          d = D[a] - b.clientX;
          e = G[a] - b.clientY
        });
        if (e && Math.abs(e) > Math.abs(d)) return A = !0;
        d && (A = !0, c.scrollLeft = Math.max(0, C + d));
        return b(a)
      };
      if (!a || g) h(d), h(e), h(l), a && (c.className += " mstouch");
      return {
        kill: function() {
          n(d);
          n(e);
          n(l);
          r()
        },
        swiped: function() {
          return A
        },
        ms: function() {
          return a
        },
        snap: function(b) {
          a && !g && (c.style["-ms-scroll-snap-points-x"] = "snapInterval(0px," + b + "px)", c.style["-ms-scroll-snap-type"] = "mandatory", c.style["-ms-scroll-chaining"] = "none")
        },
        scroll: function(a, b, d) {
          r();
          var e = c.scrollLeft,
            f = a > e ? 1 : -1,
            g = Math[1 === f ? "min" : "max"],
            l = Math.round(16 * b * f);
          return E = k.require("$40", "fps.js").loop(function(b) {
            b && (e = Math.max(0, g(a, e + l)), c.scrollLeft = e, a === e && (r(), d && d(e)))
          }, c)
        }
      }
    };
    f.start = function(a, b) {
      return n(a, d,
        b, !1)
    };
    f.move = function(a, b) {
      return n(a, e, b, !1)
    };
    f.end = function(a, b) {
      return n(a, l, b, !1)
    };
    var s = f.each = function(b, d) {
        if (a)(b.MSPOINTER_TYPE_TOUCH || "touch") === b.pointerType && d(0, b);
        else
          for (var e = -1, c = (b.originalEvent || b).changedTouches || []; ++e < c.length;) d(e, c[e])
      },
      z = Date.now || function() {
        return (new Date).getTime()
      };
    return f
  }({}, p, y));
  k.register("$41", function(f, c, k) {
    f.init = function(c) {
      function b() {
        e.style.top = String(-c.scrollTop) + "px";
        return !0
      }

      function f() {
        var b = e;
        b.textContent = c.value;
        b.innerHTML = b.innerHTML.replace(/[ \t]/g,
          a).split(/(?:\r\n|\r|\n)/).join('<span class="eol crlf"></span>\r\n') + '<span class="eol eof"></span>';
        return !0
      }

      function a(a, b) {
        return '<span class="x' + a.charCodeAt(0).toString(16) + '">' + a + "</span>"
      }
      var d = c.parentNode,
        e = d.insertBefore(k.createElement("div"), c);
      h(c).on("input", f).on("scroll", b);
      h(d).addClass("has-mirror");
      e.className = "ta-mirror";
      var l = c.offsetWidth - c.clientWidth;
      2 < l && (e.style.marginRight = String(l - 2) + "px");
      f();
      b();
      return {
        kill: function() {
          h(c).off("input", f).off("scroll", b);
          d.removeChild(e);
          e = null;
          h(d).removeClass("has-mirror")
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$44", function(f, c, h) {
    function n(a, d) {
      for (var e = 0, f = -1, g = d && c[d], h = b[a] || [], m = h.length; ++f < m;) callback = h[f], "function" === typeof callback && (callback(g), e++);
      return e
    }
    var b = {},
      g;
    f.load = function(a, d, e) {
      function f() {
        m && (clearTimeout(m), m = null);
        q && (q.onreadystatechange = null, q = q = q.onload = null);
        a && (delete b[a], a = null)
      }

      function g(b, d) {
        var c = q && q.readyState;
        if (d || !c || "loaded" === c || "complete" === c) d || n(a, e), f()
      }

      function k() {
        if (0 === n(a)) throw Error('Failed to load "' +
          (e || a) + '"');
        f()
      }
      if (e && c[e]) "function" === typeof d && d(c[e]);
      else if (null != b[a]) b[a].push(d);
      else {
        b[a] = [d];
        var m = setTimeout(k, 4E3),
          q = h.createElement("script");
        q.setAttribute("src", a);
        q.setAttribute("async", "true");
        q.onreadystatechange = g;
        q.onload = g;
        q.onerror = k;
        q.onabort = f;
        h.getElementsByTagName("head")[0].appendChild(q)
      }
    };
    f.stat = function(a) {
      var b;
      if (!(b = g)) {
        for (var e, c, f = h.getElementsByTagName("script"), n = -1, m = f.length; ++n < m;)
          if (b = f[n].getAttribute("src"))
            if (e = b.indexOf("/lib/vendor"), -1 !== e) {
              c = b.substr(0,
                e);
              break
            }
        b = g = c || "/static"
      }
      return b + a
    };
    return f
  }({}, p, y));
  k.register("$42", function(f, c, p) {
    function n(a, b) {
      a.setReadOnly(!1);
      a.on("change", function(a, d) {
        return b.val(d.getValue())
      });
      a.on("focus", function(a, d) {
        return b.focus()
      });
      a.on("blur", function(a, d) {
        return b.blur()
      })
    }

    function b(a) {
      a.off("change");
      a.off("focus");
      a.off("blur")
    }

    function g(a) {
      b(a);
      a.setReadOnly(!0);
      a.setHighlightGutterLine(!1);
      a.setHighlightActiveLine(!1)
    }

    function a(a) {
      function b() {
        this.$rules = {
          start: [{
            token: "empty_line",
            regex: "^$"
          }, {
            token: "constant.language",
            regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
          }, {
            token: "printf",
            regex: "%(?:\\d+\\$)?[-+]?(?:'.)?[ 0]*-?\\d*(?:\\.d+)?[bcdeEfFgGosuxX%]"
          }, {
            token: "printf",
            regex: "%(?:\\d+\\$)?[-,'+#0 (]*\\d*(?:\\.\\d+|\\.\\*)?[sScCuidoxXfFeEgGaAbBpn%@]"
          }, {
            defaultToken: "text"
          }]
        }
      }

      function c() {
        this.HighlightRules = b
      }
      a = a.require;
      var f = a("ace/lib/oop");
      f.inherits(b, a("ace/mode/text_highlight_rules").TextHighlightRules);
      f.inherits(c, a("ace/mode/text").Mode);
      return new c
    }
    f.init =
      function(d, e) {
        var c, f = !1,
          z = d.parentNode,
          m = z.appendChild(p.createElement("div"));
        h(z).addClass("has-proxy has-ace");
        k.require("$44", "remote.js").load("https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.5/ace.js", function(b) {
          if (m) {
            if (!b) throw Error("Failed to load code editor");
            c = b.edit(m);
            var h = c.session,
              t = c.renderer;
            c.$blockScrolling = Infinity;
            c.setShowInvisibles(f);
            c.setWrapBehavioursEnabled(!1);
            c.setBehavioursEnabled(!1);
            c.setHighlightActiveLine(!1);
            h.setUseSoftTabs(!1);
            t.setShowGutter(!0);
            t.setPadding(10);
            t.setScrollMargin(8);
            h.setMode(a(b));
            c.setValue(d.value, -1);
            h.setUseWrapMode(!0);
            e ? n(c, e) : g(c)
          }
        }, "ace");
        return {
          kill: function() {
            c && (b(c), c.destroy(), c = null);
            m && (z.removeChild(m), h(z).removeClass("has-proxy has-ace"), m = null);
            return this
          },
          disable: function() {
            c && g(c);
            e = null;
            return this
          },
          enable: function(a) {
            e = a;
            c && n(c, a);
            return this
          },
          resize: function() {
            c && c.resize();
            return this
          },
          val: function(a) {
            c && a !== c.getValue() && c.setValue(a, -1);
            return this
          },
          invs: function(a) {
            a = a || !1;
            f !== a && (f = a, c && c.setShowInvisibles(a));
            return this
          },
          focus: function() {
            return this
          }
        }
      };
    return f
  }({}, p, y));
  k.register("$43", function(f, c, p) {
    function n(a, b) {
      function e() {
        return b.val(a.getContent())
      }
      a.on("input", e);
      a.on("change", e);
      a.on("focus", function(a) {
        return b.focus()
      });
      a.on("blur", function(a) {
        return b.blur()
      });
      a.setMode("design")
    }

    function b(a) {
      a.off("input");
      a.off("change");
      a.off("focus");
      a.off("blur")
    }
    var g = 0;
    f.load = function(a) {
      var b = k.require("$44", "remote.js");
      b.load(b.stat("/lib/tinymce.min.js"), a, "tinymce");
      return f
    };
    f.init = function(a,
      d) {
      function e(a) {
        c = a;
        d ? n(a, d) : (b(a), a.setMode("readonly"));
        h(q).removeClass("loading")
      }
      var c, s = !1,
        k = a.parentNode,
        m = k.parentNode,
        q = k.appendChild(p.createElement("div")),
        u = m.insertBefore(p.createElement("nav"), k);
      h(k).addClass("has-proxy has-mce");
      h(q).html(a.value).addClass("mce-content-body loading");
      u.id = "_tb" + String(++g);
      f.load(function(a) {
        if (!a) throw Error("Failed to load HTML editor");
        q && a.init({
          inline: !0,
          target: q,
          hidden_input: !1,
          theme: "modern",
          skin: !1,
          plugins: "link",
          browser_spellcheck: !0,
          menubar: !1,
          fixed_toolbar_container: "#" + u.id,
          toolbar: "formatselect | bold italic link unlink | bullist numlist outdent indent",
          block_formats: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h4;Heading 4=h4;Heading 5=h5;Heading 6=h6;",
          forced_root_block: "p",
          relative_urls: !1,
          convert_urls: !1,
          remove_script_host: !1,
          document_base_url: "",
          allow_script_urls: !1,
          formats: {
            alignleft: {
              classes: "alignleft"
            },
            alignright: {
              selector: "p,h1,h2,h3,h4,span,strong,em,a",
              classes: "alignright"
            },
            aligncenter: {
              selector: "p,h1,h2,h3,h4,span,strong,em,a",
              classes: "aligncenter"
            },
            strikethrough: {
              inline: "del"
            }
          },
          fix_list_elements: !0,
          entities: "38,amp,60,lt,62,gt,160,nbsp",
          entity_encoding: "named",
          keep_styles: !1,
          init_instance_callback: e
        })
      });
      return {
        val: function(a) {
          null == c ? h(q).html(a) : c.getContent() !== a && c.setContent(a);
          return this
        },
        kill: function() {
          c && (b(c), c.destroy(), c = null);
          q && (k.removeChild(q), h(k).removeClass("has-proxy has-mce"), q = null);
          u && (m.removeChild(u), u = null);
          return this
        },
        enable: function(a) {
          d = a;
          c && n(c, a);
          return this
        },
        disable: function() {
          if (c) {
            var a =
              c;
            b(a);
            a.setMode("readonly")
          }
          d = null;
          return this
        },
        focus: function() {
          c && d && c.focus();
          return this
        },
        invs: function(a) {
          a = a || !1;
          s !== a && (s = a, h(k)[a ? "addClass" : "removeClass"]("show-invs"));
          return this
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$38", function(f, c, p) {
    function n(a) {
      function b() {
        k && m.off("input", e);
        k = !1;
        return !0
      }

      function e() {
        var b = a.value;
        b !== u && (m.trigger("changing", [b, u]), u = b)
      }

      function c() {
        g = a;
        t = u;
        k || m.on("input", e);
        k = !0;
        m.trigger("editFocus");
        q.addClass("has-focus");
        return !0
      }

      function f() {
        g === a && (g = null);
        m.trigger("editBlur");
        q.removeClass("has-focus");
        b();
        e();
        t !== u && m.trigger("changed", [u]);
        return !0
      }
      var k = !1,
        m = h(a),
        q = h(a.parentNode),
        u = a.value,
        t;
      m.blur(f).focus(c);
      return {
        val: function(b) {
          u !== b && (a.value = b, m.triggerHandler("input"), u = b);
          return !0
        },
        kill: function() {
          b();
          m.off("blur", f).off("focus", c)
        },
        fire: function() {
          u = null;
          e()
        },
        ping: e,
        blur: f,
        focus: c
      }
    }

    function b(a) {
      this.e = a
    }
    var g;
    f._new = function(a) {
      return new b(a)
    };
    f.init = function(a) {
      var d = new b(a);
      a.disabled ? (a.removeAttribute("disabled"), d.disable()) :
        a.readOnly ? d.disable() : d.enable();
      return d
    };
    TextAreaPrototype = b.prototype;
    TextAreaPrototype.destroy = function() {
      this.unlisten();
      this.e = null
    };
    TextAreaPrototype.reload = function(a, b) {
      b ? this.l || this.enable() : this.l && this.disable();
      return this.val(a || "")
    };
    TextAreaPrototype.val = function(a) {
      var b = this.e;
      if (null == a) return b.value;
      var e = this.p || this.l;
      e ? e.val(a) : b.value !== a && (b.value = a, h(b).triggerHandler("input"));
      return this
    };
    TextAreaPrototype.fire = function() {
      this.l && this.l.fire();
      return this
    };
    TextAreaPrototype.focus =
      function() {
        var a = this.p;
        a ? a.focus() : h(this.e).focus()
      };
    TextAreaPrototype.focused = function() {
      return g && g === this.el
    };
    TextAreaPrototype.parent = function() {
      return this.e.parentNode
    };
    TextAreaPrototype.attr = function(a, b) {
      var e = this.e;
      if (1 === arguments.length) return e.getAttribute(a);
      null == b ? e.removeAttribute(a) : e.setAttribute(a, b);
      return this
    };
    TextAreaPrototype.editable = function() {
      return !!this.l
    };
    TextAreaPrototype.enable = function() {
      var a = this.p;
      this.e.removeAttribute("readonly");
      this.listen();
      a && a.enable &&
        a.enable(this.l);
      return this
    };
    TextAreaPrototype.disable = function() {
      var a = this.p;
      this.e.setAttribute("readonly", !0);
      this.unlisten();
      a && a.disable && a.disable();
      return this
    };
    TextAreaPrototype.listen = function() {
      var a = this.l;
      a && a.kill();
      this.l = n(this.e);
      return this
    };
    TextAreaPrototype.unlisten = function() {
      this.l && this.l.kill();
      this.l = null;
      return this
    };
    TextAreaPrototype.setInvs = function(a, b) {
      var e = this.i || !1;
      if (b || e !== a) this._i && (this._i.kill(), delete this._i), (e = this.p) ? e.invs && e.invs(a) : a && (this._i = k.require("$41",
        "mirror.js").init(this.e)), this.i = a;
      return this
    };
    TextAreaPrototype.getInvs = function() {
      return this.i || !1
    };
    TextAreaPrototype.setMode = function(a) {
      var b = this.p;
      a !== (this.m || "") && (this.m = a, b && b.kill(), this.p = b = "code" === a ? k.require("$42", "ace.js").init(this.e, this.l) : "html" === a ? k.require("$43", "mce.js").init(this.e, this.l) : null, this.setInvs(this.i, !0), g && this.focus());
      return this
    };
    TextAreaPrototype.name = function(a) {
      this.e.setAttribute("name", a);
      return this
    };
    TextAreaPrototype.placeholder = function(a) {
      this.e.setAttribute("placeholder",
        a);
      return this
    };
    TextAreaPrototype.redraw = function(a) {
      var b = this.p;
      b && b.resize && !a && b.resize()
    };
    TextAreaPrototype = null;
    return f
  }({}, p, y));
  k.register("$39", function(f, c, k) {
    function n(a) {
      var b = c.console;
      b && b.error && b.error(a)
    }

    function b(a) {
      var b = k.createElement("div");
      a && b.setAttribute("class", a);
      return b
    }

    function g(a) {
      return function() {
        a.resize();
        return this
      }
    }

    function a(a) {
      return function(b) {
        var d = b.target.$r;
        if (null == d) return !0;
        a.select(d);
        b.stopPropagation();
        b.preventDefault();
        return !1
      }
    }

    function d(a) {
      return function() {
        a.redrawDirty() &&
          a.redraw();
        return !0
      }
    }

    function e(a) {
      return function(b) {
        var d;
        d = b.keyCode;
        if (40 === d) d = 1;
        else if (38 === d) d = -1;
        else return !0;
        if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) return !0;
        a.selectNext(d);
        b.stopPropagation();
        b.preventDefault();
        return !1
      }
    }

    function l(a) {
      this.w = a
    }

    function s(a, b, d) {
      var e = k.createElement("div");
      e.className = d || "";
      this._ = e;
      this.d = b;
      this.i = a;
      this.length = b.length
    }

    function z(a) {
      this.live = a;
      this.rows = []
    }
    f.create = function(a) {
      return new l(a)
    };
    var m = l.prototype;
    m.init = function(c) {
      var f = this.w,
        l = f.id,
        m = f.splity(l + "-thead", l + "-tbody"),
        r = m[0],
        m = m[1],
        E = [],
        A = [];
      r.css.push("wg-thead");
      m.css.push("wg-tbody");
      c.eachCol(function(a, b) {
        E.push(l + "-col" + a);
        A.push(b)
      });
      for (var k = b(), n = -1, v = E.length, D = b("wg-cols"), G = r.splitx.apply(r, E); ++n < v;) G[n].header(A[n]), D.appendChild(k.cloneNode(!1));
      var z = [];
      c.eachRow(function(a, b, d) {
        z[a] = new s(a, b, d)
      });
      c = m.body;
      this.rows = z;
      this.cols = D;
      this.root = c;
      r.redraw = g(this);
      r = m.fixed = G[0].bodyY() || 20;
      f.lock().resize(r, m);
      f.css.push("is-table");
      f.restyle();
      this.redrawDirty();
      this.render();
      h(c).attr("tabindex", "-1").on("keydown", e(this)).on("mousedown", a(this)).on("scroll", d(this));
      return this
    };
    m.clear = function() {
      for (var a = this.pages || [], b = a.length; 0 !== b--;) a[b].destroy();
      this.pages = [];
      this.sy = this.mx = this.mn = this.vh = null;
      void 0;
      return this
    };
    m.render = function() {
      for (var a, b, d = [], e = -1, c = this.rows || [], f = this.f, g = f ? !0 : !1, l = g ? f.length : c.length, h = this.r, v = this._r, m = this.root, s = this.cols; ++e < l;) 0 === e % 100 && (b = s.cloneNode(!0), b = new z(b), b.h = 2200, b.insert(m), d.push(b)), a = g ? f[e] :
        e, a = c[a], a.page = b, b.rows.push(a);
      b && 100 !== b.size() && b.sleepH(22);
      this.pages = d;
      this.mx = this.mn = null;
      this.redrawDirty();
      this.redraw();
      null == h ? null != v && (a = c[v]) && a.page && (delete this._r, this.select(v, !0)) : (a = c[h]) && a.page ? this.select(h, !0) : (this.deselect(), this._r = h);
      return this
    };
    m.resize = function() {
      var a = -1,
        b = this.ww || (this.ww = []),
        d = this.w,
        e = d.cells[0],
        c = e.body.childNodes,
        f = c.length,
        g = this.pages || [],
        l = g.length;
      for (d.redraw.call(e); ++a < f;) b[a] = c[a].style.width;
      if (l) {
        d = this.mx;
        for (a = this.mn; a <= d; a++) g[a].widths(b);
        this.redrawDirty() && this.redraw()
      }
    };
    m.redrawDirty = function() {
      var a = !1,
        b = this.root,
        d = b.scrollTop,
        b = b.clientHeight;
      this.sy !== d && (a = !0, this.sy = d);
      this.vh !== b && (a = !0, this.vh = b);
      return a
    };
    m.redraw = function() {
      for (var a = 0, b = -1, d = null, e = null, c = this.ww, f = this.sy, g = this.vh, l = this.mn, h = this.mx, v = Math.max(0, f - 100), f = g + f + 100, m = this.pages || [], s = m.length; ++b < s && !(a > f);) g = m[b], a += g.height(), a < v || (null === d && (d = b), e = b, g.rendered || g.render(c));
      if (l !== d) {
        if (null !== l && d > l)
          for (b = l; b < d; b++) {
            g = m[b];
            if (!g) throw Error("Shit!");
            g.rendered && g.sleep()
          }
        this.mn = d
      }
      if (h !== e) {
        if (null !== h && e < h)
          for (b = h; b > e; b--) g = m[b], g.rendered && g.sleep();
        this.mx = e
      }
    };
    m.selected = function() {
      return this.r
    };
    m.thead = function() {
      return this.w.cells[0]
    };
    m.tbody = function() {
      return this.w.cells[1]
    };
    m.tr = function(a) {
      return (a = this.rows[a]) ? a.cells() : []
    };
    m.td = function(a, b) {
      return this.tr(a)[b]
    };
    m.next = function(a, b, d) {
      null == d && (d = this.r);
      for (var e, c = this.rows, f = d, g = c.length; d !== (f += a);)
        if (0 <= f && g > f) {
          if (e = c[f], e.page) break
        } else if (b && g) f = 1 === a ? -1 : g, b = !1;
      else {
        f =
          null;
        break
      }
      return f
    };
    m.selectNext = function(a, b, d) {
      a = this.next(a, b);
      null != a && this.r !== a && this.select(a, d);
      return this
    };
    m.deselect = function(a) {
      var b = this.r;
      null != b && (this.r = null, h(this.tr(b)).removeClass("selected"), this.w.fire("wgRowDeselect", [b, a]));
      return this
    };
    m.select = function(a, b) {
      var d = this.rows[a],
        e = d && d.page;
      if (!e) return this.deselect(!1), n("Row is filtered out"), this;
      this.deselect(!0);
      var c, f = this.w.cells[1];
      e.rendered || (c = e.top(), f.scrollY(c), this.redrawDirty() && this.redraw());
      if (!d.rendered) return e.rendered ||
        n("Failed to render page"), n("Row [" + a + "] not rendered"), this;
      e = d.cells();
      h(e).addClass("selected");
      this.r = a;
      b || (c = f.scrollY(), h(this.root).focus(), c !== f.scrollY() && f.scrollY(c));
      f.scrollTo(e[0], !0);
      this.w.fire("wgRowSelect", [a, d.data()]);
      return this
    };
    m.unfilter = function() {
      this.f && (this.f = null, this.clear().render());
      return this
    };
    m.filter = function(a) {
      this.f = a;
      return this.clear().render()
    };
    m = null;
    m = s.prototype;
    m.render = function(a) {
      var b, d = [],
        e = this._,
        c = this.d,
        f = this.length,
        g = this.i;
      if (e) {
        for (; 0 !== f--;) d[f] =
          b = e.cloneNode(!1), b.textContent = c[f] || "\u00a0", b.$r = g, a[f].appendChild(b);
        this._ = null;
        this.c = d
      } else
        for (d = this.c; 0 !== f--;) a[f].appendChild(d[f]);
      this.rendered = !0;
      return this
    };
    m.cells = function() {
      return this.c || []
    };
    m.data = function() {
      return this.d || []
    };
    m.destroy = function() {
      this.page = null;
      this.rendered = !1
    };
    m = null;
    m = z.prototype;
    m.size = function() {
      return this.rows.length
    };
    m.insert = function(a) {
      var d = this.h,
        e = b("wg-dead");
      e.style.height = String(d) + "px";
      a.appendChild(e);
      return this.dead = e
    };
    m.top = function() {
      return (this.rendered ?
        this.live : this.dead).offsetTop
    };
    m.height = function() {
      var a = this.h;
      null == a && (this.h = a = this.rendered ? this.live.firstChild.offsetHeight : this.dead.offsetHight);
      a || n("row has zero height");
      return a
    };
    m.render = function(a) {
      for (var b, d = -1, e = this.rows, c = e.length, f = this.dead, g = this.live, l = g.childNodes; ++d < c;) b = e[d], b.rendered || b.render(l);
      c = a.length;
      for (d = 0; d < c; d++) l[d].style.width = a[d];
      f.parentNode.replaceChild(g, f);
      this.rendered = !0;
      this.h = null;
      return this
    };
    m.sleep = function() {
      var a = this.height(),
        b = this.live,
        d = this.dead;
      d.style.height = String(a) + "px";
      b.parentNode.replaceChild(d, b);
      this.rendered = !1;
      this.h = a;
      return this
    };
    m.sleepH = function(a) {
      a *= this.rows.length;
      var b = this.dead;
      b && (b.style.height = String(a) + "px");
      this.rendered || (this.h = a);
      return this
    };
    m.widths = function(a) {
      for (var b = this.live.childNodes, d = a.length; 0 !== d--;) b[d].style.width = a[d];
      return this
    };
    m.destroy = function() {
      var a = this.rendered ? this.live : this.dead,
        b = this.rows,
        d = b.length;
      for (a.parentNode.removeChild(a); 0 !== d--;) b[d].destroy()
    };
    m = null;
    return f
  }({},
    p, y));
  k.register("$33", function(f, c, p) {
    function n(a, b) {
      var c = a.id,
        f = c && u[c],
        g = f && f.parent();
      if (!f || !g) return null;
      var v = g.dir === q,
        c = v ? "X" : "Y",
        l = "page" + c,
        v = v ? d : e,
        h = v(g.el),
        c = b["offset" + c],
        m = g.el,
        s = m.className;
      null == c && (c = b[l] - v(a));
      c && (h += c);
      m.className = s + " is-resizing";
      return {
        done: function() {
          m.className = s
        },
        move: function(a) {
          g.resize(a[l] - h, f);
          return !0
        }
      }
    }

    function b(b, d) {
      function e() {
        h(p).off("mousemove", c);
        B && (B.done(), B = null);
        return !0
      }

      function c(a) {
        B ? B.move(a) : e();
        return !0
      }
      if (B) return !0;
      B = n(b.target,
        b);
      if (!B) return !0;
      h(p).one("mouseup", e).on("mousemove", c);
      return a(b)
    }

    function g(a, b) {
      var d = b.type;
      "touchmove" === d ? B && B.move(b) : "touchstart" === d ? B = n(a.target, b) : "touchend" === d && B && (B.done(), B = null)
    }

    function a(a) {
      a.stopPropagation();
      a.preventDefault();
      return !1
    }

    function d(a, b) {
      b || (b = p.body);
      for (var d = a.offsetLeft || 0;
        (a = a.offsetParent) && a !== b;) d += a.offsetLeft || 0;
      return d
    }

    function e(a, b) {
      b || (b = p.body);
      for (var d = a.offsetTop || 0;
        (a = a.offsetParent) && a !== b;) d += a.offsetTop || 0;
      return d
    }

    function l(a) {
      var b = t;
      b && b.redraw();
      a && a.redraw();
      return t = a
    }

    function s(a, b) {
      var d = h(b).on("editFocus", function() {
        d.trigger("wgFocus", [l(a)])
      }).on("editBlur", function() {
        d.trigger("wgBlur", [l(null)])
      })
    }

    function z(a) {
      var b = a.id,
        d = a.className;
      this.id = b;
      this.el = a;
      this.pos = this.index = 0;
      this.css = [d || "wg-root", "wg-cell"];
      this._cn = d;
      u[b] = this;
      this.clear()
    }
    var m = k.require("$17", "html.js"),
      q = 1,
      u = {},
      t, B = !1;
    f.init = function(a) {
      var d = new z(a);
      d.redraw();
      k.require("$37", "touch.js").ok(function(b) {
        b.dragger(a, g)
      });
      h(a).mousedown(b);
      return d
    };
    c = z.prototype;
    c.fire = function(a, b) {
      var d = h.Event(a);
      d.cell = this;
      h(this.el).trigger(d, b);
      return this
    };
    c.each = function(a) {
      for (var b = -1, d = this.cells, e = d.length; ++b < e;) a(d[b], b);
      return this
    };
    c.on = function() {
      return this.$("on", arguments)
    };
    c.off = function() {
      return this.$("off", arguments)
    };
    c.find = function(a) {
      return h(this.el).find(a)
    };
    c.$ = function(a, b) {
      h.fn[a].apply(h(this.el), b);
      return this
    };
    c.parent = function() {
      return this.pid && u[this.pid]
    };
    c.splitx = function() {
      return this._split(q, arguments)
    };
    c.splity = function() {
      return this._split(2,
        arguments)
    };
    c._split = function(a, b) {
      (this.length || this.field) && this.clear();
      for (var d = -1, e, c = b.length, f = 1 / c, g = 0; ++d < c;) {
        e = m.el();
        this.body.appendChild(e);
        for (var l = e, h = b[d], s = h, k = 1; u[h];) h = s + "-" + ++k;
        l.id = h;
        e = new z(e);
        e.index = d;
        e.pid = this.id;
        e.pos = g;
        g += f;
        this.cells.push(e);
        this.length++
      }
      this.dir = a;
      this.redraw();
      return this.cells
    };
    c.destroy = function() {
      this.clear();
      delete u[this.id];
      var a = this.el;
      a.innerHTML = "";
      a.className = this._cn || "";
      h(a).off();
      return this
    };
    c.exists = function() {
      return this === u[this.id]
    };
    c.clear = function() {
      for (var a = this.el, b = this.cells, d = this.field, e = this.body, c = this.nav, f = this.length || 0; 0 !== f--;) delete u[b[f].destroy().id];
      this.cells = [];
      this.length = 0;
      c && (a.removeChild(c), this.nav = null);
      e && (d && (m.ie() && h(e).triggerHandler("blur"), d.destroy(), this.field = null), this.table && (this.table = null), a.removeChild(e));
      this.body = a.appendChild(m.el("", "wg-body"));
      this._h = null;
      return this
    };
    c.resize = function(a, b) {
      if (!b && (b = this.cells[1], !b)) return;
      var d = b.index,
        e = this.cells;
      this.parent();
      var c = h(this.el)[this.dir ===
          q ? "width" : "height"](),
        f = e[d + 1],
        d = e[d - 1];
      pad = (b.body || b.el.firstChild).offsetTop || 0;
      max = (f ? f.pos * c : c) - pad;
      min = d ? d.pos * c : 0;
      b.pos = Math.min(max, Math.max(min, a)) / c;
      this.redraw();
      return this
    };
    c.distribute = function(a) {
      for (var b, d = 0, e = this.cells, c = a.length; d < c;) b = a[d], e[++d].pos = Math.max(0, Math.min(1, b));
      this.redraw();
      return this
    };
    c.distribution = function() {
      for (var a = [], b = 0, d = this.cells, e = d.length - 1; b < e;) a[b] = d[++b].pos;
      return a
    };
    c.restyle = function() {
      var a = this.css.concat();
      0 === this.index ? a.push("first") :
        a.push("not-first");
      this.dir && (a.push("wg-split"), 2 === this.dir ? a.push("wg-split-y") : a.push("wg-split-x"));
      this.t && a.push("has-title");
      this.nav && a.push("has-nav");
      this.field && (a.push("is-field"), this.field.editable() ? a.push("is-editable") : a.push("is-readonly"));
      a = a.join(" ");
      a !== this._css && (this._css = a, this.el.className = a);
      return this
    };
    c.redraw = function(a) {
      this.restyle();
      var b = this.el,
        d = this.body,
        e = this.field;
      if (d) {
        var c = b.clientHeight || 0,
          f = d.offsetTop || 0,
          c = f > c ? 0 : c - f;
        this._h !== c && (this._h = c, d.style.height =
          String(c) + "px", e && e.redraw(a))
      }
      for (var d = this.length, f = 1, g = this.nav, l = 2 === this.dir ? "height" : "width"; 0 !== d--;) e = this.cells[d], g ? c = 1 : (e.fixed && (e.pos = e.fixed / h(b)[l]()), c = f - e.pos, f = e.pos), e.el.style[l] = String(100 * c) + "%", e.redraw(a);
      return this
    };
    c.contents = function(a, b) {
      var d = this.el,
        e = this.body;
      if (null == a) return e.innerHTML;
      this.length ? this.clear() : e && (d.removeChild(e), e = null);
      e || (this.body = e = d.appendChild(m.el("", b || "wg-content")), this._h = null, (d = this.lang) && this._locale(d, this.rtl, !0));
      "string" ===
      typeof a ? h(e)._html(a) : a && this.append(a);
      this.redraw();
      return this
    };
    c.textarea = function(a, b) {
      var d = this.field;
      if (d) {
        var e = d.editable();
        d.reload(a, b);
        e !== b && this.restyle()
      } else this.length && this.clear(), e = m.el("textarea"), e.setAttribute("wrap", "virtual"), e.value = a, this.contents(e), d = k.require("$38", "field.js")._new(e)[b ? "enable" : "disable"](), s(this, e), this.field = d, this.restyle();
      this.lang || this.locale("en");
      return d
    };
    c.locale = function(a) {
      a = k.require("$6", "locale.js").cast(a);
      return this._locale(String(a),
        a.isRTL())
    };
    c._locale = function(a, b, d) {
      var e = this.body;
      if (d || a !== this.lang) this.lang = a, e && e.setAttribute("lang", a);
      if (d || b !== this.rtl) this.rtl = b, e && e.setAttribute("dir", b ? "RTL" : "LTR");
      return this
    };
    c.editable = function() {
      var a = this.field;
      if (!a || !a.editable())
        for (var b = -1, d = this.length; ++b < d && !(a = this.cells[b].editable()););
      return a
    };
    c.eachTextarea = function(a) {
      var b = this.field;
      b ? a(b) : this.each(function(b) {
        b.eachTextarea(a)
      });
      return this
    };
    c.append = function(a) {
      a && (a.nodeType ? m.init(this.body.appendChild(a)) :
        m.init(h(a).appendTo(this.body)));
      return this
    };
    c.prepend = function(a) {
      var b = this.body;
      if (a.nodeType) {
        var d = b.firstChild;
        m.init(d ? b.insertBefore(a, d) : b.appendChild(a))
      } else m.init(h(a).prependTo(b));
      return this
    };
    c.before = function(a) {
      var b = this.body;
      a.nodeType ? m.init(this.el.insertBefore(a, b)) : m.init(h(a).insertBefore(b));
      return this
    };
    c.header = function(a, b) {
      if (null == a && null == b) return this.el.getElementsByTagName("header")[0];
      this.t = m.txt(a || "");
      this.el.insertBefore(m.el("header", b), this.body).appendChild(this.t);
      this.redraw();
      return this
    };
    c.title = function(a) {
      var b = this.t;
      if (b) return b.nodeValue = a || "", b;
      this.header(a);
      return this.t
    };
    c.titled = function() {
      var a = this.t;
      return a && a.nodeValue
    };
    c.bodyY = function() {
      return e(this.body, this.el)
    };
    c.scrollY = function(a) {
      if (T === a) return this.body.scrollTop;
      this.body.scrollTop = a
    };
    c.tabulate = function(a) {
      return this.table = k.require("$39", "wgtable.js").create(this).init(a)
    };
    c.lock = function() {
      this.body.className += " locked";
      return this
    };
    c.scrollTo = function(a, b) {
      var d, c = this.body;
      d = c.scrollTop;
      var f = e(a, c);
      if (d > f) d = f;
      else {
        var g = c.clientHeight,
          f = f + h(a).outerHeight();
        if (g + d < f) d = f - g;
        else return
      }
      b ? c.scrollTop = d : h(c).stop(!0).animate({
        scrollTop: d
      }, 250)
    };
    c.navigize = function(b, d) {
      function e(a) {
        var b = f[a],
          d = s[a],
          c = h(b.el).show();
        d.addClass("active");
        l = a;
        k.data("idx", a);
        b.fire("wgTabSelect", [a]);
        return c
      }
      var c = this,
        f = c.cells,
        g = c.nav,
        l, s = [];
      g && c.el.removeChild(g);
      var g = c.nav = c.el.insertBefore(m.el("nav", "wg-tabs"), c.body),
        k = h(g).on("click", function(b) {
          var d = h(b.target).data("idx");
          if (null == d) return !0;
          if (null != l) {
            var g = s[l];
            h(f[l].el).hide();
            g.removeClass("active")
          }
          e(d);
          c.redraw();
          return a(b)
        });
      null == d && (d = k.data("idx") || 0);
      c.each(function(a, d) {
        s[d] = h('<a href="#' + a.id + '"></a>').data("idx", d).text(b[d]).appendTo(k);
        a.pos = 0;
        h(a.el).hide()
      });
      e(f[d] ? d : 0);
      c.lock();
      c.redraw();
      return c
    };
    c.navigated = function() {
      var a = this.nav;
      if (a) return h(a).data("idx")
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$24", function(f, c, h) {
    function k(b) {
      this.reIndex([]);
      if (b)
        for (var c in b) this.add(c, b[c])
    }
    f.init =
      function(b) {
        return new k(b)
      };
    c = k.prototype;
    c.reIndex = function(b) {
      for (var c = {}, a = -1, d = b.length; ++a < d;) c[b[a]] = a;
      this.keys = b;
      this.length = a;
      this.ords = c
    };
    c.key = function(b, c) {
      if (null == c) return this.keys[b];
      var a = this.keys[b],
        d = this.ords[c];
      if (c !== a) {
        if (null != d) throw Error("Clash with item at [" + d + "]");
        this.keys[b] = c;
        delete this.ords[a];
        this.ords[c] = b
      }
      return b
    };
    c.indexOf = function(b) {
      b = this.ords[b];
      return null == b ? -1 : b
    };
    c.add = function(b, c) {
      var a = this.ords[b];
      null == a && (this.keys[this.length] = b, a = this.ords[b] =
        this.length++);
      this[a] = c;
      return a
    };
    c.get = function(b) {
      return this[this.ords[b]]
    };
    c.has = function(b) {
      return null != this.ords[b]
    };
    c.del = function(b) {
      this.cut(this.ords[b], 1)
    };
    c.cut = function(b, c) {
      c = c || 1;
      var a = [].splice.call(this, b, c);
      this.keys.splice(b, c);
      this.reIndex(this.keys);
      return a
    };
    c.each = function(b) {
      for (var c = -1, a = this.keys, d = this.length; ++c < d;) b(a[c], this[c], c);
      return this
    };
    c.sort = function(b) {
      for (var c = -1, a = this.length, d, e = this.keys, f = this.ords, h = []; ++c < a;) h[c] = [this[c], e[c]];
      h.sort(function(a,
        d) {
        return b(a[0], d[0])
      });
      for (c = 0; c < a; c++) d = h[c], this[c] = d[0], d = d[1], e[c] = d, f[d] = c;
      return this
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$23", function(f, c, p) {
    function n(a) {
      var b = [];
      a && (a.saved() || b.push("po-unsaved"), a.fuzzy() ? b.push("po-fuzzy") : a.flagged() && (b.push("po-flagged"), b.push("po-flag-" + a.flags().join(" po-flag-"))), a.translation() || b.push("po-empty"), a.comment() && b.push("po-comment"));
      return b.join(" ")
    }

    function b(a, b, d) {
      b = h(a.title(b).parentNode);
      var c = b.find("span.lang");
      d ? (d = k.require("$6",
        "locale.js").cast(d), c.length || (c = h("<span></span>").prependTo(b)), c.attr("lang", d.lang).attr("class", d.getIcon() || "lang region region-" + (d.region || "zz").toLowerCase())) : (c.remove(), d = "en");
      a.locale(d);
      return b
    }

    function g() {
      this.dirty = 0
    }
    var a = "poUpdate",
      d = "changing",
      e = "changed",
      l = 0,
      s = 1,
      z = 2,
      m = 3,
      q = 4,
      u = 5,
      t = /^\s+/,
      B, r, y = k.require("$3", "string.js").sprintf,
      A = k.require("$17", "html.js");
    f.extend = function(a) {
      return a.prototype = new g
    };
    f.localise = function(a) {
      r = a;
      return f
    };
    var C = function() {
        var a = p.createElement("p");
        return function(b) {
          a.innerHTML = b;
          return a.textContent
        }
      }(),
      w = g.prototype = k.require("$32", "abstract.js").init(["getListColumns", "getListHeadings", "getListEntry"], ["editable", "t"]);
    w.init = function() {
      this.localise();
      this.editable = {
        source: !0,
        target: !0
      };
      this.mode = "";
      this.html = !1;
      return this
    };
    w.localise = function(a) {
      a || (a = r || k.require("$1", "t.js").init());
      var b = [];
      b[l] = a._x("Source text", "Editor") + ":";
      b[m] = a._x("%s translation", "Editor") + ":";
      b[q] = a._x("Context", "Editor") + ":";
      b[u] = a._x("Comments", "Editor") +
        ":";
      b[s] = a._x("Single", "Editor") + ":";
      b[z] = a._x("Plural", "Editor") + ":";
      this.labels = b;
      this.t = a;
      return this
    };
    w.setRootCell = function(a) {
      function b(a) {
        d.redraw(!0, a);
        return !0
      }
      var d = k.require("$33", "wingrid.js").init(a);
      h(c).on("resize", b);
      this.redraw = b;
      h(a).on("wgFocus wgBlur", function(a, b) {
        B = b
      });
      this.destroy = function() {
        d.destroy();
        h(c).off("resize", b)
      };
      this.rootDiv = a;
      return d
    };
    g.prototype.$ = function() {
      return h(this.rootDiv)
    };
    w.on = function(a, b) {
      return h(this.rootDiv).on(a, b)
    };
    w.setListCell = function(a) {
      var b =
        this;
      b.listCell = a;
      a.on("wgRowSelect", function(a, d) {
        b.loadMessage(b.po.row(d));
        return !0
      }).on("wgRowDeselect", function(a, d, c) {
        c || b.loadNothing();
        return !0
      })
    };
    w.setSourceCell = function(a) {
      this.sourceCell = a;
      var b = a.find("p.notes");
      b.length || (b = h('<p class="notes"></p>').insertAfter(a.header()).hide());
      this.notesPara = b
    };
    w.setTargetCell = function(a) {
      this.targetCell = a
    };
    w.next = function(a, b, d) {
      for (var c = this.listTable, e = c.selected(), f = e, g, l = this.po; null != (e = c.next(a, d, e));) {
        if (f === e) {
          e = null;
          break
        }
        if (b && (g = l.row(e),
            g.translated(0))) continue;
        break
      }
      null != e && c.select(e, !0);
      return e
    };
    w.current = function(a) {
      var b = this.active;
      if ("undefined" === typeof a) return b;
      a ? a.is(b) ? this.pasteMessage(a) : this.loadMessage(a) : this.unloadActive();
      return this
    };
    w.getTargetEditable = function() {
      return this.editable.target && this.targetCell && this.targetCell.editable()
    };
    w.getSourceEditable = function() {
      return this.editable.source && this.sourceCell && this.sourceCell.editable()
    };
    w.getContextEditable = function() {
      return this.editable.context && this.contextCell &&
        this.contextCell.editable()
    };
    w.getFirstEditable = function() {
      return this.getTargetEditable() || this.getSourceEditable() || this.getContextEditable()
    };
    w.searchable = function(a) {
      a && (this.dict = a, this.po && this.rebuildSearch());
      return this.dict && !0
    };
    w.rebuildSearch = function() {
      var a = -1,
        b = this.po.rows,
        d = b.length,
        c = this.dict;
      for (c.clear(); ++a < d;) c.add(a, b[a].toText());
      this.lastSearch = "";
      this.lastFound = d
    };
    w.filtered = function() {
      return this.lastSearch || ""
    };
    w.filter = function(a, b) {
      var d, c = this.listTable,
        e = this.lastFound,
        f = this.lastSearch;
      if (a) {
        if (f === a) return e || 0;
        if (f && !e && 0 === a.indexOf(f)) return 0;
        d = this.dict.find(a)
      }
      f = this.lastSearch = a;
      e = this.lastFound = d ? d.length : this.po.length;
      d ? c.filter(d) : c.unfilter();
      b || this.fire("poFilter", [f, e]);
      return e
    };
    w.unsave = function(a, b) {
      var d = !1;
      if (a = a || self.active) {
        if (d = a.saved(b)) this.dirty++, a.unsave(b), this.fire("poUnsaved", [a, b]);
        this.markUnsaved(a)
      }
      return d
    };
    w.markUnsaved = function(a) {
      var b = this.po.indexOf(a),
        b = this.listTable.tr(b),
        d = b[0].className;
      changedStyle = d.replace(/(?:^| +)po-[a-z]+/g,
        "") + " " + n(a);
      changedStyle !== d && h(b).attr("class", changedStyle)
    };
    w.save = function(a) {
      var b = this.po;
      if (this.dirty || a) b.each(function(a, b) {
        b.save()
      }), this.listCell.find("div.po-unsaved").removeClass("po-unsaved"), this.dirty = 0, this.fire("poSave");
      return b
    };
    w.fire = function(a, b) {
      var d = this.on;
      if (d && d[a] && (d = d[a].apply(this, b || []), !1 === d)) return !1;
      d = h.Event(a);
      h(this.rootDiv).trigger(d, b);
      return !d.isDefaultPrevented()
    };
    w.reload = function() {
      var a = this,
        b, d = a.listCell,
        c = a.listTable,
        e = a.po,
        f = e && e.locale(),
        g = f &&
        f.isRTL(),
        l = e && e.length || 0;
      if (e && e.row) return a.lastSearch && (a.lastSearch = "", a.lastFound = l, a.fire("poFilter", [a.lastSearch, a.lastFound])), c && (b = c.thead().distribution()), c = a.listTable = d.tabulate({
          length: l,
          getRow: function(b) {
            return a.getListEntry(e.row(b))
          },
          getCss: function(b) {
            return a.getListEntry(e.row(b))
          },
          eachCol: function(b) {
            for (var d = -1, e = a.getListHeadings(), c = e.length; ++d < c;) b(d, e[d])
          },
          eachRow: function(b) {
            var d = 0;
            e.each(function(e, c) {
              b(d++, a.getListEntry(c), n(c))
            })
          }
        }), b && c.thead().distribute(b),
        c.tbody().$(g ? "addClass" : "removeClass", ["is-rtl"]), a.targetLocale = f, a.fire("poLoad"), !!e.length;
      d && d.clear().header("Error").contents("Invalid messages list")
    };
    w.load = function(a, b) {
      this.po = a;
      this.dict && this.rebuildSearch();
      this.reload() && (-1 !== b ? this.listTable.select(b || 0) : this.active && this.unloadActive())
    };
    w.pasteMessage = function(a) {
      var b, d = 0;
      if (b = this.sourceCell) b.eachTextarea(function(b) {
        b.val(a.source(null, d++))
      }), this.updateListCell(a, "source");
      (b = this.contextCell) && b.eachTextarea(function(b) {
        b.val(a.context())
      });
      if (b = this.targetCell) d = 0, b.eachTextarea(function(b) {
        b.val(a.translation(d++))
      }), this.updateListCell(a, "target");
      return this
    };
    w.loadMessage = function(c) {
      function f(g) {
        var h, m = g,
          k = g.id,
          m = !1;
        h = K[l];
        g.off();
        N && (P ? (P = A.h(P, !0), N.html(P).show(), A.init(N), m = !0) : N.text() && (m = !0, N.text("").hide()));
        g.titled() !== h && b(g, h, p.sourceLocale || "en");
        m && g.clear();
        Q ? (h = g.splity(k + "-singular", k + "-plural"), m = h[0], h = h[1], m.header(K[s]).textarea(Z, R).setMode(r).setInvs(C), h.header(K[z]).textarea(Q, R).setMode(r).setInvs(C),
          g.lock()) : g.textarea(Z, R).setMode(r).setInvs(C);
        R && g.on(d, function(a, b) {
          Q && a.target.name === k + "-plural" ? c.plural(b) : (c.source(b), p.updateListCell(c, "source"));
          p.unsave(c, M)
        }).on(e, function(b) {
          Q && b.target.name === k + "-plural" || p.po.reIndex(c);
          p.dict && p.rebuildSearch();
          p.fire(a, [c])
        })
      }

      function g(f, l, h) {
        f.off();
        var s = l.isKnown() && l.label || "Target",
          s = y(K[m], s);
        f.titled() !== s && b(f, s, l);
        if (c.pluralized()) {
          var n = [],
            q = l.plurals || ["One", "Other"],
            z = k.require("$24", "collection.js").init();
          for (c.each(function(a,
              b, d) {
              if (d || q[a]) n.push(q[a] || "Form " + a), z.add("plural-" + a, d)
            });
            (s = n.length) < l.nplurals;) n.push(q[s] || "Form " + z.length), z.add("plural-" + s, c.translation(s));
          children = f.splitx.apply(f, z.keys);
          f.each(function(a, b) {
            var d = L && !c.disabled(b);
            a.textarea(z[b], d).setMode(r).setInvs(C)
          });
          f.navigize(n, h || null).on("wgTabSelect", function(a, b) {
            var d = L && a.cell.editable();
            d && d.focus();
            h = b;
            p.fire("poTab", [b])
          })
        } else h = 0, L = L && !c.disabled(0), f.textarea(c.translation(), L).setMode(r).setInvs(C);
        L && f.on(d, function(a, b, d) {
          c.translate(b,
            h);
          0 === h && p.updateListCell(c, "target");
          c.fuzzy(h) ? p.fuzzy(!1, c, h) : p.unsave(c, h);
          "" === b ? p.fire("poEmpty", [!0, c, h]) : "" === d && p.fire("poEmpty", [!1, c, h])
        }).on(e, function(b) {
          p.dict && p.rebuildSearch();
          p.fire(a, [c])
        })
      }

      function n(f) {
        f.off();
        b(f, K[q]);
        f.textarea(c.context(), !0).setMode(r).setInvs(C);
        T && f.on(d, function(a, b) {
          c.context(b);
          p.updateListCell(c, "source");
          p.unsave(c, M)
        }).on(e, function() {
          p.po.reIndex(c);
          p.dict && p.rebuildSearch();
          p.fire(a, [c])
        })
      }

      function t(a) {
        var e = K[u];
        a.titled() !== e && b(a, e);
        a.off().on(d,
          function(a, b) {
            c.comment(b);
            p.fire("poComment", [c, b]);
            p.unsave(c, M)
          }).textarea(c.comment(), !0)
      }
      var p = this,
        r = p.mode,
        w = c.isHTML(),
        C = p.inv || !1,
        I = this.fmt || null,
        F = c.format() || null,
        S = c.is(p.active),
        M = 0,
        W = p.sourceCell,
        V = p.targetCell,
        X = p.contextCell,
        Y = p.commentCell,
        N = p.notesPara,
        L = p.editable.target,
        R = p.editable.source,
        T = p.editable.context,
        Z = c.source() || "",
        Q = c.plural() || "",
        P = c.notes(),
        O = B,
        $ = p.targetLocale,
        K = p.labels;
      p.html !== w && (p.html = w, "code" !== p.mode && (r = w ? "html" : "", p.setMode(r)));
      p.active = c;
      W && f(W);
      X &&
        n(X);
      V && $ && (M = V.navigated() || 0, g(V, $, M));
      Y && t(Y);
      O && (O.exists() || (O = O.parent()), (w = O.editable()) && w.focus());
      I !== F && (w = h(p.rootDiv), F && w.addClass(F + "-format"), I && w.removeClass(I + "-format"), this.fmt = F);
      S || p.fire("poSelected", [c])
    };
    w.unloadActive = function() {
      var a;
      (a = this.notesPara) && a.text("").hide();
      (a = this.sourceCell) && a.off().clear();
      (a = this.contextCell) && a.off().clear();
      (a = this.targetCell) && a.off().clear();
      (a = this.commentCell) && a.off();
      this.active && (this.fire("poDeselected", [this.active]), this.active =
        null);
      return this
    };
    w.loadNothing = function() {
      var a, b = this.t,
        d = this.mode || "",
        c = this.inv || !1;
      this.unloadActive();
      (a = this.commentCell) && a.textarea("", !1);
      if (a = this.sourceCell) a.textarea("", !1).setMode(d).setMode(d).setInvs(c), a.title(b._x("Source text not loaded", "Editor") + ":");
      if (a = this.contextCell) a.textarea("", !1).setMode(d).setMode(d).setInvs(c), a.title(b._x("Context not loaded", "Editor") + ":");
      if (a = this.targetCell) a.textarea("", !1).setMode(d).setMode(d).setInvs(c), a.title(b._x("Translation not loaded",
        "Editor") + ":");
      this.fire("poSelected", [null])
    };
    w.updateListCell = function(a, b) {
      var d = this.getListColumns()[b],
        c = this.getListEntry(a)[d || 0],
        e = this.po.indexOf(a);
      if (d = this.listTable.td(e, d)) d.textContent = c
    };
    w.cellText = function(a) {
      if (-1 !== a.indexOf("<") || -1 !== a.indexOf("&")) a = C(a);
      return a.replace(t, "") || "\u00a0"
    };
    w.fuzzy = function(b, d, c) {
      if (!d) {
        d = this.active;
        if (!d) return null;
        null == c && (c = this.targetCell && this.targetCell.navigated() || 0)
      }
      var e = d.fuzzy(c);
      null == b || e == b || b && !d.translated(c) || !this.fire("poFuzzy", [d, b, c]) || (d.fuzzy(c, b), this.fire(a, [d]) && this.unsave(d, c));
      return e
    };
    w.add = function(b, d) {
      var c, e = this.po.get(b, d);
      e ? c = this.po.indexOf(e) : (c = this.po.length, e = this.po.add(b, d), this.load(this.po, -1), this.fire("poAdd", [e]), this.fire(a, [e]));
      this.lastSearch && this.filter("");
      this.listTable.select(c);
      return e
    };
    w.del = function(b) {
      if (b = b || this.active) {
        var d = this.lastSearch,
          c = this.po.del(b);
        null != c && (this.unsave(b), this.fire("poDel", [b]), this.fire(a, [b]), this.reload(), this.dict && this.rebuildSearch(), this.active &&
          this.active.equals(b) && this.unloadActive(), this.po.length && (d && this.filter(d), this.active || (c = Math.min(c, this.po.length - 1), this.listTable.select(c))))
      }
    };
    w.setMono = function(a) {
      return this.setMode(a ? "code" : this.html ? "html" : "")
    };
    w.setMode = function(a) {
      this.mode !== a && (this.mode = a, this.callTextareas(function(b) {
        b.setMode(a)
      }));
      return this
    };
    w.getMono = function() {
      return "code" === this.mode
    };
    w.setInvs = function(a) {
      (this.inv || !1) !== a && (this.inv = a, this.callTextareas(function(b) {
        b.setInvs(a)
      }), this.fire("poInvs", [a]));
      return this
    };
    w.getInvs = function() {
      return this.inv || !1
    };
    w.callTextareas = function(a) {
      var b = this.targetCell;
      b && b.eachTextarea(a);
      (b = this.contextCell) && b.eachTextarea(a);
      (b = this.sourceCell) && b.eachTextarea(a);
      return this
    };
    w = null;
    return f
  }({}, p, y));
  k.register("$12", function(f, c, h) {
    function n() {
      this.init()._validate();
      this.sourceLocale = {
        lang: "en",
        label: "English",
        plurals: ["One", "Other"]
      }
    }
    c = k.require("$23", "base.js");
    f.init = function(b) {
      var c = new n;
      b = c.setRootCell(b);
      var a = b.splity("po-list", "po-edit"),
        d = a[0],
        e = a[1],
        a = e.splitx("po-trans", "po-comment"),
        f = a[0],
        h = a[1].header("Loading.."),
        a = f.splity("po-source", "po-target"),
        f = a[0].header("Loading.."),
        a = a[1].header("Loading..");
      b.distribute([0.34]);
      e.distribute([0.8]);
      c.setListCell(d);
      c.setSourceCell(f);
      c.setTargetCell(a);
      c.commentCell = h;
      c.editable.source = !1;
      return c
    };
    c = n.prototype = c.extend(n);
    c.getListHeadings = function() {
      var b = this.t || {
        _x: function(b) {
          return b
        }
      };
      return [b._x("Source text", "Editor"), b._x("Translation", "Editor")]
    };
    c.getListColumns = function() {
      return {
        source: 0,
        target: 1
      }
    };
    c.getListEntry = function(b) {
      if (!b) return ["", ""];
      var c = this.cellText,
        a = [c(b.id || b.source() || ""), c(b.translation() || "")];
      if (b = b.context()) a[0] += " [ " + c(b) + " ]";
      return a
    };
    c.stats = function() {
      var b = this.po.length,
        c = 0,
        a = 0,
        d = 0;
      this.po.each(function(b, f) {
        f.translation() ? f.fuzzy() ? d++ : c++ : a++
      });
      return {
        t: b,
        p: String(c ? Math.round(100 * (c / b)) : 0) + "%",
        f: d,
        u: a
      }
    };
    c.unlock = function() {
      this._unlocked || (this._unlocked = this.targetLocale, delete this.targetLocale, this.po && this.po.unlock(), this.editable = {
        source: !0,
        context: !0,
        target: !1
      }, this.contextCell = this.targetCell, delete this.targetCell, this.fire("poLock", [!1]), this.active && this.loadMessage(this.active))
    };
    c.lock = function() {
      var b;
      this._unlocked && (b = this.targetLocale = this._unlocked, delete this._unlocked, this.po && this.po.lock(b), this.editable = {
        source: !1,
        context: !1,
        target: !0
      }, this.targetCell = this.contextCell, delete this.contextCell, this.fire("poLock", [!0, b]), this.active && this.loadMessage(this.active))
    };
    c.locked = function() {
      return !this._unlocked
    };
    return f
  }({},
    p, y));
  k.register("$13", function(f, c, k) {
    var n = {
        copy: 66,
        clear: 75,
        save: 83,
        fuzzy: 85,
        next: 40,
        prev: 38,
        enter: 13,
        invis: 73
      },
      b = {
        38: !0,
        40: !0,
        73: !0
      },
      g = {
        66: function(a, b) {
          var c = b.current();
          c && (c.normalize(), b.pasteMessage(c))
        },
        75: function(a, b) {
          var c = b.current();
          c && (c.untranslate(), b.pasteMessage(c))
        },
        85: function(a, b) {
          b.fuzzy(!b.fuzzy())
        },
        13: function(a, b) {
          b.getFirstEditable() && b.next(1, !0, !0)
        },
        40: function(a, b) {
          var c = a.shiftKey;
          b.next(1, c, c)
        },
        38: function(a, b) {
          var c = a.shiftKey;
          b.next(-1, c, c)
        },
        73: function(a, b) {
          if (!a.shiftKey) return !1;
          b.setInvs(!b.getInvs())
        }
      };
    f.init = function(a, d) {
      function e(d) {
        if (d.isDefaultPrevented() || !d.metaKey && !d.ctrlKey) return !0;
        var c = d.which;
        if (!f[c]) return !0;
        var e = g[c];
        if (!e) throw Error("command undefined #" + c);
        if (d.altKey || d.shiftKey && !b[c] || !1 === e(d, a)) return !0;
        d.stopPropagation();
        d.preventDefault();
        return !1
      }
      var f = {};
      h(d || c).on("keydown", e);
      return {
        add: function(a, b) {
          g[n[a]] = b;
          return this
        },
        enable: function() {
          var a, b;
          for (b in arguments) a = n[arguments[b]], f[a] = !0;
          return this
        },
        disable: function() {
          h(d || c).off("keydown",
            e);
          a = d = f = null
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$25", function(f, c, h) {
    function k(b, c) {
      var a = RegExp("^.{0," + (b - 1) + "}[" + c + "]"),
        d = RegExp("^[^" + c + "]+");
      return function(c, f) {
        for (var g = c.length, h; g > b;) {
          h = a.exec(c) || d.exec(c);
          if (null == h) break;
          h = h[0];
          f.push(h);
          h = h.length;
          g -= h;
          c = c.substr(h)
        }
        0 !== g && f.push(c);
        return f
      }
    }
    f.create = function(b) {
      function c(a) {
        return p[a] || "\\" + a
      }
      var a, d, e = /(?:\r\n|[\r\n\v\f\u2028\u2029])/g,
        f = /[ \r\n]+/g,
        h = /[\t\v\f\x07\x08\\\"]/g,
        p = {
          "\t": "\\t",
          "\v": "\\v",
          "\f": "\\f",
          "\u0007": "\\a",
          "\b": "\\b"
        };
      null == b && (b = 79);
      0 !== b && (a = k(b - 3, " "), d = k(b - 2, "-\u2013 \\.,:;\\?!\\)\\]\\}\\>"));
      return {
        pair: function(a, f) {
          if (!f) return a + ' ""';
          f = f.replace(h, c);
          var l = 0;
          f = f.replace(e, function() {
            l++;
            return "\\n\n"
          });
          if (!(l || b && b < f.length + a.length + 3)) return a + ' "' + f + '"';
          var k = [a + ' "'],
            n = f.split("\n");
          if (d)
            for (var p = -1, z = n.length; ++p < z;) d(n[p], k);
          else k = k.concat(n);
          return k.join('"\n"') + '"'
        },
        prefix: function(a, b) {
          var d = a.split(e);
          return b + d.join("\n" + b)
        },
        refs: function(b) {
          b = b.replace(f, " ", b);
          a && (b = a(b, []).join("\n#: "));
          return "#: " + b
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$26", function(f, c, h) {
    function n() {}
    f.extend = function(b) {
      return b.prototype = new n
    };
    c = n.prototype = k.require("$32", "abstract.js").init(["add", "load"]);
    c.row = function(b) {
      return this.rows[b]
    };
    c.lock = function(b) {
      return this.locale(b || {
        lang: "zxx",
        label: "Unknown",
        nplurals: 1,
        pluraleq: "n!=1"
      })
    };
    c.unlock = function() {
      var b = this.loc;
      this.loc = null;
      return b
    };
    c.locale = function(b) {
      var c = k.require("$6", "locale.js");
      null == b ? b = this.loc : this.loc = b = c.cast(b);
      return b
    };
    c.each =
      function(b) {
        this.rows.each(b);
        return this
      };
    c.indexOf = function(b) {
      "object" !== typeof b && (b = this.get(b));
      if (!b) return -1;
      null == b.idx && (b.idx = this.rows.indexOf(b.hash()));
      return b.idx
    };
    c.get = function(b) {
      return this.rows && this.rows.get(b)
    };
    c.del = function(b) {
      b = this.indexOf(b);
      if (-1 !== b) {
        var c = this.rows.cut(b, 1);
        if (c && c.length) return this.length = this.rows.length, this.rows.each(function(a, b, c) {
          b.idx = c
        }), b
      }
    };
    c.reIndex = function(b, c) {
      var a = this.indexOf(b),
        d = b.hash(),
        e = this.rows.indexOf(d);
      return e === a ? a : -1 !==
        e ? (c = (c || 0) + 1, b.source("Error, duplicate " + String(c) + ": " + b.source()), this.reIndex(b, c)) : this.rows.key(a, d)
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$27", function(f, c, h) {
    function k() {
      this.id = this._id = this.ref = this.cmt = this.xcmt = ""
    }
    f.extend = function(b) {
      return b.prototype = new k
    };
    c = k.prototype;
    c.flag = function(b, c) {
      var a = this.flg || (this.flg = []);
      if (null != c) a[c] = b;
      else
        for (var d = Math.max(a.length, this.src.length, this.msg.length); 0 !== d--;) a[d] = b;
      return this
    };
    c.flagged = function(b) {
      var c = this.flg || [];
      if (null !=
        b) return c[b] || 0;
      for (b = c.length; 0 !== b--;)
        if (c[b]) return !0;
      return !1
    };
    c.flags = function() {
      for (var b, c = {}, a = [], d = this.flg || [], e = d.length; 0 !== e--;) b = d[e], c[b] || (c[b] = !0, a.push(b));
      return a
    };
    c.flaggedAs = function(b, c) {
      var a = this.flg || [];
      if (null != c) return b === a[c] || 0;
      for (var d = a.length; 0 !== d--;)
        if (a[d] === b) return !0;
      return !1
    };
    c.fuzzy = function(b, c) {
      var a = this.flaggedAs(4, b);
      null != c && this.flag(c ? 4 : 0, b);
      return a
    };
    c.source = function(b, c) {
      if (null == b) return this.src[c || 0] || "";
      this.src[c || 0] = b;
      return this
    };
    c.plural =
      function(b, c) {
        if (null == b) return this.src[c || 1] || "";
        this.src[c || 1] = b || "";
        return this
      };
    c.each = function(b) {
      for (var c = -1, a = this.src, d = this.msg, e = Math.max(a.length, d.length); ++c < e;) b(c, a[c], d[c]);
      return this
    };
    c.pluralized = function() {
      return 1 < this.src.length || 1 < this.msg.length
    };
    c.translate = function(b, c) {
      this.msg[c || 0] = b || "";
      return this
    };
    c.untranslate = function(b) {
      null != b && (this.msg[b] = "");
      for (b = 0; b < this.msg.length; b++) this.msg[b] = "";
      return this
    };
    c.translation = function(b) {
      return this.msg[b || 0] || ""
    };
    c.translated =
      function(b) {
        if (null != b) return !!this.translation(b);
        var c = this.msg.length;
        for (b = 0; b < c; b++)
          if (!this.msg[b]) return !1;
        return !0
      };
    c.comment = function(b) {
      if (null == b) return this.cmt;
      this.cmt = b || "";
      return this
    };
    c.notes = function(b) {
      if (null == b) return this.xcmt;
      this.xcmt = b || "";
      return this
    };
    c.refs = function(b) {
      if (null == b) return this.ref;
      this.ref = b || "";
      return this
    };
    c.format = function(b) {
      if (null == b) return this.fmt;
      this.fmt = b;
      return this
    };
    c.context = function(b) {
      if (null == b) return this.ctx || "";
      this.ctx = b || "";
      return this
    };
    c.toString = c.toText = function() {
      return this.src.concat(this.msg, [this.id, this.ctx]).join(" ")
    };
    c.weight = function() {
      var b = 0;
      this.translation() || (b += 2);
      this.fuzzy() && (b += 1);
      return b
    };
    c.equals = function(b) {
      return this === b || this.hash() === b.hash()
    };
    c.hash = function() {
      return this.id
    };
    c.normalize = function() {
      for (var b = this.msg.length; 0 !== b--;) this.msg[b] = this.src[b] || ""
    };
    c.disabled = function(b) {
      return !!(this.lck || [])[b || 0]
    };
    c.disable = function(b) {
      (this.lck || (this.lck = []))[b || 0] = !0;
      return this
    };
    c.saved = function(b) {
      var c =
        this.drt;
      if (!c) return !0;
      if (null != b) return !c[b];
      for (b = c.length; 0 !== b--;)
        if (c[b]) return !1;
      return !0
    };
    c.unsave = function(b) {
      (this.drt || (this.drt = []))[b || 0] = !0;
      return this
    };
    c.save = function(b) {
      var c = this.drt;
      null == b ? this.drt = null : c[b] = !1;
      return this
    };
    c.is = function(b) {
      return b && (b === this || b.idx === this.idx)
    };
    c.isHTML = function(b) {
      if (null == b) return this.htm || !1;
      this.htm = b
    };
    c = null;
    return f
  }({}, p, y));
  k.register("$14", function(f, c, h) {
    function n(a) {
      return {
        "Project-Id-Version": "PACKAGE VERSION",
        "Report-Msgid-Bugs-To": "",
        "POT-Creation-Date": a || "",
        "PO-Revision-Date": a || "",
        "Last-Translator": "",
        "Language-Team": "",
        Language: "",
        "Plural-Forms": "",
        "MIME-Version": "1.0",
        "Content-Type": "text/plain; charset=UTF-8",
        "Content-Transfer-Encoding": "8bit"
      }
    }

    function b(a, b) {
      var d = a || "";
      b && (d += "\x00" + b);
      return d
    }

    function g() {
      return k.require("$24", "collection.js").init()
    }

    function a(a) {
      this.locale(a);
      this.length = 0;
      this.rows = g();
      this.head = n(this.now())
    }

    function d(a, b) {
      this.src = [a || ""];
      this.msg = [b || ""]
    }
    f.create = function(b) {
      return new a(b)
    };
    c = k.require("$26", "messages.js").extend(a);
    c.now = function() {
      function a(b, d) {
        for (var c = String(b); c.length < d;) c = "0" + c;
        return c
      }
      var b = new Date,
        d = b.getUTCFullYear(),
        c = b.getUTCMonth() + 1,
        f = b.getUTCDate(),
        g = b.getUTCHours(),
        b = b.getUTCMinutes();
      return a(d, 4) + "-" + a(c, 2) + "-" + a(f, 2) + " " + a(g, 2) + ":" + a(b, 2) + "+0000"
    };
    c.header = function(a, b) {
      var d = this.head || (this.head = {});
      if (null == b) return this.headers()[a] || "";
      d[a] = b || "";
      return this
    };
    c.headers = function(a) {
      var b, d = this.now(),
        c = this.head || (this.head = n(d));
      if (null !=
        a) {
        for (b in a) c[b] = a[b];
        return this
      }
      var f = this.locale();
      a = {};
      for (b in c) a[b] = String(c[b]);
      f ? (a.Language = String(f) || "zxx", a["Language-Team"] = f.label || a.Language, a["Plural-Forms"] = "nplurals=" + (f.nplurals || "2") + "; plural=" + (f.pluraleq || "n!=1"), a["PO-Revision-Date"] = d) : (a.Language = "", a["Plural-Forms"] = "nplurals=INTEGER; plural=EXPRESSION", a["POT-Creation-Date"] = d, a["PO-Revision-Date"] = "YEAR-MO-DA HO:MI+ZONE");
      a["X-Generator"] = "Loco - https://localise.biz/";
      return a
    };
    c.get = function(a, d) {
      var c = b(a, d);
      return this.rows.get(c)
    };
    c.add = function(a, b) {
      a instanceof d || (a = new d(a));
      b && a.context(b);
      var c = a.hash();
      if (this.rows.get(c)) throw Error("Duplicate message at index " + this.indexOf(a));
      a.idx = this.rows.add(c, a);
      this.length = this.rows.length;
      return a
    };
    c.load = function(a) {
      for (var b = -1, c, f, g, h, k, n, p = [], r = [], y = [], A = []; ++b < a.length;) c = a[b], null == c.parent ? (f = c.source || c.id, g = c.target || "", h = c.context, f || h ? (k = new d(f, g), k._id = c._id, h && k.context(h), c.flag && k.flag(c.flag, 0), c.comment && k.comment(c.comment), c.notes && k.notes(c.notes), c.refs &&
        k.refs(c.refs), null !== c.format && k.format(c.format), c.message = k, k.translation() ? k.fuzzy() ? y.push(k) : r.push(k) : A.push(k)) : 0 === b && "object" === typeof g && (this.head = g)) : p.push(c);
      for (b = -1; ++b < p.length;) try {
        c = p[b];
        f = c.source || c.id;
        k = a[c.parent] && a[c.parent].message;
        if (!k) throw Error("parent missing for plural " + f);
        n = c.plural;
        1 === n && k.plural(f);
        c.flag && k.flag(c.flag, n);
        k.translate(c.target || "", n);
        c.format && !k.format() && k.format(c.format)
      } catch (C) {}
      return this._add(A, y, r)
    };
    c._add = function(a, b, c) {
      c = [a, b, c];
      for (i = 0; 3 > i; i++)
        for (b = c[i], a = -1; ++a < b.length;) try {
          this.add(b[a])
        } catch (d) {}
      return this
    };
    c.merge = function(a) {
      var b, c = a.header("POT-Creation-Date"),
        d = this.rows,
        f = [],
        h = [],
        k = [],
        n = [],
        p = [];
      a = a.rows;
      this.rows.each(function(b, c) {
        null == a.get(b) && p.push(c)
      });
      a.each(function(a, c) {
        try {
          (b = d.get(a)) ? (b.ref = c.ref, b.fmt = c.fmt) : (b = c, n.push(b)), b.translation() ? b.fuzzy() ? h.push(b) : k.push(b) : f.push(b)
        } catch (e) {}
      });
      this.rows = g();
      this._add(f, h, k);
      c && this.header("POT-Creation-Date", c);
      return {
        add: n,
        del: p
      }
    };
    c.toString = function() {
      var a,
        b = [],
        c = [],
        f = this.headers(),
        g = !this.loc,
        h = k.require("$25", "format.js").create(void 0);
      for (a in f) c.push(a + ": " + f[a]);
      c = new d("", c.join("\n"));
      g && c.fuzzy(0, !0);
      b.push(c.toString());
      b.push("");
      this.rows.each(function(a, c) {
        a && (b.push(c.cat(h, g)), b.push(""))
      });
      return b.join("\n")
    };
    c = k.require("$27", "message.js").extend(d);
    c.hash = function() {
      return b(this.source(), this.context())
    };
    c.source = function(a, b) {
      if (null == a) return this.src[0];
      this.src[0] = a;
      null != b && this.plural(b);
      return this
    };
    c.toString = function() {
      return this.cat(k.require("$25",
        "format.js").create(void 0))
    };
    c.cat = function(a, b) {
      var c, d = [],
        f;
      (f = this.cmt) && d.push(a.prefix(f, "# "));
      (f = this.xcmt) && d.push(a.prefix(f, "#. "));
      c = this.ref;
      if (f = this._id) c += (c ? " " : "") + "loco:" + f;
      c && /\S/.test(c) && d.push(a.refs(c));
      !b && this.fuzzy() && d.push("#, fuzzy");
      (f = this.fmt) ? d.push("#, " + f + "-format"): null != f && d.push("#, no-c-format");
      (f = this.ctx) && d.push(a.pair("msgctxt", f));
      d.push(a.pair("msgid", this.src[0]));
      if (null == this.src[1]) d.push(a.pair("msgstr", b ? "" : this.msg[0]));
      else
        for (c = -1, d.push(a.pair("msgid_plural",
            this.src[1])); ++c < this.msg.length;) d.push(a.pair("msgstr[" + c + "]", b ? "" : this.msg[c]));
      return d.join("\n")
    };
    c.compare = function(a, b) {
      var c = this.weight(),
        d = a.weight();
      if (c > d) return 1;
      if (c < d) return -1;
      if (b) {
        c = this.hash().toLowerCase();
        d = a.hash().toLowerCase();
        if (c < d) return 1;
        if (c > d) return -1
      }
      return 0
    };
    c = c = null;
    return f
  }({}, p, y));
  k.register("$15", function(f, c, k) {
    f.init = function(f) {
      function b() {
        D && D.dialog("close");
        h(f).find('input[type="submit"]').attr("disabled", !1);
        h(t).addClass("jshide");
        u && u(!0)
      }

      function g() {
        h(f).find('input[type="submit"]').attr("disabled", !0);
        u && u(!1)
      }

      function a(a) {
        var b, c;
        for (b in q) c = q[b], a[b] ? a[b].value = c : h('<input type="hidden" />').attr("name", b).appendTo(a).val(c)
      }

      function d(a) {
        a.preventDefault();
        a = h(a.target).serializeArray();
        m(a);
        r = !0;
        return !1
      }

      function e(a) {
        a.preventDefault();
        D.dialog("close");
        return !1
      }

      function l(a) {
        a.preventDefault();
        D.dialog("open");
        return !1
      }

      function k(c) {
        q = c.authed && c.creds;
        B = c.method;
        if (q) "direct" !== B && (a(f), r && c.success && A.notices.success(c.success)), y = !0, b();
        else if (y = !1, c.reason) A.notices.info(c.reason);
        else if (c = c.prompt) {
          var g;
          D || (h(t).find("button.button-small").click(l), D = h('<div id="loco-fs-creds"></div>').dialog({
            dialogClass: "request-filesystem-credentials-dialog loco-modal",
            minWidth: 480,
            modal: !0,
            autoOpen: !1,
            closeOnEscape: !0
          }));
          g = D;
          g.html(c).find("form").submit(d);
          g.dialog("option", "title", g.find("h2").remove().text());
          g.find("button.cancel-button").show().click(e);
          g.find('input[type="submit"]').addClass("button-primary");
          h(t).removeClass("jshide")
        } else A.notices.error("Server didn't return credentials, nor a prompt for credentials")
      }

      function p() {
        b()
      }

      function m(a) {
        r = !1;
        a.path = C;
        a.auth = w;
        A.ajax.setNonce("fsConnect", v).post("fsConnect", a, k, p);
        return a
      }
      var q, u, t = f,
        B = null,
        r = !1,
        y = !1,
        A = c.locoScope,
        C = f.path.value,
        w = f.auth.value,
        v = f["loco-nonce"].value,
        D;
      f.connection_type ? (q = {}, q.connection_type = f.connection_type.value, y = !0) : C && w && (g(), m({}));
      return {
        applyCreds: function(b) {
          if (b.nodeType) a(b);
          else {
            var c, d = q || {};
            for (c in d) b[c] = d[c]
          }
          return this
        },
        setForm: function(b) {
          f = b;
          y || g();
          a(b);
          return this
        },
        connect: function() {
          var a = h(f).serializeArray();
          C = a.path;
          w = a.auth;
          m(a);
          return this
        },
        listen: function(a) {
          u = a;
          y && a(!0);
          return this
        }
      }
    };
    return f
  }({}, p, y));
  k.register("$16", function(f, c, p) {
    function n(c, f, h, k) {
      f = "n" === h ? g(f) : a(f);
      k && (f = d(f));
      return b([].sort, [f])(c)
    }

    function b(a, b) {
      return function(c) {
        a.apply(c, b);
        return c
      }
    }

    function g(a) {
      return function(b, c) {
        var d = b && b[a] || 0,
          f = c && c[a] || 0;
        return d === f ? 0 : d > f ? 1 : -1
      }
    }

    function a(a) {
      return function(b, c) {
        return (b && b[a] || "").localeCompare(c && c[a] || "")
      }
    }

    function d(a) {
      return function(b, c) {
        return -1 * a(b, c)
      }
    }
    f.init =
      function(a) {
        function b(a) {
          var c = -1,
            d = a.length;
          for (h("tr", r).remove(); ++c < d;) r.appendChild(a[c].$)
        }

        function c(a) {
          p = a ? A.find(a, d) : d.slice(0);
          y && (a = f[y], p = n(p, y, a.type, a.desc));
          b(p)
        }
        var d = [],
          f = [],
          g = 0,
          p, t, y, r = a.getElementsByTagName("tbody")[0],
          E = a.getElementsByTagName("thead")[0],
          A = k.require("$7", "fulltext.js").init();
        E && r && (h("th", E).each(function(a, c) {
          var e = c.getAttribute("data-sort-type");
          e && (a = g, h(c).addClass("loco-sort").click(function(c) {
            c.preventDefault();
            c = a;
            var e = f[c],
              g = e.type,
              k = !(e.desc = !e.desc);
            p = n(p || d.slice(0), c, g, k);
            b(p);
            t && t.removeClass("loco-desc loco-asc");
            t = h(e.$).addClass(k ? "loco-desc" : "loco-asc").removeClass(k ? "loco-asc" : "loco-desc");
            y = c;
            return !1
          }), f[g] = {
            $: c,
            type: e
          });
          c.hasAttribute("colspan") ? g += Number(c.getAttribute("colspan")) : g++
        }), h("tr", r).each(function(a, b) {
          var c, e, g, h = [],
            k = {
              _: a,
              $: b
            },
            l = b.getElementsByTagName("td");
          for (e in f) {
            c = l[e];
            (g = c.textContent.replace(/(^\s+|\s+$)/g, "")) && h.push(g);
            c.hasAttribute("data-sort-value") && (g = c.getAttribute("data-sort-value"));
            switch (f[e].type) {
              case "n":
                g =
                  Number(g)
            }
            k[e] = g
          }
          d[a] = k;
          A.index(a, h)
        }), a = h('form.loco-filter input[type="text"]', a.parentNode), a.length && (a = a[0], E = h(a.form), 1 < d.length ? k.require("$8", "LocoTextListener.js").listen(a, c) : E.hide(), E.on("submit", function(a) {
          a.preventDefault();
          return !1
        })))
      };
    return f
  }({}, p, y));
  var F = p.locoScope || (p.locoScope = {});
  p = p.locoConf || (p.locoConf = {});
  y = k.require("$1", "t.js").init();
  var S = p.wplang;
  k.require("$2", "array.js");
  F.l10n = y;
  y.load(p.wpl10n);
  S && y.pluraleq(S.pluraleq);
  F.string = k.require("$3", "string.js");
  F.notices = k.require("$4", "notices.js").init(y);
  F.ajax = k.require("$5", "ajax.js").init(p).localise(y);
  F.locale = k.require("$6", "locale.js");
  F.fulltext = k.require("$7", "fulltext.js");
  F.watchtext = k.require("$8", "LocoTextListener.js").listen;
  F.selector = k.require("$9", "LocoSelector.js").create;
  F.autocomp = k.require("$10", "LocoAutoComplete.js").init;
  F.tooltip = k.require("$11", "tooltip.js");
  F.po = {
    ed: k.require("$12", "poedit.js"),
    kbd: k.require("$13", "hotkeys.js"),
    init: k.require("$14", "po.js").create
  };
  F.fs = k.require("$15",
    "fsconn.js");
  h("#loco.wrap table.wp-list-table").each(function(f, c) {
    k.require("$16", "tables.js").init(c)
  })
})(window, document, window.jQuery);