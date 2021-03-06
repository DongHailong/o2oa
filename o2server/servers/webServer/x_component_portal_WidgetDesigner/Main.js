MWF.APPWD = MWF.xApplication.portal.WidgetDesigner;
MWF.APPWD.options = {
	"multitask": true,
	"executable": false
};

MWF.xDesktop.requireApp("portal.PageDesigner", "lp."+MWF.language, null, false);
MWF.xDesktop.requireApp("portal.PageDesigner", "", null, false);
MWF.xApplication.portal.WidgetDesigner.Main = new Class({
	Extends: MWF.xApplication.portal.PageDesigner.Main,
	Implements: [Options, Events],
	options: {
		"style": "default",
        "template": "page.json",
        "templateId": "",
        "name": "portal.WidgetDesigner",
        "icon": "icon.png",
        "title": MWF.APPWD.LP.title,
        "appTitle": MWF.APPWD.LP.title,
        "id": "",
        "actions": null,
        "category": null,
        "processData": null
	}
});
