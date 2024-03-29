// (c) 2009 Dean McNamee.  Not yet released / licensed.
Soft3d = (function () {
    function aG(aK, aJ) {
        if (aK < aJ) {
            return aK
        }
        return aJ
    }
    function t(aK, aJ) {
        if (aK > aJ) {
            return aK
        }
        return aJ
    }
    function ay(aK, aJ, aL) {
        return aG(aJ, t(aK, aL))
    }
    var h = Math.PI * 2;

    function ax(aK, aJ) {
        return {
            x: aK.y * aJ.z - aK.z * aJ.y,
            y: aK.z * aJ.x - aK.x * aJ.z,
            z: aK.x * aJ.y - aK.y * aJ.x
        }
    }
    function aE(aK, aJ) {
        return aK.x * aJ.x + aK.y * aJ.y
    }
    function ao(aK, aJ) {
        return aK.x * aJ.x + aK.y * aJ.y + aK.z * aJ.z
    }
    function u(aK, aJ) {
        return {
            x: aK.x - aJ.x,
            y: aK.y - aJ.y
        }
    }
    function b(aK, aJ) {
        return {
            x: aK.x - aJ.x,
            y: aK.y - aJ.y,
            z: aK.z - aJ.z
        }
    }
    function z(aL, aK, aJ) {
        aL.x = aK.x - aJ.x;
        aL.y = aK.y - aJ.y;
        return aL
    }
    function C(aL, aK, aJ) {
        aL.x = aK.x - aJ.x;
        aL.y = aK.y - aJ.y;
        aL.z = aK.z - aJ.z;
        return aL
    }
    function a(aK, aJ) {
        return {
            x: aK.x + aJ.x,
            y: aK.y + aJ.y
        }
    }
    function aD(aK, aJ) {
        return {
            x: aK.x + aJ.x,
            y: aK.y + aJ.y,
            z: aK.z + aJ.z
        }
    }
    function aa(aL, aK, aJ) {
        aL.x = aK.x + aJ.x;
        aL.y = aK.y + aJ.y;
        return aL
    }
    function ab(aL, aK, aJ) {
        aL.x = aK.x + aJ.x;
        aL.y = aK.y + aJ.y;
        aL.z = aK.z + aJ.z;
        return aL
    }
    function aq(aJ, aK) {
        return {
            x: aJ.x * aK,
            y: aJ.y * aK
        }
    }
    function ae(aJ, aK) {
        return {
            x: aJ.x * aK,
            y: aJ.y * aK,
            z: aJ.z * aK
        }
    }
    function al(aJ) {
        var aL = aJ.x,
            aK = aJ.y;
        return Math.sqrt(aL * aL + aK * aK)
    }
    function X(aJ) {
        var aM = aJ.x,
            aL = aJ.y,
            aK = aJ.z;
        return Math.sqrt(aM * aM + aL * aL + aK * aK)
    }
    function am(aJ) {
        return aq(aJ, 1 / al(aJ))
    }
    function Z(aJ) {
        return ae(aJ, 1 / X(aJ))
    }
    function aA(aT, aR, aQ, aP, aO, aN, aM, aL, aK, aJ, aU, aS) {
        this.e0 = aT;
        this.e1 = aR;
        this.e2 = aQ;
        this.e3 = aP;
        this.e4 = aO;
        this.e5 = aN;
        this.e6 = aM;
        this.e7 = aL;
        this.e8 = aK;
        this.e9 = aJ;
        this.e10 = aU;
        this.e11 = aS
    }
    function J(aJ, aK) {
        return {
            x: aJ.e0 * aK.x + aJ.e1 * aK.y + aJ.e2 * aK.z + aJ.e3,
            y: aJ.e4 * aK.x + aJ.e5 * aK.y + aJ.e6 * aK.z + aJ.e7,
            z: aJ.e8 * aK.x + aJ.e9 * aK.y + aJ.e10 * aK.z + aJ.e11
        }
    }
    function Q(be, bd) {
        var bi = be.e0,
            bh = be.e1,
            bg = be.e2,
            bf = be.e3,
            bc = be.e4,
            bb = be.e5;
        var ba = be.e6,
            aY = be.e7,
            aW = be.e8,
            aV = be.e9,
            aS = be.e10,
            aQ = be.e11;
        var aU = bd.e0,
            aT = bd.e1,
            aR = bd.e2,
            aP = bd.e3,
            aO = bd.e4,
            aN = bd.e5;
        var aM = bd.e6,
            aL = bd.e7,
            aK = bd.e8,
            aJ = bd.e9,
            aZ = bd.e10,
            aX = bd.e11;
        return new aA(bi * aU + bh * aO + bg * aK, bi * aT + bh * aN + bg * aJ, bi * aR + bh * aM + bg * aZ, bi * aP + bh * aL + bg * aX + bf, bc * aU + bb * aO + ba * aK, bc * aT + bb * aN + ba * aJ, bc * aR + bb * aM + ba * aZ, bc * aP + bb * aL + ba * aX + aY, aW * aU + aV * aO + aS * aK, aW * aT + aV * aN + aS * aJ, aW * aR + aV * aM + aS * aZ, aW * aP + aV * aL + aS * aX + aQ)
    }
    function A() {
        return new aA(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0)
    }
    function k(aJ) {
        var aK = Math.sin(aJ);
        var aL = Math.cos(aJ);
        return new aA(1, 0, 0, 0, 0, aL, -aK, 0, 0, aK, aL, 0)
    }
    function j(aJ) {
        var aK = Math.sin(aJ);
        var aL = Math.cos(aJ);
        return new aA(aL, 0, aK, 0, 0, 1, 0, 0, -aK, 0, aL, 0)
    }
    function i(aJ) {
        var aK = Math.sin(aJ);
        var aL = Math.cos(aJ);
        return new aA(aL, -aK, 0, 0, aK, aL, 0, 0, 0, 0, 1, 0)
    }
    function x(aL, aK, aJ) {
        return new aA(1, 0, 0, aL, 0, 1, 0, aK, 0, 0, 1, aJ)
    }
    function ar(aL, aK, aJ) {
        return new aA(aL, 0, 0, 0, 0, aK, 0, 0, 0, 0, aJ, 0)
    }
    function O(aN) {
        var aL = aN.e0,
            aK = aN.e1,
            aJ = aN.e2,
            aS = aN.e4,
            aR = aN.e5;
        var aP = aN.e6,
            aO = aN.e8,
            aM = aN.e9,
            aQ = aN.e10;
        return new aA(aQ * aR - aP * aM, aP * aO - aS * aQ, aS * aM - aO * aR, 0, aJ * aM - aQ * aK, aQ * aL - aJ * aO, aO * aK - aL * aM, 0, aP * aK - aJ * aR, aS * aJ - aP * aL, aL * aR - aS * aK, 0)
    }
    function d(aM, aN) {
        var aJ = aN.length;
        var aK = Array(aJ);
        for (var aL = 0; aL < aJ; ++aL) {
            aK[aL] = J(aM, aN[aL])
        }
        return aK
    }
    function P(aO) {
        var aN = {
            x: 0,
            y: 0,
            z: 0
        };
        for (var aK = 0, aJ = aO.length; aK < aJ; ++aK) {
            var aM = aO[aK];
            aN.x += aM.x;
            aN.y += aM.y;
            aN.z += aM.z
        }
        var aL = 1 / aJ;
        aN.x *= aL;
        aN.y *= aL;
        aN.z *= aL;
        return aN
    }
    function e(aK, aJ) {
        return {
            x: (aK.x + aJ.x) * 0.5,
            y: (aK.y + aJ.y) * 0.5,
            z: (aK.z + aJ.z) * 0.5
        }
    }
    function f(aK, aJ) {
        var aL = am(u(aJ, aK));
        aa(aJ, aJ, aL);
        z(aK, aK, aL)
    }
    function ag(aJ, aN) {
        for (var aL = 0, aK = aN.length; aL < aK; ++aL) {
            var aM = aN[aL];
            if (aL == 0) {
                aJ.moveTo(aM.x, aM.y)
            } else {
                aJ.lineTo(aM.x, aM.y)
            }
        }
    }
    function ai(aV, aQ, a1, aM, a0, aL, aZ, aK, aS, aY, aR, aX, aP, aW) {
        aV.save();
        aV.beginPath();
        aV.moveTo(a1, aM);
        aV.lineTo(a0, aL);
        aV.lineTo(aZ, aK);
        aV.closePath();
        aV.clip();
        var aJ = aS * (aW - aX) - aR * aW + aP * aX + (aR - aP) * aY;
        var a3 = -(aY * (aZ - a0) - aX * aZ + aW * a0 + (aX - aW) * a1) / aJ;
        var a2 = (aX * aK + aY * (aL - aK) - aW * aL + (aW - aX) * aM) / aJ;
        var aO = (aS * (aZ - a0) - aR * aZ + aP * a0 + (aR - aP) * a1) / aJ;
        var aN = -(aR * aK + aS * (aL - aK) - aP * aL + (aP - aR) * aM) / aJ;
        var aU = (aS * (aW * a0 - aX * aZ) + aY * (aR * aZ - aP * a0) + (aP * aX - aR * aW) * a1) / aJ;
        var aT = (aS * (aW * aL - aX * aK) + aY * (aR * aK - aP * aL) + (aP * aX - aR * aW) * aM) / aJ;
        aV.transform(a3, a2, aO, aN, aU, aT);
        aV.drawImage(aQ, 0, 0);
        aV.restore()
    }
    function w(aJ) {
        return function () {
            aJ = ((aJ + 2127912214) + (aJ << 12)) & 4294967295;
            aJ = ((aJ ^ 3345072700) ^ (aJ >>> 19)) & 4294967295;
            aJ = ((aJ + 374761393) + (aJ << 5)) & 4294967295;
            aJ = ((aJ + 3550635116) ^ (aJ << 9)) & 4294967295;
            aJ = ((aJ + 3550635116) ^ (aJ << 9)) & 4294967295;
            aJ = ((aJ + 4251993797) + (aJ << 3)) & 4294967295;
            aJ = ((aJ ^ 3042594569) ^ (aJ >>> 16)) & 2147483647;
            return aJ / 2147483648
        }
    }
    function V(aL, aK, aJ) {
        return (1 - aJ) * aL + aJ * aK
    }
    function ad(aM, aL, aJ) {
        var aK = 1 - aJ;
        return {
            x: aK * aM.x + aJ * aL.x,
            y: aK * aM.y + aJ * aL.y,
            z: aK * aM.z + aJ * aL.z
        }
    }
    function az() {
        this.reset()
    }
    az.prototype.getMatrix = function v() {
        return this.matrix_
    };
    az.prototype.reset = function Y() {
        this.matrix_ = A()
    };
    az.prototype.rotateX = function p(aJ) {
        this.matrix_ = Q(k(aJ), this.matrix_)
    };
    az.prototype.rotateY = function o(aJ) {
        this.matrix_ = Q(j(aJ), this.matrix_)
    };
    az.prototype.rotateZ = function n(aJ) {
        this.matrix_ = Q(i(aJ), this.matrix_)
    };
    az.prototype.translate = function r(aL, aK, aJ) {
        this.matrix_ = Q(x(aL, aK, aJ), this.matrix_)
    };
    az.prototype.translatePre = function I(aL, aK, aJ) {
        this.matrix_ = Q(this.matrix_, x(aL, aK, aJ))
    };
    az.prototype.scale = function aw(aL, aK, aJ) {
        this.matrix_ = Q(ar(aL, aK, aJ), this.matrix_)
    };
    az.prototype.scalePre = function aF(aL, aK, aJ) {
        this.matrix_ = Q(this.matrix_, ar(aL, aK, aJ))
    };
    az.prototype.transformPoint = function aH(aJ) {
        return J(this.matrix_, aJ)
    };

    function aB(aM, aL, aJ, aK) {
        this.setRGBA(aM, aL, aJ, aK)
    }
    aB.prototype.setRGBA = function (aM, aL, aJ, aK) {
        this.r = aM;
        this.g = aL;
        this.b = aJ;
        this.a = aK
    };
    aB.prototype.setRGB = function (aL, aK, aJ) {
        this.setRGBA(aL, aK, aJ, 1)
    };
    aB.prototype.invert = function () {
        this.r = 1 - this.r;
        this.g = 1 - this.g;
        this.b = 1 - this.b
    };

    function l() {
        this.image = null;
        this.u0 = null;
        this.v0 = null;
        this.u1 = null;
        this.v1 = null;
        this.u2 = null;
        this.v2 = null;
        this.u3 = null;
        this.v3 = null
    }
    function L(aM, aL, aK, aJ) {
        this.i0 = aM;
        this.i1 = aL;
        this.i2 = aK;
        this.i3 = aJ;
        this.centroid = null;
        this.normal1 = null;
        this.normal2 = null;
        this.fill_rgba = null;
        this.texture = null
    }
    L.prototype.isTriangle = function () {
        return (this.i3 === null)
    };
    L.prototype.setQuad = function (aM, aL, aK, aJ) {
        this.i0 = aM;
        this.i1 = aL;
        this.i2 = aK;
        this.i3 = aJ
    };
    L.prototype.setTriangle = function (aL, aK, aJ) {
        this.i0 = aL;
        this.i1 = aK;
        this.i2 = aJ;
        this.i3 = null
    };

    function B() {
        this.vertices = [];
        this.quads = [];
        this.rgba_legacy_ = null;
        this.transform = new az()
    }
    B.ExtrudeSettings = function af() {
        this.distance_ = 1;
        this.count_ = 1;
        this.selector_ = null;
        this.selectAll();
        this.scale = {
            x: 1,
            y: 1,
            z: 1
        };
        this.rotate = {
            x: 0,
            y: 0,
            z: 0
        }
    };
    B.ExtrudeSettings.prototype.selectAll = function an() {
        this.selector_ = function (aK, aJ) {
            return true
        }
    };
    B.ExtrudeSettings.prototype.selectRandom = function c(aK, aL) {
        var aJ = w(aK);
        this.selector_ = function (aN, aM) {
            return aJ() < aL
        }
    };
    B.ExtrudeSettings.prototype.distance = function N(aJ) {
        return this.distance_
    };
    B.ExtrudeSettings.prototype.set_distance = function au(aJ) {
        this.distance_ = aJ
    };
    B.ExtrudeSettings.prototype.count = function g(aJ) {
        return this.count_
    };
    B.ExtrudeSettings.prototype.set_count = function y(aJ) {
        this.count_ = aJ
    };
    B.prototype.extrude = function H(a9) {
        var aK = a9.distance();
        var aS = a9.count();
        var aO = a9.rotate.x;
        var aN = a9.rotate.y;
        var aM = a9.rotate.z;
        var a0 = a9.scale.x;
        var aZ = a9.scale.y;
        var aY = a9.scale.z;
        var aQ = this.vertices;
        var aU = this.quads;
        var aJ = [];
        for (var a8 = 0, aW = aU.length; a8 < aW; ++a8) {
            if (a9.selector_(this, a8)) {
                aJ.push(a8)
            }
        }
        for (var a8 = 0, aW = aJ.length; a8 < aW; ++a8) {
            var a6 = aJ[a8];
            var aR = aU[a6];
            var aL = aR.centroid;
            var aP = Z(aD(aR.normal1, aR.normal2));
            var a5 = aR.isTriangle();
            var a3 = b(aQ[aR.i0], aL);
            var a2 = b(aQ[aR.i1], aL);
            var a2 = b(aQ[aR.i2], aL);
            if (!a5) {
                var a1 = b(aQ[aR.i3], aL)
            }
            for (var aT = 0; aT < aS; ++aT) {
                var a4 = (aT + 1) / aS;
                var aX = new az();
                aX.rotateX(aO * a4);
                aX.rotateY(aN * a4);
                aX.rotateZ(aM * a4);
                var a7 = aD(aL, ae(aX.transformPoint(aP), a4 * aK));
                aX.scalePre(V(1, a0, a4), V(1, aZ, a4), V(1, aY, a4));
                var aV = aQ.length;
                aQ.push(aD(a7, aX.transformPoint(a3)));
                aQ.push(aD(a7, aX.transformPoint(a2)));
                aQ.push(aD(a7, aX.transformPoint(a2)));
                if (!a5) {
                    aQ.push(aD(a7, aX.transformPoint(a1)))
                }
                aU.push(new L(aR.i1, aV + 1, aV, aR.i0));
                aU.push(new L(aR.i2, aV + 2, aV + 1, aR.i1));
                if (a5) {
                    aU.push(new L(aR.i0, aV, aV + 2, aR.i2))
                } else {
                    aU.push(new L(aR.i3, aV + 3, aV + 2, aR.i2));
                    aU.push(new L(aR.i0, aV, aV + 3, aR.i3))
                }
                aR.i0 = aV;
                aR.i1 = aV + 1;
                aR.i2 = aV + 2;
                if (!a5) {
                    aR.i3 = aV + 3
                }
            }
        }
        this.rebuildMeta()
    };
    B.prototype.averageSmooth = function U(aU) {
        if (aU === void(0)) {
            aU = 1
        }
        var aO = this.vertices;
        var aZ = aO.length;
        var aW = Array(aZ);
        var aS = Array(aZ);
        for (var aX = 0; aX < aZ; ++aX) {
            aS[aX] = []
        }
        for (var aX = 0, aR = this.quads.length; aX < aR; ++aX) {
            var aP = this.quads[aX];
            aS[aP.i0].push(aX);
            aS[aP.i1].push(aX);
            aS[aP.i2].push(aX);
            if (!aP.isTriangle()) {
                aS[aP.i3].push(aX)
            }
        }
        for (var aX = 0, aR = aO.length; aX < aR; ++aX) {
            var aN = aS[aX];
            var aT = {
                x: 0,
                y: 0,
                z: 0
            };
            for (var aV = 0, aY = aN.length; aV < aY; ++aV) {
                var aQ = this.quads[aN[aV]];
                var aM = aO[aQ.i0];
                var aL = aO[aQ.i1];
                var aK = aO[aQ.i2];
                var aJ = aO[aQ.i3];
                aT.x += (aM.x + aL.x + aK.x + aJ.x) / 4;
                aT.y += (aM.y + aL.y + aK.y + aJ.y) / 4;
                aT.z += (aM.z + aL.z + aK.z + aJ.z) / 4
            }
            var a0 = 1 / aY;
            aT.x *= a0;
            aT.y *= a0;
            aT.z *= a0;
            aW[aX] = ad(aO[aX], aT, aU)
        }
        this.vertices = aW;
        this.rebuildMeta()
    };
    B.prototype.linearSubdivide = function ak() {
        var aO = this.quads.length;
        var aP = {};
        for (var a3 = 0; a3 < aO; ++a3) {
            var aU = this.quads[a3];
            var a1 = aU.i0;
            var a0 = aU.i1;
            var aY = aU.i2;
            var aX = aU.i3;
            var aM = this.vertices[a1];
            var aL = this.vertices[a0];
            var aK = this.vertices[aY];
            var aJ = this.vertices[aX];
            var aN = [
                [a1, a0].sort(), [a0, aY].sort(), [aY, aX].sort(), [aX, a1].sort(), [a1, a0, aY, aX].sort(), ];
            for (var a2 = 0, a4 = aN.length; a2 < a4; ++a2) {
                var aZ = aN[a2];
                var a5 = aZ.join("-");
                var aW = aP[a5];
                if (aW == null) {
                    aW = this.vertices.length;
                    var aV = this;
                    this.vertices.push(P(aZ.map(function (a6) {
                        return aV.vertices[a6]
                    })));
                    aP[a5] = aW
                }
                aN[a2] = aW
            }
            var aT = new L(a1, aN[0], aN[4], aN[3]);
            var aS = new L(aN[0], a0, aN[1], aN[4]);
            var aR = new L(aN[4], aN[1], aY, aN[2]);
            var aQ = new L(aN[3], aN[4], aN[2], aX);
            this.quads[a3] = aT;
            this.quads.push(aS);
            this.quads.push(aR);
            this.quads.push(aQ)
        }
        this.rebuildMeta()
    };
    B.prototype.rebuildMeta = function ap() {
        var aX = this.quads;
        var aW = aX.length;
        var aS = this.vertices;
        for (var aN = 0; aN < aW; ++aN) {
            var aM = aX[aN];
            var aL;
            var aR, aP, aO;
            var aV = aS[aM.i0];
            var aU = aS[aM.i1];
            var aT = aS[aM.i2];
            var aK = b(aU, aV);
            var aJ = b(aT, aV);
            var aR = ax(aK, aJ);
            if (aM.isTriangle()) {
                aP = aO = aR;
                aL = P([aV, aU, aT])
            } else {
                var aQ = aS[aM.i3];
                var aY = b(aQ, aV);
                aP = ax(aJ, aY);
                aO = e(aR, aP);
                aL = P([aV, aU, aT, aQ])
            }
            aM.centroid = aL;
            aM.normal1 = aR;
            aM.normal2 = aP
        }
    };
    B.prototype.numQuads = function () {
        return this.quads.length
    };
    B.prototype.setRGBA = function (aM, aL, aJ, aK) {
        this.rgba_legacy_ = new aB(aM, aL, aJ, aK)
    };
    B.prototype.forEachFace = function (aM) {
        var aJ = this.quads;
        for (var aL = 0, aK = aJ.length; aL < aK; ++aL) {
            if (aM(aJ[aL], aL, this) === true) {
                break
            }
        }
    };
    B.makePlane = function G(aN, aM, aL, aK) {
        var aJ = new B();
        aJ.vertices = [aN, aM, aL, aK];
        aJ.quads = [new L(0, 1, 2, 3)];
        aJ.rebuildMeta();
        return aJ
    };
    B.makeCube = function av(aJ) {
        return B.makeBox(aJ, aJ, aJ)
    };
    B.makeBox = function M(aJ, aL, aM) {
        var aK = new B();
        aK.vertices = [{
            x: aJ,
            y: aL,
            z: -aM
        }, {
            x: aJ,
            y: aL,
            z: aM
        }, {
            x: aJ,
            y: -aL,
            z: aM
        }, {
            x: aJ,
            y: -aL,
            z: -aM
        }, {
            x: -aJ,
            y: aL,
            z: -aM
        }, {
            x: -aJ,
            y: aL,
            z: aM
        }, {
            x: -aJ,
            y: -aL,
            z: aM
        }, {
            x: -aJ,
            y: -aL,
            z: -aM
        }];
        aK.quads = [new L(0, 1, 2, 3), new L(1, 5, 6, 2), new L(5, 4, 7, 6), new L(4, 0, 3, 7), new L(0, 4, 5, 1), new L(2, 6, 7, 3)];
        aK.rebuildMeta();
        return aK
    };
    B.makeBoxWithHole = function ac(aK, aN, aO, aJ, aL) {
        var aM = new B();
        aM.vertices = [{
            x: aK,
            y: aN,
            z: -aO
        }, {
            x: aK,
            y: aN,
            z: aO
        }, {
            x: aK,
            y: -aN,
            z: aO
        }, {
            x: aK,
            y: -aN,
            z: -aO
        }, {
            x: -aK,
            y: aN,
            z: -aO
        }, {
            x: -aK,
            y: aN,
            z: aO
        }, {
            x: -aK,
            y: -aN,
            z: aO
        }, {
            x: -aK,
            y: -aN,
            z: -aO
        }, {
            x: aJ,
            y: aN,
            z: aO
        }, {
            x: aK,
            y: aL,
            z: aO
        }, {
            x: aJ,
            y: aL,
            z: aO
        }, {
            x: aJ,
            y: -aN,
            z: aO
        }, {
            x: aK,
            y: -aL,
            z: aO
        }, {
            x: aJ,
            y: -aL,
            z: aO
        }, {
            x: -aJ,
            y: aN,
            z: aO
        }, {
            x: -aK,
            y: aL,
            z: aO
        }, {
            x: -aJ,
            y: aL,
            z: aO
        }, {
            x: -aJ,
            y: -aN,
            z: aO
        }, {
            x: -aK,
            y: -aL,
            z: aO
        }, {
            x: -aJ,
            y: -aL,
            z: aO
        }, {
            x: aJ,
            y: aN,
            z: -aO
        }, {
            x: aK,
            y: aL,
            z: -aO
        }, {
            x: aJ,
            y: aL,
            z: -aO
        }, {
            x: aJ,
            y: -aN,
            z: -aO
        }, {
            x: aK,
            y: -aL,
            z: -aO
        }, {
            x: aJ,
            y: -aL,
            z: -aO
        }, {
            x: -aJ,
            y: aN,
            z: -aO
        }, {
            x: -aK,
            y: aL,
            z: -aO
        }, {
            x: -aJ,
            y: aL,
            z: -aO
        }, {
            x: -aJ,
            y: -aN,
            z: -aO
        }, {
            x: -aK,
            y: -aL,
            z: -aO
        }, {
            x: -aJ,
            y: -aL,
            z: -aO
        }];
        aM.quads = [new L(1, 8, 10, 9), new L(8, 14, 16, 10), new L(14, 5, 15, 16), new L(16, 15, 18, 19), new L(19, 18, 6, 17), new L(13, 19, 17, 11), new L(12, 13, 11, 2), new L(9, 10, 13, 12), new L(4, 26, 28, 27), new L(26, 20, 22, 28), new L(20, 0, 21, 22), new L(22, 21, 24, 25), new L(25, 24, 3, 23), new L(31, 25, 23, 29), new L(30, 31, 29, 7), new L(27, 28, 31, 30), new L(10, 16, 28, 22), new L(19, 31, 28, 16), new L(13, 25, 31, 19), new L(10, 22, 25, 13), new L(6, 7, 29, 17), new L(17, 29, 23, 11), new L(11, 23, 3, 2), new L(1, 9, 21, 0), new L(9, 12, 24, 21), new L(12, 2, 3, 24), new L(5, 4, 27, 15), new L(15, 27, 30, 18), new L(18, 30, 7, 6), new L(14, 26, 4, 5), new L(8, 20, 26, 14), new L(1, 0, 20, 8)];
        aM.rebuildMeta();
        return aM
    };
    B.randomSpherePoints = function S(aK, aL) {
        var aJ = w(aK);
        var aQ = Array(aL);
        while (aL--) {
            var aM = aJ() * 2 - 1;
            var aR = aJ() * h;
            var aP = Math.sqrt(1 - aM * aM);
            var aO = aP * Math.cos(aR);
            var aN = aP * Math.sin(aR);
            aQ[aL] = {
                x: aO,
                y: aN,
                z: aM
            }
        }
        return aQ
    };
    B.makeSphere = function F(aU, aK, aJ) {
        var aM = [];
        var aO = [];
        var aV = Math.PI / (aJ + 1);
        var a1 = (h) / aK;
        for (var aZ = 0, aN = aV; aZ < aJ; ++aZ, aN += aV) {
            var aS = Math.sin(aN);
            var aT = Math.cos(aN);
            for (var aY = 0; aY < aK; ++aY) {
                var aL = a1 * aY;
                aM.push({
                    x: aU * aS * Math.sin(aL),
                    y: aU * aT,
                    z: aU * aS * Math.cos(aL)
                })
            }
        }
        for (var aZ = 0; aZ < aJ - 1; ++aZ) {
            var aX = aZ * aK;
            for (var aY = 0; aY < aK; ++aY) {
                var aW = (aY + 1) % aK;
                aO.push(new L(aX + aY, aX + aK + aY, aX + aK + aW, aX + aW))
            }
        }
        var a0 = aM.length - aK;
        var aP = aM.length;
        var aR = aP + 1;
        aM.push({
            x: 0,
            y: aU,
            z: 0
        });
        aM.push({
            x: 0,
            y: -aU,
            z: 0
        });
        for (var aZ = 0; aZ < aK; ++aZ) {
            aO.push(new L(aP, aZ, ((aZ + 1) % aK), null));
            aO.push(new L(aR, a0 + ((aZ + 2) % aK), a0 + ((aZ + 1) % aK), null))
        }
        var aQ = new Soft3d.Shape();
        aQ.vertices = aM;
        aQ.quads = aO;
        aQ.rebuildMeta();
        return aQ
    };

    function W(aJ, aK) {
        this.interval_ms_ = 1000 / aJ;
        this.callback_ = aK;
        this.t_ = 0;
        this.step_ = 1;
        this.interval_handle_ = null
    }
    W.prototype.isRunning = function () {
        return this.interval_handle_ !== null
    };
    W.prototype.start = function (aK, aL) {
        if (this.isRunning()) {
            return
        }
        var aJ = this;
        this.interval_handle_ = setInterval(function () {
            var aM = aJ.callback_;
            aM(aJ.t_);
            aJ.t_ += aJ.step_
        }, this.interval_ms_)
    };
    W.prototype.stop = function () {
        if (!this.isRunning()) {
            return
        }
        clearInterval(this.interval_handle_);
        this.interval_handle_ = null
    };
    W.prototype.set_t = function (aJ) {
        this.t_ = aJ
    };
    W.prototype.set_step = function (aJ) {
        this.step_ = aJ
    };
    W.prototype.reverse_step_direction = function () {
        this.step_ = -this.step_
    };

    function aC(aJ) {
        var aK = aJ.getContext("2d");
        this.canvas_ = aJ;
        this.ctx_ = aK;
        this.width_ = aJ.width;
        this.height_ = aJ.height;
        this.focal_length_ = 1;
        this.shapes = [];
        this.camera = new az();
        this.mouse_listeners_ = [];
        if (aK.setStrokeColor == null) {
            aK.setStrokeColor = function aM(aR, aQ, aN, aO) {
                var aP = [Math.floor(aR * 255), Math.floor(aQ * 255), Math.floor(aN * 255), aO];
                aK.strokeStyle = "rgba(" + aP.join(",") + ")"
            }
        }
        if (aK.setFillColor == null) {
            aK.setFillColor = function aL(aR, aQ, aN, aO) {
                var aP = [Math.floor(aR * 255), Math.floor(aQ * 255), Math.floor(aN * 255), aO];
                aK.fillStyle = "rgba(" + aP.join(",") + ")"
            }
        }
    }
    aC.prototype.projectPointToCanvas = function m(aL) {
        var aK = this.focal_length_ / -aL.z;
        var aJ = aL.x * aK;
        var aM = aL.y * aK;
        return {
            x: (aJ + 1) * 300 + 100,
            y: (-aM + 1) * 300
        }
    };
    aC.prototype.projectPointsToCanvas = function T(aM) {
        var aJ = aM.length;
        var aK = Array(aJ);
        for (var aL = 0; aL < aJ; ++aL) {
            aK[aL] = this.projectPointToCanvas(aM[aL])
        }
        return aK
    };
    aC.prototype.projectQuadFaceToCanvasIP = function (aJ) {
        aJ.i0 = this.projectPointToCanvas(aJ.i0);
        aJ.i1 = this.projectPointToCanvas(aJ.i1);
        aJ.i2 = this.projectPointToCanvas(aJ.i2);
        if (!aJ.isTriangle()) {
            aJ.i3 = this.projectPointToCanvas(aJ.i3)
        }
        return aJ
    };
    aC.prototype.setFocalLength = function aI(aJ) {
        this.focal_length_ = aJ
    };
    aC.prototype.addShape = function E(aJ) {
        this.shapes.push(aJ)
    };
    aC.prototype.registerMouseListener = function at(aK) {
        var aN = this.mouse_listeners_;
        var aJ = aN.length == 0;
        aN.push(aK);
        var aO = {
            first_event: true,
            is_clicking: false,
            last_x: 0,
            last_y: 0,
        };
        if (!aJ) {
            return
        }
        var aM = this.canvas_;

        function aL(aQ) {
            if (typeof aQ.offsetX == "number") {
                return {
                    x: aQ.offsetX,
                    y: aQ.offsetY
                }
            }
            var aR = {
                x: 0,
                y: 0
            };
            var aP = aQ.target;
            var aS = aP.offsetParent;
            if (aS) {
                aR.x += aP.offsetLeft - aS.offsetLeft;
                aR.y += aP.offsetTop - aS.offsetTop
            }
            return {
                x: aQ.layerX - aR.x,
                y: aQ.layerY - aR.y
            }
        }
        aM.addEventListener("mousedown", function (aQ) {
            var aP = aL(aQ);
            aO.is_clicking = true;
            aO.last_x = aP.x;
            aO.last_y = aP.y
        }, false);
        aM.addEventListener("mouseup", function (aP) {
            aO.is_clicking = false
        }, false);
        aM.addEventListener("mouseout", function (aP) {
            aO.is_clicking = false
        }, false);
        aM.addEventListener("mousemove", function (aT) {
            var aP = aL(aT);
            var aV = aO.last_x - aP.x;
            var aU = aO.last_y - aP.y;
            aO.last_x = aP.x;
            aO.last_y = aP.y;
            if (aO.first_event) {
                aO.first_event = false;
                return
            }
            var aS = {
                is_clicking: aO.is_clicking,
                canvas_x: aO.last_x,
                canvas_y: aO.last_y,
                delta_x: aV,
                delta_y: aU,
                shift: aT.shiftKey,
                ctrl: aT.ctrlKey
            };
            for (var aR = 0, aQ = aN.length; aR < aQ; ++aR) {
                aN[aR](aS)
            }
        }, false)
    };
    aC.prototype.autoCamera = function D(aM, aL, aK, aQ, aP, aO, aU) {
        var aS = this.camera;
        var aR = this;
        var aJ = {
            rotate_x: aQ,
            rotate_y: aP,
            rotate_z: aO,
            x: aM,
            y: aL,
            z: aK
        };

        function aN() {
            aS.reset();
            aS.rotateY(aJ.rotate_y);
            aS.rotateX(aJ.rotate_x);
            aS.translate(aJ.x, aJ.y, aJ.z)
        }
        var aT = null;
        this.registerMouseListener(function (aV) {
            if (!aV.is_clicking) {
                return
            }
            if (aV.shift && aV.ctrl) {
                aR.focal_length_ = ay(0.05, 10, aR.focal_length_ + (aV.delta_y * 0.01))
            } else {
                if (aV.shift) {
                    aJ.z += aV.delta_y * 0.01
                } else {
                    if (aV.ctrl) {
                        aJ.x -= aV.delta_x * 0.01;
                        aJ.y -= aV.delta_y * 0.01
                    } else {
                        aJ.rotate_y -= aV.delta_x * 0.01;
                        aJ.rotate_x -= aV.delta_y * 0.01
                    }
                }
            }
            if (aT != null) {
                clearTimeout(aT)
            }
            aT = setTimeout(function () {
                aT = null;
                aN();
                aU()
            }, 0)
        });
        aN()
    };
    aC.DrawOptions = function R() {
        this.draw_fill = true;
        this.draw_overdraw = true;
        this.draw_textures = true;
        this.draw_stroke = false;
        this.draw_normals = false;
        this.draw_backfaces = false;
        this.whiteout_alpha = 1;
        this.global_alpha = 1;
        this.whiteout_rgba = new aB(1, 1, 1, 1);
        this.stroke_rgba = new aB(0.2, 0.2, 0.2, 1);
        this.normal1_rgba = new aB(0, 0, 1, 1);
        this.normal2_rgba = new aB(0, 1, 0, 1)
    };
    aC.prototype.autoToolbar = function s(aJ, aS) {
        var aK = document.createElement("div");
        var aV = [
            ["Fill", aJ.draw_fill, function (aW) {
                aJ.draw_fill = this.checked;
                aS()
            }],
            ["Stroke", aJ.draw_stroke, function (aW) {
                aJ.draw_stroke = this.checked;
                aS()
            }],
            ["Normals", aJ.draw_normals, function (aW) {
                aJ.draw_normals = this.checked;
                aS()
            }],
            ["Backfaces", aJ.draw_backfaces, function (aW) {
                aJ.draw_backfaces = this.checked;
                aS()
            }],
            ["Overdraw", aJ.draw_overdraw, function (aW) {
                aJ.draw_overdraw = this.checked;
                aS()
            }],
            ["Global Alpha", aJ.global_alpha != 1, function (aW) {
                aJ.global_alpha = this.checked ? 0.3 : 1;
                aS()
            }]
        ];
        for (var aN = 0, aP = aV.length; aN < aP; ++aN) {
            var aO = aV[aN];
            var aL = aO[0];
            var aR = aO[1];
            var aU = aO[2];
            var aQ = document.createElement("span");
            aQ.style.marginRight = "20px";
            var aM = document.createElement("input");
            aM.type = "checkbox";
            if (aR) {
                aM.checked = true
            }
            aM.addEventListener("change", aU, false);
            aQ.appendChild(aM);
            aQ.appendChild(document.createTextNode(" " + aL));
            aK.appendChild(aQ)
        }
        var aT = this.canvas_.parentNode;
        aT.insertBefore(aK, aT.firstChild)
    };

    function ah(aJ, aK) {
        return aJ.qf.centroid.z - aK.qf.centroid.z
    }
    var K = {
        x: 0,
        y: 0,
        z: 1
    };
    var q = [];
    aC.prototype.draw = function aj(a4) {
        var a0 = this.ctx_;
        a0.globalAlpha = a4.whiteout_alpha;
        var a1 = a4.whiteout_rgba;
        if (a1 !== null) {
            a0.setFillColor(a1.r, a1.g, a1.b, a1.a);
            a0.fillRect(0, 0, this.width_, this.height_)
        } else {
            a0.clearRect(0, 0, this.width_, this.height_)
        }
        a0.globalAlpha = a4.global_alpha;
        var aZ = a4.stroke_rgba;
        a0.setStrokeColor(aZ.r, aZ.g, aZ.b, aZ.a);
        var a6 = this.shapes;
        var aJ = a6.length;
        var aU = 0;
        for (var bh = 0; bh < aJ; ++bh) {
            aU += a6[bh].numQuads()
        }
        var bi = a4.draw_backfaces;
        var aW = this.camera.getMatrix();
        var aP = [];
        var aR = q.length;
        var ba = 0;
        for (var bh = 0; bh < aJ; ++bh) {
            var aX = a6[bh];
            var bd = Q(aW, aX.transform.getMatrix());
            var bl = O(bd);
            var a3 = d(bd, aX.vertices);
            var aK = aX.quads;
            var aN = aX.rgba_legacy_;
            for (var bg = 0, aT = aX.numQuads(); bg < aT; ++bg) {
                var aM = aK[bg];
                var bb = J(bd, aM.centroid);
                if (bb.z >= -1) {
                    continue
                }
                var a8 = Z(J(bl, aM.normal1));
                var a7 = J(bl, aM.normal2);
                if (!bi && ao(bb, a8) > 0 && ao(bb, a7) > 0) {
                    continue
                }
                var a9 = ao(K, a8);
                if (a9 < 0) {
                    a9 = 0
                }
                var bk;
                if (aM.isTriangle()) {
                    bk = new L(a3[aM.i0], a3[aM.i1], a3[aM.i2], null)
                } else {
                    bk = new L(a3[aM.i0], a3[aM.i1], a3[aM.i2], a3[aM.i3])
                }
                bk.centroid = bb;
                bk.normal1 = a8;
                bk.normal2 = a7;
                var aL = {
                    qf: bk,
                    rgba: aM.fill_rgba || aN,
                    texture: aM.texture,
                    intensity: a9
                };
                aP.push(aL)
            }
        }
        aP.sort(ah);
        var aV = a4.draw_normals;
        var a5 = a4.draw_fill;
        var be = a4.draw_stroke;
        var aS = a4.draw_textures;
        var bj = a4.draw_overdraw;
        var aO = a4.normal1_rgba;
        var bc = a4.normal2_rgba;
        aU = aP.length;
        for (var bg = 0; bg < aU; ++bg) {
            var aL = aP[bg];
            var aM = aL.qf;
            this.projectQuadFaceToCanvasIP(aM);
            var aQ = aM.isTriangle();
            if (bj) {
                f(aM.i0, aM.i1);
                f(aM.i1, aM.i2);
                if (aQ) {
                    f(aM.i2, aM.i0)
                } else {
                    f(aM.i2, aM.i3);
                    f(aM.i3, aM.i0)
                }
            }
            a0.beginPath();
            a0.moveTo(aM.i0.x, aM.i0.y);
            a0.lineTo(aM.i1.x, aM.i1.y);
            a0.lineTo(aM.i2.x, aM.i2.y);
            if (!aQ) {
                a0.lineTo(aM.i3.x, aM.i3.y)
            }
            if (a5) {
                var bf = aL.rgba;
                if (bf) {
                    var a2 = aL.intensity;
                    a0.setFillColor(bf.r * a2, bf.g * a2, bf.b * a2, bf.a);
                    a0.fill()
                }
            }
            if (aS) {
                var aY = aL.texture;
                if (aY !== null) {
                    ai(a0, aY.image, aM.i0.x, aM.i0.y, aM.i1.x, aM.i1.y, aM.i2.x, aM.i2.y, aY.u0, aY.v0, aY.u1, aY.v1, aY.u2, aY.v2);
                    if (!aQ) {
                        ai(a0, aY.image, aM.i0.x, aM.i0.y, aM.i2.x, aM.i2.y, aM.i3.x, aM.i3.y, aY.u0, aY.v0, aY.u2, aY.v2, aY.u3, aY.v3)
                    }
                }
            }
            if (be) {
                a0.closePath();
                a0.stroke()
            }
            if (aV) {
                a0.save();
                a0.setStrokeColor(aO.r, aO.g, aO.b, aO.a);
                a0.beginPath();
                ag(a0, this.projectPointsToCanvas([aM.centroid, aD(aM.centroid, Z(aM.normal2))]));
                a0.stroke();
                a0.setStrokeColor(bc.r, bc.g, bc.b, bc.a);
                a0.beginPath();
                ag(a0, this.projectPointsToCanvas([aM.centroid, aD(aM.centroid, aM.normal1)]));
                a0.stroke();
                a0.restore()
            }
        }
        return aU
    };
    return {
        RGBA: aB,
        TextureInfo: l,
        Transform: az,
        Ticker: W,
        World: aC,
        Shape: B,
        Math: {
            crossProduct: ax,
            dotProduct2d: aE,
            dotProduct3d: ao,
            subPoints2d: u,
            subPoints3d: b,
            addPoints2d: a,
            addPoints3d: aD,
            mulPoint2d: aq,
            mulPoint3d: ae,
            vecMag2d: al,
            vecMag3d: X,
            unitVector2d: am,
            unitVector3d: Z,
            linearInterpolate: V
        },
    }
})();

