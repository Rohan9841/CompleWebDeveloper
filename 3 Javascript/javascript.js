  var startTime = new Date().getTime();
            var bestTime=0;
            
            function colors(){
                
                var letters = "ABCDEF0123456789".split("");
                var color = "#";
                var i = 0;
                while (i<6){
                    color+=letters[Math.floor(Math.random()*16)];
                    i+=1;
                }
                return (color);
            }
            
            function showShapes(){
                document.getElementById("shape").style.display="block";
                
                document.getElementById("shape").style.top=Math.random()*400+"px";
                
                document.getElementById("shape").style.left=Math.random()*1000+"px";
                
                document.getElementById("shape").style.backgroundColor=colors();
                
                if(Math.random()>0.5){
                    
                    document.getElementById("shape").style.borderRadius="50%";
                    
                }else{
                    
                    document.getElementById("shape").style.borderRadius="0%";
                    
                }
                
                
                startTime = new Date().getTime();
                
            
            }
            
            function makeShapeAppear(){
            
                setTimeout(showShapes,Math.random()*2000);
                
            }
            
            makeShapeAppear();
        
            document.getElementById("shape").onclick=function(){
                
              
            
                var endTime = new Date().getTime();
                
                var totalTime = (endTime-startTime)/1000;
                
                var yourTime = totalTime;
                
                document.getElementById("shape").style.display="none";
                document.getElementById("time").innerHTML=yourTime+" sec"
                
               makeShapeAppear();
                
            }
            