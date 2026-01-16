let lives = 3;
let current_level = 0;

const gameArea = document.querySelector(".game-area");
const body = document.querySelector("body");


function start_game(){
    load_level(0);
}


function load_level(n){
    if (current_level < levels.length)
        gameArea.innerHTML = levels[current_level].html;
}


function win(){
    current_level++;
    load_level(levels[current_level]);
}

function damage(){
    lives--;
    console.log(lives);
    if (lives==0)
        game_over()
    gameArea.classList.add('damage-effect');
    body.style.backgroundColor = "red" ;
    // 3. REMOVE ANIMATION (after 0.5s)
    setTimeout(() => {
        gameArea.classList.remove('damage-effect');
        body.style.backgroundColor = "rgb(255, 244, 228)";
    }, 400);
}

function game_over(){
    console.log("game over");
}


function verifyBotanicalCaptcha() {
        const selected = document.querySelectorAll('.cap-tile.selected');
        let correctCount = 0;
        let failMsg = '';

        selected.forEach(tile => {
            if (tile.dataset.type === 'veg') {
                correctCount++;
            } else {
                failMsg = tile.dataset.msg || 'Incorrect.';
            }
        });

        if (failMsg !== '') {
            // alert('Please try again.\nHint: ' + failMsg);
            damage();
            document
                .querySelectorAll('.cap-tile.selected')
                .forEach(t => t.classList.remove('selected'));
        } else if (correctCount == 2) {
            win();
        } else {
            // alert('Please select all matching images.');
            damage();
        }
        console.log(correctCount + "corretCount")
    }


