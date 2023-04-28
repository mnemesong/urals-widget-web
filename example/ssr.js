(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = "EReg";
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = "HxOverrides";
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
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
var Lambda = function() { };
Lambda.__name__ = "Lambda";
Lambda.has = function(it,elt) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(x1 == elt) {
			return true;
		}
	}
	return false;
};
function Main_main() {
	urals_web_AbstractWebWidgetTest.run();
}
Math.__name__ = "Math";
var Std = function() { };
Std.__name__ = "Std";
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
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
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = "StringBuf";
StringBuf.prototype = {
	get_length: function() {
		return this.b.length;
	}
	,add: function(x) {
		this.b += Std.string(x);
	}
	,addChar: function(c) {
		this.b += String.fromCodePoint(c);
	}
	,addSub: function(s,pos,len) {
		this.b += len == null ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len);
	}
	,toString: function() {
		return this.b;
	}
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = "StringTools";
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.rpad = function(s,c,l) {
	if(c.length <= 0) {
		return s;
	}
	var buf_b = "";
	buf_b += s == null ? "null" : "" + s;
	while(buf_b.length < l) buf_b += c == null ? "null" : "" + c;
	return buf_b;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var urals_web_AbstractWidget = function(cn,idRenderer) {
	this.cn = cn;
	this.idRenderer = idRenderer;
};
urals_web_AbstractWidget.__name__ = "urals.web.AbstractWidget";
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
	,__class__: urals_web_AbstractWidget
};
var WebWidgetStub = function(cn,idRenderer) {
	urals_web_AbstractWidget.call(this,cn,idRenderer);
};
WebWidgetStub.__name__ = "WebWidgetStub";
WebWidgetStub.__super__ = urals_web_AbstractWidget;
WebWidgetStub.prototype = $extend(urals_web_AbstractWidget.prototype,{
	template: function(m,id) {
		return "<div id=\"" + this.renderId(id) + "\" class=\"" + this.cn + "\">" + m.s + "</div>";
	}
	,getCss: function() {
		return "." + this.cn + " {background-color: #777;}";
	}
	,__class__: WebWidgetStub
});
var haxe_StackItem = $hxEnums["haxe.StackItem"] = { __ename__:true,__constructs__:null
	,CFunction: {_hx_name:"CFunction",_hx_index:0,__enum__:"haxe.StackItem",toString:$estr}
	,Module: ($_=function(m) { return {_hx_index:1,m:m,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Module",$_.__params__ = ["m"],$_)
	,FilePos: ($_=function(s,file,line,column) { return {_hx_index:2,s:s,file:file,line:line,column:column,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="FilePos",$_.__params__ = ["s","file","line","column"],$_)
	,Method: ($_=function(classname,method) { return {_hx_index:3,classname:classname,method:method,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="Method",$_.__params__ = ["classname","method"],$_)
	,LocalFunction: ($_=function(v) { return {_hx_index:4,v:v,__enum__:"haxe.StackItem",toString:$estr}; },$_._hx_name="LocalFunction",$_.__params__ = ["v"],$_)
};
haxe_StackItem.__constructs__ = [haxe_StackItem.CFunction,haxe_StackItem.Module,haxe_StackItem.FilePos,haxe_StackItem.Method,haxe_StackItem.LocalFunction];
var haxe_CallStack = {};
haxe_CallStack.callStack = function() {
	return haxe_NativeStackTrace.toHaxe(haxe_NativeStackTrace.callStack());
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = "haxe.Exception";
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
var haxe_NativeStackTrace = function() { };
haxe_NativeStackTrace.__name__ = "haxe.NativeStackTrace";
haxe_NativeStackTrace.callStack = function() {
	var e = new Error("");
	var stack = haxe_NativeStackTrace.tryHaxeStack(e);
	if(typeof(stack) == "undefined") {
		try {
			throw e;
		} catch( _g ) {
		}
		stack = e.stack;
	}
	return haxe_NativeStackTrace.normalize(stack,2);
};
haxe_NativeStackTrace.toHaxe = function(s,skip) {
	if(skip == null) {
		skip = 0;
	}
	if(s == null) {
		return [];
	} else if(typeof(s) == "string") {
		var stack = s.split("\n");
		if(stack[0] == "Error") {
			stack.shift();
		}
		var m = [];
		var _g = 0;
		var _g1 = stack.length;
		while(_g < _g1) {
			var i = _g++;
			if(skip > i) {
				continue;
			}
			var line = stack[i];
			var matched = line.match(/^    at ([A-Za-z0-9_. ]+) \(([^)]+):([0-9]+):([0-9]+)\)$/);
			if(matched != null) {
				var path = matched[1].split(".");
				if(path[0] == "$hxClasses") {
					path.shift();
				}
				var meth = path.pop();
				var file = matched[2];
				var line1 = Std.parseInt(matched[3]);
				var column = Std.parseInt(matched[4]);
				m.push(haxe_StackItem.FilePos(meth == "Anonymous function" ? haxe_StackItem.LocalFunction() : meth == "Global code" ? null : haxe_StackItem.Method(path.join("."),meth),file,line1,column));
			} else {
				m.push(haxe_StackItem.Module(StringTools.trim(line)));
			}
		}
		return m;
	} else if(skip > 0 && Array.isArray(s)) {
		return s.slice(skip);
	} else {
		return s;
	}
};
haxe_NativeStackTrace.tryHaxeStack = function(e) {
	if(e == null) {
		return [];
	}
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = haxe_NativeStackTrace.prepareHxStackTrace;
	var stack = e.stack;
	Error.prepareStackTrace = oldValue;
	return stack;
};
haxe_NativeStackTrace.prepareHxStackTrace = function(e,callsites) {
	var stack = [];
	var _g = 0;
	while(_g < callsites.length) {
		var site = callsites[_g];
		++_g;
		if(haxe_NativeStackTrace.wrapCallSite != null) {
			site = haxe_NativeStackTrace.wrapCallSite(site);
		}
		var method = null;
		var fullName = site.getFunctionName();
		if(fullName != null) {
			var idx = fullName.lastIndexOf(".");
			if(idx >= 0) {
				var className = fullName.substring(0,idx);
				var methodName = fullName.substring(idx + 1);
				method = haxe_StackItem.Method(className,methodName);
			} else {
				method = haxe_StackItem.Method(null,fullName);
			}
		}
		var fileName = site.getFileName();
		var fileAddr = fileName == null ? -1 : fileName.indexOf("file:");
		if(haxe_NativeStackTrace.wrapCallSite != null && fileAddr > 0) {
			fileName = fileName.substring(fileAddr + 6);
		}
		stack.push(haxe_StackItem.FilePos(method,fileName,site.getLineNumber(),site.getColumnNumber()));
	}
	return stack;
};
haxe_NativeStackTrace.normalize = function(stack,skipItems) {
	if(skipItems == null) {
		skipItems = 0;
	}
	if(Array.isArray(stack) && skipItems > 0) {
		return stack.slice(skipItems);
	} else if(typeof(stack) == "string") {
		switch(stack.substring(0,6)) {
		case "Error\n":case "Error:":
			++skipItems;
			break;
		default:
		}
		return haxe_NativeStackTrace.skipLines(stack,skipItems);
	} else {
		return stack;
	}
};
haxe_NativeStackTrace.skipLines = function(stack,skip,pos) {
	if(pos == null) {
		pos = 0;
	}
	if(skip > 0) {
		pos = stack.indexOf("\n",pos);
		if(pos < 0) {
			return "";
		} else {
			return haxe_NativeStackTrace.skipLines(stack,--skip,pos + 1);
		}
	} else {
		return stack.substring(pos);
	}
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = "haxe.ValueException";
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	__class__: haxe_ValueException
});
var haxe_ds_Option = $hxEnums["haxe.ds.Option"] = { __ename__:true,__constructs__:null
	,Some: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.ds.Option",toString:$estr}; },$_._hx_name="Some",$_.__params__ = ["v"],$_)
	,None: {_hx_name:"None",_hx_index:1,__enum__:"haxe.ds.Option",toString:$estr}
};
haxe_ds_Option.__constructs__ = [haxe_ds_Option.Some,haxe_ds_Option.None];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = "haxe.iterators.ArrayIterator";
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var haxe_macro_StringLiteralKind = $hxEnums["haxe.macro.StringLiteralKind"] = { __ename__:true,__constructs__:null
	,DoubleQuotes: {_hx_name:"DoubleQuotes",_hx_index:0,__enum__:"haxe.macro.StringLiteralKind",toString:$estr}
	,SingleQuotes: {_hx_name:"SingleQuotes",_hx_index:1,__enum__:"haxe.macro.StringLiteralKind",toString:$estr}
};
haxe_macro_StringLiteralKind.__constructs__ = [haxe_macro_StringLiteralKind.DoubleQuotes,haxe_macro_StringLiteralKind.SingleQuotes];
var haxe_macro_Constant = $hxEnums["haxe.macro.Constant"] = { __ename__:true,__constructs__:null
	,CInt: ($_=function(v) { return {_hx_index:0,v:v,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CInt",$_.__params__ = ["v"],$_)
	,CFloat: ($_=function(f) { return {_hx_index:1,f:f,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CFloat",$_.__params__ = ["f"],$_)
	,CString: ($_=function(s,kind) { return {_hx_index:2,s:s,kind:kind,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CString",$_.__params__ = ["s","kind"],$_)
	,CIdent: ($_=function(s) { return {_hx_index:3,s:s,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CIdent",$_.__params__ = ["s"],$_)
	,CRegexp: ($_=function(r,opt) { return {_hx_index:4,r:r,opt:opt,__enum__:"haxe.macro.Constant",toString:$estr}; },$_._hx_name="CRegexp",$_.__params__ = ["r","opt"],$_)
};
haxe_macro_Constant.__constructs__ = [haxe_macro_Constant.CInt,haxe_macro_Constant.CFloat,haxe_macro_Constant.CString,haxe_macro_Constant.CIdent,haxe_macro_Constant.CRegexp];
var haxe_macro_Binop = $hxEnums["haxe.macro.Binop"] = { __ename__:true,__constructs__:null
	,OpAdd: {_hx_name:"OpAdd",_hx_index:0,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpMult: {_hx_name:"OpMult",_hx_index:1,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpDiv: {_hx_name:"OpDiv",_hx_index:2,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpSub: {_hx_name:"OpSub",_hx_index:3,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpAssign: {_hx_name:"OpAssign",_hx_index:4,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpEq: {_hx_name:"OpEq",_hx_index:5,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpNotEq: {_hx_name:"OpNotEq",_hx_index:6,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpGt: {_hx_name:"OpGt",_hx_index:7,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpGte: {_hx_name:"OpGte",_hx_index:8,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpLt: {_hx_name:"OpLt",_hx_index:9,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpLte: {_hx_name:"OpLte",_hx_index:10,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpAnd: {_hx_name:"OpAnd",_hx_index:11,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpOr: {_hx_name:"OpOr",_hx_index:12,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpXor: {_hx_name:"OpXor",_hx_index:13,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpBoolAnd: {_hx_name:"OpBoolAnd",_hx_index:14,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpBoolOr: {_hx_name:"OpBoolOr",_hx_index:15,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpShl: {_hx_name:"OpShl",_hx_index:16,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpShr: {_hx_name:"OpShr",_hx_index:17,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpUShr: {_hx_name:"OpUShr",_hx_index:18,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpMod: {_hx_name:"OpMod",_hx_index:19,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpAssignOp: ($_=function(op) { return {_hx_index:20,op:op,__enum__:"haxe.macro.Binop",toString:$estr}; },$_._hx_name="OpAssignOp",$_.__params__ = ["op"],$_)
	,OpInterval: {_hx_name:"OpInterval",_hx_index:21,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpArrow: {_hx_name:"OpArrow",_hx_index:22,__enum__:"haxe.macro.Binop",toString:$estr}
	,OpIn: {_hx_name:"OpIn",_hx_index:23,__enum__:"haxe.macro.Binop",toString:$estr}
};
haxe_macro_Binop.__constructs__ = [haxe_macro_Binop.OpAdd,haxe_macro_Binop.OpMult,haxe_macro_Binop.OpDiv,haxe_macro_Binop.OpSub,haxe_macro_Binop.OpAssign,haxe_macro_Binop.OpEq,haxe_macro_Binop.OpNotEq,haxe_macro_Binop.OpGt,haxe_macro_Binop.OpGte,haxe_macro_Binop.OpLt,haxe_macro_Binop.OpLte,haxe_macro_Binop.OpAnd,haxe_macro_Binop.OpOr,haxe_macro_Binop.OpXor,haxe_macro_Binop.OpBoolAnd,haxe_macro_Binop.OpBoolOr,haxe_macro_Binop.OpShl,haxe_macro_Binop.OpShr,haxe_macro_Binop.OpUShr,haxe_macro_Binop.OpMod,haxe_macro_Binop.OpAssignOp,haxe_macro_Binop.OpInterval,haxe_macro_Binop.OpArrow,haxe_macro_Binop.OpIn];
var haxe_macro_Unop = $hxEnums["haxe.macro.Unop"] = { __ename__:true,__constructs__:null
	,OpIncrement: {_hx_name:"OpIncrement",_hx_index:0,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpDecrement: {_hx_name:"OpDecrement",_hx_index:1,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpNot: {_hx_name:"OpNot",_hx_index:2,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpNeg: {_hx_name:"OpNeg",_hx_index:3,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpNegBits: {_hx_name:"OpNegBits",_hx_index:4,__enum__:"haxe.macro.Unop",toString:$estr}
	,OpSpread: {_hx_name:"OpSpread",_hx_index:5,__enum__:"haxe.macro.Unop",toString:$estr}
};
haxe_macro_Unop.__constructs__ = [haxe_macro_Unop.OpIncrement,haxe_macro_Unop.OpDecrement,haxe_macro_Unop.OpNot,haxe_macro_Unop.OpNeg,haxe_macro_Unop.OpNegBits,haxe_macro_Unop.OpSpread];
var haxe_macro_QuoteStatus = $hxEnums["haxe.macro.QuoteStatus"] = { __ename__:true,__constructs__:null
	,Unquoted: {_hx_name:"Unquoted",_hx_index:0,__enum__:"haxe.macro.QuoteStatus",toString:$estr}
	,Quoted: {_hx_name:"Quoted",_hx_index:1,__enum__:"haxe.macro.QuoteStatus",toString:$estr}
};
haxe_macro_QuoteStatus.__constructs__ = [haxe_macro_QuoteStatus.Unquoted,haxe_macro_QuoteStatus.Quoted];
var haxe_macro_FunctionKind = $hxEnums["haxe.macro.FunctionKind"] = { __ename__:true,__constructs__:null
	,FAnonymous: {_hx_name:"FAnonymous",_hx_index:0,__enum__:"haxe.macro.FunctionKind",toString:$estr}
	,FNamed: ($_=function(name,inlined) { return {_hx_index:1,name:name,inlined:inlined,__enum__:"haxe.macro.FunctionKind",toString:$estr}; },$_._hx_name="FNamed",$_.__params__ = ["name","inlined"],$_)
	,FArrow: {_hx_name:"FArrow",_hx_index:2,__enum__:"haxe.macro.FunctionKind",toString:$estr}
};
haxe_macro_FunctionKind.__constructs__ = [haxe_macro_FunctionKind.FAnonymous,haxe_macro_FunctionKind.FNamed,haxe_macro_FunctionKind.FArrow];
var haxe_macro_ExprDef = $hxEnums["haxe.macro.ExprDef"] = { __ename__:true,__constructs__:null
	,EConst: ($_=function(c) { return {_hx_index:0,c:c,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EConst",$_.__params__ = ["c"],$_)
	,EArray: ($_=function(e1,e2) { return {_hx_index:1,e1:e1,e2:e2,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EArray",$_.__params__ = ["e1","e2"],$_)
	,EBinop: ($_=function(op,e1,e2) { return {_hx_index:2,op:op,e1:e1,e2:e2,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EBinop",$_.__params__ = ["op","e1","e2"],$_)
	,EField: ($_=function(e,field) { return {_hx_index:3,e:e,field:field,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EField",$_.__params__ = ["e","field"],$_)
	,EParenthesis: ($_=function(e) { return {_hx_index:4,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EParenthesis",$_.__params__ = ["e"],$_)
	,EObjectDecl: ($_=function(fields) { return {_hx_index:5,fields:fields,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EObjectDecl",$_.__params__ = ["fields"],$_)
	,EArrayDecl: ($_=function(values) { return {_hx_index:6,values:values,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EArrayDecl",$_.__params__ = ["values"],$_)
	,ECall: ($_=function(e,params) { return {_hx_index:7,e:e,params:params,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ECall",$_.__params__ = ["e","params"],$_)
	,ENew: ($_=function(t,params) { return {_hx_index:8,t:t,params:params,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ENew",$_.__params__ = ["t","params"],$_)
	,EUnop: ($_=function(op,postFix,e) { return {_hx_index:9,op:op,postFix:postFix,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EUnop",$_.__params__ = ["op","postFix","e"],$_)
	,EVars: ($_=function(vars) { return {_hx_index:10,vars:vars,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EVars",$_.__params__ = ["vars"],$_)
	,EFunction: ($_=function(kind,f) { return {_hx_index:11,kind:kind,f:f,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EFunction",$_.__params__ = ["kind","f"],$_)
	,EBlock: ($_=function(exprs) { return {_hx_index:12,exprs:exprs,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EBlock",$_.__params__ = ["exprs"],$_)
	,EFor: ($_=function(it,expr) { return {_hx_index:13,it:it,expr:expr,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EFor",$_.__params__ = ["it","expr"],$_)
	,EIf: ($_=function(econd,eif,eelse) { return {_hx_index:14,econd:econd,eif:eif,eelse:eelse,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EIf",$_.__params__ = ["econd","eif","eelse"],$_)
	,EWhile: ($_=function(econd,e,normalWhile) { return {_hx_index:15,econd:econd,e:e,normalWhile:normalWhile,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EWhile",$_.__params__ = ["econd","e","normalWhile"],$_)
	,ESwitch: ($_=function(e,cases,edef) { return {_hx_index:16,e:e,cases:cases,edef:edef,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ESwitch",$_.__params__ = ["e","cases","edef"],$_)
	,ETry: ($_=function(e,catches) { return {_hx_index:17,e:e,catches:catches,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ETry",$_.__params__ = ["e","catches"],$_)
	,EReturn: ($_=function(e) { return {_hx_index:18,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EReturn",$_.__params__ = ["e"],$_)
	,EBreak: {_hx_name:"EBreak",_hx_index:19,__enum__:"haxe.macro.ExprDef",toString:$estr}
	,EContinue: {_hx_name:"EContinue",_hx_index:20,__enum__:"haxe.macro.ExprDef",toString:$estr}
	,EUntyped: ($_=function(e) { return {_hx_index:21,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EUntyped",$_.__params__ = ["e"],$_)
	,EThrow: ($_=function(e) { return {_hx_index:22,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EThrow",$_.__params__ = ["e"],$_)
	,ECast: ($_=function(e,t) { return {_hx_index:23,e:e,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ECast",$_.__params__ = ["e","t"],$_)
	,EDisplay: ($_=function(e,displayKind) { return {_hx_index:24,e:e,displayKind:displayKind,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EDisplay",$_.__params__ = ["e","displayKind"],$_)
	,EDisplayNew: ($_=function(t) { return {_hx_index:25,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EDisplayNew",$_.__params__ = ["t"],$_)
	,ETernary: ($_=function(econd,eif,eelse) { return {_hx_index:26,econd:econd,eif:eif,eelse:eelse,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ETernary",$_.__params__ = ["econd","eif","eelse"],$_)
	,ECheckType: ($_=function(e,t) { return {_hx_index:27,e:e,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="ECheckType",$_.__params__ = ["e","t"],$_)
	,EMeta: ($_=function(s,e) { return {_hx_index:28,s:s,e:e,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EMeta",$_.__params__ = ["s","e"],$_)
	,EIs: ($_=function(e,t) { return {_hx_index:29,e:e,t:t,__enum__:"haxe.macro.ExprDef",toString:$estr}; },$_._hx_name="EIs",$_.__params__ = ["e","t"],$_)
};
haxe_macro_ExprDef.__constructs__ = [haxe_macro_ExprDef.EConst,haxe_macro_ExprDef.EArray,haxe_macro_ExprDef.EBinop,haxe_macro_ExprDef.EField,haxe_macro_ExprDef.EParenthesis,haxe_macro_ExprDef.EObjectDecl,haxe_macro_ExprDef.EArrayDecl,haxe_macro_ExprDef.ECall,haxe_macro_ExprDef.ENew,haxe_macro_ExprDef.EUnop,haxe_macro_ExprDef.EVars,haxe_macro_ExprDef.EFunction,haxe_macro_ExprDef.EBlock,haxe_macro_ExprDef.EFor,haxe_macro_ExprDef.EIf,haxe_macro_ExprDef.EWhile,haxe_macro_ExprDef.ESwitch,haxe_macro_ExprDef.ETry,haxe_macro_ExprDef.EReturn,haxe_macro_ExprDef.EBreak,haxe_macro_ExprDef.EContinue,haxe_macro_ExprDef.EUntyped,haxe_macro_ExprDef.EThrow,haxe_macro_ExprDef.ECast,haxe_macro_ExprDef.EDisplay,haxe_macro_ExprDef.EDisplayNew,haxe_macro_ExprDef.ETernary,haxe_macro_ExprDef.ECheckType,haxe_macro_ExprDef.EMeta,haxe_macro_ExprDef.EIs];
var haxe_macro_DisplayKind = $hxEnums["haxe.macro.DisplayKind"] = { __ename__:true,__constructs__:null
	,DKCall: {_hx_name:"DKCall",_hx_index:0,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKDot: {_hx_name:"DKDot",_hx_index:1,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKStructure: {_hx_name:"DKStructure",_hx_index:2,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKMarked: {_hx_name:"DKMarked",_hx_index:3,__enum__:"haxe.macro.DisplayKind",toString:$estr}
	,DKPattern: ($_=function(outermost) { return {_hx_index:4,outermost:outermost,__enum__:"haxe.macro.DisplayKind",toString:$estr}; },$_._hx_name="DKPattern",$_.__params__ = ["outermost"],$_)
};
haxe_macro_DisplayKind.__constructs__ = [haxe_macro_DisplayKind.DKCall,haxe_macro_DisplayKind.DKDot,haxe_macro_DisplayKind.DKStructure,haxe_macro_DisplayKind.DKMarked,haxe_macro_DisplayKind.DKPattern];
var haxe_macro_ComplexType = $hxEnums["haxe.macro.ComplexType"] = { __ename__:true,__constructs__:null
	,TPath: ($_=function(p) { return {_hx_index:0,p:p,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TPath",$_.__params__ = ["p"],$_)
	,TFunction: ($_=function(args,ret) { return {_hx_index:1,args:args,ret:ret,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TFunction",$_.__params__ = ["args","ret"],$_)
	,TAnonymous: ($_=function(fields) { return {_hx_index:2,fields:fields,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TAnonymous",$_.__params__ = ["fields"],$_)
	,TParent: ($_=function(t) { return {_hx_index:3,t:t,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TParent",$_.__params__ = ["t"],$_)
	,TExtend: ($_=function(p,fields) { return {_hx_index:4,p:p,fields:fields,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TExtend",$_.__params__ = ["p","fields"],$_)
	,TOptional: ($_=function(t) { return {_hx_index:5,t:t,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TOptional",$_.__params__ = ["t"],$_)
	,TNamed: ($_=function(n,t) { return {_hx_index:6,n:n,t:t,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TNamed",$_.__params__ = ["n","t"],$_)
	,TIntersection: ($_=function(tl) { return {_hx_index:7,tl:tl,__enum__:"haxe.macro.ComplexType",toString:$estr}; },$_._hx_name="TIntersection",$_.__params__ = ["tl"],$_)
};
haxe_macro_ComplexType.__constructs__ = [haxe_macro_ComplexType.TPath,haxe_macro_ComplexType.TFunction,haxe_macro_ComplexType.TAnonymous,haxe_macro_ComplexType.TParent,haxe_macro_ComplexType.TExtend,haxe_macro_ComplexType.TOptional,haxe_macro_ComplexType.TNamed,haxe_macro_ComplexType.TIntersection];
var haxe_macro_TypeParam = $hxEnums["haxe.macro.TypeParam"] = { __ename__:true,__constructs__:null
	,TPType: ($_=function(t) { return {_hx_index:0,t:t,__enum__:"haxe.macro.TypeParam",toString:$estr}; },$_._hx_name="TPType",$_.__params__ = ["t"],$_)
	,TPExpr: ($_=function(e) { return {_hx_index:1,e:e,__enum__:"haxe.macro.TypeParam",toString:$estr}; },$_._hx_name="TPExpr",$_.__params__ = ["e"],$_)
};
haxe_macro_TypeParam.__constructs__ = [haxe_macro_TypeParam.TPType,haxe_macro_TypeParam.TPExpr];
var haxe_macro_Access = $hxEnums["haxe.macro.Access"] = { __ename__:true,__constructs__:null
	,APublic: {_hx_name:"APublic",_hx_index:0,__enum__:"haxe.macro.Access",toString:$estr}
	,APrivate: {_hx_name:"APrivate",_hx_index:1,__enum__:"haxe.macro.Access",toString:$estr}
	,AStatic: {_hx_name:"AStatic",_hx_index:2,__enum__:"haxe.macro.Access",toString:$estr}
	,AOverride: {_hx_name:"AOverride",_hx_index:3,__enum__:"haxe.macro.Access",toString:$estr}
	,ADynamic: {_hx_name:"ADynamic",_hx_index:4,__enum__:"haxe.macro.Access",toString:$estr}
	,AInline: {_hx_name:"AInline",_hx_index:5,__enum__:"haxe.macro.Access",toString:$estr}
	,AMacro: {_hx_name:"AMacro",_hx_index:6,__enum__:"haxe.macro.Access",toString:$estr}
	,AFinal: {_hx_name:"AFinal",_hx_index:7,__enum__:"haxe.macro.Access",toString:$estr}
	,AExtern: {_hx_name:"AExtern",_hx_index:8,__enum__:"haxe.macro.Access",toString:$estr}
	,AAbstract: {_hx_name:"AAbstract",_hx_index:9,__enum__:"haxe.macro.Access",toString:$estr}
	,AOverload: {_hx_name:"AOverload",_hx_index:10,__enum__:"haxe.macro.Access",toString:$estr}
};
haxe_macro_Access.__constructs__ = [haxe_macro_Access.APublic,haxe_macro_Access.APrivate,haxe_macro_Access.AStatic,haxe_macro_Access.AOverride,haxe_macro_Access.ADynamic,haxe_macro_Access.AInline,haxe_macro_Access.AMacro,haxe_macro_Access.AFinal,haxe_macro_Access.AExtern,haxe_macro_Access.AAbstract,haxe_macro_Access.AOverload];
var haxe_macro_FieldType = $hxEnums["haxe.macro.FieldType"] = { __ename__:true,__constructs__:null
	,FVar: ($_=function(t,e) { return {_hx_index:0,t:t,e:e,__enum__:"haxe.macro.FieldType",toString:$estr}; },$_._hx_name="FVar",$_.__params__ = ["t","e"],$_)
	,FFun: ($_=function(f) { return {_hx_index:1,f:f,__enum__:"haxe.macro.FieldType",toString:$estr}; },$_._hx_name="FFun",$_.__params__ = ["f"],$_)
	,FProp: ($_=function(get,set,t,e) { return {_hx_index:2,get:get,set:set,t:t,e:e,__enum__:"haxe.macro.FieldType",toString:$estr}; },$_._hx_name="FProp",$_.__params__ = ["get","set","t","e"],$_)
};
haxe_macro_FieldType.__constructs__ = [haxe_macro_FieldType.FVar,haxe_macro_FieldType.FFun,haxe_macro_FieldType.FProp];
var haxe_macro_ExprTools = function() { };
haxe_macro_ExprTools.__name__ = "haxe.macro.ExprTools";
haxe_macro_ExprTools.toString = function(e) {
	return new haxe_macro_Printer().printExpr(e);
};
haxe_macro_ExprTools.map = function(e,f) {
	var e1 = e.pos;
	var _g = e.expr;
	var tmp;
	switch(_g._hx_index) {
	case 0:
		var _g1 = _g.c;
		tmp = e.expr;
		break;
	case 1:
		var e11 = _g.e1;
		var e2 = _g.e2;
		tmp = haxe_macro_ExprDef.EArray(f(e11),f(e2));
		break;
	case 2:
		var op = _g.op;
		var e11 = _g.e1;
		var e2 = _g.e2;
		tmp = haxe_macro_ExprDef.EBinop(op,f(e11),f(e2));
		break;
	case 3:
		var e2 = _g.e;
		var field = _g.field;
		tmp = haxe_macro_ExprDef.EField(f(e2),field);
		break;
	case 4:
		var e2 = _g.e;
		tmp = haxe_macro_ExprDef.EParenthesis(f(e2));
		break;
	case 5:
		var fields = _g.fields;
		var ret = [];
		var _g1 = 0;
		while(_g1 < fields.length) {
			var field = fields[_g1];
			++_g1;
			ret.push({ field : field.field, expr : f(field.expr), quotes : field.quotes});
		}
		tmp = haxe_macro_ExprDef.EObjectDecl(ret);
		break;
	case 6:
		var el = _g.values;
		tmp = haxe_macro_ExprDef.EArrayDecl(haxe_macro_ExprArrayTools.map(el,f));
		break;
	case 7:
		var e2 = _g.e;
		var params = _g.params;
		tmp = haxe_macro_ExprDef.ECall(f(e2),haxe_macro_ExprArrayTools.map(params,f));
		break;
	case 8:
		var tp = _g.t;
		var params = _g.params;
		tmp = haxe_macro_ExprDef.ENew(tp,haxe_macro_ExprArrayTools.map(params,f));
		break;
	case 9:
		var op = _g.op;
		var postFix = _g.postFix;
		var e2 = _g.e;
		tmp = haxe_macro_ExprDef.EUnop(op,postFix,f(e2));
		break;
	case 10:
		var vars = _g.vars;
		var ret = [];
		var _g1 = 0;
		while(_g1 < vars.length) {
			var v = vars[_g1];
			++_g1;
			var e2 = v.expr;
			var v2 = { name : v.name, type : v.type, expr : e2 == null ? null : f(e2)};
			if(v.isFinal != null) {
				v2.isFinal = v.isFinal;
			}
			ret.push(v2);
		}
		tmp = haxe_macro_ExprDef.EVars(ret);
		break;
	case 11:
		var kind = _g.kind;
		var func = _g.f;
		var ret = [];
		var _g1 = 0;
		var _g2 = func.args;
		while(_g1 < _g2.length) {
			var arg = _g2[_g1];
			++_g1;
			var e2 = arg.value;
			ret.push({ name : arg.name, opt : arg.opt, type : arg.type, value : e2 == null ? null : f(e2)});
		}
		tmp = haxe_macro_ExprDef.EFunction(kind,{ args : ret, ret : func.ret, params : func.params, expr : f(func.expr)});
		break;
	case 12:
		var el = _g.exprs;
		tmp = haxe_macro_ExprDef.EBlock(haxe_macro_ExprArrayTools.map(el,f));
		break;
	case 13:
		var it = _g.it;
		var expr = _g.expr;
		tmp = haxe_macro_ExprDef.EFor(f(it),f(expr));
		break;
	case 14:
		var econd = _g.econd;
		var eif = _g.eif;
		var eelse = _g.eelse;
		tmp = haxe_macro_ExprDef.EIf(f(econd),f(eif),eelse == null ? null : f(eelse));
		break;
	case 15:
		var econd = _g.econd;
		var e2 = _g.e;
		var normalWhile = _g.normalWhile;
		tmp = haxe_macro_ExprDef.EWhile(f(econd),f(e2),normalWhile);
		break;
	case 16:
		var e2 = _g.e;
		var cases = _g.cases;
		var edef = _g.edef;
		var ret = [];
		var _g1 = 0;
		while(_g1 < cases.length) {
			var c = cases[_g1];
			++_g1;
			var e3 = c.expr;
			var tmp1 = e3 == null ? null : f(e3);
			var e4 = c.guard;
			ret.push({ expr : tmp1, guard : e4 == null ? null : f(e4), values : haxe_macro_ExprArrayTools.map(c.values,f)});
		}
		tmp = haxe_macro_ExprDef.ESwitch(f(e2),ret,edef == null || edef.expr == null ? edef : f(edef));
		break;
	case 17:
		var e2 = _g.e;
		var catches = _g.catches;
		var ret = [];
		var _g1 = 0;
		while(_g1 < catches.length) {
			var c = catches[_g1];
			++_g1;
			ret.push({ name : c.name, type : c.type, expr : f(c.expr)});
		}
		tmp = haxe_macro_ExprDef.ETry(f(e2),ret);
		break;
	case 18:
		var e2 = _g.e;
		tmp = haxe_macro_ExprDef.EReturn(e2 == null ? null : f(e2));
		break;
	case 19:case 20:
		tmp = e.expr;
		break;
	case 21:
		var e2 = _g.e;
		tmp = haxe_macro_ExprDef.EUntyped(f(e2));
		break;
	case 22:
		var e2 = _g.e;
		tmp = haxe_macro_ExprDef.EThrow(f(e2));
		break;
	case 23:
		var e2 = _g.e;
		var t = _g.t;
		tmp = haxe_macro_ExprDef.ECast(f(e2),t);
		break;
	case 24:
		var e2 = _g.e;
		var dk = _g.displayKind;
		tmp = haxe_macro_ExprDef.EDisplay(f(e2),dk);
		break;
	case 25:
		var _g1 = _g.t;
		tmp = e.expr;
		break;
	case 26:
		var econd = _g.econd;
		var eif = _g.eif;
		var eelse = _g.eelse;
		tmp = haxe_macro_ExprDef.ETernary(f(econd),f(eif),f(eelse));
		break;
	case 27:
		var e = _g.e;
		var t = _g.t;
		tmp = haxe_macro_ExprDef.ECheckType(f(e),t);
		break;
	case 28:
		var m = _g.s;
		var e = _g.e;
		tmp = haxe_macro_ExprDef.EMeta(m,f(e));
		break;
	case 29:
		var e = _g.e;
		var t = _g.t;
		tmp = haxe_macro_ExprDef.EIs(f(e),t);
		break;
	}
	return { pos : e1, expr : tmp};
};
var haxe_macro_ExprArrayTools = function() { };
haxe_macro_ExprArrayTools.__name__ = "haxe.macro.ExprArrayTools";
haxe_macro_ExprArrayTools.map = function(el,f) {
	var ret = [];
	var _g = 0;
	while(_g < el.length) {
		var e = el[_g];
		++_g;
		ret.push(f(e));
	}
	return ret;
};
var haxe_macro_Printer = function(tabString) {
	if(tabString == null) {
		tabString = "\t";
	}
	this.tabs = "";
	this.tabString = tabString;
};
haxe_macro_Printer.__name__ = "haxe.macro.Printer";
haxe_macro_Printer.prototype = {
	printUnop: function(op) {
		switch(op._hx_index) {
		case 0:
			return "++";
		case 1:
			return "--";
		case 2:
			return "!";
		case 3:
			return "-";
		case 4:
			return "~";
		case 5:
			return "...";
		}
	}
	,printBinop: function(op) {
		switch(op._hx_index) {
		case 0:
			return "+";
		case 1:
			return "*";
		case 2:
			return "/";
		case 3:
			return "-";
		case 4:
			return "=";
		case 5:
			return "==";
		case 6:
			return "!=";
		case 7:
			return ">";
		case 8:
			return ">=";
		case 9:
			return "<";
		case 10:
			return "<=";
		case 11:
			return "&";
		case 12:
			return "|";
		case 13:
			return "^";
		case 14:
			return "&&";
		case 15:
			return "||";
		case 16:
			return "<<";
		case 17:
			return ">>";
		case 18:
			return ">>>";
		case 19:
			return "%";
		case 20:
			var op1 = op.op;
			return this.printBinop(op1) + "=";
		case 21:
			return "...";
		case 22:
			return "=>";
		case 23:
			return "in";
		}
	}
	,escapeString: function(s,delim) {
		return delim + StringTools.replace(StringTools.replace(StringTools.replace(StringTools.replace(StringTools.replace(s,"\n","\\n"),"\t","\\t"),"\r","\\r"),"'","\\'"),"\"","\\\"") + delim;
	}
	,printFormatString: function(s) {
		return this.escapeString(s,"'");
	}
	,printString: function(s) {
		return this.escapeString(s,"\"");
	}
	,printConstant: function(c) {
		switch(c._hx_index) {
		case 0:
			var s = c.v;
			return s;
		case 1:
			var s = c.f;
			return s;
		case 2:
			var _g = c.s;
			var _g1 = c.kind;
			if(_g1 == null) {
				var s = _g;
				return this.printString(s);
			} else if(_g1._hx_index == 1) {
				var s = _g;
				return this.printFormatString(s);
			} else {
				var s = _g;
				return this.printString(s);
			}
			break;
		case 3:
			var s = c.s;
			return s;
		case 4:
			var s = c.r;
			var opt = c.opt;
			return "~/" + s + "/" + opt;
		}
	}
	,printTypeParam: function(param) {
		switch(param._hx_index) {
		case 0:
			var ct = param.t;
			return this.printComplexType(ct);
		case 1:
			var e = param.e;
			return this.printExpr(e);
		}
	}
	,printTypePath: function(tp) {
		var tmp = (tp.pack.length > 0 ? tp.pack.join(".") + "." : "") + tp.name + (tp.sub != null ? "." + tp.sub : "");
		var tmp1;
		if(tp.params == null) {
			tmp1 = "";
		} else if(tp.params.length > 0) {
			var _this = tp.params;
			var f = $bind(this,this.printTypeParam);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp1 = "<" + result.join(", ") + ">";
		} else {
			tmp1 = "";
		}
		return tmp + tmp1;
	}
	,printComplexType: function(ct) {
		switch(ct._hx_index) {
		case 0:
			var tp = ct.p;
			return this.printTypePath(tp);
		case 1:
			var args = ct.args;
			var ret = ct.ret;
			var wrapArgumentsInParentheses;
			if(args.length == 1) {
				var _g = args[0];
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.p;
					wrapArgumentsInParentheses = false;
					break;
				case 3:
					var t = _g.t;
					wrapArgumentsInParentheses = false;
					break;
				case 5:
					var _g1 = _g.t;
					if(_g1._hx_index == 0) {
						var _g = _g1.p;
						wrapArgumentsInParentheses = false;
					} else {
						wrapArgumentsInParentheses = true;
					}
					break;
				default:
					wrapArgumentsInParentheses = true;
				}
			} else {
				wrapArgumentsInParentheses = true;
			}
			var f = $bind(this,this.printComplexType);
			var result = new Array(args.length);
			var _g = 0;
			var _g1 = args.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(args[i]);
			}
			var argStr = result.join(", ");
			var tmp;
			if(ret._hx_index == 1) {
				var _g = ret.args;
				var _g = ret.ret;
				tmp = "(" + this.printComplexType(ret) + ")";
			} else {
				tmp = this.printComplexType(ret);
			}
			return (wrapArgumentsInParentheses ? "(" + argStr + ")" : argStr) + " -> " + tmp;
		case 2:
			var fields = ct.fields;
			var _g = [];
			var _g1 = 0;
			while(_g1 < fields.length) {
				var f = fields[_g1];
				++_g1;
				_g.push(this.printField(f) + "; ");
			}
			return "{ " + _g.join("") + "}";
		case 3:
			var ct1 = ct.t;
			return "(" + this.printComplexType(ct1) + ")";
		case 4:
			var tpl = ct.p;
			var fields = ct.fields;
			var _g = [];
			var _g1 = 0;
			while(_g1 < tpl.length) {
				var t = tpl[_g1];
				++_g1;
				_g.push("> " + this.printTypePath(t) + ", ");
			}
			var types = _g.join("");
			var _g = [];
			var _g1 = 0;
			while(_g1 < fields.length) {
				var f = fields[_g1];
				++_g1;
				_g.push(this.printField(f) + "; ");
			}
			var fields = _g.join("");
			return "{" + types + fields + "}";
		case 5:
			var ct1 = ct.t;
			return "?" + this.printComplexType(ct1);
		case 6:
			var n = ct.n;
			var ct1 = ct.t;
			return n + ":" + this.printComplexType(ct1);
		case 7:
			var tl = ct.tl;
			var f = $bind(this,this.printComplexType);
			var result = new Array(tl.length);
			var _g = 0;
			var _g1 = tl.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(tl[i]);
			}
			return result.join(" & ");
		}
	}
	,printMetadata: function(meta) {
		return "@" + meta.name + (meta.params != null && meta.params.length > 0 ? "(" + this.printExprs(meta.params,", ") + ")" : "");
	}
	,printAccess: function(access) {
		switch(access._hx_index) {
		case 0:
			return "public";
		case 1:
			return "private";
		case 2:
			return "static";
		case 3:
			return "override";
		case 4:
			return "dynamic";
		case 5:
			return "inline";
		case 6:
			return "macro";
		case 7:
			return "final";
		case 8:
			return "extern";
		case 9:
			return "abstract";
		case 10:
			return "overload";
		}
	}
	,printField: function(field) {
		var tmp = field.doc != null && field.doc != "" ? "/**\n" + this.tabs + this.tabString + StringTools.replace(field.doc,"\n","\n" + this.tabs + this.tabString) + "\n" + this.tabs + "**/\n" + this.tabs : "";
		var tmp1;
		if(field.meta != null && field.meta.length > 0) {
			var _this = field.meta;
			var f = $bind(this,this.printMetadata);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp1 = result.join("\n" + this.tabs) + ("\n" + this.tabs);
		} else {
			tmp1 = "";
		}
		var tmp2 = tmp + tmp1;
		var tmp;
		if(field.access != null && field.access.length > 0) {
			var access = field.access;
			var _this;
			if(Lambda.has(access,haxe_macro_Access.AFinal)) {
				var _g = [];
				var _g1 = 0;
				var _g2 = access;
				while(_g1 < _g2.length) {
					var v = _g2[_g1];
					++_g1;
					if(v._hx_index != 7) {
						_g.push(v);
					}
				}
				_this = _g.concat([haxe_macro_Access.AFinal]);
			} else {
				_this = access;
			}
			var f = $bind(this,this.printAccess);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = result.join(" ") + " ";
		} else {
			tmp = "";
		}
		var tmp1 = tmp2 + tmp;
		var _g = field.kind;
		var tmp;
		switch(_g._hx_index) {
		case 0:
			var t = _g.t;
			var eo = _g.e;
			tmp = (field.access != null && Lambda.has(field.access,haxe_macro_Access.AFinal) ? "" : "var ") + ("" + field.name) + this.opt(t,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ");
			break;
		case 1:
			var func = _g.f;
			tmp = "function " + field.name + this.printFunction(func);
			break;
		case 2:
			var get = _g.get;
			var set = _g.set;
			var t = _g.t;
			var eo = _g.e;
			tmp = "var " + field.name + "(" + get + ", " + set + ")" + this.opt(t,$bind(this,this.printComplexType)," : ") + this.opt(eo,$bind(this,this.printExpr)," = ");
			break;
		}
		return tmp1 + tmp;
	}
	,printTypeParamDecl: function(tpd) {
		var tmp;
		if(tpd.meta != null && tpd.meta.length > 0) {
			var _this = tpd.meta;
			var f = $bind(this,this.printMetadata);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = result.join(" ") + " ";
		} else {
			tmp = "";
		}
		var tmp1 = tmp + tpd.name;
		var tmp;
		if(tpd.params != null && tpd.params.length > 0) {
			var _this = tpd.params;
			var f = $bind(this,this.printTypeParamDecl);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = "<" + result.join(", ") + ">";
		} else {
			tmp = "";
		}
		var tmp2 = tmp1 + tmp;
		var tmp;
		if(tpd.constraints != null && tpd.constraints.length > 0) {
			var _this = tpd.constraints;
			var f = $bind(this,this.printComplexType);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = ":(" + result.join(", ") + ")";
		} else {
			tmp = "";
		}
		return tmp2 + tmp;
	}
	,printFunctionArg: function(arg) {
		return (arg.opt ? "?" : "") + arg.name + this.opt(arg.type,$bind(this,this.printComplexType),":") + this.opt(arg.value,$bind(this,this.printExpr)," = ");
	}
	,printFunction: function(func,kind) {
		var skipParentheses;
		var _g = func.args;
		if(_g.length == 1) {
			var _g1 = _g[0];
			var _g = _g1.meta;
			var _g = _g1.name;
			var _g = _g1.opt;
			var _g = _g1.value;
			skipParentheses = _g1.type == null && kind == haxe_macro_FunctionKind.FArrow;
		} else {
			skipParentheses = false;
		}
		var tmp;
		if(func.params == null) {
			tmp = "";
		} else if(func.params.length > 0) {
			var _this = func.params;
			var f = $bind(this,this.printTypeParamDecl);
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(_this[i]);
			}
			tmp = "<" + result.join(", ") + ">";
		} else {
			tmp = "";
		}
		var tmp1 = tmp + (skipParentheses ? "" : "(");
		var _this = func.args;
		var f = $bind(this,this.printFunctionArg);
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = f(_this[i]);
		}
		return tmp1 + result.join(", ") + (skipParentheses ? "" : ")") + (kind == haxe_macro_FunctionKind.FArrow ? " ->" : "") + this.opt(func.ret,$bind(this,this.printComplexType),":") + this.opt(func.expr,$bind(this,this.printExpr)," ");
	}
	,printVar: function(v) {
		var s = v.name + this.opt(v.type,$bind(this,this.printComplexType),":") + this.opt(v.expr,$bind(this,this.printExpr)," = ");
		var _g = v.meta;
		if(_g == null) {
			return s;
		} else if(_g.length == 0) {
			return s;
		} else {
			var meta = _g;
			var f = $bind(this,this.printMetadata);
			var result = new Array(meta.length);
			var _g = 0;
			var _g1 = meta.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = f(meta[i]);
			}
			return result.join(" ") + " " + s;
		}
	}
	,printObjectFieldKey: function(of) {
		var _g = of.quotes;
		if(_g == null) {
			return of.field;
		} else {
			switch(_g._hx_index) {
			case 0:
				return of.field;
			case 1:
				return "\"" + of.field + "\"";
			}
		}
	}
	,printObjectField: function(of) {
		return "" + this.printObjectFieldKey(of) + " : " + this.printExpr(of.expr);
	}
	,printExpr: function(e) {
		var _gthis = this;
		if(e == null) {
			return "#NULL";
		} else {
			var _g = e.expr;
			switch(_g._hx_index) {
			case 0:
				var c = _g.c;
				return this.printConstant(c);
			case 1:
				var e1 = _g.e1;
				var e2 = _g.e2;
				return "" + this.printExpr(e1) + "[" + this.printExpr(e2) + "]";
			case 2:
				var op = _g.op;
				var e1 = _g.e1;
				var e2 = _g.e2;
				return "" + this.printExpr(e1) + " " + this.printBinop(op) + " " + this.printExpr(e2);
			case 3:
				var e1 = _g.e;
				var n = _g.field;
				return "" + this.printExpr(e1) + "." + n;
			case 4:
				var e1 = _g.e;
				return "(" + this.printExpr(e1) + ")";
			case 5:
				var fl = _g.fields;
				var result = new Array(fl.length);
				var _g1 = 0;
				var _g2 = fl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					result[i] = _gthis.printObjectField(fl[i]);
				}
				return "{ " + result.join(", ") + " }";
			case 6:
				var el = _g.values;
				return "[" + this.printExprs(el,", ") + "]";
			case 7:
				var e1 = _g.e;
				var el = _g.params;
				return "" + this.printExpr(e1) + "(" + this.printExprs(el,", ") + ")";
			case 8:
				var tp = _g.t;
				var el = _g.params;
				return "new " + this.printTypePath(tp) + "(" + this.printExprs(el,", ") + ")";
			case 9:
				var _g1 = _g.op;
				var _g2 = _g.e;
				if(_g.postFix) {
					var op = _g1;
					var e1 = _g2;
					return this.printExpr(e1) + this.printUnop(op);
				} else {
					var op = _g1;
					var e1 = _g2;
					return this.printUnop(op) + this.printExpr(e1);
				}
				break;
			case 10:
				var vl = _g.vars;
				var f = $bind(this,this.printVar);
				var result = new Array(vl.length);
				var _g1 = 0;
				var _g2 = vl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					result[i] = f(vl[i]);
				}
				return "var " + result.join(", ");
			case 11:
				var _g1 = _g.kind;
				var _g2 = _g.f;
				if(_g1 == null) {
					var kind = _g1;
					var func = _g2;
					return (kind != haxe_macro_FunctionKind.FArrow ? "function" : "") + this.printFunction(func,kind);
				} else if(_g1._hx_index == 1) {
					var no = _g1.name;
					var inlined = _g1.inlined;
					var func = _g2;
					return (inlined ? "inline " : "") + ("function " + no) + this.printFunction(func);
				} else {
					var kind = _g1;
					var func = _g2;
					return (kind != haxe_macro_FunctionKind.FArrow ? "function" : "") + this.printFunction(func,kind);
				}
				break;
			case 12:
				var _g1 = _g.exprs;
				if(_g1.length == 0) {
					return "{ }";
				} else {
					var el = _g1;
					var old = this.tabs;
					this.tabs += this.tabString;
					var s = "{\n" + this.tabs + this.printExprs(el,";\n" + this.tabs);
					this.tabs = old;
					return s + (";\n" + this.tabs + "}");
				}
				break;
			case 13:
				var e1 = _g.it;
				var e2 = _g.expr;
				return "for (" + this.printExpr(e1) + ") " + this.printExpr(e2);
			case 14:
				var _g1 = _g.econd;
				var _g2 = _g.eif;
				var _g3 = _g.eelse;
				if(_g3 == null) {
					var eif = _g2;
					var econd = _g1;
					return "if (" + this.printExpr(econd) + ") " + this.printExpr(eif);
				} else {
					var eelse = _g3;
					var eif = _g2;
					var econd = _g1;
					return "if (" + this.printExpr(econd) + ") " + this.printExpr(eif) + " else " + this.printExpr(eelse);
				}
				break;
			case 15:
				var _g1 = _g.econd;
				var _g2 = _g.e;
				if(_g.normalWhile) {
					var e1 = _g2;
					var econd = _g1;
					return "while (" + this.printExpr(econd) + ") " + this.printExpr(e1);
				} else {
					var e1 = _g2;
					var econd = _g1;
					return "do " + this.printExpr(e1) + " while (" + this.printExpr(econd) + ")";
				}
				break;
			case 16:
				var e1 = _g.e;
				var cl = _g.cases;
				var edef = _g.edef;
				var old = this.tabs;
				this.tabs += this.tabString;
				var s = "switch " + this.printExpr(e1) + " {\n" + this.tabs;
				var result = new Array(cl.length);
				var _g1 = 0;
				var _g2 = cl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var c = cl[i];
					result[i] = "case " + _gthis.printExprs(c.values,", ") + (c.guard != null ? " if (" + _gthis.printExpr(c.guard) + "):" : ":") + (c.expr != null ? _gthis.opt(c.expr,$bind(_gthis,_gthis.printExpr)) + ";" : "");
				}
				var s1 = s + result.join("\n" + this.tabs);
				if(edef != null) {
					s1 += "\n" + this.tabs + "default:" + (edef.expr == null ? "" : this.printExpr(edef) + ";");
				}
				this.tabs = old;
				return s1 + ("\n" + this.tabs + "}");
			case 17:
				var e1 = _g.e;
				var cl = _g.catches;
				var tmp = "try " + this.printExpr(e1);
				var result = new Array(cl.length);
				var _g1 = 0;
				var _g2 = cl.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var c = cl[i];
					result[i] = " catch(" + c.name + (c.type == null ? "" : ":" + _gthis.printComplexType(c.type)) + ") " + _gthis.printExpr(c.expr);
				}
				return tmp + result.join("");
			case 18:
				var eo = _g.e;
				return "return" + this.opt(eo,$bind(this,this.printExpr)," ");
			case 19:
				return "break";
			case 20:
				return "continue";
			case 21:
				var e1 = _g.e;
				return "untyped " + this.printExpr(e1);
			case 22:
				var e1 = _g.e;
				return "throw " + this.printExpr(e1);
			case 23:
				var _g1 = _g.e;
				var e1 = _g1;
				var cto = _g.t;
				if(cto != null) {
					return "cast(" + this.printExpr(e1) + ", " + this.printComplexType(cto) + ")";
				} else {
					var e1 = _g1;
					return "cast " + this.printExpr(e1);
				}
				break;
			case 24:
				var _g1 = _g.displayKind;
				var e1 = _g.e;
				return "#DISPLAY(" + this.printExpr(e1) + ")";
			case 25:
				var tp = _g.t;
				return "#DISPLAY(" + this.printTypePath(tp) + ")";
			case 26:
				var econd = _g.econd;
				var eif = _g.eif;
				var eelse = _g.eelse;
				return "" + this.printExpr(econd) + " ? " + this.printExpr(eif) + " : " + this.printExpr(eelse);
			case 27:
				var e1 = _g.e;
				var ct = _g.t;
				return "(" + this.printExpr(e1) + " : " + this.printComplexType(ct) + ")";
			case 28:
				var _g1 = _g.s;
				var _g2 = _g.e;
				var _g3 = _g1.params;
				var _g3 = _g1.pos;
				if(_g1.name == ":implicitReturn") {
					var _g3 = _g2.expr;
					var _g4 = _g2.pos;
					if(_g3._hx_index == 18) {
						var e1 = _g3.e;
						return this.printExpr(e1);
					} else {
						var meta = _g1;
						var e1 = _g2;
						return this.printMetadata(meta) + " " + this.printExpr(e1);
					}
				} else {
					var meta = _g1;
					var e1 = _g2;
					return this.printMetadata(meta) + " " + this.printExpr(e1);
				}
				break;
			case 29:
				var e1 = _g.e;
				var ct = _g.t;
				return "" + this.printExpr(e1) + " is " + this.printComplexType(ct);
			}
		}
	}
	,printExprs: function(el,sep) {
		var f = $bind(this,this.printExpr);
		var result = new Array(el.length);
		var _g = 0;
		var _g1 = el.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = f(el[i]);
		}
		return result.join(sep);
	}
	,opt: function(v,f,prefix) {
		if(prefix == null) {
			prefix = "";
		}
		if(v == null) {
			return "";
		} else {
			return prefix + f(v);
		}
	}
	,__class__: haxe_macro_Printer
};
var js_Boot = function() { };
js_Boot.__name__ = "js.Boot";
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var prayer_CompilerFlagType = $hxEnums["prayer.CompilerFlagType"] = { __ename__:true,__constructs__:null
	,Mandatory: ($_=function(defaultValue) { return {_hx_index:0,defaultValue:defaultValue,__enum__:"prayer.CompilerFlagType",toString:$estr}; },$_._hx_name="Mandatory",$_.__params__ = ["defaultValue"],$_)
	,Optional: ($_=function(nullValue) { return {_hx_index:1,nullValue:nullValue,__enum__:"prayer.CompilerFlagType",toString:$estr}; },$_._hx_name="Optional",$_.__params__ = ["nullValue"],$_)
};
prayer_CompilerFlagType.__constructs__ = [prayer_CompilerFlagType.Mandatory,prayer_CompilerFlagType.Optional];
var prayer_CompilerFlag = function(name,getDefine,validate,type) {
	this.value = haxe_ds_Option.None;
	this.name = name;
	this.getDefine = getDefine;
	this.validate = validate;
	this.type = type;
};
prayer_CompilerFlag.__name__ = "prayer.CompilerFlag";
prayer_CompilerFlag.prototype = {
	get: function() {
		var _g = this.value;
		switch(_g._hx_index) {
		case 0:
			var validValue = _g.v;
			return validValue;
		case 1:
			return this.set();
		}
	}
	,set: function() {
		var define = this.getDefine();
		var validated = this.validate(define);
		var _g = this.validate(define);
		switch(_g._hx_index) {
		case 0:
			var validValue = _g.v;
			this.value = validated;
			return validValue;
		case 1:
			var _g = this.type;
			switch(_g._hx_index) {
			case 0:
				var defaultValue = _g.defaultValue;
				this.value = haxe_ds_Option.Some(defaultValue);
				return defaultValue;
			case 1:
				var nullValue = _g.nullValue;
				this.value = haxe_ds_Option.Some(nullValue);
				return nullValue;
			}
			break;
		}
	}
	,__class__: prayer_CompilerFlag
};
var sinker_Array = {};
var sinker_Arrays = function() { };
sinker_Arrays.__name__ = "sinker.Arrays";
sinker_Arrays.blit = function(source,sourcePosition,destination,destinationPosition,rangeLength) {
	var _g = 0;
	var _g1 = rangeLength;
	while(_g < _g1) {
		var i = _g++;
		var this1 = destinationPosition + i;
		var this2 = sourcePosition + i;
		destination[this1] = source[this2];
	}
};
sinker_Arrays.blitZero = function(source,destination,rangeLength) {
	var i = 0;
	while(i < rangeLength) {
		destination[i] = source[i];
		++i;
	}
};
var sinker_Error = function(message,previous,native) {
	haxe_Exception.call(this,message,previous,native);
};
sinker_Error.__name__ = "sinker.Error";
sinker_Error.__super__ = haxe_Exception;
sinker_Error.prototype = $extend(haxe_Exception.prototype,{
	__class__: sinker_Error
});
var sinker_Nulls = function() { };
sinker_Nulls.__name__ = "sinker.Nulls";
sinker_Nulls.toMaybeString = function(value) {
	var this1 = value != null ? Std.string(value) : null;
	return this1;
};
sinker_Nulls.toOptionalString = function(value) {
	var this1 = value != null ? Std.string(value) : null;
	var this2 = this1;
	if(this2 != null) {
		return haxe_ds_Option.Some(this2);
	} else {
		return haxe_ds_Option.None;
	}
};
sinker_Nulls.parseInt = function(value) {
	var this1 = Std.parseInt(Std.string(value));
	return this1;
};
sinker_Nulls.parseIntOptional = function(value) {
	var this1 = Std.parseInt(Std.string(value));
	var this2 = this1;
	if(this2 != null) {
		return haxe_ds_Option.Some(this2);
	} else {
		return haxe_ds_Option.None;
	}
};
sinker_Nulls.toFloat = function(value) {
	return parseFloat(Std.string(value));
};
var sinker_Options = function() { };
sinker_Options.__name__ = "sinker.Options";
var sinker_errors_UnwrapError = function(message,previous,native) {
	sinker_Error.call(this,message,previous,native);
};
sinker_errors_UnwrapError.__name__ = "sinker.errors.UnwrapError";
sinker_errors_UnwrapError.__super__ = sinker_Error;
sinker_errors_UnwrapError.prototype = $extend(sinker_Error.prototype,{
	__class__: sinker_errors_UnwrapError
});
var sinker_extensions_ArrayExtension = function() { };
sinker_extensions_ArrayExtension.__name__ = "sinker.extensions.ArrayExtension";
sinker_extensions_ArrayExtension.tryGet = function(_this,index) {
	var this1 = _this.length;
	var this2 = index < this1 ? _this[index] : null;
	return this2;
};
sinker_extensions_ArrayExtension.fillIn = function(_this,value,startIndex,endIndex) {
	var i = startIndex;
	while(i < endIndex) {
		_this[i] = value;
		++i;
	}
	return _this;
};
sinker_extensions_ArrayExtension.blitInternal = function(_this,sourceIndex,destinationIndex,rangeLength) {
	if(sourceIndex < destinationIndex) {
		var this1 = sourceIndex + rangeLength;
		var i = this1;
		var this1 = destinationIndex + rangeLength;
		var k = this1;
		while(i > sourceIndex) {
			var this1 = --i;
			var this2 = --k;
			_this[k] = _this[i];
		}
	} else if(sourceIndex > destinationIndex) {
		var i = sourceIndex;
		var k = destinationIndex;
		var this1 = sourceIndex + rangeLength;
		var endI = this1;
		while(i < endI) {
			_this[k] = _this[i];
			++i;
			++k;
		}
	}
};
sinker_extensions_ArrayExtension.has = function(_this,value) {
	return _this.indexOf(value,0) != -1;
};
sinker_extensions_ArrayExtension.hasIn = function(_this,value,start,end) {
	var found = false;
	var _g = start;
	var _g1 = end;
	while(_g < _g1) {
		var i = _g++;
		var this1 = i;
		if(_this[this1] == value) {
			found = true;
			break;
		}
	}
	return found;
};
sinker_extensions_ArrayExtension.existsAndHas = function(_this,value) {
	if(_this != null) {
		return _this.indexOf(value,0) != -1;
	} else {
		return false;
	}
};
sinker_extensions_ArrayExtension.find = function(_this,value,defaultValue) {
	var index = _this.indexOf(value,0);
	if(index != -1) {
		return _this[index];
	} else {
		return defaultValue;
	}
};
sinker_extensions_ArrayExtension.swap = function(_this,indexA,indexB) {
	var tmp = _this[indexA];
	_this[indexA] = _this[indexB];
	_this[indexB] = tmp;
};
sinker_extensions_ArrayExtension.equals = function(_this,other) {
	var this1 = _this.length;
	var len = this1;
	var this1 = other.length;
	if(this1 != len) {
		return false;
	} else {
		var equal = true;
		var i = 0;
		while(i < len) {
			var this1 = i;
			var this2 = i;
			if(_this[this1] == other[this2]) {
				++i;
				continue;
			}
			equal = false;
			break;
		}
		return equal;
	}
};
sinker_extensions_ArrayExtension.compare = function(_this,other,comparator) {
	var this1 = _this.length;
	var len = this1;
	var this1 = other.length;
	if(this1 != len) {
		return false;
	} else {
		var foundDifference = false;
		var i = 0;
		while(i < len) {
			var this1 = i;
			var this2 = i;
			if(comparator(_this[this1],other[this2])) {
				++i;
				continue;
			}
			foundDifference = true;
			break;
		}
		return !foundDifference;
	}
};
sinker_extensions_ArrayExtension.pushFromArray = function(_this,other) {
	var this1 = _this.length;
	var writeIndex = this1;
	var readIndex = 0;
	var this1 = other.length;
	var otherLength = this1;
	var this1 = writeIndex + otherLength;
	_this.length = this1;
	while(readIndex < otherLength) {
		var this1 = readIndex;
		_this[writeIndex] = other[this1];
		++writeIndex;
		++readIndex;
	}
};
sinker_extensions_ArrayExtension.removeAt = function(_this,index) {
	var this1 = _this.length;
	var arrayLength = this1;
	var this1 = arrayLength - index;
	var this2 = this1 - 1;
	var rangeLength = this2;
	var removed = _this[index];
	var this1 = index + 1;
	var sourceIndex = this1;
	if(sourceIndex < index) {
		var this1 = sourceIndex + rangeLength;
		var i = this1;
		var this1 = index + rangeLength;
		var k = this1;
		while(i > sourceIndex) {
			var this1 = --i;
			var this2 = --k;
			_this[k] = _this[i];
		}
	} else if(sourceIndex > index) {
		var i = sourceIndex;
		var k = index;
		var this1 = sourceIndex + rangeLength;
		var endI = this1;
		while(i < endI) {
			_this[k] = _this[i];
			++i;
			++k;
		}
	}
	var this1 = arrayLength - 1;
	_this.length = this1;
	return removed;
};
sinker_extensions_ArrayExtension.flatten = function(arrays) {
	var this1 = arrays.length;
	var arrayCount = this1;
	var elementCount = 0;
	var _g = 0;
	var _g1 = arrayCount;
	while(_g < _g1) {
		var i = _g++;
		var this1 = i;
		var this2 = arrays[this1].length;
		elementCount += this2;
	}
	var this1 = elementCount;
	var newArray = [];
	newArray.length = this1;
	var newArray1 = newArray;
	var i = 0;
	var _g = 0;
	var _g1 = arrayCount;
	while(_g < _g1) {
		var k = _g++;
		var this1 = k;
		var array = arrays[this1];
		var _g2 = 0;
		var this2 = array.length;
		var _g3 = this2;
		while(_g2 < _g3) {
			var m = _g2++;
			var this3 = i;
			var this4 = m;
			newArray1[this3] = array[this4];
			++i;
		}
	}
	return newArray1;
};
sinker_extensions_ArrayExtension.pushIfAbsent = function(_this,value) {
	if(_this.indexOf(value,0) != -1) {
		return false;
	}
	var this1 = _this.push(value);
	return true;
};
sinker_extensions_ArrayExtension.pushIfNotFound = function(_this,value,equalityPredicate) {
	var this1 = _this.length;
	var end = this1;
	var found = false;
	var i = 0;
	while(i < end) {
		if(equalityPredicate(_this[i],value)) {
			found = true;
			break;
		}
		++i;
	}
	if(found) {
		return false;
	}
	var this1 = _this.push(value);
	return true;
};
sinker_extensions_ArrayExtension.deduplicate = function(_this) {
	var this1 = _this.length;
	var length = this1;
	if(length > 0) {
		var writeIndex = 1;
		var _g = 1;
		var _g1 = length;
		while(_g < _g1) {
			var readIndex = _g++;
			var this1 = readIndex;
			var value = _this[this1];
			var found = false;
			var _g2 = 0;
			var _g3 = writeIndex;
			while(_g2 < _g3) {
				var k = _g2++;
				var this2 = k;
				if(_this[this2] != value) {
					continue;
				}
				found = true;
				break;
			}
			if(found) {
				continue;
			}
			var this3 = writeIndex;
			_this[this3] = value;
			++writeIndex;
		}
		var this1 = writeIndex;
		_this.length = this1;
	}
};
sinker_extensions_ArrayExtension.copyDeduplicated = function(_this) {
	var this1 = _this.length;
	var length = this1;
	if(length == 0) {
		return _this.slice();
	} else {
		var newArray = [];
		newArray.length = length;
		var newArray1 = newArray;
		var this1 = 0;
		var this2 = 0;
		newArray1[this1] = _this[this2];
		var writeIndex = 1;
		var _g = 1;
		var _g1 = length;
		while(_g < _g1) {
			var readIndex = _g++;
			var this1 = readIndex;
			var value = _this[this1];
			var this2 = 0;
			var this3 = writeIndex;
			var found = false;
			var _g2 = this2;
			var _g3 = this3;
			while(_g2 < _g3) {
				var i = _g2++;
				var this4 = i;
				if(newArray1[this4] == value) {
					found = true;
					break;
				}
			}
			if(found) {
				continue;
			}
			var this5 = writeIndex;
			newArray1[this5] = value;
			++writeIndex;
		}
		var this1 = writeIndex;
		newArray1.length = this1;
		return newArray1;
	}
};
sinker_extensions_ArrayExtension.cardinality = function(_this) {
	var this1 = _this.length;
	switch(this1) {
	case 0:
		return sinker_extensions_Cardinality.Zero;
	case 1:
		return sinker_extensions_Cardinality.One(_this[0]);
	default:
		return sinker_extensions_Cardinality.More(_this);
	}
};
var sinker_extensions_Cardinality = $hxEnums["sinker.extensions.Cardinality"] = { __ename__:true,__constructs__:null
	,Zero: {_hx_name:"Zero",_hx_index:0,__enum__:"sinker.extensions.Cardinality",toString:$estr}
	,One: ($_=function(value) { return {_hx_index:1,value:value,__enum__:"sinker.extensions.Cardinality",toString:$estr}; },$_._hx_name="One",$_.__params__ = ["value"],$_)
	,More: ($_=function(values) { return {_hx_index:2,values:values,__enum__:"sinker.extensions.Cardinality",toString:$estr}; },$_._hx_name="More",$_.__params__ = ["values"],$_)
};
sinker_extensions_Cardinality.__constructs__ = [sinker_extensions_Cardinality.Zero,sinker_extensions_Cardinality.One,sinker_extensions_Cardinality.More];
var sinker_extensions_ArrayFunctionalExtension = function() { };
sinker_extensions_ArrayFunctionalExtension.__name__ = "sinker.extensions.ArrayFunctionalExtension";
sinker_extensions_ArrayFunctionalExtension.forEach = function(_this,callback) {
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	while(i < len) {
		callback(_this[i]);
		++i;
	}
};
sinker_extensions_ArrayFunctionalExtension.populate = function(_this,factory) {
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	while(i < len) {
		_this[i] = factory();
		++i;
	}
	return _this;
};
sinker_extensions_ArrayFunctionalExtension.indexOfFirstIn = function(_this,predicate,start,end) {
	var index = -1;
	var i = start;
	while(i < end) {
		if(predicate(_this[i])) {
			index = i;
			break;
		}
		++i;
	}
	return index;
};
sinker_extensions_ArrayFunctionalExtension.indexOfFirst = function(_this,predicate) {
	var this1 = _this.length;
	var end = this1;
	var index = -1;
	var i = 0;
	while(i < end) {
		if(predicate(_this[i])) {
			index = i;
			break;
		}
		++i;
	}
	return index;
};
sinker_extensions_ArrayFunctionalExtension.hasAny = function(_this,predicate) {
	var this1 = _this.length;
	var len = this1;
	var found = false;
	var i = 0;
	while(i < len) {
		if(predicate(_this[i])) {
			found = true;
			break;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.hasEqualIn = function(_this,value,equalityPredicate,start,end) {
	var found = false;
	var i = start;
	while(i < end) {
		if(equalityPredicate(_this[i],value)) {
			found = true;
			break;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.hasEqual = function(_this,value,equalityPredicate) {
	var this1 = _this.length;
	var end = this1;
	var found = false;
	var i = 0;
	while(i < end) {
		if(equalityPredicate(_this[i],value)) {
			found = true;
			break;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.findFirst = function(_this,predicate,defaultValue) {
	var found = defaultValue;
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	var element;
	while(i < len) {
		element = _this[i];
		if(predicate(element)) {
			found = element;
			break;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.forFirst = function(_this,predicate,processCallback) {
	var element;
	var found = false;
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	while(i < len) {
		element = _this[i];
		if(predicate(element)) {
			processCallback(element);
			found = true;
			break;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.mapFirst = function(_this,tryMapCallback) {
	var this1 = null;
	var found = this1;
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	while(i < len) {
		var mapped = tryMapCallback(_this[i]);
		if(mapped != null) {
			found = mapped;
			break;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.removeAll = function(_this,predicate) {
	var this1 = _this.length;
	var len = this1;
	var readIndex = 0;
	var writeIndex = 0;
	var found = false;
	while(readIndex < len) {
		var element = _this[readIndex];
		++readIndex;
		if(predicate(element)) {
			found = true;
			continue;
		}
		_this[writeIndex] = element;
		++writeIndex;
	}
	_this.length = writeIndex;
	return found;
};
sinker_extensions_ArrayFunctionalExtension.removeFirst = function(_this,predicate,defaultValue) {
	var foundIndex = -1;
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	var element;
	while(i < len) {
		element = _this[i];
		if(predicate(element)) {
			foundIndex = i;
			break;
		}
		++i;
	}
	if(foundIndex != -1) {
		var index = foundIndex;
		var this1 = _this.length;
		var arrayLength = this1;
		var this1 = arrayLength - index;
		var this2 = this1 - 1;
		var rangeLength = this2;
		var removed = _this[index];
		var this1 = index + 1;
		var sourceIndex = this1;
		if(sourceIndex < index) {
			var this1 = sourceIndex + rangeLength;
			var i = this1;
			var this1 = index + rangeLength;
			var k = this1;
			while(i > sourceIndex) {
				var this1 = --i;
				var this2 = --k;
				_this[k] = _this[i];
			}
		} else if(sourceIndex > index) {
			var i = sourceIndex;
			var k = index;
			var this1 = sourceIndex + rangeLength;
			var endI = this1;
			while(i < endI) {
				_this[k] = _this[i];
				++i;
				++k;
			}
		}
		var this1 = arrayLength - 1;
		_this.length = this1;
		return removed;
	} else {
		return defaultValue;
	}
};
sinker_extensions_ArrayFunctionalExtension.filterForEach = function(_this,predicate,processCallback) {
	var element;
	var found = false;
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	while(i < len) {
		element = _this[i];
		if(predicate(element)) {
			processCallback(element);
			found = true;
		}
		++i;
	}
	return found;
};
sinker_extensions_ArrayFunctionalExtension.filterMap = function(_this,tryMapCallback) {
	var newArray = [];
	var this1 = _this.length;
	var len = this1;
	var i = 0;
	while(i < len) {
		var mapped = tryMapCallback(_this[i]);
		if(mapped != null) {
			var this1 = newArray.push(mapped);
		}
		++i;
	}
	return newArray;
};
sinker_extensions_ArrayFunctionalExtension.deduplicateWith = function(_this,equalityPredicate) {
	var this1 = _this.length;
	var length = this1;
	if(length > 0) {
		var writeIndex = 1;
		var _g = 1;
		var _g1 = length;
		while(_g < _g1) {
			var readIndex = _g++;
			var this1 = readIndex;
			var value = _this[this1];
			var found = false;
			var _g2 = 0;
			var _g3 = writeIndex;
			while(_g2 < _g3) {
				var k = _g2++;
				var this2 = k;
				if(!equalityPredicate(_this[this2],value)) {
					continue;
				}
				found = true;
				break;
			}
			if(found) {
				continue;
			}
			var this3 = writeIndex;
			_this[this3] = value;
			++writeIndex;
		}
		var this1 = writeIndex;
		_this.length = this1;
	}
};
sinker_extensions_ArrayFunctionalExtension.copyDeduplicatedWith = function(_this,equalityPredicate) {
	var this1 = _this.length;
	var length = this1;
	if(length == 0) {
		return _this.slice();
	} else {
		var newArray = [];
		newArray.length = length;
		var newArray1 = newArray;
		var this1 = 0;
		var this2 = 0;
		newArray1[this1] = _this[this2];
		var writeIndex = 1;
		var _g = 1;
		var _g1 = length;
		while(_g < _g1) {
			var readIndex = _g++;
			var this1 = readIndex;
			var value = _this[this1];
			var this2 = 0;
			var this3 = writeIndex;
			var end = this3;
			var found = false;
			var i = this2;
			while(i < end) {
				if(equalityPredicate(newArray1[i],value)) {
					found = true;
					break;
				}
				++i;
			}
			if(found) {
				continue;
			}
			var this4 = writeIndex;
			newArray1[this4] = value;
			++writeIndex;
		}
		var this1 = writeIndex;
		newArray1.length = this1;
		return newArray1;
	}
};
var sinker_extensions_ArrayNullableExtension = function() { };
sinker_extensions_ArrayNullableExtension.__name__ = "sinker.extensions.ArrayNullableExtension";
sinker_extensions_ArrayNullableExtension.copyNullable = function(_this) {
	if(_this != null) {
		return _this.slice();
	} else {
		return null;
	}
};
sinker_extensions_ArrayNullableExtension.findIfNotNull = function(_this,value,defaultValue) {
	if(_this != null) {
		var index = _this.indexOf(value,0);
		if(index != -1) {
			return _this[index];
		} else {
			return defaultValue;
		}
	} else {
		return defaultValue;
	}
};
var sinker_extensions_FunctionArrayExtension = function() { };
sinker_extensions_FunctionArrayExtension.__name__ = "sinker.extensions.FunctionArrayExtension";
var sinker_extensions_MaybeArrayExtension = function() { };
sinker_extensions_MaybeArrayExtension.__name__ = "sinker.extensions.MaybeArrayExtension";
var sinker_extensions_StringExtension = function() { };
sinker_extensions_StringExtension.__name__ = "sinker.extensions.StringExtension";
sinker_extensions_StringExtension.sliceAfterLastDot = function(s) {
	var startIndex = null;
	var searchString = sinker_extensions_StringExtension.dot;
	return HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null);
};
sinker_extensions_StringExtension.sliceAfterLastSlash = function(s) {
	var startIndex = null;
	var searchString = sinker_extensions_StringExtension.slash;
	return HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null);
};
sinker_extensions_StringExtension.sliceBeforeLastDot = function(s) {
	var startIndex = null;
	var searchString = sinker_extensions_StringExtension.dot;
	var length = startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString);
	if(length != -1) {
		return HxOverrides.substr(s,0,length);
	} else {
		return s;
	}
};
sinker_extensions_StringExtension.sliceBeforeLastSlash = function(s) {
	var startIndex = null;
	var searchString = sinker_extensions_StringExtension.slash;
	var length = startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString);
	if(length != -1) {
		return HxOverrides.substr(s,0,length);
	} else {
		return s;
	}
};
sinker_extensions_StringExtension.camelToPascal = function(s) {
	switch(s.length) {
	case 0:
		return s;
	case 1:
		return s.toUpperCase();
	default:
		return s.charAt(0).toUpperCase() + HxOverrides.substr(s,1,null);
	}
};
sinker_extensions_StringExtension.pascalToCamel = function(s) {
	switch(s.length) {
	case 0:
		return s;
	case 1:
		return s.toLowerCase();
	default:
		return s.charAt(0).toLowerCase() + HxOverrides.substr(s,1,null);
	}
};
sinker_extensions_StringExtension.firstCharCode = function(s) {
	var charCode = HxOverrides.cca(s,0);
	if(charCode == null) {
		throw new sinker_Error(sinker_internal_ErrorMsg.emptyString());
	} else {
		return charCode;
	}
};
sinker_extensions_StringExtension.lastCharCode = function(s) {
	var charCode = HxOverrides.cca(s,s.length - 1);
	if(charCode == null) {
		throw new sinker_Error(sinker_internal_ErrorMsg.emptyString());
	} else {
		return charCode;
	}
};
var sinker_internal_ErrorMsg = function() { };
sinker_internal_ErrorMsg.__name__ = "sinker.internal.ErrorMsg";
sinker_internal_ErrorMsg.emptyString = function() {
	return "Invalid operation. String is empty.";
};
sinker_internal_ErrorMsg.optionUnwrap = function() {
	return "Failed to unwrap. Value is null.";
};
var sneaker_CompilerFlags = function() { };
sneaker_CompilerFlags.__name__ = "sneaker.CompilerFlags";
sneaker_CompilerFlags.parseIntOptional = function(s) {
	var this1 = Std.parseInt(Std.string(s));
	var this2 = this1;
	if(this2 != null) {
		return haxe_ds_Option.Some(this2);
	} else {
		return haxe_ds_Option.None;
	}
};
var sneaker_assertion_Asserter = function() { };
sneaker_assertion_Asserter.__name__ = "sneaker.assertion.Asserter";
sneaker_assertion_Asserter.prepareEvaluations = function(expressionToAssert) {
	var evaluations = [];
	var preparePart = function(subExpression,subExpressionString) {
		var this1 = evaluations.length;
		var variableName = "__sneakerPartialEvaluationResult" + this1;
		var element = new sneaker_assertion__$Asserter_Evaluation(subExpression,subExpressionString,variableName);
		var this1 = evaluations.push(element);
		return variableName;
	};
	var preparePartRecursive = null;
	preparePartRecursive = function(inputExpression) {
		var _g = inputExpression.expr;
		if(_g._hx_index == 0) {
			var _g1 = _g.c;
			switch(_g1._hx_index) {
			case 0:
				var _g = _g1.v;
				return inputExpression;
			case 1:
				var _g = _g1.f;
				return inputExpression;
			case 2:
				var _g = _g1.s;
				var _g = _g1.kind;
				return inputExpression;
			case 3:
				switch(_g1.s) {
				case "false":case "null":case "true":
					return inputExpression;
				default:
					var expressionString = haxe_macro_ExprTools.toString(inputExpression);
					var expression = haxe_macro_ExprTools.map(inputExpression,preparePartRecursive);
					return { expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent(preparePart(expression,expressionString))), pos : { file : "D:\\haxe\\haxe\\lib\\sneaker/0,11,0/src/sneaker/assertion/Asserter.hx", min : 5764, max : 5807}};
				}
				break;
			case 4:
				var _g = _g1.r;
				var _g = _g1.opt;
				return inputExpression;
			}
		} else {
			var expressionString = haxe_macro_ExprTools.toString(inputExpression);
			var expression = haxe_macro_ExprTools.map(inputExpression,preparePartRecursive);
			return { expr : haxe_macro_ExprDef.EConst(haxe_macro_Constant.CIdent(preparePart(expression,expressionString))), pos : { file : "D:\\haxe\\haxe\\lib\\sneaker/0,11,0/src/sneaker/assertion/Asserter.hx", min : 5764, max : 5807}};
		}
	};
	preparePartRecursive(expressionToAssert);
	return evaluations;
};
sneaker_assertion_Asserter.partialEvaluationResultName = function(index) {
	return "__sneakerPartialEvaluationResult" + index;
};
var sneaker_assertion__$Asserter_Evaluation = function(expression,expressionString,variableName) {
	this.expressionString = expressionString;
	this.executionExpression = { expr : haxe_macro_ExprDef.EVars([{ name : variableName, type : null, expr : expression, isFinal : true, meta : []}]), pos : { file : "D:\\haxe\\haxe\\lib\\sneaker/0,11,0/src/sneaker/assertion/Asserter.hx", min : 6923, max : 6928}};
};
sneaker_assertion__$Asserter_Evaluation.__name__ = "sneaker.assertion._Asserter.Evaluation";
sneaker_assertion__$Asserter_Evaluation.getExecutionExpression = function(evaluation) {
	return evaluation.executionExpression;
};
sneaker_assertion__$Asserter_Evaluation.prototype = {
	__class__: sneaker_assertion__$Asserter_Evaluation
};
var sneaker_log_LogType = function(prefix,logLevel) {
	if(logLevel == null) {
		logLevel = 0;
	}
	this.prefix = prefix;
	this.tagFilter = sneaker_log_LogTypeDefaults.tagFilter;
	this.positionFilter = sneaker_log_LogTypeDefaults.positionFilter;
	this.positionFormat = sneaker_log_LogTypeDefaults.positionFormat;
	this.logFormat = sneaker_log_LogTypeDefaults.logFormat;
	if(logLevel > sneaker_CompilerFlags.logLevel.get()) {
		this.print = sneaker_log_LogTypeExtension.doNotPrint;
	}
};
sneaker_log_LogType.__name__ = "sneaker.log.LogType";
sneaker_log_LogType.prototype = {
	print: function(message,tag,pos) {
		var notNullTag = tag != null ? tag : sneaker_tag_Tags.none;
		if(this.tagFilter(notNullTag) && this.positionFilter(pos)) {
			sneaker_print_Printer.println_String(this.logFormat(this,message,notNullTag,pos));
		}
	}
	,__class__: sneaker_log_LogType
};
var sneaker_log_LogFormats = function() { };
sneaker_log_LogFormats.__name__ = "sneaker.log.LogFormats";
sneaker_log_LogFormats.prefixPositionTagMessage = function(logType,message,tag,pos) {
	var prefix = logType.prefix;
	return "" + (prefix.length >= sneaker_log_LogFormats.alignmentPosition ? prefix + sneaker_log_LogFormats.space : StringTools.rpad(prefix,sneaker_log_LogFormats.space,sneaker_log_LogFormats.alignmentPosition)) + logType.positionFormat(pos) + " " + sneaker_log_LogFormats.separator + " " + Std.string(tag) + " " + sneaker_log_LogFormats.separator + " " + message;
};
sneaker_log_LogFormats.prefixPositionTagLineFeedMessage = function(logType,message,tag,pos) {
	var prefix = logType.prefix;
	return "" + (prefix.length >= sneaker_log_LogFormats.alignmentPosition ? prefix + sneaker_log_LogFormats.space : StringTools.rpad(prefix,sneaker_log_LogFormats.space,sneaker_log_LogFormats.alignmentPosition)) + logType.positionFormat(pos) + " " + sneaker_log_LogFormats.separator + " " + Std.string(tag) + "\n" + message;
};
sneaker_log_LogFormats.prefixPositionLineFeedTagMessage = function(logType,message,tag,pos) {
	var prefix = logType.prefix;
	return "" + (prefix.length >= sneaker_log_LogFormats.alignmentPosition ? prefix + sneaker_log_LogFormats.space : StringTools.rpad(prefix,sneaker_log_LogFormats.space,sneaker_log_LogFormats.alignmentPosition)) + logType.positionFormat(pos) + "\n" + Std.string(tag) + " " + sneaker_log_LogFormats.separator + " " + message;
};
sneaker_log_LogFormats.lineFeedForEach = function(logType,message,tag,pos) {
	return "" + logType.prefix + "\nPosition: " + logType.positionFormat(pos) + "\nTag name: " + Std.string(tag) + "\nMessage : " + message;
};
sneaker_log_LogFormats.prefixMessage = function(logType,message,tag,pos) {
	var prefix = logType.prefix;
	return "" + (prefix.length >= sneaker_log_LogFormats.alignmentPosition ? prefix + sneaker_log_LogFormats.space : StringTools.rpad(prefix,sneaker_log_LogFormats.space,sneaker_log_LogFormats.alignmentPosition)) + message;
};
sneaker_log_LogFormats.messageOnly = function(logType,message,tag,pos) {
	return "" + message;
};
sneaker_log_LogFormats.padPrefixString = function(prefix) {
	if(prefix.length >= sneaker_log_LogFormats.alignmentPosition) {
		return prefix + sneaker_log_LogFormats.space;
	} else {
		return StringTools.rpad(prefix,sneaker_log_LogFormats.space,sneaker_log_LogFormats.alignmentPosition);
	}
};
sneaker_log_LogFormats.padPrefix = function(logType) {
	var prefix = logType.prefix;
	if(prefix.length >= sneaker_log_LogFormats.alignmentPosition) {
		return prefix + sneaker_log_LogFormats.space;
	} else {
		return StringTools.rpad(prefix,sneaker_log_LogFormats.space,sneaker_log_LogFormats.alignmentPosition);
	}
};
var sneaker_format_PosInfosExtension = function() { };
sneaker_format_PosInfosExtension.__name__ = "sneaker.format.PosInfosExtension";
sneaker_format_PosInfosExtension.formatFile = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		return "" + pos.fileName;
	}
};
sneaker_format_PosInfosExtension.formatClass = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		return "" + pos.className;
	}
};
sneaker_format_PosInfosExtension.formatMethod = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		return "" + pos.methodName;
	}
};
sneaker_format_PosInfosExtension.formatClassWithoutModule = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		var s = pos.className;
		var startIndex = null;
		var searchString = sinker_extensions_StringExtension.dot;
		return "" + HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null);
	}
};
sneaker_format_PosInfosExtension.formatClassMethod = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		return "" + pos.className + "::" + pos.methodName;
	}
};
sneaker_format_PosInfosExtension.formatClassMethodWithoutModule = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		var s = pos.className;
		var startIndex = null;
		var searchString = sinker_extensions_StringExtension.dot;
		return "" + HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null) + "::" + pos.methodName;
	}
};
sneaker_format_PosInfosExtension.formatClassMethodLine = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		return "" + pos.className + "::" + pos.methodName + " line " + pos.lineNumber;
	}
};
sneaker_format_PosInfosExtension.formatClassMethodLineWithoutModule = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		var s = pos.className;
		var startIndex = null;
		var searchString = sinker_extensions_StringExtension.dot;
		return "" + HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null) + "::" + pos.methodName + " line " + pos.lineNumber;
	}
};
sneaker_format_PosInfosExtension.formatFileWithoutPath = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		var s = pos.fileName;
		var startIndex = null;
		var searchString = sinker_extensions_StringExtension.slash;
		return "" + HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null);
	}
};
sneaker_format_PosInfosExtension.formatFileLine = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		return "" + pos.fileName + " line " + pos.lineNumber;
	}
};
sneaker_format_PosInfosExtension.formatFileLineWithoutPath = function(pos) {
	if(pos == null) {
		return sneaker_format_PosInfosExtension.noPositionInfo;
	} else {
		var s = pos.fileName;
		var startIndex = null;
		var searchString = sinker_extensions_StringExtension.slash;
		return "" + HxOverrides.substr(s,(startIndex != null ? s.lastIndexOf(searchString,startIndex) : s.lastIndexOf(searchString)) + 1,null) + " line " + pos.lineNumber;
	}
};
var sneaker_log_LogTypeDefaults = function() { };
sneaker_log_LogTypeDefaults.__name__ = "sneaker.log.LogTypeDefaults";
sneaker_log_LogTypeDefaults.tagFilter = function(tag) {
	return true;
};
sneaker_log_LogTypeDefaults.positionFilter = function(pos) {
	return true;
};
var sneaker_log_LogTypeExtension = function() { };
sneaker_log_LogTypeExtension.__name__ = "sneaker.log.LogTypeExtension";
sneaker_log_LogTypeExtension.doNotPrint = function(message,tag,pos) {
	return;
};
sneaker_log_LogTypeExtension.createLogString = function(_this,message,tag,pos) {
	return _this.logFormat(_this,message,tag != null ? tag : sneaker_tag_Tags.none,pos);
};
sneaker_log_LogTypeExtension.forcePrint = function(_this,message,tag,pos) {
	sneaker_print_Printer.println_String(_this.logFormat(_this,message,tag != null ? tag : sneaker_tag_Tags.none,pos));
};
sneaker_log_LogTypeExtension.printIfMatch = function(_this,message,tag,pos) {
	var notNullTag = tag != null ? tag : sneaker_tag_Tags.none;
	if(_this.tagFilter(notNullTag) && _this.positionFilter(pos)) {
		sneaker_print_Printer.println_String(_this.logFormat(_this,message,notNullTag,pos));
	}
};
sneaker_log_LogTypeExtension.disablePrint = function(_this) {
	_this.print = sneaker_log_LogTypeExtension.doNotPrint;
};
sneaker_log_LogTypeExtension.copyFiltersFrom = function(_this,other) {
	_this.tagFilter = other.tagFilter;
	_this.positionFilter = other.positionFilter;
	return _this;
};
sneaker_log_LogTypeExtension.copyFormatsFrom = function(_this,other) {
	_this.positionFormat = other.positionFormat;
	_this.logFormat = other.logFormat;
	return _this;
};
var sneaker_assertion_AsserterSettings = function() { };
sneaker_assertion_AsserterSettings.__name__ = "sneaker.assertion.AsserterSettings";
var sneaker_exception_Exception = function(content,callStack,appendCallStack,pos) {
	this.content = content;
	this.appendCallStack = appendCallStack != null ? appendCallStack : sneaker_exception_ExceptionSettings.appendCallStackDefault;
	if(callStack != null) {
		this.callStack = callStack;
	} else {
		var currentCallStack = haxe_CallStack.callStack();
		currentCallStack.shift();
		this.callStack = currentCallStack;
	}
	this.positionInformation = pos;
};
sneaker_exception_Exception.__name__ = "sneaker.exception.Exception";
sneaker_exception_Exception.prototype = {
	toString: function() {
		var classObject = js_Boot.getClass(this);
		var name = classObject != null ? classObject.__name__ : "sneaker.exception.Exception";
		if(this.appendCallStack) {
			return "" + name + "\n" + this.content + "\nCall Stack:\n" + sneaker_exception_ExceptionSettings.callStackFormat(this.callStack);
		} else {
			return "" + name + "\n" + this.content;
		}
	}
	,__class__: sneaker_exception_Exception
};
var sneaker_assertion_AssertionException = function(result) {
	this.result = result;
	var currentCallStack = haxe_CallStack.callStack();
	currentCallStack.shift();
	sneaker_exception_Exception.call(this,result.createLogString(sneaker_assertion_AsserterSettings.failureLogType),currentCallStack,null,result.positionInformations);
};
sneaker_assertion_AssertionException.__name__ = "sneaker.assertion.AssertionException";
sneaker_assertion_AssertionException.__super__ = sneaker_exception_Exception;
sneaker_assertion_AssertionException.prototype = $extend(sneaker_exception_Exception.prototype,{
	__class__: sneaker_assertion_AssertionException
});
var sneaker_assertion_AssertionResult = function(assertionType,evaluationResults,error,tag,pos) {
	this.assertionType = assertionType;
	this.evaluationResults = evaluationResults;
	this.error = error;
	this.tag = tag != null ? tag : sneaker_tag_Tags.none;
	this.positionInformations = pos;
	this.contentString = this.generateContentString();
};
sneaker_assertion_AssertionResult.__name__ = "sneaker.assertion.AssertionResult";
sneaker_assertion_AssertionResult.createError = function(type,evaluationResults,tag,message,pos) {
	return new sneaker_assertion_AssertionResult(type,evaluationResults,haxe_ds_Option.Some(message != null ? haxe_ds_Option.Some(message) : haxe_ds_Option.None),tag,pos);
};
sneaker_assertion_AssertionResult.createOk = function(type,evaluationResults,tag,pos) {
	return new sneaker_assertion_AssertionResult(type,evaluationResults,haxe_ds_Option.None,tag,pos);
};
sneaker_assertion_AssertionResult.prototype = {
	get_wholeEvaluationResult: function() {
		var this1 = this.evaluationResults.length;
		var length = this1;
		if(length > 0) {
			var this1 = length - 1;
			return this.evaluationResults[this1];
		} else {
			var _g = this.error;
			switch(_g._hx_index) {
			case 0:
				var _g1 = _g.v;
				return sneaker_assertion_EvaluationResult.falseLiteral;
			case 1:
				return sneaker_assertion_EvaluationResult.trueLiteral;
			}
		}
	}
	,createLogString: function(logType) {
		var tag = this.tag;
		return logType.logFormat(logType,this.contentString,tag != null ? tag : sneaker_tag_Tags.none,this.positionInformations);
	}
	,printLog: function(logType) {
		logType.print(this.contentString,this.tag,this.positionInformations);
	}
	,addSummary: function(buffer) {
		var _g = this.error;
		switch(_g._hx_index) {
		case 0:
			var message = _g.v;
			buffer.b += Std.string("" + Std.string(this.assertionType) + " failed.");
			var this1 = this.evaluationResults.length;
			var length = this1;
			var result;
			if(length > 0) {
				var this1 = length - 1;
				result = this.evaluationResults[this1];
			} else {
				var _g = this.error;
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.v;
					result = sneaker_assertion_EvaluationResult.falseLiteral;
					break;
				case 1:
					result = sneaker_assertion_EvaluationResult.trueLiteral;
					break;
				}
			}
			buffer.b += Std.string(" (" + result.expressionString + ") is " + Std.string(result.value) + ".");
			if(message._hx_index == 0) {
				var messageValue = message.v;
				buffer.b += Std.string("\n" + Std.string("Message: " + messageValue));
			}
			break;
		case 1:
			buffer.b += Std.string("" + Std.string(this.assertionType) + " succeeded.");
			var this1 = this.evaluationResults.length;
			var length = this1;
			var result;
			if(length > 0) {
				var this1 = length - 1;
				result = this.evaluationResults[this1];
			} else {
				var _g = this.error;
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.v;
					result = sneaker_assertion_EvaluationResult.falseLiteral;
					break;
				case 1:
					result = sneaker_assertion_EvaluationResult.trueLiteral;
					break;
				}
			}
			buffer.b += Std.string(" (" + result.expressionString + ")");
			break;
		}
	}
	,addDetails: function(buffer) {
		var this1 = this.evaluationResults.length;
		if(this1 > 1) {
			buffer.b += Std.string("\n" + "Breakdown:");
			var this1 = this.evaluationResults;
			var callback = sneaker_assertion_EvaluationResult.stringify;
			var this2 = this1.length;
			var len = this2;
			var newArray = [];
			newArray.length = len;
			var newArray1 = newArray;
			var i = 0;
			while(i < len) {
				newArray1[i] = callback(this1[i]);
				++i;
			}
			var _g_current = 0;
			var _g_array = newArray1;
			while(_g_current < _g_array.length) {
				var line = _g_array[_g_current++];
				var indent = "  ";
				if(indent == null) {
					indent = "  ";
				}
				buffer.b += Std.string("\n" + indent + Std.string(line));
			}
		}
	}
	,generateContentString: function() {
		var buffer = new sneaker_string_$buffer_StringBuffer();
		this.addSummary(buffer);
		this.addDetails(buffer);
		return buffer.b;
	}
	,__class__: sneaker_assertion_AssertionResult
};
var sneaker_assertion_AssertionType = $hxEnums["sneaker.assertion.AssertionType"] = { __ename__:true,__constructs__:null
	,Assertion: {_hx_name:"Assertion",_hx_index:0,__enum__:"sneaker.assertion.AssertionType",toString:$estr}
	,Unwrap: {_hx_name:"Unwrap",_hx_index:1,__enum__:"sneaker.assertion.AssertionType",toString:$estr}
};
sneaker_assertion_AssertionType.__constructs__ = [sneaker_assertion_AssertionType.Assertion,sneaker_assertion_AssertionType.Unwrap];
var sneaker_assertion_EvaluationResult = function(expressionString,value) {
	this.expressionString = expressionString;
	this.value = value;
};
sneaker_assertion_EvaluationResult.__name__ = "sneaker.assertion.EvaluationResult";
sneaker_assertion_EvaluationResult.stringify = function(result) {
	return result.toString();
};
sneaker_assertion_EvaluationResult.prototype = {
	toString: function() {
		return "(" + this.expressionString + ") => " + Std.string(this.value);
	}
	,__class__: sneaker_assertion_EvaluationResult
};
var sneaker_format_CallStackItemExtension = function() { };
sneaker_format_CallStackItemExtension.__name__ = "sneaker.format.CallStackItemExtension";
sneaker_format_CallStackItemExtension.format = function(item) {
	if(item == null) {
		return "null";
	} else {
		switch(item._hx_index) {
		case 0:
			return Std.string(item);
		case 1:
			var m = item.m;
			return sneaker_format_CallStackItemFormat.formatModule(m);
		case 2:
			var s = item.s;
			var file = item.file;
			var line = item.line;
			var column = item.column;
			return sneaker_format_CallStackItemFormat.formatFilePos(s,file,line,column);
		case 3:
			var className = item.classname;
			var methodName = item.method;
			return sneaker_format_CallStackItemFormat.formatMethod(className,methodName);
		case 4:
			var v = item.v;
			return sneaker_format_CallStackItemFormat.formatLocalFunction(v);
		}
	}
};
sneaker_format_CallStackItemExtension.formatStack = function(stack) {
	var callback = sneaker_format_CallStackItemExtension.format;
	var this1 = stack.length;
	var len = this1;
	var newArray = [];
	newArray.length = len;
	var newArray1 = newArray;
	var i = 0;
	while(i < len) {
		newArray1[i] = callback(stack[i]);
		++i;
	}
	return newArray1.join("\n");
};
sneaker_format_CallStackItemExtension.formatStackIndent = function(stack,indent) {
	if(indent == null) {
		indent = "  ";
	}
	var separator = "\n" + indent;
	var buffer_b = "";
	buffer_b += indent == null ? "null" : "" + indent;
	var this1 = 0;
	buffer_b += Std.string(sneaker_format_CallStackItemExtension.format(stack[this1]));
	var _g = 1;
	var this1 = stack.length;
	var _g1 = this1;
	while(_g < _g1) {
		var i = _g++;
		buffer_b += separator == null ? "null" : "" + separator;
		var this1 = i;
		buffer_b += Std.string(sneaker_format_CallStackItemExtension.format(stack[this1]));
	}
	return buffer_b;
};
var sneaker_format_CallStackItemFormat = function() { };
sneaker_format_CallStackItemFormat.__name__ = "sneaker.format.CallStackItemFormat";
sneaker_format_CallStackItemFormat.formatLineColumn = function(line,column) {
	return "line " + line + (column != null ? ", col " + column : "");
};
sneaker_format_CallStackItemFormat.formatModule = function(module) {
	return module;
};
sneaker_format_CallStackItemFormat.formatFilePos = function(s,file,line,column) {
	return "" + (sneaker_format_CallStackItemFormat.hideFilePath ? "" : file + sneaker_format_CallStackItemFormat.separator) + sneaker_format_CallStackItemExtension.format(s) + sneaker_format_CallStackItemFormat.separator + sneaker_format_CallStackItemFormat.formatLineColumn(line,column);
};
sneaker_format_CallStackItemFormat.formatClass = function(className) {
	if(className != null) {
		var tmp;
		if(sneaker_format_CallStackItemFormat.hidePackagePath) {
			var startIndex = null;
			var searchString = sinker_extensions_StringExtension.dot;
			tmp = HxOverrides.substr(className,(startIndex != null ? className.lastIndexOf(searchString,startIndex) : className.lastIndexOf(searchString)) + 1,null);
		} else {
			tmp = className;
		}
		return "" + tmp;
	} else {
		return "?";
	}
};
sneaker_format_CallStackItemFormat.formatMethod = function(className,methodName) {
	return "" + sneaker_format_CallStackItemFormat.formatClass(className) + "::" + methodName;
};
sneaker_format_CallStackItemFormat.formatLocalFunction = function(v) {
	return "fn " + v;
};
var sneaker_exception_ExceptionSettings = function() { };
sneaker_exception_ExceptionSettings.__name__ = "sneaker.exception.ExceptionSettings";
sneaker_exception_ExceptionSettings.callStackFormat = function(stack) {
	return sneaker_format_CallStackItemExtension.formatStackIndent(stack);
};
var sneaker_log_LogTypeSetterExtension = function() { };
sneaker_log_LogTypeSetterExtension.__name__ = "sneaker.log.LogTypeSetterExtension";
sneaker_log_LogTypeSetterExtension.setTagNameFilter = function(thisType,tagName) {
	thisType.tagFilter = sneaker_tag_TagFilterTools.createNameFilter(tagName);
	return thisType;
};
sneaker_log_LogTypeSetterExtension.setTagBitsFilter = function(thisType,bitMask) {
	thisType.tagFilter = sneaker_tag_TagFilterTools.createBitsFilter(bitMask);
	return thisType;
};
sneaker_log_LogTypeSetterExtension.setClassFilter = function(thisType,className,passNullPosition) {
	if(passNullPosition == null) {
		passNullPosition = false;
	}
	thisType.positionFilter = sneaker_log_PosInfosFilterTools.createClassFilter(className,passNullPosition);
	return thisType;
};
sneaker_log_LogTypeSetterExtension.setMethodFilter = function(thisType,methodName,passNullPosition) {
	if(passNullPosition == null) {
		passNullPosition = false;
	}
	thisType.positionFilter = sneaker_log_PosInfosFilterTools.createMethodFilter(methodName,passNullPosition);
	return thisType;
};
sneaker_log_LogTypeSetterExtension.setClassMethodFilter = function(thisType,className,methodName,passNullPosition) {
	if(passNullPosition == null) {
		passNullPosition = false;
	}
	thisType.positionFilter = sneaker_log_PosInfosFilterTools.createClassMethodFilter(className,methodName,passNullPosition);
	return thisType;
};
sneaker_log_LogTypeSetterExtension.setPositionFormat = function(thisType,format) {
	thisType.positionFormat = format;
	return thisType;
};
sneaker_log_LogTypeSetterExtension.setLogFormat = function(thisType,format) {
	thisType.logFormat = format;
	return thisType;
};
var sneaker_log_PosInfosFilterTools = function() { };
sneaker_log_PosInfosFilterTools.__name__ = "sneaker.log.PosInfosFilterTools";
sneaker_log_PosInfosFilterTools.createClassFilter = function(className,passIfNull) {
	if(passIfNull == null) {
		passIfNull = false;
	}
	return function(pos) {
		if(pos != null) {
			return pos.className == className;
		} else {
			return passIfNull;
		}
	};
};
sneaker_log_PosInfosFilterTools.createMethodFilter = function(methodName,passIfNull) {
	if(passIfNull == null) {
		passIfNull = false;
	}
	return function(pos) {
		if(pos != null) {
			return pos.methodName == methodName;
		} else {
			return passIfNull;
		}
	};
};
sneaker_log_PosInfosFilterTools.createClassMethodFilter = function(className,methodName,passIfNull) {
	if(passIfNull == null) {
		passIfNull = false;
	}
	return function(pos) {
		if(pos == null) {
			return passIfNull;
		} else if(pos.className == className) {
			return pos.methodName == methodName;
		} else {
			return false;
		}
	};
};
var sneaker_print_PrintBuffer = {};
var sneaker_string_$buffer_StringBufferBox = function(onFull,maxLength,maxCount) {
	if(maxCount == null) {
		maxCount = 1024;
	}
	if(maxLength == null) {
		maxLength = 8192;
	}
	this.buffer = new sneaker_string_$buffer_CensoredStringBuffer();
	this.onFull = onFull;
	this.maxLength = maxLength;
	this.maxCount = maxCount;
	this.currentCount = 0;
};
sneaker_string_$buffer_StringBufferBox.__name__ = "sneaker.string_buffer.StringBufferBox";
sneaker_string_$buffer_StringBufferBox.prototype = {
	clear: function() {
		this.buffer = this.createNewBuffer();
		this.currentCount = 0;
	}
	,clearAdd: function(s) {
		var newBuffer = this.createNewBuffer();
		newBuffer.data.b += s == null ? "null" : "" + s;
		this.buffer = newBuffer;
		this.currentCount = 1;
	}
	,flush: function() {
		this.onFull(this.buffer.toString());
		this.clear();
	}
	,flushAdd: function(s) {
		this.onFull(this.buffer.toString());
		this.clearAdd(s);
	}
	,toString: function() {
		return this.buffer.toString();
	}
	,runOnFull: function() {
		this.onFull(this.buffer.toString());
	}
	,onAddBuffer: function(s) {
		++this.currentCount;
		if(this.currentCount <= this.maxCount && this.buffer.data.b.length + s.length <= this.maxLength) {
			return true;
		} else {
			this.onFull(this.buffer.toString());
			this.clearAdd(s);
			return false;
		}
	}
	,createNewBuffer: function() {
		return new sneaker_string_$buffer_CensoredStringBuffer($bind(this,this.onAddBuffer));
	}
	,__class__: sneaker_string_$buffer_StringBufferBox
};
var sneaker_string_$buffer_CensoredStringBuffer = function(onAdd) {
	this.data = new StringBuf();
	this.onAdd = onAdd != null ? onAdd : sneaker_string_$buffer_CensoredStringBuffer.defaultOnAdd;
};
sneaker_string_$buffer_CensoredStringBuffer.__name__ = "sneaker.string_buffer.CensoredStringBuffer";
sneaker_string_$buffer_CensoredStringBuffer.defaultOnAdd = function(_s) {
	return true;
};
sneaker_string_$buffer_CensoredStringBuffer.prototype = {
	get_length: function() {
		return this.data.b.length;
	}
	,add: function(x) {
		var s = Std.string(x);
		if(this.onAdd(s)) {
			this.data.b += s == null ? "null" : "" + s;
		}
	}
	,addDirect: function(x) {
		this.data.b += Std.string(x);
	}
	,addChar: function(c) {
		var s = String.fromCodePoint(c);
		if(this.onAdd(s)) {
			this.data.b += String.fromCodePoint(c);
		}
	}
	,addCharDirect: function(c) {
		this.data.b += String.fromCodePoint(c);
	}
	,addSub: function(s,pos,len) {
		var subS = HxOverrides.substr(s,pos,len);
		if(this.onAdd(subS)) {
			this.data.b += subS == null ? "null" : "" + subS;
		}
	}
	,addSubDirect: function(s,pos,len) {
		this.data.b += len == null ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len);
	}
	,toString: function() {
		return this.data.b;
	}
	,__class__: sneaker_string_$buffer_CensoredStringBuffer
};
var sneaker_print_Printer = function() { };
sneaker_print_Printer.__name__ = "sneaker.print.Printer";
sneaker_print_Printer.println_printlnThrow_T = function(s) {
	if(sneaker_print_PrinterSettings.useBuffer) {
		sneaker_print_Printer.lastBuffered = s;
		sneaker_print_Printer.buffer.buffer.add("" + Std.string(s) + "\n");
		return;
	}
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.println_printlnReturn_T = function(s) {
	if(sneaker_print_PrinterSettings.useBuffer) {
		sneaker_print_Printer.lastBuffered = s;
		sneaker_print_Printer.buffer.buffer.add("" + Std.string(s) + "\n");
		return;
	}
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.println_String = function(s) {
	if(sneaker_print_PrinterSettings.useBuffer) {
		sneaker_print_Printer.lastBuffered = s;
		sneaker_print_Printer.buffer.buffer.add("" + (s == null ? "null" : "" + s) + "\n");
		return;
	}
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.printlnDirect = function(s) {
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.printDirect = function(s) {
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.printlnForced = function(s) {
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.printForced = function(s) {
	sneaker_print_Printer.lastPrinted = s;
	console.log(s);
};
sneaker_print_Printer.printlnReturn = function(s) {
	sneaker_print_Printer.println_printlnReturn_T(s);
	return s;
};
sneaker_print_Printer.printlnThrow = function(s) {
	sneaker_print_Printer.println_printlnThrow_T(s);
	throw haxe_Exception.thrown(s);
};
sneaker_print_Printer.consoleLogJS = function(s) {
	console.log(s);
};
var sneaker_print_PrinterSettings = function() { };
sneaker_print_PrinterSettings.__name__ = "sneaker.print.PrinterSettings";
var sneaker_string_$buffer_StringBuffer = function() {
	StringBuf.call(this);
};
sneaker_string_$buffer_StringBuffer.__name__ = "sneaker.string_buffer.StringBuffer";
sneaker_string_$buffer_StringBuffer.__super__ = StringBuf;
sneaker_string_$buffer_StringBuffer.prototype = $extend(StringBuf.prototype,{
	__class__: sneaker_string_$buffer_StringBuffer
});
var sneaker_string_$buffer_StringBufferExtension = function() { };
sneaker_string_$buffer_StringBufferExtension.__name__ = "sneaker.string_buffer.StringBufferExtension";
sneaker_string_$buffer_StringBufferExtension.addLeftPadded = function(buf,s,padCharacterCode,length) {
	var str = Std.string(s);
	var _g = 0;
	var _g1 = length - str.length;
	while(_g < _g1) {
		var i = _g++;
		buf.addChar(padCharacterCode);
	}
	buf.add(str);
	return buf;
};
sneaker_string_$buffer_StringBufferExtension.addRightPadded = function(buf,s,padCharacterCode,length) {
	var str = Std.string(s);
	var currentLength = str.length;
	buf.add(str);
	while(currentLength < length) {
		buf.addChar(padCharacterCode);
		++currentLength;
	}
	return buf;
};
sneaker_string_$buffer_StringBufferExtension.padUntil = function(buf,padCharacterCode,totalLength) {
	var currentLength = buf.get_length();
	while(currentLength < totalLength) {
		buf.addChar(padCharacterCode);
		++currentLength;
	}
	return buf;
};
sneaker_string_$buffer_StringBufferExtension.addTabLike = function(buf,tabSize) {
	var currentLength = buf.get_length();
	var alignmentPosition = Math.ceil(currentLength / tabSize) * tabSize;
	var currentLength = buf.get_length();
	while(currentLength < alignmentPosition) {
		buf.addChar(32);
		++currentLength;
	}
	return buf;
};
var sneaker_tag_Tag = function(name,bits) {
	if(bits == null) {
		bits = -1;
	}
	this.internalName = name;
	this.internalBits = bits;
};
sneaker_tag_Tag.__name__ = "sneaker.tag.Tag";
sneaker_tag_Tag.prototype = {
	toString: function() {
		return this.internalName;
	}
	,__class__: sneaker_tag_Tag
};
var sneaker_tag_TagExtension = function() { };
sneaker_tag_TagExtension.__name__ = "sneaker.tag.TagExtension";
var sneaker_tag_TagFilterTools = function() { };
sneaker_tag_TagFilterTools.__name__ = "sneaker.tag.TagFilterTools";
sneaker_tag_TagFilterTools.createNameFilter = function(name) {
	return function(tag) {
		return tag.internalName == name;
	};
};
sneaker_tag_TagFilterTools.createBitsFilter = function(bitMask) {
	return function(tag) {
		return (tag.internalBits & bitMask) != 0;
	};
};
var sneaker_tag_Tags = function() { };
sneaker_tag_Tags.__name__ = "sneaker.tag.Tags";
var urals_IdMatchHelper = function() { };
urals_IdMatchHelper.__name__ = "urals.IdMatchHelper";
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
urals_IntIdRenderer.__name__ = "urals.IntIdRenderer";
urals_IntIdRenderer.prototype = {
	renderId: function(id) {
		return this.pref + (id == null ? "null" : "" + id);
	}
	,parseId: function(id) {
		return Std.parseInt(urals_IdMatchHelper.removePrefix(id,this.pref));
	}
	,__class__: urals_IntIdRenderer
};
var urals_web_AbstractWebWidgetTest = function() { };
urals_web_AbstractWebWidgetTest.__name__ = "urals.web.AbstractWebWidgetTest";
urals_web_AbstractWebWidgetTest.run = function() {
	var widget = new WebWidgetStub("block",new urals_IntIdRenderer("bl_"));
	var __sneakerPartialEvaluationResult0 = widget;
	var __sneakerPartialEvaluationResult1 = $bind(__sneakerPartialEvaluationResult0,__sneakerPartialEvaluationResult0.getCss);
	var __sneakerPartialEvaluationResult2 = __sneakerPartialEvaluationResult1();
	var __sneakerPartialEvaluationResult3 = __sneakerPartialEvaluationResult2 == ".block {background-color: #777;}";
	var __sneakerTag = null;
	if(widget.getCss() == ".block {background-color: #777;}" != true) {
		var __sneakerAssertionResult = sneaker_assertion_AssertionResult.createError(sneaker_assertion_AssertionType.Assertion,[new sneaker_assertion_EvaluationResult("widget",__sneakerPartialEvaluationResult0),new sneaker_assertion_EvaluationResult("widget.getCss",__sneakerPartialEvaluationResult1),new sneaker_assertion_EvaluationResult("widget.getCss()",__sneakerPartialEvaluationResult2),new sneaker_assertion_EvaluationResult("widget.getCss() == '.block {background-color: #777;}'",__sneakerPartialEvaluationResult3)],__sneakerTag,null,{ fileName : "test/urals/web/AbstractWebWidgetTest.hx", lineNumber : 10, className : "urals.web.AbstractWebWidgetTest", methodName : "run"});
		throw haxe_Exception.thrown(new sneaker_assertion_AssertionException(__sneakerAssertionResult));
	}
	var __sneakerPartialEvaluationResult0 = widget;
	var __sneakerPartialEvaluationResult1 = $bind(__sneakerPartialEvaluationResult0,__sneakerPartialEvaluationResult0.template);
	var __sneakerPartialEvaluationResult2 = { s : "HellO!"};
	var __sneakerPartialEvaluationResult3 = __sneakerPartialEvaluationResult1(__sneakerPartialEvaluationResult2,2);
	var __sneakerPartialEvaluationResult4 = __sneakerPartialEvaluationResult3 == "<div id=\"bl_2\" class=\"block\">HellO!</div>";
	var __sneakerTag = null;
	if(widget.template({ s : "HellO!"},2) == "<div id=\"bl_2\" class=\"block\">HellO!</div>" != true) {
		var __sneakerAssertionResult = sneaker_assertion_AssertionResult.createError(sneaker_assertion_AssertionType.Assertion,[new sneaker_assertion_EvaluationResult("widget",__sneakerPartialEvaluationResult0),new sneaker_assertion_EvaluationResult("widget.template",__sneakerPartialEvaluationResult1),new sneaker_assertion_EvaluationResult("{ s : \"HellO!\" }",__sneakerPartialEvaluationResult2),new sneaker_assertion_EvaluationResult("widget.template({ s : \"HellO!\" }, 2)",__sneakerPartialEvaluationResult3),new sneaker_assertion_EvaluationResult("widget.template({ s : \"HellO!\" }, 2) == '<div id=\\\"bl_2\\\" class=\\\"block\\\">HellO!</div>'",__sneakerPartialEvaluationResult4)],__sneakerTag,null,{ fileName : "test/urals/web/AbstractWebWidgetTest.hx", lineNumber : 11, className : "urals.web.AbstractWebWidgetTest", methodName : "run"});
		throw haxe_Exception.thrown(new sneaker_assertion_AssertionException(__sneakerAssertionResult));
	}
	var __sneakerPartialEvaluationResult0 = widget;
	var __sneakerPartialEvaluationResult1 = $bind(__sneakerPartialEvaluationResult0,__sneakerPartialEvaluationResult0.getClassId);
	var __sneakerPartialEvaluationResult2 = __sneakerPartialEvaluationResult1();
	var __sneakerPartialEvaluationResult3 = __sneakerPartialEvaluationResult2 == "block";
	var __sneakerTag = null;
	if(widget.getClassId() == "block" != true) {
		var __sneakerAssertionResult = sneaker_assertion_AssertionResult.createError(sneaker_assertion_AssertionType.Assertion,[new sneaker_assertion_EvaluationResult("widget",__sneakerPartialEvaluationResult0),new sneaker_assertion_EvaluationResult("widget.getClassId",__sneakerPartialEvaluationResult1),new sneaker_assertion_EvaluationResult("widget.getClassId()",__sneakerPartialEvaluationResult2),new sneaker_assertion_EvaluationResult("widget.getClassId() == \"block\"",__sneakerPartialEvaluationResult3)],__sneakerTag,null,{ fileName : "test/urals/web/AbstractWebWidgetTest.hx", lineNumber : 13, className : "urals.web.AbstractWebWidgetTest", methodName : "run"});
		throw haxe_Exception.thrown(new sneaker_assertion_AssertionException(__sneakerAssertionResult));
	}
	var __sneakerPartialEvaluationResult0 = widget;
	var __sneakerPartialEvaluationResult1 = $bind(__sneakerPartialEvaluationResult0,__sneakerPartialEvaluationResult0.renderId);
	var __sneakerPartialEvaluationResult2 = __sneakerPartialEvaluationResult1(5);
	var __sneakerPartialEvaluationResult3 = __sneakerPartialEvaluationResult2 == "bl_5";
	var __sneakerTag = null;
	if(widget.renderId(5) == "bl_5" != true) {
		var __sneakerAssertionResult = sneaker_assertion_AssertionResult.createError(sneaker_assertion_AssertionType.Assertion,[new sneaker_assertion_EvaluationResult("widget",__sneakerPartialEvaluationResult0),new sneaker_assertion_EvaluationResult("widget.renderId",__sneakerPartialEvaluationResult1),new sneaker_assertion_EvaluationResult("widget.renderId(5)",__sneakerPartialEvaluationResult2),new sneaker_assertion_EvaluationResult("widget.renderId(5) == \"bl_5\"",__sneakerPartialEvaluationResult3)],__sneakerTag,null,{ fileName : "test/urals/web/AbstractWebWidgetTest.hx", lineNumber : 14, className : "urals.web.AbstractWebWidgetTest", methodName : "run"});
		throw haxe_Exception.thrown(new sneaker_assertion_AssertionException(__sneakerAssertionResult));
	}
	var __sneakerPartialEvaluationResult0 = widget;
	var __sneakerPartialEvaluationResult1 = $bind(__sneakerPartialEvaluationResult0,__sneakerPartialEvaluationResult0.parseId);
	var __sneakerPartialEvaluationResult2 = __sneakerPartialEvaluationResult1("bl_5");
	var __sneakerPartialEvaluationResult3 = __sneakerPartialEvaluationResult2 == 5;
	var __sneakerTag = null;
	if(widget.parseId("bl_5") == 5 != true) {
		var __sneakerAssertionResult = sneaker_assertion_AssertionResult.createError(sneaker_assertion_AssertionType.Assertion,[new sneaker_assertion_EvaluationResult("widget",__sneakerPartialEvaluationResult0),new sneaker_assertion_EvaluationResult("widget.parseId",__sneakerPartialEvaluationResult1),new sneaker_assertion_EvaluationResult("widget.parseId(\"bl_5\")",__sneakerPartialEvaluationResult2),new sneaker_assertion_EvaluationResult("widget.parseId(\"bl_5\") == 5",__sneakerPartialEvaluationResult3)],__sneakerTag,null,{ fileName : "test/urals/web/AbstractWebWidgetTest.hx", lineNumber : 15, className : "urals.web.AbstractWebWidgetTest", methodName : "run"});
		throw haxe_Exception.thrown(new sneaker_assertion_AssertionException(__sneakerAssertionResult));
	}
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = "String";
Array.__name__ = "Array";
js_Boot.__toStr = ({ }).toString;
sinker_extensions_StringExtension.dot = ".";
sinker_extensions_StringExtension.slash = "/";
sneaker_CompilerFlags.printDisable = new prayer_CompilerFlag("sneaker_print_disable",function() {
	return null;
},function(define) {
	return haxe_ds_Option.Some(define != null);
},prayer_CompilerFlagType.Optional(false));
sneaker_CompilerFlags.logLevel = new prayer_CompilerFlag("sneaker_log_level",function() {
	return "200";
},sneaker_CompilerFlags.parseIntOptional,prayer_CompilerFlagType.Mandatory(200));
sneaker_CompilerFlags.macroLogLevel = new prayer_CompilerFlag("sneaker_macro_log_level",function() {
	return "300";
},sneaker_CompilerFlags.parseIntOptional,prayer_CompilerFlagType.Mandatory(300));
sneaker_CompilerFlags.macroMessageLevel = new prayer_CompilerFlag("sneaker_macro_message_level",function() {
	return "300";
},sneaker_CompilerFlags.parseIntOptional,prayer_CompilerFlagType.Mandatory(300));
sneaker_log_LogFormats.separator = "|";
sneaker_log_LogFormats.alignmentPosition = 9;
sneaker_log_LogFormats.aliases = { normal : sneaker_log_LogFormats.prefixPositionTagMessage, simple : sneaker_log_LogFormats.prefixMessage};
sneaker_log_LogFormats.space = " ";
sneaker_format_PosInfosExtension.noPositionInfo = "(No position info)";
sneaker_log_LogTypeDefaults.positionFormat = sneaker_format_PosInfosExtension.formatClassMethodLine;
sneaker_log_LogTypeDefaults.logFormat = sneaker_log_LogFormats.prefixPositionTagMessage;
sneaker_assertion_AsserterSettings.failureLogType = new sneaker_log_LogType("[ASSERT]");
sneaker_assertion_AsserterSettings.successLogType = new sneaker_log_LogType("[ASSERT]");
sneaker_assertion_EvaluationResult.trueLiteral = new sneaker_assertion_EvaluationResult("true",true);
sneaker_assertion_EvaluationResult.falseLiteral = new sneaker_assertion_EvaluationResult("false",false);
sneaker_format_CallStackItemExtension.twoSpaces = "  ";
sneaker_format_CallStackItemFormat.hideFilePath = false;
sneaker_format_CallStackItemFormat.hidePackagePath = true;
sneaker_format_CallStackItemFormat.separator = " ";
sneaker_exception_ExceptionSettings.appendCallStackDefault = false;
sneaker_print_Printer.buffer = (function($this) {
	var $r;
	var this1 = new sneaker_string_$buffer_StringBufferBox(function(s) {
		sneaker_print_Printer.lastPrinted = s;
		console.log(s);
	},null,null);
	$r = this1;
	return $r;
}(this));
sneaker_print_PrinterSettings.useBuffer = false;
sneaker_string_$buffer_StringBufferExtension.twoSpaces = "  ";
sneaker_tag_Tags.none = new sneaker_tag_Tag("-",0);
sneaker_tag_Tags.anonymous = new sneaker_tag_Tag("no name",-1);
Main_main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
