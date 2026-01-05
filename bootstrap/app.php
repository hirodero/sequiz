<?php

use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\CheckDatabaseConnection;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

// Simpan konfigurasi ke dalam variabel $app
$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->prepend(CheckDatabaseConnection::class);
        $middleware->web(append: [
            HandleInertiaRequests::class,
            \App\Http\Middleware\SessionTimeout::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })
    ->create();

if (env('APP_ENV') === 'production') {
    $app->useStoragePath('/tmp/storage');

    $viewPath = '/tmp/storage/framework/views';
    if (!is_dir($viewPath)) {
        mkdir($viewPath, 0755, true);
    }

    config(['view.compiled' => $viewPath]);
}

return $app;