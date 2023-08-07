<?php 
$pageType = 'product';

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
    <aside class="meny-product-info" style="display: none">
                                    
    </aside>
    <div class="meny-arrow"></div>
    <!-- side menu categories -->

    <div id="product_page" class="meny-content">
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
            <!-- path -->
            <div class="path-main">
                <a href="#">Kawy</a>
                <i class="zwicon-chevron-right"></i>
                <a href="#">Kawy Ziarniste</a>
                <i class="zwicon-chevron-right"></i>
                <a href="#">Jesteś tu</a>
            </div>
            <!-- path -->
            <!-- product-panel -->
            <div class="product-panel row">
               <div class="mobile-info">
                  <div class="name">Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g</div>
                  <div class="first-wrapper">
                     <div class="opinion">
                           <div class="stars-wrapper">
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-half-solid"></i>
                           </div>
                           <div class="opinions">
                              <b>4.5</b>
                              <span>(2 opinii)</span>
                           </div>
                     </div>
                  </div>
               </div>
                <div class="image col-md-6">
                    <div class="product-image-slider">
                        <div class="swiper-wrapper">
                             <div class="swiper-slide">
                                <img src="img/product_main.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <div id="viewer_content_360"></div>
                             </div>
                             <div class="swiper-slide">
                                <img src="img/product_main.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/product_main.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                        </div>
                        <div class="product-button-next">
                           <i class="zwicon-chevron-right"></i>
                        </div>
                        <div class="product-button-prev">
                           <i class="zwicon-chevron-left"></i>
                        </div>
                        <div class="tips">
                           <div class="item date" data-tippy-content="Data wypalenia kawy: 22-03-2022">
                              <span>55 dni temu</span>
                           </div>
                           <div class="item recomend">
                              <span>Polecany</span>
                           </div>
                           <div class="item delivery">
                              <span>Darmowa dostawa</span>
                           </div>                                                                 
                        </div>
                    </div>
                    <div thumbsSlider="" class="product-image-pagination">
                        <div class="swiper-wrapper">
                             <div class="swiper-slide">
                                <img src="img/product_main.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/360.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/product_main.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/product_main.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                             <div class="swiper-slide">
                                <img src="img/coffee.png" alt="">
                             </div>
                        </div>
                    </div>
                </div>
                <div class="info col-md-6">
                  <div class="first-wrapper">
                     <div class="opinion">
                           <div class="stars-wrapper">
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-solid"></i>
                              <i class="icon-star-half-solid"></i>
                           </div>
                           <div class="opinions">
                              <b>4.5</b>
                              <span>(2 opinii)</span>
                           </div>
                     </div>
                     <div class="btns">
                           <button class="btn grey"><i class="zwicon-heart"></i> Dodaj do listy</button>
                           <button class="btn grey"><i class="zwicon-loop"></i> Dodaj do porównania</button>
                     </div>
                  </div>
                  <div class="name">Kawa ziarnista Bazzara Espresso Top12 Gran Cru/DODICIGRANCRU 250g</div>
                  <div class="second-wrapper">
                     <div class="product-info">
                        <ul class="product-codes">
                           <li><span>Producent: </span><b>BAZZARA</b></li>
                           <li><span>Kod towaru: </span><b>042423512345</b></li>
                           <li><span>Kod Konesso: </span><b>00654</b></li>
                        </ul>
                        <hr class="product-separator"></hr>
                        <ul class="product-date">
                           <li><span>Cena za 100g: </span><b>59,00 zł</b></li>
                           <li><span>Termin waznośći: </span><b>22-01-2023</b></li>
                           <li><span>Data produkcji: </span><b>22-01-2023</b></li>
                        </ul>
                        <hr class="product-separator"></hr>
                        <ul class="product-composition">
                           <li><span>Skład: </span> <b>100% Arabika</b></li>
                           <li><span>Stopien palenia: </span> <b>Średni</b></li>
                           <li><span>Zawartość kofeiny: </span> <b>Niska</b></li>
                           <li><span>Rodzaj: </span> <b>Kawa ziarnista</b></li>
                           <li><span>Opakowanie: </span> <b>250g</b></li>
                        </ul>
                        <ul class="product-additional">
                           <li>
                              <i class="zwicon-document"></i> 
                              <b>Pokaż pełne specyfikacje</b>
                              <div class="modal-content">
                                 <div class="wrapper">
                                    <a href="#" class="modal-close"><i class="zwicon-close"></i></a>
                                    <ul class="product-codes">
                                        <li><span>Producent: </span><a href="#"><b>BAZZARA</b></a></li>
                                        <li><span>Kod towaru: </span><b>042423512345</b></li>
                                        <li><span>Kod Konesso: </span><b>00654</b></li>
                                        <li><span>Cena za 100g: </span><b>59,00 zł</b></li>
                                        <li><span>Termin waznośći: </span><b>22-01-2023</b></li>
                                        <li><span>Data produkcji: </span><b>22-01-2023</b></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <i class="zwicon-info-circle"></i>
                              <b>Skład i ważne dodatkowe informacje</b>
                              <div class="modal-content">
                                 <div class="wrapper">
                                 <a href="#" class="modal-close"><i class="zwicon-close"></i></a>
                                    <ul class="product-composition">
                                        <li><span>Skład: </span> <a href="#"><b>100% Arabika</b></a></li>
                                        <li><span>Stopien palenia: </span> <a href="#"><b>Średni</b></a></li>
                                        <li><span>Zawartość: </span> <a href="#"><b>Niska</b></a></li>
                                        <li><span>Rodzaj: </span> <a href="#"><b>Kawa ziarnista</b></a></li>
                                        <li><span>Opakowanie: </span> <a href="#"><b>250g</b></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li class="opinions-modal">
                              <i class="zwicon-chat"></i>
                              <b>Opinie klientów </b> <span>&nbsp;(2 opinii)</span>
                              <div class="modal-content">
                                <div class="wrapper">
                                    <a href="#" class="modal-close"><i class="zwicon-close"></i></a>
                                    <h4>Opinie</h4>
                                    <div class="opinion">
                                        <div class="stars-wrapper">
                                            <i class="icon-star-solid"></i>
                                            <i class="icon-star-solid"></i>
                                            <i class="icon-star-solid"></i>
                                            <i class="icon-star-solid"></i>
                                            <i class="icon-star-half-solid"></i>
                                        </div>
                                        <div class="opinions">
                                            <span>(5)</span>
                                        </div>
                                    </div>
                                    <div id="list-opinion">
                                        <div class="client_opinion_info">
                                            <span class="avg-opinion">Średnia ocena: 4.5</span>
                                            <div class="opinion-sort">
                                                <button class="btn sort">
                                                    <i class="zwicon-sort-amount-down"></i> 
                                                    Sortuj
                                                    <div class="sort-block">
                                                        <a class="sort" data-sort="date-sort">Od najnowszych</a>
                                                        <a class="sort" data-sort="date-sort">Od najstarszych</a>
                                                        <a class="sort" data-sort="opinion-sort">Od najwyższej oceny</a>
                                                        <a class="sort" data-sort="opinion-sort">Od najnizszej oceny</a>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <ul class="list client_opinion">
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">5</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">4</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">4</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                    <div>(<span class="opinion-sort">5</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">1</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">5</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">4</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">4</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                    <div>(<span class="opinion-sort">5</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">1</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">5</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">4</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">4</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-solid"></i>
                                                    <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                    <div>(<span class="opinion-sort">5</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="first-wrapper">
                                                <div class="opinion">
                                                    <div class="stars-wrapper">
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-solid"></i>
                                                        <i class="icon-star-half-solid"></i>
                                                    </div>
                                                    <div class="opinions">
                                                        <div>(<span class="opinion-sort">1</span> / <span>5</span>)</div>
                                                    </div>
                                                </div>
                                                <div class="date date-sort">2023-06-29</div>
                                            </div>
                                            <div class="text">
                                                Polecam ten sklep ,bardzo szybko I sprawnie dostsrczono mi zamowiony towar.Ekspres nic dodać nic ująć .Świetny!
                                            </div>
                                            <div class="second-wrapper">
                                                <div class="name">Witold, Warszawa</div>
                                            </div>
                                        </li>
                                        </ul>
                                        <ul class="pagination"></ul>
                                    </div>
                                </div>
                              </div>
                           </li>
                           <li>
                              <i class="zwicon-send"></i> 
                              <b>Zapytaj o ten przedmiot</b>
                              <div class="modal-content">
                                 <a href="#" class="modal-close"><i class="zwicon-close"></i></a>
                                 <div class="wrapper">
                                    <form action="/contact.php" method="post" class="contact_mail">
                                        <div class="contact_mailform ">
                                        <div class="form-group">
                                            <label for="from" class="control-label"> Twój mail: </label>
                                            <div class="has-feedback has-required">
                                            <input type="email" name="from" id="from" class="form-control validate" required="required">
                                            <span class="form-control-feedback"></span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="body" class="control-label"> Twoje pytanie: </label>
                                            <div class="has-feedback has-required">
                                            <textarea name="body" cols="60" rows="7" id="body" class="form-control validate" minlength="3" required="required"></textarea>
                                            <span class="form-control-feedback"></span>
                                            </div>
                                        </div>
                                        <div class="n61389_submit row">
                                            <div class="col-12 control-label text-center">
                                            <div class="button_legend">
                                                <i class="fa fa-need"></i> Pola oznaczone gwiazdką są wymagane
                                            </div>
                                            <button id="submit_contact_form" type="submit" class="btn main primary btn-wrapped">
                                                <u class="bg-animation"></u>
                                                <span class="wrapped"> Wyślij </span>
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                 </div>
                              </div>
                           </li>
                        </ul>
                        <hr class="product-separator"></hr>
                        <ul>
                           <li><span>Inne dostępne opakowanie:</span></li>
                           <li>
                              <div class="another-products">
                                 <a href="#" class="item">
                                    <div class="image">
                                       <img src="img/another-product.png" alt="">
                                    </div>
                                    <span>500g</span>
                                 </a>
                                 <a href="#" class="item">
                                    <div class="image">
                                       <img src="img/another-product2.png" alt="">
                                    </div>
                                    <span>750g</span>
                                 </a>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div class="product-price">
                        <div class="checkout">
                           <div class="first discount-active">
                              <div class="qty">
                                    <input class="qty-product" name="xxx">

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
                              <div class="price-wrapper">
                                 <span class="discount">165,00 zł</span>
                                 <b class="price">130,00 zł</b>
                              </div>
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
                           </div>
                           <div class="third">
                              <div class="item">
                                 <i class="zwicon-checkmark-square"></i>
                                 <div class="text">
                                    <h4>Wysyłka jeszcze 
                                        <b data-modal>dziśiaj
                                            <div class="modal-content">
                                                <span>Wysyłamy już dziśiaj!</span>
                                            </div>
                                        </b>
                                    </h4>
                                    <span>Towar dostępny w magazynie</span>
                                 </div>
                              </div>
                              <div class="item">
                                 <i class="zwicon-package"></i>
                                 <div class="text">
                                    <h4>Dostawa 
                                        <b data-modal>od 6,50 zł
                                            <div class="modal-content">
                                                <span>Wychodząc naprzeciw oczekiwaniom naszych Klientów, proponujemy różne sposoby dostawy zamówionych towarów.</span>
                                                <div class="wrapper">
                                                    <ul>
                                                        <li class="name">Przesyłka kurierska</li>
                                                        <li>
                                                            <div class="image-wrapper">
                                                                <img src="img/dpd.png" alt="">
                                                            </div>
                                                            <b>DPD</b>
                                                        </li>
                                                        <li>
                                                            <div class="image-wrapper">
                                                                <img src="img/dpd.png" alt="">
                                                            </div>
                                                            <b>DPD</b>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li class="name">Odbiór w punkcie:</li>
                                                        <li>
                                                            <div class="image-wrapper">
                                                                <img src="img/inpost.png" alt="">
                                                            </div>
                                                            <b>InPost</b>
                                                        </li>
                                                        <li>
                                                            <div class="image-wrapper">
                                                                <img src="img/inpost.png" alt="">
                                                            </div>
                                                            <b>InPost</b>
                                                        </li>
                                                        <li>
                                                            <div class="image-wrapper">
                                                                <img src="img/inpost.png" alt="">
                                                            </div>
                                                            <b>InPost</b>
                                                        </li>
                                                        <li>
                                                            <div class="image-wrapper">
                                                                <img src="img/inpost.png" alt="">
                                                            </div>
                                                            <b>InPost</b>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <a href="https://www.konesso.pl/pol-delivery.html" class="btn grey">Szczegółowe informacje o dostawie</a>
                                            </div>
                                        </b>
                                    </h4>
                                    <span>Sprawdź dostępne formy i koszty dostawy</span>
                                 </div>
                              </div>
                              <div class="item">
                                 <i class="zwicon-refresh-left"></i>
                                 <div class="text">
                                    <h4>Darmowy zwrot 
                                        <b data-modal>do 14 
                                            <dni class="modal-content">
                                                <span>Konsument, który zawarł umowę na odległość, może w terminie <b>14 dni</b> kalendarzowych odstąpić od niej bez podawania przyczyny.</span>
                                                <a href="https://www.konesso.pl/pol-terms.html" class="btn grey">Pokaż szczegóły</a>
                                            </dni>
                                        </b>
                                    </h4>
                                    <span>Zgłoś się do obsługi klienta dla zwrotu</span>
                                 </div>
                              </div>
                              <div class="item">
                                 <i class="zwicon-dollar-sign"></i>
                                 <div class="text">
                                    <h4>Korzystne raty już 
                                        <b data-modal>od 6,53 zł / mięsiąc
                                            <div class="modal-content"> 
                                                <span>Dbamy o Twoją wygodę dlatego umożliwiamy Ci skorzystanie z wielu wygodnych sposobów na opłacenie zamówienia.</span>
                                                <div class="wrapper">
                                                    <img src="img/paypo.png" alt="">
                                                    <img src="img/paypo.png" alt="">
                                                    <img src="img/paypo.png" alt="">
                                                    <img src="img/paypo.png" alt="">
                                                    <img src="img/paypo.png" alt="">
                                                    <img src="img/paypo.png" alt="">
                                                </div>
                                                <a href="https://www.konesso.pl/pol-payments.html" class="btn grey">Szczegółowe informacje o płatnościach</a>
                                            </div>
                                        </b>
                                    </h4>
                                    <span>Wygodne raty dla każdego</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                  </div>
               </div>   
            </div>
            <!-- product-panel -->
            <!-- product desctiption -->
            <div class="product-description">
               <div id="item-desc" class="kawa">
                  <div id="item-main-desc" class="row flex-column-reverse flex-md-row-reverse ">
                     <div class="col-md-8 item-main-left">
                        <h4>KAWA ZIARNISTA BAZZARA DODICIGRANCRU <strong>połączenie 12 najlepszych arabik</strong>
                        </h4>
                        <p>Bazzara Dodicigrancru wcześniej znana jako Top12 Gran Cru to z całą pewnością jedna z najlepszych mieszanek do espresso na świecie. W jej skład wchodzi <strong>12 odmian najlepszych arabik</strong> z całego świata, które zostały umiejętnie wypalone i połączonych w odpowiednich proporcjach. </p>
                        <p>Ziarna mieszanki Dodicigrancru to: <br />
                           <strong>Jamaica Blue Mountain</strong>, Puerto Rico Yauco Selecto, Santo Domingo Barahona AAA, Meksyk Altura Superior, Honduras SHG Marcala, Kostaryka SHB Tarrazu, Salvador Pacamara Gigante, Gwatemala Antigua Pastores, Nikaragua Matagalpa Cavallino, Brazylia Sul De Minas Pergamino, Indie Plantation Peaberry Bababudan, Etiopia Sidamo Lavado.
                        </p>
                        <h5>KAWA ODPOWIEDNIA O KAŻDEJ GODZINIE</h5>
                        <p>Bazzara Dodicigrancru to stuprocentowa arabika, która zawiera <strong>niski poziom kofeiny</strong>. Dzięki delikatnym właściwościom pobudzającym, możemy się nią cieszyć również późnym popołudniem. </p>
                     </div>
                     <div class="col-md-4 item-main-right d-none d-md-flex flex-column justify-content-center align-content-center"></div>
                  </div>
                  <div class="row">
                     <div id="smaki">
                        <h2>SMAK - niepowtarzalne doznania</h2>
                        <p>Zniewalające aromaty kwiatowe przypominające zapach kwiatu pomarańczy w idealny sposób rozkwitają w <strong>wybornych doznaniach o likierowym posmaku</strong>. Tajemnica wyjątkowego aromatu, w którym delikatnie palony migdał splata się z bukietem smakowym karaibskiego rumu oraz przyjemnymi nutami szlachetnych liści tytoniu. Gorzkawo-korzenny smak łączy się z zapachami kandyzowanej skórki pomarańczy zatopionej w czekoladzie. </p>
                     </div>
                  </div>
                  <div id="profilsensoryczny" class="text-center">
                        <img src="https://konesso.pl/data/include/cms/Podstrony-mario/Bazzara/Bazzara-Grancru-1kg.jpg" border="0" alt="Bazzara Dodicigrancru profil sensoryczny" />
                  </div>
                  <div id="methods">
                     <h4 class="metoda">Proponowane sposoby przygotowania <strong>Bazzara Dodicigrancru</strong>
                     </h4>
                     <p>
                        <strong>Bazzara Dodicigrancru</strong> to niezwykła mieszanka, która najlepiej sprawdzi się w ekspresie kolbowym i automatycznym. Jeżeli odpowiednio ją zmielimy, to możemy ją zaparzyć w kawiarce Moka lub French Pressie.
                     </p>
                  </div>
                  <div id="item-coffee-type" class="row p-t-5">
                     <div class="col-sm-4 d-none d-sm-block item-coffee-type-left"></div>
                  </div>
               </div>
            </div>
            <!-- product desctiption -->
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


<?php include 'footer.php'; ?>