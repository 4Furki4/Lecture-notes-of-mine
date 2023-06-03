export class OptionsBuilder {
    private method: string = '';
    private headers!: Header;
    private body?: string;
    constructor() {
    }
    setMethod(method: string): OptionsBuilder {
        this.method = method;
        return this;
    }

    setHeader(header: Partial<Header>): OptionsBuilder {
        this.headers = header;
        return this;
    }
    setBody(item: any): OptionsBuilder {
        this.body = JSON.stringify(item);
        return this;
    }
    build(): Options {
        return {
            method: this.method,
            headers: this.headers,
            body: this.body
        } as Options;
    }

}

export interface Header {
    "Content-Type"?: string;
    accept?: string;
}
export interface Options {
    method: string;
    headers: Header;
    body?: string;
}