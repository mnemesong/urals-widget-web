package test.urals.web;

import urals.IntIdRenderer;
import urals.web.SsrWidgetRenderer;
import sneaker.assertion.Asserter.*;

using StringTools;

class SsrWidgetRendererTest 
{
    public static function run() {
        var html = '
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title></title>
                </head>
                <body>
                </body>
            </html>';
        var ssrRenderer = new SsrWidgetRenderer(
            new WebWidgetStub("hello-block", new IntIdRenderer("hb_")));
        html = ssrRenderer.rerenderInSsr(
            [{id: 2, val: {s: "Hello!"}}],
            (el) -> "body",
            html
        );
        var clearHtml = html
            .replace("\n", "")
            .replace("\r", "")
            .replace(" ", "")
            .replace("\t", "");
        var nominal = '
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8"/>
                    <title></title>
                </head>
                <body><div id="hb_2" class="hello-block">Hello!</div></body>
            </html>';
        var clearNominal = nominal
            .replace("\n", "")
            .replace("\r", "")
            .replace(" ", "")
            .replace("\t", "");
        assert(clearHtml == clearNominal);
    }    
}