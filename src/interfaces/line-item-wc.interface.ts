import { MetaDataWcInterface } from './meta-data-wc.interface';

export interface LineItemWcInterface {
    id: number;
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: string;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: any[];
    meta_data: MetaDataWcInterface[];
    sku: string;
    price: number;
}
