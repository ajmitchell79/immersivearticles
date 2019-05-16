import { EntityImage } from './entityImage';

export class BingEntity {
    data: BingEntityData;
    location: BingEntityLocation;
}

export class BingEntityData {
    id: string;
    bingId: string;
    name: string;
    description: string;
    image: EntityImage;
}

export class BingEntityLocation {
    name: string;
    matches: BingEntityLocationMatch[];
}

export class BingEntityLocationMatch {
    text: string;
    offset: number;
    length: number;
}