var a = document.getElementById('showMenu');
        // console.log(a);
        a.addEventListener("click", function(e){
            // console.log('123')
            var b = document.getElementsByClassName('n0')[0]
            // console.log(b);
            if(b.style.display === 'none'){
                b.style.display = 'block';
            }else{
                b.style.display = 'none';
            }
        });

