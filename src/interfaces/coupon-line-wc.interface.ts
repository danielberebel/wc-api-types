import { MetaDataWcInterface } from './meta-data-wc.interface';

export interface CouponLineWcInterface {
    id: number;
    code: string;
    discount: string;
    discount_tax: string;
    meta_data: MetaDataWcInterface[];
}
