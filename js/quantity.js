let  btn1 = document.getElementsByClassName('btn1')[0];
        btn1.addEventListener('click', function(e){
        let input_num = document.getElementById('input_num')
        // console.log(input_num);
        let one = 1
        let count =  input_num.value
        count = count -  one

        console.log(count);
        
        input_num.value = count
        // console.log(typeof(count));
        
        if( input_num.value < 1){
            input_num.value = 0
        }
        // console.log(input_num.value);
       })

       let  btn2 = document.getElementsByClassName('btn2')[0];
        btn2.addEventListener('click', function(e){
        let input_num = document.getElementById('input_num')
        // console.log(input_num);
        let one = 1
        let count =  Number(input_num.value)
        count = count +  one

        // console.log(count);
        
        input_num.value = count
        // console.log(typeof(count));
        
       })
