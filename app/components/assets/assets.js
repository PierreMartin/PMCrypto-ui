import chromeFavicon from '../../images/chrome-ninja192-precomposed.png';
import appleFavicon from '../../images/apple-ninja152-precomposed.png';
import msFavicon from '../../images/ms-ninja144-precomposed.png';
import favicon from '../../images/favicon.png';

const metaAssets = () => {
  return [
    { charset: 'utf-8' },
    { name: 'description', content: 'React Redux App' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'reactGo' },
    { name: 'msapplication-TileImage', content: msFavicon },
    { name: 'msapplication-TileColor', content: '#3372DF' }
  ];
};

const linkAssets = () => {
  const links = [
    { rel: 'icon', href: favicon },
    { rel: 'icon', sizes: '192x192', href: chromeFavicon },
    { rel: 'apple-touch-icon', sizes: '152x152', href: appleFavicon },
    { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' }
  ];

  return links;
};

export const title = 'React Redux - :)';
export const meta = metaAssets();
export const link = linkAssets();
