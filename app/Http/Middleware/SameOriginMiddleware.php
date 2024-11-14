<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SameOriginMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $referer = $request->headers->get('referer');

        if (!$referer || !str_contains($referer, env('APP_URL'))) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return $next($request);
    }
}
