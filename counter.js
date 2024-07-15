function counterWidget() {
    return {
        count: 0,
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        reset() {
            this.count = 0;
        }
    };
}