export class Server {

    constructor(public id: number,
        public hostname: string,
        public ip: string,
        public deadline: string,
        public status: string,
        public actions: {}
    ) {

    }
}