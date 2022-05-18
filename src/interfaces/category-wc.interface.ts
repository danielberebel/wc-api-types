import { ImageWcInterface } from './image-wc.interface';
import { LinksWcInterface } from './links-wc.interface';

export interface CategoryWcInterface {
    id: number;
    name: string;
    slug: string;
    parent: number;
    description: string;
    display: string;
    image: ImageWcInterface;
    menu_order: number;
    count: number;
    _links: LinksWcInterface;
}
