var scissors = document.getElementById("btn1");
var stone = document.getElementById("btn2");
var paper = document.getElementById("btn3");
var sup2 = document.getElementById("sup2");

var choose = "";


scissors.addEventListener('click',function(){
    var me = Math.floor(Math.random()*3); 
    // 0代表剪刀
    // 1代表石頭
    // 2代表布
    if (me == 0) {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :剪刀!</h2>
        <h2 class="final">我出的是 :剪刀!</h2>
        <h2 class="end">平手</h2>
        <h2 class="final">幹嘛出剪刀，浪費時間= =</h2>
    `;
    }else if (me == 1) {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :剪刀!</h2>
        <h2 class="final">我出的是 :石頭!</h2>
        <h2 class="end">你輸了</h2>
        <h2 class="final">輕輕鬆鬆~</h2>
    `;
    }else {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :剪刀!</h2>
        <h2 class="final">我出的是 :布!</h2>
        <h2 class="end">你贏了</h2>
        <h2 class="final">哭阿，你慢出!</h2>
    `;

    }
})


stone.addEventListener('click',function(){
    var me = Math.floor(Math.random()*3); 
    // 0代表剪刀
    // 1代表石頭
    // 2代表布
    if (me == 0) {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :石頭!</h2>
        <h2 class="final">我出的是 :剪刀!</h2>
        <h2 class="end">你贏了</h2>
        <h2 class="final">可惡，靠賽...</h2>
    `;
    }else if (me == 1) {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :石頭!</h2>
        <h2 class="final">我出的是 :石頭!</h2>
        <h2 class="end">平手</h2>
        <h2 class="final">算你好運。</h2>
    `;
    }else {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :石頭!</h2>
        <h2 class="final">我出的是 :布!</h2>
        <h2 class="end">你輸了</h2>
        <h2 class="final">果然還是我比較強</h2>
    `;

    }
})


paper.addEventListener('click',function(){
    var me = Math.floor(Math.random()*3); 
    // 0代表剪刀
    // 1代表石頭
    // 2代表布
    if (me == 0) {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :布!</h2>
        <h2 class="final">我出的是 :剪刀!</h2>
        <h2 class="end">你輸了</h2>
        <h2 class="final">唉，只用了三成力~</h2>
    `;
    }else if (me == 1) {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :布!</h2>
        <h2 class="final">我出的是 :石頭!</h2>
        <h2 class="end">你贏了</h2>
        <h2 class="final">嗚...</h2>
    `;
    }else {
        sup2.innerHTML= `
        <h2 class="final">你出的是 :布!</h2>
        <h2 class="final">我出的是 :布!</h2>
        <h2 class="end">平手</h2>
        <h2 class="final">哦，有點料喔!</h2>
    `;

    }
})