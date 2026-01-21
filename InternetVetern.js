let total_mistakes = 0;
let current_level = 0;
let dumb_repeats = 0;

const gameArea = document.querySelector(".game-area");
const body = document.querySelector("body");


function start_game() {
    load_level(0);
}


function load_level(n) {
    if (current_level < levels.length)
        gameArea.innerHTML = levels[current_level].html;
    else show_input_screen();
}


function win() {
    current_level++;
    load_level(levels[current_level]);

}

document.addEventListener("click", e => {
    if (e.target.classList.contains("win-btn")) {
        win();
    }
    else if (e.target.classList.contains("damage-btn")) {
        damage();
    }
});


function show_input_screen() {
    const html = `
    <div style="text-align: center; margin-top: 50px;">
        <h1 style="color:green">🎉 CONGRATULATIONS! 🎉</h1>
        <h2>You are a certified Internet Veteran.</h2>
        <p>You survived the dark patterns, pop-ups, and fake buttons.</p>
        <p>You made wrong submission <b>${total_mistakes} </b> times.</p>
        <br>
        <p>Enter your name for the records:</p>
        <input type="text" id="playerName" placeholder="Your Name" 
            style="padding: 10px; font-size: 18px; border: 2px solid black; border-radius: 5px; text-align: center;">
        <br><br>
        <button class="button-3d" onclick="generate_certificate()">Generate Certificate</button>
    </div>`;
    gameArea.innerHTML = html;
}

function generate_certificate() {
    const name = document.getElementById("playerName").value || "Anonymous User";
    const date = new Date().toLocaleDateString();

    const certHTML = `
    <div id="cert-container">
        <div class="cert-border">
            <div class="cert-header">CERTIFICATE</div>
            <div class="cert-badge">☑ VERIFIED VETERAN</div>
            
            <div class="cert-body">
                <p class="cert-small">This Certificate Is Presented To</p>
                <h1 class="cert-name">${name}</h1>
                <p class="cert-text">
                    For successfully navigating the dark patterns, avoiding <b>${levels.length}</b>+ viruses, 
                    and proving they are made of flesh and blood.
                    <br><br>
                    They are a Certified Internet <b>EXPERT</b>.
                </p>

            </div>

            <div class="cert-footer">
                <div class="sign-box">
                    <p class="signature">${date}</p>
                    <div class="line"></div>
                    <small>DATE</small>
                </div>
                
                <div class="cert-stamp">PASSED</div>

                <div class="sign-box">
                    <p class="signature">The Internet</p>
                    <div class="line"></div>
                    <small>CERTIFIED BY</small>
                </div>
            </div>
        </div>

        <button onclick="window.print()" class="no-print download-btn">
            Download PDF
        </button>
    </div>
    `;

    gameArea.innerHTML = certHTML;
    body.style.backgroundColor = "whitesmoke";
}


function damage() {
    total_mistakes++;
    gameArea.classList.add('damage-effect');
    body.style.backgroundColor = "red";
    setTimeout(() => {
        gameArea.classList.remove('damage-effect');
        body.style.backgroundColor = "rgb(255, 244, 228)";
    }, 400);
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
        damage();
        document
            .querySelectorAll('.cap-tile.selected')
            .forEach(t => t.classList.remove('selected'));
    } else if (correctCount == 2) {
        win();
    } else {
        damage();
    }
    console.log(correctCount + "corretCount")
}


