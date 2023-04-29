package urals.web.js;

import urals.web.WidgetInterface;
import js.Browser;
import js.html.Element;

class SpaWidgetRenderer<M, Id>
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

    public function rerenderInSpa(
        els: Array<{id: Id, val: M}>, 
        getRootSelector: (el: {id: Id, val: M}) -> String, 
        afterRender: (elHtml: Element, el: {id: Id, val: M}) -> Void
    ): Void {
        var doc = Browser.document;
        var group = regroup(els, getRootSelector);
        for (i in 0...group.length) {
            var el = doc.querySelector(group[i].assoc);
            if(el != null) {
                el.innerHTML = group[i].arrs
                    .map(el -> widget.template(el.val, el.id))
                    .join("\n");
            } else {
                trace("Not found querySelector at render: " + group[i].assoc);
            }
        }
        Browser.window.setTimeout(() -> {
            for (i in 0...els.length) {
                var elHtml = doc.querySelector('#' + widget.renderId(els[i].id));
                if(elHtml != null) {
                    afterRender(elHtml, els[i]);
                } else {
                    trace("Not found querySelector after render: " 
                        + widget.renderId(els[i].id));
                }
            }
        }, 10);
    }
}