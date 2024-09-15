const grade = "dd";

switch (grade) {
  case "A":
    console.log(`Very good ${grade}`);
    break;
  case "B":
    console.log(`Good, keep learning ${grade}`);
    break;
  case "C":
    console.log(`Need improvement ${grade}`);
    break;
  case "D":
    console.log(`Not good ${grade}`);
    break;

  default:
    console.log(`Invalid Grade ${grade}`);
}
