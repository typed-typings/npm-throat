import { Promise } from 'es6-promise';

declare function throat <T extends Function> (concurrency: number, worker: T): T;
declare function throat (promise: typeof Promise): <T> (concurrency: number, worker: T) => T;

export = throat;