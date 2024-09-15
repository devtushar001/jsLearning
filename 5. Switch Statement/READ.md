JavaScript Switch Statement

--> The JavaScript Switch statement is used in decision-making. The switch statement evaluates an expression and executios the corresponding body that matches the expression's result.

switch(variable/expression) {
case value1:
//body of case 1
break;
case value2:
//body of case 2
break;
caseN:
//body of case N
default:
//body of default
}

Important Notes

--> The break statement is optional. if the break statement is encountered, the switch statement ends.

--> if the break statement is not used, the cases after the matching case are also executed.

--> The default clause is also optional.

Multiple cases in Switch Statements:

In a JavaScript Switch statement, case can be grouped to share the same code.
