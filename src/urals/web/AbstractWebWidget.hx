package urals.web;

abstract class AbstractWebWidget<M, Id> implements WidgetInterface<M, Id> 
{
    private var cn: String;
    private var idRenderer: IdRendererInterface<Id>;

    public function new(cn: String, idRenderer: IdRendererInterface<Id>) {
        this.cn = cn;
        this.idRenderer = idRenderer;
    }

    abstract public function template(m: M, id:Id): String;

    abstract public function getCss(): String;

    public function renderId(id: Id): String {
		return this.idRenderer.renderId(id);
	}

	public function parseId(id: String): Id {
		return this.idRenderer.parseId(id);
	}

	public function getClassId():String {
		return this.cn;
	}
}