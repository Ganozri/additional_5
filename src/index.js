module.exports = function check(str, bracketsConfig)
 {
  var ob = 0;
  var cb = 0;
  var oq = 0;
  var cq = 0;
  var os = 0;
  var cs = 0;
  var c = 0;
  var st = 0;

  for(var i=0;i<str.length;i++)
  {
  if (str[i] = "(")  {ob++}
  if (str[i] = ")") {cb++}
  if (str[i] = "{") {oq++}
  if (str[i] = "}") {cq++}
  if (str[i] = "[") {os++}
  if (str[i]= "]") {cs++}
  if (str[i]= ",") {c++}
  if (str[i]= "|") {st++}
  }

  if((ob-cb+oq-cq+os-cs)==0 && c%2==0 && st%2==0)
  {
    return true;
  }
  else
   {
    return false;
  }
}
