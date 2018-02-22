module.exports = function solveEquation(equation) 
{
var aa="";
var bb="";
var cc="";
var d;
var x1=undefined;
var x2=undefined;

var damn = equation.split('*');
var a = damn[0];
aa = parseFloat(a);

var b = damn[1];
b=b.split('');
b=b.splice(5,b.length-1);
b.pop();
for(var i = 0;i<b.length;i++)
{
if(i!=1)
	{
bb+=b[i];
	}
}
bb = parseFloat(bb);

var c = damn[2];
c=c.split('');
c=c.splice(5,c.length-1);
for(var i = 0;i<c.length;i++)
{
cc+=c[i];	
}
cc = parseFloat(cc);

d=bb*bb-4*aa*cc;
if(d>0)
{
 x2=-(bb-Math.sqrt(d))/(2*aa);
 x1=-(bb+Math.sqrt(d))/(2*aa);
}
if(d=0)
{
x2=bb/(2*aa);
x1=x1;
}
if(d<0)
{
x1=x2=undefined;
}
if(x1>x2)
{
var solutions=[x2,x1];
}
else
{
var solutions=[x1,x2];
}
return solutions;

}
