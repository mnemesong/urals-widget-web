package;

import haxe.Exception;

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

/**
    Function helps to produce UralsWidgetWebFactory, and safe pair lines of code
**/
inline function createUralsWidgeWebFactory<M>(
    templateFactory: UralsTemplateWebFactory<M>,
    cssFactory: UralsCssWebFactory
): UralsWidgetWebFactory<M> {
    return (classId: String) -> ({
        template: templateFactory(classId),
        css: cssFactory(classId),
        classId: classId
    });
}

/**
    Funcion convert uniq class-identifier to id-prefix
**/
@:pure
private function convertClassIdToIdPrefix(classId: String): String {
    var res = classId
        .split("-")
        .filter(el -> (el.length > 0))
        .map(el -> el.charAt(0).toUpperCase() + el.substr(1))
        .join("");
     return res.charAt(0).toLowerCase() + res.substr(1);
}

/**
    Function prefixing entity id to id for html-tag
**/
@:pure
inline function prefixIdByClassName(classId: String, id: String): String {
    return convertClassIdToIdPrefix(classId) + '_' + id;
}

/**
    Function rollbacks result of previous function
**/
function essenceIdFromPrefixedId(htmlId: String, className: String): String {
    var idPrefix = convertClassIdToIdPrefix(className);
    if (htmlId.substr(0, idPrefix.length) != idPrefix)
        throw new Exception("Html-id is not current class html-id");
    return htmlId.substr(idPrefix.length);
}