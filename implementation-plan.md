Dobbiamo fare una cosa complessa. Bisogna creare un plugin nuovo chiamato "import-wordpress" basato sulle funzioni del plugin @import-sanmauro/ . In particolare le collection che userò per la fase di import di questo sito sono @src/api/articolo/ e @src/api/progetto/ , e considera che bisogna fare un import dei contenuti da un wordpress senza metacampi, per cui tutto quello che espone di base è tutto quello che ci serve.
Su wp ho due custom post type, post e portfolio, per cui post andrà in articolo mentre invece portfolio andrà in progetti.
Tutti i portfolio dove "portfolio_category" include 1025 li devi escludere dall'import.
Nel plugin non prevedere niente di più di quello che serve per un import da wp per strapi: nella cartella che ti ho dato come riferimento si fanno anche altre cose tipo export e letture da json che non mi interessano. 

Di seguito trovi un esempio di struttura json che restituisce la chiamata "https://www.panebarco.it/wp-json/wp/v2/portfolio": 

{
    "id": 17504,
    "date": "2025-02-12T14:26:36",
    "date_gmt": "2025-02-12T13:26:36",
    "guid": {
      "rendered": "https://www.panebarco.it/lavori/golia-active-plus-spot-tv-copy/"
    },
    "modified": "2025-02-28T16:51:08",
    "modified_gmt": "2025-02-28T15:51:08",
    "slug": "golia-active-plus-spot-tv-orsi-che-parlano",
    "status": "publish",
    "type": "portfolio",
    "link": "https://www.panebarco.it/lavori/golia-active-plus-spot-tv-orsi-che-parlano/",
    "title": {
      "rendered": "Vita dura per gli Orsi Marsicani!"
    },
    "content": {
      "rendered": "\n\u003Cp\u003ETornano le disavventure dell&#8217;Orso Marsicano del noto spot Golia Activ Plus e stavolta il nostro simpatico Orso non è solo! Raddoppiano gli spot e raddoppiano gli orsi!\u003C/p\u003E\n\n\n\n\u003Cfigure class=\"wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"\u003E\u003Cdiv class=\"wp-block-embed__wrapper\"\u003E\n\u003Ciframe loading=\"lazy\" title=\"Golia Activ Plus: il nuovo spot &quot;Alberi&quot; realizzato con il regista d’animazione Alessandro Carloni\" width=\"1080\" height=\"608\" src=\"https://www.youtube.com/embed/f0Zrn__I2Fc?start=1&#038;feature=oembed\"  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen\u003E\u003C/iframe\u003E\n\u003C/div\u003E\u003C/figure\u003E\n\n\n\n\u003Cp\u003ESquadra che vince non si cambia: anche in questo doppio spot abbiamo avuto il piacere di dare il nostro contributo digitale come \u003Cstrong\u003EPanebarco, \u003C/strong\u003Ecoordinati da \u003Cstrong\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https://spookeffects.com/\" target=\"_blank\"\u003ESpook\u003C/a\u003E\u003C/strong\u003E, società di post-produzione di Milano. In particolare, il nostro Matteo ha realizzato e animato gli orsi in 3D insieme ai nostri fidati collaboratori: \u003Cstrong\u003ESimone Nastagi\u003C/strong\u003E, \u003Cstrong\u003EAhmed Shalaby\u003C/strong\u003E, \u003Cstrong\u003ERegis Rodriguez\u003C/strong\u003E.\u003C/p\u003E\n\n\n\n\u003Cp\u003ELa regia è stata affidata ad \u003Cstrong\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https://www.imdb.com/it/name/nm1868917/\" target=\"_blank\"\u003EAlessandro Carloni\u003C/a\u003E\u003C/strong\u003E, noto per aver diretto \u003Cem\u003EKung Fu Panda 3\u003C/em\u003E e altri capolavori in animazione. Del resto, dal Panda che combatte agli orsi che volano il passo è davvero breve!\u003C/p\u003E\n\n\n\n\u003Cfigure class=\"wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio\"\u003E\u003Cdiv class=\"wp-block-embed__wrapper\"\u003E\n\u003Ciframe loading=\"lazy\" title=\"Golia Activ Plus: il nuovo spot &quot;Binocolo&quot; realizzato con il regista d’animazione Alessandro Carloni\" width=\"1080\" height=\"608\" src=\"https://www.youtube.com/embed/W_smIq9Xscw?feature=oembed\"  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen\u003E\u003C/iframe\u003E\n\u003C/div\u003E\u003C/figure\u003E\n\n\n\n\u003Ch4\u003ECredits\u003C/h4\u003E\n\n\n\n\u003Cp class=\"has-small-font-size\"\u003E\u003Cstrong\u003E\u003Cem\u003EClient\u003C/em\u003E\u003C/strong\u003E: \u003Ca rel=\"noreferrer noopener\" href=\"https://www.perfettivanmelle.it/\" target=\"_blank\"\u003EPerfetti Van Melle\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EProduct\u003C/em\u003E\u003C/strong\u003E: Golia Activ Plus\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003ESubject\u003C/em\u003E\u003C/strong\u003E: “Binocolo” &#8211; “Alberi”\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EAgency\u003C/em\u003E\u003C/strong\u003E: \u003Ca rel=\"noreferrer noopener\" href=\"https://www.linkedin.com/company/selection-s.r.l./?originalSubdomain=it\" target=\"_blank\"\u003ESelection Communication &amp; Design\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EAccount e Media Director\u003C/em\u003E\u003C/strong\u003E: Gianmaria Pasqual\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EAccount e Media Manager\u003C/em\u003E\u003C/strong\u003E: Cecilia Rossi\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EAccount Executive\u003C/em\u003E\u003C/strong\u003E: Silvia Pacini\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003ECreative Director\u003C/em\u003E\u003C/strong\u003E: Antonia Capasso\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003ECopywriter\u003C/em\u003E\u003C/strong\u003E: Marco Pappalardo\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EArt Director\u003C/em\u003E\u003C/strong\u003E: Stefano Colombo\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003ECGI\u003C/em\u003E\u003C/strong\u003E \u003Cstrong\u003E\u003Cem\u003EDirector \u003C/em\u003E\u003C/strong\u003E: \u003Ca rel=\"noreferrer noopener\" href=\"https://www.imdb.com/it/name/nm1868917/\" target=\"_blank\"\u003EAlessandro Carloni\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003ELive Action Director\u003C/em\u003E\u003C/strong\u003E: \u003Ca rel=\"noreferrer noopener\" href=\"https://william9.com/\" target=\"_blank\"\u003EWilliam 9\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EProduction\u003C/em\u003E\u003C/strong\u003E: Selection Production\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EExecutive Producer\u003C/em\u003E\u003C/strong\u003E: Marta Stella\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003ECinematographer\u003C/em\u003E\u003C/strong\u003E: \u003Ca rel=\"noreferrer noopener\" href=\"https://diegoindraccolo.squarespace.com/\" target=\"_blank\"\u003EDiego Indraccolo\u003C/a\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EEditor\u003C/em\u003E\u003C/strong\u003E: Marco Bonini\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EPost Production\u003C/em\u003E\u003C/strong\u003E: \u003Ca href=\"https://spookeffects.com/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ESpook\u003C/a\u003E, Panebarco\u003C/p\u003E\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "\u003Cp\u003ETornano le disavventure dell&#8217;Orso Marsicano del noto spot Golia Activ Plus e stavolta il nostro simpatico Orso non è solo! Raddoppiano gli spot e raddoppiano gli orsi! Squadra che vince non si cambia: anche in questo doppio spot abbiamo avuto il piacere di dare il nostro contributo digitale come Panebarco, coordinati da Spook, società di [&hellip;]\u003C/p\u003E\n",
      "protected": false
    },
    "author": 2,
    "featured_media": 17506,
    "menu_order": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "template": "",
    "format": "standard",
    "meta": {
      "_et_pb_use_builder": "",
      "_et_pb_old_content": "",
      "_et_gb_content_width": "",
      "_vp_format_video_url": "https://www.youtube.com/watch?v=xgyGwEHJYAk",
      "_vp_image_focal_point": {
        "x": "0.24",
        "y": "0.46"
      }
    },
    "portfolio_category": [980, 973, 737, 738, 977, 968],
    "portfolio_tag": [982, 1019, 984, 1030],
    "_links": {
      "self": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio/17504"
        }
      ],
      "collection": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio"
        }
      ],
      "about": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/types/portfolio"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/users/2"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/comments?post=17504"
        }
      ],
      "version-history": [
        {
          "count": 4,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio/17504/revisions"
        }
      ],
      "predecessor-version": [
        {
          "id": 17542,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio/17504/revisions/17542"
        }
      ],
      "wp:featuredmedia": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/media/17506"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/media?parent=17504"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "portfolio_category",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio_category?post=17504"
        },
        {
          "taxonomy": "portfolio_tag",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio_tag?post=17504"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  },
  {
    "id": 17518,
    "date": "2025-02-17T16:58:58",
    "date_gmt": "2025-02-17T15:58:58",
    "guid": {
      "rendered": "https://www.panebarco.it/lavori/rwt-copy/"
    },
    "modified": "2025-03-17T18:24:39",
    "modified_gmt": "2025-03-17T17:24:39",
    "slug": "lighthistory",
    "status": "publish",
    "type": "portfolio",
    "link": "https://www.panebarco.it/lavori/lighthistory/",
    "title": {
      "rendered": "LightHistory &#8211; alcuni spunti"
    },
    "content": {
      "rendered": "",
      "protected": true
    },
    "excerpt": {
      "rendered": "",
      "protected": true
    },
    "author": 4,
    "featured_media": 0,
    "menu_order": 0,
    "comment_status": "closed",
    "ping_status": "closed",
    "template": "",
    "format": "standard",
    "meta": {
      "_et_pb_use_builder": "",
      "_et_pb_old_content": "",
      "_et_gb_content_width": "",
      "_vp_format_video_url": "",
      "_vp_image_focal_point": {
        "x": "0.47",
        "y": "0.54"
      }
    },
    "portfolio_category": [1025],
    "portfolio_tag": [],
    "_links": {
      "self": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio/17518"
        }
      ],
      "collection": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio"
        }
      ],
      "about": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/types/portfolio"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/users/4"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/comments?post=17518"
        }
      ],
      "version-history": [
        {
          "count": 13,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio/17518/revisions"
        }
      ],
      "predecessor-version": [
        {
          "id": 18338,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio/17518/revisions/18338"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/media?parent=17518"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "portfolio_category",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio_category?post=17518"
        },
        {
          "taxonomy": "portfolio_tag",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/portfolio_tag?post=17518"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  },

Ovviamente ho circa 200 entries nel cpt portfolio per cui modifica l'url per chiedere via GET tutti i contenuti che esistono ed evitare la paginazione.

Qui invece hai un esempio di quello che restituisce la chiamata "https://www.panebarco.it/wp-json/wp/v2/posts": 

{
    "id": 18333,
    "date": "2026-01-16T09:32:20",
    "date_gmt": "2026-01-16T08:32:20",
    "guid": {
      "rendered": "https://www.panebarco.it/?p=18333"
    },
    "modified": "2026-01-16T09:32:21",
    "modified_gmt": "2026-01-16T08:32:21",
    "slug": "dove-finiscono-i-baci-quando-manca-la-mamma-nasce-il-bacio-nel-taschino",
    "status": "publish",
    "type": "post",
    "link": "https://www.panebarco.it/paneblog/dove-finiscono-i-baci-quando-manca-la-mamma-nasce-il-bacio-nel-taschino/",
    "title": {
      "rendered": "Dove finiscono i baci quando manca la mamma? Nasce &#8220;Il bacio nel taschino&#8221;"
    },
    "content": {
      "rendered": "\n\u003Cp\u003EQuest’anno lo \u003Ca rel=\"noreferrer noopener\" href=\"https://zecchinodoro.org/coroantoniano/\" data-type=\"URL\" data-id=\"https://zecchinodoro.org/coroantoniano/\" target=\"_blank\"\u003EZecchino d’Oro\u003C/a\u003E ci ha fatto un regalo speciale, e noi lo abbiamo scartato fotogramma dopo fotogramma.\u003Cbr\u003EIl nostro studio è stato selezionato per realizzare uno dei cortometraggi animati che da oltre vent’anni accompagnano le canzoni del \u003Cem\u003EPiccolo Coro dell’Antoniano\u003C/em\u003E, e l’emozione è stata davvero grande.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003E“Il bacio nel taschino” \u003C/strong\u003Eè una canzoncina animata tenera ma allo stesso tempo coraggiosa, che racconta di una bambina e di un bacio della mamma custodito nella tasca della felpa, pronto da tirare fuori quando la nostalgia bussa forte.\u003Cbr\u003EUn’idea semplice, ma potentissima, capace di parlare ai più piccoli e far sorridere anche i grandi. Con le musiche di \u003Cstrong\u003ECarmine Spera\u003C/strong\u003E, sul testo di \u003Cstrong\u003EIrene Menna,\u003C/strong\u003E la storia si colora grazie all’interpretazione della dolce \u003Cstrong\u003EZoe\u003C/strong\u003E.\u003C/p\u003E\n\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"1024\" height=\"570\" src=\"https://www.panebarco.it/wordpress/wp-content/uploads/2026/01/Screenshot-2026-01-12-124003-1024x570.png\" alt=\"\" class=\"wp-image-18335\" srcset=\"https://www.panebarco.it/wordpress/wp-content/uploads/2026/01/Screenshot-2026-01-12-124003-980x546.png 980w, https://www.panebarco.it/wordpress/wp-content/uploads/2026/01/Screenshot-2026-01-12-124003-480x267.png 480w\" sizes=\"(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw\" /\u003E\u003C/figure\u003E\n\n\n\n\u003Cp\u003ELa versione animata, (\u003Ca rel=\"noreferrer noopener\" href=\"https://www.youtube.com/watch?v=3ujwHP0cvUk&amp;list=RD3ujwHP0cvUk&amp;start_radio=1\" target=\"_blank\"\u003EPiccolo Coro dell&#8217;Antoniano &#8211; Il bacio nel taschino (Cartoon &#8211; 68° Zecchino d&#8217;Oro)\u003C/a\u003E, una produzione Antoniano in collaborazione con Rai, ha preso forma dal lavoro dello studio di \u003Cstrong\u003E\u003Ca href=\"https://www.panebarco.it/\" data-type=\"URL\" data-id=\"https://www.panebarco.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EPanebarco\u003C/a\u003E\u003C/strong\u003E, con il coordinamento creativo di \u003Cstrong\u003EFederico Fiecconi\u003C/strong\u003E; la regia e la direzione artistica sono firmate da \u003Cstrong\u003EMatteo Panebarco\u003C/strong\u003E che ha curato anche la modellazione 3D, il rigging e parte delle animazioni, dando vita a un mondo vivace e coerente in ogni dettaglio. Ricordiamo un paio di lavori recenti di Matteo in ambito cortometraggi citando \u003Cstrong\u003EChristmas at Hen&#8217;s \u003C/strong\u003E(\u003Ca href=\"https://www.youtube.com/watch?v=d3ef1hdUgvY\" target=\"_blank\" rel=\"noreferrer noopener\"\u003Ehttps://www.youtube.com/watch?v=d3ef1hdUgvY\u003C/a\u003E ) e\u003Cbr\u003E\u003Cstrong\u003ECaramelle \u003C/strong\u003E(trailer \u003Ca href=\"https://www.youtube.com/watch?v=i6Ok-m_pORA\" target=\"_blank\" rel=\"noreferrer noopener\"\u003Ehttps://www.youtube.com/watch?v=i6Ok-m_pORA\u003C/a\u003E ma se lo vuoi vedere integralmente iscriviti a \u003Ca href=\"https://weshort.com/home\" data-type=\"URL\" data-id=\"https://weshort.com/home\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EWeShort\u003C/a\u003E la piattaforma dedicata al cinema breve, il primo mese è gratuito, \u003Ca href=\"https://weshort.com/home\" data-type=\"URL\" data-id=\"https://weshort.com/home\" target=\"_blank\" rel=\"noreferrer noopener\"\u003Ewww.weshort.com\u003C/a\u003E)\u003C/p\u003E\n\n\n\n\u003Cp\u003EAccanto a lui, la produzione è stata guidata da \u003Cstrong\u003EMarianna Panebarco\u003C/strong\u003E come responsabile di produzione e da \u003Cstrong\u003ECamilla Panebarco\u003C/strong\u003E come direttrice di produzione, garantendo equilibrio tra visione creativa e organizzazione.\u003Cbr\u003ELo storyboard di \u003Cstrong\u003ELucia Sacchetti\u003C/strong\u003E ha tracciato il ritmo visivo della storia, mentre il character design nasce dal lavoro condiviso di \u003Cstrong\u003EMatteo Panebarco\u003C/strong\u003E, \u003Cstrong\u003ELucia Sacchetti\u003C/strong\u003E e \u003Cstrong\u003EMaria Ancherani\u003C/strong\u003E.\u003C/p\u003E\n\n\n\n\u003Cp\u003EProprio \u003Cstrong\u003EMaria Ancherani\u003C/strong\u003E ha firmato anche texture e matte painting, aggiungendo profondità e calore agli ambienti, mentre le animazioni prendono vita grazie al contributo di \u003Cstrong\u003EMatteo Panebarco\u003C/strong\u003E, \u003Cstrong\u003ELucia Sacchetti\u003C/strong\u003E e \u003Cstrong\u003ERegis Rodríguez Román\u003C/strong\u003E.\u003Cbr\u003EA tenere insieme anche il lato più concreto del progetto, l’occhio attento di \u003Cstrong\u003EAgata Brisci\u003C/strong\u003E come responsabile amministrativa.\u003C/p\u003E\n\n\n\n\u003Cp\u003EBuona visione… e tieni pronto anche tu un bacio nel taschino 😘\u003C/p\u003E\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "\u003Cp\u003EQuest’anno lo Zecchino d’Oro ci ha fatto un regalo speciale, e noi lo abbiamo scartato fotogramma dopo fotogramma.Il nostro studio è stato selezionato per realizzare uno dei cortometraggi animati che da oltre vent’anni accompagnano le canzoni del Piccolo Coro dell’Antoniano, e l’emozione è stata davvero grande. “Il bacio nel taschino” è una canzoncina animata tenera [&hellip;]\u003C/p\u003E\n",
      "protected": false
    },
    "author": 11,
    "featured_media": 18334,
    "comment_status": "closed",
    "ping_status": "open",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": {
      "_et_pb_use_builder": "off",
      "_et_pb_old_content": "",
      "_et_gb_content_width": "",
      "_vp_format_video_url": "",
      "_vp_image_focal_point": {
        "x": "0.59",
        "y": "0.25"
      }
    },
    "categories": [33],
    "tags": [763, 1061, 381, 260, 1060, 762, 1062, 646, 1059],
    "_links": {
      "self": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts/18333"
        }
      ],
      "collection": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts"
        }
      ],
      "about": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/types/post"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/users/11"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/comments?post=18333"
        }
      ],
      "version-history": [
        {
          "count": 2,
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts/18333/revisions"
        }
      ],
      "predecessor-version": [
        {
          "id": 18339,
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts/18333/revisions/18339"
        }
      ],
      "wp:featuredmedia": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/media/18334"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/media?parent=18333"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "category",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/categories?post=18333"
        },
        {
          "taxonomy": "post_tag",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/tags?post=18333"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  },
  {
    "id": 17850,
    "date": "2025-11-14T11:24:28",
    "date_gmt": "2025-11-14T10:24:28",
    "guid": {
      "rendered": "https://www.panebarco.it/?p=17850"
    },
    "modified": "2025-11-24T14:15:30",
    "modified_gmt": "2025-11-24T13:15:30",
    "slug": "%f0%9f%8e%ac-ravenna-take-a-look-dietro-le-quinte-di-un-videoclip-che-fa-ballare-la-citta",
    "status": "publish",
    "type": "post",
    "link": "https://www.panebarco.it/paneblog/%f0%9f%8e%ac-ravenna-take-a-look-dietro-le-quinte-di-un-videoclip-che-fa-ballare-la-citta/",
    "title": {
      "rendered": "🎬 “Ravenna, Take a Look”: dietro le quinte di un videoclip che fa ballare la città"
    },
    "content": {
      "rendered": "\n\u003Cp\u003ELe riprese sono finite, le telecamere si sono spente, ma l’energia resta nell’aria: \u003Cem\u003E“Ravenna, Take a Look”\u003C/em\u003E è pronto a raccontare la città al mondo intero. Non un semplice videoclip, ma un mosaico di volti, voci e movimenti che restituisce Ravenna nella sua doppia anima: custode di una storia millenaria e laboratorio pulsante di creatività contemporanea.\u003C/p\u003E\n\n\n\n\u003Cp\u003EIl progetto nasce all’interno di \u003Ca rel=\"noreferrer noopener\" href=\"https://comune.ravenna.it/progetto/ravenna-welcomes-talents/\" target=\"_blank\"\u003E\u003Cstrong\u003ERavenna Welcomes Talents\u003C/strong\u003E\u003C/a\u003E, promosso dal \u003Ca href=\"https://comune.ravenna.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EComune di Ravenna\u003C/a\u003E e co-finanziato dalla \u003Ca href=\"https://www.regione.emilia-romagna.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ERegione Emilia Romagna\u003C/a\u003E grazie alla Legge Regionale 2/2023 per l’Attrazione e la Valorizzazione dei Talenti.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EUna regia che sa di ritmo\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EAlla guida del set c’era \u003Cstrong\u003EGerardo Lamattina\u003C/strong\u003E, regista che ama mescolare poesia visiva e ritmo urbano. A dargli la materia prima, la canzone originale del Maestro \u003Cstrong\u003ERiccardo Nanni\u003C/strong\u003E (sì, proprio lui, l’autore di “Mueve la colita” – un evergreen che ha fatto muovere più bacini di un DJ set estivo). La voce è quella di \u003Cstrong\u003EOttavia Salerno\u003C/strong\u003E, giovanissima cantante che ha illuminato le riprese con un timbro intenso e sorprendentemente maturo: una promessa che non ha paura di prendersi la scena.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EUna città che danza\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EIl videoclip è stato prodotto da \u003Ca href=\"https://www.panebarco.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003E\u003Cstrong\u003EPanebarco\u003C/strong\u003E\u003C/a\u003E, con la consulenza artistica di \u003Cstrong\u003EMonica Ratti\u003C/strong\u003E, che da anni porta la danza in ogni angolo della città. E infatti Ravenna, per qualche giorno, si è trasformata in un grande palcoscenico a cielo aperto: dal centro storico alla Darsena, ogni scorcio è diventato cornice di passi, salti e acrobazie.\u003C/p\u003E\n\n\n\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"1024\" height=\"768\" src=\"https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-1024x768.jpeg\" alt=\"\" class=\"wp-image-17854\" srcset=\"https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-1024x768.jpeg 1024w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-300x225.jpeg 300w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-768x576.jpeg 768w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-1536x1152.jpeg 1536w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-2048x1536.jpeg 2048w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-500x375.jpeg 500w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-800x600.jpeg 800w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-1280x960.jpeg 1280w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/IMG_1202-1920x1440.jpeg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /\u003E\u003C/figure\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EI protagonisti: dal parkour ai plié\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003ENon potevano mancare le realtà cittadine che tengono viva la scena culturale:\u003C/p\u003E\n\n\n\n\u003Cul\u003E\u003Cli\u003EL’\u003Cstrong\u003EAccademia di Belle Arti di Ravenna\u003C/strong\u003E (\u003Ca href=\"https://www.abaravenna.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EABARavenna\u003C/a\u003E), fucina di creativi che hanno dato colore e visione.\u003C/li\u003E\u003Cli\u003EIl \u003Cstrong\u003EConservatorio Statale Giuseppe Verdi\u003C/strong\u003E (\u003Ca href=\"https://www.verdiravenna.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EVerdiRavenna\u003C/a\u003E), che ha portato la musica “seria” a dialogare con quella pop.\u003C/li\u003E\u003Cli\u003ELe scuole di danza \u003Cstrong\u003EI RiBelli del Ballo\u003C/strong\u003E (\u003Ca href=\"http://www.iribellidelballo.com/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EiRibellidelBallo\u003C/a\u003E), \u003Cstrong\u003ECecchetti Academy\u003C/strong\u003E (\u003Ca href=\"https://cecchettiacademy.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ECecchettiAcademy\u003C/a\u003E) e \u003Cstrong\u003ELo Zodiaco ASD\u003C/strong\u003E (\u003Ca href=\"https://www.palestralozodiaco.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ELoZodiaco\u003C/a\u003E), che hanno fatto volteggiare ballerini di ogni età.\u003C/li\u003E\u003Cli\u003EI ragazzi di \u003Cstrong\u003EShine Parkour\u003C/strong\u003E (\u003Ca href=\"https://www.shineparkour.com/ravenna\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EShineParkour\u003C/a\u003E), che hanno trasformato muri e scalinate in trampolini di libertà.\u003C/li\u003E\u003Cli\u003ELa breaker \u003Cstrong\u003EEmma Bonanzi\u003C/strong\u003E, capace di piegare la gravità con un sorriso.\u003C/li\u003E\u003Cli\u003EE ancora il \u003Cstrong\u003ECentro Europe Direct della Romagna\u003C/strong\u003E (\u003Ca href=\"https://europa.regione.emilia-romagna.it/chi-siamo/la-rete/europe_direct_romagna\" target=\"_blank\" rel=\"noreferrer noopener\"\u003EEuropeDirectRomagna\u003C/a\u003E), il \u003Cstrong\u003ECampus UniBO di Ravenna\u003C/strong\u003E (\u003Ca href=\"https://www.unibo.it/it/campus-ravenna\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ECampusdiRavenna\u003C/a\u003E), la \u003Cstrong\u003ECasa delle Culture\u003C/strong\u003E (\u003Ca href=\"https://comune.ravenna.it/vivere-il-comune/luoghi/centro-per-lassistenza-e-la-tutela-sociale/casa-delle-culture/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ECasadelleCulture\u003C/a\u003E), l’\u003Cstrong\u003EAssociazione ESN\u003C/strong\u003E (\u003Ca rel=\"noreferrer noopener\" href=\"https://ravenna.esn.it/\" target=\"_blank\"\u003EESNRavenna\u003C/a\u003E) e la \u003Cstrong\u003ECooperativa Librazione\u003C/strong\u003E (\u003Ca href=\"https://librazione.org/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ELibrAzione\u003C/a\u003E), che hanno portato il respiro internazionale di una città che da anni accoglie studenti e studentesse da tutto il mondo.\u003C/li\u003E\u003C/ul\u003E\n\n\n\n\u003Cfigure class=\"wp-block-gallery has-nested-images columns-default is-cropped\"\u003E\n\u003Cfigure class=\"wp-block-image size-large\"\u003E\u003Cimg loading=\"lazy\" width=\"1024\" height=\"576\" data-id=\"17853\"  src=\"https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-1024x576.jpg\" alt=\"\" class=\"wp-image-17853\" srcset=\"https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-1024x576.jpg 1024w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-300x169.jpg 300w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-768x432.jpg 768w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-1536x864.jpg 1536w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-2048x1152.jpg 2048w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-500x281.jpg 500w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-800x450.jpg 800w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-1280x720.jpg 1280w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/11/DJI_0339-1920x1080.jpg 1920w\" sizes=\"(max-width: 1024px) 100vw, 1024px\" /\u003E\u003C/figure\u003E\n\u003C/figure\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ERavenna, lasciati sorprendere\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EIl titolo \u003Cem\u003E“Ravenna, Take a Look”\u003C/em\u003E non è un semplice invito a guardare: è un “lasciati sorprendere”. Perché Ravenna non si limita a mostrarsi, ma ti prende per mano e ti porta dentro la sua energia. Il videoclip diventa così un biglietto da visita emozionale, pronto a viaggiare sui social del Comune e della Regione e a fare da colonna sonora alle iniziative locali e internazionali di \u003Cem\u003ERavenna Welcomes Talents\u003C/em\u003E.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EComunicazione con passione\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EIl progetto fa parte delle iniziative di comunicazione visual curate da \u003Cstrong\u003EPanebarco\u003C/strong\u003E insieme a \u003Ca href=\"https://www.happyminds.it/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003E\u003Cstrong\u003EHappy Minds\u003C/strong\u003E\u003C/a\u003E, con lo stesso amore e la stessa attenzione che si dedica a un mosaico: ogni tessera al posto giusto, ogni dettaglio pensato per brillare.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EE ora… ciak, si balla!\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EIl videoclip sarà presentato a breve alla cittadinanza. Poi inizierà il suo viaggio digitale, pronto a far ballare chiunque lo guardi. Perché Ravenna non è solo la città dei mosaici: è un luogo dove talento e meraviglia si incontrano, e dove anche un passo di danza può diventare patrimonio culturale.\u003C/p\u003E\n\n\n\n\u003Cp class=\"has-text-align-center\"\u003EHanno parlato del nostro progetto anche le seguenti testate giornalistiche: \u003Cbr\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https://comune.ravenna.it/novita/comunicato-stampa/terminate-le-riprese-del-videoclip-ravenna-take-a-look-nellambito-del-progetto-ravenna-welcomes-talents/\" target=\"_blank\"\u003EComune di Ravenna\u003C/a\u003E\u003Cbr\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https://www.ravennanotizie.it/0-copertina/2025/11/12/terminate-le-riprese-del-videoclip-ravenna-take-a-look-che-raccontare-la-citta-al-sua-anima-creativa-e-artistica/\" target=\"_blank\"\u003ERavennaNotizie.it\u003C/a\u003E\u003Cbr\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https://www.ravennawebtv.it/terminate-le-riprese-del-videoclip-ravenna-take-a-look-nellambito-del-progetto-ravenna-welcomes-talents/\" target=\"_blank\"\u003ERavennaWebTv\u003C/a\u003E\u003Cbr\u003E\u003Ca rel=\"noreferrer noopener\" href=\"https://www.corriereromagna.it/ravenna/ravenna-take-a-look-terminate-le-riprese-del-videoclip-FF1744043\" target=\"_blank\"\u003ECorriere Romagna\u003C/a\u003E\u003Cbr\u003E\u003Ca href=\"https://www.ravennaierioggidomani.it/ravenna-take-a-look-la-citta-si-racconta-in-musica-e-immagini/\" target=\"_blank\" rel=\"noreferrer noopener\"\u003ERavenna Ieri Oggi Domani\u003C/a\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003C/p\u003E\n",
      "protected": false
    },
    "excerpt": {
      "rendered": "\u003Cp\u003ELe riprese sono finite, le telecamere si sono spente, ma l’energia resta nell’aria: “Ravenna, Take a Look” è pronto a raccontare la città al mondo intero. Non un semplice videoclip, ma un mosaico di volti, voci e movimenti che restituisce Ravenna nella sua doppia anima: custode di una storia millenaria e laboratorio pulsante di creatività [&hellip;]\u003C/p\u003E\n",
      "protected": false
    },
    "author": 11,
    "featured_media": 17851,
    "comment_status": "closed",
    "ping_status": "open",
    "sticky": false,
    "template": "",
    "format": "standard",
    "meta": {
      "_et_pb_use_builder": "",
      "_et_pb_old_content": "",
      "_et_gb_content_width": "",
      "_vp_format_video_url": "",
      "_vp_image_focal_point": []
    },
    "categories": [33],
    "tags": [1053, 1055, 516, 1051, 1054],
    "_links": {
      "self": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts/17850"
        }
      ],
      "collection": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts"
        }
      ],
      "about": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/types/post"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/users/11"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/comments?post=17850"
        }
      ],
      "version-history": [
        {
          "count": 5,
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts/17850/revisions"
        }
      ],
      "predecessor-version": [
        {
          "id": 17891,
          "href": "https://www.panebarco.it/wp-json/wp/v2/posts/17850/revisions/17891"
        }
      ],
      "wp:featuredmedia": [
        {
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/media/17851"
        }
      ],
      "wp:attachment": [
        {
          "href": "https://www.panebarco.it/wp-json/wp/v2/media?parent=17850"
        }
      ],
      "wp:term": [
        {
          "taxonomy": "category",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/categories?post=17850"
        },
        {
          "taxonomy": "post_tag",
          "embeddable": true,
          "href": "https://www.panebarco.it/wp-json/wp/v2/tags?post=17850"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  },

Anche qui evita paginazione tramite parametri GET (prendi spunto dalle chiamate fatte nella cartella di riferimento).

Associa i campi di wp a quelli di strapi come segue (la coppie chiave-valore sono costruite secondo l'accoppiamento strapi-wp): 

articolo: {
    titolo: title.rendered,
    slug: slug,
    contenuto: content.rendered,
    seo.metaTitle: title.rendered (max. 60 characters),
    seo.metaDescription: excerpt.rendered || content.rendered (min. 50 / max. 160 characters), 
    seo.metaSocial[0].socialNetwork: "Facebook",
    seo.metaSocial[0].title: title.rendered (max. 60 characters),
    seo.metaSocial[0].description: excerpt.rendered || content.rendered (max. 65 characters),
    seo.metaSocial[1].socialNetwork: "Twitter",
    seo.metaSocial[1].title: title.rendered (max. 60 characters),
    seo.metaSocial[1].description: excerpt.rendered || content.rendered (max. 65 characters),
}

progetto: {
    titolo: title.rendered,
    slug: slug,
    contenutoImport: content.rendered,
    seo.metaTitle: title.rendered (max. 60 characters),
    seo.metaDescription: excerpt.rendered || content.rendered (min. 50 / max. 160 characters), 
    seo.metaSocial[0].socialNetwork: "Facebook",
    seo.metaSocial[0].title: title.rendered (max. 60 characters),
    seo.metaSocial[0].description: excerpt.rendered || content.rendered (max. 65 characters),
    seo.metaSocial[1].socialNetwork: "Twitter",
    seo.metaSocial[1].title: title.rendered (max. 60 characters),
    seo.metaSocial[1].description: excerpt.rendered || content.rendered (max. 65 characters),
}

In aggiunta a questi, per quanto riguarda le immagini, devi seguire ogni volta il link dentro questa proprietà: 

"wp:featuredmedia": [
    {
        "embeddable": true,
        "href": "https://www.panebarco.it/wp-json/wp/v2/media/17506"
    }
],

E a quell'endpoint ti ritroverai una struttura del genere: 

{
  "id": 17506,
  "date": "2025-02-12T14:57:38",
  "date_gmt": "2025-02-12T13:57:38",
  "guid": {
    "rendered": "http://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54.png"
  },
  "modified": "2025-02-12T14:57:38",
  "modified_gmt": "2025-02-12T13:57:38",
  "slug": "screenshot-2025-02-12-alle-14-54-54",
  "status": "inherit",
  "type": "attachment",
  "link": "https://www.panebarco.it/lavori/golia-active-plus-spot-tv-orsi-che-parlano/screenshot-2025-02-12-alle-14-54-54/",
  "title": {
    "rendered": "Screenshot 2025-02-12 alle 14.54.54"
  },
  "author": 2,
  "comment_status": "closed",
  "ping_status": "closed",
  "template": "",
  "meta": {
    "_et_pb_use_builder": "",
    "_et_pb_old_content": "",
    "_et_gb_content_width": "",
    "_vp_format_video_url": "",
    "_vp_image_focal_point": []
  },
  "description": {
    "rendered": "\u003Cp class=\"attachment\"\u003E\u003Ca href='https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54.png'\u003E\u003Cimg width=\"300\" height=\"153\" src=\"https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-300x153.png\" class=\"attachment-medium size-medium\" alt=\"\" loading=\"lazy\" srcset=\"https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-300x153.png 300w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1024x521.png 1024w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-768x390.png 768w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1536x781.png 1536w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-2048x1041.png 2048w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-500x254.png 500w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-800x407.png 800w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1280x651.png 1280w, https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1920x976.png 1920w\" sizes=\"(max-width: 300px) 100vw, 300px\" /\u003E\u003C/a\u003E\u003C/p\u003E\n"
  },
  "caption": {
    "rendered": ""
  },
  "alt_text": "",
  "media_type": "image",
  "mime_type": "image/png",
  "media_details": {
    "width": 2860,
    "height": 1454,
    "file": "2025/02/Screenshot-2025-02-12-alle-14.54.54.png",
    "sizes": {
      "medium": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-300x153.png",
        "width": 300,
        "height": 153,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-300x153.png"
      },
      "large": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-1024x521.png",
        "width": 1024,
        "height": 521,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1024x521.png"
      },
      "thumbnail": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-150x150.png",
        "width": 150,
        "height": 150,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-150x150.png"
      },
      "medium_large": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-768x390.png",
        "width": 768,
        "height": 390,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-768x390.png"
      },
      "1536x1536": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-1536x781.png",
        "width": 1536,
        "height": 781,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1536x781.png"
      },
      "2048x2048": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-2048x1041.png",
        "width": 2048,
        "height": 1041,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-2048x1041.png"
      },
      "widget-thumbnail": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-75x75.png",
        "width": 75,
        "height": 75,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-75x75.png"
      },
      "vp_sm": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-500x254.png",
        "width": 500,
        "height": 254,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-500x254.png"
      },
      "vp_md": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-800x407.png",
        "width": 800,
        "height": 407,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-800x407.png"
      },
      "vp_lg": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-1280x651.png",
        "width": 1280,
        "height": 651,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1280x651.png"
      },
      "vp_xl": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-1920x976.png",
        "width": 1920,
        "height": 976,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1920x976.png"
      },
      "vp_sm_popup": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-500x254.png",
        "width": 500,
        "height": 254,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-500x254.png"
      },
      "vp_md_popup": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-800x407.png",
        "width": 800,
        "height": 407,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-800x407.png"
      },
      "vp_xl_popup": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-1920x976.png",
        "width": 1920,
        "height": 976,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-1920x976.png"
      },
      "twentyseventeen-featured-image": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-2000x1200.png",
        "width": 2000,
        "height": 1200,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-2000x1200.png"
      },
      "twentyseventeen-thumbnail-avatar": {
        "file": "Screenshot-2025-02-12-alle-14.54.54-100x100.png",
        "width": 100,
        "height": 100,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54-100x100.png"
      },
      "full": {
        "file": "Screenshot-2025-02-12-alle-14.54.54.png",
        "width": 2860,
        "height": 1454,
        "mime_type": "image/png",
        "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54.png"
      }
    },
    "image_meta": {
      "aperture": "0",
      "credit": "",
      "camera": "",
      "caption": "",
      "created_timestamp": "0",
      "copyright": "",
      "focal_length": "0",
      "iso": "0",
      "shutter_speed": "0",
      "title": "",
      "orientation": "0",
      "keywords": []
    }
  },
  "post": 17504,
  "source_url": "https://www.panebarco.it/wordpress/wp-content/uploads/2025/02/Screenshot-2025-02-12-alle-14.54.54.png",
  "_links": {
    "self": [
      {
        "href": "https://www.panebarco.it/wp-json/wp/v2/media/17506"
      }
    ],
    "collection": [
      {
        "href": "https://www.panebarco.it/wp-json/wp/v2/media"
      }
    ],
    "about": [
      {
        "href": "https://www.panebarco.it/wp-json/wp/v2/types/attachment"
      }
    ],
    "author": [
      {
        "embeddable": true,
        "href": "https://www.panebarco.it/wp-json/wp/v2/users/2"
      }
    ],
    "replies": [
      {
        "embeddable": true,
        "href": "https://www.panebarco.it/wp-json/wp/v2/comments?post=17506"
      }
    ]
  }
}

