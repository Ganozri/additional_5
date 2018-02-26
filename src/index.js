module.exports = function check(str, bracketsConfig) {
// your solution
var stack = [];
var check,ch=0;
for (i=0; i<str.length;i++) {
c=str[i];
if (c == '{' || c == '[' || c == '(' ) {
stack.push(c);
} else
if (c=='|' && ch==0) {stack.push(c);ch++;}else {
if (stack) {
check = stack.pop();
if (c == '}' && check != '{') {
return false;
} else if (c == ']' && check != '[') {
return false;
} else if (c == ')' && check != '(') {
return false;}
else if (c == '|' && check != '|') {
return false;}
else if (c == '|' && check == '|') {
ch=0;}


} else {
return false;
}
}
}

if ( stack.pop() ) return false;

return true;
}
