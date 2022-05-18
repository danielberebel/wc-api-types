import { BillingWcInterface } from './billing-wc.interface';
import { ShippingWcInterface } from './shipping-wc.interface';
import { LinksWcInterface } from './links-wc.interface';
import { LineItemWcInterface } from './line-item-wc.interface';
import { ShippingLineWcInterface } from './shipping-line-wc.interface';
import { CouponLineWcInterface } from './coupon-line-wc.interface';
import { MetaDataWcInterface } from './meta-data-wc.interface';

export interface OrderWcInterface {
    id: number;
    parent_id: number;
    number: string;
    order_key: string;
    created_via: string;
    version: string;
    status: string;
    currency: string;
    date_created: Date;
    date_created_gmt: Date;
    date_modified: Date;
    date_modified_gmt: Date;
    discount_total: string;
    discount_tax: string;
    shipping_total: string;
    shipping_tax: string;
    cart_tax: string;
    total: string;
    total_tax: string;
    prices_include_tax: boolean;
    customer_id: number;
    customer_ip_address: string;
    customer_user_agent: string;
    customer_note: string;
    billing: BillingWcInterface;
    shipping: ShippingWcInterface;
    payment_method: string;
    payment_method_title: string;
    transaction_id: string;
    date_paid?: any;
    date_paid_gmt?: any;
    date_completed?: any;
    date_completed_gmt?: any;
    cart_hash: string;
    meta_data: MetaDataWcInterface[];
    line_items: LineItemWcInterface[];
    tax_lines: any[]; // TaxLineWcInterface[];
    shipping_lines: ShippingLineWcInterface[];
    fee_lines: any[]; // FeeLineWcInterface[];
    coupon_lines: CouponLineWcInterface[];
    refunds: any[]; // RefundWcInterface[];
    _links: LinksWcInterface;
}

export interface OrderNoteWcInterface {
    id?: number;
    author?: string;
    date_created?: string;
    date_created_gmt?: string;
    note?: string;
    added_by_user?: boolean;
    customer_note?: boolean;
}
