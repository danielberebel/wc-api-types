import { SelfWcInterface } from './self-wc.interface';
import { CollectionWcInterface } from './collection-wc.interface';
import { UpWcInterface } from './up-wc.interface';

export interface LinksWcInterface {
    self: SelfWcInterface[];
    collection: CollectionWcInterface[];
    up: UpWcInterface[];
}