const levels=[{
    name : "I am a human",
    html : `<div style="position: relative; width: 100%; height: 100%;">
            <div class="blur-content">
                <div style="text-align: center;">
                    <h1>Loading Content...</h1>
                    <p>Please verify you are human to continue.</p>
                </div>
            </div>

            <div class="popup-box">
                <div class="tiny-links close-x" style="text-decoration: none; font-size: 20px; opacity:0.18;"  onclick="win()">✕</div>
                <div class="" style ="margin-left: 2%;"><img src="https://cdn-icons-png.flaticon.com/256/2206/2206322.png" height="80x"></div>
                <h3 style="margin: 1px 0;">Security Check</h3>
                <p style="font-size: 14px; color: #555; line-height: 1.4;">
                    Click <b>"Allow"</b> to confirm you are not a robot.</p>
                <button class="button-3d" style="width: 100%;" onclick="damage()">
                  Allow Notifications</button>
                <button class="button-3d white-btn" style="width: 100%; margin-top: 10px;" onclick="damage()">
                  Yes, I am a robot</button>
            </div>
        </div>`
},{
    name : "Find Real Download",
    html : `<div class="container">
            <div class="level-text" style="font-size: 18px;">Level 2: Find the Real Download</div>
          <h2 style="color: #d32f2f; text-align: center; font-family: sans-serif; margin: 0 0 20px 0; font-size: 24px;">Select Carefully!!!!!!</h2>
          <button class="bar-btn" type="button" onclick="damage()">
            <span class="bar-btn__text">Download Now</span>
            <span class="bar-btn__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                class="svg"
              >
                <path
                  d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                />
                <path
                  d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                />
                <path
                  d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                />
              </svg>
            </span>
          </button>

          <button class="bar-btn" type="button" onclick="damage()">
            <span class="bar-btn__text">Fast Download</span>
            <span class="bar-btn__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                class="svg"
              >
                <path
                  d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                />
                <path
                  d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                />
                <path
                  d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                />
              </svg>
            </span>
          </button>

          <button class="bar-btn" type="button" onclick="damage()">
            <span class="bar-btn__text">Safe Download</span>
            <span class="bar-btn__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                class="svg"
              >
                <path
                  d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                />
                <path
                  d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                />
                <path
                  d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                />
              </svg>
            </span>
          </button>

          <button class="bar-btn" type="button" onclick="damage()">
            <span class="bar-btn__text">Real Download</span>
            <span class="bar-btn__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                class="svg"
              >
                <path
                  d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                />
                <path
                  d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                />
                <path
                  d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                />
              </svg>
            </span>
          </button>

            <p class="link">
                File size: 2KB |
                <span class="link-blue" onclick="alert('Link Expired')">Mirror Link 1</span> |
                <span class="link-blue" onclick="alert('Link Expired')">Mega</span> |
                <span class="link-blue" onclick="win()">Mediafire</span>
            </p>
        </div>`
},

    {
      name : "Cookies",
      html : `<div class="container">
            <div class="level-text" style="font-size: 18px; margin-bottom: 20px;">Level 3: Cookies</div>
      
            <h2 style="font-family: sans-serif; margin-bottom: 20px;">Do you like cookies?<br>
              <img src="https://cdn-icons-png.flaticon.com/512/5473/5473473.png" height="50px" width="50px"></h2>
            
            <button class="button-3d" onclick="damage()">
                Yes, Accept all cookies </button>
            <button class="button-3d" onclick="damage()">
                Yes, Accept some cookies </button>
            <button class="tiny-links" onclick="win()">
                Reject All / Settings </button>
        </div>`
    }, {
    name: "Unsubscribe",
    html: `<div class="container">
            <div class="level-text">Level 4: Unsubscribe</div>
                        
            <div style="background: white; padding: 20px; border-radius: 10px; border: 1px solid #ccc; text-align: center; width: 300px;">
                <img src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png" height="60px" style="margin-bottom: 15px;">
                <h3 style="margin: 0 0 10px 0;">Wait! Don't go!</h3>
                <p style="font-size: 14px; color: #555;">If you leave, you'll miss out on our daily spam... er, amazing offers! Are you sure?</p>    
                <button class="button-3d" style="width: 100%; margin-top: 15px;" onclick="win()">
                    Yes, I hate saving money and I want to be sad.
                </button>
                <div class="tiny-links" onclick="damage()" style="margin-top: 20px; font-size: 11px; color: #999; position:inherit;opacity :1;">
                    No, I want to stay happy!
                </div>
            </div>
        </div>`
},{
    name: "Virus Alert",
    html: `<div class="container" style="position: relative; width: 100%; height: 100%; background: #1a237e;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; width: 350px; border-top: 30px solid #d32f2f; box-shadow: 0 20px 50px rgba(0,0,0,0.5); font-family: sans-serif; text-align: left;">
                <div style="position: absolute; top: -22px; left: 10px; color: white; font-weight: bold; font-size: 14px;">System Warning</div>
                <div onclick="damage()" style="position: absolute; top: -25px; right: 0; width: 30px; height: 30px; line-height: 25px; text-align: center; color: white; font-weight: bold; font-size: 18px; cursor: pointer;">
                    ✕ </div>
                
                <div style="padding: 20px;">
                    <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 20px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/564/564619.png" width="50">
                        <div>
                            <h3 style="margin: 0; color: #d32f2f;">CRITICAL ERROR!</h3>
                            <p style="margin: 5px 0 0 0; font-size: 12px; color: #333;">Your computer may be infected with "Trojan.Win32.Fake"</p>
                        </div>
                    </div>
                    
                    <p style="font-size: 12px;">Contact Support: +1-555-SCAM-NOW</p>
                    <div style="text-align: right; margin-top: 20px; position: relative;">
                        <button onclick="damage()" style="background: #ccc; border: 1px solid #999; padding: 5px 15px; cursor: pointer;">Cancel</button>
                        <button onclick="damage()" style="background: #d32f2f; color: white; border: 1px solid #b71c1c; padding: 5px 15px; cursor: pointer;">Remove Virus</button>
                    </div>

                    <div class="tiny-links" onclick="win()" style="position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%);
                        color: #999 !important; opacity: 0; pointer-events: none; animation: revealBtn 0s 6s forwards;">
                        No Thanks (Close Window) </div>
                </div>
            </div>
        </div>`
}, {
    name: "Catch Me",
    html: `<div class="container" style="width: 100%; height: 100%; overflow: hidden; position: relative;">
            <div class="level-text">Level 6: Catch the Button</div>
            
            <p style="margin-bottom: 20px;">Click the green button to continue.</p>

            <button id="runaway" 
                onmouseover="const x = Math.random() * (300 - -300) + -300; const y = Math.random() * (200 - -200) + -200; this.style.transform = 'translate(' + x + 'px, ' + y + 'px)';"
                class="button-3d" 
                onclick="damage()"
                style="position: absolute; top: 50%; left: 50%; transition: transform 0.1s ease; z-index: 10;">
                DOWNLOAD
            </button>

            <div onclick="win()" style="
                position: absolute; 
                bottom: 20px; 
                width: 100%; 
                text-align: center; 
                color: #ccc; 
                font-size: 80px; 
                font-weight: bold; 
                opacity: 0.09; 
                cursor: pointer;
                z-index: 1;">
                GIVE UP
            </div>
            
            <p style="position: absolute; bottom: 5px; width: 100%; text-align: center; font-size: 10px; color: #999;">
                (Sometimes the only way to win is to stop trying)
            </p>
        </div>`
},{
    name: "Vegetable Captcha",
    html: `<div class="container" style="padding: 0; background:; width: 100%; display: flex; justify-content: center; align-items: center;">
            
            <div style="background: white; width: 320px; box-shadow: 0 0 4px rgba(0,0,0,0.2); font-family: 'Roboto', Arial, sans-serif;">
                
                <div style="background: #1A73E8; color: white; padding: 20px 20px 15px 20px; text-align: left;">
                    <p style="margin: 0; font-size: 15px; line-height: 1.2;">Select all the squares with a</p>
                    <h1 style="margin: 8px 0 0 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Vegetable</h1>
                </div>

                <div id="captcha-grid" style="
                    display: grid; 
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 2px; 
                    background: white; 
                    padding: 5px; 
                    box-sizing: border-box;">

                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="fruit" >
                        <div class="img-wrap"><img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop"></div>
                        <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="fruit">
                        <div class="img-wrap"><img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2013/9/16/0/Where_do_pumpkins_grow_overhead_view_on_vine_s4x3.jpg.rend.hgtvcom.1280.720.85.suffix/1400982091403.webp"></div>
                        <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="seed">
                         <div class="img-wrap"><img src="https://www.harvst.co.uk/wp-content/uploads/2022/05/peas-scaled.jpeg?w=200&h=200&fit=crop"></div>
                         <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" >
                         <div class="img-wrap"><img src="https://wallpapers.com/images/featured/bell-pepper-pictures-m8uluvhfzzkyr19s.jpg?w=200&h=200&fit=crop"></div>
                         <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="Chicken">
                         <div class="img-wrap"><img src="https://i.pinimg.com/736x/21/52/79/2152793beed93215303c5aa5c84f48d5.jpg?w=200&h=200&fit=crop"></div>
                         <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="fruit">
                         <div class="img-wrap"><img src="https://thumbs.dreamstime.com/b/fresh-green-cucumbers-close-up-one-cut-half-fresh-green-cucumbers-close-up-one-cut-half-ai-generated-415561166.jpg?w=200&h=200&fit=crop"></div>
                         <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="fruit" >
                         <div class="img-wrap"><img src="https://kyssafarms.com/cdn/shop/products/lady-finger.jpg?v=1600955405"></div>
                         <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="veg">
                         <div class="img-wrap" style="background: #eee; display: flex; align-items: center; justify-content: center;">
                            <img src="https://cdn9.dissolve.com/p/D943_187_247/D943_187_247_1200.jpg" >
                         </div>
                         <div class="check-mark"></div>
                    </div>
                    <div class="cap-tile" onclick="this.classList.toggle('selected')" data-type="veg">
                         <div class="img-wrap"><img src="https://plantix.net/en/library/assets/custom/crop-images/onion.jpeg"></div>
                         <div class="check-mark"></div>
                    </div>
                </div>

                <div class="" style="
                    border-top: 1px solid #ccc; 
                    padding: 10px 15px; 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    background: white;">
                    
                    <div onclick="alert('Reloading images... (Not really)')" style="cursor: pointer; opacity: 0.6; transition: 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="black"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                    </div>

                    <button class="" onclick="verifyBotanicalCaptcha()" 
                    style="
                        background: #4A90E2; 
                        color: white; 
                        border: none; 
                        padding: 10px 24px; 
                        font-weight: bold; 
                        font-size: 14px; 
                        border-radius: 2px; 
                        cursor: pointer;
                        text-transform: uppercase;
                        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                        ">
                        Verify
                    </button>
                </div>
            </div>
        </div>`
},{
        name: "IPhone Scam",
        html: `<div class="container" style="background: rgba(0,0,0,0.8); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                
                <style>
                    @keyframes popIn { 0% { transform: scale(0); } 80% { transform: scale(1.1); } 100% { transform: scale(1); } }
                    .iphone-card { animation: popIn 0.5s ease-out; }
                </style>

                <div class="iphone-card" style="background: white; width: 320px; border-radius: 10px; padding: 20px; text-align: center; position: relative; box-shadow: 0 0 50px rgba(255,255,255,0.5);">
                    
                    <div onclick="win()" style="position: absolute; top: 10px; right: 10px; color: #aaa; cursor: pointer; font-family: sans-serif; font-weight: bold; padding: 5px;">✕</div>

                    <h2 style="color: #d32f2f; margin: 0; font-size: 24px;">CONGRATULATIONS!</h2>
                    <p style="font-size: 12px; color: #555;">You are today's lucky winner!</p>
                    
                    <img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop" 
                         style="width: 150px; margin: 10px auto; display: block;">
                    
                    <h3 style="margin: 5px 0;">iPhone 17 Pro Max</h3>
                    <p style="font-size: 11px; color: #666; margin-bottom: 15px;">(512GB • Titanium Black)</p>

                    <div style="background: #f0f0f0; padding: 10px; border-radius: 5px; margin-bottom: 15px;">
                        <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold;">Step 1: Share to claim</p>
                        
                        <div style="width: 100%; height: 10px; background: #ddd; border-radius: 5px; overflow: hidden; margin-bottom: 5px;">
                            <div id="share-prog" style="width: 0%; height: 100%; background: #25D366; transition: width 0.2s;"></div>
                        </div>
                        <p id="share-text" style="font-size: 10px; margin: 0;">0/5 Shared</p>
                    </div>

                    <button onclick="
                        const bar = document.getElementById('share-prog');
                        const txt = document.getElementById('share-text');
                        let w = parseInt(bar.style.width) || 0;
                        if(w < 100) {
                            w += 20;
                            bar.style.width = w + '%';
                            txt.innerText = (w/20) + '/5 Shared';
                            // Open a fake window to annoy them
                            window.open('', '_blank', 'width=10,height=10,left=-1000'); 
                        }
                        if(w === 100) {
                            document.getElementById('claim-btn').disabled = false;
                            document.getElementById('claim-btn').style.background = '#d32f2f';
                            document.getElementById('claim-btn').innerText = 'CLAIM NOW';
                        }
                    " style="background: #25D366; color: white; border: none; padding: 8px 15px; border-radius: 20px; font-weight: bold; cursor: pointer; width: 100%; margin-bottom: 10px; display: flex; align-items: center; justify-content: center; gap: 5px;">
                        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" width="16"> Share on WhatsApp
                    </button>

                    <button id="claim-btn" onclick="alert('Scam! Never share just to win.'); damage();" disabled 
                        style="background: #ccc; color: white; border: none; padding: 10px; width: 100%; font-weight: bold; cursor: pointer; border-radius: 5px;">
                        Waiting for shares...
                    </button>

                    <p style="font-size: 9px; color: #999; margin-top: 10px;">
                        *By claiming you agree to pay $500 shipping fees.
                    </p>
                </div>
        </div>`
    }]

