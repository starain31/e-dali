import {join, dirname} from 'path';
import {Low, JSONFile} from 'lowdb';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const products = new Low(new JSONFile(join(__dirname, 'products.json')));

products.data = [
    {
        "id": 1,
        "name": "Un Chien Andalou",
        "description": "One of the most acclaimed films in cinema history, Un Chien Andalou (An Andalusian Dog) (1929) is a short silent surrealist film by Spanish director Luis Buñuel and artist Salvador Dalí.",
        "image": "https://uploads7.wikiart.org/images/salvador-dali/un-chien-andalou-film-still-1928.jpg"
    },
    {
        "id": 2,
        "name": "The Persistence of Memory",
        "description": "The Persistence of Memory (1931) is one of the most iconic and recognizable paintings of Surrealism.",
        "image": "https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg"
    },
    {
        "id": 3,
        "name": "The Elephants",
        "description": "The elephant is a recurring theme in the works of Dalí, first appearing in his 1944 work Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening, and also in The Temptation of Saint Anthony and Swans Reflecting Elephants.",
        "image": "https://upload.wikimedia.org/wikipedia/en/4/43/Dali_Elephants.jpg"
    }
];

const wishlist = new Low(new JSONFile(join(__dirname, 'wishlist.json')));

wishlist.data = [
    {
        "id": 1,
        "name": "Un Chien Andalou",
        "description": "One of the most acclaimed films in cinema history, Un Chien Andalou (An Andalusian Dog) (1929) is a short silent surrealist film by Spanish director Luis Buñuel and artist Salvador Dalí.",
        "image": "https://uploads7.wikiart.org/images/salvador-dali/un-chien-andalou-film-still-1928.jpg"
    },
];

(async function () {
    await products.write();
    await wishlist.write();
})();

export function getProduct() {
    return products.data;
}

export function getWishList() {
    return wishlist.data;
}

