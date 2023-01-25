
            function onDIchange () {
                console.log("Dollar input changed");
                var dollar = di.value;
                let inr = 80*dollar;

                inrTag.value = inr;
            }

            
                var inrTag = document.getElementById('inrInput');
                var di = document.getElementById('dollarInput');
                di.addEventListener('input', onDIchange);


            
    