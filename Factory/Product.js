var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Designer = /** @class */ (function () {
    function Designer() {
    }
    Designer.prototype.doWork = function () {
        console.log('Making design');
    };
    return Designer;
}());
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.doWork = function () {
        console.log('Making software');
    };
    return Programmer;
}());
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.createSoftware = function () {
        var employees = this.getEmployees();
        employees.forEach(function (employee) {
            employee.doWork();
        });
    };
    return Company;
}());
var SoftwareCompany = /** @class */ (function (_super) {
    __extends(SoftwareCompany, _super);
    function SoftwareCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareCompany.prototype.getEmployees = function () {
        return [new Designer, new Programmer];
    };
    return SoftwareCompany;
}(Company));
var company = new SoftwareCompany();
company.createSoftware();
