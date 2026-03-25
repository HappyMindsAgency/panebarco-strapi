import type { Schema, Struct } from '@strapi/strapi';

export interface SeoComponentMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_seo_component_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SeoComponentSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'seo-component.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
    icon: 'file';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images'>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCardCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_ctas';
  info: {
    displayName: 'cardCta';
    icon: 'cursor';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 7;
      }>;
    contenuto: Schema.Attribute.RichText;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCardLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_links';
  info: {
    displayName: 'cardLink';
    icon: 'apps';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images' | 'videos'>;
    tag: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    tags: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCardValore extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_valores';
  info: {
    displayName: 'cardValore';
    icon: 'crown';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 7;
      }>;
    contenuto: Schema.Attribute.RichText;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedComposit extends Struct.ComponentSchema {
  collectionName: 'components_shared_composits';
  info: {
    displayName: 'compositProgetti';
    icon: 'gate';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    progetti: Schema.Attribute.Relation<'oneToMany', 'api::progetto.progetto'>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCompositCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_composit_cards';
  info: {
    displayName: 'compositCard';
    icon: 'grid';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    item: Schema.Attribute.Component<'shared.card', true>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCompositCaseHistory extends Struct.ComponentSchema {
  collectionName: 'components_shared_composit_case_histories';
  info: {
    displayName: 'compositCaseHistory';
    icon: 'apps';
  };
  attributes: {
    caseHistory: Schema.Attribute.Component<'shared.card-link', true>;
    contenuto: Schema.Attribute.RichText;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCompositOriginals extends Struct.ComponentSchema {
  collectionName: 'components_shared_composit_originals';
  info: {
    displayName: 'compositOriginals';
    icon: 'star';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    originals: Schema.Attribute.Relation<'oneToMany', 'api::original.original'>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCompositTeam extends Struct.ComponentSchema {
  collectionName: 'components_shared_composit_teams';
  info: {
    displayName: 'compositTeam';
    icon: 'heart';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    sottotitolo: Schema.Attribute.String;
    team: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedContainerComposit extends Struct.ComponentSchema {
  collectionName: 'components_shared_container_composits';
  info: {
    displayName: 'containerCompositProgetti';
    icon: 'archive';
  };
  attributes: {
    composit: Schema.Attribute.Component<'shared.composit', true>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedContenuto extends Struct.ComponentSchema {
  collectionName: 'components_shared_contenutos';
  info: {
    displayName: 'contenuto';
    icon: 'feather';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'ctaOscar';
    icon: 'crown';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images'>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedCtaContattaci extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_contattacis';
  info: {
    displayName: 'ctaContattaci';
    icon: 'crown';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 7;
        minLength: 7;
      }>;
    cover: Schema.Attribute.Media<'images'>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedEmbed extends Struct.ComponentSchema {
  collectionName: 'components_shared_embeds';
  info: {
    displayName: 'embed';
    icon: 'code';
  };
  attributes: {
    embed: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::oembed.oembed'>;
  };
}

export interface SharedFile extends Struct.ComponentSchema {
  collectionName: 'components_shared_files';
  info: {
    displayName: 'file';
    icon: 'filePdf';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'>;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
    icon: 'pin';
  };
  attributes: {
    imgTeam: Schema.Attribute.Media<'images'>;
    imgTeamBool: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mediaBackground: Schema.Attribute.Media<'videos' | 'images'>;
    sottotitolo: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
    titoloTana: Schema.Attribute.String;
  };
}

export interface SharedIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_intros';
  info: {
    displayName: 'intro';
    icon: 'house';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    media: Schema.Attribute.Media<'images' | 'videos'>;
    mediaBool: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedIntroHomePage extends Struct.ComponentSchema {
  collectionName: 'components_shared_intro_home_pages';
  info: {
    displayName: 'introHomePage';
    icon: 'house';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images' | 'videos'>;
    pulsanti: Schema.Attribute.Component<'shared.pulsante', true>;
    sottotitolo: Schema.Attribute.Component<'shared.sottotitolo-typing', true>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    link: Schema.Attribute.String;
  };
}

export interface SharedLogoCliente extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_clientes';
  info: {
    displayName: 'logoCliente';
    icon: 'eye';
  };
  attributes: {
    media: Schema.Attribute.Media<'images'>;
    titolo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMainVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_main_videos';
  info: {
    displayName: 'mainVideo';
    icon: 'attachment';
  };
  attributes: {
    anteprima: Schema.Attribute.Media<'videos'>;
    anteprimaMobile: Schema.Attribute.Media<'videos'>;
    embed: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<'plugin::oembed.oembed'>;
    tipologia: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface SharedMasonry extends Struct.ComponentSchema {
  collectionName: 'components_shared_masonries';
  info: {
    displayName: 'masonry';
    icon: 'grid';
  };
  attributes: {
    masonry: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media';
    icon: 'attachment';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface SharedPulsante extends Struct.ComponentSchema {
  collectionName: 'components_shared_pulsantes';
  info: {
    displayName: 'pulsante';
    icon: 'cursor';
  };
  attributes: {
    etichetta: Schema.Attribute.String;
    targetBlank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedRaccoltaVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_raccolta_videos';
  info: {
    displayName: 'raccoltaVideo';
    icon: 'play';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    titolo: Schema.Attribute.String;
    video: Schema.Attribute.Component<'shared.embed', true>;
  };
}

export interface SharedShortList extends Struct.ComponentSchema {
  collectionName: 'components_shared_short_lists';
  info: {
    displayName: 'shortList';
    icon: 'bulletList';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    cover: Schema.Attribute.Media<'images'>;
    item: Schema.Attribute.Component<'shared.card-valore', true>;
    titolo: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'slider';
    icon: 'picture';
  };
  attributes: {
    slider: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SharedSottotitoloTyping extends Struct.ComponentSchema {
  collectionName: 'components_shared_sottotitolo_typings';
  info: {
    displayName: 'sottotitoloTyping';
    icon: 'italic';
  };
  attributes: {
    testo: Schema.Attribute.String;
  };
}

export interface SharedTitolo extends Struct.ComponentSchema {
  collectionName: 'components_shared_titolos';
  info: {
    displayName: 'titolo';
    icon: 'filter';
  };
  attributes: {
    titolo: Schema.Attribute.String;
  };
}

export interface SharedVideoHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_headers';
  info: {
    displayName: 'headerHomePage';
    icon: 'play';
  };
  attributes: {
    contenuto: Schema.Attribute.RichText;
    pulsante: Schema.Attribute.Component<'shared.pulsante', false>;
    titolo: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo-component.meta-social': SeoComponentMetaSocial;
      'seo-component.seo': SeoComponentSeo;
      'shared.card': SharedCard;
      'shared.card-cta': SharedCardCta;
      'shared.card-link': SharedCardLink;
      'shared.card-valore': SharedCardValore;
      'shared.composit': SharedComposit;
      'shared.composit-card': SharedCompositCard;
      'shared.composit-case-history': SharedCompositCaseHistory;
      'shared.composit-originals': SharedCompositOriginals;
      'shared.composit-team': SharedCompositTeam;
      'shared.container-composit': SharedContainerComposit;
      'shared.contenuto': SharedContenuto;
      'shared.cta': SharedCta;
      'shared.cta-contattaci': SharedCtaContattaci;
      'shared.embed': SharedEmbed;
      'shared.file': SharedFile;
      'shared.header': SharedHeader;
      'shared.intro': SharedIntro;
      'shared.intro-home-page': SharedIntroHomePage;
      'shared.link': SharedLink;
      'shared.logo-cliente': SharedLogoCliente;
      'shared.main-video': SharedMainVideo;
      'shared.masonry': SharedMasonry;
      'shared.media': SharedMedia;
      'shared.pulsante': SharedPulsante;
      'shared.raccolta-video': SharedRaccoltaVideo;
      'shared.short-list': SharedShortList;
      'shared.slider': SharedSlider;
      'shared.sottotitolo-typing': SharedSottotitoloTyping;
      'shared.titolo': SharedTitolo;
      'shared.video-header': SharedVideoHeader;
    }
  }
}
