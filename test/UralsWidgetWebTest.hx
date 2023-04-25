package;

import UralsWidgetWeb;
import sneaker.assertion.Asserter.*;

typedef TestModel = {
    a: Int,
    b: String
}

function template(classId: String): UralsTemplateWebFunc<TestModel> {
    return (m: TestModel, id: String) -> {
        return '<div id="${prefixIdByClassName(classId, id)}" ' 
            + 'class="${classId}">A: ${Std.string(m.a)}, B: ${m.b}</div>';
    }
}

function css(classId: String): String {
    return '${classId}: {font-size: 18px;}';
}

inline function widgetFactory(classId: String): UralsWidgetWeb<TestModel> {
    return createUralsWidgeWebFactory(template, css)(classId);
}

function main() {
    var testWidget = widgetFactory("test-widget");
    var model = {
        a: 12,
        b: "abbAo",
    }
    var html = testWidget.template(model, '1');
    var css = testWidget.css;
    assert(html == '<div id="testWidget_1" class="test-widget">A: 12, B: abbAo</div>');
    assert(css == 'test-widget: {font-size: 18px;}');
}