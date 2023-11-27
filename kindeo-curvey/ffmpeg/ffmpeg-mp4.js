/* eslint-disable */

var ffmpegjs = (function () {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;
  return function (ffmpegjs) {
    ffmpegjs = ffmpegjs || {};

    var g, h;
    var k;
    k || (k = typeof ffmpegjs !== "undefined" ? ffmpegjs : {});
    function aa(a) {
      Array.isArray(a) || a instanceof ArrayBuffer
        ? (a = new Uint8Array(a))
        : a
        ? a instanceof Uint8Array || (a = new Uint8Array(a.buffer))
        : (a = new Uint8Array(0));
      return a;
    }
    k.preRun = function () {
      (k.mounts || []).forEach(function (a) {
        var b = ba[a.type];
        if (!b) throw Error("Bad mount type");
        var c = a.mountpoint;
        if (
          !c.match(/^\/[^\/]+$/) ||
          "/." === c ||
          "/.." === c ||
          "/tmp" === c ||
          "/home" === c ||
          "/dev" === c ||
          "/work" === c
        )
          throw Error("Bad mount point");
        n(c);
        ca(b, a.opts, c);
      });
      n("/work");
      da();
      (k.MEMFS || []).forEach(function (a) {
        if (a.name.match(/\//)) throw Error("Bad file name");
        var b = ea(a.name, "w+");
        a = aa(a.data);
        fa(b, a, 0, a.length);
        ha(b);
      });
    };
    k.postRun = function () {
      var a = Object.create(null);
      (k.MEMFS || []).forEach(function (b) {
        a[b.name] = null;
      });
      var b = (function (a) {
        var b = p(a).node.qa;
        a = Object.keys(b);
        b.__proto__ && "__proto__" === b.__proto__.name && a.push("__proto__");
        return a.map(function (a) {
          return b[a];
        });
      })("/work")
        .filter(function (b) {
          return !(b.name in a);
        })
        .map(function (a) {
          var b = aa(a.qa);
          return { name: a.name, data: b };
        });
      if ("onfilesready" in k) k.onfilesready({ MEMFS: b });
    };
    var ia = {},
      r;
    for (r in k) k.hasOwnProperty(r) && (ia[r] = k[r]);
    k.arguments = [];
    k.thisProgram = "./this.program";
    k.quit = function (a, b) {
      throw b;
    };
    k.preRun = [];
    k.postRun = [];
    var ja = !1,
      t = !1,
      ka = !1,
      la = !1;
    ja = "object" === typeof window;
    t = "function" === typeof importScripts;
    ka =
      "object" === typeof process && "function" === typeof require && !ja && !t;
    la = !ja && !ka && !t;
    var u = "";
    if (ka) {
      u = __dirname + "/";
      var ma, na;
      k.read = function (a, b) {
        ma || (ma = require("fs"));
        na || (na = require("path"));
        a = na.normalize(a);
        a = ma.readFileSync(a);
        return b ? a : a.toString();
      };
      k.readBinary = function (a) {
        a = k.read(a, !0);
        a.buffer || (a = new Uint8Array(a));
        assert(a.buffer);
        return a;
      };
      1 < process.argv.length &&
        (k.thisProgram = process.argv[1].replace(/\\/g, "/"));
      k.arguments = process.argv.slice(2);
      process.on("uncaughtException", function (a) {
        if (!(a instanceof oa)) throw a;
      });
      process.on("unhandledRejection", v);
      k.quit = function (a) {
        process.exit(a);
      };
      k.inspect = function () {
        return "[Emscripten Module object]";
      };
    } else if (la)
      "undefined" != typeof read &&
        (k.read = function (a) {
          return read(a);
        }),
        (k.readBinary = function (a) {
          if ("function" === typeof readbuffer)
            return new Uint8Array(readbuffer(a));
          a = read(a, "binary");
          assert("object" === typeof a);
          return a;
        }),
        "undefined" != typeof scriptArgs
          ? (k.arguments = scriptArgs)
          : "undefined" != typeof arguments && (k.arguments = arguments),
        "function" === typeof quit &&
          (k.quit = function (a) {
            quit(a);
          });
    else if (ja || t)
      t
        ? (u = self.location.href)
        : document.currentScript && (u = document.currentScript.src),
        _scriptDir && (u = _scriptDir),
        0 !== u.indexOf("blob:")
          ? (u = u.substr(0, u.lastIndexOf("/") + 1))
          : (u = ""),
        (k.read = function (a) {
          var b = new XMLHttpRequest();
          b.open("GET", a, !1);
          b.send(null);
          return b.responseText;
        }),
        t &&
          (k.readBinary = function (a) {
            var b = new XMLHttpRequest();
            b.open("GET", a, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
          }),
        (k.readAsync = function (a, b, c) {
          var d = new XMLHttpRequest();
          d.open("GET", a, !0);
          d.responseType = "arraybuffer";
          d.onload = function () {
            200 == d.status || (0 == d.status && d.response)
              ? b(d.response)
              : c();
          };
          d.onerror = c;
          d.send(null);
        }),
        (k.setWindowTitle = function (a) {
          document.title = a;
        });
    var pa =
        k.print ||
        ("undefined" !== typeof console
          ? console.log.bind(console)
          : "undefined" !== typeof print
          ? print
          : null),
      y =
        k.printErr ||
        ("undefined" !== typeof printErr
          ? printErr
          : ("undefined" !== typeof console && console.warn.bind(console)) ||
            pa);
    for (r in ia) ia.hasOwnProperty(r) && (k[r] = ia[r]);
    ia = void 0;
    function qa(a) {
      var b = z[ra >> 2];
      a = (b + a + 15) & -16;
      if (a <= sa()) z[ra >> 2] = a;
      else if (!ta(a)) return 0;
      return b;
    }
    var ua = {
      "f64-rem": function (a, b) {
        return a % b;
      },
      debugger: function () {
        debugger;
      },
    };
    "object" !== typeof WebAssembly && y("no native wasm support detected");
    var va,
      wa = !1;
    function assert(a, b) {
      a || v("Assertion failed: " + b);
    }
    function xa(a) {
      if ("number" === typeof a) {
        var b = !0;
        var c = a;
      } else (b = !1), (c = a.length);
      var d = ya(Math.max(c, 1));
      if (b) {
        a = d;
        assert(0 == (d & 3));
        for (b = d + (c & -4); a < b; a += 4) z[a >> 2] = 0;
        for (b = d + c; a < b; ) A[a++ >> 0] = 0;
        return d;
      }
      a.subarray || a.slice ? B.set(a, d) : B.set(new Uint8Array(a), d);
      return d;
    }
    var za =
      "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function Aa(a, b, c) {
      var d = b + c;
      for (c = b; a[c] && !(c >= d); ) ++c;
      if (16 < c - b && a.subarray && za) return za.decode(a.subarray(b, c));
      for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
          var f = a[b++] & 63;
          if (192 == (e & 224)) d += String.fromCharCode(((e & 31) << 6) | f);
          else {
            var l = a[b++] & 63;
            e =
              224 == (e & 240)
                ? ((e & 15) << 12) | (f << 6) | l
                : ((e & 7) << 18) | (f << 12) | (l << 6) | (a[b++] & 63);
            65536 > e
              ? (d += String.fromCharCode(e))
              : ((e -= 65536),
                (d += String.fromCharCode(
                  55296 | (e >> 10),
                  56320 | (e & 1023)
                )));
          }
        } else d += String.fromCharCode(e);
      }
      return d;
    }
    function Ba(a) {
      return a ? Aa(B, a, void 0) : "";
    }
    function Ca(a, b, c, d) {
      if (!(0 < d)) return 0;
      var e = c;
      d = c + d - 1;
      for (var f = 0; f < a.length; ++f) {
        var l = a.charCodeAt(f);
        if (55296 <= l && 57343 >= l) {
          var m = a.charCodeAt(++f);
          l = (65536 + ((l & 1023) << 10)) | (m & 1023);
        }
        if (127 >= l) {
          if (c >= d) break;
          b[c++] = l;
        } else {
          if (2047 >= l) {
            if (c + 1 >= d) break;
            b[c++] = 192 | (l >> 6);
          } else {
            if (65535 >= l) {
              if (c + 2 >= d) break;
              b[c++] = 224 | (l >> 12);
            } else {
              if (c + 3 >= d) break;
              b[c++] = 240 | (l >> 18);
              b[c++] = 128 | ((l >> 12) & 63);
            }
            b[c++] = 128 | ((l >> 6) & 63);
          }
          b[c++] = 128 | (l & 63);
        }
      }
      b[c] = 0;
      return c - e;
    }
    function Da(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d &&
          57343 >= d &&
          (d = (65536 + ((d & 1023) << 10)) | (a.charCodeAt(++c) & 1023));
        127 >= d ? ++b : (b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4);
      }
      return b;
    }
    "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
    function Ea(a) {
      var b = Da(a) + 1,
        c = Ga(b);
      Ca(a, A, c, b);
      return c;
    }
    function Ha(a) {
      0 < a % 65536 && (a += 65536 - (a % 65536));
      return a;
    }
    var buffer, A, B, Ia, z;
    function Ja() {
      k.HEAP8 = A = new Int8Array(buffer);
      k.HEAP16 = Ia = new Int16Array(buffer);
      k.HEAP32 = z = new Int32Array(buffer);
      k.HEAPU8 = B = new Uint8Array(buffer);
      k.HEAPU16 = new Uint16Array(buffer);
      k.HEAPU32 = new Uint32Array(buffer);
      k.HEAPF32 = new Float32Array(buffer);
      k.HEAPF64 = new Float64Array(buffer);
    }
    var ra = 3149984,
      Ka = k.TOTAL_MEMORY || 16777216;
    5242880 > Ka &&
      y(
        "TOTAL_MEMORY should be larger than TOTAL_STACK, was " +
          Ka +
          "! (TOTAL_STACK=5242880)"
      );
    k.buffer
      ? (buffer = k.buffer)
      : "object" === typeof WebAssembly &&
        "function" === typeof WebAssembly.Memory
      ? ((va = new WebAssembly.Memory({ initial: Ka / 65536 })),
        (buffer = va.buffer))
      : (buffer = new ArrayBuffer(Ka));
    Ja();
    z[ra >> 2] = 8392896;
    function La(a) {
      for (; 0 < a.length; ) {
        var b = a.shift();
        if ("function" == typeof b) b();
        else {
          var c = b.pb;
          "number" === typeof c
            ? void 0 === b.Wa
              ? k.dynCall_v(c)
              : k.dynCall_vi(c, b.Wa)
            : c(void 0 === b.Wa ? null : b.Wa);
        }
      }
    }
    var Ma = [],
      Na = [],
      Oa = [],
      Pa = [],
      Qa = !1;
    function Ra() {
      Qa ||
        ((Qa = !0),
        k.noFSInit ||
          Sa ||
          ((Sa = !0),
          Ta(),
          (k.stdin = k.stdin),
          (k.stdout = k.stdout),
          (k.stderr = k.stderr),
          k.stdin ? Ua("stdin", k.stdin) : Va("/dev/tty", "/dev/stdin"),
          k.stdout
            ? Ua("stdout", null, k.stdout)
            : Va("/dev/tty", "/dev/stdout"),
          k.stderr
            ? Ua("stderr", null, k.stderr)
            : Va("/dev/tty1", "/dev/stderr"),
          ea("/dev/stdin", "r"),
          ea("/dev/stdout", "w"),
          ea("/dev/stderr", "w")),
        La(Na));
    }
    function Wa() {
      var a = k.preRun.shift();
      Ma.unshift(a);
    }
    var Xa = Math.abs,
      $a = Math.ceil,
      ab = Math.floor,
      bb = Math.min,
      cb = Math.trunc,
      db = 0,
      eb = null,
      fb = null;
    k.preloadedImages = {};
    k.preloadedAudios = {};
    function gb() {
      var a = hb;
      return String.prototype.startsWith
        ? a.startsWith("data:application/octet-stream;base64,")
        : 0 === a.indexOf("data:application/octet-stream;base64,");
    }
    var hb = "ffmpeg-mp4.wasm";
    if (!gb()) {
      var ib = hb;
      hb = k.locateFile ? k.locateFile(ib, u) : u + ib;
    }
    function jb() {
      try {
        if (k.wasmBinary) return new Uint8Array(k.wasmBinary);
        if (k.readBinary) return k.readBinary(hb);
        throw "both async and sync fetching of the wasm failed";
      } catch (a) {
        v(a);
      }
    }
    function kb() {
      return k.wasmBinary || (!ja && !t) || "function" !== typeof fetch
        ? new Promise(function (a) {
            a(jb());
          })
        : fetch(hb, { credentials: "same-origin" })
            .then(function (a) {
              if (!a.ok)
                throw "failed to load wasm binary file at '" + hb + "'";
              return a.arrayBuffer();
            })
            .catch(function () {
              return jb();
            });
    }
    function lb(a) {
      function b(a) {
        k.asm = a.exports;
        db--;
        k.monitorRunDependencies && k.monitorRunDependencies(db);
        0 == db &&
          (null !== eb && (clearInterval(eb), (eb = null)),
          fb && ((a = fb), (fb = null), a()));
      }
      function c(a) {
        b(a.instance);
      }
      function d(a) {
        kb()
          .then(function (a) {
            return WebAssembly.instantiate(a, e);
          })
          .then(a, function (a) {
            y("failed to asynchronously prepare wasm: " + a);
            v(a);
          });
      }
      var e = {
        env: a,
        global: { NaN: NaN, Infinity: Infinity },
        "global.Math": Math,
        asm2wasm: ua,
      };
      db++;
      k.monitorRunDependencies && k.monitorRunDependencies(db);
      if (k.instantiateWasm)
        try {
          return k.instantiateWasm(e, b);
        } catch (f) {
          return (
            y("Module.instantiateWasm callback failed with error: " + f), !1
          );
        }
      k.wasmBinary ||
      "function" !== typeof WebAssembly.instantiateStreaming ||
      gb() ||
      "function" !== typeof fetch
        ? d(c)
        : WebAssembly.instantiateStreaming(
            fetch(hb, { credentials: "same-origin" }),
            e
          ).then(c, function (a) {
            y("wasm streaming compile failed: " + a);
            y("falling back to ArrayBuffer instantiation");
            d(c);
          });
      return {};
    }
    k.asm = function (a, b) {
      b.memory = va;
      b.table = new WebAssembly.Table({
        initial: 5442,
        maximum: 5442,
        element: "anyfunc",
      });
      b.__memory_base = 1024;
      b.__table_base = 0;
      return lb(b);
    };
    Na.push({
      pb: function () {
        mb();
      },
    });
    var C = {};
    function nb(a) {
      if (nb.Aa) {
        var b = z[a >> 2];
        var c = z[b >> 2];
      } else
        (nb.Aa = !0),
          (C.USER = C.LOGNAME = "web_user"),
          (C.PATH = "/"),
          (C.PWD = "/"),
          (C.HOME = "/home/web_user"),
          (C.LANG = "C.UTF-8"),
          (C._ = k.thisProgram),
          (c = Qa ? ya(1024) : qa(1024)),
          (b = Qa ? ya(256) : qa(256)),
          (z[b >> 2] = c),
          (z[a >> 2] = b);
      a = [];
      var d = 0,
        e;
      for (e in C)
        if ("string" === typeof C[e]) {
          var f = e + "=" + C[e];
          a.push(f);
          d += f.length;
        }
      if (1024 < d) throw Error("Environment size exceeded TOTAL_ENV_SIZE!");
      for (e = 0; e < a.length; e++) {
        d = f = a[e];
        for (var l = c, m = 0; m < d.length; ++m) A[l++ >> 0] = d.charCodeAt(m);
        A[l >> 0] = 0;
        z[(b + 4 * e) >> 2] = c;
        c += f.length + 1;
      }
      z[(b + 4 * a.length) >> 2] = 0;
    }
    function ob(a) {
      k.___errno_location && (z[k.___errno_location() >> 2] = a);
      return a;
    }
    function pb(a, b) {
      for (var c = 0, d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        "." === e
          ? a.splice(d, 1)
          : ".." === e
          ? (a.splice(d, 1), c++)
          : c && (a.splice(d, 1), c--);
      }
      if (b) for (; c; c--) a.unshift("..");
      return a;
    }
    function qb(a) {
      var b = "/" === a.charAt(0),
        c = "/" === a.substr(-1);
      (a = pb(
        a.split("/").filter(function (a) {
          return !!a;
        }),
        !b
      ).join("/")) ||
        b ||
        (a = ".");
      a && c && (a += "/");
      return (b ? "/" : "") + a;
    }
    function rb(a) {
      var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
        .exec(a)
        .slice(1);
      a = b[0];
      b = b[1];
      if (!a && !b) return ".";
      b && (b = b.substr(0, b.length - 1));
      return a + b;
    }
    function sb(a) {
      if ("/" === a) return "/";
      var b = a.lastIndexOf("/");
      return -1 === b ? a : a.substr(b + 1);
    }
    function tb() {
      var a = Array.prototype.slice.call(arguments, 0);
      return qb(a.join("/"));
    }
    function D(a, b) {
      return qb(a + "/" + b);
    }
    function ub() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : vb;
        if ("string" !== typeof b)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }
      a = pb(
        a.split("/").filter(function (a) {
          return !!a;
        }),
        !b
      ).join("/");
      return (b ? "/" : "") + a || ".";
    }
    function wb(a, b) {
      function c(a) {
        for (var b = 0; b < a.length && "" === a[b]; b++);
        for (var c = a.length - 1; 0 <= c && "" === a[c]; c--);
        return b > c ? [] : a.slice(b, c - b + 1);
      }
      a = ub(a).substr(1);
      b = ub(b).substr(1);
      a = c(a.split("/"));
      b = c(b.split("/"));
      for (var d = Math.min(a.length, b.length), e = d, f = 0; f < d; f++)
        if (a[f] !== b[f]) {
          e = f;
          break;
        }
      d = [];
      for (f = e; f < a.length; f++) d.push("..");
      d = d.concat(b.slice(e));
      return d.join("/");
    }
    var yb = [];
    function zb(a, b) {
      yb[a] = { input: [], output: [], Na: b };
      Ab(a, Bb);
    }
    var Bb = {
        open: function (a) {
          var b = yb[a.node.rdev];
          if (!b) throw new E(19);
          a.tty = b;
          a.seekable = !1;
        },
        close: function (a) {
          a.tty.Na.flush(a.tty);
        },
        flush: function (a) {
          a.tty.Na.flush(a.tty);
        },
        read: function (a, b, c, d) {
          if (!a.tty || !a.tty.Na.jb) throw new E(6);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var l = a.tty.Na.jb(a.tty);
            } catch (m) {
              throw new E(5);
            }
            if (void 0 === l && 0 === e) throw new E(11);
            if (null === l || void 0 === l) break;
            e++;
            b[c + f] = l;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        },
        write: function (a, b, c, d) {
          if (!a.tty || !a.tty.Na.Xa) throw new E(6);
          try {
            for (var e = 0; e < d; e++) a.tty.Na.Xa(a.tty, b[c + e]);
          } catch (f) {
            throw new E(5);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      Db = {
        jb: function (a) {
          if (!a.input.length) {
            var b = null;
            if (ka) {
              var c = new Buffer(256),
                d = 0,
                e = process.stdin.fd;
              if ("win32" != process.platform) {
                var f = !1;
                try {
                  (e = fs.openSync("/dev/stdin", "r")), (f = !0);
                } catch (l) {}
              }
              try {
                d = fs.readSync(e, c, 0, 256, null);
              } catch (l) {
                if (-1 != l.toString().indexOf("EOF")) d = 0;
                else throw l;
              }
              f && fs.closeSync(e);
              0 < d ? (b = c.slice(0, d).toString("utf-8")) : (b = null);
            } else
              "undefined" != typeof window && "function" == typeof window.prompt
                ? ((b = window.prompt("Input: ")), null !== b && (b += "\n"))
                : "function" == typeof readline &&
                  ((b = readline()), null !== b && (b += "\n"));
            if (!b) return null;
            a.input = Cb(b, !0);
          }
          return a.input.shift();
        },
        Xa: function (a, b) {
          null === b || 10 === b
            ? (pa(Aa(a.output, 0)), (a.output = []))
            : 0 != b && a.output.push(b);
        },
        flush: function (a) {
          a.output &&
            0 < a.output.length &&
            (pa(Aa(a.output, 0)), (a.output = []));
        },
      },
      Eb = {
        Xa: function (a, b) {
          null === b || 10 === b
            ? (y(Aa(a.output, 0)), (a.output = []))
            : 0 != b && a.output.push(b);
        },
        flush: function (a) {
          a.output &&
            0 < a.output.length &&
            (y(Aa(a.output, 0)), (a.output = []));
        },
      },
      F = {
        Ca: null,
        va: function () {
          return F.createNode(null, "/", 16895, 0);
        },
        createNode: function (a, b, c, d) {
          if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new E(1);
          F.Ca ||
            (F.Ca = {
              dir: {
                node: {
                  za: F.ra.za,
                  wa: F.ra.wa,
                  lookup: F.ra.lookup,
                  La: F.ra.La,
                  rename: F.ra.rename,
                  unlink: F.ra.unlink,
                  rmdir: F.ra.rmdir,
                  readdir: F.ra.readdir,
                  symlink: F.ra.symlink,
                },
                stream: { Da: F.sa.Da },
              },
              file: {
                node: { za: F.ra.za, wa: F.ra.wa },
                stream: {
                  Da: F.sa.Da,
                  read: F.sa.read,
                  write: F.sa.write,
                  $a: F.sa.$a,
                  kb: F.sa.kb,
                  lb: F.sa.lb,
                },
              },
              link: {
                node: { za: F.ra.za, wa: F.ra.wa, readlink: F.ra.readlink },
                stream: {},
              },
              cb: { node: { za: F.ra.za, wa: F.ra.wa }, stream: Fb },
            });
          c = Gb(a, b, c, d);
          K(c.mode)
            ? ((c.ra = F.Ca.dir.node), (c.sa = F.Ca.dir.stream), (c.qa = {}))
            : L(c.mode)
            ? ((c.ra = F.Ca.file.node),
              (c.sa = F.Ca.file.stream),
              (c.ua = 0),
              (c.qa = null))
            : 40960 === (c.mode & 61440)
            ? ((c.ra = F.Ca.link.node), (c.sa = F.Ca.link.stream))
            : 8192 === (c.mode & 61440) &&
              ((c.ra = F.Ca.cb.node), (c.sa = F.Ca.cb.stream));
          c.timestamp = Date.now();
          a && (a.qa[b] = c);
          return c;
        },
        Ob: function (a) {
          if (a.qa && a.qa.subarray) {
            for (var b = [], c = 0; c < a.ua; ++c) b.push(a.qa[c]);
            return b;
          }
          return a.qa;
        },
        rb: function (a) {
          return a.qa
            ? a.qa.subarray
              ? a.qa.subarray(0, a.ua)
              : new Uint8Array(a.qa)
            : new Uint8Array();
        },
        fb: function (a, b) {
          var c = a.qa ? a.qa.length : 0;
          c >= b ||
            ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) | 0)),
            0 != c && (b = Math.max(b, 256)),
            (c = a.qa),
            (a.qa = new Uint8Array(b)),
            0 < a.ua && a.qa.set(c.subarray(0, a.ua), 0));
        },
        Db: function (a, b) {
          if (a.ua != b)
            if (0 == b) (a.qa = null), (a.ua = 0);
            else {
              if (!a.qa || a.qa.subarray) {
                var c = a.qa;
                a.qa = new Uint8Array(new ArrayBuffer(b));
                c && a.qa.set(c.subarray(0, Math.min(b, a.ua)));
              } else if ((a.qa || (a.qa = []), a.qa.length > b))
                a.qa.length = b;
              else for (; a.qa.length < b; ) a.qa.push(0);
              a.ua = b;
            }
        },
        ra: {
          za: function (a) {
            var b = {};
            b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
            b.ino = a.id;
            b.mode = a.mode;
            b.nlink = 1;
            b.uid = 0;
            b.gid = 0;
            b.rdev = a.rdev;
            K(a.mode)
              ? (b.size = 4096)
              : L(a.mode)
              ? (b.size = a.ua)
              : 40960 === (a.mode & 61440)
              ? (b.size = a.link.length)
              : (b.size = 0);
            b.atime = new Date(a.timestamp);
            b.mtime = new Date(a.timestamp);
            b.ctime = new Date(a.timestamp);
            b.Ea = 4096;
            b.blocks = Math.ceil(b.size / b.Ea);
            return b;
          },
          wa: function (a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
            void 0 !== b.size && F.Db(a, b.size);
          },
          lookup: function () {
            throw Hb[2];
          },
          La: function (a, b, c, d) {
            return F.createNode(a, b, c, d);
          },
          rename: function (a, b, c) {
            if (K(a.mode)) {
              try {
                var d = M(b, c);
              } catch (f) {}
              if (d) for (var e in d.qa) throw new E(39);
            }
            delete a.parent.qa[a.name];
            a.name = c;
            b.qa[c] = a;
            a.parent = b;
          },
          unlink: function (a, b) {
            delete a.qa[b];
          },
          rmdir: function (a, b) {
            var c = M(a, b),
              d;
            for (d in c.qa) throw new E(39);
            delete a.qa[b];
          },
          readdir: function (a) {
            var b = [".", ".."],
              c;
            for (c in a.qa) a.qa.hasOwnProperty(c) && b.push(c);
            return b;
          },
          symlink: function (a, b, c) {
            a = F.createNode(a, b, 41471, 0);
            a.link = c;
            return a;
          },
          readlink: function (a) {
            if (40960 !== (a.mode & 61440)) throw new E(22);
            return a.link;
          },
        },
        sa: {
          read: function (a, b, c, d, e) {
            var f = a.node.qa;
            if (e >= a.node.ua) return 0;
            a = Math.min(a.node.ua - e, d);
            if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
            else for (d = 0; d < a; d++) b[c + d] = f[e + d];
            return a;
          },
          write: function (a, b, c, d, e, f) {
            f = !1;
            if (!d) return 0;
            a = a.node;
            a.timestamp = Date.now();
            if (b.subarray && (!a.qa || a.qa.subarray)) {
              if (f) return (a.qa = b.subarray(c, c + d)), (a.ua = d);
              if (0 === a.ua && 0 === e)
                return (
                  (a.qa = new Uint8Array(b.subarray(c, c + d))), (a.ua = d)
                );
              if (e + d <= a.ua) return a.qa.set(b.subarray(c, c + d), e), d;
            }
            F.fb(a, e + d);
            if (a.qa.subarray && b.subarray) a.qa.set(b.subarray(c, c + d), e);
            else for (f = 0; f < d; f++) a.qa[e + f] = b[c + f];
            a.ua = Math.max(a.ua, e + d);
            return d;
          },
          Da: function (a, b, c) {
            1 === c
              ? (b += a.position)
              : 2 === c && L(a.node.mode) && (b += a.node.ua);
            if (0 > b) throw new E(22);
            return b;
          },
          $a: function (a, b, c) {
            F.fb(a.node, b + c);
            a.node.ua = Math.max(a.node.ua, b + c);
          },
          kb: function (a, b, c, d, e, f, l) {
            if (!L(a.node.mode)) throw new E(19);
            c = a.node.qa;
            if (l & 2 || (c.buffer !== b && c.buffer !== b.buffer)) {
              if (0 < e || e + d < a.node.ua)
                c.subarray
                  ? (c = c.subarray(e, e + d))
                  : (c = Array.prototype.slice.call(c, e, e + d));
              a = !0;
              d = ya(d);
              if (!d) throw new E(12);
              b.set(c, d);
            } else (a = !1), (d = c.byteOffset);
            return { Pb: d, Nb: a };
          },
          lb: function (a, b, c, d, e) {
            if (!L(a.node.mode)) throw new E(19);
            if (e & 2) return 0;
            F.sa.write(a, b, 0, d, c, !1);
            return 0;
          },
        },
      },
      N = {
        eb: {},
        indexedDB: function () {
          if ("undefined" !== typeof indexedDB) return indexedDB;
          var a = null;
          "object" === typeof window &&
            (a =
              window.indexedDB ||
              window.mozIndexedDB ||
              window.webkitIndexedDB ||
              window.msIndexedDB);
          assert(a, "IDBFS used, but indexedDB not supported");
          return a;
        },
        nb: 21,
        Ia: "FILE_DATA",
        va: function (a) {
          return F.va.apply(null, arguments);
        },
        Qb: function (a, b, c) {
          N.sb(a, function (d, e) {
            if (d) return c(d);
            N.tb(a, function (a, d) {
              if (a) return c(a);
              N.Ab(b ? d : e, b ? e : d, c);
            });
          });
        },
        qb: function (a, b) {
          var c = N.eb[a];
          if (c) return b(null, c);
          try {
            var d = N.indexedDB().open(a, N.nb);
          } catch (e) {
            return b(e);
          }
          if (!d) return b("Unable to connect to IndexedDB");
          d.onupgradeneeded = function (a) {
            var b = a.target.result;
            a = a.target.transaction;
            b = b.objectStoreNames.contains(N.Ia)
              ? a.objectStore(N.Ia)
              : b.createObjectStore(N.Ia);
            b.indexNames.contains("timestamp") ||
              b.createIndex("timestamp", "timestamp", { unique: !1 });
          };
          d.onsuccess = function () {
            c = d.result;
            N.eb[a] = c;
            b(null, c);
          };
          d.onerror = function (a) {
            b(this.error);
            a.preventDefault();
          };
        },
        sb: function (a, b) {
          function c(a) {
            return "." !== a && ".." !== a;
          }
          function d(a) {
            return function (b) {
              return D(a, b);
            };
          }
          var e = {};
          for (a = Ib(a.Qa).filter(c).map(d(a.Qa)); a.length; ) {
            var f = a.pop();
            try {
              var l = Jb(f);
            } catch (m) {
              return b(m);
            }
            K(l.mode) && a.push.apply(a, Ib(f).filter(c).map(d(f)));
            e[f] = { timestamp: l.mtime };
          }
          return b(null, { type: "local", entries: e });
        },
        tb: function (a, b) {
          var c = {};
          N.qb(a.Qa, function (a, e) {
            if (a) return b(a);
            try {
              var d = e.transaction([N.Ia], "readonly");
              d.onerror = function (a) {
                b(this.error);
                a.preventDefault();
              };
              d.objectStore(N.Ia).index("timestamp").openKeyCursor().onsuccess =
                function (a) {
                  a = a.target.result;
                  if (!a) return b(null, { type: "remote", db: e, entries: c });
                  c[a.primaryKey] = { timestamp: a.key };
                  a.continue();
                };
            } catch (l) {
              return b(l);
            }
          });
        },
        vb: function (a, b) {
          try {
            var c = p(a).node;
            var d = Jb(a);
          } catch (e) {
            return b(e);
          }
          return K(d.mode)
            ? b(null, { timestamp: d.mtime, mode: d.mode })
            : L(d.mode)
            ? ((c.qa = F.rb(c)),
              b(null, { timestamp: d.mtime, mode: d.mode, qa: c.qa }))
            : b(Error("node type not supported"));
        },
        Gb: function (a, b, c) {
          try {
            if (K(b.mode)) n(a, b.mode);
            else if (L(b.mode)) {
              var d = b.qa,
                e = { bb: !0 };
              e = e || {};
              e.flags = e.flags || "w";
              var f = ea(a, e.flags, e.mode);
              if ("string" === typeof d) {
                var l = new Uint8Array(Da(d) + 1),
                  m = Ca(d, l, 0, l.length);
                fa(f, l, 0, m, void 0, e.bb);
              } else if (ArrayBuffer.isView(d))
                fa(f, d, 0, d.byteLength, void 0, e.bb);
              else throw Error("Unsupported data type");
              ha(f);
            } else return c(Error("node type not supported"));
            var x = b.mode,
              q;
            "string" === typeof a ? (q = p(a, { Fa: !0 }).node) : (q = a);
            if (!q.ra.wa) throw new E(1);
            q.ra.wa(q, {
              mode: (x & 4095) | (q.mode & -4096),
              timestamp: Date.now(),
            });
            var w = b.timestamp,
              I = b.timestamp,
              J = p(a, { Fa: !0 }).node;
            J.ra.wa(J, { timestamp: Math.max(w, I) });
          } catch (T) {
            return c(T);
          }
          c(null);
        },
        Bb: function (a, b) {
          try {
            p(a);
            var c = Jb(a);
            K(c.mode) ? Kb(a) : L(c.mode) && Lb(a);
          } catch (d) {
            return b(d);
          }
          b(null);
        },
        wb: function (a, b, c) {
          a = a.get(b);
          a.onsuccess = function (a) {
            c(null, a.target.result);
          };
          a.onerror = function (a) {
            c(this.error);
            a.preventDefault();
          };
        },
        Hb: function (a, b, c, d) {
          a = a.put(c, b);
          a.onsuccess = function () {
            d(null);
          };
          a.onerror = function (a) {
            d(this.error);
            a.preventDefault();
          };
        },
        Cb: function (a, b, c) {
          a = a.delete(b);
          a.onsuccess = function () {
            c(null);
          };
          a.onerror = function (a) {
            c(this.error);
            a.preventDefault();
          };
        },
        Ab: function (a, b, c) {
          function d(a) {
            if (a) {
              if (!d.zb) return (d.zb = !0), c(a);
            } else if (++m >= e) return c(null);
          }
          var e = 0,
            f = [];
          Object.keys(a.entries).forEach(function (c) {
            var d = a.entries[c],
              l = b.entries[c];
            if (!l || d.timestamp > l.timestamp) f.push(c), e++;
          });
          var l = [];
          Object.keys(b.entries).forEach(function (b) {
            a.entries[b] || (l.push(b), e++);
          });
          if (!e) return c(null);
          var m = 0,
            x = ("remote" === a.type ? a.db : b.db).transaction(
              [N.Ia],
              "readwrite"
            ),
            q = x.objectStore(N.Ia);
          x.onerror = function (a) {
            d(this.error);
            a.preventDefault();
          };
          f.sort().forEach(function (a) {
            "local" === b.type
              ? N.wb(q, a, function (b, c) {
                  if (b) return d(b);
                  N.Gb(a, c, d);
                })
              : N.vb(a, function (b, c) {
                  if (b) return d(b);
                  N.Hb(q, a, c, d);
                });
          });
          l.sort()
            .reverse()
            .forEach(function (a) {
              "local" === b.type ? N.Bb(a, d) : N.Cb(q, a, d);
            });
        },
      },
      P = {
        Sa: !1,
        Fb: function () {
          P.Sa = !!process.platform.match(/^win/);
          var a = process.binding("constants");
          a.fs && (a = a.fs);
          P.gb = {
            1024: a.O_APPEND,
            64: a.O_CREAT,
            128: a.O_EXCL,
            0: a.O_RDONLY,
            2: a.O_RDWR,
            4096: a.O_SYNC,
            512: a.O_TRUNC,
            1: a.O_WRONLY,
          };
        },
        ab: function (a) {
          return Buffer.Aa ? Buffer.from(a) : new Buffer(a);
        },
        va: function (a) {
          assert(ka);
          return P.createNode(null, "/", P.ib(a.Oa.root), 0);
        },
        createNode: function (a, b, c) {
          if (!K(c) && !L(c) && 40960 !== (c & 61440)) throw new E(22);
          a = Gb(a, b, c);
          a.ra = P.ra;
          a.sa = P.sa;
          return a;
        },
        ib: function (a) {
          try {
            var b = fs.lstatSync(a);
            P.Sa && (b.mode = b.mode | ((b.mode & 292) >> 2));
          } catch (c) {
            if (!c.code) throw c;
            throw new E(-c.ta);
          }
          return b.mode;
        },
        Ba: function (a) {
          for (var b = []; a.parent !== a; ) b.push(a.name), (a = a.parent);
          b.push(a.va.Oa.root);
          b.reverse();
          return tb.apply(null, b);
        },
        ob: function (a) {
          a &= -2656257;
          var b = 0,
            c;
          for (c in P.gb) a & c && ((b |= P.gb[c]), (a ^= c));
          if (a) throw new E(22);
          return b;
        },
        ra: {
          za: function (a) {
            a = P.Ba(a);
            try {
              var b = fs.lstatSync(a);
            } catch (c) {
              if (!c.code) throw c;
              throw new E(-c.ta);
            }
            P.Sa && !b.Ea && (b.Ea = 4096);
            P.Sa && !b.blocks && (b.blocks = ((b.size + b.Ea - 1) / b.Ea) | 0);
            return {
              dev: b.dev,
              ino: b.ino,
              mode: b.mode,
              nlink: b.nlink,
              uid: b.uid,
              gid: b.gid,
              rdev: b.rdev,
              size: b.size,
              atime: b.atime,
              mtime: b.mtime,
              ctime: b.ctime,
              Ea: b.Ea,
              blocks: b.blocks,
            };
          },
          wa: function (a, b) {
            var c = P.Ba(a);
            try {
              void 0 !== b.mode && (fs.chmodSync(c, b.mode), (a.mode = b.mode)),
                void 0 !== b.size && fs.truncateSync(c, b.size);
            } catch (d) {
              if (!d.code) throw d;
              throw new E(-d.ta);
            }
          },
          lookup: function (a, b) {
            var c = D(P.Ba(a), b);
            c = P.ib(c);
            return P.createNode(a, b, c);
          },
          La: function (a, b, c, d) {
            a = P.createNode(a, b, c, d);
            b = P.Ba(a);
            try {
              K(a.mode)
                ? fs.mkdirSync(b, a.mode)
                : fs.writeFileSync(b, "", { mode: a.mode });
            } catch (e) {
              if (!e.code) throw e;
              throw new E(-e.ta);
            }
            return a;
          },
          rename: function (a, b, c) {
            a = P.Ba(a);
            b = D(P.Ba(b), c);
            try {
              fs.renameSync(a, b);
            } catch (d) {
              if (!d.code) throw d;
              throw new E(-d.ta);
            }
          },
          unlink: function (a, b) {
            a = D(P.Ba(a), b);
            try {
              fs.unlinkSync(a);
            } catch (c) {
              if (!c.code) throw c;
              throw new E(-c.ta);
            }
          },
          rmdir: function (a, b) {
            a = D(P.Ba(a), b);
            try {
              fs.rmdirSync(a);
            } catch (c) {
              if (!c.code) throw c;
              throw new E(-c.ta);
            }
          },
          readdir: function (a) {
            a = P.Ba(a);
            try {
              return fs.readdirSync(a);
            } catch (b) {
              if (!b.code) throw b;
              throw new E(-b.ta);
            }
          },
          symlink: function (a, b, c) {
            a = D(P.Ba(a), b);
            try {
              fs.symlinkSync(c, a);
            } catch (d) {
              if (!d.code) throw d;
              throw new E(-d.ta);
            }
          },
          readlink: function (a) {
            var b = P.Ba(a);
            try {
              return (
                (b = fs.readlinkSync(b)),
                (b = Mb.relative(Mb.resolve(a.va.Oa.root), b))
              );
            } catch (c) {
              if (!c.code) throw c;
              throw new E(-c.ta);
            }
          },
        },
        sa: {
          open: function (a) {
            var b = P.Ba(a.node);
            try {
              L(a.node.mode) && (a.Ra = fs.openSync(b, P.ob(a.flags)));
            } catch (c) {
              if (!c.code) throw c;
              throw new E(-c.ta);
            }
          },
          close: function (a) {
            try {
              L(a.node.mode) && a.Ra && fs.closeSync(a.Ra);
            } catch (b) {
              if (!b.code) throw b;
              throw new E(-b.ta);
            }
          },
          read: function (a, b, c, d, e) {
            if (0 === d) return 0;
            try {
              return fs.readSync(a.Ra, P.ab(b.buffer), c, d, e);
            } catch (f) {
              throw new E(-f.ta);
            }
          },
          write: function (a, b, c, d, e) {
            try {
              return fs.writeSync(a.Ra, P.ab(b.buffer), c, d, e);
            } catch (f) {
              throw new E(-f.ta);
            }
          },
          Da: function (a, b, c) {
            if (1 === c) b += a.position;
            else if (2 === c && L(a.node.mode))
              try {
                b += fs.fstatSync(a.Ra).size;
              } catch (d) {
                throw new E(-d.ta);
              }
            if (0 > b) throw new E(22);
            return b;
          },
        },
      },
      Q = {
        Va: 16895,
        Pa: 33279,
        Ya: null,
        va: function (a) {
          function b(a) {
            a = a.split("/");
            for (var b = d, c = 0; c < a.length - 1; c++) {
              var f = a.slice(0, c + 1).join("/");
              e[f] || (e[f] = Q.createNode(b, a[c], Q.Va, 0));
              b = e[f];
            }
            return b;
          }
          function c(a) {
            a = a.split("/");
            return a[a.length - 1];
          }
          assert(t);
          Q.Ya || (Q.Ya = new FileReaderSync());
          var d = Q.createNode(null, "/", Q.Va, 0),
            e = {};
          Array.prototype.forEach.call(a.Oa.files || [], function (a) {
            Q.createNode(b(a.name), c(a.name), Q.Pa, 0, a, a.lastModifiedDate);
          });
          (a.Oa.blobs || []).forEach(function (a) {
            Q.createNode(b(a.name), c(a.name), Q.Pa, 0, a.data);
          });
          (a.Oa.packages || []).forEach(function (a) {
            a.metadata.files.forEach(function (d) {
              var e = d.filename.substr(1);
              Q.createNode(b(e), c(e), Q.Pa, 0, a.blob.slice(d.start, d.end));
            });
          });
          return d;
        },
        createNode: function (a, b, c, d, e, f) {
          d = Gb(a, b, c);
          d.mode = c;
          d.ra = Q.ra;
          d.sa = Q.sa;
          d.timestamp = (f || new Date()).getTime();
          assert(Q.Pa !== Q.Va);
          c === Q.Pa
            ? ((d.size = e.size), (d.qa = e))
            : ((d.size = 4096), (d.qa = {}));
          a && (a.qa[b] = d);
          return d;
        },
        ra: {
          za: function (a) {
            return {
              dev: 1,
              ino: void 0,
              mode: a.mode,
              nlink: 1,
              uid: 0,
              gid: 0,
              rdev: void 0,
              size: a.size,
              atime: new Date(a.timestamp),
              mtime: new Date(a.timestamp),
              ctime: new Date(a.timestamp),
              Ea: 4096,
              blocks: Math.ceil(a.size / 4096),
            };
          },
          wa: function (a, b) {
            void 0 !== b.mode && (a.mode = b.mode);
            void 0 !== b.timestamp && (a.timestamp = b.timestamp);
          },
          lookup: function () {
            throw new E(2);
          },
          La: function () {
            throw new E(1);
          },
          rename: function () {
            throw new E(1);
          },
          unlink: function () {
            throw new E(1);
          },
          rmdir: function () {
            throw new E(1);
          },
          readdir: function (a) {
            var b = [".", ".."],
              c;
            for (c in a.qa) a.qa.hasOwnProperty(c) && b.push(c);
            return b;
          },
          symlink: function () {
            throw new E(1);
          },
          readlink: function () {
            throw new E(1);
          },
        },
        sa: {
          read: function (a, b, c, d, e) {
            if (e >= a.node.size) return 0;
            a = a.node.qa.slice(e, e + d);
            d = Q.Ya.readAsArrayBuffer(a);
            b.set(new Uint8Array(d), c);
            return a.size;
          },
          write: function () {
            throw new E(5);
          },
          Da: function (a, b, c) {
            1 === c
              ? (b += a.position)
              : 2 === c && L(a.node.mode) && (b += a.node.size);
            if (0 > b) throw new E(22);
            return b;
          },
        },
      },
      Nb = null,
      Ob = {},
      Pb = [],
      Qb = 1,
      R = null,
      vb = "/",
      Rb = !0,
      S = {},
      E = null,
      Hb = {},
      ba = null;
    function p(a, b) {
      a = ub(vb, a);
      b = b || {};
      if (!a) return { path: "", node: null };
      var c = { hb: !0, Za: 0 },
        d;
      for (d in c) void 0 === b[d] && (b[d] = c[d]);
      if (8 < b.Za) throw new E(40);
      a = pb(
        a.split("/").filter(function (a) {
          return !!a;
        }),
        !1
      );
      var e = Nb;
      c = "/";
      for (d = 0; d < a.length; d++) {
        var f = d === a.length - 1;
        if (f && b.parent) break;
        e = M(e, a[d]);
        c = D(c, a[d]);
        e.Ga && (!f || (f && b.hb)) && (e = e.Ga.root);
        if (!f || b.Fa)
          for (f = 0; 40960 === (e.mode & 61440); )
            if (
              ((e = Sb(c)),
              (c = ub(rb(c), e)),
              (e = p(c, { Za: b.Za }).node),
              40 < f++)
            )
              throw new E(40);
      }
      return { path: c, node: e };
    }
    function Tb(a) {
      for (var b; ; ) {
        if (a === a.parent)
          return (
            (a = a.va.Qa),
            b ? ("/" !== a[a.length - 1] ? a + "/" + b : a + b) : a
          );
        b = b ? a.name + "/" + b : a.name;
        a = a.parent;
      }
    }
    function Ub(a, b) {
      for (var c = 0, d = 0; d < b.length; d++)
        c = ((c << 5) - c + b.charCodeAt(d)) | 0;
      return ((a + c) >>> 0) % R.length;
    }
    function Vb(a) {
      var b = Ub(a.parent.id, a.name);
      a.Ma = R[b];
      R[b] = a;
    }
    function Wb(a) {
      var b = Ub(a.parent.id, a.name);
      if (R[b] === a) R[b] = a.Ma;
      else
        for (b = R[b]; b; ) {
          if (b.Ma === a) {
            b.Ma = a.Ma;
            break;
          }
          b = b.Ma;
        }
    }
    function M(a, b) {
      var c;
      if ((c = (c = V(a, "x")) ? c : a.ra.lookup ? 0 : 13)) throw new E(c, a);
      for (c = R[Ub(a.id, b)]; c; c = c.Ma) {
        var d = c.name;
        if (c.parent.id === a.id && d === b) return c;
      }
      return a.ra.lookup(a, b);
    }
    function Gb(a, b, c, d) {
      Xb ||
        ((Xb = function (a, b, c, d) {
          a || (a = this);
          this.parent = a;
          this.va = a.va;
          this.Ga = null;
          this.id = Qb++;
          this.name = b;
          this.mode = c;
          this.ra = {};
          this.sa = {};
          this.rdev = d;
        }),
        (Xb.prototype = {}),
        Object.defineProperties(Xb.prototype, {
          read: {
            get: function () {
              return 365 === (this.mode & 365);
            },
            set: function (a) {
              a ? (this.mode |= 365) : (this.mode &= -366);
            },
          },
          write: {
            get: function () {
              return 146 === (this.mode & 146);
            },
            set: function (a) {
              a ? (this.mode |= 146) : (this.mode &= -147);
            },
          },
        }));
      a = new Xb(a, b, c, d);
      Vb(a);
      return a;
    }
    function L(a) {
      return 32768 === (a & 61440);
    }
    function K(a) {
      return 16384 === (a & 61440);
    }
    var Yb = {
      r: 0,
      rs: 1052672,
      "r+": 2,
      w: 577,
      wx: 705,
      xw: 705,
      "w+": 578,
      "wx+": 706,
      "xw+": 706,
      a: 1089,
      ax: 1217,
      xa: 1217,
      "a+": 1090,
      "ax+": 1218,
      "xa+": 1218,
    };
    function Zb(a) {
      var b = ["r", "w", "rw"][a & 3];
      a & 512 && (b += "w");
      return b;
    }
    function V(a, b) {
      if (Rb) return 0;
      if (-1 === b.indexOf("r") || a.mode & 292) {
        if (
          (-1 !== b.indexOf("w") && !(a.mode & 146)) ||
          (-1 !== b.indexOf("x") && !(a.mode & 73))
        )
          return 13;
      } else return 13;
      return 0;
    }
    function $b(a, b) {
      try {
        return M(a, b), 17;
      } catch (c) {}
      return V(a, "wx");
    }
    function ac(a, b, c) {
      try {
        var d = M(a, b);
      } catch (e) {
        return e.ta;
      }
      if ((a = V(a, "wx"))) return a;
      if (c) {
        if (!K(d.mode)) return 20;
        if (d === d.parent || Tb(d) === vb) return 16;
      } else if (K(d.mode)) return 21;
      return 0;
    }
    function bc(a) {
      var b = 4096;
      for (a = a || 0; a <= b; a++) if (!Pb[a]) return a;
      throw new E(24);
    }
    function cc(a, b) {
      dc ||
        ((dc = function () {}),
        (dc.prototype = {}),
        Object.defineProperties(dc.prototype, {
          object: {
            get: function () {
              return this.node;
            },
            set: function (a) {
              this.node = a;
            },
          },
        }));
      var c = new dc(),
        d;
      for (d in a) c[d] = a[d];
      a = c;
      b = bc(b);
      a.fd = b;
      return (Pb[b] = a);
    }
    var Fb = {
      open: function (a) {
        a.sa = Ob[a.node.rdev].sa;
        a.sa.open && a.sa.open(a);
      },
      Da: function () {
        throw new E(29);
      },
    };
    function Ab(a, b) {
      Ob[a] = { sa: b };
    }
    function ca(a, b, c) {
      var d = "/" === c,
        e = !c;
      if (d && Nb) throw new E(16);
      if (!d && !e) {
        var f = p(c, { hb: !1 });
        c = f.path;
        f = f.node;
        if (f.Ga) throw new E(16);
        if (!K(f.mode)) throw new E(20);
      }
      b = { type: a, Oa: b, Qa: c, xb: [] };
      a = a.va(b);
      a.va = b;
      b.root = a;
      d ? (Nb = a) : f && ((f.Ga = b), f.va && f.va.xb.push(b));
    }
    function ec(a, b, c) {
      var d = p(a, { parent: !0 }).node;
      a = sb(a);
      if (!a || "." === a || ".." === a) throw new E(22);
      var e = $b(d, a);
      if (e) throw new E(e);
      if (!d.ra.La) throw new E(1);
      return d.ra.La(d, a, b, c);
    }
    function n(a, b) {
      ec(a, ((void 0 !== b ? b : 511) & 1023) | 16384, 0);
    }
    function fc(a, b, c) {
      "undefined" === typeof c && ((c = b), (b = 438));
      ec(a, b | 8192, c);
    }
    function Va(a, b) {
      if (!ub(a)) throw new E(2);
      var c = p(b, { parent: !0 }).node;
      if (!c) throw new E(2);
      b = sb(b);
      var d = $b(c, b);
      if (d) throw new E(d);
      if (!c.ra.symlink) throw new E(1);
      c.ra.symlink(c, b, a);
    }
    function Kb(a) {
      var b = p(a, { parent: !0 }).node,
        c = sb(a),
        d = M(b, c),
        e = ac(b, c, !0);
      if (e) throw new E(e);
      if (!b.ra.rmdir) throw new E(1);
      if (d.Ga) throw new E(16);
      try {
        S.willDeletePath && S.willDeletePath(a);
      } catch (f) {
        console.log(
          "FS.trackingDelegate['willDeletePath']('" +
            a +
            "') threw an exception: " +
            f.message
        );
      }
      b.ra.rmdir(b, c);
      Wb(d);
      try {
        if (S.onDeletePath) S.onDeletePath(a);
      } catch (f) {
        console.log(
          "FS.trackingDelegate['onDeletePath']('" +
            a +
            "') threw an exception: " +
            f.message
        );
      }
    }
    function Ib(a) {
      a = p(a, { Fa: !0 }).node;
      if (!a.ra.readdir) throw new E(20);
      return a.ra.readdir(a);
    }
    function Lb(a) {
      var b = p(a, { parent: !0 }).node,
        c = sb(a),
        d = M(b, c),
        e = ac(b, c, !1);
      if (e) throw new E(e);
      if (!b.ra.unlink) throw new E(1);
      if (d.Ga) throw new E(16);
      try {
        S.willDeletePath && S.willDeletePath(a);
      } catch (f) {
        console.log(
          "FS.trackingDelegate['willDeletePath']('" +
            a +
            "') threw an exception: " +
            f.message
        );
      }
      b.ra.unlink(b, c);
      Wb(d);
      try {
        if (S.onDeletePath) S.onDeletePath(a);
      } catch (f) {
        console.log(
          "FS.trackingDelegate['onDeletePath']('" +
            a +
            "') threw an exception: " +
            f.message
        );
      }
    }
    function Sb(a) {
      a = p(a).node;
      if (!a) throw new E(2);
      if (!a.ra.readlink) throw new E(22);
      return ub(Tb(a.parent), a.ra.readlink(a));
    }
    function Jb(a, b) {
      a = p(a, { Fa: !b }).node;
      if (!a) throw new E(2);
      if (!a.ra.za) throw new E(1);
      return a.ra.za(a);
    }
    function hc(a) {
      return Jb(a, !0);
    }
    function ea(a, b, c, d) {
      if ("" === a) throw new E(2);
      if ("string" === typeof b) {
        var e = Yb[b];
        if ("undefined" === typeof e)
          throw Error("Unknown file open mode: " + b);
        b = e;
      }
      c = b & 64 ? (("undefined" === typeof c ? 438 : c) & 4095) | 32768 : 0;
      if ("object" === typeof a) var f = a;
      else {
        a = qb(a);
        try {
          f = p(a, { Fa: !(b & 131072) }).node;
        } catch (m) {}
      }
      e = !1;
      if (b & 64)
        if (f) {
          if (b & 128) throw new E(17);
        } else (f = ec(a, c, 0)), (e = !0);
      if (!f) throw new E(2);
      8192 === (f.mode & 61440) && (b &= -513);
      if (b & 65536 && !K(f.mode)) throw new E(20);
      if (
        !e &&
        (c = f
          ? 40960 === (f.mode & 61440)
            ? 40
            : K(f.mode) && ("r" !== Zb(b) || b & 512)
            ? 21
            : V(f, Zb(b))
          : 2)
      )
        throw new E(c);
      if (b & 512) {
        c = f;
        var l;
        "string" === typeof c ? (l = p(c, { Fa: !0 }).node) : (l = c);
        if (!l.ra.wa) throw new E(1);
        if (K(l.mode)) throw new E(21);
        if (!L(l.mode)) throw new E(22);
        if ((c = V(l, "w"))) throw new E(c);
        l.ra.wa(l, { size: 0, timestamp: Date.now() });
      }
      b &= -641;
      d = cc(
        {
          node: f,
          path: Tb(f),
          flags: b,
          seekable: !0,
          position: 0,
          sa: f.sa,
          Mb: [],
          error: !1,
        },
        d
      );
      d.sa.open && d.sa.open(d);
      !k.logReadFiles ||
        b & 1 ||
        (ic || (ic = {}),
        a in ic ||
          ((ic[a] = 1),
          console.log("FS.trackingDelegate error on read file: " + a)));
      try {
        S.onOpenFile &&
          ((f = 0),
          1 !== (b & 2097155) && (f |= 1),
          0 !== (b & 2097155) && (f |= 2),
          S.onOpenFile(a, f));
      } catch (m) {
        console.log(
          "FS.trackingDelegate['onOpenFile']('" +
            a +
            "', flags) threw an exception: " +
            m.message
        );
      }
      return d;
    }
    function ha(a) {
      if (null === a.fd) throw new E(9);
      a.Ja && (a.Ja = null);
      try {
        a.sa.close && a.sa.close(a);
      } catch (b) {
        throw b;
      } finally {
        Pb[a.fd] = null;
      }
      a.fd = null;
    }
    function jc(a, b, c) {
      if (null === a.fd) throw new E(9);
      if (!a.seekable || !a.sa.Da) throw new E(29);
      if (0 != c && 1 != c && 2 != c) throw new E(22);
      a.position = a.sa.Da(a, b, c);
      a.Mb = [];
    }
    function kc(a, b, c, d) {
      var e = A;
      if (0 > c || 0 > d) throw new E(22);
      if (null === a.fd) throw new E(9);
      if (1 === (a.flags & 2097155)) throw new E(9);
      if (K(a.node.mode)) throw new E(21);
      if (!a.sa.read) throw new E(22);
      var f = "undefined" !== typeof d;
      if (!f) d = a.position;
      else if (!a.seekable) throw new E(29);
      b = a.sa.read(a, e, b, c, d);
      f || (a.position += b);
      return b;
    }
    function fa(a, b, c, d, e, f) {
      if (0 > d || 0 > e) throw new E(22);
      if (null === a.fd) throw new E(9);
      if (0 === (a.flags & 2097155)) throw new E(9);
      if (K(a.node.mode)) throw new E(21);
      if (!a.sa.write) throw new E(22);
      a.flags & 1024 && jc(a, 0, 2);
      var l = "undefined" !== typeof e;
      if (!l) e = a.position;
      else if (!a.seekable) throw new E(29);
      b = a.sa.write(a, b, c, d, e, f);
      l || (a.position += b);
      try {
        if (a.path && S.onWriteToFile) S.onWriteToFile(a.path);
      } catch (m) {
        console.log(
          "FS.trackingDelegate['onWriteToFile']('" +
            a.path +
            "') threw an exception: " +
            m.message
        );
      }
      return b;
    }
    function da() {
      var a = p("/work", { Fa: !0 });
      if (null === a.node) throw new E(2);
      if (!K(a.node.mode)) throw new E(20);
      var b = V(a.node, "x");
      if (b) throw new E(b);
      vb = a.path;
    }
    function Ta() {
      E ||
        ((E = function (a, b) {
          this.node = b;
          this.Eb = function (a) {
            this.ta = a;
          };
          this.Eb(a);
          this.message = "FS error";
          this.stack &&
            Object.defineProperty(this, "stack", {
              value: Error().stack,
              writable: !0,
            });
        }),
        (E.prototype = Error()),
        (E.prototype.constructor = E),
        [2].forEach(function (a) {
          Hb[a] = new E(a);
          Hb[a].stack = "<generic error, no stack>";
        }));
    }
    var Sa;
    function lc(a, b) {
      var c = 0;
      a && (c |= 365);
      b && (c |= 146);
      return c;
    }
    function Ua(a, b, c) {
      a = D("/dev", a);
      var d = lc(!!b, !!c);
      mc || (mc = 64);
      var e = (mc++ << 8) | 0;
      Ab(e, {
        open: function (a) {
          a.seekable = !1;
        },
        close: function () {
          c && c.buffer && c.buffer.length && c(10);
        },
        read: function (a, c, d, e) {
          for (var f = 0, l = 0; l < e; l++) {
            try {
              var m = b();
            } catch (J) {
              throw new E(5);
            }
            if (void 0 === m && 0 === f) throw new E(11);
            if (null === m || void 0 === m) break;
            f++;
            c[d + l] = m;
          }
          f && (a.node.timestamp = Date.now());
          return f;
        },
        write: function (a, b, d, e) {
          for (var f = 0; f < e; f++)
            try {
              c(b[d + f]);
            } catch (w) {
              throw new E(5);
            }
          e && (a.node.timestamp = Date.now());
          return f;
        },
      });
      fc(a, d, e);
    }
    var mc,
      W = {},
      Xb,
      dc,
      ic;
    function nc(a, b, c) {
      try {
        var d = a(b);
      } catch (e) {
        if (e && e.node && qb(b) !== qb(Tb(e.node))) return -20;
        throw e;
      }
      z[c >> 2] = d.dev;
      z[(c + 4) >> 2] = 0;
      z[(c + 8) >> 2] = d.ino;
      z[(c + 12) >> 2] = d.mode;
      z[(c + 16) >> 2] = d.nlink;
      z[(c + 20) >> 2] = d.uid;
      z[(c + 24) >> 2] = d.gid;
      z[(c + 28) >> 2] = d.rdev;
      z[(c + 32) >> 2] = 0;
      g = [
        d.size >>> 0,
        ((h = d.size),
        1 <= +Xa(h)
          ? 0 < h
            ? (bb(+ab(h / 4294967296), 4294967295) | 0) >>> 0
            : ~~+$a((h - +(~~h >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z[(c + 40) >> 2] = g[0];
      z[(c + 44) >> 2] = g[1];
      z[(c + 48) >> 2] = 4096;
      z[(c + 52) >> 2] = d.blocks;
      z[(c + 56) >> 2] = (d.atime.getTime() / 1e3) | 0;
      z[(c + 60) >> 2] = 0;
      z[(c + 64) >> 2] = (d.mtime.getTime() / 1e3) | 0;
      z[(c + 68) >> 2] = 0;
      z[(c + 72) >> 2] = (d.ctime.getTime() / 1e3) | 0;
      z[(c + 76) >> 2] = 0;
      g = [
        d.ino >>> 0,
        ((h = d.ino),
        1 <= +Xa(h)
          ? 0 < h
            ? (bb(+ab(h / 4294967296), 4294967295) | 0) >>> 0
            : ~~+$a((h - +(~~h >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      z[(c + 80) >> 2] = g[0];
      z[(c + 84) >> 2] = g[1];
      return 0;
    }
    var X = 0;
    function Y() {
      X += 4;
      return z[(X - 4) >> 2];
    }
    function oc() {
      return Ba(Y());
    }
    function Z() {
      var a = Pb[Y()];
      if (!a) throw new E(9);
      return a;
    }
    function pc() {
      void 0 === pc.start && (pc.start = Date.now());
      return (1e3 * (Date.now() - pc.start)) | 0;
    }
    function sa() {
      return A.length;
    }
    function qc(a) {
      a = Ha(a);
      var b = buffer.byteLength;
      try {
        return -1 !== va.grow((a - b) / 65536)
          ? ((buffer = va.buffer), !0)
          : !1;
      } catch (c) {
        return !1;
      }
    }
    function ta(a) {
      if (2147418112 < a) return !1;
      for (var b = Math.max(sa(), 16777216); b < a; )
        536870912 >= b
          ? (b = Ha(2 * b))
          : (b = Math.min(Ha((3 * b + 2147483648) / 4), 2147418112));
      if (!qc(b)) return !1;
      Ja();
      return !0;
    }
    function rc(a) {
      if (0 === a) return 0;
      a = Ba(a);
      if (!C.hasOwnProperty(a)) return 0;
      rc.Aa && sc(rc.Aa);
      a = C[a];
      var b = Da(a) + 1,
        c = ya(b);
      c && Ca(a, A, c, b);
      rc.Aa = c;
      return rc.Aa;
    }
    Ca("GMT", B, 3149888, 4);
    function tc(a, b) {
      a = new Date(1e3 * z[a >> 2]);
      z[b >> 2] = a.getUTCSeconds();
      z[(b + 4) >> 2] = a.getUTCMinutes();
      z[(b + 8) >> 2] = a.getUTCHours();
      z[(b + 12) >> 2] = a.getUTCDate();
      z[(b + 16) >> 2] = a.getUTCMonth();
      z[(b + 20) >> 2] = a.getUTCFullYear() - 1900;
      z[(b + 24) >> 2] = a.getUTCDay();
      z[(b + 36) >> 2] = 0;
      z[(b + 32) >> 2] = 0;
      z[(b + 28) >> 2] =
        ((a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) /
          864e5) |
        0;
      z[(b + 40) >> 2] = 3149888;
      return b;
    }
    function uc(a) {
      return Math.pow(2, a);
    }
    function vc(a) {
      return Math.log(a) / Math.LN10;
    }
    function wc(a) {
      return Math.log(a) / Math.LN2;
    }
    function xc() {
      xc.Aa || (xc.Aa = []);
      xc.Aa.push(yc());
      return xc.Aa.length - 1;
    }
    function zc() {
      function a(a) {
        return (a = a.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? a[1] : "GMT";
      }
      if (!Ac) {
        Ac = !0;
        z[Bc() >> 2] = 60 * new Date().getTimezoneOffset();
        var b = new Date(2e3, 0, 1),
          c = new Date(2e3, 6, 1);
        z[Cc() >> 2] = Number(b.getTimezoneOffset() != c.getTimezoneOffset());
        var d = a(b),
          e = a(c);
        d = xa(Cb(d));
        e = xa(Cb(e));
        c.getTimezoneOffset() < b.getTimezoneOffset()
          ? ((z[Dc() >> 2] = d), (z[(Dc() + 4) >> 2] = e))
          : ((z[Dc() >> 2] = e), (z[(Dc() + 4) >> 2] = d));
      }
    }
    var Ac;
    function Ec(a, b) {
      zc();
      a = new Date(1e3 * z[a >> 2]);
      z[b >> 2] = a.getSeconds();
      z[(b + 4) >> 2] = a.getMinutes();
      z[(b + 8) >> 2] = a.getHours();
      z[(b + 12) >> 2] = a.getDate();
      z[(b + 16) >> 2] = a.getMonth();
      z[(b + 20) >> 2] = a.getFullYear() - 1900;
      z[(b + 24) >> 2] = a.getDay();
      var c = new Date(a.getFullYear(), 0, 1);
      z[(b + 28) >> 2] = ((a.getTime() - c.getTime()) / 864e5) | 0;
      z[(b + 36) >> 2] = -(60 * a.getTimezoneOffset());
      var d = new Date(2e3, 6, 1).getTimezoneOffset();
      c = c.getTimezoneOffset();
      a = (d != c && a.getTimezoneOffset() == Math.min(c, d)) | 0;
      z[(b + 32) >> 2] = a;
      a = z[(Dc() + (a ? 4 : 0)) >> 2];
      z[(b + 40) >> 2] = a;
      return b;
    }
    function Fc(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }
    function Gc(a, b) {
      for (var c = 0, d = 0; d <= b; c += a[d++]);
      return c;
    }
    var Hc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Ic = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Jc(a, b) {
      for (a = new Date(a.getTime()); 0 < b; ) {
        var c = a.getMonth(),
          d = (Fc(a.getFullYear()) ? Hc : Ic)[c];
        if (b > d - a.getDate())
          (b -= d - a.getDate() + 1),
            a.setDate(1),
            11 > c
              ? a.setMonth(c + 1)
              : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
        else {
          a.setDate(a.getDate() + b);
          break;
        }
      }
      return a;
    }
    Ta();
    R = Array(4096);
    ca(F, {}, "/");
    n("/tmp");
    n("/home");
    n("/home/web_user");
    (function () {
      n("/dev");
      Ab(259, {
        read: function () {
          return 0;
        },
        write: function (a, b, c, l) {
          return l;
        },
      });
      fc("/dev/null", 259);
      zb(1280, Db);
      zb(1536, Eb);
      fc("/dev/tty", 1280);
      fc("/dev/tty1", 1536);
      if (
        "object" === typeof crypto &&
        "function" === typeof crypto.getRandomValues
      ) {
        var a = new Uint8Array(1);
        var b = function () {
          crypto.getRandomValues(a);
          return a[0];
        };
      } else if (ka)
        try {
          var c = require("crypto");
          b = function () {
            return c.randomBytes(1)[0];
          };
        } catch (d) {}
      b ||
        (b = function () {
          v("random_device");
        });
      Ua("random", b);
      Ua("urandom", b);
      n("/dev/shm");
      n("/dev/shm/tmp");
    })();
    n("/proc");
    n("/proc/self");
    n("/proc/self/fd");
    ca(
      {
        va: function () {
          var a = Gb("/proc/self", "fd", 16895, 73);
          a.ra = {
            lookup: function (a, c) {
              var b = Pb[+c];
              if (!b) throw new E(9);
              a = {
                parent: null,
                va: { Qa: "fake" },
                ra: {
                  readlink: function () {
                    return b.path;
                  },
                },
              };
              return (a.parent = a);
            },
          };
          return a;
        },
      },
      {},
      "/proc/self/fd"
    );
    ba = { MEMFS: F, IDBFS: N, NODEFS: P, WORKERFS: Q };
    if (ka) {
      var fs = require("fs"),
        Mb = require("path");
      P.Fb();
    }
    function Cb(a, b) {
      var c = Array(Da(a) + 1);
      a = Ca(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var Nc = k.asm(
      {},
      {
        c: v,
        f: function (a, b, c, d) {
          v(
            "Assertion failed: " +
              Ba(a) +
              ", at: " +
              [
                b ? Ba(b) : "unknown filename",
                c,
                d ? Ba(d) : "unknown function",
              ]
          );
        },
        W: nb,
        B: function () {},
        z: ob,
        I: function (a, b) {
          X = b;
          try {
            var c = oc();
            Lb(c);
            return 0;
          } catch (d) {
            return ("undefined" !== typeof W && d instanceof E) || v(d), -d.ta;
          }
        },
        u: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y(),
              e = Y(),
              f = Y(),
              l = Y();
            if (!((-1 == d && 0 > e) || (0 == d && 0 <= e))) return -75;
            jc(c, e, l);
            g = [
              c.position >>> 0,
              ((h = c.position),
              1 <= +Xa(h)
                ? 0 < h
                  ? (bb(+ab(h / 4294967296), 4294967295) | 0) >>> 0
                  : ~~+$a((h - +(~~h >>> 0)) / 4294967296) >>> 0
                : 0),
            ];
            z[f >> 2] = g[0];
            z[(f + 4) >> 2] = g[1];
            c.Ja && 0 === e && 0 === l && (c.Ja = null);
            return 0;
          } catch (m) {
            return ("undefined" !== typeof W && m instanceof E) || v(m), -m.ta;
          }
        },
        F: function (a, b) {
          X = b;
          try {
            var c = Y(),
              d = Y(),
              e = Y(),
              f = Y();
            Y();
            a = 0;
            for (
              var l = d ? z[d >> 2] : 0,
                m = d ? z[(d + 4) >> 2] : 0,
                x = e ? z[e >> 2] : 0,
                q = e ? z[(e + 4) >> 2] : 0,
                w = f ? z[f >> 2] : 0,
                I = f ? z[(f + 4) >> 2] : 0,
                J = (b = 0),
                T = 0,
                Fa = 0,
                U = 0,
                G = 0,
                Oc =
                  (d ? z[d >> 2] : 0) |
                  (e ? z[e >> 2] : 0) |
                  (f ? z[f >> 2] : 0),
                Pc =
                  (d ? z[(d + 4) >> 2] : 0) |
                  (e ? z[(e + 4) >> 2] : 0) |
                  (f ? z[(f + 4) >> 2] : 0),
                O = 0;
              O < c;
              O++
            ) {
              var H = 1 << O % 32;
              if (32 > O ? Oc & H : Pc & H) {
                var Ya = Pb[O];
                if (!Ya) throw new E(9);
                var Za = 5;
                Ya.sa.yb && (Za = Ya.sa.yb(Ya));
                Za & 1 &&
                  (32 > O ? l & H : m & H) &&
                  (32 > O ? (b |= H) : (J |= H), a++);
                Za & 4 &&
                  (32 > O ? x & H : q & H) &&
                  (32 > O ? (T |= H) : (Fa |= H), a++);
                Za & 2 &&
                  (32 > O ? w & H : I & H) &&
                  (32 > O ? (U |= H) : (G |= H), a++);
              }
            }
            d && ((z[d >> 2] = b), (z[(d + 4) >> 2] = J));
            e && ((z[e >> 2] = T), (z[(e + 4) >> 2] = Fa));
            f && ((z[f >> 2] = U), (z[(f + 4) >> 2] = G));
            return a;
          } catch (xb) {
            return (
              ("undefined" !== typeof W && xb instanceof E) || v(xb), -xb.ta
            );
          }
        },
        E: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y();
            a: {
              var e = Y();
              for (b = a = 0; b < e; b++) {
                var f = z[(d + (8 * b + 4)) >> 2],
                  l = kc(c, z[(d + 8 * b) >> 2], f, void 0);
                if (0 > l) {
                  var m = -1;
                  break a;
                }
                a += l;
                if (l < f) break;
              }
              m = a;
            }
            return m;
          } catch (x) {
            return ("undefined" !== typeof W && x instanceof E) || v(x), -x.ta;
          }
        },
        t: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y();
            a: {
              var e = Y();
              for (b = a = 0; b < e; b++) {
                var f = fa(
                  c,
                  A,
                  z[(d + 8 * b) >> 2],
                  z[(d + (8 * b + 4)) >> 2],
                  void 0
                );
                if (0 > f) {
                  var l = -1;
                  break a;
                }
                a += f;
              }
              l = a;
            }
            return l;
          } catch (m) {
            return ("undefined" !== typeof W && m instanceof E) || v(m), -m.ta;
          }
        },
        D: function (a, b) {
          X = b;
          try {
            var c = oc(),
              d = Y();
            return nc(Jb, c, d);
          } catch (e) {
            return ("undefined" !== typeof W && e instanceof E) || v(e), -e.ta;
          }
        },
        ca: function (a, b) {
          X = b;
          try {
            var c = oc(),
              d = Y();
            return nc(hc, c, d);
          } catch (e) {
            return ("undefined" !== typeof W && e instanceof E) || v(e), -e.ta;
          }
        },
        ba: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y();
            return nc(Jb, c.path, d);
          } catch (e) {
            return ("undefined" !== typeof W && e instanceof E) || v(e), -e.ta;
          }
        },
        aa: function (a, b) {
          X = b;
          return 0;
        },
        $: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y(),
              e = Y();
            c.Ja || (c.Ja = Ib(c.path));
            for (a = 0; 0 < c.Ja.length && a + 280 <= e; ) {
              var f = c.Ja.pop();
              if ("." === f[0]) {
                var l = 1;
                var m = 4;
              } else {
                var x = M(c.node, f);
                l = x.id;
                m =
                  8192 === (x.mode & 61440)
                    ? 2
                    : K(x.mode)
                    ? 4
                    : 40960 === (x.mode & 61440)
                    ? 10
                    : 8;
              }
              g = [
                l >>> 0,
                ((h = l),
                1 <= +Xa(h)
                  ? 0 < h
                    ? (bb(+ab(h / 4294967296), 4294967295) | 0) >>> 0
                    : ~~+$a((h - +(~~h >>> 0)) / 4294967296) >>> 0
                  : 0),
              ];
              z[(d + a) >> 2] = g[0];
              z[(d + a + 4) >> 2] = g[1];
              g = [
                c.position >>> 0,
                ((h = c.position),
                1 <= +Xa(h)
                  ? 0 < h
                    ? (bb(+ab(h / 4294967296), 4294967295) | 0) >>> 0
                    : ~~+$a((h - +(~~h >>> 0)) / 4294967296) >>> 0
                  : 0),
              ];
              z[(d + a + 8) >> 2] = g[0];
              z[(d + a + 12) >> 2] = g[1];
              Ia[(d + a + 16) >> 1] = 280;
              A[(d + a + 18) >> 0] = m;
              Ca(f, B, d + a + 19, 256);
              a += 280;
            }
            return a;
          } catch (q) {
            return ("undefined" !== typeof W && q instanceof E) || v(q), -q.ta;
          }
        },
        l: function (a, b) {
          X = b;
          try {
            var c = Z();
            switch (Y()) {
              case 0:
                var d = Y();
                return 0 > d ? -22 : ea(c.path, c.flags, 0, d).fd;
              case 1:
              case 2:
                return 0;
              case 3:
                return c.flags;
              case 4:
                return (d = Y()), (c.flags |= d), 0;
              case 12:
                return (d = Y()), (Ia[(d + 0) >> 1] = 2), 0;
              case 13:
              case 14:
                return 0;
              case 16:
              case 8:
                return -22;
              case 9:
                return ob(22), -1;
              default:
                return -22;
            }
          } catch (e) {
            return ("undefined" !== typeof W && e instanceof E) || v(e), -e.ta;
          }
        },
        _: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y(),
              e = Y();
            return kc(c, d, e);
          } catch (f) {
            return ("undefined" !== typeof W && f instanceof E) || v(f), -f.ta;
          }
        },
        Z: function (a, b) {
          X = b;
          try {
            var c = oc();
            var d = Y();
            if (d & -8) var e = -22;
            else {
              var f = p(c, { Fa: !0 }).node;
              a = "";
              d & 4 && (a += "r");
              d & 2 && (a += "w");
              d & 1 && (a += "x");
              e = a && V(f, a) ? -13 : 0;
            }
            return e;
          } catch (l) {
            return ("undefined" !== typeof W && l instanceof E) || v(l), -l.ta;
          }
        },
        Y: function (a, b) {
          X = b;
          try {
            Y();
            Y();
            Y();
            var c = Y();
            c &&
              ((z[c >> 2] = -1),
              (z[(c + 4) >> 2] = -1),
              (z[(c + 8) >> 2] = -1),
              (z[(c + 12) >> 2] = -1));
            return 0;
          } catch (d) {
            return ("undefined" !== typeof W && d instanceof E) || v(d), -d.ta;
          }
        },
        X: function (a, b) {
          X = b;
          try {
            var c = oc(),
              d = oc(),
              e = rb(c),
              f = rb(d),
              l = sb(c),
              m = sb(d);
            try {
              var x = p(c, { parent: !0 });
              var q = x.node;
              x = p(d, { parent: !0 });
              var w = x.node;
            } catch (G) {
              throw new E(16);
            }
            if (!q || !w) throw new E(2);
            if (q.va !== w.va) throw new E(18);
            var I = M(q, l),
              J = wb(c, f);
            if ("." !== J.charAt(0)) throw new E(22);
            J = wb(d, e);
            if ("." !== J.charAt(0)) throw new E(39);
            try {
              var T = M(w, m);
            } catch (G) {}
            if (I !== T) {
              var Fa = K(I.mode),
                U = ac(q, l, Fa);
              if (U) throw new E(U);
              if ((U = T ? ac(w, m, Fa) : $b(w, m))) throw new E(U);
              if (!q.ra.rename) throw new E(1);
              if (I.Ga || (T && T.Ga)) throw new E(16);
              if (w !== q && (U = V(q, "w"))) throw new E(U);
              try {
                S.willMovePath && S.willMovePath(c, d);
              } catch (G) {
                console.log(
                  "FS.trackingDelegate['willMovePath']('" +
                    c +
                    "', '" +
                    d +
                    "') threw an exception: " +
                    G.message
                );
              }
              Wb(I);
              try {
                q.ra.rename(I, w, m);
              } catch (G) {
                throw G;
              } finally {
                Vb(I);
              }
              try {
                if (S.onMovePath) S.onMovePath(c, d);
              } catch (G) {
                console.log(
                  "FS.trackingDelegate['onMovePath']('" +
                    c +
                    "', '" +
                    d +
                    "') threw an exception: " +
                    G.message
                );
              }
            }
            return 0;
          } catch (G) {
            return ("undefined" !== typeof W && G instanceof E) || v(G), -G.ta;
          }
        },
        V: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y(),
              e = Y();
            return fa(c, A, d, e);
          } catch (f) {
            return ("undefined" !== typeof W && f instanceof E) || v(f), -f.ta;
          }
        },
        U: function (a, b) {
          X = b;
          try {
            var c = oc();
            Kb(c);
            return 0;
          } catch (d) {
            return ("undefined" !== typeof W && d instanceof E) || v(d), -d.ta;
          }
        },
        C: function (a, b) {
          X = b;
          try {
            var c = oc(),
              d = Y(),
              e = Y();
            return ea(c, d, e).fd;
          } catch (f) {
            return ("undefined" !== typeof W && f instanceof E) || v(f), -f.ta;
          }
        },
        q: function (a, b) {
          X = b;
          try {
            var c = Z(),
              d = Y();
            switch (d) {
              case 21509:
              case 21505:
                return c.tty ? 0 : -25;
              case 21510:
              case 21511:
              case 21512:
              case 21506:
              case 21507:
              case 21508:
                return c.tty ? 0 : -25;
              case 21519:
                if (!c.tty) return -25;
                var e = Y();
                return (z[e >> 2] = 0);
              case 21520:
                return c.tty ? -22 : -25;
              case 21531:
                a = e = Y();
                if (!c.sa.ub) throw new E(25);
                return c.sa.ub(c, d, a);
              case 21523:
                return c.tty ? 0 : -25;
              case 21524:
                return c.tty ? 0 : -25;
              default:
                v("bad ioctl syscall " + d);
            }
          } catch (f) {
            return ("undefined" !== typeof W && f instanceof E) || v(f), -f.ta;
          }
        },
        p: function (a, b) {
          X = b;
          try {
            var c = Z();
            ha(c);
            return 0;
          } catch (d) {
            return ("undefined" !== typeof W && d instanceof E) || v(d), -d.ta;
          }
        },
        T: function (a, b) {
          X = b;
          return 0;
        },
        S: function (a, b) {
          X = b;
          try {
            Y();
            var c = Y();
            Kc(c, 0, 136);
            z[c >> 2] = 1;
            z[(c + 4) >> 2] = 2;
            z[(c + 8) >> 2] = 3;
            z[(c + 12) >> 2] = 4;
            return 0;
          } catch (d) {
            return ("undefined" !== typeof W && d instanceof E) || v(d), -d.ta;
          }
        },
        o: function () {},
        b: function () {
          k.abort();
        },
        R: pc,
        Q: sa,
        P: function (a, b, c) {
          B.set(B.subarray(b, b + c), a);
        },
        O: ta,
        i: function (a) {
          Lc(a);
        },
        N: Xa,
        j: rc,
        A: function (a) {
          var b = Date.now();
          z[a >> 2] = (b / 1e3) | 0;
          z[(a + 4) >> 2] = ((b % 1e3) * 1e3) | 0;
          return 0;
        },
        M: function (a) {
          return tc(a, 3149840);
        },
        n: tc,
        e: uc,
        h: function (a) {
          return uc(a);
        },
        L: vc,
        g: function (a) {
          return vc(a);
        },
        d: wc,
        s: function (a) {
          return wc(a);
        },
        r: function (a) {
          var b = xc.Aa[a];
          xc.Aa.splice(a, 1);
          Mc(b);
        },
        y: xc,
        K: cb,
        x: function (a) {
          return Ec(a, 3149840);
        },
        J: Ec,
        H: function (a) {
          zc();
          var b = new Date(
              z[(a + 20) >> 2] + 1900,
              z[(a + 16) >> 2],
              z[(a + 12) >> 2],
              z[(a + 8) >> 2],
              z[(a + 4) >> 2],
              z[a >> 2],
              0
            ),
            c = z[(a + 32) >> 2],
            d = b.getTimezoneOffset(),
            e = new Date(b.getFullYear(), 0, 1),
            f = new Date(2e3, 6, 1).getTimezoneOffset(),
            l = e.getTimezoneOffset(),
            m = Math.min(l, f);
          0 > c
            ? (z[(a + 32) >> 2] = Number(f != l && m == d))
            : 0 < c != (m == d) &&
              ((f = Math.max(l, f)),
              b.setTime(b.getTime() + 6e4 * ((0 < c ? m : f) - d)));
          z[(a + 24) >> 2] = b.getDay();
          z[(a + 28) >> 2] = ((b.getTime() - e.getTime()) / 864e5) | 0;
          return (b.getTime() / 1e3) | 0;
        },
        w: function (a, b) {
          var c = z[a >> 2];
          a = z[(a + 4) >> 2];
          0 !== b && ((z[b >> 2] = 0), (z[(b + 4) >> 2] = 0));
          b = (1e6 * c + a / 1e3) / 1e3;
          if ((ja || t) && self.performance && self.performance.now)
            for (c = self.performance.now(); self.performance.now() - c < b; );
          else for (c = Date.now(); Date.now() - c < b; );
          return 0;
        },
        k: function () {
          return 0;
        },
        m: function (a, b, c, d) {
          function e(a, b, c) {
            for (
              a = "number" === typeof a ? a.toString() : a || "";
              a.length < b;

            )
              a = c[0] + a;
            return a;
          }
          function f(a, b) {
            return e(a, b, "0");
          }
          function l(a, b) {
            function c(a) {
              return 0 > a ? -1 : 0 < a ? 1 : 0;
            }
            var d;
            0 === (d = c(a.getFullYear() - b.getFullYear())) &&
              0 === (d = c(a.getMonth() - b.getMonth())) &&
              (d = c(a.getDate() - b.getDate()));
            return d;
          }
          function m(a) {
            switch (a.getDay()) {
              case 0:
                return new Date(a.getFullYear() - 1, 11, 29);
              case 1:
                return a;
              case 2:
                return new Date(a.getFullYear(), 0, 3);
              case 3:
                return new Date(a.getFullYear(), 0, 2);
              case 4:
                return new Date(a.getFullYear(), 0, 1);
              case 5:
                return new Date(a.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(a.getFullYear() - 1, 11, 30);
            }
          }
          function x(a) {
            a = Jc(new Date(a.ya + 1900, 0, 1), a.Ua);
            var b = m(new Date(a.getFullYear() + 1, 0, 4));
            return 0 >= l(m(new Date(a.getFullYear(), 0, 4)), a)
              ? 0 >= l(b, a)
                ? a.getFullYear() + 1
                : a.getFullYear()
              : a.getFullYear() - 1;
          }
          var q = z[(d + 40) >> 2];
          d = {
            Kb: z[d >> 2],
            Jb: z[(d + 4) >> 2],
            Ta: z[(d + 8) >> 2],
            Ka: z[(d + 12) >> 2],
            Ha: z[(d + 16) >> 2],
            ya: z[(d + 20) >> 2],
            mb: z[(d + 24) >> 2],
            Ua: z[(d + 28) >> 2],
            Rb: z[(d + 32) >> 2],
            Ib: z[(d + 36) >> 2],
            Lb: q ? Ba(q) : "",
          };
          c = Ba(c);
          q = {
            "%c": "%a %b %d %H:%M:%S %Y",
            "%D": "%m/%d/%y",
            "%F": "%Y-%m-%d",
            "%h": "%b",
            "%r": "%I:%M:%S %p",
            "%R": "%H:%M",
            "%T": "%H:%M:%S",
            "%x": "%m/%d/%y",
            "%X": "%H:%M:%S",
          };
          for (var w in q) c = c.replace(new RegExp(w, "g"), q[w]);
          var I =
              "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                " "
              ),
            J =
              "January February March April May June July August September October November December".split(
                " "
              );
          q = {
            "%a": function (a) {
              return I[a.mb].substring(0, 3);
            },
            "%A": function (a) {
              return I[a.mb];
            },
            "%b": function (a) {
              return J[a.Ha].substring(0, 3);
            },
            "%B": function (a) {
              return J[a.Ha];
            },
            "%C": function (a) {
              return f(((a.ya + 1900) / 100) | 0, 2);
            },
            "%d": function (a) {
              return f(a.Ka, 2);
            },
            "%e": function (a) {
              return e(a.Ka, 2, " ");
            },
            "%g": function (a) {
              return x(a).toString().substring(2);
            },
            "%G": function (a) {
              return x(a);
            },
            "%H": function (a) {
              return f(a.Ta, 2);
            },
            "%I": function (a) {
              a = a.Ta;
              0 == a ? (a = 12) : 12 < a && (a -= 12);
              return f(a, 2);
            },
            "%j": function (a) {
              return f(a.Ka + Gc(Fc(a.ya + 1900) ? Hc : Ic, a.Ha - 1), 3);
            },
            "%m": function (a) {
              return f(a.Ha + 1, 2);
            },
            "%M": function (a) {
              return f(a.Jb, 2);
            },
            "%n": function () {
              return "\n";
            },
            "%p": function (a) {
              return 0 <= a.Ta && 12 > a.Ta ? "AM" : "PM";
            },
            "%S": function (a) {
              return f(a.Kb, 2);
            },
            "%t": function () {
              return "\t";
            },
            "%u": function (a) {
              return (
                new Date(a.ya + 1900, a.Ha + 1, a.Ka, 0, 0, 0, 0).getDay() || 7
              );
            },
            "%U": function (a) {
              var b = new Date(a.ya + 1900, 0, 1),
                c = 0 === b.getDay() ? b : Jc(b, 7 - b.getDay());
              a = new Date(a.ya + 1900, a.Ha, a.Ka);
              return 0 > l(c, a)
                ? f(
                    Math.ceil(
                      (31 -
                        c.getDate() +
                        (Gc(Fc(a.getFullYear()) ? Hc : Ic, a.getMonth() - 1) -
                          31) +
                        a.getDate()) /
                        7
                    ),
                    2
                  )
                : 0 === l(c, b)
                ? "01"
                : "00";
            },
            "%V": function (a) {
              var b = m(new Date(a.ya + 1900, 0, 4)),
                c = m(new Date(a.ya + 1901, 0, 4)),
                d = Jc(new Date(a.ya + 1900, 0, 1), a.Ua);
              return 0 > l(d, b)
                ? "53"
                : 0 >= l(c, d)
                ? "01"
                : f(
                    Math.ceil(
                      (b.getFullYear() < a.ya + 1900
                        ? a.Ua + 32 - b.getDate()
                        : a.Ua + 1 - b.getDate()) / 7
                    ),
                    2
                  );
            },
            "%w": function (a) {
              return new Date(a.ya + 1900, a.Ha + 1, a.Ka, 0, 0, 0, 0).getDay();
            },
            "%W": function (a) {
              var b = new Date(a.ya, 0, 1),
                c =
                  1 === b.getDay()
                    ? b
                    : Jc(b, 0 === b.getDay() ? 1 : 7 - b.getDay() + 1);
              a = new Date(a.ya + 1900, a.Ha, a.Ka);
              return 0 > l(c, a)
                ? f(
                    Math.ceil(
                      (31 -
                        c.getDate() +
                        (Gc(Fc(a.getFullYear()) ? Hc : Ic, a.getMonth() - 1) -
                          31) +
                        a.getDate()) /
                        7
                    ),
                    2
                  )
                : 0 === l(c, b)
                ? "01"
                : "00";
            },
            "%y": function (a) {
              return (a.ya + 1900).toString().substring(2);
            },
            "%Y": function (a) {
              return a.ya + 1900;
            },
            "%z": function (a) {
              a = a.Ib;
              var b = 0 <= a;
              a = Math.abs(a) / 60;
              return (
                (b ? "+" : "-") +
                String("0000" + ((a / 60) * 100 + (a % 60))).slice(-4)
              );
            },
            "%Z": function (a) {
              return a.Lb;
            },
            "%%": function () {
              return "%";
            },
          };
          for (w in q)
            0 <= c.indexOf(w) && (c = c.replace(new RegExp(w, "g"), q[w](d)));
          w = Cb(c, !1);
          if (w.length > b) return 0;
          A.set(w, a);
          return w.length - 1;
        },
        v: function (a) {
          var b = (Date.now() / 1e3) | 0;
          a && (z[a >> 2] = b);
          return b;
        },
        G: function () {
          v("OOM");
        },
        a: ra,
      },
      buffer
    );
    k.asm = Nc;
    var mb = (k.___emscripten_environ_constructor = function () {
      return k.asm.da.apply(null, arguments);
    });
    k.___errno_location = function () {
      return k.asm.ea.apply(null, arguments);
    };
    var Cc = (k.__get_daylight = function () {
        return k.asm.fa.apply(null, arguments);
      }),
      Bc = (k.__get_timezone = function () {
        return k.asm.ga.apply(null, arguments);
      }),
      Dc = (k.__get_tzname = function () {
        return k.asm.ha.apply(null, arguments);
      }),
      sc = (k._free = function () {
        return k.asm.ia.apply(null, arguments);
      });
    k._main = function () {
      return k.asm.ja.apply(null, arguments);
    };
    var ya = (k._malloc = function () {
        return k.asm.ka.apply(null, arguments);
      }),
      Kc = (k._memset = function () {
        return k.asm.la.apply(null, arguments);
      }),
      Ga = (k.stackAlloc = function () {
        return k.asm.na.apply(null, arguments);
      }),
      Mc = (k.stackRestore = function () {
        return k.asm.oa.apply(null, arguments);
      }),
      yc = (k.stackSave = function () {
        return k.asm.pa.apply(null, arguments);
      });
    k.dynCall_vi = function () {
      return k.asm.ma.apply(null, arguments);
    };
    k.asm = Nc;
    k.then = function (a) {
      if (k.calledRun) a(k);
      else {
        var b = k.onRuntimeInitialized;
        k.onRuntimeInitialized = function () {
          b && b();
          a(k);
        };
      }
      return k;
    };
    function oa(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    oa.prototype = Error();
    oa.prototype.constructor = oa;
    fb = function Qc() {
      k.calledRun || Rc();
      k.calledRun || (fb = Qc);
    };
    k.callMain = function (a) {
      a = a || [];
      Ra();
      var b = a.length + 1,
        c = Ga(4 * (b + 1));
      z[c >> 2] = Ea(k.thisProgram);
      for (var d = 1; d < b; d++) z[(c >> 2) + d] = Ea(a[d - 1]);
      z[(c >> 2) + b] = 0;
      try {
        var e = k._main(b, c, 0);
        Lc(e, !0);
      } catch (f) {
        f instanceof oa ||
          ("SimulateInfiniteLoop" == f
            ? (k.noExitRuntime = !0)
            : ((a = f) &&
                "object" === typeof f &&
                f.stack &&
                (a = [f, f.stack]),
              y("exception thrown: " + a),
              k.quit(1, f)));
      } finally {
      }
    };
    function Rc(a) {
      function b() {
        if (!k.calledRun && ((k.calledRun = !0), !wa)) {
          Ra();
          Rb = !1;
          La(Oa);
          if (k.onRuntimeInitialized) k.onRuntimeInitialized();
          k._main && Sc && k.callMain(a);
          if (k.postRun)
            for (
              "function" == typeof k.postRun && (k.postRun = [k.postRun]);
              k.postRun.length;

            ) {
              var b = k.postRun.shift();
              Pa.unshift(b);
            }
          La(Pa);
        }
      }
      a = a || k.arguments;
      if (!(0 < db)) {
        if (k.preRun)
          for (
            "function" == typeof k.preRun && (k.preRun = [k.preRun]);
            k.preRun.length;

          )
            Wa();
        La(Ma);
        0 < db ||
          k.calledRun ||
          (k.setStatus
            ? (k.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  k.setStatus("");
                }, 1);
                b();
              }, 1))
            : b());
      }
    }
    k.run = Rc;
    function Lc(a, b) {
      if (!b || !k.noExitRuntime || 0 !== a) {
        if (!k.noExitRuntime && ((wa = !0), k.onExit)) k.onExit(a);
        k.quit(a, new oa(a));
      }
    }
    function v(a) {
      if (k.onAbort) k.onAbort(a);
      void 0 !== a ? (pa(a), y(a), (a = JSON.stringify(a))) : (a = "");
      wa = !0;
      throw "abort(" + a + "). Build with -s ASSERTIONS=1 for more info.";
    }
    k.abort = v;
    if (k.preInit)
      for (
        "function" == typeof k.preInit && (k.preInit = [k.preInit]);
        0 < k.preInit.length;

      )
        k.preInit.pop()();
    var Sc = !0;
    k.noInitialRun && (Sc = !1);
    k.noExitRuntime = !0;
    Rc();

    return ffmpegjs;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = ffmpegjs;
else if (typeof define === "function" && define["amd"])
  define([], function () {
    return ffmpegjs;
  });
else if (typeof exports === "object") exports["ffmpegjs"] = ffmpegjs;
