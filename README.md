# urals-widget-web


## Description
Abstractions and helper tools for making agnostic widgets. 


## Requirements
Package tested for Haxe >= 4.0.
The functionality or it missing of the package for lesser versions has not been tested.


## Example of usage
```haxe
...
//-------------------
// Widget.hx
import UralsWidgetWeb;

//Model of widget
typedef TestModel = {
    a: Int,
    b: String
}

//Template function
function template(classId: String): UralsTemplateWebFunc<TestModel> {
    return (m: TestModel, id: String) -> {
        return '<div id="${prefixIdByClassName(classId, id)}" ' 
            + 'class="${classId}">A: ${Std.string(m.a)}, B: ${m.b}</div>';
    }
}

//Css function
function css(classId: String): String {
    return '${classId}: {font-size: 18px;}';
}

//Widget creating
inline function widgetFactory(classId: String): UralsWidgetWeb<TestModel> {
    return createUralsWidgeWebFactory(template, css)(classId);
}

//-------------------
//Controller.hx
import Widget.hx

function main() {
    var testWidget = widgetFactory("test-widget");
    var model = {
        a: 12,
        b: "abbAo",
    }
    var html = testWidget.template(model, '1');
    var css = testWidget.css;

    trace(html);
    //<div id="testWidget_1" class="test-widget">A: 12, B: abbAo</div>

    trace(css);
    //'test-widget: {font-size: 18px;}
}
```


## API
```haxe
 /**
    Function helps to produce UralsWidgetWebFactory, and safe pair lines of code
**/
inline function createUralsWidgeWebFactory<M>(
    templateFactory: UralsTemplateWebFactory<M>,
    cssFactory: UralsCssWebFactory
): UralsWidgetWebFactory<M> {...}

/**
    Function prefixing entity id to id for html-tag
**/
@:pure
inline function prefixIdByClassName(classId: String, id: String): String {...}

/**
    Function rollbacks result of previous function
**/
function essenceIdFromPrefixedId(htmlId: String, className: String): String {...}
```


## Types
```haxe
/**
    Template function thats produces Html by Model (M) and it's id
**/
typedef UralsTemplateWebFunc<M> = (m: M, id: String) -> String;

/**
    Initialized unit of Widget, thats will be used for rendering, 
    and bundling styles of page
**/
typedef UralsWidgetWeb<M> = {
    template: UralsTemplateWebFunc<M>,
    css: String,
    classId: String,
};

/**
    Function, thats produce unit of widget uses its unique class identifier
**/
typedef UralsWidgetWebFactory<M> = (classId: String) -> UralsWidgetWeb<M>;

/**
    Function, thats produces tepmplate function uses unique class identifier
    of widget
**/
typedef UralsTemplateWebFactory<M> = (classId: String) -> UralsTemplateWebFunc<M>;

/**
    Function, thats produces css-style uses unique class identifier
    of widget
**/
typedef UralsCssWebFactory = (classId: String) -> String;
```

## Author
Anatoly Starodubtsev
Tostar74@mail.ru