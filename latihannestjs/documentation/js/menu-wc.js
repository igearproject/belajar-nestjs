'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihannestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' :
                                            'id="xs-controllers-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' :
                                        'id="xs-injectables-links-module-AppModule-dc66a896640517489e7df7e5af94f376be3deee9bdd3aad3db860143085f737cc5d56678ca3b638cfd882028d2d39dd1933cde9824bd729ec26eab6c2954f8f9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' :
                                            'id="xs-controllers-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' :
                                        'id="xs-injectables-links-module-AuthModule-c7f73ec54967900620d5ca4c020b38ceec9afb38164f40c4a4bd6c7830301d29a7997a7861d9bcd5cd732f6edecb1c546b90fe5c5bb369bbb6e1bc1bcbf73f02"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' :
                                            'id="xs-controllers-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' :
                                        'id="xs-injectables-links-module-SchoolModule-0f12b61ebc3d93c74d9b7d621003d2531f66f758a5426acd8ab051f6d42597f7574e844e7f06b4d162787a974307c806b07d148305fec4cf932cc6e2d760cf19"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' :
                                            'id="xs-controllers-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' :
                                        'id="xs-injectables-links-module-TaskModule-c092acd0746944d7c5d5c244efae23dac2181520739cc65007c5b6188ccff368cdebcd6125a046af90f14bcd55e7ae654b242b4e14975f2966262e16d57a073a"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/task.html" data-type="entity-link" >task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});