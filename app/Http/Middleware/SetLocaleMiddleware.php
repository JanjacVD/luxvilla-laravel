<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SetLocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // Ensure the locale is valid
        $locale = $request->locale;
        if (in_array($locale, ['en', 'hr'])) {
            app()->setLocale($locale); // Set the app's locale
        } else {
            app()->setLocale('en'); // Default to English if the locale is invalid
        }

        return $next($request);
    }
}
