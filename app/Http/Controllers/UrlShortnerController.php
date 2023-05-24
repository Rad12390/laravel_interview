<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use AshAllenDesign\ShortURL\Facades\ShortURL;

class UrlShortnerController extends Controller
{
    //
    public function ShortUrl(Request $request){
        
        $shortURLObject = ShortURL::destinationUrl($request->currenturl)->make();

        $shortURL = $shortURLObject->default_short_url;

        return $shortURL;
    }
}
