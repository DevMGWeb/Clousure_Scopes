const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3";
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();

console.log(scope); ///call global