Da questo oggetto dovrai scaricare e poi ricaricare su Strapi l'immagine che trovi alla proprietà "guid.rendered": a caricamento riuscito Strapi ti restituirà l'ID dell'immagine da lui elaborata e a quel punto nei campi "cover", seo.metaImage, seo.metaSocial[0].image e seo.metaSocial[1].image di ogni collection dovrai inserire l'id di strapi.

Per quanto riguarda invece l'accoppiamento delle vecchie tassonomie di WP alle nuove relazioni su Strapi, questo è il JSON che dovrai usare come guida per associare ogni relazione. Considera che tutte le relations dei due collection types sono manyToMany, per cui bisogna sempre preparare un array con i relativi documentId indicati. Leggi la struttura: ci sono due macro proprietà "articolo" e "progetto", ognuna dei quali ha una delle proprietà che corrispondono ai nomi delle tassonomie (per come compaiono nei JSON delle chiamate API) del relativo custom post type su wordpress (categories per i post e portfolio_category e portfolio_tag per portfolio). Per ogni proprietà dentro questi ultimi troverai l'id associato su WP, a quel punto ignora la proprietà "nome" che serve solo a me per orientarmi meglio quando li scrivo e li aggiorno, e leggi tutte le altre proprietà (per esempio categoria_articolo, categoria_progetto, tipologia_progetto eccetera): quelli sono i nomi delle relations della collection type con le altre collection types, per cui a seconda della variabile di ambiente AMBIENTE_DI_LAVORO tieni in considerazione i documentId dentro "dev" o "prod" (al momento non ho documentId in produzione in quanto non ho ancora pubblicato il mio Strapi online) e aggiungili all'oggetto finale per aggiungere una nuova entità su Strapi secondo le regole di Strapi, è molto importante che ti guardi la documentazione.

