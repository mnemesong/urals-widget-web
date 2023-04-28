package;

import urals.web.AbstractWidget;

/**
	Stub of AbstractWebWidget
**/
class WebWidgetStub<Id> extends AbstractWidget<{s: String}, Id> 
{

	public function template(m:{s:String}, id:Id):String {
		return '<div id="${renderId(id)}" class="${cn}">${m.s}</div>';
	}

	public function getCss():String {
		return '.${cn} {background-color: #777;}';
	}
}