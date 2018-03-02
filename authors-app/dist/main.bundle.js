webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var authors_component_1 = __webpack_require__("./src/app/authors/authors.component.ts");
var author_new_component_1 = __webpack_require__("./src/app/author-new/author-new.component.ts");
var author_edit_component_1 = __webpack_require__("./src/app/author-edit/author-edit.component.ts");
var quotes_component_1 = __webpack_require__("./src/app/quotes/quotes.component.ts");
var quote_new_component_1 = __webpack_require__("./src/app/quote-new/quote-new.component.ts");
var routes = [
    { path: '', component: authors_component_1.AuthorsComponent },
    { path: 'new', component: author_new_component_1.AuthorNewComponent },
    { path: 'edit/:id', component: author_edit_component_1.AuthorEditComponent },
    { path: 'quotes/:id', component: quotes_component_1.QuotesComponent },
    { path: 'write/:id', component: quote_new_component_1.QuoteNewComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:left\">\n  <h1>\n    Quote Ranks\n  </h1>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var authors_component_1 = __webpack_require__("./src/app/authors/authors.component.ts");
var author_new_component_1 = __webpack_require__("./src/app/author-new/author-new.component.ts");
var author_edit_component_1 = __webpack_require__("./src/app/author-edit/author-edit.component.ts");
var quotes_component_1 = __webpack_require__("./src/app/quotes/quotes.component.ts");
var quote_new_component_1 = __webpack_require__("./src/app/quote-new/quote-new.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                authors_component_1.AuthorsComponent,
                author_new_component_1.AuthorNewComponent,
                quotes_component_1.QuotesComponent,
                quote_new_component_1.QuoteNewComponent,
                author_edit_component_1.AuthorEditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/author-edit/author-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-edit/author-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n\n<p>Edit this author</p>\n<div style=\"border:3px solid black; width:600px; padding:5px\">\n  <form (submit)=\"submitUpdatedAuthor()\">\n    <p>Name:</p>\n    <p *ngFor=\"let error of errors\" style=\"color:red\">{{error}}</p>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"author.name\" style=\"padding: 10px; width:250px; border: 1px solid black\">\n    <br>\n    <button (click)=\"cancel()\">Cancel</button><input type=\"submit\" value=\"Submit\">\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/author-edit/author-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AuthorEditComponent = /** @class */ (function () {
    function AuthorEditComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.author = { name: '' };
        this.errors = [];
    }
    AuthorEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var authorId = params.get('id');
            _this._httpService.showAuthor(authorId)
                .subscribe(function (responseData) {
                console.log(responseData);
                if (!responseData || responseData.stringValue) {
                    _this.errors = ['CANNOT FIND'];
                }
                else {
                    _this.author = responseData;
                }
            });
        });
    };
    AuthorEditComponent.prototype.submitUpdatedAuthor = function () {
        var _this = this;
        this._httpService.updateAuthor(this.author)
            .subscribe(function (responseData) {
            if (responseData.errors) {
                _this.errors = [];
                for (var key in responseData.errors) {
                    _this.errors.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    AuthorEditComponent.prototype.cancel = function () {
        console.log('cancel');
        this._router.navigate(['/']);
    };
    AuthorEditComponent = __decorate([
        core_1.Component({
            selector: 'app-author-edit',
            template: __webpack_require__("./src/app/author-edit/author-edit.component.html"),
            styles: [__webpack_require__("./src/app/author-edit/author-edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_1.ActivatedRoute])
    ], AuthorEditComponent);
    return AuthorEditComponent;
}());
exports.AuthorEditComponent = AuthorEditComponent;


/***/ }),

/***/ "./src/app/author-new/author-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author-new/author-new.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n\n<p>Add a new author</p>\n<div style=\"border:3px solid black; width:600px; padding:5px\">\n  <form (submit)=\"submitAuthor()\">\n    <p>Name:</p>\n    <p *ngFor=\"let error of errors\" style=\"color:red\">{{error}}</p>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"newAuthor.name\" style=\"padding: 10px; width:250px; border: 1px solid black\">\n    <br>\n    <button (click)=\"cancel()\">Cancel</button><input type=\"submit\" value=\"Submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/author-new/author-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthorNewComponent = /** @class */ (function () {
    function AuthorNewComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newAuthor = { name: "" };
        this.errors = [];
    }
    AuthorNewComponent.prototype.ngOnInit = function () {
    };
    AuthorNewComponent.prototype.submitAuthor = function () {
        var _this = this;
        console.log(this.newAuthor);
        this._httpService.postAuthor(this.newAuthor)
            .subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.errors) {
                _this.errors = [];
                for (var key in responseData.errors) {
                    _this.errors.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    AuthorNewComponent.prototype.cancel = function () {
        console.log('cancel');
        this._router.navigate(['/']);
    };
    AuthorNewComponent = __decorate([
        core_1.Component({
            selector: 'app-author-new',
            template: __webpack_require__("./src/app/author-new/author-new.component.html"),
            styles: [__webpack_require__("./src/app/author-new/author-new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AuthorNewComponent);
    return AuthorNewComponent;
}());
exports.AuthorNewComponent = AuthorNewComponent;


/***/ }),

/***/ "./src/app/authors/authors.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authors/authors.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/new']\">Add an author</a>\n\n<p>We have quotes by:</p>\n\n<table>\n  <thead>\n    <th>Author</th>\n    <th>Actions Available</th>\n  </thead>\n  <tr *ngFor=\"let author of authors\">\n    <td>{{author.name}}</td>\n    <td><button [routerLink]=\"['/quotes', author._id]\">View quotes</button> <button [routerLink]=\"['/edit', author._id]\">Edit</button></td>\n  </tr>\n</table>\n\n<!-- <button (click)=\"delete(author._id)\">DELETE</button> -->"

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(_httpService) {
        this._httpService = _httpService;
        this.authors = [];
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        this.getAllAuthors();
    };
    AuthorsComponent.prototype.getAllAuthors = function () {
        var _this = this;
        this._httpService.getAuthors()
            .subscribe(function (responseData) {
            _this.authors = responseData;
        });
    };
    AuthorsComponent.prototype.delete = function (id) {
        var _this = this;
        console.log('delete this author');
        this._httpService.deleteAuthor(id)
            .subscribe(function (responseData) {
            _this.getAllAuthors();
        });
    };
    AuthorsComponent = __decorate([
        core_1.Component({
            selector: 'app-authors',
            template: __webpack_require__("./src/app/authors/authors.component.html"),
            styles: [__webpack_require__("./src/app/authors/authors.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
exports.AuthorsComponent = AuthorsComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.postAuthor = function (authorObj) {
        console.log('service.postAuthor');
        console.log(authorObj);
        return this._http.post('/api/authors', authorObj);
    };
    HttpService.prototype.getAuthors = function () {
        console.log('service.getAuthors');
        return this._http.get('/api/authors');
    };
    HttpService.prototype.showAuthor = function (id) {
        console.log('service.showAuthor');
        return this._http.get('/api/authors/' + id);
    };
    HttpService.prototype.putQuote = function (quoteObj, id) {
        console.log('service.postQuote');
        quoteObj.authId = id;
        return this._http.put('/api/quote', quoteObj);
    };
    HttpService.prototype.putUpVote = function (quoteObj, id) {
        console.log('service.putUpVote');
        quoteObj.authorId = id;
        console.log('quoteObj: ', quoteObj);
        return this._http.put('/api/upVote', quoteObj);
    };
    HttpService.prototype.putDownVote = function (quoteObj, id) {
        console.log('service.putDownVote');
        quoteObj.authorId = id;
        console.log('quoteObj: ', quoteObj);
        return this._http.put('/api/downVote', quoteObj);
    };
    HttpService.prototype.removeQuote = function (quoteObj, id) {
        console.log('service.removeQuote');
        quoteObj.authorId = id;
        return this._http.put('/api/delete/quote', quoteObj);
    };
    HttpService.prototype.updateAuthor = function (authorObj) {
        console.log('service.updateAuthor');
        return this._http.put('/api/authors', authorObj);
    };
    HttpService.prototype.deleteAuthor = function (id) {
        console.log('service.deleteAuthor');
        return this._http.delete('/api/authors/' + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/quote-new/quote-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quote-new/quote-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\">\n  <a [routerLink]=\"['/']\">Home</a>\n\n  <p>Provide a quote by {{author.name}}</p>\n  <div style=\"border:3px solid black; width:600px; padding:5px\">\n    <form (submit)=\"submitQuote()\">\n      <p>Quote:</p>\n      <p *ngFor=\"let error of errors\" style=\"color:red\">{{error}}</p>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"newQuote.content\" style=\"padding: 10px; width:250px; border: 1px solid black\">\n      <br>\n      <button (click)=\"cancel()\">Cancel</button><input type=\"submit\" value=\"Submit\">\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quote-new/quote-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var QuoteNewComponent = /** @class */ (function () {
    function QuoteNewComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.newQuote = { content: "" };
        this.errors = [];
    }
    QuoteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.authorId = params.get('id');
            _this._httpService.showAuthor(_this.authorId)
                .subscribe(function (responseData) {
                console.log('author object: ', responseData);
                if (!responseData || responseData.stringValue) {
                    _this.errors = ['CANNOT FIND'];
                }
                else {
                    _this.author = responseData;
                }
            });
        });
    };
    QuoteNewComponent.prototype.submitQuote = function () {
        var _this = this;
        console.log(this.newQuote);
        this._httpService.putQuote(this.newQuote, this.authorId)
            .subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.errors) {
                _this.errors = [];
                for (var key in responseData.errors) {
                    _this.errors.push(responseData.errors[key].message);
                }
            }
            else {
                _this._router.navigate(['/quotes', _this.authorId]);
            }
        });
    };
    QuoteNewComponent = __decorate([
        core_1.Component({
            selector: 'app-quote-new',
            template: __webpack_require__("./src/app/quote-new/quote-new.component.html"),
            styles: [__webpack_require__("./src/app/quote-new/quote-new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_1.ActivatedRoute])
    ], QuoteNewComponent);
    return QuoteNewComponent;
}());
exports.QuoteNewComponent = QuoteNewComponent;


/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"author\">\n  <a [routerLink]=\"['/']\">Home</a> <a [routerLink]=\"['/write', author._id]\">Add an quote</a>\n\n  <p>Quotes by {{author.name}}:</p>\n\n  <table>\n    <thead>\n      <th>Quote</th>\n      <th>Votes</th>\n      <th>Actions Available</th>\n    </thead>\n    <!-- Logic of ngFor not complete. Change format of schema? -->\n    <tr *ngFor=\"let quote of quotes\">\n      <td>{{quote.content}}</td>\n      <td>{{quote.votes}}</td>\n      \n      <td><button (click)=\"upVote(quote, author._id)\">Vote up</button> <button (click)=\"downVote(quote, author._id)\">Vote down</button> <button (click)=\"deleteQuote(quote, author._id)\">Delete</button></td>\n    </tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.errors = [];
    }
    QuotesComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    QuotesComponent.prototype.fetchData = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            var authorId = params.get('id');
            _this._httpService.showAuthor(authorId)
                .subscribe(function (responseData) {
                console.log('author object: ', responseData);
                if (!responseData || responseData.stringValue) {
                    _this.errors = ['CANNOT FIND'];
                }
                else {
                    _this.author = responseData;
                    console.log(_this.author);
                    _this.quotes = _this.author.quotes;
                }
            });
        });
    };
    QuotesComponent.prototype.upVote = function (quoteObj, authorId) {
        var _this = this;
        console.log('upVote quote:', quoteObj, 'upVote author: ', authorId);
        this._httpService.putUpVote(quoteObj, authorId)
            .subscribe(function (responseData) {
            console.log('got response', responseData);
            if (responseData.errors) {
                _this.errors = [];
                for (var key in responseData.errors) {
                    _this.errors.push(responseData.errors[key].message);
                }
            }
            else {
                _this.fetchData();
            }
        });
    };
    QuotesComponent.prototype.downVote = function (quoteObj, authorId) {
        var _this = this;
        console.log('upVote quote:', quoteObj, 'upVote author: ', authorId);
        this._httpService.putDownVote(quoteObj, authorId)
            .subscribe(function (responseData) {
            console.log('got response', responseData);
            if (responseData.errors) {
                _this.errors = [];
                for (var key in responseData.errors) {
                    _this.errors.push(responseData.errors[key].message);
                }
            }
            else {
                _this.fetchData();
            }
        });
    };
    QuotesComponent.prototype.deleteQuote = function (quoteObj, authorId) {
        var _this = this;
        console.log('upVote quote:', quoteObj, 'delete from author: ', authorId);
        this._httpService.removeQuote(quoteObj, authorId)
            .subscribe(function (responseData) {
            console.log('got response', responseData);
            if (responseData.errors) {
                _this.errors = [];
                for (var key in responseData.errors) {
                    _this.errors.push(responseData.errors[key].message);
                }
            }
            else {
                _this.fetchData();
            }
        });
    };
    QuotesComponent = __decorate([
        core_1.Component({
            selector: 'app-quotes',
            template: __webpack_require__("./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__("./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_1.ActivatedRoute])
    ], QuotesComponent);
    return QuotesComponent;
}());
exports.QuotesComponent = QuotesComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map