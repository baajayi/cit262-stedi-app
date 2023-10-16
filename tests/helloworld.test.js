import myName from "../helloworld.mjs";
import assert from "assert";

it("My name", ()=> {
    const name = myName();

    assert.equal(name, "Bamidele");
});