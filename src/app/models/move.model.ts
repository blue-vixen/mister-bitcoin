export class MoveModel {

    constructor(
        public toId: string = '',
        public to: string = '',
        public at: number = 0,
        public amount: number = 0) {
    }
}