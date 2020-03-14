import './main.scss';

(function animateBackground() {
    function a() {
        e = window.innerWidth;
        t = window.innerHeight;
        o = {
            x: 0,
            y: t
        };
        n = document.getElementById("intro");
        n.style.height = t + "px";
        r = document.getElementById("intro-canvas");
        r.width = e;
        r.height = t;
        i = r.getContext("2d");
        s = [];
        for (var u = 0; u < e * .1; u++) {
            var a = new p;
            s.push(a)
        }
        h()
    }

    function f() {
        window.addEventListener("scroll", l);
        window.addEventListener("resize", c)
    }

    function l() {
        if (document.body.scrollTop > t) u = false;
        else u = true
    }

    function c() {
        e = window.innerWidth;
        t = window.innerHeight;
        n.style.height = t + "px";
        r.width = e;
        r.height = t
    }

    function h() {
        if (u) {
            i.clearRect(0, 0, e, t);
            for (var n in s) {
                s[n].draw()
            }
        }
        requestAnimationFrame(h)
    }

    function p() {
        function r() {
            n.pos.x = Math.random() * e;
            n.pos.y = Math.random() * t;
            n.alpha = .2 + Math.random();
            n.scale = .1 + Math.random() / 10;
            n.velocity = Math.random() * .5
        }
        var n = this;
        (function () {
            n.pos = {};
            r()
        })();
        this.draw = function () {
            if (n.alpha <= 0 || n.pos.x <= 0 || n.pos.x > e || n.pos.y <= 0 || n.pos.y > t) {
                r()
            }
            n.pos.y -= n.velocity;
            n.alpha -= 5e-4;
            i.beginPath();
            i.arc(n.pos.x, n.pos.y, n.scale * 10, 0, 2 * Math.PI, false);
            if (parseInt(Math.random()) * 100 % 3 == 0) i.fillStyle = "rgba(255,255,255," + n.alpha + ")";
            else i.fillStyle = "rgba(237,194,123," + n.alpha + ")";
            i.fill()
        }
    }

    function isHidden(el) {
        var style = window.getComputedStyle(el);
        return (style.display === 'none')
    }

    var e, t, n, r, i, s, o, u = true;
    const menuToggle = document.getElementById('menu-toggle')
    a();
    f()
})()