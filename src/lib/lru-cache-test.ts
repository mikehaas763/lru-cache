import * as test from 'tape';
import { LruCache } from './lru-cache';

test('LruCache Container', (t) => {
    t.plan(1);

    let cache = new LruCache<string, string>();
    t.true(cache instanceof LruCache);
})

test('LruCache should retrieve items added to cache when not over capacity', t => {
    t.plan(3);

    let key1 = 'key1';
    let value1 = 'value1';
    let key2 = 'key2';
    let value2 = 'value2';

    let cache = new LruCache<string, string>()
        .add(key1, value1)
        .add(key2, value2);

    t.equal(value1, cache.get(key1));
    t.equal(value2, cache.get(key2));
    t.notEqual(value1, cache.get(key2));
})

test('LruCache should not retrieve items added to cache that are purged for not being used recently', t => {
    t.plan(4);

    let cache = new LruCache<number, number>(3);
    let cacheItems = [
        { key: 1, value: 1},
        { key: 2, value: 2},
        { key: 3, value: 3},
        { key: 4, value: 4},
    ];

    cacheItems.forEach(item => cache.add(item.key, item.value));
    
    // assert initial items that should be purged
    let shouldPurgeMessage = 'The LRU item should be purged, and not in the cache';
    t.equal(cache.get(cacheItems[0].key), null, shouldPurgeMessage);
    // t.equal(cache.hasItem(cacheItems[0].key), shouldPurgeMessage);
    
    // assert initial items that shouldn't be purged
    let shouldNotPurgeMessage = 'The LRU item should not be purged';
    t.equal(cache.get(cacheItems[1].key), cacheItems[1].value, shouldNotPurgeMessage);
    t.equal(cache.get(cacheItems[2].key), cacheItems[2].value, shouldNotPurgeMessage);
    t.equal(cache.get(cacheItems[3].key), cacheItems[3].value, shouldNotPurgeMessage);
});
