"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pt_backlog_component_1 = require("./pt-backlog.component");
var pipes_module_1 = require("./pipes/pipes.module");
var pt_item_list_component_1 = require("./pt-item-list/pt-item-list.component");
var PtBacklogModule = (function () {
    function PtBacklogModule() {
    }
    PtBacklogModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                pipes_module_1.PipesModule
            ],
            exports: [pt_backlog_component_1.PtBacklogComponent],
            declarations: [pt_backlog_component_1.PtBacklogComponent, pt_item_list_component_1.PTItemListComponent],
            providers: [],
        })
    ], PtBacklogModule);
    return PtBacklogModule;
}());
exports.PtBacklogModule = PtBacklogModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtYmFja2xvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1iYWNrbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFDOUUsK0RBQTREO0FBQzVELHFEQUFrRDtBQUNsRCxnRkFBMkU7QUFXM0U7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFUM0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRSxDQUFDLHlDQUFrQixDQUFDO1lBQzdCLFlBQVksRUFBRSxDQUFDLHlDQUFrQixFQUFDLDRDQUFtQixDQUFDO1lBQ3RELFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBQdEJhY2tsb2dDb21wb25lbnQgfSBmcm9tICcuL3B0LWJhY2tsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnXG5pbXBvcnQgeyBQVEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wdC1pdGVtLWxpc3QvcHQtaXRlbS1saXN0LmNvbXBvbmVudCdcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbUHRCYWNrbG9nQ29tcG9uZW50XSxcbiAgICBkZWNsYXJhdGlvbnM6IFtQdEJhY2tsb2dDb21wb25lbnQsUFRJdGVtTGlzdENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUHRCYWNrbG9nTW9kdWxlIHsgfVxuIl19