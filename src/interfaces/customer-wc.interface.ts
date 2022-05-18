import { BillingWcInterface } from './billing-wc.interface';
import { ShippingWcInterface } from './shipping-wc.interface';
import { MetaDataWcInterface } from './meta-data-wc.interface';

export interface CustomerWcReadInterface {
    id?: number;
    date_created?: string;
    date_created_gmt?: string;
    date_modified?: string;
    date_modified_gmt?: string;
    email: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    username?: string;
    billing?: BillingWcInterface;
    shipping?: ShippingWcInterface;
    is_paying_customer?: boolean;
    avatar_url?: string;
    meta_data?: MetaDataWcInterface[];
}

export interface CustomerWcWriteInterface {
    email: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    username?: string;
    password?: string;

    billing?: BillingWcInterface;
    shipping?: ShippingWcInterface;

    meta_data?: MetaDataWcInterface[];
}

export interface CustomerWcInterface extends CustomerWcReadInterface, CustomerWcWriteInterface {}