const levels = [{
    name: "I am a human",
    html: `<div style="position: relative; width: 100%; height: 100%;">
            <div class="blur-content">
                <div style="text-align: center;">
                    <h1>Loading Content...</h1>
                    <p>Please verify you are human to continue.</p>
                </div>
            </div>

            <div class="popup-box">
                <div class="tiny-links close-x win-btn" style="text-decoration: none; font-size: 20px; opacity:0.18;"  >✕</div>
                <div class="" style ="margin-left: 2%;"><img src="https://cdn-icons-png.flaticon.com/256/2206/2206322.png" height="80x"></div>
                <h3 style="margin: 1px 0;">Security Check</h3>
                <p style="font-size: 14px; color: #555; line-height: 1.4;">
                    Click <b>"Allow"</b> to confirm you are not a robot.</p>
                <button class="button-3d damage-btn" style="width: 100%;">
                  Allow Notifications</button>
                <button class="button-3d white-btn damage-btn" style="width: 100%; margin-top: 10px;">
                  Yes, I am a robot</button>
            </div>
        </div>`
}, {
    name: "Find Real Download",
    html: `<div class="container">
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
                <span class="link-blue win-btn" >Mediafire</span>
            </p>
        </div>`
},

{
    name: "Cookies",
    html: `<div class="container">
            <div class="level-text" style="font-size: 18px; margin-bottom: 20px;">Level 3: Cookies</div>
      
            <h2 style="font-family: sans-serif; margin-bottom: 20px;">Do you like cookies?<br>
              <img src="https://cdn-icons-png.flaticon.com/512/5473/5473473.png" height="50px" width="50px"></h2>
            
            <button class="button-3d damage-btn">
                Yes, Accept all cookies </button>
            <button class="button-3d damage-btn">
                Yes, Accept some cookies </button>
            <button class="tiny-links win-btn">
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
                <button class="button-3d win-btn" style="width: 100%; margin-top: 15px;">
                    Yes, I hate saving money and I want to be sad.
                </button>
                <div class="tiny-links damage-btn" style="margin-top: 20px; font-size: 11px; color: #999; position:inherit;opacity :1;">
                    No, I want to stay happy!
                </div>
            </div>
        </div>`
}, {
    name: "Virus Alert",
    html: `<div class="container" style="position: relative; width: 100%; height: 100%; background: #1a237e;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; width: 350px; border-top: 30px solid #d32f2f; box-shadow: 0 20px 50px rgba(0,0,0,0.5); font-family: sans-serif; text-align: left;">
                <div style="position: absolute; top: -22px; left: 10px; color: white; font-weight: bold; font-size: 14px;">System Warning</div>
                <div class="damage-btn" style="position: absolute; top: -25px; right: 0; width: 30px; height: 30px; line-height: 25px; text-align: center; color: white; font-weight: bold; font-size: 18px; cursor: pointer;">
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
                        <button class="damage-btn" style="background: #ccc; border: 1px solid #999; padding: 5px 15px; cursor: pointer;">Cancel</button>
                        <button class="damage-btn" style="background: #d32f2f; color: white; border: 1px solid #b71c1c; padding: 5px 15px; cursor: pointer;">Remove Virus</button>
                    </div>

                    <div class="tiny-links win-btn" style="position: absolute; bottom: 0px; left: 50%; transform: translateX(-50%);
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
                class="button-3d damage-btn" 
                style="position: absolute; top: 50%; left: 50%; transition: transform 0.1s ease; z-index: 10;">
                DOWNLOAD
            </button>

            <div class="win-btn" style="
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
    name: "Reaction Time",
    html: `
    <div class="container" style="width:100%; height:100%; padding:0;">
        <div class="rt-container rt-idle" onmousedown="rt_handleClick(this)">
            <div class="rt-icon"><i class="fas fa-bolt" style="color: #FFD43B;"></i></div>
            <h1>Reflex Check</h1>
            <p>Click anywhere to start.</p>
        </div>
    </div>`
}, {
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
                    
                    <div onclick="alert('Providing a hint, as this is a demo game: there are only two correct options')" style="cursor: pointer; opacity: 0.6; transition: 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'">
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
}, {
    name: "IPhone Scam",
    html: `<div class="container" style="background: rgba(0,0,0,0.8); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                
                <style>
                    @keyframes popIn { 0% { transform: scale(0); } 80% { transform: scale(1.1); } 100% { transform: scale(1); } }
                    .iphone-card { animation: popIn 0.5s ease-out; }
                </style>

                <div class="iphone-card" style="background: white; width: 320px; border-radius: 10px; padding: 20px; text-align: center; position: relative; box-shadow: 0 0 50px rgba(255,255,255,0.5);">
                    
                    <div class="win-btn" style="position: absolute; top: 10px; right: 10px; color: #aaa; cursor: pointer; font-family: sans-serif; font-weight: bold; padding: 5px;">✕</div>

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




let rt_state = 'idle'; 
let rt_timer = null;
let rt_startTime = 0;

function rt_handleClick(el) {
    if (rt_state === 'idle') {
        rt_state = 'waiting';
        el.className = 'rt-container rt-waiting';
        
        el.innerHTML = '<div class="rt-icon"><i class="fas fa-bolt" style="color: #FFD43B;"></i></div><h1>Wait for Green...</h1>';
        
        const delay = Math.floor(Math.random() * 2000) + 2000;
        
        rt_timer = setTimeout(() => {
            if (document.body.contains(el)) {
                rt_state = 'go';
                el.className = 'rt-container rt-go';
                el.innerHTML = '<div class="rt-icon"><i class="fas fa-bolt"></i></div><h1>CLICK!</h1>';
                
                requestAnimationFrame(() => {
                    rt_startTime = Date.now();
                });
            }
        }, delay);
    } 

    else if (rt_state === 'waiting') {
        clearTimeout(rt_timer);
        damage(); 
        rt_state = 'idle';
        el.className = 'rt-container rt-idle';
        
        el.innerHTML = '<div class="rt-icon"><i class="fas fa-exclamation-triangle"></i></div><h1>Too Soon!</h1><p>Click to try again.</p>';
    } 
    else if (rt_state === 'go') {
        const endTime = Date.now();
        const diff = endTime - rt_startTime;
        
        if (diff > 269) {
            damage();
            rt_state = 'idle';
            el.className = 'rt-container rt-idle';
            el.innerHTML = `<div class="rt-icon"><i class="fas fa-hourglass-end"></i></div><h1>${diff} ms</h1><p>Too Slow! (Aim for < 269ms)<br>Click to retry.</p>`;
        } else {
            el.innerHTML = `<div class="rt-icon"><i class="fa-solid fa-clock"></i></div><h1>${diff} ms</h1><p>Human Reflexes Verified.</p>`;
            
            rt_state = 'finished'; 
            setTimeout(win, 1000);
        }
    }
}




start_game();
