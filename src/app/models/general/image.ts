/**
 * Created by Jens on 10-Nov-16.
 */
export class Image {
    constructor(public _id: string,
                public filename: string,
                public extension: string,
                public assetType: string,
                public alt: string,
                public path: string) {
    }
}