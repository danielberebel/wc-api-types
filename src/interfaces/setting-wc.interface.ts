export interface SettingsGroupWcInterface {
  id: string;
  label: string;
  description: string;
  sections: string;
  parent_id?: string;
  sub_groups?: string;
}

export interface SettingOptionWcInterface {
  id: string;
  label: string;
  description: string;
  value: any;
  default: any;
  tip: string;
  placeholder: string;
  type: string;
  options: {};
  group?: string;
  group_id?: string;
}

export interface SettingsWcInterface {
  general: {
    woocommerce_store_address: string;
    woocommerce_store_address_2: string;
    woocommerce_store_city: string;
    woocommerce_default_country: string;
    woocommerce_store_postcode: string;
    woocommerce_allowed_countries: string;
    woocommerce_all_except_countries: string[];
    woocommerce_specific_allowed_countries: string[];
    woocommerce_ship_to_countries: string;
    woocommerce_specific_ship_to_countries: string[];
    woocommerce_default_customer_address: string;
    woocommerce_calc_taxes: string;
    woocommerce_enable_coupons: string;
    woocommerce_calc_discounts_sequentially: string;
    woocommerce_currency: string;
    woocommerce_currency_pos: string;
    woocommerce_price_thousand_sep: string;
    woocommerce_price_decimal_sep: string;
    woocommerce_price_num_decimals: string;
  };
  admin: {
    woocommerce_excluded_report_order_statuses: string[];
    woocommerce_actionable_order_statuses: string[];
    woocommerce_default_date_range: string;
  };
  products: {
    woocommerce_shop_page_id: string;
    woocommerce_cart_redirect_after_add: string;
    woocommerce_enable_ajax_add_to_cart: string;
    woocommerce_placeholder_image: string;
    woocommerce_weight_unit: string;
    woocommerce_dimension_unit: string;
    woocommerce_enable_reviews: string;
    woocommerce_review_rating_verification_label: string;
    woocommerce_review_rating_verification_required: string;
    woocommerce_enable_review_rating: string;
    woocommerce_review_rating_required: string;
    woocommerce_manage_stock: string;
    woocommerce_hold_stock_minutes: string;
    woocommerce_notify_low_stock: string;
    woocommerce_notify_no_stock: string;
    woocommerce_stock_email_recipient: string;
    woocommerce_notify_low_stock_amount: string;
    woocommerce_notify_no_stock_amount: string;
    woocommerce_hide_out_of_stock_items: string;
    woocommerce_stock_format: string;
    woocommerce_file_download_method: string;
    woocommerce_downloads_require_login: string;
    woocommerce_downloads_grant_access_after_payment: string;
    woocommerce_downloads_add_hash_to_filename: string;
  };
  tax: {
    woocommerce_prices_include_tax: string;
    woocommerce_tax_based_on: string;
    woocommerce_shipping_tax_class: string;
    woocommerce_tax_round_at_subtotal: string;
    woocommerce_tax_classes: string;
    woocommerce_tax_display_shop: string;
    woocommerce_tax_display_cart: string;
    woocommerce_price_display_suffix: string;
    woocommerce_tax_total_display: string;
  };
  advanced?: {
    woocommerce_cart_page_id: string;
    woocommerce_checkout_page_id: string;
    woocommerce_myaccount_page_id: string;
    woocommerce_terms_page_id: string;
    woocommerce_checkout_pay_endpoint: string;
    woocommerce_checkout_order_received_endpoint: string;
    woocommerce_myaccount_add_payment_method_endpoint: string;
    woocommerce_myaccount_delete_payment_method_endpoint: string;
    woocommerce_myaccount_set_default_payment_method_endpoint: string;
    woocommerce_myaccount_orders_endpoint: string;
    woocommerce_myaccount_view_order_endpoint: string;
    woocommerce_myaccount_downloads_endpoint: string;
    woocommerce_myaccount_edit_account_endpoint: string;
    woocommerce_myaccount_edit_address_endpoint: string;
    woocommerce_myaccount_payment_methods_endpoint: string;
    woocommerce_myaccount_lost_password_endpoint: string;
    woocommerce_logout_endpoint: string;
    woocommerce_api_enabled: string;
    woocommerce_allow_tracking: string;
    woocommerce_show_marketplace_suggestions: string;
  };
}
