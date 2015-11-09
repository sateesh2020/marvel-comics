(function(){
    'use strict';

    angular.module('marvelComics',
      [
        /* Angular Modules */
        'ngAnimate','ngAria',
        /* Third Party Modules */
        'ngMaterial',

        'marvel-router',
        /* Controllers */
        'marvel.controller.home',
        /* Services */
        'marvel.services.home','marvel.services.comics','marvel.services.events','marvel.services.stories'

      ])
      .config(function($mdThemingProvider, $mdIconProvider){
                $mdIconProvider
                      .defaultIconSet("assests/svg/avatars.svg", 128)
                      .icon("menu"       , "assests/svg/menu.svg"        , 24)
                      .icon("share"      , "assests/svg/share.svg"       , 24)
                      .icon("google_plus", "assests/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "assests/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "assests/svg/twitter.svg"     , 512)
                      .icon("phone"      , "assests/svg/phone.svg"       , 512);
                //create yr own palette
                $mdThemingProvider.definePalette('brandPrimary', {
                    '50': 'FFFFFF',
                    '100': 'FBC5C8',
                    '200': 'F89195',
                    '300': 'F44E55',
                    '400': 'F2313A',
                    '500': 'F0141E',
                    '600': 'D80E17',
                    '700': 'BB0C14',
                    '800': '9E0A11',
                    '900': '81080E',
                    'A100': 'FFFFFF',
                    'A200': 'FBC5C8',
                    'A400': 'F2313A',
                    'A700': 'BB0C14',
                    'contrastDefaultColor': 'light',    // whether, by default, text         (contrast)
                                                // on this palette should be dark or light
                    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                     '200', '300', '400', 'A100'],
                    'contrastLightColors': undefined    // could also specify this if default was 'dark'
                });
                //create yr own palette
                $mdThemingProvider.definePalette('brandAccent', {
                    '50': 'A6A6A6',
                    '100': '7F7F7F',
                    '200': '636363',
                    '300': '404040',
                    '400': '303030',
                    '500': '212121',
                    '600': '121212',
                    '700': '020202',
                    '800': '000000',
                    '900': '000000',
                    'A100': 'A6A6A6',
                    'A200': '7F7F7F',
                    'A400': '303030',
                    'A700': '020202',
                    'contrastDefaultColor': 'light',    // whether, by default, text         (contrast)
                                                // on this palette should be dark or light
                    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                     '200', '300', '400', 'A100'],
                    'contrastLightColors': undefined    // could also specify this if default was 'dark'
                });
               $mdThemingProvider.theme('default')
                                  .primaryPalette('brandPrimary')
                                  .accentPalette('brandAccent')
                                  .warnPalette('red');

});
})();
