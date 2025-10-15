<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
$pages = ['/', '/about', '/features', '/login', '/register','/forgot-password'];

$items = array_map(function($page){
    return ($name= ltrim($page, '/')) === '' ? 'home' : $name;
},$pages);

$associate = array_map(function($a, $b){
    return ['page'=>$a, 'file'=>$b];
},$pages,$items);

foreach ($associate as $item) {
    Route::get($item['page'],fn()=> Inertia::render($item['file']));
}