// const levels = [{
//     name: "Shuffling Keypad",
//     html: `<div class="container">
//             <div class="level-text">Level 7: Robot Check</div>
            
//             <div style="background: white; padding: 20px; border: 1px solid #ccc; border-radius: 10px; text-align: center;">
//                 <h2 style="margin-top: 0;">3 + 4 = ?</h2>
                
//                 <div id="keypad" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 20px; width: 200px;">
//                     <button class="num-btn" onclick="damage()">1</button>
//                     <button class="num-btn" onclick="damage()">2</button>
//                     <button class="num-btn" onclick="damage()">3</button>
//                     <button class="num-btn" onclick="damage()">4</button>
//                     <button class="num-btn" onclick="damage()">5</button>
//                     <button class="num-btn" onclick="damage()">6</button>
                    
//                     <button class="num-btn" onclick="win()" style="background: #e8f0fe; color: #1967d2;">7</button>
                    
//                     <button class="num-btn" onclick="damage()">8</button>
//                     <button class="num-btn" onclick="damage()">9</button>
//                 </div>
//             </div>
            
//             <div onmouseover="
//                 const container = this.previousElementSibling.querySelector('#keypad');
//                 for (let i = container.children.length; i >= 0; i--) {
//                     container.appendChild(container.children[Math.random() * i | 0]);
//                 }
//             " style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; pointer-events: none;">
//                 </div>

