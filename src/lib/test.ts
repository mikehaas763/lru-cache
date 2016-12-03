import * as test from 'tape';
import { LruCache } from './lru-cache';

test('LruCache Container', (t) => {
    t.plan(1);

    let cache = new LruCache<string, string>();
    t.true(cache instanceof LruCache);
})

test('LruCache retrieving items added to cache', (t) => {
    t.plan(3);

    let cache = new LruCache<string, string>();
    let key1 = 'key1';
    let value1 = 'value1';
    let key2 = 'key2';
    let value2 = 'value2';

    cache
        .add(key1, value1)
        .add(key2, value2);

    t.equal(value1, cache.get(key1));
    t.equal(value2, cache.get(key2));
    t.notEqual(value1, cache.get(key2));
})