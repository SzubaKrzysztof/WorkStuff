<?php 
$pageType = 'search';

include 'header.php';
?>
    <!-- side menu categories -->
    <aside class="meny-konesso" style="display: none">
        <!-- <div class="close" data-meny-close="true">
            <i class="zwicon-close"></i>
        </div> -->
        <div class="tabs">
            <ul class="nav">
                <li class="item active" data-tab="Menu" data-meny-open="true"><i class="zwicon-hamburger-menu"></i></li>
                <li class="item" data-tab="User" data-meny-open="true"><i class="zwicon-user"></i></li>
                <li class="item" data-tab="Search" data-meny-open="true"><i class="zwicon-search"></i></li>
                <li class="item" data-tab="Fav" data-meny-open="true"><i class="zwicon-heart"></i></li>
                <li class="item" data-tab="Cart" data-meny-open="true"><i class="zwicon-shopping-cart"></i></li>
            </ul>
            <div class="content">
                <div class="close-panel">
                     <div class="block">
                        <i></i>
                        <a href="#" class="title"></a>
                     </div>
                    <i class="zwicon-close"></i>
                </div>
                <div class="wrapper active" id="Menu">
                    <div class="menuJSON">
                    </div>
                </div>
                <ul class="wrapper" id="User">
                    <li class="item">
                        <a class="your_account_link" href="/login.php" title="">
                            <i class="zwicon-cog"></i>
                            <span>Ustawienia konta</span>
                        </a>
                    </li>
                    <li class="item">
                        <a class="order_status_link" href="/order-open.php" title="">
                            <i class="zwicon-package"></i>
                            <span>Sprawdź status zamówienia</span>
                        </a>
                    </li>
                    <li class="item">
                        <a class="client_card_link" href="https://www.konesso.pl/login.php" title="">
                            <i class="zwicon-diamond"></i>
                            <span>Karta stałego klienta</span>
                        </a>
                    </li>
                    <li class="item">
                        <a class="rabates_link" href="/client-rebate.php" title="">
                            <i class="zwicon-sale-badge"></i>
                            <span>Rabaty</span>
                        </a>
                    </li>
                    <li class="item">
                        <a class="logout_link" href="/login.php?operation=logout" title="">
                            <i class="zwicon-sign-out"></i>
                            <span>Wyloguj się</span>
                        </a>
                    </li>
                </ul>
                <div class="wrapper" id="Search">
                    <form action="/search.php" method="get">
                        <input type="text" name="text" class="input">
                        <button class="submit btn" type="submit"><i class="zwicon-search"></i></button>
                    </form>
                    <div class="products">
                        <?php
                            $products = [
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ]
                            ];
                            foreach($products as $p) {
                                echo '<a href="#" class="item">
                                        <div class="image">
                                            <img src="'.$p['img'].'" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="title">'.$p['title'].'</div>
                                            <div class="price-wrapper">';
                                            if (isset($p['discount'])) {
                                                echo '<span class="discount">'.$p['discount'].'</span>
                                                    <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                            } else {
                                                echo '<b class="price">'.$p['price'].'</b>';
                                            };
                                            echo '
                                            </div>
                                        </div>
                                    </a>';
                                }
                        ?>
                    </div>
                </div>
                <div class="wrapper" id="Fav">
                  <div class="basket d-flex align-items-center justify-content-center" style="height: 85vh">
                     <div class="empty">
                        <span>Twoja lista jest pusta</span>
                        <i class="zwicon-heart"></i>
                        <a class="btn black" href="/basketedit.php?mode=2">Przejdź do ulubionych</a>
                     </div>
                  </div>
                </div>
                <div class="wrapper" id="Cart">
                </div>
            </div>
        </div>
    </aside>
    <div class="meny-arrow"></div>
    <!-- side menu categories -->

    <div id="search_page" class="meny-content">
        <div id="MainHeader">
            <!-- header -->
            <header class="header-main d-flex align-items-center justify-content-evenly">
                <div class="logo d-flex justify-content-md-center col-md-2 col-6">
                     <a href="/">
                        <svg class="logo-desktop">
                              <use xlink:href="img/konesso_sprites.svg#konesso_logo"></use>
                        </svg>
                        <svg class="logo-mobile">
                           <use xlink:href="img/konesso_sprites.svg#konesso_logo_notagline"></use>
                     </svg>
                     </a>
                </div>
                <div class="search-bar col-md-6 col-2">
                    <form action="" method="get">
                        <input class="search-input" type="text" name="text" autocomplete="off" placeholder=""></input>
                        <a href="/search.php" class="submit d-flex flex-column" type="sumbit">
                            <i class="zwicon-search"></i>
                            <span class="text">Szukaj</span>
                        </a>
                    </form>
                </div>
                <div class="search-window">
                    <div class="wrapper">                                                                                                                                                                                                             
                        <div class="rec-categories">
                            <div class="block">
                                <b>Polecane kategorie</b>
                                <ul>
                                    <li><a href="#">Kawa <i class="zwicon-chevron-right"></i> Kawa ziarnista <i class="zwicon-chevron-right"></i> Lavazza</a></li>
                                    <li><a href="#">Kawa <i class="zwicon-chevron-right"></i> Kawa mielona</a></li>
                                    <li><a href="#">Kawa <i class="zwicon-chevron-right"></i> Kawa mielona <i class="zwicon-chevron-right"></i> Etno</a></li>
                                    <li><a href="#">Kawa <i class="zwicon-chevron-right"></i> Kawa ziarnista <i class="zwicon-chevron-right"></i>Lavazza</a></li>
                                    <li><a href="#">Kawa <i class="zwicon-chevron-right"></i> Kawa mielona</a></li>
                                    <li><a href="#">Kawa <i class="zwicon-chevron-right"></i> Kawa mielona <i class="zwicon-chevron-right"></i> Etno</a></li>
                                </ul>
                            </div>
                            <div class="club">
                                <b>Poznaj Klub Konesso</b>
                                <div class="companies">
                                    <img src="img/jura.png" alt="">
                                    <img src="img/lavazza.png" alt="">
                                    <img src="img/jura.png" alt="">
                                    <img src="img/lavazza.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="favourites">
                            <b>Najczęciej wyszukiwane</b>
                            <ul>
                                <li><a href="#">Kawa ziarnista</a></li>
                                <li><a href="#">Lavaza oro 1kg</a></li>
                                <li><a href="#">Miód palony w kawie</a></li>
                                <li><a href="#">Ekspress do domu</a></li>
                                <li><a href="#">Młynek elektryczny do kawy milonej</a></li>
                                <li><a href="#">Kawa ziarnista</a></li>
                                <li><a href="#">Lavazza oro 1kg rita oro</a></li>
                                <li><a href="#">Kawa z africa</a></li>
                                <li><a href="#">Miód palony w kawie</a></li>
                            </ul>
                        </div>
                        <div class="rec-products">
                            <b>Polecane produkty</b>
                            <div class="products">
                            <?php
                            $products = [
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                ]
                            ];
                            foreach($products as $p) {
                                echo '<a href="#" class="item">
                                        <div class="image">
                                            <img src="'.$p['img'].'" alt="">
                                        </div>
                                        <div class="info">
                                            <div class="title">'.$p['title'].'</div>
                                            <div class="price-wrapper">';
                                            if (isset($p['discount'])) {
                                                echo '<span class="discount">'.$p['discount'].'</span>
                                                    <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                            } else {
                                                echo '<b class="price">'.$p['price'].'</b>';
                                            };
                                            echo '
                                            </div>
                                        </div>
                                    </a>';
                                }
                            ?>
                            </div>
                        </div>
                        <div class="promo">
                            <img src="img/search-promo.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="main-overlay"></div>
                <div class="header-items d-flex align-items-center col-md-4 col-6">
                    <div class="contact-block">
                        <div class="item-contact">
                            <i class="zwicon-headphone trigger-contact"></i>
                            <a href="tel:+177770130" class="text">17 777 01 30</a>
                        </div>
                        <div class="content">
                            <b>Popularne tematy</b>
                            <ul>
                                <li><a href="#">Status zamówienia</a></li>
                                <li><a href="#">Kody rabatowe</a></li>
                                <li><a href="#">Darmowa dostawa od 300 zł</a></li>
                                <li><a href="#">14 dni na zwrot</a></li>
                                <li><a href="#">Kredyt kupiecki dla firm</a></li>
                                <li><a href="#">Raty</a></li>
                                <li><a href="#">Leasing</a></li>
                                <li><a href="#">Najczęściej zadawane pytania</a></li>
                            </ul>
                            <b>Skontaktuj się z nami</b>
                            <ul class="contact">
                                <li>
                                    <i class="zwicon-notebook"></i>
                                    <a href="#">Kontakt</a>
                                </li>
                                <li>
                                    <i class="zwicon-mail"></i>
                                    <a href="mailto: sklep@konesso.pl">sklep@konesso.pl</a>
                                </li>
                                <li>
                                    <i class="zwicon-phone"></i>
                                    <div class="number">
                                        <a href="tel: +177770130">17 777 01 30</a>
                                        <span>pon. - pt. 8:00 - 16:00</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="line"></div>
                    <a class="item-user" data-meny-open="true" data-tab="User" href="#">
                        <i class="zwicon-user"></i>
                        <span class="text">Twoje konto</span>
                    </a>
                    <a class="item-fav" data-meny-open="true" data-tab="Fav" href="#">
                        <i class="zwicon-heart"></i>
                        <span class="text">Twoja lista</span>
                    </a>
                    <a class="item-search" href="#" data-meny-open="true" data-tab="Search" data-title="Wyszukaj">
                        <i class="zwicon-search"></i>
                        <span class="text">Szukaj</span>
                    </a>
                    <a class="item-cart" data-meny-open="true" data-tab="Cart" data-title="Koszyk" href="#">
                        <i class="zwicon-shopping-cart"></i>
                        <span class="text">Koszyk</span>
                    </a>
                </div>
            </header>
            <!-- header -->

            <!-- menu -->
            <div class="menu-main">
                <button class="menu-trigger">
                    <i class="zwicon-hamburger-menu"></i>
                    <span class="text">Kategorie</span>
                    <!-- side menu konesso -->
                        <aside class="menu-categories">
                            <ul class="list">
                                <li class="back"><i class="zwicon-chevron-left"></i>Schowaj</li>
                                
                            </ul>
                            <div class="newsletter">
                                <form action="#">
                                    <input type="email" placeholder="Twój adres e-mail">
                                    <span class="btn green">Zapisz się</span>
                                </form>
                            </div>
                        </aside>
                    <!-- side menu konesso -->
                    <!-- overlay -->
                        <div class="main-overlay">
                        </div>
                    <!-- overlay -->
                </button>
                <ul class="menu-bar">
                    <li class="bar">
                        <a href="#"><i class="icon-coffee"></i>Kawy</a>
                    </li>
                    <li class="bar">
                        <a href="#"><i class="icon-tea"></i>Herbaty</a>
                    </li>
                    <li class="bar">
                        <a href="#"><i class="icon-express"></i>Ekspresy</a>
                    </li>
                    <li class="bar">
                        <a href="#"><i class="icon-mill"></i>Młynki</a>
                    </li>
                </ul>
                <div class="menu-promo">
                    <div class="slider" data-component="Slider" data-navigation="true" data-loop="true" data-arrows="thin">
                        <a href="#" class="item">
                            Darmowa dostawa 
                            <span class="label">Nie przegap: <div class="timer" data-component="CountDownTimer" data-time="2023-07-25"></div></span>
                        </a>
                        <a href="#" class="item">
                            Prezenty do ekspresów
                            <span class="label">Nie przegap: <div class="timer" data-component="CountDownTimer" data-time="2023-07-28"></div></span>
                        </a>
                        <a href="#" class="item">
                            Znizki na kawę
                            <span class="label">Nie przegap: <div class="timer" data-component="CountDownTimer" data-time="2023-07-27"></div></span>
                        </a>
                    </div>
                </div>
            </div>
            <!-- menu -->
        </div>

        <div class="container-main">
            <!-- promo slider -->
            <div class="promo-slider">
                <div class="slider" data-component="Slider" data-pagination="true" data-navigation="true" data-arrows="banner" data-space-between="20" data-showMoreMobile="true">
                    <div class="item" data-label="Lavazza 30% taniej">
                        <a href="#">
                            <img src="img/search-banner.png" alt="">
                        </a>
                    </div>
                    <div class="item" data-label="Jura X10">
                        <a href="#">
                            <img src="img/search-banner.png" alt="">
                        </a>
                    </div>
                    <div class="item" data-label="Zestaw baristy">
                        <a href="#">
                            <img src="img/search-banner.png" alt="">
                        </a>
                    </div>
                    <div class="item" data-label="Darmowa dostawa">
                        <a href="#">
                            <img src="img/search-banner.png" alt="">
                        </a>
                    </div>
                    <div class="item" data-label="Wyjątkowe prezenty">
                        <a href="#">
                            <img src="img/search-banner.png" alt="">
                        </a>
                    </div>           
                </div>
            </div>
            <!-- promo slider -->

            <!-- path -->
            <div class="path-main">
                <a href="#">Kawy</a>
                <i class="zwicon-chevron-right"></i>
                <a href="#">Rodzaj</a>
                <i class="zwicon-chevron-right"></i>
                <a href="#">Kawy Mielone</a>
                <i class="zwicon-chevron-right"></i>
                <a href="#">Jesteś tu</a>
            </div>
            <!-- path -->

            <!-- panel -->
            <div class="search-panel">
                <aside class="aside-panel">
                    <div class="panel-categories">

                    </div>
                    <div class="filter-panel">
                     <div class="title-wrapper">
                        <h3>Filtry</h3>
                        <button class="clear-filters">Wyczyść filtry</button>
                     </div>
                     <div class="separator"></div>
                     <form action="#" class="form-filter" id="filter-form">
                        <b>Cena</b>
                        <div class="price-filter">
                            <div class="wrapper">
                                <div class="price-input">
                                    <div class="field">
                                        <span>Od:</span>
                                        <input type="number" class="input-min" value="1">
                                    </div>
                                    <div class="field">
                                        <span>Do:</span>
                                        <input type="number" class="input-max" value="10000">
                                    </div>
                                </div>
                                <div class="slider">
                                    <div class="progress"></div>
                                </div>
                                <div data-filtername="priceRange" class="range-input">
                                    <input type="range" class="range-min" min="0" max="10000" value="1" step="10">
                                    <input type="range" class="range-max" min="0" max="10000" value="10000" step="10">
                                </div>
                            </div>
                        </div>
                        <div class="separator"></div>
                        <div class="accesibility-filter">
                           <ul>
                              <li class="name" data-filtername="availability"><b>Dostępność</b></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="dostępne"><span class="checkmark"></span><div class="for">dostępne <b>(1404)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="niedostępne"><span class="checkmark"></span><div class="for">niedostępne <b>(215)</b></div></label></li>
                           </ul>
                        </div>
                        <div class="separator"></div>
                        <div class="accesibility-filter">
                           <ul>
                              <li class="name" data-filtername="grainType"><b>Typ ziarna</b></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="pełne"><span class="checkmark"></span><div class="for">pełne <b>(1404)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="niepełne"><span class="checkmark"></span><div class="for">niepełne <b>(215)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="połowa"><span class="checkmark"></span><div class="for">połowa <b>(215)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="pełne"><span class="checkmark"></span><div class="for">pełne <b>(1404)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="niepełne"><span class="checkmark"></span><div class="for">niepełne <b>(215)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="połowa"><span class="checkmark"></span><div class="for">połowa <b>(215)</b></div></label></li>
                           </ul>
                        </div>
                        <div class="separator"></div>
                        <div class="accesibility-filter">
                           <ul>
                              <li class="name" data-filtername="roastMethod"><b>Metoda palenia</b></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="jakaś metoda"><span class="checkmark"></span><div class="for">jakaś metoda <b>(1404)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="inna metoda"><span class="checkmark"></span><div class="for">inna metoda <b>(215)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="pełne"><span class="checkmark"></span><div class="for">pełne <b>(1404)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="niepełne"><span class="checkmark"></span><div class="for">niepełne <b>(215)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="połowa"><span class="checkmark"></span><div class="for">połowa <b>(215)</b></span></label></li>
                           </ul>
                        </div>
                        <div class="separator"></div>
                        <div class="accesibility-filter">
                           <ul>
                              <li class="name" data-filtername="coffeeType"><b>Typ kawy</b></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica <b>(1404)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta <b>(215)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica <b>(1404)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta <b>(215)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica <b>(1404)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta <b>(215)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica <b>(1404)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta <b>(215)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica <b>(1404)</b></div></label></li>
                              <li class="filter-hidden hidden"><label class="checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta <b>(215)</b></div></label></li>
                           </ul>
                        </div>
                        <div class="separator"></div>
                        <div class="accesibility-filter">
                           <ul>
                              <li class="name" data-filtername="roastLevel"><b>Poziom palenia</b></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="słabo palone"><span class="checkmark"></span><div class="for">słabo palone <b>(1404)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="średnio palone"><span class="checkmark"></span><div class="for">średnio palone <b>(215)</b></div></label></li>
                              <li><label class="checkbox"><input type="checkbox" data-filter="mocno palone"><span class="checkmark"></span><div class="for">mocno palone <b>(2215)</b></div></label></li>
                           </ul>
                        </div>
                     </form>
                    </div>
                </aside>
                <div class="panel-products">
                    <div class="wrapper">
                        <div class="info">
                            <div class="title">
                                <b>Rodzaj <div class="product-qty">(123)</div></b>
                                <span class="info-additional" data-modal><i class="zwicon-info-circle"></i> Informacje dodatkowe</span>
                            </div>
                            <div class="sort-wrapper">
                                <div class="view">
                                    <i class="zwicon-layout-4 block-view"></i>
                                    <i class="zwicon-three-h one-view"></i>
                                </div>
                                <button class="btn sort"><i class="zwicon-sort-amount-down"></i> 
                                Sortuj
                                <div class="sort-block">
                                    <a href="#">Popularność</a>
                                    <a href="#">Cena: od najniższej</a>
                                    <a href="#">Cena: od najwyższej</a>
                                    <a href="#">Nowości</a>
                                </div>
                                </button>
                                <div class="filter-wrapper">

                                </div>
                            </div>
                        </div>
                        <div class="filter-buttons">
                           <button class="btn black filter" data-modal><i class="zwicon-filter"></i> Filtruj</button>
                        </div>
                        <div class="amount">
                            <div class="qty">
                                <span>Liczba produktów: 123</span>
                            </div>
                            <div class="pagination">
                                <div class="onpage">
                                    <span>Pokaż na stronie:</span>
                                        <a href="#"><b class="number">25</b></a>
                                        <a href="#"><b class="number">50</b></a>
                                        <a href="#"><b class="number">100</b></a>
                                    <span>produktów</span>
                                </div>
                                <div class="pages">
                                <i class="zwicon-arrow-left"></i>
                                    <b>1</b>
                                    <span>z</span>
                                    <b>12</b>
                                <i class="zwicon-arrow-right"></i>
                                </div>
                            </div>
                       </div>
                       <div class="subcategories">
                            <button class="btn"><i class="icon-express"></i> Ekspresy automatyczne</button>
                            <button class="btn"><i class="icon-express"></i> Ekspresy przelewowe</button>
                            <button class="btn"><i class="icon-express"></i> Ekspresy kolbowy</button>
                            <button class="btn"><i class="icon-express"></i> Ekspresy ciśnieńiowy</button>
                            <button class="btn"><i class="icon-express"></i> Ekspresy dźwigńiowy</button>
                       </div>
                       <div class="active-filters">
                       </div>
                    </div>
                    <div class="products">
                        <?php
                            $products = [
                                [
                                    'title' => 'KAWA ZIARNISTA SUPRACAFE ECUATORIAL 100% ARABICA 1KG',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 4.5
                                ],
                                [
                                    'title' => 'Kawa ziarnista Costa Coffee Signature Blend 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 4
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara DODICIGRANCRU 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Kawa ziarnista Bazzara PIACEREPURO 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Kawa ziarnista Caffe Grano x Konesso Espresso Blend 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => true,
                                    'opinion' => 4.5
                                ],
                                [
                                    'title' => 'Kawa ziarnista LaCava Kolumbia La Isleta Espresso 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 3.7
                                ],
                                [
                                    'title' => 'Kawa ziarnista LaCava Blue Espresso 250g',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '40,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 2
                                ],
                                [
                                    'title' => 'Zestaw prezentowy COFFEE PLANT ze złoconym kubkiem',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Kawa ziarnista LaCava Blue 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 4.5
                                ],
                                [
                                    'title' => 'Kawa ziarnista Caffe del Faro Espresso Italiano 1kg',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 4
                                ],
                                [
                                    'title' => 'Nazwa 3',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Nazwa 4',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Nazwa',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 4.5
                                ],
                                [
                                    'title' => 'Nazwa 2',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 4
                                ],
                                [
                                    'title' => 'Nazwa 3',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Nazwa 4',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Nazwa',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 4.5
                                ],
                                [
                                    'title' => 'Nazwa 2',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 4
                                ],
                                [
                                    'title' => 'Nazwa 3',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Nazwa 4',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 5
                                ],
                                [
                                    'title' => 'Nazwa',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => false,
                                    'opinion' => 4.5
                              ],
                              [
                                    'title' => 'Nazwa 2',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 4
                              ]       
                            ];
                            foreach($products as $p) {
                                $when = strtotime($p['roastTime']);
                                $current = time();
                                $difference = $current - $when;
                                echo '<div class="item SingleProductSearch">
                                 <div class="mobile-title">
                                    <div class="tips">';
                                    if ($p['roastTime'] != 'false' || !isset($p['roastTime'])) {
                                          echo '<div class="item date" data-tippy-content="Data wypalenia kawy: '.$p['roastTime'].'">
                                                <i class="zwicon-sun"></i>
                                                <span>'.floor($difference / 86400).' dni temu</span>
                                             </div>';
                                    }
                                    if ($p['recomend'] != 'false' || !isset($p['recomend'])) {
                                          echo '<div class="item recomend">
                                                <i class="zwicon-thumbs-up"></i>
                                                <span>Polecany</span>
                                             </div>';
                                    }
                                    if ($p['freeDelivery'] != 'false' || !isset($p['freeDelivery'])) {
                                          echo '<div class="item delivery">
                                                <i class="zwicon-package"></i>
                                                <span>Darmowa dostawa</span>
                                             </div>';
                                    }                                                                   
                                    echo '</div>
                                    <a href="/product.php" class="title">
                                       '.$p['title'].'
                                    </a>
                                    <div class="opinion">
                                        <div class="stars-wrapper">';
                                        for ($i = 1; $i <= 5; $i++) {
                                              if (floor($p['opinion']) % $i < floor($p['opinion'])) {
                                                 echo '<i class="icon-star-solid"></i>';
                                              } else if ($p['opinion'] <= $i - 1 && $p['opinion'] > $i - 1) {
                                                 echo '<i class="icon-star-half-solid"></i>';
                                              } else {
                                                 echo '<i class="icon-star-regular"></i>';
                                              }
                                        };
                                        echo '</div>
                                        <div class="opinions">
                                              '.$p['opinion'].' ('.strlen($p['opinion']).' ';
                                              if (strlen($p['opinion']) == 1) {
                                                 echo 'opinia)';
                                              } else if (strlen($p['opinion']) > 1 && strlen($p['opinion']) < 5) {
                                                 echo 'opinii)';
                                              } else if (strlen($p['opinion']) > 4) {
                                                 echo 'opinij)';
                                              }
                                        echo '</div>
                                    </div>
                                 </div>
                                 <div class="main-wrapper">
                                 <a href="/product.php" class="image">  
                                 <img src="'.$p['img'].'" alt=""> 
                                 <div class="holder">
                                    <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych">
                                        <i class="zwicon-heart"></i>
                                    </button>
                                    <button class="btn product add-to-basket" data-tippy-content="Dodaj do koszyka">
                                       <i class="zwicon-shopping-cart"></i>
                                    </button>
                                 </div>
                              </a> 
                              <div class="info">
                              <div class="tips">';
                                  if ($p['roastTime'] != 'false' || !isset($p['roastTime'])) {
                                        echo '<div class="item date" data-tippy-content="Data wypalenia kawy: '.$p['roastTime'].'">
                                              <i class="zwicon-sun"></i>
                                              <span>'.floor($difference / 86400).' dni temu</span>
                                           </div>';
                                  }
                                  if ($p['recomend'] != 'false' || !isset($p['recomend'])) {
                                        echo '<div class="item recomend">
                                              <i class="zwicon-thumbs-up"></i>
                                              <span>Polecany</span>
                                           </div>';
                                  }
                                  if ($p['freeDelivery'] != 'false' || !isset($p['freeDelivery'])) {
                                        echo '<div class="item delivery">
                                              <i class="zwicon-package"></i>
                                              <span>Darmowa dostawa</span>
                                           </div>';
                                  }                                                                   
                                  echo '</div>
                                 <a href="/product.php" class="title">
                                     '.$p['title'].'
                                 </a>
                                 <h4 class="subtitle">
                                    <p>Najnowszy ekspres automatyczny Jura z luksusowej linii Z. Jura Z10 Aluminium Dark Inox (EA) umożliwia przygotowanie cold brew i posiada nowoczesny młynek automatycznie dostosowujący stopień zmielenia do różnych kaw.</p>
                                 </h4>
                                 <div class="about">
                                    <ul class="first">
                                       <li><span>Skład: </span> <b>100% Arabika</b></li>
                                       <li><span>Stopien palenia: </span> <b>Średni</b></li>
                                       <li><span>Zawartość kofeiny: </span> <b>Niska</b></li>
                                       <li><span>Rodzaj: </span> <b>Kawa ziarnista</b></li>
                                       <li><span>Opakowanie: </span> <b>250g</b></li>
                                    </ul>
                                    <ul class="second">
                                       <li class="opinion">
                                       <span>Ocena: </span>
                                           <div class="stars-wrapper">';
                                           for ($i = 1; $i <= 5; $i++) {
                                                 if (floor($p['opinion']) % $i < floor($p['opinion'])) {
                                                    echo '<i class="icon-star-solid"></i>';
                                                 } else if ($p['opinion'] <= $i - 1 && $p['opinion'] > $i - 1) {
                                                    echo '<i class="icon-star-half-solid"></i>';
                                                 } else {
                                                    echo '<i class="icon-star-regular"></i>';
                                                 }
                                           };
                                           echo '</div>
                                           <div class="opinions">
                                                 '.$p['opinion'].' ('.strlen($p['opinion']).' ';
                                                 if (strlen($p['opinion']) == 1) {
                                                    echo 'opinia)';
                                                 } else if (strlen($p['opinion']) > 1 && strlen($p['opinion']) < 5) {
                                                    echo 'opinii)';
                                                 } else if (strlen($p['opinion']) > 4) {
                                                    echo 'opinij)';
                                                 }
                                           echo '</div>
                                       </li>
                                       <li><span>Producent: </span><b>BAZZARA</b></li>
                                       <li><span>Kod towaru: </span><b>042423512345</b></li>
                                       <li><span>Kod Konesso: </span><b>00654</b></li>
                                    </ul>';
                                    if (isset($p['discount'])) {
                                       echo '<div class="price-wrapper">';
                                    } else {
                                          echo '<div class="price-wrapper" style="justify-content: center">';
                                    }
                                    if (isset($p['discount'])) {
                                          echo '<span class="discount">'.$p['discount'].'</span>
                                             <b class="price">'.$p['price'].'</b>';
                                    } else {
                                          echo '<b class="price" style="">'.$p['price'].'</b>';
                                    }
                                    echo '</div>  
                                 </div>    
                              </div>
                              <div class="checkout">';
                                if (isset($p['discount'])) {
                                    echo '<div class="first discount-active">';
                                } else {
                                    echo '<div class="first">';
                                }
                                   echo '<div class="qty">
                                        <select name="product-qty" id="qty-select" class="qty-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="input">więcej</option>
                                        </select>
                                    </div>
                                     <div class="price-wrapper">';
                                     echo '<span class="discount">'.$p['discount'].'</span>
                                     <b class="price" >'.$p['price'].'</b>';
                                    echo '</div>
                                    <div class="save">
                                       <span>Oszczędź</span>
                                       <b>35.00 zł</b>
                                    </div>
                                 </div>
                                 <div class="second">
                                    <div class="desktop-buttons">
                                       <button class="btn green add-to-basket"><i class="zwicon-shopping-cart"></i> Dodaj do koszyka</button>     
                                       <button class="btn green bonus-buy add-to-basket"><i class="zwicon-shopping-cart"></i> Kup za 1200 punktów</button>
                                    </div>
                                    <div class="mobile-buttons">
                                       <button class="btn product add-to-compare" data-tippy-content="Dodaj do porównania"><i class="zwicon-loop"></i></button>
                                       <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych"><i class="zwicon-heart"></i></button>
                                       <button class="btn add-to-basket" data-tippy-content="Dodaj do koszyka"><i class="zwicon-shopping-cart"></i></button>
                                    </div>
                                 </div>
                                 <div class="third">
                                      <div class="availability">
                                          <i class="zwicon-checkmark-square"></i>
                                          <div class="text">
                                             <h4>Wysyłka jeszcze <b>dziśiaj</b></h4>
                                             <span>Towar dostępny w magazynie</span>
                                          </div>
                                      </div>
                                      <div class="delivery">
                                          <i class="zwicon-package"></i>
                                          <div class="text">
                                             <h4>Dostawa <b>od 6,50 zł</b></h4>
                                             <span>Sprawdź dostępne formy i koszty dostawy</span>
                                          </div>
                                      </div>
                                 </div>
                              </div>
                                 </div>
                             </div>';
                            }
                        ?>
                    </div>
                </div>
            </div>
            <div class="additional-info">
               <div>
                  <h2>Ekspresy do kawy - producenci</h2>
                  <p>Pierwszy podział to wyróżnienie producentów ekspresów do kawy dostępnych w naszym sklepie. Oferujemy ekspresy do kawy znanych i cenionych marek, których jakość potwierdzają miliony użytkowników na całym świecie. W naszej ofercie znajdziesz między innymi ekspresy do kawy Jura, Melitta, Lelit, Franke, Ascaso, Saeco, Nivona, Nuova Simonelli czy Moccamaster.</p>
                  <p>Wszystkie oferowane przez nas ekspresy do kawy zostały szczegółowo opisane na kartach towarowych, a dodatkowo użytkownicy, którzy dokonali zakupu bardzo często dzielą się <span>opiniami o ekspresach</span>. </p>
                  <h2>Ekspresy do kawy - rodzaje</h2>
                  <p>Na przestrzeni lat wśród kategorii ekspresy do kawy powstało kilka podziałów, które charakteryzują sposób działania oraz obsługę urządzenia. Każdy z rodzajów ekspresu do kawy ma nieco inny sposób działania i przeznaczenie, dlatego postanowiliśmy podzielić ekspresy do kawy dostępne w naszej ofercie na 5 kategorii, tak by łatwiej Ci było znaleźć Twój wymarzony ekspres do kawy. Kategorie ekspresów do kawy w naszym sklepie to:</p>
                  <br>
                  <br>
                  <div class="row p-t-1">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h3>Ekspresy do kawy automatyczne</h3>
                        <p>
                           <strong>Automatyczny ekspres do kawy</strong> to najpopularniejsze na rynku ekspresy do kawy. Są to bardzo wygodne w obsłudze urządzenia, które wykonują za nas większość czynności. W automatycznych ekspresach możemy przygotować kawy czarne oraz mleczne typu cappuccino i latte macchiato, a to najczęściej za dotknięciem jednego przycisku. Automatyczny ekspres do kawy swoje zastosowanie znajdzie w każdym domu oraz oraz biurze.
                        </p>
                        <p>W ofercie sklepu Konesso.pl znajdziecie najwyższej jakości <a href="/pol_m_Ekspresy-do-kawy_Producent_Jura-2225.html">
                           <strong>ekspresy Jura</strong>
                           </a>, które słyną z wyjątkowej trwałości, ale także ekspresy Nivona, Melitta, Saeco czy Miele. </p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <img style="width: 920px;" class=" ls-is-cached lazyloaded" src="https://konesso.pl//data/include/cms/Opisy-kategorii/Ekspres-do-kawy/mniejsze/image_3.webp" border="0" alt="Automatyczne ekspresy do kawy" width="920" height="650">
                     </div>
                  </div>
                  <div class="row p-t-1">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h3>Ekspresy do kawy kolbowe</h3>
                        <p>Kolbowe ekspresy do kawy to tradycyjne ekspresy ciśnieniowe, które przypominają pierwsze włoskie ekspresy. <strong>Kolbowe ekspresy do kawy</strong> wymagają od nas opanowania pewnych umiejętności i zaangażowania w cały proces parzenia kawy, ale w zamian za to dają nam możliwość przygotowania kawy najwyższej jakości. W ekspresach kolbowych możemy zaparzyć prawdziwe włoskie espresso i wszystkie kawy mleczne na jego bazie. Swoje zastosowanie znajdą w naszych domach, a kolbowe ekspresy do kawy większych rozmiarów są obowiązkowym urządzeniem w każdej kawiarni. </p>
                        <p>Oferta Konesso.pl jest pełna wysokiej jakości kolbowych ekspresów do kawy. W naszym sklepie możesz kupić <strong>włoskie ekspresy kolbowe Lelit</strong>, ale również Rancilio, Gaggia czy Sage. </p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <img style="width: 920px;" class=" ls-is-cached lazyloaded" src="https://konesso.pl//data/include/cms/Opisy-kategorii/Ekspres-do-kawy/mniejsze/image_4.webp" border="0" alt="Kolbowe ekspresy do kawy" width="920" height="650">
                     </div>
                  </div>
                  <div class="row p-t-1">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h3>Ekspresy do kawy przelewowe</h3>
                        <p>
                           <strong>Przelewowe ekspresy do kawy to ekspresy</strong>, które parzą kawę na zasadzie filtracji. Są to urządzenia pozwalające za jednym razem przygotować cały dzbanek kawy dla całej rodziny, lub pracowników biura. W przelewowych ekspresach do kawy możemy zaparzyć wyśmienitą kawę czarną, która jest pozbawiona fusów. Bardzo proste działanie i wysoka jakość przygotowanego naparu sprawia, że ekspresy przelweowe doskonale sprawdzą się w naszych domach i biurach.
                        </p>
                        <p>W naszym sklepie dostępne są przelewowe ekspresy do kawy najlepszych producentów na świecie. Są to między innymi <strong>ekspresy przelewowe Melitta</strong>, Moccamaster czy Wilfa. </p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <img style="width: 920px;" class=" ls-is-cached lazyloaded" src="https://konesso.pl//data/include/cms/Opisy-kategorii/Ekspres-do-kawy/mniejsze/image_5.webp" border="0" alt="Przelewowy ekspres do kawy" width="920" height="650">
                     </div>
                  </div>
                  <div class="row p-t-1">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h3>Ekspresy do kawy na kapsułki</h3>
                        <p>Kapsułkowe ekspresy do kawy to urządzenia przeznaczone dla osób ceniących wygodę. Takie ekspresy wymagają od nas jedynie włożenia kapsułki i wciśnięcia odpowiedniego przycisku. Każdy ekspres do kawy na kapsułki ma zaprogramowany system, który wykorzystuje dedykowane kapsułki. Najpopularniejsze systemy ekspresów na kapsułki to Nespresso, Dolce Gusto, Tassimo, Lavazza Blue czy A Modo Mio.</p>
                        <p>W ofercie naszego sklepu znajdziesz <strong>ekspresy do kawy na kapsułki Lavazza</strong>, które sprawdzą się w Twoim domu oraz biurze. Posiadamy także ekspresy systemów Nespresso, Tassimo oraz Dolce Gusto. </p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <img style="width: 920px;" class=" ls-is-cached lazyloaded" src="https://konesso.pl//data/include/cms/Opisy-kategorii/Ekspres-do-kawy/mniejsze/image_2.webp" border="0" alt="Ekspres na kapsułki" width="920" height="650">
                     </div>
                  </div>
                  <div class="row p-t-1">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h3>Ekspresy do kawy na saszetki</h3>
                        <p>
                           <strong>Ekspresy do kawy na saszetki</strong> to urządzenia, które są przystosowane do przygotowania kawy w saszetkach E.S.E. (easy serving espresso). Każda saszetka zawiera odmierzoną, zmieloną kawę, która pozwala nam zaparzyć prawdziwe espresso. Ekspresy na saszetki są przeznaczone dla użytkowników, którym zależy na łatwej obsłudze i szybkim przygotowaniu kawy, za każdym razem tak samo smacznej.
                        </p>
                        <p>W naszym sklepie znajdziesz ekspresy na saszetki e.s.e takich producentów jak Lelit czy Ascaso. Są to wysokiej jakości ciśnieniowe ekspresy do kawy, wyposażone w sepcjalne sitka pozwalające zaparzyć kawę w saszetkach.</p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <img style="width: 920px;" class=" ls-is-cached lazyloaded" src="https://konesso.pl//data/include/cms/Opisy-kategorii/Ekspres-do-kawy/mniejsze/image_1.webp" border="0" alt="Ekspresy do kawy na saszetki" width="920" height="650">
                     </div>
                  </div>
                  <br>
                  <br>
                  <center>
                     <h4>W każdej podkategorii ekspresy do kawy znajdziesz urządzenia różnych producentów, w różnej cenie oraz o różnym stopniu zaawansowania. Jeżeli zastanawiasz się na zakupem ekspresu do kawy, szukasz najlepszego ekspresu do kawy i <strong>nie wiesz który ekspres wybrać</strong> koniecznie się z nami skontaktuj, a pomożemy Ci wybrać odpowiednie urządzenie. Możesz także skorzystać z wygodnych filtrów, które pozwolą przeglądać dostępne u nas ekspresy do kawy w dużo bardziej przejrzysty sposób. </h4>
                     <h2>Ekspresy do kawy - przeznaczenie</h2>
                  </center>
                  <p>Miejsce w którym będzie użytkowany ekspres do kawy oraz to jaką ilość kaw dziennie będzie musiał przygotować to kolejny aspekt, który postanowiliśmy wydzielić dla łatwiejszego odnalezienia ekspresu do kawy dopasowanego do swoich potrzeb.</p>
                  <p>Ekspres do biura różni się nieco od takiego do użytku domowego ponieważ musi mieć on zdecydowanie większą wydajność. W kawiarni zazwyczaj używa się nieco większych maszyn - kolbowych ekspresów do kawy o dużej wydajności, które pozwolą na uzyskanie z kawy pełni smaku i aromatu oraz zapewnią ciągłość pracy podczas całego dnia.</p>
                  <br>
                  <p>Ekspresy do kawy dostępne w naszej ofercie spełnią oczekiwania każdego miłośnika kawy czy właściciela kawiarni. Jeżeli szukasz ekspresu do kawy, którego nie ma w naszej ofercie skontaktuj się z nami, a być może uda nam się zaproponować inne rozwiązanie. <mark>Pamiętaj że ekspres do kawy powinien być sprzętem, który sprawi Ci wiele przyjemności dlatego musisz wybrać niezawodne i proste w obsłudze urządzenie, którego ewentualna naprawa nie przewyższy jego wartości.</mark>
                  </p>
                  <p>Konesso.pl jako specjalistyczny sklep oferuje ekspresy do kawy z oficjalnej dystrybucji wielu najpopularniejszych producentów. Posiadamy także fachową wiedzę w zakresie doradztwa i pomocy serwisowej ekspresów do kawy. Serdecznie zachęcamy do kontaktu.</p>
                  <br>
                  <div class="row">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h2>Ekspresy do kawy Leasing</h2>
                        <p>W&nbsp;naszym sklepie oferujemy ekspresy do kawy wielu firm, które świetnie sprawdzają się do użytku biurowego czy małej gastronomii. Znając potrzeby i wymagania naszych Klientów postanowiliśmy dać Wam możliwość wygodnego finansowania zakupu ekspresu do kawy w postaci leasingu. Na karcie towarowej każdego ekspresu do kawy znajduje się widoczny przycisk pozwalający wyliczyć miesięczną ratę leasingową. <strong>Sprawdź nasze warunki i weź ekspres do kawy w leasing!</strong>
                        </p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <h2>Ekspresy do kawy na raty&nbsp;</h2>
                     <p>Nie każdego stać na zakup ekspresu do kawy za gotówkę, tym bardziej jeśli mówimy o solidnym, nieco droższym urządzeniu. Właśnie dlatego w Konesso dajemy Wam <strong>możliwość zakupu ekspresu do kawy na raty</strong>.&nbsp; </p>
                     <p>Nasza oferta jest dopasowana do potrzeb nawet najbardziej wymagających klientów, a cała procedura zakupu ekspresu do kawy na raty jest prosta i szybka. Dzięki naszemu zaangażowaniu i dbałości o interesy naszych Klientów gwarantujemy Wam doskonałe warunki zakupów na raty, w tym <strong>raty 0% na ekspresy do kawy.</strong>&nbsp;Na karcie towaru interesującego Cię ekspresu do kawy możesz w prosty i szybki sposób przeliczyć koszt kredytu oraz jego miesięczną ratę - to proste! </p>
                     </div>
                  </div>
                  <br>
                  <div class="row">
                     <div class="col-lg-6">
                     <div class="col-12">
                        <h2>Ekspresy do kawy promocje</h2>
                        <p>Konesso.pl to pionier rynku jeśli chodzi o sprzedaż ekspresów do kawy wysokiej jakości. Naszym klientom staramy się zapewnić najlepsze warunki zakupu, błyskawiczną wysyłkę oraz fachowe doradztwo.&nbsp;W naszej ofercie znajdziesz ekspresy do kawy w promocjach - zarówno cenowych jak i tych z pakietami gratisów.Bardzo popularną i chętnie wybieraną przez klientów Konesso promocją na ekspres do kawy jest możliwość dokupienia nawet do 4 kilogramów kawy za połowę ceny. Dzięki takiej promocji po zakupie ekspresu do kawy możesz cieszyć sie smakiwem naprawdę wyjątkowej kawy.</p>
                     </div>
                     </div>
                     <div class="col-lg-6">
                     <h2>Expres do kawy czy Ekspres do kawy?</h2>
                     <p>Szukając wymarzonego ekspresu do kawy, wielu ludzi często popełnia błąd, wpisując w internetowych wyszukiwarkach hasło <strong>expres do kawy</strong>. Należy wiedzieć, że wyraz ekspres nie nawiązuje do angielskiego słowa express, dlatego w tym wypadku należy stosować wyłącznie polską wersję - ekspres do kawy. </p>
                     </div>
                  </div>
               </div>
               <h2>Ekspresy do kawy - inne często zadawane pytania</h2>
               <div>
                  <h3>EKSPRES DO KAWY Z MŁYNKIEM - CZY WARTO</h3>
                  <div>
                     <div>
                     <strong>Ekspres do kawy z młynkiem</strong> oferuje wiele korzyści i jest uważany za jedno z najwyższej jakości urządzeń do przygotowywania kawy w domu. Wbudowany młynek pozwala na świeże mielenie ziaren tuż przed parzeniem, co przekłada się na intensywny aromat i pełny smak kawy. Ziarna kawy są mielone na żądany stopień grubości, co pozwala na dostosowanie smaku do indywidualnych preferencji. Dzięki temu można cieszyć się świeżo zaparzoną kawą o niepowtarzalnym aromacie i bogatym smaku. Ekspres do kawy z wbudowanym młynkiem to inwestycja w codzienny komfort i wygodę. Każdego dnia możesz cieszyć się wyjątkową kawą, przygotowaną z najświeższych ziaren, w domowym zaciszu. To prawdziwy rarytas dla wszystkich miłośników kawy, którzy pragną odkryć nowe wymiary smaku i aromatu w swoich ulubionych napojach. <br> Na rynku dostepne są trzy główne typy ekspresów do kawy z wbudowanym młynkiem: ekspresy kolbowe, ekspresy automatyczne oraz ekspresy przelewowe. Każdy z tych rodzajów posiada swoje unikalne cechy i oferuje różne możliwości w przygotowywaniu kawy. <br> Najwygodniejszą i najpopularniejszą formą parzenia kawy w domu jest ekspres automatyczny, który ma wbudowany młynek mielący ziarna przed parzeniem. Jest to idealne rozwiązanie dla osób poszukujących wygody i możliwości personalizacji, bez konieczności wnikania w temat technik parzenia kawy. Taki ekspres jest idealny dla osób ceniących sobie czas, pragnących napić się smacznej, szybkiej kawy a temat parzenia kawy i parametrów niekoniecznie ich interesuje. <br> Ekspresy automatyczne to wszechstronne urządzenia, które oferują prostotę i wygodę w przygotowywaniu kawy. <br>
                     <strong>Ekspresy kolbowe z wbudowanym młynkiem</strong> są bardziej preferowane przez osoby zaangażowane w temat parzenia kawy i mające w tym zakresie jakąś wiedzę. Ekspresy kolbowe są szczególnie polecane dla osób, które pragną mieć wpływ na smak kawy, sprawia im radość eksperymentowanie z różnymi parametrami parzenia, lubią poświęcać czas na przygotowanie kawy i ten proces ich interesuje. Ekspres kolbowy z wbudowanym młynkiem to wygodna opcja, gdyż oszczędza miejsce na blacie i pozwala poczuć się jak prawdziwy barista w domu i nie musisz przejmować się zakupem kolejnego urządzenia, młynka, aby móc parzyć kawę. Najpopularniejszym kolbowym ekspresem do kawy z budowanym młynkiem w ofercie naszego sklepu jest <strong>Lelit Anita</strong>. <br> Ekspresy przelewowe z wbudowaym mlynkiem są prostymi w obsłudze urządzeniami, które umożliwiają przygotowanie większej ilości kawy na raz. Ziarna kawy są mielone w młynku, a następnie woda jest powoli przesączana przez kawę. Ekspresy przelewowe oferują łagodny smak i aromatyczny napój. Są one szczególnie polecane dla osób ceniących tradycyjny sposób parzenia kawy i preferujących większe porcje na raz. Jednym z bestsellerowych ekspresów przelewowych z wbudowanym młnkiem do kawy jest <strong>Melitta Aroma Fresh.</strong>
                     <br> Ekspres do kawy z młynkiem umożliwia przygotowanie doskonałej kawy, wprowadza do domu atmosferę kawiarni i daje możliwość eksperymentowania z różnymi gatunkami ziaren. Dostępne są w różnych stylach i designach i stanowią estetyczny element wyposażenia kuchni.
                     </div>
                  </div>
               </div>
               <div>
                  <h3>JAK DBAĆ O EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Odpowiednie dbanie o ekspres do kawy jest kluczowe dla utrzymania jego sprawności, przedłużenia jego żywotności i zapewnienia zawsze smacznej kawy. Oto kilka wskazówek dotyczących pielęgnacji ekspresu do kawy: <ul>
                        <li>
                           <strong>Regularne Czyszczenie eksresu do kawy</strong>. Regularne czyszczenie ekspresu jest niezwykle ważne. Systematycznie usuwaj fusy i pozostałości kawy z pojemnika na fusy i tacki ociekowej. Przepłukuj jednostkę zaparzającą pod bieżącą wodą, jeśli Twój ekspres posiada wyciągany blok zaparzający. Systematycznie używaj środków czyszczących i wykonuj polecenia urządzenie jeśli przypomina o czyszczeniu lub rób to co minimum dwa miesiące. W ekspresie kolbowym pamiętaj o czyszczeniu kolby, sitka oraz grupy kawowej. Możesz użyć szczoteczki do czyszczenia, aby dokładnie oczyścić te części. Po zakończeniu procesu spieniania mleka wyczyść również dyszę pary lub dyszę gorącej wody.
                        </li>
                        <li>Regularne dkamienianie ekspresu do kawy. Kamień może gromadzić się wewnątrz ekspresu i wpływać na jego działanie oraz smak kawy. Odkamieniaj swój ekspres do kawy regularnie zgodnie z instrukcjami producenta lub zaleceniami dołączonymi do urządzenia. Najlepiej użyć specjalnego preparatu do odkamieniania zalecanego przez producenta ekspresu.</li>
                        <li>Wymieniaj filtr do wody w ekspresie do kawy. Jeśli twoja woda jest twarda, zainstaluj filtr do wody w ekspresie. Filtr pomoże w ograniczeniu ilości kamienia, który dostaje się do ekspresu i może przedłużyć żywotność ekspresu.Dodatkowo używanie czystej, przefiltrowanej wody ma znaczący wpływ na poprawę smaku kawy.</li>
                        <li>Regularna konserwacja ekspresu. Postępuj zgodnie z zaleceniami producenta dotyczącymi konserwacji ekspresu. Należy przestrzegać okresów wymiany filtrów, uszczelek, części wylewek i systemów mlecznych oraz innych części, jeśli jest to wymagane.</li>
                        <li>Jeśli planujesz przewozić ekspres, upewnij się, że jest on dokładnie wyczyszczony i osuszony przed umieszczeniem go w pudełku. Unikaj narażania ekspresu na skrajne temperatury lub wilgoć. Jeśli planujesz dłuższy czas nie używać urządzenia, pozbądź się resztek kawy, wylej wodę ze zbiornika, umyj i osusz tackę ociekową oraz blok zaparzający, jeśli urządzenia posiada taką funkcję odapruj system.</li>
                     </ul>
                     <br> Pamiętaj, że te wskazówki są ogólne i mogą różnić się w zależności od modelu i producenta ekspresu. Zawsze warto sprawdzić instrukcje obsługi dostarczone przez producenta dotyczących konserwacji konkretnego ekspresu do kawy.
                     </div>
                  </div>
               </div>
               <div>
                  <h3>KIEDY ODKAMIENIC EKSPREES DO KAWY?</h3>
                  <div>
                     <div>Odkamienianie ekspresu do kawy to jedna z podstawowych czynności konserwacyjnych, aby ekspres długo nam służył, a kawa dobrze smakowała. Częstotliwość odkamieniania ekspresu do kawy zależy od kilku czynników, takich jak twardość wody, częstotliwość użytkowania ekspresu i zalecenia producenta. Ogólnie rzecz biorąc, zaleca się odkamienianie ekspresu do kawy co 1-3 miesiące. Jednakże, jeśli masz twardą wodę lub używasz ekspresu bardzo często, może być konieczne częstsze odkamienianie, nawet co miesiąc. Zrobisz to specjalnie do tego przeznaczonymi do Twojego ekspresu środkami odkamieniającymi. Ważne jest, aby monitorować stan ekspresu i odkamieniać go, gdy zauważysz problemy z przepływem wody lub pogorszenie smaku kawy. <strong>Używanie filtru do wody zmniejsza częstotliwość konieczności odkamieniania ekspresu.</strong>
                     </div>
                  </div>
               </div>
               <div>
                  <h3>JAK ODKAMIENIĆ EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Ekspres do domu odkamieniamy specjalnie do tego przeznaczonymi środkami odkamieniającymi w formie płynu lub tabletki, które rozcieńcza się z wodą. Najczęściej producent zaleca używanie środków specjalnie przeznaczonych do danego modelu urządzenia. Ważne jest, aby zawsze stosować się do instrukcji producenta dotyczących odkamieniania ekspresu. Każdy ekspres może mieć inne wymagania i procedury odkamieniania. Zawsze sprawdzaj instrukcje obsługi, aby uzyskać szczegółowe i dokładne informacje dotyczące odkamieniania dla danego modelu ekspresu do kawy. <br> Aby przygotować urządzenie do odkamieniania, całkowicie opróżnij ekspres z wody i fusów. <br>
                     <strong>Jeśli twój ekspres ma wymienny filtr wody, wyciągnij go na czas odkamieniania.</strong>
                     <br> Postępuj zgodnie z instrukcjami producenta w celu rozpoczęcia procesu odkamieniania. Najczęściej będzie to umieszczenie roztworu do odkamieniania w pojemniku na wodę ekspresu i uruchomienie cyklu spłukiwania lub parzenia. Należy dokładnie przestrzegać instrukcji dotyczących czasu trwania i samego procesu odkamieniania. Po zakończeniu procesu odkamieniania przepłucz ekspres kilkoma cyklami czystej wody, aby usunąć wszelkie pozostałości roztworu do odkamieniania. Możesz również przepłukać koszyk na fusy i sitko. Upewnij się, że nie ma żadnych śladów roztworu odkamieniającego przed ponownym użyciem ekspresu.
                     </div>
                  </div>
               </div>
               <div>
                  <h3>KIEDY CZYŚCIĆ EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Ogólne czyszczenie ekspresu do kawy powinno odbywać się regularnie, najlepiej na koniec dnia. To pozwala zachować bezpieczeństwo higieny i dobry smak kawy. Jeśli robimy kawy mleczne, wylewkę należy czyścić po każdym parzeniu kawy, aby pozostałości mleka nie zostały w systemie spieniania mleka. W ekspresie kolbowym natomiast pozbywamy się osadów z mleka, przepuszczając parę przez dyszę pary. Nowoczesne ekspresy mają zintegrowane programy płukania wylewki kawy i wylewki mleka po każdym parzeniu kawy, co jest bardzo wygodną opcją.</div>
                  </div>
               </div>
               <div>
                  <h3>JAK WYCZYŚCIĆ EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Aby wyczyścić ekspres do kawy, zacznij od opróżnienia koszyka na fusy i tacki ociekowej. Możesz opróżnić zbiornik na wodę, aby następnego dnia uzupełnić go świeżą wodą. Wyjmij i oczyść elementy wyjmowane. W zależności od modelu ekspresu może to obejmować pojemnik na fusy, sitko, kolbę, dyszę pary, blok zaparzający. Wyjmij te elementy i dokładnie je przepłucz ciepłą wodą i dokładnie osusz. Możesz użyć łagodnego detergentu lub specjalnego środka do czyszczenia ekspresu. <br> Jeśli chcesz oczyścić wnętrze ekspresu, zrób to za pomocą dedykowanego programu czyszczącego w Twoim ekspresie do kawy. Postępuj zgodnie z instrukcjami producenta, aby uruchomić program. Jeśli nie masz takiej funkcji, możesz przepłukać ekspres kilkoma cyklami czystej wody, aby usunąć wszelkie resztki kawy. </div>
                  </div>
               </div>
               <div>
                  <h3>JAKIE CIŚNIENIE MA EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Ciśnienie w ekspresie do kawy jest zazwyczaj mierzone w barach (bar). Odpowiednie ciśnienie podczas ekstrakcji kawy jest istotne dla przygotowania dobrej jakości espresso. Standardowe i minimalne ciśnienie w ekspresie kolbowym wynosi 9 barów, jednak dzisiejsze urządzenia są w stanie osiągnąć większe ciśnienie. Dla lepszych rezultatów zaleca się ekspresy automatyczne o ciśnieniu między 15 a 19 barów. Taki zakres ciśnienia pozwala na szybką ekstrakcję, tworząc esencję o doskonałym smaku i gęstej piance. Odpowiednie ciśnienie podczas ekstrakcji kawy jest bardz ważne, ponieważ ma bezpośredni wpływ na przepływ wody przez kawę. Dobre ciśnienie umożliwia równomierne nasycenie mielonej kawy, co jest kluczowe dla wydobycia aromatów i olejków eterycznych z ziaren i finalnie ma wpływ na efekt końcowy w filiżance i smak kawy. Warto zaznaczyć, że niektóre ekspresy do kawy, zwłaszcza profesjonalne modele lub ekspresy półautomatyczne, mogą mieć możliwość regulacji ciśnienia w zależności od preferencji użytkownika i rodzaju kawy.</div>
                  </div>
               </div>
               <div>
                  <h3>KTO WYNALAZŁ EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Istnieje wiele kandydatów, którzy przypisują sobie zasługi za wynalezienie ekspresu do kawy, i trudno jest jednoznacznie określić, kto jest głównym twórcą tego urządzenia. Jednak istotne jest, że w 1884 roku wynalazca Angelo Moriondo opatentował <strong>pierwszy praktyczny ekspres do kawy</strong>, który wykorzystywał parę. To przełowmowe odkrycie otworzyło drogę do dalszego rozwoju i udoskonalenia ekspresów przez innych wynalazców. Luigi Bezzera, który opatentował swój ekspres w 1901 roku, odegrał istotną rolę w rozwoju tej technologii. Jego ekspres wykorzystywał wysokie ciśnienie generowane przez sprężynę, co pozwalało na szybkie i intensywne parzenie kawy. Jednak to Desiderio Pavooni odegrał kluczową rolę w komercjalizacji tego wynalazku. Przejął ulepszony ekspres Bezzera i wprowadził go na rynek, zdobywając popularność i sukces w branży. <br> Warto podkreślić, że rozwój ekspresów do kawy był efektem wspólnych wysiłków i innowacji wielu osób na przestrzeni lat. Dzięki ich wkładowi, dzisiaj możemy cieszyć się wysokiej jakości kawą przygotowaną w ekspresach, które stały się nieodłącznym elementem naszej codzienności. </div>
                  </div>
               </div>
               <div>
                  <h3>KIEDY WYNALEZIONO EKSPRES DO KAWY?</h3>
                  <div>
                     <div>Ekspres do kawy został wynaleziony i opracowany w różnych okresach historycznych, a pierwsze praktyczne urządzenia do ekstrakcji kawy pojawiły się w drugiej połowie XIX wieku. Istnieje wiele wersji i udoskonaleń ekspresów na przestrzeni lat, a rozwój technologii parzenia kawy trwał przez wiele dziesięcioleci. <br> Ważnym momentem w historii ekspresów do kawy było opatentowanie automatycznego ekspresu przez Angelo Moriondo we Włoszech w 1884 roku. Był to <strong>pierwszy praktyczny ekspres, który wykorzystywał parę do szybkiego parzenia kawy</strong>. Ta innowacja zapoczątkowała rozwój ekspresów do kawy, jakie znamy dzisiaj. W 1901 roku Luigi Bezzera opatentował swój ekspres, który wykorzystywał wysokie ciśnienie generowane przez sprężynę, co pozwalało na szybkie i intensywne parzenie kawy. Później, w 1906 roku, na targach w Mediolanie, Desiderio Pavooni zaprezentował ulepszony ekspres Bezzera szerszej publiczności, zdobywając popularność i umocniwszy pozycję ekspresów na rynku. <br>Należy jednak pamiętać, że rozwój i udoskonalanie ekspresów do kawy trwało przez wiele lat, a wiele osób wniosło swój wkład w tę dziedzinę. Dzięki ich wysiłkom możemy dzisiaj korzystać z różnorodnych rodzajów ekspresów do przygotowywania wspaniałej kawy w domu, kawiarniach i innych miejscach. </div>
                  </div>
               </div>
               <div class="additional-more"><i class="zwicon-chevron-down"></i></div>
            </div>
            <!-- panel -->

            <!-- mobile pagination -->
            <div class="mobile-pagination">
               <div class="onpage">
                  <span>Pokaż na stronie:</span>
                     <a href="#"><b class="number">25</b></a>
                     <a href="#"><b class="number">50</b></a>
                     <a href="#"><b class="number">100</b></a>
                  <span>produktów</span>
               </div>
               <div class="pages">
               <i class="zwicon-arrow-left"></i>
                  <b>1</b>
                  <span>z</span>
                  <b>12</b>
               <i class="zwicon-arrow-right"></i>
               </div>
            </div>
            <!-- mobile pagination -->

            <!-- footer -->
            <footer class="footer-main" id="MainFooter">
                <div class="newsletter">
                <div class="wrapper row no-gutters justify-content-center">
                        <div class="item col-md-5">
                        <div class="title">
                            <i class="zwicon-mail"></i>
                            <h5>Zapisz się na newsletter</h5>
                        </div>
                        <p>Zyskaj 20 zł na pierwsze zakupy o wartości minumum 300 zł. Nie przegap żadnej promocji, zdobywaj dodatkowe rabaty.</p>
                        <form action="#">
                            <input type="email" placeholder="Twój adres e-mail"></input>
                            <button class="btn green">Zapisz się</button>
                        </form>
                        </div>
                        <div class="item col-md-5">
                        <div class="title">
                            <i class="zwicon-piggy-bank"></i>
                            <h5>Zbieraj punkty</h5>
                        </div>
                        <p>Zyskaj dodatkowy rabat na następne zkupy przy każdym zamówieniu. Za każdą wydaną złotówkę otrzymasz jeden punkt.</p>
                        <div class="rules">
                            <b>Przejrzyste zasady 1 zł = 1 punkt</b>
                            <a href="#" class="btn black">Przeczytaj więcej</a>
                        </div>
                        </div>
                </div>
                </div>
                <div class="info row">
                <div class="logo col-lg-3 col-md-3">
                        <a href="#">
                            <svg class="logo_desktop">
                                <use xlink:href="img/konesso_sprites.svg#konesso_logo"></use>
                            </svg>
                        </a>    
                </div>
                <div class="orders col-md-3 col-lg-2">
                        <button class="accordion">
                            <span>Zamówienia</span>
                            <i class="zwicon-chevron-down"></i>
                        </button>
                        <div class="panel">
                            <ul class="links">
                                <li class="link">
                                    <a href="#">Dostawa</a>
                                </li>
                                <li class="link">
                                    <a href="#">Raty</a>
                                </li>
                                <li class="link">
                                    <a href="#">Leasing</a>
                                </li>
                                <li class="link">
                                    <a href="#">Ubezpieczenia</a>
                                </li>
                                <li class="link">
                                    <a href="#">TaxFree</a>
                                </li>
                                <li class="link">
                                    <a href="#">Montaż</a>
                                </li>
                                <li class="link">
                                    <a href="#">Zwroty i reklamacje</a>
                                </li>
                                <li class="link">
                                    <a href="#">Najczęściej zadawane pytania</a>
                                </li>		  
                            </ul>
                        </div>
                </div>
                <div class="promo col-md-3 col-lg-2">
                        <button class="accordion">
                            <span>Promocje i inspiracje</span>
                            <i class="zwicon-chevron-down"></i>
                        </button>
                        <div class="panel">
                            <ul class="links">
                                <li class="link">
                                    <a href="#">Wyprzedaż</a>
                                </li>
                                <li class="link">
                                    <a href="#">Gorący strzał</a>
                                </li>
                                <li class="link">
                                    <a href="#">Promocje</a>
                                </li>
                                <li class="link">
                                    <a href="#">Karty podarunkowe</a>
                                </li>
                                <li class="link">
                                    <a href="#">Poradniki</a>
                                </li>
                                <li class="link">
                                    <a href="#">Aktualności</a>
                                </li>		  
                            </ul>
                        </div>
                </div>
                <div class="about col-md-3 col-lg-2">
                        <button class="accordion">
                            <span>Konesso</span>
                            <i class="zwicon-chevron-down"></i>
                        </button>
                        <div class="panel">
                            <ul class="links">
                                <li class="link">
                                    <a href="#">O nas</a>
                                </li>
                                <li class="link">
                                    <a href="#">Regulamin</a>
                                </li>
                                <li class="link">
                                    <a href="#">Polityka prywatności</a>
                                </li>
                                <li class="link">
                                    <a href="#">Biuro pracowe</a>
                                </li>
                                <li class="link">
                                    <a href="#">Zamówienia publiczne</a>
                                </li>
                                <li class="link">
                                    <a href="#">Współpraca B2B</a>
                                </li>
                                <li class="link">
                                    <a href="#">Geex</a>
                                </li>	
                                <li class="link">
                                    <a href="#">Forum</a>
                                </li>	
                                <li class="link">
                                    <a href="#">Kariera</a>
                                </li>	
                                <li class="link">
                                    <a href="#">Kontakt</a>
                                </li>			  
                            </ul>
                        </div>
                </div>
                <div class="contacts col-md-3 col-lg-2">
                    <button class="accordion">
                        <span>Kontakt</span>
                        <i class="zwicon-chevron-down"></i>
                    </button>
                    <div class="panel">
                        <ul class="links">
                            <li class="number">
                            <i class="zwicon-phone"></i>
                            <div class="block">
                                <a href="tel:+158420000">15 842 00 00</a>
                                <span>pon. - pt. 8:00 - 16:00</span>
                            </div>
                            </li>
                            <li class="mail">
                            <i class="zwicon-mail"></i>
                            <a href="mailto:sklep@konesso.pl">sklep@konesso.pl</a>
                            </li>
                            <li class="location">
                            <i class="zwicon-pin"></i>
                            <a href="https://goo.gl/maps/a4WugkFMVkLiu5ET7">
                                <span>Stalowa Wola, Swierkowa 9B</span>
                            </a>
                            </li>
                            <li class="visit">
                            <i class="zwicon-calendar"></i>
                            <a href="#">
                                <span>Umów wizytę w salonie</span>
                            </a>
                            </li>
                            <li class="socials">
                            <a href="#"><i class="icon-fb"></i></a>
                            <a href="#"><i class="icon-yt"></i></a>
                            <a href="#"><i class="icon-tw"></i></a>
                            <a href="#"><i class="icon-inst"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="companies">
                <img src="img/companies.png" alt="">
                </div>
                <div class="copyright">
                    Wszelkie prawa zastrzeżone - © Konesso.pl
                </div>
            </footer>
            <!-- footer -->                    
        </div>
         <!--overlay-->
         <div class="main-overlay"></div>
         <!--overlay-->
    </div>  
    <ul class="mobile-menu">
        <li class="item trigger-user" data-meny-open="true" data-tab="User" data-title="Menu"><i class="zwicon-user"></i></li>
        <li class="item trigger-search" data-meny-open="true" data-tab="Search" data-title="Wyszukaj"><i class="zwicon-search"></i></li>
        <li class="item trigger-cart" data-meny-open="true" data-tab="Cart" data-title="Koszyk"><i class="zwicon-shopping-cart"></i></li>
        <li class="item trigger-fav" data-meny-open="true" data-tab="Fav"  data-title="Ulubione"><i class="zwicon-heart"></i></li>
        <li class="item trigger-menu" data-meny-open="true" data-tab="Menu" data-title="Menu"><i class="zwicon-hamburger-menu"></i></li>
    </ul>

<script>
  
    window.Konesso.settings.MainFilter = [
         {
            "label":"",
            "html": `<button data-modalclose="" class="modal__close"><i class="zwicon-close"></i></button>
                     <button class="btn black show-results">Pokaż wyniki</button> 
                     <div class="title">
                        <a class="clear-filters" href="#">Wyczyść filtry</a>
                     </div>` 
         },
         {
            "label":"Sortuj",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Sortuj",
               "html": `<div class="accesibility-filter">
                           <ul>
                              <li class="name" data-filtername="sortuj"><b>Sortuj</b></li>
                                 <li><label class="checkbox radiocheck"><input type="checkbox" data-filter="popularność"><span class="checkmark"></span><div class="for">Popularność</div></label></li>
                                 <li><label class="checkbox radiocheck"><input type="checkbox" data-filter="cena od najniższej"><span class="checkmark"></span><div class="for">Cena: od najniższej</div></label></li>
                                 <li><label class="checkbox radiocheck"><input type="checkbox" data-filter="cena od najwyższej"><span class="checkmark"></span><div class="for">Cena: od najwyższej</div></label></li>
                                 <li><label class="checkbox radiocheck"><input type="checkbox" data-filter="nowości"><span class="checkmark"></span><div class="for">Nowości</div></label></li>
                           </ul>
                        </div>`
               },
            ]
         },
         {
            "label":"Cena",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Cena",
               "html": `<div class="modal-filter-wrapper">
                           <div class="price-filter">
                                <div class="wrapper">
                                    <div class="price-input">
                                        <div class="field">
                                            <span>Od:</span>
                                            <input type="number" class="input-min" value="1">
                                        </div>
                                        <div class="field">
                                            <span>Do:</span>
                                            <input type="number" class="input-max" value="10000">
                                        </div>
                                    </div>
                                    <div class="slider">
                                        <div class="progress"></div>
                                    </div>
                                    <div data-filtername="priceRange" class="range-input">
                                        <input type="range" class="range-min" min="0" max="10000" value="1" step="10">
                                        <input type="range" class="range-max" min="0" max="10000" value="10000" step="10">
                                    </div>
                                </div>
                           </div>
                        </div>`
               },
            ]
         },
         {
            "label":"Dostępność",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Dostępność",
               "html": `<div class="accesibility-filter">
                              <ul>
                                 <li class="name" data-filtername="availability"><b>Dostępność</b></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="dostępne"><span class="checkmark"></span><div class="for">dostepne (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="niedostępne"><span class="checkmark"></span><div class="for">niedostępne (215)</div></label></li>
                              </ul>
                           <div class="accesibility-filter">`
               },
            ]
         },
         {
            "label":"Typ ziarna",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Typ ziarna",
               "html": `<div class="accesibility-filter">
                              <ul>
                                 <li class="name" data-filtername="grainType"><b>Typ Ziarna</b></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="pełne"><span class="checkmark"></span><div class="for">pełne (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="niepełne"><span class="checkmark"></span><div class="for">niepełne (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="połowa"><span class="checkmark"></span><div class="for">połowa (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="pełne"><span class="checkmark"></span><div class="for">pełne (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="niepełne"><span class="checkmark"></span><div class="for">niepełne (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="połowa"><span class="checkmark"></span><div class="for">połowa (215)</div></label></li>
                              </ul>
                           </div>` 
               },
            ]
         },
         {
            "label":"Metoda palenia",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Metoda palenia",
               "html": `<div class="accesibility-filter">
                              <ul>
                                 <li class="name" data-filtername="roastMethod"><b>Metoda palenia</b></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="jakaś metoda"><span class="checkmark"></span><div class="for">jakaś metoda (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="inna metoda"><span class="checkmark"></span><div class="for">inna metoda (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="pełne"><span class="checkmark"></span><div class="for">pełne (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="niepełne"><span class="checkmark"></span><div class="for">niepełne (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="połowa"><span class="checkmark"></span><div class="for">połowa (215)</span></label></li>
                              </ul>
                           </div>` 
               },
            ]
         },
         {
            "label":"Typ kawy",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Typ kawy",
               "html": `<div class="accesibility-filter">
                              <ul>
                                 <li class="name" data-filtername="coffeeType"><b>Typ kawy</b></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Arabica"><span class="checkmark"></span><div class="for">Arabica (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="Robusta"><span class="checkmark"></span><div class="for">Robusta (215)</div></label></li>
                              </ul>
                           </div>` 
               },
            ]
         },
         {
            "label":"Poziom palenia",
            "href":"",
            "id":"2147",
            "count":"1874",
            "icon":"",
            "children":[
               {
               "label": "Poziom palenia",
               "html": `<div class="accesibility-filter">
                              <ul>
                                 <li class="name" data-filtername="roastLevel"><b>Poziom palenia</b></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="słabo palone"><span class="checkmark"></span><div class="for">Słabo palone (1404)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="średnio palone"><span class="checkmark"></span><div class="for">Średnio palone (215)</div></label></li>
                                 <li><label class="filtertrigger checkbox"><input type="checkbox" data-filter="mocnoa palone"><span class="checkmark"></span><div class="for">Mocno palone (2215)</div></label></li>
                              </ul>
                           </div>` 
               },
            ]
         }
   ];

   
</script>

<?php include 'footer.php'; ?>