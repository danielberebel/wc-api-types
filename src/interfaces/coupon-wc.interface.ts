import { MetaDataWcInterface } from './meta-data-wc.interface';

export interface CouponWcInterface {
    /**
     * 	@description Unique identifier for the object.
     * @readonly
     */
    id: number;

    /**
     * @description Coupon code
     * @mandatory
     */
    code: string;

    /**
     * @description The amount of discount. Should always be numeric, even if setting a percentage.
     */
    amount: string;

    /**
     * @description The date the coupon was created, in the site's timezone.
     * @readonly
     */
    date_created?: string;

    /**
     * @description The date the coupon was created, as GMT
     * @readonly
     */
    date_created_gmt?: string;

    /**
     * @description The date the coupon was last modified, in the site's timezone
     * @readonly
     */
    date_modified?: string;

    /**
     * @description  The date the coupon was last modified, as GMT
     */
    date_modified_gmt?: string;

    /**
     * @description Determines the type of discount that will be applied. Options: percent, fixed_cart and fixed_product
     * @default 'fixed_cart'
     */
    discount_type: string;

    /**
     * @descriptionCoupon description.
     */
    description: string;

    /**
     * @description The date the coupon expires, in the site's timezone.
     */
    date_expires?: string;

    /**
     * @description The date the coupon expires, as GMT.
     */
    date_expires_gmt?: string;

    /**
     * @description Number of times the coupon has been used already.
     * @readonly
     */
    usage_count: number;

    /**
     * @description If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.
     * @default false
     */
    individual_use: boolean;

    /**
     * @description List of product IDs the coupon can be used on.
     */
    product_ids: number[];

    /**
     * @description List of product IDs the coupon cannot be used on.
     */
    excluded_product_ids: number[];

    /**
     * @description How many times the coupon can be used in total.
     */
    usage_limit: number;

    /**
     * @description How many times the coupon can be used per customer.
     */
    usage_limit_per_user: number;

    /**
     * @description Max number of items in the cart the coupon can be applied to.
     */
    limit_usage_to_x_items: number;

    /**
     * @description If true and if the free shipping method requires a coupon, this coupon will enable free shipping.
     * @default false
     */
    free_shipping: boolean;

    /**
     * @description List of category IDs the coupon applies to.
     */
    product_categories: number[];

    /**
     * @description 	List of category IDs the coupon does not apply to.
     */
    excluded_product_categories: number[];

    /**
     * @description If true, this coupon will not be applied to items that have sale prices.
     * @default false
     */
    exclude_sale_items: boolean;

    /**
     * @description Minimum order amount that needs to be in the cart before coupon applies.
     */
    minimum_amount: string;

    /**
     * @description Maximum order amount allowed when using the coupon.
     */
    maximum_amount: string;

    /**
     * @description List of email addresses that can use this coupon.;
     */
    email_restrictions: string[];

    /**
     * @description List of user IDs (or guest email addresses) that have used the coupon
     * @readonly
     */
    used_by: string[];

    meta_data: MetaDataWcInterface[];
}
