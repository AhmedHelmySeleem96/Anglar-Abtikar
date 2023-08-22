/* tslint:disable */
/* eslint-disable */
import { DocMovement } from './doc-movement';
import { DocType } from './doc-type';
export interface DailyMovementsDto {
  branches?: null | Array<number>;
  clients?: null | Array<number>;
  docMovements?: null | Array<DocMovement>;
  source?: null | Array<DocType>;
  supliers?: null | Array<number>;
  timeToFininsh?: null | string;
  timeToStart?: null | string;
}
