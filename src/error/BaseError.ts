export abstract class BaseError extends Error {
    status: number;
    track: number;

    constructor(message: string, status = 400) {
        super(message);
        this.status = status;
        this.track = Math.random() * 100000000;
    }

    toJSON(): Record<string, unknown> {
        return {
            name: this.name,
            message: this.message,
            track: this.track.toString(32),
        };
    }
}