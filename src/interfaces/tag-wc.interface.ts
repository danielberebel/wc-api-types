import { TagWpInterface } from 'wp-api-types';

export interface TagWcInterface extends TagWpInterface {
  id?: number; // READ-ONLY
  name?: string; // MANDATORY
  slug?: string;
  description?: string;
  count?: number; // READ-ONLY
}
