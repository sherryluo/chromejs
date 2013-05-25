window.onload=function()
{
 var d=document;
 var oBox=d.getElementById('box');
 var aLi=oBox.getElementsByTagName('li');
 var i=0;
 
 for(i=0;i<aLi.length;i++)
 {
  var oP=aLi[i].getElementsByTagName('p')[0];
  oP.iAlpha=0;
  oP.times=null;
  aLi[i].onmouseover=function()
  {
   oP=this.getElementsByTagName('p')[0];
   oP.times && clearInterval(oP.times);
   oP.style.opacity=1;
   oP.style.filter="alpha(opacity=100)";
   oP.iAlpha=100;
  };
  aLi[i].onmouseout=function()
  {
   startMove(this.getElementsByTagName('p')[0])
  };
 }
};
function startMove(obj)
{
 obj.times && clearInterval(obj.time);
 obj.times=setInterval(function()
 {
  doMove(obj);
 },10);
}
function doMove(obj)
{
 var iSpeed=5;
 if(obj.iAlpha<=iSpeed)
 {
  clearInterval(obj.times);
  obj.iAlpha=0;
  obj.time=null;
 }
 else
 {
  obj.iAlpha-=iSpeed;
 }
 obj.style.filter="alpha(opacity="+obj.iAlpha+")";
 obj.style.opacity=obj.iAlpha/100;
}
