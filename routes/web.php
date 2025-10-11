<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', fn () => Inertia::render('home'));
Route::get('/about', fn () => Inertia::render('about'));
Route::get('/features', fn () => Inertia::render('features'));
Route::get('/test', fn () => Inertia::render('test'));

