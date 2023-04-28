package urals.web;

abstract class AbstractWidget<M, Id> implements WidgetInterface<M, Id> 
{
    private var cn: String;
    private var idRenderer: IdRendererInterface<Id>;

    public function new(cn: String, idRenderer: IdRendererInterface<Id>) {
        this.cn = cn;
        this.idRenderer = idRenderer;
    }

    /**
        Rendering template function
    **/
    abstract public function template(m: M, id:Id): String;

    /**
        Get css content
    **/
    abstract public function getCss(): String;

    /**
        Rendering htmlId function
    **/
    public function renderId(id: Id): String {
		return this.idRenderer.renderId(id);
	}

    /**
        Parsing htmlId to entity id
    **/
	public function parseId(id: String): Id {
		return this.idRenderer.parseId(id);
	}

    /**
        Gets class id
    **/
	public function getClassId():String {
		return this.cn;
	}
}