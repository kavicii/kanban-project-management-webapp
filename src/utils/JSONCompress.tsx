import pako from 'pako';

// Correct function declaration and export
export const compressJSON = (object: any): Uint8Array => {
    return pako.deflate(JSON.stringify(object));
};

// Correct function declaration and export.  Error handling added.
export const decompressJSON = (compressedObject: any): any | null  => {
    try {
        return pako.inflate(compressedObject, { to: 'string' });
    } catch (error) {
        console.error("Decompression failed:", error);
        // Handle the error appropriately (e.g., return null, throw an error, etc.)
        return null; 
    }
};