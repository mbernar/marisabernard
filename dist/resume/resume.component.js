"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var resume_service_1 = require("./resume.service");
require("rxjs/add/operator/map");
var ResumeComponent = (function () {
    function ResumeComponent(resumeService) {
        this.resumeService = resumeService;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    ResumeComponent.prototype.ngAfterViewChecked = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    core_1.Component({
        selector: 'app-resume',
        templateUrl: './app/resume/resume.component.html',
        styleUrls: ['./app/resume/resume.component.css']
    }),
    __metadata("design:paramtypes", [resume_service_1.ResumeService])
], ResumeComponent);
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map