package;

import urals.IntIdRenderer;
import urals.web.SpaWidgetRenderer;

class Main 
{
    public static function main() {
        var w = new SpaWidgetRenderer(new WebWidgetStub("", new IntIdRenderer()));
    }
}