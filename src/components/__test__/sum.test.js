import sum from "../sum"

test("sum function to caluculate the sum of two numbers", () =>{
    const ans = sum(2,2);


    //Assertion
    expect(ans).toBe(4);

})