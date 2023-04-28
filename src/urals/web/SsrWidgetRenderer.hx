package urals.web;

import htmlparser.HtmlDocument;
import urals.web.WidgetInterface;

class SsrWidgetRenderer<M, Id>
{
    private var widget: WidgetInterface<M, Id>;

    public function new(widget: WidgetInterface<M, Id>)
    {
        this.widget = widget;
    }

    private function regroup<M>(
        arr: Array<M>, 
        assoc: (m: M) -> String
    ): Array<{assoc: String, arrs: Array<M>}> {
        var result: Array<{assoc: String, arrs: Array<M>}> = [];
        for (i in 0...arr.length) {
            var t = assoc(arr[i]);
            if(result.filter(el -> el.assoc == t).length == 0) {
                result.push({assoc: t, arrs: []});
            }
            result = result.map(el 
                -> (el.assoc == t) 
                    ? {assoc: t, arrs: el.arrs.concat([arr[i]])} 
                    : el);
        }
        return result;
    }

    public function rerenderInSsr(
        els: Array<{id: Id, val: M}>, 
        getRootSelector: (el: {id: Id, val: M}) -> String, //Селектор контейнера, а не родительского виджета
        hostHtml: String
    ): String {
        var groupedElements = regroup(els, getRootSelector);
        var groupedWidgets: Array<{sel: String, arr: Array<String>}> = groupedElements
            .map(el -> {sel: el.assoc, arr: el.arrs.map(el -> widget.template(el.val, el.id))});
        
        var html = new HtmlDocument(hostHtml);
        for (s in 0...groupedWidgets.length) {
            var targets = html.find(groupedWidgets[s].sel);
            for (i in 0...targets.length) {
                targets[i].innerHTML = groupedWidgets[s].arr.join("\n");
            }
        }
        return html.toString();
    }
}