export interface ShippingZoneWcInterface {
    /**
     * @description Unique identifier for the resource.
     *  @readonly
     */
    id?: number;

    /**
     * @description Shipping zone name.
     * @mandatory
     */
    name: string;

    /**
     * @description Shipping zone order.
     */
    order?: number;
}

export interface ShippingZoneMethodWcInterface {
    /**
     * @description Unique identifier for the resource.
     *  @readonly
     */
    id?: number;

    /**
     * @descriptionShipping method instance
     * @id
     * @readonly
     */
    instance_id?: number;

    /**
     * @description Shipping method customer facing title
     * @readonly
     */
    title?: string;

    /**
     * @description Shipping method sort order.
     */
    order?: number;
    /**
     * @description Shipping method enabled status.
     */
    enabled?: boolean;
    /**
     *  @description Shipping method
     * @readonly
     * @id
     * @mandatory
     */
    method_id: string;
    /**
     * @description Shipping method title.
     *  @readonly
     */
    method_title?: string;
    /**
     * @description Shipping method description
     * @readonly
     */
    method_description?: string;
    /**
     * @description Shipping method settings
     */
    settings?: Partial<ShippingZoneMethodSettingsWcInterface>[];
}

export interface ShippingZoneMethodSettingsWcInterface {
    /**
     * @description A unique identifier for the setting.
     * @readonly
     */
    id: string;
    /**
     * @description A human readable label for the setting used in interfaces.
     * @readonly
     */
    label: string;
    /**
     * @description A human readable description for the setting used in interfaces.
     * @readonly
     */
    description: string;
    /**
     * @description Type of setting.
     * @readonly
     */
    type: ShippingZoneMethodSettingsWcType;
    /**
     * @description  Setting value.
     */
    value: string;
    /**
     * @description Default value for the setting.
     * @readonly
     */
    default: string;
    /**
     * @description Additional help text shown to the user about the setting.
     * @readonly
     */
    tip: string;
    /**
     * @description	Placeholder text to be displayed in text inputs.
     */
    placeholder: string;
}

export type ShippingZoneMethodSettingsWcType =
    | 'text'
    | 'email'
    | 'number'
    | 'color'
    | 'password'
    | 'textarea'
    | 'select'
    | 'multiselect'
    | 'radio'
    | 'image_width'
    | 'checkbox';

export interface ShippingZoneLocationWcInterface {
    /**
     * @description Shipping zone location code.
     */
    code: string;

    /**
     * @description Shipping zone location type
     * @default  Default is country.
     */
    type: ShippingZoneLocationWcType;
}

export type ShippingZoneLocationWcType = 'postcode' | 'state' | 'country' | 'continent';
