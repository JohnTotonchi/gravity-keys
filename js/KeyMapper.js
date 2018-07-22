class KeyMapper {

    constructor() {
        this.map = new Map();

        this.map.set("1", 0);
        this.map.set("q", 0);
        this.map.set("a", 0);
        this.map.set("z", 0);
        this.map.set("2", 1);
        this.map.set("w", 1);
        this.map.set("s", 1);
        this.map.set("x", 1);
        this.map.set("3", 2);
        this.map.set("e", 2);
        this.map.set("d", 2);
        this.map.set("c", 2);
        this.map.set("4", 3);
        this.map.set("r", 3);
        this.map.set("f", 3);
        this.map.set("v", 3);
        this.map.set("4", 4);
        this.map.set("r", 4);
        this.map.set("f", 4);
        this.map.set("v", 4);
        this.map.set("5", 5);
        this.map.set("t", 5);
        this.map.set("g", 5);
        this.map.set("b", 5);
        this.map.set("6", 6);
        this.map.set("y", 6);
        this.map.set("h", 6);
        this.map.set("n", 6);
        this.map.set("7", 7);
        this.map.set("u", 7);
        this.map.set("j", 7);
        this.map.set("m", 7);
        this.map.set("8", 8);
        this.map.set("i", 8);
        this.map.set("k", 8);
        this.map.set(",", 8);
        this.map.set("9", 9);
        this.map.set("o", 9);
        this.map.set("l", 9);
        this.map.set(".", 9);
        this.map.set("0", 10);
        this.map.set("p", 10);
        this.map.set(";", 10);
        this.map.set("/", 10);
        this.map.set("-", 10);
        this.map.set("[", 10);
        this.map.set("'", 10);
        this.map.set("=", 10);
        this.map.set("]", 10);
        this.map.set("\\", 10);

        this.map.set("`", 0);
        this.map.set("ё", 0);
        this.map.set("~", 0);
        this.map.set("!", 0);
        this.map.set("@", 1);
        this.map.set("#", 2);
        this.map.set("$", 3);
        this.map.set("%", 4);
        this.map.set("^", 5);
        this.map.set("&", 6);
        this.map.set("*", 7);
        this.map.set("(", 8);
        this.map.set(")", 9);
        this.map.set("_", 10);
        this.map.set("+", 10);
        this.map.set("|", 10);
        this.map.set("?", 10);
        this.map.set("/", 10);
    }

    getPosition(key) {
        return this.map.get(key.toLowerCase());
    }
}