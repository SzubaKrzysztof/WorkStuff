<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>Konesso | Sklep internetowy z kawą</title>
    <link rel="stylesheet" href="output/style.css">  
    <link rel="shortcut icon" href="img/favicon.ico">

    <script>window.JSONS = {
        MainCategories : <?php include 'js/const/maincategories.json'; ?>,
        DemoBasket : <?php include 'js/const/demobasket.json'; ?>,
    }</script>
    <script type="module" async src="output/bundle.js"></script>
</head>
<body class="page-<?php echo $pageType; ?>">