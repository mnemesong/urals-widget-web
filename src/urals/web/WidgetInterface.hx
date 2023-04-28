package urals.web;

interface WidgetInterface<M, Id>
{
    /**
        Rendering template function
    **/
    public function template(m: M, id:Id): String;

    /**
        Rendering htmlId function
    **/
    public function renderId(id: Id): String;

    /**
        Parsing htmlId to entity id
    **/
    public function parseId(id: String): Id;
    
    /**
        Gets class id
    **/
    public function getClassId(): String;

    /**
        Get css content
    **/
    public function getCss(): String;
    
}