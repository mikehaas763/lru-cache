import * as test from 'tape';
import { LruCache } from './lru-cache';

test('LruCache Container', (t) => {
    t.plan(1);

    let cache = new LruCache<string, string>();
    t.true(cache instanceof LruCache);
})