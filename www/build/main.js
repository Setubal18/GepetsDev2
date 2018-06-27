webpackJsonp([1],{

/***/ 104:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 104;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/test-test/test-test.module": [
		255,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 145;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.dataService.getData().then(function (todos) {
            if (todos) {
                _this.items = todos;
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    HomePage.prototype.saveItem = function (item) {
        this.items.push(item);
        this.dataService.save(this.items);
    };
    HomePage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n  	<ion-title style="text-align: center">\n  		GepetsDev\n  	</ion-title>\n  	<ion-buttons end>\n  		<button ion-button icon-only (click)="addItem()"><ion-icon name="add-circle"></ion-icon></button>\n  	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click)="viewItem(item)">{{item.nome}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_data__["a" /* Data */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddItemPage = (function () {
    function AddItemPage(nav, view, formBuilder) {
        this.nav = nav;
        this.view = view;
        this.formBuilder = formBuilder;
        this.hoje = Date.now();
        this.idade = this.hoje - this.dtnascimento;
        this.erroNome = false;
        this.erroGenero = false;
        this.erroPeso = false;
        this.erroAltura = false;
        this.erroDtNascimento = false;
        this.formCadastro = this.formBuilder.group({
            nome: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            genero: [""],
            peso: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            altura: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dtnascimento: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    AddItemPage.prototype.Validator = function () {
        var _a = this.formCadastro.controls, nome = _a.nome, peso = _a.peso, altura = _a.altura, dtnascimento = _a.dtnascimento;
        if (!this.formCadastro.valid) {
            if (!nome.valid) {
                this.erroNome = true;
            }
            else {
                this.erroNome;
            }
            if (!peso.valid) {
                this.erroPeso = true;
            }
            else {
                this.erroPeso;
            }
            if (!altura.valid) {
                this.erroAltura = true;
            }
            else {
                this.erroAltura;
            }
            if (!dtnascimento.valid) {
                this.erroDtNascimento = true;
            }
            else {
                this.erroDtNascimento;
            }
        }
    };
    AddItemPage.prototype.saveItem = function () {
        var newItem = {
            nome: this.nome,
            genero: this.genero,
            dtnascimento: this.dtnascimento,
            altura: this.altura,
            peso: this.peso,
            idade: this.idade
        };
        this.view.dismiss(newItem);
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    return AddItemPage;
}());
AddItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-item',template:/*ion-inline-start:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\pages\add-item\add-item.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n  	<ion-title style="text-align: center">\n  	  Cadastro\n  	</ion-title>\n    	<ion-buttons end>\n    		<button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    	</ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="formCadastro" (ngSubmit)="Validator()" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Nome:</ion-label>\n        <ion-input formControlName="nome" [(ngModel)]="nome" type="text" placeholder="Nome"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'nome\').errors && formCadastro.get(\'nome\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'nome\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Data de nascimento:</ion-label>\n        <ion-input formControlName="dtnascimento" [(ngModel)]="dtnascimento" type="date" placeholder="Data nascimento"></ion-input > <!-- o ngModel e para passar os dados pra .ts-->\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'dtnascimento\').errors && formCadastro.get(\'dtnascimento\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'dtnascimento\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n      <ion-item>\n        <ion-label>Genero</ion-label>\n        <ion-select>\n          <ion-option value="f">Femenino</ion-option>\n          <ion-option value="m">Masculino</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Peso:</ion-label>\n        <ion-input formControlName="peso" [(ngModel)]="peso" type="number" placeholder="Peso"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'peso\').errors && formCadastro.get(\'peso\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'peso\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Altura:</ion-label>\n        <ion-input formControlName="altura" [(ngModel)]="altura" type="number" placeholder="Altura"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formCadastro.get(\'altura\').errors && formCadastro.get(\'altura\').dirty">\n        <p color="danger" ion-text *ngIf="formCadastro.get(\'altura\').hasError(\'required\')">Campo Obrigatorio</p>\n      </ion-item>\n    </ion-list>\n    <div padding>\n\n	<button  ion-button color="secondary"  type="submit" (click)="saveItem()" [disabled]="formCadastro.invalid">Iniciar avaliação</button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\pages\add-item\add-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AddItemPage);

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailPage = (function () {
    function ItemDetailPage(navParams) {
        this.navParams = navParams;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.nome = this.navParams.get('item').nome;
        this.description = this.navParams.get('item').dtnascimento;
    };
    return ItemDetailPage;
}());
ItemDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\pages\item-detail\item-detail.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      {{nome}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      {{description}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\pages\item-detail\item-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = (function () {
    function Data(storage) {
        this.storage = storage;
    }
    Data.prototype.getData = function () {
        return this.storage.get('todos');
    };
    Data.prototype.save = function (data) {
        this.storage.set('todos', data);
    };
    return Data;
}());
Data = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], Data);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(210);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_item_add_item__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_item_detail_item_detail__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_item_add_item__["a" /* AddItemPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_item_detail_item_detail__["a" /* ItemDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/test-test/test-test.module#TestTestPageModule', name: 'TestTestPage', segment: 'test-test', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_item_add_item__["a" /* AddItemPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_item_detail_item_detail__["a" /* ItemDetailPage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_data__["a" /* Data */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\joaovm\Documents\Modelo\GepetsDev3\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[190]);
//# sourceMappingURL=main.js.map