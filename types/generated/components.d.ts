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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo-component.meta-social': SeoComponentMetaSocial;
      'seo-component.seo': SeoComponentSeo;
      'shared.contenuto': SharedContenuto;
      'shared.embed': SharedEmbed;
      'shared.file': SharedFile;
      'shared.link': SharedLink;
      'shared.main-video': SharedMainVideo;
      'shared.masonry': SharedMasonry;
      'shared.media': SharedMedia;
      'shared.slider': SharedSlider;
      'shared.titolo': SharedTitolo;
    }
  }
}
