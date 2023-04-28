package urals;

interface WidgetInterface<M, Id>
{
    public function template(m: M, id:Id): String;

    public function renderId(id: Id): String;

    public function parseId(id: String): Id;
    
    public function getClassId(): String;

    public function getCss(): String;
    
}