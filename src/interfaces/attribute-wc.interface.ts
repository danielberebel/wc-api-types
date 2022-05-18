export interface AttributeWcInterface {
    // id?: number;
    // name?: string;
    // position?: number;
    // visible?: boolean;
    // variation?: boolean;
    // options?: string[];

    id?: number;
    name: string;
    slug?: string;
    type?: string;
    order_by?: string;
    has_archives?: boolean;
    terms?: AttributeTermWcInterface[];
}

export interface AttributeTermWcInterface {
    id?: number;
    name: string;
    slug?: string;
}
