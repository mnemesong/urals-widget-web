package urals.web;

import urals.IntIdRenderer;
import sneaker.assertion.Asserter.*;

class AbstractWebWidgetTest
{
    public static function run() {
        var widget = new WebWidgetStub("block", new IntIdRenderer("bl_"));
        assert(widget.getCss() == '.block {background-color: #777;}');
        assert(widget.template({s: "HellO!"}, 2) 
            == '<div id="bl_2" class="block">HellO!</div>');
        assert(widget.getClassId() == "block");
        assert(widget.renderId(5) == "bl_5");
        assert(widget.parseId("bl_5") == 5);
    }
}