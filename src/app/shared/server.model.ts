export class Server {

    constructor(public id: number,
        public hostname: string,
        public ip: string,
        public deadline: Date,
        public status: string,
        public description: string
    ) {

    }
}