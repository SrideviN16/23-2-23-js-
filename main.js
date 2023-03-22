// 23-3-23//
//list of prime//
var valuea=parseInt(prompt("enter the number"));
		for(i=2;i<=valuea;i++)
		{
		    var prime=true;
			mine:for(j=2;j<=valuea;j++)
			{
			if(i!==j){
				if(i%j==0){
				prime=false;
			    break  mine;
				
			 }
			}
		}
		if(prime==true){
			 document.write(i);
			 document.write("<br>");
			 }
	    }
//2.armstrong for n digit//
var m=parseInt(prompt("enter the number for armstrong:"));
			 var p=m;
			 var s=m;
			 var arm=0;
			 
			 for(i=0; i<m; i++)
			 {
				 m=m%10;
			 }
			
			 while(s>0)
			 {
				 var reminder=s%10;
				 arm=arm+(reminder**i);
				 s=parseInt(s/10);
			 }
			
			  if(arm==p)
			  {
				   console.log("It's Amrstrong");
			  }
			  else 
			  {
				   console.log("It's not amstrong");
			  }