function min(d, c) {
    if (d < c) {
        return d
    }
    return c
}
function max(d, c) {
    if (d > c) {
        return d
    }
    return c
}
function clamp(e, d, f) {
    return min(d, max(e, f))
}
function tri(a) {
    if (a < 0.5) {
        return a * 2
    }
    return (1 - a) * 2
}
function lerp(e, d, c) {
    return (d - e) * c + e
}
window.addEventListener("load", function () {
    var s = document.getElementById("canvas");
    var u = s.getContext("2d");
    var t = new Soft3d.World(s);
    var o = null;

    function v(D) {
        D.draw_fill = false;
        D.draw_stroke = true;
        D.draw_textures = false;
        D.draw_overdraw = false
    }
    var n = null;
    var r = new Soft3d.World.DrawOptions();
    var b = false;

    function B(D) {
        b = !b;
        D.stroke_rgba.invert();
        D.whiteout_rgba.invert();
        document.body.className = b ? "white" : "black"
    }
    function a(D) {
        if (!b) {
            D.stroke_rgba.invert();
            D.whiteout_rgba.invert()
        }
    }
    function p(E) {
        var G = E / 100;
        var F = E / 10;
        var D = Math.sin(F / 2) * 3;
        var H = Math.sin(G * 4) * 3;
        o.transform.reset();
        o.transform.rotateX(G);
        o.transform.rotateY(F);
        o.transform.translate(D, H, -4);
        t.draw(r)
    }
    var q = 90;
    var l = 150;
    var x = 15;
    var f = 60;
    var c = 120;
    var m = 20;
    var k = 240;
    var e = 60;
    var A = 200;
    var d = 30;
    var i = 10;
    var g = 200;
    var C = 220;
    var y = {
        dur_t: 0,
        add: function (E, D) {
            this[this.dur_t] = D;
            this.dur_t += E
        }
    };
    y.add(q, function () {
        o = Soft3d.Shape.makeCube(2);
        o.setRGBA(1, 0, 0, 1);
        t.shapes[0] = o;
        r = new Soft3d.World.DrawOptions();
        a(r);
        v(r);
        n = function (E) {
            var D = min(1, E / q);
            r.stroke_rgba.a = D;
            o.transform.reset();
            o.transform.scale(D, D, D);
            t.draw(r)
        }
    });
    y.add(l, function () {
        v(r);
        n = function (D) {
            p(D - q)
        }
    });
    y.add(x, function (D) {
        r.draw_fill = true;
        n = function (F) {
            var E = (F - D) / x;
            o.setRGBA(1, 0, 0, E);
            r.stroke_rgba.a = 1 - E;
            p(F - q)
        }
    });
    y.add(f, function () {
        r.draw_stroke = false;
        r.draw_overdraw = true;
        n = function (D) {
            p(D - q)
        }
    });
    y.add(c, function (D) {
        n = function (F) {
            var E = (F - D) / c;
            o = Soft3d.Shape.makeCube(2);
            o.setRGBA(1, 0, 0, 1);
            t.shapes[0] = o;
            o.linearSubdivide();
            o.averageSmooth(E);
            o.linearSubdivide();
            o.averageSmooth(E);
            p(F - q)
        }
    });
    y.add(m, function (D) {
        n = function (E) {
            o = Soft3d.Shape.makeCube(2);
            o.setRGBA(1, 0, 0, 1);
            t.shapes[0] = o;
            o.linearSubdivide();
            o.averageSmooth();
            var G = (E - D) / 5;
            var F = 9;
            settings = new Soft3d.Shape.ExtrudeSettings();
            settings.selectRandom(73774, 0.3);
            settings.set_distance(G);
            settings.set_count(F);
            settings.scale.x = settings.scale.y = 0.1;
            o.extrude(settings);
            o.linearSubdivide();
            o.averageSmooth();
            p(E - q)
        }
    });
    y.add(k, function (D) {
        n = function (E) {
            o = Soft3d.Shape.makeCube(2);
            o.setRGBA(1, 0, 0, 1);
            t.shapes[0] = o;
            o.linearSubdivide();
            o.averageSmooth();
            var G = min(30, (E - (D - m)) / 5);
            var F = 9;
            settings = new Soft3d.Shape.ExtrudeSettings();
            settings.selectRandom(73774, 0.3);
            settings.set_distance(G);
            settings.set_count(F);
            settings.rotate.x = lerp(0, Math.sin(E / 20) * 2, min(1, (E - D) / 30));
            settings.rotate.y = settings.rotate.x / 2;
            settings.rotate.z = settings.rotate.x / 3;
            settings.scale.x = settings.scale.y = 0.1;
            o.extrude(settings);
            o.linearSubdivide();
            o.averageSmooth();
            p(E - q)
        }
    });

    function w(D) {
        var E = Soft3d.Shape.makeCube(2);
        E.setRGBA(1, 0, 0, 1);
        E.linearSubdivide();
        E.averageSmooth();
        settings = new Soft3d.Shape.ExtrudeSettings();
        settings.selectRandom(73774, 0.3);
        settings.set_distance(30);
        settings.set_count(9);
        settings.rotate.x = Math.sin(D / 20) * 2;
        settings.rotate.y = settings.rotate.x / 2;
        settings.rotate.z = settings.rotate.x / 3;
        settings.scale.x = settings.scale.y = 0.1;
        E.extrude(settings);
        E.linearSubdivide();
        E.averageSmooth();
        return E
    }
    y.add(e, function (D) {
        n = function (F) {
            var E = (F - D) / e;
            o = w(F);
            o.setRGBA(1, 0, 0, lerp(1, 0.3, E));
            t.shapes[0] = o;
            p(F - q)
        }
    });
    y.add(A, function (D) {
        n = function (F) {
            var E = (F - D) / A;
            r.whiteout_rgba.a = lerp(1, 0.05, tri(E));
            o = w(F);
            o.setRGBA(1, 0, 0, 0.3);
            t.shapes[0] = o;
            p(F - q)
        }
    });
    y.add(d, function (D) {
        r.whiteout_rgba.a = 1;
        n = function (F) {
            var E = (F - D) / d;
            o = w(F);
            o.setRGBA(1, 0, 0, lerp(0.3, 0, E));
            t.shapes[0] = o;
            p(F - q)
        }
    });
    y.add(i, function () {});
    y.add(g, function (D) {
        r.draw_fill = false;
        r.draw_overdraw = false;
        r.draw_stroke = true;
        n = function (F) {
            var E = tri((F - D) / g);
            r.stroke_rgba.a = E / 4;
            o = w(F);
            t.shapes[0] = o;
            p(F - q)
        }
    });
    y.add(C, function (D) {
        r.draw_fill = false;
        r.draw_stroke = false;
        r.draw_normals = true;
        n = function (F) {
            var E = tri(min(1, (F - D) / C));
            r.normal1_rgba = new Soft3d.RGBA(0, 0, 1, E);
            r.normal2_rgba = new Soft3d.RGBA(0, 1, 0, E);
            o = w(F);
            t.shapes[0] = o;
            p(F - q)
        }
    });
    y.add(1, function () {
        z.set_t(-30)
    });
    var h;

    function j(E) {
        var D = y[E];
        if (D) {
            D(E)
        }
        n(E);
        h = E
    }
    t.setFocalLength(2.5);
    t.autoCamera(0, 0, -40, 0, 0, 0, function () {
        j(h)
    });
    var z = new Soft3d.Ticker(30, j);
    document.addEventListener("keydown", function (D) {
        if (D.keyCode == 80) {
            if (z.isRunning()) {
                z.stop()
            } else {
                z.start()
            }
        } else {
            if (D.keyCode == 84) {
                B(r);
                j(h)
            }
        }
    }, false);
    z.start()
}, false);