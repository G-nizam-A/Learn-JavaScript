function A(){
    let aa = 10;
    function B(){
        let bb = 20;
        function C(){
            let cc = 30;
            function D(){
                let dd = 40;
                function E(){
                    let ee = 50;
                    console.log(aa,bb,cc,dd,ee)
                }
                console.dir(E);
                E();
            }
            D();
        }
        C();
    }
    B();
}
A();