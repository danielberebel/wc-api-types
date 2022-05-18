export interface ShippingClassWcInterface {
    /**
     * @description Unique identifier for the resource.
     * @readonly
     */
    id?: number;
    /**
     * @description Shipping class name.
     */
    name: string;
    /**
     * @description An alphanumeric identifier for the resource unique to its type.
     */
    slug?: string;
    /**
     * @description HTML description of the resource.
     */
    description?: string;
    /**
     * @description Number of published products for the resource.
     */
    count?: number;
}
