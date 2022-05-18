import { PluginWpInterface } from 'wp-api-types';
import { EnvironmentWcInterface } from './environment-wc.interface';

export interface SystemStatusResponseWcInterface {
  active_plugins: PluginWpInterface[];

  environment: EnvironmentWcInterface;
  database: {
    wc_database_version: string;
    database_prefix: string;
    maxmind_geoip_database: string;
    database_tables: {
      [key: string]: {
        [name: string]: { data: string; index: string; engine: string };
      };
    };
  };
  database_size: {
    data: number;
    index: number;
  };

  inactive_plugins: PluginWpInterface[];

  dropins_mu_plugins: {
    dropins: {
      plugin: string;
      name: string;
    }[];
    mu_plugins: {
      plugin: string;
      name: string;
    }[];
  };
  theme: {
    name: string;
    version: string;
    version_latest: string;
    author_url: string;
    is_child_theme: boolean;
    has_woocommerce_support: boolean;
    has_woocommerce_file: boolean;
    has_outdated_templates: boolean;
    overrides: [];
    parent_name: string;
    parent_version: string;
    parent_version_latest: string;
    parent_author_url: string;
  };
  settings: {
    api_enabled: boolean;
    force_ssl: boolean;
    currency: string;
    currency_symbol: string;
    currency_position: string;
    thousand_separator: string;
    decimal_separator: string;
    number_of_decimals: number;
    geolocation_enabled: boolean;
    taxonomies: {
      [key: string]: string;
    };
    product_visibility_terms: {
      [key: string]: string;
    };
    woocommerce_com_connected: string;
  };
  security: {
    secure_connection: boolean;
    hide_errors: boolean;
  };
  pages: {
    page_name: string;
    page_id: string;
    page_set: boolean;
    page_exists: boolean;
    page_visible: boolean;
    shortcode: string;
    block: string;
    shortcode_required: boolean;
    shortcode_present: boolean;
    block_present: boolean;
    block_required: boolean;
  }[];

  post_type_counts: {
    type: string;
    count: number;
  }[];
}
