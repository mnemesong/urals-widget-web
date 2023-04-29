(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
};
var HxOverrides = function() { };
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.now = function() {
	return Date.now();
};
var Main = function() { };
Main.getAll = function() {
	var result = [];
	var _g = 0;
	var _g1 = Main.stor.length;
	while(_g < _g1) {
		var i = _g++;
		result.push({ id : i, val : { s : Main.stor[i]}});
	}
	return result;
};
Main.main = function() {
	var w = new urals_web_js_SpaWidgetRenderer(new WebWidgetStub("w",new urals_IntIdRenderer("w_")));
	var rerender = null;
	rerender = function() {
		w.rerenderInSpa(Main.getAll(),function(el) {
			return "body";
		},function(elHtml,el) {
			elHtml.onclick = function(event) {
				Main.stor.push("Click on me!");
				rerender();
			};
			console.log("test.js/Main.js.hx:32:",Main.stor);
		});
	};
	rerender();
};
var Std = function() { };
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var urals_web_AbstractWidget = function(cn,idRenderer) {
	this.cn = cn;
	this.idRenderer = idRenderer;
};
urals_web_AbstractWidget.prototype = {
	renderId: function(id) {
		return this.idRenderer.renderId(id);
	}
	,parseId: function(id) {
		return this.idRenderer.parseId(id);
	}
	,getClassId: function() {
		return this.cn;
	}
};
var WebWidgetStub = function(cn,idRenderer) {
	urals_web_AbstractWidget.call(this,cn,idRenderer);
};
WebWidgetStub.__super__ = urals_web_AbstractWidget;
WebWidgetStub.prototype = $extend(urals_web_AbstractWidget.prototype,{
	template: function(m,id) {
		return "<div id=\"" + this.renderId(id) + "\" class=\"" + this.cn + "\">" + m.s + "</div>";
	}
	,getCss: function() {
		return "." + this.cn + " {background-color: #777;}";
	}
});
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var urals_IdMatchHelper = function() { };
urals_IdMatchHelper.isIdMatch = function(s) {
	return new EReg("[a-zA-Z_\\-]+[a-zA-Z_0-9\\-]*","").match(s);
};
urals_IdMatchHelper.assertIdMatch = function(s) {
	if(urals_IdMatchHelper.isIdMatch(s) == false) {
		throw new haxe_Exception("String " + s + " is not may be valid htmlId");
	}
};
urals_IdMatchHelper.isContainsPrefix = function(s,pref) {
	return s.indexOf(pref) == 0;
};
urals_IdMatchHelper.assertContainsPrefix = function(s,pref) {
	if(urals_IdMatchHelper.isContainsPrefix(s,pref) == false) {
		throw new haxe_Exception("String " + s + " is not contains prefix " + pref);
	}
};
urals_IdMatchHelper.removePrefix = function(s,pref) {
	urals_IdMatchHelper.assertContainsPrefix(s,pref);
	return HxOverrides.substr(s,pref.length,null);
};
var urals_IntIdRenderer = function(pref) {
	if(pref == null) {
		pref = "";
	}
	urals_IdMatchHelper.assertIdMatch(pref);
	this.pref = pref;
};
urals_IntIdRenderer.prototype = {
	renderId: function(id) {
		return this.pref + (id == null ? "null" : "" + id);
	}
	,parseId: function(id) {
		return Std.parseInt(urals_IdMatchHelper.removePrefix(id,this.pref));
	}
};
var urals_web_js_SpaWidgetRenderer = function(widget) {
	this.widget = widget;
};
urals_web_js_SpaWidgetRenderer.prototype = {
	regroup: function(arr,assoc) {
		var result = [];
		var _g = 0;
		var _g1 = arr.length;
		while(_g < _g1) {
			var i = _g++;
			var t = assoc(arr[i]);
			var _g2 = [];
			var _g3 = 0;
			var _g4 = result;
			while(_g3 < _g4.length) {
				var v = _g4[_g3];
				++_g3;
				if(v.assoc == t) {
					_g2.push(v);
				}
			}
			if(_g2.length == 0) {
				result.push({ assoc : t, arrs : []});
			}
			var result1 = new Array(result.length);
			var _g5 = 0;
			var _g6 = result.length;
			while(_g5 < _g6) {
				var i1 = _g5++;
				var el = result[i1];
				result1[i1] = el.assoc == t ? { assoc : t, arrs : el.arrs.concat([arr[i]])} : el;
			}
			result = result1;
		}
		return result;
	}
	,rerenderInSpa: function(els,getRootSelector,afterRender) {
		var _gthis = this;
		var doc = window.document;
		var group = this.regroup(els,getRootSelector);
		var _g = 0;
		var _g1 = group.length;
		while(_g < _g1) {
			var i = _g++;
			var el = doc.querySelector(group[i].assoc);
			if(el != null) {
				var _this = group[i].arrs;
				var result = new Array(_this.length);
				var _g2 = 0;
				var _g3 = _this.length;
				while(_g2 < _g3) {
					var i1 = _g2++;
					var el1 = _this[i1];
					result[i1] = _gthis.widget.template(el1.val,el1.id);
				}
				el.innerHTML = result.join("\n");
			} else {
				console.log("src/urals/web/js/SpaWidgetRenderer.js.hx:48:","Not found querySelector at render: " + group[i].assoc);
			}
		}
		window.setTimeout(function() {
			var _g = 0;
			var _g1 = els.length;
			while(_g < _g1) {
				var i = _g++;
				var elHtml = doc.querySelector("#" + _gthis.widget.renderId(els[i].id));
				if(elHtml != null) {
					afterRender(elHtml,els[i]);
				} else {
					console.log("src/urals/web/js/SpaWidgetRenderer.js.hx:57:","Not found querySelector after render: " + _gthis.widget.renderId(els[i].id));
				}
			}
		},10);
	}
};
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
Main.stor = ["Click on me!"];
Main.main();
})({});
