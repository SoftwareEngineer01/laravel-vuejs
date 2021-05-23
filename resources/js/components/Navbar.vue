<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg">
            <a class="navbar-brand" href="#">APP</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> <i class="fa fa-book"></i>
                            Maestros</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item dropdown-toggle" href="#"><i class="fa fa-archive"></i>
                                    Inventario</a>
                                <ul class="submenu dropdown-menu">
                                    <router-link to="/tipo-inventarios">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-pencil-alt"></i> Tipo
                                                Inventarios</a></li>
                                    </router-link>
                                    <router-link to="/inventario">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-box-open"></i>Registrar Inventario</a></li>
                                    </router-link>
                                    <router-link to="/entrada-inventario">
                                        <li><a class="dropdown-item" href="#"><i class="fas fa-dolly-flatbed"></i>Entrada de Inventario</a></li>
                                    </router-link>
                                    <li><a class="dropdown-item" href=""> Second level 5</a></li>
                                </ul>
                            </li>
                            <router-link to="/proveedores">
                                <li><a class="dropdown-item" href="#"><i class="fas fa-boxes"></i> Proveedores</a></li>
                            </router-link>
                             <router-link to="/servicios">
                                <li><a class="dropdown-item" href="#"><i class="fas fa-toolbox"></i> Servicios</a></li>
                            </router-link>
                        </ul>
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="#"> First level 1 </a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#"> First level 2 </a></li>
                </ul>

            </div>
        </nav>
    </div>
</template>

<style>
    .bg {
        background-color: #efefefd8;
    }

    @media (min-width: 992px) {
        .dropdown-menu .dropdown-toggle:after {
            border-top: .3em solid transparent;
            border-right: 0;
            border-bottom: .3em solid transparent;
            border-left: .3em solid;
        }

        .dropdown-menu .dropdown-menu {
            margin-left: 0;
            margin-right: 0;
        }

        .dropdown-menu li {
            position: relative;
        }

        .nav-item .submenu {
            display: none;
            position: absolute;
            left: 100%;
            top: -7px;
        }

        .nav-item .submenu-left {
            right: 100%;
            left: auto;
        }

        .dropdown-menu>li:hover {
            background-color: #f1f1f1
        }

        .dropdown-menu>li:hover>.submenu {
            display: block;
        }
    }

</style>
