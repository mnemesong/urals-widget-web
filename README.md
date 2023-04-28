# urals-widget-web


## Description
Abstractions and helper tools for making agnostic widgets.
Uses in web client applications and frameworks


## Requirements
Package tested for Haxe >= 4.0.
The functionality or it missing of the package for lesser versions has not been tested.


## Example of usage
```haxe
...
//-------------------
// WebWidgetStub.hx
package;

import urals.web.AbstractWebWidget;

/**
	Stub of AbstractWebWidget
**/
class WebWidgetStub<Id> extends AbstractWebWidget<{s: String}, Id> 
{

	public function template(m:{s:String}, id:Id):String {
		return '<div id="${renderId(id)}" class="${cn}">${m.s}</div>';
	}

	public function getCss():String {
		return '.${cn} {background-color: #777;}';
	}
}

//-------------------
//AbstractWebWidgetTest.hx
package;

import Widget.hx

class AbstractWebWidgetTest
{
    public static function run() {
        var widget = new WebWidgetStub("block", new IntIdRenderer("bl_"));
        widget.getCss() //.block {background-color: #777;}
        widget.template({s: "HellO!"}, 2) //<div id="bl_2" class="block">HellO!</div>
        widget.getClassId() //block
        widget.renderId(5) //bl_5
        widget.parseId("bl_5") //5
    }
}
```


## Author
Anatoly Starodubtsev
Tostar74@mail.ru