//             <style>
//                 .num-btn {
//                     padding: 15px;
//                     font-size: 18px;
//                     cursor: pointer;
//                     background: #eee;
//                     border: 1px solid #ccc;
//                     border-radius: 5px;
//                 }
//                 /* Shuffle trigger on hover */
//                 .num-btn:hover {
//                     /* This is a CSS hack to make them feel 'unstable' */
//                     transform: scale(0.95);
//                 }
//             </style>
            
//             <div 
//                 onmouseenter="
//                     const k = document.getElementById('keypad');
//                     /* Shuffle children */
//                     for (let i = k.children.length; i >= 0; i--) {
//                         k.appendChild(k.children[Math.random() * i | 0]);
//                     }
//                 "
//                 style="position: absolute; top: 0; left: 0; width: 100%; height: 10px; /* Trigger bar at top just to mess with them initially */">
//             </div>
//         </div>`
// },{
//     name: "Software Installer",
//     html: `<div class="container" style="text-align: left; align-items: flex-start; padding: 20px; width: 80%;">
//             <div class="level-text">Level 3: Setup Wizard</div>
//             <div style="border: 1px solid #999; background: #eee; padding: 10px; width: 100%;">
//                 <h3 style="margin-top: 0;">Setup - SuperZip Archiver</h3>
//                 <p style="font-size: 14px;">Choose your installation type:</p>
                
