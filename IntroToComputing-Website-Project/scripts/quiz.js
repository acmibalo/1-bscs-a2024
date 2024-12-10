function process(){
    var miku, rin, len, luka, meiko, kaito, teto, gakupo, ia, gumi;
    miku = rin = len = luka = meiko = kaito = teto = gakupo = ia = gumi = 0;
    var one = document.getElementsByName("one");
    var two = document.getElementsByName("two");
    var three = document.getElementsByName("three");
    var four = document.getElementsByName("four");
    var five = document.getElementsByName("five");
    var six = document.getElementsByName("six");
    var seven = document.getElementsByName("seven");
    var eight = document.getElementsByName("eight");
    var nine = document.getElementsByName("nine");
    var ten = document.getElementsByName("ten");
    var count;
    
    /* 
        miku: sweet, cute, bright, happy, kind, friendly, childish
        rin: brash, loud, excitable, bright, silly, childish, stubborn
        len: shy, responsible, calm, childish
        luka: smart, shy, kind, calm, responsible
        meiko: strong, chill, stubborn, brash, loud
        kaito: kind, friendly, bright, silly
        teto: weird, childish, stubborn, loud, excitable
        gakupo: weird, brash, loud
        ia: cute, bright, friendly, calm
        gumi: smart, calm, responsible, friendly
    */

    /* q1 */
    for (i = 0; i < one.length; i++){
        if (one[i].checked){ 
            count = one[i].value; 
        }
    }
    if (count == "1"){ miku++; rin++; kaito++; ia++; }
    else if (count == "2"){ len++; luka++; gumi++; }
    else if (count == "3"){ meiko++; teto++; }
    else if (count == "4"){ gakupo++; }
    else{ console.log("An error has occured."); }
    
    /* q2 */
    for (i = 0; i < two.length; i++){
        if (two[i].checked){ 
            count = two[i].value; 
        }
    }
    if (count == "1"){ miku++; kaito++; }
    else if (count == "2"){ miku++; gumi++; }
    else if (count == "3"){ gakupo++; }
    else if (count == "4"){ meiko++; }
    else if (count == "5"){ gumi++; len++; }
    else if (count == "6"){ rin++; len++; }
    else if (count == "7"){ luka++; teto++; ia++; }
    else if (count == "8"){ teto++; ia++; }
    else if (count == "9"){ rin++; len++; kaito++; gakupo++; }
    else if (count == "10"){ luka++; meiko++; }
    else{ console.log("An error has occured."); }
    
    /* q3 */
    for (i = 0; i < three.length; i++){
        if (three[i].checked){ 
            count = three[i].value; 
        }
    }
    if (count == "1"){ miku++; rin++; len++; luka++; teto++; ia++; gumi++; }
    else if (count == "2"){ miku++; rin++; meiko++; ia++; gumi++; }
    else if (count == "3"){ miku++; rin++; luka++; gumi++; }
    else if (count == "4"){ miku++; rin++; len++; luka++; kaito++; teto++; ia++; gumi++; }  
    else if (count == "5"){ luka++; meiko++; kaito++; gumi++; gakupo++; }
    else if (count == "6"){ rin++; len++; meiko++; kaito++; gumi++; }
    else if (count == "7"){ miku++; rin++; len++; luka++; kaito++; gakupo++; teto++; }
    else if (count == "8"){ rin++; meiko++; kaito++; }
    else if (count == "9"){ miku++; rin++; len++; luka++; meiko++; kaito++; teto++; gakupo++; ia++; gumi++; }
    else{ console.log("An error has occured."); }
    
    /* q4 */
    for (i = 0; i < four.length; i++){
        if (four[i].checked){ 
            count = four[i].value; 
        }
    }
    if (count == "1"){ rin++; len++; }
    else if (count == "2"){ miku++; teto++; }
    else if (count == "3"){ kaito++; gakupo++; }
    else if (count == "4"){ luka++; meiko++; }
    else if (count == "5"){ ia++; gumi++; }
    else{ console.log("An error has occured."); }
    
    /* q5 */
    for (i = 0; i < five.length; i++){
        if (five[i].checked){ 
            count = five[i].value; 
        }
    }
    if (count == "1"){ miku++; meiko++; }
    else if (count == "2"){ rin++; len++; }
    else if (count == "3"){ teto++; ia++; }
    else if (count == "4"){ luka++; gumi++; }
    else if (count == "5"){ kaito++; }
    else if (count == "6"){ gakupo++; }
    
    else{ console.log("An error has occured."); }

    /* q6 */
    for (i = 0; i < six.length; i++){
        if (six[i].checked){ 
            count = six[i].value; 
        }
    }
    if (count == "1"){ rin++; }
    else if (count == "2"){ meiko++; }
    else if (count == "3"){ len++; kaito++; }
    else if (count == "4"){ luka++; }
    else if (count == "5"){ miku++; gumi++; }
    else if (count == "6"){ teto++; ia++; }
    else if (count == "7"){ gakupo++; }
    else{ console.log("An error has occured."); }
    
    /* q7 */
    for (i = 0; i < seven.length; i++){
        if (seven[i].checked){ 
            count = seven[i].value; 
        }
    }
    if (count == "1"){ miku++; ia++; gumi++; }
    else if (count == "2"){ rin++; meiko++; teto++; }
    else if (count == "3"){ miku++; len++; luka++; ia++; }
    else if (count == "4"){ len++; gumi++; }
    else if (count == "5"){ meiko++; kaito++; gakupo++; teto++; }
    else if (count == "6"){ gakupo++; teto++; }
    else{ console.log("An error has occured."); }
    
    /* q8 */
    for (i = 0; i < eight.length; i++){
        if (eight[i].checked){ 
            count = eight[i].value; 
        }
    }
    if (count == "1"){ rin++; }
    else if (count == "2"){ meiko++; gumi++; }
    else if (count == "3"){ teto++; }
    else if (count == "4"){ kaito++; }
    else if (count == "5"){ len++; luka++; ia++; }
    else if (count == "6"){ miku++; gakupo++; }
    else{ console.log("An error has occured."); }
    
    /* q9 */
    for (i = 0; i < nine.length; i++){
        if (nine[i].checked){ 
            count = nine[i].value; 
        }
    }
    if (count == "1"){ luka++; teto++; ia++; }
    else if (count == "2"){ rin++; len++; }
    else if (count == "3"){ meiko++; gumi++; }
    else if (count == "4"){ miku++; kaito++; }
    else if (count == "5"){ rin++; len++; }
    else if (count == "6"){ kaito++; gakupo++; teto++; }
    else if (count == "7"){ luka++; gumi++; }
    else if (count == "8"){ miku++; luka++; ia++; }
    else if (count == "9"){ rin++; meiko++; gumi++; }
    else if (count == "10"){ meiko++; kaito++; }
    else if (count == "11"){ teto++; ia++; }
    else if (count == "12"){ miku++; len++; luka++; }
    else if (count == "13"){ gakupo++; teto++; }
    else if (count == "14"){ len++; luka++; }
    else if (count == "15"){ miku++; meiko++; }
    else if (count == "16"){ kaito++; gakupo++; ia++; }
    else if (count == "17"){ len++; gakupo++; gumi++; }
    else if (count == "18"){ rin++; len++; }
    else{ console.log("An error has occured."); }
    
    /* q10 */
    for (i = 0; i < ten.length; i++){
        if (ten[i].checked){ 
            count = ten[i].value; 
        }
    }
    if (count == "1"){ miku++; }
    else if (count == "2"){ rin++; }
    else if (count == "3"){ len++; }
    else if (count == "4"){ luka++; }
    else if (count == "5"){ meiko++; }
    else if (count == "6"){ kaito++; }
    else if (count == "7"){ teto++; }
    else if (count == "8"){ gakupo++; }
    else if (count == "9"){ ia++; }
    else if (count == "10"){ gumi++; }
    else if (count == "11"){ /* ignore */ }
    else{ console.log("An error has occured."); }
    
    /* results */
    $("#f").remove();
    $("#submit").remove();
    $("header").html("VOCALOID QUIZ RESULTS");
    $(".description").html("The results are in! You are...");
    
    let result;
    i = Math.max(miku, rin, len, luka, meiko, kaito, teto, gakupo, ia, gumi);
    if (miku == i) { result = "Hatsune Miku"; }
    else if (rin == i) { result = "Kagamine Rin"; }
    else if (len == i) { result = "Kagamine Len"; }
    else if (luka == i) { result = "Megurine Luka"; }
    else if (meiko == i) { result = "MEIKO"; }
    else if (kaito == i) { result = "KAITO"; }
    else if (teto == i) { result = "Kasane Teto"; }
    else if (gakupo == i) { result = "Kamui Gakupo"; }
    else if (gumi == i) { result = "GUMI"; }
    else if (ia == i) { result = "IA"; }
    else { console.log("An error has occurred."); }
    console.log(i);
    
    if (result == "Hatsune Miku"){
        $("#start").after("<div ctr id='resultswrap'><div node id='results'><header>HATSUNE MIKU</header><div id='flex'><div><img src='/images/games/quiz/miku.png'></div><div>Loved by everyone, you are a bright and friendly presence in everyone's lives!</div></div><a id='link'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "Kagamine Rin"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#000000; --background:#fff1b6;'><header style='color:#000000;'>KAGAMINE RIN</header><div id='flex'><div><img src='/images/games/quiz/rin.png'></div><div>Loud and childish at times, there is never a dull day with you around!</div></div><a id='link' style='color:#0087d4; --filter:#ffd42a;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "Kagamine Len"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#000000; --background:#fff1b6;'><header style='color:#000000'>KAGAMINE LEN</header><div id='flex'><div><img src='/images/games/quiz/len.png'></div><div>You are calm and reponsible. You probably have to reign in your group at times!</div></div><a id='link' style='color:#0087d4; --filter:#ffd42a;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "Megurine Luka"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#000000; --background:#ffebe9;'><header style='color:#ac0089;'>MEGURINE LUKA</header><div id='flex'><div><img src='/images/games/quiz/luka.png'></div><div>You're a very kind person that others look up to. You may even have some secret admirers...</div></div><a id='link' style='color:#ac0089; --filter:#000000;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "MEIKO"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#d62c1c; --background:#ffb594;'><header style='color:#d62c1c'>MEIKO</header><div id='flex'><div><img src='/images/games/quiz/meiko.png'></div><div>A chill yet brash person at times, you live life without a care in the world!</div></div><a id='link' style='color:#d62c1c; --filter:#d62c1c;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "KAITO"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#213672; --background:#dff5ff;'><header style='color:#213672'>KAITO</header><div id='flex'><div><img src='/images/games/quiz/kaito.png'></div><div>Friendly and funny, your personality attracts many to you! You were probably the class clown.</div></div><a id='link' style='color:#213672; --filter:#213672;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "Kasane Teto"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#cc495e; --background:#e18493;'><header style='color:#cc495e'>KASANE TETO</header><div id='flex'><div><img src='/images/games/quiz/teto.png'></div><div>You desperately want to fit in, barely succeeding. You are loved by everyone, nevertheless!</div></div><a id='link' style='color:#cc495e; --filter:#958885;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "Kamui Gakupo"){ 
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#5f5ba8; --background:#d0b9c9;'><header style='color:#5f5ba8'>KAMUI GAKUPO</header><div id='flex'><div><img src='/images/games/quiz/gakupo.png'></div><div>A little weird and unpredictable, you are an enigma to others! Only you truly know yourself...</div></div><a id='link' style='color:#5f5ba8; --filter:#5f5ba8;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "IA"){
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#ec6ca5; --background:#F8C1D9;'><header style='color:#000000'>IA</header><div id='flex'><div><img src='/images/games/quiz/ia.png'></div><div>Outgoing and friendly, you're the cutest of your group! You are loved by everyone you meet!</div></div><a id='link' style='color:#000000; --filter:#ec6ca5;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else if (result == "GUMI"){
        $("#start").after("<div ctr id='resultswrap'><div node id='results' style='--border:#78bf5c; --background:#fee6b5;'><header style='color:#000000'>GUMI</header><div id='flex'><div><img src='/images/games/quiz/gumi.png'></div><div>You're very smart! You also probably dress in dark clothing, confident it's not a phase.</div></div><a id='link' style='color:#000000; --filter:#78bf5c;'>Take the quiz @ adilene.net</a></div></div>");
    }
    else{
        $("#start").after("<div ctr id='resultswrap'>An error has occured.</div>");
    }
    
    $("#resultswrap").append("<div style='margin-bottom:10px; display:flex; gap:10px; justify-content:center; align-items:flex-end;'><a id='download' onclick='downloadResults();'><button style='margin-top:10px;'>Download</button></a><button onclick='location.reload();'>Restart</button></div>");
    
    $("<br><div id='comparison'></div>").insertAfter("#resultswrap");
}

function downloadResults(){
    domtoimage.toBlob(document.getElementById("results"))
    .then(function (blob) {
        window.saveAs(blob, "results.png");
    });
}