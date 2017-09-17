/**
 * Created by Jens on 10-Nov-16.
 */
export class Image {
    constructor(public _id: string,
                public filename: string,
                public assetType: string,
                public alt: string) {
    }

    public getFullPath(): string{
        //check asset type for root folder + filename
        return 'Not implemented yet';
    }
}