//                 <div style="background: white; padding: 10px; border: 1px solid #ccc; margin-bottom: 10px;">
//                     <label style="display: flex; gap: 10px; cursor: pointer;">
//                         <input type="radio" name="install" checked>
//                         <div>
//                             <strong>Express (Recommended)</strong><br>
//                             <span style="font-size: 12px; color: #666;">Installs SuperZip and the "Ask.com" Toolbar browser extension.</span>
//                         </div>
//                     </label>
//                 </div>

//                 <div style="background: white; padding: 10px; border: 1px solid #ccc;">
//                     <label style="display: flex; gap: 10px; cursor: pointer;">
//                         <input type="radio" name="install">
//                         <div>
//                             <strong>Custom Installation</strong><br>
//                             <span style="font-size: 12px; color: #666;">Choose which components to install.</span>
//                         </div>
//                     </label>
//                 </div>

//                 <div style="display: flex; justify-content: flex-end; margin-top: 20px; gap: 10px;">
//                     <button style="padding: 5px 15px;" onclick="location.reload()">Cancel</button>
//                     <button style="padding: 5px 15px;" onclick="damage()">Next ></button>
//                 </div>
                
//                 <p style="font-size: 10px; color: blue; text-decoration: underline; cursor: pointer; text-align: right; margin-top: 5px;" onclick="win()">
//                     Skip all offers
//                 </p>
//             </div>
//         </div>`
// },{
//     name: "Terms of Service",
//     html: `<div class="container" style="width: 80%;">
//             <div class="level-text">Level 5: The Agreement</div>
//             <h3 style="margin: 0;">Updated Terms of Service</h3>
//             <p style="font-size: 12px; color: #666;">Please read carefully to continue.</p>
            
//             <div id="tos-box" style="width: 100%; height: 150px; overflow-y: scroll; background: white; border: 1px solid #ccc; padding: 10px; font-size: 12px; margin-bottom: 15px; text-align: left;">
//                 <p><strong>1. Data Usage</strong><br>We will sell your data to everyone.</p>
//                 <p><strong>2. Soul Ownership</strong><br>By clicking agree, you grant us rights to your soul.</p>
//                 <p><strong>3. Hidden Fees</strong><br>We will charge $50/month for 'Air Usage'.</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                 <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 <p><strong>4. The Exit</strong><br>If you actually read this far, you are a true veteran.</p>
                
//                 <button onclick="win()" style="background: #333; color: white; border: none; padding: 5px 10px; cursor: pointer; margin-top: 20px;">
//                     I Decline (Continue Game)
//                 </button>
//                 <br><br>
//             </div>

//             <button class="button-3d" style="width: 100%;" onclick="damage()">
//                 I Agree to Everything
//             </button>
//         </div>`
// },{
//     name: "Captcha",
//     html: `<div class="container">
//             <div class="level-text">Level 6: Verify You Are Human</div>
            
//             <div style="background: white; padding: 15px; border: 1px solid #ccc; width: 300px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
//                 <div style="background: #1A73E8; color: white; padding: 15px; margin: -15px -15px 15px -15px;">
//                     <h3 style="margin: 0;">Select all images with a</h3>
//                     <h1 style="margin: 0; font-size: 28px;">BICYCLE</h1>
//                     <p style="margin: 0; font-size: 12px;">Click verify once there are none left.</p>
//                 </div>

//                 <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px;">
//                     <img src="https://cdn-icons-png.flaticon.com/512/171/171257.png" onclick="damage()" style="width: 100%; background: #eee; cursor: pointer;">
//                     <img src="https://cdn-icons-png.flaticon.com/512/2554/2554933.png" onclick="damage()" style="width: 100%; background: #eee; cursor: pointer;">
//                     <img src="https://cdn-icons-png.flaticon.com/512/2003/2003789.png" onclick="damage()" style="width: 100%; background: #eee; cursor: pointer;">
//                 </div>

//                 <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
//                     <button onclick="win()" style="background: none; border: none; color: #1A73E8; font-weight: bold; cursor: pointer;">SKIP</button>
                    
//                     <button onclick="damage()" style="background: #1A73E8; color: white; border: none; padding: 8px 20px; font-weight: bold; border-radius: 3px; cursor: pointer;">VERIFY</button>
//                 </div>
//             </div>
//         </div>`
// }]

start_game();