"articolo": {
  "categories": {
    "35": {
      "nome": "Il Pane Quotidiano",
      "categoria_articolo": {
        "dev": ["duq24s21jrct6pv5hqdeqn2s"],
        "prod": ["Il Pane Quotidiano"]
      }
    },
    "32": {
      "nome": "Los Panebarcos",
      "categoria_articolo": {
        "dev": ["widgdjru556ecj9y0g9sxt2j"],
        "prod": ["Los Panebarcos"]
      }
    },
    "33": {
      "nome": "News dalla Bottega",
      "categoria_articolo": {
        "dev": ["bpdlnyto0yw82a9f4blmah1o"],
        "prod": ["News dalla Bottega"]
      }
    },
    "37": {
      "nome": "Pensieri sparsi",
      "categoria_articolo": {
        "dev": ["il9m8qgisot3bujuki6f452h"],
        "prod": ["Pensieri sparsi"]
      }
    },
    "34": {
      "nome": "Retrobottega",
      "categoria_articolo": {
        "dev": ["wgw8uw6bl33bxjzv8abj6fs3"],
        "prod": ["Retrobottega"]
      }
    },
    "36": {
      "nome": "Storie di 90 animali (o poco più)",
      "categoria_articolo": {
        "dev": ["px0u8jralxswnvu4ah8n6rsf"],
        "prod": ["Storie di 90 animali (o poco più)"]
      }
    },
    "71": {
      "nome": "Video & dintorni",
      "categoria_articolo": {
        "dev": ["hiy425jkmsnnhrz347ia9qgu"],
        "prod": ["Video & dintorni"]
      }
    }
  }
},
"progetto": {
  "portfolio_category": {
    "973": {
      "nome": "Cinema, TV ed eventi",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": ["w1seqcpmzpzhf6ycuthflp7c"],
        "prod": ["Cinema e audiovisivo"]
      },
      "canali_distribuzione": {
        "dev": ["al807hyc68w9ulgt8ay2n1az", "syrbupaqkfdymwpfqlfdn2xx"],
        "prod": ["TV", "Cinema"]
      }
    },
    "970": {
      "nome": "Descrivere",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "969": {
      "nome": "Divulgare",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "976": {
      "nome": "Fan, follower e appassionati",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "974": {
      "nome": "Fiere e congressi",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "746": {
      "nome": "Motion graphics",
      "categoria_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["Motion graphics"],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "977": {
      "nome": "Pubblico generico",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "978": {
      "nome": "Pubblico specialistico",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "968": {
      "nome": "Raccontare",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "740": {
      "nome": "Startup",
      "categoria_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": ["uh8x7ka7c77ixievmxq7506t"],
        "prod": ["Marketing"]
      },
      "canali_distribuzione": {
        "dev": [""],
        "prod": [""]
      }
    },
    "972": {
      "nome": "Web e social",
      "categoria_progetto": {
        "dev": ["ccwac21i77pqlhmcaljrroxx"],
        "prod": ["Commercials"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      },
      "settore": {
        "dev": [""],
        "prod": [""]
      },
      "canali_distribuzione": {
        "dev": ["q7kpsalz4051h15quc3motxg", "pca44auo42jgkqvy8maune00"],
        "prod": ["Web", "YouTube"]
      }
    }
  },
  "portfolio_tag": {
    "987": {
      "nome": "2D",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["u7cgswy4ekkdnxyl8zzevjpo"],
        "prod": ["2D"]
      }
    },
    "982": {
      "nome": "3D",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ha46473rzjxmxpzcnpz7qe9g"],
        "prod": ["3D"]
      }
    },
    "1046": {
      "nome": "Animazione",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ap54uyh2v5zxhl4q94vh45c4"],
        "prod": ["Tecnica mista"]
      }
    },
    "1045": {
      "nome": "Arf",
      "categoria_articolo": {
        "dev": ["xw9wvjdieyfaynm109om4onl"],
        "prod": ["Service"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      }
    },
    "1020": {
      "nome": "Concept",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "1012": {
      "nome": "Cut-out",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["tik9amucl6zgjko4p8cwhdae"],
        "prod": ["Cut-out"]
      }
    },
    "1019": {
      "nome": "Design",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "1011": {
      "nome": "Footage",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["kvap93d8mlz02dg9ggo2pv3k"],
        "prod": ["Live action"]
      }
    },
    "1013": {
      "nome": "Frame-by-frame",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["u7cgswy4ekkdnxyl8zzevjpo"],
        "prod": ["2D"]
      }
    },
    "1024": {
      "nome": "Grafica",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "1004": {
      "nome": "Illustrazioni",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "990": {
      "nome": "Live action",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["kvap93d8mlz02dg9ggo2pv3k"],
        "prod": ["Live action"]
      }
    },
    "998": {
      "nome": "Logo animation",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "1009": {
      "nome": "Personaggi",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "984": {
      "nome": "Post-produzione",
      "categoria_articolo": {
        "dev": ["omt6tegfx7y9cyk6khkxs5ah"],
        "prod": ["Post-produzione"]
      },
      "tipologie_progetto": {
        "dev": [""],
        "prod": [""]
      }
    },
    "1022": {
      "nome": "Script",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ap54uyh2v5zxhl4q94vh45c4"],
        "prod": ["Tecnica mista"]
      }
    },
    "1018": {
      "nome": "Storyboard",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["ttmzr4jb3xm43vc29cm0y7ur"],
        "prod": ["Illustrazione e grafica"]
      }
    },
    "1030": {
      "nome": "VFX",
      "categoria_articolo": {
        "dev": [""],
        "prod": [""]
      },
      "tipologie_progetto": {
        "dev": ["b8641r7uumuptxp2nunyfyb6"],
        "prod": ["VFX"]
      }
    }
  }
}

Detto questo direi che possiamo procedere: crea anche delle variabili di ambiente per test dry run e per dare un limite ai risultati di cui viene fatta la fetch, in modo da non richiamare a ogni test tutti i 200 portfolio ma solo, per esempio, i primi 10.