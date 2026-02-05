const vscode = require('vscode');

// Embedded HTML content
const getWelcomeHTML = () => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geode Amethyst - Welcome</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Montserrat', Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #1A1B26 0%, #13141C 50%, #0F1016 100%);
            color: #C0CAF5;
            min-height: 100vh;
            padding: 20px;
            overflow-x: hidden;
        }
        .container { max-width: 900px; margin: 0 auto; }
        .header-block {
            display: inline-block;
            border-radius: 32px 32px 0 0;
            border: 2.5px solid #FFD25A;
            position: relative;
            background: linear-gradient(120deg, #1b1427 60%, #28204B 100%),
                        url('https://media.istockphoto.com/id/1472395941/photo/amethyst-druse.jpg?s=612x612&w=0&k=20&c=6Z8RHP4GCe2iZQaVd6v_r-5FTAzQYzx7KXc18CKMtzw=') center/cover no-repeat;
            box-shadow: 0 8px 54px 0 rgba(187, 154, 247, 0.6), 0 1px 0 #47336F inset, 0 0 0 7px rgba(24, 18, 30, 0.53) inset;
            padding: 34px 54px 22px 54px;
            margin-bottom: 14px;
            min-width: 320px;
            max-width: 520px;
            overflow: hidden;
            animation: fadeInDown 0.8s ease-out;
        }
        .header-bg {
            pointer-events: none;
            position: absolute;
            inset: 0;
            border-radius: 32px 32px 0 0;
            z-index: 0;
            background: url('https://media.istockphoto.com/id/1472395941/photo/amethyst-druse.jpg?s=612x612&w=0&k=20&c=6Z8RHP4GCe2iZQaVd6v_r-5FTAzQYzx7KXc18CKMtzw=') center/cover no-repeat;
            opacity: 0.35;
        }
        .header-content { position: relative; z-index: 1; text-align: center; }
        .icon-wrapper {
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 98px;
            height: 98px;
            margin: 0 auto;
        }
        .icon {
            border-radius: 50%;
            border: 2.5px solid #FFD25A;
            width: 88px;
            height: 88px;
            box-shadow: 0 0 22px rgba(255, 210, 90, 0.33), 0 0 0 4px rgba(255, 210, 90, 0.13), 0 0 17px rgba(164, 141, 224, 0.33);
        }
        h1 {
            color: #000;
            letter-spacing: 0.04em;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 2.75em;
            text-shadow: 0 0 8px #FFF, 0 0 4px #FFF, 0 1px 12px #FFF, 0 0 1px #FFF;
            margin: 0 0 7px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2.5px solid #FFD25A;
            padding-bottom: 8px;
        }
        .subtitle {
            color: #fffbe8;
            font-size: 1.22em;
            margin-bottom: 7px;
            font-weight: 800;
            text-shadow: 0 1px 17px rgba(56, 18, 72, 0.53), 0 1px 0 #000;
        }
        .description {
            color: #FFD25A;
            font-size: 1.10em;
            letter-spacing: 0.04em;
            margin-bottom: 10px;
            font-weight: 700;
            text-shadow: 0 1px 7px rgba(40, 32, 75, 0.47), 0 0 1px #fff;
        }
        .quote {
            color: #F8EBFF;
            background: rgba(17, 7, 25, 0.93);
            border-left: 6px solid #D4A0E8;
            border-radius: 0 13px 13px 0;
            padding: 19px 32px 19px 25px;
            margin: 32px 0 0 0;
            font-style: italic;
            font-size: 1.12em;
            font-weight: 500;
            box-shadow: 0 3px 18px rgba(187, 154, 247, 0.4);
        }
        .quote strong { font-weight: 700; color: #BFAAFF; }
        .content-section {
            background: rgba(26, 27, 38, 0.8);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            box-shadow: 0 3px 36px rgba(187, 154, 247, 0.2);
            animation: fadeInUp 0.8s ease-out;
        }
        .content-section h2 {
            color: #BB9AF7;
            font-size: 1.8em;
            margin-bottom: 20px;
            text-shadow: 0 0 10px rgba(187, 154, 247, 0.5);
        }
        .theme-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .theme-card {
            background: rgba(19, 20, 28, 0.9);
            border-radius: 12px;
            padding: 20px;
            border: 2px solid rgba(187, 154, 247, 0.3);
            transition: all 0.3s ease;
        }
        .theme-card:hover {
            border-color: #BB9AF7;
            box-shadow: 0 5px 20px rgba(187, 154, 247, 0.4);
            transform: translateY(-3px);
        }
        .theme-card h3 {
            color: #D4A0E8;
            margin-bottom: 10px;
            font-size: 1.2em;
        }
        .theme-card p {
            color: #9AA5CE;
            font-size: 0.95em;
            line-height: 1.6;
        }
        .features-list {
            list-style: none;
            padding: 0;
        }
        .features-list li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(187, 154, 247, 0.1);
            color: #C0CAF5;
            font-size: 1.05em;
        }
        .features-list li:last-child { border-bottom: none; }
        .features-list li::before {
            content: "✨ ";
            color: #BB9AF7;
            font-size: 1.2em;
            margin-right: 10px;
        }
        .footer {
            text-align: center;
            padding: 30px 0;
            color: #9AA5CE;
            font-size: 0.95em;
        }
        .footer a {
            color: #BB9AF7;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .footer a:hover {
            color: #D4A0E8;
            text-shadow: 0 0 10px rgba(187, 154, 247, 0.5);
        }
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div style="text-align: center; margin-bottom: 20px;">
            <div class="header-block">
                <div class="header-bg"></div>
                <div class="header-content">
                    <div class="icon-wrapper">
                        <img src="https://i.postimg.cc/9Fm7nNXB/icon.png" alt="Geode Amethyst Icon" class="icon">
                    </div>
                    <h1>🪨 Geode Amethyst</h1>
                    <div class="subtitle">for Visual Studio Code</div>
                    <div class="description">
                        <span>6 variants &mdash; <span style="color:#D4A0E8;">Crystalline dark theme</span></span>
                    </div>
                    <blockquote class="quote">
                        <strong>"Rough on the outside, crystals within"</strong> —<br>
                        <span>Crystalline beauty hidden in darkness,<br> a theme forged in geological time</span>
                    </blockquote>
                </div>
            </div>
        </div>
        
        <div class="content-section">
            <h2>💎 Theme Variants</h2>
            <div class="theme-grid">
                <div class="theme-card">
                    <h3>Geode Amethyst</h3>
                    <p>Main theme — balanced crystalline purple</p>
                </div>
                <div class="theme-card">
                    <h3>Geode Amethyst Dawn</h3>
                    <p>Morning light shining through crystals</p>
                </div>
                <div class="theme-card">
                    <h3>Geode Amethyst Dusk</h3>
                    <p>Rich evening purple depths</p>
                </div>
                <div class="theme-card">
                    <h3>Geode Amethyst Midnight</h3>
                    <p>Deep cave darkness with high contrast</p>
                </div>
                <div class="theme-card">
                    <h3>Geode Amethyst Crystal</h3>
                    <p>Intensified crystalline facet reflections</p>
                </div>
                <div class="theme-card">
                    <h3>Geode Amethyst Cave</h3>
                    <p>The deepest and most immersive variant</p>
                </div>
            </div>
        </div>
        
        <div class="content-section">
            <h2>✨ Features</h2>
            <ul class="features-list">
                <li><strong>Semantic highlighting</strong> — Smart highlighting for variables, functions, and types</li>
                <li><strong>Rainbow brackets</strong> — 6 mineral colors for nested brackets</li>
                <li><strong>Git integration</strong> — Unique colors for modified, deleted, and new files</li>
                <li><strong>Full terminal support</strong> — 16 ANSI colors specifically matching the mineral palette</li>
                <li><strong>Eye comfort</strong> — Carefully calibrated contrast for long coding sessions</li>
                <li><strong>Mineral naming system</strong> — Each color has geological meaning</li>
            </ul>
        </div>
        
        <div class="content-section">
            <h2>🎨 Mineral Palette</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                <div style="background: rgba(157, 124, 216, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #9D7CD8;">
                    <strong style="color: #9D7CD8;">💜 Crystal</strong>
                    <div style="color: #9AA5CE; font-size: 0.9em; margin-top: 5px;">Keywords</div>
                </div>
                <div style="background: rgba(187, 154, 247, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #BB9AF7;">
                    <strong style="color: #BB9AF7;">💎 Facet</strong>
                    <div style="color: #9AA5CE; font-size: 0.9em; margin-top: 5px;">Boolean values</div>
                </div>
                <div style="background: rgba(115, 218, 202, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #73DACA;">
                    <strong style="color: #73DACA;">💚 Emerald</strong>
                    <div style="color: #9AA5CE; font-size: 0.9em; margin-top: 5px;">Strings</div>
                </div>
                <div style="background: rgba(122, 162, 247, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #7AA2F7;">
                    <strong style="color: #7AA2F7;">💙 Sapphire</strong>
                    <div style="color: #9AA5CE; font-size: 0.9em; margin-top: 5px;">Functions</div>
                </div>
                <div style="background: rgba(42, 195, 222, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #2AC3DE;">
                    <strong style="color: #2AC3DE;">🌊 Aquamarine</strong>
                    <div style="color: #9AA5CE; font-size: 0.9em; margin-top: 5px;">Types, classes</div>
                </div>
                <div style="background: rgba(224, 175, 104, 0.2); padding: 15px; border-radius: 10px; border-left: 4px solid #E0AF68;">
                    <strong style="color: #E0AF68;">🌟 Topaz</strong>
                    <div style="color: #9AA5CE; font-size: 0.9em; margin-top: 5px;">Constants</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>💖 <strong>Made with love</strong> for developers who appreciate beauty in code</p>
            <p style="margin-top: 10px;">
                <a href="https://github.com/tettetrouse0t/geode-amethyst-theme">GitHub</a> | 
                <a href="https://marketplace.visualstudio.com/items?itemName=tettetrouse0t.geode-amethyst-theme">VS Code Marketplace</a>
            </p>
            <p style="margin-top: 15px; font-size: 0.85em; color: #565F89;">
                "In the darkness of the cave, crystals catch the light"
            </p>
        </div>
    </div>
</body>
</html>`;

function activate(context) {
    const showWelcome = vscode.commands.registerCommand('geode-amethyst.showWelcome', () => {
        const panel = vscode.window.createWebviewPanel(
            'geodeWelcome',
            'Geode Amethyst - Welcome',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );
        panel.webview.html = getWelcomeHTML();
    });

    context.subscriptions.push(showWelcome);

    const isFirstTime = !context.globalState.get('geode-welcome-shown');
    if (isFirstTime) {
        vscode.commands.executeCommand('geode-amethyst.showWelcome');
        context.globalState.update('geode-welcome-shown', true);
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
