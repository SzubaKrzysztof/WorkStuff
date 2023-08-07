<?php 
$pageType = 'main';

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
                        <input type="text" autocomplete="off" name="text" class="input" placeholder="">
                        <button class="submit" type="submit"><i class="zwicon-search"></i></button>
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

    <div id="main_page" class="meny-content">
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
                        <a href="#" class="submit d-flex flex-column" type="button">
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
                        <a href="/search.php"><i class="icon-coffee"></i>Kawy</a>
                    </li>
                    <li class="bar">
                        <a href="/search.php"><i class="icon-tea"></i>Herbaty</a>
                    </li>
                    <li class="bar">
                        <a href="/search.php"><i class="icon-express"></i>Ekspresy</a>
                    </li>
                    <li class="bar">
                        <a href="/search.php"><i class="icon-mill"></i>Młynki</a>
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
            <!-- main banner with promotions and slider -->
        <div class="banner-main">
            <div class="row no-gutters">
               <div class="first-banner col-md-8">
                  <div class="slider" data-component="Slider" data-pagination="true" data-navigation="true" data-arrows="banner" data-space-between="20" data-showMoreMobile="true">
                        <div class="item" data-label="Lavazza 30% taniej">
                           <a href="#">
                              <img src="img/jura_eks.png" alt="">
                           </a>
                        </div>
                        <div class="item" data-label="Jura X10">
                           <a href="#">
                              <img src="img/jura_eks.png" alt="">
                           </a>
                        </div>
                        <div class="item" data-label="Zestaw baristy">
                           <a href="#">
                              <img src="img/jura_eks.png" alt="">
                           </a>
                        </div>
                        <div class="item" data-label="Darmowa dostawa">
                           <a href="#">
                              <img src="img/jura_eks.png" alt="">
                           </a>
                        </div>
                        <div class="item" data-label="Wyjątkowe prezenty">
                           <a href="#">
                              <img src="img/jura_eks.png" alt="">
                           </a>
                        </div>               
                  </div>
               </div>
               <div class="second-banner col-md-4">
                  <div class="slider d-flex flex-column justify-content-between" data-component="Slider" data-navigation="true" data-loop="true" data-space-between="50" data-autoplay="10000">
                        <a href="#" class="wrapper">
                           <div class="sale-main d-flex justify-content-between align-items-center justify-content-between">
                              <span class="title">Okazje Konesso!</span>
                              <span class="price d-flex flex-column align-items-center">Oszczedź <b>35,00 zł</b></span>
                           </div>
                           <img class="promo-image" src="img/coffee-bazzara.png" alt="">
                           <b class="promo-title text-center">Kawa Ziarnista Illy Espresso Black 250g</b>
                           <div class="progress-bar" data-all="100" data-left="2">
                           </div>
                           <div class="promo-price d-flex justify-content-between">
                              <div class="qty d-flex flex-column justify-content-center">
                                    Pozostało:
                                    <b>2<span>/ 100</span></b>
                              </div>
                              <div class="timer" data-component="CountDownTimer" data-time="2023-06-29">
                                    
                              </div>
                              <div class="price-wrapper d-flex flex-column justify-content-center">
                                    <s class="discount">140,00 zł</s>
                                    <b class="price">105,00 zł</b>
                              </div>
                           </div>
                        </a>
                        <a href="#" class="wrapper">
                           <div class="sale-main d-flex justify-content-between align-items-center justify-content-between">
                              <span class="title">Okazje Konesso!</span>
                              <span class="price d-flex flex-column align-items-center">Oszczedź <b>35,00 zł</b></span>
                           </div>
                           <img class="promo-image" src="img/coffee.png" alt="">
                           <b class="promo-title text-center">Herbata</b>
                           <div class="progress-bar" data-all="100" data-left="21">
                           </div>
                           <div class="promo-price d-flex justify-content-between">
                              <div class="qty d-flex flex-column justify-content-center">
                                    Pozostało:
                                    <b>21<span>/ 100</span></b>
                              </div>
                              <div class="timer" data-component="CountDownTimer" data-time="2023-06-28">
                                    
                              </div>
                              <div class="price-wrapper d-flex flex-column justify-content-center">
                                    <s class="discount">31,00 zł</s>
                                    <b class="price">12,00 zł</b>
                              </div>
                           </div>
                        </a>
                        <a href="#" class="wrapper">
                           <div class="sale-main d-flex justify-content-between align-items-center justify-content-between">
                              <span class="title">Okazje Konesso!</span>
                              <span class="price d-flex flex-column align-items-center">Oszczedź <b>35,00 zł</b></span>
                           </div>
                           <img class="promo-image" src="img/coffee-product.jpg" alt="">
                           <b class="promo-title text-center">Test</b>
                           <div class="progress-bar" data-left="78" data-all="100">
                           </div>
                           <div class="promo-price d-flex justify-content-between">
                              <div class="qty d-flex flex-column justify-content-center">
                                    Pozostało:
                                    <b>78<span>/ 100</span></b>
                              </div>
                              <div class="timer" data-component="CountDownTimer" data-time="2023-06-25">
                                    
                              </div>
                              <div class="price-wrapper d-flex flex-column justify-content-center">
                                    <s class="discount">190,00 zł</s>
                                    <b class="price">155,00 zł</b>
                              </div>
                           </div>
                        </a>
                  </div>
               </div>
            </div>
        </div>
        <!-- main banner with promotions and slider -->

        <!-- favourites -->
        <div class="categories-main">
            <div class="block-title">
                <h4 class="text">Często wybierane przez miłośników kawy</h4>
            </div>
            <div class="categories-menu d-flex justify-content-center">
                <div class="row">
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy2.png" alt="">
                        </div>
                        <span>Ekspresy automatyczne</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/kawa.png" alt="">
                        </div>
                        <span>Kawa ziarnista</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy2.png" alt="">
                        </div>
                        <span>Ekspresy automatyczne</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/kawa.png" alt="">
                        </div>
                        <span>Kawa ziarnista</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy2.png" alt="">
                        </div>
                        <span>Ekspresy automatyczne</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy2.png" alt="">
                        </div>
                        <span>Ekspresy automatyczne</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/kawa.png" alt="">
                        </div>
                        <span>Kawa ziarnista</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy2.png" alt="">
                        </div>
                        <span>Ekspresy automatyczne</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/kawa.png" alt="">
                        </div>
                        <span>Kawa ziarnista</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item col">
                        <div class="item-image">
                            <img src="img/ekspresy2.png" alt="">
                        </div>
                        <span>Ekspresy automatyczne</span>
                    </a>
                </div>
            </div>
        </div>
        <!-- favourites -->

        <!-- subpromo -->
        <div class="subpromo-main">
            <div class="slider" data-component="Slider" data-navigation="true" data-arrows="banner" data-loop="true" data-space-between="40" data-showMoreMobile="true" data-perview='{"lg": "2", "md": "2", "sm": "1"}' data-autoplay="15000">
                <a href="#" class="item">
                    <img src="img/bg2.png" alt="">
                </a>  
                <a href="#" class="item">
                    <img src="img/bg.png" alt="">
                </a>
            </div>
        </div>
        <!-- subpromo -->

        <!-- roasted products -->
        <div class="ProductZone1">
            <div class="block-title">
                <h4 class="text">Świezo palone kawy</h4>
            </div>
            <div class="products-wrapper">
                <div class="slider" data-component="HotSpot">
                    <?php
                    $products = [
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
                            'title' => 'Nazwa 5',
                            'price' => '22,33 zł',
                            'img' => 'img/coffee.png',
                            'discount' => null,
                            'roastTime' => '2023-05-01',
                            'recomend' => true,
                            'freeDelivery' => true,
                            'opinion' => 4.5
                        ],
                        [
                            'title' => 'Nazwa 6',
                            'price' => '22,33 zł',
                            'img' => 'img/coffee-product.jpg',
                            'discount' => null,
                            'roastTime' => '2023-05-01',
                            'recomend' => false,
                            'freeDelivery' => false,
                            'opinion' => 3.7
                        ],
                        [
                            'title' => 'Nazwa 7',
                            'price' => '22,33 zł',
                            'img' => 'img/coffee-bazzara.png',
                            'discount' => '40,00 zł',
                            'roastTime' => '2023-05-01',
                            'recomend' => false,
                            'freeDelivery' => false,
                            'opinion' => 2
                        ],
                        [
                            'title' => 'Nazwa 8',
                            'price' => '22,33 zł',
                            'img' => 'img/coffee-bazzara.png',
                            'discount' => '30,00 zł',
                            'roastTime' => '2023-05-01',
                            'recomend' => false,
                            'freeDelivery' => true,
                            'opinion' => 5
                        ]   
                    ];
                    foreach($products as $p) {
                        $when = strtotime($p['roastTime']);
                        $current = time();
                        $difference = $current - $when;
                        echo '<div class="item SingleProduct">
                                <a href="#" class="image">
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
                                    <img src="'.$p['img'].'" alt="">
                                    <i class="zwicon-heart fav add-to-favourites"></i>
                                    <div class="holder">
                                        <button class="btn product add-to-basket" data-tippy-content="Dodaj do koszyka">
                                            <i class="zwicon-shopping-cart"></i>
                                        </button>
                                        <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych">
                                            <i class="zwicon-heart"></i>
                                        </button>
                                    </div>
                                </a> 
                                <a href="#" class="title">'.$p['title'].'</a>
                                <div class="info">
                                    <div class="ratings">
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
                                    </div>';
                                    if (isset($p['discount'])) {
                                        echo '<div class="price-wrapper">';
                                    } else {
                                        echo '<div class="price-wrapper" style="justify-content: flex-end">';
                                    }
                                    if (isset($p['discount'])) {
                                        echo '<span class="discount">'.$p['discount'].'</span>
                                            <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                    } else {
                                        echo '<b class="price" style="">'.$p['price'].'</b>';
                                    }
                                    echo '
                                    </div>  
                                </div>
                            </div>';
                        }
                    ?>
                </div>
            </div>
            <a href="#" class="show-more">Pokaż wszystkie</a>
        </div>
        <!-- roasted products -->

        <!-- banners-promo-main -->
        <div class="banners-promo-main">
            <div class="block-title">
                <h4 class="text">Strefa promocij</h4>
            </div>
            <div class="slider" data-component="Slider" data-arrows="banner" data-showMoreMobile="true" data-navigation="true" data-autoplay="5000" data-loop="true">
               <a class="item" href="#"><img src="img/banner-promo.png" alt=""></a>
               <a class="item" href="#"><img src="img/bg.png" alt=""></a>
            </div>   
        </div>
        <!-- banners-promo-main -->

        <!-- recomend-main -->
        <div class="recomend-main">
            <div id="recomend-slider" class="slider ProductSlider" data-component="Slider" data-arrows="main" data-navigation="true" data-loop="true" data-perview='{"lg": "7", "md": "5", "sm": "2.4"}' data-space-between="40">
                <a href="#" class="item">
                    <img src="img/recomend1.png" alt="">
                    <span class="text">Alternatywne metody parzenia</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend2.png" alt="">
                    <span class="text">Polecane ziarna z włoskich palarni</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend3.png" alt="">
                    <span class="text">Twoja domowa oza kawy</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend1.png" alt="">
                    <span class="text">Alternatywne metody parzenia</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend2.png" alt="">
                    <span class="text">Polecane ziarna z włoskich palarni</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend3.png" alt="">
                    <span class="text">Twoja domowa oza kawy</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend1.png" alt="">
                    <span class="text">Alternatywne metody parzenia</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend2.png" alt="">
                    <span class="text">Polecane ziarna z włoskich palarni</span>
                </a>
                <a href="#" class="item">
                    <img src="img/recomend3.png" alt="">
                    <span class="text">Twoja domowa oza kawy</span>
                </a>
            </div>
        </div>
        <!-- recomend-main -->

        <!-- new products -->
        <div class="ProductZone2">
            <div class="block-title">
                <h4 class="text">Świezo palone kawy</h4>
            </div>
            <div class="products-wrapper">
                <div class="slider" data-component="HotSpot">
                    <?php
                         $products = [
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
                                'title' => 'Nazwa 5',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee.png',
                                'discount' => null,
                                'roastTime' => '2023-05-01',
                                'recomend' => true,
                                'freeDelivery' => true,
                                'opinion' => 4.5
                            ],
                            [
                                'title' => 'Nazwa 6',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee-product.jpg',
                                'discount' => null,
                                'roastTime' => '2023-05-01',
                                'recomend' => false,
                                'freeDelivery' => false,
                                'opinion' => 3.7
                            ],
                            [
                                'title' => 'Nazwa 7',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee-bazzara.png',
                                'discount' => '40,00 zł',
                                'roastTime' => '2023-05-01',
                                'recomend' => false,
                                'freeDelivery' => false,
                                'opinion' => 2
                            ],
                            [
                                'title' => 'Nazwa 8',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee-bazzara.png',
                                'discount' => '30,00 zł',
                                'roastTime' => '2023-05-01',
                                'recomend' => false,
                                'freeDelivery' => true,
                                'opinion' => 5
                            ]   
                        ];
                        foreach($products as $p) {
                            $when = strtotime($p['roastTime']);
                            $current = time();
                            $difference = $current - $when;
                            echo '<div class="item SingleProduct">
                                    <a href="#" class="image">
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
                                        <img src="'.$p['img'].'" alt="">
                                        <i class="zwicon-heart fav add-to-favourites"></i>
                                        <div class="holder">
                                            <button class="btn product add-to-basket" data-tippy-content="Dodaj do koszyka">
                                                <i class="zwicon-shopping-cart"></i>
                                            </button>
                                            <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych">
                                                <i class="zwicon-heart"></i>
                                            </button>
                                        </div>
                                    </a> 
                                    <a href="#" class="title">'.$p['title'].'</a>
                                    <div class="info">
                                        <div class="ratings">
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
                                        </div>';
                                        if (isset($p['discount'])) {
                                            echo '<div class="price-wrapper">';
                                        } else {
                                            echo '<div class="price-wrapper" style="justify-content: flex-end">';
                                        }
                                        if (isset($p['discount'])) {
                                            echo '<span class="discount">'.$p['discount'].'</span>
                                                <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                        } else {
                                            echo '<b class="price" style="">'.$p['price'].'</b>';
                                        }
                                        echo '
                                        </div>  
                                    </div>
                                </div>';
                            }
                    ?>
                </div>
            </div>
            <a href="#" class="show-more">Pokaż wszystkie</a>
        </div>
        <!-- new products -->

        <!-- sodastream banner -->
        <div class="sodastream-banner">
            <div class="block-title">
                <h4 class="text">Promocja SodaStream</h4>
            </div>
            <div class="wrapper">
                <img class="background" src="img/sodastream-bg.png" alt="">
                <div class="inside">
                    <div class="banner">
                        <img src="img/sodastream-main.png" alt="">
                    </div>
                    <div class="ProductZone3 products">
                        <div class="slider" data-component="HotSpot" data-size="3">
                                <?php
                                 $products = [
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
                                        'title' => 'Nazwa 5',
                                        'price' => '22,33 zł',
                                        'img' => 'img/coffee.png',
                                        'discount' => null,
                                        'roastTime' => '2023-05-01',
                                        'recomend' => true,
                                        'freeDelivery' => true,
                                        'opinion' => 4.5
                                    ],
                                    [
                                        'title' => 'Nazwa 6',
                                        'price' => '22,33 zł',
                                        'img' => 'img/coffee-product.jpg',
                                        'discount' => null,
                                        'roastTime' => '2023-05-01',
                                        'recomend' => false,
                                        'freeDelivery' => false,
                                        'opinion' => 3.7
                                    ],
                                    [
                                        'title' => 'Nazwa 7',
                                        'price' => '22,33 zł',
                                        'img' => 'img/coffee-bazzara.png',
                                        'discount' => '40,00 zł',
                                        'roastTime' => '2023-05-01',
                                        'recomend' => false,
                                        'freeDelivery' => false,
                                        'opinion' => 2
                                    ],
                                    [
                                        'title' => 'Nazwa 8',
                                        'price' => '22,33 zł',
                                        'img' => 'img/coffee-bazzara.png',
                                        'discount' => '30,00 zł',
                                        'roastTime' => '2023-05-01',
                                        'recomend' => false,
                                        'freeDelivery' => true,
                                        'opinion' => 5
                                    ]   
                                ];
                                foreach($products as $p) {
                                    $when = strtotime($p['roastTime']);
                                    $current = time();
                                    $difference = $current - $when;
                                    echo '<div class="item SingleProduct">
                                        <a href="#" class="image">
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
                                            <img src="'.$p['img'].'" alt="">
                                            <i class="zwicon-heart fav add-to-favourites"></i>
                                            <div class="holder">
                                                <button class="btn product add-to-basket" data-tippy-content="Dodaj do koszyka">
                                                    <i class="zwicon-shopping-cart"></i>
                                                </button>
                                                <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych">
                                                    <i class="zwicon-heart"></i>
                                                </button>
                                            </div>
                                        </a> 
                                        <a href="#" class="title">'.$p['title'].'</a>
                                        <div class="info">
                                            <div class="ratings">
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
                                            </div>';
                                            if (isset($p['discount'])) {
                                                echo '<div class="price-wrapper">';
                                            } else {
                                                echo '<div class="price-wrapper" style="justify-content: flex-end">';
                                            }
                                            if (isset($p['discount'])) {
                                                echo '<span class="discount">'.$p['discount'].'</span>
                                                    <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                            } else {
                                                echo '<b class="price" style="">'.$p['price'].'</b>';
                                            }
                                            echo '
                                            </div>  
                                        </div>
                                    </div>';
                                    }
                                ?>
                        </div>     
                    </div>
                    <a href="#" class="show-more">Pokaż wszystkie</a>
                </div>
            </div>
        </div>
        <!-- sodastream banner -->

        <!-- multiple-promo-main -->
        <div class="multiple-promo-main">
            <div class="block-title">
                <h4 class="text">Strefa promocij</h4>
            </div>
            <div class="wrapper categories-wrapper row no-gutters">
                <div class="categories col-md-12 col-lg-8">
                    <a href="#" class="item">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                    <a href="#" class="item">
                        <div class="item-image">
                            <img src="img/ekspresy.png" alt="">
                        </div>
                        <span>Ekspresy do kawy</span>
                    </a>
                </div>
                <div class="promo col-md-12 col-lg-4">
                    <div id="MultiSmallSlider" data-component="Slider" data-navigation="true" data-loop="true" data-space-between="20" data-autoplay="8000" data-arrows="banner" data-showMoreMobile="true">
                        <div class="item">
                            <a href="#">
                                <img src="img/multipromo1.png" alt="">
                            </a>
                        </div>

                        <div class="item">
                            <a href="#">
                                <img src="img/multipromo1.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper row no-gutters">
                <div class="ProductZone4 products col-md-12 col-lg-8">
                    <div class="slider" data-component="HotSpot" data-size="3" >
                        <?php
                             $products = [
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
                                    'title' => 'Nazwa 5',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee.png',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => true,
                                    'freeDelivery' => true,
                                    'opinion' => 4.5
                                ],
                                [
                                    'title' => 'Nazwa 6',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-product.jpg',
                                    'discount' => null,
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 3.7
                                ],
                                [
                                    'title' => 'Nazwa 7',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '40,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => false,
                                    'opinion' => 2
                                ],
                                [
                                    'title' => 'Nazwa 8',
                                    'price' => '22,33 zł',
                                    'img' => 'img/coffee-bazzara.png',
                                    'discount' => '30,00 zł',
                                    'roastTime' => '2023-05-01',
                                    'recomend' => false,
                                    'freeDelivery' => true,
                                    'opinion' => 5
                                ]   
                            ];
                            foreach($products as $p) {
                                $when = strtotime($p['roastTime']);
                                $current = time();
                                $difference = $current - $when;
                                echo '<div class="item SingleProduct">
                                        <a href="#" class="image">
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
                                            <img src="'.$p['img'].'" alt="">
                                            <i class="zwicon-heart fav add-to-favourites"></i>
                                            <div class="holder">
                                                <button class="btn product add-to-basket" data-tippy-content="Dodaj do koszyka">
                                                    <i class="zwicon-shopping-cart"></i>
                                                </button>
                                                <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych">
                                                    <i class="zwicon-heart"></i>
                                                </button>
                                            </div>
                                        </a> 
                                        <a href="#" class="title">'.$p['title'].'</a>
                                        <div class="info">
                                            <div class="ratings">
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
                                            </div>';
                                            if (isset($p['discount'])) {
                                                echo '<div class="price-wrapper">';
                                            } else {
                                                echo '<div class="price-wrapper" style="justify-content: flex-end">';
                                            }
                                            if (isset($p['discount'])) {
                                                echo '<span class="discount">'.$p['discount'].'</span>
                                                    <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                            } else {
                                                echo '<b class="price" style="">'.$p['price'].'</b>';
                                            }
                                            echo '
                                            </div>  
                                        </div>
                                    </div>';
                                }
                            ?>            
                    </div>
                </div>   
                <a href="#" class="show-more">Pokaż wszystkie</a> 
                <div class="promo col-md-12 col-lg-4">
                    <div id="MultiMediumSlider" data-component="Slider" data-navigation="true" data-loop="true" data-space-between="20" data-autoplay="10000" data-arrows="banner" data-showMoreMobile="true">
                        <a class="item" href="#">
                            <img src="img/multipromo2.png" alt="">   
                        </a>
                        <a class="item" href="#">
                            <img src="img/tangerines.jpeg" alt="">   
                        </a>
                    </div>
                </div>             
            </div>
        </div>
        <!-- multiple-promo-main -->

        <!-- favourite products -->
        <div class="ProductZone5">
           <div class="block-title">
                <h4 class="text">Najczęściej kupowane przez klientow Konesso</h4>
            </div>
            <div class="product-wrapper">
                <div class="slider" data-component="HotSpot">
                    <?php
                        $products = [
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
                                'title' => 'Nazwa 5',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee.png',
                                'discount' => null,
                                'roastTime' => '2023-05-01',
                                'recomend' => true,
                                'freeDelivery' => true,
                                'opinion' => 4.5
                            ],
                            [
                                'title' => 'Nazwa 6',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee-product.jpg',
                                'discount' => null,
                                'roastTime' => '2023-05-01',
                                'recomend' => false,
                                'freeDelivery' => false,
                                'opinion' => 3.7
                            ],
                            [
                                'title' => 'Nazwa 7',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee-bazzara.png',
                                'discount' => '40,00 zł',
                                'roastTime' => '2023-05-01',
                                'recomend' => false,
                                'freeDelivery' => false,
                                'opinion' => 2
                            ],
                            [
                                'title' => 'Nazwa 8',
                                'price' => '22,33 zł',
                                'img' => 'img/coffee-bazzara.png',
                                'discount' => '30,00 zł',
                                'roastTime' => '2023-05-01',
                                'recomend' => false,
                                'freeDelivery' => true,
                                'opinion' => 5
                            ]   
                        ];
                    foreach($products as $p) {
                        $when = strtotime($p['roastTime']);
                        $current = time();
                        $difference = $current - $when;
                        echo '<div class="item SingleProduct">
                                <a href="#" class="image">
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
                                    <img src="'.$p['img'].'" alt="">
                                    <i class="zwicon-heart fav"></i>
                                    <div class="holder">
                                        <button class="btn product add-to-basket" data-tippy-content="Dodaj do koszyka">
                                            <i class="zwicon-shopping-cart"></i>
                                        </button>
                                        <button class="btn product add-to-favourites" data-tippy-content="Dodaj do ulubionych">
                                            <i class="zwicon-heart"></i>
                                        </button>
                                    </div>
                                </a> 
                                <a href="#" class="title">'.$p['title'].'</a>
                                <div class="info">
                                    <div class="ratings">
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
                                    </div>';
                                    if (isset($p['discount'])) {
                                        echo '<div class="price-wrapper">';
                                    } else {
                                        echo '<div class="price-wrapper" style="justify-content: flex-end">';
                                    }
                                    if (isset($p['discount'])) {
                                        echo '<span class="discount">'.$p['discount'].'</span>
                                            <b class="price" style="color: #DF2A3A;">'.$p['price'].'</b>';
                                    } else {
                                        echo '<b class="price" style="">'.$p['price'].'</b>';
                                    }
                                    echo '
                                    </div>  
                                </div>
                            </div>';
                        }
                    ?>
                </div>
            </div> 
        </div>   
        <a href="#" class="show-more">Pokaż wszystkie</a>                     
        <!-- favourite products -->  
        
        <!-- konesso info -->
        <div class="info-main">
          <div class="wrapper row no-gutters">
              <div class="info col-lg-5 col-md-6 col-12">
                  <div class="club">
                        <div class="title">
                            <i class="zwicon-diamond"></i>
                            <h5>Klub Konesso</h5>                                        
                        </div>
                        <p>Sprawdź naszą strefę marek należących do klubu Konesso - pasjonatów kawowego naparu. Quisque pulvinar urna, eu posuere aliquam et ridiculus in. Nulla nec habitant nunc senectus congue. Luctus sit suspendisse dolor gravida at. Cursus orci non nibh morbi porttitor porta egestas elit eget. Pulvinar sed nec, auctor nec dui, urna aenean purus.</p>
                        <div class="companies">
                            <img src="img/jura.png" alt="">
                            <img src="img/lavazza.png" alt="">
                            <img src="img/jura.png" alt="">
                            <img src="img/lavazza.png" alt="">
                            <img src="img/jura.png" alt="">
                            <img src="img/lavazza.png" alt="">
                        </div>
                  </div>
              </div>
              <div class="text col-lg-7 col-md-6 col-12">
                    <h5>KONESSO.PL - TWÓJ WYMARZONY SKLEP INTERNETOWY Z KAWĄ, HERBATĄ I EKSPRESAMI DO KAWY</h5>
                    <p>Mamy ogromną przyjemność powitać Cię w sklepie Konesso.pl. Aktualnie znajdujesz się  w renomowanym i docenianym przez Klientów sklepie z kawą, herbatą i ekspresami do kawy, a to znaczy, że zależy Ci na wysokiej jakości nabywanych towarów. Wszystkie produkty, które znajdziesz w naszej ofercie m.in. kawy ziarniste i mielone, wyśmienite herbaty, akcesoria i ekspresy do kawy są starannie selekcjonowane i wybierane tak, aby sprostać wymaganiom największych wielbicieli dobrego smaku. Naszym priorytetem jest oferowanie Klientom najlepszej kawy ziarnistej, która idealnie sprawdzi się jako kawa do ekspresu, ale również do kawiarki i alternatywnych metod parzenia kawy.</p>
              </div>
          </div>
          <div class="tips row">
              <div class="item">
                  <i class="zwicon-package"></i>
                  <b>Darmowa dostawa</b>
                  <span>zamówien powyżej wartoci 300 zł</span>
              </div>
              <div class="item">
                  <i class="zwicon-money-bill"></i>
                  <b>Kup teraz zapłać po</b>
                  <span>nawet do 30 dni po zakupie</span>
              </div>
              <div class="item">
                  <i class="zwicon-history"></i>
                  <b>14 dni na zwrot</b>
                  <span>darmowe zwroty wybierając inPost</span>
              </div>
              <div class="item">
                  <i class="zwicon-package"></i>
                  <b>Darmowa dostawa</b>
                  <span>zamówien powyżej wartoci 300 zł</span>
              </div>
              <div class="item">
                  <i class="zwicon-money-bill"></i>
                  <b>Kup teraz zapłać po</b>
                  <span>nawet do 30 dni po zakupie</span>
              </div>
              <div class="item">
                  <i class="zwicon-history"></i>
                  <b>14 dni na zwrot</b>
                  <span>darmowe zwroty wybierając inPost</span>
              </div>
          </div>
        </div>
        <!-- konesso info -->

        <!-- knowledge-base -->                       
        <div class="knowledge-base">
			<div class="wrapper row no-gutters">
				<div class="data col-sm-12 col-xl-9">
                  <div class="knowledge-slider slider">
                     <div class="swiper-wrapper">
                           <div class="swiper-slide">
                              <div class="item">
                                 <img src="img/tangerines.jpeg" alt="">
                                 <div class="text">
                                       <b>Mandarynkowa Mocha</b>
                                       <p>Zapach soczystej mandarynki nieodłącznie kojarzy nam się z nadchodzącym okresem świątecznym. Jeżeli należysz do szerokiego grona mandarynkowych miłośników, to przygotowaliśmy dla Ciebie wyjątkowy przepis na kawę Mandarynkowa Mocha.</p>		
                                       <a href="#" class="btn black">Przeczytaj więcej <i class="zwicon-chevron-right"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div class="swiper-slide">
                              <div class="item">
                                 <img src="img/recepie-banner.png" alt="">
                                 <div class="text">
                                       <b>Karamelowy Przepis</b>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magni officia accusantium dignissimos libero tenetur modi ab possimus alias ipsa?</p>		
                                       <a href="#" class="btn black">Przeczytaj więcej <i class="zwicon-chevron-right"></i></a>
                                 </div>
                              </div>
                           </div>
                        <div class="swiper-slide">
                           <div class="item">
                                 <img src="img/tangerines.jpeg" alt="">
                                 <div class="text">
                                       <b>Mandarynkowa Mocha</b>
                                       <p>Zapach soczystej mandarynki nieodłącznie kojarzy nam się z nadchodzącym okresem świątecznym. Jeżeli należysz do szerokiego grona mandarynkowych miłośników, to przygotowaliśmy dla Ciebie wyjątkowy przepis na kawę Mandarynkowa Mocha.</p>		
                                       <a href="#" class="btn black">Przeczytaj więcej <i class="zwicon-chevron-right"></i></a>
                                 </div>
                              </div>
                        </div>
                           <div class="swiper-slide">
                              <div class="item">
                                 <img src="img/recepie-banner.png" alt="">
                                 <div class="text">
                                       <b>Mandarynkowa Mocha</b>
                                       <p>Zapach soczystej mandarynki nieodłącznie kojarzy nam się z nadchodzącym okresem świątecznym. Jeżeli należysz do szerokiego grona mandarynkowych miłośników, to przygotowaliśmy dla Ciebie wyjątkowy przepis na kawę Mandarynkowa Mocha.</p>		
                                       <a href="#" class="btn black">Przeczytaj więcej <i class="zwicon-chevron-right"></i></a>
                                 </div>
                              </div>
                           </div>  
                     </div>
                  </div>
				</div>
				<div class="pagination col-sm-12 col-xl-3 d-flex align-items-center justify-content-center">
				    <div class="recepies">
                     <div class="knowledge-pagination">
                           <div class="swiper-wrapper">
                              <div class="swiper-slide">
                                 <a href="#" class="item-pagination">
                                    <img src="img/recepie.png" alt="">
                                    <b>Mandarynkowa Mocha</b>
                                 </a>
                              </div>
                              <div class="swiper-slide">
                                 <a href="#" class="item-pagination">
                                    <img src="img/recepie.png" alt="">
                                    <b>Karamelowy Przepis</b>
                                 </a>
                              </div>
                              <div class="swiper-slide">
                                 <a href="#" class="item-pagination">
                                    <img src="img/recepie.png" alt="">
                                    <b>Mandarynkowa Mocha</b>
                                 </a>
                              </div>
                              <div class="swiper-slide">
                                 <a href="#" class="item-pagination">
                                    <img src="img/recepie.png" alt="">
                                    <b>Karamelowy Przepis</b>
                                 </a>
                              </div>
                           </div>
                     </div>
					</div>
				</div>
			</div>											
        </div>        
        <!-- recepies -->

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
                     <button class="accordion-trigger" data-target="#id1">
                           <span>Zamówienia</span>
                           <i class="zwicon-chevron-down"></i>
                     </button>
                     <div class="panel" id="id1">
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

<?php include 'footer.php'; ?>